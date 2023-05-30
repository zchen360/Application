<template>
	<view>
		<view style="background-color: #fda827;height: 140rpx;padding: 64rpx 50rpx 50rpx 50rpx;display: flex;width: 100%;justify-content: space-between;">
			<view></view>
			<view style="text-align:center;"><h1>Shopping List</h1></view>
			<view style="text-align: right;font-weight: 800;">Edit</view>
		</view>
		
		<view style="padding: 50rpx;">
			<view class="uni-shadow-lg" style="height: 100rpx;padding: 10rpx;display: flex;align-items: center;">
				<view>
					<u-icon name="plus" size="80"></u-icon>
				</view>
				<view>
					<view @click="show=true" style="margin-left: 40rpx;" class="u-tips-color">Add An Item</view>
				</view>
			</view>
		</view>
		
		
		<view v-for="(item,index) in list">
			<view style="width: 100%;background-color: #DDD;height: 80rpx;display: flex;align-items: center;justify-content: space-between;">
				<view style="margin-left: 40rpx;">
					{{item.name}}
				</view>
				<view style="margin-right: 20rpx;">
					<u-icon name="arrow-down" ></u-icon>
				</view>
			</view>
			
			<view style="padding: 0 50rpx 50rpx;" >
				
				<view v-for="(ite,inde) in item.list" v-if="ite!=''">
					<view style="display: flex;align-items: center;margin-top: 20rpx;">
						<view style="width: 40rpx;height: 40rpx;border: 2rpx solid #000;"></view>
						<view style="margin-left: 40rpx;">{{ite}}</view>
						
					</view>
				</view>
				
			
				
			</view>
		</view>
	
		
		
		
		
		
		<u-modal @confirm="confirm" v-model="show" cancel-text="cancel" show-cancel-button="" confirm-text="confirm" title="Add Dishes">
			<view class="u-p-40">
				<u-form>
					<u-form-item label="dish">
						<u-input v-model="singledish.name"  placeholder="Please enter the name of the dish"></u-input>
					</u-form-item>
					
					<u-form-item label="Burden1" label-width="150">
						<u-input v-model="singledish.list[0]"  placeholder="the name of the Burden1"></u-input>
					</u-form-item>
					<u-form-item label="Burden2" label-width="150">
						<u-input v-model="singledish.list[1]"  placeholder=" the name of the Burden2"></u-input>
					</u-form-item>
					<u-form-item label="Burden3" label-width="150">
						<u-input v-model="singledish.list[2]"  placeholder="the name of the Burden3"></u-input>
					</u-form-item>
					<u-form-item label="Burden4" label-width="150">
						<u-input v-model="singledish.list[3]"  placeholder="the name of the Burden4"></u-input>
					</u-form-item>
				</u-form>
			</view>
		</u-modal>
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				show:false,
				Burden1:'',
				Burden2:'',
				Burden3:'',
				Burden4:'',
				singledish:{
					name:'',
					list:['','','','']
				}
				
			}
		},
		onLoad() {
			// 页面加载出发个方法
			this.getlist()
		},
		methods: {
			confirm(){
				// 提交表单之后更新数据库信息
				this.list.push(this.singledish)
				
				// 向数据库发送更新请求
				
				this.$a({
					url:'/menu.json',
					method:"PUT",
					data:this.list
				}).then(res=>{
					console.log("@@",res);
			
				})
			},
			getlist(){
				this.$a({
					url:'/menu.json'
				}).then(res=>{
					console.log("@@",res);
					this.list=res.data
				})
				
			}
			
		}
	}
</script>

<style>

</style>
