<template>
  <div class="box_k">
    <span>{{ title + ' : '}}</span>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: "MsgBox",
  props: {
    title: {
      type: String,
      default: '用户名'
    },
    msg: {
      type: String,
      default: "ak47"
    }
  }
}
</script>

<style scoped>
.box_k{
  margin: 20px 20px;
}
span{
  color: rebeccapurple;
  font-size: 25px;
}
</style>