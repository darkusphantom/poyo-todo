import { createContext, useContext, useState } from 'react'

const AuthContext = createContext({
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
})

export const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
}

export const AuthProvider = ({ children }: any): any => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = () => {
        setIsAuthenticated(true)
    }

    const logout = () => {
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
