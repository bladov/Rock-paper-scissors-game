<script>
import { computed, toRefs } from 'vue'

export default {
  name: 'UiButton',
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  setup(props) {
    const { disabled } = toRefs(props)
    const disabledTitle = computed(() => {
      if (!disabled.value) return ''

      return 'Функционал находится в разработке'
    })

    return {
      disabledTitle
    }
  }
}
</script>

<template>
  <button
    class="ui-button"
    :title="disabledTitle"
    :disabled="disabled"
    :class="{ disabled: disabled }"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.ui-button {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  letter-spacing: 2px;
  max-width: 150px;
  width: 100%;
  border-radius: 8px;
  border: 3px solid $gray;
  background: $blue-dark;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.3s linear;

  &:hover {
    background: $blue;
  }
}

.ui-button.disabled {
  cursor: no-drop;
}
</style>
