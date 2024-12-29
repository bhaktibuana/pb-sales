<template>
	<component v-if="$route.meta.layout" :is="$route.meta.layout">
		<router-view />
	</component>
	<template v-else>
		<router-view />
	</template>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

import { useAppTheme, useAppLanguage } from '@/store';
import { langParser } from '@/shared/helpers';

const { locale } = useI18n();
const appTheme = useAppTheme();
const appLanguage = useAppLanguage();

onMounted(() => {
	appLanguage.initLanguage();
	locale.value = langParser(appLanguage.language);
	appTheme.initTheme();
});
</script>
