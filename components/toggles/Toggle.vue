<script setup>
/** --------------------------------------
 * Component Toggle whit lever change
 * ---------------------------------------
 * Whitout input type check
 * Iclude:
 * - custom width
 * - custom lever radio size, color on & color off
 * - vertical mode
 * - emit even on-true v-model
 * ---------------------------------------
 * @version 1.0.0
 * @author Gustavo Fernandez Aguilar
 *
 */
import { nextTick, onMounted, onUnmounted } from "vue";
import { toggleProps } from '../../composables/props/index.props'

import { useToggle } from "../../composables/hooks/index"

onMounted(() => {
  nextTick(() => {
    // Si se hizo clic fuera del contenedor del menú desplegable, minimizar el menú
    document.addEventListener("click", listeners);
    toggleRef.value.style.width = props.width + "px"
  })
})
// Quitando el listener para cuando se desmonte el componente no de problemas
// -- component undefined, que tiene los cambios del listener
onUnmounted(() => { document.removeEventListener("click", listeners); })

// funcion listener para que pueda ser removido del document del DOM, usar este forma para agregar varias
// comprobaciones en un listener, para cuando se agreguen listeners, de otro modo solo usar un if padre 
// para comprobar si está en el DOM
function listeners(event) {
  if (!toggleRef.value.contains(event.target)) leverInRef.value.classList.remove("lever-on-before")
}

const props = defineProps({ ...toggleProps });
const emit = defineEmits(["update:modelValue"]);

const { state, toggleRef, leverInRef, changeState } = useToggle(props, emit)

</script>

<template>

  <div role="switch" :aria-label="modelValue" :aria-checked="modelValue" style=""
    :class="props.verticalMode ? 'g-toggle-container vertical-mode' : 'g-toggle-container'" @click="changeState"
    ref="toggleRef">
    <div :class="modelValue === true ? 'lever lever-on' : 'lever lever-off'">
      <div ref="leverInRef"></div>
    </div>
  </div>
</template>

<style scoped></style>
