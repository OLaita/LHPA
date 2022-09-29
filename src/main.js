import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style.css'


import router from './router'
import store from './store'

const appAwards = createApp(App)

appAwards.use(router)
appAwards.use(store)

appAwards.mount('#app')
