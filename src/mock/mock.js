import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const retObj = {
	code: '0001',
	message: '操作成功',
	result: {}
}
export default {
	bootstrap () {
		let mock = new MockAdapter(axios);
		mock.onPost('/baseInter/login.do').reply(config => {
			let data = JSON.parse(config.data)
			console.log(data)
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, retObj])
				}, 1000)
			})
		})
	}
}