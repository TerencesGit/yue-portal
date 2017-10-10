import Home from '@/pages/home'
import Wrap from '@/pages/base/wrap'
import Login from '@/pages/base/login'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    component: Wrap,
    children: [
    	{
    		path: 'login',
        name: '登录',
        component: Login,
    	}
    ]
  }
]
export default routes