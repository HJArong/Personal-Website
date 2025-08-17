<template>
  <Teleport to="body">
    <Transition name="toast">
      <div v-if="modelValue" class="toast-container" :class="toastClasses">
        <div class="toast-icon" v-if="icon || variant !== 'default'">
          <slot name="icon">
            <i v-if="variant === 'success'" class="mdi mdi-check-circle"></i>
            <i v-else-if="variant === 'error'" class="mdi mdi-close-circle"></i>
            <i v-else-if="variant === 'warning'" class="mdi mdi-alert-circle"></i>
            <i v-else-if="variant === 'info'" class="mdi mdi-information"></i>
          </slot>
        </div>
        
        <div class="toast-content">
          <div class="toast-title" v-if="title">{{ title }}</div>
          <div class="toast-message">
            <slot>{{ message }}</slot>
          </div>
        </div>
        
        <button
          v-if="closable"
          type="button"
          class="toast-close"
          @click="handleClose"
          aria-label="Close toast"
        >
          <i class="mdi mdi-close"></i>
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'success', 'error', 'warning', 'info'].includes(value)
    },
    duration: {
      type: Number,
      default: 5000
    },
    closable: {
      type: Boolean,
      default: true
    },
    persistent: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'close'],
  data() {
    return {
      timeoutId: null
    }
  },
  watch: {
    modelValue(newVal) {
      if (newVal && !this.persistent && this.duration > 0) {
        this.startTimer()
      } else {
        this.clearTimer()
      }
    }
  },
  computed: {
    toastClasses() {
      return [
        `toast-container--${this.variant}`
      ]
    }
  },
  methods: {
    handleClose() {
      this.clearTimer()
      this.$emit('update:modelValue', false)
      this.$emit('close')
    },
    startTimer() {
      this.clearTimer()
      this.timeoutId = setTimeout(() => {
        this.handleClose()
      }, this.duration)
    },
    clearTimer() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId)
        this.timeoutId = null
      }
    }
  },
  beforeUnmount() {
    this.clearTimer()
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';

.toast-container {
  position: fixed;
  top: $spacing-lg;
  right: $spacing-lg;
  z-index: 1100;
  display: flex;
  align-items: flex-start;
  gap: $spacing-sm;
  padding: $spacing-md;
  border-radius: $border-radius-md;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-width: 400px;
  min-width: 300px;
  background-color: $white;
  border: 1px solid $gray-medium;
  
  // Variant styles
  &--default {
    background-color: $white;
    border-color: $gray-medium;
  }
  
  &--success {
    background-color: #f0fdf4;
    border-color: #bbf7d0;
    color: #166534;
  }
  
  &--error {
    background-color: #fef2f2;
    border-color: #fecaca;
    color: #dc2626;
  }
  
  &--warning {
    background-color: #fffbeb;
    border-color: #fed7aa;
    color: #d97706;
  }
  
  &--info {
    background-color: #eff6ff;
    border-color: #bfdbfe;
    color: #2563eb;
  }
}

.toast-icon {
  @include flex-center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
  
  i {
    font-size: 20px;
  }
}

.toast-content {
  flex: 1;
  min-width: 0;
}

.toast-title {
  @include body-text($font-size-sm, $font-weight-semibold);
  margin-bottom: $spacing-xs;
  line-height: 1.4;
}

.toast-message {
  @include body-text($font-size-sm, $font-weight-normal);
  line-height: 1.5;
}

.toast-close {
  @include flex-center;
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  border-radius: $border-radius-full;
  cursor: pointer;
  color: inherit;
  opacity: 0.7;
  transition: all $transition-normal;
  flex-shrink: 0;
  margin-top: 2px;
  
  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
}

// Transition animations
.toast-enter-active,
.toast-leave-active {
  transition: all $transition-normal;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

// Responsive adjustments
@media (max-width: $breakpoint-sm) {
  .toast-container {
    top: $spacing-sm;
    right: $spacing-sm;
    left: $spacing-sm;
    max-width: none;
    min-width: auto;
  }
}
</style> 