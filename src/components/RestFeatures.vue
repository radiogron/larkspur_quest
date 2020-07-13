<template>
    <div class="rest-features">
        <div class="rest-features__item">
            <i class="rest-features__icon fas fa-3x fa-chart-line"></i>
            <h3 class="rest-features__title">High ROI Process</h3>
            <p class="rest-features__description">LE PRO does the job of a salesperson knowledgeable in qualified plans</p>
        </div>
        <div class="rest-features__item">
            <i class="rest-features__icon fas fa-3x fa-users"></i>
            <h3 class="rest-features__title">Reach Out To Decision Makers</h3>
            <p class="rest-features__description">Over 1.2 Million Plan Executives With Contact Info</p>
        </div>
        <div class="rest-features__item">
            <i class="rest-features__icon fas fa-3x fa-fighter-jet"></i>
            <h3 class="rest-features__title">Be the First One to Present</h3>
            <p class="rest-features__description">Real Time Plan Filing Update For You (While Others Wait)</p>
        </div>
    </div>
</template>

<script>


export default {
    name: 'Restrest-features'
}
</script>

<style lang="sass" scoped>
@import ./../assets/sass/config


.rest-features
    padding:
        bottom: $base-grid * 3
        left: $base-grid * 2
        right: $base-grid * 2
    @media (min-width:$tablet-size)
        display: flex
    // Elements
    .rest-features__item
        text-align: center
        flex-grow: 1
        display: flex
        flex-direction: column
        align-items: center
        padding:
            left: $base-grid * 2
            right: $base-grid * 2
        @media (min-width:$tablet-size)
            &:nth-last-child(2)
                border:
                    left: 1px solid $gray
                    right: 1px solid $gray
    .rest-features__icon
        color: $primary
    .rest-features__title
        max-width: 20ch
        font:
            size: $base-grid * 3
            weight: bold
        line-height: 1.1
        margin: 0
            top: $base-grid * 2
            bottom: $base-grid * 1
    .rest-features__description
        max-width: 30ch
        margin:
            top: 0
</style>