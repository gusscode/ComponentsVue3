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
import { buttonProps } from '../../composables/use-field';
import {ref, nextTick, computed} from 'vue'

/** -----------------------------------------------------------------
 * @NextTick                                                       | NextTick Inicial Render
 *  -----------------------------------------------------------------
 */
nextTick(()=>{

})
/** -----------------------------------------------------------------
 * @Props Define                                                   | Props & Emits
 *  -----------------------------------------------------------------
 */
const props = defineProps({ ...buttonProps })
const emit = defineEmits([])
/** -----------------------------------------------------------------
 * @Data                                                           | Data
 *  -----------------------------------------------------------------
 */

/** -----------------------------------------
 * @RefsTemplate elements from template dom
 *  -----------------------------------------
 */

/** ------------------------------------------------------------------
 * @Methods                                                         | Methods
 *  ------------------------------------------------------------------
 */


/** ------------------------------------------------------------------
 * @Watchs                                                          | Watchs
 *  ------------------------------------------------------------------
 */


/** ------------------------------------------------------------------
 * @Verify Props Exists                                             | Verify Props Exists
 *  ------------------------------------------------------------------
 */

</script>
<template>
  <div class="g-btn-container">
    <div class="g-btn">
      <div class="g-label-container">{{ text }}</div>
    </div>
  </div>
</template>

<style scoped>
.g-btn-container {
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
}
.g-btn {
  display: block;
  width: 100px;
  background-color: var(--g-bg);
  padding: 5px;
  border-radius: 5px;
  border: solid 1px var(--g-border-box) ;
}
.g-label-container {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--g-text);
  user-select: none;
}
.g-btn:hover {
  background-color: var(--g-bg-light);
}

</style>
