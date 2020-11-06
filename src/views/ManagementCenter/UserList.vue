<template>
  <div class="user_list">
    <!--头部区域-->
    <div class="header">
      <h3>用户列表</h3>
      <el-input
          class="input_area"
          placeholder="请输入内容"
          v-model="queryParam.query"
          @change="getUsers"
          @clear="getUsers"
          clearable>
      </el-input>
      <el-button type="primary" icon="el-icon-search" @click="getUsers">搜索</el-button>
    </div>
    <!--添加用户区域-->
    <AddUserArea @add="addUser"></AddUserArea>
    <!--用户表格-->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="id" label="id" width="80"></el-table-column>
      <el-table-column prop="create_time" label="创建日期">
        <template slot-scope="scope">{{ scope.row.create_time | DateFormatMethod }}</template>
      </el-table-column>
      <el-table-column prop="username" label="姓名"></el-table-column>
      <el-table-column prop="role_name" label="身份"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column prop="email" label="email"></el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-switch
              v-model="scope.row.mg_state"
              active-color="#13ce66"
              inactive-color="#8c8c8c"
              @change="changeState(scope.row)">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" circle @click="toggleDialog(scope.row)"></el-button>
          <el-button type="danger" icon="el-icon-delete" circle @click="toggleDeleteDialog(scope.row)"></el-button>
          <!--修改用户资料区域-->
          <ChangeUserInfo :dialog-visible="showDialog" @changeUserInfo="change(defaultInfo)" @close="close"
                          :user-info="defaultInfo"></ChangeUserInfo>
          <DeleteDialog :show-delete="showDeleteDialog" @close="closeDeleteDialog"
                        @determine="determine(deleteUser)"></DeleteDialog>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页区域-->
    <div class="page_num">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[3, 5, 7, 9]"
          :page-size="queryParam.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="this.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {getMethod, postMethod, putMethod, deleteMethod} from "@/HttpRequest/baseRequest";
import AddUserArea from "@/components/center/AddUserArea";
import ChangeUserInfo from "@/components/center/ChangeUserInfo";
import DeleteDialog from "@/components/center/DeleteDialog";

export default {
  name: "UserList",
  components: {
    AddUserArea,
    ChangeUserInfo,
    DeleteDialog
  },
  data() {
    return {
      tableData: [],
      //请求参数
      queryParam: {
        pageNum: 1,
        pageSize: 5,
        query: '',
      },
      total: 0,
      showDialog: false,
      showDeleteDialog: false,
      defaultInfo: {},
      deleteUser:{}
    }
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      getMethod('users', {
        'pagenum': this.queryParam.pageNum,
        'pagesize': this.queryParam.pageSize,
        'query': this.queryParam.query
      }).then(res => {
        if (res.data.meta.status === 200) {
          this.tableData = res.data.data.users;
          this.total = res.data.data.total;
        } else {
          alert('请先登录')
        }
      }).catch(err => {
        console.log(err);
      })
    },

    //更改状态
    changeState(userInfo) {
      let type = !userInfo.ms_state;
      putMethod(`users/${userInfo.id}/state/${type}`).then(res => {
        console.log(res.meta.status);
        if (res.meta.status === 200) {
          alert('设置状态成功');
        } else {
          userInfo.mg_state = !userInfo.mg_state;
          alert('设置失败！')
        }
      }).catch(err => {
        console.log(err);
      })
    },

    //添加用户
    addUser(query) {
      postMethod('users', {
        username: query.username,
        password: query.password,
        email: query.email,
        mobile: query.mobile
      }).then(res => {
        if (res.data.meta.status === 201) {
          alert(res.data.meta.msg)
          this.getUsers();
        } else {
          alert(res.data.meta.msg)
        }
      }).catch(err => {
        console.log(err);
      })
    },
    // 分页点击事件
    handleSizeChange(val) {
      this.queryParam.pageSize = val;
      this.getUsers()
    },
    handleCurrentChange(val) {
      this.queryParam.pageNum = val;
      this.getUsers();
    },

    //弹出框点击事件
    close() {
      this.showDialog = false;
    },
    toggleDialog(userInfo) {
      this.defaultInfo = userInfo;
      this.showDialog = !this.showDialog;
    },
    change(user) {
      putMethod(`users/${user.id}`, {
        'email': user.email,
        'mobile': user.mobile
      }).then(res => {
        if (res.meta.status === 200) {
          alert('更新成功');
          this.getUsers();
        } else {
          alert('更新失败');
          this.getUsers()
        }
      }).catch(err => {
        this.getUsers();
        console.log(err);
      })
      this.showDialog = !this.showDialog;
    },

    //删除单个用户
    closeDeleteDialog() {
      this.showDeleteDialog = false;
    },
    toggleDeleteDialog(deleteToggle) {
      this.deleteUser = deleteToggle;
      this.showDeleteDialog = !this.showDeleteDialog;
    },
    determine(deleteUser) {
      console.log(deleteUser);
      deleteMethod(`users/${deleteUser.id}`).then(res => {
        if (res.meta.status === 200) {
          alert('删除成功');
          this.getUsers();
        } else {
          alert('删除失败!')
        }
      }).catch(err => {
        console.log(err)
      })
      this.showDeleteDialog = false;
    }
  },

  //格式化时间
  filters: {
    DateFormatMethod(time) {
      let date = new Date(parseInt(time * 1000));
      let year = date.getFullYear();
      let m = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
      let d = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
      return year + '-' + m + '-' + d
    }
  }
}
</script>

<style scoped>
.user_list {
  height: 100%;
}

.header h3 {
  display: inline-block;
  padding: 20px 20px;
  font-size: 30px;
}

.header .input_area {
  width: 300px;
  display: inline-block;
}

.page_num {
  text-align: center;
  width: 90%;
  padding: 20px;
}
</style>