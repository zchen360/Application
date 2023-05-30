<template>
	<view class="" >
		
		<view style="background-color: #fda827;height: 340rpx;padding: 64rpx 50rpx 50rpx 50rpx;">
			<view style="border-radius: 50%;background-color: #f29a19;width: 200rpx;height: 200rpx;display: flex;justify-content: center;align-items: center;">
				<image src="/static/img/logo.png" style="width: 100rpx;height: 100rpx;"></image>
			</view>
			
			<view style="justify-content: space-between;background-color: #FFF;width:100%;height: 100rpx;padding: 20rpx;margin-top: 20rpx;display: flex;align-items: center;" class="uni-shadow-lg">
				<view >
					<u-icon name="list" size="50"></u-icon>
					
				</view>
				<view style="width: 400rpx;">
					<u-input placeholder="INGEDIENT,DISH,KEYWORO..."></u-input>
				</view>
				<view>
					<u-icon name="search" color="#00aaff" size="50rpx"></u-icon>
				</view>
				
			</view>
		</view>
		
		
		
		<view style="padding: 64rpx 50rpx 50rpx 50rpx;">
			<u-grid col="4" :border="false">
				<u-grid-item v-for="(item,index) in data">
					
					<view>
						<view>
							<image style="width: 150rpx;border-radius: 50%;height: 150rpx;" :src="item.img"></image>
						</view>
						<view style="height: 100rpx;text-align: center;">
							<h4>{{item.name}}</h4>
						</view>
					</view>
				</u-grid-item>
				
			</u-grid>
		</view>
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:[],
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				list:[
					{
						img:'/static/img/foods01.jpg',
						title:'ASIAN'
					},
					{
						img:'/static/img/foods02.jpg',
						title:'MIDDLE-EASTERN'
					},
					{
						img:'/static/img/foods03.jpg',
						title:'WESTERN'
					},
					{
						img:'/static/img/foods01.jpg',
						title:'ASIAN'
					},
					{
						img:'/static/img/foods02.jpg',
						title:'MIDDLE-EASTERN'
					},
					{
						img:'/static/img/foods03.jpg',
						title:'WESTERN'
					},
					{
						img:'/static/img/foods01.jpg',
						title:'ASIAN'
					},
					{
						img:'/static/img/foods02.jpg',
						title:'MIDDLE-EASTERN'
					}
					
				]
				
			}
		},
		onLoad() {
			// var ref=this.$a.database().ref();
			// ref.on("value",(res)=>{
			// 	console.log(res);
			// })
			// 获取页面的数据渲染出来
			this.$a({
				url:'/category.json'
			}).then(res=>{
				console.log(res);
				this.data=res.data
			})
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
