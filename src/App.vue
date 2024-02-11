<script setup>
import HeaderWrapper from '@/components/layout/header/HeaderWrapper.vue'
import GameChoice from '@/components/game-attribute/GameChoice.vue'
import GameResult from '@/components/game-attribute/GameResult.vue'
import { onMounted, reactive, watch } from 'vue'
import { getGameResult } from '../utilits/getGameResult.js'

const gameAttribute = reactive({
  playerChoice: null,
  botChoice: null,
  result: '',
  score: 0
})

const setGameResult = (result) => {
  gameAttribute.playerChoice = result.playerChoice
  gameAttribute.botChoice = result.botChoice
}

const gameReset = () => {
  gameAttribute.playerChoice = null
  gameAttribute.botChoice = null
  gameAttribute.result = ''
}

watch(
  () => gameAttribute.playerChoice,
  () => {
    if (!gameAttribute.playerChoice) return
    const result = getGameResult(gameAttribute.playerChoice.id, gameAttribute.botChoice.id)

    gameAttribute.result = result

    if (result === 'won') {
      gameAttribute.score += 1
    }
    if (result === 'lose') {
      if (gameAttribute.score <= 0) return
      gameAttribute.score -= 1
    }
  }
)

watch(
  () => gameAttribute.score,
  () => {
    localStorage.setItem('score', `${gameAttribute.score}`)
  }
)

onMounted(() => {
  const score = parseInt(localStorage.getItem('score'))
  gameAttribute.score = isNaN(score) ? 0 : score
})
</script>

<template>
  <header>
    <HeaderWrapper :score="gameAttribute.score" />
  </header>

  <main>
    <GameResult
      v-if="gameAttribute.playerChoice"
      :gameAttribute="gameAttribute"
      @playAgain="gameReset"
    />
    <GameChoice v-else @gameResult="setGameResult" />
  </main>

  <footer></footer>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

body {
  background: rgb(31, 55, 86);
  background: radial-gradient(circle, rgba(31, 55, 86, 1) 6%, rgba(20, 23, 59, 1) 100%);
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

  @include phone {
    font-size: 20px;
  }
}

.main {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}
</style>
