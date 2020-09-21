<template>
	<footer id="footer" class="footer">
		<div class="footer__container">
			<p data-scroll data-scroll-speed="1" class="color--light">
				Heb jij een Front-end developer nodig? Stuur een berichtje, dan kunnen we een keer koffie drinken. &#x2615;
			</p>
			<a data-scroll data-scroll-speed="1" class="footer__email" href="mailto:bas.pieren@quicknet.nl">
				<svgicon name="envelope-solid" class="footer__icon svg-icon--medium"></svgicon>
			</a>
			<div class="footer__disclaimer">
				<p class="font-size--small color--light">
					&copy; 2020 Bas Pieren
				</p>
				<p class="font-size--small color--light">
					Iconen zijn afkomstig van <a class="footer__link" href="https://fontawesome.com/" target="_blank">Font Awesome</a> & <a class="footer__link" href="ial.io/resources/icons/" target="_blank">Material icons</a>.
				</p>
			</div>
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
	@media screen and (max-width: 750px) {
		display: block;
		padding: 2rem;
	}
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
		&:hover {
			.footer__icon {
				transform: scale(1.2);
			}
		}
	}
	&__icon {
		width: 32px;
		height: 32px;
		transition: 0.4s;
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
