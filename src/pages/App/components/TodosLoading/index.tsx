import loader from '../../../../assets/img/gif/loader-rolling-cat.gif'; // url: https://c.tenor.com/_G85yMqj3zQAAAAi/rolling-cat-cat-rolling.gif"
import { Box, Image, Text } from '@chakra-ui/react';

const TodosLoading = () => {
  return (
    <Box
      display="flex"
      flexDirection="column-reverse"
      justifyContent="center"
      alignItems="center"
      padding="6px 0 12px 0"
      marginTop="24px"
      background="linear-gradient(90deg, var(--pink), var(--pinkDarkest))"
      backgroundSize="400% 400%"
      borderRadius="5px"
      boxShadow="0px 5px 50px rgba(32, 35, 41, 0.15)"
      position="relative"
      animation="loadingAnimation 3s ease-in-out infinite"
    >
      <Image
        src={loader}
        alt="rolling-cat"
        width="100px"
        height="100px"
        loading="lazy"
      />
      <Text
        margin="24px 0 24px 24px"
        /*width="calc(100% - 120px)"*/
        width="max-content"
        fontSize="18px"
        lineHeight="24px"
        fontWeight="500"
        className="loadingTodo-text"
      >
        Cargando TODOs... (POYO...)
      </Text>
    </Box>
  );
};

export { TodosLoading };
