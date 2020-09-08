<template>
	<div id="app">
		<LayoutHeader />
		<Overlay />
		<Hero />
		<Work />
		<LayoutFooter />
	</div>
</template>

<script>
import LayoutHeader from './components/layout/header.vue'
import Overlay from './components/section/overlay.vue'
import Hero from './components/section/hero.vue'
import Work from './components/section/work.vue'
import LayoutFooter from './components/layout/footer.vue'

export default {
	name: "App",
	components: {
		LayoutHeader,
		Overlay,
		Hero,
		Work,
		LayoutFooter
	},
}
</script>

<style lang="scss">
</style>
