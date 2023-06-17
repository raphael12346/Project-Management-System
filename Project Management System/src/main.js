import './assets/main.css'
import 'v-calendar/style.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '../App.vue'
import router from './router/index.js'
import VCalendar from 'v-calendar';
// Import the functions you need from the SDKs you need

const app = createApp(App)
app.use(VCalendar, {})
app.use(createPinia())
app.use(router)

app.mount('#app')
