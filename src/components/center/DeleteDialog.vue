<template>
  <div class="delete">
    <el-dialog
        title="删除用户！"
        :visible.sync="showDelete"
        :before-close="close"
        width="30%">
      <span>确定删除该用户？</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="close">取 消</el-button>
    <el-button type="primary" @click="determine">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "DeleteDialog",
  props:{
    showDelete:{
      type:Boolean,
    }
  },
  methods:{
    close(){
      this.$emit('close');
    },
    determine(){
      this.$emit('determine');
    }
  }
}
</script>

<style scoped>

</style>