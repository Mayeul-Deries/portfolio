<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { mdiSchool, mdiDomain } from '@mdi/js'
import { createScrollRevealDirective } from 'vue-scroll-reveal'

const theme = useTheme()

const couleur = computed(() => {
  return theme.global.current.value.dark ? 'tw-bg-gray-200' : 'tw-bg-gray-800'
})

const inversedColor = computed(() => {
  return theme.global.current.value.dark ? 'tw-text-gray-800' : 'tw-text-gray-200'
})

const vScrollReveal = createScrollRevealDirective({
  delay: 150,
  duration: 1000,
  distance: '100px',
  reset: false,
})
</script>

<template>
  <div class="tw-w-full tw-m-auto tw-relative tw-py-4 xs:tw-py-16">
    <div class="line-height">
      <div class="ligne tw-hidden xs:tw-block" :class="couleur"></div>
    </div>
    <div class="label l1" :class="couleur">
      <span class="tw-text-lg tw-font-medium" :class="inversedColor">EXPÉRIENCES</span>
    </div>
    <div class="rond r1 tw-hidden xs:tw-flex xs:tw-justify-center xs:tw-items-center" :class="couleur">
      <v-icon :class="inversedColor">{{ mdiDomain }}</v-icon>
    </div>
    <div class="rond r2 tw-hidden xs:tw-flex xs:tw-justify-center xs:tw-items-center" :class="couleur">
      <v-icon :class="inversedColor">{{ mdiDomain }}</v-icon>
    </div>
    <div class="label l2" :class="couleur">
      <span class="tw-text-lg tw-font-medium" :class="inversedColor">FORMATIONS</span>
    </div>
    <div class="rond r3 tw-hidden xs:tw-flex xs:tw-justify-center xs:tw-items-center" :class="couleur">
      <v-icon :class="inversedColor">{{ mdiSchool }}</v-icon>
    </div>
    <div class="rond r4 tw-hidden xs:tw-flex xs:tw-justify-center xs:tw-items-center" :class="couleur">
      <v-icon :class="inversedColor">{{ mdiSchool }}</v-icon>
    </div>

    <v-card class="card c1" v-scroll-reveal>
      <h3 class="tw-text-center tw-pb-4">Alternant Développeur Web</h3>
      <div class="tw-flex tw-flex-col tw-gap-2">
        <p class="tw-text-center tw-text-gray-400">GTRsuite, Le Bourget-du-Lac (2023 - 2024)</p>
        <p class="tw-text-center">
          Développement d'une plateforme de Drive-To-Store (Vue.js, Node.js, Nest, MongoDB) en méthode agile Scrum
        </p>
      </div>
    </v-card>

    <v-card class="card c2" v-scroll-reveal>
      <h3 class="tw-text-center tw-pb-4">Stagiaire Développeur Web</h3>
      <div class="tw-flex tw-flex-col tw-gap-2">
        <p class="tw-text-center tw-text-gray-400">STMicroelectronics, Grenoble (2023)</p>
        <p class="tw-text-center">
          Chargé de la mise à jour des bibliothèques Node au sein de différents outils et développement de
          fonctionnalités (Vue.js, Node.js, MongoDB)
        </p>
      </div>
    </v-card>

    <v-card class="card c3" v-scroll-reveal>
      <h3 class="tw-text-center tw-pb-4">BUT Informatique</h3>
      <div class="tw-flex tw-flex-col tw-gap-2">
        <p class="tw-text-center tw-text-gray-400">IUT 2, Grenoble (2021 - 2024)</p>
        <p class="tw-text-center">
          BUT Informatique en parcours Réalisation d'Applications : Conception, Développement, Validation
        </p>
      </div>
    </v-card>

    <v-card class="card c4" v-scroll-reveal>
      <h3 class="tw-text-center tw-pb-4">Baccalauréat général</h3>
      <div class="tw-flex tw-flex-col tw-gap-2">
        <p class="tw-text-center tw-text-gray-400">Lycée Portes de l'Oisans, Vizille (2018 - 2021)</p>
        <p class="tw-text-center">
          Spécialités : Mathématiques, SI, NSI <br />
          Option : Maths Expertes
        </p>
        <p class="tw-text-center">Bac Mention Bien</p>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.line-height {
  height: 1080px;
}
.ligne {
  height: 1080px;
  width: 2px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow:
    0 0 10px #6366f1,
    0 0 20px #5e5f8a;
}

.label {
  padding: 10px;
  height: 40px;
  border-radius: 5px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  left: 50%;
  transform: translate(-50%);
}
@media (min-width: 560px) and (max-width: 1000px) {
  .label {
    left: 40%;
    transform: translate(-40%);
  }
}

.l1 {
  top: 60px;
}
.l2 {
  top: 600px;
}

.rond {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.r1 {
  top: 220px;
}
.r2 {
  top: 440px;
}
.r3 {
  top: 760px;
}
.r4 {
  top: 980px;
}

.card {
  width: 400px;
  min-height: 200px;
  padding: 20px;
  border-radius: 3px;
  height: auto;
  position: absolute;
  border-radius: 10px;
  transform: translate(-50%);
}

.c1 {
  top: 140px;
  left: calc(50% - 270px);
}
.c2 {
  top: 360px;
  left: calc(50% + 270px);
}
.c3 {
  top: 680px;
  left: calc(50% - 270px);
}
.c4 {
  top: 900px;
  left: calc(50% + 270px);
}

@media screen and (max-width: 1000px) {
  .ligne {
    position: relative;
    left: 200px;
  }
  .rond {
    left: calc(50% + 200px);
  }
  .card {
    left: calc(50% - 50px);
  }
}

@media screen and (max-width: 560px) {
  .card {
    left: calc(50%);
  }
}
</style>
