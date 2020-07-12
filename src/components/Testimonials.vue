<template>
    <div class="testimonials">
        <div class="testimonials__title-supscription">
            <i class="fas fa-id-card"></i>
            <span class="testimonials__title-supscription-value">Testimonials</span>
        </div>
        <h2 class="testimonials__title">Only real cases</h2>
        <div class="testimonials__list">
            <div 
                class="testimonials__card testimonials-card testimonials-card--white"
                v-for="i in [0, 1, 2, 3, 4]"
                :key="i">
                <div class="testimonials-card__speach">
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>
                    <p 
                    class="paragraph"
                    v-if="i == 1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>
                </div>
                <div class="testimonials-card__author">
                    <img 
                        src="./../assets/images/iamface.jpg" 
                        alt="Users face" 
                        class="testimonials-card__userpic">
                    <span class="testimonials-card__username">Bobby Schnider</span>
                    <span class="testimonials-card__user-role">CEO, God</span>
                </div>
            </div>
        </div>
        <div class="testimonials__load-more">
            <button class="button button--white">Load more</button>
        </div>
    </div>
</template>

<script>
import {section} from './../mixins/section.js'


export default {
    name: 'Testimonials',
    mixins: [section]
}
</script>

<style lang="sass" scoped>
@import ./../assets/sass/config



.testimonials
    padding:
        top: $base-grid * 10
        bottom: $base-grid * 10
        left: $base-grid * 2
        right: $base-grid * 2
    background-color: $dark-background
    // Elems
    .testimonials__title-supscription
        text-align: center
        color: white
    .testimonials__title-supscription-value
        margin-left: $base-grid
    .testimonials__title
        color: white
        margin:
            top: 0
        text-align: center
        font-size: $base-grid * 4
    .testimonials__list
        width: $container-width * 1.2
        max-width: 100%
        margin: auto
        @media (min-width:$desktop-size)
            display: grid
            grid:
                template:
                    columns: repeat(3, 1fr)
                auto-flow: dense
                gap: $base-grid * 3
    .testimonials__card
        align-self: center
        &:nth-child(2)
            grid:
                row: 1 / span 2
                column: 2
    .testimonials__load-more
        text-align: center
        margin:
            top: $base-grid * 2

.testimonials-card
    // Elems
    .testimonials-card__speach
        display: flex
        flex-direction: column
        background-color: white
        padding: 
            left: $base-grid * 3
            right: $base-grid * 3
            bottom: $base-grid * 3
        border-radius: $base-grid
        margin:
            bottom: $base-grid * 2
        position: relative
        &:before
            content: ''
            display: block
            position: absolute
            bottom: -$base-grid * 2
            left: $base-grid * 3
            z-index: 5
            border: $base-grid solid transparent
                top: $base-grid solid white
        // Bad mix
        .paragraph
            margin-bottom: 0
    .testimonials-card__author
        display: grid
        grid:
            template:
                columns: $base-grid * 8 auto
                rows: repeat(2, 1fr)
            column:
                gap: $base-grid
    .testimonials-card__userpic
        grid:
            row: 1 / span 2
        height: $base-grid * 8
        width: $base-grid * 8
        border-radius: 50%
    .testimonials-card__username
        font-weight: bold
        align-self: end
    .testimonials-card__user-role
        font-size: .8em
    // States
    &--white
        .testimonials-card__author
            color: white
</style>