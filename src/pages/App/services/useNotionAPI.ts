import { useEffect } from "react";
import { getTasksNotCompleted } from "../../../client/notion-api";


const todayTaskNotCompleted = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getTasksNotCompleted();

                console.log(data?.data);
            } catch (error) {
                console.error('Error al obtener datos de la API de Notion:', error);
            }
        };

        fetchData();
    }, []); // Se ejecutará solo una vez al cargar el componente

}

export { todayTaskNotCompleted }	