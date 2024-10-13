import { useEffect, useState, useCallback } from "react";
import { getTasksToday, getTasksSomeday, getTasksToBeDone, getTasksNotCompleted, getTasksForTomorrow, createNewTask, updateTask, deleteTask as deleteNotionTask } from "../../../services/notionTasks";
import { CreateTask, TaskItem } from "../../../interfaces/task.interface";
import { getFormatTask } from "../../../utils/notionProperties";

const useTasks = () => {
    const [tasks, setTasks] = useState<{
        notCompleted: TaskItem[];
        today: TaskItem[];
        tomorrow: TaskItem[];
        toBeDone: TaskItem[];
        someday: TaskItem[];
    }>({
        notCompleted: [],
        today: [],
        tomorrow: [],
        toBeDone: [],
        someday: [],
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTasks = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const [notCompleted, today, tomorrow, toBeDone, someday] = await Promise.all([
                getTasksNotCompleted(),
                getTasksToday(),
                getTasksForTomorrow(),
                getTasksToBeDone(),
                getTasksSomeday()
            ]);

            setTasks({
                notCompleted: getFormatTask(notCompleted?.data.results),
                today: getFormatTask(today?.data.results),
                tomorrow: getFormatTask(tomorrow?.data.results),
                toBeDone: getFormatTask(toBeDone?.data.results),
                someday: getFormatTask(someday?.data.results),
            });
        } catch (error) {
            console.error("Error fetching tasks:", error);
            setError("Error al cargar las tareas. Por favor, intente de nuevo.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    const saveTask = async (task: CreateTask): Promise<any> => {
        const newTask = await createNewTask(task);
        await fetchTasks(); // Refetch tasks after creating a new one
        return newTask;
    };

    const completeTask = async (task: TaskItem): Promise<any> => {
        try {
            setTasks(prevTasks => ({
                ...prevTasks,
                notCompleted: prevTasks.notCompleted.filter(t => t.id !== task.id),
            }));
            await updateTask(task);
            return true;
        } catch (error) {
            console.error("Error al completar la tarea:", error);
            return false;
        }
    };

    const deleteTask = async (task: TaskItem): Promise<any> => {
        try {
            setTasks(prevTasks => ({
                notCompleted: prevTasks.notCompleted.filter(t => t.id !== task.id),
                today: prevTasks.today.filter(t => t.id !== task.id),
                tomorrow: prevTasks.tomorrow.filter(t => t.id !== task.id),
                toBeDone: prevTasks.toBeDone.filter(t => t.id !== task.id),
                someday: prevTasks.someday.filter(t => t.id !== task.id),
            }));
            await deleteNotionTask(task);
            return true;
        } catch (error) {
            console.error("Error al eliminar la tarea:", error);
            return false;
        }
    };

    return {
        ...tasks,
        loading,
        error,
        saveTask,
        completeTask,
        deleteTask,
        refetchTasks: fetchTasks,
    };
};

export { useTasks };
