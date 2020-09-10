<template>
	<div id="app">
		<LayoutHeader />
		<!-- <Overlay /> -->
		<Hero />
		<Work />
		<About />
		<LayoutFooter />
	</div>
</template>

<script>
import LayoutHeader from './components/layout/header.vue'
import Overlay from './components/section/overlay.vue'
import Hero from './components/section/hero.vue'
import Work from './components/section/work.vue'
import About from './components/section/about.vue'
import LayoutFooter from './components/layout/footer.vue'

export default {
	name: "App",
	components: {
		LayoutHeader,
		Overlay,
		Hero,
		Work,
		About,
		LayoutFooter
	},
}
</script>

<style lang="scss">
</style>
