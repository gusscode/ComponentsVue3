import { ref, computed } from 'vue'

/**
 * useInput
 * @type {Composable<(props , emit)>}
 * 
 * @param {*} props instance of definePros from component
 * @param {*} emit instance of defineEmits from component
 * 
 * @returns { > inputRef, placeRef, inputContainer, inputLabel, isContentVoid(), value}
 */
//-----------------------------------------------------------------------------------------------------//
export const useInput = (props, emit) => {
    
    //---------------- Ref Template
    const inputRef = ref(null)
    const placeRef = ref(null)
    const inputContainer = ref(null)
    const inputLabel = ref(null)

    //---------------- Methods
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

