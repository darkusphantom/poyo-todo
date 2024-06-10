import { Input } from "@chakra-ui/react";

const inputStyles = {
  fontFamily: "'Montserrat'",
  fontWeight: "400",
  color: "#1E1E1F",
  boxShadow: "0px 5px 50px rgba(32, 35, 41, 0.25)",
};

const placeholderStyles = {
  fontFamily: "'Montserrat'",
  fontWeight: "400",
  color: "#fe6f74",
};

const TodoSearch = ({ searchValue, setSearchValue, loading }: any) => {
  const onSearchValueChange = (event: any) => {
    console.log(event.target.value)
    setSearchValue(event.target.value);
  };

  return (
    <Input
      bg="#F9FBFC"
      borderRadius="5px"
      border="2px solid #671e2a"
      mx="auto"
      height="64px"
      width="calc(100% - 62px)"
      fontSize="24px"
      textAlign="center"
      {...inputStyles}
      _placeholder={placeholderStyles}
      _focus={{ outlineColor: "#fe6f74" }}
      _disabled={{ opacity: "25%" }}
      _hover={{ ...inputStyles, boxShadow: "0px 5px 50px rgba(32, 35, 41, 0.25)" }}
      // _focusHover={{ ...inputStyles, boxShadow: "0px 5px 50px rgba(32, 35, 41, 0.25)" }}
      _invalid={{ ...inputStyles, boxShadow: "0px 5px 50px rgba(32, 35, 41, 0.25)" }}
      // _disabledHover={{ ...inputStyles, boxShadow: "0px 5px 50px rgba(32, 35, 41, 0.25)" }}
      // _hoverInvalid={{ ...inputStyles, boxShadow: "0px 5px 50px rgba(32, 35, 41, 0.25)" }}
      // _focusInvalid={{ ...inputStyles, boxShadow: "0px 5px 50px rgba(32, 35, 41, 0.25)" }}
      // _disabledInvalid={{ ...inputStyles, boxShadow: "0px 5px 50px rgba(32, 35, 41, 0.25)" }}
      placeholder="Busca un POYO Todo"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
