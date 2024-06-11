import ReactDOM from 'react-dom';
import { Box } from '@chakra-ui/react';

const Modal = ({ children }: any) => {
  return ReactDOM.createPortal(
    <Box
      position="fixed"
      top="-10px"
      left="-10px"
      right="-10px"
      bottom="-10px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="rgba(32,35,41,.8)"
      color="white"
    >
      {children}
    </Box>
  , document.getElementById('modal') as HTMLElement
  )
}

export { Modal };