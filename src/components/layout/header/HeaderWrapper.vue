<script>
import HeaderTitle from '@/components/layout/header/HeaderTitle.vue'
import GameScore from '@/components/game-attribute/GameScore.vue'

export default {
  name: 'HeaderWrapper',
  components: { GameScore, HeaderTitle },
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
  <div class="header-wrapper">
    <div class="container">
      <div class="header-wrapper__container">
        <HeaderTitle />
        <GameScore :score="score" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-wrapper {
  padding-top: 100px;
}

.container {
  display: flex;
  justify-content: center;
}

.header-wrapper__container {
  border: 2px solid #5e6b83;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  width: 100%;
  align-items: center;
  gap: 20px;
}
</style>
