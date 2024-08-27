"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[11335],{899:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var o=s(74848),n=s(28453);const t={id:"fortress-forwarder",title:"Bloodhound: Fortress Forwarder Module",sidebar_label:"Fortress Forwarder"},i=void 0,a={id:"api-testing/on-prem/bloodhound/module-actors/fortress-forwarder",title:"Bloodhound: Fortress Forwarder Module",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/bloodhound/module-actors/fortress-forwarder.md",sourceDirName:"api-testing/on-prem/bloodhound/module-actors",slug:"/api-testing/on-prem/bloodhound/module-actors/fortress-forwarder",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/on-prem/bloodhound/module-actors/fortress-forwarder",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/bloodhound/module-actors/fortress-forwarder.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"fortress-forwarder",title:"Bloodhound: Fortress Forwarder Module",sidebar_label:"Fortress Forwarder"},sidebar:"apif",previous:{title:"RabbitMQ",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/on-prem/bloodhound/module-actors/rabbitmq"},next:{title:"Expressions",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/on-prem/bloodhound/expressions"}},d={},l=[{value:"Sidecars",id:"sidecars",level:2},{value:"<code>FortressForwarderSerializerActor</code>",id:"fortressforwarderserializeractor",level:3},{value:"<code>FortressLiveTestingActor</code>",id:"fortresslivetestingactor",level:3}];function c(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{Head:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(r.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Actors to serialize API conversations and send them using HTTP calls. Two formats are supported."}),"\n",(0,o.jsx)(r.h2,{id:"sidecars",children:"Sidecars"}),"\n",(0,o.jsx)(r.h3,{id:"fortressforwarderserializeractor",children:(0,o.jsx)(r.code,{children:"FortressForwarderSerializerActor"})}),"\n",(0,o.jsx)(r.p,{children:"Serializes the API conversation using the default Bloodhound implementation and forwards the result via HTTP. While the\nmodule has been originally designed to work with the API Fortress suite, it can easily be used with any other system."}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"class:"})," ",(0,o.jsx)(r.code,{children:"com.apifortress.afthem.modules.fortressforwarders.actors.sidecars.serializers.FortressForwarderSerializerActor"})]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"sidecars:"})," no"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"configuration:"})}),"\n",(0,o.jsx)(r.p,{children:"General serializer settings:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"disable_on_header"}),": if the provided header is present in the request, then the conversation will skip serialization"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"enable_on_header"}),": if the provided header is present in the request, then the conversation will be serialized"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"discard_request_headers"}),": list of request headers that should not appear in the serialized conversation"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"discard_response_headers"}),": list of response headers that should not appear in the serialized conversation"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"allow_content_types"}),": full or partial response content types which make the request eligible for serialization. If\nthe list is null or empty, all content types will be accepted"]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Extra serializer settings:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"buffer_size"}),": the serializer can buffer a number of conversations and save them once the buffer is full to improve\nDB communication performance. If absent or if the value is less than 1, the document is inserted as asson as the actor\nreceives it"]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Forwarder settings:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"url"}),": the URL to POST the serialized conversation to"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"headers"}),": a key/value map of request headers to be added to the outbound request"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"fortresslivetestingactor",children:(0,o.jsx)(r.code,{children:"FortressLiveTestingActor"})}),"\n",(0,o.jsxs)(r.p,{children:["Serializes the API ",(0,o.jsx)(r.strong,{children:"response"})," using the legacy API Fortress live testing format."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"class:"})," ",(0,o.jsx)(r.code,{children:"com.apifortress.afthem.modules.fortressforwarders.actors.sidecars.serializers.FortressLiveTestingActor"})]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"sidecars:"})," no"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"config:"})}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"url"}),": the URL to submit the request to. The string will be evaluated if the ",(0,o.jsx)(r.code,{children:"#msg"})," keyword is present."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"params"}),": e key/value map of extra parameters to be sent to the receiving end"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>a});var o=s(96540);const n={},t=o.createContext(n);function i(e){const r=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);