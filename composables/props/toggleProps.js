



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