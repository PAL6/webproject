<template>
  <div class="home">

  </div>
</template>

<script>
import Goods_item from "@/components/home/Goods_item";

export default {
  name: 'Home',
  components: {
    Goods_item,
  },
  data() {
    return {
      leftMenus:[]
    }
  },

}


</script>

<style scoped>
.home{
  padding-top: 50px;
}
.banner_box img {
  display: inline-block;
  width: 100%;
  height: 200px;
}
</style>
