<script setup>
/** ---------------------------------------------------
 *  Radio 
 *  ---------------------------------------------------
 *  Whitout input type radio native html
 * @version 1.0.0
 * @author Gustavo Fernandez Aguilar
 */
import { nextTick, onMounted } from 'vue'
import { checkProps } from '../../composables/props/index.props'

import { useRadio } from '../../composables/hooks/index'

// SSR -> 
onMounted(()=>{
    radioRef.value.style.width = props.width + "px";
    radioRef.value.style.height = props.width + "px";
    radioInsideRef.value.style.width = props.width + "px";
    radioInsideRef.value.style.height = props.width + "px";
    nextTick(()=>{
        let labelOffsetWidth = labelRef.value.offsetWidth;
        let radioOffsetWidth = radioRef.value.offsetWidth;
        containerRef.value.style.width = (labelOffsetWidth + radioOffsetWidth + 20) + "px";
    })
})

const props = defineProps({ ...checkProps })
const emit = defineEmits([ 'update:modelValue'])

const {labelRef, radioInsideRef, containerRef, radioRef, selectValue} = useRadio(props, emit)

</script>   

<template>
    <div class="radio-container" ref="containerRef">
        <div role="radio" class="g-radio" @click="selectValue" ref="radioRef">
            <div :class="modelValue === props.val ? 'g-radio-inside' : 'g-radio-inside g-radio-inside-off'" ref="radioInsideRef"></div>
            <!-- <div :class="{'g-radio-inside' :}" ref="radioInsideRef"></div> -->
        </div><div ref="labelRef" class="g-label"><p  @click="selectValue" > {{ label }}</p> </div>
    </div>
</template>


<style scoped>

</style>