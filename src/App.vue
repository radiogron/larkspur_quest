<template>
  <div 
    id="app"
    class="page">
    <MainNavigation
        class="page__header"
        :navigation="navigation"/>
    <Heroscreen
        title="Intro"
        v-on:created="collectSections"/>
    <Features
        title="Features"
        v-on:created="collectSections"/>
    <Price-Table
        title="Prices"
        v-on:created="collectSections"/>
    <Footer/>
  </div>
</template>

<script>
import Heroscreen from './components/Heroscreen.vue'
import MainNavigation from './components/MainNavigation.vue'
import Features from './components/Features.vue'
import PriceTable from './components/PriceTable.vue'
import Footer from './components/Footer.vue'

export default {
    name: 'App',
    data() {
        return {
            navigation: []
        }
    },
    methods: {
        collectSections(data) {
            this.navigation.push(data);
        }
    },
    components: {
        Heroscreen,
        MainNavigation,
        Features,
        PriceTable,
        Footer
    },
}
</script>

<style lang="sass">
@import ./assets/sass/reboot
@import ./assets/sass/blocks/button
@import ./assets/sass/blocks/field
@import ./assets/sass/blocks/link
@import ./assets/sass/blocks/paragraph

.page
    .page__header
        position: sticky
        top: 0
        z-index: 100
</style>
