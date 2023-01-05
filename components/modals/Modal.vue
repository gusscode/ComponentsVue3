<script setup>
/** ---------------------------------------------------
 *  Modal
 *  ---------------------------------------------------
 *  Whitout input type radio native html
 * @version 1.0.1  --- library
 * @author Gustavo Fernandez Aguilar
 */
import { ref } from 'vue'

const props = defineProps({
    modelValue: { type: Boolean, default: false }
})

const emit = defineEmits(["update:modelValue"])

const state = ref(props.modelValue)

const changeState = () => {
    state.value = false/* !state.value; */
    emit("update:modelValue", state.value);
};

</script>

<template>
    <div v-show="modelValue" class="g-modal-container" tabindex="-1">
        <div class="g-modal-panel" @click="changeState"></div>
        
        <div class="g-modal-box">
            <slot></slot>
        </div>
    </div>
</template>



<style lang="scss" scoped>

</style>