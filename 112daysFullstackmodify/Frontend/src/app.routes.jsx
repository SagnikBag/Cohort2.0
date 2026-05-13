import {createBrowserRouter} from "react-router"
import Register from "./features/auth/pages/Register"
import Login from "./features/auth/pages/Login"
import Protected from "./features/auth/component/Protected"
import Home from "./features/home/pages/Home"
import Dashboard from "./features/auth/pages/Dashboard"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <Protected>
        <Dashboard />
      </Protected>
    ),
  },
]);