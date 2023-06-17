import './assets/main.css'
import 'v-calendar/style.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '../App.vue'
import router from './router/index.js'
import VCalendar from 'v-calendar';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJlRJjrCff5SXvOcRl474OtV9-SlRB0JQ",
  authDomain: "project-management-syste-691e7.firebaseapp.com",
  projectId: "project-management-syste-691e7",
  storageBucket: "project-management-syste-691e7.appspot.com",
  messagingSenderId: "1017788362160",
  appId: "1:1017788362160:web:e997723bab2e82af1d3a75"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)
app.use(VCalendar, {})
app.use(createPinia())
app.use(router)

app.mount('#app')
