"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[28776],{26549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var i=n(74848),o=n(28453),s=n(86025);const r={id:"authorization-simple-oauth-etc",title:"Dealing with Authentication (Simple, OAuth, etc.)",sidebar_label:"Dealing with Authentication",keywords:["api-testing","how-to","oauth","simple","authentication","2 legged","2-leg"]},a=void 0,l={id:"api-testing/on-prem/how-to/authorization-simple-oauth-etc",title:"Dealing with Authentication (Simple, OAuth, etc.)",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/authorization-simple-oauth-etc.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/authorization-simple-oauth-etc",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/on-prem/how-to/authorization-simple-oauth-etc",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/authorization-simple-oauth-etc.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"authorization-simple-oauth-etc",title:"Dealing with Authentication (Simple, OAuth, etc.)",sidebar_label:"Dealing with Authentication",keywords:["api-testing","how-to","oauth","simple","authentication","2 legged","2-leg"]},sidebar:"apif",previous:{title:"Copy a Test",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/on-prem/how-to/copy-a-test"},next:{title:"Different Ways to Compose a Request Body",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/on-prem/how-to/different-ways-to-compose-a-request-body"}},c={},h=[{value:"Overview",id:"overview",level:2},{value:"Simple Authorization",id:"simple-authorization",level:2},{value:"Video Demonstration",id:"video-demonstration",level:3},{value:"Simple Authorization from the HTTP Client",id:"simple-authorization-from-the-http-client",level:2},{value:"OAuth/Token Exchange",id:"oauthtoken-exchange",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Legacy Documentation"}),(0,i.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,i.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["API Fortress can handle nearly any authorization scheme. Below, we provide some guides on simple ways to work with the most common authorization methods. If it requires usage of a long lasting token, see ",(0,i.jsx)(t.a,{href:"https://apifortress.com/doc/using-long-lasting-tokens/",children:"here"})," for more information."]}),"\n",(0,i.jsx)(t.h2,{id:"simple-authorization",children:"Simple Authorization"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Enter the visual composer"}),"\n",(0,i.jsx)(t.li,{children:"Click Add Component"}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.code,{children:"POST"})," (or whatever REST method the authentication server is expecting)"]}),"\n",(0,i.jsxs)(t.li,{children:["Enter details and then click ",(0,i.jsx)(t.strong,{children:"Add Authentication"})]}),"\n",(0,i.jsxs)(t.li,{children:["Choose ",(0,i.jsx)(t.strong,{children:"Basic"})]}),"\n",(0,i.jsxs)(t.li,{children:["Enter the ",(0,i.jsx)(t.strong,{children:"Username"})," and ",(0,i.jsx)(t.strong,{children:"Password"})]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2017/01/basic_auth.gif"),alt:"Basic Auth Gif"}),"\n",(0,i.jsx)(t.p,{children:"The header information is automatically encoded and entered for you!"}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2017/01/2.png"),alt:"2.png"}),"\n",(0,i.jsx)(t.p,{children:"Next, we parameterize the token that we receive in the response."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"First, select the Set (variable) component"}),"\n",(0,i.jsxs)(t.li,{children:["Next, enter the name that you would like to use for the variable as ",(0,i.jsx)(t.em,{children:"Var"})]}),"\n",(0,i.jsxs)(t.li,{children:["Enter the value of the token itself as ",(0,i.jsx)(t.em,{children:"Value"})]}),"\n",(0,i.jsxs)(t.li,{children:["Add a",(0,i.jsx)(t.em,{children:"Comment"})," component with the previously set variable as the ",(0,i.jsx)(t.em,{children:"Value"})," to see the token logged!"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"From here, we can use the token in follow-on prompts by referencing its variable name."}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2017/01/parameterize.gif"),alt:"parameterize.gif"}),"\n",(0,i.jsx)(t.h3,{id:"video-demonstration",children:"Video Demonstration"}),"\n",(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/5mCuYqkhuKo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,i.jsx)(t.h2,{id:"simple-authorization-from-the-http-client",children:"Simple Authorization from the HTTP Client"}),"\n",(0,i.jsx)(t.p,{children:"Using the HTTP composer requires encoding the Username and Password yourself."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Click on Tools > HTTP Client"}),"\n",(0,i.jsx)(t.li,{children:"Click on Tools > Gadgets"}),"\n",(0,i.jsx)(t.li,{children:"Choose base64-encode"}),"\n",(0,i.jsxs)(t.li,{children:['Type in the username and password like this with the semicolon "username',":password",'"']}),"\n",(0,i.jsx)(t.li,{children:"Click encode"}),"\n",(0,i.jsx)(t.li,{children:"Copy the generated code (our example is VXNlcm5hbWU6UGFzc3dvcmQ=)"}),"\n",(0,i.jsx)(t.li,{children:'Now use that generated code in your call. Specifically as a Header, and use the word "Basic" under key, and the generated code (VXNlcm5hbWU6UGFzc3dvcmQ=) for value.'}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2017/01/http.gif"),alt:"http.gif"}),"\n",(0,i.jsxs)(t.p,{children:["That's it! The call should work now. If not feel free to send us a message at ",(0,i.jsx)(t.a,{href:"mailto:support@apifortress.com",children:"support@apifortress.com"}),"!"]}),"\n",(0,i.jsx)(t.h2,{id:"oauthtoken-exchange",children:"OAuth/Token Exchange"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Enter the visual composer"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Click Add Component"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Click POST (or whatever REST method the authentication server is expecting)"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Enter details and add parameters or POST body"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"In our example its a POST body with username and password"}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/02/post.gif"),alt:"post.gif"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Next, we parameterize the token that we receive in the response."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"First, select the Set (variable) component"}),"\n",(0,i.jsxs)(t.li,{children:["Next, enter the name that you would like to use for the variable as ",(0,i.jsx)(t.em,{children:"Var"})]}),"\n",(0,i.jsxs)(t.li,{children:["Enter the reference to the token from the previous payload as ",(0,i.jsx)(t.em,{children:"Value"})]}),"\n",(0,i.jsxs)(t.li,{children:["Add a ",(0,i.jsx)(t.em,{children:"Comment"})," component with the previously set variable as the ",(0,i.jsx)(t.em,{children:"Value"})," to see the token logged!"]}),"\n",(0,i.jsx)(t.li,{children:"From here, we can use the token in subsequent API calls by referencing its variable name."}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/02/vsnew.gif"),alt:"vsnew.gif"})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);