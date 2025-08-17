<template>
  <div class="image-modal-example">
    <h2>Image Modal Example</h2>
    
    <!-- Image Grid -->
    <div class="image-grid">
      <div
        v-for="(image, index) in sampleImages"
        :key="index"
        class="image-item"
        @click="openImageModal(index)"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="image-thumbnail"
        />
        <div class="image-overlay">
          <i class="mdi mdi-magnify-plus"></i>
        </div>
      </div>
    </div>
    
    <!-- Image Modal -->
    <ImageModal
      v-model="isModalOpen"
      :images="sampleImages"
      :initial-index="selectedImageIndex"
      title="Project Gallery"
      description="Click to zoom in/out, use arrows to navigate"
      @image-change="handleImageChange"
      @close="handleModalClose"
    />
  </div>
</template>

<script>
import ImageModal from '../_generics/ImageModal.vue'

export default {
  name: 'ImageModalExample',
  components: {
    ImageModal
  },
  data() {
    return {
      isModalOpen: false,
      selectedImageIndex: 0,
      sampleImages: [
        {
          src: 'https://picsum.photos/800/600?random=1',
          alt: 'Sample Image 1',
          title: 'Design Mockup',
          description: 'Initial design concept for the mobile app'
        },
        {
          src: 'https://picsum.photos/800/600?random=2',
          alt: 'Sample Image 2',
          title: 'User Interface',
          description: 'Final UI implementation with user feedback'
        },
        {
          src: 'https://picsum.photos/800/600?random=3',
          alt: 'Sample Image 3',
          title: 'Prototype',
          description: 'Interactive prototype for user testing'
        },
        {
          src: 'https://picsum.photos/800/600?random=4',
          alt: 'Sample Image 4',
          title: 'Final Design',
          description: 'Production-ready design system'
        }
      ]
    }
  },
  methods: {
    openImageModal(index) {
      this.selectedImageIndex = index
      this.isModalOpen = true
    },
    handleImageChange(data) {
      console.log('Image changed:', data)
    },
    handleModalClose() {
      console.log('Modal closed')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';

.image-modal-example {
  padding: $spacing-2xl;
  
  h2 {
    @include heading-style($font-size-2xl, $font-weight-semibold);
    margin-bottom: $spacing-xl;
    color: $text-primary;
  }
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-lg;
  margin-bottom: $spacing-xl;
}

.image-item {
  position: relative;
  border-radius: $border-radius-lg;
  overflow: hidden;
  cursor: pointer;
  transition: all $transition-normal;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    
    .image-overlay {
      opacity: 1;
    }
  }
}

.image-thumbnail {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity $transition-normal;
  
  i {
    color: $white;
    font-size: 32px;
  }
}

// Responsive adjustments
@media (max-width: $breakpoint-md) {
  .image-modal-example {
    padding: $spacing-lg;
  }
  
  .image-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: $spacing-md;
  }
  
  .image-thumbnail {
    height: 150px;
  }
}

@media (max-width: $breakpoint-sm) {
  .image-grid {
    grid-template-columns: 1fr;
  }
}
</style> 