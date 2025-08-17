<template>
  <button
    :class="tabClasses"
    :disabled="disabled"
    @click="handleClick"
    :aria-selected="isActive"
    role="tab"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isActive() {
      return this.active
    },
    tabClasses() {
      return [
        'tab',
        {
          'tab--active': this.isActive,
          'tab--disabled': this.disabled
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

.tab {
  @include body-text($font-size-base, $font-weight-medium);
  background: none;
  border: none;
  padding: $spacing-sm $spacing-lg;
  margin: 0 $spacing-xs;
  border-radius: $border-radius-full;
  cursor: pointer;
  transition: all $transition-normal;
  position: relative;
  color: $text-secondary;
  
  &:first-child {
    margin-left: 0;
  }
  
  &:last-child {
    margin-right: 0;
  }
  
  &:hover:not(:disabled) {
    color: $primary-color;
    background-color: $primary-background;
  }
  
  &:focus {
    outline: 2px solid $primary-color;
    outline-offset: 2px;
  }
  
  // Active state
  &--active {
    color: $primary-color;
    background-color: $primary-background;
    font-weight: $font-weight-semibold;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 3px;
      background-color: $primary-color;
      border-radius: $border-radius-full;
    }
  }
  
  // Disabled state
  &--disabled {
    color: $text-disabled;
    cursor: not-allowed;
    
    &:hover {
      color: $text-disabled;
      background-color: transparent;
    }
  }
}
</style> 