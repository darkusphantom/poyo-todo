import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    useToast,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../services/useAuth'
import { authenticateUser } from '../../../../services/notionAuth'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

/**
 * Login component for user authentication.
 *
 * @return {JSX.Element} Login form JSX
 */
const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()
    const toast = useToast()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        const token = sessionStorage.getItem('authToken')
        if (token) {
            login()
            navigate('/')
        }
    }, [login, navigate])

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const token = await authenticateUser(username, password)
            if (token) {
                sessionStorage.setItem('authToken', token)
                login()
                navigate('/')
            } else {
                toast({
                    title: 'Error de autenticación',
                    description: 'Credenciales incorrectas',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            }
        } catch (error) {
            console.error('Error durante la autenticación:', error)
            toast({
                title: 'Error',
                description: 'Ocurrió un error durante la autenticación',
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    }

    const togglePasswordVisibility = () => setShowPassword(!showPassword)

    return (
        <Flex justifyContent="center" pt={20}>
            <Box as="form" maxW="320px" onSubmit={onSubmit}>
                <FormControl mb={4} isRequired>
                    <FormLabel htmlFor="username">Usuario</FormLabel>
                    <Input
                        type="text"
                        id="username"
                        bg="#fff"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FormErrorMessage>Este campo es requerido</FormErrorMessage>
                </FormControl>
                <FormControl mb={4} isRequired>
                    <FormLabel htmlFor="password">Contraseña</FormLabel>
                    <InputGroup>
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            bg="#fff"
                            value={password}
                            position="relative"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputRightElement
                            width="4.5rem"
                            position="absolute"
                            right="-10px"
                            zIndex="1"
                        >
                            <Button onClick={togglePasswordVisibility}>
                                {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>Este campo es requerido</FormErrorMessage>
                </FormControl>
                <Button type="submit" mt="4" w="100%">
                    Iniciar sesión
                </Button>
            </Box>
        </Flex>
    )
}

export { Login }
