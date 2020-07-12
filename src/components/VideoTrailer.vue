<template>
    <div 
        class="trailer"
        ref="wrapper">
        <picture>
            <source 
                srcset="./../assets/images/video-placeholder.webp" 
                type="image/webp">
            <source 
                srcset="img/creakyOldJPEG.jpg" 
                type="image/jpeg"> 
            <img 
                class="trailer__image"
                src="./../assets/images/video-placeholder.jpg" 
                alt="Larkspur interface trailer"
                width="1299"
                height="638"
                @click="openedVideo = !openedVideo"
                ref="image"
                role="button">
        </picture>
        <svg
            class="trailer__play-icon"
            height="60"
            width="60">
            <use 
                xlink:href="./../assets/svg/icons.svg#icon-play"
                fill="white"/>
        </svg>
        <transition
            name="trailer__close-button">
            <button 
                v-if="openedVideo"
                @click="openedVideo = !openedVideo"
                class="trailer__close-button">
                <svg
                    height="60"
                    width="60">
                    <use 
                        xlink:href="./../assets/svg/icons.svg#icon-times"
                        fill="white"/>
                </svg>
            </button>
        </transition>
        <transition
            name="trailer__video"
            v-on:before-enter="calcVideoBaseSize"
            v-on:enter="addVideoOpenedClass"
            v-on:before-leave="removeVideoOpenedClass">
            <div 
                v-if="openedVideo"
                class="trailer__video">
                <iframe 
                    class="trailer__frame"
                    src="https://player.vimeo.com/video/398820353" 
                    width="1299" 
                    height="638" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen></iframe>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'VideoTrailer',
    data() {
        return {
            openedVideo: false
        }
    },
    methods: {
        calcVideoBaseSize(el) {
            /**
             * Canculated position and size for video to make cool animation
             */
            el.style.transition = 'all .5s';
            el.style.left = this.$refs.image.getBoundingClientRect().left + 'px';
            el.style.top = this.$refs.image.getBoundingClientRect().top + 'px';
            el.style.height = this.$refs.image.clientHeight + 'px';
            el.style.width = this.$refs.image.clientWidth + 'px';
        },
        addVideoOpenedClass(el) {
            /**
             * Set interval is needed to set up correct sequence of animation
             */
            setTimeout(()=>{
                el.classList.add('trailer__video--opened');
            }, 10)
        },
        removeVideoOpenedClass(el) {
            /**
             * Method that minimize video
             */
            el.classList.remove('trailer__video--opened');
            this.calcVideoBaseSize();
        }
    },
    watch: {
        openedVideo() {
            /**
             * Logic to avoid scrolling when video is opened
             */
            if(this.openedVideo) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    }
}
</script>

<style lang="sass" scoped>
@import ./../assets/sass/config



.trailer
    position: relative
    .trailer__image
        max-width: 100%
        height: auto
        cursor: pointer
    .trailer__play-icon
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%, -50%)
        opacity: .8
        height: 30%
        width: 100px
        pointer-events: none
    .trailer__video
        position: fixed
        z-index: 101
        background-color: rgba(black, .95)
        // Transitions
        &-enter-active, &-leave-active
            transition: all .5s
            .trailer__frame
                display: none
        // States
        &--opened
            left: 0!important
            top: 0!important
            width: 100%!important
            height: 100%!important
    .trailer__close-button
        position: fixed
        top: 0
        right: 0
        z-index: 103
        background: transparent
            color: rgba(black, .9)
        border: none
        width: $base-grid * 7
        height: $base-grid * 7
        // Elems
        svg
            width: $base-grid * 4
            height: $base-grid * 4
        // Transitions
        &-enter-active
            transition: all .2s .3s
        &-leave-active
            transition: all .2s
        &-enter, &-leave-to
            transform: translate(100%, -100%)
    .trailer__frame
        position: absolute
        left: 5%
        top: 5%
        height: 90%
        width: 90%
        &-enter-active
            transition: opacity .2s .5s
        &-leave-active
            transition: opacity .2s
        &-enter, &-leave-to
            opacity: 0
</style>