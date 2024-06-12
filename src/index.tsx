import { Box, ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import { Header } from './pages/App/components/Header';

ReactDOM.render(
  <ChakraProvider>
    <Header />
    <Box
      my="0"
      px="24px"
      bg="#ffcbcf"
      position="relative"
      minH="100vh"
    >
      <App />
    </Box>
  </ChakraProvider>,
  document.getElementById('root')
);
