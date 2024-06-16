/**
 * Interface que representa una tarea.
 * 
 * @interface Task
 * @property {string} limitDate - Fecha límite de la tarea.
 * @property {string} text - Nombre de la tarea.
 * @property {string} priority - Prioridad de la tarea.
 * @property {string} type - Tipo de tarea.
 * @property {string} url - URL asociada a la tarea.
 */
export interface Task {
    limitDate: string;
    text: string;
    priority: string;
    type: string;
    url: string;
}

/**
 * Interfaz que agrega la propiedad completed a la interfaz Task.
 * 
 * @interface TaskItem
 * @extends Task
 * @property {boolean} completed - Indica si la tarea ha sido completada.
 */
export interface TaskItem extends Task {
    completed: boolean
}
