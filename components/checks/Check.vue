<script setup>
/** ---------------------------------------------------
 *  Check
 *  ---------------------------------------------------
 * @version 1.0.0
 * @author Gustavo Fernandez Aguilar
 */

import { ref, nextTick, computed, onMounted } from 'vue'
import { checkProps, toggleEmits } from '../../composables/use-field'

// Error compilation whitout onMounted SSR vuepress, access to document and ref elementes on nexttick 


onMounted(()=>{
    nextTick(() => {
    let labelOffsetWidth = labelRef.value.offsetWidth
    let radioOffsetWidth = checkRef.value.offsetWidth
    containerRef.value.style.width = (labelOffsetWidth + radioOffsetWidth + 20) + "px"
    })
})
/** ---------------------------------------------------------
 *  @Props Define                                          | Props
 * ----------------------------------------------------------
 */
const props = defineProps({ ...checkProps })

/**
 *  @Emit Define
 */
const emit = defineEmits([...toggleEmits])

/**----------------------------------------------------------
 * @Data                                                   | Data
 * ----------------------------------------------------------
 */
const existValueProp = ref(props.modelValue.includes(props.val))


const labelRef = ref()
const checkRef = ref(null)
const containerRef = ref(null)
//
/**----------------------------------------------------------
 * @Methods                                                | Methods
 * ----------------------------------------------------------
 */
const selectValue = () => {

    let arrayValue = props.modelValue
    // if esxist value from props.val slice, emit & return 
    if (arrayValue.includes(props.val)) {

        arrayValue.splice(arrayValue.indexOf(props.val), 1);
        emit("update:modelValue", arrayValue);
        existValueProp.value = false;
        return
    }
    // else push to auxiliar before to emit
    arrayValue.push(props.val)
    emit("update:modelValue", arrayValue);
    existValueProp.value = true //props.modelValue.includes(props.val)
}


const selectValue2 = ()=>{
    emit("update:modelValue", props.modelValue)

}

const existValueProp2 = computed({
    get(){return props.modelValue},
    set(auxiliar){ 
        if (auxiliar.includes(props.val)) {
            emit("update:modelValue", auxiliar.splice(auxiliar.indexOf(props.val), 1));
            return false
        }
        auxiliar.push(props.val)
        emit("update:modelValue", auxiliar)
        return true
     }
})

</script>


<template>
    <div class="check-container" ref="containerRef">
        <div class="g-check" @click="selectValue()" ref="checkRef">
            <div :class="existValueProp ? 'g-check-inside' : 'g-check-inside g-check-inside-off'">
                <!-- <div class="check-head"></div>
                <div class="check-body"></div> -->
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" class="g-tick"
                        d="M30.4594 71.766L30.2644 71.961L36.3572 78.0538L36.5522 77.8588L36.6604 77.967L42.7532 71.8742L42.645 71.766L86.3182 28.0928L80.2254 22L36.5522 65.6732L20.0928 49.2138L14 55.3066L30.4594 71.766Z"
                        fill="#D9D9D9" />
                </svg>


            </div>
        </div>
        <div ref="labelRef" class="g-label">
            <p @click="selectValue"> {{ label }}</p>
        </div>
    </div>

</template>


<style  scoped>
.g-tick {
    fill: white;
}
/* 
| ------------------------------------------------------ Container
*/
.check-container {
    display: flex;
    align-items: center;
    margin: 5px;
}
/* 
| ------------------------------------------------------- Label
*/
.g-label {
    padding-left: 8px;
    color: var(--c-text);
}
.g-label p:hover ~ .g-check{
    box-shadow: var(--g-shadow-box) 3px 3px 3px;
    outline: solid 1px rgb(82, 82, 82);
}
/* 
| -------------------------------------------------------- Check Box
*/
.g-check {

    outline: solid 1px rgb(166, 166, 166);
    width: v-bind(width + "px");
    height: v-bind(width + "px");
    border-radius: 10%;
    background-color: var(--g-bg-light);

    
}
.g-check:hover {
    box-shadow: var(--g-shadow-box) 3px 3px 3px;
    outline: solid 1px rgb(82, 82, 82);
}
/* 
| --------------------------------------------------------- Check Inside
*/
.g-check-inside {
    position: absolute;
    width: v-bind(width + "px");
    height: v-bind(width + "px");
    border-radius: 2px;
    background-color: rgb(41, 128, 55);
    transform: scale(0.9);
    transition: transform 200ms ease-in-out;
}

.g-check-inside-off {
    transform: scale(0) rotate(90deg);
    /* transform: rotate(90deg); */
    transition: all 200ms ease-in-out;
}
</style>