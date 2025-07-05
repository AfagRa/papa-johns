import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import './index.css'
import App from './components/App.jsx'
import About from './components/About.jsx'
import Main from './components/Main.jsx'
import Bonus from './components/Bonus.jsx'
import Talk from './components/Talk.jsx'
import Error from './components/Error.jsx'
import Qelyanalti from './components/Qelyanalti.jsx'
import PizzaMenu from './components/PizzaMenu.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />, children: [
    {index: true, element: <Navigate to='menu' />},
    {path: 'main', element: <Main />},
    {path: 'menu', element: <Navigate to='pizzalar' />},
    {path: 'menu/pizzalar', element: <PizzaMenu />},
    {path: 'menu/qelyanaltilar', element: <Qelyanalti />},
    {path: 'about', element: <About />},
    {path: 'bonus', element: <Bonus />},
    {path: 'talk', element: <Talk />},
    {path: '*', element: <Error />},
  ]}
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
