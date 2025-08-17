<template>
  <div :class="textBoxClasses">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TextBox',
  props: {
    variant: {
      type: String,
      default: 'body',
      validator: (value) => ['heading', 'body', 'caption', 'label'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    weight: {
      type: String,
      default: 'normal',
      validator: (value) => ['light', 'normal', 'medium', 'semibold', 'bold'].includes(value)
    },
    color: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'tertiary', 'disabled', 'accent'].includes(value)
    },
    align: {
      type: String,
      default: 'left',
      validator: (value) => ['left', 'center', 'right', 'justify'].includes(value)
    }
  },
  computed: {
    textBoxClasses() {
      return [
        'text-box',
        `text-box--${this.variant}`,
        `text-box--${this.size}`,
        `text-box--${this.weight}`,
        `text-box--${this.color}`,
        `text-box--${this.align}`
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';

.text-box {
  // Base styles
  line-height: 1.6;
  margin: 0;
  
  // Variant styles
  &--heading {
    @include heading-style;
  }
  
  &--body {
    @include body-text;
  }
  
  &--caption {
    @include body-text($font-size-sm, $font-weight-normal);
    @include text-variant('tertiary');
  }
  
  &--label {
    @include body-text($font-size-sm, $font-weight-medium);
    @include text-variant('primary');
  }
  
  // Size variants
  &--small {
    font-size: $font-size-sm;
  }
  
  &--medium {
    font-size: $font-size-base;
  }
  
  &--large {
    font-size: $font-size-lg;
  }
  
  // Weight variants
  &--light {
    font-weight: $font-weight-light;
  }
  
  &--normal {
    font-weight: $font-weight-normal;
  }
  
  &--medium {
    font-weight: $font-weight-medium;
  }
  
  &--semibold {
    font-weight: $font-weight-semibold;
  }
  
  &--bold {
    font-weight: $font-weight-bold;
  }
  
  // Color variants
  &--primary {
    @include text-variant('primary');
  }
  
  &--secondary {
    @include text-variant('secondary');
  }
  
  &--tertiary {
    @include text-variant('tertiary');
  }
  
  &--disabled {
    @include text-variant('disabled');
  }
  
  &--accent {
    color: $primary-color;
  }
  
  // Alignment variants
  &--left {
    text-align: left;
  }
  
  &--center {
    text-align: center;
  }
  
  &--right {
    text-align: right;
  }
  
  &--justify {
    text-align: justify;
  }
}
</style> 