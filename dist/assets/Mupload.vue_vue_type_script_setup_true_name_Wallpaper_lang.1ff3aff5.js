import{d as n,J as f,r as c,o as _,c as y,w as g,h as S}from"./index.9e0cf28f.js";import{u as h}from"./index.6c2a201d.js";const v=n({name:"Wallpaper"}),K=n({...v,props:{fileList:{type:Array,default:()=>[{url:""}]},list_type:{type:Boolean,default:()=>"picture-card"},limit:{type:Number,default:()=>1},fileKey:String,form:Object,uploadFolder:String},emits:["uploadSuccess","uploadError"],setup(p,{emit:a}){const e=p;f({fileList:[],imgUrl:"",currentImageUid:null,typeList:"image/*",percent:0});const u=async t=>{const{onProgress:o,onError:s,onSuccess:l,fileItem:i,name:b}=t;return await h(i.name,i.file,e.uploadFolder).then(r=>{r.code===500?s(r.msg):l(r.msg)}),{abort(){}}},m=t=>{let o="https://"+t.response.Location;e.fileKey&&(e.form[e.fileKey]=o),a("uploadSuccess",t,e.fileKey,o)},d=t=>{console.log(t),a("uploadError",t)};return(t,o)=>{const s=c("a-upload"),l=c("a-space");return _(),y(l,{direction:"vertical",style:{width:"100%"}},{default:g(()=>[S(s,{"list-type":e.list_type,limit:e.limit,"custom-request":u,onSuccess:m,"before-remove":d,"image-preview":"","file-list":e.fileList},null,8,["list-type","limit","file-list"])]),_:1})}}});export{K as _};