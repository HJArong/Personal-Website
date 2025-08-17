<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img src="./assets/hazel-logo-pink.svg" alt="Hazel Arong Logo" class="header__logo-img" />
      </div>
      
      <!-- Mobile menu button -->
      <button 
        class="header__menu-toggle"
        @click="toggleMobileMenu"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <span class="header__menu-icon" :class="{ 'header__menu-icon--open': isMobileMenuOpen }"></span>
      </button>
      
      <nav class="header__nav" :class="{ 'header__nav--open': isMobileMenuOpen }" role="navigation">
        <div class="header__tabs" role="tablist">
          <Tab
            v-for="(section, index) in sections"
            :key="section.id"
            :active="activeSection === section.id"
            @click="navigateToSection(section.id)"
          >
            {{ section.name }}
          </Tab>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import Tab from './_generics/Tab.vue'

export default {
  name: 'Header',
  components: {
    Tab
  },
  props: {
    activeSection: {
      type: String,
      default: 'about'
    }
  },
  data() {
    return {
      isMobileMenuOpen: false,
      sections: [
        { id: 'hero', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'works', name: 'Works' },
        { id: 'contact', name: 'Contact' }
      ]
    }
  },
  mounted() {
    // Add click outside listener for mobile menu
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    // Remove click outside listener
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    navigateToSection(sectionId) {
      this.$emit('section-change', sectionId)
      // Close mobile menu when a section is clicked
      this.isMobileMenuOpen = false
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    handleClickOutside(event) {
      // Close mobile menu if clicking outside
      if (this.isMobileMenuOpen && !this.$el.contains(event.target)) {
        this.isMobileMenuOpen = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
@import '../assets/styles/mixins.scss';

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  transition: all $transition-normal;
  
  &__container {
    @include container;
    @include flex-between;
    padding: $spacing-md 0;
    width: 100%; // make sure container respects header width
    max-width: $container-width; // keeps content centered
    margin: 0 auto; // centers inside frosted background
  }
  
  &__logo {
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }
  
  &__logo-img {
    height: 32px;
    width: auto;
    transition: transform $transition-normal;
    
    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: $breakpoint-sm) {
      height: 24px !important;
    }
  }
  
  &__nav {
    display: flex;
    justify-content: center;
    
    @media (max-width: $breakpoint-lg) {
      justify-content: flex-end;
    }
    
    @media (max-width: $breakpoint-md) {
      position: fixed;
      top: 100%;
      left: 0;
      right: 0;
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px) saturate(180%);
      -webkit-backdrop-filter: blur(12px) saturate(180%);
      border-top: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
      transition: all $transition-normal;
      z-index: 999;
      
      &--open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
    }
  }
  
  &__tabs {
    display: flex;
    align-items: center;
    gap: $spacing-xs;
    
    @media (max-width: $breakpoint-md) {
      flex-direction: column;
      gap: $spacing-md;
      padding: $spacing-lg;
      width: 100%;
    }
  }
  
  &__menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    
    @media (max-width: $breakpoint-md) {
      display: flex;
    }
  }
  
  &__menu-icon {
    position: relative;
    width: 24px;
    height: 2px;
    background-color: $text-primary;
    transition: all $transition-normal;
    
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 24px;
      height: 2px;
      background-color: $text-primary;
      transition: all $transition-normal;
    }
    
    &::before {
      top: -8px;
    }
    
    &::after {
      bottom: -8px;
    }
    
    &--open {
      background-color: transparent;
      
      &::before {
        top: 0;
        transform: rotate(45deg);
      }
      
      &::after {
        bottom: 0;
        transform: rotate(-45deg);
      }
    }
  }
  
  // Mobile responsive
  @media (max-width: $breakpoint-sm) {
    &__container {
      padding: 0 16px;
    }
    
    &__logo-img {
      height: 32px;
    }
  }
}
</style> 