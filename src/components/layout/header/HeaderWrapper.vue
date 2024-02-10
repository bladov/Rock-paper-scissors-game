<script>
import HeaderTitle from '@/components/layout/header/HeaderTitle.vue'
import GameScore from '@/components/game-attribute/GameScore.vue'

export default {
  name: 'HeaderWrapper',
  components: { GameScore, HeaderTitle }
}
</script>

<template>
  <div class="header-wrapper">
    <div class="container header-wrapper__container">
      <HeaderTitle />
      <GameScore />
    </div>
  </div>
</template>

<style scoped>
.header-wrapper {
  padding-top: 100px;
}

.container {
}

.header-wrapper__container {
  border: 2px solid #5e6b83;
  border-radius: 20px;
  padding: 30px;
}
</style>
