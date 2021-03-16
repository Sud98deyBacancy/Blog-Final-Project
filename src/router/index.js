import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts  from "../components/pages/Posts.vue";
import PostDetails  from "../components/pages/PostDetails.vue";
import UserDetails from "../components/pages/UserDetails.vue";
import NotFound from "../components/pages/NotFound.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect: '/posts'
  },
  {
    path: '/userDetails/:id', 
    component: UserDetails
  },
  {
    path: '/posts',
    component: Posts,
    // children: [
    //   {
    //     path: 'notFound',
    //     component: NotFound
    //   },
    //   {
    //     path: ':id', 
    //     component: PostDetails
    //   },
      
    // ]
  },
  {
    path: '/posts/:id', 
    component: PostDetails
  },
  {
    path: '*', component: NotFound
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   // name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
