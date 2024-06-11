import { Box } from '@chakra-ui/react';

function TodoList(props: any) {
  const renderFunc = props.children || props.render;
  return (
    <Box as='section'>
      { /*Muestra error*/}
      {props.error && props.onError()}

      { /*Muestra el loader */}
      {props.loading && props.onLoading()}

      { /*Muestra el loader si no esta cargando y no hay todos */}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      { /*No realiza la busqueda si la lista de todos está vacia */}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchTodos(props.searchText)}

      { /*Realiza la búsqueda in real time */}
      {/*props.searchedTodos.map(todo => props.render(todo))*/}
      {props.searchedTodos.map(renderFunc)}
    </Box>
  );
}

export { TodoList };
