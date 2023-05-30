export default(info)=>{
	return new Promise((resolve,reject)=>{
		// 加载数据图标
		uni.showLoading({
			title:'Loading……'
			
		})
		// Firebase数据库地址
		let baseUrl="https://application-99523-default-rtdb.firebaseio.com"
		// 封装的请求
		uni.request({
			url:baseUrl+info.url,
			method:info.method?info.method:"GET",
			data:info.data?info.data:{},
			success: (res) => {
				uni.hideLoading()
				// 返回请求数据
				resolve(res)
			},
			fail: (res) => {
				reject(res)
			}
		})
	})
}