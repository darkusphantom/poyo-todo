import { Box, ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/index';
import { Header } from './components/Header';

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
