import { Box, Button, Text } from '@chakra-ui/react';
import { withStorageListener } from './withStorageListener';

const ChangeAlert = ({ show, toggleShow }: any) => {
  if (show) {
    return (
      <Box>
        <Text>Hubo cambios</Text>
        <Button
          onClick={() => toggleShow(false)}
        >
          Recargar TODOS
        </Button>
      </Box>
    )
  } else {
    return null;
  }
};

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
