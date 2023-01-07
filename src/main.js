import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import HelloWorld from "@/components/HelloWorld";
import SecPage from "@/views/SecPage";
//import Vue from 'vue';
//import VueMeta from 'vue-meta';
//Vue.use(VueMeta);

createApp(App).use(store).use(router).mount('#app')

new vue({
    vuetify,
    render:(h) => h(HelloWorld),
}).$mount('#app');

new vue({
    vuetify,
    render:(h) => h(SecPage),
}).$mount('#SecPage');


