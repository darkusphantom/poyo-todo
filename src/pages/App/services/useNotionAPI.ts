import { useEffect } from "react";
import { getTasksNotCompleted } from "../../../client/notion-api";
import { formatDate } from "../../../utils/date";


const todayTaskNotCompleted = () => {
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
                console.log(tasks[0])
                // const tasksToShow = tasks.map((task: any, index: number) => {
                //     const limitDate = formatDate(task.task['Fecha Limite'].date?.start)
                //     const taskName = task.task['Nombre'].title[0].plain_text

                //     return `${index + 1}. ${taskName} (${task.task['Prioridad'].select?.name.toLocaleUpperCase()}) | ${limitDate}`
                // })

                // const message = `Total tareas pendientes: ${tasks.length}\n\n${tasksToShow.join('\n\n')}`

                // console.log(res.data);
            } catch (error) {
                console.error('Error al obtener datos de la API de Notion:', error);
            }
        };

        fetchData();
    }, []); // Se ejecutará solo una vez al cargar el componente

}

export { todayTaskNotCompleted }	