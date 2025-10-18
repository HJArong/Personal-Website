<template>
  <section id="works" class="works">
    <div class="works__skills-carousel">
      <div class="works__skills-track">
        <span
          v-for="skill in skills"
          :key="skill"
          class="works__skill"
        >
          {{ skill }}
        </span>
        <!-- Duplicate for seamless loop -->
        <span
          v-for="skill in skills"
          :key="skill + '-clone'"
          class="works__skill"
        >
          {{ skill }}
        </span>
      </div>
    </div>
    <div class="works__container">
      <div class="works__header">
        <h2 class="works__title">See my works</h2>
        <p class="works__subtitle">A collection of projects that showcase my skills and passion</p>
      </div>
      
      <div class="works__grid">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="works__project"
          :class="`works__project--${index % 3 + 1}`"
        >
          <div class="works__project-image">
            <div v-if="project.image">
              <img :src="project.image">
            </div>
            <div v-else class="works__project-placeholder">
              <span class="works__project-number">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>
          </div>
          
          <div class="works__project-content">
            <div class="works__project-info">
              <h3 class="works__project-title">
                {{ project.title }}
              </h3>
              <p class="works__project-description">
                {{ project.description }}
              </p>
            </div>
            <div class="works__project-tags">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="works__project-tag"
              >
                {{ tag }}
              </span>
            </div>
            
            <div class="works__project-actions">
              <Button variant="primary" size="medium" @click="viewDetails(project)">
                View Project
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="works__cta">
        <Button
          variant="primary"
          :size="isMobile ? 'medium' : 'large'" 
          @click="scrollToContact">
          Let's Work Together
        </Button>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '../_generics/Button.vue'

export default {
  name: 'Works',

  components: {
    Button
  },

  data() {
    return {
      windowWidth: window.innerWidth,
      projects: [
        {
          id: 1,
          title: 'Personal Portfolio',
          description: 'My personal website to showcase my work as a UX Engineer.',
          tags: ['Vuejs', 'HTML', 'CSS', 'Figma'],
          image: 'src/images/project-covers/personal-website-cover.png',
          url: '#'
        },
        {
          id: 2,
          title: 'Eventually',
          description: 'An all-in-one event planning platform designed to make organizing parties effortless.',
          tags: ['Figma', 'Moqups', 'Wireframing', 'UI/UX'],
          image: 'src/images/project-covers/eventually-cover.png',
          url: '#'
        },
        {
          id: 3,
          title: 'Scalema',
            description: 'A Web3 crowdfunding platform for investing in development projects in exchange for shares.',
          tags: ['Vue.js', 'Web3', 'Figma'],
          image: 'src/images/project-covers/scalema-cover.png',
          url: '#'
        },
      ],
      skills: [
        'UI Designing',
        'UX Designing',
        'Prototyping',
        'Wireframing',
        'Research',
        'AI Design',
        'Front end Development',
        'Vue.js',
        'HTML',
        'CSS'
      ]
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

    viewProject(project) {
      // Handle project view
      console.log('Viewing project:', project.title)
    },

    viewDetails(project) {
      // Navigate to project details page
      window.location.hash = `#/works/${project.id}`
    },

    scrollToContact() {
      this.$emit('scroll-to-section', 'contact')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/variables.scss';
  @import '../../assets/styles/mixins.scss';

  .works {
    background-color: $gray-light;

    .works__skills-carousel {
      overflow: hidden;
      width: 100%;
      background: $primary-color;
      color: $white;
      padding: 24px 0;
      display: flex;
      align-items: center;
    }

    .works__skills-track {
      display: flex;
      gap: 48px;
      white-space: nowrap;
      animation: scroll-skills 25s linear infinite;
    }

    .works__skill {
      font-size: 1.2rem;
      padding: 0 12px;
      display: inline-block;
    }

    @keyframes scroll-skills {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

  &__container {
    padding: 52px 24px;
  }
    
    &__header {
      text-align: center;
      margin-bottom: $spacing-3xl;
      @include slide-up;
    }
    
    &__title {
      @include heading-style($font-size-5xl, $font-weight-normal);
      margin-bottom: $spacing-md;

      @media (max-width: $breakpoint-md) {
        @include heading-style($font-size-3xl, $font-weight-normal);
      }
    }
    
    &__subtitle {
      @include body-text($font-size-xl, $font-weight-normal);
      @include text-variant('secondary');
      max-width: 600px;
      margin: 0 auto;

      @media (max-width: $breakpoint-md) {
        @include body-text($font-size-base, $font-weight-normal);
      }
    }
    
    &__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: $spacing-2xl;
      margin-bottom: $spacing-3xl;
      max-width: 1000px;
      margin: auto;
      padding-bottom: 52px;
      
      @media (max-width: $breakpoint-md) {
        grid-template-columns: 1fr;
        gap: $spacing-xl;
      }
    }
    
    &__project {
      display: flex;
      flex-direction: column;
      background-color: $white;
      border-radius: $border-radius-lg;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: all $transition-normal;
      @include hover-lift;
      
      &:hover {
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
      }
    }
    
    &__project-image {
      height: 200px;
      overflow: hidden;

      img {
        width: 100%;
        object-fit: cover;
      }
    }
    
    &__project-placeholder {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, $primary-color, $primary-hover);
      @include flex-center;
      position: relative;
    }
    
    &__project-number {
      @include heading-style($font-size-4xl, $font-weight-normal);
      color: $white;
      opacity: 0.8;
    }
    
    &__project-content {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: $spacing-xl;
    }

    &__project-info {
      flex: 1;
    }
    
    &__project-title {
      @include subheading-style($font-size-xl, $font-weight-medium);
      margin-bottom: $spacing-sm;
      color: $text-primary;

      @media (max-width: $breakpoint-sm) {
        @include subheading-style($font-size-lg, $font-weight-medium);
      }
    }
    
    &__project-description {
      @include body-text($font-size-base, $font-weight-normal);
      @include text-variant('secondary');
      margin-bottom: $spacing-lg;
      line-height: 1.6;

      @media (max-width: $breakpoint-sm) {
        @include body-text($font-size-sm, $font-weight-normal);
      }
    }
    
    &__project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: $spacing-xs;
      margin-bottom: $spacing-lg;
    }
    
    &__project-tag {
      @include body-text($font-size-sm, $font-weight-medium);
      background-color: $primary-background;
      color: $primary-color;
      padding: $spacing-xs $spacing-sm;
      border-radius: $border-radius-full;
      border: 1px solid rgba(252, 68, 135, 0.2);
    }
    
    &__project-actions {
      display: flex;
      gap: $spacing-sm;

      button {
        width: 100%;
      }
    }
    
    &__cta {
      text-align: center;
      @include fade-in(0.8s);
      animation-delay: 0.2s;
      animation-fill-mode: both;
    }
  }
</style> 