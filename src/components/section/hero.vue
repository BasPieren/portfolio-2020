<template>
	<section class="hero">
		<div class="hero__left">
			<h2 class="hero__heading">
				{{ heroTitle }}
			</h2>
			<div class="hero__copy p" v-html="heroCopy"></div>
		</div>
		<div class="hero__right">
			<h2 class="hero__heading">
				{{ heroTitle }}
			</h2>
			<svgicon name="long-arrow-alt-down-solid" class="hero__icon"></svgicon>
		</div>
	</section>
</template>

<script>
export default {
	name: "Hero",
	computed: {
		heroTitle() { return this.$store.state.hero.title },
		heroCopy() { return this.$store.state.hero.copy }
	}
}
</script>

<style lang="scss">
.hero {
	display: flex;
	height: 100vh;
	@media screen and (max-width: 750px) {
		height: 30vh;
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
			z-index: 4;
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
			transform: translate(-50%, -50%);
			color: transparent;
			-webkit-text-stroke: 0.25rem var(--light);
			z-index: 3;
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
</style>
