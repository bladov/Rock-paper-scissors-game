<script>
import BgTriangle from '@/components/icons/BgTriangle.vue'
import GameAction from '@/components/game-attribute/GameAction.vue'
import { reactive } from 'vue'
import { randomInteger } from '../../../utilits/randomInteger.js'

export default {
  name: 'GameChoice',
  components: { GameAction, BgTriangle },
  emits: ['gameResult'],

  setup(props, { emit }) {
    const gameActions = reactive([
      {
        name: 'paper',
        positionTop: '0',
        positionLeft: '0',
        positionRight: 'unset',
        positionBottom: 'unset',
        transformX: '-50%',
        transformY: '-50%',
        id: 1
      },
      {
        name: 'scissors',
        positionTop: '0',
        positionLeft: 'unset',
        positionRight: '0',
        positionBottom: 'unset',
        transformX: '-50%',
        transformY: '-50%',
        id: 2
      },
      {
        name: 'rock',
        positionTop: 'unset',
        positionLeft: '50%',
        positionRight: 'unset',
        positionBottom: '0',
        transformX: '-50%',
        transformY: '0',
        id: 3
      }
    ])
    const setPlayerChoice = (action) => {
      const botChoice = randomInteger(1, 3)
      emit('gameResult', {
        playerChoice: action,
        botChoice: gameActions.find((action) => action.id === botChoice)
      })
    }

    return {
      gameActions,
      setPlayerChoice
    }
  }
}
</script>

<template>
  <div class="game-choice">
    <div class="container">
      <div class="game-choice__wrapper">
        <BgTriangle />
        <GameAction
          v-for="action in gameActions"
          :key="action.id"
          @click="setPlayerChoice(action)"
          :action="action.name"
          :position-top="action.positionTop"
          :position-left="action.positionLeft"
          :position-bottom="action.positionBottom"
          :transform-x="action.transformX"
          :transform-y="action.transformY"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.game-choice {
  padding-top: 200px;
  display: flex;
  justify-content: center;
}

.game-choice__wrapper {
  position: relative;
}
</style>
