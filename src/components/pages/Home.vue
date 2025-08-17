<template>
  <div id="home">
    <Header
      :active-section="activeSection"
      @section-change="handleSectionChange"
    />
    <main class="main">
      <Hero />
      <About @scroll-to-section="scrollToSection" />
      <Works @scroll-to-section="scrollToSection" />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../Header.vue'
import Hero from '../sections/Hero.vue'
import About from '../sections/About.vue'
import Works from '../sections/Works.vue'
import Contact from '../sections/Contact.vue'
import Footer from '../Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    About,
    Works,
    Contact,
    Footer
  },
  data() {
    return {
      activeSection: 'hero'
    }
  },
  mounted() {
    this.setupScrollSpy()
  },
  methods: {
    handleSectionChange(sectionId) {
      this.activeSection = sectionId
      this.scrollToSection(sectionId)
    },
    
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerHeight = 80
        const elementPosition = element.offsetTop - headerHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
        
        this.activeSection = sectionId
      }
    },
    
    setupScrollSpy() {
      const sections = ['hero', 'about', 'works', 'contact']
      const headerHeight = 80
      
      const handleScroll = () => {
        const scrollPosition = window.scrollY + headerHeight + 100
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i])
          if (section && scrollPosition >= section.offsetTop) {
            this.activeSection = sections[i]
            break
          }
        }
      }
      
      window.addEventListener('scroll', handleScroll)
      this.$once('hook:beforeDestroy', () => {
        window.removeEventListener('scroll', handleScroll)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding-top: 40px; // Account for fixed header
}
</style> 