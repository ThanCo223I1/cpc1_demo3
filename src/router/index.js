import { createRouter, createWebHistory } from 'vue-router'
import NavBar from '../layouts/NavBar.vue'
import SideBar from '../layouts/SideBar.vue'
import HomeComponent from '../layouts/HomeComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'homepage',
      component: HomeComponent,
      children: [
        {
          path: '',
          components: {
            default: NavBar,
            sidebar: SideBar,
          },
        }
        // {
        //   path: '/table1',
        //   name: 'table1',
        //   component: TableComponent,
        // },
        // {
        //   path: '/table2',
        //   name: 'table2',
        //   component: Table2Component,
        // },
      ],
    },
  ]
})

export default router
