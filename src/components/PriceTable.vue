<template>
    <div class="prices">
        <div class="prices__table">
            <div class="prices__description">
                <h2 class="prices__title">Find the Larkspur Executive plan for you</h2>
                <span>Find the Larkspur Executive plan for you</span>
            </div>
            <span class="prices__option"><i class="fas fa-globe-americas"></i> 850,000+ plans</span>
            <span class="prices__option"><i class="fas fa-users"></i> 1.2+ million plan executives with contact data at your fingertips</span>
            <span class="prices__option"><i class="fas fa-magic"></i> Automated email campaigns to 700k qualified plans</span>
            <span class="prices__option"><i class="fas fa-route"></i> Simultaneous campaigns</span>
            <span class="prices__option"><i class="fas fa-user-circle"></i> Notification when decision maker opens your emails</span>
            <span class="prices__option"><i class="fas fa-tasks"></i> Expert designed email campaign available to you on day 1 of subscription($2300 value)</span>
            <span class="prices__option"><i class="fas fa-calendar"></i> Ability to create email campaigns in bulk: many plans and many emails sent at once saving you time</span>
            <span class="prices__option"><i class="fas fa-dollar-sign"></i> 401kFiduciaryOptimizer&nbsp;&mdash; premier analytics platform for audited plans, estimates savings to the plan when they hire you ($4200 value)</span>

            <!-- Standart table -->
            <div class="prices__header prices__header--standart">
                <span class="prices__header-title">Standart</span>
                <span class="prices__header-cost">$1895</span>
                <span class="prices__header-users">/ user / 12 Months</span>
            </div>
            <div class="prices__value prices__value--standart prices__value--contains">
                <span class="prices__value-text prices__value-text--visible-mobile">850,000+ plans</span>
            </div>
            <div class="prices__value prices__value--standart prices__value--contains prices__value--last-in-table">
                <span class="prices__value-text prices__value-text--visible-mobile">1.2+ million plan executives with contact data at your fingertips</span>
            </div>

            <!-- PRO table -->
            <div class="prices__header prices__header--pro">
                <span class="prices__header-title">Pro</span>
                <span class="prices__header-cost">$2995</span>
                <span class="prices__header-users">/ user / 12 Months</span>
            </div>
            <div class="prices__value prices__value--pro prices__value--contains">
                <span class="prices__value-text prices__value-text--visible-mobile">850,000+ plans</span>
            </div>
            <div class="prices__value prices__value--pro prices__value--contains">
                <span class="prices__value-text prices__value-text--visible-mobile">1.2+ million plan executives with contact data at your fingertips</span>
            </div>
            <div class="prices__value prices__value--pro prices__value--contains">
                <span class="prices__value-text prices__value-text--visible-mobile">Automated email campaigns to 700k qualified plans</span>
            </div>
            <div class="prices__value prices__value--pro prices__value--contains">
                <span class="prices__value-text prices__value-text">300</span>
                <span class="prices__value-text prices__value-text--visible-mobile">Simultaneous campaigns</span>
            </div>
            <div class="prices__value prices__value--pro prices__value--contains">
                <span class="prices__value-text prices__value-text--visible-mobile">Notification when decision maker opens your emails</span>
            </div>
            <div class="prices__value prices__value--pro prices__value--contains">
                <span class="prices__value-text prices__value-text--visible-mobile">Expert designed email campaign available to you on day 1 of subscription($2300 value)</span>
            </div>
            <div class="prices__value prices__value--pro prices__value--contains prices__value--last-in-table">
                <span class="prices__value-text prices__value-text--visible-mobile">Ability to create email campaigns in bulk: many plans and many emails sent at once saving you time</span>
            </div>


            <!-- Platinum table -->
            <div class="prices__header prices__header--platinum">
                <span class="prices__header-title">Platinum</span>
                <span class="prices__header-cost">$10.000</span>
                <span class="prices__header-users">/ user/ 12 Months</span>
            </div>
            <div class="prices__value prices__value--platinum prices__value--contains">
                <span class="prices__value-text prices__value-text--visible-mobile">850,000+ plans</span>
            </div>
            <div class="prices__value prices__value--platinum prices__value--contains">
                <span class="prices__value-text prices__value-text--visible-mobile">1.2+ million plan executives with contact data at your fingertips</span>
            </div>
            <div class="prices__value prices__value--platinum prices__value--contains">
                <span class="prices__value-text prices__value-text--visible-mobile">Automated email campaigns to 700k qualified plans</span>
            </div>
            <div class="prices__value prices__value--platinum prices__value--contains">
                <span class="prices__value-text prices__value-text">300</span>
                <span class="prices__value-text prices__value-text--visible-mobile">Simultaneous campaigns</span>
            </div>
            <div class="prices__value prices__value--platinum prices__value--contains">
                <span class="prices__value-text prices__value-text--visible-mobile">Notification when decision maker opens your emails</span>
            </div>
            <div class="prices__value prices__value--platinum prices__value--contains">
                <span class="prices__value-text prices__value-text--visible-mobile">Expert designed email campaign available to you on day 1 of subscription($2300 value)</span>
            </div>
            <div class="prices__value prices__value--platinum prices__value--contains">
                <span class="prices__value-text prices__value-text--visible-mobile">Ability to create email campaigns in bulk: many plans and many emails sent at once saving you time</span>
            </div>
            <div class="prices__value prices__value--platinum prices__value--contains prices__value--last-in-table">
                <span class="prices__value-text prices__value-text--visible-mobile">401kFiduciaryOptimizer&nbsp;&mdash; premier analytics platform for audited plans, estimates savings to the plan when they hire you ($4200 value)</span>
            </div>
        </div>
    </div>
</template>

<script>
import {section} from './../mixins/section.js'


export default {
    name: 'PriceTable',
    mixins: [section]
}
</script>

<style lang="sass" scoped>
@import ./../assets/sass/config


.prices
    min-height: 100vh
    padding:
        top: $base-grid * 10
        bottom: $base-grid * 20
        left: $base-grid * 2
        right: $base-grid * 2
    background:
        color: $gray--light
    .prices__table
        @media (min-width:$tablet-size)
            display: grid
            grid:
                template:
                    columns: 2fr repeat(3, 1fr)
                auto:
                    flow: row dense
                column-gap: $base-grid * 2
            width: 100%
            max-width: $container-width
            margin: auto
            //& > *
                background:
                    color: rgba(black, .1)
    // Elems
    .prices__description
        padding-bottom: $base-grid * 2
    .prices__option
        grid:
            column: 1
        font-size: .9em
        line-height: 1.2
        color: darken($gray--dark, 15%)
        align-self: center
        padding:
            top: $base-grid
            bottom: $base-grid
        @media (max-width:$tablet-size)
            display: none
    .prices__header
        grid:
            row: 1
        text-align: center
        align-self: end
        padding:
            top: $base-grid * 2
            bottom: $base-grid
        border-radius: $base-grid $base-grid 0 0
        @media (max-width:$tablet-size)
            margin-top: $base-grid * 4
        // States
        &--standart
            grid:
                column: 2
            background-color: white
        &--pro
            grid:
                column: 3
            background-color: $primary
            color: white
            .prices__header-users
                color: $gray--light
        &--platinum
            grid:
                column: 4
            background: #E5E4E2
            background: linear-gradient(to bottom, #E5E4E2 0%, #D6D5D3 100%)
    .prices__header-title
        font:
            weight: bold
            size: $base-grid * 2
    .prices__header-cost
        display: block
        font:
            weight: bold
            size: $base-grid * 3
    .prices__header-users
        font:
            size: .8rem
        color: $gray--dark
    .prices__value
        text-align: center
        padding:
            top: $base-grid
            bottom: $base-grid
        background-color: white
        & + .prices__value
            border:
                top: 1px solid $gray
        // States
        &--standart
            grid:
                column: 2
        &--pro
            grid:
                column: 3
        &--platinum
            grid:
                column: 4
        &--contains
            &:before
                display: inline-flex
                align-items: center
                justify-content: center
                height: $base-grid * 2.5
                width: $base-grid * 2.5
                border-radius: 50%
                content: '\2713'
                color: white
                background-color: $green
                font-size: $base-grid * 1.5
                vertical-align: middle
            span:first-of-type
                margin-left: $base-grid
        &--last-in-table
            border:
                radius: 0 0 $base-grid $base-grid
    // Hidden elems
    .prices__value-text
        font-size: .9em
        &--visible-mobile
            @media (min-width:$tablet-size)
                display: none
</style>