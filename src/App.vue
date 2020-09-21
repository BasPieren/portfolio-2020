<template>
	<div id="app">
		<Overlay />
		<div class="layout">
			<LayoutHeader />
			<Hero />
			<router-view></router-view>
			<LayoutFooter />
		</div>
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
	watch: {
		$route() {
			const _self = this

			this.lms.destroy()
			this.$nextTick(() => {
				_self.initLocoScroll()
			})
			window.setTimeout(() => {
				this.lms.update()
			}, 3000)
		}
	},
	mounted() {
		const _self = this

		this.$nextTick(() => {
			console.log('Init Lms')
			_self.initLocoScroll()
		})
		window.setTimeout(() => {
			console.log('Update Lms init')
			_self.lms.update()
		}, 3000)
	},
	methods: {
		initLocoScroll() {
			this.lms = new this.$LocomotiveScroll({
				el: document.querySelector('.layout'),
				smooth: true,
				getDirection: true
			})
		}
	}
}
</script>

<style lang="scss">
</style>
