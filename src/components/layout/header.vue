<template>
	<header v-bind="setHeaderBindings" class="header">
		<router-link :to="'/'" class="header__link">
			<div class="header__heading heading--h3 color--dark" v-html="getHeaderHeading"></div>
		</router-link>
		<nav :class="['header__nav', {'header__nav--hide': !checkIfHomeIsActive}]">
			<ul class="header__list">
				<li class="header__item">
					<button v-scroll-to="'#work'" class="header__button font-weight--medium color--light">
						Werk.
					</button>
				</li>
				<li class="header__item">
					<button v-scroll-to="'#about'" class="header__button font-weight--medium color--light">
						Over.
					</button>
				</li>
				<li class="header__item">
					<button v-scroll-to="'#footer'" class="header__button font-weight--medium color--light">
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
		setHeaderBindings() {
			if (!this.$store.state.windowSize.isMobile) {
				return {
					"data-aos": "fade-down",
					"data-aos-delay": "2000"
				}
			} else {
				return {}
			}
		},
		getHeaderHeading() {
			return this.$store.state.header.heading
		},
		checkIfHomeIsActive() {
			return this.$store.state.activeRoute.homeIsActive
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
	z-index: 1;
	@media screen and (max-width: 768px) {
		position: unset;
		padding: 2rem 2rem 0 2rem;
	}
	&__link {
		text-decoration: none;
	}
	&__nav {
		width: 25vw;
		@media screen and (max-width: 768px) {
			display: none;
		}
		&--hide {
			display: none;
		}
	}
	&__list {
		display: flex;
		justify-content: space-between;
		list-style: none;
	}
	&__button {
		position: relative;
		font-size: 1.25rem;
		text-decoration: none;
		background-color: rgba(0, 0, 0, 0);
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
