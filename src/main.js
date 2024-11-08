import {createApp} from 'vue'

import App from './App.vue'
import "@/assets/less/index.less"
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {createPinia} from 'pinia';
import piniaPersistedState from 'pinia-plugin-persistedstate';
// import 'virtual:svg-icons-register'
const app = createApp(App)
app.use(ElementPlus)
const pinia = createPinia();
pinia.use(piniaPersistedState)
app.use(pinia)
app.use(router).mount("#app")
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}