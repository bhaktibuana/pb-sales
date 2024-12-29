import { defineStore } from 'pinia';

export const useAppLanguage = defineStore('app_language', {
	state: () => ({
		language: '',
	}),
	actions: {
		initLanguage() {
			const defaultLang = 'english';
			const localLang = localStorage.getItem('lang');

			if (localLang) {
				this.language = localLang;
			} else {
				this.language = defaultLang;
				localStorage.setItem('lang', defaultLang);
			}
		},
		setAppLanguage(value: string) {
			this.language = value;
			localStorage.setItem('lang', value);
		},
	},
});
