import App from '../pages/App'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Auth/components/Login'
import { AuthProvider, useAuth } from '../pages/Auth/services/useAuth'

const ProtectedRoute = ({ children }: any) => {
    const { isAuthenticated } = useAuth()
    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return children
}

const Auth = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <App />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </AuthProvider>
    )
}

export { Auth }
