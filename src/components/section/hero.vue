<template>
	<section class="hero">
		<h1>Hallo.</h1>
		<div class="hero__left">
			<p>
				Hi! Ik ben <span>Bas</span>, Front-end Developer, recent afgestudeerd <span>Communication and Multimedia Design</span>
				aan de HvA en opzoek naar een nieuwe uitdaging.
			</p>
		</div>
		<div class="hero__right"></div>
	</section>
</template>

<script>
export default {
	name: "Header"
}
</script>

<style lang="scss">
.hero {
	position: relative;
	display: flex;
	height: 100vh;
	h1 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	&__left {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 0 5rem 10rem 15rem;
		width: 50vw;
		height: 100%;
	}
	&__right {
		width: 50vw;
		height: 100%;
		background-color: var(--folio-purple);
	}
}
</style>
