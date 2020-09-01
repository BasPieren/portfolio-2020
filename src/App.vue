<template>
	<div id="app">
		<LayoutHeader />
		<LayoutFooter />
	</div>
</template>

<script>
import LayoutHeader from './components/layout/header.vue'
import LayoutFooter from './components/layout/footer.vue'

export default {
	name: "App",
	components: {
		LayoutHeader,
		LayoutFooter
	},
}
</script>

<style lang="scss">
</style>
