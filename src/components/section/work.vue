<template>
	<section id="work" class="work">
		<h3>Werk.</h3>
		<div class="work__container">
			<div v-for="project in allWork" :key="project" class="work__item">
				<p class="work__copy">
					{{ project['pay-off'] }}
				</p>
				<h4 class="work__title">
					{{ project.name }}
				</h4>
				<div class="work__tags">
					<p v-for="tag in project.tags" :key="tag" class="work__tag">
						{{ tag }}
					</p>
				</div>
				<!-- <img :src="require(`./images/${projecy.images[0].name}`)" :alt="project.images[0].alt" class="work__image"> -->
			</div>
		</div>
	</section>
</template>

<script>
import json from '../../static/json/work.json'
export default {
	name: "Header",
	data() {
		return {
			allWork: json.work
		}
	}
}
</script>

<style lang="scss">
.work {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10rem 0 0 0;
	&__container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		width: 100%;
		height: 40rem;
		padding: 80px 0 0 0;
	}
	&__item {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 4vw;
		background-color: var(--folio-purple);
		overflow: hidden;
	}
	&__copy {
		color: var(--light);
		font-style: italic;
		opacity: 0.5;
	}
	&__title {
		margin: auto 0 1rem 0;
	}
	&__tags {
		display: flex;
		width: 100%;
	}
	&__tag {
		font-family: Roboto, sans-serif;
		background-color: var(--light);
		margin: 0 0.5rem 0 0;
		padding: 0.5rem 1rem;
		border-radius: 1rem;
		&::last-of-type {
			margin: 0;
		}
	}
	&__image {
		position: absolute;
	}
}
</style>
