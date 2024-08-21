"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[63578],{68787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(74848),s=t(28453);const r={id:"flows",title:"Bloodhound: Flows",sidebar_label:"Flows",description:"A flow is a number of steps (actors) that will be performed between the inbound request and the response to the outbound request."},i=void 0,a={id:"api-testing/on-prem/bloodhound/flows",title:"Bloodhound: Flows",description:"A flow is a number of steps (actors) that will be performed between the inbound request and the response to the outbound request.",source:"@site/docs/api-testing/on-prem/bloodhound/flows.md",sourceDirName:"api-testing/on-prem/bloodhound",slug:"/api-testing/on-prem/bloodhound/flows",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/bloodhound/flows",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/bloodhound/flows.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"flows",title:"Bloodhound: Flows",sidebar_label:"Flows",description:"A flow is a number of steps (actors) that will be performed between the inbound request and the response to the outbound request."},sidebar:"apif",previous:{title:"Basic Configuration",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/bloodhound/basic-configuration"},next:{title:"Base Actors",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/bloodhound/base-actors"}},l={},c=[{value:"Anatomy of a Flow",id:"anatomy-of-a-flow",level:2},{value:"Example Flow",id:"example-flow",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In the default configuration module, flows are files located in the ",(0,o.jsx)(n.code,{children:"etc/flows"})," directory."]}),"\n",(0,o.jsx)(n.h2,{id:"anatomy-of-a-flow",children:"Anatomy of a Flow"}),"\n",(0,o.jsx)(n.p,{children:"A flow is a number of steps (actors) that will be performed between the inbound request and the response to the outbound request. Some of which are meant to work in a sequence, and some in parallel."}),"\n",(0,o.jsxs)(n.p,{children:["In order to use an actor, its implementation needs to be defined among the ",(0,o.jsx)(n.em,{children:"implementers"}),". In the default configuration mode, this happens in the ",(0,o.jsx)(n.code,{children:"implementers.yml"})," file."]}),"\n",(0,o.jsx)(n.p,{children:"There are 3 essential actors a flow cannot do without and are required in every flow:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A request-parsing step, explicitly named ",(0,o.jsx)(n.code,{children:"proxy/request"}),";"]}),"\n",(0,o.jsx)(n.li,{children:"An upstream step, performing the actual call to the upstream;"}),"\n",(0,o.jsx)(n.li,{children:"A send-back step, returning the retrieved content to the user;"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["With the exception of ",(0,o.jsx)(n.code,{children:"proxy/request"}),", naming is free, as well as implementations, but the structure needs to follow the ",(0,o.jsx)(n.code,{children:"<type>/<name>"})," pattern."]}),"\n",(0,o.jsx)(n.p,{children:"Each step has a set of fixed instructions and extra fields."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The key is a combination of the type and the ID, declared in the ",(0,o.jsx)(n.code,{children:"implementers.yml"})," file"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"next"})," determines what's the next actor in the flow"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"sidecars"})," (not always applicable) are the IDs of actors that will receive a copy of the message in parallel but do not alter the main message. Mind that sidecars can have different behaviors based on where they're placed in the flow. For example, access loggers log inbound calls when placed before the SendBack, and outbound calls when placed after the SendBack"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"config"})," other implementation-specific configuration keys"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["If a certain actor is referenced either as ",(0,o.jsx)(n.code,{children:"next"})," or in ",(0,o.jsx)(n.code,{children:"sidecars"}),", it ",(0,o.jsx)(n.strong,{children:"must"})," to be present in the flow."]}),"\n",(0,o.jsx)(n.h3,{id:"example-flow",children:"Example Flow"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"proxy/request:\nnext: filter/header\\_filter\nsidecars:\n- sidecar/access\\_logger\n\nfilter/header\\_filter:\nnext: proxy/upstream\\_http\nsidecars:\n- sidecar/access\\_logger\nconfig:\naccept:\n- value: \"#msg.request().getHeader('key')=='ABC123'\"\n  evaluated: true\n- value: \"#msg.request().getHeader('accept')=='application/json'\"\n  evaluated: true\nreject:\n- value: \"#msg.request().method()!='GET'\"\n  evaluated: true\n\nproxy/upstream\\_http:\nnext: proxy/send\\_back\n\nproxy/send\\_back:\nsidecars:\n- sidecar/access\\_logger\n\nsidecar/access\\_logger:\nconfig: {}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);