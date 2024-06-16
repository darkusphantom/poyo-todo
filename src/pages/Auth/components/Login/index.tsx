import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useLocalStorage } from '../../../App/services/useLocalStorage'
import { API_KEY_NOTION } from '../../../../config/notionConfig'
import { useAuth } from '../../services/useAuth'
import { useNavigate } from 'react-router-dom'

/**
 * Login component for user authentication.
 *
 * @param {any} _data - Data for form submission
 * @return {JSX.Element} Login form JSX
 */
const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()
    const [token, setToken] = useState('')
    const { saveItem } = useLocalStorage('TOKEN', 'TOKEN')

    const onSubmit = (_data: any) => {
        if (token === API_KEY_NOTION) {
            saveItem(token)
            login()
            navigate('/')
        }
    }

    return (
        <Flex justifyContent="center" pt={20}>
            <Box as="form" maxW="320px">
                <FormControl mb={4}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                        type="text"
                        id="email"
                        bg="#fff"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                    />
                    <FormErrorMessage>This field is required</FormErrorMessage>
                </FormControl>
                <Button type="button" mt="4" w="100%" onClick={onSubmit}>
                    Login
                </Button>
            </Box>
        </Flex>
    )
}
export { Login }
