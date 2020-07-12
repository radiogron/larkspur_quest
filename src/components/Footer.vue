<template>
    <footer class="footer">
        <div class="footer__request-demo">
            <div class="footer__request-demo-text">
                <span class="footer__request-demo-title">So we see you are interested in our product...</span>
                <p class="footer__request-demo-description">Vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
            </div>
            <RequestDemoForm
                class="footer__request-demo-form"/>
        </div>
        <div class="footer__company-info">
            <Logo
                :white="true"/>
            <p class="footer__company-info-paragraph paragraph">
                Comprised of top investment researchers with detailed knowledge of fund investments
                <br>
                Winners of the 2015 Peter L. Bernstein Award for Top 
                <a 
                    class="link link--white" 
                    href="https://rixtrema.com/blog/article-by-rixtrema-authors-award-journal-of-derivatives-published-by-institutional-investor-journals/"
                    target="_blank">Article</a>
                 across all Institutional Investor Journals.</p>
        </div>
        <nav class="footer__projects-info">
            <h5 class="footer__projects-info-title">Our pojects</h5>
            <ul class="list list--unstyled">
                <li class="list__item"><a href="#" class="link">LE PRO</a></li>
                <li class="list__item"><a href="#" class="link">RegBI Optimizer</a></li>
                <li class="list__item"><a href="#" class="link">401kFiduciaryOptimizer</a></li>
                <li class="list__item"><a href="#" class="link">Portfolio Crash Testing PRO</a></li>
            </ul>
        </nav>
    </footer>
</template>

<script>
import RequestDemoForm from './RequestDemoForm.vue'
import Logo from './../blocks/Logo.vue'


export default {
    name: 'Footer',
    components: {
        RequestDemoForm,
        Logo
    }
}
</script>

<style lang="sass" scoped>
@import ./../assets/sass/config


.footer
    padding: $base-grid * 2
    background-color: $dark-background
    display: flex
    flex-wrap: wrap
    // Elems
    .footer__request-demo
        display: flex
        align-items: center
        max-width: $container-width
        margin: auto
            top: -$base-grid * 10
        padding: $base-grid * 4
            top: $base-grid * 8
            bottom: $base-grid * 5
        background-color: $gray
        border-radius: $base-grid
        @media (max-width:$desktop-size)
            flex-wrap: wrap
    .footer__request-demo-text
        @media (min-width:$desktop-size)
            width: 66%
            padding:
                right: $base-grid * 2
    .footer__request-demo-form
    .footer__request-demo-title
        font:
            size: 1.6rem
            weight: bold
        line-height: 1
    .footer__request-demo-description
        font-size: .8rem
    .footer__company-info
        min:
            width: $mobile-size
        width: 33%
        color: $gray
        padding:
            top: $base-grid * 5
    .footer__company-info-paragraph
        font-size: .8em
        &:last-child
           margin:
               bottom: 0 
    .footer__projects-info
        min:
            width: $mobile-size
        width: 33%
        color: $gray
        padding:
            top: $base-grid * 5
        @media (min-width:$tablet-size)
            margin:
                left: auto
    .footer__projects-info-title
        color: white
        margin:
            top: 0
            bottom: $base-grid
</style>