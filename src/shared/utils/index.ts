import { APP_THEME } from '@/shared/constants';
import type { T_AppTheme } from '@/shared/types';

/**
 * Window Scroll to Top
 *
 * @returns (void)
 */
export const scrollTopTop = (): void => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
};

/**
 * Set App Theme
 *
 * @param theme (T_AppTheme)
 */
export const setAppTheme = (theme: T_AppTheme): void => {
	const themeValue = APP_THEME.map((item) => item.value);
	const selectedTheme = APP_THEME.find((item) => item.key === theme);
	document.body.classList.remove(...themeValue);
	document.body.classList.add(selectedTheme?.value || 'theme-light');
};

/**
 * Get System Default Theme
 *
 * @returns
 */
export const getSystemTheme = () => {
	const systemPrefersDark = window.matchMedia(
		'(prefers-color-scheme: dark)',
	).matches;

	if (systemPrefersDark) {
		return 'dark';
	} else {
		return 'light';
	}
};
