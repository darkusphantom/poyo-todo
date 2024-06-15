import { useEffect, useState } from "react";
import { getTasksNotCompleted } from "../../../client/notion-api";
import { formatDate } from "../../../utils/date";


const todayTaskNotCompleted = () => {
    const [tasksToday, setTasksToday] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getTasksNotCompleted();
                if (!res) {
                    console.log('No hay tareas pendientes');
                    return [];
                }
                const tasks = res.data.results.map((task: any) => {
                    return {
                        name: task.properties['Nombre'].title[0].plain_text,
                        limitDate: formatDate(task.properties['Fecha Limite'].date?.start),
                        priority: task.properties['Prioridad'].select?.name.toLocaleUpperCase(),
                        type: task.properties['Tipo'].select?.name,
                        url: task.url
                    }
                });
                setTasksToday(tasks);
            } catch (error) {
                console.error('Error al obtener datos de la API de Notion:', error);
            }
        };

        fetchData();
    }, []);

    return { tasksToday };
}

export { todayTaskNotCompleted }	