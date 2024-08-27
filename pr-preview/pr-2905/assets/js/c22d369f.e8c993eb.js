"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[75616],{77223:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=r(74848),a=r(28453),i=(r(11470),r(19365),r(86025));const o={id:"github",title:"GitHub Integration with Backtrace",sidebar_label:"GitHub",description:"Integrate Backtrace with GitHub."},s=void 0,u={id:"error-reporting/workflow-integrations/issue-tracking/github",title:"GitHub Integration with Backtrace",description:"Integrate Backtrace with GitHub.",source:"@site/docs/error-reporting/workflow-integrations/issue-tracking/github.md",sourceDirName:"error-reporting/workflow-integrations/issue-tracking",slug:"/error-reporting/workflow-integrations/issue-tracking/github",permalink:"/sauce-docs/pr-preview/pr-2905/error-reporting/workflow-integrations/issue-tracking/github",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/workflow-integrations/issue-tracking/github.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1690913171e3,frontMatter:{id:"github",title:"GitHub Integration with Backtrace",sidebar_label:"GitHub",description:"Integrate Backtrace with GitHub."},sidebar:"backtrace",previous:{title:"Jira",permalink:"/sauce-docs/pr-preview/pr-2905/error-reporting/workflow-integrations/issue-tracking/jira"},next:{title:"Phabricator",permalink:"/sauce-docs/pr-preview/pr-2905/error-reporting/workflow-integrations/issue-tracking/phabricator"}},l={},c=[{value:"Generate an API Token",id:"generate-an-api-token",level:2},{value:"Set Up the Integration",id:"set-up-the-integration",level:2}];function d(e){const t={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This guide goes through the steps necessary to integrate Backtrace with GitHub. Setting up integration with GitHub requires a valid GitHub endpoint URL, as well as an API token."}),"\n",(0,n.jsx)(t.p,{children:"The steps in this process are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Generate an API token"}),"\n",(0,n.jsx)(t.li,{children:"Set up the integration"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"generate-an-api-token",children:"Generate an API Token"}),"\n",(0,n.jsx)(t.p,{children:'In GitHub, click the menu in the upper-right and select "Settings". In the Personal Settings menu on the left, click "Personal Access Tokens", then "Generate new token" on the upper-right to generate an API token.'}),"\n",(0,n.jsx)("img",{src:(0,i.A)("img/error-reporting/workflow-integrations/github-generate-token.png"),alt:""}),"\n",(0,n.jsx)(t.p,{children:"Customize the security settings as desired, making sure that the token is granted access to create new Issues. Make a note of the token, you will need it for configuration below."}),"\n",(0,n.jsx)(t.h2,{id:"set-up-the-integration",children:"Set Up the Integration"}),"\n",(0,n.jsxs)(t.p,{children:["To set up the integration, first go to the ",(0,n.jsx)(t.strong,{children:"Project Settings"})," page for the project you want to add a integration for:"]}),"\n",(0,n.jsx)("img",{src:(0,i.A)("img/error-reporting/workflow-integrations/set-up-workflow-integration.webp"),alt:""}),"\n",(0,n.jsxs)(t.p,{children:["Then click ",(0,n.jsx)(t.strong,{children:"Integrations"})," in the left-hand menu, and the plus sign to create a new integration:"]}),"\n",(0,n.jsx)("img",{src:(0,i.A)("img/error-reporting/workflow-integrations/add-wf-integration.webp"),alt:""}),"\n",(0,n.jsxs)(t.p,{children:["Select ",(0,n.jsx)(t.strong,{children:"GitHub"})," and fill in the required settings."]}),"\n",(0,n.jsx)("img",{src:(0,i.A)("img/error-reporting/workflow-integrations/github-settings.png"),alt:""}),"\n",(0,n.jsxs)(t.p,{children:["For more information about these settings, please refer to the ",(0,n.jsx)(t.a,{href:"https://developer.github.com/enterprise/2.3/v3/issues/#create-an-issue",children:"GitHub API Documentation"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Next: After filling in the integration-specific settings, proceed to Common Settings to finish configuring the integration."})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(18215);const a={tabItem:"tabItem_Ymn6"};var i=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(96540),a=r(18215),i=r(23104),o=r(56347),s=r(205),u=r(57485),l=r(31682),c=r(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=g(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,d]=p({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),m=(()=>{const e=l??f;return h({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{m&&u(m)}),[m]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=r(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=r(74848);function k(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),a=s[r].value;a!==n&&(l(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...i,className:(0,a.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=f(e);return(0,w.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,w.jsx)(k,{...e,...t}),(0,w.jsx)(v,{...e,...t})]})}function j(e){const t=(0,b.A)();return(0,w.jsx)(x,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>s});var n=r(96540);const a={},i=n.createContext(a);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);