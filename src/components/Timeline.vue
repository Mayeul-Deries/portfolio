<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { mdiSchool, mdiDomain } from '@mdi/js'
import { createScrollRevealDirective } from 'vue-scroll-reveal'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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
      <span class="tw-text-lg tw-font-medium" :class="inversedColor">FORMATIONS</span>
    </div>
    <div class="rond r1 tw-hidden xs:tw-flex xs:tw-justify-center xs:tw-items-center" :class="couleur">
      <v-icon :class="inversedColor">{{ mdiSchool }}</v-icon>
    </div>
    <div class="rond r2 tw-hidden xs:tw-flex xs:tw-justify-center xs:tw-items-center" :class="couleur">
      <v-icon :class="inversedColor">{{ mdiSchool }}</v-icon>
    </div>
    <div class="label l2" :class="couleur">
      <span class="tw-text-lg tw-font-medium" :class="inversedColor">EXPÉRIENCES</span>
    </div>
    <div class="rond r3 tw-hidden xs:tw-flex xs:tw-justify-center xs:tw-items-center" :class="couleur">
      <v-icon :class="inversedColor">{{ mdiDomain }}</v-icon>
    </div>
    <div class="rond r4 tw-hidden xs:tw-flex xs:tw-justify-center xs:tw-items-center" :class="couleur">
      <v-icon :class="inversedColor">{{ mdiDomain }}</v-icon>
    </div>
    <div class="rond r5 tw-hidden xs:tw-flex xs:tw-justify-center xs:tw-items-center" :class="couleur">
      <v-icon :class="inversedColor">{{ mdiDomain }}</v-icon>
    </div>

    <v-card class="card c1" v-scroll-reveal>
      <h3 class="tw-text-center tw-pb-4">{{ t('timeline.diploma') }}</h3>
      <div class="tw-flex tw-flex-col tw-gap-2">
        <p class="tw-text-center tw-text-gray-400">{{ t('timeline.diploma_establishment') }}</p>
        <p class="tw-text-center">{{ t('timeline.diploma_description') }}</p>
      </div>
    </v-card>

    <v-card class="card c2" v-scroll-reveal>
      <h3 class="tw-text-center tw-pb-4">{{ t('timeline.but') }}</h3>
      <div class="tw-flex tw-flex-col tw-gap-2">
        <p class="tw-text-center tw-text-gray-400">{{ t('timeline.but_establishment') }}</p>
        <p class="tw-text-center">
          {{ t('timeline.but_description') }}
        </p>
      </div>
    </v-card>

    <v-card class="card c3" v-scroll-reveal>
      <h3 class="tw-text-center tw-pb-4">{{ t('timeline.intern_software_dev') }}</h3>
      <div class="tw-flex tw-flex-col tw-gap-2">
        <p class="tw-text-center tw-text-gray-400">{{ t('timeline.intern_software_dev_establishment') }}</p>
        <p class="tw-text-center">
          {{ t('timeline.intern_software_dev_description') }}
        </p>
      </div>
    </v-card>

    <v-card class="card c4" v-scroll-reveal>
      <h3 class="tw-text-center tw-pb-4">{{ t('timeline.intern_web_dev_gtr') }}</h3>
      <div class="tw-flex tw-flex-col tw-gap-2">
        <p class="tw-text-center tw-text-gray-400">{{ t('timeline.intern_web_dev_gtr_establishment') }}</p>
        <p class="tw-text-center">
          {{ t('timeline.intern_web_dev_gtr_description') }}
        </p>
      </div>
    </v-card>

    <v-card class="card c5" v-scroll-reveal>
      <h3 class="tw-text-center tw-pb-4">{{ t('timeline.intern_web_dev_st') }}</h3>
      <div class="tw-flex tw-flex-col tw-gap-2">
        <p class="tw-text-center tw-text-gray-400">{{ t('timeline.intern_web_dev_st_establishment') }}</p>
        <p class="tw-text-center">
          {{ t('timeline.intern_web_dev_st_description') }}
        </p>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.line-height {
  height: 1350px;
}
.ligne {
  height: 1350px;
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
.r5 {
  top: 1200px;
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
.c5 {
  top: 1120px;
  left: calc(50% - 270px);
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
