import { Client } from "@notionhq/client"

export const API_KEY_NOTION = import.meta.env.NOTION_TOKEN
export const API_ID_DB_TASKS = import.meta.env.ID_DATABASE_TASK
export const API_ID_DB_HABITS = import.meta.env.ID_DATABASE_TRACK_HABITS

// Initializing a client
export const notion = new Client({
    auth: API_KEY_NOTION,
})
