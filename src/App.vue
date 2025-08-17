<script>
export default {
  name: 'App'
}
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import './assets/styles/variables.scss';
@import './assets/styles/mixins.scss';

// Import Google Fonts
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  @include body-text;
  background-color: $white;
  color: $text-primary;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

// Utility classes
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

// Focus styles for accessibility
*:focus {
  outline: 2px solid $primary-color;
  outline-offset: 2px;
}

// Smooth transitions for all interactive elements
button, a, input, textarea, select {
  transition: all $transition-normal;
}

// Custom scrollbar
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: $gray-light;
}

::-webkit-scrollbar-thumb {
  background: $primary-color;
  border-radius: $border-radius-full;
}

::-webkit-scrollbar-thumb:hover {
  background: $primary-hover;
}

// Global animations
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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

// Utility classes
.fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

.fade-in {
  animation: fadeIn 0.8s ease-out;
}

.slide-up {
  animation: slideUp 0.8s ease-out;
}

.float {
  animation: float 3s ease-in-out infinite;
}

.rotate {
  animation: rotate 20s linear infinite;
}

.twinkle {
  animation: twinkle 2s ease-in-out infinite;
}
</style>
