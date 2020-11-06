<template>
  <div class="box">
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604475071968&di=c70fcdac1365f2ec1c657868d9e1bc6d&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F18%2F56%2F14300000958002128488569856508.jpg" alt="">
    <div class="user_box">
      <div v-for="(val,key) in userInfo">
        <MsgBox :title="key" :msg="val +''" v-if="key!=='token'"/>
      </div>
        <button @click="signOut">退出登录</button>
    </div>
  </div>
</template>

<script>
import MsgBox from "@/components/profile/MsgBox";

export default {
  name: 'UserInfo',
  components: {
    MsgBox
  },
  props: {
    userInfo: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {}
  },
  methods: {
    signOut() {
      this.$store.commit('clearToken');
      //退出登录 清除本地缓存数据
      localStorage.removeItem('userName');
      localStorage.removeItem('password');
      localStorage.removeItem('token');
      //返回首页
      this.$router.push('/');
      alert('退出成功');
    },
  },
}
</script>

<style>
.user_box button {
  position: absolute;
  bottom: 10px;
  left: 10%;
  right: 10%;
  width: 80%;
  text-align: center;
  height: 50px;
  background-color: red;
  color: white;
  border: none;
  outline: none;
  font-size: 20px;
}

.box{
  position: relative;
  height: 550px;
  width: 400px;
  background-color: blue;
  margin: 0 auto;
}
.user_box{
  padding-top: 50px;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  height: 450px;
  width: 100%;
  background-color: aqua;
}
.box img{
  z-index: 999;
  position: absolute;
  height: 80px;
  top: 10px;
  left: 160px;
  width: 80px;
  border-radius: 40px;
}
</style>
