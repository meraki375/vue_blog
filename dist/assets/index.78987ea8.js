import{_ as B}from"./player.vue_vue_type_script_setup_true_name_player_lang.9eaa4a4b.js";import{_ as N}from"./GiThemeBtn.vue_vue_type_script_setup_true_name_GiThemeBtn_lang.6fd67196.js";import{d as u,r as o,o as t,c as a,w as n,a as h,b as f,F as y,e as w,t as C,f as $,u as j,g as z,h as _,i as b,j as V,k as T,p as D,l as F,_ as g,m as G,n as K,K as L,q as I}from"./index.9e0cf28f.js";import{_ as q}from"./GiSvgIcon.66a3c4b3.js";import"./index.6a3807e1.js";const E=u({name:"MenuItem"}),O=u({...E,props:{data:{type:Object,default:()=>{}}},emits:["click"],setup(e,{emit:i}){const s=d=>{i("click",d)};return(d,r)=>{const m=q,c=o("MenuItem",!0),l=o("a-sub-menu"),v=o("icon-unordered-list"),k=o("a-menu-item");return e.data.children&&e.data.children.length&&!e.data.hidden?(t(),a(l,{key:e.data.path},{icon:n(()=>[e.data.icon?(t(),a(m,{key:0,size:24,name:e.data.icon},null,8,["name"])):f("",!0)]),title:n(()=>[w(C(e.data.name),1)]),default:n(()=>[(t(!0),h(y,null,$(e.data.children,p=>(t(),a(c,{key:p.id,data:p,onClick:s},null,8,["data"]))),128))]),_:1})):(t(),h(y,{key:1},[e.data.hidden?f("",!0):(t(),a(k,{key:e.data.path,onClick:r[0]||(r[0]=p=>s(e.data))},{icon:n(()=>[e.data.icon?(t(),a(m,{key:0,size:24,name:e.data.icon},null,8,["name"])):(t(),a(v,{key:1,size:20}))]),default:n(()=>[w(" "+C(e.data.name),1)]),_:1}))],64))}}}),R=e=>(D("data-v-e405b8da"),e=e(),F(),e),H={class:"menu-demo"},J=R(()=>b("img",{src:"https://i.hd-r.cn/5e0e40aea3584ccffe0cd7dd69fcc85b.jpg",style:{"object-fit":"fill",width:"200px",height:"200px"}},null,-1)),P=u({name:"Aside"}),Q=u({...P,setup(e){const i=j(),s=z(!1),d=c=>{s.value=c},r=c=>{c.path&&i.push({path:c.path})},m=()=>{s.value=!1};return(c,l)=>{const v=N,k=o("a-menu"),p=o("a-drawer"),S=o("a-layout-sider"),A=o("icon-menu-unfold"),M=B;return t(),h(y,null,[_(S,{width:0,"collapsed-width":0,breakpoint:"xl"},{default:n(()=>[b("div",H,[_(p,{width:240,height:240,visible:s.value,placement:"left",closable:!1,header:!1,footer:!1,onCancel:m,"drawer-style":{background:"#e0ebfd"}},{default:n(()=>[_(k,null,{default:n(()=>[J,(t(!0),h(y,null,$(V(T).options.routes[0].children,x=>(t(),a(O,{key:x.path,data:x,onClick:r},null,8,["data"]))),128)),s.value?f("",!0):(t(),a(v,{key:0,class:"theme-btn"}))]),_:1})]),_:1},8,["visible"])])]),_:1}),b("div",{class:"menuButton",onClick:l[0]||(l[0]=x=>d(!0))},[_(A,{size:32,style:{color:"#fff"}})]),_(M,{id:"2088799380",type:"playlist",autoplay:!0,fixed:!0})],64)}}});const U=g(Q,[["__scopeId","data-v-e405b8da"]]),W=u({name:"Main"}),X=u({...W,setup(e){const i=G();return K(),console.log(i.cacheList),(s,d)=>{const r=o("router-view"),m=o("a-layout");return t(),a(m,{class:"main"},{default:n(()=>[_(r,null,{default:n(({Component:c,route:l})=>[(t(),a(L,{max:10},[l.meta&&l.meta.keepAlive?(t(),a(I(c),{key:l.path})):f("",!0)],1024)),l.meta.keepAlive?f("",!0):(t(),a(I(c),{key:0}))]),_:1})]),_:1})}}});const Y=g(X,[["__scopeId","data-v-3dfca5c4"]]),Z=u({__name:"index",setup(e){return(i,s)=>{const d=o("a-layout");return t(),a(d,{class:"layout"},{default:n(()=>[_(U),_(d,null,{default:n(()=>[_(Y)]),_:1})]),_:1})}}});const ce=g(Z,[["__scopeId","data-v-894a7e78"]]);export{ce as default};