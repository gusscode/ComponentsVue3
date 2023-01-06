<script setup>
/** --------------------------------------------------------------
 *  Button Simple
 *  --------------------------------------------------------------
 *  Details:
 *  - Simple
 *  - without slot
 * @author Gustavo Fernandez Aguilar
 * @version 1.0.0
 */
// -- Imports --
import { nextTick, computed } from 'vue'
import { buttonProps } from '../../composables/props/index.props';
import { themeColorsProps } from '../../composables/props/themeColorsProps'


nextTick(() => {

})

const props = defineProps({ ...buttonProps, ...themeColorsProps })
const emit = defineEmits([])

const classColorsButton = computed(() => ({
  'g-primary': props.primary,
  'g-secondary': props.secondary,
  'g-success': props.success,
  'g-danger': props.danger,
  'g-warming': props.warming,
  'g-info': props.info,
  'g-light': props.light,
  'g-dark': props.dark
}))


</script>
<template>
  <div class="g-btn-container">
    <div class="g-btn" :class="classColorsButton">
      <div class="g-label-container"><slot></slot></div>
    </div>
  </div>
</template>

<style scoped>

</style>
