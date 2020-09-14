<template>
	<div id="app">
		<LayoutHeader />
		<Overlay />
		<Hero />
		<Work />
		<About />
		<LayoutFooter />
	</div>
</template>

<script>
import LayoutHeader from 'Components/layout/header.vue'
import Overlay from 'Components/section/overlay.vue'
import Hero from 'Components/section/hero.vue'
import Work from 'Components/section/work.vue'
import About from 'Components/section/about.vue'
import LayoutFooter from 'Components/layout/footer.vue'

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
