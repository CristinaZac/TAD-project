(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MemoryGame"],{"016a":function(a,e,t){a.exports=t.p+"img/to dance.045398fe.png"},"24bf":function(a,e,t){"use strict";t.r(e);var i=function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",[i("h2",{staticClass:"mb-5",attrs:{"aria-label":"action memory game"}},[a._v("Actions Memory Game")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 col-lg-6 col-xl-5 mx-auto"},[i("div",{staticClass:"row justify-content-md-center"},a._l(a.memoryCards,(function(e){return i("div",{key:e.italian,staticClass:"col-auto mb-3 flip-container",class:{flipped:e.isFlipped,matched:e.isMatched},on:{click:function(t){return a.flipCard(e)},keydown:function(t){return!t.type.indexOf("key")&&a._k(t.keyCode,"enter",13,t.key,"Enter")?null:a.flipCard(e)}}},[i("div",{staticClass:"memorycard"},[i("div",{staticClass:"front border rounded shadow"},[i("img",{attrs:{width:"130",height:"150",src:t("e66f")}})]),i("div",{staticClass:"back rounded border"},[i("img",{attrs:{width:"130",height:"150",src:e.image,alt:e.alt,tabindex:"0"}}),i("div",[a._v(a._s(e.english))])]),i("div",{staticClass:"back rounded border"})])])})),0)])]),i("v-row",{attrs:{justify:"center"}},[i("v-btn",{staticClass:"mb-10",attrs:{role:"button",dark:"",color:"deep-purple",onClick:"window.location.reload()","aria-label":"gioca ancora"}},[a._v(" Restart ")])],1)],1)},n=[],s=(t("159b"),t("99af"),t("2b0e")),o=t("2ef0"),l=t.n(o),r={name:"MemoryGame",data:function(){return{finish:!1,memoryCards:[],flippedCards:[],cards:[{image:t("671e"),english:"to give high five",italian:"battere il cinque",alt:"due persone che si danno il cinque, two people giving high five"},{image:t("d42a"),english:"to listen to music",italian:"ascoltare la musica",alt:"una persona che ascolta la musica, a person listening to music"},{image:t("9b57"),english:"to study",italian:"studiare",alt:"una persona che studia, a person studying"},{image:t("c634"),english:"to clap",italian:"applaudire",alt:"una persona che applaude, a person clapping"},{image:t("016a"),english:"to dance",italian:"ballare",alt:"una persona che balla, a person dancing"},{image:t("2c31"),english:"to infect",italian:"infettare",alt:"infettare qualcuno, to infect somebody"},{image:t("3a01"),english:"to play basketball",italian:"giocare a basket",alt:"due persone giocano a basket, two people playing basketball"},{image:t("7293"),english:"to talk",italian:"parlare",alt:"due persone che parlano, two people talking"}]}},created:function(){this.cards.forEach((function(a){s["a"].set(a,"isFlipped",!1),s["a"].set(a,"isMatched",!1)})),this.memoryCards=l.a.shuffle(this.memoryCards.concat(l.a.cloneDeep(this.cards),l.a.cloneDeep(this.cards)))},methods:{flipCard:function(a){a.isMatched||a.isFlipped||2===this.flippedCards.length||(a.isFlipped=!0,this.flippedCards.length<2&&this.flippedCards.push(a),2===this.flippedCards.length&&this._match(a))},_match:function(){var a=this;this.flippedCards[0].english===this.flippedCards[1].english?setTimeout((function(){a.flippedCards.forEach((function(a){return a.isMatched=!0})),a.flippedCards=[],a.memoryCards.every((function(a){return!0===a.isMatched}))&&(a.finish=!0)}),400):setTimeout((function(){a.flippedCards.forEach((function(a){a.isFlipped=!1})),a.flippedCards=[]}),800)}}},c=r,d=(t("d43d"),t("2877")),p=t("6544"),u=t.n(p),f=t("8336"),h=t("0fd9"),g=Object(d["a"])(c,i,n,!1,null,"7648119e",null);e["default"]=g.exports;u()(g,{VBtn:f["a"],VRow:h["a"]})},"2c31":function(a,e,t){a.exports=t.p+"img/to infect.c141add1.png"},"3a01":function(a,e,t){a.exports=t.p+"img/to play basketball.35ae4f65.png"},"671e":function(a,e,t){a.exports=t.p+"img/high five.52d0864f.png"},7293:function(a,e,t){a.exports=t.p+"img/to talk.76837050.png"},"90ab":function(a,e,t){},"9b57":function(a,e,t){a.exports=t.p+"img/study.58f3f4c9.png"},c634:function(a,e,t){a.exports=t.p+"img/to applaud.8adbc9e3.png"},d42a:function(a,e,t){a.exports=t.p+"img/listen to music.8e0f4077.png"},d43d:function(a,e,t){"use strict";t("90ab")}}]);
//# sourceMappingURL=MemoryGame.ca99927c.js.map