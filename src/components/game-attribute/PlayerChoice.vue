<script>
import GameAction from '@/components/game-attribute/GameAction.vue'
import { computed, toRefs } from 'vue'

export default {
  name: 'PlayerChoice',
  components: { GameAction },
  props: {
    choice: {
      type: String,
      required: true
    },
    playerId: {
      type: Number,
      required: true
    },
    winner: {
      type: Boolean,
      required: true
    }
  },

  setup(props) {
    const { playerId } = toRefs(props)

    const resultText = computed(() => {
      return playerId.value === 1 ? 'вы выбрали' : 'компьютер выбрал'
    })

    return {
      resultText
    }
  }
}
</script>

<template>
  <div class="player-choice">
    <p class="player-choice__text">{{ resultText }}</p>
    <GameAction :action="choice" class="player-choice__action" />
  </div>
</template>

<style scoped lang="scss">
.player-choice__action {
  position: relative;
}
</style>
