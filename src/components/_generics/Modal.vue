<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="modal-overlay" @click="handleOverlayClick">
        <div class="modal-container" :class="modalClasses" @click.stop>
          <div class="modal-header" v-if="$slots.header || title">
            <slot name="header">
              <h3 class="modal-title">{{ title }}</h3>
            </slot>
            <button
              v-if="closable"
              type="button"
              class="modal-close"
              @click="handleClose"
              aria-label="Close modal"
            >
                        <i class="mdi mdi-close"></i>
            </button>
          </div>
          
          <div class="modal-body">
            <slot />
          </div>
          
          <div class="modal-footer" v-if="$slots.footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large', 'full'].includes(value)
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeOnOverlay: {
      type: Boolean,
      default: true
    },
    persistent: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'close'],
  mounted() {
    if (this.modelValue) {
      this.handleOpen()
    }
  },
  watch: {
    modelValue(newVal) {
      if (newVal) {
        this.handleOpen()
      } else {
        this.handleClose()
      }
    }
  },
  computed: {
    modalClasses() {
      return [
        `modal-container--${this.size}`
      ]
    }
  },
  methods: {
    handleOpen() {
      document.body.style.overflow = 'hidden'
      this.$emit('open')
    },
    handleClose() {
      if (!this.persistent) {
        document.body.style.overflow = ''
        this.$emit('update:modelValue', false)
        this.$emit('close')
      }
    },
    handleOverlayClick() {
      if (this.closeOnOverlay && !this.persistent) {
        this.handleClose()
      }
    }
  },
  beforeUnmount() {
    document.body.style.overflow = ''
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
  @include flex-center;
  padding: $spacing-md;
}

.modal-container {
  background-color: $white;
  border-radius: $border-radius-lg;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  // Size variants
  &--small {
    width: 100%;
    max-width: 400px;
  }
  
  &--medium {
    width: 100%;
    max-width: 600px;
  }
  
  &--large {
    width: 100%;
    max-width: 800px;
  }
  
  &--full {
    width: 100%;
    max-width: 1200px;
    height: 90vh;
  }
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $spacing-lg;
  border-bottom: 1px solid $gray-medium;
  flex-shrink: 0;
}

.modal-title {
  @include heading-style($font-size-xl, $font-weight-semibold);
  margin: 0;
  color: $text-primary;
}

.modal-close {
  @include flex-center;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  border-radius: $border-radius-full;
  cursor: pointer;
  color: $text-secondary;
  transition: all $transition-normal;
  
  &:hover {
    background-color: $gray-light;
    color: $text-primary;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
}

.modal-body {
  padding: $spacing-lg;
  overflow-y: auto;
  flex: 1;
}

.modal-footer {
  padding: $spacing-lg;
  border-top: 1px solid $gray-medium;
  flex-shrink: 0;
  display: flex;
  gap: $spacing-sm;
  justify-content: flex-end;
}

// Transition animations
.modal-enter-active,
.modal-leave-active {
  transition: all $transition-normal;
}

.modal-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

// Responsive adjustments
@media (max-width: $breakpoint-sm) {
  .modal-overlay {
    padding: $spacing-sm;
  }
  
  .modal-container {
    max-height: 95vh;
    
    &--small,
    &--medium,
    &--large,
    &--full {
      width: 100%;
      max-width: none;
    }
  }
  
  .modal-header,
  .modal-body,
  .modal-footer {
    padding: $spacing-md;
  }
}
</style> 