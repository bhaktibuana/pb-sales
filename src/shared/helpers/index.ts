import { APP_LANGUAGE } from '@/shared/constants';
import { getSystemTheme } from '@/shared/utils';

/**
 * Language Key Parser
 *
 * @param value
 * @returns
 */
export const langParser = (value: string) => {
	const lang = APP_LANGUAGE.filter((item) => item.value === value)[0];
	return lang ? lang.key : 'en';
};

/**
 * Theme Mode Parser
 *
 * @param value
 * @returns
 */
export const themeParser = (value: string) => {
	if (value === 'system_default') return getSystemTheme();
	return value;
};
