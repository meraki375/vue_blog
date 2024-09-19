import{_ as te}from"./Mupload.vue_vue_type_script_setup_true_name_Wallpaper_lang.4e0c11cd.js";import{_ as ae}from"./GiFooter.852f6969.js";import{_ as oe}from"./GiTable.c7d0838f.js";import"./index.10815fb0.js";import{u as ue}from"./usePagination.8b1a8de1.js";import"./viewer.6e676ff5.js";import{af as C,d as z,r as le,A as w,l,f1 as ne,b as D,c as se,a5 as re,m as ie,w as a,q as t,e as g,t as S,g as m,B as c,W as ce,y as de,aj as _,p as me,i as _e,_ as pe}from"./index.9d32ee8a.js";import"./index.ea7c4fc7.js";import"./index.471c79dc.js";function fe(s){return C.get("api/note/list",s)}function A(s){return C.post("api/note/edit",s)}function Be(s){return C.delete("api/note/del",s)}const $=s=>(me("data-v-5824ccae"),s=s(),_e(),s),ge={class:"table-page"},ve=$(()=>g("span",null,"\u65B0\u589E",-1)),he=$(()=>g("span",null,"\u641C\u7D22",-1)),ye=z({name:"Note"}),Fe=z({...ye,setup(s){const{proxy:v}=ce(),h={title:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898",trigger:"change"}],content:[{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9",trigger:"change"}],url:[{required:!0,message:"\u8BF7\u8F93\u5165\u7F51\u7EDC",trigger:"change"}]},o=le({q:"",dateTime:"",form:{id:0,title:"",content:"",url:"",cover_url:[],status:1},fileList:[]}),y=w(!1),V=w([]),r=w(!1),{current:k,pageSize:x,total:q,changeCurrent:U,changePageSize:L,setTotal:N}=ue(()=>{i()}),i=async()=>{let n={pageSize:x.value,current:k.value,q:o.q,date:o.dateTime};try{y.value=!0;const e=await fe(n);e.code&&(V.value=e.list,N(e.count))}catch(e){return e}finally{y.value=!1}};i();const P=()=>(de(()=>{o.form.id=0,o.fileList=[]}),v.$refs.formRef.resetFields(),r.value=!0),T=n=>(o.form={...n},n.cover_url&&(o.fileList=[{url:n.cover_url}]),r.value=!0),I=async n=>{let e=await A(n);e.code===201?(i(),_.success(e.message),r.value=!1):_.error(e.message)},M=async n=>{let e=await Be({id:n});return e.code===201?(i(),_.success(e.message)):_.error(e.message)},R=async()=>{v.$refs.formRef.validate(async n=>{if(n)r.value=!0;else{let e=await A({title:o.form.title,content:o.form.content,cover_url:o.form.cover_url,url:o.form.url,status:o.form.status,id:o.form.id});e.code===201?(i(),_.success(e.message),r.value=!1):_.error(e.message)}})},Y=()=>{r.value=!1};return(n,e)=>{const O=l("icon-plus"),d=l("a-button"),F=l("a-input"),G=l("icon-search"),H=l("a-input-group"),p=l("a-table-column"),b=l("a-switch"),W=l("a-popconfirm"),E=l("a-space"),j=oe,K=ae,J=te,f=l("a-form-item"),Q=l("a-textarea"),X=l("a-form"),Z=l("a-modal"),ee=ne("loading");return D(),se("div",ge,[re((D(),ie(j,{"row-key":"id",data:V.value,scroll:{x:"100%",y:"100%",minWidth:1e3},pagination:{showPageSize:!0,total:m(q),current:m(k),pageSize:m(x)},onPageChange:m(U),onPageSizeChange:m(L),onRefresh:i},{"custom-extra":a(()=>[t(d,{type:"primary",onClick:P},{icon:a(()=>[t(O)]),default:a(()=>[ve]),_:1}),t(H,null,{default:a(()=>[t(F,{placeholder:"\u8BF7\u8F93\u5165\u7B14\u8BB0\u6807\u9898...","allow-clear":"",style:{width:"250px"},modelValue:o.q,"onUpdate:modelValue":e[0]||(e[0]=u=>o.q=u)},null,8,["modelValue"]),t(d,{type:"primary",onClick:i},{icon:a(()=>[t(G)]),default:a(()=>[he]),_:1})]),_:1})]),columns:a(()=>[t(p,{title:"\u7F16\u53F7",width:66,align:"center","data-index":"id"}),t(p,{title:"\u7B14\u8BB0\u6807\u9898","data-index":"title",width:120,align:"center"}),t(p,{title:"\u521B\u5EFA\u65F6\u95F4","data-index":"createAt",width:150,align:"center"},{cell:a(({record:u})=>[g("span",null,S(m(v).$moment(u.createAt).format("YYYY-MM-DD HH:mm:ss")),1)]),_:1}),t(p,{title:"\u4E0A\u4E0B\u67B6",width:100,align:"center"},{cell:a(({record:u})=>[t(b,{modelValue:u.status,"onUpdate:modelValue":B=>u.status=B,size:"medium","checked-value":1,"unchecked-value":0,onChange:B=>I(u)},{checked:a(()=>[c("\u4E0A\u67B6")]),unchecked:a(()=>[c("\u4E0B\u67B6")]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(p,{title:"\u64CD\u4F5C",width:200,align:"center"},{cell:a(({record:u})=>[t(E,null,{default:a(()=>[t(d,{type:"primary",size:"mini",onClick:B=>T(u)},{default:a(()=>[c("\u4FEE\u6539")]),_:2},1032,["onClick"]),t(W,{type:"warning",content:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u9879\u5417?",onOk:B=>M(u.id)},{default:a(()=>[t(d,{type:"primary",status:"danger",size:"mini"},{default:a(()=>[c("\u5220\u9664")]),_:1})]),_:2},1032,["onOk"])]),_:2},1024)]),_:1})]),_:1},8,["data","pagination","onPageChange","onPageSizeChange"])),[[ee,y.value]]),t(K),t(Z,{visible:r.value,"onUpdate:visible":e[7]||(e[7]=u=>r.value=u)},{title:a(()=>[c(S(o.form.id?"\u7F16\u8F91\u7B14\u8BB0":"\u65B0\u589E\u7B14\u8BB0"),1)]),footer:a(()=>[t(E,null,{default:a(()=>[t(d,{type:"primary",onClick:e[5]||(e[5]=u=>R())},{default:a(()=>[c("\u786E\u8BA4")]),_:1}),t(d,{onClick:e[6]||(e[6]=u=>Y())},{default:a(()=>[c("\u53D6\u6D88")]),_:1})]),_:1})]),default:a(()=>[g("div",null,[t(X,{model:o.form,ref:"formRef"},{default:a(()=>[t(f,{field:"cover_url",label:"\u7B14\u8BB0\u5C01\u9762"},{default:a(()=>[t(J,{fileList:o.fileList,fileKey:"cover_url",form:o.form,uploadFolder:"image"},null,8,["fileList","form"])]),_:1}),t(f,{field:"title",label:"\u7B14\u8BB0\u6807\u9898",rules:h.title},{default:a(()=>[t(F,{placeholder:"\u8BF7\u8F93\u5165\u7B14\u8BB0\u6807\u9898...","allow-clear":"",style:{width:"250px"},modelValue:o.form.title,"onUpdate:modelValue":e[1]||(e[1]=u=>o.form.title=u)},null,8,["modelValue"])]),_:1},8,["rules"]),t(f,{field:"url",label:"\u7B14\u8BB0\u7F51\u5740",rules:h.url},{default:a(()=>[t(F,{placeholder:"\u8BF7\u8F93\u5165\u7B14\u8BB0\u7F51\u5740...","allow-clear":"",style:{width:"250px"},modelValue:o.form.url,"onUpdate:modelValue":e[2]||(e[2]=u=>o.form.url=u)},null,8,["modelValue"])]),_:1},8,["rules"]),t(f,{field:"content",label:"\u7B14\u8BB0\u5185\u5BB9",rules:h.content},{default:a(()=>[t(Q,{placeholder:"\u8BF7\u8F93\u5165\u7B14\u8BB0\u5185\u5BB9...","allow-clear":"",modelValue:o.form.content,"onUpdate:modelValue":e[3]||(e[3]=u=>o.form.content=u)},null,8,["modelValue"])]),_:1},8,["rules"]),t(f,{field:"status",label:"\u4E0A\u4E0B\u67B6"},{default:a(()=>[t(b,{modelValue:o.form.status,"onUpdate:modelValue":e[4]||(e[4]=u=>o.form.status=u),"checked-value":1,"unchecked-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])])]),_:1},8,["visible"])])}}});const Ae=pe(Fe,[["__scopeId","data-v-5824ccae"]]);export{Ae as default};
