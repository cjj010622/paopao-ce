import{_ as z}from"./post-item.0d45d503.js";import{_ as B}from"./post-skeleton.f93e9860.js";import{_ as E}from"./main-nav.154d8840.js";import{ai as P,d as R,r as n,a2 as $,Y as o,a4 as a,a5 as p,aj as b,cu as F,W as e,a3 as M,a7 as m,ab as N,ac as S,$ as V,al as j,a6 as q}from"./index.f912861b.js";import{_ as I}from"./List.28de093a.js";import{_ as L}from"./Pagination.ce7c28b0.js";import{a as T,_ as U}from"./Skeleton.97573176.js";import"./content.ebd1cc52.js";import"./formatTime.e07969bb.js";import"./Thing.48839846.js";const W={key:0,class:"pagination-wrap"},Y={key:0,class:"skeleton-wrap"},A={key:1},D={key:0,class:"empty-wrap"},G=R({__name:"Collection",setup(H){const d=V(),g=b();j();const s=n(!1),_=n([]),l=n(+g.query.p||1),c=n(20),u=n(0),r=()=>{s.value=!0,F({page:l.value,page_size:c.value}).then(t=>{s.value=!1,_.value=t.list,u.value=Math.ceil(t.pager.total_rows/c.value),window.scrollTo(0,0)}).catch(t=>{s.value=!1})},v=t=>{l.value=t,r()};return $(()=>{r()}),(t,J)=>{const f=E,h=L,k=B,y=T,w=z,C=U,x=I;return e(),o("div",null,[a(f,{title:"\u6536\u85CF"}),a(x,{class:"main-content-wrap",bordered:""},{footer:p(()=>[u.value>1?(e(),o("div",W,[a(h,{page:l.value,"onUpdate:page":v,"page-slot":M(d).state.collapsedRight?5:8,"page-count":u.value},null,8,["page","page-slot","page-count"])])):m("",!0)]),default:p(()=>[s.value?(e(),o("div",Y,[a(k,{num:c.value},null,8,["num"])])):(e(),o("div",A,[_.value.length===0?(e(),o("div",D,[a(y,{size:"large",description:"\u6682\u65E0\u6570\u636E"})])):m("",!0),(e(!0),o(N,null,S(_.value,i=>(e(),q(C,{key:i.id},{default:p(()=>[a(w,{post:i},null,8,["post"])]),_:2},1024))),128))]))]),_:1})])}}});var se=P(G,[["__scopeId","data-v-2f4c0166"]]);export{se as default};