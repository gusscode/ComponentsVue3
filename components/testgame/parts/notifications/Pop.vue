<script setup>
/** --------------------------------------------------------------
 *  Slide -> Pop                                            Pop, notification  
 *  --------------------------------------------------------------
 *  Details:
 * @author Gustavo Fernandez Aguilar
 * @version 1.0.0
 */
// -- Imports --
import { ref, nextTick, computed } from 'vue'
import ButtonG from '../../../buttons/Button.vue';

/** -----------------------------------------------------------------
 * @NextTick                                                       | NextTick Inicial Render
 *  -----------------------------------------------------------------
 */
nextTick(() => {})
/** -----------------------------------------------------------------
 * @Props Define                                                   | Props
 *  -----------------------------------------------------------------
 */
const props = defineProps({
    isAnswered: { type: Boolean, default: false },
    isCorrect: { type: Boolean, default: false },
})

/** -----------------------------------------------------------------
 * @Emits Define                                                   | Emits
 *  -----------------------------------------------------------------
 */
const emit = defineEmits([
    "isAnswered",
    
])
/** -----------------------------------------------------------------
 * @Data                                                           | Data
 *  -----------------------------------------------------------------
 */

/** -----------------------------------------
 * @RefsTemplate elements from template dom
 *  -----------------------------------------
 */

/** ------------------------------------------------------------------
 * @Methods                                                         | Methods
 *  ------------------------------------------------------------------
 */
const isAnsweredClick = () => {
    emit("isAnswered", true)
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
    <div :class="[!isAnswered ? 'g-pop-container' : 'g-pop-container g-pop-container-on', isCorrect ? 'g-pop-is-correct' : '']">
        <div class="g-pop-box">
        </div>
        <div class="g-pop-button" @click="isAnsweredClick">Continue</div>
        <!-- <ButtonG  text="Continue"></ButtonG> -->
        
    </div>
</template>

<style scoped>
.g-pop-container {
    position: absolute;
    margin-top: 350px;
    padding: 30px;
    width: 100%;
    height: 100%;
    /* bottom: 0; */
    background-color: var(--g-notify-false);


}

.g-pop-container-on {
    margin-top: 250px;
    transition: margin-top 300ms ease-in-out;
}
.g-pop-is-correct {
    background-color: var(--g-notify-true);
}
.g-pop-box {
    position: absolute;
}

.g-pop-button {
    position: absolute;
    width: 100px;
    margin-top: 0px;
    padding: 7px;
    background-color: var(--g-bg);
    color: var(--g-text);
    display: flex;
    align-items: center;
    justify-content: center;
    outline: solid 1px var(--g-border-box);
    border-radius: 5px;
    user-select: none;
}
.g-pop-button:hover {
    background-color: var(--g-bg-light);
}
</style>