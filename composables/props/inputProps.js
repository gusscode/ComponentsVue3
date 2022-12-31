/**
 * Input Props
 * @type {Object}
 * @property {String, Number, null} modelValue v-model reference
 * @property {String} place Placeholder prop
 * @property {String, null} label
 * @property {Boolean} outline default false
 */
//------------------------------------------------------------------------ Input Props
export const inputProps = {
    /**------------------ v-model instance ---------------------------
     * @property {String, null} modelValue v-model reference
     */
    modelValue: [String, null],
    place: {type: [String, null], default: null},
    label: {type: [String, null], default: null},
    outline: {type: Boolean, default: false},
  }