import {RouterProvider} from 'react-router'
import AppRoutes from './AppRoutes'
import "./style.scss"
import { AuthProvide } from './features/auth/auth.context'



function App() {
  return (
    <AuthProvide>
      <AppRoutes />
    </AuthProvide>
  );
}

export default App
