<template>
  <section id="hero" class="hero">
    <div class="hero-container">
      <h1 class="hero-container__name">
        Hazel Arong
      </h1>
      <p class="hero-container__roles">
        UX Engineer
        <span>✨</span>
         Designer
        <span>✨</span>
         Developer
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';

// Import Work Sans font
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

.hero {
  display: flex;
  align-item: center;
  padding: 24px;

  &-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    &__name {
      @include heading-style(3.5rem, $font-weight-normal);
      color: $primary-color;
      line-height: 1;

      @media (max-width: $breakpoint-sm) {
        font-size: 36px;
      }
    }

    &__roles {
      font-family: 'Work Sans', sans-serif;
      font-size: $font-size-lg;
      font-weight: $font-weight-normal;
      color: $text-secondary;
      margin: 0;
      letter-spacing: 0.5px;

      @media (max-width: $breakpoint-sm) {
        font-size: 12px;
      }
    }
  }
}
</style> 