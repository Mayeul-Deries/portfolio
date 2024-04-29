<script setup lang="ts">
import { computed } from "vue";
import { useTheme } from "vuetify";
import { createScrollRevealDirective } from "vue-scroll-reveal";

const theme = useTheme();

const couleur = computed(() => {
  return theme.global.current.value.dark ? "tw-bg-gray-200" : "tw-bg-gray-800";
});

const vScrollReveal = createScrollRevealDirective({
  delay: 150,
  duration: 1000,
  distance: "100px",
  reset: false,
});
</script>

<template>
  <div class="tw-w-full tw-relative tw-py-4 xs:tw-py-16">
    <div class="ligne tw-invisible xs:tw-visible" :class="couleur"></div>
    <div class="rond r1 tw-invisible xs:tw-visible" :class="couleur"></div>
    <div class="rond r2 tw-invisible xs:tw-visible" :class="couleur"></div>
    <div class="rond r3 tw-invisible xs:tw-visible" :class="couleur"></div>

    <v-card elevation="8" class="card c1" v-scroll-reveal>
      <h3 class="tw-text-center tw-pb-4">Baccalauréat général</h3>
      <div class="tw-flex tw-flex-col tw-gap-2">
        <p class="tw-text-center">
          Spécialité : Mathématiques, SI, NSI <br />
          Option : Maths Expertes
        </p>
        <p class="tw-text-center">Bac Mention Bien</p>
        <p class="tw-text-center">Lycée Portes de l'Oisans - Vizille</p>
      </div>
    </v-card>

    <v-card elevation="8" class="card c2" v-scroll-reveal>
      <h3 class="tw-text-center tw-pb-4">DUT Informatique</h3>
      <div class="tw-flex tw-flex-col tw-gap-2">
        <p class="tw-text-center">BUT 1 Informatique</p>
        <p class="tw-text-center">
          BUT 2 Informatique - Parcours réalisation d'applications : conception,
          développement, validation
        </p>
        <p class="tw-text-center">
          Stage de migration et développement web fullstack - STMicroelectronics
        </p>
        <p class="tw-text-center">IUT2 Grenoble - Université Grenoble Alpes</p>
      </div>
    </v-card>

    <v-card elevation="8" class="card c3" v-scroll-reveal>
      <h3 class="tw-text-center tw-pb-4">BUT Informatique</h3>
      <div class="tw-flex tw-flex-col tw-gap-2">
        <p class="tw-text-center">
          BUT3 Informatique - Parcours réalisation d'applications : conception,
          développement, validation
        </p>
        <p class="tw-text-center">
          Alternance développeur web fullstack - GTRsuite
        </p>
        <p class="tw-text-center">IUT2 Grenoble - Université Grenoble Alpes</p>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.ligne {
  height: 836px;
  width: 8px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 0 10px #6366f1, 0 0 20px #5e5f8a;
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
  top: 184px;
}
.r2 {
  top: 452px;
}
.r3 {
  top: 730px;
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
  top: 104px;
  left: calc(50% - 270px);
}
.c2 {
  top: 334px;
  left: calc(50% + 270px);
}
.c3 {
  top: 640px;
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
