<template>
	<section class="hero">
		<div class="hero__left">
			<!-- <h2>
				Hallo.
			</h2> -->
			<p>
				Hi! Ik ben <span>Bas</span>, Front-end Developer, recent afgestudeerd <span>Communication and Multimedia Design</span>
				aan de HvA en opzoek naar een nieuwe uitdaging.
			</p>
		</div>
		<div class="hero__right">
			<!-- <h2>
				Hallo.
			</h2> -->
		</div>
	</section>
</template>

<script>
export default {
	name: "Header"
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
		h2 {
			position: absolute;
			top: 50%;
			right: 0;
			transform: translate(50%, -50%);
			z-index: 4;
		}
	}
	&__right {
		position: relative;
		width: 50vw;
		height: 100%;
		background-color: var(--folio-purple);
		h2 {
			position: absolute;
			top: 50%;
			left: 0;
			transform: translate(-50%, -50%);
			color: transparent;
			-webkit-text-stroke: 0.25rem var(--light);
			z-index: 3;
		}
	}
}
</style>
