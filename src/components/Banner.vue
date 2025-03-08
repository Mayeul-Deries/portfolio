<script setup lang="ts">
import { useTheme } from 'vuetify'
import { mdiTranslate, mdiCircleHalfFull } from '@mdi/js'
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const isMenuOpen = ref(false)
const theme = useTheme()
const menuItems = [
  { title: 'banner.parcours', icon: 'mdiSchool', path: 'parcours' },
  { title: 'banner.projects', icon: 'mdiBook', path: 'projects' },
  { title: 'banner.skills', icon: 'mdiToolbox', path: 'skills' },
]

const emits = defineEmits<{
  (e: 'scroll', values: any): void
}>()

function scrollToSection(path: any) {
  emits('scroll', path)
  if (window.innerWidth <= 768) {
    toggleMenu()
  }
}

function toggleMenu() {
  const bar = document.querySelector('.bar')
  const hamburger = document.querySelector('.hamburger')
  if (bar && hamburger) {
    bar.classList.toggle('is-active')
    hamburger.classList.toggle('is-active')
    if (theme.global.current.value.dark) {
      hamburger.classList.toggle('dark-active')
    }
    isMenuOpen.value = !isMenuOpen.value
  }
}

const handleScreenSizeChange = () => {
  if (window.innerWidth > 768 && isMenuOpen.value) {
    toggleMenu()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleScreenSizeChange)
  const savedTheme = localStorage.getItem('theme')
  const savedLocale = localStorage.getItem('locale')
  if (savedTheme) {
    theme.global.name.value = savedTheme
  }
  if (savedLocale) {
    locale.value = savedLocale
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', handleScreenSizeChange)
})

function toggleTheme() {
  const newTheme = theme.global.current.value.dark ? 'light' : 'dark'
  theme.global.name.value = newTheme
  localStorage.setItem('theme', newTheme)
  if (isMenuOpen.value) {
    toggleMenu()
  }
}

function toggleLanguage() {
  locale.value = locale.value === 'en' ? 'fr' : 'en'
  localStorage.setItem('locale', locale.value)
}
</script>

<template>
  <v-app-bar :elevation="2" class="tw-shadow-lg tw-shadow-indigo-500/40 bar">
    <div class="tw-hidden md:tw-block" v-for="(item, i) in menuItems" :key="i" :value="item">
      <v-app-bar-title
        @click="scrollToSection(item.path)"
        class="tw-cursor-pointer tw-mx-2 sm:tw-mx-6 tw-font-semibold tw-font-body navbar-item"
        >{{ t(item.title) }}</v-app-bar-title
      >
    </div>
    <button
      class="tw-block md:tw-hidden hamburger hamburger--squeeze"
      :class="{ 'dark-theme': theme.global.current.value.dark }"
      type="button"
      @click="toggleMenu"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <div class="tw-block md:tw-hidden mobile-menu" v-if="isMenuOpen">
      <div v-for="(item, index) in menuItems" :key="index" @click="scrollToSection(item.path)">
        <span class="navbar-item">
          {{ t(item.title) }}
        </span>
      </div>
    </div>
    <v-spacer />
    <v-btn flat :icon="mdiCircleHalfFull" @click="toggleTheme"></v-btn>
    <v-btn flat :icon="mdiTranslate" @click="toggleLanguage"></v-btn>
  </v-app-bar>
</template>

<style scoped>
.navbar-item {
  position: relative;
}
.navbar-item:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: '';
  display: block;
  height: 2px;
  left: 50%;
  background: #6366f1;
  position: absolute;
  transition:
    width 0.3s ease 0s,
    left 0.3s ease 0s;
  width: 0;
}
.navbar-item:hover:after {
  width: 100%;
  left: 0;
}

.bar {
  height: 64px;
  transition: height 0.3s ease;
  position: relative;
}

.bar.is-active {
  height: 100%;
}

.mobile-menu {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  font-size: xx-large;
}
</style>
