<template>
	<header>
		<h3>Bas Pieren &#x1f468;&#x1F3FB;&#x200d;&#x1f4bb;‍</h3>
		<ul>
			<li><a href="#">Work.</a></li>
			<li><a href="#">About.</a></li>
			<li><a href="#">Contact.</a></li>
		</ul>
	</header>
</template>

<script>
export default {
	name: "Header"
}
</script>

<style lang="scss">
header {
	position: absolute;
	display: flex;
	justify-content: space-between;
	align-items: center;
	right: 0;
	left: 0;
	padding: 4rem 10rem;
	ul {
		display: flex;
		justify-content: space-between;
		padding: 0;
		list-style: none;
		width: 25%;;
		li {
			font-size: 1.25rem;
			a {
				font-weight: 500;
				color: var(--light);
				text-decoration: none;
			}
		}
	}
}
</style>
