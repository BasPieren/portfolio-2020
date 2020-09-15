<template>
	<div class="layout">
		<Work />
		<About />
	</div>
</template>

<script>
import Work from '@/components/section/work.vue'
import About from '@/components/section/about.vue'

export default {
	name: "App",
	components: {
		Work,
		About
	},
}
</script>

<style lang="scss">
</style>
