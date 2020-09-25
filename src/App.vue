<template>
	<div id="app">
		<LayoutHeader />
		<Overlay />
		<Hero />
		<router-view></router-view>
		<LayoutFooter />
	</div>
</template>

<script>
import AOS from 'aos'

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
	watch: {
		$route() {
			this.refreshAOSOnScroll()

			if (this.$route.path !== '/') {
				this.$store.commit('homeNotActive')
			} else {
				this.resetHeroState()
			}
		}
	},
	mounted() {
		this.checkWindowSize()
	},
	methods: {
		checkWindowSize() {
			let getViewportWidth = window.innerWidth

			if (getViewportWidth <= 750) {
				this.$store.commit('setWindowSizeMobile')
			}
		},
		resetHeroState() {
			this.$store.dispatch('resetHeroState')
		},
		refreshAOSOnScroll() {
			window.addEventListener('scroll', () => {
				AOS.refresh()
			})
		}
	}
}
</script>

<style lang="scss">
</style>
