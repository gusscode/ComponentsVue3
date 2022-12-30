//  !Not support composables origin {ref, defineProps, defineEmits} from 'vue' on Vuepress 2
// Yes support render on ref, defineProps $ defineEmits are not working how vue 2 or setup initial 
/**
 * @property {type} modelValue ref to v-model, props of the component
 * @property { defineEmits() } emit ref to emit instance of the component
 */

// Imports
import { ref, computed } from 'vue'

// -------------------------------------------------------------- Use Radio
/**
 * useRadio
 * @type {Composable<(props , emit)>}
 * 
 * @param {*} props instance of definePros from component
 * @param {*} emit instance of defineEmits from component
 * 
 * @returns { > labelRef, containerRef, radioRef, selectValue()}
 */
export const useRadio = (props, emit) => {
    // refs template
    const labelRef = ref(null);
    const containerRef = ref(null)
    const radioRef = ref(null);
    // -------------------------------------------- Methods
    // Select value and emit update v-model instance
    const selectValue = () => emit("update:modelValue", props.val);

    return { labelRef, containerRef, radioRef, selectValue }
}

/**
 * useCheck
 * @type {Composable<(props , emit)>}
 * 
 * @param {*} props instance of definePros from component
 * @param {*} emit instance of defineEmits from component
 * 
 * @returns { > labelRef, checkRef, containerRef, existValueProp, selectValue()}
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
    return { labelRef, checkRef, containerRef, existValueProp, selectValue }
}

/**
 * useInput
 * @type {Composable<(props , emit)>}
 * 
 * @param {*} props instance of definePros from component
 * @param {*} emit instance of defineEmits from component
 * 
 * @returns { > inputRef, placeRef, inputContainer, inputLabel, isContentVoid(), value}
 */
export const useInput = (props, emit) => {
    /** -----------------------------------------
     * @RefsTemplate elements from template dom
     *  -----------------------------------------
     */
    const inputRef = ref(null)
    const placeRef = ref(null)
    const inputContainer = ref(null)
    const inputLabel = ref(null)

    /** ------------------------------------------------------------------
     * @Methods                                                         | Methods
     *  ------------------------------------------------------------------
     */
    const isContentVoid = (e) => {
        if (!placeRef.value) return;
        if (e.target.value.length > 0) return placeRef.value.classList.add("g-input-active");
        if (document.activeElement === inputRef.value) return;
        placeRef.value.classList.remove("g-input-active")
    }

    // Update modelValue
    const value = computed({
        get() { return props.modelValue },
        set(value) { emit("update:modelValue", value) },
    })

    return { inputRef, placeRef, inputContainer, inputLabel, isContentVoid, value}
}

