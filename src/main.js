import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import { post,post2} from "./utils/httpUrl"

//引入animate.css
import animated from 'animate.css'
Vue.use(animated)


import socket from './utils/websocket'
Vue.prototype.sendMsg = socket.sendMsg
Vue.prototype.createSocket = socket.createSocket
Vue.prototype.closeSocket = socket.closeSocket



// import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false
Vue.prototype.$post = post;
Vue.prototype.$post2 = post2;
Vue.use(ElementUI, { locale })

// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'http://192.168.1.104:10011',
// }))


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
