"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[34847],{3358:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=s(74848),a=s(28453);const o={id:"web-automated-faq",title:"Automated Testing FAQ",sidebar_label:"FAQ"},r=void 0,i={id:"web-apps/automated-testing/web-automated-faq",title:"Automated Testing FAQ",description:"General",source:"@site/docs/web-apps/automated-testing/faq.md",sourceDirName:"web-apps/automated-testing",slug:"/web-apps/automated-testing/web-automated-faq",permalink:"/sauce-docs/pr-preview/pr-2906/web-apps/automated-testing/web-automated-faq",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/automated-testing/faq.md",tags:[],version:"current",lastUpdatedBy:"Mike Han",lastUpdatedAt:1710784477e3,frontMatter:{id:"web-automated-faq",title:"Automated Testing FAQ",sidebar_label:"FAQ"},sidebar:"docs",previous:{title:"Examples",permalink:"/sauce-docs/pr-preview/pr-2906/web-apps/automated-testing/cdp-bidi/examples"},next:{title:"Getting Started",permalink:"/sauce-docs/pr-preview/pr-2906/api-testing"}},c={},l=[{value:"General",id:"general",level:2},{value:"<strong>Can I use any version of Cypress/TestCafe/Playwright?</strong>",id:"can-i-use-any-version-of-cypresstestcafeplaywright",level:4},{value:"<strong>Can I use any version of Node.js to run my tests?</strong>",id:"can-i-use-any-version-of-nodejs-to-run-my-tests",level:4},{value:"<strong>My tests rely on private npm packages. How do I include them in my tests?</strong>",id:"my-tests-rely-on-private-npm-packages-how-do-i-include-them-in-my-tests",level:4},{value:"<strong>When I download test artifacts after the test completes, why don&#39;t I see all of the expected artifacts?</strong>",id:"when-i-download-test-artifacts-after-the-test-completes-why-dont-i-see-all-of-the-expected-artifacts",level:4},{value:"<strong>I use pnpm/nx to manage my dependencies. Can I run my tests with saucectl?</strong>",id:"i-use-pnpmnx-to-manage-my-dependencies-can-i-run-my-tests-with-saucectl",level:4}];function d(e){const t={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,n.jsx)(t.h4,{id:"can-i-use-any-version-of-cypresstestcafeplaywright",children:(0,n.jsx)(t.strong,{children:"Can I use any version of Cypress/TestCafe/Playwright?"})}),"\n",(0,n.jsx)(t.p,{children:"No, only certain versions of Cypress/TestCafe/Playwright can be used on Sauce Labs. The list of\nsupported versions for each framework can be found in our docs:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.saucelabs.com/web-apps/automated-testing/cypress/#supported-testing-platforms",children:"Using Cypress"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.saucelabs.com/web-apps/automated-testing/playwright/#supported-testing-platforms",children:"Using Playwright"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.saucelabs.com/web-apps/automated-testing/testcafe/#supported-testing-platforms",children:"Using TestCafe"})}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"can-i-use-any-version-of-nodejs-to-run-my-tests",children:(0,n.jsx)(t.strong,{children:"Can I use any version of Node.js to run my tests?"})}),"\n",(0,n.jsx)(t.p,{children:"No, the version of Node.js used is fixed for each framework version. It will generally be the current\nLTS version at the time of release. A full list can be found in our docs:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.saucelabs.com/web-apps/automated-testing/cypress/#supported-testing-platforms",children:"Using Cypress"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.saucelabs.com/web-apps/automated-testing/playwright/#supported-testing-platforms",children:"Using Playwright"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.saucelabs.com/web-apps/automated-testing/testcafe/#supported-testing-platforms",children:"Using TestCafe"})}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"my-tests-rely-on-private-npm-packages-how-do-i-include-them-in-my-tests",children:(0,n.jsx)(t.strong,{children:"My tests rely on private npm packages. How do I include them in my tests?"})}),"\n",(0,n.jsxs)(t.p,{children:["If your registry is externally accessible, you can include it in your saucectl configuration\nunder the ",(0,n.jsx)(t.code,{children:"registries"})," setting:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'npm:\n  registries:\n    - url: https://registry.npmjs.org\n    - url: https://private.registry\n      scope: "@scope"\n      authToken: secretToken\n'})}),"\n",(0,n.jsxs)(t.p,{children:["If your registry is only accessible inside your corporate network, you'll have to use\nSauce Connect to allow the Sauce Labs cloud to securely connect to your registry. See the\n",(0,n.jsx)(t.a,{href:"https://docs.saucelabs.com/secure-connections/sauce-connect-5/",children:"Sauce Connect"})," docs for more\ndetails."]}),"\n",(0,n.jsx)(t.h4,{id:"when-i-download-test-artifacts-after-the-test-completes-why-dont-i-see-all-of-the-expected-artifacts",children:(0,n.jsx)(t.strong,{children:"When I download test artifacts after the test completes, why don't I see all of the expected artifacts?"})}),"\n",(0,n.jsxs)(t.p,{children:["Due to a current limitation of the platform, nested assets are stored ",(0,n.jsx)(t.strong,{children:"flat"})," in Sauce Labs.\nThat means an artifact like ",(0,n.jsx)(t.code,{children:"__assets__/log_dir/log.txt"})," is stored and downloaded simply as\n",(0,n.jsx)(t.code,{children:"log.txt"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"i-use-pnpmnx-to-manage-my-dependencies-can-i-run-my-tests-with-saucectl",children:(0,n.jsx)(t.strong,{children:"I use pnpm/nx to manage my dependencies. Can I run my tests with saucectl?"})}),"\n",(0,n.jsxs)(t.p,{children:["Yes you can, but only with ",(0,n.jsx)(t.a,{href:"https://docs.saucelabs.com/orchestrate/",children:"Sauce Orchestrate"}),",\nSauce Labs' containerized testing solution. See the ",(0,n.jsx)(t.a,{href:"https://docs.saucelabs.com/orchestrate/getting-started/",children:"Getting Started"}),"\nfor information on how to get setup."]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>i});var n=s(96540);const a={},o=n.createContext(a);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);