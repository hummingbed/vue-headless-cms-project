import Vue from 'vue'
import App from './App.vue'

import { createClient } from './prismic';

// Create Prismic client instance
const prismicClient = createClient();

// Make the Prismic client available globally in Vue app
Vue.prototype.$prismic = prismicClient;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
