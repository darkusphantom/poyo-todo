import axios from "axios";
import { API_KEY_NOTION } from "../config";

const NOTION_API_BASE_URL = '/api'
// const NOTION_VERSION = '2022-06-28'
const NOTION_VERSION = '2022-02-22'

// Header COnfig Notion
export const headerNotionConfig = {
    Authorization: `Bearer ${API_KEY_NOTION}`,
    'Notion-Version': NOTION_VERSION,
    'Content-Type': 'application/json'
}

/**
 * Base Client Notion: contiene la configuración para conectarse a la API de Notion
 * 
 */
export const baseNotionApiClient = axios.create({
    baseURL: NOTION_API_BASE_URL,
    headers: {
        Authorization: `Bearer ${API_KEY_NOTION}`,
        'Notion-Version': NOTION_VERSION,
        'Content-Type': 'application/json'
    },
})
