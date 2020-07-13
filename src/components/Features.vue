<template>
    <div>
        <div class="features">
            <div class="features__item">
                <div class="feature__image">
                    <svg
                        class="feature__svg"
                        width="600"
                        height="600">
                        <use 
                            xlink:href="./../assets/svg/features.svg#feature--compaign"/>
                    </svg>
                </div>
                <div class="feature__description">
                    <div class="feature__upper-icon">
                        <i class="fas fa-code-branch"></i> 
                        <span class="feature__icon-description">Easy automation</span>
                    </div>
                    <h2 class="feature__title">Improve Plan Investments</h2>
                    <p class="feature__title-subscription paragraph">Menu Breakdown for 80,000+ Plans</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et</p>
                </div>
            </div>
            <div class="features__item">
                <div class="feature__image">
                    <svg
                        class="feature__svg"
                        width="600"
                        height="600">
                        <use 
                            xlink:href="./../assets/svg/features.svg#feature--messaging"/>
                    </svg>
                </div>
                <div class="feature__description">
                    <div class="feature__upper-icon">
                        <i class="fas fa-envelope"></i> 
                        <span class="feature__icon-description">Email marketing</span>
                    </div>
                    <h2 class="feature__title">Sell From Home on Autopilot</h2>
                    <p class="feature__title-subscription paragraph">LE PRO sends automated email campaigns to plan sponsors</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et</p>
                </div>
            </div>
            <div class="features__item">
                <div class="feature__image">
                    <svg
                        class="feature__svg"
                        width="600"
                        height="600">
                        <use 
                            xlink:href="./../assets/svg/features.svg#feature--crm"/>
                    </svg>
                </div>
                <div class="feature__description">
                    <div class="feature__upper-icon">
                        <i class="fas fa-check-double"></i> 
                        <span class="feature__icon-description">Perfect CRM</span>
                    </div>
                    <h2 class="feature__title">Reach Out To Decision Makers</h2>
                    <p class="feature__title-subscription paragraph">Over 1.2 Million Plan Executives With Contact Info</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et</p>
                </div>
            </div>
            <div class="features__item">
                <div class="feature__image">
                    <svg
                        class="feature__svg"
                        width="600"
                        height="600">
                        <use 
                            xlink:href="./../assets/svg/features.svg#feature--stats"/>
                    </svg>
                </div>
                <div class="feature__description">
                    <div class="feature__upper-icon">
                        <i class="fas fa-chart-line"></i> 
                        <span class="feature__icon-description">Analyze</span>
                    </div>
                    <h2 class="feature__title">Analyze & Win Any Plan Today!</h2>
                    <p class="feature__title-subscription paragraph">Detailed Intelligence on 850,000+ Retirement Plans</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et</p>
                </div>
            </div>
        </div>

        <!-- Other features list -->
        <Rest-Features/>
    </div>
</template>

<script>
import {section} from './../mixins/section.js'
import RestFeatures from './RestFeatures.vue'


export default {
    name: 'Features',
    mixins: [section],
    components: {
        RestFeatures
    }
}
</script>

<style lang="sass" scoped>
@import ./../assets/sass/config


.features
    max-width: 100%
    width: $container-width
    margin: auto
    .features__item
        padding:
            top: $base-grid * 3
            bottom: $base-grid * 3
        @media (min-width:$tablet-size)
            display: flex
            align-items: center
            padding:
                top: $base-grid * 5
                bottom: $base-grid * 5
            &:nth-child(2n)
                .feature__image
                    order: 2
    .feature__description
        padding:
            left: $base-grid * 2
            right: $base-grid * 2
        @media (max-width:$tablet-size)
            text-align: center
        @media (min-width:$tablet-size)
            width: 45%
    .feature__upper-icon
        color: $primary
    .feature__icon-description
        margin:
            left: $base-grid
        font-weight: 600
    .feature__title
        font-size: $base-grid * 4
        line-height: 1.1
        margin:
            bottom: $base-grid
    .feature__title-subscription 
        font-size: .9em
        margin-top: $base-grid
    .feature__image
    .feature__svg
        display: inline-block
        max-width: 100%
        height: auto
</style>