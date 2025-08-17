<template>
  <span :class="tagClasses" @click="handleClick">
    <slot />
    <button
      v-if="removable"
      type="button"
      class="tag__remove"
      @click.stop="handleRemove"
      :aria-label="`Remove ${$slots.default?.[0]?.text || 'tag'}`"
    >
              <i class="mdi mdi-close"></i>
    </button>
  </span>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'primary', 'success', 'warning', 'error', 'info'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    removable: {
      type: Boolean,
      default: false
    },
    clickable: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click', 'remove'],
  computed: {
    tagClasses() {
      return [
        'tag',
        `tag--${this.variant}`,
        `tag--${this.size}`,
        {
          'tag--clickable': this.clickable,
          'tag--removable': this.removable
        }
      ]
    }
  },
  methods: {
    handleClick(event) {
      if (this.clickable) {
        this.$emit('click', event)
      }
    },
    handleRemove(event) {
      this.$emit('remove', event)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';

.tag {
  @include body-text($font-size-sm, $font-weight-medium);
  display: inline-flex;
  align-items: center;
  gap: $spacing-xs;
  padding: $spacing-xs $spacing-sm;
  border-radius: $border-radius-full;
  background-color: $gray-light;
  color: $text-secondary;
  border: 1px solid $gray-medium;
  transition: all $transition-normal;
  white-space: nowrap;
  
  // Size variants
  &--small {
    padding: $spacing-xs * 0.5 $spacing-xs;
    font-size: $font-size-xs;
  }
  
  &--medium {
    padding: $spacing-xs $spacing-sm;
    font-size: $font-size-sm;
  }
  
  &--large {
    padding: $spacing-sm $spacing-md;
    font-size: $font-size-base;
  }
  
  // Variant styles
  &--default {
    background-color: $gray-light;
    color: $text-secondary;
    border-color: $gray-medium;
  }
  
  &--primary {
    background-color: $primary-background;
    color: $primary-color;
    border-color: rgba(252, 68, 135, 0.2);
  }
  
  &--success {
    background-color: #f0fdf4;
    color: #16a34a;
    border-color: rgba(22, 163, 74, 0.2);
  }
  
  &--warning {
    background-color: #fffbeb;
    color: #d97706;
    border-color: rgba(217, 119, 6, 0.2);
  }
  
  &--error {
    background-color: #fef2f2;
    color: #dc2626;
    border-color: rgba(220, 38, 38, 0.2);
  }
  
  &--info {
    background-color: #eff6ff;
    color: #2563eb;
    border-color: rgba(37, 99, 235, 0.2);
  }
  
  // Interactive states
  &--clickable {
    cursor: pointer;
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }
  
  &--removable {
    padding-right: $spacing-xs;
  }
  
  &__remove {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border: none;
    background: none;
    border-radius: $border-radius-full;
    cursor: pointer;
    color: inherit;
    opacity: 0.7;
    transition: all $transition-normal;
    
    &:hover {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.1);
    }
    
    svg {
      width: 12px;
      height: 12px;
    }
  }
}
</style> 