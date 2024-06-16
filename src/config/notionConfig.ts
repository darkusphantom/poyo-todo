export const API_KEY_NOTION = import.meta.env.VITE_NOTION_TOKEN
export const API_ID_DB_TASKS = import.meta.env.VITE_ID_DATABASE_TASK
export const API_ID_DB_HABITS = import.meta.env.VITE_ID_DATABASE_TRACK_HABITS

// Header COnfig Notion
export const headerNotionConfig = {
    Authorization: `Bearer ${API_KEY_NOTION}`,
    'Notion-Version': '2022-06-28',
    'Content-Type': 'application/json'
}