"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[81570],{25964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(74848),s=n(28453);const r={id:"selenium-grid",title:"Selenium Grid",sidebar_label:"Selenium Grid"},a="Connect Playwright to Sauce Labs",o={id:"web-apps/automated-testing/playwright/selenium-grid",title:"Selenium Grid",description:"Playwright can also connect to Sauce Labs remotely via its [Selenium Grid",source:"@site/docs/web-apps/automated-testing/playwright/selenium-grid.md",sourceDirName:"web-apps/automated-testing/playwright",slug:"/web-apps/automated-testing/playwright/selenium-grid",permalink:"/sauce-docs/pr-preview/pr-2911/web-apps/automated-testing/playwright/selenium-grid",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/automated-testing/playwright/selenium-grid.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"selenium-grid",title:"Selenium Grid",sidebar_label:"Selenium Grid"},sidebar:"docs",previous:{title:"Quickstart",permalink:"/sauce-docs/pr-preview/pr-2911/web-apps/automated-testing/playwright/quickstart"},next:{title:"YAML Configuration",permalink:"/sauce-docs/pr-preview/pr-2911/web-apps/automated-testing/playwright/yaml"}},c={},l=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Playwright can also connect to Sauce Labs remotely via its ",(0,i.jsx)(t.a,{href:"https://playwright.dev/dotnet/docs/selenium-grid",children:"Selenium Grid\nsupport"})," to launch the Google\nChrome or Microsoft Edge browser."]}),"\n",(0,i.jsxs)(t.p,{children:["Playwright connects to the browser using the Chrome DevTools Protocol (CDP).\nSelenium 4 ",(0,i.jsx)(t.em,{children:"currently"})," exposes this capability."]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"This feature is highly experimental, both from a Playwright's perspective, as\nwell as Sauce Labs. This integration may stop working at any time without due\nnotice."})}),"\n",(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"connect-playwright-to-sauce-labs",children:"Connect Playwright to Sauce Labs"})}),"\n",(0,i.jsxs)(t.p,{children:["To let Playwright connect remotely to Sauce Labs, you need to set two\nenvironment variables: ",(0,i.jsx)(t.code,{children:"SELENIUM_REMOTE_URL"})," and ",(0,i.jsx)(t.code,{children:"SELENIUM_REMOTE_CAPABILITIES"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'SELENIUM_REMOTE_URL=https://ondemand.us-west-1.saucelabs.com:443/wd/hub \\\nSELENIUM_REMOTE_CAPABILITIES=\'{"platformName":"Windows 11","browserName":"chrome","sauce:options":{"devTools":true,"username":"your_user","accessKey":"your_access_key"}}\' \\\nnpx playwright test --headed --project "your-chromium-project"\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"--headed"})," must be specified for our platform to capture a video."]})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"--project"})," must be specified to match the browser you are targeting in the\n",(0,i.jsx)(t.code,{children:"SELENIUM_REMOTE_CAPABILITIES"})," environment variable."]})}),"\n",(0,i.jsx)(t.h1,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(t.p,{children:["The remote session has no knowledge of the ",(0,i.jsx)(t.em,{children:"tests"})," you are running. Since the\nbrowser is mainly communicating with Playwright via CDP, there are only the most\nrudimentary Selenium commands that are listed in the Sauce Labs UI: to start and\nclose the session."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);