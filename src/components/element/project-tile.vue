<template>
	<div class="project-tile">
		<router-link :to="project.url" class="project-tile__link" @click.native="updateHeader(); updateHeroStore(project); updateActiveProject(project);"></router-link>
		<img :src="require(`../../static/images/${project.visuals[0].src}/${project.visuals[0].name}`).default" :alt="project.visuals[0].alt" class="project-tile__image">
		<h3 class="project-tile__title">
			{{ project.name }}
		</h3>
		<div class="project-tile__content">
			<p class="project-tile__copy">
				{{ project['pay-off'] }}
			</p>
			<div class="project-tile__tags">
				<p v-for="(tag, index) in project.tags" :key="index" :class="['project-tile__tag', checkTagType(tag)]">
					{{ tag }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProjectTile",
	props: {
		project: {
			default: () => {},
			type: Object
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
		},
		updateHeroStore(payload) {
			this.$store.commit('updateHero', payload)
		},
		updateHeader() {
			this.$store.commit('updateHeader')
		},
		updateActiveProject(payload) {
			this.$store.commit('updateActiveProject', payload)
		}
	}
}
</script>

<style lang="scss">
.project-tile {
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
		.project-tile__title {
			bottom: 7vw;
		}
		.project-tile__content {
			clip-path: inset(0 0 0 0);
			padding-bottom: 4vw;
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
	&__link {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 3;
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
	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
</style>
