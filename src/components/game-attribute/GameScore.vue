<script>
export default {
  name: 'GameScore',
  props: {
    score: {
      type: Number,
      required: true,
      validator: (value) => {
        return value >= 0
      }
    }
  }
}
</script>

<template>
  <div class="game-score">
    <p class="game-score__text">счет</p>
    <div class="game-score__points">{{ score }}</div>
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

  @include phone {
    padding: 5px 20px;
  }
}

.game-score__text {
  font-weight: 400;
  font-size: 25px;
  color: $blue-3;

  @include phone {
    font-size: 20px;
  }
}

.game-score__points {
  font-size: 40px;
  color: $blue-2;

  @include phone {
    font-size: 30px;
  }
}
</style>
