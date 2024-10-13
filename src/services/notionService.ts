import { baseNotionApiClient } from "./config";

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos en milisegundos 
const cache: { [key: string]: { data: any; timestamp: number } } = {};

const getCachedData = (key: string) => {
    const cachedItem = cache[key];
    if (cachedItem && Date.now() - cachedItem.timestamp < CACHE_DURATION) {
        return cachedItem.data;
    }
    return null;
};

const setCachedData = (key: string, data: any) => {
    cache[key] = { data, timestamp: Date.now() };
};

export const queryDatabase = async (databaseId: string, filter = {}) => {
    const cacheKey = `database_${databaseId}_${JSON.stringify(filter)}`;
    const cachedData = getCachedData(cacheKey);

    if (cachedData) {
        return cachedData;
    }

    try {
        const response = await baseNotionApiClient.post(`/v1/databases/${databaseId}/query`, {});
        setCachedData(cacheKey, response.data);
        return response.data;
    } catch (error) {
        console.error('Error al consultar la base de datos de Notion:', error);
        throw error;
    }
};

export const getPage = async (pageId: string) => {
    try {
        const response = await baseNotionApiClient.get(`/pages/${pageId}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener la página de Notion:', error);
        throw error;
    }
};

export const updatePage = async (pageId: string, properties: any) => {
    try {
        const response = await baseNotionApiClient.patch(`/pages/${pageId}`, { properties });
        return response.data;
    } catch (error) {
        console.error('Error al actualizar la página de Notion:', error);
        throw error;
    }
};
