import { NotionDatabase } from "../interfaces/notion-db.interface";
import { TaskItem } from "../interfaces/task.interface";
import { formatDate } from "./date";

export const generateToDoList = (tasks: string[]): any[] => {
    return tasks.map((text: string) => ({
        type: "to_do",
        to_do: {
            rich_text: [
                {
                    type: "text",
                    text: {
                        content: text,
                        link: null
                    }
                }
            ],
            checked: false
        }
    }));
};

export const getFormatTask = (tasks: any[]): TaskItem[] => {
    if (!tasks || tasks.length === 0) {
        console.info('No hay tareas pendientes');
        return [];
    }

    return tasks.map((task: any) => ({
        id: task.id,
        completed: task.properties['Check'].checkbox,
        text: task.properties['Nombre'].title[0]?.plain_text || '',
        limitDate: formatDate(task.properties['Fecha Limite'].date?.start),
        priority: task.properties['Prioridad'].select?.name.toLocaleUpperCase(),
        type: task.properties['Tipo'].select?.name,
        url: task.url
    }));
};
