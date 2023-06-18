import{_ as M}from"./GiSvgIcon.66a3c4b3.js";import{d as y,J as z,r as n,o as s,c as d,w as t,h as e,j as S,x as U,ar as T,g as b,f1 as R,a as g,i as V,aa as N,t as $,e as v,p as q,l as j,_ as G}from"./index.9e0cf28f.js";import{g as J}from"./index.6a3807e1.js";const W=y({__name:"AddMenuModal",props:{modelValue:{type:Boolean,default:!1},treeData:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(_,{emit:h}){const m=J(_,"modelValue",h),u=z({parentId:"",name:"",path:"",icon:"",keepAlive:!1,hidden:!1});return(k,l)=>{const c=n("a-tree-select"),r=n("a-form-item"),i=n("a-input"),f=n("a-switch"),D=n("a-form"),F=n("a-modal");return s(),d(F,{visible:S(m),"onUpdate:visible":l[5]||(l[5]=a=>U(m)?m.value=a:null),title:"\u65B0\u589E\u83DC\u5355"},{default:t(()=>[e(D,{ref:"formRef",model:u,labelCol:{span:4}},{default:t(()=>[e(r,{label:"\u4E0A\u7EA7\u83DC\u5355",parentId:"name"},{default:t(()=>[e(c,{data:_.treeData,modelValue:u.parentId,"onUpdate:modelValue":l[0]||(l[0]=a=>u.parentId=a),placeholder:"\u8BF7\u9009\u62E9","field-names":{key:"id",title:"name",children:"children"}},null,8,["data","modelValue"])]),_:1}),e(r,{label:"\u83DC\u5355\u540D\u79F0",field:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",trigger:"blur"},{min:3,max:10,message:"\u957F\u5EA6\u5728 3 - 10\u4E2A\u5B57\u7B26",trigger:"blur"}],"validate-trigger":["change","input"]},{default:t(()=>[e(i,{placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",modelValue:u.name,"onUpdate:modelValue":l[1]||(l[1]=a=>u.name=a)},null,8,["modelValue"])]),_:1}),e(r,{label:"\u83DC\u5355\u5730\u5740",field:"path",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u83DC\u5355\u5730\u5740",trigger:"blur"},{min:3,max:10,message:"\u957F\u5EA6\u5728 3 - 30\u4E2A\u5B57\u7B26",trigger:"blur"}],"validate-trigger":["change","input"]},{default:t(()=>[e(i,{placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u5730\u5740",modelValue:u.path,"onUpdate:modelValue":l[2]||(l[2]=a=>u.path=a)},null,8,["modelValue"])]),_:1}),e(r,{label:"\u662F\u5426\u7F13\u5B58",name:"keepAlive"},{default:t(()=>[e(f,{size:"medium",modelValue:u.keepAlive,"onUpdate:modelValue":l[3]||(l[3]=a=>u.keepAlive=a)},null,8,["modelValue"])]),_:1}),e(r,{label:"\u662F\u5426\u9690\u85CF",name:"hidden"},{default:t(()=>[e(f,{size:"medium",modelValue:u.hidden,"onUpdate:modelValue":l[4]||(l[4]=a=>u.hidden=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])}}}),H=_=>(q("data-v-627051ab"),_=_(),j(),_),K={class:"menu-manage"},L=H(()=>V("span",null,"\u65B0\u589E\u83DC\u5355",-1)),O={class:"table-box"},P={key:0},Q={key:1,class:"no-text"},X={key:1,class:"no-text"},Y=y({name:"MenuManage"}),Z=y({...Y,setup(_){const h=T(),p=b(!1),m=b(!1),u=b([]);return(()=>{p.value=!0,setTimeout(()=>{u.value=h.menuTree,p.value=!1},300)})(),(l,c)=>{const r=n("icon-plus"),i=n("a-button"),f=n("a-row"),D=n("IconDown"),F=n("IconRight"),a=n("a-table-column"),x=M,C=n("icon-edit"),B=n("icon-delete"),w=n("a-popconfirm"),A=n("a-space"),E=n("a-table"),I=R("loading");return s(),g("div",K,[e(f,{class:"head"},{default:t(()=>[e(i,{type:"primary",onClick:c[0]||(c[0]=o=>m.value=!0)},{icon:t(()=>[e(r)]),default:t(()=>[L]),_:1})]),_:1}),V("section",O,[N((s(),d(E,{data:u.value,"row-key":"id",scroll:{x:"100%",y:"100%",minWidth:900},pagination:!1,expandable:{width:80}},{"expand-icon":t(({expanded:o})=>[o?(s(),d(D,{key:0})):(s(),d(F,{key:1}))]),columns:t(()=>[e(a,{title:"\u83DC\u5355\u540D\u79F0","data-index":"name"}),e(a,{title:"\u83DC\u5355\u5730\u5740","data-index":"path"},{cell:t(({record:o})=>[o.path?(s(),g("span",P,$(o.path),1)):(s(),g("span",Q,"\u65E0"))]),_:1}),e(a,{title:"\u83DC\u5355\u56FE\u6807","data-index":"icon",width:200},{cell:t(({record:o})=>[o.icon?(s(),d(x,{key:0,size:24,name:o.icon},null,8,["name"])):(s(),g("span",X,"\u65E0"))]),_:1}),e(a,{title:"\u662F\u5426\u7F13\u5B58","data-index":"keepAlive",width:200},{cell:t(({record:o})=>[o.keepAlive?(s(),d(i,{key:0,status:"success",size:"mini"},{icon:t(()=>[v("\u662F")]),_:1})):(s(),d(i,{key:1,status:"danger",size:"mini"},{icon:t(()=>[v("\u5426")]),_:1}))]),_:1}),e(a,{title:"\u662F\u5426\u9690\u85CF","data-index":"hidden",width:200},{cell:t(({record:o})=>[o.hidden?(s(),d(i,{key:0,status:"success",size:"mini"},{icon:t(()=>[v("\u662F")]),_:1})):(s(),d(i,{key:1,status:"danger",size:"mini"},{icon:t(()=>[v("\u5426")]),_:1}))]),_:1}),e(a,{title:"\u64CD\u4F5C",width:100},{cell:t(({record:o})=>[e(A,null,{default:t(()=>[e(i,{type:"primary",size:"mini",onClick:c[1]||(c[1]=ee=>m.value=!0)},{icon:t(()=>[e(C)]),_:1}),e(w,{type:"warning",content:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u9879\u5417?"},{default:t(()=>[e(i,{type:"primary",status:"danger",size:"mini"},{icon:t(()=>[e(B)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["data"])),[[I,p.value]])]),e(W,{"tree-data":u.value,modelValue:m.value,"onUpdate:modelValue":c[2]||(c[2]=o=>m.value=o)},null,8,["tree-data","modelValue"])])}}});const ue=G(Z,[["__scopeId","data-v-627051ab"]]);export{ue as default};