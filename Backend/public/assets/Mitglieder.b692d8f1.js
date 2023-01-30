import{e as B,U as _,aq as H,D as b,L as K,a as s,c as d,u as t,i as x,w as a,b as l,ab as S,f as e,ac as V,az as O,aA as W,aB as Z,_ as A,aC as G,F as $,r as D,aD as I,z as J,t as h,P as y,aa as R,a8 as j,ay as Q,h as L,g as ee,au as E,T as te,aE as se,$ as F,aw as ae}from"./vendor.81fa8b35.js";import{P}from"./index.05f51811.js";const le=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),ne={class:"fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"},oe={class:"relative"},re={key:1,class:"p-4 text-sm text-gray-500"},ie={class:"px-4 sm:px-6 lg:px-8 mt-6 mb-6"},de={class:"sm:flex sm:items-center"},ce=e("div",{class:"sm:flex-auto"},[e("h1",{class:"text-xl font-semibold text-gray-900"},"Trainer"),e("p",{class:"mt-2 text-sm text-gray-700"}," Hier werden alle Trainer dieser Mannschaft angezeigt. Trainer k\xF6nnen Trainings erstellen, bearbeiten, l\xF6schen, sowie Ank\xFCndigungen posten ")],-1),ue={key:0,class:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none"},me={class:"mt-8 flex flex-col"},pe={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},fe={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},_e={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},he={class:"min-w-full divide-y divide-gray-300"},xe=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"}," Name "),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," Role "),e("th",{scope:"col",class:"relative py-3.5 pl-3 pr-4 sm:pr-6"},[e("span",{class:"sr-only"},"Edit")])])],-1),ve={class:"divide-y divide-gray-200 bg-white"},ye={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6"},ge={class:"flex items-center"},we={class:"h-10 w-10 flex-shrink-0"},be=["src"],$e={class:"ml-4"},ke={class:"font-medium text-gray-900"},Ce={class:"text-gray-500"},Se={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},Te={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},Ae=["onClick"],ze=L(" Entfernen "),X={async setup(z){let p,g;const k=P(),u=B().currentRoute.value.params.id;let m=_(""),f=_([]);const v=_([]),c=_(!1);try{const{data:r}=([p,g]=H(()=>b.get(`/getTrainer/${u}`)),p=await p,g(),p);f.value=r,console.log(f.value)}catch(r){console.log(r)}const w=K(()=>m.value===""?[]:v.value.filter(r=>r.vorname.toLowerCase().includes(m.value.toLowerCase())));async function T(r){try{await b.post("/addTrainerMannschaft",{t_id:r.t_id,m_id:u}),f.value.push(r),c.value=!1}catch{showError.value=!0,c.value=!1,console.log("Der Trainer ist schon vorhanden"),setTimeout(()=>showError.value=!1,3e3)}}async function M(){const r=await U();console.log(r),v.value=r,c.value=!0}async function U(){const{data:r}=await b.get("/getAllTrainer");return r}async function N(r){r.t_id!=k.getAktivenUser.data.t_id&&(f.value=f.value.filter(n=>n.t_id!=r.t_id),await b.delete(`/trainerMannschaftDel/${r.t_id}/${u}`))}return(r,n)=>(s(),d($,null,[t(k).getAktivenUser.type=="Trainer"?(s(),x(t(j),{key:0,show:c.value,as:"template",onAfterLeave:n[2]||(n[2]=o=>A(m)?m.value="":m=""),appear:""},{default:a(()=>[l(t(R),{as:"div",class:"relative z-10",onClose:n[1]||(n[1]=o=>c.value=!1)},{default:a(()=>[l(t(S),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[le]),_:1}),e("div",ne,[l(t(S),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[l(t(V),{class:"mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"},{default:a(()=>[l(t(O),{"onUpdate:modelValue":T},{default:a(()=>[e("div",oe,[l(t(W),{class:"pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400","aria-hidden":"true"}),l(t(Z),{class:"h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm",placeholder:"Search...",onChange:n[0]||(n[0]=o=>A(m)?m.value=o.target.value:m=o.target.value)})]),t(w).length>0?(s(),x(t(G),{key:0,static:"",class:"max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"},{default:a(()=>[(s(!0),d($,null,D(t(w),o=>(s(),x(t(I),{key:o.id,value:o,as:"template"},{default:a(({active:i})=>[e("li",{class:J(["cursor-default select-none px-4 py-2",i&&"bg--600 text-black"])},h(o.vorname)+" "+h(o.nachname),3)]),_:2},1032,["value"]))),128))]),_:1})):y("",!0),t(m)!==""&&t(w).length===0?(s(),d("p",re," No people found. ")):y("",!0)]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"])):y("",!0),e("div",ie,[e("div",de,[ce,t(k).getAktivenUser.type=="Trainer"?(s(),d("div",ue,[e("button",{onClick:M,type:"button",class:"bg-lime-500 inline-flex items-center justify-center rounded-md border border-transparent bg--600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none sm:w-auto"}," Add Trainer ")])):y("",!0)]),e("div",me,[e("div",pe,[e("div",fe,[e("div",_e,[e("table",he,[xe,e("tbody",ve,[(s(!0),d($,null,D(t(f),o=>(s(),d("tr",{key:o.email},[e("td",ye,[e("div",ge,[e("div",we,[e("img",{class:"h-10 w-10 rounded-full",src:o.avatarpath,alt:""},null,8,be)]),e("div",$e,[e("div",ke,h(o.vorname)+" "+h(o.nachname),1),e("div",Ce,h(o.email),1)])])]),e("td",Se,h(o.role),1),e("td",Te,[e("button",{onClick:i=>N(o),type:"button",class:"inline-flex items-center rounded-md border border-red-600 bg-white text-red-600 px-4 py-2 text-sm font-medium shadow-sm hover:text-red-700"},[l(t(Q),{class:"-ml-1 mr-2 h-5 w-5","aria-hidden":"true"}),ze],8,Ae)])]))),128))])])])])])])])],64))}},De=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),Ee={class:"fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"},Le={class:"relative"},Me={key:1,class:"p-4 text-sm text-gray-500"},Ue={class:"px-4 sm:px-6 lg:px-8 mt-6"},Ne={class:"sm:flex sm:items-center"},Be=e("div",{class:"sm:flex-auto"},[e("h1",{class:"text-xl font-semibold text-gray-900"},"Spieler"),e("p",{class:"mt-2 text-sm text-gray-700"}," Hier werden alle Spieler angezeigt die in dieser Mannschaft spielen. ")],-1),Ve={key:0,class:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none"},Re={key:0,class:"mt-8 flex flex-col"},je={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},Pe={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},qe={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},Fe={class:"min-w-full divide-y divide-gray-300"},He=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"}," Name "),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," Role "),e("th",{scope:"col",class:"relative py-3.5 pl-3 pr-4 sm:pr-6"},[e("span",{class:"sr-only"},"Edit")])])],-1),Ke={class:"divide-y divide-gray-200 bg-white"},Oe={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6"},We={class:"flex items-center"},Ze={class:"h-10 w-10 flex-shrink-0"},Ge=["src"],Ie={class:"ml-4"},Je={class:"font-medium text-gray-900"},Qe={class:"text-gray-500"},Xe={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},Ye={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},et=["onClick"],tt=L(" Entfernen "),st={key:1},at=ee('<div class="text-center text-3xl font-bold"><div class="relative bg-white py-12"><div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"><p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Keine Spieler vorhanden </p><p class="mx-auto mt-5 max-w-prose text-lg font-normal text-gray-500"> Du kannst neue Spieler zu der Mannschaft \xFCber den Button hinzuf\xFCgen, oder indem du ihnen den Zugangscode gibst </p></div></div></div>',1),lt=[at],Y={async setup(z){let p,g;const k=P(),C=B(),u=_(C.currentRoute.value.params.id);let m=_([]);const f=_(!1),v=_("");let c=_([]),w=_(!1);try{const{data:n}=([p,g]=H(()=>b.get(`/getSpieler/${u.value}`)),p=await p,g(),p);c.value=n}catch(n){w.value=!0,console.log(n)}const T=K(()=>v.value===""?[]:m.value.filter(n=>(console.log(n),n.vorname.toLowerCase().includes(v.value.toLowerCase()))));async function M(n){try{await b.post("/addSpielerMannschaft",{s_id:n.s_id,m_id:u.value}),c.value.push(n),f.value=!1}catch{showError.value=!0,f.value=!1,console.log("Der Spieler ist schon vorhanden"),setTimeout(()=>showError.value=!1,3e3)}}async function U(){const n=await N();m.value=n,f.value=!0}async function N(){const{data:n}=await b.get("/getAllSpieler");return n}async function r(n){c.value=c.value.filter(o=>o.s_id!=n.s_id),await b.delete(`/spielerMannschaftDel/${n.s_id}/${u.value}`)}return(n,o)=>(s(),d($,null,[t(k).getAktivenUser.type=="Trainer"?(s(),x(t(j),{key:0,show:f.value,as:"template",onAfterLeave:o[2]||(o[2]=i=>v.value=""),appear:""},{default:a(()=>[l(t(R),{as:"div",class:"relative z-10",onClose:o[1]||(o[1]=i=>f.value=!1)},{default:a(()=>[l(t(S),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[De]),_:1}),e("div",Ee,[l(t(S),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[l(t(V),{class:"mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"},{default:a(()=>[l(t(O),{"onUpdate:modelValue":M},{default:a(()=>[e("div",Le,[l(t(W),{class:"pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400","aria-hidden":"true"}),l(t(Z),{class:"h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm",placeholder:"Search...",onChange:o[0]||(o[0]=i=>v.value=i.target.value)})]),t(T).length>0?(s(),x(t(G),{key:0,static:"",class:"max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"},{default:a(()=>[(s(!0),d($,null,D(t(T),i=>(s(),x(t(I),{key:i.id,value:i,as:"template"},{default:a(({active:q})=>[e("li",{class:J(["cursor-default select-none px-4 py-2",q&&"bg--600 text-black"])},h(i.vorname)+" "+h(i.nachname),3)]),_:2},1032,["value"]))),128))]),_:1})):y("",!0),v.value!==""&&t(T).length===0?(s(),d("p",Me," No people found. ")):y("",!0)]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"])):y("",!0),e("div",Ue,[e("div",Ne,[Be,t(k).getAktivenUser.type=="Trainer"?(s(),d("div",Ve,[e("button",{onClick:U,type:"button",class:"bg-lime-500 inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none sm:w-auto"}," Add Spieler ")])):y("",!0)]),t(w)?(s(),d("div",st,lt)):(s(),d("div",Re,[e("div",je,[e("div",Pe,[e("div",qe,[e("table",Fe,[He,e("tbody",Ke,[(s(!0),d($,null,D(t(c),i=>(s(),d("tr",{key:i.email},[e("td",Oe,[e("div",We,[e("div",Ze,[e("img",{class:"h-10 w-10 rounded-full",src:i.avatarpath,alt:""},null,8,Ge)]),e("div",Ie,[e("div",Je,h(i.vorname)+" "+h(i.nachname),1),e("div",Qe,h(i.email),1)])])]),e("td",Xe,h(i.role),1),e("td",Ye,[e("button",{onClick:q=>r(i),type:"button",class:"inline-flex items-center rounded-md border border-red-600 bg-white text-red-600 px-4 py-2 text-sm font-medium shadow-sm hover:text-red-700"},[l(t(Q),{class:"-ml-1 mr-2 h-5 w-5","aria-hidden":"true"}),tt],8,et)])]))),128))])])])])])]))])],64))}},nt=e("h1",{class:"text-center text-xl font-bold mt-5"},"Loading ...",-1),ot=e("br",null,null,-1),rt=e("hr",null,null,-1),it=e("br",null,null,-1),dt=e("h1",{class:"text-center text-xl font-bold mt-5"},"Loading ...",-1),ct={setup(z){return(p,g)=>(s(),d($,null,[(s(),x(E,null,{fallback:a(()=>[nt]),default:a(()=>[l(X)]),_:1})),ot,rt,it,(s(),x(E,null,{fallback:a(()=>[dt]),default:a(()=>[l(Y)]),_:1}))],64))}},ut=e("h1",{class:"text-center text-xl font-bold mt-5"},"Loading ...",-1),mt=e("br",null,null,-1),pt=e("hr",null,null,-1),ft=e("br",null,null,-1),_t=e("h1",{class:"text-center text-xl font-bold mt-5"},"Loading ...",-1),ht={setup(z){return(p,g)=>(s(),d($,null,[(s(),x(E,null,{fallback:a(()=>[ut]),default:a(()=>[l(X)]),_:1})),mt,pt,ft,(s(),x(E,null,{fallback:a(()=>[_t]),default:a(()=>[l(Y)]),_:1}))],64))}},xt={"aria-live":"assertive",class:"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-40"},vt={class:"flex w-full flex-col items-center space-y-4 sm:items-end"},yt={key:0,class:"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-gray-200 shadow-lg ring-1 ring-black ring-opacity-5"},gt={class:"p-4"},wt={class:"flex items-start"},bt={class:"flex-shrink-0"},$t=e("div",{class:"ml-3 w-0 flex-1 pt-0.5"},[e("p",{class:"text-sm font-medium text-gray-900"},"Die Person ist schon vorhanden"),e("p",{class:"mt-1 text-sm text-gray-500"}," Du kannst jede Person nur einmal zu einer Mannschaft hinzuf\xFCgen. ")],-1),kt={class:"ml-4 flex flex-shrink-0"},Ct=e("span",{class:"sr-only"},"Close",-1),St=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),Tt={class:"fixed inset-0 z-10 overflow-y-auto"},At={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},zt={class:"mt-3 text-center sm:mt-5"},Dt=e("div",{class:"mt-2"},[e("p",{class:"text-sm text-gray-500"}," Mit diesem Code k\xF6nnen andere Spieler und Trainer dieser Mannschaft beitreten ")],-1),Et={class:"mt-5 sm:mt-6"},Lt={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},Mt=e("div",{class:"min-w-0 flex-1 my-2"},[e("h1",{class:"text-3xl font-bold text-gray-900"},"Mitglieder")],-1),Ut={class:"mt-4 flex sm:mt-0 sm:ml-4"},Nt=L(" Code Anzeigen "),Rt={setup(z){const p=P(),g=B(),k=_(g.currentRoute.value.params.id);let C=_(!1),u=_(!1),m=_(null);async function f(){const v=await b.get(`/getCode/${k.value}`);m.value=v.data.zugangscode,u.value=!0}return(v,c)=>(s(),d($,null,[e("div",xt,[e("div",vt,[l(te,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:a(()=>[t(C)?(s(),d("div",yt,[e("div",gt,[e("div",wt,[e("div",bt,[l(t(F),{class:"h-6 w-6 text-red-500","aria-hidden":"true"})]),$t,e("div",kt,[e("button",{type:"button",onClick:c[0]||(c[0]=w=>A(C)?C.value=!1:C=!1),class:"inline-flex rounded-md bg-gray-200 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring--500 focus:ring-offset-2"},[Ct,l(t(F),{class:"h-5 w-5","aria-hidden":"true"})])])])])])):y("",!0)]),_:1})])]),l(t(j),{as:"template",show:t(u)},{default:a(()=>[l(t(R),{as:"div",class:"relative z-10",onClose:c[2]||(c[2]=w=>A(u)?u.value=!1:u=!1)},{default:a(()=>[l(t(S),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[St]),_:1}),e("div",Tt,[e("div",At,[l(t(S),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:a(()=>[l(t(V),{class:"relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"},{default:a(()=>[e("div",null,[e("div",zt,[l(t(ae),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:a(()=>[L("CODE: "+h(t(m)),1)]),_:1}),Dt])]),e("div",Et,[e("button",{type:"button",class:"inline-flex w-full justify-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none sm:text-sm",onClick:c[1]||(c[1]=w=>A(u)?u.value=!1:u=!1)}," Close ")])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]),e("div",Lt,[Mt,e("div",Ut,[t(p).getAktivenUser.type=="Trainer"?(s(),d("button",{key:0,onClick:f,type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"},[Nt,l(t(se),{class:"ml-2 -mr-1 h-5 w-5","aria-hidden":"true"})])):y("",!0)])]),t(p).getAktivenUser.type=="Trainer"?(s(),x(ct,{key:0})):(s(),x(ht,{key:1}))],64))}};export{Rt as default};
