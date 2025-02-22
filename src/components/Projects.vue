<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="tw-flex tw-flex-col">
    <div class="tw-py-16 tw-flex max-lg:tw-flex-col-reverse tw-gap-8">
      <img src="@/assets/letsgo-lego.png" alt="letsgo-lego" class="tw-m-auto tw-w-3/4 lg:tw-w-1/3" />
      <div>
        <h3 class="tw-text-2xl tw-text-center">{{ t('projects.auction_app') }}</h3>
        <div class="tw-border-t tw-my-4 tw-bg-indigo-500/40 tw-rounded-lg tw-h-0.5"></div>
        <div class="tw-flex tw-flex-col tw-gap-4">
          <p class="tw-text-lg" v-html="t('projects.auction_app_description')"></p>
          <span class="tw-font-semibold tw-text-lg">{{ t('projects.technologies_used') }}</span>
          <ul>
            <li v-html="t('projects.auction_app_frontend')"></li>
            <li v-html="t('projects.auction_app_backend')"></li>
            <li v-html="t('projects.auction_app_database')"></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="tw-py-4 xs:tw-py-16 tw-flex max-lg:tw-flex-col tw-gap-8">
      <div>
        <h3 class="tw-text-2xl tw-text-center">{{ t('projects.minesweeper_game') }}</h3>
        <div class="tw-border-t tw-my-4 tw-bg-indigo-500/40 tw-rounded-lg tw-h-0.5"></div>
        <div class="tw-flex tw-flex-col tw-gap-4">
          <p class="tw-text-lg" v-html="t('projects.minesweeper_game_description')"></p>
          <span class="tw-font-semibold tw-text-lg">{{ t('projects.technologies_used') }}</span>
          <ul>
            <li v-html="t('projects.minesweeper_game_flutter')"></li>
            <li v-html="t('projects.minesweeper_game_local_storage')"></li>
          </ul>
        </div>
      </div>
      <img src="@/assets/demineur.png" alt="demineur" class="tw-m-auto tw-w-11/12 lg:tw-w-2/5" />
    </div>

    <div class="tw-py-4 xs:tw-py-16 tw-flex max-lg:tw-flex-col-reverse tw-gap-8">
      <img src="@/assets/ironheart.png" alt="ironheart" class="tw-m-auto tw-w-11/12 lg:tw-w-5/12" />
      <div>
        <h3 class="tw-text-2xl tw-text-center">{{ t('projects.platform_game') }}</h3>
        <div class="tw-border-t tw-my-4 tw-bg-indigo-500/40 tw-rounded-lg tw-h-0.5"></div>
        <div class="tw-flex tw-flex-col tw-gap-4">
          <p class="tw-text-lg" v-html="t('projects.platform_game_description')"></p>
          <span class="tw-font-semibold tw-text-lg">{{ t('projects.technologies_used') }}</span>
          <ul>
            <li v-html="t('projects.platform_game_python')"></li>
            <li v-html="t('projects.platform_game_ai_tools')"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
