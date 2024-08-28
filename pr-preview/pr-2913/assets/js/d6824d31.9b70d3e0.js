"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[99147],{40977:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var n=a(74848),r=a(28453);a(11470),a(19365);const s={id:"code-examples",title:"Visual E2E Code Examples",sidebar_label:"Code Examples"},i=void 0,l={id:"visual/e2e-testing/code-examples",title:"Visual E2E Code Examples",description:"The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the integration steps.",source:"@site/docs/visual/e2e-testing/code-examples.md",sourceDirName:"visual/e2e-testing",slug:"/visual/e2e-testing/code-examples",permalink:"/sauce-docs/pr-preview/pr-2913/visual/e2e-testing/code-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/e2e-testing/code-examples.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724864962e3,frontMatter:{id:"code-examples",title:"Visual E2E Code Examples",sidebar_label:"Code Examples"}},u={},o=[];function c(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.admonition,{title:"Screener End-of-life",type:"warning",children:[(0,n.jsxs)(t.p,{children:["The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the ",(0,n.jsx)(t.a,{href:"/visual-testing/",children:"integration steps"}),"."]}),(0,n.jsx)(t.p,{children:"If you have any questions, please reach out to your Customer Success Manager or Sauce Labs Support."})]}),"\n",(0,n.jsxs)(t.p,{children:["To view Visual E2E code examples, please refer to the ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs-training",children:"Sauce Labs Training resources GitHub repo"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/saucelabs-training/demo-js/tree/main/webdriverio/webdriver/examples/visual-e2e",children:"JavaScript (WebDriverIO)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/saucelabs-training/demo-java/blob/main/selenium-junit4-examples/src/test/java/com/saucedemo/selenium/junit4/SimpleVisualE2ETest.java",children:"Java"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/saucelabs-training/demo-python/tree/main/examples/sauce_visual",children:"Python"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/saucelabs-training/demo-ruby/tree/main/sauce-features/visual",children:"Ruby"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/saucelabs-training/demo-csharp/tree/main/SauceExamples/SeleniumNunit/Visual",children:"C#"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var n=a(34164);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,i),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>w});var n=a(96540),r=a(34164),s=a(23104),i=a(56347),l=a(205),u=a(57485),o=a(31682),c=a(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=p(e),[i,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,d]=h({queryString:a,groupId:r}),[b,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),v=(()=>{const e=o??b;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{v&&u(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=a(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function x(e){let{className:t,block:a,selectedValue:n,selectValue:i,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),r=l[a].value;r!==n&&(o(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function y(e){let{lazy:t,children:a,selectedValue:s}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>l});var n=a(96540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);