import Vue from "vue";
import Vuex from "vuex";
import {
  GetUserInfoApi, //获取用户
} from "@/request/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,//全局loading加载状态
    userInfo: {//用户信息  
      userName:'刘江北',
      userPhoto:require('../assets/img/photo.png')
    },
  },
  mutations: {
    //loading状态
    TOGGLE_LOADING_STATE(state, isLoading) {
      state.isLoading = isLoading;
    },
    //用户信息
    SET_USER_INFO(state, info) {
      state.userInfo = info;
    },
  },
  actions: {
    async GET_USER_INFO({ commit }) {
      let res = await GetUserInfoApi();
      if (res.success) {
        console.log('res.data)',res.data);
        commit("SET_USER_INFO", res.data);
      }
    },
  },
  modules: {},
});
