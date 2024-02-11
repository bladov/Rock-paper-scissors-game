<script>
export default {
  name: 'BgTriangle'
}
</script>

<template>
  <img class="bg-triangle" src="@/assets/uploads/icon/bg-triangle.svg" alt="треугольник" />
</template>

<style scoped lang="scss">
.bg-triangle {
  @include phone {
    width: 200px;
    height: 180px;
  }
}
</style>
