import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import ElementUI from 'element-ui';


Vue.config.productionTip = false

// css
import './assets/styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
