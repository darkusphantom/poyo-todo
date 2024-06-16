import { render } from 'react-dom'
import {
    BrowserRouter,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom'
import { Box, ChakraProvider } from '@chakra-ui/react'
import './index.css'
import { Header } from './pages/App/components/Header'
import { Auth } from './routes'

render(
    <BrowserRouter>
        <ChakraProvider>
            <Header />
            <Box my="0" px="24px" bg="#ffcbcf" position="relative" minH="100vh">
                <Auth />
            </Box>
        </ChakraProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
