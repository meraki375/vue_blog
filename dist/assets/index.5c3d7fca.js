import{d as _,S as m,u as f,A as u,r as g,x as h,o as B,l as x,b,c as F,e,q as D,w as E,B as C,t as I,p as P,i as k,_ as w}from"./index.41fbb4ad.js";const y="/assets/403.ea9f2803.svg",S="/assets/404.d7bf2a50.svg",N="/assets/500.e6b61a3c.svg",c=s=>(P("data-v-c9517dc1"),s=s(),k(),s),A={class:"error-page"},T={class:"container"},V={class:"img-box"},M=["src"],R={class:"tip-box"},q=c(()=>e("div",{class:"ops"},"\u62B1\u6B49!",-1)),z=c(()=>e("div",{class:"tip"},"\u5F53\u524D\u9875\u9762\u4E0D\u5B58\u5728...",-1)),U=c(()=>e("div",{class:"info"},"\u8BF7\u68C0\u67E5\u60A8\u8F93\u5165\u7684\u7F51\u5740\u662F\u5426\u6B63\u786E\uFF0C\u6216\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u8FD4\u56DE\u9996\u9875",-1)),j=_({name:"ErrorPage"}),G=_({...j,setup(s){const n=m(),i=f(),t=u(5),o=u(0),r=u(404);if(n.fullPath){const a=n.fullPath.split("/");r.value=Number(a[a.length-1])}const l=g({403:y,404:S,500:N});h(()=>{p()}),B(()=>{clearInterval(o.value)});const d=()=>{i.back()},p=()=>{o.value=setInterval(()=>{t.value?t.value--:clearInterval(o.value)},1e3)};return(a,H)=>{const v=x("a-button");return b(),F("div",A,[e("section",T,[e("div",V,[e("img",{class:"img-parent",src:l[r.value]},null,8,M)]),e("div",R,[q,z,U,D(v,{type:"primary",shape:"round",size:"large",onClick:d},{default:E(()=>[C(I(t.value)+" \u8FD4\u56DE\u9996\u9875",1)]),_:1})])])])}}});const K=w(G,[["__scopeId","data-v-c9517dc1"]]);export{K as default};