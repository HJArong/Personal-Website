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
      <div class="about-detail__container-contents">
        <ContentSection
          section-title="More about me"
          color="accent"
        >
          <p class="body-text">
            I design with empathy and build with precision, turning ideas into interfaces that
            feel as good as they look. I’m on a never‑ending quest to make my works little more
            beautiful, a lot more usable, and sprinkled with just the right amount of
            “<span class="primary-color">ooh, that’s pretty ✨</span>”
          </p>
          <p class="body-text">
            My sweet spot is where clean code meets human‑centered design which makes products
            not just usable, but enjoyable.
          </p>
          <div class="group">
            <p class="body-text">
              While working my craft, I like:
            </p>
            <div class="hobbies-grid">
              <div
                v-for="item in hobbiesItem"
                :key="item"
                class="hobbies-grid__item"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </ContentSection>
        <ContentSection
          section-title="Skills and expertise"
          color="accent"
        >
          <p class="body-text">
            I am a UX Engineer. I am at the crossroad of design and development. I
            specialize in crafting smooth and intuitive digital experiences by blending
            design thinking and front end engineering.
          </p>
          <div class="group">
            <p class="body-text">
              My design and UX skills and expertise include:
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
              My front end development skills and expertise include:
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
              My collabortion and product thinking skills and expertise include:
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
              Studied Computer Science in the University of the Philippines, mainly exploring
              algorithms and theories. On my final year, I worked as a part-time front end
              developer but discovered a fascination for how people interact with technology,
              which sparked a shift from pure code to crafting intuitive user experiences.
            </p>
          </div>
          <div class="group">
            <p class="subheader-text">
              2021 - Present: Bridging worlds
            </p>
            <p class="body-text">
              I stepped into the role of UX Engineer & Team Lead, blending design sensibility with
              engineering precision. Led cross‑functional temas where designers, developers, and
              stakeholders worked in sync to ship products that not only function but feel right. I
              developed, leadership skills in facilitation, mentoring, and product decision‑making.
              I’ve started delving into AI-driven design, focusing on how we can design for AI systems,
              design with AI as a collaborator, and design experiences shaped by AI. 
            </p>
          </div>
          <div class="group">
            <p class="subheader-text">
              Now: Designing with intent
            </p>
            <p class="body-text">
              I enjoy creating calm, human‑centered digital experiences that balance beauty,
              accessibility, and performance. I’m delving into Web3 design by exploring how to simplify complex
              blockchain concepts and create intuitive, human-centered experiences in decentralized platforms.
              I'm Championing a “pink energy” ethos by delivering work that’s empathetic, uplifting, and quietly
              powerful.
            </p>
          </div>
        </ContentSection>
        <ContentSection
          section-title="Beyond the desk"
          color="accent"
        >
          <p class="body-text">
            Still in the first chapters of my career, I’ve made it a priority to step beyond the comfort of my
            desk by speaking at events and workshops, attending conferences, and seeking out rooms that challenge
            me to grow. These experiences have not only strengthened my confidence and communication skills but
            also deepened my understanding of how design impacts real people, teams, and communities.
          </p>
        </ContentSection>
      </div>

      <section class="about-detail__section">
        <div class="about-detail__cta">
          <h2>Let's Connect</h2>
          <p class="body-text">
            I'm always excited to collaborate on interesting projects and connect with 
            fellow designers and developers. Whether you want to discuss a potential 
            project, share ideas, or just say hello, I'd love to hear from you!
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
      hobbiesItem: [
        '☕  A good hot cup of coffee',
        '🎵  Blasting my EDM playlist',
        '🧘  A quiet environment',
        '💋  Reapplying my gloss',
        '🍫  A few pieces of chocolate',
        '💧  Ion drink'
      ],
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
        'Javascript',
        'Vue.js',
        'Python',
        'Git & Version Control',
        'Performance Optimization',
      ],
      collabItem: [
        'Agile/Scrum',
        'Cross-functional Communication',
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
    this.animateSkillMeters()
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
    // padding: $spacing-3xl 0;

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
    padding: $spacing-4xl;
    background-color: $white;
    border-radius: $border-radius-lg;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    @media (max-width: $breakpoint-md) {
      padding: 24px;
    }
    
    h2 {
      @include heading-style($font-size-2xl, $font-weight-normal);
      color: $text-primary;
      margin-bottom: $spacing-lg;
    }
    
    p {
      @include body-text($font-size-base, $font-weight-normal);
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