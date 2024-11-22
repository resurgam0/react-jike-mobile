import { createBrowserRouter } from 'react-router-dom'
import List from '@/pages/List'
import Detail from '@/pages/Detail'
import Home from '@/pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <List />,
  },
  {
    path: '/detail',
    element: <Detail />,
  },
  {
    path: '/home',
    element: <Home/>
  }
])

export default router