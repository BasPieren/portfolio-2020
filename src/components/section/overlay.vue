<template>
	<section class="overlay">
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
	name: "Overlay"
}
</script>

<style lang="scss">
.overlay {
	position: fixed;
	display: flex;
	width: 100vw;
	height: 100%;
	z-index: 3;
	&__left {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 0 0 0 8vw;
		width: 50vw;
		height: 100%;
	}
	&__right {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: center;
		padding: 0 8vw 0 0;
		width: 50vw;
		height: 100%;
	}
}

.language {
	&__list {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 10%;
	}
	&__button {
		background-color: rgba(0,0,0,0);
		border: none;
		transition: 0.4s;
		&:hover {
			transform: scale(1.2);
			cursor: pointer;
		}
	}
}

.social {
	&__list {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 25%;
	}
	&__link {
		color: var(--light);
		text-decoration: none;
	}
	&__icon {
		transition: 0.4s;
		&:hover {
			transform: scale(1.2);
		}
	}
}
</style>
