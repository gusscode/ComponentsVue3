<script setup>
/** --------------------------------------------------------------
 *  Button Lazy on Viewer
 *  --------------------------------------------------------------
 *  Details:
 * @author Gustavo Fernandez Aguilar
 * @version 1.0.0
 */
// -- Imports --


/** -----------------------------------------------------------------
 * @Props Define                                                   | Props
 *  -----------------------------------------------------------------
 */
const props = defineProps({
    val:{type: String},
    modelValue: {type:[String, null, Array]}
    
})

/** -----------------------------------------------------------------
 * @Emits Define                                                   | Emits
 *  -----------------------------------------------------------------
 */
const emit = defineEmits([ "update:modelValue" ])

/** ------------------------------------------------------------------
 * @Methods                                                         | Methods
 *  ------------------------------------------------------------------
 */
 const selectValue = () => {
    emit("update:modelValue", props.val);
}

</script>
<template>
  <div :class="modelValue === val ? 'g-container-button g-container-button-on' : 'g-container-button '">
    <!-- <button @click="selectValue">{{ val }}</button> -->
    <div :class="modelValue === val ? 'g-button g-button-on' : 'g-button'" @click="selectValue">
        <slot>{{ val }}</slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.g-container-button {
    width: 240px;
     margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2px;
    padding-bottom: 4px;
    padding-left: 3px;
    padding-right: 3px;
    background-color: var(--g-border-box);
    border-radius: 12px;
}
.g-button {
    user-select: none;
    /* margin-top: 10px;
    margin-bottom: 10px; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    background-color: var(--g-bg-light);
    padding: 5px;

    /* outline: solid 1px var(--g-border-box);  */
    border-radius: 10px;
    
    /* transition: outline 200ms ease-in-out; */
}
.g-button-on {
    /* outline: solid 2px green;  */
    background-color: var(--g-bg-dark);
    /* transition: all 200ms ease-in-out; */
    
}
.g-container-button-on{
    background-color: var(--g-border-select);
}
</style>