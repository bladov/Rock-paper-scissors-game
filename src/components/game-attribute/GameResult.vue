<script>
import PlayerChoice from '@/components/game-attribute/PlayerChoice.vue'
import { computed, ref } from 'vue'

export default {
  name: 'GameResult',
  components: { PlayerChoice },

  setup() {
    const playersIsWin = ref(false)
    const gameResultText = computed(() => {
      return playersIsWin.value ? 'Вы выйграли!' : 'Вы проиграли'
    })

    return {
      gameResultText,
      playersIsWin
    }
  }
}
</script>

<template>
  <div class="game-result">
    <div class="container game-result__container">
      <PlayerChoice :playerId="1" choice="rock" :winner="playersIsWin" />
      <div class="game-result__middle">
        <p class="game-result__text">
          {{ gameResultText }}
        </p>
        <button class="game-result__btn">Играть снова</button>
      </div>
      <PlayerChoice :playerId="2" choice="paper" :winner="!playersIsWin" />
    </div>
  </div>
</template>

<style scoped>
.game-result__container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
