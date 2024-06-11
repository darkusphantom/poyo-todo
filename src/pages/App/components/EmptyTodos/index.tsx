import { Text } from '@chakra-ui/react';

const EmptyTodos = () => {
  return (
    <Text
      textAlign="center"
      mt="15vh"
      fontSize="16px"
      fontWeight="bold"
      color="white"
    >
      Crea un TODO en el botón (+) para comenzar
    </Text>
  );
};

export { EmptyTodos };
