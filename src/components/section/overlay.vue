<template>
	<section :class="['overlay', { small: overlayScrollPosition }]">
		<ul class="social__list">
			<li class="scoail__item">
				<a class="social__link" href="https://www.linkedin.com/in/bas-pieren-673497100/" target="_blank">
					<svgicon name="linkedin-in-brands" class="social__icon svg-icon--normal"></svgicon>
				</a>
			</li>
			<li class="scoail__item">
				<a class="social__link" href="https://github.com/BasPieren" target="_blank">
					<svgicon name="github-brands" class="social__icon svg-icon--normal"></svgicon>
				</a>
			</li>
			<li class="scoail__item">
				<a class="social__link" href="https://twitter.com/BasPieren" target="_blank">
					<svgicon name="twitter-brands" class="social__icon svg-icon--normal"></svgicon>
				</a>
			</li>
			<li class="scoail__item">
				<a class="social__link" href="https://www.instagram.com/baspieren/" target="_blank">
					<svgicon name="instagram-brands" class="social__icon svg-icon--normal"></svgicon>
				</a>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	name: "Overlay",
	data() {
		return {
			overlayScrollPosition: false
		}
	},
	mounted() {
		window.addEventListener('scroll', this.checkScrollPosition)
	},
	methods: {
		checkScrollPosition() {
			const getWindowScrollPosition = window.scrollY

			if (window.outerWidth > '750') {
				if (getWindowScrollPosition >= 100) {
					this.overlayScrollPosition = true
				} else {
					this.overlayScrollPosition = false
				}
			}

		}
	}
}
</script>

<style lang="scss">
.overlay {
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	padding: 0 8vw 0 0;
	width: 100vw;
	height: 100vh;
	transition: 0.4s;
	pointer-events: none;
	z-index: 4;
	@media screen and (max-width: 768px) {
		top: 0;
		padding: 0;
	}
	&.small {
		padding: 0;
		.social__list {
			padding: 1rem;
			&::after {
				clip-path: inset(0 0 0 0);
			}
		}
	}
}

.social {
	&__list {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 25vh;
		list-style-type: none;
		transition: 0.4s;
		@media screen and (max-width: 768px) {
			padding: 1rem;
			height: 20vh;
			background-color: var(--folio-purple);
		}
		&::after {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			width: 100%;
			height: 100%;
			background-color: var(--folio-purple);
			clip-path: inset(0 100% 0 0);
			transition: 0.4s;
			z-index: -1;
		}
	}
	&__link {
		color: var(--light);
		text-decoration: none;
		pointer-events: all;
	}
	&__icon {
		transition: 0.4s;
		&:hover {
			transform: scale(1.2);
		}
	}
}
</style>
