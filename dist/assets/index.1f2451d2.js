import{d as F,r as N,A as y,l as t,b as E,c as A,q as e,w as u,B as n,y as q,p as T,i as I,e as C,_ as g,t as v,Y as z,n as U,a5 as V,a8 as h}from"./index.80a4af11.js";import{_ as R}from"./GiSvgIcon.1d209718.js";const S=l=>(T("data-v-02a347fe"),l=l(),I(),l),j={class:"step-1"},O=S(()=>C("span",null,"\u5FAE\u4FE1",-1)),G=S(()=>C("span",null,"\u652F\u4ED8\u5B9D",-1)),L=F({name:"Step1"}),P=F({...L,emits:["next"],setup(l,{emit:s}){const a=N({payAccount:"",recAccount:"1997***6962@qq.com",payType:1,recName:"Lin",amount:"1980"}),m={payAccount:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237"}],recAccount:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u8D26\u6237"}],recName:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}],amount:[{required:!0,message:"\u8BF7\u8F93\u5165\u8F6C\u8D26\u91D1\u989D"}]},i=y(),f=()=>{q(async()=>{var o;await((o=i.value)==null?void 0:o.validate())||s("next",a)})};return(c,o)=>{const _=t("a-option"),r=t("a-select"),d=t("a-form-item"),D=R,B=t("a-input"),w=t("a-input-group"),b=t("a-button"),x=t("a-form");return E(),A("div",j,[e(x,{ref_key:"formRef",ref:i,model:a,size:"medium","auto-label-width":""},{default:u(()=>[e(d,{field:"payAccount",label:"\u4ED8\u6B3E\u8D26\u6237",rules:m.payAccount},{default:u(()=>[e(r,{modelValue:a.payAccount,"onUpdate:modelValue":o[0]||(o[0]=p=>a.payAccount=p),placeholder:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237"},{default:u(()=>[e(_,{value:"326***228@qq.com"},{default:u(()=>[n("326***228@qq.com")]),_:1}),e(_,{value:"768***579@qq.com"},{default:u(()=>[n("768***579@qq.com")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["rules"]),e(d,{field:"recAccount",label:"\u6536\u6B3E\u8D26\u6237",rules:m.recAccount},{default:u(()=>[e(w,{style:{width:"100%"}},{default:u(()=>[e(r,{modelValue:a.payType,"onUpdate:modelValue":o[1]||(o[1]=p=>a.payType=p),style:{width:"150px"}},{default:u(()=>[e(_,{value:1},{icon:u(()=>[e(D,{name:"wechat"})]),default:u(()=>[O]),_:1}),e(_,{value:2},{icon:u(()=>[e(D,{name:"alipay"})]),default:u(()=>[G]),_:1})]),_:1},8,["modelValue"]),e(B,{modelValue:a.recAccount,"onUpdate:modelValue":o[2]||(o[2]=p=>a.recAccount=p),placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u8D26\u6237"},null,8,["modelValue"])]),_:1})]),_:1},8,["rules"]),e(d,{field:"recName",label:"\u6536\u6B3E\u4EBA\u59D3\u540D",rules:m.recName},{default:u(()=>[e(B,{modelValue:a.recName,"onUpdate:modelValue":o[3]||(o[3]=p=>a.recName=p),placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"},null,8,["modelValue"])]),_:1},8,["rules"]),e(d,{field:"amount",label:"\u8F6C\u8D26\u91D1\u989D",rules:m.amount},{default:u(()=>[e(B,{modelValue:a.amount,"onUpdate:modelValue":o[4]||(o[4]=p=>a.amount=p),placeholder:"\u8BF7\u8F93\u5165\u8F6C\u8D26\u91D1\u989D"},{prefix:u(()=>[n("\uFFE5")]),_:1},8,["modelValue"])]),_:1},8,["rules"]),e(d,null,{default:u(()=>[e(b,{type:"primary",onClick:f},{default:u(()=>[n("\u4E0B\u4E00\u6B65")]),_:1})]),_:1})]),_:1},8,["model"])])}}});const Y=g(P,[["__scopeId","data-v-02a347fe"]]),H={class:"step-2"},J=F({name:"Step2"}),K=F({...J,props:{form:{type:Object,default:()=>({payAccount:"",recAccount:"",payType:1,recName:"",amount:0})}},emits:["next","prev"],setup(l,{emit:s}){const a=N({password:"123456"}),m={password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]},i=y(!1),f=y(),c=()=>{q(async()=>{var _;try{i.value=!0,await((_=f.value)==null?void 0:_.validate())?i.value=!1:setTimeout(()=>{s("next"),i.value=!1},1e3)}catch(r){return r}})},o=()=>{s("prev")};return(_,r)=>{const d=t("a-descriptions-item"),D=t("a-descriptions"),B=t("a-divider"),w=t("a-input-password"),b=t("a-form-item"),x=t("a-button"),p=t("a-space"),$=t("a-form");return E(),A("div",H,[e(D,{column:1,size:"medium"},{default:u(()=>[e(d,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:u(()=>[n(v(l.form.payAccount),1)]),_:1}),e(d,{label:"\u6536\u6B3E\u8D26\u6237"},{default:u(()=>[n(v(l.form.recAccount),1)]),_:1}),e(d,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D"},{default:u(()=>[n(v(l.form.recName),1)]),_:1}),e(d,{label:"\u8F6C\u8D26\u91D1\u989D"},{default:u(()=>[n(v(l.form.amount),1)]),_:1})]),_:1}),e(B,{style:{"border-bottom-style":"dashed"}}),e($,{ref_key:"formRef",ref:f,size:"medium",model:a,"auto-label-width":""},{default:u(()=>[e(b,{field:"password",label:"\u652F\u4ED8\u5BC6\u7801",rules:m.password},{default:u(()=>[e(w,{modelValue:a.password,"onUpdate:modelValue":r[0]||(r[0]=k=>a.password=k),placeholder:"\u8BF7\u8F93\u5165\u652F\u4ED8\u5BC6\u7801"},null,8,["modelValue"])]),_:1},8,["rules"]),e(b,null,{default:u(()=>[e(p,null,{default:u(()=>[e(x,{type:"primary",loading:i.value,onClick:c},{default:u(()=>[n("\u63D0\u4EA4")]),_:1},8,["loading"]),e(x,{onClick:o},{default:u(()=>[n("\u4E0A\u4E00\u6B65")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])])}}});const M=g(K,[["__scopeId","data-v-385e0419"]]),Q={class:"step-3"},W={class:"info-box"},X=F({name:"Step3"}),Z=F({...X,props:{form:{type:Object,default:()=>({payAccount:"",recAccount:"",payType:1,recName:"",amount:0})}},emits:["again"],setup(l,{emit:s}){const a=()=>{s("again")};return(m,i)=>{const f=t("a-result"),c=t("a-descriptions-item"),o=t("a-statistic"),_=t("a-descriptions"),r=t("a-button"),d=t("a-space"),D=t("a-row");return E(),A("div",Q,[e(f,{status:"success",title:"\u64CD\u4F5C\u6210\u529F"},{subtitle:u(()=>[n("\u9884\u8BA1\u4E24\u5C0F\u65F6\u5185\u5230\u8D26")]),_:1}),C("section",W,[e(_,{size:"medium",column:1},{default:u(()=>[e(c,{label:"\u4ED8\u6B3E\u8D26\u6237\uFF1A"},{default:u(()=>[n(v(l.form.payAccount),1)]),_:1}),e(c,{label:"\u6536\u6B3E\u8D26\u6237\uFF1A"},{default:u(()=>[n(v(l.form.recAccount),1)]),_:1}),e(c,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D\uFF1A"},{default:u(()=>[n(v(l.form.recName),1)]),_:1}),e(c,{label:"\u8F6C\u8D26\u91D1\u989D\uFF1A"},{default:u(()=>[e(o,{value:Number(l.form.amount),precision:2,"value-from":0,animation:"","animation-duration":600},{prefix:u(()=>[n("\uFFE5")]),suffix:u(()=>[n("\u5143")]),_:1},8,["value"])]),_:1})]),_:1})]),e(D,{justify:"center"},{default:u(()=>[e(d,null,{default:u(()=>[e(r,{type:"primary",size:"medium",onClick:a},{default:u(()=>[n("\u518D\u8F6C\u4E00\u7B14")]),_:1}),e(r,{size:"medium"},{default:u(()=>[n("\u67E5\u770B\u8D26\u5355")]),_:1})]),_:1})]),_:1})])}}});const ee=g(Z,[["__scopeId","data-v-1c53bc95"]]),ue={class:"step-form"},te={class:"form-box"},oe=F({name:"StepForm"}),ae=F({...oe,setup(l){const s=y(1),a=y({payAccount:"",recAccount:"",payType:1,recName:"",amount:0}),m=y("to-right"),i=c=>{s.value++,c&&(a.value=c)},f=()=>{s.value--};return z(()=>s.value,(c,o)=>{c>o||c===1&&o===3?m.value="to-right":m.value="to-left"}),(c,o)=>{const _=t("a-step"),r=t("a-steps");return E(),A("div",ue,[C("section",te,[e(r,{current:s.value},{default:u(()=>[e(_,{description:"\u786E\u4FDD\u586B\u5199\u6B63\u786E"},{default:u(()=>[n("\u586B\u5199\u8F6C\u8D26\u4FE1\u606F")]),_:1}),e(_,{description:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F"},{default:u(()=>[n("\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F")]),_:1}),e(_,{description:"\u606D\u559C\u60A8\uFF0C\u8F6C\u8D26\u6210\u529F"},{default:u(()=>[n("\u5B8C\u6210\u8F6C\u8D26")]),_:1})]),_:1},8,["current"]),(E(),A("div",{key:s.value,class:U(m.value)},[V(e(Y,{onNext:i},null,512),[[h,s.value===1]]),V(e(M,{form:a.value,onNext:i,onPrev:f},null,8,["form"]),[[h,s.value===2]]),V(e(ee,{form:a.value,onAgain:o[0]||(o[0]=d=>s.value=1)},null,8,["form"]),[[h,s.value===3]])],2))])])}}});const le=g(ae,[["__scopeId","data-v-1bb395cd"]]);export{le as default};
