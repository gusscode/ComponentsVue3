<script setup>
import { onMounted, ref } from 'vue';

function dar (){
    console.log("asdfasdfasdf");
}


const testRef = ref()

onMounted(()=>{
    let clasesArray = ["uno", "dos", "tres", "cuatro"]
    addClassFromArray(testRef.value, clasesArray);
    /* addClass(testRef.value, "uno", "dos", "tres", "cuatro"); */
    console.log(testRef.value.classList);
})


// Tests for add clases, recursion on intance (spread) and array
const addClass = (element, ...clases)=>{
    if(clases.length === 0)return;
    element.classList.add(clases[0]);
    addClass(element, ...clases.slice(1)); // slice count "lenght" instance (spread) clases
}

const addClassFromArray = (element, clases=[])=>{
    if(clases.length === 0)return;
    element.classList.add(clases[0]);
    addClassFromArray(element, clases.slice(1)); // slice count "lenght": 1, array - [0]
}

</script>
<template>
    <div class="test g-pseudo-aura" @click="dar" ref="testRef">
        <div>
            test
        </div>
    </div>
</template>


<style lang="scss" scoped>
.test {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: rgb(33, 63, 131);
    border-radius: 50%;
    padding: 10px;
    box-sizing: border-box;
    color: white;
    
}
</style>