import{f as $,U as p,aq as b,i as k,a as e,c as n,u as a,F as m,r as w,e as t,t as l,L as C,b as u,ar as L,as as N,n as T,at as B,p as v,y as x,au as y}from"./vendor.82e95389.js";const R=t("h1",{class:"text-xl px-5 pt-3 font-bold"},"Letzte Ank\xFCndigungen:",-1),j={class:"bg-white px-4 py-6 sm:px-6"},V={class:"flex space-x-3"},z={class:"flex-shrink-0"},A=["src"],D={class:"min-w-0 flex-1"},E={class:"text-sm font-medium text-gray-900"},F={class:"hover:underline"},K={class:"text-sm text-gray-500"},S={class:"hover:underline"},q={class:"bg-gray-100 px-5 mt-4 py-5 rounded-md shadow-md lg:mr-16 w-auto"},M={class:"flex flex-rows items-center"},U={class:"font-bold mr-12 w-full"},G=t("div",{class:"ml-5 w-11/12"},null,-1),H={class:"mt-3"},I={key:1},J=t("p",{class:"text-center"},"Keine Nachrichten vorhanden",-1),O=[J],P={async setup(f){let s,c;const h=$();let o=p([]);const g=p(h.currentRoute.value.params.id);try{const{data:d}=([s,c]=b(()=>k.get(`/getNews/${g.value}`)),s=await s,c(),s);o.value=d,console.log(o.value.length),o.value.length>2&&(o.value.length=2)}catch(d){console.log(d)}return(d,r)=>(e(),n(m,null,[R,a(o).length!=0?(e(!0),n(m,{key:0},w(a(o),i=>(e(),n("div",null,[t("div",j,[t("div",V,[t("div",z,[t("img",{class:"h-10 w-10 rounded-full",src:i.avatarpath,alt:""},null,8,A)]),t("div",D,[t("p",E,[t("a",F,l(i.vorname)+" "+l(i.nachname),1)]),t("p",K,[t("a",S,l(i.datetime),1)])])]),t("div",q,[t("div",M,[t("h1",U,l(i.titel),1),G]),t("p",H,l(i.nachricht),1)])]),t("p",{class:"text-center text-gray-500 underline cursor-pointer",onClick:r[0]||(r[0]=_=>a(h).push(`/detailMannschaft/${a(h).currentRoute.value.params.id}/ankuendigungen`))}," mehr anzeigen ")]))),256)):(e(),n("div",I,O))],64))}},Q=t("h1",{class:"text-xl px-5 pt-3 font-bold"},"Kommende Trainings",-1),W=t("br",null,null,-1),X={key:0,class:"overflow-hidden bg-white shadow sm:rounded-md mx-3 mb-3"},Y={role:"list",class:"divide-y divide-gray-200"},Z=["onClick"],tt={class:"px-4 py-4 sm:px-6"},et={class:"flex items-center justify-between"},st={class:"truncate text-sm font-medium text-lime-500"},nt={class:"mt-2 sm:flex sm:justify-between"},ot={class:"sm:flex"},at={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0"},lt={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6"},rt={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0"},ct={key:1,class:"text-center text-2xl font-bold"},it=t("p",null,"Es sind noch keine Trainings vorhanden",-1),dt=[it],_t={async setup(f){let s,c;const h=$();let o=p([]);const g=p(h.currentRoute.value.params.id);try{const{data:r}=([s,c]=b(()=>k.get(`/getTrainings/${g.value}`)),s=await s,c(),s);o.value=r}catch(r){console.log(r)}const d=C(()=>"test");return(r,i)=>(e(),n(m,null,[Q,W,a(o).length>0?(e(),n("div",X,[t("ul",Y,[(e(!0),n(m,null,w(a(o),_=>(e(),n("li",{key:_.training_id},[t("div",{class:"block hover:bg-gray-50",onClick:vt=>r.$router.push(`/training/${_.training_id}`)},[t("div",tt,[t("div",et,[t("p",st,l(_.titel),1)]),t("div",nt,[t("div",ot,[t("div",at,[u(a(L),{class:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),t("p",null,l(a(d))+" Treffpunkt: "+l(_.trainingtreffpunkt),1)]),t("p",lt,[u(a(N),{class:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),T(" "+l(_.wo),1)])]),t("div",rt,[u(a(B),{class:"mr-1.5 h-7 w-7 flex-shrink-0 text-gray-400","aria-hidden":"true"})])])])],8,Z)]))),128))])])):(e(),n("div",ct,dt))],64))}},ut=t("h1",{class:"text-center text-xl font-bold mt-5"},"Loading...",-1),ht=t("br",null,null,-1),mt=t("hr",null,null,-1),xt=t("br",null,null,-1),pt=t("h1",{class:"text-center text-xl font-bold mt-5"},"Loading...",-1),ft={setup(f){return(s,c)=>(e(),n("div",null,[(e(),v(y,null,{fallback:x(()=>[ut]),default:x(()=>[u(P)]),_:1})),ht,mt,xt,(e(),v(y,null,{fallback:x(()=>[pt]),default:x(()=>[u(_t)]),_:1}))]))}},gt=t("div",{class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},[t("div",{class:"min-w-0 flex-1"},[t("h1",{class:"text-3xl font-bold text-gray-900 sm:truncate my-2"},"\xDCbersicht")])],-1),$t={setup(f){return(s,c)=>(e(),n(m,null,[gt,u(ft)],64))}};export{$t as default};
