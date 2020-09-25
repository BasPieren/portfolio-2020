<template>
	<section class="project">
		<div v-bind="setDescriptionBindings" class="project__container">
			<div class="p project__copy" v-html="projectDescription"></div>
		</div>
		<div class="project__container">
			<div v-bind="setContentBindings" class="project__content">
				<p class="project__type font-weight--bold">
					Rol
				</p>
				<p class="project__detail font-style--italic">
					{{ projectRole }}
				</p>
			</div>
			<div v-bind="setContentBindings" class="project__content">
				<p class="project__type font-weight--bold">
					Klant
				</p>
				<a :href="projectClient.link" target="_blank" class="p project__detail font-style--italic color--purple">
					{{ projectClient.name }}
				</a>
			</div>
			<div v-bind="setContentBindings" class="project__content">
				<p class="project__type font-weight--bold">
					Agency
				</p>
				<a :href="projectAgency.link" target="_blank" class="p project__detail font-style--italic color--purple">
					{{ projectAgency.name }}
				</a>
			</div>
		</div>
		<img v-for="(image, index) in projectImages" :key="index" v-bind="setImageBindings" :src="require(`../../static/images/${image.src}/${image.name}`).default" :alt="image.alt" class="project__image">
	</section>
</template>

<script>
export default {
	name: "ProjectDetail",
	computed: {
		setDescriptionBindings() {
			if (!this.$store.state.windowSize.isMobile) {
				return {
					"data-aos": "fade-up",
					"data-aos-delay": "300"
				}
			} else {
				return {}
			}
		},
		setContentBindings() {
			if (!this.$store.state.windowSize.isMobile) {
				return {
					"data-aos": "fade-up",
					"data-aos-delay": "400"
				}
			} else {
				return {}
			}
		},
		setImageBindings() {
			if (!this.$store.state.windowSize.isMobile) {
				return {
					"data-aos": "fade-up",
					"data-aos-delay": "300"
				}
			} else {
				return {}
			}
		},
		projectDescription() {
			return this.$store.state.project.description
		},
		projectRole() {
			return this.$store.state.project.role
		},
		projectClient() {
			return this.$store.state.project.client
		},
		projectAgency() {
			return this.$store.state.project.agency
		},
		projectImages() {
			let storeProjectImages = this.$store.state.project.images

			return storeProjectImages.filter(image => {
				return image.type !== 'featured'
			})
		},
	}
}
</script>

<style lang="scss">
.project {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 4vw;
	padding: 10rem 12.5vw 0 12.5vw;
	@media screen and (max-width: 750px) {
		grid-template-columns: 1fr;
		grid-gap: 2rem;
		padding: 5rem 2rem 0 2rem;
	}
	&__content {
		margin: 0 0 2vw 0;
		&:last-of-type {
			margin: 0;
		}
	}
	&__type {
		margin-bottom: 0;
	}
	&__detail {
		margin-top: 0.25rem;
	}
	&__image {
		grid-column-start: 1;
		grid-column-end: 3;
		width: 100%;
		box-shadow: 0 0 60px 0 rgba(158,158,165,.25);
		&:last-of-type {
			margin: 0;
		}
		@media screen and (max-width: 750px) {
			grid-column: unset;
		}
	}
}
</style>
