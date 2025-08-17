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
          <p>Client: {{ project.client }}</p>
        </div>
      </div>

      <div class="works-detail__content">
        <section class="works-detail__section">
          <h2>Overview</h2>
          <p>{{ project.overview }}</p>
          <div class="works-detail__image-placeholder">Image Placeholder</div>
        </section>

        <section class="works-detail__section">
          <h2>Problem</h2>
          <p>{{ project.problem }}</p>
        </section>

        <section class="works-detail__section">
          <h2>Solution</h2>
          <p>{{ project.solution }}</p>
          <div class="works-detail__image-grid">
            <div class="works-detail__image-placeholder">Image Here</div>
            <div class="works-detail__image-placeholder">Image Here</div>
          </div>
        </section>

        <section class="works-detail__section">
          <h2>Learnings</h2>
          <p>{{ project.learnings }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../_generics/Button.vue'

export default {
  name: 'WorksDetail',
  components: { 
    Button 
  },
  data() {
    return {
      projects: {
        1: {
          title: 'E-Commerce Platform',
          date: '2023',
          role: 'UX Designer, Frontend Developer',
          client: 'Tech Startup',
          overview: 'A modern e-commerce solution with advanced features including user authentication, payment processing, and inventory management.',
          problem: 'The client needed a scalable e-commerce platform that could handle high traffic, multiple payment methods, and complex inventory management.',
          solution: 'Developed a full-stack solution using React for the frontend, Node.js for the backend, and MongoDB for data storage.',
          learnings: 'Learned the importance of user testing in e-commerce and how to optimize for performance at scale.'
        },
        2: {
          title: 'Mobile App Design',
          date: '2023',
          role: 'UX Designer',
          client: 'Mobile App Company',
          overview: 'A comprehensive mobile app design system with custom components, animations, and user experience optimization.',
          problem: 'The existing app had poor user engagement due to confusing navigation and outdated design patterns.',
          solution: 'Redesigned the entire user interface with modern design principles and implemented smooth animations.',
          learnings: 'Discovered how micro-interactions can significantly improve user engagement.'
        },
        3: {
          title: 'Portfolio Website',
          date: '2023',
          role: 'Frontend Developer',
          client: 'Personal Project',
          overview: 'A responsive portfolio website built with modern web technologies and optimized for performance and accessibility.',
          problem: 'Needed a professional portfolio that showcases work effectively while being fast and accessible.',
          solution: 'Built with Vue.js and SCSS, optimized for performance with Vite, and ensured accessibility compliance.',
          learnings: 'Gained deeper understanding of Vue.js ecosystem and accessibility best practices.'
        },
        4: {
          title: 'Data Visualization Dashboard',
          date: '2023',
          role: 'Frontend Developer',
          client: 'Analytics Company',
          overview: 'An interactive dashboard for data visualization with real-time updates and customizable charts.',
          problem: 'The client needed a way to display complex data in an easily digestible format for non-technical users.',
          solution: 'Created an interactive dashboard using D3.js for data visualization and Vue.js for the interface.',
          learnings: 'Learned advanced D3.js techniques and how to make complex data accessible.'
        },
        5: {
          title: 'Brand Identity Design',
          date: '2023',
          role: 'Brand Designer',
          client: 'Startup Company',
          overview: 'Complete brand identity design including logo, color palette, typography, and brand guidelines.',
          problem: 'A new startup needed a complete brand identity that would help them stand out in a competitive market.',
          solution: 'Developed a comprehensive brand identity including logo design, color palette, and typography system.',
          learnings: 'Understood the importance of brand consistency and how visual identity impacts customer perception.'
        },
        6: {
          title: 'Web Application',
          date: '2023',
          role: 'Full Stack Developer',
          client: 'Enterprise Client',
          overview: 'A full-stack web application with user management, real-time features, and modern architecture patterns.',
          problem: 'The client needed a scalable web application that could handle multiple users and real-time collaboration.',
          solution: 'Built a Vue.js frontend with Express backend, PostgreSQL database, and Socket.io for real-time features.',
          learnings: 'Gained experience with real-time web technologies and building scalable applications.'
        }
      }
    }
  },
  computed: {
    project() {
      const projectId = parseInt(this.$route.params.id)
      return this.projects[projectId] || this.projects[1]
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