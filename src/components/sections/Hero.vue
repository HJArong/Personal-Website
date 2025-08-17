<template>
  <section id="hero" class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <!-- Top text blocks -->
        <div class="hero__top-text">
          <p class="hero__role">UX Engineer</p>
          <p class="hero__tagline">{ Design x Code }</p>
        </div>
        
        <!-- Central name and portrait -->
        <div class="hero__main">
          <div class="hero__name-container">
            <h1 class="hero__name">
              <span class="hero__name-first">Hazel</span>
            </h1>
            <div class="hero__portrait-container">
              <img 
                src="../assets/hazel-portrait.png" 
                alt="Hazel Arong Portrait" 
                class="hero__portrait"
              />
              <div class="hero__portrait-decoration">
                <div class="hero__orbital-lines"></div>
                <div class="hero__sparkles">
                  <span class="hero__sparkle">✨</span>
                  <span class="hero__sparkle">⭐</span>
                  <span class="hero__sparkle">✨</span>
                </div>
              </div>
            </div>
             <h1 class="hero__name">
              <span class="hero__name-last">Arong</span>
            </h1>
          </div>
        </div>
        
        <!-- Bottom text -->
        <div class="hero__bottom-text">
          <p class="hero__description">
            Design, development, and a pop of <span class="hero__highlight">pink</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  mounted() {
    this.animateElements()
  },
  methods: {
    animateElements() {
      // Add staggered animations for the text elements
      const elements = document.querySelectorAll('.hero__role, .hero__tagline, .hero__name, .hero__description')
      elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';

// Import Work Sans font
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  //padding-top: 20px; // Account for fixed header
  position: relative;
  overflow: hidden;
  
  &__container {
    @include container;
    text-align: center;
  }
  
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10rem;
    max-width: 1200px;
    margin: 0 auto;
    
    @media (max-width: $breakpoint-lg) {
      gap: 8rem;
    }
    
    @media (max-width: $breakpoint-md) {
      gap: 6rem;
    }
    
    @media (max-width: $breakpoint-sm) {
      gap: 12rem;
    }
  }
  
  // Top text section
  &__top-text {
    display: flex;
    flex-direction: column;
    gap: $spacing-sm;
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
  }
  
  &__role {
    font-family: 'Work Sans', sans-serif;
    font-size: $font-size-lg;
    font-weight: $font-weight-medium;
    color: $text-secondary;
    margin: 0;
    letter-spacing: 0.5px;
    
    @media (max-width: $breakpoint-md) {
      font-size: $font-size-base;
    }
    
    @media (max-width: $breakpoint-sm) {
      font-size: $font-size-sm;
    }
  }
  
  &__tagline {
    font-family: 'Work Sans', sans-serif;
    font-size: $font-size-xl;
    font-weight: $font-weight-normal;
    color: $text-primary;
    margin: 0;
    letter-spacing: 1px;
    
    @media (max-width: $breakpoint-md) {
      font-size: $font-size-lg;
    }
    
    @media (max-width: $breakpoint-sm) {
      font-size: $font-size-base;
    }
  }
  
  // Main section with name and portrait
  &__main {
    position: relative;
    width: 100%;
    animation: fadeInUp 0.8s ease-out 0.2s forwards;
    opacity: 0;
  }
  
  &__name-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12rem;
    
    @media (max-width: $breakpoint-lg) {
      gap: 10rem;
    }
    
    @media (max-width: $breakpoint-md) {
      gap: 4rem;
      flex-direction: column;
      gap: 2rem;
    }
    
    @media (max-width: $breakpoint-sm) {
      gap: 1rem;
    }
  }
  
  &__name {
    @include heading-style(10rem, $font-weight-normal);
    color: $primary-color;
    margin: 0;
    display: flex;
    gap: 15rem;
    line-height: 1;
    z-index: 1;
    
    @media (max-width: $breakpoint-xl) {
      font-size: 8rem;
      gap: 10rem;
    }
    
    @media (max-width: $breakpoint-lg) {
      font-size: 6rem;
      gap: 6rem;
    }
    
    @media (max-width: $breakpoint-md) {
      font-size: 4rem;
      gap: 2rem;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    @media (max-width: $breakpoint-sm) {
      font-size: 3rem;
      gap: 0.25rem;
    }
  }
  
  &__name-first,
  &__name-last {
    position: relative;
    z-index: 2;
  }
  
  // Portrait section
  &__portrait-container {
    position: absolute;
    top: 50%;
    left: 50%;
    // transform: translate(-50%, -50%);
    z-index: 3;

    @media (max-width: $breakpoint-md) {
      position: static;
      top: 0;
      transform: none;
      order: -1;
      width: 100%;
    }
  }
  
  &__portrait {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
    filter: contrast(1.1) saturate(1.2);
    box-shadow: 0 20px 40px rgba(252, 68, 135, 0.2);
    animation: float 6s ease-in-out infinite;
    
    @media (max-width: $breakpoint-xl) {
      width: 280px;
      height: 280px;
    }
    
    @media (max-width: $breakpoint-lg) {
      width: 250px;
      height: 250px;
    }
    
    @media (max-width: $breakpoint-md) {
      margin: auto;
      animation: none;
      display: flex;
      width: 200px;
      height: 200px;
    }
    
    @media (max-width: $breakpoint-sm) {
      width: 160px;
      height: 160px;
      
    }
  }
  
  &__portrait-decoration {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-43%, -44%);
    width: 350px;
    height: 350px;
    pointer-events: none;
    
    @media (max-width: $breakpoint-xl) {
      width: 330px;
      height: 330px;
    }
    
    @media (max-width: $breakpoint-lg) {
      width: 300px;
      height: 300px;
    }
    
    @media (max-width: $breakpoint-md) {
      width: 250px;
      height: 250px;
      transform: unset;
      left: 50%;
      top: 17%;
    }
    
    @media (max-width: $breakpoint-sm) {
      width: 200px;
      height: 200px;
    }
  }
  
  &__orbital-lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(252, 68, 135, 0.1);
    border-radius: 50%;
    animation: rotate 20s linear infinite;
    
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80%;
      height: 80%;
      border: 1px solid rgba(252, 68, 135, 0.05);
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
    
    &::after {
      width: 60%;
      height: 60%;
      border-color: rgba(252, 68, 135, 0.03);
    }
  }
  
  &__sparkles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: rotate 15s linear infinite reverse;
  }
  
  &__sparkle {
    position: absolute;
    font-size: 16px;
    color: rgba(252, 68, 135, 0.6);
    animation: twinkle 2s ease-in-out infinite;
    
    &:nth-child(1) {
      top: 10%;
      left: 20%;
      animation-delay: 0s;
    }
    
    &:nth-child(2) {
      top: 20%;
      right: 15%;
      animation-delay: 0.5s;
    }
    
    &:nth-child(3) {
      bottom: 15%;
      left: 30%;
      animation-delay: 1s;
    }
  }
  
  // Bottom text section
  &__bottom-text {
    animation: fadeInUp 0.8s ease-out 0.4s forwards;
    opacity: 0;
  }
  
  &__description {
    font-family: 'Work Sans', sans-serif;
    font-size: $font-size-lg;
    font-weight: $font-weight-normal;
    color: $text-secondary;
    margin: 0;
    letter-spacing: 0.5px;
    
    @media (max-width: $breakpoint-md) {
      font-size: $font-size-base;
    }
    
    @media (max-width: $breakpoint-sm) {
      font-size: $font-size-sm;
    }
  }
  
  &__highlight {
    color: $primary-color;
    font-weight: $font-weight-semibold;
  }
}

// Animations
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translate(-50%, -50%) translateY(0px);
  }
  50% {
    transform: translate(-50%, -50%) translateY(-10px);
  }
}

@keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

// Additional responsive adjustments
@media (max-width: $breakpoint-sm) {
  .hero {
    padding-top: 100px;
    min-height: 90vh;
    
    &__content {
      gap: 3rem;
    }
    
    &__top-text {
      gap: $spacing-xs;
    }
    
    &__bottom-text {
      margin-top: $spacing-lg;
    }
  }
}

@media (max-width: $breakpoint-md) {
  .hero {
    padding-top: unset;
    
    &__content {
      gap: 2rem;
    }
    
    &__name {
      font-size: 7.5rem;
    }
    
    &__portrait {
      width: 140px;
      height: 140px;
    }
    
    &__portrait-decoration {
      width: 180px;
      height: 180px;
    }
    
    &__sparkle {
      font-size: 12px;
    }
  }
}
</style> 