import request from '../fetch/intercept'

/** 获取用户信息 */
export const getUserInfo = () => {
	return request.get('/throwdata/throw/data/user/getUserInfo')
}
