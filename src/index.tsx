import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Box, ChakraProvider, Flex, Image, Text } from '@chakra-ui/react'
import './index.css'

import { Auth } from './routes'

const Header = () => {
    const logo =
        'https://i.pinimg.com/originals/f5/46/10/f5461004115fc4bc9fe27db66d2a33cc.png'
    return (
        <Box as="header" bg="#fc8e92" w="100%" p="4">
            <Flex justify="center" align="center">
                <Image src={logo} alt="Kirby Face" w="50px" mr="10px" />
                <Text as="h1" fontWeight="bold" fontSize="24px" color="white">
                    POYO's TODO
                </Text>
            </Flex>
        </Box>
    )
}
const App = () => {
    return (
        <BrowserRouter>
            <ChakraProvider>
                <Box bg="#ffcbcf" minH="100vh">
                    <Auth />
                </Box>
            </ChakraProvider>
        </BrowserRouter>
    )
}
render(<App />, document.getElementById('root'))
