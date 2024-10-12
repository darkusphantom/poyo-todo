import { Box } from '@chakra-ui/react'
import React from 'react'

interface TodoHeaderProps {
    children: React.ReactNode
    loading: boolean
}

const TodoHeader: React.FC<TodoHeaderProps> = ({ children, loading }) => {
    return (
        <Box as="header">
            {React.Children.toArray(children).map((child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child, loading)
                    : child
            )}
        </Box>
    )
}

export { TodoHeader }
