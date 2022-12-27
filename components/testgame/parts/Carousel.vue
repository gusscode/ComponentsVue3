<script setup>
/** --------------------------------------------------------------
 *  Test Game -> Carousel
 *  --------------------------------------------------------------
 *  Details:
 * @author Gustavo Fernandez Aguilar
 * @version 1.0.0
 */
// -- Imports --
import { ref, nextTick, computed, onMounted } from 'vue'
/** -----------------------------------------------------------------
 * @NextTick                                                       | NextTick Inicial Render
 *  -----------------------------------------------------------------
 */
nextTick(() => {})

onMounted(() => {
    //getSlideCount.value = document.querySelectorAll(".g-slide").length
    slidesCount.value = props.slides.length;
})
/** -----------------------------------------------------------------
 * @Props Define                                                   | Props
 *  -----------------------------------------------------------------
 */
const props = defineProps({
    slides: { type: Array, default: [] },
    continuous: { type: Boolean },
    currentPage: {type: Number},
    correctAnswers: {type: Number},
    totalPages: {type: Number}
})

/** -----------------------------------------------------------------
 * @Emits Define                                                   | Emits
 *  -----------------------------------------------------------------
 */
const emit = defineEmits([])
/** -----------------------------------------------------------------
 * @Data                                                           | Data
 *  -----------------------------------------------------------------
 */
const currentSlide = ref(1)
const slidesCount = ref(0)

//const correctAnswers = ref(0)

/** -----------------------------------------
 * @RefsTemplate elements from template dom
 *  -----------------------------------------
 */

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
    <div class="g-Carousel">
        <div class="g-slides-container">
            <slot :currentSl="currentSlide"></slot>
        </div>
        <!-- Info States -->
        <p>pagina: {{ currentPage }}</p>
        <p>paginas totales = {{ totalPages }}</p>
        <p>respuestas Correctas = {{ correctAnswers }}</p>
    </div>
</template>

<style scoped>
/* 
| ------------------------------------------------------------------ Carousel
*/
.g-Carousel {
    width: 100%;
    height: 100%px;
    background-color: var(--g-bg-dark);
    padding: 20px;
    border-radius: 20px;
    outline: solid 1px var(--g-border-box);
    opacity: 1;
    transition: all 700ms ease-in-out;
}
/**
| ----------------------------------------------------------------- Slides Container
*/
.g-slides-container{
    position: relative;
    width: 100%;
    height: 350px;
    background-color: var(--g-bg);
    border-radius: 10px;
    outline: solid 1px var(--g-border-box);
    /* padding: 25px; */
    overflow: hidden;
}
</style>