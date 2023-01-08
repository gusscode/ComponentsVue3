<script setup>
/** --------------------------------------------------------------
 *  Select
 *  --------------------------------------------------------------
 *  Details:
 * @author Gustavo Fernandez Aguilar
 * @version 1.0.0
 */

// -- Imports --
import { ref, nextTick, onMounted, onUnmounted } from "vue";
import { selectProps } from "../../composables/props/index.props";
import {useSelect} from "../../composables/hooks/index"
import {documentClickToFalse} from "../../composables/hooks/commons/useDocument"
/**-----------------------------------------------------------------------------------
 *                                                                             | Next Tick Function
 * -----------------------------------------------------------------------------------
 */
onMounted(() => {
    
    nextTick(() => {
        // assigning the value of the header, depending on the width of the text, or by default 200 px
        gSelectHeaderRef.value.style.width = textHeaderRef.value.offsetWidth > 200 ? (textHeaderRef.value.offsetWidth + 40) + "px" : "200px"

        // Si se hizo clic fuera del contenedor del menú desplegable, minimizar el menú
        //-----document.addEventListener("click", listenersSelect);

        // assigning the height to 24px, on void or null
        textHeaderRef.value.style.height = 24 + "px"

        // assigning the value for the dropdown, depending on the width of the Header Select
        dropdownRef.value.style.width = gSelectHeaderRef.value.offsetWidth + "px"
    });
    documentClickToFalse(gSelectHeaderRef, dropdownState);
    
})

/* onUnmounted(() => {
    document.removeEventListener("click", listenersSelect);
})
function listenersSelect(event) {
    if (!gSelectHeaderRef.value.contains(event.target)) { dropdownState.value = false; }
} */


const props = defineProps({ ...selectProps });
const emit = defineEmits(["update:modelValue"]);

const { dropdownState, gSelectHeaderRef, itemDropdownRef, textHeaderRef, dropdownRef, selectValue, changeDropdownState  } = useSelect(props, emit)

//documentClickToFalse(dropdownState.value, gSelectHeaderRef.value)
</script>

<template>
    <div class="g-select-container">
        <div role="select" ref="gSelectHeaderRef" class="g-select-header" @click="changeDropdownState">
            <p ref="textHeaderRef">{{ modelValue }} </p>
            <div :class="dropdownState ? 'g-header-arrow-box-active' : 'g-header-arrow-box'"><svg  width="42" height="42" viewBox="0 0 42 42" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path class="g-svg" d="M22 0L43.6506 37.5H0.349365L22 0Z" fill="#D9D9D9" />
                </svg>
            </div>
        </div>
        <div :class="dropdownState ? 'g-select-dropdown dropdown-on ' : 'g-select-dropdown dropdown-off'"
            ref="dropdownRef">
            <div ref="itemDropdownRef" class="item-dropdown" v-for="(option, index) in options"
                @click="[changeDropdownState(), selectValue(option)]">
                {{ option }}
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
