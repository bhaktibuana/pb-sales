import type { Component } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

export type T_RouteMeta = RouteRecordRaw['meta'] & {
	isPrivatePage: boolean;
	isAuthPage: boolean;
	authorization: 'guest' | 'admin' | 'general';
	layout: Component;
};

export type T_Routes = RouteRecordRaw & {
	meta: T_RouteMeta;
};

export type T_ScreenType = 'desktop' | 'mobile';

export type T_AppTheme = 'light' | 'dark';

export type T_TooltipPlacement =
	| 'topLeft'
	| 'top'
	| 'topRight'
	| 'leftTop'
	| 'left'
	| 'leftBottom'
	| 'rightTop'
	| 'right'
	| 'rightBottom'
	| 'bottomLeft'
	| 'bottom'
	| 'bottomRight';
