(function(t){function e(e){for(var s,o,u=e[0],a=e[1],c=e[2],l=0,p=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,u=1;u<n.length;u++){var a=n[u];0!==i[a]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},i={app:0},r=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var d=a;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"031a":function(t,e,n){},"034f":function(t,e,n){"use strict";var s=n("85ec"),i=n.n(s);i.a},"254c":function(t,e,n){"use strict";var s=n("031a"),i=n.n(s);i.a},"2dce":function(t,e,n){"use strict";var s=n("34a8"),i=n.n(s);i.a},"34a8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("Main")],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"header"}},[s("h1",[t._v("OptimizeSuggest")]),s("img",{attrs:{src:n("e81e"),alt:"logo"}})])}],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"questionsMain"},[n("h1",[t._v(t._s(this.title))]),""===this.answers?n("Questions",{attrs:{questions:this.questions},on:{"show-results":t.showResults}}):t._e(),""!==this.answers?n("Result",{attrs:{answers:this.answers,questionTags:this.questionTags,suggestedProducts:this.suggestedProducts}}):t._e()],1)},u=[],a=(n("d81d"),n("96cf"),n("1da1")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"questionsArea"},[n("div",{staticClass:"questionsText"},[t._v(" "+t._s(t.QuestionText)+" ")]),n("div",{staticClass:"questionsOptions"},t._l(this.QuestionOptions,(function(e){return n("div",{key:e.id},[n("QuestionsBtn",{attrs:{btnText:e.text,btnId:e.id},on:{"next-question":t.nextQuestion}})],1)})),0)])},d=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"questionsBtn",attrs:{id:t.btnId},on:{click:t.handleClick}},[t._v(t._s(t.btnText))])},p=[],h=(n("a9e3"),{name:"QuestionsBtn",props:{btnText:String,btnId:Number},methods:{handleClick:function(){this.$emit("next-question",{buttonText:this.btnText,buttonId:this.btnId})}}}),f=h,g=(n("aaab"),n("2877")),A=Object(g["a"])(f,l,p,!1,null,"f0447360",null),x=A.exports,v={name:"Questions",components:{QuestionsBtn:x},props:{questions:Array},data:function(){return{currentQuestion:0,Title:"Answer these questions to get started",QuestionText:"",QuestionOptions:[],answers:[]}},methods:{nextQuestion:function(t){this.currentQuestion<this.questions.length-1?(this.answers.push({answerText:t.buttonText,questionTag:this.questions[this.currentQuestion].questionsTag,answerId:t.buttonId}),this.currentQuestion=this.currentQuestion+1,this.QuestionText=this.questions[this.currentQuestion].questionText,this.QuestionOptions=this.questions[this.currentQuestion].questionOptions):(this.answers.push({answerText:t.buttonText,questionTag:this.questions[this.currentQuestion].questionsTag,answerId:t.buttonId}),this.$emit("show-results",this.answers))}},mounted:function(){this.QuestionText=this.questions[0].questionText,this.QuestionOptions=this.questions[0].questionOptions}},q=v,b=(n("dea6"),Object(g["a"])(q,c,d,!1,null,"21228b9d",null)),m=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("You answered")]),n("div",{staticClass:"answers"},t._l(t.answers,(function(e,s){return n("p",{key:e},[n("strong",[t._v(t._s(t.questionTags[s])+":")]),t._v(" "+t._s(e)+" ")])})),0),n("h2",[t._v("Suggested products")]),t._l(t.suggestedProducts,(function(e,s){return n("p",{key:e.name},[t._v(" #"+t._s(s+1)+": "+t._s(e.name)+" with a confidence of "+t._s(e.certainty)+" % ")])}))],2)},y=[],T={props:{answers:Array,questionTags:Array,suggestedProducts:Array}},O=T,k=(n("2dce"),Object(g["a"])(O,w,y,!1,null,"28d313cc",null)),B=k.exports,Q=n("bc3a"),C=n.n(Q),_=n("6e63"),z={name:"Main",components:{Questions:m,Result:B},data:function(){return{questions:[],title:"Answer these questions to get started",answers:"",questionTags:"",suggestedProducts:[]}},created:function(){this.questions=_},methods:{showResults:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n,s,i,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.map((function(t){return t.questionTag})),s=e.map((function(t){return t.answerText})),i=e.map((function(t){return t.answerId})),r={headers:{"Content-Type":"application/json"}},t.prev=4,t.next=7,C.a.post("/api/recommendations",i,r);case 7:o=t.sent,this.suggestedProducts=o.data,this.answers=s,this.questionTags=n,this.title="",t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](4),console.log(t.t0.response.data);case 17:case"end":return t.stop()}}),t,this,[[4,14]])})));function e(e){return t.apply(this,arguments)}return e}()}},S=z,P=(n("254c"),Object(g["a"])(S,o,u,!1,null,"1003bcae",null)),I=P.exports,M={name:"app",components:{Main:I}},E=M,H=(n("034f"),Object(g["a"])(E,i,r,!1,null,null,null)),Z=H.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(Z)}}).$mount("#app")},"6e63":function(t){t.exports=JSON.parse('[{"questionText":"What\'s your current ski skill level?","questionsTag":"Skill level","questionOptions":[{"id":1,"text":"First-time skier"},{"id":2,"text":"Beginner"},{"id":3,"text":"Intermediate"},{"id":4,"text":"Advanced"},{"id":5,"text":"Expert"}]},{"questionText":"Where do you prefer to ski?","questionsTag":"Ski preference","questionOptions":[{"id":1,"text":"In the snow park"},{"id":2,"text":"Off piste / powder"},{"id":3,"text":"Groomed runs"},{"id":4,"text":"Both on and off-piste"},{"id":5,"text":"Ski touring"}]},{"questionText":"How do you like your turns?","questionsTag":"Turn preference","questionOptions":[{"id":1,"text":"Short"},{"id":2,"text":"Pretty short"},{"id":3,"text":"Balanced"},{"id":4,"text":"Large"},{"id":5,"text":"Huge"}]},{"questionText":"What\'s your size compared to the average person?","questionsTag":"Size","questionOptions":[{"id":1,"text":"Tiny"},{"id":2,"text":"Small"},{"id":3,"text":"Average"},{"id":4,"text":"Large"},{"id":5,"text":"Huge"}]}]')},"85ec":function(t,e,n){},9626:function(t,e,n){},aaab:function(t,e,n){"use strict";var s=n("9626"),i=n.n(s);i.a},dea6:function(t,e,n){"use strict";var s=n("ecc6"),i=n.n(s);i.a},e81e:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABMRJREFUeJztm89vVFUUxz/3vDftYFuQlmkXiKyMUFiI8QcsXICuBNLEhJjAH4CRoMEECAJ9mVLBoshCo6ZuMbpSwB9sBBMXWiMkEsWGpRoS2qEFtKUd5s05LugkhWmFpu9Hk85nNfNy55xzvzn3nnvfvQM1atSoUWP+4qZ62BKMr3AmbztsA0hTPK7ttUJX3fvx2H5wqgRoCcZXiLk+kEXxutaymXRcO5T5Jl4//0+VAEs6b590uA4zO+mJv30gL4NROsx1lqzyWVVHxOO5Qr7+1yh9zAS598GdtIc4Oj8Zgw9EpBFzXze/qUvj8nM/qgSojPk4Ow9wzfm7QM+AW+r55a9ygTXG6W86phAgIfIu1LHMywq/AWvQ25+xxbykw0hPAGDoHflXnb9JVa/iZFPLivB40jGkKgDA9bz7C89tVnRMHDtznbd3Juk/dQEAhvJ15z2TbaAGdnzJwdLGpHzPCQEABg9lvsTcHhDPTD/PBcUnkvA7ZwQAKBzKHEP5JMnyOKcEAGeFQX+HmX6XVHlMXABFRwFa92nblA16XakkdVtQ/iCB8pi4AII7B2B+2DudCDfz7oZYuEnRQtzlsWovUFmrF7oyU+4UZ0vzgfGVnrifZrrZiiuexDNguDvbX1Zbh9npynBIEz8Np8Pd2X6g40HaTt49xsEcqwLJUxMg7QDSJvI5YHlg2REr7RDcNkXbBamPwu5s5wJFi6JyycRONLjMR3/m3ThEnAGLA3v0Vjm8ILh3gTVRdT4KBKlHeNLh3hu18Pzi/boMIsyAR3bpgmI5PIPQDvSrsde/5Z0bOCaplzqAXGCNSrhBjKMOVnmu/O3ywJ6OTIBiY7gD59qB/rDor7ve425GZTsKCnk3ApxeFNgPdRb2OWH1qJZejW4IOLcVwBx75lrnJ3Mz7244Yy+Ac25rZAIo2g7gjXjfR2UzLkz8swCquiqyIVCZ8GYy5tuC4mpVetSxXpAFE0HdEnFny6p7J1aMdzFdNZjJXqGQdyO5zhIikk1tHdAWFFer8SNOXqx0HkBEHgK32cP1NR8YXxl3HKkJoEoPSJOZfeGVvNZCV8YVujJOnNdm2ClEFnoiPff+rtJuuu8zJT0BHOsB/NB/5eoRKVSeD+RlUEr+dgCdOKWKk9QEqKT95M5XGDwiAxNtGuKPY56TyvuAycS9378ftQxIO4DpZvCkMmPeZ0BNgLQDSJvU54CZcu/cMNtzjHmfAZGdDLV0FscFqZdRr3GuvAWajpbd2iQLyv8oOhZZBojKJYCwsfx8VDbjwsuWXwAQ5PfIBDBnnwKIcXRRYA9HZTdqFgbabI4eADM7EZkADZL50OAS8HidhX2tB0sdaV19m4qW3dqUC0ovZcrln4HHFC5ek8zHkZ4OL96vyzyvfMbBqghijg2FixZ6G4cPy5VIq8D1t+TvBuc/ZdgbwAVFx6K0PxsmYvnFzF4fcv4zw4flypQNc50lS3uHNpm445n364CaAGkHkDZVAlSurbQF2pp8OHdTuUSlqiNx+agSQMydBShb2JumCK37tM38sBfAyZ2Y4qD6LzMHxh8XXB8ic2M1p3pDsbVD3dnLcZivyoCh7uxlxdYadirNW1yqOmJmJ82zZ+PqfI0aNWr8B/JT8GAS33FPAAAAAElFTkSuQmCC"},ecc6:function(t,e,n){}});
//# sourceMappingURL=app.bfe82faf.js.map