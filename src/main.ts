import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

import VueCompositionApi from '@vue/composition-api';
import router from './router'

Vue.use(VueCompositionApi);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
