<template>
  <Banner @scroll="scrollToSection" />
  <div class="tw-max-w-screen-xl tw-m-auto">
    <div
      class="tw-px-12 sm:tw-px-24 md:tw-px-36 lg:tw-px-60 tw-pt-10 xs:tw-pt-20 xl:tw-pt-14 tw-pb-28 sm:tw-pb-48 md:tw-pb-24"
    >
      <h1 class="tw-mb-2 tw-font-heading tw-font-body name">{{ t('home.title') }}</h1>
      <h2 class="tw-mb-6 tw-font-normal tw-font-body status">{{ t('home.subtitle') }}</h2>
      <p class="tw-mb-2 tw-font-body">
        {{ t('home.description') }}
      </p>
      <div class="tw-h-20">
        <v-icon class="down-arrow" size="48" :icon="mdiChevronDown"></v-icon>
      </div>
      <h2 class="tw-text-3xl tw-mb-1 tw-font-semibold tw-font-body">{{ t('home.links') }}</h2>
      <p class="tw-mb-6 tw-font-body">{{ t('home.socials') }}</p>
      <div class="tw-flex tw-flex-wrap tw-items-center tw-gap-4 tw-flex-shrink">
        <v-btn
          :prepend-icon="mdiLinkedin"
          variant="outlined"
          @click="openLink('https://www.linkedin.com/in/mayeul-deries/')"
        >
          <span>{{ t('home.linkedin') }}</span>
        </v-btn>
        <v-btn :prepend-icon="mdiGithub" variant="outlined" @click="openLink('https://github.com/Mayeul-Deries/')">
          <span>{{ t('home.github') }}</span>
        </v-btn>
        <v-btn :prepend-icon="mdiEmail" variant="outlined" @click="openLink('mailto:mayeul.deries@gmail.com')">
          <span>{{ t('home.email') }}</span>
        </v-btn>
        <v-btn :prepend-icon="mdiFile" variant="outlined" @click="openPDF('/portfolio/Resume.pdf')">
          <span>{{ t('home.cv') }}</span>
        </v-btn>
      </div>
    </div>
    <div class="tw-px-12 sm:tw-px-24 max-xs:tw-pb-20" id="parcours">
      <h2 class="tw-text-3xl tw-font-semibold tw-font-body">{{ t('timeline.title') }}</h2>
      <Timeline :key="theme.global.name.value + locale" />
    </div>
    <div class="tw-pb-20" id="projects">
      <h2 class="tw-px-12 sm:tw-px-24 tw-text-3xl tw-font-semibold tw-font-body">{{ t('projects.title') }}</h2>
      <Projects class="tw-px-14" />
    </div>
    <div class="tw-px-12 sm:tw-px-24 tw-pb-20" id="skills">
      <h2 class="tw-text-3xl tw-font-semibold tw-font-body">{{ t('skills.title') }}</h2>
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
import { useI18n } from 'vue-i18n'
import { useTheme } from 'vuetify'

const { t, locale } = useI18n()

const theme = useTheme()

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
