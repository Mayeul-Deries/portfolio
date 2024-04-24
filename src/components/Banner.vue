<script setup lang="ts">
import { useTheme } from "vuetify";
import { mdiBrightness6 } from "@mdi/js";

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<template>
  <v-banner>
    <h1>Hello World !</h1>
    <v-spacer />
    <v-btn flat :icon="mdiBrightness6" @click="toggleTheme"></v-btn>
  </v-banner>
</template>

<style scoped></style>
