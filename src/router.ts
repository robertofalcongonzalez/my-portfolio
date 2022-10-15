import {createRouter, createWebHistory, RouteParams} from 'vue-router'
import Home from './pages/Home.vue';
export type AppRouteNames = 'main'
  | 'my-feed'


export const router = createRouter({
  history: createWebHistory('/my-portfolio'),
  routes: [
    {
      name: 'main',
      path: '/',
      redirect: {name: 'home'}
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
    },
  ],
})

export function routerPush(name: AppRouteNames, params?: RouteParams): ReturnType<typeof router.push> {
  if (params !== undefined) {
    return router.push({
      name,
      params,
    })
  } else {
    return router.push({name})
  }
}
