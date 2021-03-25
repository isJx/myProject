import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
// 引入全局组件
import MyHeader from "./components/MyHeader.vue";
import AlterInput from "./components/AlertInput.vue";
import Footer from "./components/Footer.vue";

// 引入element组件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 把页头组件添加到Vue实例
Vue.component("my-header", MyHeader);
Vue.component("alert-input", AlterInput);
Vue.component("my-footer", Footer);

// 配置element组件
Vue.use(ElementUI);

// 将axios加入原型对象中
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
