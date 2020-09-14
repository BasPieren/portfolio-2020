<template>
	<div id="app">
		<LayoutHeader />
		<Overlay />
		<router-view></router-view>
		<LayoutFooter />
	</div>
</template>

<script>
import LayoutHeader from '@/components/layout/header.vue'
import Overlay from '@/components/section/overlay.vue'
import LayoutFooter from '@/components/layout/footer.vue'

export default {
	name: "App",
	components: {
		LayoutHeader,
		Overlay,
		LayoutFooter
	},
}
</script>

<style lang="scss">
</style>
