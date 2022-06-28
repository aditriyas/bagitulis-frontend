import defaultMeta from './config/defaultMeta'
// import sitemapConfig from './config/sitemapConfig'
import {
	I18N
} from './lang/localeConfig'


export default {
	target: 'server',
	// Duplicate .env
	env: {
		BASE_URL: process.env.BASE_URL,
		API_URL: process.env.API_URL,
		RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
		GTAG_ID: process.env.GTAG_ID
	},
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'Bagitulis - Online Repository',
		meta: defaultMeta,
		link: [{
				rel: 'apple-touch-icon',
				href: 'bagitulis-icon.png'
			},
			{
				rel: 'icon',
				type: 'image/png',
				href: '/bagitulis-icon.png'
			}
		]
	},

	render: {
		bundleRenderer: {
			shouldPreload: (file, type) => {
				return ['script', 'style', 'font'].includes(type)
			}
		}
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [
		'~/assets/scss/main.scss',
		'vue-select/dist/vue-select.css',
		'vue-slick-carousel/dist/vue-slick-carousel.css'
	],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [{
			src: './plugins/vue-slick-carousel.js'
		},
		{
			src: '~/plugins/helpers.js'
		},
		{
			src: '~/plugins/vue-select.js'
		},
		{
			src: '~/plugins/vuelidate'
		}
	],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/auth-next',
		'@nuxtjs/style-resources',
		'@nuxtjs/sitemap',
		'@nuxtjs/robots',
		['@nuxtjs/i18n', I18N],
		[
			'@nuxtjs/recaptcha',
			{
				hideBadge: false,
				language: 'id',
				siteKey: process.env.RECAPTCHA_SITE_KEY,
				version: 2,
				size: 'normal'
			}
		]
	],
	sitemap: {
		defaults: {
			changefreq: 'daily',
			priority: 0.8,
			lastmod: new Date()
		},
		path: '/sitemap.xml',
		exclude: []
	},

	// i18n module configuration (https://i18n.nuxtjs.org/basic-usage)
	i18n: {
		locales: ['id', 'en'],
		defaultLocale: 'id',
		vueI18n: {
			fallbackLocale: 'en',
			messages: {
				id: {
					welcome: 'Selamat Datang'
				},
				en: {
					welcome: 'Welcome'
				}
			}
		}
	},

	// AUTH
	auth: {
		strategies: {
			laravelSanctum: {
				provider: 'laravel/sanctum',
				url: 'http://auth-api-training.test',
				endpoints: {
					login: {
						url: '/api/login'
					},
					logout: {
						url: '/api/logout'
					},
					user: {
						url: '/api/user'
					}
				},
				user: {
					property: false
				}
			}
		},
		redirect: {
			login: '/id/masuk',
			logout: '/id',
			home: '/id'
		}
	},

	styleResources: {
		scss: ['./assets/scss/partials/_variables.scss']
	},

	router: {
		middleware: ['auth']
	},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
		extend(config, ctx) {},
		postcss: {
			preset: {
				autoprefixer: {
					overrideBrowserslist: ['last 2 versions']
				}
			}
		}
	}
}
