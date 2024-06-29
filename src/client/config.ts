import axios from "axios";
import { API_KEY_NOTION, BASE_URL_NOTION } from "../config/notionConfig";

// Header COnfig Notion
export const headerNotionConfig = {
    Authorization: `Bearer ${API_KEY_NOTION}`,
    'Notion-Version': '2022-06-28',
    'Content-Type': 'application/json'
}

export const baseNotionApiClient = axios.create({
    baseURL: BASE_URL_NOTION || '',
    headers: {
        Authorization: `Bearer ${API_KEY_NOTION}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
    },
})
