import axios from 'axios';
import { API_KEY_NOTION, APP_PASSWORD, APP_USERNAME } from '../config/notionConfig';

const NOTION_API_KEY = API_KEY_NOTION

// Función para autenticar al usuario
export const authenticateUser = async (username: string, password: string): Promise<string | null> => {
  // Aquí deberías implementar la lógica real de autenticación con la API de Notion
  // Este es solo un ejemplo simplificado
  if (username === APP_USERNAME && password === APP_PASSWORD) {
    return API_KEY_NOTION
  }

  console.log('Credenciales incorrectas')
  return null
};

// Función para obtener datos de Notion
export const getNotionData = async (databaseId: string) => {
  if (!NOTION_API_KEY) {
    throw new Error('Notion API key no configurada');
  }

  try {
    const response = await axios.post(`https://api.notion.com/v1/databases/${databaseId}/query`, {}, {
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28', // Asegúrate de usar la versión más reciente
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error al obtener datos de Notion:', error);
    throw error;
  }
};
