import Home from '@/pages/home'
import Wrap from '@/pages/base/wrap'
import Login from '@/pages/base/login'
import Register from '@/pages/base/register'
import RegisterSuccess from '@/pages/base/register_success'
import Detail from '@/pages/detail/index'
import Photography from '@/pages/detail/photography'
import PhotoNative from '@/pages/detail/photo_native'
import PhotoOversea from '@/pages/detail/photo_oversea'
import Tourism from '@/pages/detail/tourism'
import Finance from '@/pages/detail/finance'
import System from '@/pages/detail/system'
import Marketing from '@/pages/detail/marketing'
import Join from '@/pages/detail/join'

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
      {
        path: 'native',
        name: 'native',
        component: PhotoNative,
      },
      {
        path: 'oversea',
        name: 'oversea',
        component: PhotoOversea,
      },
      {
        path: 'tourism',
        name: 'tourism',
        component: Tourism,
      },
      {
        path: 'finance',
        name: 'finance',
        component: Finance,
      },
      {
        path: 'system',
        name: 'system',
        component: System,
      },
      {
        path: 'marketing',
        name: 'marketing',
        component: Marketing,
      },
      {
        path: 'join',
        name: 'join',
        component: Join,
      },
    ]
  }
]
export default routes