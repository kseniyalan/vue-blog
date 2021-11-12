import Vue from 'vue'
import VueRouter from 'vue-router'


import PostsList from '../views/PostsList.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import PostView from '../views/PostView.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'PostsList',
    component: PostsList
  },
  {
    path: '/posts/:postId',
    name: 'PostView',
    component: PostView
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
