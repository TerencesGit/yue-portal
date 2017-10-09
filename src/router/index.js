import Home from '@/pages/home'
import Login from '@/pages/base/wrap'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
    children: [
    	{
    		path: 'login',

    	}
    ]
  }
]
export default routes