<template>
	<section id="about" class="about">
		<div class="about__container">
			<div class="about__content">
				<h3 class="about__heading">
					About.
				</h3>
				<p class="about__copy">
					Ik ben Bas en ik maak websites. Met een passie voor
					het web probeer ik mijzelf altijd verder te
					ontwikkelen.
				</p>
				<p class="about__copy">
					Ik werk vooral met HTML, SCSS, Javascript,
					Vue/Nuxt en PHP.
				</p>
			</div>
			<div class="about__content">
				<h4 class="about__sub-heading">
					Studies
				</h4>
				<p class="about__date font-size--small">
					2016-2020
				</p>
				<p class="about__experience font-weight--bold">
					Hogeschool van Amsterdam
				</p>
				<p class="about__level font-style--italic">
					HBO - Communication and Multimedia Design
				</p>

				<p class="about__date font-size--small">
					2012-2016
				</p>
				<p class="about__experience font-weight--bold">
					Mediacollege Amsterdam
				</p>
				<p class="about__level font-style--italic">
					MBO Niveau 4 - Interactief Vormgeven
				</p>

				<p class="about__date font-size--small">
					2009-2012
				</p>
				<p class="about__experience font-weight--bold">
					Haarlem College
				</p>
				<p class="about__level font-style--italic">
					VMBO Kader - Grafimedia
				</p>
			</div>
			<div class="about__content">
				<h4 class="about__sub-heading">
					Ervaring
				</h4>
				<p class="about__date font-size--small">
					sep. 2019 - jul. 2020
				</p>
				<p class="about__experience font-weight--bold">
					Matise
				</p>
				<p class="about__level font-style--italic">
					Stagiair Front-end Developer & Afstudeerstage
				</p>

				<p class="about__date font-size--small">
					apr. 2018 - jul. 2018
				</p>
				<p class="about__experience font-weight--bold">
					Fleks
				</p>
				<p class="about__level font-style--italic">
					Stagiair Web design en Web Development
				</p>

				<p class="about__date font-size--small">
					aug. 2015 - jul. 2016
				</p>
				<p class="about__experience font-weight--bold">
					Gemini Design
				</p>
				<p class="about__level font-style--italic">
					Stagiair Front-end Developer & Front-end Developer
				</p>

				<p class="about__date font-size--small">
					feb. 2015 - jun. 2015
				</p>
				<p class="about__experience font-weight--bold">
					Effective Communication
				</p>
				<p class="about__level font-style--italic">
					Stagiair Webshop beheerder
				</p>
			</div>
		</div>
		<div class="about__container">
			<img :src="require('../../static/images/bas.jpg').default" class="about__image">
		</div>
	</section>
</template>

<script>
export default {
	name: "About",
}
</script>

<style lang="scss">
.about {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 4vw;
	padding: 10rem 12.5vw 0 12.5vw;
	@media screen and (max-width: 750px) {
		padding: 5rem 2rem 0 2rem;
	}
	&__content {
		margin: 0 0 4vw 0;
		&:last-of-type {
			margin: 0;
		}
	}
	&__date {
		margin-bottom: 0;
	}
	&__experience {
		margin-top: 0.25rem;
	}
	&__level {
		margin-top: 0.25rem;
	}
	&__image {
		position: sticky;
		top: 4vw;
		width: 100%;
		height: auto;
		@media screen and (max-width: 750px) {
			top: 2rem;
		}
	}
}
</style>
