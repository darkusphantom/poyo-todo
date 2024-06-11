import { Text } from "@chakra-ui/react";

const EmptySearchTodos = ({ searchText }: any) => {
  console.log(searchText);
  return (
    <Text textAlign="center">
      No hay ninguna coincidencia con <i>{searchText}</i>
    </Text>
  );
};

export { EmptySearchTodos };
