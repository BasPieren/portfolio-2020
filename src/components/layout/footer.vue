<template>
	<footer id="footer" class="footer">
		<div class="footer__container">
			<p v-bind="setContentBindings" class="color--light">
				Heb jij een Front-end developer nodig? Stuur een berichtje, dan kunnen we een keer koffie drinken. &#x2615;
			</p>
			<a v-bind="setContentBindings" class="footer__email" href="mailto:bas.pieren@quicknet.nl">
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
	name: "Footer",
	computed: {
		setContentBindings() {
			if (!this.$store.state.windowSize.isMobile) {
				return {
					"data-aos": "fade-up",
					"data-aos-delay": "300"
				}
			} else {
				return {}
			}
		}
	}
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
	@media screen and (max-width: 768px) {
		display: block;
		margin: 5rem 0 0 0;
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
		@media screen and (max-width: 768px) {
			width: 8vw;
			height: 8vw;
		}
		@media screen and (max-width: 425px) {
			width: 12vw;
			height: 12vw;
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
