<template>
  <div class="profile">
    <h1 style="text-align: center">个人中心页面</h1>
    <userinfo :user-info="userInfo"></userinfo>
  </div>
</template>

<script>
import Userinfo from "@/components/userinfo";

export default {
  name: "Profile",
  components: {
    Userinfo
  },
  data() {
    return {
      userInfo:{}
    }
  },
  created() {
    this.getUserInfo();
  },
  methods:{
    getUserInfo(){
      this.userInfo = this.$store.state.userInfo;
    }
  }
}
</script>

<style scoped>
.profile {
  padding-top: 50px;
  height: calc(100vh - 50px);
  background-color: #2b4b6b;
}
</style>