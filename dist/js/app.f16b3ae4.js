(function(t){function e(e){for(var n,s,i=e[0],a=e[1],l=e[2],u=0,m=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);p&&p(e);while(m.length)m.shift()();return c.push.apply(c,l||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,i=1;i<o.length;i++){var a=o[i];0!==r[a]&&(n=!1)}n&&(c.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},c=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var p=a;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"1f15":function(t,e,o){"use strict";o("c150")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r={id:"nav"};function c(t,e){var o=Object(n["z"])("router-view");return Object(n["s"])(),Object(n["f"])("div",r,[Object(n["i"])(o)])}o("fb86");var s=o("6b0d"),i=o.n(s);const a={},l=i()(a,[["render",c]]);var p=l,u=o("6c02");function m(t,e,o,r,c,s){var i=Object(n["z"])("Competitor");return Object(n["s"])(),Object(n["d"])(i)}var b=function(t){return Object(n["v"])("data-v-d0d725ee"),t=t(),Object(n["t"])(),t},d=["innerHTML"],f=["innerHTML"],j={key:2,class:"form-group container"},O={class:"input-group"},g=b((function(){return Object(n["g"])("label",{for:"facilityName",class:"label"},"Facility Name",-1)})),h={class:"input-group"},C=b((function(){return Object(n["g"])("label",{for:"compDate",class:"label"},"Competition Date",-1)})),v={class:"input-group"},y=b((function(){return Object(n["g"])("label",{for:"addressOne",class:"label"},"Address One",-1)})),w={class:"input-group"},D=b((function(){return Object(n["g"])("label",{for:"addressTwo",class:"label"},"Address Two",-1)})),A={class:"input-group"},I=b((function(){return Object(n["g"])("label",{for:"city",class:"label"},"City",-1)})),N={class:"input-group"},k=b((function(){return Object(n["g"])("label",{for:"state",class:"label"},"State",-1)})),M={class:"input-group"},R=b((function(){return Object(n["g"])("label",{for:"zip",class:"label"},"Zip",-1)})),F={key:3,class:"add-competitor"},P={class:"input-group"},x=b((function(){return Object(n["g"])("label",{for:"memberId",class:"label"},"Member Number",-1)})),B={key:4,class:"form-group container"},T={class:"input-group"},U=b((function(){return Object(n["g"])("label",{for:"newMemberId",class:"label"},"Member ID",-1)})),V={class:"input-group"},S=b((function(){return Object(n["g"])("label",{for:"firstName",class:"label"},"First Name",-1)})),L={class:"input-group"},_=b((function(){return Object(n["g"])("label",{for:"lastName",class:"label"},"Last Name",-1)})),z={class:"input-group"},H=b((function(){return Object(n["g"])("label",{for:"gender",class:"label"},"Gender",-1)})),J={class:"input-group"},$=b((function(){return Object(n["g"])("label",{for:"weight",class:"label"},"Weight",-1)})),q={class:"input-group"},G=b((function(){return Object(n["g"])("label",{for:"birthDate",class:"label"},"Birth Date",-1)}));function W(t,e,o,r,c,s){var i=Object(n["z"])("Button");return Object(n["s"])(),Object(n["f"])(n["a"],null,[c.errorPresent?(Object(n["s"])(),Object(n["f"])("div",{key:0,class:"error",innerHTML:c.errorMessage},null,8,d)):Object(n["e"])("",!0),c.successPresent?(Object(n["s"])(),Object(n["f"])("div",{key:1,class:"success",innerHTML:c.successMessage},null,8,f)):Object(n["e"])("",!0),c.startingCompetition?(Object(n["s"])(),Object(n["f"])("div",j,[Object(n["g"])("div",O,[g,Object(n["F"])(Object(n["g"])("input",{type:"text",id:"facilityName",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=function(t){return c.compData.facilityName=t})},null,512),[[n["D"],c.compData.facilityName]])]),Object(n["g"])("div",h,[C,Object(n["F"])(Object(n["g"])("input",{type:"date",id:"compDate",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.compData.compDate=t})},null,512),[[n["D"],c.compData.compDate]])]),Object(n["g"])("div",v,[y,Object(n["F"])(Object(n["g"])("input",{type:"text",id:"addressOne",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=function(t){return c.compData.addressOne=t})},null,512),[[n["D"],c.compData.addressOne]])]),Object(n["g"])("div",w,[D,Object(n["F"])(Object(n["g"])("input",{type:"text",id:"addressTwo",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=function(t){return c.compData.addressTwo=t})},null,512),[[n["D"],c.compData.addressTwo]])]),Object(n["g"])("div",A,[I,Object(n["F"])(Object(n["g"])("input",{type:"text",id:"city",class:"form-control","onUpdate:modelValue":e[4]||(e[4]=function(t){return c.compData.city=t})},null,512),[[n["D"],c.compData.city]])]),Object(n["g"])("div",N,[k,Object(n["F"])(Object(n["g"])("input",{type:"text",id:"state",class:"form-control","onUpdate:modelValue":e[5]||(e[5]=function(t){return c.compData.state=t})},null,512),[[n["D"],c.compData.state]])]),Object(n["g"])("div",M,[R,Object(n["F"])(Object(n["g"])("input",{type:"number",id:"zip",class:"form-control","onUpdate:modelValue":e[6]||(e[6]=function(t){return c.compData.zip=t})},null,512),[[n["D"],c.compData.zip]])]),Object(n["i"])(i,{text:"Submit",color:"green",onBtnClick:s.submitCompetitionForm},null,8,["onBtnClick"])])):Object(n["e"])("",!0),c.addingCompetitors?(Object(n["s"])(),Object(n["f"])("div",F,[Object(n["g"])("div",P,[x,Object(n["F"])(Object(n["g"])("input",{type:"number",id:"memberId",class:"form-control","onUpdate:modelValue":e[7]||(e[7]=function(t){return c.competitorData.memberId=t})},null,512),[[n["D"],c.competitorData.memberId]])]),Object(n["i"])(i,{text:"Submit Competitor",color:"green",onBtnClick:s.submitCompetitorForm},null,8,["onBtnClick"]),Object(n["i"])(i,{class:"begin-button",text:"Begin Competition",color:"aqua",onBtnClick:s.initializeCompetition},null,8,["onBtnClick"])])):Object(n["e"])("",!0),c.addingNewCompetitor?(Object(n["s"])(),Object(n["f"])("div",B,[Object(n["g"])("div",T,[U,Object(n["F"])(Object(n["g"])("input",{type:"text",id:"newMemberId",class:"form-control","onUpdate:modelValue":e[8]||(e[8]=function(t){return c.newCompetitor.memberId=t})},null,512),[[n["D"],c.newCompetitor.memberId]])]),Object(n["g"])("div",V,[S,Object(n["F"])(Object(n["g"])("input",{type:"text",id:"firstName",class:"form-control","onUpdate:modelValue":e[9]||(e[9]=function(t){return c.newCompetitor.firstName=t})},null,512),[[n["D"],c.newCompetitor.firstName]])]),Object(n["g"])("div",L,[_,Object(n["F"])(Object(n["g"])("input",{type:"text",id:"lastName",class:"form-control","onUpdate:modelValue":e[10]||(e[10]=function(t){return c.newCompetitor.lastName=t})},null,512),[[n["D"],c.newCompetitor.lastName]])]),Object(n["g"])("div",z,[H,Object(n["F"])(Object(n["g"])("input",{type:"text",id:"gender",class:"form-control","onUpdate:modelValue":e[11]||(e[11]=function(t){return c.newCompetitor.gender=t})},null,512),[[n["D"],c.newCompetitor.gender]])]),Object(n["g"])("div",J,[$,Object(n["F"])(Object(n["g"])("input",{type:"text",id:"weight",class:"form-control","onUpdate:modelValue":e[12]||(e[12]=function(t){return c.newCompetitor.weight=t})},null,512),[[n["D"],c.newCompetitor.weight]])]),Object(n["g"])("div",q,[G,Object(n["F"])(Object(n["g"])("input",{type:"date",id:"birthDate",class:"form-control","onUpdate:modelValue":e[13]||(e[13]=function(t){return c.newCompetitor.birthDate=t})},null,512),[[n["D"],c.newCompetitor.birthDate]])]),Object(n["i"])(i,{text:"Submit",color:"green",onBtnClick:s.submitNewCompetitor},null,8,["onBtnClick"]),Object(n["i"])(i,{text:"Cancel",color:"red",onBtnClick:s.resetToRegister},null,8,["onBtnClick"])])):Object(n["e"])("",!0)],64)}var Z=o("bc3a"),E=o.n(Z);function K(t,e,o,r,c,s){return Object(n["s"])(),Object(n["f"])("button",{onClick:e[0]||(e[0]=function(t){return s.onClick()}),style:Object(n["o"])({background:o.color}),class:"btn"},Object(n["B"])(o.text),5)}var Q={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("btn-click")}}};const X=i()(Q,[["render",K]]);var Y=X,tt={data:function(){return{addingCompetitors:!1,startingCompetition:!0,addingNewCompetitor:!1,errorPresent:!1,errorMessage:"",successPresent:!1,successMessage:"",compData:{facilityName:"",compDate:"",addressOne:"",addressTwo:"",city:"",state:"",zip:""},compResponse:"",competitorData:{memberId:"",competitionId:""},newCompetitor:{memberId:"",birthDate:"",firstName:"",lastName:"",gender:"",weight:""}}},components:{Button:Y},methods:{submitCompetitionForm:function(){var t=this,e={"Content-Type":"application/json",Accept:"application/json"};E()({url:"http://localhost:5000/Competition",method:"post",data:this.compData,headers:e}).then((function(e){t.compResponse=e.data})).then(this.successCompetition).catch(this.errorCompetition)},submitCompetitorForm:function(){var t=this,e={"Content-Type":"application/json",Accept:"application/json"};E()({url:"http://localhost:5000/Competition/register",method:"post",data:this.competitorData,headers:e}).then((function(e){t.compResponse=e.data})).then(this.successCompetitor).catch(this.errorMissingCompetitor)},submitNewCompetitor:function(){var t=this,e={"Content-Type":"application/json",Accept:"application/json"};E()({url:"http://localhost:5000/competitor",method:"post",data:this.newCompetitor,headers:e}).then((function(e){t.compResponse=e.data})).then(this.submitCompetitorForm).catch()},successCompetition:function(){this.addingCompetitors=!0,this.startingCompetition=!1,this.errorPresent=!1,this.competitorData.competitionId=this.compResponse.competitionId},errorCompetition:function(){},errorMissingCompetitor:function(){this.newCompetitor.firstName="",this.newCompetitor.lastName="",this.newCompetitor.weight="",this.newCompetitor.gender="",this.newCompetitor.birthDate="",this.newCompetitor.memberId=this.competitorData.memberId,this.errorPresent=!0,this.successPresent=!1,this.errorMessage="Missing Competitor:  Add new competitor",this.addingCompetitors=!1,this.addingNewCompetitor=!0},successCompetitor:function(){this.successMessage="Competitor Successfully Registered!",this.successPresent=!0,this.errorPresent=!1,this.newCompetitor.memberId="",this.newCompetitor.first_name="",this.newCompetitor.last_name="",this.newCompetitor.gender="",this.newCompetitor.weight="",this.newCompetitor.birth_date="",this.competitorData.memberId="",this.addingNewCompetitor=!1,this.addingCompetitors=!0},resetToRegister:function(){this.successPresent=!1,this.errorPresent=!1,this.addingCompetitors=!0,this.addingNewCompetitor=!1,this.competitorData.memberId=""},initializeCompetition:function(){var t=this.competitorData.competitionId;this.$router.push({path:"/competition/".concat(t)})}}};o("1f15");const et=i()(tt,[["render",W],["__scopeId","data-v-d0d725ee"]]);var ot=et,nt={name:"Competition",components:{Competitor:ot}};const rt=i()(nt,[["render",m]]);var ct=rt;function st(t,e,o,r,c,s){var i=Object(n["z"])("ResultPage");return Object(n["s"])(),Object(n["d"])(i)}var it=function(t){return Object(n["v"])("data-v-5350a58a"),t=t(),Object(n["t"])(),t},at=["innerHTML"],lt=["innerHTML"],pt={key:2,class:"pageContents"},ut={class:"page-block"},mt={class:"competitor-list",id:"array-rendering"},bt={class:"page-block"},dt={class:"form-group container"},ft={class:"input-group"},jt=it((function(){return Object(n["g"])("label",{for:"cnjAttempt1",class:"label"},"CNJ Attempt 1",-1)})),Ot={class:"input-group"},gt=it((function(){return Object(n["g"])("label",{for:"cnjAttempt2",class:"label"},"CNJ Attempt 2",-1)})),ht={class:"input-group"},Ct=it((function(){return Object(n["g"])("label",{for:"cnjAttempt3",class:"label"},"CNJ Attempt 3",-1)})),vt={class:"input-group"},yt=it((function(){return Object(n["g"])("label",{for:"snatchAttempt1",class:"label"},"Snatch Attempt 1",-1)})),wt={class:"input-group"},Dt=it((function(){return Object(n["g"])("label",{for:"snatchAttempt2",class:"label"},"Snatch Attempt 2",-1)})),At={class:"input-group"},It=it((function(){return Object(n["g"])("label",{for:"snatchAttempt3",class:"label"},"Snatch Attempt 3",-1)}));function Nt(t,e,o,r,c,s){var i=Object(n["z"])("Button");return Object(n["s"])(),Object(n["f"])(n["a"],null,[c.successPresent?(Object(n["s"])(),Object(n["f"])("div",{key:0,class:"success",innerHTML:c.successMessage},null,8,at)):Object(n["e"])("",!0),c.errorPresent?(Object(n["s"])(),Object(n["f"])("div",{key:1,class:"error",innerHTML:c.errorMessage},null,8,lt)):Object(n["e"])("",!0),c.errorPresent?Object(n["e"])("",!0):(Object(n["s"])(),Object(n["f"])("div",pt,[Object(n["g"])("span",ut,[Object(n["g"])("ul",mt,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(c.competitorList,(function(t,e){return Object(n["s"])(),Object(n["f"])("li",{key:e},[Object(n["h"])(Object(n["B"])(t.firstName)+" "+Object(n["B"])(t.lastName)+" ",1),Object(n["i"])(i,{text:"Select",color:"green",onBtnClick:function(e){return s.loadCompetitor(t.memberId)}},null,8,["onBtnClick"])])})),128))])]),Object(n["g"])("span",bt,[Object(n["g"])("div",dt,[Object(n["g"])("div",ft,[jt,Object(n["F"])(Object(n["g"])("input",{type:"number",id:"cnjAttempt1",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=function(t){return c.compResults.results.cnjAttempt1=t})},null,512),[[n["D"],c.compResults.results.cnjAttempt1]])]),Object(n["g"])("div",Ot,[gt,Object(n["F"])(Object(n["g"])("input",{type:"number",id:"cnjAttempt2",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.compResults.results.cnjAttempt2=t})},null,512),[[n["D"],c.compResults.results.cnjAttempt2]])]),Object(n["g"])("div",ht,[Ct,Object(n["F"])(Object(n["g"])("input",{type:"number",id:"cnjAttempt3",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=function(t){return c.compResults.results.cnjAttempt3=t})},null,512),[[n["D"],c.compResults.results.cnjAttempt3]])]),Object(n["g"])("div",vt,[yt,Object(n["F"])(Object(n["g"])("input",{type:"number",id:"snatchAttempt1",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=function(t){return c.compResults.results.snatchAttempt1=t})},null,512),[[n["D"],c.compResults.results.snatchAttempt1]])]),Object(n["g"])("div",wt,[Dt,Object(n["F"])(Object(n["g"])("input",{type:"number",id:"snatchAttempt2",class:"form-control","onUpdate:modelValue":e[4]||(e[4]=function(t){return c.compResults.results.snatchAttempt2=t})},null,512),[[n["D"],c.compResults.results.snatchAttempt2]])]),Object(n["g"])("div",At,[It,Object(n["F"])(Object(n["g"])("input",{type:"number",id:"snatchAttempt3",class:"form-control","onUpdate:modelValue":e[5]||(e[5]=function(t){return c.compResults.results.snatchAttempt3=t})},null,512),[[n["D"],c.compResults.results.snatchAttempt3]])])])])]))],64)}var kt={data:function(){return{errorPresent:!1,errorMessage:"",successPresent:!1,successMessage:"",competitorList:[],currentCompetitor:"",compResults:{results:{cnjAttempt1:"",cnjAttempt2:"",cnjAttempt3:"",snatchAttempt1:"",snatchAttempt2:"",snatchAttempt3:""},memberId:"",competitionId:""}}},props:["compId"],mounted:function(){var t=this;E.a.get("http://localhost:5000/competitor/competition/"+this.compId).then((function(e){t.competitorList=e.data,t.compResults.competitionId=t.compId,console.log(t.competitorList),0===t.competitorList.length&&(t.errorMessage="Invalid Competition Specified",t.errorPresent=!0)}))},components:{Button:Y},methods:{loadCompetitor:function(t){var e=this;if(""!==this.currentCompetitor){this.compResults.memberId=this.currentCompetitor;var o={"Content-Type":"application/json",Accept:"application/json"};E()({url:"http://localhost:5000/results/update",method:"post",data:this.compResults,headers:o})}this.currentCompetitor=t,E.a.get("http://localhost:5000/results/"+t+"/"+this.compId).then((function(t){console.log(t),e.compResults.results=t.data}))}}};o("fc83");const Mt=i()(kt,[["render",Nt],["__scopeId","data-v-5350a58a"]]);var Rt=Mt,Ft={name:"Result",components:{ResultPage:Rt}};const Pt=i()(Ft,[["render",st]]);var xt=Pt,Bt=[{path:"/",name:"competitor",component:ct},{path:"/competition/:compId",name:"results",component:xt,props:!0}],Tt=Object(u["a"])({history:Object(u["b"])(),routes:Bt}),Ut=Tt;Object(n["c"])(p).use(Ut).mount("#app")},c150:function(t,e,o){},ea62:function(t,e,o){},f307:function(t,e,o){},fb86:function(t,e,o){"use strict";o("f307")},fc83:function(t,e,o){"use strict";o("ea62")}});
//# sourceMappingURL=app.f16b3ae4.js.map