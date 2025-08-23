<template>
    <div class="fab">
        <div class="fab-container">
            <div
                v-for="(section, index) in sections"
                :key="section.id"
                class="section-button"
                @click="navigateToSection(section.id)"
            >
                <p :class="{'active' : activeSection === section.id}">
                    {{ section.name }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FAB',

        props: {
            activeSection: {
                type: String,
                default: 'about'
            }
        },

        data() {
            return {
                sections: [
                    { id: 'about', name: 'About' },
                    { id: 'works', name: 'Works' },
                    { id: 'contact', name: 'Contact' }
                ]
            };
        },

        methods: {
            navigateToSection(sectionId) {
                this.$emit('section-change', sectionId)
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles/variables.scss';
    @import '../assets/styles/mixins.scss';

    .fab {
        position: fixed;
        background: $white;
        top: 40%;
        right: 2%;
        width: max-content;
        padding: 24px 0;
        border-radius: 48px;
        box-shadow: 0 0 32px 0 rgba($primary-color, 0.3);
        z-index: 500;

        @media (max-width: $breakpoint-md) {
            top: unset;
            bottom: 16px;
            left: 50%;
            right: unset;
            transform: translateX(-50%);
            padding: 0 12px;
            border-radius: 24px;
        }

        
        &-container {
            display: flex;
            flex-direction: column;
            gap: 8px;

            @media (max-width: $breakpoint-md) {
                flex-direction: row;
            }

            .section-button {
                padding: 12px;
                text-align: center;

                &:hover {
                    color: $primary-color;
                    cursor: pointer;
                    
                    p {
                        transform: scale(1.05);
                        font-weight: 500;
                    }
                }

                p {
                    font-size: 14px;
                }

                &.active {
                    font-size: 2rem;
                    font-weight: 500;
                    color: $primary-color;
                }
            }
        }
    }
</style>