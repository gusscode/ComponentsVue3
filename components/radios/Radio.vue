<script setup>
/** ---------------------------------------------------
 *  Radio 
 *  ---------------------------------------------------
 *  Whitout input type radio native html
 * @version 1.0.0
 * @author Gustavo Fernandez Aguilar
 */
import {ref, nextTick, onMounted, defineEmits, defineProps} from 'vue'
import {toggleEmits, checkProps} from '../../composables/use-field'

import { useRadio } from '../../composables/use-actions'
/** -------------------------------------------------------------------------------------
 * Next Tick Function
 * --------------------------------------------------------------------------------------
 */

onMounted(()=>{
    nextTick(()=>{
        //console.log(labelRef.value.offsetWidth);
        let labelOffsetWidth = labelRef.value.offsetWidth
        let radioOffsetWidth = radioRef.value.offsetWidth
        containerRef.value.style.width = (labelOffsetWidth + radioOffsetWidth + 20) + "px"
    
        //labelRef.value.addEventListener("mouseenter", ()=>{console.log("hover element radio");})
    })
})

const props = defineProps({ ...checkProps })

const emit = defineEmits([ ...toggleEmits ])

const {labelRef, containerRef, radioRef, selectValue} = useRadio(props, emit)

</script>

<template>
    <div class="radio-container" ref="containerRef">
        <div class="g-radio" @click="selectValue" ref="radioRef">
            <div :class="modelValue === props.val ? 'g-radio-inside' : 'g-radio-inside g-radio-inside-off'"></div>
        </div><div ref="labelRef" class="g-label"><p  @click="selectValue" > {{ label }}</p> </div>
    </div>
</template>


<style scoped>
/* 
| ------------------------------------------------------------- Container
*/
.radio-container {
 display: flex;
 align-items: center;

}
.radio-container p {
 cursor: pointer;
 user-select: none;

}
/* .g-radio:hover + .g-label  {
 background-color: red;
 color: aliceblue;

} */
/* 
| --------------------------------------------------------------- Radio box
*/
.g-radio {
    width: v-bind(width + "px");
    height: v-bind(width + "px");
    border-radius: 50%;
    outline: solid 2px var(--g-border-box);
    background-color: var(--g-bg-light);
    /* cursor: pointer; */
}
/* 
| ---------------------------------------------------------------- Label
*/
.radio-container .g-label {
    padding-left: 8px;
    color: var(--g-text);
}
/* 
| ----------------------------------------------------------------- Radio Inside
*/
.g-radio-inside {
    width: v-bind(width + "px");
    height: v-bind(width + "px");
    border-radius: 50%;
    background-color: rgb(41, 128, 55);
    transform: scale(0.6);
    transition: transform 300ms ease-in-out;
}
.g-radio-inside-off {
    transform: scale(0);
    transition: all 300ms ease-in-out;
}
</style>