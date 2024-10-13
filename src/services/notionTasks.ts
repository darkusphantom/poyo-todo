import axios from "axios"
import { API_ID_DB_TASKS } from "../config"
import { getTodayDate } from "../utils/date"
import { checkErrorNotion } from "../utils/errorHandler"
import { CreateTask, TaskItem } from "../interfaces/task.interface"
import { generateToDoList } from "../utils/notionProperties"
import { getEmojiByTaskArea } from "../utils/notionColor"
import { baseNotionApiClient } from "./config"
import { NotionFilter, NotionSort } from "../interfaces/notion-db.interface"

/**
 * Retrieves tasks that are not completed from the Notion database.
 *
 * @return {Promise<NotionDatabaseAPI | null>} A promise that resolves with the data of the tasks or null if an error occurs.
 */
export const getTasksNotCompleted = async () => {
    try {
        const filter: NotionFilter = {
            and: [
                {
                    property: "Check",
                    checkbox: {
                        equals: false
                    }
                },
                {
                    property: 'Tipo',
                    select: {
                        does_not_equal: '🗑️ Papelera',
                    },
                },
            ],
        }

        const sorts: NotionSort[] = [
            {
                "property": "Fecha Limite",
                "direction": "ascending"
            },
            {
                "property": "Tipo",
                "direction": "ascending"
            }
        ]

        const data = await baseNotionApiClient.post<any>(`/v1/databases/${API_ID_DB_TASKS}/query`,
            { filter, sorts },
        )

        return data;
    } catch (error: unknown) {
        checkErrorNotion(error)
        console.error(error)
        return null
    }
}

/**
 * Retrieves tasks that are not completed from the Notion database.
 *
 * @return {Promise<NotionDatabaseAPI | null>} A promise that resolves with the data of the tasks or null if an error occurs.
 */
export const getTasksToday = async () => {
    try {
        const filter: NotionFilter = {
            or: [
                // Filtrado por acciones
                {
                    and: [
                        {
                            property: "Check",
                            checkbox: {
                                equals: false
                            }
                        },
                        {
                            property: "Fecha Limite",
                            date: {
                                on_or_before: getTodayDate()
                            }
                        },
                        {
                            property: 'Tipo',
                            select: {
                                equals: '✅ Accionable',
                            },
                        },
                    ],
                },
                // Filtrado por acciones
                {
                    and: [
                        {
                            property: "Fecha Limite",
                            date: {
                                equals: getTodayDate()
                            }
                        },
                        {
                            property: 'Tipo',
                            select: {
                                equals: '✅ Accionable',
                            },
                        },
                    ],
                },
                // Filtrado por recordatorios
                {
                    and: [
                        {
                            property: "Check",
                            checkbox: {
                                equals: false
                            }
                        },
                        {
                            property: "Fecha Limite",
                            date: {
                                on_or_before: getTodayDate()
                            }
                        },
                        {
                            property: 'Tipo',
                            select: {
                                equals: '📩 Recordatorio',
                            },
                        },
                    ],
                },
            ],
        }

        const sorts: NotionSort[] = [
            {
                "property": "Fecha Limite",
                "direction": "ascending"
            }
        ]

        const data = await baseNotionApiClient.post(`/v1/databases/${API_ID_DB_TASKS}/query`,
            { filter, sorts },
        )

        return data;
    } catch (error: unknown) {
        checkErrorNotion(error)
        console.error(error)
        return null
    }
}

/**
 * Retrieves tasks for tomorrow from the Notion database.
 *
 * @return {Promise<NotionDatabaseAPI | null>} A promise that resolves with the data of the tasks or null if an error occurs.
 */
export const getTasksForTomorrow = async () => {
    try {
        const filter: NotionFilter = {
            or: [
                // Filtrado por acciones
                {
                    and: [
                        {
                            property: "Check",
                            checkbox: {
                                equals: false
                            }
                        },
                        {
                            property: "Fecha Limite",
                            date: {
                                after: getTodayDate()
                            }
                        },
                        {
                            property: 'Tipo',
                            select: {
                                equals: '✅ Accionable',
                            },
                        },
                    ],
                },
                // Filtrado por recordatorios
                {
                    and: [
                        {
                            property: "Check",
                            checkbox: {
                                equals: false
                            }
                        },
                        {
                            property: "Fecha Limite",
                            date: {
                                after: getTodayDate()
                            }
                        },
                        {
                            property: 'Tipo',
                            select: {
                                equals: '📩 Recordatorio',
                            },
                        },
                    ],
                },
            ],
        }

        const sorts: NotionSort[] = [
            {
                "property": "Fecha Limite",
                "direction": "ascending"
            }
        ]

        const data = await baseNotionApiClient.post(`/v1/databases/${API_ID_DB_TASKS}/query`,
            { filter, sorts },
        )
        return data;
    } catch (error: unknown) {
        checkErrorNotion(error)
        console.error(error)
        return null
    }
}

/**
 * Retrieves tasks to be done from the Notion database.
 *
 * @return {Promise<NotionDatabaseAPI | null>} A promise that resolves with the data of the tasks or null if an error occurs.
 */
export const getTasksToBeDone = async () => {
    try {
        const filter: NotionFilter = {
            and: [
                {
                    property: "Check",
                    checkbox: {
                        equals: false
                    }
                },
                {
                    property: 'Tipo',
                    select: {
                        equals: '🗒️ Para hacer',
                    },
                },
            ],

        }

        const sorts: NotionSort[] = [
            {
                "property": "Fecha Limite",
                "direction": "ascending"
            }
        ]

        const data = await baseNotionApiClient.post(`/v1/databases/${API_ID_DB_TASKS}/query`,
            { filter, sorts },
        )
        return data;
    } catch (error: unknown) {
        checkErrorNotion(error)
        console.error(error)
        return null
    }
}

export const getTasksSomeday = async () => {
    try {
        const filter: NotionFilter = {
            and: [
                {
                    property: "Check",
                    checkbox: {
                        equals: false
                    }
                },
                {
                    property: 'Tipo',
                    select: {
                        equals: '✨ Algun dia',
                    },
                },
            ],

        }

        const sorts: NotionSort[] = [
            {
                "property": "Fecha Limite",
                "direction": "ascending"
            }
        ]

        const data = await baseNotionApiClient.post(`/v1/databases/${API_ID_DB_TASKS}/query`, { filter, sorts })
        return data;
    } catch (error: unknown) {
        checkErrorNotion(error)
        console.error("Error al obtener los datos:", error)
        return null
    }
}

/**
 * Updates a task in the Notion database.
 *
 * @param {TaskItem} task - The task to update.
 * @return {Promise<NotionPageAPI | null>} A promise that resolves with the data of the updated task or null if an error occurs.
 */
export const updateTask = async (task: TaskItem) => {
    try {
        const updatedTask = {
            properties: {
                Check: {
                    checkbox: task.completed
                }
            }
        }
        const data = await baseNotionApiClient.patch(`/v1/pages/${task.id}`, updatedTask)
        return data
    } catch (error: unknown) {
        checkErrorNotion(error)
        console.error("Error al obtener los datos:", error)
        return null
    }
}

/**
 * Deletes a task in the Notion database.
 *
 * @param {TaskItem} task - The task to delete.
 * @return {Promise<NotionPageAPI | null>} A promise that resolves with the data of the deleted task or null if an error occurs.
 */
export const deleteTask = async (task: TaskItem) => {
    try {
        const updatedTask = {
            "properties": {
                "Tipo": {
                    "select": {
                        "name": "🗑️ Papelera"
                    }
                }
            }
        }
        const data = await baseNotionApiClient.patch(`/v1/pages/${task.id}`, updatedTask)
        return data
    } catch (error: unknown) {
        checkErrorNotion(error)
        console.error("Error al obtener los datos:", error)
        return null
    }
}

/**
 * Creates a new task in the Notion database.
 *
 * @param {CreateTask} task - The task to create.
 * @return {Promise<NotionPageAPI | null>} A promise that resolves with the data of the created task or null if an error occurs.
 */
export const createNewTask = async (task: CreateTask) => {
    try {
        const body = {
            "parent": {
                "database_id": API_ID_DB_TASKS
            },
            "icon": {
                "emoji": getEmojiByTaskArea(task.area)
            },
            "properties": {
                "Check": {
                    "type": "checkbox",
                    "checkbox": false
                },
                "Esfuerzo": {
                    "type": "select",
                    "select": {
                        "name": task.effort
                    }
                },
                "Área": {
                    "type": "select",
                    "select": {
                        "name": task.area
                    }
                },
                "Tipo": {
                    "type": "select",
                    "select": {
                        "name": task.type
                    }
                },
                "Fecha Limite": {
                    "type": "date",
                    "date": {
                        "start": task.startDate ? task.startDate : getTodayDate(),
                        "end": task.endDate ? task.endDate : null,
                        "time_zone": null
                    }
                },
                "Prioridad": {
                    "type": "select",
                    "select": {
                        "name": task.priority
                    }
                },
                "Proyectos": {
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "Nombre": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": task.title,
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": task.title,
                            "href": null
                        }
                    ]
                }
            },
            "children": [
                ...generateToDoList(["Tarea 1", "Tarea 2", "Tarea 3"])
            ]
        }

        const data = await baseNotionApiClient.post(`/v1/pages`, body)
        return data
    } catch (error: unknown) {
        checkErrorNotion(error)
        console.error("Error al crear la tarea:", error)
        return null
    }
}
