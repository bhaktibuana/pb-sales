import Antd from 'ant-design-vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import { router } from '@/routers/index';
import { i18n } from '@/lang/index';

import 'ant-design-vue/dist/reset.css';
import '@/assets/styles/index.scss';

const app = createApp(App);

app.use(createPinia());
app.use(Antd);
app.use(router);
app.use(i18n);

app.directive('click-outside', {
	mounted(el, binding) {
		el.clickOutsideEvent = function (event: Event) {
			if (!(el === event.target || el.contains(event.target))) {
				binding.value(event, el);
			}
		};
		document.body.addEventListener('click', el.clickOutsideEvent);
	},
	unmounted(el) {
		document.body.removeEventListener('click', el.clickOutsideEvent);
	},
});

app.mount('#app');
