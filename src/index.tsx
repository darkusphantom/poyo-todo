import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react'
import './index.css';
import App from './pages/App';
import { Header } from './pages/App/components/Header';
import { Auth } from './pages/Auth';

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider>
      <Header />
      <Box
        my="0"
        px="24px"
        bg="#ffcbcf"
        position="relative"
        minH="100vh"
      >
        <Auth />
      </Box>
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
