import{e as c,a as t,c as s,f as e,u as r,F as d,r as m,b as u,t as l,z as f}from"./vendor.6904d49b.js";import{_}from"./Kalender_comp.92f8403d.js";import{P as g}from"./index.79f3ca1a.js";const x={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},h=e("div",{class:"min-w-0 flex-1"},[e("h1",{class:"text-2xl font-bold leading-6 text-gray-900 sm:truncate"},"Home")],-1),b={key:0,class:"mt-6 px-4 sm:px-6 lg:px-8"},p=e("h2",{class:"text-sm font-bold text-gray-900"},"Meine Mannschaften:",-1),y={key:0,role:"list",class:"mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4"},v={class:f("flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md  bg-lime-500")},k={class:"flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white"},w={class:"flex-1 truncate px-4 py-2 text-sm"},T={class:"font-medium text-gray-900 hover:text-gray-600"},B=e("p",{class:"text-gray-500"},"12 Spieler",-1),C={key:1},D=e("h1",null,"Du bist in keinen Teams",-1),S=[D],$={key:1,class:"mx-3 my-3"},z=e("span",{class:"mt-2 block text-sm font-medium text-gray-900"},"Du bist noch keinem Team beigetreten",-1),F=[z],M={class:"p-8"},H={setup(N){const i=g(),a=c();return(P,n)=>(t(),s(d,null,[e("div",x,[h,e("button",{onClick:n[0]||(n[0]=o=>r(a).push("/addTeam")),type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"}," Team beitreten ")]),r(i).getTeams.length>0?(t(),s("div",b,[p,r(i).teams.length>0?(t(),s("ul",y,[(t(!0),s(d,null,m(r(i).getTeams,o=>(t(),s("li",{key:o.id,class:"relative col-span-1 flex rounded-md shadow-sm"},[e("div",v,l(o.farbe),1),e("div",k,[e("div",w,[e("a",T,l(o.titel),1),B])])]))),128))])):(t(),s("div",C,S))])):(t(),s("div",$,[e("div",{onClick:n[1]||(n[1]=o=>r(a).push("/addTeam")),class:"relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},F)])),e("div",M,[u(_)])],64))}};export{H as default};
