<script setup lang="ts">
import { computed } from 'vue';

interface Props {
	height?: string;
	width?: string;
	animation?: 'pulse' | 'wave';
	circle?: boolean;
	as?: string;
}

const props = withDefaults(defineProps<Props>(), {
	circle: false,
	animation: 'pulse',
	height: '15px',
	width: '150px',
	as: 'div',
});

const classes = computed(() => ({
	skeleton: true,
	'skeleton--circle': props.circle,
	'animate-pulse': props.animation === 'pulse',
	'after:animate-wave': props.animation === 'wave',
}));
</script>

<template>
	<component :is="as" :class="classes"></component>
</template>

<style scoped lang="scss">
.skeleton {
	--height: v-bind(props.height);
	--width: v-bind(props.width);

	@apply relative block h-[var(--height)] w-[var(--width)] bg-zinc-200 cursor-progress after:inset-0 after:block after:bg-gradient-to-r  after:from-transparent after:via-white/50 after:to-transparent after:absolute  overflow-hidden after:-translate-x-full;

	&--circle {
		@apply rounded-full;
	}
}
</style>
