(function(t){function e(e){for(var r,a,i=e[0],u=e[1],s=e[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},c=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/new-tab-vocabulary/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"18c7":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(t,e,n,o,c,a){var i=Object(r["f"])("Word");return Object(r["e"])(),Object(r["b"])(i)}var c={class:"container"},a={class:"title"},i={class:"word"},u=Object(r["c"])(),s={class:"pronunciation"},l={class:"description"},d={class:"subtitle"},p={class:"source"};function f(t,e,n,o,f,b){return Object(r["e"])(),Object(r["b"])("div",c,[Object(r["d"])("h1",a,[Object(r["d"])("span",i,Object(r["g"])(b.word.content),1),u,Object(r["d"])("span",s,Object(r["g"])(b.word.pronunciation),1)]),Object(r["d"])("p",l,[Object(r["d"])("span",null,Object(r["g"])(b.word.definition),1)]),Object(r["d"])("p",d,Object(r["g"])(b.word.subtitle),1),Object(r["d"])("p",p,Object(r["g"])(b.word.source),1)])}n("b64b"),n("d3b7");var b={name:"Word",data:function(){return{words:{"":{pronunciation:"",definition:"",subtitle:"",source:""}}}},computed:{word:function(){var t=Object.keys(this.words),e=t[t.length*Math.random()<<0];return{content:e,pronunciation:this.words[e]["pronunciation"],definition:this.words[e]["definition"],subtitle:this.words[e]["subtitle"],source:this.words[e]["source"]}}},mounted:function(){var t=this,e=(new Date).toLocaleDateString();localStorage.VOCABULARY&&localStorage.VOCABULARY_UPDATEDDATE&&localStorage.VOCABULARY_UPDATEDDATE===e?this.words=JSON.parse(localStorage.VOCABULARY):fetch("https://saved-vocabulary-default-rtdb.firebaseio.com/words.json").then((function(t){return t.json()})).then((function(n){t.words=n,localStorage.VOCABULARY=JSON.stringify(n),localStorage.VOCABULARY_UPDATEDDATE=e,console.log(n)}))}};n("d6ae");b.render=f;var O=b,j={name:"App",components:{Word:O}};j.render=o;var h=j;Object(r["a"])(h).mount("#app")},d6ae:function(t,e,n){"use strict";n("18c7")}});
//# sourceMappingURL=app.bfcce7a7.js.map