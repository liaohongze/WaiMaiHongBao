import "./assets/js/flexible";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueClipboard from "vue-clipboard2";

import { Icon, Tabbar, TabbarItem, Overlay, Field, List } from "vant";

import "./assets/less/index.less";

Vue.use(Icon);
Vue.use(Overlay);
Vue.use(Field);
Vue.use(List);
Vue.use(Tabbar).use(TabbarItem);

VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
