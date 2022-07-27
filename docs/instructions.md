## Tools, Frameworks, Languages,...

- HTML
- CSS
- Javascript ES6+
- React

## How is the project organized?

- App: This is the app root. It contains the logic to managagement of local storage in useLocalStorage.js and useTodos.js manages the state logic. The file index.js contains the UI logic.

- ChagenAlert: Este componente se encarga de mostrar una alerta cuando haya cambios aplicado en otra pestaña abierta. En el index.js se encuentra la logica UI y en withStorageListener.js la logica.

- CreateTodoButton: Componente boton para abrir el modal para añadir tareas.

- EmptySearchTodos: Componente de mensaje que se muestra cuando no hay coincidencia con la busqueda.

- EmptyTodos: Componente de mensaje que aparece cuando no existen TODOs

- Header: Componente header de la app.

- Modal: Componente modal que contiene TodoForm. Aparece cuando CreateTodoButton se le ha hecho click.

- TodoCounter: Componente contador que indica la cantidad de tareas existente y completadas

- TodoForm: Componente para añadir tareas a la lista.

- TodoHeader: Componente que agrupa TodoCounter y TodoSearch.

- TodoItem: Componente de tarea. Muestra el nombre de la tarea, el boton para eliminar o marcar como lista.

- TodoList: Componente que muestra el total de TodoItem creado.

- TodoSearch: Componente de barra de busqueda para buscar tareas.

- TodosError: Componente que muestra un error, si hubo un fallo al cargar tareas.

- TodosLoding: Componente de carga de inicio mientras se prepara las tareas.
