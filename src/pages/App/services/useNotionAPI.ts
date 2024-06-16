import { useEffect, useReducer, useState } from "react";
import { getTasksNotCompleted } from "../../../client/notion-api";
import { formatDate } from "../../../utils/date";
import { Task } from "../../../interfaces/task.interface";


const useTasks = (typeTask: string) => {
    const [tasksToday, setTasksToday] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
           
            if(typeTask === "today") {
               const tasksToday =  await getTaskToday()
               setTasksToday(tasksToday)
            }
        };

        fetchData();
    }, []);

    return { tasksToday };
}

const getTaskToday = async (): Promise<Task[]> => {
    try {
        const res = await getTasksNotCompleted();
        if (!res) {
            console.log('No hay tareas pendientes');
            return [];
        }
        const tasks = res.data.results.map((task: any) => {
            return {
                text: task.properties['Nombre'].title[0].plain_text,
                limitDate: formatDate(task.properties['Fecha Limite'].date?.start),
                priority: task.properties['Prioridad'].select?.name.toLocaleUpperCase(),
                type: task.properties['Tipo'].select?.name,
                url: task.url
            }
        });
        return tasks;
    } catch (error) {
        console.error('Error al obtener datos de la API de Notion:', error);
        return []
    }
}



export { useTasks }	