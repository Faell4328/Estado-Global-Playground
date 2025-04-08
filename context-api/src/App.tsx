import { createBrowserRouter } from 'react-router';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Outras from './pages/Outras';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{
        path: '/',
        element: <Home />
    },
    {
        path: '/sobre',
        element: <Sobre />
    },
    {
        path: '*',
        element: <Outras />
    }]
  }
])

export { router }