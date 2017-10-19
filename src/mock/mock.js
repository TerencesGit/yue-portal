import axios from 'axios'
import Utils from '@/assets/js/utils'
import MockAdapter from 'axios-mock-adapter'
import _UserList from './data.js'
const retObj = {
	code: '0001',
	message: '操作成功',
	result: {}
}
const retExpireObj = {
	code: '0000',
	message: '尚未登录或当前会话已过期',
	result: {}
}
export default {
	bootstrap () {
		let mock = new MockAdapter(axios);
		// 登录
		mock.onPost('/baseInter/login.do').reply(config => {
			let { email, password } = JSON.parse(config.data);
			let loginUser = _UserList.filter(user => user.email === email)[0];
			if(loginUser) {
				if(loginUser.password === password) {
					return new Promise((resolve, reject) => {
						setTimeout(() => {
							retObj.result.userInfo = loginUser;
							resolve([200, retObj])
						}, 1000)
					})
				} else {
					let retObj = {
						code: '1002',
						message: '密码错误'
					}
					return new Promise((resolve, reject) => {
						setTimeout(() => {
							resolve([200, retObj])
						}, 1000)
					})
				}
			} else {
				let retObj = {
					code: '1001',
					message: '用户名不存在'
				}
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve([200, retObj])
					}, 1000)
				})
			}
		})
		// 注册
		mock.onPost('/baseInter/register.do').reply(config => {
			let data = JSON.parse(config.data);
			console.log(data)
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, retObj])
				}, 500)
			})
		})
		// 查询邮箱或手机号是否已被使用
		mock.onGet('/baseInter/accountFind.do').reply(config => {
			let { account } = config.params;
			// console.log(account)
			let _user = _UserList.filter(user => user.email === account);
			let finded = _user.length > 0 ? true : false;
			retObj.result = {
				finded
			}
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, retObj])
				}, 500)
			})
		})
		// 获取短信验证码
		mock.onGet('/baseInter/getMobileSmsCode.do').reply(config => {
			let { mobile } = config.params;
			retObj.result = {}
			return new Promise((resolve, reject) => {
				setTimeout(() => {
				resolve([200, retObj])
				}, 500)
			})
		})
		// 获取用户信息
		mock.onGet('/accountInter/getMyInfo.do').reply(config => {
			let userId = Utils.getCookie('userId');
			console.log(userId)
			if(!userId) {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve([200, retExpireObj])
					}, 500)
				})
			}
			let userInfo = _UserList.filter(user => user.userId == userId)[0];
			let retObj = {
				code: '0001',
				message: '操作成功',
				result: {
					userInfo,
				}
			}
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, retObj])
				}, 500)
			})
		})
		// 创建加盟信息
		mock.onPost('/baseInter/createJoinInfo.do').reply(config => {
			console.log(JSON.parse(config.data))
			retObj.result = {}
			return new Promise((resolve, reject) => {
				setTimeout(() => {
						resolve([200, retObj])
				}, 500)
			})
		})
	}
}