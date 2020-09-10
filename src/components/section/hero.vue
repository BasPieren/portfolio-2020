<template>
	<section class="hero">
		<div class="hero__left">
			<h2>
				Bas Pieren.
			</h2>
			<p>
				Hi! Ik ben <span>Bas</span>, Front-end Developer, recent afgestudeerd <span>Communication and Multimedia Design</span>
				aan de HvA en opzoek naar een nieuwe uitdaging.
			</p>
		</div>
		<div class="hero__right">
			<h2>
				Bas Pieren.
			</h2>
			<svgicon name="long-arrow-alt-down-solid" class="hero__icon"></svgicon>
		</div>
	</section>
</template>

<script>
export default {
	name: "Hero"
}
</script>

<style lang="scss">
.hero {
	display: flex;
	height: 100vh;
	&__left {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 0 8vw 8vw 12.5vw;
		width: 50vw;
		height: 100%;
		overflow: hidden;
		h2 {
			position: absolute;
			top: 50%;
			right: 0;
			white-space: nowrap;
			transform: translate(50%, -50%);
			z-index: 4;
		}
	}
	&__right {
		position: relative;
		width: 50vw;
		height: 100%;
		color: var(--light);
		background-color: var(--folio-purple);
		overflow: hidden;
		h2 {
			position: absolute;
			top: 50%;
			left: 0;
			transform: translate(-50%, -50%);
			color: transparent;
			white-space: nowrap;
			-webkit-text-stroke: 0.25rem var(--light);
			z-index: 3;
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
