import{d as I,x as B,y as w,l as r,b as y,c as h,e as c,q as n,w as T,t as d,g as x,v as F,ab as M,I as N,a as R,_ as V}from"./index.9d32ee8a.js";const k="/assets/1.5cbee7af.png",z="/assets/2.03c0edde.png",C="/assets/3.06c814d5.png",L="/assets/4.39e0321b.png",P="/assets/5.81e1598e.png",S="/assets/6.43dbc857.png",q=M('<div class="img" data-v-fbe9631a><img src="'+k+'" data-v-fbe9631a></div><div data-v-fbe9631a><img class="bilibili" src="'+z+'" data-v-fbe9631a></div><div data-v-fbe9631a><img class="bilibili" src="'+C+'" data-v-fbe9631a></div><div data-v-fbe9631a><img class="bilibili" src="'+L+'" data-v-fbe9631a></div><div data-v-fbe9631a><img class="bilibili" src="'+P+'" data-v-fbe9631a></div><div data-v-fbe9631a><img class="bilibili" src="'+S+'" data-v-fbe9631a></div>',6),D={class:"content"},W={style:{"font-size":"36px",color:"#fff"}},X={key:0,class:"center"},j=I({name:"Wallpaper"}),$=I({...j,props:{form:Object,onlytitle:{type:Boolean,default:()=>!1}},setup(A){const s=A;return B(()=>{w(()=>{const _=document.querySelectorAll("header > div > img"),t={lastPosition:0,percentage:0};let m=null;const l=document.querySelector("header");l.addEventListener("mousemove",e=>{let o=e.clientX/document.body.offsetWidth-t.lastPosition;t.lastPosition=e.clientX/document.body.offsetWidth,t.percentage+=o,p(t.percentage)}),l.addEventListener("mouseenter",e=>{t.lastPosition=e.clientX/document.body.offsetWidth,clearInterval(m)}),l.addEventListener("mouseleave",e=>{m=f(t.percentage,0,400)});const p=e=>{let o=20*e,g=10;for(let[b,i]of _.entries()){o*=1.5;let u=Math.pow(b/_.length-e,2)*g;i.style.setProperty("--offset",`${o}px`),i.style.setProperty("--blur",`${u}px`)}},f=(e,o,g)=>{const i=g/40;let u=0,v=null;return v=setInterval(()=>{if(u>=i)clearInterval(v);else{const E=(o-e)*(Math.log(++u)/Math.log(i));t.percentage=e+E,p(t.percentage)}},40),v},a=document.querySelectorAll(".bilibili");setInterval(()=>{setTimeout(()=>{a[1].src="https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/cover/20230330185359.png"}),setTimeout(()=>{a[1].src="https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/cover/20230330185453.png"},100),setTimeout(()=>{a[1].src="https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/cover/20230330185359.png"},200),setTimeout(()=>{a[1].src="https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/cover/20230330185512.png"},300)},3e3)})}),(_,t)=>{const m=r("a-space"),l=r("icon-clock-circle"),p=r("icon-tag"),f=r("icon-message"),a=r("icon-eye");return y(),h("header",null,[q,c("template",D,[n(m,{size:"large"},{default:T(()=>[n(x(N),{type:s.form.icon,theme:"outline",size:"42px",fill:"#FFF"},null,8,["type"]),c("h1",W,d(s.form.title),1)]),_:1}),s.onlytitle?F("",!0):(y(),h("div",X,[n(l,{style:{margin:"10px",color:"aliceblue"}}),c("p",null,d(x(R)().diff(s.form.updatedAt,"day")+"\u5929\u524D"),1),n(p,{style:{margin:"10px",color:"aliceblue"}}),c("p",null,d(s.form.className),1),n(f,{style:{margin:"10px",color:"aliceblue"}}),c("p",null,d(s.form.comment_count||0)+" \u6761\u8BC4\u8BBA",1),n(a,{style:{margin:"10px",color:"aliceblue"}}),c("p",null,d(s.form.browse_count||0)+" \u6B21\u9605\u8BFB",1)]))])])}}});const Y=V($,[["__scopeId","data-v-fbe9631a"]]);export{Y as _};
