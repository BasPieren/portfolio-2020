<template>
	<div class="layout">
		<LayoutHeader />
		<Overlay />
		<Hero />
		<LayoutFooter />
	</div>
</template>

<script>
import LayoutHeader from '@/components/layout/header.vue'
import Overlay from '@/components/section/overlay.vue'
import Hero from '@/components/section/hero.vue'
import LayoutFooter from '@/components/layout/footer.vue'

export default {
	name: "Project",
	components: {
		LayoutHeader,
		Overlay,
		Hero,
		LayoutFooter
	}
}
</script>

<style lang="scss">
</style>
