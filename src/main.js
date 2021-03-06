import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// px2rem 自适应
import 'lib-flexible'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
