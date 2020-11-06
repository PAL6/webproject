<template>
  <div class="good_item">
    <img :src="goods_img" alt="商品图">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "Goods_item",
  props: {
    goods_img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '商品'
    }
  }
}
</script>

<style scoped>
.good_item{
  display: inline-block;
  width: 350px;
  text-align: center;
  margin: 10px  10px 50px 10px;
  box-sizing: border-box;
  padding: 20px 10px 0 10px;
  border: 1px solid #2b4b6b;
  border-radius: 8px;
}
.good_item img{
  height: 400px;
  width: 80%;
}
.good_item h2{
  padding-left: 15%;
  width: 70%;
  margin: 10px 0;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -moz-box;
  -moz-line-clamp: 2;
  -moz-box-orient: vertical;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
}
</style>