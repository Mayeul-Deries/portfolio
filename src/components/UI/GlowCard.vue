<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps<{
  text: string
}>()

onMounted(() => {
  const cards = document.querySelectorAll('.card')
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      let x = (e as MouseEvent).pageX - (card as HTMLElement).offsetLeft
      let y = (e as MouseEvent).pageY - (card as HTMLElement).offsetTop

      ;(card as HTMLElement).style.setProperty('--x', `${x}px`)
      ;(card as HTMLElement).style.setProperty('--y', `${y}px`)
    })
  })
})
</script>

<template>
  <div class="card tw-col-span-2" style="--clr: #6366f1">
  <span>{{ props.text }}</span>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 320px; */
  min-height: 150px;
  border: solid 1px #6366f1;
  /* background: rgba(45, 45, 45, 1); */
  border-radius: 20px;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: var(--y);
  left: var(--x);
  transform: translate(-50%, -50%);
  background: radial-gradient(var(--clr), transparent, transparent);
  width: 700px;
  height: 700px;
  opacity: 0;
  transition:
    0.5s,
    top 0s,
    left 0s;
  pointer-events: none; 
}

.card:hover::before {
  opacity: 0.4;
}

.card::after {
  content: '';
  position: absolute;
  inset: 2px;
  border-radius: 18px;
  /* background: rgba(26, 25, 25, 0.9); */
}
</style>
