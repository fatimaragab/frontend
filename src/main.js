import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import HelloWorld from "@/components/HelloWorld";

createApp(App).use(store).use(router).mount('#app')

new vue({
    vuetify,
    render:(h) => h(HelloWorld),
}).$mount('#app');

new vue({
    vuetify,
    render:(h) => h(secpage),
}).$mount('#secpage');


