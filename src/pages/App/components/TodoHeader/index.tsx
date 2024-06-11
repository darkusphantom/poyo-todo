import { Box } from '@chakra-ui/react';
import React from 'react';

const TodoHeader = ({ children, loading }: any) => {

  return (
    <Box as="header">
      {
        React.Children
          .toArray(children)
          .map(child => React.cloneElement(
            child as any,
            { loading }
          ))
      }
    </Box>
  )
}

export { TodoHeader };
