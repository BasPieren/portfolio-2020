<template>
	<section id="work" class="work">
		<h3 v-bind="setHeadingBindings" class="work__heading">
			Werk.
		</h3>
		<div class="work__container">
			<ProjectTile v-for="(project, index) in allProjects" :key="index" :project="project" v-bind="setProjectTileBindings" />
		</div>
	</section>
</template>

<script>
import json from '@/static/json/work.json'
import ProjectTile from '@/components/element/project-tile.vue'

export default {
	name: "Work",
	components: {
		ProjectTile
	},
	data() {
		return {
			allProjects: json.work
		}
	},
	computed: {
		setHeadingBindings() {
			if (!this.$store.state.windowSize.isMobile) {
				return {
					"data-aos": "fade-up",
				}
			} else {
				return {}
			}
		},
		setProjectTileBindings() {
			if (!this.$store.state.windowSize.isMobile) {
				return {
					"data-aos": "fade-up",
					"data-aos-delay": "300"
				}
			} else {
				return {}
			}
		}
	}
}
</script>

<style lang="scss">
.work {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10rem 0 0 0;
	@media screen and (max-width: 768px) {
		padding: 5rem 2rem 0 2rem;
	}
	&__heading {
		@media screen and (max-width: 768px) {
			align-self: flex-start;
		}
	}
	&__container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		width: 100%;
		height: 80vh;
		margin: 5rem 0 0 0;
		@media screen and (max-width: 768px) {
			grid-template-columns: 1fr;
			grid-gap: 1rem;
			margin: 0;
			padding: 2rem 0 0 0;
		}
	}
}
</style>
