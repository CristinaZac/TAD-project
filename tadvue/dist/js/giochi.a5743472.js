(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["giochi"],{"0bc0":function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-container",[e("h2",{staticClass:"mb-5"},[a._v("Giochi")]),e("v-row",[e("v-spacer"),e("v-col",[e("div",[e("v-card",{staticClass:"mx-auto, justify-center",style:a.borderObj,attrs:{outlined:"",shaped:"",width:"250",height:"230"}},[e("v-card-title",{attrs:{"aria-label":"Quiz sui colori",tabindex:"0"}},[a._v(" Color Quiz "),e("v-icon",{staticClass:"ml-3",attrs:{color:"black"}},[a._v("mdi-palette")])],1),e("v-card-text",{attrs:{tabindex:"0","aria-label":"Istruzioni: Selezionare la risposta che corrisponde all'immagine"}},[e("h4",[a._v("Istruzioni:")]),a._v(" Selezionare la risposta che corrisponde all'immagine. ")]),e("v-spacer"),e("v-btn",{attrs:{color:"deep-purple",dark:"",to:"/learn",role:"button"}},[a._v(" Gioca ")]),e("v-spacer")],1)],1),e("div",[e("v-card",{staticClass:"mx-auto, justify-center mt-10",style:a.borderObj,attrs:{outlined:"",shaped:"",width:"250",height:"230"}},[e("v-card-title",{attrs:{"aria-label":"Memory con le azioni",tabindex:"0"}},[a._v(" Action Memory "),e("v-icon",{staticClass:"ml-3",attrs:{color:"black"}},[a._v("mdi-human-greeting-proximity")])],1),e("v-card-text",{staticClass:"mb-2",attrs:{tabindex:"0","aria-label":"Istruzioni: accoppiare le immagini uguali.\n      Se si gioca tramite screen reader, per selezionare l'immagine premere invio e poi procedere con la seconda."}},[e("h4",[a._v("Istruzioni:")]),a._v(" Accoppiare le immagini uguali. ")]),e("v-spacer"),e("v-btn",{attrs:{color:"deep-purple",dark:"",to:"/pregameaction",role:"button"}},[a._v(" Gioca ")]),e("v-spacer")],1)],1)]),e("v-col",[e("div",[e("v-card",{style:a.borderObj,attrs:{outlined:"",shaped:"",width:"250",height:"230"}},[e("v-card-title",{attrs:{"aria-label":"Quiz sul cibo",tabindex:"0"}},[a._v(" Food Quiz "),e("v-icon",{staticClass:"ml-3",attrs:{color:"black"}},[a._v("mdi-food")])],1),e("v-card-text",{staticClass:"mb-2",attrs:{tabindex:"0","aria-label":"Istruzioni: Selezionare la risposta che corrisponde all'immagine"}},[e("h4",[a._v("Istruzioni:")]),a._v(" Selezionare la risposta che corrisponde all'immagine. ")]),e("v-spacer"),e("v-btn",{attrs:{color:"deep-purple",dark:"",to:"/foodquiz",role:"button"}},[a._v(" Gioca ")]),e("v-spacer")],1)],1),e("div",[e("v-card",{staticClass:"mx-auto, justify-center mt-10",style:a.borderObj,attrs:{outlined:"",shaped:"",width:"250",height:"230"}},[e("v-card-title",{attrs:{"aria-label":"memory con gli animali",tabindex:"0"}},[a._v(" Animal Memory "),e("v-icon",{staticClass:"ml-3",attrs:{color:"black"}},[a._v("mdi-dog")])],1),e("v-card-text",{staticClass:"mb-2",attrs:{tabindex:"0","aria-label":"Istruzioni: accoppiare le immagini uguali.\n      Se si gioca tramite screen reader, per selezionare l'immagine premere invio e poi procedere con la seconda."}},[e("h4",[a._v("Istruzioni:")]),a._v(" Accoppiare le immagini uguali. ")]),e("v-spacer"),e("v-btn",{staticClass:"mt-3",attrs:{color:"deep-purple",dark:"",to:"/pregame",role:"button"}},[a._v(" Gioca ")]),e("v-spacer")],1)],1)]),e("v-spacer")],1)],1)},i=[],o={name:"Giochi",data:function(){return{borderObj:{border:"2px solid black"}}}},s=o,n=e("2877"),c=e("6544"),l=e.n(c),d=e("8336"),p=e("b0af"),v=e("99d9"),u=e("62ad"),m=e("a523"),b=e("132d"),f=e("0fd9"),g=e("2fa4"),h=Object(n["a"])(s,r,i,!1,null,"f2255408",null);t["default"]=h.exports;l()(h,{VBtn:d["a"],VCard:p["a"],VCardText:v["b"],VCardTitle:v["c"],VCol:u["a"],VContainer:m["a"],VIcon:b["a"],VRow:f["a"],VSpacer:g["a"]})},a523:function(a,t,e){"use strict";e("4de4"),e("b64b"),e("2ca0"),e("99af"),e("20f6"),e("4b85"),e("498a"),e("a15b");var r=e("2b0e");function i(a){return r["a"].extend({name:"v-".concat(a),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,i=e.data,o=e.children;i.staticClass="".concat(a," ").concat(i.staticClass||"").trim();var s=i.attrs;if(s){i.attrs={};var n=Object.keys(s).filter((function(a){if("slot"===a)return!1;var t=s[a];return a.startsWith("data-")?(i.attrs[a]=t,!1):t||"string"===typeof t}));n.length&&(i.staticClass+=" ".concat(n.join(" ")))}return r.id&&(i.domProps=i.domProps||{},i.domProps.id=r.id),t(r.tag,i,o)}})}var o=e("d9f7");t["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(a,t){var e,r=t.props,i=t.data,s=t.children,n=i.attrs;return n&&(i.attrs={},e=Object.keys(n).filter((function(a){if("slot"===a)return!1;var t=n[a];return a.startsWith("data-")?(i.attrs[a]=t,!1):t||"string"===typeof t}))),r.id&&(i.domProps=i.domProps||{},i.domProps.id=r.id),a(r.tag,Object(o["a"])(i,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(e||[])}),s)}})}}]);
//# sourceMappingURL=giochi.a5743472.js.map