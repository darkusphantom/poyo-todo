export const getTaskPriorityColor = (property: string): string => {
    switch (property) {
        case 'p1':
            return 'red';
        case 'p2':
            return 'yellow';
        case 'p3':
            return 'blue';
        case 'p4':
            return 'grey';
        default:
            return 'default';
    }
}

export const getTaskEffortColor = (property: string): string => {
    switch (property) {
        case '1':
            return 'default';
        case '2':
            return 'green';
        case '3':
            return 'yellow';
        case '4':
            return 'red';
        default:
            return 'default';
    }
}


export const getTaskAreaColor = (property: string): string => {
    switch (property) {
        case '🌱 Crecimiento Personal':
            return 'red';
        case '📚 Estudios':
            return 'blue';
        case '💌 Relaciones Personales':
            return 'pink';
        case '🥦 Salud':
            return 'green';
        case '💼 Trabajo':
            return 'brown';
        case '🤑 Finanzas':
            return 'orange';
        case '📝 Organización':
            return 'yellow';
        default:
            return 'default';
    }
}

export const getTaskColorByType = (type: string): string => {
    switch(type) {
        case '📩 Recordatorio':
            return 'red';
        case '📥 Bandeja de Entrada':
            return 'blue';
        case '✅ Accionable':
            return 'green';
        case '🗒️ Para hacer':
            return 'purple';
        case '✨ Algun dia':
            return 'yellow';
        case '🗑️ Papelera':
            return 'default';
        default:
            return 'default';
    }
}


export const getEmojiByTaskArea = (property: string): string => {
    switch (property) {
        case '🌱 Crecimiento Personal':
            return '🌱';
        case '📚 Estudios':
            return '📚';
        case '💌 Relaciones Personales':
            return '💌';
        case '🥦 Salud':
            return '🥦';
        case '💼 Trabajo':
            return '💼';
        case '🤑 Finanzas':
            return '🤑';
        case '📝 Organización':
            return '📝';
        default:
            return '❓';
    }
}