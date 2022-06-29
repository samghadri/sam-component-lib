import Vue from 'vue'
import App from './App.vue'
import DanManSimple from 'dans-components'

Vue.config.productionTip = false
Vue.use(DanManSimple);

new Vue({
  render: h => h(App),
}).$mount('#app')
