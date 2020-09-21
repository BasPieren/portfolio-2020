<template>
	<div id="app" ref="scrollSections">
		<LayoutHeader />
		<Overlay />
		<Hero />
		<router-view></router-view>
		<LayoutFooter />
	</div>
</template>

<script>
import LayoutHeader from '@/components/layout/header.vue'
import Overlay from '@/components/section/overlay.vue'
import Hero from '@/components/section/hero.vue'
import LayoutFooter from '@/components/layout/footer.vue'

export default {
	name: "App",
	components: {
		LayoutHeader,
		Overlay,
		Hero,
		LayoutFooter
	},
	data() {
		return {
			scrollIns: null
		}
	},
	mounted() {
		const _self = this
		this.$nextTick(() => {
			_self.initLocoScroll()
		})
		window.setTimeout(() => {
			_self.scroll.update()
		}, 3000)
	},
	methods: {
		initLocoScroll() {
			const _self = this
			this.scroll = new this.$LocomotiveScroll({
				el: _self.$refs['scrollSections'],
				smooth: true,
				getDirection: true
			})
		}
	}
}
</script>

<style lang="scss">
</style>
