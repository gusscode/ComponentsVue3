<script setup>
/** --------------------------------------------------------------
 *  Test Game -> Carousel -> Slide -> Viewer                 Viewer
 *  --------------------------------------------------------------
 *  Details:
 *  - Este Viewer se encargará de evaluar la respuesta escogida y luego
 *  se evaluará, y se emitira junto al evento nextPage un número de las respuestas correctas a sumar en Test Game component 
 * @author Gustavo Fernandez Aguilar
 * @version 1.0.0
 */
// -- Imports --
import { ref, nextTick, computed } from 'vue'
import Radio from '../../Radios/Radio.vue';
import Buttonvue from '../../buttons/Button.vue';
import ButtonLazy from './buttons/ButtonLazy.vue';
import Pop from './notifications/Pop.vue';

/** -----------------------------------------------------------------
 * @NextTick                                                       | NextTick Inicial Render
 *  -----------------------------------------------------------------
 */
nextTick(() => {

})
/** -----------------------------------------------------------------
 * @Props Define                                                   | Props
 *  -----------------------------------------------------------------
 */
const props = defineProps({
    page: {
        title: { type: [String, null] },
        question: { type: String },
        options: { type: Array, default: [] },
        correctAnswer: { type: String },
    },
    viewType: { type: String, default: 'radio' }
})

/** -----------------------------------------------------------------
 * @Emits Define                                                   | Emits
 *  -----------------------------------------------------------------
 */
const emit = defineEmits([
    "nextPage", "prevPage"
])
/** -----------------------------------------------------------------
 * @Data                                                           | Data
 *  -----------------------------------------------------------------
 */
const selectedAnswer = ref()
const isAnswered = ref(false)
const isCorrect = ref(false)
/** -----------------------------------------
 * @RefsTemplate elements from template dom
 *  -----------------------------------------
 */

/** ------------------------------------------------------------------
 * @Methods                                                         | Methods
 *  ------------------------------------------------------------------
 */
const evaluateAnswer = () => {
    isAnswered.value = true
    if (selectedAnswer.value === props.page.correctAnswer) {
        isCorrect.value = true;
        return 1;   
    }

    return 0;
}
const nextPage = () => { emit("nextPage", evaluateAnswer()) }
const prevPage = () => { emit("prevPage", evaluateAnswer()) } // next versions


</script>
<template>
    <div>
        <!-- {{ isAnswered }} -->
        <Pop v-on:is-answered="nextPage"  :is-answered="isAnswered" :is-correct="isCorrect"></Pop>

        <div class="g-viewer-container">
            <div>
                <p class="title">{{ page.question }}</p>
                <Radio v-if="viewType === 'radio'" :width="30" v-for="(option, index) in page.options" :key="index"
                    v-model="selectedAnswer" :val="option" :label="option"></Radio>
                <ButtonLazy v-if="viewType === 'lazy'" v-for="(option, index22) in page.options" :key="index22"
                    v-model="selectedAnswer" :val="option">{{ option }}</ButtonLazy>
            </div>

            <div>
                <Buttonvue v-if="!isAnswered" @click="evaluateAnswer" >Evaluate</Buttonvue>
            </div>
        </div>
    </div>
</template>

<style scoped>
.g-viewer-container {
    width: 100%;
    display: grid;
    padding-top: 15px;
    padding-left: 30px;
    grid-template-rows: 1fr 2fr;
    grid-template-columns: 1fr;
    background-color: var(--g-bg);
    outline: solid 1px var(--g-border-box);
}

.title {
    color: var(--g-text);
    font-size: 20px;
    margin: 0;
}

p {
    font-size: 10px;
}
</style>