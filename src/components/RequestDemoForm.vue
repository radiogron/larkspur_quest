<template>
    <form class="request-demo-form">
        <input 
            type="email"
            class="request-demo-form__field field"
            placeholder="Your email — all that needed">
        <button
            class="request-demo-form__button button button--primary">Request Demo</button>
    </form>
</template>

<script>
export default {
    name: 'RequestDemoForm',

}
</script>

<style lang="sass" scoped>
@import ./../assets/sass/config



.request-demo-form
    display: flex
    @media (max-width:$tablet-size)
        flex-wrap: wrap
    .request-demo-form__field
        width: 100%
        flex-grow: 1
        @media (min-width:$tablet-size)
            width: $base-grid * 45
    .request-demo-form__button
        white-space: nowrap
        animation: pulse 2s .2s infinite
        flex-grow: 1
        @media (max-width:$tablet-size)
            margin:
                top: $base-grid
        @media (min-width:$tablet-size)
            margin:
                left: $base-grid


@keyframes pulse
	0%
		box-shadow: 0 0 0 0 rgba($primary, 0.7)
	70%
		box-shadow: 0 0 0 10px rgba($primary, 0)
	100%
		box-shadow: 0 0 0 0 rgba($primary, 0)
</style>