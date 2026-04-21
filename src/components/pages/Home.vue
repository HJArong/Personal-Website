<template>
  <div id="home">
    <FAB
      :active-section="activeSection"
      @section-change="handleSectionChange"
    />
    <main class="main">
      <Hero />
      <About @scroll-to-section="scrollToSection" />
      <Works @scroll-to-section="scrollToSection" />
      <Blog />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import FAB from '../FAB.vue'
import Hero from '../sections/Hero.vue'
import About from '../sections/About.vue'
import Works from '../sections/Works.vue'
import Blog from '../sections/Blog.vue'
import Contact from '../sections/Contact.vue'
import Footer from '../Footer.vue'

export default {
  name: 'Home',

  components: {
    FAB,
    Hero,
    About,
    Works,
    Blog,
    Contact,
    Footer
  },

  data() {
    return {
      activeSection: 'hero',
      scrollHandler: null
    }
  },

  mounted() {
    this.setupScrollSpy()
  },

  beforeUnmount() {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler)
    }
  },

  methods: {
    handleSectionChange(sectionId) {
      this.scrollToSection(sectionId)
    },

    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        const elementPosition = element.offsetTop
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    },

    setupScrollSpy() {
      const sections = ['hero', 'about', 'works', 'blog', 'contact']
      this.scrollHandler = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 3
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i])
          if (section && scrollPosition >= section.offsetTop) {
            this.activeSection = sections[i]
            break
          }
        }
      }
      window.addEventListener('scroll', this.scrollHandler)
      this.scrollHandler()
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
    flex-direction: column;
    z-index: 1;
  }
</style>