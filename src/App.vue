<script setup>
import HeaderWrapper from '@/components/layout/header/HeaderWrapper.vue'
import GameChoice from '@/components/game-attribute/GameChoice.vue'
</script>

<template>
  <header>
    <HeaderWrapper />
  </header>

  <main>
    <GameChoice />
  </main>

  <footer></footer>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

body {
  background: rgb(31, 55, 86);
  background: radial-gradient(circle, rgba(31, 55, 86, 1) 6%, rgba(20, 23, 59, 1) 100%);
  @include tablets {
    background: red;
  }
}

.container {
  max-width: 1270px;
  padding: 0 15px;
  margin: 0 auto;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Circe', sans-serif;
  font-weight: 600;
  font-size: 30px;
  font-style: normal;
  color: white;
}

.main {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}
</style>
