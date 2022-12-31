import {ref, nextTick} from "vue"


/**
 * useToogle
 * @type {Composable<(props , emit)>}
 * 
 * @param {*} props instance of definePros from component
 * @param {*} emit instance of defineEmits from component
 * 
 * @returns { > dropdownState, gSelectHeaderRef, itemDropdownRef, textHeaderRef, dropdownRef, selectValue, changeDropdownState}
 */
export const useSelect = (props, emit) => {
    //------------------------------------------------------------ Data
    const dropdownState = ref(false);

    //------------------------------------------------------------ Ref Templates
    const gSelectHeaderRef = ref(null);
    const itemDropdownRef = ref(null);
    const textHeaderRef = ref(null)
    const dropdownRef = ref(null)

    //------------------------------------------------------------- Methods
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


    return { dropdownState, gSelectHeaderRef, itemDropdownRef, textHeaderRef, dropdownRef, selectValue, changeDropdownState }
}