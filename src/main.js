import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import ElementUI from 'element-ui';
import Moment from 'moment'


Vue.config.productionTip = false

// css
import './assets/styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css';

// router 拦截
import './router/index'
// svg
import './assets/icons/index'
// moment
Moment.locale = 'zh-cn'
Vue.prototype.$moment = Moment

Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
