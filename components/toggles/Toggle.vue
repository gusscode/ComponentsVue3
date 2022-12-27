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
import { ref, nextTick, computed, onMounted, onUnmounted } from "vue";
import { toggleProps, toggleEmits /* changeState */ } from '../../composables/use-field'



onMounted(()=>{
  nextTick(() => {
  // Si se hizo clic fuera del contenedor del menú desplegable, minimizar el menú
  document.addEventListener("click", listeners);
})
})
  // Quitando el listener para cuando se desmonte el componente no de problemas
  // -- component undefined, que tiene los cambios del listener
onUnmounted(()=>{ document.removeEventListener("click", listeners); })

  // funcion listener para que pueda ser removido del document del DOM, usar este forma para agregar varias
  // comprobaciones en un listener, para cuando se agreguen listeners, de otro modo solo usar un if padre 
  // para comprobar si está en el DOM
function listeners(event){
  if (!toggleRef.value.contains(event.target)) leverInRef.value.classList.remove("lever-on-before")
}

/** ---------------------------------------------------------
 * @Props Define
 * ----------------------------------------------------------
 */
const props = defineProps({
  ...toggleProps
});
/**----------------------------------------------------------
 * @Emits Define
 * ----------------------------------------------------------
 */
const emit = defineEmits([
  ...toggleEmits
]);
/**----------------------------------------------------------
 * @Data 
 * ----------------------------------------------------------
 */
const state = ref(props.modelValue); // boolean auxiliar for [changeState(),]
const toggleRef = ref(null)
const leverInRef = ref(null)

//
/**----------------------------------------------------------
 * @Methods 
 * ----------------------------------------------------------
 */

// (change state as toggle auxiliar for emit bool state); when Click on component
const changeState = () => {
  state.value = !state.value;
  emit("update:modelValue", state.value);

  if (state.value === true) return leverInRef.value.classList.add("lever-on-before")
  leverInRef.value.classList.remove("lever-on-before")
};

</script>

<template >

  <div role="switch" :aria-label="modelValue" :aria-checked="modelValue" style=""
    :class="props.verticalMode ? 'g-toggle-container vertical-mode' : 'g-toggle-container'" @click="changeState"
    ref="toggleRef">
    <div :class="modelValue === true ? 'lever lever-on' : 'lever lever-off'">
      <div ref="leverInRef"></div>
    </div>
  </div>



  <!-- {{ modelValue }} -->
</template>

<style scoped>
/*
| -------------------------------------------------- Container Styles
*/
.g-toggle-container {
  margin: 12px;
  position: relative;
  /* touch-action: */
  /* cursor: pointer; */
  ;
  outline: solid 1px rgb(166, 166, 166);
  width: v-bind(width + 'px');
  height: 15px;
  background-color: var(--g-bg-light);
  border-radius: 8px;
  transition: box-shadow 500ms;
  -webkit-user-select: none !important;
  user-select: none !important;
}

.g-toggle-container:hover {
  box-shadow: var(--g-shadow-box) 3px 3px 4px;
  transition: all 300ms;
}
.g-toggle-container:hover .lever {
  box-shadow: var(--g-shadow-box)  2px 2px 3px;
  transition: all 300ms;
}
/*
| --------------------------------------------------- Lever Styles
*/

.g-toggle-container .lever {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  z-index: 2;
}

.g-toggle-container input {
  display: none;
}

/**
* styles on state is false, lever OFF
*/
.lever-off {
  left: 0px;
  background-color: v-bind(colorFalse);
  transition: all 300ms ease-in-out;
  border: solid 1px rgb(149, 149, 149);
  transform: scale(v-bind(leverRadOff));
  /* overflow: hidden;
  overflow-x: hidden; */


}

/**
* styles on state is true, lever ON
*/
.lever-on {
  left: v-bind((width - 15) + 'px');
  background-color: v-bind(colorTrue);
  transition: all 300ms ease-in-out;
  transform: scale(v-bind(leverRadOn));
  border: solid 1px rgb(149, 149, 149);

  /* overflow: hidden; */

}
/*
| ------------------ Pseudo element from lever
*/
.lever-on-before {
  width: 15px;
  height: 15px;
  transition: all 250ms ease-in-out;
}

.lever-on-before::before {

  content: "";
  position: absolute;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  border-radius: 50%;
  background: v-bind(colorTrue);
  opacity: .3;
  transform: scale(1.7);
  transition: transform .22s cubic-bezier(0, 0, .2, 1);
  z-index: 1;
}

/*
| ----------------------------------------------------------- Vertical Mode 
*/
.vertical-mode {
  transform: rotate(-90deg);
}
</style>
