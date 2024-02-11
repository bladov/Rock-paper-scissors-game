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
    },
    biggest: {
      type: Boolean,
      required: false,
      default: false
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
  <div class="game-action" :class="{ biggest: biggest }">
    <div class="game-action__wrapper" :class="{ biggest: biggest }">
      <component :is="currentIconComponent" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.game-action {
  //width: 100%;
  position: absolute;
  display: inline-flex;
  color: #3b4262;
  top: v-bind(positionTop);
  left: v-bind(positionLeft);
  right: v-bind(positionRight);
  bottom: v-bind(positionBottom);
  transform: translateX(v-bind(transformX)) translateY(v-bind(transformY));
  transition: 0.3s all linear;

  &:not(.biggest):hover {
    filter: drop-shadow(0 0 0.75rem v-bind(currentActionColor));
    scale: 1.02;
    color: v-bind(currentActionColor);
  }

  &:not(.biggest) {
    cursor: pointer;
  }
}

.game-action:deep(svg *[fill]) {
  fill: currentColor;
}

.game-action:deep(svg *[stroke]) {
  stroke: currentColor;
}

.game-action__wrapper {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background: white;
  border: 15px groove v-bind(currentActionColor);
  border-radius: 50%;

  @include phone {
    width: 70px;
    height: 70px;
  }

  &:before {
    position: absolute;
    content: '';
    display: block;
    width: 92%;
    height: 92%;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 4px 0px 5px #80808091;
  }
}

.game-action__wrapper.biggest:before {
  width: 97%;
  height: 97%;
}

.game-action__wrapper.biggest {
  max-width: 300px;
  height: 300px;
  flex: 1 1 auto;

  @include tablets {
    max-width: 250px;
    height: 250px;
  }

  @include phone {
    max-width: 120px;
    height: 120px;
  }
}
</style>
