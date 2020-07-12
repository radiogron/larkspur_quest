<template>
    <div class="features">
        <h2>Ghbdtn? vbh</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <a href="#" class="link">Donec quam felis</a>, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
    </div>
</template>

<script>
import {section} from './../mixins/section.js'


export default {
    name: 'Features',
    mixins: [section]
}
</script>

<style lang="sass" scoped>
@import ./../assets/sass/config


.features
    height: 900px
</style>