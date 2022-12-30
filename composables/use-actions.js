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
 * @type {Composable<(props, emit)>}
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
    // ---------------------------------------------------------- Methods
    // Select value and emit update v-model instance
    /**
     * @function selectValue() 
     */
    const selectValue = () => {
        emit("update:modelValue", props.val);
    }

    return { labelRef, containerRef, radioRef, selectValue }
}

