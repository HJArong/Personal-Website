<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
    :type="type"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'ghost'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    }
  },
  computed: {
    buttonClasses() {
      return [
        'btn',
        `btn--${this.variant}`,
        `btn--${this.size}`,
        {
          'btn--disabled': this.disabled
        }
      ]
    }
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';

.btn {
  @include button-base;
  @include button-variant(primary);
  
  // Size variants
  &--small {
    padding: $spacing-xs $spacing-md;
    font-size: $font-size-sm;
  }
  
  &--medium {
    padding: $spacing-sm $spacing-lg;
    font-size: $font-size-base;
  }
  
  &--large {
    padding: $spacing-md $spacing-xl;
    font-size: $font-size-lg;
  }
  
  // Variant styles
  &--primary {
    @include button-variant(primary);
  }
  
  &--secondary {
    @include button-variant(secondary);
  }
  
  &--ghost {
    @include button-variant(ghost);
  }
  
  // Disabled state
  &--disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style> 