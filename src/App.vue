<template>
  <div id="app">
    <div class="route_box">
      <router-link to="/" class="router_link">首页推荐</router-link>
      <router-link to="/center" class="router_link">管理中心</router-link>
      <router-link to="/profile" class="router_link">个人中心</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
*{
	margin: 0;
	padding: 0;
}

.route_box{
  min-width: 1200px;
  width: 100%;
  background-color: orange;
  text-align: center;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
}
.router_link{
  display: inline-block;
  height: 50px;
  padding: 0 10px;
  line-height: 50px;
  text-align: center;
  width: 80px;
  color: white;
  text-decoration: none;
  background-color: blue;
}
</style>
