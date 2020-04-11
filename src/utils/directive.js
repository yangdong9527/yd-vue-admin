import Vue from 'vue'
import store from '@/store/index'

Vue.directive('checkbtn', {
  inserted(el, binding) {
    try {
      const menus = store.getters.info.menus
      const str = binding.value
      if(!menus.includes(str)) {
        el.parentNode.removeChild(el)
      }
    } catch (error) {
      console.log('出现了一个错误')
    }
  }
})