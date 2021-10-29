import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import Fragment from "vue-fragment";
import store from "./store";
import "./scss/index.scss";

// Vue.use(Fragment.Plugin);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
