// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// vue 在启动时生成生产提示
// false 以阻止
Vue.config.productionTip = true
// Vue 所有的日志与警告的显示/隐藏
Vue.config.silent = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；
// 假如需要延迟挂载，可以在之后手动调用vm.$mount()方法来挂载。
// new Vue({
//     router,
//     store
// }).$mount("#app")
