<template>
	<div ref="scrollWrapper">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, watch, provide } from 'vue';
import type { Ref } from 'vue';

import type { I_ScreenSize } from '@/shared/interfaces';
import type { T_ScreenType } from '@/shared/types';

const emit = defineEmits<{
	(event: 'onTypeChange', newType: T_ScreenType): void;
	(event: 'onSizeChange', newType: I_ScreenSize): void;
}>();

const screenType = ref<T_ScreenType>('desktop');
const screenSize = reactive<I_ScreenSize>({
	width: 0,
	height: 0,
});

provide<Ref<T_ScreenType>>('screenType', screenType);
provide<I_ScreenSize>('screenSize', screenSize);

const generateScreenType = (): T_ScreenType => {
	screenSize.width = document.documentElement.clientWidth;
	screenSize.height = document.documentElement.clientHeight;
	return screenSize.width <= 768 ? 'mobile' : 'desktop';
};

const handleResizeWindow = (): void => {
	screenType.value = generateScreenType();
};

watch(
	screenType,
	(newValue) => {
		emit('onTypeChange', newValue);
	},
	{ immediate: true },
);

watch(
	() => screenSize,
	(newValue) => {
		emit('onSizeChange', newValue);
	},
	{ deep: true, immediate: true },
);

onMounted(() => {
	screenType.value = generateScreenType();
	window.addEventListener('resize', handleResizeWindow);
});

onUnmounted(() => {
	window.removeEventListener('resize', handleResizeWindow);
});
</script>
