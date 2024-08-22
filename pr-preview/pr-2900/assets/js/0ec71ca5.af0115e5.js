"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[12182],{26143:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=a(74848),n=a(28453),r=a(11470),l=a(19365);a(86025);const i={id:"quickstart",title:"Playwright Quickstart",sidebar_label:"Quickstart"},c=void 0,o={id:"web-apps/automated-testing/playwright/quickstart",title:"Playwright Quickstart",description:"Use saucectl -- the Sauce Labs test orchestrator CLI to run Playwright tests directly from your existing Playwright project.",source:"@site/docs/web-apps/automated-testing/playwright/quickstart.md",sourceDirName:"web-apps/automated-testing/playwright",slug:"/web-apps/automated-testing/playwright/quickstart",permalink:"/sauce-docs/pr-preview/pr-2900/web-apps/automated-testing/playwright/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/automated-testing/playwright/quickstart.md",tags:[],version:"current",lastUpdatedBy:"aliciakrebs",lastUpdatedAt:1683568683e3,frontMatter:{id:"quickstart",title:"Playwright Quickstart",sidebar_label:"Quickstart"},sidebar:"docs",previous:{title:"Using Playwright",permalink:"/sauce-docs/pr-preview/pr-2900/web-apps/automated-testing/playwright"},next:{title:"Selenium Grid",permalink:"/sauce-docs/pr-preview/pr-2900/web-apps/automated-testing/playwright/selenium-grid"}},u={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Step 1: Install <code>saucectl</code>",id:"step-1-install-saucectl",level:2},{value:"Step 2: Link Your Sauce Labs Account",id:"step-2-link-your-sauce-labs-account",level:2},{value:"Step 3: Clone the Playwright Project",id:"step-3-clone-the-playwright-project",level:2},{value:"Step 4: Run Tests",id:"step-4-run-tests",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.code,{children:"saucectl"})," -- the Sauce Labs test orchestrator CLI to run ",(0,s.jsx)(t.a,{href:"https://github.com/microsoft/playwright",children:"Playwright"})," tests directly from your existing Playwright project."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Don't have Playwright tests but want to try? The Playwright Demo Repo includes a sample project structure, working configuration file, and sample Playwright test so you can get up and running in less than 10 minutes!"}),"\n",(0,s.jsxs)(t.li,{children:["Already running Playwright? Let ",(0,s.jsx)(t.code,{children:"saucectl"})," run your tests in the Sauce Labs Cloud, where you have access to thousands of OS/browser combinations and Sauce Labs analytics."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A Sauce Labs account (if you don't have one, start a ",(0,s.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["Your Sauce Labs ",(0,s.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://nodejs.org/en/",children:"Node.js"})," to use the NPM package manager"]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.a,{href:"https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home",children:"GitHub"})," account"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"step-1-install-saucectl",children:["Step 1: Install ",(0,s.jsx)(t.code,{children:"saucectl"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"npm install -g saucectl\n"})}),"\n",(0,s.jsx)(t.h2,{id:"step-2-link-your-sauce-labs-account",children:"Step 2: Link Your Sauce Labs Account"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"saucectl"})," requires access to a valid Sauce Labs account."]}),"\n",(0,s.jsxs)(t.admonition,{title:"Use Environment Variables",type:"tip",children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"saucectl"})," detects your Sauce Labs credentials ",(0,s.jsx)(t.a,{href:"/basics/environment-variables",children:"environment variables"})," and prioritizes them over values in the ",(0,s.jsx)(t.code,{children:"credentials.yml"})," file when both are present. ",(0,s.jsx)(t.strong,{children:"If you have set them, you may skip this step."})," Not sure if you have them set? Run the following command to check:"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"echo $SAUCE_USERNAME\necho $SAUCE_ACCESS_KEY\n"})}),(0,s.jsx)(t.p,{children:"If a value is returned for both variables, they are set."})]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Run the ",(0,s.jsx)(t.code,{children:"configure"})," command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"saucectl configure\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Enter your Sauce Labs Username and Access Key at the prompts."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"step-3-clone-the-playwright-project",children:"Step 3: Clone the Playwright Project"}),"\n",(0,s.jsxs)(r.A,{defaultValue:"https",values:[{label:"HTTPS",value:"https"},{label:"SSH",value:"ssh"}],children:[(0,s.jsx)(l.A,{value:"https",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"git clone https://github.com/saucelabs/saucectl-playwright-example.git\n"})})}),(0,s.jsx)(l.A,{value:"ssh",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"git clone git@github.com:saucelabs/saucectl-playwright-example.git\n"})})})]}),"\n",(0,s.jsx)(t.h2,{id:"step-4-run-tests",children:"Step 4: Run Tests"}),"\n",(0,s.jsxs)(t.p,{children:["Navigate to the Playwright example in the project you just cloned, then use the ",(0,s.jsx)(t.code,{children:"run"})," command to run the sample tests."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"cd saucectl-playwright-example\nsaucectl run\n"})}),"\n",(0,s.jsx)(t.p,{children:"The console displays the executing tests, distinguishing which mode is running."}),"\n",(0,s.jsxs)(t.p,{children:["The results and test assets are available immediately following test completion in your ",(0,s.jsx)(t.a,{href:"https://app.saucelabs.com/dashboard/tests/vdc",children:"Sauce Labs account"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var s=a(18215);const n={tabItem:"tabItem_Ymn6"};var r=a(74848);function l(e){let{children:t,hidden:a,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,l),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>w});var s=a(96540),n=a(18215),r=a(23104),l=a(56347),i=a(205),c=a(57485),o=a(31682),u=a(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:s,default:n}}=e;return{value:t,label:a,attributes:s,default:n}}))}(a);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=h(e),[l,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[o,d]=m({queryString:a,groupId:n}),[b,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Dv)(a);return[n,(0,s.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=o??b;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,r]),tabValues:r}}var g=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(74848);function y(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),u=e=>{const t=e.currentTarget,a=c.indexOf(t),n=i[a].value;n!==s&&(o(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...r,className:(0,n.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":s===t}),children:a??t},t)}))})}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function j(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,x.jsx)(y,{...e,...t}),(0,x.jsx)(v,{...e,...t})]})}function w(e){const t=(0,g.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>i});var s=a(96540);const n={},r=s.createContext(n);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);