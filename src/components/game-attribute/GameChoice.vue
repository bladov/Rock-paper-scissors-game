<script>
import BgTriangle from '@/components/icons/BgTriangle.vue'
import GameAction from '@/components/game-attribute/GameAction.vue'

export default {
  name: 'GameChoice',
  components: { GameAction, BgTriangle }
}
</script>

<template>
  <div class="game-choice">
    <div class="container">
      <div class="game-choice__wrapper">
        <BgTriangle />
        <GameAction
          action="paper"
          position-top="0"
          position-left="0"
          transform-x="-50%"
          transform-y="-50%"
        />
        <GameAction action="rock" position-bottom="0" position-left="50%" transform-x="-50%" />
        <GameAction
          action="scissors"
          position-top="0"
          position-right="0"
          transform-x="50%"
          transform-y="-50%"
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
