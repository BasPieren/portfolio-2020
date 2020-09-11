<template>
	<header class="header">
		<h3>Hallo. &#x1f468;&#x1F3FB;&#x200d;&#x1f4bb;‍</h3>
		<ul class="header__nav">
			<li class="header__item">
				<a class="header__link" href="#work">
					Werk.
				</a>
			</li>
			<li class="header__item">
				<a class="header__link" href="#about">
					Over.
				</a>
			</li>
			<li class="header__item">
				<a class="header__link" href="#footer">
					Contact.
				</a>
			</li>
		</ul>
	</header>
</template>

<script>
export default {
	name: "Header"
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
	&__nav {
		display: flex;
		justify-content: space-between;
		width: 25%;
	}
	&__link {
		position: relative;
		font-size: 1.25rem;
		font-weight: 500;
		color: var(--light);
		text-decoration: none;
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
