import { Box, Button } from "@chakra-ui/react";

function CreateTodoButton(props: any) {
  const onClickButton = () => {
    props.setOpenModal((prevState: any) => !prevState);
  };

  return (
    <Button
      backgroundColor="#61DAFA"
      boxShadow="0px 5px 25px rgba(97, 218, 250, 0.5)"
      borderRadius="50%"
      cursor="pointer"
      fontSize="50px"
      position="fixed"
      bottom="24px"
      right="24px"
      fontWeight="bold"
      color="#FAFAFA"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="64px"
      width="64px"
      _hover={{ transform: "rotate(224deg)" }}
      transform="rotate(0)"
      transition="0.3s ease"
      zIndex="1"
      onClick={onClickButton}
    >
      <Box position="absolute" top="0" left="18px" width="10px" height="10px">
        +
      </Box>
    </Button>
  );
}

export { CreateTodoButton };
