<template>
  <div class="left_menu">
    <el-row>
      <el-col :span="12">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo left"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-submenu :index="item.id + ''" v-for="item in leftMenus">
            <template slot="title">
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="item1.id +''" v-for="item1 in item.children" @click="handleTap(item1.authName)">{{ item1.authName }}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "LeftMenu",
  props: {
    leftMenus: {
      type: Array,
      default: [
        {
          'authName': '用户管理', 'children': [
            {'authName': '用户列表'}
          ]
        }
      ]
    },
  },
  methods:{
    handleTap(title){
      this.$emit('tap',`${title}`)
    }
  }
}
</script>

<style scoped>
.left_menu {
  width: 250px;
  height: calc(100vh - 50px);
}

.left_menu .left {
  width: 250px;
  height: calc(100vh - 50px);
  border-left: none;
}
</style>