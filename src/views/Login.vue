<template>
<div class="login_view">

  <div class="tip">
    <h3>登录账号，享受更多优惠</h3>
  </div>

  <LoginBox></LoginBox>
</div>
</template>

<script>
import LoginBox from '../components/login.vue'

export default {
  name: "Login",
  components:{
    LoginBox
  }
}
</script>

<style scoped>
.login_view{
  height: calc(100vh);
  background-color: #2b4b6b;
}
.tip{
  width: 100%;
  height: 50px;
  background-color: antiquewhite;
  margin-bottom: 10px;
  box-shadow: #00FFFF 0 2px 5px;
}
.tip h3{
  text-align: center;
  line-height: 50px;
  color: rebeccapurple;
}
</style>