<script>
export default {
  name: 'GameScore'
}
</script>

<template>
  <div class="game-score">
    <p class="game-score__text">счет</p>
    <div class="game-score__points">0</div>
  </div>
</template>

<style scoped lang="scss">
.game-score {
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  border-radius: 8px;
  padding: 10px 30px;
  background: white;
}

.game-score__text {
  font-weight: 400;
  font-size: 25px;
  color: $blue-3;
}

.game-score__points {
  font-size: 40px;
  color: $blue-2;
}
</style>
