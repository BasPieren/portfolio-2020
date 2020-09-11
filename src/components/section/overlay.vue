<template>
	<section :class="['overlay', { small: overlayScrollPosition }]">
		<div class="overlay__left">
			<ul class="language__list">
				<li class="language__item">
					<button class="language__button">
						NL.
					</button>
				</li>
				<li class="language__item">
					<button class="language__button">
						EN.
					</button>
				</li>
			</ul>
		</div>
		<div class="overlay__right">
			<ul class="social__list">
				<li class="scoail__item">
					<a class="social__link" href="https://www.linkedin.com/in/bas-pieren-673497100/" target="_blank">
						<svgicon name="linkedin-in-brands" class="social__icon"></svgicon>
					</a>
				</li>
				<li class="scoail__item">
					<a class="social__link" href="https://github.com/BasPieren" target="_blank">
						<svgicon name="github-brands" class="social__icon"></svgicon>
					</a>
				</li>
				<li class="scoail__item">
					<a class="social__link" href="https://twitter.com/BasPieren" target="_blank">
						<svgicon name="twitter-brands" class="social__icon"></svgicon>
					</a>
				</li>
				<li class="scoail__item">
					<a class="social__link" href="https://www.instagram.com/baspieren/" target="_blank">
						<svgicon name="instagram-brands" class="social__icon"></svgicon>
					</a>
				</li>
			</ul>
		</div>
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
			console.log(getWindowScrollPosition)

			if (getWindowScrollPosition >= 400) {
				this.overlayScrollPosition = true
			} else {
				this.overlayScrollPosition = false
			}

		}
	}
}
</script>

<style lang="scss">
.overlay {
	position: fixed;
	display: flex;
	width: 100vw;
	height: 100%;
	pointer-events: none;
	z-index: 4;
	&.small {
		.overlay__left {
			padding: 0;
		}
		.overlay__right {
			padding: 0;
		}
		.language__list {
			padding: 1rem;
			height: 12%;
			&::after {
				clip-path: inset(0 0 0 0);
			}
		}
		.language__button {
			color: var(--light);
		}
		.social__list {
			padding: 1rem;
			&::after {
				clip-path: inset(0 0 0 0);
			}
		}
	}
	&__left {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 0 0 0 8vw;
		width: 50vw;
		height: 100%;
		transition: 0.4s;
	}
	&__right {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: center;
		padding: 0 8vw 0 0;
		width: 50vw;
		height: 100%;
		transition: 0.4s;
	}
}

.language {
	&__list {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 10%;
		transition: 0.4s;
		&::after {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			width: 100%;
			height: 100%;
			background-color: var(--folio-purple);
			clip-path: inset(0 0 0 100%);
			box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.2);
			transition: 0.4s;
			z-index: -1;
		}
	}
	&__button {
		background-color: rgba(0,0,0,0);
		border: none;
		pointer-events: all;
		transition: 0.4s;
		&:hover {
			transform: scale(1.2);
			cursor: pointer;
		}
	}
}

.social {
	&__list {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 25%;
		transition: 0.4s;
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
