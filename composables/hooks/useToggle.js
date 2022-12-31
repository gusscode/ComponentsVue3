import { ref } from 'vue'

/**
 * useToogle
 * @type {Composable<(props , emit)>}
 * 
 * @param {*} props instance of definePros from component
 * @param {*} emit instance of defineEmits from component
 * 
 * @returns { > state, toggleRef, leverInRef, changeState}
 */
export const useToggle = (props, emit) => {
    //--------------------------------------------------------------- Ref Templates
    const state = ref(props.modelValue); // boolean auxiliar for [changeState(),]
    const toggleRef = ref(null)
    const leverInRef = ref(null)

    //--------------------------------------------------------------- Methods
    // (change state as toggle auxiliar for emit bool state); when Click on component
    const changeState = () => {
        state.value = !state.value;
        emit("update:modelValue", state.value);

        if (state.value === true) return leverInRef.value.classList.add("lever-on-before")
        leverInRef.value.classList.remove("lever-on-before")
    };

    return { state, toggleRef, leverInRef, changeState }
}