import{_ as h,H as n,o as f,c as x,J as e,E as l,a as o,F as C,C as c,D as E}from"./chunks/framework.0fd66c21.js";const I={},w=c("br",null,null,-1),P=c("br",null,null,-1);function B(u,t){const a=n("el-button");return f(),x(C,null,[e(a,null,{default:l(()=>[o("默认按钮")]),_:1}),e(a,{type:"primary"},{default:l(()=>[o("主要按钮")]),_:1}),e(a,{type:"success",round:""},{default:l(()=>[o("round型成功按钮")]),_:1}),e(a,{type:"info",plain:""},{default:l(()=>[o("plain型信息按钮")]),_:1}),e(a,{type:"warning"},{default:l(()=>[o("警告按钮")]),_:1}),e(a,{type:"danger"},{default:l(()=>[o("危险按钮")]),_:1}),e(a,{type:"text"},{default:l(()=>[o("文字按钮")]),_:1}),w,P],64)}const N=h(I,[["render",B]]),R={data(){return{user:{name:"",classId:""},radio1:"11",radio2:"21",checkList:["31","32"],switchValue1:!0}},methods:{handleRadioChange(u){alert(u)}}};function F(u,t,a,d,s,b){const r=n("el-input"),i=n("el-form-item"),g=n("el-option"),V=n("el-select"),p=n("el-radio"),k=n("el-radio-group"),m=n("el-checkbox"),L=n("el-checkbox-group"),y=n("el-button"),U=n("el-switch"),v=n("el-form");return f(),E(v,{ref:"form",size:"small","label-width":"80px",style:{border:"1px solid #C4E1C5",padding:"20px"},inline:!1,"label-position":"top"},{default:l(()=>[e(i,{label:"输入框Input"},{default:l(()=>[e(r,{modelValue:s.user.name,"onUpdate:modelValue":t[0]||(t[0]=_=>s.user.name=_)},null,8,["modelValue"])]),_:1}),e(i,{label:"选择器Select"},{default:l(()=>[e(V,{modelValue:s.user.classId,"onUpdate:modelValue":t[1]||(t[1]=_=>s.user.classId=_)},{default:l(()=>[e(g,{label:"1班",value:"1001"}),e(g,{label:"2班",value:"1002"})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"单选Radio"},{default:l(()=>[e(p,{modelValue:s.radio1,"onUpdate:modelValue":t[2]||(t[2]=_=>s.radio1=_),label:"11",onChange:b.handleRadioChange},{default:l(()=>[o("选项1")]),_:1},8,["modelValue","onChange"]),e(p,{modelValue:s.radio1,"onUpdate:modelValue":t[3]||(t[3]=_=>s.radio1=_),label:"12",onChange:b.handleRadioChange},{default:l(()=>[o("选项2")]),_:1},8,["modelValue","onChange"])]),_:1}),e(i,{label:"单选RadioGroup"},{default:l(()=>[e(k,{modelValue:s.radio2,"onUpdate:modelValue":t[4]||(t[4]=_=>s.radio2=_),onChange:b.handleRadioChange},{default:l(()=>[e(p,{label:"21"},{default:l(()=>[o("选项1")]),_:1}),e(p,{label:"22"},{default:l(()=>[o("选项2")]),_:1}),e(p,{label:"23"},{default:l(()=>[o("选项3")]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1}),e(i,{label:"多选框(最少1最多2)"},{default:l(()=>[e(L,{modelValue:s.checkList,"onUpdate:modelValue":t[5]||(t[5]=_=>s.checkList=_),min:1,max:2},{default:l(()=>[e(m,{label:"31"}),e(m,{label:"32"}),e(m,{label:"33"}),e(m,{label:"34",disabled:""}),e(m,{label:"35",disabled:""})]),_:1},8,["modelValue"])]),_:1}),e(i,null,{default:l(()=>[e(y,{type:"primary"},{default:l(()=>[o("提交")]),_:1}),e(y,null,{default:l(()=>[o("取消")]),_:1})]),_:1}),e(U,{style:{display:"block"},modelValue:s.switchValue1,"onUpdate:modelValue":t[6]||(t[6]=_=>s.switchValue1=_),"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"开启","inactive-text":"关闭"},null,8,["modelValue"])]),_:1},512)}const M=h(R,[["render",F]]);const S={};function j(u,t){return f(),x("p",null,"暂未引入")}const z=h(S,[["render",j],["__scopeId","data-v-79612905"]]),D={};function H(u,t){const a=n("el-link");return f(),E(a,{href:"https://element.eleme.io",target:"_blank",type:"primary"},{default:l(()=>[o("主要链接")]),_:1})}const J=h(D,[["render",H]]),O={setup(){console.log("ok!")},beforeMount(){let u=document.getElementsByClassName("col-color"),t=[],a=[];for(let d=0;d<u.length;d++)a=Math.floor(Math.random()*16777215).toString(16),t[d]="#"+a;for(let d=0;d<u.length;d++)u[d].style.backgroundColor=t[d]}};function $(u,t,a,d,s,b){const r=n("el-col"),i=n("el-row"),g=n("el-aside"),V=n("el-header"),p=n("el-main"),k=n("el-footer"),m=n("el-container");return f(),x(C,null,[e(i,null,{default:l(()=>[e(r,{class:"col-color",span:8},{default:l(()=>[o("1")]),_:1}),e(r,{class:"col-color",span:8},{default:l(()=>[o("2")]),_:1}),e(r,{class:"col-color",span:8},{default:l(()=>[o("3")]),_:1})]),_:1}),e(i,{gutter:20,type:"flex",justify:"center"},{default:l(()=>[e(r,{class:"col-color",span:3},{default:l(()=>[o("居中")]),_:1}),e(r,{class:"col-color",span:3},{default:l(()=>[o("1")]),_:1}),e(r,{class:"col-color",span:3},{default:l(()=>[o("2")]),_:1}),e(r,{class:"col-color",span:3},{default:l(()=>[o("3")]),_:1})]),_:1}),e(i,{gutter:10},{default:l(()=>[e(r,{class:"col-color",xs:8,sm:6,md:4,lg:3},{default:l(()=>[o("响应式")]),_:1}),e(r,{class:"col-color",xs:4,sm:6,md:8,lg:9},{default:l(()=>[o("1")]),_:1}),e(r,{class:"col-color",xs:4,sm:6,md:8,lg:9},{default:l(()=>[o("2")]),_:1}),e(r,{class:"col-color",xs:8,sm:6,md:4,lg:3},{default:l(()=>[o("3")]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(g,{width:"150px"},{default:l(()=>[o("Aside")]),_:1}),e(m,null,{default:l(()=>[e(V,null,{default:l(()=>[o("Header")]),_:1}),e(p,null,{default:l(()=>[o("Main")]),_:1}),e(k,null,{default:l(()=>[o("Footer")]),_:1})]),_:1})]),_:1})],64)}const A=h(O,[["render",$]]),G=c("h1",{id:"elementui",tabindex:"-1"},[o("ElementUI "),c("a",{class:"header-anchor",href:"#elementui","aria-label":'Permalink to "ElementUI"'},"​")],-1),T=c("h2",{id:"按钮",tabindex:"-1"},[o("按钮 "),c("a",{class:"header-anchor",href:"#按钮","aria-label":'Permalink to "按钮"'},"​")],-1),q=c("h2",{id:"表单",tabindex:"-1"},[o("表单 "),c("a",{class:"header-anchor",href:"#表单","aria-label":'Permalink to "表单"'},"​")],-1),K=c("h2",{id:"图标",tabindex:"-1"},[o("图标 "),c("a",{class:"header-anchor",href:"#图标","aria-label":'Permalink to "图标"'},"​")],-1),Q=c("h2",{id:"链接",tabindex:"-1"},[o("链接 "),c("a",{class:"header-anchor",href:"#链接","aria-label":'Permalink to "链接"'},"​")],-1),W=c("h2",{id:"布局",tabindex:"-1"},[o("布局 "),c("a",{class:"header-anchor",href:"#布局","aria-label":'Permalink to "布局"'},"​")],-1),Z=JSON.parse('{"title":"ElementUI","description":"","frontmatter":{},"headers":[],"relativePath":"04.Component/ElementUI.md","lastUpdated":1682259094000}'),X={name:"04.Component/ElementUI.md"},ee=Object.assign(X,{setup(u){return(t,a)=>{const d=n("el-link");return f(),x("div",null,[G,e(d,{href:"https://element.eleme.cn/#/zh-CN/component/",target:"_blank",type:"primary"},{default:l(()=>[o("more info")]),_:1}),T,e(N),q,e(M),K,e(z),Q,e(J),W,e(A)])}}});export{Z as __pageData,ee as default};
