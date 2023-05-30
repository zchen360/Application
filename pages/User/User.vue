<template>
	<view>
		<view style="background-color: #fda827;height: 340rpx;padding: 64rpx 50rpx 50rpx 50rpx;display: flex;align-items: center;">
			<view style="text-align: right;display: flex;align-items: center;margin-left: 250rpx;margin-top: 100rpx;">
				
				<view style="margin-right: 50rpx;">
					<h1>Sign in</h1>
				</view>
				<view>
					<image style="width: 150rpx;height: 150rpx;border-radius: 50%;" src="/static/img/foods02.jpg"></image>
					
				</view>
				
			</view>
		</view>
		
		
		<view style="padding: 50rpx;">
			
			<view v-for="(item,index) in list" style="display: flex;justify-content: space-between;align-items: center;padding: 20rpx;">
				
				<view>
					<view style="width: 80rpx;height: 80rpx;background-color: #d1d1d1;border-radius: 50%;display: flex;justify-content: center;align-items: center;">
						<u-icon :name="item.icon" color="#000" size="50"></u-icon>
					</view>
				</view>
				<view style="width: 450rpx;">
					<view style="font-weight: 800;" class="u-font-35">{{item.name}}</view>
					<view class="u-font-25 u-tips-color">{{item.tip}}</view>
				</view>
				<view>
					<u-icon name="arrow-right"></u-icon>
				</view>
				
			</view>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						icon:'setting-fill',
						name:"My Account",
						tip:"Account settings"
					},
					{
						icon:'clock-fill',
						name:"History",
						tip:"Review history recipos"
					},
					{
						icon:'star-fill',
						name:"Rating",
						tip:"Satiafoctiong"
					},
					{
						icon:'chat-fill',
						name:"Feedback",
						tip:"QivefeecRvacks"
					},
					{
						icon:'coupon-fill',
						name:"Premium",
						tip:"further services"
					}
					
					
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
