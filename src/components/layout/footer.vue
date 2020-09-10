<template>
	<footer class="footer">
		<div class="footer__container">
			<p class="white">
				Heb jij een Front-end developer nodig? Stuur een berichtje, dan kunnen we een keer koffie drinken. &#x2615;
			</p>
			<a class="footer__email" href="mailto:bas.pieren@quicknet.nl">
			</a>
			<div class="footer__disclaimer">
				<p class="white small">
					&copy; 2020 Bas Pieren
				</p>
				<p class="white small">
					Iconen zijn afkomstig van <a class="footer__link" href="https://fontawesome.com/" target="_blank">Font Awesome</a> & <a class="footer__link" href="ial.io/resources/icons/" target="_blank">Material icons</a>.
				</p>
			</div>
		</div>
		<div class="footer__container">
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer"
}
</script>

<style lang="scss">
.footer {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 4vw;
	margin: 10vw 0 0 0;
	padding: 4vw 12.5vw;
	background-color: var(--folio-purple);
	&__email {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1rem 0 0 0;
		width: 4vw;
		height: 4vw;
		color: var(--folio-purple);
		background-color: var(--light);
		border-radius: 50%;
	}
	&__disclaimer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10rem 0 0 0;
		width: 100%;
		& p {
			margin: 0;
		}
	}
	&__link {
		color: var(--light);
	}
}
</style>
