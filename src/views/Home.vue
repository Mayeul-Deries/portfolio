<template>
  <Banner @scroll="scrollToSection" />
  <div class="tw-max-w-screen-xl tw-m-auto">
    <div class="tw-px-12 tw-pt-32 xl:tw-pt-20 tw-pb-52 sm:tw-pb-48 md:tw-pb-44 sm:tw-px-24 md:tw-px-36">
      <h1 class="tw-mb-2 tw-font-heading tw-font-body name">Mayeul Deries</h1>
      <h2 class="tw-mb-2 tw-font-normal tw-font-body status">Alternant développeur web</h2>
      <div class="tw-h-20">
        <v-icon class="down-arrow" size="48" :icon="mdiChevronDown"></v-icon>
      </div>
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
      </div>
    </div>
    <div class="tw-px-12 sm:tw-px-24 max-xs:tw-pb-20" id="formations">
      <h2 class="tw-text-3xl tw-font-semibold tw-font-body max-xs:-tw-mb-16">Formations</h2>
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
import { mdiChevronDown, mdiGithub, mdiLinkedin, mdiEmail } from '@mdi/js'

const openLink = (url: string) => {
  window.open(url, '_blank')
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
  font-size: 6vw;
}
.status {
  font-size: 3vw;
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
