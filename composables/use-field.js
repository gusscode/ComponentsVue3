export const buttonProps = {
  /**
   * @property {String, null} label 
   */
  text: {type: [String, null], default: null},
  label: {type: [String, null], default: null},
  /**
   * @property {Boolean} dense Dense Button, Default false
   * @property {Boolean} outline outline Button, Default false
   * @property {Boolean} rounded rounded Button, Default false
   */
  dense: {type: Boolean, default: false},
  outline: {type: Boolean, default: false},
  rounded: {type: Boolean, default: false},
  /**
   * @property {String} size Size in format css definition px, rm, etc...
   * @property {String} color Color in format css definition hexa rgb or primary, secondary, etc...
   * @property {String} textColor Color of text, in format CSS hexa rgb etc...
   */
  size: {type: String, default: "20px"},
  color: {type: String, default: "primary"},
  textColor: {type: String, default: "white"},
}

export const inputProps = {
  /**------------------ v-model instance ---------------------------
   * @property {String, null} modelValue v-model reference
   */
  modelValue: [String, null],
}

export const inputEmits = [
  /**------------------ v-model instance ---------------------------
   * @property {String, null} modelValue v-model reference
   */
  "update:modelValue"
]

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


/**
 * check Props
 * @type {Object}
 * @property {String, Number, null} modelValue v-model reference
 * @ Principal Props --------------- 
 * @property {String, Number, null} val
 * @property {String} label 
 * @ Colors Lever Poperty -------------
 * @property {String} colorTrue lever in true color optional, default green
 * @property {String} colorFalse lever in false color optional, default gray #EFECEA
 * @ ...
 * @property {Number} width personalization whidth: base toggle
 * @param {Boolean} verticalMode if True: change to vertical mode, default false
 * @property {Number} leverRadOn lever in ON, size proportion
 * @property {Number} leverRadOff lever in OFF, size proportion
 */
export const checkProps = {
  modelValue: [String, Number, Array, null],
  //  Principal Props ---------------------------------------------  
  val: {type: [String, Number, null], default: null},
  label: {type: [String, null], default: null},

  //  Colors Lever Poperty --------------------------------------------- 
  colorTrue: { type: String, default: "green" },
  colorFalse: { type: String,default: "#EFECEA" },

  // ...
  width: { type: Number, default: 35 },
 
  leverRadOn: { type: Number, default: 1.5},
  leverRadOff: { type: Number, default: 1},
  verticalMode: { type: Boolean, default: false}
}


export const toggleProps = {
    /**
   * @property {Boolean} modelValue v-model reference
   */
  modelValue: Boolean,

  

  /** ------------ Colors Lever Poperty --------------------------------------------- 
   * @property {String} colorTrue lever in true color optional, default green
   * @property {String} colorFalse lever in false color optional, default gray #EFECEA
   */
  colorTrue: { type: String, default: "green" },
  colorFalse: { type: String,default: "#EFECEA" },

  /** 
   * @property {Number} width personalization whidth: base toggle
   */
  width: { type: Number, default: 35 },
  /**
   * 
   */

  leverRadOn: { type: Number, default: 1.5},
  leverRadOff: { type: Number, default: 1},

  /**
   * @param {Boolean} verticalMode if True: change to vertical mode, default false
   */

  verticalMode: { type: Boolean, default: false}
}
/**
 * @property {Array} toggleEmits array 
 */
export const toggleEmits = [
    /**
   * v-model define, update state emit action
   * @property {v-model as modelValue} update use emit in [changeState(), ]
   */
  'update:modelValue',
]

const paletaDeColores = {
  primary: "",
  secondary: "",
  succes: "",
  danger: "",
  warming: "",
  info: "",
  light: "",
  dark: ""
}