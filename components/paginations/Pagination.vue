<script setup>
/** --------------------------------------------------------------
 *  Pagination
 *  --------------------------------------------------------------
 *  Details:
 *  - Origin from Check
 * @author Gustavo Fernandez Aguilar
 * @version 1.0.0
 */
// -- Imports --
import { ref, nextTick, computed } from 'vue'
import { checkProps, toggleEmits } from '../../composables/use-field'
/** --------------------------------------------------------------
 * @Props Define
 */
const props = defineProps({
    ...checkProps
})

/** --------------------------------------------------------------
 * @Emits Define
 */
const emit = defineEmits([
    ...toggleEmits
])
/** --------------------------------------------------------------
 * @Data
 */
 const existValueProp = ref(props.modelValue.includes(props.val))
/** -----------------------------------------
 * @RefsTemplate elements from template dom
 *  -----------------------------------------
 */

/** --------------------------------------------------------------
 * @Methods
 */
const selectValue = () => {

    let arrayValue = props.modelValue
    // if esxist value from props.val slice & return 
    if (arrayValue.includes(props.val)) {

        const index = arrayValue.indexOf(props.val);

        if (index >= 0) { arrayValue.splice(index, 1); }

        emit("update:modelValue", arrayValue);

        existValueProp.value = props.modelValue.includes(props.val); return
    }
    // else push to auxiliar before to emit
    arrayValue.push(props.val)

    emit("update:modelValue", arrayValue);
    existValueProp.value = props.modelValue.includes(props.val)
}


</script>
<template>
    <div class="g-check" @click="selectValue()">
        <div :class="existValueProp ? 'g-check-inside' : 'g-check-inside g-check-inside-off'">
            <div class="check-head"></div>   <div class="check-body"></div>
        </div>
    </div>
</template>

<style scoped>
.check-head {
    position: absolute;
    width: 15px;
    height: 4px;
    background-color: white;
    top: 21px;
    left: 3px;
    transform: rotate(45deg);
}

.check-body {

    position: absolute;
    width: 25px;
    height: 4px;
    background-color: white;
    top: 18px;
    left: 10px;
    transform: rotate(135deg);
}

.g-check {
    
    outline: solid 1px rgb(166, 166, 166);
    width: v-bind(width + "px");
    height: v-bind(width + "px");
    border-radius: 10%;
    background-color: rgb(216, 216, 216);
}

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