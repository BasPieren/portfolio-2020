<template>
	<div class="layout">
		<Hero :title="'Bas Pieren'" />
		<Work />
		<About />
	</div>
</template>

<script>
import Hero from '@/components/section/hero.vue'
import Work from '@/components/section/work.vue'
import About from '@/components/section/about.vue'

export default {
	name: "App",
	components: {
		Hero,
		Work,
		About
	},
}
</script>

<style lang="scss">
</style>
