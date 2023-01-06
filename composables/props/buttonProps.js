/**
 * check Props
 * @type {Object}
 * @property {String, Number, null} modelValue v-model reference
 * @ Principal Props ---------------
 * @property {Boolean} dense Dense Button, Default false
 * @property {Boolean} outline outline Button, Default false
 * @property {Boolean} rounded rounded Button, Default false
 * @property {String} size Size in format css definition px, rm, etc...
 * @property {String} color Color in format css definition hexa rgb or primary, secondary, etc...
 * @property {String} textColor Color of text, in format CSS hexa rgb etc...
 * 
 */
export const buttonProps = {
  /**
   * @property {String, null} label 
   */
  text: { type: [String, null], default: null },
  label: { type: [String, null], default: null },

  dense: { type: Boolean, default: false },
  outline: { type: Boolean, default: false },
  rounded: { type: Boolean, default: false },

  size: { type: String, default: "20px" },
  color: { type: String, default: "primary" },
  textColor: { type: String, default: "white" },

  
}