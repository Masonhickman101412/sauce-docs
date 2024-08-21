"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[67748],{53136:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var r=s(74848),i=s(28453);const t={id:"sauce-labs",title:"Sauce Labs Integration with Visual Component Testing",sidebar_label:"Sauce Labs"},o=void 0,c={id:"visual/component-testing/integrations/sauce-labs",title:"Sauce Labs Integration with Visual Component Testing",description:"The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the integration steps.",source:"@site/docs/visual/component-testing/integrations/sauce-labs.md",sourceDirName:"visual/component-testing/integrations",slug:"/visual/component-testing/integrations/sauce-labs",permalink:"/sauce-docs/pr-preview/pr-2899/visual/component-testing/integrations/sauce-labs",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/component-testing/integrations/sauce-labs.md",tags:[],version:"current",lastUpdatedBy:"Yu Yi",lastUpdatedAt:1718016835e3,frontMatter:{id:"sauce-labs",title:"Sauce Labs Integration with Visual Component Testing",sidebar_label:"Sauce Labs"}},l={},a=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Adding Sauce Labs Browsers",id:"adding-sauce-labs-browsers",level:2},{value:"Supported Browsers",id:"supported-browsers",level:2},{value:"Sauce Connect Proxy Integration",id:"sauce-connect-proxy-integration",level:2},{value:"Important Notes",id:"important-notes",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.admonition,{title:"Screener End-of-life",type:"warning",children:[(0,r.jsxs)(n.p,{children:["The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the ",(0,r.jsx)(n.a,{href:"/visual-testing/",children:"integration steps"}),"."]}),(0,r.jsx)(n.p,{children:"If you have any questions, please reach out to your Customer Success Manager or Sauce Labs Support."})]}),"\n",(0,r.jsx)(n.p,{children:"Screener integrates with the Sauce Labs testing cloud for Cross-Browser Testing."}),"\n",(0,r.jsxs)(n.p,{children:["To learn more about Screener's Cross-Browser Testing, see ",(0,r.jsx)(n.a,{href:"/visual/component-testing/supported-browsers",children:"Visual Component Cross-Browser Testing"}),"."]}),"\n",(0,r.jsx)(n.admonition,{title:"Important",type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Cross-Browser Testing with Sauce Labs will be slower than regular Screener visual regression tests."}),"\n",(0,r.jsx)(n.li,{children:"You may want to limit cross-browser testing to certain scenarios, such as only when merging into your main branch (see example below)."}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A valid Sauce Labs account."}),"\n",(0,r.jsxs)(n.li,{children:["Access to enough ",(0,r.jsx)(n.a,{href:"/basics/acct-team-mgmt/concurrency/managing-concurrency",children:"concurrency"})," in your Sauce account to run Screener tests. Each browser/resolution combination will use one concurrent machine."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"adding-sauce-labs-browsers",children:"Adding Sauce Labs Browsers"}),"\n",(0,r.jsxs)(n.p,{children:["You'll need to add your Sauce Labs credentials via the sauce option in your ",(0,r.jsx)(n.code,{children:"screener.config.js"})," file. Browsers added ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"must"})})," match one of the supported browsers/versions in the browser table below."]}),"\n",(0,r.jsx)(n.p,{children:"Here is a CircleCI example that only runs cross-browser tests when committing into the main branch:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"var config = {\n  // regular screener config\n};\n\n// only run cross browser tests when merging into 'main' branch\nif (process.env.CIRCLE_BRANCH === 'main') {\n  config.browsers = [\n    {\n      browserName: 'chrome'\n    },\n    {\n      browserName: 'microsoftedge',\n      version: '86.0'\n    },\n    {\n      browserName: 'safari',\n      version: '13.1'\n    }\n  ];\n  config.sauce = {\n    username: 'sauce_user',\n    accessKey: 'sauce_access_key',\n    maxConcurrent: 10\n  };\n}\n\nmodule.exports = config;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"supported-browsers",children:"Supported Browsers"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"browserName"})}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"version"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"chrome"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"87.0"}),(0,r.jsx)("li",{children:"86.0"}),(0,r.jsx)("li",{children:"85.0"}),(0,r.jsx)("li",{children:"84.0"}),(0,r.jsx)("li",{children:"83.0"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"firefox"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"83.0"}),(0,r.jsx)("li",{children:"82.0"}),(0,r.jsx)("li",{children:"81.0"}),(0,r.jsx)("li",{children:"80.0"}),(0,r.jsx)("li",{children:"79.0"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"internet explorer"})}),(0,r.jsx)("td",{children:(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:"11.0"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"microsoftedge"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"87.0"}),(0,r.jsx)("li",{children:"86.0"}),(0,r.jsx)("li",{children:"85.0"}),(0,r.jsx)("li",{children:"84.0"}),(0,r.jsx)("li",{children:"83.0"}),(0,r.jsx)("li",{children:"18.17763"}),(0,r.jsx)("li",{children:"17.17134"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"safari"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"13.1"}),(0,r.jsx)("li",{children:"12.1"}),(0,r.jsx)("li",{children:"11.1"})]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"sauce-connect-proxy-integration",children:"Sauce Connect Proxy Integration"}),"\n",(0,r.jsxs)(n.p,{children:["When using Sauce Labs browsers, you'll have the option of using a secure Sauce Connect tunnel. To enable this in Screener, set the flag ",(0,r.jsx)(n.code,{children:"launchSauceConnect"})," to ",(0,r.jsx)(n.code,{children:"true"}),". Sauce Connect will be launched and managed by this module, and assigned a unique tunnel identifier."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"module.exports = {\n  ...\n\n  sauce: {\n    username: 'sauce_user',\n    accessKey: 'sauce_access_key',\n    maxConcurrent: 10, // optional available concurrency you have from Sauce Labs\n    launchSauceConnect: true // enable Sauce Connect\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"important-notes",children:"Important Notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Sauce Connect integration requires all browsers to be Sauce Labs browsers. An error will be thrown if you use a non-Sauce browser."}),"\n",(0,r.jsxs)(n.li,{children:["Logs for Sauce Connect will be saved in the root of your project under ",(0,r.jsx)(n.code,{children:"sauce-connect.log"})," for debugging purposes."]}),"\n",(0,r.jsx)(n.li,{children:"Sauce Connect tunnel cannot be used together with the tunnel: option."}),"\n",(0,r.jsxs)(n.li,{children:["A unique ",(0,r.jsx)(n.code,{children:"tunnelIdentifier"})," will be automatically generated for you when using the Sauce Connect integration. An error will be thrown if you try to set ",(0,r.jsx)(n.code,{children:"tunnelIdentifier"})," manually."]}),"\n",(0,r.jsx)(n.li,{children:"When running Sauce Connect tunnels on your localhost, please note that Sauce Connect only supports a limited set of valid ports."}),"\n",(0,r.jsxs)(n.li,{children:["For additional information, see the ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect",children:"Sauce Connect Proxy documentation"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var r=s(96540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);