import { getSystemTheme } from '@/shared/utils';

const light = {
	color_primary: '#14b8a6',
	color_primary_opacity: '#14b8a59b',
	color_white: '#ffffff',
	color_backdrop: '#00000080',
	color_background_001: '#f8f8f8',
	color_background_002: '#f8f8f8cc',
	color_background_003: '#ecf2f8',
	color_text_001: '#131313',
	color_text_002: '#6f7183',
	color_text_003: '#ffffff',
	color_stroke_001: '#0000000f',
	color_shadow_001: '0px 1px 4px #92a1b066',
};

const dark = {
	color_primary: '#14b8a6',
	color_primary_opacity: '#14b8a561',
	color_white: '#ffffff',
	color_backdrop: '#00000080',
	color_background_001: '#1d1e30',
	color_background_002: '#343654cc',
	color_background_003: '#2a2b4b',
	color_text_001: '#ffffff',
	color_text_002: '#bcbed5',
	color_text_003: '#14b8a6',
	color_stroke_001: '#f8f8f80f',
	color_shadow_001: '0px 1px 4px #2f2f5666',
};

export const theme = () => {
	let localTheme = localStorage.getItem('theme');
	if (localTheme === 'system_default') {
		localTheme = getSystemTheme();
	}
	if (localTheme === 'dark') return dark;
	return light;
};
