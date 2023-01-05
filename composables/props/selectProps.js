/**
 * check Props
 * @type {Object}
 * @property {String, Number, null} modelValue v-model reference
 * @ Principal Props --------------- 
 * @property {String, Number, null} val
 * @property {String} label 
 * @property {Array} options strins Array
 * @ Colors Lever Poperty -------------
 */





//--------------------------------------------------------------------- Select Props
export const selectProps = {
    /**------------------ v-model instance ---------------------------
     * @property {String, Number, null} modelValue v-model reference
     */
    modelValue: [String, Number, null],
  
    /**
     * @property {String, null} label 
     * @property {Array} options default [], 
     */
    label: {type: [String, null], default: null},
    options: {type: Array, default: () => []}
  }