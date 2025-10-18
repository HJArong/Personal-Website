<template>
    <div :class="['content-section', color]">
        <div class="content-section__title">
            <h2>
                {{ sectionTitle }}
            </h2>
        </div>
        <div class="content-section__details">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ContentSection',

        props: {
            sectionTitle: {
                type: String,
            },

            color: {
                type: String,
                default: 'white'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/variables.scss';
    @import '../../assets/styles/mixins.scss';

    .content-section {
        @include flex-column;
        gap: 12px;
        padding: 24px;
        width: 100%;
        border-radius: 24px;
        min-height: 200px;
        box-shadow: 0 0 16px 0 rgba($gray-medium, 0.9);
        margin-bottom: 24px;

        &.accent {
            background: $primary-background;
            border: 3px solid $white;
        }

        &.white {
            background: $white;
            border: 3px solid $text-disabled;
        }

        &__title {
            h2 {
                @include subheading-style($font-size-xl, $font-weight-medium);
                color: $primary-color;
                margin-bottom: 12px;
            }
        }

        &__details {
            @include flex-column;
            gap: 16px;
        }
    }
</style>
