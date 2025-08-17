<template>
  <Teleport to="body">
    <Transition name="image-modal">
      <div v-if="modelValue" class="image-modal-overlay" @click="handleOverlayClick">
        <div class="image-modal-container" @click.stop>
          <!-- Header with close button and image info -->
          <div class="image-modal-header">
            <div class="image-modal-info">
              <h3 v-if="title" class="image-modal-title">{{ title }}</h3>
              <p v-if="description" class="image-modal-description">{{ description }}</p>
            </div>
            <button
              type="button"
              class="image-modal-close"
              @click="handleClose"
              aria-label="Close image modal"
            >
              <i class="mdi mdi-close"></i>
            </button>
          </div>
          
          <!-- Main image content -->
          <div class="image-modal-content">
            <div class="image-modal-wrapper">
              <!-- Previous button -->
              <button
                v-if="showNavigation"
                type="button"
                class="image-modal-nav image-modal-nav--prev"
                @click="previousImage"
                :disabled="currentIndex === 0"
                aria-label="Previous image"
              >
                <i class="mdi mdi-chevron-left"></i>
              </button>
              
              <!-- Image container -->
              <div class="image-modal-image-container">
                <img
                  :src="currentImage.src"
                  :alt="currentImage.alt || title"
                  class="image-modal-image"
                  :class="{ 'image-modal-image--zoomed': isZoomed }"
                  @click="toggleZoom"
                  @load="handleImageLoad"
                  @error="handleImageError"
                />
                
                <!-- Loading spinner -->
                <div v-if="isLoading" class="image-modal-loading">
                  <div class="image-modal-spinner"></div>
                </div>
                
                <!-- Error state -->
                <div v-if="hasError" class="image-modal-error">
                  <i class="mdi mdi-image-off"></i>
                  <p>Failed to load image</p>
                </div>
              </div>
              
              <!-- Next button -->
              <button
                v-if="showNavigation"
                type="button"
                class="image-modal-nav image-modal-nav--next"
                @click="nextImage"
                :disabled="currentIndex === images.length - 1"
                aria-label="Next image"
              >
                <i class="mdi mdi-chevron-right"></i>
              </button>
            </div>
          </div>
          
          <!-- Footer with image counter and zoom controls -->
          <div class="image-modal-footer">
            <div class="image-modal-counter" v-if="showNavigation && images.length > 1">
              {{ currentIndex + 1 }} of {{ images.length }}
            </div>
            
            <div class="image-modal-controls">
              <button
                type="button"
                class="image-modal-control"
                @click="toggleZoom"
                :disabled="hasError"
                aria-label="Toggle zoom"
              >
                <i class="mdi" :class="isZoomed ? 'mdi-magnify-minus' : 'mdi-magnify-plus'"></i>
              </button>
              
              <button
                type="button"
                class="image-modal-control"
                @click="resetZoom"
                :disabled="!isZoomed || hasError"
                aria-label="Reset zoom"
              >
                <i class="mdi mdi-refresh"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
export default {
  name: 'ImageModal',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    images: {
      type: Array,
      default: () => [],
      validator: (value) => {
        return value.every(img => typeof img === 'object' && img.src)
      }
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    showNavigation: {
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
  emits: ['update:modelValue', 'close', 'image-change'],
  data() {
    return {
      currentIndex: this.initialIndex,
      isZoomed: false,
      isLoading: true,
      hasError: false
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex] || {}
    }
  },
  watch: {
    modelValue(newVal) {
      if (newVal) {
        this.handleOpen()
      } else {
        this.handleClose()
      }
    },
    initialIndex(newVal) {
      this.currentIndex = newVal
    }
  },
  mounted() {
    if (this.modelValue) {
      this.handleOpen()
    }
  },
  methods: {
    handleOpen() {
      document.body.style.overflow = 'hidden'
      this.isLoading = true
      this.hasError = false
      this.isZoomed = false
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
    },
    previousImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--
        this.handleImageChange()
      }
    },
    nextImage() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++
        this.handleImageChange()
      }
    },
    handleImageChange() {
      this.isLoading = true
      this.hasError = false
      this.isZoomed = false
      this.$emit('image-change', {
        index: this.currentIndex,
        image: this.currentImage
      })
    },
    toggleZoom() {
      if (!this.hasError) {
        this.isZoomed = !this.isZoomed
      }
    },
    resetZoom() {
      this.isZoomed = false
    },
    handleImageLoad() {
      this.isLoading = false
      this.hasError = false
    },
    handleImageError() {
      this.isLoading = false
      this.hasError = true
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

.image-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(4px);
  z-index: 1200;
  @include flex-center;
  padding: $spacing-md;
}

.image-modal-container {
  background-color: $white;
  border-radius: $border-radius-lg;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-height: 95vh;
  max-width: 95vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  @media (max-width: $breakpoint-md) {
    max-height: 98vh;
    max-width: 98vw;
    border-radius: $border-radius-md;
  }
}

.image-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $spacing-lg;
  border-bottom: 1px solid $gray-medium;
  flex-shrink: 0;
  
  @media (max-width: $breakpoint-md) {
    padding: $spacing-md;
  }
}

.image-modal-info {
  flex: 1;
  min-width: 0;
}

.image-modal-title {
  @include heading-style($font-size-lg, $font-weight-semibold);
  margin: 0 0 $spacing-xs 0;
  color: $text-primary;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.image-modal-description {
  @include body-text($font-size-sm, $font-weight-normal);
  margin: 0;
  color: $text-secondary;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.image-modal-close {
  @include flex-center;
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  border-radius: $border-radius-full;
  cursor: pointer;
  color: $text-secondary;
  transition: all $transition-normal;
  flex-shrink: 0;
  
  &:hover {
    background-color: $gray-light;
    color: $text-primary;
  }
  
  i {
    font-size: 20px;
  }
}

.image-modal-content {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.image-modal-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-modal-image-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image-modal-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: zoom-in;
  transition: transform $transition-normal;
  
  &--zoomed {
    cursor: zoom-out;
    transform: scale(1.5);
  }
  
  @media (max-width: $breakpoint-md) {
    &--zoomed {
      transform: scale(1.2);
    }
  }
}

.image-modal-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @include flex-center;
}

.image-modal-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid $gray-medium;
  border-top: 3px solid $primary-color;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.image-modal-error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: $text-secondary;
  
  i {
    font-size: 48px;
    margin-bottom: $spacing-sm;
    display: block;
  }
  
  p {
    @include body-text($font-size-base, $font-weight-normal);
    margin: 0;
  }
}

.image-modal-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  @include flex-center;
  width: 50px;
  height: 50px;
  border: none;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: $border-radius-full;
  cursor: pointer;
  color: $text-primary;
  transition: all $transition-normal;
  z-index: 10;
  
  &:hover:not(:disabled) {
    background-color: $white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  i {
    font-size: 24px;
  }
  
  &--prev {
    left: $spacing-lg;
  }
  
  &--next {
    right: $spacing-lg;
  }
  
  @media (max-width: $breakpoint-md) {
    width: 40px;
    height: 40px;
    
    i {
      font-size: 20px;
    }
    
    &--prev {
      left: $spacing-sm;
    }
    
    &--next {
      right: $spacing-sm;
    }
  }
}

.image-modal-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $spacing-lg;
  border-top: 1px solid $gray-medium;
  flex-shrink: 0;
  
  @media (max-width: $breakpoint-md) {
    padding: $spacing-md;
  }
}

.image-modal-counter {
  @include body-text($font-size-sm, $font-weight-medium);
  color: $text-secondary;
}

.image-modal-controls {
  display: flex;
  gap: $spacing-xs;
}

.image-modal-control {
  @include flex-center;
  width: 36px;
  height: 36px;
  border: none;
  background-color: $gray-light;
  border-radius: $border-radius-full;
  cursor: pointer;
  color: $text-secondary;
  transition: all $transition-normal;
  
  &:hover:not(:disabled) {
    background-color: $primary-background;
    color: $primary-color;
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  i {
    font-size: 18px;
  }
}

// Animations
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

// Transition animations
.image-modal-enter-active,
.image-modal-leave-active {
  transition: all $transition-normal;
}

.image-modal-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.image-modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

// Responsive adjustments
@media (max-width: $breakpoint-sm) {
  .image-modal-overlay {
    padding: $spacing-sm;
  }
  
  .image-modal-container {
    max-height: 99vh;
    max-width: 99vw;
  }
  
  .image-modal-nav {
    width: 36px;
    height: 36px;
    
    i {
      font-size: 18px;
    }
  }
  
  .image-modal-control {
    width: 32px;
    height: 32px;
    
    i {
      font-size: 16px;
    }
  }
}
</style> 