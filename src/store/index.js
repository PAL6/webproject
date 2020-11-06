import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //用户信息
        userInfo:{
            'userName':'',
            'token': '',
            'email':'',
            'mobile':'',
            'id':''
        }
    },

    //用于改变state里面的值
    mutations: {
        // 保存用户信息
        login(state, info={}) {
            this.state.userInfo.userName = info.username;
            this.state.userInfo.token = info.token;
            this.state.userInfo.email = info.email;
            this.state.userInfo.mobile = info.mobile;
            this.state.userInfo.id = info.id;
        },
        // 清除用户名
        clearToken() {
            this.state.userInfo.userName = '';
            this.state.userInfo.token = '';
            this.state.userInfo.email = '';
            this.state.userInfo.mobile = '';
            this.state.userInfo.id = '';
        }
    },
    actions: {},
    modules: {}
})
