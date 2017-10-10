import Home from '@/pages/home'
import Wrap from '@/pages/base/wrap'
import Login from '@/pages/base/login'
import Register from '@/pages/base/register'

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
    	},
      {
        path: 'register',
        name: '注册',
        component: Register,
      }
    ]
  }
]
export default routes