import { useEffect, useState } from "react";
import { getTasksToday, getTasksSomeday, getTasksToBeDone, getTasksNotCompleted, getTasksForTomorrow } from "../../../client/notion-api";
import { formatDate } from "../../../utils/date";
import { TaskItem } from "../../../interfaces/task.interface";


const useTasks = () => {
    const [tasksNotCompleted, setTasksNotCompleted] = useState<any[]>([]);
    const [tasksToday, setTasksToday] = useState<any[]>([]);
    const [tasksTomorrow, setTasksTomorrow] = useState<any[]>([]);
    const [tasksToBeDone, setTasksToBeDone] = useState<any[]>([]);
    const [tasksForSomeday, setTasksForSomeday] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = () => {
            setTimeout(async () => {
                setLoading(true);
                const tasksNotCompleted = await getTasksNotCompleted();
                setTasksNotCompleted(getFormatTask(tasksNotCompleted?.data.results))

                const tasksToday = await getTasksToday();
                setTasksToday(getFormatTask(tasksToday?.data.results))

                const tasksTomorrow = await getTasksForTomorrow();
                setTasksTomorrow(getFormatTask(tasksTomorrow?.data.results))

                const tasksToBeDone = await getTasksToBeDone()
                setTasksToBeDone(getFormatTask(tasksToBeDone?.data.results))

                const tasksSomeday = await getTasksSomeday()
                setTasksForSomeday(getFormatTask(tasksSomeday?.data.results))

                setLoading(false);
            }, 3000);

        };

        fetchData();
    }, []);

    const saveTask = (task: TaskItem) => {
        console.log(task)
    }

    return {
        tasksNotCompleted,
        tasksToday,
        tasksTomorrow,
        tasksToBeDone,
        tasksForSomeday,
        setTasksToday,
        setTasksTomorrow,
        setTasksToBeDone,
        setTasksForSomeday,
        loading,
        saveTask
    };
}

const getFormatTask = (task: any) => {
    try {
        if (!task) {
            console.log('No hay tareas pendientes');
            return [];
        }
        const tasks = task.map((task: any) => {
            return {
                id: task.id,
                completed: task.properties['Check'].checkbox,
                text: task.properties['Nombre'].title[0].plain_text,
                limitDate: formatDate(task.properties['Fecha Limite'].date?.start),
                priority: task.properties['Prioridad'].select?.name.toLocaleUpperCase(),
                type: task.properties['Tipo'].select?.name,
                url: task.url
            }
        });
        return tasks;
    } catch (error) {
        console.error('Error al obtener las tareas:', error);
        return []
    }
}

export { useTasks }	