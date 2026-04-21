<template>
  <section id="blog" class="blog">
    <div class="blog__container">
      <div class="blog__header">
        <p class="blog__eyebrow">Notes and thoughts</p>
        <h2 class="blog__title">A blog section for ideas in progress</h2>
        <p class="blog__subtitle">
          Writing about UX engineering, thoughtful interfaces, and the design decisions
          behind calm digital experiences.
        </p>
      </div>

      <div class="blog__grid">
        <article
          v-for="post in posts"
          :key="post.id"
          class="blog__card"
          tabindex="0"
          role="button"
          @click="openPost(post)"
          @keydown.enter="openPost(post)"
          @keydown.space.prevent="openPost(post)"
        >
          <div class="blog__meta">
            <span class="blog__category">{{ post.category }}</span>
            <span class="blog__read-time">{{ post.readTime }}</span>
          </div>

          <h3 class="blog__card-title">{{ post.title }}</h3>
          <p class="blog__excerpt">{{ post.excerpt }}</p>

          <div class="blog__footer">
            <p class="blog__date">{{ post.date }}</p>
            <div class="blog__tags">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="blog__tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <span class="blog__cta">Read article &rarr;</span>
        </article>
      </div>

      <div class="blog__note">
        <p>
          More articles are on the way. For now, this section highlights the themes I want
          my writing to explore as my portfolio continues to grow.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import posts from '../../data/blogPosts.js'

export default {
  name: 'Blog',
  data() {
    return {
      posts
    }
  },
  methods: {
    openPost(post) {
      window.location.hash = `#/blog/${post.slug || post.id}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';

.blog {
  @include section-padding;
  background: linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%);

  &__container {
    @include container;
  }

  &__header {
    text-align: center;
    max-width: 720px;
    margin: 0 auto;
    padding-bottom: $spacing-3xl;
  }

  &__eyebrow {
    @include subheading-style($font-size-sm, $font-weight-semibold);
    color: $primary-color;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: $spacing-sm;
  }

  &__title {
    @include heading-style($font-size-5xl, $font-weight-normal);
    margin-bottom: $spacing-md;

    @media (max-width: $breakpoint-md) {
      @include heading-style($font-size-3xl, $font-weight-normal);
    }
  }

  &__subtitle {
    @include body-text($font-size-lg, $font-weight-normal);
    color: $text-secondary;

    @media (max-width: $breakpoint-md) {
      @include body-text($font-size-base, $font-weight-normal);
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: $spacing-xl;

    @media (max-width: $breakpoint-lg) {
      grid-template-columns: 1fr;
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: $spacing-lg;
    padding: $spacing-xl;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.85);
    border: 1px solid rgba(252, 68, 135, 0.14);
    box-shadow: 0 16px 48px rgba(252, 68, 135, 0.07);
    backdrop-filter: blur(12px);
    transition: transform $transition-normal, box-shadow $transition-normal, border-color $transition-normal;
    cursor: pointer;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 28px 64px rgba(252, 68, 135, 0.14);
      border-color: rgba(252, 68, 135, 0.28);

      .blog__cta {
        color: $primary-hover;
      }
    }

    &:focus {
      outline: 3px solid $primary-color;
      outline-offset: 3px;
    }
  }

  &__cta {
    @include body-text($font-size-sm, $font-weight-semibold);
    color: $primary-color;
    transition: color $transition-normal;
    margin-top: auto;
  }

  &__meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: $spacing-md;
    flex-wrap: wrap;
  }

  &__category,
  &__read-time {
    @include body-text($font-size-sm, $font-weight-medium);
  }

  &__category {
    color: $primary-color;
  }

  &__read-time {
    color: $text-secondary;
  }

  &__card-title {
    @include subheading-style($font-size-2xl, $font-weight-semibold);
    color: $text-primary;
    line-height: 1.3;
  }

  &__excerpt {
    @include body-text($font-size-base, $font-weight-normal);
    color: $text-secondary;
    line-height: 1.7;
    flex: 1;
  }

  &__footer {
    display: flex;
    flex-direction: column;
    gap: $spacing-sm;
    margin-top: auto;
  }

  &__date {
    @include body-text($font-size-sm, $font-weight-medium);
    color: $text-tertiary;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-xs;
  }

  &__tag {
    @include body-text($font-size-xs, $font-weight-medium);
    padding: 0.25rem 0.85rem;
    border-radius: 20px;
    background: rgba(252, 68, 135, 0.06);
    color: $primary-color;
    border: 1px solid rgba(252, 68, 135, 0.12);
  }

  &__note {
    margin-top: $spacing-3xl;
    text-align: center;

    p {
      @include body-text($font-size-base, $font-weight-normal);
      color: $text-secondary;
      max-width: 720px;
      margin: 0 auto;
    }
  }
}
</style>
