<template>
  <!--添加用户区域-->
  <div class="add_user_area">
    <el-form :model="query" :rules="tip" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username" class="input_query">
        <el-input v-model="query.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" class="input_query">
        <el-input v-model="query.password"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email" class="input_query">
        <el-input v-model="query.email"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="mobile" class="input_query">
        <el-input v-model="query.mobile"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" plain class="add_btn" @click="add(query)">添加</el-button>
  </div>
</template>

<script>
export default {
  name: "AddUserArea",
  data() {
    //校验邮箱
    let checkEmail = (rule, value, cd) => {
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
      if (regEmail.test(value)) {
        return cd()
      }
      cd(new Error('请输入合法的邮箱'));
    }
    return {
      query: {
        'username': '',
        'password': '',
        'email': '',
        'mobile': ''
      },
      tip: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 8, message: '长度在 6 到 8 个字符', trigger: 'blur'}
        ],
        email: [
          {validator: checkEmail, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    add(query) {
      this.$refs.ruleForm.validate(valid => {
        if (!valid) {
          alert('请输入正确参数');
        } else {
          this.$emit('add', query);
        }
      })
    }
  }
}
</script>

<style scoped>
.add_user_area {
  height: 190px;
  text-align: center;
  background-color: pink;
  padding: 10px 10% 0 10%;
}

.input_query {
  display: inline-block;
  width: 50%;
}

.add_btn {
  width: 60%;
  margin: 10px 20%;
}
</style>