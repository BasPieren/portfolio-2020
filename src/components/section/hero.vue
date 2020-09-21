<template>
	<section id="#hero" class="hero">
		<div class="hero__left">
			<h2 class="hero__heading">
				{{ heroHeading }}
			</h2>
			<div class="hero__copy p" v-html="heroCopy"></div>
		</div>
		<div :class="['hero__right', {'hero__gradient' : projectState}]">
			<h2 class="hero__heading">
				{{ heroHeading }}
			</h2>
			<svgicon name="long-arrow-alt-down-solid" class="hero__icon svg-icon--normal"></svgicon>
			<img v-if="projectState" :src="require(`../../static/images/${projectImages[0].src}/${projectImages[0].name}`).default" :alt="projectImages[0].alt" class="hero__image">
		</div>
	</section>
</template>

<script>
export default {
	name: "Hero",
	computed: {
		heroHeading() {
			return this.$store.state.hero.heading
		},
		heroCopy() {
			return this.$store.state.hero.copy
		},
		projectState() {
			return this.$store.state.project.isActive
		},
		projectImages() {
			let getProjectImages = this.$store.state.project.images

			return getProjectImages.filter(image => {
				return image.type === 'featured'
			})
		}
	}
}
</script>

<style lang="scss">
.hero {
	display: flex;
	height: 100vh;
	@media screen and (max-width: 750px) {
		height: 25vh;
	}
	&__left {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 0 8vw 8vw 12.5vw;
		width: 50vw;
		height: 100%;
		overflow: hidden;
		@media screen and (max-width: 750px) {
			padding: 0 2rem;
			width: 100%;
		}
		.hero__heading {
			right: 0;
			transform: translate(50%, -50%);
			@media screen and (max-width: 750px) {
				position: unset;
				top: unset;
				right: unset;
				transform: unset;
			}
		}
	}
	&__right {
		position: relative;
		width: 50vw;
		height: 100%;
		color: var(--light);
		background-color: var(--folio-purple);
		overflow: hidden;
		@media screen and (max-width: 750px) {
			display: none;
		}
		.hero__heading {
			left: 0;
			color: transparent;
			-webkit-text-stroke: 0.25rem var(--light);
			transform: translate(-50%, -50%);
			z-index: 2;
		}
	}
	&__gradient {
		&::after {
			content: '';
			position: absolute;
			display: block;
			width: 100%;
			height: 100%;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.4));
			clip-path: inset(0 0 0 100%);
			animation: imageFadeIn 1s 0.4s ease forwards;
		}
	}
	&__heading {
		position: absolute;
		top: 50%;
		white-space: nowrap;
	}
	&__copy {
		@media screen and (max-width: 750px) {
			margin-top: 1rem;
		}
	}
	&__icon {
		position: absolute;
		bottom: 3vw;
		left: 4vw;
		animation: arrowBounce 1s infinite ease;
		transition: 0.4s;
		z-index: 1;
	}
	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		clip-path: inset(0 0 0 100%);
		animation: imageFadeIn 1s 0.4s ease forwards;
		z-index: 1;
	}
}

@keyframes arrowBounce {
	0% {
		bottom: 4vw;
	}
	50% {
		bottom: 4.5vw;
	}
	100% {
		bottom: 4vw;
	}
}

@keyframes imageFadeIn {
	0% {
		clip-path: inset(0 0 0 100%);
	}
	100% {
		clip-path: inset(0 0 0 0);
	}
}
</style>
