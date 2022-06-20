import { request } from '../service'

/** 扫码登录接口 */
export const reqGetUserInfo = () => {
	return request.get({
		url: '/throwdata/throw/data/user/getUserInfo'
	})
}
