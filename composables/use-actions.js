//  !Not support composables origin {ref, defineProps, defineEmits} from 'vue' on Vuepress 2
// Yes support render on ref, defineProps $ defineEmits are not working how vue 2 or setup initial 
/**
 * @property {type} modelValue ref to v-model, props of the component
 * @property { defineEmits() } emit ref to emit instance of the component
 */

// Imports
import { ref } from 'vue'

// -------------------------------------------------------------- Use Radio
/**
 * useRadio
 * @type {Composable<(props , emit)>}
 * 
 * 
 * @param {*} props instance of definePros from component
 * @param {*} emit instance of defineEmits from component
 * 
 * @returns { > labelRef, containerRef, radioRef, selectValue()}
 * 
 * 
 */
export const useRadio = (props, emit) => {
    // refs template
    const labelRef = ref(null);
    const containerRef = ref(null)
    const radioRef = ref(null);
    // -------------------------------------------- Methods
    // Select value and emit update v-model instance
    /**
     * @function selectValue() 
     */
    const selectValue = () => {
        emit("update:modelValue", props.val);
    }

    return { labelRef, containerRef, radioRef, selectValue }
}

/**
 * useCheck
 * @type {Composable<(props , emit)>}
 * 
 * 
 * @param {*} props instance of definePros from component
 * @param {*} emit instance of defineEmits from component
 * 
 * @returns { > labelRef, checkRef, containerRef, existValueProp, selectValue()}
 * 
 */
export const useCheck = (props, emit) => {
    const existValueProp = ref(props.modelValue.includes(props.val))


    const labelRef = ref()
    const checkRef = ref(null)
    const containerRef = ref(null)
    //
    /**----------------------------------------------------------
     * @Methods                                                | Methods
     * ----------------------------------------------------------
     */
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
    return {labelRef, checkRef, containerRef, existValueProp, selectValue}
}