<template>
  <div class="about-detail">
    <div class="about-detail__container">
      <header class="about-detail__header">
        <button class="about-detail__back-btn" @click="goBack">
          ← Back to Portfolio
        </button>
        <h1 class="about-detail__title">About Me</h1>
      </header>

      <main class="about-detail__content">
        <section class="about-detail__section">
          <h2 class="about-detail__section-title">Introduction</h2>
          <p>
            Hi there! I'm Hazel Arong, a UX Engineer passionate about creating digital experiences 
            that are not just functional, but delightful and meaningful. I believe that great design 
            happens at the intersection of empathy, logic, and creativity.
          </p>
          <p>
            With a Computer Science background, I bring a unique perspective to UX design - 
            combining technical understanding with human-centered design principles to create 
            solutions that work beautifully both for users and developers.
          </p>
        </section>

        <section class="about-detail__section">
          <h2 class="about-detail__section-title">Background & Education</h2>
          <div class="about-detail__background">
            <div class="about-detail__education">
              <h3>Education</h3>
              <div class="about-detail__education-item">
                <h4>Bachelor of Science in Computer Science</h4>
                <p>University of the Philippines Cebu • 2018 - 2022</p>
                <p>Focused on software engineering, algorithms, and human-computer interaction</p>
              </div>
            </div>
          </div>
        </section>

                 <section class="about-detail__section">
           <h2 class="about-detail__section-title">Skills & Expertise</h2>
           <div class="about-detail__skills">
             <div class="about-detail__skill-category">
               <h3>Design</h3>
               <div class="about-detail__skill-list">
                 <div class="about-detail__skill-item">
                   <div class="about-detail__skill-info">
                     <span class="about-detail__skill-name">User Experience (UX) Design</span>
                     <span class="about-detail__skill-level">90%</span>
                   </div>
                   <div class="about-detail__skill-meter">
                     <div class="about-detail__skill-progress" style="width: 90%"></div>
                   </div>
                 </div>
                 
                 <div class="about-detail__skill-item">
                   <div class="about-detail__skill-info">
                     <span class="about-detail__skill-name">User Interface (UI) Design</span>
                     <span class="about-detail__skill-level">85%</span>
                   </div>
                   <div class="about-detail__skill-meter">
                     <div class="about-detail__skill-progress" style="width: 85%"></div>
                   </div>
                 </div>
                 
                 <div class="about-detail__skill-item">
                   <div class="about-detail__skill-info">
                     <span class="about-detail__skill-name">Wireframing & Prototyping</span>
                     <span class="about-detail__skill-level">95%</span>
                   </div>
                   <div class="about-detail__skill-meter">
                     <div class="about-detail__skill-progress" style="width: 95%"></div>
                   </div>
                 </div>
                 
                 <div class="about-detail__skill-item">
                   <div class="about-detail__skill-info">
                     <span class="about-detail__skill-name">User Research & Testing</span>
                     <span class="about-detail__skill-level">80%</span>
                   </div>
                   <div class="about-detail__skill-meter">
                     <div class="about-detail__skill-progress" style="width: 80%"></div>
                   </div>
                 </div>
                 
                 <div class="about-detail__skill-item">
                   <div class="about-detail__skill-info">
                     <span class="about-detail__skill-name">Design Systems</span>
                     <span class="about-detail__skill-level">88%</span>
                   </div>
                   <div class="about-detail__skill-meter">
                     <div class="about-detail__skill-progress" style="width: 88%"></div>
                   </div>
                 </div>
                 
                 <div class="about-detail__skill-item">
                   <div class="about-detail__skill-info">
                     <span class="about-detail__skill-name">Figma</span>
                     <span class="about-detail__skill-level">92%</span>
                   </div>
                   <div class="about-detail__skill-meter">
                     <div class="about-detail__skill-progress" style="width: 92%"></div>
                   </div>
                 </div>
               </div>
             </div>
             
             <div class="about-detail__skill-category">
               <h3>Development</h3>
               <div class="about-detail__skill-list">
                 <div class="about-detail__skill-item">
                   <div class="about-detail__skill-info">
                     <span class="about-detail__skill-name">Frontend Development (HTML, CSS, JavaScript)</span>
                     <span class="about-detail__skill-level">85%</span>
                   </div>
                   <div class="about-detail__skill-meter">
                     <div class="about-detail__skill-progress" style="width: 85%"></div>
                   </div>
                 </div>
                 
                 <div class="about-detail__skill-item">
                   <div class="about-detail__skill-info">
                     <span class="about-detail__skill-name">Vue.js, React</span>
                     <span class="about-detail__skill-level">85%</span>
                   </div>
                   <div class="about-detail__skill-meter">
                     <div class="about-detail__skill-progress" style="width: 85%"></div>
                   </div>
                 </div>
                 
                 <div class="about-detail__skill-item">
                   <div class="about-detail__skill-info">
                     <span class="about-detail__skill-name">Responsive Web Design</span>
                     <span class="about-detail__skill-level">90%</span>
                   </div>
                   <div class="about-detail__skill-meter">
                     <div class="about-detail__skill-progress" style="width: 90%"></div>
                   </div>
                 </div>
                 
                 <div class="about-detail__skill-item">
                   <div class="about-detail__skill-info">
                     <span class="about-detail__skill-name">Git & Version Control</span>
                     <span class="about-detail__skill-level">80%</span>
                   </div>
                   <div class="about-detail__skill-meter">
                     <div class="about-detail__skill-progress" style="width: 80%"></div>
                   </div>
                 </div>
                 
                 <div class="about-detail__skill-item">
                   <div class="about-detail__skill-info">
                     <span class="about-detail__skill-name">Performance Optimization</span>
                     <span class="about-detail__skill-level">75%</span>
                   </div>
                   <div class="about-detail__skill-meter">
                     <div class="about-detail__skill-progress" style="width: 75%"></div>
                   </div>
                 </div>
                 
                 <div class="about-detail__skill-item">
                   <div class="about-detail__skill-info">
                     <span class="about-detail__skill-name">Accessibility (WCAG)</span>
                     <span class="about-detail__skill-level">70%</span>
                   </div>
                   <div class="about-detail__skill-meter">
                     <div class="about-detail__skill-progress" style="width: 70%"></div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>

        <section class="about-detail__section">
          <h2 class="about-detail__section-title">My Design Philosophy</h2>
          <div class="about-detail__philosophy">
            <div class="about-detail__philosophy-item">
              <h3>Empathy First</h3>
              <p>
                I believe understanding users is the foundation of great design. Every decision 
                should be rooted in real user needs and behaviors, not assumptions.
              </p>
            </div>
            
            <div class="about-detail__philosophy-item">
              <h3>Logic in Code</h3>
              <p>
                Clean, maintainable code is as important as beautiful design. I strive to create 
                solutions that are both elegant and efficient.
              </p>
            </div>
            
            <div class="about-detail__philosophy-item">
              <h3>Beauty in Details</h3>
              <p>
                The magic happens in the details. From micro-interactions to typography choices, 
                every element contributes to the overall user experience.
              </p>
            </div>
          </div>
        </section>

        <section class="about-detail__section">
          <h2 class="about-detail__section-title">Beyond the Screen</h2>
          <p>
            When I'm not designing or coding, you'll find me exploring new coffee shops, 
            curating the perfect Spotify playlist, or experimenting with color palettes 
            for my next creative project.
          </p>
          <div class="about-detail__interests">
            <h3>Things I Love</h3>
            <ul>
              <li>☕ Hot coffee and good conversations</li>
              <li>🎨 Color theory and design inspiration</li>
              <li>🎵 Music that tells a story</li>
              <li>📚 Books that make me think differently</li>
              <li>🌱 Learning new skills and technologies</li>
              <li>👥 Collaborating with creative teams</li>
            </ul>
          </div>
        </section>

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
      </main>
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
  
  &__back-btn {
    @include button-reset;
    @include body-text($font-size-base, $font-weight-medium);
    color: $text-secondary;
    margin-bottom: $spacing-xl;
    transition: color $transition-normal;
    
    &:hover {
      color: $primary-color;
    }
  }
  
  &__title {
    @include heading-style($font-size-5xl, $font-weight-normal);
    color: $text-primary;
    margin: 0;
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