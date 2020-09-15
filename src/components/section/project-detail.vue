<template>
	<section class="project">
		<div class="project__container">
			<div class="project__content">
				<p class="project__type bold">
					Rol
				</p>
				<p class="project__detail italic">
					{{ projectRole }}
				</p>
			</div>

			<div class="project__content">
				<p class="project__type bold">
					Klant
				</p>
				<p class="project__detail italic">
					{{ projectClient }}
				</p>
			</div>

			<div class="project__content">
				<p class="project__type bold">
					Agency
				</p>
				<p class="project__detail italic">
					{{ projectAgency }}
				</p>
			</div>
		</div>

		<img v-for="image in projectImages" :key="image.index" :src="require(`../../static/images/${image.src}/${image.name}`).default" :alt="image.alt" class="project__image">
	</section>
</template>

<script>
export default {
	name: "ProjectDetail",
	computed: {
		projectRole() { return this.$store.state.project.role },
		projectClient() { return this.$store.state.project.client },
		projectAgency() { return this.$store.state.project.agency },
		projectImages() { return this.$store.state.project.images },
	}
}
</script>

<style lang="scss">
.project {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 4vw;
	padding: 10rem 12.5vw 0 12.5vw;
	&__container {
		grid-column-start: 2;
		grid-column-end: 3;
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
		margin-top: 0.25rem;
	}
	&__image {
		grid-column-start: 1;
		grid-column-end: 3;
		width: 100%;
		&:last-of-type {
			margin: 0;
		}
	}
}
</style>
