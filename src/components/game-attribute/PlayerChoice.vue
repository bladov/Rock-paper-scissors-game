<script>
import GameAction from "@/components/game-attribute/GameAction.vue";

export default {
  name: 'PlayerChoice',
  components: {GameAction},
  props: {
    choice: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="player-choice">
    <p class="player-choice__text">вы выбрали</p>
    <GameAction color="" action=""
  </div>
</template>

<style scoped></style>
