export const API_KEY_NOTION = import.meta.env.VITE_NOTION_TOKEN
export const API_ID_DB_TASKS = import.meta.env.VITE_ID_DATABASE_TASK
export const API_ID_DB_HABITS = import.meta.env.VITE_ID_DATABASE_TRACK_HABITS
export const BASE_URL_NOTION = import.meta.env.VITE_NOTION_URL
export const APP_USERNAME = import.meta.env.VITE_APP_USERNAME
export const APP_PASSWORD = import.meta.env.VITE_APP_PASSWORD
export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api'  // Esto irá al proxy en producción
  : '/api'; // Esto irá al proxy de desarrollo de Vite
