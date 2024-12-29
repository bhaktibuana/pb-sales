<template>
	<layout-screen>
		<div class="_page-container">
			<slot></slot>
		</div>
	</layout-screen>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import LayoutScreen from '@/components/layouts/screen/Screen.vue';
import { scrollTopTop } from '@/shared/utils';

onMounted(() => {
	scrollTopTop();
});
</script>
