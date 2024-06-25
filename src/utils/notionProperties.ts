import { NotionDatabase } from "../interfaces/notion-db.interface";
import { formatDate } from "./date";

export const generateToDoList = (task: string[]) => {
    return task.map((text: string) => ({
        "type": "to_do",
        "to_do": {
            "rich_text": [
                {
                    "type": "text",
                    "text": {
                        "content": text,
                        "link": null
                    }
                }
            ],
            "checked": false
        }
    }))
}

export const getFormatTask = (task: any) => {
    try {
        if (!task) {
            console.info('No hay tareas pendientes');
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