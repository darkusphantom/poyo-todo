import { Box, Text } from '@chakra-ui/react';

function TodoItem(props: any) {
  console.log(props)
  return (
    <Box
      backgroundColor="#FAFAFA"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="24px"
      boxShadow="0px 5px 50px rgba(32, 35, 41, 0.15)"
    >
      <Box
        className={`Icon Icon-check ${props.completed ? 'Icon-check--active' : ''}`}
        onClick={props.onComplete}
        cursor="pointer"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="48px"
        width="48px"
        fontSize="24px"
        fontWeight="bold"
      >
        √
      </Box>
      <Text
        className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
        margin="24px 0 24px 24px"
        width="calc(100% - 120px)"
        fontSize="18px"
        lineHeight="24px"
        fontWeight="400"
        color="#fe6f74"
      >
        {props.text}
      </Text>
      <Box
        className="Icon Icon-delete"
        onClick={props.onDelete}
        cursor="pointer"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="48px"
        width="48px"
        fontSize="18px"
        position="absolute"
        top="50%"
        right="10px"
        background="#c4c4c4"
        borderRadius="50%"
        color="white"
        transform="translate(-10px, -50%)"
      >
        X
      </Box>
    </Box>
  );
}

export { TodoItem };