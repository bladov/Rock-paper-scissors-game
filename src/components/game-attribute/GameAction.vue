<script>
import { ref, toRefs, watchEffect } from 'vue'
import IconPaper from '@/components/icons/IconPaper.vue'
import IconRock from '@/components/icons/IconRock.vue'
import IconScissors from '@/components/icons/IconScissors.vue'

export default {
  name: 'GameAction',
  components: { IconPaper, IconRock, IconScissors },
  props: {
    action: {
      type: String,
      required: true
    },
    positionTop: {
      type: String,
      required: false,
      default: 'unset'
    },
    positionLeft: {
      type: String,
      required: false,
      default: 'unset'
    },
    positionRight: {
      type: String,
      required: false,
      default: 'unset'
    },
    positionBottom: {
      type: String,
      required: false,
      default: 'unset'
    },
    transformX: {
      type: String,
      required: false,
      default: '0'
    },
    transformY: {
      type: String,
      required: false,
      default: '0'
    }
  },

  setup(props) {
    const { action } = toRefs(props)
    const currentIconComponent = ref('')
    const currentActionColor = ref('')

    watchEffect(() => {
      switch (action.value) {
        case 'paper':
          currentIconComponent.value = 'IconPaper'
          currentActionColor.value = '#4865f4'
          break
        case 'rock':
          currentIconComponent.value = 'IconRock'
          currentActionColor.value = '#ec9e0e'
          break
        case 'scissors':
          currentIconComponent.value = 'IconScissors'
          currentActionColor.value = '#dc2e4e'
      }
    })

    return {
      currentIconComponent,
      currentActionColor
    }
  }
}
</script>

<template>
  <div class="game-action">
    <div class="game-action__wrapper">
      <component :is="currentIconComponent" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.game-action {
  position: absolute;
  display: inline-flex;
  cursor: pointer;
  color: #3b4262;
  top: v-bind(positionTop);
  left: v-bind(positionLeft);
  right: v-bind(positionRight);
  bottom: v-bind(positionBottom);
  transform: translateX(v-bind(transformX)) translateY(v-bind(transformY));
  transition: 0.3s all linear;

  &:before {
    position: absolute;
    content: '';
    display: block;
    width: 71%;
    height: 71%;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 4px 0px 5px #80808091;
  }

  &:hover {
    filter: drop-shadow(0 0 0.75rem v-bind(currentActionColor));
    scale: 1.02;
    color: v-bind(currentActionColor);
  }
}

.game-action:deep(svg *[fill]) {
  fill: currentColor;
}

.game-action:deep(svg *[stroke]) {
  stroke: currentColor;
}

.game-action__wrapper {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background: white;
  border: 15px groove v-bind(currentActionColor);
  border-radius: 50%;
}
</style>
