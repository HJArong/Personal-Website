<template>
  <div class="input-field">
    <label v-if="label" :for="id" class="input-field__label">
      {{ label }}
      <span v-if="required" class="input-field__required">*</span>
    </label>
    
    <div class="input-field__wrapper">
      <input
        :id="id"
        v-model="inputValue"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :readonly="readonly"
        :class="inputClasses"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keyup="handleKeyup"
      />
      
      <div v-if="icon" class="input-field__icon">
        <slot name="icon">
          <i v-if="iconClass" :class="iconClass"></i>
          <svg v-else :viewBox="iconViewBox" fill="currentColor">
            <path :d="iconPath" />
          </svg>
        </slot>
      </div>
    </div>
    
    <div v-if="error || hint" class="input-field__message">
      <span v-if="error" class="input-field__error">{{ error }}</span>
      <span v-else-if="hint" class="input-field__hint">{{ hint }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      validator: (value) => ['text', 'email', 'password', 'number', 'tel', 'url', 'search'].includes(value)
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    hint: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    icon: {
      type: Boolean,
      default: false
    },
    iconViewBox: {
      type: String,
      default: '0 0 24 24'
    },
    iconPath: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue', 'input', 'focus', 'blur', 'keyup'],
  data() {
    return {
      id: `input-${Math.random().toString(36).substr(2, 9)}`
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    },
    inputClasses() {
      return [
        'input-field__input',
        `input-field__input--${this.size}`,
        {
          'input-field__input--error': this.error,
          'input-field__input--disabled': this.disabled,
          'input-field__input--with-icon': this.icon
        }
      ]
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event)
    },
    handleFocus(event) {
      this.$emit('focus', event)
    },
    handleBlur(event) {
      this.$emit('blur', event)
    },
    handleKeyup(event) {
      this.$emit('keyup', event)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';

.input-field {
  display: flex;
  flex-direction: column;
  gap: $spacing-xs;
  
  &__label {
    @include body-text($font-size-sm, $font-weight-medium);
    color: $text-primary;
    display: flex;
    align-items: center;
    gap: $spacing-xs;
  }
  
  &__required {
    color: $primary-color;
  }
  
  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  &__input {
    @include body-text($font-size-base, $font-weight-normal);
    width: 100%;
    padding: $spacing-sm $spacing-md;
    border: 2px solid $gray-medium;
    border-radius: $border-radius-md;
    background-color: $white;
    transition: all $transition-normal;
    
    &::placeholder {
      color: $text-disabled;
    }
    
    &:focus {
      outline: none;
      border-color: $primary-color;
      box-shadow: 0 0 0 3px rgba(252, 68, 135, 0.1);
    }
    
    &:disabled {
      background-color: $gray-light;
      color: $text-disabled;
      cursor: not-allowed;
    }
    
    &:readonly {
      background-color: $gray-light;
    }
    
    // Size variants
    &--small {
      padding: $spacing-xs $spacing-sm;
      font-size: $font-size-sm;
    }
    
    &--medium {
      padding: $spacing-sm $spacing-md;
      font-size: $font-size-base;
    }
    
    &--large {
      padding: $spacing-md $spacing-lg;
      font-size: $font-size-lg;
    }
    
    // State variants
    &--error {
      border-color: #ef4444;
      
      &:focus {
        border-color: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
      }
    }
    
    &--with-icon {
      padding-right: calc($spacing-md + 20px + $spacing-sm);
    }
  }
  
  &__icon {
    position: absolute;
    right: $spacing-sm;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    color: $text-secondary;
    pointer-events: none;
    
    svg {
      width: 100%;
      height: 100%;
    }
  }
  
  &__message {
    min-height: 20px;
  }
  
  &__error {
    @include body-text($font-size-sm, $font-weight-normal);
    color: #ef4444;
  }
  
  &__hint {
    @include body-text($font-size-sm, $font-weight-normal);
    @include text-variant('tertiary');
  }
}
</style> 