<template>
	<header class="header">
		<router-link :to="'/'" class="header__link" @click.native="resetHeroState">
			<div class="h3" v-html="headerTitle"></div>
		</router-link>
		<nav class="header__nav">
			<ul class="header__list">
				<li class="header__item">
					<button v-scroll-to="'#work'" class="header__button">
						Werk.
					</button>
				</li>
				<li class="header__item">
					<button v-scroll-to="'#about'" class="header__button">
						Over.
					</button>
				</li>
				<li class="header__item">
					<button v-scroll-to="'#footer'" class="header__button">
						Contact.
					</button>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	name: "Header",
	computed: {
		headerTitle() { return this.$store.state.header.title },
	},
	methods: {
		resetHeroState() {
			this.$store.dispatch('resetHeroState')
		}
	}
}
</script>

<style lang="scss">
.header {
	position: absolute;
	display: flex;
	justify-content: space-between;
	align-items: center;
	right: 0;
	left: 0;
	padding: 3.75rem 8vw;
	z-index: 4;
	&__link {
		text-decoration: none;
	}
	&__nav {
		width: 25%
	}
	&__list {
		display: flex;
		justify-content: space-between;
	}
	&__button {
		position: relative;
		font-size: 1.25rem;
		font-weight: 500;
		color: var(--light);
		text-decoration: none;
		background-color: rgba(0,0,0,0);
		border: none;
		cursor: pointer;
		&:hover{
			&::after {
				transform: scaleX(1);
			}
		}
		&:focus{
			outline: none;
		}
		&::after {
			content: '';
			position: absolute;
			bottom: -0.25rem;
			left: 0;
			width: 100%;
			height: 2px;
			background-color: var(--light);
			transform: scaleX(0);
			transform-origin: left;
			transition: 0.4s;
		}
	}
}
</style>
