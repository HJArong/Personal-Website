<template>
  <div class="about-detail">
    <div class="about-detail__container">
      <header class="about-detail__header">
        <Button
          variant="ghost"
          size="medium"
          @click="goBack"
        >
          ← Back to Portfolio
        </Button>
        <h1 class="about-detail__title">About Me</h1>
      </header>

      <p class="wip">
        This section is still a work in progress...
      </p>

      <section class="about-detail__section">
        <div class="about-detail__cta">
          <h2>Let's Connect</h2>
          <p>
            I'm always excited to collaborate on interesting projects and connect with 
            fellow designers and developers. Whether you want to discuss a potential 
            project, share ideas, or just say hello, I'd love to hear from you!
          </p>
          <div class="about-detail__cta-buttons">
            <Button variant="primary" size="large" @click="scrollToContact">
              Get in Touch
            </Button>
            <Button variant="ghost" size="large" @click="scrollToWorks">
              View My Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Button from '../_generics/Button.vue'

export default {
  name: 'AboutDetail',
  components: {
    Button
  },
  mounted() {
    this.animateSkillMeters()
  },
  methods: {
    goBack() {
      // Use window.location for reliable navigation
      window.location.hash = '#/'
    },
    scrollToContact() {
      // Navigate to home and scroll to contact
      window.location.hash = '#/'
      setTimeout(() => {
        const contactElement = document.getElementById('contact')
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    },
    scrollToWorks() {
      // Navigate to home and scroll to works
      window.location.hash = '#/'
      setTimeout(() => {
        const worksElement = document.getElementById('works')
        if (worksElement) {
          worksElement.scrollIntoView({ behavior: 'smooth' })
        }
             }, 100)
     },
     animateSkillMeters() {
       // Animate skill meters with staggered delay
       const skillMeters = document.querySelectorAll('.about-detail__skill-progress')
       skillMeters.forEach((meter, index) => {
         setTimeout(() => {
           meter.style.width = meter.style.width || '0%'
         }, index * 100)
       })
     }
   }
 }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';

.about-detail {
  min-height: 100vh;
  background-color: #fafafa;
  padding-top: 80px;
  
  &__container {
    @include container;
    max-width: 800px;
    margin: 0 auto;
    padding: $spacing-3xl 0;
  }
  
  &__header {
    margin-bottom: $spacing-4xl;
    text-align: center;
  }
  
  &__title {
    @include heading-style($font-size-5xl, $font-weight-normal);
    color: $text-primary;
    margin: 24px 0 0 0;
  }

  .wip {
    text-align: center;
    padding: 50px 0;
  }
  
  &__content {
    @include fade-in(0.8s);
  }
  
  &__section {
    margin-bottom: $spacing-4xl;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  &__section-title {
    @include subheading-style($font-size-2xl, $font-weight-normal);
    color: $text-primary;
    margin-bottom: $spacing-2xl;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -$spacing-sm;
      left: 0;
      width: 60px;
      height: 3px;
      background-color: $primary-color;
      border-radius: $border-radius-full;
    }
  }
  
  p {
    @include body-text($font-size-lg, $font-weight-normal);
    line-height: 1.8;
    margin-bottom: $spacing-lg;
    color: $text-primary;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  &__skills {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: $spacing-3xl;
  }
  
  &__skill-category {
    h3 {
      @include heading-style($font-size-xl, $font-weight-normal);
      color: $primary-color;
      margin-bottom: $spacing-lg;
    }
  }
  
  &__skill-list {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
  }
  
  &__skill-item {
    display: flex;
    flex-direction: column;
    gap: $spacing-xs;
  }
  
  &__skill-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  &__skill-name {
    @include body-text($font-size-base, $font-weight-medium);
    color: $text-primary;
    flex: 1;
  }
  
  &__skill-level {
    @include body-text($font-size-sm, $font-weight-medium);
    color: $primary-color;
    margin-left: $spacing-sm;
  }
  
  &__skill-meter {
    height: 8px;
    background-color: $gray-light;
    border-radius: $border-radius-full;
    overflow: hidden;
    position: relative;
  }
  
  &__skill-progress {
    height: 100%;
    background: linear-gradient(90deg, $primary-color, $primary-hover);
    border-radius: $border-radius-full;
    transition: width 1.5s ease-in-out;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      animation: shimmer 2s infinite;
    }
  }
  
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  
  &__philosophy {
    display: grid;
    gap: $spacing-2xl;
  }
  
  &__philosophy-item {
    h3 {
      @include subheading-accent-style($font-size-xl, $font-weight-normal);
      color: $primary-color;
      margin-bottom: $spacing-md;
    }
  }
  
  &__interests {
    h3 {
      @include heading-style($font-size-xl, $font-weight-normal);
      color: $text-primary;
      margin-bottom: $spacing-lg;
    }
    
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: $spacing-sm;
    }
    
    li {
      @include body-text($font-size-base, $font-weight-normal);
      color: $text-primary;
      padding: $spacing-sm;
      background-color: $white;
      border-radius: $border-radius-md;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
  }
  
  &__cta {
    text-align: center;
    padding: $spacing-4xl;
    background-color: $white;
    border-radius: $border-radius-lg;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    
    h2 {
      @include heading-style($font-size-3xl, $font-weight-normal);
      color: $text-primary;
      margin-bottom: $spacing-lg;
    }
    
    p {
      @include body-text($font-size-lg, $font-weight-normal);
      line-height: 1.7;
      color: $text-primary;
      margin-bottom: $spacing-2xl;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  
  &__cta-buttons {
    display: flex;
    gap: $spacing-md;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style> 