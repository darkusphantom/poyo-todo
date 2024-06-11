import { Box, Text } from '@chakra-ui/react';

function TodoCounter({ totalTodos, completedTodos, loading }: any) {
  return (
    <Box
      fontSize={["24px", "22px"]}
      textAlign="center"
      margin={0}
      padding={6}
      color="#fe6f74"
      opacity={loading ? 0.25 : 1}
    >
      <Text>Completaste {completedTodos} de {totalTodos} POYO's TODO</Text>
    </Box>
  );
}

export { TodoCounter };
