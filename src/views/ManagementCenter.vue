<template>
  <div class="container">
    <div class="menu">
      <LeftMenu :left-menus="leftMenus" class="sub_menu" @tap='routePush'></LeftMenu>
    </div>
    <div class="right_view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import {getMethod} from "@/HttpRequest/baseRequest";
import LeftMenu from "@/components/center/LeftMenu";

export default {
  name: "ManagementCenter",
  components: {
    LeftMenu
  },
  data() {
    return {
      leftMenus: [],
    }
  },
  mounted() {
    this.getMenus();
  },
  methods: {
    //获取左侧菜单数据
    getMenus() {
      getMethod('menus').then(res => {
        this.leftMenus = res.data.data;
      }).catch(err => {
        console.log(err)
      })
    },
    //跳转路由
    routePush(data) {
      switch (data) {
        case '用户列表':
          this.$router.push('/userList');
          break;
        case '角色列表':
          this.$router.push('/role');
          break;
        case '权限列表':
          this.$router.push('/adminList');
          break;
        case '商品列表':
          this.$router.push('/shopsList');
          break;
        case '分类参数':
          this.$router.push('/categoryParam');
          break;
        case '商品分类':
          this.$router.push('/shopCategory');
          break;
        case '订单列表':
          this.$router.push('/orderList');
          break;
        case '数据报表':
          this.$router.push('/dataTable');
          break;
      }
    }
  },

}
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  min-width: 1200px;
  padding-top: 50px;
  height: calc(100vh - 50px);
}

.menu {
  position: fixed;
  float: left;
  height: 100%;
  width: 250px;
}

.right_view {
  padding-left: 250px;
}
</style>