<template>
  <Banner :parent-refs="$refs" />
  <div class="tw-px-12 tw-pt-36 tw-pb-52 sm:tw-pb-48 md:tw-pb-44 sm:tw-px-24 md:tw-px-36 lg:tw-px-60">
    <h1 class="tw-text-4xl sm:tw-text-5xl md:tw-text-6xl tw-mb-2 md:tw-mb-4 tw-font-heading tw-font-body mayeul">
      Mayeul Deries
    </h1>
    <h2 class="tw-text-2xl sm:tw-text-3xl md:tw-text-4xl tw-mb-2 tw-font-normal tw-font-body">
      Alternant développeur web
    </h2>
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
  <div class="tw-px-12 sm:tw-px-24 max-xs:tw-pb-20" ref="formations">
    <h2 class="tw-text-3xl tw-font-semibold tw-font-body max-xs:-tw-mb-16">Formations</h2>
    <Timeline />
  </div>
  <div class="tw-pb-20" ref="projects">
    <h2 class="tw-px-12 sm:tw-px-24 tw-text-3xl tw-font-semibold tw-font-body">Projets</h2>
    <Projects class="tw-px-14" />
  </div>
  <div class="tw-px-12 sm:tw-px-24 tw-pb-20" ref="skills">
    <h2 class="tw-text-3xl tw-font-semibold tw-font-body">Compétences</h2>
    <Skills />
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
</script>

<style scoped>
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
