import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'viewerjs/dist/viewer.css'
import Views from 'v-viewer'

const app = createApp(App)

app.use(Views, {
    defaultOptions: {
       toolbar: false
    }
  })
app.use(createPinia())
app.use(router)
app.mount('#app')
