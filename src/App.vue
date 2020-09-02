<template>
	<div id="app">
		<LayoutHeader />
		<Hero />
		<LayoutFooter />
	</div>
</template>

<script>
import LayoutHeader from './components/layout/header.vue'
import Hero from './components/section/hero.vue'
import LayoutFooter from './components/layout/footer.vue'

export default {
	name: "App",
	components: {
		LayoutHeader,
		Hero,
		LayoutFooter
	},
}
</script>

<style lang="scss">
</style>
