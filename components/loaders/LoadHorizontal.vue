<script setup>
/** --------------------------------------------------------------
 *  Loader Horizontal
 *  --------------------------------------------------------------
 *  Details:
 * @author Gustavo Fernandez Aguilar
 * @version 1.0.0
 */
// -- Imports --
import {ref, nextTick, computed, watch} from 'vue'

nextTick(()=>{
    //setContentOn()
})
/** --------------------------------------------------------------
 * @Props Define                                                | Props
 *  --------------------------------------------------------------
 */
const props = defineProps({ modelValue: {type: Number, default: 0}})
/** --------------------------------------------------------------
 * @Emits Define                                                | Emits
 *  --------------------------------------------------------------
 */
const emit = defineEmits([])
/** --------------------------------------------------------------
 * @Data                                                        | Data
 *  --------------------------------------------------------------
 */

/** -----------------------------------------
 * @RefsTemplate elements from template dom
 *  -----------------------------------------
 */
const gLoaderContentRef = ref(null)
const gLoaderContainerRef = ref(null)
/** --------------------------------------------------------------
 * @Methods                                                     | Methods
 *  --------------------------------------------------------------
 */
const setContentOn = ()=>{
    gLoaderContentRef.value.classList.toggle("g-loader-content-on")
}

const isFull = computed({
    get(){
        return props.modelValue
    },
    set(auxiliar){
        return auxiliar
    }
})

watch(isFull, (newValue, oldValue)=>{
    if(newValue > 99) return gLoaderContainerRef.value.classList.add("g-loader-content-full")
    gLoaderContainerRef.value.classList.remove("g-loader-content-full")
})

</script>

<template>
  <div class="g-loader-container" @click="setContentOn" ref="gLoaderContainerRef">
    <div ref="gLoaderContentRef" class="g-loader-content"></div>
  </div>
</template>

<style scoped>
/* 
| ----------------------------------------------------------- Container
*/
.g-loader-container {
    width: 200px;
    height: 20px;
    background-color: var(--g-bg-light);
    border-radius: 5px;
    overflow: hidden;
    margin-top: 20px;
    margin-bottom: 10px;
}
/* 
| ------------------------------------------------------------ Loader Body
*/
.g-loader-content {
    height: 100%;
    width: 0%;
    background-color: green;
    border-radius: 5px;
}

.g-loader-content-on {
    width: v-bind(modelValue + "%") ;
    transition: width 800ms ease-in-out;
    box-shadow: green 8px 0px 15px, green 3px 0px 3px;
}
.g-loader-content-full {
    outline: solid rgb(32, 104, 32) 2px;
    transition: all 800ms ease-in-out; 
    animation: shadow-crec 2s , shadow-pulse 1400ms 2s infinite;
}

/* 
| ------------------------------------------------------------- Keyframes
*/
@keyframes shadow-crec {
  0% {
    box-shadow: green 0px 0px 0px 0px;
  }
  70% {
    box-shadow: green 0px 0px 18px 12px;
  }
  100% {
    box-shadow: green 0px 0px 4px 3px;
  }
}

@keyframes shadow-pulse {
  0% {
    box-shadow: green 0px 0px 1px 1px;
  }
  35% {
    box-shadow: green 0px 0px 4px 3px;
  }
  100% {
    box-shadow: green 0px 0px 1px 1px;
  }
}
</style>