<template>
    <header class="header">
        <nav class="header__container">
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
                //console.log(document.getElementById(item.id).offsetHeight)
                return (document.getElementById(item.id).offsetTop + 
                        document.getElementById(item.id).offsetHeight) >= window.pageYOffset;
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
    .header__container
        max-width: 100%
        width: $container-width
        margin: auto
        height: $base-grid * 6
        display: flex
        align-items: center
    .header__navigation
        display: flex
        list-style: none
        margin-left: auto
    .header__navigation-item
        transition: all .2s
        & + .header__navigation-item
            margin-left: $base-grid * 2
        // States
        &:hover
            &:not(.header__navigation-item--active)
                text-decoration: underline
        &--active
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
</style>