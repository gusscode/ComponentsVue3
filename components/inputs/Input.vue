<script setup>
/** --------------------------------------------------------------
 *  Input
 *  --------------------------------------------------------------
 *  Details:
 *  - 
 * @author Gustavo Fernandez Aguilar
 * @version 1.0.0
 */
// -- Imports --
import {ref, nextTick, computed, onMounted} from 'vue'
import { buttonProps, inputProps, inputEmits } from '../../composables/use-field'
/** -----------------------------------------------------------------
 * @NextTick                                                       | NextTick Inicial Render
 *  -----------------------------------------------------------------
 */

 onMounted(()=>{
  nextTick(()=>{
  inputRef.value.classList = props.outline ? "g-input-outline" : null;
  inputRef.value.addEventListener("focus", (e)=>{
    if(placeRef.value)placeRef.value.classList.add("g-input-active")
  })
  inputRef.value.addEventListener("blur", (e)=>{
    if(!placeRef.value)return;
    if(inputRef.value.value.length > 0)return;

    placeRef.value.classList.remove("g-input-active")
  })

  /* inputRef.value.style.marginLeft = (inputLabel.value.offsetWidth + 10) + "px"
  placeRef.value.style.marginLeft = (inputLabel.value.offsetWidth + 18) + "px" */
})
 })

/** -----------------------------------------------------------------
 * @Props Define                                                   | Props
 *  -----------------------------------------------------------------
 */
const props = defineProps({ ...buttonProps, ...inputProps, place: {type: [String, null], default: null} })

/** -----------------------------------------------------------------
 * @Emits Define                                                   | Emits
 *  -----------------------------------------------------------------
 */
const emit = defineEmits([ ...inputEmits ])
/** -----------------------------------------------------------------
 * @Data                                                           | Data
 *  -----------------------------------------------------------------
 */

/** -----------------------------------------
 * @RefsTemplate elements from template dom
 *  -----------------------------------------
 */
const inputRef = ref(null)
const placeRef = ref(null)
const inputContainer = ref(null)
const inputLabel = ref(null)
/** ------------------------------------------------------------------
 * @Methods                                                         | Methods
 *  ------------------------------------------------------------------
 */
const isContentVoid = (e)=>{
  if(!placeRef.value)return;
  if(e.target.value.length > 0) return placeRef.value.classList.add("g-input-active");
  if(document.activeElement === inputRef.value)return; 
  placeRef.value.classList.remove("g-input-active")
}

// Update modelValue
const value = computed({
  get() { return props.modelValue },
  set(value) { emit("update:modelValue", value) },
})
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
  <div class="g-input-container" ref="inputContainer">
    <div v-if="props.label" class="g-input-label" ref="inputLabel"> <p>{{ label }}</p> </div>
    <div style="position: relative; margin-left: 15px;">
      <input v-model="value" class="g-input-box" type="text" ref="inputRef" @input="isContentVoid">
      <div v-if="props.place" class="g-place" ref="placeRef" >{{ place }}</div>
    </div>
  </div>
</template>

<style scoped>
.g-input-container {
  position: relative;
  display: flex;
  
margin: 20px;
}
.g-input-box {
  position:  relative;
}
.g-input-label {
  position: relative;
  
  color: var(--g-text);
  
}
.g-input-label p {
  position: relative;
  top: 5px;
  color: var(--g-text);
  margin: 0px;
  padding: 0px;
}
.g-place {
  position: absolute;
  user-select: none;
  pointer-events: none;
  color: var(--g-text-light);
  top: 0;
  left: 8px;
  transition: all 180ms ease-out;

}
.g-input-outline {
  background-color: var(--g-bg-dark);
  color: var(--g-text);
  outline: none;
  border: solid 1px var(--g-text);
  border-radius: 7px;
  padding: 10px 10px 10px 15px;
  
}
.g-input-outline input::placeholder {
  color: blue;
}
.g-input-active {
  color: var(--g-text);
  font-size: 12px;
  top: -18px;
  left: 5px;
  transition: all 300ms ease-in;
  animation: color-soft 600ms;

}

@keyframes color-soft {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>