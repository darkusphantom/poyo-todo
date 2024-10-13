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
    id: string;
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

/**
 * Interfaz para crear tareas
 * 
 * @interface CreateTask
 * @property {string} title - Indica el titulo de la tarea
 * @property {priorityTask} priority - Indica la prioridad de la tarea
 * @property {string} area - Indica la área de la tarea
 * @property {effortTask} effort - Indica el esfuerzo de la tarea
 * @property {string} type - Indica el tipo de la tarea
 */
export interface CreateTask {
    title: string
    priority: priorityTask
    area: string
    effort: effortTask
    type: string
    startDate?: any
    endDate?: any
}


/**
 * Tipo enumerado que representa las prioridades de una tarea.
 * La prioridad más alta es P1 y la más baja es P4.
 *
 * @type {('P1' | 'P2' | 'P3' | 'P4')}
 */
export type priorityTask = 'P1' | 'P2' | 'P3' | 'P4'

/**
 * Tipo enumerado que representa el esfuerzo que se le ha asignado a una tarea.
 * El esfuerzo más bajo es 1 y el más alto es 4.
 *
 * @type {('1' | '2' | '3' | '4')}
 */
export type effortTask = '1' | '2' | '3' | '4'
