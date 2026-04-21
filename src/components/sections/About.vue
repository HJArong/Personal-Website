<template>
  <section id="about" class="about">
    <div class="about__container">
      <div class="about__content">
        <!-- Left Section - Heading -->
        <div class="about__heading">
          <div class="image-container">
            <img
              src="../../images/haze-portrait-1.png"
              alt="Hazel Arong Portrait"
              class="portrait"
            />
            <!-- <img
              src="../../images/figma-cursor.svg"
              alt="Hazel Arong Portrait"
              class="cursor"
            /> -->
          </div>
          <h2 class="about__title">
            Hi, I'm <span class="about__name">Haze.</span>
          </h2>
        </div>
        
        <!-- Right Section - Content and CTA -->
        <div class="about__body">
          <div class="about__description">
            <p>
              I design and build digital experiences that feel calm, clear, and human. I care
              deeply about empathy in design, logic in code, and beauty in the details.
            </p>
            <p>
              I thrive in Agile teams using Scrum, where I get to collaborate
              early, iterate often, and push for user-centered outcomes.
            </p>
            <p>
              Also fueled by hot coffee, curated color palettes, and a well-made Spotify
              playlist.
            </p>
          </div>
          
          <div class="about__cta">
            <Button
              variant="primary"
              :size="isMobile ? 'medium' : 'large'" 
              @click="scrollToWorks"
            >
              View my work
            </Button>
            <Button
              variant="ghost"
              :size="isMobile ? 'medium' : 'large'"
              @click="openAbout"
            >
              Learn more about me
            </Button>
            <Button
              variant="ghost"
              :size="isMobile ? 'medium' : 'large'"
              disabled
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

    openAbout() {
      window.location.hash = '#/about';
    },

    openCV() {
      // Place your PDF in the project's public/ folder (e.g. public/Hazel-Arong-CV.pdf)
      // This will open the PDF in a new tab
      window.open('/Hazel-Arong-CV.pdf', '_blank')
    }
  }
}
</script>


<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';

.about {
  @include section-padding;
  background: linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%);
  
  &__container {
    @include container;
  }
  
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: $spacing-3xl;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    padding: $spacing-2xl 0;
    
    @media (max-width: $breakpoint-lg) {
      grid-template-columns: 1fr;
      gap: $spacing-2xl;
      text-align: center;
    }
  }
  
  // Left Section - Heading
  &__heading {
    display: flex;
    flex-direction: column;
    gap: $spacing-2xl;
    @include fade-in(0.8s);
    animation-delay: 0.2s;
    animation-fill-mode: both;

    .image-container {
      position: relative;

      .portrait {
        width: 350px;

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
        animation: move-cursor 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        pointer-events: none;

        @media (max-width: $breakpoint-lg) {
          width: 180px;
          top:  90%;
          left: 12%;
        }

        @media (max-width: $breakpoint-sm) {
          width: 160px;
        }
      }

      @keyframes move-cursor {
        0% {
          transform: translate(0, 0) rotate(-10deg);
        }
        20% {
          transform: translate(-20px, -10px) rotate(0deg);
        }
        40% {
          transform: translate(-40px, 10px) rotate(10deg);
        }
        60% {
          transform: translate(-20px, 20px) rotate(0deg);
        }
        80% {
          transform: translate(0, 0) rotate(-10deg);
        }
        100% {
          transform: translate(0, 0) rotate(-10deg);
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
    max-width: 760px;
    padding: $spacing-2xl $spacing-3xl;
    border-radius: 32px;
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(252, 68, 135, 0.16);
    box-shadow: 0 20px 50px rgba(252, 68, 135, 0.08);
    backdrop-filter: blur(10px);

    @media (max-width: $breakpoint-sm) {
      padding: $spacing-xl $spacing-lg;
    }
  }
  
  &__description {
    margin-bottom: $spacing-2xl;
    
    p {
      @include body-text($font-size-lg, $font-weight-normal);
      margin-bottom: $spacing-md;
      line-height: 1.75;
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
  
  &__traits {
    display: flex;
    justify-content: center;
    gap: $spacing-sm;
    margin-bottom: $spacing-xl;
  }

  &__trait {
    @include body-text($font-size-sm, $font-weight-medium);
    color: $primary-color;
    background: rgba(252, 68, 135, 0.08);
    border: 1px solid rgba(252, 68, 135, 0.16);
    padding: $spacing-xs $spacing-md;
    border-radius: $border-radius-full;
  }

  &__cta {
    display: flex;
    justify-content: center;
    gap: $spacing-md;
    flex-wrap: wrap;
    
    @media (max-width: $breakpoint-sm) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: $spacing-md;
    width: 100%;
    max-width: 900px;
    @include fade-in(0.8s);
    animation-delay: 0.4s;
    animation-fill-mode: both;

    @media (max-width: $breakpoint-md) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: $breakpoint-sm) {
      grid-template-columns: repeat(2, 1fr);
      gap: $spacing-sm;
    }
  }

  &__gallery-item {
    aspect-ratio: 1;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 12px 32px rgba(252, 68, 135, 0.1);
    border: 1px solid rgba(252, 68, 135, 0.12);
    transition: transform $transition-normal, box-shadow $transition-normal;

    &:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow: 0 20px 48px rgba(252, 68, 135, 0.16);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &--1 {
      transform: rotate(-2deg);
      &:hover { transform: rotate(0deg) translateY(-4px) scale(1.02); }
    }

    &--2 {
      transform: rotate(1.5deg);
      &:hover { transform: rotate(0deg) translateY(-4px) scale(1.02); }
    }

    &--3 {
      transform: rotate(-1deg);
      &:hover { transform: rotate(0deg) translateY(-4px) scale(1.02); }
    }

    &--4 {
      transform: rotate(2deg);
      &:hover { transform: rotate(0deg) translateY(-4px) scale(1.02); }
    }
  }
}
</style> 