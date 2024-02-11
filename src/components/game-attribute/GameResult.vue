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
      <PlayerChoice
        :playerId="1"
        :choice="gameAttribute.playerChoice.name"
        :winner="gameAttribute.result === 'won'"
      />
      <div class="game-result__middle">
        <p class="game-result__text">
          {{ gameResultText }}
        </p>
        <button @click="$emit('playAgain')" class="game-result__btn">Играть снова</button>
      </div>
      <PlayerChoice
        :playerId="2"
        :choice="gameAttribute.botChoice.name"
        :winner="gameAttribute.result === 'lose'"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.game-result {
  padding-top: 150px;
}

.game-result__container {
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  align-items: center;
  justify-items: center;
  gap: 20px;

  @include tablets {
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
  }
}

.game-result__middle {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @include tablets {
    grid-row-start: 2;
    grid-column-end: 3;
    grid-column-start: 1;
  }
}

.game-result__text {
  text-transform: uppercase;
}

.game-result__btn {
  cursor: pointer;
  background: $gray;
  border: unset;
  border-radius: 8px;
  padding: 10px 30px;
  color: $blue-3;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
  user-select: none;
  transition: transform 0.1s linear;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }

  @include tablets {
    padding: 8px 20px;
    font-size: 18px;
  }

  @include phone {
    padding: 5px 15px;
    font-size: 16px;
  }
}
</style>
