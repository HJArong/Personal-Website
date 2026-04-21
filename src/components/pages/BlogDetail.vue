<template>
  <div class="blog-detail">
    <div class="blog-detail__container">
      <div class="blog-detail__navigation">
        <Button variant="ghost" size="medium" @click="goBack">
          <i class="mdi mdi-arrow-left blog-detail__back-icon"></i>
          Back to Blog
        </Button>
      </div>

      <article class="blog-detail__article">
        <div class="blog-detail__hero">
          <p class="blog-detail__category">{{ post.category }}</p>
          <h1 class="blog-detail__title">{{ post.title }}</h1>
          <p class="blog-detail__intro">{{ post.intro }}</p>

          <div class="blog-detail__meta">
            <span>{{ post.date }}</span>
            <span>{{ post.readTime }}</span>
          </div>

          <div class="blog-detail__tags">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="blog-detail__tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="blog-detail__content">
          <section
            v-for="section in post.sections"
            :key="section.title"
            class="blog-detail__section"
          >
            <h2>{{ section.title }}</h2>
            <div v-html="section.body"></div>
          </section>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import Button from '../_generics/Button.vue'
import posts from '../../data/blogPosts.js'

export default {
  name: 'BlogDetail',
  components: {
    Button
  },
  computed: {
    post() {
      const routeParam = this.$route.params.slug

      return (
        posts.find((post) => post.slug === routeParam || String(post.id) === routeParam) ||
        posts[0]
      )
    }
  },
  methods: {
    goBack() {
      window.location.hash = '#/'
      setTimeout(() => {
        const blogElement = document.getElementById('blog')
        if (blogElement) {
          blogElement.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';

.blog-detail {
  min-height: 100vh;
  padding: $spacing-2xl 0;
  background:
    radial-gradient(circle at top left, rgba(252, 68, 135, 0.12), transparent 30%),
    linear-gradient(180deg, #fff8fb 0%, #ffffff 100%);

  &__container {
    @include container;
    max-width: 880px;
  }

  &__navigation {
    margin-bottom: $spacing-2xl;
  }

  &__back-icon {
    font-size: 20px;
    margin-right: $spacing-xs;
  }

  &__article {
    display: flex;
    flex-direction: column;
    gap: $spacing-2xl;
  }

  &__hero,
  &__section {
    padding: $spacing-xl;
    border-radius: 28px;
    background: rgba(255, 255, 255, 0.84);
    border: 1px solid rgba(252, 68, 135, 0.12);
    box-shadow: 0 20px 50px rgba(252, 68, 135, 0.08);
  }

  &__category {
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

  &__intro {
    @include body-text($font-size-lg, $font-weight-normal);
    color: $text-secondary;
    line-height: 1.8;
    margin-bottom: $spacing-lg;
  }

  &__meta {
    display: flex;
    gap: $spacing-lg;
    flex-wrap: wrap;
    margin-bottom: $spacing-lg;

    span {
      @include body-text($font-size-sm, $font-weight-medium);
      color: $text-tertiary;
    }
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-xs;
  }

  &__tag {
    @include body-text($font-size-xs, $font-weight-medium);
    padding: 0.45rem 0.8rem;
    border-radius: $border-radius-full;
    background: rgba(252, 68, 135, 0.08);
    color: $primary-color;
    border: 1px solid rgba(252, 68, 135, 0.14);
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $spacing-xl;
  }

  &__section {
    h2 {
      @include heading-style($font-size-2xl, $font-weight-medium);
      color: $primary-color;
      margin-bottom: $spacing-lg;
    }

    :deep(p) {
      @include body-text($font-size-base, $font-weight-normal);
      color: $text-primary;
      line-height: 1.8;
      margin-bottom: $spacing-lg;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
