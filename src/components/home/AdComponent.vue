<!-- 广告组件 -->
<template>
	<div class="ad_box">
		<img :src="ad" alt="广告图" :title="title">
	</div>
</template>
<script>
	export default{
		name:"AdWidget",
		props:{
			ad:{
				type:String,
				default:require('../../assets/images/ad/bg2.jpg')
			},
      title:{
			  type:String,
        default: '广告图'
      }
		}
	}
</script>
<style scoped="scoped">
	.ad_box{
		height: 120px;
		width: 100%;
	}
	.ad_box img{
		height: 100%;
		width: 100%;
	}
</style>
