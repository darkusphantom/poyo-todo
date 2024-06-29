import { useEffect, useState } from "react";
import { getTasksToday, getTasksSomeday, getTasksToBeDone, getTasksNotCompleted, getTasksForTomorrow, createNewTask } from "../../../client/notion-api";
import { CreateTask } from "../../../interfaces/task.interface";
import { getFormatTask } from "../../../utils/notionProperties";
import { NotionDatabase } from "../../../interfaces/notion-db.interface";


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

    const saveTask = async (task: CreateTask): Promise<any> => {
        const newTask = await createNewTask(task)
        return newTask
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



export { useTasks }	