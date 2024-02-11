<script>
import UiButton from '@/components/ui/UiButton.vue'
import ModalRules from '@/components/modals/ModalRules.vue'
import { ref } from 'vue'

export default {
  name: 'FooterBtns',
  components: { ModalRules, UiButton },
  setup() {
    const modalIsOpen = ref(false)

    return {
      modalIsOpen
    }
  }
}
</script>

<template>
  <div class="footer-btns">
    <div class="container">
      <div class="footer-btns__wrapper">
        <UiButton disabled> Бонус</UiButton>
        <UiButton @click="modalIsOpen = true"> Правила</UiButton>
      </div>
    </div>
  </div>

  <modal-rules :modalIsOpen="modalIsOpen" @closeModal="modalIsOpen = false" />
</template>

<style scoped lang="scss">
.footer-btns__wrapper {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: end;
  align-items: end;
}
</style>
