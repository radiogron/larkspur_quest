<template>
    <a 
        href="#" 
        class="logo"
        :class="computedClass">
        <img 
            src="https://rixtrema.net/larkspurexecutive/img/logo20.png" 
            alt="" 
            class="logo__image">
        <span
            class="logo__title">Larkspur Executive</span>
    </a>
</template>

<script>
export default {
    name: 'Logo',
    props: {
        white: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        computedClass() {
            return {
                'logo--white': this.white
            }
        }
    }
}
</script>

<style lang="sass" scoped>
@import ./../assets/sass/config



.logo
    text-decoration: none
    color: $gray--dark
    display: flex
    align-items: center
    // Elements
    .logo__image
    .logo__title
        margin:
            left: $base-grid
        line-height: 1
        font:
            weight: bold
            size: .9em
    // States
    &--white
        color: white
</style>