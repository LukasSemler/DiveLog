import{e as T,K as k,L as w,Q as u,M as $,a as d,c,f as e,N as f,O as b,u as t,t as y,P as v,F as A,g as E,D as U,b as V,ai as D,aj as N,i as j,h as S}from"./vendor.81fa8b35.js";import{P as B}from"./index.05f51811.js";const z=E('<div class="mt-4 md:flex md:items-center md:justify-between"><div class="min-w-0 flex-1"><h2 class="text-2xl font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"> Team erstellen oder Beitreten </h2><p class="text-gray-900 sm:truncate sm:text-md sm:tracking-tight mt-3"> Hier kannst du einem vorhanden Team beitreten, indem du den Zugangscode eingibst, oder ein neues erstellen. </p></div></div><br><br><br><p class="text-2xl font-bold">Vorhandenen Team Beitreten:</p><br>',6),J={class:"space-y-8 divide-y divide-gray-200 p-4 rounded-md shadow-lg"},M={class:"space-y-8 divide-y divide-gray-200 sm:space-y-5"},F={class:"space-y-6 sm:space-y-5"},H={class:"space-y-6 sm:space-y-5"},P={class:"sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5"},L=e("label",{for:"titel",class:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"},"Code:",-1),Z={class:"mt-1 sm:col-span-2 sm:mt-0"},q={class:"flex max-w-lg rounded-md shadow-sm"},K={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},O={class:"pt-5"},Q={class:"flex justify-end"},R=e("br",null,null,-1),G=e("br",null,null,-1),I=e("br",null,null,-1),W=e("br",null,null,-1),X=e("p",{class:"text-2xl font-bold"},"Neues Team erstellen:",-1),Y=e("br",null,null,-1),ee={class:"space-y-8 divide-y divide-gray-200 p-4 rounded-md shadow-lg"},te={class:"space-y-8 divide-y divide-gray-200 sm:space-y-5"},se={class:"space-y-6 sm:space-y-5"},oe={class:"space-y-6 sm:space-y-5"},re={class:"sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5"},ie=e("label",{for:"titel",class:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"},"Titel:",-1),ne={class:"mt-1 sm:col-span-2 sm:mt-0"},ae={class:"flex max-w-lg rounded-md shadow-sm"},de={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},le={class:"sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"},me=e("label",{for:"about",class:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"},"Beschreibung",-1),ce={class:"mt-1 sm:col-span-2 sm:mt-0"},ue=e("p",{class:"mt-2 text-sm text-gray-500"},"Schreibe eine kurze Beschreibung",-1),ge={class:"sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"},pe=e("label",{for:"photo",class:"block text-sm font-medium text-gray-700"},"Farbe",-1),he={class:"mt-1 sm:col-span-2 sm:mt-0"},fe={class:"flex items-center"},be={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},xe={class:"pt-5"},_e={class:"flex justify-end"},ye={setup(C){const n=T(),h=B();let s=k({titel:"",beschreibung:"",farbe:"#A629E6"}),l=k({code:""});const m=w(()=>({titel:{required:u},farbe:{required:u}})),g=w(()=>({code:{required:u}})),r=$(m,s),i=$(g,l);async function p(_){if(_.preventDefault(),r.value.$silentErrors.length==0)try{const o=await U.post("/addTeam",{titel:s.titel,beschreibung:s.beschreibung,farbe:s.farbe,t_id:h.getAktivenUser.data.t_id});console.log(o),o.status==200&&n.push("/homeTrainer")}catch(o){console.log(o.message)}else console.log("fehler")}async function x(_){_.preventDefault()}return(_,o)=>(d(),c(A,null,[z,e("form",J,[e("div",M,[e("div",F,[e("div",H,[e("div",P,[L,e("div",Z,[e("div",q,[f(e("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>t(l).code=a),type:"text",name:"titel",id:"titel",class:"mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"},null,512),[[b,t(l).code]])]),t(i).code.$invalid?(d(),c("p",K,y(t(i).code.$silentErrors[0].$message),1)):v("",!0)])])])])]),e("div",O,[e("div",Q,[e("button",{onClick:o[1]||(o[1]=a=>t(n).push("/homeTrainer")),type:"button",class:"rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"}," Cancel "),e("button",{onClick:x,type:"submit",class:"ml-3 inline-flex justify-center rounded-md border border-transparent bg-lime-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"}," Beitreten ")])])]),R,G,I,W,X,Y,e("form",ee,[e("div",te,[e("div",se,[e("div",oe,[e("div",re,[ie,e("div",ne,[e("div",ae,[f(e("input",{"onUpdate:modelValue":o[2]||(o[2]=a=>t(s).titel=a),type:"text",name:"titel",id:"titel",class:"mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"},null,512),[[b,t(s).titel]])]),t(r).titel.$invalid?(d(),c("p",de,y(t(r).titel.$silentErrors[0].$message),1)):v("",!0)])]),e("div",le,[me,e("div",ce,[f(e("textarea",{id:"about","onUpdate:modelValue":o[3]||(o[3]=a=>t(s).beschreibung=a),name:"about",rows:"3",class:"block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"},null,512),[[b,t(s).beschreibung]]),ue])]),e("div",ge,[pe,e("div",he,[e("div",fe,[f(e("input",{class:"rounded-md","onUpdate:modelValue":o[4]||(o[4]=a=>t(s).farbe=a),type:"color",id:"head",name:"head"},null,512),[[b,t(s).farbe]]),t(r).farbe.$invalid?(d(),c("p",be,y(t(r).farbe.$silentErrors[0].$message),1)):v("",!0)])])])])])]),e("div",xe,[e("div",_e,[e("button",{onClick:o[5]||(o[5]=a=>t(n).push("/homeTrainer")),type:"button",class:"rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"}," Cancel "),e("button",{onClick:p,type:"submit",class:"ml-3 inline-flex justify-center rounded-md border border-transparent bg-lime-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"}," Add ")])])])],64))}},ve=E('<div class="mt-4 md:flex md:items-center md:justify-between"><div class="min-w-0 flex-1"><h2 class="text-2xl font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"> Team Beitreten </h2><p class="text-gray-900 sm:truncate sm:text-md sm:tracking-tight mt-3"> Hier kannst du einem Team beitreten, indem du den Zugangscode eingibst. Diesen bekommst du von deinem Trainer </p></div></div><br><br><br><p class="text-2xl font-bold">Vorhandenen Team Beitreten:</p><br>',6),ke={class:"space-y-8 divide-y divide-gray-200 p-4 rounded-md shadow-lg"},we={class:"space-y-8 divide-y divide-gray-200 sm:space-y-5"},$e={class:"space-y-6 sm:space-y-5"},Te={class:"space-y-6 sm:space-y-5"},Be={class:"sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5"},Ce=e("label",{for:"titel",class:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"},"Code:",-1),Ve={class:"mt-1 sm:col-span-2 sm:mt-0"},je={class:"flex max-w-lg rounded-md shadow-sm"},Ae={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},Ee={class:"pt-5"},Ue={class:"flex justify-end"},De={setup(C){const n=T(),h=B();let s=k({titel:""});const l=w(()=>({titel:{required:u}})),m=$(l,s);async function g(r){if(r.preventDefault(),m.value.$silentErrors.length==0)try{(await U.post("/sJoinTeam",{zugangscode:s.titel,s_id:h.getAktivenUser.data.s_id})).status==200&&n.push("/homeTrainer")}catch(i){console.log(i.message)}else console.log("fehler")}return(r,i)=>(d(),c(A,null,[ve,e("form",ke,[e("div",we,[e("div",$e,[e("div",Te,[e("div",Be,[Ce,e("div",Ve,[e("div",je,[f(e("input",{"onUpdate:modelValue":i[0]||(i[0]=p=>t(s).titel=p),type:"text",name:"titel",id:"titel",class:"mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"},null,512),[[b,t(s).titel]])]),t(m).titel.$invalid?(d(),c("p",Ae,y(t(m).titel.$silentErrors[0].$message),1)):v("",!0)])])])])]),e("div",Ee,[e("div",Ue,[e("button",{onClick:i[1]||(i[1]=p=>t(n).push("/homeSpieler")),type:"button",class:"rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"}," Cancel "),e("button",{onClick:g,type:"submit",class:"ml-3 inline-flex justify-center rounded-md border border-transparent bg-lime-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"}," Beitreten ")])])])],64))}},Ne={class:"m-12"},Se={class:"sm:hidden","aria-label":"Back"},ze=S(" Back "),Je={class:"hidden sm:flex","aria-label":"Breadcrumb"},Me={role:"list",class:"flex items-center space-x-4"},Fe={class:"flex"},He={class:"flex items-center"},Pe=e("a",{class:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"},"Team erstellen oder beitreten",-1),qe={setup(C){const n=T(),h=B();let s=k({titel:"",beschreibung:"",farbe:"#A629E6",zugangscode:m(6)});const l=w(()=>({titel:{required:u},farbe:{required:u},zugangscode:{required:u}}));$(l,s);function m(g){for(var r="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",p=i.length,x=0;x<g;x++)r+=i.charAt(Math.floor(Math.random()*p));return r}return(g,r)=>(d(),c("div",Ne,[e("div",null,[e("nav",Se,[e("a",{onClick:r[0]||(r[0]=i=>t(n).push("/homeTrainer")),class:"flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"},[V(t(D),{class:"-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),ze])]),e("nav",Je,[e("ol",Me,[e("li",null,[e("div",Fe,[e("a",{onClick:r[1]||(r[1]=i=>t(n).push("/homeTrainer")),class:"text-sm font-medium text-gray-500 hover:text-gray-700"},"Home")])]),e("li",null,[e("div",He,[V(t(N),{class:"h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),Pe])])])])]),t(h).getAktivenUser.type=="Trainer"?(d(),j(ye,{key:0})):(d(),j(De,{key:1}))]))}};export{qe as default};
