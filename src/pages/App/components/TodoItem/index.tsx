import { Box, Flex, Text } from '@chakra-ui/react'

function TodoItem({
    onComplete,
    onDelete,
    completed,
    text,
    type,
    limitDate,
}: any) {
    return (
        <Box
            backgroundColor="#FAFAFA"
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="24px"
            boxShadow="0px 5px 50px rgba(32, 35, 41, 0.15)"
        >
            <Box
                onClick={onComplete}
                cursor="pointer"
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="48px"
                width="48px"
                bg={completed ? '#fe6f74' : 'transparent'}
                borderRadius={completed ? '50%' : 'none'}
                fontSize="24px"
                fontWeight="bold"
            >
                √
            </Box>
            <Flex
                direction="column"
                margin="24px 0 24px 24px"
                width="calc(100% - 120px)"
                lineHeight="24px"
                gap={2}
            >
                <Text
                    textDecoration={completed ? 'line-through' : 'none'}
                    fontSize="18px"
                    lineHeight="24px"
                    fontWeight="600"
                    color="#fe6f74"
                >
                    {text}
                </Text>
                <Flex gap={2}>
                    <Text
                        textDecoration={completed ? 'line-through' : 'none'}
                        fontSize="14px"
                        fontWeight="400"
                        color="#fe6f74"
                    >
                        {type}
                    </Text>
                    <Text
                        textDecoration={completed ? 'line-through' : 'none'}
                        fontSize="14px"
                        fontWeight="400"
                        color="#fe6f74"
                    >
                        | {limitDate}
                    </Text>
                </Flex>
            </Flex>
            <Box
                className="Icon Icon-delete"
                onClick={onDelete}
                cursor="pointer"
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="32px"
                width="32px"
                fontSize="18px"
                position="absolute"
                top="5px"
                right="-25px"
                background="#c4c4c4"
                borderRadius="50%"
                color="white"
                transform="translate(-10px, -50%)"
            >
                X
            </Box>
        </Box>
    )
}

export { TodoItem }
