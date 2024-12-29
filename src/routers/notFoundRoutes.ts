import PageNotFound from '@/pages/not-found/NotFound.vue';
import LayoutNotFoundPage from '@/components/layouts/public/NotFoundPage.vue';
import type { T_Routes } from '@/shared/types';

export const NotFoundRoutes: T_Routes[] = [
	{
		name: 'not_found',
		path: '/:pathMatch(.*)*',
		component: PageNotFound,
		meta: {
			isPrivatePage: false,
			isAuthPage: false,
			authorization: 'guest',
			layout: LayoutNotFoundPage,
		},
	},
];
