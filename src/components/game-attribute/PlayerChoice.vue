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
    <GameAction :action="choice" class="player-choice__action" biggest :winner="winner" />
  </div>
</template>

<style scoped lang="scss">
.player-choice {
  text-transform: uppercase;
  text-align: center;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-self: stretch;
}

.player-choice__action {
  position: relative;
  flex: 1 0 auto;
  justify-content: center;
  align-items: end;
}

.player-choice__text {
  @include phone {
    font-size: 18px;
  }
}
</style>
