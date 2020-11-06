<template>
	<div class="login">
		<div class="header">
			<a href="#">扫码登录</a>
			<a href="#" :class="titleRed===1?'red':''">账户登录</a>
		</div>
		<!-- 账号密码输入处 -->
		<div class="input_box">
			<form>
				<div class="user_name" :class="isActive===1?'active':''">
					<label class="iconfont icon-mygroup"></label>
					<input type="text" name="zhanghao" placeholder="邮箱/用户名/登录手机" @focus="changeIconColor(1)" @blur="fu"/>
				</div>
				<div class="user_password" :class="isActive===2?'active':''">
					<label class="iconfont icon-modifypassword"></label>
					<input type="text" name="perfile_key" placeholder="密码"  @focus="changeIconColor(2)" @blur="fu"/>
				</div>
				<!-- 忘记密码按钮 -->
				<a href="#" class="forget_psw">忘记密码</a>
				<!-- 登录按钮 -->
				<button class="login_btn">登录</button>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'LoginBox',
		data(){
			return{
				isActive:0,
				titleRed:1
			}
		},
		created(){
			this.print();
		},
		methods:{
			changeIconColor(i){
				this.isActive = i;
			},
			fu(){
				this.isActive = 0;
			},
			print(){
				console.log(this.$store.state.token)
			}
		},
	}
</script>

<style>
	.login {
		width: 345px;
		height: 400px;
		border: 1px solid gray;
	  margin: 0 auto;
	}

	.header {
		border-bottom: 1px solid gray;
	}

	.header a {
		text-decoration: none;
		display: inline-block;
		text-align: center;
		height: 50px;
		width: 50%;
		color: black;
		line-height: 50px;
		font-size: 20px;
	}
	
	.red{
		color: #FF0000!important;
	}

	.input_box {
		position: relative;
		height: 259px;
		width: 325px;
		padding: 20px 10px;
		border-bottom: 1px solid gray;
	}

	.input_box input {
		display: inline-block;
		width: 285px;
		height: 40px;
		padding-left: 10px;
		outline: none;
		margin-bottom: 20px;
		border: gray solid 1px;
	}

	.user_name,
	.user_password {
		display: flex;
	}

	.user_name label {
		color: black;
		display: inline-block;
		height: 42px;
		line-height: 40px;
		text-align: center;
		background: #808080;
		width: 38px;
	}

	.user_password label {
		color: black;
		display: inline-block;
		height: 42px;
		line-height: 40px;
		text-align: center;
		background: #808080;
		width: 38px;
	}

	.forget_psw {
		float: right;
		text-decoration: none;
		color: black;
	}

	.login_btn{	
		position: absolute;
		bottom: 20px;
		width: 325px;
		height: 40px;
		background-color: red;
		font-size: 20px;
		color: white;
	  border: none;
	}
	.active label{
		background-color: aqua!important;
	}
</style>
