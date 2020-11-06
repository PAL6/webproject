<template>
	<div class="user_box">
		<p>登录成功</p>
    <h2>{{$store.state.token}}</h2>
	</div>
</template>

<script>
	
	export default{
		name:'UserInfo'
	}
</script>

<style>
	.user_box{
		width: 345px;
		height: 400px;
		text-align: center;
		border: 1px solid gray;
		background-color: #00FFFF;
	  margin: 0 auto;
		font-size: 35px;
		color: #FF0000;
	}
</style>
