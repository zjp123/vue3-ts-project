import { createApp } from 'vue'
import Cookies from 'js-cookie'
import axios from './utils/request';

import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$http = axios;
// console.log(Cookies, 'llll')
Cookies.set('foo', 'bar')
// app.use(axios)
// console.log(Cookies.get('foo'))

app.mount('#app')
