<script setup>
/** --------------------------------------------------------------
 *  Wrapper Sidebar
 *  --------------------------------------------------------------
 *  Details:
 * @author Gustavo Fernandez Aguilar
 * @version 1.0.1
 */
import { onMounted,ref, onUnmounted, computed } from 'vue'
//import {documentClickToFalse} from "../../composables/hooks/commons/useDocument"

const props = defineProps({
    size: {type: Number, default: 40}  
})


onMounted(()=>{
    document.addEventListener("click", listenersSelect);
    wrapperButtonContainerRef.value.style.width = props.size + "px";
    wrapperButtonContainerRef.value.style.height = props.size + "px";
    //documentClickToFalse2(isActive.value, 'g-wrapper-button-box-on', wrapperButtonBoxRef.value, wrapperSidebarRef.value)

    //documentClickToFalse(wrapperButtonBoxRef.value, isActive.value)
})
onUnmounted(() => {
    document.removeEventListener("click", listenersSelect);
})
//-------- Methods
function listenersSelect(event) {
    if (!wrapperButtonBoxRef.value.contains(event.target) && !wrapperSidebarRef.value.contains(event.target) ) { 
        isActive.value = false; 
        wrapperButtonBoxRef.value.classList.remove('g-wrapper-button-box-on')
    }
}

//-------- Computeds
const sidebarClass = computed(()=>({
    'g-wrapper-sidebar-container': true,
    'g-wrapper-sidebar-container-on': isActive.value
}))
//-------- Variables
const isActive = ref(false)

//-------- Template Refs
const wrapperButtonBoxRef = ref(null);
const wrapperSidebarRef = ref(null)

const sidebarToggle = () => {
    isActive.value = !isActive.value
    wrapperButtonBoxRef.value.classList.toggle('g-wrapper-button-box-on')
}


const wrapperButtonContainerRef = ref(null)






</script>

<template>
    <div class="g-wrapper-button-container" ref="wrapperButtonContainerRef">
        <div class="g-wrapper-button-box" ref="wrapperButtonBoxRef" @click="sidebarToggle">
            <div class="g-wrapper-button-inside-el"></div>
            <div class="g-wrapper-button-inside-el"></div>
            <div class="g-wrapper-button-inside-el"></div>
        </div>
    </div>
    <!-- <div :class="isActive ? 'g-wrapper-sidebar-container g-wrapper-sidebar-container-on': 'g-wrapper-sidebar-container'" ref="wrapperSidebarRef"> -->
        <div :class="sidebarClass" ref="wrapperSidebarRef">
            <div class="g-wrapper-sidebar-box" >
                
                <slot></slot>
            </div>
        </div>

</template>
<style lang="scss" scoped>

</style>