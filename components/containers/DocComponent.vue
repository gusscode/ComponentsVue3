<script setup>
/**
 * @author Gustavo Fernandez Aguilar
 * @version 1.0.0
 */
import { ref } from "vue";

/**
 * @Props
 */
const props = defineProps({
  /**
   * @property {String} title title of entry component expose
   * @property {String} description description of entry component expose
   */
  title: { type: String, default: "Title" },
  description: { type: String, default: "Description" },
  /**
   * @property {Object} data data of entry component @property {Array} props ; @property {Array} emits defaults void
   */
  data: {type: Object, default:
  {
    props: {type: Array, default: []},
    emits: {type: Array, default: []}
  }}
});

/**
 * @Data
 */



</script>


<template>
  <div class="container mx-auto bg-gray-200 rounded-xl shadow-md border p-8 m-10 g-container-base">
    <h3>{{ title }}</h3>
    <h4>{{ description }}</h4>
    <template v-if="$slots.default">
      <div class="g-container-content mt-5 mb-5">
        <slot></slot>
      </div>
    </template>
    
    <div v-if="data.props.length > 0">
      <h3 class="text-2xl text-gray-600 font-bold mb-5">props:</h3>
      <ul>
        <li class="g-title">
          <p>Name</p>
          <p>Type</p>
          <p>Default</p>
        </li>
        <li v-for="(prop, index) in data.props">
          <p>{{ prop.name }}</p>
          <p>{{ prop.type }}</p>
          <p>{{ prop.default }}</p>
        </li>
      </ul>
    </div>
    

    <div v-if="data.emits.length > 0">
      <h3 class="text-2xl text-gray-600 font-bold mb-5">emits:</h3>
      <ul>
        <li class="g-title">
          <p>Name</p>
          <p>Event</p>
          <p>Return</p>
        </li>
        <li v-for="(emit, index) in data.emits">
          <p>{{ emit.name }}</p>
          <p>{{ emit.event }}</p>
          <p>{{ emit.return }}</p>
        </li>
      </ul>
    </div>

  </div>
</template>

<style scoped>
h3 {
 color: var(--g-text);
}
h4 {
  color: var(--g-text);
}
.mx-auto { margin-right: auto; margin-left: auto; }


.g-container-base {
  /* container mx-auto bg-gray-200 rounded-xl shadow-md border p-8 m-10 */
  
  background-color: var(--g-bg);
  border: solid 1px rgb(98, 98, 98);
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  color: black;
  margin-top: 15px;
  margin-bottom: 15px;

}
li {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr /* repeat(auto-fill, minmax(min(100%, 250px), 1fr)) */;
  gap: 15px;
  background-color: #d6ecff;
  padding: 15px;
}
.g-title {
  width: 100%;
  background-color: white;
  font-weight: 600;
  color: rgb(60, 60, 60);
}
.g-container-content {
  margin-top: 15px;
  margin-bottom: 5px;
  /* width: 100%; */
  background-color: var(--g-bg-darker);
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(97, 97, 97, 0.533) 3px 3px 3px;
}

/* tailwind auxiliar */
.container {
    width: 100%;
}

@media (min-width: 640px) {
    .container {
        max-width: 640px
    }
}
@media (min-width: 768px) {
    .container {
        max-width: 768px
    }
}
@media (min-width: 1024px) {
    .container {
        max-width:1024px
    }
}
@media (min-width: 1280px) {
    .container {
        max-width:1280px
    }
}
</style>
