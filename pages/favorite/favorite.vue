<template>
	<view>
		
		<view style="background-color: #fda827;height: 140rpx;padding: 64rpx 50rpx 50rpx 50rpx;display: flex;width: 100%;justify-content: space-between;">
			<view></view>
			<view style="text-align:center;"><h1>Recipes</h1></view>
			<view style="text-align: right;font-weight: 800;">Edit</view>
		</view>
		
		<view style="padding: 20rpx;">
			<view style="justify-content: space-between;background-color: #FFF;width:100%;height: 100rpx;padding: 20rpx;margin-top: 20rpx;display: flex;align-items: center;" class="uni-shadow-lg">
				<view>
					<u-icon name="search" color="#00aaff" size="50rpx"></u-icon>
				</view>
				<view  style="width: 600rpx;">
					<u-input @keydown.enter="search()"  placeholder="SEARCH COLLECTED RECIPES"></u-input>
				</view>
			</view>
		</view>
		
		<view>
			
			<view style="padding: 20rpx;">
				
				<view @click="gopage(item.typeId)" v-for="(item,index) in list" style="display: flex;justify-content: space-between;align-items: center;padding: 20rpx;">
					
					<view>
						<image style="width: 150rpx;height: 150rpx;border-radius: 50%;" :src="item.img"></image>
						
					</view>
					<view style="width: 450rpx;">
						<view style="font-weight: 800;" class="u-font-35">{{item.name}}</view>
						<view class="u-font-25 u-tips-color">{{item.tips}}</view>
					</view>
					<view>
						<u-icon name="arrow-right"></u-icon>
					</view>
					
				</view>
				
				
			</view>
			
			
		</view>
		
		
		
	</view>
</template>

<script>
	import { getDatabase, ref, onValue} from "firebase/database";
	export default {
		data() {
			return {
				list:[]
			}
		},
		onLoad() {
			// 获取数据库数据给list数组
			this.$a({
				url:'/variety.json'
			}).then(res=>{
				this.list=res.data
			})
			
		},
		methods: {
			gopage(id){
				// 点击跳转到详情页
				uni.navigateTo({
					url:'favoriteinfo?id='+id
				})
			}
		}
	}
</script>

<style>

</style>
