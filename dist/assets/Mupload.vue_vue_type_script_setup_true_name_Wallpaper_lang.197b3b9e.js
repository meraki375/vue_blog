import{d as n,r as f,l as c,b as _,m as y,w as g,q as S}from"./index.9adf62bd.js";import{u as b}from"./index.685b6aaa.js";const v=n({name:"Wallpaper"}),K=n({...v,props:{fileList:{type:Array,default:()=>[{url:""}]},list_type:{type:Boolean,default:()=>"picture-card"},limit:{type:Number,default:()=>1},fileKey:String,form:Object,uploadFolder:String},emits:["uploadSuccess","uploadError"],setup(p,{emit:a}){const e=p;f({fileList:[],imgUrl:"",currentImageUid:null,typeList:"image/*",percent:0});const u=async t=>{const{onProgress:o,onError:s,onSuccess:l,fileItem:i,name:h}=t;return await b(i.name,i.file,e.uploadFolder).then(r=>{r.code===500?s(r.msg):l(r.msg)}),{abort(){}}},m=t=>{let o="https://"+t.response.Location;e.fileKey&&(e.form[e.fileKey]=o),a("uploadSuccess",t,e.fileKey,o)},d=t=>{console.log(t),a("uploadError",t)};return(t,o)=>{const s=c("a-upload"),l=c("a-space");return _(),y(l,{direction:"vertical",style:{width:"100%"}},{default:g(()=>[S(s,{"list-type":e.list_type,limit:e.limit,"custom-request":u,onSuccess:m,"before-remove":d,"image-preview":"","file-list":e.fileList},null,8,["list-type","limit","file-list"])]),_:1})}}});export{K as _};