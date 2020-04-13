import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

export const routes = [
  { id: 'home', title: 'Home', path: '/', component: Home, exact: true },
  { id: 'login', title: 'Login', path: '/login', component: Login },
  { id: 'not-found', title: 'NotFound', path: '*', component: NotFound },
]
