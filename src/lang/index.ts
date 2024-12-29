import { createI18n } from 'vue-i18n';

import { en } from '@/lang/en';
import { id } from '@/lang/id';

const messages = {
	en,
	id,
};

export const i18n = createI18n({
	legacy: false,
	locale: 'en',
	messages,
});
