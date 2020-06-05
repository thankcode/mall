import vue from 'vue'
import VueRouter  from  'vue-router'

const home = () => import('../views/home/home')
const cart = () => import('../views/cart/cart')
const category = () => import('../views/category/category')
const profile = () => import('../views/profile/profile')


vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/index',
  },
  {
    path: '/index',
    component: home
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/profile',
    component: profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
