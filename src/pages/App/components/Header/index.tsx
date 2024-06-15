import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { DrawerExample } from "../Drawer";

const Header = () => {
	const logo = 'https://i.pinimg.com/originals/f5/46/10/f5461004115fc4bc9fe27db66d2a33cc.png';
	return (
		<Box as="header" bg="#fc8e92" w="100%" p="4">
			<Flex justify="center" align="center">
				<Image src={logo} alt="Kirby Face" w="50px" mr="10px" />
				<Text as="h1" fontWeight="bold" fontSize="24px" color="white">POYO's TODO</Text>
			</Flex>
			{/* <DrawerExample /> */}
		</Box>

	)
}

export { Header };