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
        <span
          v-for="skill in skills"
          :key="`${skill}-clone`"
          class="works__skill"
        >
          {{ skill }}
        </span>
      </div>
    </div>

    <div class="works__container">
      <div class="works__header">
        <p class="works__eyebrow">Selected work</p>
        <h2 class="works__title">Projects shaped by strategy, story, and strong UI craft</h2>
        <p class="works__subtitle">
          A curated set of product, UX, and frontend work that reflects how I think,
          collaborate, and build.
        </p>
      </div>

      <div class="works__grid">
        <article
          v-for="(project, index) in projects"
          :key="project.id"
          class="works__project"
          :class="`works__project--${index % 3 + 1}`"
          tabindex="0"
          role="button"
          @click="viewDetails(project)"
          @keydown.enter="viewDetails(project)"
          @keydown.space.prevent="viewDetails(project)"
        >
          <div class="works__project-image">
            <div v-if="project.image">
              <img :src="project.image" :alt="`${project.title} preview`">
            </div>
            <div v-else class="works__project-placeholder">
              <span class="works__project-number">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>
          </div>

          <div class="works__project-content">
            <div class="works__project-meta">
              <span class="works__project-category">{{ project.role }}</span>
              <span class="works__project-type">{{ project.type }}</span>
            </div>

            <div class="works__project-info">
              <h3 class="works__project-title">{{ project.title }}</h3>
              <p class="works__project-description">{{ project.description }}</p>
            </div>

            <div class="works__project-footer">
              <div class="works__project-tags">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="works__project-tag"
                >
                  {{ tag }}
                </span>
              </div>

              <span class="works__project-cta">View case study &rarr;</span>
            </div>
          </div>
        </article>
      </div>

      <div class="works__cta">
        <Button
          variant="primary"
          :size="isMobile ? 'medium' : 'large'"
          @click="scrollToContact"
        >
          Let&apos;s Work Together
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
          role: 'UX Engineer • Personal Brand',
          type: 'Case Study',
          description: 'A portfolio experience designed to present my work, process, and personality with clarity and polish.',
          tags: ['Vue.js', 'HTML', 'CSS', 'Figma'],
          image: '/images/project-covers/personal-website-cover.png',
          url: '#'
        },
        {
          id: 2,
          title: 'Eventually',
          role: 'Product Design • Concept',
          type: 'Product Concept',
          description: 'An all-in-one event planning platform designed to make organizing celebrations feel easier, faster, and more delightful.',
          tags: ['Figma', 'Moqups', 'Wireframing', 'UI/UX'],
          image: '/images/project-covers/eventually-cover.png',
          url: '#'
        },
        {
          id: 3,
          title: 'Scalema',
          role: 'UX Engineering • Startup',
          type: 'Startup Project',
          description: 'A Web3 crowdfunding platform that makes investment flows feel more transparent, approachable, and trustworthy.',
          tags: ['Vue.js', 'Web3', 'Figma'],
          image: '/images/project-covers/scalema-cover.png',
          url: '#'
        }
      ],
      skills: [
        'UI Design',
        'UX Design',
        'Prototyping',
        'Wireframing',
        'Research',
        'AI Design',
        'Frontend Development',
        'Vue.js',
        'HTML',
        'CSS'
      ]
    }
  },

  computed: {
    isMobile() {
      return this.windowWidth <= 640
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

    viewDetails(project) {
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
  background: linear-gradient(180deg, #f8f8f8 0%, #ffffff 50%, #f8f8f8 100%);

  .works__skills-carousel {
    overflow: hidden;
    width: 100%;
    padding: 60px 0;
    display: flex;
    align-items: center;
  }

  .works__skills-track {
    display: flex;
    gap: 64px;
    white-space: nowrap;
    animation: scroll-skills 30s linear infinite;
  }

  .works__skill {
    @include body-text($font-size-base, $font-weight-normal);
    color: $text-tertiary;
    padding: 0 16px;
    display: inline-block;
    letter-spacing: 0.02em;
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
    padding: $spacing-3xl $spacing-lg;
  }

  &__header {
    text-align: center;
    margin-bottom: $spacing-3xl;
    padding-bottom: $spacing-lg;
    @include slide-up;
  }

  &__eyebrow {
    @include subheading-style($font-size-sm, $font-weight-semibold);
    color: $primary-color;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    margin-bottom: $spacing-sm;
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
    max-width: 680px;
    margin: 0 auto;

    @media (max-width: $breakpoint-md) {
      @include body-text($font-size-base, $font-weight-normal);
    }
  }

  &__grid {
    display: flex;
    flex-direction: column;
    gap: $spacing-xl;
    max-width: 900px;
    margin: 0 auto;
    padding-bottom: $spacing-3xl;
  }

  &__project {
    display: flex;
    flex-direction: row;
    gap: 0;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
    transition: transform $transition-normal, box-shadow $transition-normal;
    cursor: pointer;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1);

      .works__project-cta {
        color: $primary-hover;
      }

      .works__project-image img {
        transform: scale(1.05);
      }
    }

    &:focus {
      outline: 3px solid $primary-color;
      outline-offset: 3px;
    }

    @media (max-width: $breakpoint-md) {
      flex-direction: column;
    }
  }

  &__project-image {
    width: 320px;
    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff0f5;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.4s ease;
    }

    > div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: $breakpoint-md) {
      width: 100%;
      height: 220px;
    }
  }

  &__project-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #e0e0e0, #f5f5f5);
    @include flex-center;
    position: relative;
  }

  &__project-number {
    @include heading-style($font-size-4xl, $font-weight-normal);
    color: $text-tertiary;
    opacity: 0.5;
  }

  &__project-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: $spacing-xl;
    gap: $spacing-sm;
  }

  &__project-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: $spacing-md;
    flex-wrap: wrap;
  }

  &__project-category,
  &__project-type {
    @include body-text($font-size-sm, $font-weight-medium);
  }

  &__project-category {
    color: $primary-color;
  }

  &__project-type {
    color: $text-secondary;
  }

  &__project-title {
    @include subheading-style($font-size-2xl, $font-weight-semibold);
    color: $text-primary;
    line-height: 1.3;
    margin-bottom: $spacing-sm;

    @media (max-width: $breakpoint-sm) {
      @include subheading-style($font-size-lg, $font-weight-semibold);
    }
  }

  &__project-info {
    flex: 1;
  }

  &__project-description {
    @include body-text($font-size-base, $font-weight-normal);
    @include text-variant('secondary');
    line-height: 1.7;

    @media (max-width: $breakpoint-sm) {
      @include body-text($font-size-sm, $font-weight-normal);
    }
  }

  &__project-footer {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
    margin-top: auto;
  }

  &__project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-xs;
  }

  &__project-tag {
    @include body-text($font-size-xs, $font-weight-medium);
    background: rgba(0, 0, 0, 0.04);
    color: $text-secondary;
    padding: 0.25rem 0.85rem;
    border-radius: $border-radius-full;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }

  &__project-cta {
    @include body-text($font-size-sm, $font-weight-semibold);
    color: $primary-color;
    transition: color $transition-normal;
    margin-top: $spacing-sm;
  }

  &__cta {
    text-align: center;
    @include fade-in(0.8s);
    animation-delay: 0.2s;
    animation-fill-mode: both;
  }
}
</style>