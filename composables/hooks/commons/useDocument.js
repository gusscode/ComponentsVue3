import { onMounted, onUnmounted } from 'vue'


/**
 * documentClickToFalse
 * @type {Function}
 * @description Atention! Use in onMounted! only, if you click outside the element, boolean = false
 * 
 * @param {*} elementRef ref from Element to clicked out, document
 * @param {*} booleanRef ref from Boolean to false
 * @returns { Boolean } false
 */

export function documentClickToFalse(elementRef, booleanRef) {

    function listenersSelect(event) {
        if (!elementRef.value.contains(event.target)) booleanRef.value = false; 
    }

    document.addEventListener("click", listenersSelect)

    onUnmounted(() => document.removeEventListener("click", listenersSelect))
}




