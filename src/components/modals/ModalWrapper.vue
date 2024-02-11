<script>
import IconClose from '@/components/icons/IconClose.vue'

export default {
  name: 'ModalWrapper',
  components: { IconClose },
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
  <teleport to="body">
    <div v-if="modalIsOpen" class="modal">
      <div class="modal__wrapper">
        <div class="modal__header">
          <button class="modal__close" @click="$emit('closeModal')">
            <IconClose />
          </button>
        </div>
        <div class="modal__body">
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal:deep(svg *[fill]) {
  fill: currentColor;
}

.modal:deep(svg *[stroke]) {
  stroke: currentColor;
}

.modal__header {
  margin-bottom: 40px;
  display: flex;
  justify-content: end;
}

.modal__close {
  display: inline-flex;
  align-items: center;
  margin-left: 20px;
  justify-content: center;
  cursor: pointer;
  border: unset;
  color: black;
  background: #f5f3f3;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  &:hover {
    opacity: 0.9;
  }
}
</style>
