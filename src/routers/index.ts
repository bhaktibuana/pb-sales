import { createRouter, createWebHistory } from 'vue-router';

import { PublicRoutes } from '@/routers/publicRoutes';
import { NotFoundRoutes } from '@/routers/notFoundRoutes';
import { scrollTopTop } from '@/shared/utils';
import type { T_Routes } from '@/shared/types';

const routes: T_Routes[] = [...PublicRoutes, ...NotFoundRoutes];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((_to, _from, next) => {
	scrollTopTop();
	next();
});
