import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'

import MainShop from './pages/MainShop.vue'
import MainFavorites from './pages/MainFavorites.vue'
import MainPage from './pages/MainPage.vue'

const app = createApp(App)

const routes = [
  { path: '/shop', name: 'shop', component: MainShop },
  { path: '/favorites', name: 'favorites', component: MainFavorites },
  { path: '/', name: 'mainpage', component: MainPage }
]

const router = createRouter({
  history: createWebHistory(), 
  routes
})

app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')
