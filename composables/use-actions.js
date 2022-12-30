//  Not support composables origin {ref, defineProps, defineEmits} from 'vue' on Vuepress 2


/**
 * @property {type} modelValue ref to v-model, props of the component
 * @property { defineEmits() } emit ref to emit instance of the component
 */

// Imports
/* import { ref, defineEmits, defineProps } from 'vue' */

import { checkProps, toggleEmits } from '../composables/use-field'

export const useRadio1 = {
    selectValue: (emit) => {

    }
}

export const useRadio = (/* ref, defineEmits, defineProps */) => {
    /** ------------------------------------------------------------------------------------------
 *  @Props Define                                                                           | Props
 *  ------------------------------------------------------------------------------------------
 */
    const props = defineProps({ ...checkProps })

    /** ------------------------------------------------------------------------------------------
     *  @Emits Define                                                                           | Emits
     *  ------------------------------------------------------------------------------------------
     */
    const emit = defineEmits([...toggleEmits])

    /**--------------------------------------------------------------------------------------------
     * @Data                                                                                    | Data
     * --------------------------------------------------------------------------------------------
     */

    const labelRef = ref(null);
    const containerRef = ref(null)
    const radioRef = ref(null)
    //
    /**--------------------------------------------------------------------------------------------
     * @Methods                                                                                 | Methods
     * --------------------------------------------------------------------------------------------
     */
    // Select value and emit update v-model instance
    const selectValue = () => {
        emit("update:modelValue", props.val);
    }

    // Return
    return {
        emit, props, labelRef, containerRef, radioRef, selectValue
    }
}