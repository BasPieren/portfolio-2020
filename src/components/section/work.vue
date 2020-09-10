<template>
	<section id="work" class="work">
		<h3>Werk.</h3>
		<div class="work__container">
			<div v-for="project in allWork" :key="project" class="work__item">
				<img :src="require(`../../static/images/${project.images[0].src}/${project.images[0].name}`).default" :alt="project.images[0].alt" class="work__image">
				<h3 class="work__title">
					{{ project.name }}
				</h3>
				<div class="work__content">
					<p class="work__copy">
						{{ project['pay-off'] }}
					</p>
					<div class="work__tags">
						<p v-for="tag in project.tags" :key="tag" :class="['work__tag', checkTagType(tag)]">
							{{ tag }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import json from '../../static/json/work.json'

export default {
	name: "Work",
	data() {
		return {
			allWork: json.work
		}
	},
	methods: {
		checkTagType(tagName){
			if (tagName === 'Nuxt') {
				return 'nuxt'
			} else if (tagName === 'SCSS') {
				return 'scss'
			} else if (tagName === 'PHP') {
				return 'php'
			} else if (tagName === 'Wordpress') {
				return 'wordpress'
			}
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
		background-color: var(--folio-purple);
		overflow: hidden;
		&::after {
			content: '';
			position: absolute;
			display: block;
			width: 100%;
			height: 100%;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.4));
		}
		&:hover {
			.work__title {
				bottom: 7vw;
			}
			.work__content {
				clip-path: inset(0 0 0 0);
				padding-bottom: 4vw;
			}
		}
	}
	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&__title {
		position: absolute;
		bottom: 4vw;
		left: 4vw;
		color: var(--light);
		transition: 0.4s;
		z-index: 3;
	}
	&__content {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 4vw 4vw 1vw 4vw;
		height: 100%;
		width: 100%;
		background-color: var(--folio-purple);
		clip-path: inset(100% 0 0 0);
		transition: 0.4s;
		z-index: 2;
	}
	&__copy {
		color: var(--light);
		font-style: italic;
		opacity: 0.5;
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
		&.nuxt {
			color: var(--nuxt)
		}
		&.scss {
			color: var(--scss)
		}
		&.php {
			color: var(--php)
		}
		&.wordpress {
			color: var(--wordpress)
		}
	}
}
</style>
