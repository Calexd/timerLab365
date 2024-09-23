import { createBrowserRouter } from 'react-router-dom'
import {HomePage} from '../pages/home'
import { HistoryPage } from '../pages/history'
import {Layout} from '../templates/'
 

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: '/historico',
            element: <HistoryPage />
        },
        ]
    }
])