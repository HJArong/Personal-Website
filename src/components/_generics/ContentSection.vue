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
        gap: 16px;
        padding: $spacing-2xl;
        width: 100%;
        border-radius: 28px;
        min-height: 180px;
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid rgba(0, 0, 0, 0.06);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.04);
        margin-bottom: $spacing-xl;

        &.accent, &.white {
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(0, 0, 0, 0.06);
        }

        &__title {
            h2 {
                @include subheading-style($font-size-xl, $font-weight-medium);
                color: $text-primary;
                margin-bottom: $spacing-sm;
            }
        }

        &__details {
            @include flex-column;
            gap: $spacing-lg;
        }
    }
</style>
