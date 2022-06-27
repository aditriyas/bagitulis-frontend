import id from './id-ID.js'
import en from './en-US.js'

export const I18N = {
	strategy: 'prefix',
	seo: false,
	detectBrowserLanguage: false,
	locales: [
		{
			code: 'en',
			iso: 'en-US',
			name: 'English'
		},
		{
			code: 'id',
			iso: 'id-ID',
			name: 'Indonesian'
		}
	],
	defaultLocale: 'id',
	vueI18n: {
		fallbackLocale: 'id',
		messages: { en, id }
	}
}
