"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[46760],{77523:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=a(74848),n=a(28453);a(11470),a(19365),a(86025);const s={id:"replay",title:"Replay on Sauce Labs",sidebar_label:"Using Replay"},o=void 0,i={id:"web-apps/automated-testing/replay",title:"Replay on Sauce Labs",description:"Replay is a library that provides an API to replay and stringify recordings created using Chrome DevTools Recorder. Using the saucectl CLI, you can replay Chrome DevTools' JSON-based recordings remotely on Sauce Labs, giving you the flexibility of choosing browser version and operating system combinations and test result data analytics.",source:"@site/docs/web-apps/automated-testing/replay.md",sourceDirName:"web-apps/automated-testing",slug:"/web-apps/automated-testing/replay",permalink:"/sauce-docs/pr-preview/pr-2905/web-apps/automated-testing/replay",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/automated-testing/replay.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1679351812e3,frontMatter:{id:"replay",title:"Replay on Sauce Labs",sidebar_label:"Using Replay"},sidebar:"docs",previous:{title:"Limitations",permalink:"/sauce-docs/pr-preview/pr-2905/web-apps/automated-testing/testcafe/limitations"},next:{title:"Quickstart",permalink:"/sauce-docs/pr-preview/pr-2905/web-apps/automated-testing/replay/quickstart"}},l={},u=[{value:"Supported Testing Platforms",id:"supported-testing-platforms",level:2},{value:"How to Get Started",id:"how-to-get-started",level:2},{value:"Limitations",id:"limitations",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/puppeteer/replay",children:"Replay"})," is a library that provides an API to replay and stringify recordings created using ",(0,r.jsx)(t.a,{href:"https://developer.chrome.com/docs/devtools/recorder",children:"Chrome DevTools Recorder"}),". Using the ",(0,r.jsxs)(t.a,{href:"/dev/cli/saucectl",children:[(0,r.jsx)(t.code,{children:"saucectl"})," CLI"]}),", you can replay Chrome DevTools' JSON-based recordings remotely on Sauce Labs, giving you the flexibility of choosing browser version and operating system combinations and test result data analytics."]}),"\n",(0,r.jsx)(t.h2,{id:"supported-testing-platforms",children:"Supported Testing Platforms"}),"\n",(0,r.jsx)(t.p,{children:"Sauce Labs supports the following test configurations for Replay:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Browsers: Chrome"}),"\n",(0,r.jsx)(t.li,{children:"Platforms: Windows 10, Windows 11, macOS 11, macOS 12, macOS 13"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"how-to-get-started",children:"How to Get Started"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/web-apps/automated-testing/replay/quickstart",children:"Quickstart"}),": Use our demo repo to quickly set up and run a sample Replay project and test to see the results."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/web-apps/automated-testing/replay/yaml",children:"Run your own"}),": Customize ",(0,r.jsx)(t.code,{children:"saucectl"})," to replay your existing recordings just by modifying the ",(0,r.jsx)(t.code,{children:"config.yml"})," file for your project."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/dev/cli/saucectl/usage/use-cases/#integrating-saucectl-in-your-ci-pipeline",children:"Incorporate saucectl in your pipeline"}),": Replay in Sauce Labs supports CI integrations with Circle CI, GitLab, Jenkins, and GitHub Actions."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,r.jsx)(t.p,{children:"There are no known limitations at the time of this writing."})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var r=a(18215);const n={tabItem:"tabItem_Ymn6"};var s=a(74848);function o(e){let{children:t,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,o),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>j});var r=a(96540),n=a(18215),s=a(23104),o=a(56347),i=a(205),l=a(57485),u=a(31682),c=a(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:a,groupId:n}),[b,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),g=(()=>{const e=u??b;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=a(74848);function v(e){let{className:t,block:a,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),n=i[a].value;n!==r&&(u(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function x(e){const t=b(e);return(0,y.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,y.jsx)(v,{...e,...t}),(0,y.jsx)(w,{...e,...t})]})}function j(e){const t=(0,f.A)();return(0,y.jsx)(x,{...e,children:d(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>i});var r=a(96540);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);