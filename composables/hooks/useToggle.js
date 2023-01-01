import { ref, onMounted } from 'vue'

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

export const useToggleDark = (props, emit) => {
    //--------------------------------------------------------------- Ref Templates
    const state = ref(props.modelValue); // boolean auxiliar for [changeState(),]
    const toggleRef = ref(null)
    const leverInRef = ref(null)

    console.log(props.local);
    // SSR condition, access documentElement
    onMounted(() => {

        //if (document.documentElement.classList.contains("dark")) state.value = true;

        // if dark mode existe in LocalStorage add class dark in html element
        if (localStorage.getItem("darkMode")) {
            state.value = true
            document.documentElement.classList.add("dark");
        }
        if (!localStorage.getItem("darkMode")) {
            state.value = false
            document.documentElement.classList.remove("dark");
        }
    })
    //--------------------------------------------------------------- Methods
    // (change state as toggle auxiliar for emit bool state); when Click on component
    const changeState = () => {
        state.value = !state.value;
        emit("update:modelValue", state.value);

        if (state.value) {
            if (props.local) localStorage.setItem("darkMode", true)
            return document.documentElement.classList.add("dark")
        };

        document.documentElement.classList.remove("dark");
        if (props.local) localStorage.removeItem("darkMode")
        /* if (state.value === true) return leverInRef.value.classList.add("lever-on-before")
        leverInRef.value.classList.remove("lever-on-before") */
    };

    return { state, toggleRef, leverInRef, changeState }
}