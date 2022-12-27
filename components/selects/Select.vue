<script setup>
/** --------------------------------------------------------------
 *  Select
 *  --------------------------------------------------------------
 *  Details:
 * @author Gustavo Fernandez Aguilar
 * @version 1.0.0
 */

// -- Imports --
import { ref, nextTick, computed, watch, onMounted, onUnmounted } from "vue";
import { selectProps, toggleEmits } from "../../composables/use-field.js";
/**-----------------------------------------------------------------------------------
 *                                                                             | Next Tick Function
 * -----------------------------------------------------------------------------------
 */
onMounted(() => {
    nextTick(() => {
        // assigning the value of the header, depending on the width of the text, or by default 200 px
        gSelectHeaderRef.value.style.width = textHeaderRef.value.offsetWidth > 200 ? (textHeaderRef.value.offsetWidth + 40) + "px" : "200px"

        // Si se hizo clic fuera del contenedor del menú desplegable, minimizar el menú
        document.addEventListener("click", listenersSelect);

        // assigning the height to 24px, on void or null
        textHeaderRef.value.style.height = 24 + "px"

        // assigning the value for the dropdown, depending on the width of the Header Select
        dropdownRef.value.style.width = gSelectHeaderRef.value.offsetWidth + "px"
    });
})

onUnmounted(() => {
    document.removeEventListener("click", listenersSelect);
})
function listenersSelect(event) {
    if (!gSelectHeaderRef.value.contains(event.target)) { dropdownState.value = false; }
}
/** -----------------------------------------------------------------------------
 * @Props Define                                                              | Props
 * ------------------------------------------------------------------------------
 */
const props = defineProps({
    ...selectProps,
    green: { default: () => ({}) }
});

/** -----------------------------------------------------------------------------
 * @Emits Define                                                              | Emits
 * ------------------------------------------------------------------------------
 */
const emit = defineEmits([...toggleEmits]);

/** -----------------------------------------------------------------------------
 * @Data                                                                      | Data
 * ------------------------------------------------------------------------------
 */
const dropdownState = ref(false);

/** -----------------------------------------
 * @RefsTemplate elements from the template in the DOM
 *  -----------------------------------------
 */
const gSelectHeaderRef = ref(null);
const itemDropdownRef = ref(null);
const textHeaderRef = ref(null)
const dropdownRef = ref(null)

/** -----------------------------------------------------------------------------
 * @Methods                                                                  | Methods 
 * ------------------------------------------------------------------------------
 */
const selectValue = (value) => {
    emit("update:modelValue", value);
    nextTick(() => {
        gSelectHeaderRef.value.style.width = textHeaderRef.value.offsetWidth > 180 ? (textHeaderRef.value.offsetWidth + 40) + "px" : "200px"
        dropdownRef.value.style.width = gSelectHeaderRef.value.offsetWidth + "px"
    })
};

const changeDropdownState = () => {
    dropdownState.value = !dropdownState.value;
};

/** ------------------------------------------------------------------------------
 *  @Watchs                                                                  | Watchs
 *  ------------------------------------------------------------------------------
 */


 // Verify props


</script>
<template>
    <div class="g-select-container">
        <div ref="gSelectHeaderRef" class="g-select-header" @click="changeDropdownState">
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
/* 
| ---------------------------------------------------------------- Container
*/
/* .g-select-container {
    
} */
/* 
| ---------------------------------------------------------------- Select Header
*/
.g-select-header {
    position: relative;
    background-color: var(--g-bg-light);
    padding: 8px;
    border: solid rgb(184, 184, 184) 1px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--g-text);
    overflow: hidden;
}

.g-select-header:hover {
    background-color: var(--g-bg-dark);
}

.g-select-header p {
    margin: 0px !important;
    user-select: none;
}


.g-header-arrow-box {
    position: absolute;
    right: 0px;
    
    transform: scale(0.3);
    rotate: -180deg;
    transition: rotate 300ms;
}
.g-svg {
    fill: var(--g-text-lightest);
}
.g-header-arrow-box-active {
    position: absolute;
    right: 0px;
    
    transform: scale(0.3);
    rotate: 0deg;
    transition: rotate 300ms;
}
/* 
| ------------------------------------------------------------------ Select Dropdown
*/
.g-select-dropdown {
    width: 200px;
    display: grid;
    grid-template-columns: 1fr;
    background-color: var(--g-bg-light);
    color: var(--g-text);
    position: absolute;

    gap: 7px;
    z-index: 5;
}

.item-dropdown {
    padding: 7px;
    
    /* cursor: pointer; */
}

.item-dropdown:hover {
    outline: solid rgb(123, 123, 123) 1px;
    background-color: var(--g-bg-dark);
    user-select: none;
}

/* 
| -------------------------------------------------- Dropdown State
*/
.dropdown-on {
    transform-origin: top;
    transform: scaleY(1);
    transition: all 300ms ease-in-out;
}

.dropdown-off {
    transform-origin: top;
    transform: scaleY(0);
    transition: all 300ms ease-in-out;
}
</style>
