<template>
  <section id="hero" class="hero">
    <div class="hero__glow hero__glow--left"></div>
    <div class="hero__glow hero__glow--right"></div>

    <div class="hero-container">
      <p class="hero-container__eyebrow">UX Engineer • Designer • Frontend Developer</p>
      <h1 class="hero-container__name">
        Designing thoughtful products with a soft pink edge.
      </h1>
      <p class="hero-container__intro">
        I’m Hazel Arong, a UX Engineer creating digital experiences that feel elegant,
        intuitive, and genuinely human from first impression to final interaction.
      </p>

      <div class="hero-container__highlights">
        <div class="hero-container__highlight">
          <span class="hero-container__highlight-number">4+</span>
          <span class="hero-container__highlight-label">years shaping digital products</span>
        </div>
        <div class="hero-container__highlight">
          <span class="hero-container__highlight-number">Design + Code</span>
          <span class="hero-container__highlight-label">bridging UX thinking and implementation</span>
        </div>
        <div class="hero-container__highlight">
          <span class="hero-container__highlight-number">Barbie-coded</span>
          <span class="hero-container__highlight-label">pink, polished, and building digital worlds</span>
        </div>
      </div>
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

.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 140px 24px 100px;
  overflow: hidden;
  background:
    radial-gradient(circle at top, rgba(252, 68, 135, 0.16), transparent 40%),
    linear-gradient(180deg, #fff8fb 0%, #fff 52%, #fff5f8 100%);

  &__glow {
    position: absolute;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    filter: blur(32px);
    opacity: 0.7;
    pointer-events: none;

    &--left {
      top: 110px;
      left: -120px;
      background: rgba(252, 68, 135, 0.18);
    }

    &--right {
      right: -110px;
      bottom: 40px;
      background: rgba(255, 179, 209, 0.45);
    }
  }

  &-container {
    position: relative;
    width: 100%;
    max-width: 920px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: $spacing-lg;
    text-align: center;

    &__eyebrow {
      @include body-text($font-size-sm, $font-weight-semibold);
      color: $primary-color;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    &__name {
      @include heading-style($font-size-6xl, $font-weight-normal);
      color: $text-primary;
      line-height: 1.1;
      max-width: 820px;
      letter-spacing: -0.02em;

      @media (max-width: $breakpoint-md) {
        font-size: $font-size-4xl;
      }

      @media (max-width: $breakpoint-sm) {
        font-size: $font-size-3xl;
      }
    }

    &__intro {
      @include body-text($font-size-xl, $font-weight-normal);
      color: $text-secondary;
      max-width: 680px;
      line-height: 1.75;

      @media (max-width: $breakpoint-sm) {
        @include body-text($font-size-base, $font-weight-normal);
        line-height: 1.7;
      }
    }

    &__highlights {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: $spacing-md;
      margin-top: $spacing-xl;

      @media (max-width: $breakpoint-md) {
        grid-template-columns: 1fr;
        gap: $spacing-sm;
      }
    }

    &__highlight {
      display: flex;
      flex-direction: column;
      gap: $spacing-xs;
      padding: $spacing-lg $spacing-xl;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.75);
      border: 1px solid rgba(252, 68, 135, 0.12);
      box-shadow: 0 14px 36px rgba(252, 68, 135, 0.06);
      backdrop-filter: blur(12px);
    }

    &__highlight-number {
      @include body-text($font-size-lg, $font-weight-semibold);
      color: $primary-color;
    }

    &__highlight-label {
      @include body-text($font-size-sm, $font-weight-normal);
      color: $text-secondary;
      line-height: 1.55;
    }

    @media (max-width: $breakpoint-sm) {
      gap: $spacing-md;

      &__highlight {
        padding: $spacing-md $spacing-lg;
      }
    }
  }
}
</style> 