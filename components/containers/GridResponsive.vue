<script setup>
/** ----------------------------------------------------------
 *  Grid Responsive
 * -----------------------------------------------------------
 * Grid responsive
 * Inner elements are automatically sorted based on maximum width
 * Include:
 * - Custom Background Color
 * - Custom Gap
 * - Custom Padding
 * - Custom max Width
 * @version 1.0.0
 * @author Gustavo Fernandez Aguilar
 */
import { ref, nextTick, computed } from "vue";

/**
 * @property {Number} gap gap from container grid
 * @property {Number} padding padding from container grid
 * @property {String} bgColor background-color default "#d6ecff"
 * @property {Number} maxWidth width max, before add item in row, (Si el ancho del contenedor lo permite se agregara un nuevo item dentro, y si no este tomará todo el tamaño del ancho total)
 */
const props = defineProps({
  gap: { type: Number, default: 10 },
  padding: { type: Number, default: 10 },
  bgColor: { type: String, default: "#d6ecff" },
  maxWidth: { type: Number, default: 350 },
});
</script>
<template>
  <div class="g-container-grid">
    <slot></slot>
  </div>
</template>

<style scoped>
.g-container-grid {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(100%, v-bind(maxWidth + "px")), 1fr)
  );
  gap: v-bind(gap + "px");
  background-color: v-bind(bgColor);
  padding: v-bind(padding + "px");
}
</style>
