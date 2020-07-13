<template>
    <header 
        class="header"
        ref="header">
        <nav 
            class="header__container">
            <Logo
                class="header__logo"
                :white="true"/>
            <ul
                class="header__navigation">
                <li
                    v-for="item in navigation"
                    :key="item.id"
                    class="header__navigation-item"
                    :class="{'header__navigation-item--active' : activeNavigation.id == item.id}">
                    <a 
                        :href="`#${item.id}`"
                        class="header__navigation-link">{{ item.title }}</a>
                </li>
            </ul>
            <a href="#" class="header__sign-in button button--sign-in">Sign in</a>
        </nav>
    </header>
</template>

<script>
import Logo from './../blocks/Logo.vue'
export default {
    name: 'MainNavigation',
    props: {
        navigation: Array
    },
    data(){
        return {
            restNavNodes: []
        }
    },
    mounted() {
        setTimeout(()=>{
            this.checkScrollPosition();
            document.addEventListener('scroll', this.checkScrollPosition);
        },1)
    },
    computed: {
        activeNavigation() {
            return this.restNavNodes[0] ? this.restNavNodes[0] : false;
        }
    },
    methods: {
        checkScrollPosition() {
            this.restNavNodes = this.navigation.filter((item)=>{
                return (document.getElementById(item.id).offsetTop + 
                        document.getElementById(item.id).offsetHeight) >= window.pageYOffset + this.$refs.header.offsetHeight;
            })
        }
    },
    components: {
        Logo
    }
}
</script>

<style lang="sass" scope>
@import ./../assets/sass/config



.header
    background-color: $dark-background
    padding:
        left: $base-grid
        right: $base-grid
    .header__container
        max-width: 100%
        width: $container-width
        margin: auto
        display: flex
        flex-wrap: wrap
        align-items: center
        @media (max-width:$tablet-size)
            padding:
                top: $base-grid
        @media (min-width:$tablet-size)
            height: $base-grid * 6
    .header__logo
        margin:
            right: auto
    .header__navigation
        display: flex
        list-style: none
        margin: 0
            left: auto
        padding: 0
            top: $base-grid
        @media (max-width:$tablet-size)
            order: 10
            width: 100vw
            margin:
                top: $base-grid
                left: -$base-grid
                right: -$base-grid
            padding:
                left: $base-grid
                right: $base-grid
            overflow-x: auto
            background-color: $gray
    .header__navigation-item
        transition: all .2s
        padding:
            bottom: $base-grid
        @media (max-width:$tablet-size)
            border-bottom: 2px solid transparent
        & + .header__navigation-item
            margin-left: $base-grid * 2
        // States
        &:hover
            &:not(.header__navigation-item--active)
                text-decoration: underline
        &--active
            @media (max-width:$tablet-size)
                border-bottom: 2px solid $primary
                padding:
                    bottom: $base-grid
                    left: $base-grid
                    right: $base-grid
            @media (min-width:$tablet-size)
                display: flex
                align-items: center
                padding-left: $base-grid * 1.5
                &:before
                    content: ''
                    display: inline-flex
                    height: $base-grid / 2
                    width: $base-grid / 2
                    border-radius: $base-grid / 2
                    background-color: white
                    margin:
                        right: $base-grid
                        left: -($base-grid * 1.5)
    .header__navigation-link
        color: white
        text-decoration: none
        font-size: .9rem
        @media (max-width:$tablet-size)
            color: black
    .header__sign-in
        margin:
            left: $base-grid * 2
</style>