import './bootstrap'

import '../css/app.css'; 

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './vuex/store' 
import axios from 'axios'
import VueAxios from 'vue-axios'

import { abilitiesPlugin } from '@casl/vue'
import ability from './libs/acl/ability'  

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons fas to all */
import { fas } from '@fortawesome/free-solid-svg-icons'

/*Agregar iconos a la biblioteca */
library.add(fas)

import * as yup from 'yup'; 
console.log(ability);
const app = createApp(App) 
// app.component("default-layout", DefaultLayout)
// app.component("empty-layout", EmptyLayout) 
// Use propiedades globales
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.use(router)
app.use(abilitiesPlugin, ability)
app.use(VueAxios, axios)
app.mount("#app")

// createApp(App).mount("#app")