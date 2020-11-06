<template>
  <div class="admin_list">
    <h3>权限列表</h3>

    <!--用户表格-->
    <el-table :data="rightsList" border style="width: 100%" stripe>
      <el-table-column type="index" label="#" width="80px"></el-table-column>
      <el-table-column prop="authName" label="权限名称"></el-table-column>
      <el-table-column prop="path" label="路径"></el-table-column>
      <el-table-column prop="level" label="权限等级">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.level === '0'">等级一</el-tag>
          <el-tag type="success" v-else-if="scope.row.level === '1'">等级二</el-tag>
          <el-tag type="danger" v-else>等级三</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {getMethod} from "@/HttpRequest/baseRequest";

export default {
  name: "AdminList",
  data() {
    return {
      rightsList: []
    }
  },
  mounted() {
    this.getRightsList()
  },
  methods: {
    getRightsList() {
      getMethod('rights/list').then(res => {
        if (res.data.meta.status === 200) {
          console.log(res.data.data);
          this.rightsList = res.data.data;
        } else {
          alert('获取权限列表失败！')
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
h3{
  padding: 20px 30px;
}
</style>