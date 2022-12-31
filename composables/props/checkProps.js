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
 * @property {Boolean} verticalMode if True: change to vertical mode, default false
 * @property {Number} leverRadOn lever in ON, size proportion
 * @property {Number} leverRadOff lever in OFF, size proportion
 */
//---------------------------------------------------------------------------------- Check Props
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