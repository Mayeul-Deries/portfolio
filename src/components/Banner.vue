<script setup lang="ts">
import { useTheme } from "vuetify";
import { mdiBrightness6 } from "@mdi/js";

const theme = useTheme();
const menuItems = [
  { title: "Formations", icon: "mdiSchool", path: "formations" },
  { title: "Projets", icon: "mdiBook", path: "projects" },
  { title: "Compétences", icon: "mdiToolbox", path: "skills" },
];

const props = defineProps<{
  parentRefs: Object;
}>();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}

function clickListItem(item, id) {
  this.selectedItemIndex = id;

  const refName = item.path;
  const el = props.parentRefs[refName];
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <!-- <v-navigation-drawer v-model="sidebar" app>
    <v-list>
      <v-list-item
        v-for="(item, i) in menuItems"
        :key="i"
        :value="item"
        color="primary"
      >
        <template v-slot:prepend>
          <v-icon>{{ item.icon }}</v-icon>
        </template>

        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer> -->

  <v-app-bar :elevation="2" class="tw-shadow-lg tw-shadow-indigo-500/40">
    <!-- <template class="tw-block sm:tw-hidden" v-slot:prepend>
      <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
    </template> -->
    <div v-for="(item, i) in menuItems" :key="i" :value="item">
      <v-app-bar-title
        @click="clickListItem(item, i)"
        class="tw-cursor-pointer tw-mx-2 sm:tw-mx-6 tw-font-semibold tw-font-body navbar-item"
        >{{ item.title }}</v-app-bar-title
      >
    </div>
    <v-spacer />
    <v-btn flat :icon="mdiBrightness6" @click="toggleTheme"></v-btn>
  </v-app-bar>
</template>

<style scoped>
.navbar-item:hover {
  position: relative;
  will-change: filter;
  transition: filter 300ms;
  filter: drop-shadow(blue 0 0 15px);
}

.navbar-item {
  position: relative;
}
.navbar-item:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  background: #6366f1;
  position: absolute;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.navbar-item:hover:after {
  width: 100%;
  left: 0;
}
</style>
