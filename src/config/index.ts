const env = process.env.PLASMO_PUBLIC_ENV

const config = {
	development: {
		loginUrl: `http://test.main.newrank.cn/user/login?displayType=login&backUrl=${encodeURIComponent(
			window.location.href
		)}&source=130&type=121&scene=adinsight_login`
	},
	test: {
		loginUrl: `http://test.main.newrank.cn/user/login?displayType=login&backUrl=${encodeURIComponent(
			window.location.href
		)}&source=130&type=121&scene=adinsight_login`
	},
	production: {
		loginUrl: `https://newrank.cn/user/login?displayType=login&backUrl=${encodeURIComponent(
			window.location.href.replace(/^http:\/\//g, 'https://')
		)}&source=130&scene=adinsight_login`
	}
}[env]

export default config
