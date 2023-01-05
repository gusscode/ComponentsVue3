<script setup>
/** --------------------------------------------------------------
 *  Test Game -> Carousel -> Slide                           Slide
 *  --------------------------------------------------------------
 *  Details:
 * @author Gustavo Fernandez Aguilar
 * @version 1.0.0
 */
// -- Imports --
import { ref, nextTick, onMounted } from 'vue'

//------------ Initial Render
onMounted(() => {
    nextTick(() => {
        widthSlideContainerRef.value = sildeContainerRef.value.offsetWidth
    })
})

//------------ Refs Template
const widthSlideContainerRef = ref(0)
const sildeContainerRef = ref(null)

</script>
<template>
    <div class="g-slide-container" ref="sildeContainerRef">

        <transition name="slide">
            <slot></slot>
        </transition>
    </div>
</template>

<style scoped>
/* 
|------------------------------------------------------------------------- Slide Container
*/
.g-slide-container {
    position: absolute;
    width: 100%;
}

/* 
| ------------------------------------------------------------------------- Transitions states definitions
*/
.slide-enter-active,
.slide-leave-active {
    /* transition: opacity 500ms ; */
    transition: margin-left 900ms ease-out;
}

.slide-enter-from,
.slide-leave-to {
    /* opacity: 0; */
    margin-left: v-bind(widthSlideContainerRef + "px");
}

.slide-enter-to,
.slide-leave-from {
    /* .slide-leave-active optional class on leave active*/
    /* opacity: 1; */
    margin-left: 0px;
}
</style>