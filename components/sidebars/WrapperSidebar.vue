<script setup>
/** --------------------------------------------------------------
 *  Wrapper Sidebar
 *  --------------------------------------------------------------
 *  Details:
 * @author Gustavo Fernandez Aguilar
 * @version 1.0.1
 */
import { onMounted,ref, onUnmounted } from 'vue'


onMounted(()=>{
    document.addEventListener("click", listenersSelect);
})
//-------- Methods
onUnmounted(() => {
    document.removeEventListener("click", listenersSelect);
})
function listenersSelect(event) {
    if (!wrapperButtonBoxRef.value.contains(event.target)) { 
        isActive.value = false; 
        wrapperButtonBoxRef.value.classList.remove('g-wrapper-button-box-on')
    }
}

//-------- Variables
const isActive = ref(false)

//-------- Template Refs
const wrapperButtonBoxRef = ref(null);
const wrapperSidebarRef = ref(null)

const sidebarToggle = () => {
    isActive.value = !isActive.value
    wrapperButtonBoxRef.value.classList.toggle('g-wrapper-button-box-on')
}

</script>

<template>
    <div class="g-wrapper-button-container">
        <div class="g-wrapper-button-box" ref="wrapperButtonBoxRef" @click="sidebarToggle">
            <div class="g-wrapper-button-inside-el"></div>
            <div class="g-wrapper-button-inside-el"></div>
            <div class="g-wrapper-button-inside-el"></div>
        </div>
    </div>
    <div :class="isActive ? 'g-wrapper-sidebar-container g-wrapper-sidebar-container-on': 'g-wrapper-sidebar-container'" ref="wrapperSidebarRef">
            <div class="g-wrapper-sidebar-box" >
                
                <slot></slot>
            </div>
        </div>

</template>
<style lang="scss" scoped>

</style>