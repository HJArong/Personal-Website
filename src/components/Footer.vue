<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <p class="footer__text">© 2025 Hazel Arong. All rights reserved.</p>
        
        <div class="footer__social">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            :aria-label="social.name"
            target="_blank"
            rel="noopener noreferrer"
            class="footer__social-link"
          >
            <i :class="`mdi mdi-${social.icon} footer__icon footer__icon--${social.name.toLowerCase()}`" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      socialLinks: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/hazel-joy-arong-94242721a/',
          icon: 'linkedin'
        },
        {
          name: 'GitHub',
          url: 'https://github.com/HJArong',
          icon: 'github'
        },
        {
          name: 'Gmail',
          url: 'mailto:aronghazeljoy@gmail.com',
          icon: 'gmail'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
@import '../assets/styles/mixins.scss';

.footer {
  background-color: $gray-light;
  border-top: 1px solid $gray-medium;
  padding: $spacing-xl 0;
  margin-top: auto;
  
  &__container {
    @include container;
  }
  
  &__content {
    @include flex-between;
    align-items: center;
    
    @media (max-width: $breakpoint-sm) {
      flex-direction: column;
      gap: $spacing-md;
      text-align: center;
    }
  }
  
  &__text {
    @include body-text($font-size-sm, $font-weight-normal);
    @include text-variant('secondary');
    margin: 0;
  }
  
  &__social {
    display: flex;
    gap: $spacing-md;
    align-items: center;
  }
  
  &__social-link {
    @include flex-center;
    width: 40px;
    height: 40px;
    border-radius: $border-radius-full;
    background-color: $white;
    color: $text-secondary;
    transition: all $transition-normal;
    border: 1px solid $gray-medium;
    
    &:hover {
      color: $primary-color;
      background-color: $primary-background;
      border-color: $primary-color;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(252, 68, 135, 0.2);
    }
    
    &:focus {
      outline: 2px solid $primary-color;
      outline-offset: 2px;
    }
  }
  
  &__icon {
    font-size: 20px;
    
    &--linkedin {
      font-size: 18px;
    }
    
    &--github {
      font-size: 18px;
    }
    
    &--gmail {
      font-size: 18px;
    }
  }
}
</style> 