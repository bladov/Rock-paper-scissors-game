<script>
import { computed, toRefs } from 'vue'
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
    color: {
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

    const currentIconComponent = computed(() => {
      switch (action.value) {
        case 'paper':
          return 'IconPaper'
        case 'rock':
          return 'IconRock'
        case 'scissors':
          return 'IconScissors'
        default:
          return 'IconPaper'
      }
    })

    return {
      currentIconComponent
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
.game-action__wrapper {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background: white;
  border: 15px solid v-bind(color);
  border-radius: 50%;
}

.game-action {
  cursor: pointer;
  position: absolute;
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
    width: 70%;
    height: 70%;
    //background: green;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 4px 0px 5px #80808091;
  }

  &:hover {
    filter: drop-shadow(0 0 0.75rem v-bind(color));
    scale: 1.02;
  }
}

.active {
  filter: drop-shadow(0 0 0.75rem v-bind(color));
}
</style>
