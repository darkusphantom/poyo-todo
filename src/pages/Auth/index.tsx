import { Fragment } from "react/jsx-runtime"
import App from "../App"
import { Route, Routes } from "react-router-dom"

const Login = () => {
    return (
        <h1>
            Login
        </h1>
    )
}

const Auth = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<App />} />
            </Routes>
        </Fragment>
    )
}

export { Auth }