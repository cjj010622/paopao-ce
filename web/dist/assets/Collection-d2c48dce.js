import{_ as P}from"./post-item.vue_vue_type_style_index_0_lang-0b64a8ce.js";import{_ as z}from"./post-skeleton-8710588f.js";import{_ as B}from"./main-nav.vue_vue_type_style_index_0_lang-6d03f8cc.js";import{u as F}from"./vuex-4d2f7b35.js";import{b as N,u as R}from"./vue-router-29e6667f.js";import{K as b,_ as I}from"./index-0f3021a1.js";import{d as M,r as a,j as S,c as e,U as n,a0 as m,Z as U,N as u,o as t,F as V,a3 as $,P as j}from"./@vue-d002002f.js";import{F as q,G as E,I as G,H}from"./naive-ui-88b48034.js";import"./content-b5ab8047.js";import"./@vicons-4022100b.js";import"./paopao-video-player-d47e9bf6.js";import"./formatTime-000dbebb.js";import"./moment-b7869f98.js";import"./copy-to-clipboard-1dd3075d.js";import"./toggle-selection-93f4ad84.js";import"./vooks-77bdadbd.js";import"./evtd-b614532e.js";import"./axios-4a70c6fc.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-0232e3b9.js";import"./@css-render-6b6cdab1.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";const K={key:0,class:"skeleton-wrap"},L={key:1},T={key:0,class:"empty-wrap"},Z={key:0,class:"pagination-wrap"},A=M({__name:"Collection",setup(D){const d=F(),g=N();R();const s=a(!1),p=a([]),_=a(+g.query.p||1),i=a(20),r=a(0),l=()=>{s.value=!0,b({page:_.value,page_size:i.value}).then(o=>{s.value=!1,p.value=o.list,r.value=Math.ceil(o.pager.total_rows/i.value),window.scrollTo(0,0)}).catch(o=>{s.value=!1})},v=o=>{_.value=o,l()};return S(()=>{l()}),(o,J)=>{const f=B,h=z,k=G,y=P,w=H,C=q,x=E;return t(),e("div",null,[n(f,{title:"收藏"}),n(C,{class:"main-content-wrap",bordered:""},{default:m(()=>[s.value?(t(),e("div",K,[n(h,{num:i.value},null,8,["num"])])):(t(),e("div",L,[p.value.length===0?(t(),e("div",T,[n(k,{size:"large",description:"暂无数据"})])):u("",!0),(t(!0),e(V,null,$(p.value,c=>(t(),j(w,{key:c.id},{default:m(()=>[n(y,{post:c},null,8,["post"])]),_:2},1024))),128))]))]),_:1}),r.value>0?(t(),e("div",Z,[n(x,{page:_.value,"onUpdate:page":v,"page-slot":U(d).state.collapsedRight?5:8,"page-count":r.value},null,8,["page","page-slot","page-count"])])):u("",!0)])}}});const zt=I(A,[["__scopeId","data-v-1e709369"]]);export{zt as default};