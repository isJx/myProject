import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false, // 控制登录页, true为显示, false为不显示
    isRegister: false, // 控制注册页是否显示, true为显示
    // 储存当前用户信息
    user: {
      // 用户状态
      userState: sessionStorage.getItem("user") ? 1 : 0,
      // 用户信息
      userMsg: sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {},
    },
  },
  mutations: {
    // 控制登录页面是否显示
    isLogin(state, payload) {
      state.isLogin = payload;
    },
    isRegister(state, payload) {
      state.isRegister = payload;
    },
    // 登录成功,储存用户信息
    userState(state, payload) {
      state.user.userState = 1;
      state.user.userMsg = payload;
    },
    // 用户注销
    logout(state) {
      state.user.userState = 0;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getShowLogin(state) {
      return state.isLogin;
    },
    getIsRegister(state) {
      return state.isRegister;
    },
  },
});
