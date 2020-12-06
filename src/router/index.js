import { createWebHistory, createRouter } from "vue-router";
import User from '../components/User.vue'
// import Main from '../components/Main.vue'
import Posts from '@/components/Posts.vue'

const routes = [
  
  {
    path: "/user",
    name: "User",
    component: User,
  },
  {
    path: "/",
    name: "Posts",
    component: Posts,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router