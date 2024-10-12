import { API_KEY_NOTION, APP_PASSWORD, APP_USERNAME } from '../config';
import { queryDatabase } from './notionService';

// Función para autenticar al usuario
export const authenticateUser = async (username: string, password: string): Promise<string | null> => {
  // Aquí deberías implementar la lógica real de autenticación con la API de Notion
  // Este es solo un ejemplo simplificado
  if (username === APP_USERNAME && password === APP_PASSWORD) {
    return API_KEY_NOTION
  }
  console.log('Credenciales incorrectas');
  return null;
};

// Función para obtener datos de Notion
export const getNotionData = async (databaseId: string) => {
  try {
    return await queryDatabase(databaseId);
  } catch (error) {
    console.error('Error al obtener datos de Notion:', error);
    throw error;
  }
};
