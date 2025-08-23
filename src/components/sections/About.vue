<template>
  <section id="about" class="about">
    <div class="about__container">
      <div class="about__content">
        <!-- Left Section - Heading -->
        <div class="about__heading">
          <div class="image-container">
            <img
              src="../../images/haze-portrait.svg"
              alt="Hazel Arong Portrait"
              class="portrait"
            />
            <img
              src="../../images/figma-cursor.svg"
              alt="Hazel Arong Portrait"
              class="cursor"
            />
          </div>
          <h2 class="about__title">
            Hi, I'm <span class="about__name">Haze.</span>
          </h2>
        </div>
        
        <!-- Right Section - Content and CTA -->
        <div class="about__body">
          <div class="about__description">
            <p>
              I design and build digital experiences 
              that feel calm, clear, and human. I value empathy in design, logic in code, and 
              beauty in the details. I thrive in Agile teams using Scrum, where I get to collaborate 
              early, iterate often, and push for user-centered outcomes.
            </p>
            <p>
              Also: fueled by hot coffee, color palettes, and well-curated Spotify playlist.
            </p>
          </div>
          
          <div class="about__cta">
            <Button
              variant="primary"
              :size="isMobile ? 'medium' : 'large'" 
              @click="scrollToWorks"
            >
              View my works
            </Button>
            <Button
              variant="ghost"
              :size="isMobile ? 'medium' : 'large'"
              @click="scrollToContact"
            >
              Know more about me
            </Button>
            <Button
              variant="ghost"
              :size="isMobile ? 'medium' : 'large'" 
            >
              My CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '../_generics/Button.vue'
import Portrait from '../../images/haze-portrait.svg'

export default {
  name: 'About',

  components: { Button },

  data() {
    return {
      windowWidth: window.innerWidth
    }
  },

  computed: {
    isMobile() {
      return this.windowWidth <= 640;
    }
  },

  mounted() {
    window.addEventListener('resize', this.handleResize)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth
    },

    scrollToWorks() {
      this.$emit('scroll-to-section', 'works')
    },

    scrollToContact() {
      this.$emit('scroll-to-section', 'contact') // better than resetting hash
    },
  }
}
</script>


<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';

.about {
  @include section-padding;
  // padding-top: calc($spacing-3xl + 80px); // Account for fixed header
  background-color: $white;
  background: radial-gradient(circle at 50% 30%, #fff 0%, #FFE5EF 100%);
  
  &__container {
    @include container;
  }
  
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: $spacing-4xl;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    
    @media (max-width: $breakpoint-lg) {
      grid-template-columns: 1fr;
      gap: $spacing-3xl;
      text-align: center;
    }
  }
  
  // Left Section - Heading
  &__heading {
    display: flex;
    flex-direction: column;
    gap: 52px;
    @include fade-in(0.8s);
    animation-delay: 0.2s;
    animation-fill-mode: both;

    .image-container {
      position: relative;

      .portrait {
        @media (max-width: $breakpoint-lg) {
          width: 300px;
        }

        @media (max-width: $breakpoint-md) {
          width: 250px;
        }
      }

      .cursor {
        position: absolute;
        top: 50%;
        left: 90%;
        width: 200px;

        @media (max-width: $breakpoint-lg) {
          width: 180px;
          top:  90%;
          left: 12%;
        }

        @media (max-width: $breakpoint-sm) {
          width: 160px;
        }
      }
    }
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

      @media (max-width: $breakpoint-sm) {
        @include body-text($font-size-base, $font-weight-normal);
        line-height: 1.5;
      }
      
      &:last-child {
        margin-bottom: 0;
        font-style: italic;
        color: $text-secondary;
      }
    }
  }
  
  &__cta {
    display: flex;
    justify-content: center;;
    gap: $spacing-md;
    flex-wrap: wrap;
    
    @media (max-width: $breakpoint-sm) {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style> 