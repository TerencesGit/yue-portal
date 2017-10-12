import Home from '@/pages/home'
import Wrap from '@/pages/base/wrap'
import Login from '@/pages/base/login'
import Register from '@/pages/base/register'
import RegisterSuccess from '@/pages/base/register_success'
import Detail from '@/pages/detail/index'
import Photography from '@/pages/detail/photography'
// import PhotoNative from '@/pages/detail/photo_native'

const routes = [
  {
    path: '/',
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
      },
      {
        path: 'register_success',
        name: '注册成功',
        component: RegisterSuccess,
      }
    ]
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    children: [
      {
        path: 'photography',
        name: 'photography',
        component: Photography,
      },
      // {
      //   path: 'native',
      //   name: 'native',
      //   component: PhotoNative,
      // }
    ]
  }
]
export default routes