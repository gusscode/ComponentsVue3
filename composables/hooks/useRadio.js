import { ref } from 'vue'

/**
 * useRadio
 * @type {Composable<(props , emit)>}
 * 
 * @param {*} props instance of definePros from component
 * @param {*} emit instance of defineEmits from component
 * 
 * @returns { > labelRef, containerRef, radioRef, selectValue()}
 */
//---------------------------------------------------------------- Use Radio
export const useRadio = (props, emit) => {
    //--------------------------------------------- refs template
    const labelRef = ref(null);
    const containerRef = ref(null)
    const radioRef = ref(null);
    const radioInsideRef = ref(null)
    // -------------------------------------------- Methods
    // Select value and emit update v-model instance
    const selectValue = () => emit("update:modelValue", props.val);

    return { labelRef, radioInsideRef, containerRef, radioRef, selectValue }
}