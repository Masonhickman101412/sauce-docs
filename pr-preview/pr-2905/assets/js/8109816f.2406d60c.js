"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[14674],{26336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(74848),s=n(28453),r=(n(11470),n(19365),n(86025));const i={id:"sumo",title:"Sumo Logic Integration",sidebar_label:"Sumo Logic",description:"Automatically view your Sauce Labs test results in a custom Sumo Logic dashboard.",keywords:["send-test-results","sumo logic","how-to"]},a=void 0,l={id:"basics/integrations/sumo",title:"Sumo Logic Integration",description:"Automatically view your Sauce Labs test results in a custom Sumo Logic dashboard.",source:"@site/docs/basics/integrations/sumo.md",sourceDirName:"basics/integrations",slug:"/basics/integrations/sumo",permalink:"/sauce-docs/pr-preview/pr-2905/basics/integrations/sumo",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/integrations/sumo.md",tags:[],version:"current",lastUpdatedBy:"Marcus Merrell",lastUpdatedAt:1694115391e3,frontMatter:{id:"sumo",title:"Sumo Logic Integration",sidebar_label:"Sumo Logic",description:"Automatically view your Sauce Labs test results in a custom Sumo Logic dashboard.",keywords:["send-test-results","sumo logic","how-to"]},sidebar:"docs",previous:{title:"UiPath",permalink:"/sauce-docs/pr-preview/pr-2905/basics/integrations/uipath"},next:{title:"Bitbucket",permalink:"/sauce-docs/pr-preview/pr-2905/basics/integrations/bitbucket"}},c={},u=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Setting up a Sumo Logic Collector",id:"setting-up-a-sumo-logic-collector",level:2},{value:"Choose or Add a Collector",id:"choose-or-add-a-collector",level:3},{value:"Configure a Source",id:"configure-a-source",level:3},{value:"Enabling the Sumo Logic Integration in Sauce Labs",id:"enabling-the-sumo-logic-integration-in-sauce-labs",level:2},{value:"Remove your Sumo Logic Integration",id:"remove-your-sumo-logic-integration",level:3},{value:"Installing the Sauce Labs App in Sumo Logic",id:"installing-the-sauce-labs-app-in-sumo-logic",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Sauce Labs has partnered with Sumo Logic to provide a dynamic integration in which Sauce Labs test results are automatically pushed to a custom Sauce Labs dashboard in Sumo Logic via a webhook."}),"\n",(0,o.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["A Sauce Labs account (if you don't have one, start a ",(0,o.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial"}),")"]}),"\n",(0,o.jsx)(t.li,{children:"A Sumo Logic account"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"setting-up-a-sumo-logic-collector",children:"Setting up a Sumo Logic Collector"}),"\n",(0,o.jsx)(t.p,{children:"Before you can push test data from Sauce Labs to Sumo Logic, you must create a connector in Sumo Logic that can accept the push request."}),"\n",(0,o.jsx)(t.h3,{id:"choose-or-add-a-collector",children:"Choose or Add a Collector"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["From your Sumo Logic ",(0,o.jsx)(t.strong,{children:"Home"})," menu, choose ",(0,o.jsx)(t.strong,{children:"Manage Data"})," >> ",(0,o.jsx)(t.strong,{children:"Collection"})," from the navigation panel."]}),"\n",(0,o.jsxs)(t.li,{children:["If you have an existing collector you'll use to receive push data, skip to ",(0,o.jsx)(t.a,{href:"#configure-a-source",children:"Configure a Source"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["If you need to create a new collector, click the ",(0,o.jsx)(t.strong,{children:"Add Collector"})," link at the top right of the ",(0,o.jsx)(t.strong,{children:"Collection"})," screen."]}),"\n",(0,o.jsxs)(t.li,{children:["Choose ",(0,o.jsx)(t.strong,{children:"Hosted Collector"})," in the pop-up."]}),"\n",(0,o.jsxs)(t.li,{children:["Enter the collector details, as applicable:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Name"})," - Providing a name for the Connector is the only requirement."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Description"})," - Further distinguish the purpose or type of data collected, if you wish."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Category"})," - Identifies the source, but is not necessary at this level because the generated source URL will overwrite this value."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Fields/Metadata"})," - The Sauce Labs dashboard is pre-configured so creating ",(0,o.jsx)(t.a,{href:"https://help.sumologic.com/Manage/Fields",children:"metadata field definitions"})," is not applicable for this integration."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Budget"})," - If you have defined an ",(0,o.jsx)(t.a,{href:"https://help.sumologic.com/Manage/Ingestion-and-Volume/Ingest_Budgets",children:"ingest budget"})," for your Sumo Logic data collections, you can choose the applicable budget for this collector."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Time Zone"})," - Sets the default time zone to apply to log timestamps, but is not necessary at this level because the generated source URL will overwrite this value."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Save"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"OK"})," to ",(0,o.jsx)(t.a,{href:"#configure-a-source",children:"configure a source"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"configure-a-source",children:"Configure a Source"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["From your Sumo Logic ",(0,o.jsx)(t.strong,{children:"Home"}),", navigate to ",(0,o.jsx)(t.strong,{children:"Manage Data"})," >> ",(0,o.jsx)(t.strong,{children:"Collection"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Choose the ",(0,o.jsx)(t.strong,{children:"Add Source"})," link to bring up the Source menu. ",(0,o.jsx)(t.em,{children:"If you just created a new Collector, you will already be here."})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Choose the ",(0,o.jsx)(t.strong,{children:"HTTP Logs and Metrics"})," source."]}),"\n",(0,o.jsx)("img",{src:(0,r.A)("img/integrations/sumo/http-source.png"),alt:"Select HTTP Source",width:"500"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Enter the source details, as applicable. In this case, you can accept the default values for most settings, but you must, at a minimum, provide the following:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Name"})," - Name your source for easy identification."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Source Category"})," - This is a unique classification of the data that is being received by the source. Since the Sauce Labs app retrieves VDC test data, an example for this value might be ",(0,o.jsx)(t.code,{children:"saucelabs/tests/vdc"}),". This value is used to populate the panels of the Sauce Labs dashboard in Sumo Logic with the data pushed by the corresponding webhook."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click ",(0,o.jsx)(t.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["The generated URL shown is the value you will need to provide to set up the Sauce Labs Sumo Logic webhook. You can copy it now or you can access it when you are ready by clicking the ",(0,o.jsx)(t.strong,{children:"Show URL"})," link for your source on your Sumo Logic Collection page."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"enabling-the-sumo-logic-integration-in-sauce-labs",children:"Enabling the Sumo Logic Integration in Sauce Labs"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["From your Sauce Labs account, navigate to the ",(0,o.jsx)(t.a,{href:"https://app.saucelabs.com/integrations",children:"Account Integrations"})," page."]}),"\n",(0,o.jsxs)(t.li,{children:["Click the Sumo Logic ",(0,o.jsx)(t.strong,{children:"Enable"})," button."]}),"\n",(0,o.jsx)(t.li,{children:"Provide the source URL from your Sumo Logic Sauce Labs collector."}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Sauce Labs will now automatically push your VDC jobs data to the Sumo Logic collector."}),"\n",(0,o.jsx)(t.admonition,{title:"Multiple Data Centers",type:"note",children:(0,o.jsx)(t.p,{children:"The Sumo Logic integration is specific to the data center that is active for your Sauce Labs account during setup. If you have access to multiple data centers, you must switch into each data center and repeat the Sumo Logic setup process in order to push jobs data from both data centers to your Sumo Logic collector."})}),"\n",(0,o.jsx)(t.h3,{id:"remove-your-sumo-logic-integration",children:"Remove your Sumo Logic Integration"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["From your Sauce Labs account, navigate to the ",(0,o.jsx)(t.a,{href:"https://app.saucelabs.com/integrations",children:"Account Integrations"})," page."]}),"\n",(0,o.jsxs)(t.li,{children:["Click the Sumo Logic ",(0,o.jsx)(t.strong,{children:"Enable"})," button."]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Remove Configurations"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Sauce Labs will no longer push your VDC jobs data to the Sumo Logic collector."}),"\n",(0,o.jsx)(t.h2,{id:"installing-the-sauce-labs-app-in-sumo-logic",children:"Installing the Sauce Labs App in Sumo Logic"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["From your Sumo Logic ",(0,o.jsx)(t.strong,{children:"Home"}),", choose ",(0,o.jsx)(t.strong,{children:"App Catalog"})," from the navigation panel."]}),"\n",(0,o.jsx)(t.li,{children:"Use the search bar to find and click the Sauce Labs app."}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Add Integration"})," to install the Sauce Labs app to your Sumo Logic account, which will add the ",(0,o.jsx)(t.strong,{children:"Sauce Labs - VDC"})," dashboard to your directory."]}),"\n",(0,o.jsx)(t.li,{children:"Click on the dashboard to view your Sauce Labs VDC metrics."}),"\n"]}),"\n",(0,o.jsx)("img",{src:(0,r.A)("img/integrations/sumo/sl-sumo-dash.png"),alt:"Sauce Labs Dashboard in Sumo",width:"800"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var o=n(18215);const s={tabItem:"tabItem_Ymn6"};var r=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.A)(s.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>S});var o=n(96540),s=n(18215),r=n(23104),i=n(56347),a=n(205),l=n(57485),c=n(31682),u=n(89466);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:s}}=e;return{value:t,label:n,attributes:o,default:s}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=h(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[c,d]=m({queryString:n,groupId:s}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,u.Dv)(n);return[s,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),x=(()=>{const e=c??p;return g({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function j(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=a[n].value;s!==o&&(c(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=p(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,f.jsx)(j,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function S(e){const t=(0,b.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);