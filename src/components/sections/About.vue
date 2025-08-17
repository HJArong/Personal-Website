<template>
  <section id="about" class="about">
    <div class="about__container">
      <div class="about__content">
        <!-- Left Section - Heading -->
        <div class="about__heading">
          <h2 class="about__title">
            Hi, I'm <span class="about__name">Haze</span>
          </h2>
        </div>
        
        <!-- Right Section - Content and CTA -->
        <div class="about__body">
          <div class="about__description">
            <p>
              With a bachelor's degree in Computer Science, I design and build digital experiences 
              that feel calm, clear, and human. I value empathy in design, logic in code, and 
              beauty in the details. I thrive in Agile teams using Scrum, where I get to collaborate 
              early, iterate often, and push for user-centered outcomes.
            </p>
            <p>
              Also: fueled by hot coffee, color palettes, and well-curated Spotify playlist.
            </p>
          </div>
          
          <div class="about__cta">
            <Button variant="primary" size="large" @click="scrollToWorks">
              View my works
            </Button>
            <Button variant="ghost" size="large" @click="scrollToContact">
              Know more about me
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '../_generics/Button.vue'

export default {
  name: 'About',
  components: {
    Button
  },
  methods: {
    scrollToWorks() {
      this.$emit('scroll-to-section', 'works')
    },
    scrollToContact() {
      // Use window.location for reliable navigation
      window.location.hash = '#/about'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';

.about {
  @include section-padding;
  padding-top: calc($spacing-3xl + 80px); // Account for fixed header
  background-color: #fafafa;
  
  &__container {
    @include container;
  }
  
  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-4xl;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    
    @media (max-width: $breakpoint-lg) {
      grid-template-columns: 1fr;
      gap: $spacing-3xl;
      text-align: center;
    }
  }
  
  // Left Section - Heading
  &__heading {
    @include slide-up;
  }
  
  &__title {
    @include heading-style($font-size-5xl, $font-weight-normal);
    margin: 0;
    color: $text-primary;
    line-height: 1.2;
    
    @media (max-width: $breakpoint-lg) {
      font-size: $font-size-4xl;
    }
    
    @media (max-width: $breakpoint-md) {
      font-size: $font-size-3xl;
    }
  }
  
  &__name {
    color: $primary-color;
  }
  
  // Right Section - Content and CTA
  &__body {
    @include fade-in(0.8s);
    animation-delay: 0.2s;
    animation-fill-mode: both;
  }
  
  &__description {
    margin-bottom: $spacing-3xl;
    
    p {
      @include body-text($font-size-lg, $font-weight-normal);
      margin-bottom: $spacing-lg;
      line-height: 1.7;
      color: $text-primary;
      
      &:last-child {
        margin-bottom: 0;
        font-style: italic;
        color: $text-secondary;
      }
    }
  }
  
  &__cta {
    display: flex;
    gap: $spacing-md;
    flex-wrap: wrap;
    
    @media (max-width: $breakpoint-lg) {
      justify-content: center;
    }
    
    @media (max-width: $breakpoint-sm) {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style> 