import{d as c,u as k,r as C,o as b,a as S,b as o,c as d,e,n as T,t as g,F as w,f as $,g as I,h as A,p as D,i as B,_ as y,j as N,k as F,l as v,m as l,w as m,q as f,K as M,s as x,v as h}from"./index.9d32ee8a.js";const V=n=>(D("data-v-76c8e22f"),n=n(),B(),n),j={class:"top-box"},z=V(()=>e("div",{class:"boys"},[e("div",{class:"girl"}),e("span"),e("span"),e("span"),e("span")],-1)),H=[z],K={class:"path-box"},L=["onClick"],q=["src"],E=c({name:"Aside"}),R=c({...E,setup(n){const _=k(),s=C({toggleDrawerStyle:!1,currentTime:u(),upTop:!1}),p=setInterval(()=>{s.currentTime=u()},1e3);b(()=>{clearInterval(p)});const i=r=>{r.path&&(s.upTop=!1,_.push({path:r.path}))};function u(){return S().format("HH:mm:ss")}return(r,t)=>(o(),d("div",null,[e("div",j,[e("div",{class:"container",onClick:t[0]||(t[0]=a=>s.upTop=!0)},H),e("div",{class:T(["drawer",s.toggleDrawerStyle?"isSearch":"",s.upTop?"upTop":""])},[e("div",{class:"backg",onClick:t[1]||(t[1]=a=>s.upTop=!1)}),e("div",{class:"time-box",onClick:t[2]||(t[2]=a=>s.upTop=!1)},g(s.currentTime),1),e("input",{class:"search-btn",type:"text",size:"30",placeholder:"\u641C\u7D22",autocomplete:"off",onFocus:t[3]||(t[3]=a=>s.toggleDrawerStyle=!0),onBlur:t[4]||(t[4]=a=>s.toggleDrawerStyle=!1)},null,32),e("div",K,[(o(!0),d(w,null,$(I(A).options.routes[0].children,a=>(o(),d("div",{key:a.path},[e("span",{onClick:Q=>i(a)},[e("img",{style:{"border-radius":"10px"},src:a.img_url},null,8,q)],8,L),e("p",null,g(a.name),1)]))),128))])],2)])]))}});const U=y(R,[["__scopeId","data-v-76c8e22f"]]),G=c({name:"Main"}),J=c({...G,setup(n){const _=N();return F(),console.log(_.cacheList),(s,p)=>{const i=v("router-view"),u=v("a-layout");return o(),l(u,{class:"main"},{default:m(()=>[f(i,null,{default:m(({Component:r,route:t})=>[(o(),l(M,{max:10},[t.meta&&t.meta.keepAlive?(o(),l(x(r),{key:t.path})):h("",!0)],1024)),t.meta.keepAlive?h("",!0):(o(),l(x(r),{key:0}))]),_:1})]),_:1})}}});const O=y(J,[["__scopeId","data-v-e05d6629"]]),P=c({__name:"index",setup(n){return(_,s)=>{const p=v("a-layout");return o(),l(p,{class:"layout"},{default:m(()=>[f(U),f(O)]),_:1})}}});const X=y(P,[["__scopeId","data-v-cb51ed54"]]);export{X as default};
