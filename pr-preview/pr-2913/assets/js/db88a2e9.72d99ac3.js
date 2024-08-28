"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[4794],{40372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(74848),a=n(28453),o=(n(86025),n(11470)),s=n(19365);const i={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},l=void 0,u={id:"visual/e2e-testing/troubleshooting",title:"Troubleshooting",description:"The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the integration steps.",source:"@site/docs/visual/e2e-testing/troubleshooting.md",sourceDirName:"visual/e2e-testing",slug:"/visual/e2e-testing/troubleshooting",permalink:"/sauce-docs/pr-preview/pr-2913/visual/e2e-testing/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/e2e-testing/troubleshooting.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724864962e3,frontMatter:{id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"}},c={},d=[{value:"Test Timeouts",id:"test-timeouts",level:2},{value:"Test Framework Timeouts",id:"test-framework-timeouts",level:3},{value:"WebDriver Timeouts",id:"webdriver-timeouts",level:3},{value:"Can&#39;t Capture Snapshot with <code>cropTo</code>",id:"cant-capture-snapshot-with-cropto",level:2},{value:"Limitations",id:"limitations",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.admonition,{title:"Screener End-of-life",type:"warning",children:[(0,r.jsxs)(t.p,{children:["The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the ",(0,r.jsx)(t.a,{href:"/visual-testing/",children:"integration steps"}),"."]}),(0,r.jsx)(t.p,{children:"If you have any questions, please reach out to your Customer Success Manager or Sauce Labs Support."})]}),"\n",(0,r.jsx)(t.h2,{id:"test-timeouts",children:"Test Timeouts"}),"\n",(0,r.jsx)(t.p,{children:"If you receive a timeout, it could come from the testing framework you are using, or from WebDriver. For example, if you use WebDriverIO with Mocha, there is a default timeout of 10 seconds."}),"\n",(0,r.jsx)(t.h3,{id:"test-framework-timeouts",children:"Test Framework Timeouts"}),"\n",(0,r.jsx)(t.p,{children:"Test framework timeouts can be resolved by increasing the timeout option specific to your test framework."}),"\n",(0,r.jsx)(t.p,{children:"Here are some examples for WebDriverIO, which supports various testing frameworks:"}),"\n",(0,r.jsxs)(o.A,{defaultValue:"Mocha",values:[{label:"Mocha",value:"Mocha"},{label:"Jasmine",value:"Jasmine"},{label:"Cucumber",value:"Cucumber"}],children:[(0,r.jsxs)(s.A,{value:"Mocha",children:["WebDriverIO with Mocha Example:",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"// wdio.conf.js\nexports.config = {\n  framework: 'mocha',\n  mochaOpts: {\n    timeout: 90000\n  },\n  ...\n}\n"})})]}),(0,r.jsxs)(s.A,{value:"Jasmine",children:["WebDriverIO with Jasmine Example:",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"// wdio.conf.js\nexports.config = {\n  framework: 'jasmine',\n  jasmineNodeOpts: {\n    defaultTimeoutInterval: 90000\n  },\n  ...\n}\n"})})]}),(0,r.jsxs)(s.A,{value:"Cucumber",children:["WebDriverIO with Cucumber Example:",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"// wdio.conf.js\nexports.config = {\n  framework: 'mocha',\n  cucumberOpts: {\n    timeout: 90000\n  },\n  ...\n}\n"})})]})]}),"\n",(0,r.jsx)(t.h3,{id:"webdriver-timeouts",children:"WebDriver Timeouts"}),"\n",(0,r.jsxs)(t.p,{children:["WebDriver timeouts can be increased via the ",(0,r.jsx)(t.code,{children:"timeouts"})," capability."]}),"\n",(0,r.jsx)(t.p,{children:"The following WebDriver timeout defaults are used:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"capabilities = {\n  ...\n  timeouts: {\n    script: 90000,\n    pageLoad: 300000\n  }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Additional information on WebDriver timeouts can be found ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/WebDriver/Errors/ScriptTimeout",children:"here"}),"."]}),"\n",(0,r.jsxs)(t.h2,{id:"cant-capture-snapshot-with-cropto",children:["Can't Capture Snapshot with ",(0,r.jsx)(t.code,{children:"cropTo"})]}),"\n",(0,r.jsxs)(t.p,{children:["When using the ",(0,r.jsx)(t.a,{href:"https://docs.saucelabs.com/visual/e2e-testing/commands-options/#snapshot-command",children:"Snapshot command"}),", if you can't crop the target element with ",(0,r.jsx)(t.code,{children:"cropTo"})," and the element isn't scrollable, you can use the ",(0,r.jsx)(t.code,{children:"scrollAndStitchScreenshot"})," option. For example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"await browser.execute('/*@visual.snapshot*/', 'Home', { scrollAndStitchScreenshot: true });\n"})}),"\n",(0,r.jsx)(t.h3,{id:"limitations",children:"Limitations"}),"\n",(0,r.jsxs)(t.p,{children:["If the target element is scrollable, the ",(0,r.jsx)(t.code,{children:"cropTo"})," option may not capture a complete screenshot."]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),a=n(34164),o=n(23104),s=n(56347),i=n(205),l=n(57485),u=n(31682),c=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=p({queryString:n,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=u??b;return m({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function y(e){const t=(0,f.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);