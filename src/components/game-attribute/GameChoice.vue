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
          color="#4865f4"
          action="paper"
          position-top="0"
          position-left="0"
          transform-x="-50%"
          transform-y="-50%"
        />
        <GameAction
          color="#ec9e0e"
          action="rock"
          position-bottom="0"
          position-left="50%"
          transform-x="-50%"
        />
        <GameAction
          color="#dc2e4e"
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
