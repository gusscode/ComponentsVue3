/**
 * Input Props
 * @type {Object}
 * @property {String, Number, null} modelValue v-model reference
 * @property {String} place Placeholder prop
 * @property {String, null} label
 * @property {Boolean} outline default false
 * 
 * @property {Boolean} text default false
 * @property {Boolean} email default false
 * @property {Boolean} password default false
 * 
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
    //--------------------------
    text: {type: Boolean, default: false},
    email: {type: Boolean, default: false},
    password: {type: Boolean, default: false},
  }