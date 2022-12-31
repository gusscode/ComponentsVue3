import { ref } from 'vue'

/**
 * useCheck
 * @type {Composable<(props , emit)>}
 * 
 * @param {*} props instance of definePros from component
 * @param {*} emit instance of defineEmits from component
 * 
 * @returns { > labelRef, checkRef, containerRef, existValueProp, selectValue()}
 */
//-------------------------------------------------------------------------------- useCheck
export const useCheck = (props, emit) => {

    //--------------------------- Data
    const existValueProp = ref(props.modelValue.includes(props.val))

    //--------------------------- Ref Template
    const labelRef = ref()
    const checkRef = ref(null)
    const containerRef = ref(null)
    
    //--------------------------- Methods
    const selectValue = () => {

        let arrayValue = props.modelValue
        // if esxist value from props.val slice, emit & return 
        if (arrayValue.includes(props.val)) {

            arrayValue.splice(arrayValue.indexOf(props.val), 1);
            emit("update:modelValue", arrayValue);
            existValueProp.value = false;
            return
        }
        // else push to auxiliar before to emit
        arrayValue.push(props.val)
        emit("update:modelValue", arrayValue);
        existValueProp.value = true //props.modelValue.includes(props.val)
    }
    return { labelRef, checkRef, containerRef, existValueProp, selectValue }
}