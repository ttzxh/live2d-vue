import Vue from 'vue'
import App from './App.vue'

import live2d from '../package/index.js'

Vue.config.productionTip = false
Vue.use(live2d)

new Vue({
  render: h => h(App),
}).$mount('#app')
