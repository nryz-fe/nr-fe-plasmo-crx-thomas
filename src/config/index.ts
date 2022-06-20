const env = process.env.PLASMO_PUBLIC_ENV

export const config = {
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

export const proxy_url = {
	production: {
		api: 'https://api.newrank.cn',
		ade: 'https://a.newrank.cn',
		nr: 'https://newrank.cn/',
		erp: 'https://erp.newrank.cn'
	},
	test: {
		api: 'http://test.api.newrank.cn',
		ade: 'http://test.a.newrank.cn',
		nr: 'http://test.main.newrank.cn',
		erp: 'http://test.erp.newrank.cn'
	},
	development: {
		api: 'http://test.api.newrank.cn',
		ade: 'http://test.a.newrank.cn',
		nr: 'http://test.main.newrank.cn',
		erp: 'http://test.erp.newrank.cn'
	}
}[env]
