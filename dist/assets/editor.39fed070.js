import{T as k,E as w}from"./style.bf84156f.js";import{d as y,r as F,a2 as V,o as E,y as L,l as i,b as a,c,e as N,m as u,g as m,v as f,q as p,n as h,w as g,F as O,f as T,_ as U}from"./index.9d32ee8a.js";import{u as K}from"./index.ea7c4fc7.js";const j={class:"main-content flex"},I={key:0,class:"title"},R=y({name:"Editor"}),q=y({...R,props:{id:{type:Number,default:()=>null},readonly:{type:Boolean,default:()=>!1},border:{type:Boolean,default:()=>!0},catalogue:{type:Boolean,default:()=>!0},disabled:{type:Boolean,default:()=>!1},container:Object,formKey:String,form:Object},emits:["change"],setup(b,{emit:z}){const e=b,_=F({titleList:[],isCatalogueFixed:!1}),C={},v={placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9..."},n=V(),x=t=>{n.value=t;const l=async(s,d)=>{await K(s.name,s,"eidtor").then(r=>{if(r.code===200){const o="https://"+r.msg.Location;d(o)}})};t.getMenuConfig("uploadImage").customUpload=l};E(()=>{const t=n.value;t!=null&&t.destroy()});const B=t=>{_.titleList=t.getElemsByTypePrefix("header")};return L(()=>{e.disabled&&n.value.disable()}),(t,l)=>{const s=i("a-anchor-link"),d=i("a-anchor"),r=i("a-affix");return a(),c("div",j,[N("div",{class:h(e.border?"editor":"border")},[e.readonly?f("",!0):(a(),u(m(k),{key:0,style:{"border-bottom":"1px solid #ccc"},editor:n.value,defaultConfig:C},null,8,["editor"])),p(m(w),{style:{width:"100%","min-height":"360px",height:"100%","overflow-y":"hidden"},modelValue:e.form[e.formKey],"onUpdate:modelValue":l[0]||(l[0]=o=>e.form[e.formKey]=o),defaultConfig:v,onOnCreated:x,onOnChange:B},null,8,["modelValue"])],2),p(r,{"offset-top":0,target:e.container},{default:g(()=>[e.catalogue?(a(),c("div",I,[e.container?(a(),u(d,{key:0,"change-hash":!1,"scroll-container":e.container},{default:g(()=>[(a(!0),c(O,null,T(_.titleList,o=>(a(),u(s,{key:o.id,href:`#${o.id}`,title:o.children[0].text,class:h(o.type)},null,8,["href","title","class"]))),128))]),_:1},8,["scroll-container"])):f("",!0)])):f("",!0)]),_:1},8,["target"])])}}});const $=U(q,[["__scopeId","data-v-170bdbed"]]);export{$ as _};
