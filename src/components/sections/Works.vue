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
            <div class="works__project-placeholder">
              <span class="works__project-number">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>
          </div>
          
          <div class="works__project-content">
            <h3 class="works__project-title">{{ project.title }}</h3>
            <p class="works__project-description">{{ project.description }}</p>
            
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
              <Button variant="secondary" size="small" @click="viewProject(project)">
                View Project
              </Button>
              <Button variant="ghost" size="small" @click="viewDetails(project)">
                Details
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
          title: 'E-Commerce Platform',
          description: 'A modern e-commerce solution with advanced features including user authentication, payment processing, and inventory management.',
          tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
          image: '/project1.jpg',
          url: '#'
        },
        {
          id: 2,
          title: 'Mobile App Design',
          description: 'A comprehensive mobile app design system with custom components, animations, and user experience optimization.',
          tags: ['Figma', 'Adobe XD', 'Prototyping', 'UI/UX'],
          image: '/project2.jpg',
          url: '#'
        },
        {
          id: 3,
          title: 'Portfolio Website',
          description: 'A responsive portfolio website built with modern web technologies and optimized for performance and accessibility.',
          tags: ['Vue.js', 'SCSS', 'Vite', 'Responsive'],
          image: '/project3.jpg',
          url: '#'
        },
        {
          id: 4,
          title: 'Data Visualization Dashboard',
          description: 'An interactive dashboard for data visualization with real-time updates and customizable charts and graphs.',
          tags: ['D3.js', 'Vue.js', 'API', 'Charts'],
          image: '/project4.jpg',
          url: '#'
        },
        {
          id: 5,
          title: 'Brand Identity Design',
          description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines for a startup.',
          tags: ['Logo Design', 'Branding', 'Typography', 'Guidelines'],
          image: '/project5.jpg',
          url: '#'
        },
        {
          id: 6,
          title: 'Web Application',
          description: 'A full-stack web application with user management, real-time features, and modern architecture patterns.',
          tags: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
          image: '/project6.jpg',
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
      padding: $spacing-xl;
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
    }
    
    &__cta {
      text-align: center;
      @include fade-in(0.8s);
      animation-delay: 0.2s;
      animation-fill-mode: both;
    }
  }
</style> 