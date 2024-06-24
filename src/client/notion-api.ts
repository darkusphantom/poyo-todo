import axios from "axios"
import { API_ID_DB_TASKS, headerNotionConfig } from "../config/notionConfig"
import { getTodayDate, getTomorrowDate } from "../utils/date"
import { checkErrorNotion } from "../utils/errorHandler"
import { TaskItem } from "../interfaces/task.interface"

/**
 * Retrieves tasks that are not completed from the Notion database.
 *
 * @return {Promise<NotionDatabaseAPI | null>} A promise that resolves with the data of the tasks or null if an error occurs.
 */
export const getTasksNotCompleted = async () => {
    try {
        const filter = {
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

        const sorts = [
            {
                "property": "Fecha Limite",
                "direction": "ascending"
            },
            {
                "property": "Tipo",
                "direction": "ascending"
            }
        ]

        const data = await axios.post(`/api/v1/databases/${API_ID_DB_TASKS}/query`,
            { filter, sorts },
            { headers: headerNotionConfig }
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
        const filter = {
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

        const sorts = [
            {
                "property": "Fecha Limite",
                "direction": "ascending"
            }
        ]

        const data = await axios.post(`/api/v1/databases/${API_ID_DB_TASKS}/query`,
            { filter, sorts },
            { headers: headerNotionConfig }
        )

        return data;
    } catch (error: unknown) {
        checkErrorNotion(error)
        console.error(error)
        return null
    }
}

export const getTasksForTomorrow = async () => {
    try {
        const filter = {
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

        const sorts = [
            {
                "property": "Fecha Limite",
                "direction": "ascending"
            }
        ]

        const data = await axios.post(`/api/v1/databases/${API_ID_DB_TASKS}/query`,
            { filter, sorts },
            { headers: headerNotionConfig }
        )
        return data;
    } catch (error: unknown) {
        checkErrorNotion(error)
        console.error(error)
        return null
    }
}

export const getTasksToBeDone = async () => {
    try {
        const filter = {
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

        const sorts = [
            {
                "property": "Fecha Limite",
                "direction": "ascending"
            }
        ]

        const data = await axios.post(`/api/v1/databases/${API_ID_DB_TASKS}/query`,
            { filter, sorts },
            { headers: headerNotionConfig }
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
        const filter = {
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

        const sorts = [
            {
                "property": "Fecha Limite",
                "direction": "ascending"
            }
        ]

        const data = await axios.post(`/api/v1/databases/${API_ID_DB_TASKS}/query`,
            { filter, sorts },
            { headers: headerNotionConfig }
        )
        return data;
    } catch (error: unknown) {
        checkErrorNotion(error)
        console.error("Error al obtener los datos:", error)
        return null
    }
}

export const updateTask = async (task: TaskItem) => {
    try {
        const updatedTask = {
            properties: {
                Check: {
                    checkbox: task.completed
                }
            }
        }
        const data = await axios.patch(`/api/v1/pages/${task.id}`, updatedTask, { headers: headerNotionConfig })
        return data
    } catch (error: unknown) {
        checkErrorNotion(error)
        console.error("Error al obtener los datos:", error)
        return null
    }
}

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
        const data = await axios.patch(`/api/v1/pages/${task.id}`, updatedTask, { headers: headerNotionConfig })
        return data
    } catch (error: unknown) {
        checkErrorNotion(error)
        console.error("Error al obtener los datos:", error)
        return null
    }
}