import{a as s,c as r,f as e,e as U,Q as h,at as H,D as b,L as O,u as t,i as v,w as a,b as l,aa as T,ab as V,ax as K,ay as Q,V as A,az as W,F as $,r as M,aA as Z,z as G,t as _,O as y,a9 as R,a7 as j,h as L,g as ee,au as D,T as te,aw as se}from"./vendor.6904d49b.js";import{P}from"./index.2763a38f.js";import{r as I}from"./TrashIcon.00c64ce3.js";import{r as q}from"./XMarkIcon.7d639b45.js";function ae(S,u){return s(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"}),e("path",{"fill-rule":"evenodd",d:"M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z","clip-rule":"evenodd"})])}function J(S,u){return s(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"})])}const le=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),ne={class:"fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"},oe={class:"relative"},re={key:1,class:"p-4 text-sm text-gray-500"},ie={class:"px-4 sm:px-6 lg:px-8 mt-6 mb-6"},de={class:"sm:flex sm:items-center"},ce=e("div",{class:"sm:flex-auto"},[e("h1",{class:"text-xl font-semibold text-gray-900"},"Trainer"),e("p",{class:"mt-2 text-sm text-gray-700"}," Hier werden alle Trainer dieser Mannschaft angezeigt. Trainer k\xF6nnen Trainings erstellen, bearbeiten, l\xF6schen, sowie Ank\xFCndigungen posten ")],-1),ue={key:0,class:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none"},me={class:"mt-8 flex flex-col w-full"},pe={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},fe={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},he={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},_e={class:"min-w-full divide-y divide-gray-300"},ve=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"}," Name "),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," Role "),e("th",{scope:"col",class:"relative py-3.5 pl-3 pr-4 sm:pr-6"},[e("span",{class:"sr-only"},"Edit")])])],-1),xe={class:"divide-y divide-gray-200 bg-white"},ye={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6"},ge={class:"flex items-center"},we={class:"h-10 w-10 flex-shrink-0"},be=["src"],$e={class:"ml-4"},ke={class:"font-medium text-gray-900"},Ce={class:"text-gray-500"},Se={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},Te={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},ze=["onClick"],Ae=L(" Entfernen "),X={async setup(S){let u,g;const k=P(),m=U().currentRoute.value.params.id;let p=h(""),f=h([]);const x=h([]),c=h(!1);try{const{data:i}=([u,g]=H(()=>b.get(`/getTrainer/${m}`)),u=await u,g(),u);f.value=i,console.log(f.value)}catch(i){console.log(i)}const w=O(()=>p.value===""?[]:x.value.filter(i=>i.vorname.toLowerCase().includes(p.value.toLowerCase())));async function z(i){try{await b.post("/addTrainerMannschaft",{t_id:i.t_id,m_id:m}),f.value.push(i),c.value=!1}catch{showError.value=!0,c.value=!1,console.log("Der Trainer ist schon vorhanden"),setTimeout(()=>showError.value=!1,3e3)}}async function E(){const i=await B();console.log(i),x.value=i,c.value=!0}async function B(){const{data:i}=await b.get("/getAllTrainer");return i}async function N(i){i.t_id!=k.getAktivenUser.data.t_id&&(f.value=f.value.filter(n=>n.t_id!=i.t_id),await b.delete(`/trainerMannschaftDel/${i.t_id}/${m}`))}return(i,n)=>(s(),r($,null,[t(k).getAktivenUser.type=="Trainer"?(s(),v(t(j),{key:0,show:c.value,as:"template",onAfterLeave:n[2]||(n[2]=o=>A(p)?p.value="":p=""),appear:""},{default:a(()=>[l(t(R),{as:"div",class:"relative z-10",onClose:n[1]||(n[1]=o=>c.value=!1)},{default:a(()=>[l(t(T),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[le]),_:1}),e("div",ne,[l(t(T),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[l(t(V),{class:"mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"},{default:a(()=>[l(t(K),{"onUpdate:modelValue":z},{default:a(()=>[e("div",oe,[l(t(J),{class:"pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400","aria-hidden":"true"}),l(t(Q),{class:"h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm",placeholder:"Search...",onChange:n[0]||(n[0]=o=>A(p)?p.value=o.target.value:p=o.target.value)})]),t(w).length>0?(s(),v(t(W),{key:0,static:"",class:"max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"},{default:a(()=>[(s(!0),r($,null,M(t(w),o=>(s(),v(t(Z),{key:o.id,value:o,as:"template"},{default:a(({active:d})=>[e("li",{class:G(["cursor-default select-none px-4 py-2",d&&"bg--600 text-black"])},_(o.vorname)+" "+_(o.nachname),3)]),_:2},1032,["value"]))),128))]),_:1})):y("",!0),t(p)!==""&&t(w).length===0?(s(),r("p",re," No people found. ")):y("",!0)]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"])):y("",!0),e("div",ie,[e("div",de,[ce,t(k).getAktivenUser.type=="Trainer"?(s(),r("div",ue,[e("button",{onClick:E,type:"button",class:"bg-lime-500 inline-flex items-center justify-center rounded-md border border-transparent bg--600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none sm:w-auto"}," Add Trainer ")])):y("",!0)]),e("div",me,[e("div",pe,[e("div",fe,[e("div",he,[e("table",_e,[ve,e("tbody",xe,[(s(!0),r($,null,M(t(f),o=>(s(),r("tr",{key:o.email},[e("td",ye,[e("div",ge,[e("div",we,[e("img",{class:"h-10 w-10 rounded-full",src:o.avatarpath,alt:""},null,8,be)]),e("div",$e,[e("div",ke,_(o.vorname)+" "+_(o.nachname),1),e("div",Ce,_(o.email),1)])])]),e("td",Se,_(o.role),1),e("td",Te,[e("button",{onClick:d=>N(o),type:"button",class:"inline-flex items-center rounded-md border border-red-600 bg-white text-red-600 px-4 py-2 text-sm font-medium shadow-sm hover:text-red-700"},[l(t(I),{class:"-ml-1 mr-2 h-5 w-5","aria-hidden":"true"}),Ae],8,ze)])]))),128))])])])])])])])],64))}},Me=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),De={class:"fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"},Le={class:"relative"},Ee={key:1,class:"p-4 text-sm text-gray-500"},Be={class:"px-4 sm:px-6 lg:px-8 mt-6"},Ne={class:"sm:flex sm:items-center"},Ue=e("div",{class:"sm:flex-auto"},[e("h1",{class:"text-xl font-semibold text-gray-900"},"Spieler"),e("p",{class:"mt-2 text-sm text-gray-700"}," Hier werden alle Spieler angezeigt die in dieser Mannschaft spielen. ")],-1),Ve={key:0,class:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none"},Re={key:0,class:"mt-8 flex flex-col"},je={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},Pe={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},Fe={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},qe={class:"min-w-full divide-y divide-gray-300"},He=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"}," Name "),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," Role "),e("th",{scope:"col",class:"relative py-3.5 pl-3 pr-4 sm:pr-6"},[e("span",{class:"sr-only"},"Edit")])])],-1),Oe={class:"divide-y divide-gray-200 bg-white"},Ke={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6"},Qe={class:"flex items-center"},We={class:"h-10 w-10 flex-shrink-0"},Ze=["src"],Ge={class:"ml-4"},Ie={class:"font-medium text-gray-900"},Je={class:"text-gray-500"},Xe={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},Ye={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},et=["onClick"],tt=L(" Entfernen "),st={key:1},at=ee('<div class="text-center text-3xl font-bold"><div class="relative bg-white py-12"><div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"><p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Keine Spieler vorhanden </p><p class="mx-auto mt-5 max-w-prose text-lg font-normal text-gray-500"> Du kannst neue Spieler zu der Mannschaft \xFCber den Button hinzuf\xFCgen, oder indem du ihnen den Zugangscode gibst </p></div></div></div>',1),lt=[at],Y={async setup(S){let u,g;const k=P(),C=U(),m=h(C.currentRoute.value.params.id);let p=h([]);const f=h(!1),x=h("");let c=h([]),w=h(!1);try{const{data:n}=([u,g]=H(()=>b.get(`/getSpieler/${m.value}`)),u=await u,g(),u);c.value=n}catch(n){w.value=!0,console.log(n)}const z=O(()=>x.value===""?[]:p.value.filter(n=>(console.log(n),n.vorname.toLowerCase().includes(x.value.toLowerCase()))));async function E(n){try{await b.post("/addSpielerMannschaft",{s_id:n.s_id,m_id:m.value}),c.value.push(n),f.value=!1}catch{showError.value=!0,f.value=!1,console.log("Der Spieler ist schon vorhanden"),setTimeout(()=>showError.value=!1,3e3)}}async function B(){const n=await N();p.value=n,f.value=!0}async function N(){const{data:n}=await b.get("/getAllSpieler");return n}async function i(n){c.value=c.value.filter(o=>o.s_id!=n.s_id),await b.delete(`/spielerMannschaftDel/${n.s_id}/${m.value}`)}return(n,o)=>(s(),r($,null,[t(k).getAktivenUser.type=="Trainer"?(s(),v(t(j),{key:0,show:f.value,as:"template",onAfterLeave:o[2]||(o[2]=d=>x.value=""),appear:""},{default:a(()=>[l(t(R),{as:"div",class:"relative z-10",onClose:o[1]||(o[1]=d=>f.value=!1)},{default:a(()=>[l(t(T),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[Me]),_:1}),e("div",De,[l(t(T),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[l(t(V),{class:"mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"},{default:a(()=>[l(t(K),{"onUpdate:modelValue":E},{default:a(()=>[e("div",Le,[l(t(J),{class:"pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400","aria-hidden":"true"}),l(t(Q),{class:"h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm",placeholder:"Search...",onChange:o[0]||(o[0]=d=>x.value=d.target.value)})]),t(z).length>0?(s(),v(t(W),{key:0,static:"",class:"max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"},{default:a(()=>[(s(!0),r($,null,M(t(z),d=>(s(),v(t(Z),{key:d.id,value:d,as:"template"},{default:a(({active:F})=>[e("li",{class:G(["cursor-default select-none px-4 py-2",F&&"bg--600 text-black"])},_(d.vorname)+" "+_(d.nachname),3)]),_:2},1032,["value"]))),128))]),_:1})):y("",!0),x.value!==""&&t(z).length===0?(s(),r("p",Ee," No people found. ")):y("",!0)]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"])):y("",!0),e("div",Be,[e("div",Ne,[Ue,t(k).getAktivenUser.type=="Trainer"?(s(),r("div",Ve,[e("button",{onClick:B,type:"button",class:"bg-lime-500 inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none sm:w-auto"}," Add Spieler ")])):y("",!0)]),t(w)?(s(),r("div",st,lt)):(s(),r("div",Re,[e("div",je,[e("div",Pe,[e("div",Fe,[e("table",qe,[He,e("tbody",Oe,[(s(!0),r($,null,M(t(c),d=>(s(),r("tr",{key:d.email},[e("td",Ke,[e("div",Qe,[e("div",We,[e("img",{class:"h-10 w-10 rounded-full",src:d.avatarpath,alt:""},null,8,Ze)]),e("div",Ge,[e("div",Ie,_(d.vorname)+" "+_(d.nachname),1),e("div",Je,_(d.email),1)])])]),e("td",Xe,_(d.role),1),e("td",Ye,[e("button",{onClick:F=>i(d),type:"button",class:"inline-flex items-center rounded-md border border-red-600 bg-white text-red-600 px-4 py-2 text-sm font-medium shadow-sm hover:text-red-700"},[l(t(I),{class:"-ml-1 mr-2 h-5 w-5","aria-hidden":"true"}),tt],8,et)])]))),128))])])])])])]))])],64))}},nt=e("h1",{class:"text-center text-xl font-bold mt-5"},"Loading ...",-1),ot=e("br",null,null,-1),rt=e("hr",null,null,-1),it=e("br",null,null,-1),dt=e("h1",{class:"text-center text-xl font-bold mt-5"},"Loading ...",-1),ct={setup(S){return(u,g)=>(s(),r($,null,[(s(),v(D,null,{fallback:a(()=>[nt]),default:a(()=>[l(X)]),_:1})),ot,rt,it,(s(),v(D,null,{fallback:a(()=>[dt]),default:a(()=>[l(Y)]),_:1}))],64))}},ut=e("h1",{class:"text-center text-xl font-bold mt-5"},"Loading ...",-1),mt=e("br",null,null,-1),pt=e("hr",null,null,-1),ft=e("br",null,null,-1),ht=e("h1",{class:"text-center text-xl font-bold mt-5"},"Loading ...",-1),_t={setup(S){return(u,g)=>(s(),r($,null,[(s(),v(D,null,{fallback:a(()=>[ut]),default:a(()=>[l(X)]),_:1})),mt,pt,ft,(s(),v(D,null,{fallback:a(()=>[ht]),default:a(()=>[l(Y)]),_:1}))],64))}},vt={"aria-live":"assertive",class:"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-40"},xt={class:"flex w-full flex-col items-center space-y-4 sm:items-end"},yt={key:0,class:"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-gray-200 shadow-lg ring-1 ring-black ring-opacity-5"},gt={class:"p-4"},wt={class:"flex items-start"},bt={class:"flex-shrink-0"},$t=e("div",{class:"ml-3 w-0 flex-1 pt-0.5"},[e("p",{class:"text-sm font-medium text-gray-900"},"Die Person ist schon vorhanden"),e("p",{class:"mt-1 text-sm text-gray-500"}," Du kannst jede Person nur einmal zu einer Mannschaft hinzuf\xFCgen. ")],-1),kt={class:"ml-4 flex flex-shrink-0"},Ct=e("span",{class:"sr-only"},"Close",-1),St=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),Tt={class:"fixed inset-0 z-10 overflow-y-auto"},zt={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},At={class:"mt-3 text-center sm:mt-5"},Mt=e("div",{class:"mt-2"},[e("p",{class:"text-sm text-gray-500"}," Mit diesem Code k\xF6nnen andere Spieler und Trainer dieser Mannschaft beitreten ")],-1),Dt={class:"mt-5 sm:mt-6"},Lt={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},Et=e("div",{class:"min-w-0 flex-1 my-2"},[e("h1",{class:"text-3xl font-bold text-gray-900"},"Mitglieder")],-1),Bt={class:"mt-4 flex sm:mt-0 sm:ml-4"},Nt=L(" Code Anzeigen "),Pt={setup(S){const u=P(),g=U(),k=h(g.currentRoute.value.params.id);let C=h(!1),m=h(!1),p=h(null);async function f(){const x=await b.get(`/getCode/${k.value}`);p.value=x.data.zugangscode,m.value=!0}return(x,c)=>(s(),r($,null,[e("div",vt,[e("div",xt,[l(te,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:a(()=>[t(C)?(s(),r("div",yt,[e("div",gt,[e("div",wt,[e("div",bt,[l(t(q),{class:"h-6 w-6 text-red-500","aria-hidden":"true"})]),$t,e("div",kt,[e("button",{type:"button",onClick:c[0]||(c[0]=w=>A(C)?C.value=!1:C=!1),class:"inline-flex rounded-md bg-gray-200 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring--500 focus:ring-offset-2"},[Ct,l(t(q),{class:"h-5 w-5","aria-hidden":"true"})])])])])])):y("",!0)]),_:1})])]),l(t(j),{as:"template",show:t(m)},{default:a(()=>[l(t(R),{as:"div",class:"relative z-10",onClose:c[2]||(c[2]=w=>A(m)?m.value=!1:m=!1)},{default:a(()=>[l(t(T),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[St]),_:1}),e("div",Tt,[e("div",zt,[l(t(T),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:a(()=>[l(t(V),{class:"relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"},{default:a(()=>[e("div",null,[e("div",At,[l(t(se),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:a(()=>[L("CODE: "+_(t(p)),1)]),_:1}),Mt])]),e("div",Dt,[e("button",{type:"button",class:"inline-flex w-full justify-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none sm:text-sm",onClick:c[1]||(c[1]=w=>A(m)?m.value=!1:m=!1)}," Close ")])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]),e("div",Lt,[Et,e("div",Bt,[t(u).getAktivenUser.type=="Trainer"?(s(),r("button",{key:0,onClick:f,type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"},[Nt,l(t(ae),{class:"ml-2 -mr-1 h-5 w-5","aria-hidden":"true"})])):y("",!0)])]),t(u).getAktivenUser.type=="Trainer"?(s(),v(ct,{key:0})):(s(),v(_t,{key:1}))],64))}};export{Pt as default};
