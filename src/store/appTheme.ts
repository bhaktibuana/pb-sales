import { defineStore } from 'pinia';

import { setAppTheme, getSystemTheme } from '@/shared/utils';

export const useAppTheme = defineStore('app_theme', {
	state: () => ({
		theme: '',
	}),
	actions: {
		initTheme() {
			const defaultTheme = 'light';
			let localTheme = localStorage.getItem('theme');

			if (localTheme) {
				this.theme = localTheme;
				if (localTheme === 'system_default') {
					localTheme = getSystemTheme();
				}
				setAppTheme(localTheme as 'light' | 'dark');
			} else {
				localStorage.setItem('theme', defaultTheme);
				this.theme = defaultTheme;
				setAppTheme(defaultTheme);
			}
		},
		setAppTheme(value: string) {
			this.theme = value;
			localStorage.setItem('theme', value);

			if (value === 'system_default') {
				setAppTheme(getSystemTheme());
			} else {
				setAppTheme(value as 'light' | 'dark');
			}
		},
	},
});
