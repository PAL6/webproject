<template>
  <div class="home">
    <el-table :data="goodsList" border style="width: 100%" stripe>
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="goods_id" label="id"></el-table-column>
      <el-table-column prop="goods_name" label="商品名称"></el-table-column>
      <el-table-column prop="goods_price" label="商品价格"></el-table-column>
      <el-table-column label="商品重量">
        <template v-slot="scope">
          {{ scope.row.goods_weight + 'kg'}}
        </template>
      </el-table-column>
      <el-table-column label="添加时间">
        <template v-slot="scope">
          {{scope.row.add_time | DateFormatMethod}}
        </template>
      </el-table-column>
      <el-table-column label="更新时间">
        <template v-slot="scope">
          {{scope.row.upd_time | DateFormatMethod}}
        </template>
      </el-table-column>
      </el-table>
    <!-- 分页区域-->
    <div class="page_num">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[15, 20, 25, 30]"
          :page-size="query.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="this.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Goods_item from "@/components/home/Goods_item";
import {getMethod} from "@/HttpRequest/baseRequest";


export default {
  name: 'Home',
  components: {
    Goods_item,
  },
  data() {
    return {
      goodsList: [],
      query: {
        'pageNum': 1,
        'pageSize': 15,
        'query': ''
      },
      total:0
    }
  },
  mounted() {
    this.getGoods();
  },
  methods: {
    getGoods() {
      getMethod('goods', {
        'pagenum': this.query.pageNum,
        'pagesize': this.query.pageSize,
        'query': this.query.query
      }).then(res => {
        if (res.data.meta.status === 200) {
          this.total = res.data.data.total;
          this.goodsList = res.data.data.goods;
        } else {
          alert('商品获取失败');
        }
      }).catch(err => {
        console.log(err);
      })
    },
   //分页点击事件
    handleSizeChange(val){
      this.query.pageSize = val;
      this.getGoods();
    },
    handleCurrentChange(val){
      this.query.pageNum = val;
      this.getGoods();
    }
  },
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
.home {
  padding-top: 50px;
}

.banner_box img {
  display: inline-block;
  width: 100%;
  height: 200px;
}

.page_num {
  text-align: center;
  width: 90%;
  padding: 20px;
}
</style>
