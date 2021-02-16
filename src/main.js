import Vue from 'vue';
import App from './App.vue';
import VueCompositionAPI from '@vue/composition-api';
import lo from './plugins/lo/index';

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);
Vue.use(lo);

new Vue({
  render: h => h(App),
}).$mount('#app')
