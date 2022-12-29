<script setup>
/** --------------------------------------------------------------
 *  Test Game Principal
 *  --------------------------------------------------------------
 *  Details:
 * @author Gustavo Fernandez Aguilar
 * @version 1.0.0
 */
// -- Imports --
import { ref, nextTick, computed, onMounted } from 'vue'

import Carousel from './parts/Carousel.vue'
import Slide from './parts/Slide.vue'
import Viewer from './parts/Viewer.vue'
/** -----------------------------------------------------------------
 * @NextTick                                                       | NextTick Inicial Render
 *  -----------------------------------------------------------------
 */
// add pages.props to pages on render, SSR
onMounted(()=>{
    pages.value = props.gPages
    nextTick(() => pageCount.value = props.gPages.length ) // pages count on refresh data, in mounted clycle
    
})
/** -----------------------------------------------------------------
 * @Props Define                                                   | Props
 *  -----------------------------------------------------------------
 */
const props = defineProps({
    /**
     * @property {Pages[{title:String,question:String,options:[],correctAnswer:String}]} gPages
     * @property {String} viewType 
     */
    gPages: {type: Array},
    viewType: {type: String}
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
const pages = ref([])                          
const currentPage = ref(1)
const pageCount = ref()
const correctAnswers = ref(0)
/** -----------------------------------------
 * @RefsTemplate elements from template dom
 *  -----------------------------------------
 */

/** ------------------------------------------------------------------
 * @Methods                                                         | Methods
 *  ------------------------------------------------------------------
 */
const nextPage = (respuesta)=>{
    //console.log(respuesta); // verify response
    if (currentPage.value < pageCount.value) {
        // if response is correct, add 1 correctAnswer, else add 0
        correctAnswers.value = correctAnswers.value + respuesta
        currentPage.value++;
    }
}
const prevPage = (respuesta)=>{
    if (currentPage.value > 1) currentPage.value--; // respuesta on next Versions
}


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
    <div>
        <Carousel :total-pages="pageCount" :slides="pages" :pages="pages" :current-page="currentPage" :correct-answers="correctAnswers">
            <Slide v-for="(page, index) in pages" :key="index" class="g-slide">
                <Viewer :view-type="viewType" :page="page" :options="page.options" v-on:prev-page="prevPage" v-on:next-page="nextPage" v-show="currentPage === index + 1" :title="page.question"></Viewer>
            </Slide>
        </Carousel>
    </div>

</template>

<style scoped>

</style>