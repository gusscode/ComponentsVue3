<script setup>
/** --------------------------------------------------------------
 *  Test Game -> Carousel -> Slide                           Slide
 *  --------------------------------------------------------------
 *  Details:
 * @author Gustavo Fernandez Aguilar
 * @version 1.0.0
 */
// -- Imports --
import { ref, nextTick, computed, onMounted } from 'vue'
import Pop from './notifications/Pop.vue';
/** -----------------------------------------------------------------
 * @NextTick                                                       | NextTick Inicial Render
 *  -----------------------------------------------------------------
 */

onMounted(()=>{
    nextTick(() => {
        widthSlideContainer.value = sildeContainer.value.offsetWidth
    })
})
/** -----------------------------------------------------------------
 * @Props Define                                                   | Props
 *  -----------------------------------------------------------------
 */
const props = defineProps({

})

/** -----------------------------------------------------------------
 * @Emits Define                                                   | Emits
 *  -----------------------------------------------------------------
 */
const emit = defineEmits([

])
/** -----------------------------------------------------------------
 * @Data                                                           | Data
 *  -----------------------------------------------------------------
 */
const widthSlideContainer = ref(0)

/** -----------------------------------------
 * @RefsTemplate elements from template dom
 *  -----------------------------------------
 */
const sildeContainer = ref(null)
/** ------------------------------------------------------------------
 * @Methods                                                         | Methods
 *  ------------------------------------------------------------------
 */


/** ------------------------------------------------------------------
 * @Watchs                                                          | Watchs
 *  ------------------------------------------------------------------
 */


/** ------------------------------------------------------------------
 * @Verify Props Exists                                             | Verify Props Exists
 *  ------------------------------------------------------------------
 */

</script>
<template>
    <div class="g-slide-container" ref="sildeContainer">
        
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
    margin-left: v-bind(widthSlideContainer + "px");
}

.slide-enter-to,
.slide-leave-from {
    /* .slide-leave-active optional class on leave active*/
    /* opacity: 1; */
    margin-left: 0px;
}
</style>