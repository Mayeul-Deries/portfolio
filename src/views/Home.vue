<template>
  <Banner @scroll="scrollToSection" />
  <div class="tw-max-w-screen-xl tw-m-auto">
    <div class="tw-px-12 sm:tw-px-24 md:tw-px-36 lg:tw-px-60 tw-pt-20 xl:tw-pt-14 tw-pb-52 sm:tw-pb-48 md:tw-pb-24">
      <h1 class="tw-mb-2 tw-font-heading tw-font-body name">Mayeul Deries</h1>
      <h2 class="tw-mb-2 tw-font-normal tw-font-body status">Alternant développeur web</h2>
      <div class="tw-h-20">
        <v-icon class="down-arrow" size="48" :icon="mdiChevronDown"></v-icon>
      </div>
      <p class="tw-mb-6 tw-font-body">
        Actuellement étudiant en BUT Informatique à Grenoble, je termine ma formation en alternance cette année au sein
        de <a href="gtrsuite.com" class="tw-no-underline tw-text-green-700">GTRsuite</a>. En tant qu'alternant
        développeur web, j'ai l'opportunité de travailler en méthode agile Scrum sur le développement d'une plateforme
        de Drive-To-Store, tant sur l'aspect frontend que backend.
      </p>
      <h2 class="tw-text-3xl tw-mb-1 tw-font-semibold tw-font-body">Mes liens</h2>
      <p class="tw-mb-6 tw-font-body">Retrouvez-moi sur mes réseaux sociaux</p>
      <div class="tw-flex tw-flex-wrap tw-items-center tw-gap-4 tw-flex-shrink">
        <v-btn
          :prepend-icon="mdiLinkedin"
          variant="outlined"
          @click="openLink('https://www.linkedin.com/in/mayeul-deries/')"
        >
          <span>LinkedIn</span>
        </v-btn>
        <v-btn :prepend-icon="mdiGithub" variant="outlined" @click="openLink('https://github.com/Mayeul-Deries/')">
          <span>Github</span>
        </v-btn>
        <v-btn :prepend-icon="mdiEmail" variant="outlined" @click="openLink('mailto:mayeul.deries@gmail.com')">
          <span>Email</span>
        </v-btn>
        <v-btn :prepend-icon="mdiFile" variant="outlined" @click="openPDF('portfolio/src/assets/CV.pdf')">
          <span>Mon CV</span>
        </v-btn>
      </div>
    </div>
    <div class="tw-px-12 sm:tw-px-24 max-xs:tw-pb-20" id="parcours">
      <h2 class="tw-text-3xl tw-font-semibold tw-font-body">Parcours</h2>
      <Timeline />
    </div>
    <div class="tw-pb-20" id="projects">
      <h2 class="tw-px-12 sm:tw-px-24 tw-text-3xl tw-font-semibold tw-font-body">Projets</h2>
      <Projects class="tw-px-14" />
    </div>
    <div class="tw-px-12 sm:tw-px-24 tw-pb-20" id="skills">
      <h2 class="tw-text-3xl tw-font-semibold tw-font-body">Compétences</h2>
      <Skills />
    </div>
  </div>
</template>

<script setup lang="ts">
import Banner from '../components/Banner.vue'
import Timeline from '../components/Timeline.vue'
import Projects from '../components/Projects.vue'
import Skills from '../components/Skills.vue'
import { mdiChevronDown, mdiGithub, mdiLinkedin, mdiEmail, mdiFile } from '@mdi/js'

const openLink = (url: string) => {
  window.open(url, '_blank')
}

function openPDF(pdfUrl) {
  window.open(pdfUrl, '_blank')
}

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId)
  if (el) {
    const headerOffset = 78
    const elementPosition = el.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - headerOffset
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}
</script>

<style scoped>
.name {
  font-size: max(40px, 5vw);
}
.status {
  font-size: max(20px, 2vw);
}

.down-arrow {
  height: 40px;
  animation: jumpInfinite 1s infinite;
}
@keyframes jumpInfinite {
  0% {
    margin-top: 0;
  }
  50% {
    margin-top: 20px;
  }
  100% {
    margin-top: 0;
  }
}
.link {
  color: inherit;
}

.link:hover {
  box-shadow: 3px red;
}
</style>
