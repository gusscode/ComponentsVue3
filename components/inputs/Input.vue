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
import { ref, nextTick, computed, onMounted } from 'vue'
import { inputProps } from '../../composables/props/index.props'

import { useInput } from '../../composables/hooks/index'
/** -----------------------------------------------------------------
 * @NextTick                                                       | NextTick Inicial Render
 *  -----------------------------------------------------------------
 */

onMounted(() => {
  nextTick(() => {
    inputRef.value.classList = props.outline ? "g-input-outline" : null;
    inputRef.value.addEventListener("focus", (e) => {
      if (placeRef.value) placeRef.value.classList.add("g-input-active")
    })
    inputRef.value.addEventListener("blur", (e) => {
      if (!placeRef.value) return;
      if (inputRef.value.value.length > 0) return;

      placeRef.value.classList.remove("g-input-active")
    })
  })
})

const props = defineProps({ ...inputProps })

const emit = defineEmits(["update:modelValue"])

const { inputRef, placeRef, inputContainer, inputLabel, isContentVoid, value } = useInput(props, emit)


</script>
<template>
  <div class="g-input-container" ref="inputContainer">
    <div v-if="props.label" class="g-input-label" ref="inputLabel">
      <p>{{ label }}</p>
    </div>
    <div style="position: relative; margin-left: 15px;">
      <input v-model="value" class="g-input-box" type="text" ref="inputRef" @input="isContentVoid" />
      <div v-if="props.place" class="g-place" ref="placeRef">{{ place }}</div>
    </div>
  </div>
</template>

<style scoped></style>