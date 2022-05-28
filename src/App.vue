<script setup lang="ts">
import VSkeleton from './components/VSkeleton.vue';
</script>

<template>
	<div class="flex flex-col p-8 space-y-2 wrapper">
		<v-skeleton
			:circle="true"
			width="48px"
			height="48px"
			animation="wave"
		/>
		<v-skeleton width="80px" animation="wave" />
		<v-skeleton animation="wave" />
		<v-skeleton animation="wave" />
	</div>
</template>

<style></style>
