/**
 * Formats a given date into a string representation in the format "dd-mm-yyyy - hh:mm".
 *
 * @param {any} date - The date to be formatted. It can be a string, number, or Date object.
 * @return {string} The formatted date string. If the input date is falsy, it returns "No hay fecha".
 */
export const formatDate = (date: any): string => {
    if (!date) return 'No hay fecha'

    const originalDate = new Date(date);

    const day = originalDate.getDate().toString().padStart(2, '0');
    const month = (originalDate.getMonth() + 1).toString().padStart(2, '0'); // Los monthes en JavaScript empiezan en 0
    const year = originalDate.getFullYear();

    const hour = originalDate.getHours().toString().padStart(2, '0');
    const minutes = originalDate.getMinutes().toString().padStart(2, '0');

    const formattedDate = `${hour}:${minutes}  -  ${day}-${month}-${year}`;
    return formattedDate
}

/**
 * Returns the date of tomorrow.
 *
 * @return {Date} The date of tomorrow.
 */
export const getTomorrowDate = () => {
    const today = new Date();
    console.log("TODAY: ", today)
    const tomorrow = today.setDate(today.getDate() + 1);
    console.log("TOMORROW: ", tomorrow)
    return new Date(tomorrow);
}

export const getTodayDate = () => {
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0'); // Asegura que el día siempre tenga dos dígitos
    let month = String(today.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript comienzan desde 0
    let year = today.getFullYear();

    return `${year}-${month}-${day}`
}

export const formatEmotions = (emotion: string | undefined): string => {
    if (emotion === "Feliz") {
        return "😁"
    }

    if (emotion === "Alegre") {
        return "😊"
    }

    if (emotion === "Neutral") {
        return "😐"
    }

    if (emotion === "Triste") {
        return "😢"
    }


    if (emotion === "Enojado") {
        return "😡"
    }

    return '❓'
}

export const formatHabitsByMonth = (habits: any[], index: number) => {
    const date = new Date(habits[index].habit['Nombre'].title[0].plain_text)
    const currentMonth = date.toLocaleString('default', { month: 'long' })
    
    if (index === 0 || currentMonth !== new Date(habits[index - 1].habit['Nombre'].title[0].plain_text).toLocaleString('default', { month: 'long' })) {
        return `\n${currentMonth}\n${habits[index].habit['Nombre'].title[0].plain_text}: `
    }
    return ''
}