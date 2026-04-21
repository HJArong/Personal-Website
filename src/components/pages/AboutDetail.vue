<template>
  <div class="about-detail">
    <div class="about-detail__container">
      <header class="about-detail__header">
        <Button
          variant="ghost"
          size="medium"
          @click="goBack"
        >
          &larr; Back to Portfolio
        </Button>
        <h1 class="about-detail__title">About Me</h1>
      </header>
      <div class="about-detail__container-contents">
        <section class="about-detail__intro">
          <div class="about-detail__intro-images">
            <div class="about-detail__intro-image about-detail__intro-image--1">
              <img src="../../images/about-images/IMG_20250329_191726 (1).jpg" alt="Hazel exploring" />
            </div>
            <div class="about-detail__intro-image about-detail__intro-image--2">
              <img src="../../images/about-images/IMG_20250905_185650.jpg" alt="Hazel moment" />
            </div>
            <div class="about-detail__intro-image about-detail__intro-image--3">
              <img src="../../images/about-images/IMG_20251214_103628~2.jpg" alt="Hazel adventure" />
            </div>
            <div class="about-detail__intro-image about-detail__intro-image--4">
              <img src="../../images/about-images/IMG_20260416_094917.jpg" alt="Hazel travels" />
            </div>
          </div>
          <div class="about-detail__intro-content">
            <p class="about-detail__intro-eyebrow">More about me</p>
            <h2 class="about-detail__intro-title">Designing with heart, building with intention</h2>
            <p class="body-text">
              I design with empathy and build with precision, turning ideas into interfaces that
              feel as good as they look. I&apos;m on a never-ending quest to make my work a little more
              beautiful, a lot more usable, and sprinkled with just the right amount of
              &quot;<span class="primary-color">ooh, that&apos;s pretty</span>&quot;
            </p>
            <p class="body-text">
              My sweet spot is where clean code meets human-centered design, creating products that are
              not just usable, but enjoyable.
            </p>
            <p class="body-text">
              Outside of work, I love to explore new places and discover their local food scenes.
              There&apos;s something magical about wandering through unfamiliar streets, finding hidden
              gems, and tasting flavors that tell stories of culture and tradition.
            </p>
            <div class="about-detail__intro-traits">
              <span class="about-detail__intro-trait">Capricorn</span>
              <span class="about-detail__intro-trait">INTJ</span>
            </div>
          </div>
        </section>
        <ContentSection
          section-title="Skills and expertise"
          color="accent"
        >
          <p class="body-text">
            I am a UX Engineer working at the crossroads of design and development. I
            specialize in crafting smooth, intuitive digital experiences by blending
            design thinking with frontend engineering.
          </p>
          <div class="group">
            <p class="body-text">
              My design and UX skills include:
            </p>
            <div class="hobbies-grid">
              <div
                v-for="item in skillsItem"
                :key="item"
                class="hobbies-grid__item"
              >
                {{ item }}
              </div>
            </div>
          </div>
          <div class="group">
            <p class="body-text">
              My frontend development skills include:
            </p>
            <div class="hobbies-grid">
              <div
                v-for="item in devItem"
                :key="item"
                class="hobbies-grid__item"
              >
                {{ item }}
              </div>
            </div>
          </div>
          <div class="group">
            <p class="body-text">
              My collaboration and product thinking skills include:
            </p>
            <div class="hobbies-grid">
              <div
                v-for="item in collabItem"
                :key="item"
                class="hobbies-grid__item"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </ContentSection>
        <ContentSection
          section-title="Career journey"
          color="accent"
        >
          <div class="group">
            <p class="subheader-text">
              2018 - 2022: Laying the foundation
            </p>
            <p class="body-text">
              I studied Computer Science at the University of the Philippines, where I mainly explored
              algorithms and theory. In my final year, I worked as a part-time frontend
              developer but discovered a fascination for how people interact with technology,
              which sparked a shift from pure code to crafting intuitive user experiences.
            </p>
          </div>
          <div class="group">
            <p class="subheader-text">
              2021 - Present: Bridging worlds
            </p>
            <p class="body-text">
              I stepped into the role of UX Engineer and Team Lead, blending design sensibility with
              engineering precision. I led cross-functional teams where designers, developers, and
              stakeholders worked in sync to ship products that not only functioned well, but also felt right.
              Along the way, I developed leadership skills in facilitation, mentoring, and product decision-making.
              I&apos;ve also started delving into AI-driven design, focusing on how we can design for AI systems,
              design with AI as a collaborator, and design experiences shaped by AI. 
            </p>
          </div>
          <div class="group">
            <p class="subheader-text">
              Now: Designing with intent
            </p>
            <p class="body-text">
              I enjoy creating calm, human-centered digital experiences that balance beauty,
              accessibility, and performance. I&apos;m also exploring Web3 design, focusing on how to simplify complex
              blockchain concepts and create intuitive, human-centered experiences for decentralized platforms.
              I&apos;m championing a &quot;pink energy&quot; ethos by delivering work that feels empathetic, uplifting, and quietly
              powerful.
            </p>
          </div>
        </ContentSection>
        <ContentSection
          section-title="Beyond the desk"
          color="accent"
        >
          <p class="body-text">
            Still in the first chapters of my career, I&apos;ve made it a priority to step beyond the comfort of my
            desk by speaking at events and workshops, attending conferences, and seeking out rooms that challenge
            me to grow. These experiences have not only strengthened my confidence and communication skills but
            also deepened my understanding of how design impacts real people, teams, and communities.
          </p>
        </ContentSection>
      </div>

      <section class="about-detail__section">
        <div class="about-detail__cta">
          <h2>Let&apos;s Connect</h2>
          <p class="body-text">
            I&apos;m always excited to collaborate on interesting projects and connect with 
            fellow designers and developers. Whether you want to discuss a potential 
            project, share ideas, or simply say hello, I&apos;d love to hear from you.
          </p>
          <div class="about-detail__cta-buttons">
            <Button
              variant="primary"
              :size="isMobile ? 'medium' : 'large'" 
              @click="scrollToContact"
            >
              Get in Touch
            </Button>
            <Button
              variant="ghost"
              :size="isMobile ? 'medium' : 'large'" 
              @click="scrollToWorks"
            >
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
import ContentSection from '../_generics/ContentSection.vue'

export default {
  name: 'AboutDetail',

  components: {
    Button,
    ContentSection
  },

  data() {
    return {
      windowWidth: window.innerWidth,
      skillsItem: [
        'UX Design',
        'UI Design',
        'Wireframing',
        'Prototyping',
        'User Research',
        'Figma',
        'Responsive Web Design',
      ],
      devItem: [
        'HTML',
        'CSS',
        'JavaScript',
        'Vue.js',
        'Python',
        'Git & Version Control',
        'Performance Optimization',
      ],
      collabItem: [
        'Agile/Scrum',
        'Cross-Functional Communication',
        'Product Mindset',
        'Storytelling',
      ],
    };
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

    goBack() {
      window.location.hash = '#/'
    },

    scrollToContact() {
      window.location.hash = '#/'
      setTimeout(() => {
        const contactElement = document.getElementById('contact')
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    },

    scrollToWorks() {
      window.location.hash = '#/'
      setTimeout(() => {
        const worksElement = document.getElementById('works')
        if (worksElement) {
          worksElement.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';

.about-detail {
  min-height: 100vh;
  background-color: #fafafa;
  padding: 24px 0;

  p {
    margin-bottom: unset !important;
  }

  .subheader-text {
    @include subheading-style($font-size-base, $font-weight-medium);
  }

  .body-text {
    @include body-text;

    @media (max-width: $breakpoint-sm) {
       @include body-text($font-size-sm, $font-weight-normal);
    }
  }

  .group {
    @include flex-column;
    gap: 12px;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  
  &__container {
    @include container;
    max-width: $container-width;
    margin: 0 auto;

    &-contents {
      @include fade-in(0.8s);

      .hobbies-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, auto));
        grid-gap: 12px;

        &__item {
          padding: 12px 16px;
          border-radius: 12px;
          background: $white;

          @media (max-width: $breakpoint-sm) {
            @include body-text($font-size-sm, $font-weight-normal);
          }
        }
      }
    }
  }
  
  &__header {
    margin-bottom: $spacing-2xl;
    text-align: center;
  }
  
  &__title {
    @include heading-style($font-size-5xl, $font-weight-normal);
    color: $text-primary;
    margin: 24px 0 0 0;
  }

  &__intro {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: $spacing-3xl;
    margin-bottom: $spacing-3xl;
    padding: $spacing-2xl;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 28px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.04);

    @media (max-width: $breakpoint-lg) {
      grid-template-columns: 1fr;
      gap: $spacing-2xl;
    }
  }

  &__intro-images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content;
    height: max-content;
    margin: auto;
    gap: $spacing-md;

    @media (max-width: $breakpoint-sm) {
      gap: $spacing-sm;
    }
  }

  &__intro-image {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.06);
    aspect-ratio: 3 / 4;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  &__intro-content {
    display: flex;
    flex-direction: column;
    gap: $spacing-lg;
    justify-content: center;
  }

  &__intro-eyebrow {
    @include body-text($font-size-sm, $font-weight-semibold);
    color: $text-tertiary;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin: 0 !important;
  }

  &__intro-title {
    @include heading-style($font-size-3xl, $font-weight-normal);
    color: $text-primary;
    margin: 0;
    line-height: 1.25;

    @media (max-width: $breakpoint-md) {
      @include heading-style($font-size-2xl, $font-weight-normal);
    }
  }

  &__intro-traits {
    display: flex;
    gap: $spacing-sm;
    margin-top: $spacing-sm;
  }

  &__intro-trait {
    @include body-text($font-size-sm, $font-weight-medium);
    color: $text-secondary;
    background: rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.08);
    padding: $spacing-xs $spacing-md;
    border-radius: $border-radius-full;
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
  
  &__cta {
    text-align: center;
    padding: $spacing-3xl $spacing-2xl;
    background-color: $white;
    border-radius: $border-radius-lg;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    @media (max-width: $breakpoint-md) {
      padding: $spacing-2xl $spacing-lg;
    }
    
    h2 {
      @include heading-style($font-size-2xl, $font-weight-normal);
      color: $text-primary;
      margin-bottom: $spacing-md;
    }
    
    p {
      @include body-text($font-size-base, $font-weight-normal);
      line-height: 1.7;
      color: $text-secondary;
      max-width: 560px;
      margin: 0 auto $spacing-2xl;
    }
  }
  
  &__cta-buttons {
    display: flex;
    gap: $spacing-md;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: $spacing-lg;
  }
}
</style>
