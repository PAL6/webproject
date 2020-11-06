<template>
  <div class="change_info">
    <el-dialog title="修改用户信息" :visible.sync="dialogVisible" width="50%" :before-close="closeDialog">
      <!--信息修改处-->
      <div class="info_box">
        <el-form ref="form" :model="query" label-width="80px" label-position="left">
          <el-input :placeholder="userInfo.username"  :disabled="true" class="username">
          </el-input>
          <el-form-item label="邮箱">
            <el-input v-model="userInfo.email"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="userInfo.mobile"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <!--底部按钮处-->
      <span slot="footer" class="dialog-footer">
                <el-button @click="closeDialog">取 消</el-button>
                <el-button type="primary" @click="changeUserInfo">确 定</el-button>
             </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: "ChangeUserInfo",
  data() {
    return {
      query: {
        'username': '',
        'email': '',
        'mobile': '',
        'id': 1872
      }
    }
  },
  props: {
    dialogVisible: {
      type: Boolean,
    },
    userInfo:{
      type:Object,
      default:{}
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    changeUserInfo() {
      this.$emit('changeUserInfo');
    }
  },
}
</script>

<style scoped>
.info_box {
  width: 100%;
}

.username {
  margin-bottom: 20px;
}
</style>