import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入字体样式
import './font/fonts/iconfont.css'
//引入全局样式
import './index.css'

Vue.config.productionTip = false

//使用ElementUI库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


//全局路由守卫  判断用户是否登录  决定跳转到未登录页面或已登录页面
router.beforeEach((to,from,next)=>{
	if (to.path==='/profile'){
		let user_name = localStorage.getItem('userName');
		if(user_name === null){
			next('/login');
		}else {
			next();
		}
	}else{
		next();
	}
});


//判断用户是否登录决定能否进入管理页面
router.beforeEach((to,from,next)=>{
	if (to.path==='/center'){
		let user_name = localStorage.getItem('userName');
		if(user_name === null){
			alert('请先登录！！！');
			next('/login');
		}else {
			next();
		}
	}else{
		next();
	}
});