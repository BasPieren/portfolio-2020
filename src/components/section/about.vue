<template>
	<section id="about" class="about">
		<div class="about__container">
			<div class="about__content">
				<h3>About.</h3>
				<p>
					Ik ben Bas en ik maak websites. Met een passie voor
					het web probeer ik mijzelf altijd verder te
					ontwikkelen.
				</p>
				<p>
					Ik werk vooral met HTML, SCSS, Javascript,
					Vue/Nuxt en PHP.
				</p>
			</div>
			<div class="about__content">
				<h4>Studies</h4>
				<p class="about__year small">
					2016-2020
				</p>
				<p class="about__school bold">
					Hogeschool van Amsterdam
				</p>
				<p class="about__level italic">
					HBO - Communication and Multimedia Design
				</p>

				<p class="about__year small">
					2012-2016
				</p>
				<p class="about__school bold">
					Mediacollege Amsterdam
				</p>
				<p class="about__level italic">
					MBO Niveau 4 - Interactief Vormgeven
				</p>

				<p class="about__year small">
					2009-2012
				</p>
				<p class="about__school bold">
					Haarlem College
				</p>
				<p class="about__level italic">
					VMBO Kader - Grafimedia
				</p>
			</div>
			<div class="about__content">
				<h4>Ervaring</h4>
				<p class="about__year small">
					sep. 2019 - jul. 2020
				</p>
				<p class="about__school bold">
					Matise
				</p>
				<p class="about__level italic">
					Stagiair Front-end Developer & Afstudeerstage
				</p>

				<p class="about__year small">
					apr. 2018 - jul. 2018
				</p>
				<p class="about__school bold">
					Fleks
				</p>
				<p class="about__level italic">
					Stagiair Web design en Web Development
				</p>

				<p class="about__year small">
					aug. 2015 - jul. 2016
				</p>
				<p class="about__school bold">
					Gemini Design
				</p>
				<p class="about__level italic">
					Stagiair Front-end Developer & Front-end Developer
				</p>

				<p class="about__year small">
					feb. 2015 - jun. 2015
				</p>
				<p class="about__school bold">
					Effective Communication
				</p>
				<p class="about__level italic">
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
	&__content {
		margin: 0 0 4vw 0;
		&:last-of-type {
			margin: 0;
		}
	}
	&__year {
		margin-bottom: 0;
	}
	&__school {
		margin-top: 0.25rem;
	}
	&__level {
		margin-top: 0.25rem;
	}
	&__image {
		width: 33vw;
		height: auto;
	}
}
</style>
