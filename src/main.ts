import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import {router} from "./router";
import {VResize} from "./composables/utils";

const app = createApp(App);
app.use(router)
app.directive('resize', VResize)
app.mount('#app')
