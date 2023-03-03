import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/old-script.js'

import './assets/main.css'
import './assets/old-style.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

