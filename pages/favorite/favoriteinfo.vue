<template>
	<view>
		
		<u-sticky offset-top="-100" >
			<view style="background-color: #fda827;height: 200rpx;padding: 64rpx 20rpx 20rpx 20rpx;display: flex;width: 100%;justify-content: space-between;align-items: center;">
				<view style="width: 440rpx;display: flex;">
					<u-icon @click="goback()"  name="arrow-left" size="40"></u-icon>
					<view style="text-align:left;line-height: 1.5em;width: 400rpx;"><h3>{{info.name}}</h3></view>
				</view>
				<view style="text-align: right;font-weight: 800;">
					<u-icon name="list" size="50"></u-icon>
				</view>
			</view>
		</u-sticky>
		
		<view style="margin-top: 40rpx;">
			<image style="width: 100%;" :src="info.img"></image>
		</view>
		<view class="u-p-20">
			<view class="u-font-35">{{info.name}}</view>
			<view style="margin-top: 20rpx;display: flex;justify-content: space-between;">
				<view>
					<u-rate :disabled="true" size="40" active-color="#80df2e" v-model="info.rate" ></u-rate>
				</view>
				<view>
					<u-icon name="heart-fill" color="#fda1ab" size="50"></u-icon>
					<u-icon class="u-m-l-40" name="file-text-fill" color="#fda1ab" size="50"></u-icon>
				</view>
			</view>
		</view>
		
		<view style="width: 100%;height: 80rpx;background-color: #ddd;display: flex;align-items: center;" class="u-border-bottom ">
			<view style="margin-left: 20rpx;">Ingredients</view>
		</view>
		
		<view class="u-p-20">
			<rich-text :nodes="info.ingredients"></rich-text>
		</view>
		
		
		
		<view style="width: 100%;height: 80rpx;background-color: #ddd;display: flex;align-items: center;" class="u-border-bottom ">
			<view style="margin-left: 20rpx;">Method</view>
		</view>
		
		<view style="padding: 20rpx;">
			<view style="display: flex;margin-top: 40rpx;" v-for="(item,index) in info.method">
				<view>Step{{index+1}}</view>
				<view style="margin-left: 50rpx;">{{item}}</view>
			</view>
		</view>
		
		<view style="width: 100%;height: 80rpx;background-color: #ddd;display: flex;align-items: center;" class="u-border-bottom ">
			<view style="margin-left: 20rpx;">Nutritional Information</view>
		</view>
		
		<u-grid col="2" :border="false">
			<u-grid-item v-for="(item,index) in info.Nutritional_Information">
				<view>{{item}}</view>
			</u-grid-item>
		</u-grid>
		
		<view style="width: 100%;height: 80rpx;background-color: #ddd;display: flex;align-items: center;" class="u-border-bottom ">
			<view style="margin-left: 20rpx;">Comments & Rating</view>
		</view>
		
		
		<view style="padding: 50rpx;">
			<view style="background-color: #fcefcd;height: 300rpx;padding: 20rpx;">
				
				<view style="text-align: center;font-weight: 700;">{{info.name}}</view>
				<view style="text-align: center;margin-top: 30rpx;">
					<u-rate :disabled="true" size="40" active-color="#fdc708" v-model="info.userrate" ></u-rate>
				</view>
				
				<view style="display: flex;justify-content: space-between;margin-top: 40rpx;">
					<view style="border: 2rpx solid #000;width: 250rpx;height: 100rpx;border-radius: 10rpx;padding: 10rpx;">
						<view style="text-align: center;">
							<u-icon name="star" ></u-icon>
						</view>
						
						<view class="u-font-25" style="text-align: center;">
							RATE AND REVIEW
						</view>
					</view>
					
					<view style="border: 2rpx solid #000;width: 250rpx;height: 100rpx;border-radius: 10rpx;padding: 10rpx;">
						<view style="text-align: center;">
							<u-icon name="question-circle" ></u-icon>
						</view>
						
						<view class="u-font-25" style="text-align: center;">
							ASK A QUESTION
						</view>
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
				info:{}
			}
		},
		onLoad(op) {
			// 获取详情信息
			this.$a({
				url:'/typeinfolist.json'
			}).then(res=>{
				// 筛选出对应typeid的数据
				var list=res.data.filter((item)=>{
					return item.typeid==op.id
				})
				// 拿出这个筛选完成的对象给info
				this.info=list[0]
				console.log(list);
			})
			
		},
		methods: {
			goback(){
				// 点击返回按钮触发
				uni.navigateBack({
					"delta":1
				})
			}
		}
	}
</script>