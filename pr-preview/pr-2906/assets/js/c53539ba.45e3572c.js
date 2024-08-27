"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[30104],{92428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=n(74848),o=n(28453),i=n(86025);const s={id:"create-a-dynamic-header",title:"How to Create a Dynamic Header",sidebar_label:"How to Create a Dynamic Header",keywords:["api-testing","how-to","dynamic-header"]},r=void 0,c={id:"api-testing/on-prem/how-to/create-a-dynamic-header",title:"How to Create a Dynamic Header",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/create-a-dynamic-header.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/create-a-dynamic-header",permalink:"/sauce-docs/pr-preview/pr-2906/api-testing/on-prem/how-to/create-a-dynamic-header",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/create-a-dynamic-header.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"create-a-dynamic-header",title:"How to Create a Dynamic Header",sidebar_label:"How to Create a Dynamic Header",keywords:["api-testing","how-to","dynamic-header"]},sidebar:"apif",previous:{title:"GitHub \u2013 Use Files as Datasource",permalink:"/sauce-docs/pr-preview/pr-2906/api-testing/on-prem/how-to/github-for-datasets"},next:{title:"Import / Export Tests",permalink:"/sauce-docs/pr-preview/pr-2906/api-testing/on-prem/how-to/import-export-tests"}},d={},l=[{value:"Example Scenario",id:"example-scenario",level:2},{value:"Add the Input Formats",id:"add-the-input-formats",level:3},{value:"Make the Header Dynamic",id:"make-the-header-dynamic",level:3}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Legacy Documentation"}),(0,a.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,a.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,a.jsx)(t.p,{children:"Most APIs have only one response format, either JSON or XML. But what should we do in the case of an API endpoint that can return either JSON OR XML? We could write two different tests, with one supporting each response type, but we'd be repeating a good amount of code in both tests."}),"\n",(0,a.jsx)(t.p,{children:"API Fortress allows you to test both, using the same I/O component and assertion components for almost all test cases. In a few cases, we'll need to add a bit of extra logic to allow the platform to distinguish between the two formats."}),"\n",(0,a.jsx)(t.h2,{id:"example-scenario",children:"Example Scenario"}),"\n",(0,a.jsxs)(t.p,{children:["Let's consider the scenario where you need to pass in the Header the Accept value that is 'application/json' if you are testing the JSON and ",(0,a.jsx)(t.code,{children:"application/xml"})," if you are testing the XML. Usually in this case, you should make two different calls, as shown in the image below, in order to be able to pass the different values in the header."]}),"\n",(0,a.jsxs)(t.p,{children:["In the eample below, the API call requires an ",(0,a.jsx)(t.code,{children:'"Accept"'})," header. This ",(0,a.jsx)(t.code,{children:'"Accept"'})," header needs a value of ",(0,a.jsx)(t.code,{children:'"application/json"'}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["If you are testing the JSON case and ",(0,a.jsx)(t.code,{children:'"application/xml"'})," if you are testing the XML case. Below, we can see the solution to this problem that requires setting up two separate calls. It's not particularly adherent to the DRY rule of programming. (Don't repeat yourself!)"]}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/api-fortress/2018/04/both_calls.jpg"),alt:"both_calls.jpg"}),"\n",(0,a.jsx)(t.h3,{id:"add-the-input-formats",children:"Add the Input Formats"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Let's start adding the different formats as variables, as seen below."}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/api-fortress/2018/04/inputSets.jpg"),alt:"inputSets.jpg"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:'Now, we can remove one call and add the format variable in the "Mode" input.'}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/api-fortress/2018/04/varFormat.jpg"),alt:"varFormat.jpg"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"make-the-header-dynamic",children:"Make the Header Dynamic"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The header is still static at this point. We need to turn it into a dynamic one which changes to suit the data type of the API we are testing. We add a variable component above the I/O operation that will return the appropriate value."}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/api-fortress/2018/04/setDynamVar.jpg"),alt:"setDynamVar.jpg"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Add the following snippet into the ",(0,a.jsx)(t.strong,{children:"Content"})," field:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"if (format == 'xml') return 'application/xml'\nelse return 'application/json'\n"})}),"\n",(0,a.jsx)(t.admonition,{title:"Explanation",type:"caution",children:(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"acceptHeader"})," variable will have ",(0,a.jsx)(t.code,{children:"application/xml"})," as value if format is ",(0,a.jsx)(t.code,{children:"xml"})," and ",(0,a.jsx)(t.code,{children:"application/json"})," otherwise (since we have only two different formats, it will be ",(0,a.jsx)(t.code,{children:"application/json"})," only for JSON format)"]})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Now, we can finally remove the 'static' header and add the 'dynamic' header by changing the Header value to ",(0,a.jsx)(t.code,{children:"${acceptHeader}"})]}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/api-fortress/2018/04/dynamicHeader.jpg"),alt:"dynamicHeader.jpg"}),"\n",(0,a.jsxs)(t.p,{children:["Now,the test will be executed two times; once for ",(0,a.jsx)(t.code,{children:"XML"})," and once for ",(0,a.jsx)(t.code,{children:"JSON"}),", ensuring that the header will have the correct value."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(96540);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);