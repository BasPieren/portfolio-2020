<template>
	<section class="project">
		<div v-bind="setDescriptionBindings" class="project__container">
			<div class="p project__copy" v-html="projectDescription"></div>
		</div>
		<div class="project__container">
			<div v-bind="setContentBindings" class="project__content">
				<p class="project__type font-weight--bold">
					Mijn rol
				</p>
				<p class="project__detail font-style--italic">
					{{ projectRole }}
				</p>
			</div>
			<div v-bind="setContentBindings" class="project__content">
				<p class="project__type font-weight--bold">
					De klant
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
			<div v-if="projectCollaboration" v-bind="setContentBindings" class="project__content">
				<p class="project__type font-weight--bold">
					In samenwerking met
				</p>
				<a :href="projectCollaboration.link" target="_blank" class="p project__detail font-style--italic color--purple">
					{{ projectCollaboration.name }}
				</a>
			</div>
		</div>
		<div v-if="getProjectVisuals('video').length > 0 && this.$store.state.windowSize.isMobile === false" class="project__video-container">
			<video v-for="(video, index) in getProjectVisuals('video')" :key="index" v-bind="setImageBindings" :src="require(`../../static/videos/${video.src}/${video.name}`).default" class="project__video" muted loop playsinside></video>
		</div>
		<div v-if="getProjectVisuals('image').length > 0 && this.$store.state.windowSize.isMobile === true" class="project__image-container">
			<img v-for="(image, index) in getProjectVisuals('image')" :key="index" v-bind="setImageBindings" :src="require(`../../static/images/${image.src}/${image.name}`).default" :alt="image.alt" class="project__image">
		</div>
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
					"data-aos-delay": "600"
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
		projectCollaboration() {
			return this.$store.state.project.collaboration
		}
	},
	mounted() {
		if (!this.$store.state.windowSize.isMobile) {
			window.addEventListener('scroll', this.checkVideoInView, false)
		}
	},
	methods: {
		getProjectVisuals(type) {
			let projectVisuals = this.$store.state.project.visuals

			return projectVisuals.filter(image => {
				return image.type === type
			})
		},
		checkVideoInView() {
			const getAllVideoTags = document.getElementsByTagName("video")
			const fraction = 0.6

			for (let i = 0; i < getAllVideoTags.length; i++) {
				let video = getAllVideoTags[i]

				let x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w
				let	b = y + h
				let	visibleX, visibleY, visible

				visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset))
				visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset))

				visible = visibleX * visibleY / (w * h)

				if (visible > fraction) {
					video.play()
				} else {
					video.pause()
				}
			}
		}
	}
}
</script>

<style lang="scss">
.project {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 4vw;
	padding: 10rem 12.5vw 0 12.5vw;
	@media screen and (max-width: 768px) {
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
		display: block;
		margin-top: 0.25rem;
	}
	&__video-container,
	&__image-container {
		grid-column-start: 1;
		grid-column-end: 3;
		@media screen and (max-width: 768px) {
			grid-column: unset;
		}
	}
	&__video,
	&__image {
		margin: 0 0 4vw 0;
		width: 100%;
		box-shadow: 0 0 60px 0 rgba(158,158,165,.25);
		&:last-of-type {
			margin: 0;
		}
		@media screen and (max-width: 768px) {
			margin: 0 0 2rem 0;
		}
	}
}
</style>
