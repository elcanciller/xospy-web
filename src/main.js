import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/css/bootstrap.css'
import './assets/css/style.xospy.web.css'
import './assets/css/style.xospy.web.head.css'
import './assets/css/style.xospy.web.carrousel.css'
import './assets/css/style.xospy.web.tarjeta.css'
import './assets/css/style.xospy.web.carrousel.two.css'
import './assets/css/style.xospy.web.banner.categoria.css'
import './assets/css/style.xospy.web.modalidad.servicio.css'
import './assets/css/style.xospy.web.footer.fronted.css'
import './assets/js/bootstrap.js'
import './assets/js/jquery.js'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
