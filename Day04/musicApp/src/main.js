import './assets/main.css'
//一次性引入所有的vant组件
import Vant from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
//使用组件
app.use(Vant);

app.mount('#app')
