<template>
  <div class="works-detail">
    <div class="works-detail__container">
      <div class="works-detail__navigation">
        <Button variant="ghost" size="medium" @click="goBack">
          <i class="mdi mdi-arrow-left works-detail__back-icon"></i>
          Back to Works
        </Button>
      </div>

      <div class="works-detail__header">
        <h1 class="works-detail__title">{{ project.title }}</h1>
        <div class="works-detail__metadata">
          <p>Date: {{ project.date }}</p>
          <p>Role: {{ project.role }}</p>
          <p>Client/Type: {{ project.client }}</p>
          <p>Tools & Stack: {{ project.tools }}</p>
        </div>
      </div>

      <div class="works-detail__content">
        <section class="works-detail__section">
          <h2>Overview</h2>
          <div v-html="project.overview"></div>
          <div class="works-detail__image-placeholder">Image Placeholder</div>
        </section>

        <section class="works-detail__section">
          <h2>Challenge</h2>
          <div v-html="project.challenge"></div>
        </section>

        <section class="works-detail__section">
          <h2>Process</h2>
          <div v-html="project.process"></div>
          <div class="works-detail__image-grid">
            <div class="works-detail__image-placeholder">Image Here</div>
            <div class="works-detail__image-placeholder">Image Here</div>
          </div>
        </section>

        <section class="works-detail__section">
          <h2>Learnings</h2>
          <div v-html="project.learnings"></div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../_generics/Button.vue'
import projects from '../../data/projects.js'

export default {
  name: 'WorksDetail',
  components: { 
    Button 
  },
  computed: {
    project() {
      const projectId = parseInt(this.$route.params.id)
      return projects[projectId] || projects[1]
    }
  },
  methods: {
    goBack() {
      window.location.hash = '#/'
      setTimeout(() => {
        const worksElement = document.getElementById('works')
        if (worksElement) {
          worksElement.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';

.works-detail {
  min-height: 100vh;
  background-color: $white;
  padding: $spacing-2xl 0;
  
  &__container {
    @include container;
    max-width: 800px;
  }
  
  &__navigation {
    margin-bottom: $spacing-2xl;
  }
  
  &__back-icon {
    font-size: 20px;
    margin-right: $spacing-xs;
  }
  
  &__header {
    margin-bottom: $spacing-3xl;
  }
  
  &__title {
    @include heading-style($font-size-4xl, $font-weight-normal);
    color: $text-primary;
    margin-bottom: $spacing-lg;
  }
  
  &__metadata {
    display: flex;
    flex-direction: column;
    gap: $spacing-xs;
    
    p {
      @include body-text($font-size-base, $font-weight-normal);
      color: $text-secondary;
      margin: 0;
    }
  }
  
  &__content {
    display: flex;
    flex-direction: column;
    gap: $spacing-3xl;
  }
  
  &__section {
    h2 {
      @include heading-style($font-size-2xl, $font-weight-medium);
      color: $primary-color;
      margin-bottom: $spacing-lg;
    }
    
    p {
      @include body-text($font-size-base, $font-weight-normal);
      color: $text-primary;
      line-height: 1.6;
      margin-bottom: $spacing-xl;
    }

    :deep(.level-one) {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin: $spacing-md 0 $spacing-xl $spacing-xl;
      padding-left: $spacing-xl;
      list-style-position: outside;

      li {
        @include body-text($font-size-base, $font-weight-normal);
        color: $text-primary;
        line-height: 1.6;
        margin: $spacing-sm 0;

        &:first-child {
          margin-top: 0;
        }
      }

      // nested lists (like a, b, c)
      ul, ol {
        margin-top: $spacing-xs;
        margin-bottom: $spacing-xs;
        padding-left: $spacing-lg;
      }
    }
  }
  
  &__image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    border: 2px dashed $gray-medium;
    border-radius: $border-radius-md;
    background-color: $gray-light;
    color: $text-secondary;
    @include body-text($font-size-sm, $font-weight-normal);
  }
  
  &__image-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-lg;
    
    @media (max-width: $breakpoint-md) {
      grid-template-columns: 1fr;
    }
  }
}
</style>