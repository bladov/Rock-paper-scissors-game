<script>
import PlayerChoice from '@/components/game-attribute/PlayerChoice.vue'
import { computed, toRefs } from 'vue'

export default {
  name: 'GameResult',
  components: { PlayerChoice },
  props: {
    gameAttribute: {
      type: Object,
      required: true
    }
  },
  emits: ['playAgain'],

  setup(props) {
    const { gameAttribute } = toRefs(props)
    const gameResultText = computed(() => {
      if (gameAttribute.value.result === 'lose') {
        return 'Вы проиграли'
      }
      if (gameAttribute.value.result === 'won') {
        return 'Вы выйграли!'
      }
      return 'Ничья'
    })

    return {
      gameResultText
    }
  }
}
</script>

<template>
  <div class="game-result">
    <div class="container game-result__container">
      <PlayerChoice :playerId="1" choice="rock" :winner="gameAttribute.result === 'won'" />
      <div class="game-result__middle">
        <p class="game-result__text">
          {{ gameResultText }}
        </p>
        <button @click="$emit('playAgain')" class="game-result__btn">Играть снова</button>
      </div>
      <PlayerChoice :playerId="2" choice="paper" :winner="gameAttribute.result === 'lose'" />
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
