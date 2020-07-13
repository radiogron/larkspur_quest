<template>
    <div class="heroscreen">
        <h1 class="heroscreen__product-title">Larkspur Executive PRO & Platinum</h1>
        <span class="heroscreen__cta-title">Stay Calm & Sell Retirement Plans From Home</span>
        <div class="heroscreen__request-demo">
            <Request-Demo-Form/>
        </div>
        <div class="heroscreen__video">
            <Video-Trailer/>
        </div>
    </div>
</template>

<script>
import VideoTrailer from './VideoTrailer.vue'
import RequestDemoForm from './RequestDemoForm.vue'
import {section} from './../mixins/section.js'

export default {
    name: 'Heroscreen',
    mixins: [section],
    components: {
        VideoTrailer,
        RequestDemoForm
    }
}
</script>

<style lang="sass" scoped>
@import ./../assets/sass/config



.heroscreen
    position: relative
    display: flex
    flex-direction: column
    align-items: center
    padding:
        top: $base-grid * 5
        left: $base-grid * 2
        right: $base-grid * 2
    @media (min-width:$tablet-size)
        padding:
            top: $base-grid * 20
    // Elements
    .heroscreen__product-title
        z-index: 2
        font:
            size: $base-grid * 2
            weight: normal
        margin: 0
        text-align: center
    .heroscreen__cta-title
        z-index: 3
        display: block
        font:
            size: $base-grid * 6
            weight: bold
        max-width: 30ch
        margin: 0
            top: $base-grid * 2
            bottom: $base-grid * 6
        text-align: center
        line-height: .95
    .heroscreen__request-demo
        z-index: 4
        margin:
            bottom: $base-grid * 6
    .heroscreen__video
        width: $base-grid * 90
        max-width: 100%
        box-shadow: 0 10px 15px -5px rgba(black, .3)
        border-radius: $base-grid
        overflow: hidden
        // States
    &:before
        content: ''
        display: block
        position: absolute
        left: 0
        top: 0
        z-index: 0
        width: 100%
        height: 80%
        background:
            color: $gray--light
</style>
