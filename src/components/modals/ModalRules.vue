<script>
import ModalWrapper from '@/components/modals/ModalWrapper.vue'

export default {
  name: 'ModalRules',
  components: { ModalWrapper },
  emits: ['closeModal'],
  props: {
    modalIsOpen: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>

<template>
  <ModalWrapper :modalIsOpen="modalIsOpen" @closeModal="$emit('closeModal')">
    <div class="modal-rules">
      <img src="@/assets/uploads/icon/image-rules.svg" alt="" />
    </div>
  </ModalWrapper>
</template>

<style scoped lang="scss"></style>
