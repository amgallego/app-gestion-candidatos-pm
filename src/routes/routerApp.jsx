import App from '../App'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
export let routerApp = [
    {
        path: "/",
        element: <App  />
    },
    {
        path: "/login",
        element: <Login  />
    },
    {
        path: "/register",
        element: <Register  />
    },
    {
        path: "/dashboard",
        element: <Dashboard  />
    },
]

export default routerApp;
