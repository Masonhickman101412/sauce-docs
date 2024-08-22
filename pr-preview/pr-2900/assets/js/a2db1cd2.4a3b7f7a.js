"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[81302],{61674:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=s(74848),n=s(28453),i=s(86025);s(11470),s(19365);const a={id:"insights",title:"Insights",sidebar_label:"Insights"},l=void 0,o={id:"testfairy/using-testfairy/insights",title:"Insights",description:"The INSIGHTS tab displays information about recorded crashes and sessions.",source:"@site/docs/testfairy/using-testfairy/insights.md",sourceDirName:"testfairy/using-testfairy",slug:"/testfairy/using-testfairy/insights",permalink:"/sauce-docs/pr-preview/pr-2900/testfairy/using-testfairy/insights",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/using-testfairy/insights.md",tags:[],version:"current",lastUpdatedBy:"Laura Thomas",lastUpdatedAt:1688906819e3,frontMatter:{id:"insights",title:"Insights",sidebar_label:"Insights"},sidebar:"docs",previous:{title:"Dashboard",permalink:"/sauce-docs/pr-preview/pr-2900/testfairy/using-testfairy/dashboard"},next:{title:"App Center Alternative",permalink:"/sauce-docs/pr-preview/pr-2900/testfairy/app-center-alternative"}},u={},c=[{value:"Preset Filters",id:"preset-filters",level:2},{value:"General Filters",id:"general-filters",level:2},{value:"Attribute Filters",id:"attribute-filters",level:2},{value:"Custom Attributes Filters",id:"custom-attributes-filters",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"INSIGHTS"})," tab displays information about recorded crashes and sessions."]}),"\n",(0,r.jsx)(t.h2,{id:"preset-filters",children:"Preset Filters"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Preset Segments"})," column contains three preset filters:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Crashes: All crashes in the last month"}),"\n",(0,r.jsx)(t.li,{children:"Slow Session: All slow sessions in the last month"}),"\n",(0,r.jsx)(t.li,{children:"Received Feedback: All sessions with feedback in the last month"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"general-filters",children:"General Filters"}),"\n",(0,r.jsx)(t.p,{children:"To filter the list using the following filters:"}),"\n",(0,r.jsx)("img",{src:(0,i.A)("/img/testfairy/using-tf/insights-filter-1.png"),alt:"Filters"}),"\n",(0,r.jsx)(t.p,{children:"You can see all apps in your account or filter only one of them:"}),"\n",(0,r.jsx)("img",{src:(0,i.A)("/img/testfairy/using-tf/insights-filter-app-name.png"),alt:"filter by app name"}),"\n",(0,r.jsx)(t.p,{children:"You can see all versions of the app you just filtered or a specific version."}),"\n",(0,r.jsx)("img",{src:(0,i.A)("/img/testfairy/using-tf/insights-filter-app-version.png"),alt:"filter by version"}),"\n",(0,r.jsx)(t.p,{children:"You can also filter the timeframe of the list you want."}),"\n",(0,r.jsx)("img",{src:(0,i.A)("/img/testfairy/using-tf/insights-time-frame.png"),alt:"filter by timeframe"}),"\n",(0,r.jsx)(t.h2,{id:"attribute-filters",children:"Attribute Filters"}),"\n",(0,r.jsxs)(t.p,{children:["In addition to general filters, you can also filter by ",(0,r.jsx)(t.strong,{children:"session attributes"}),"."]}),"\n",(0,r.jsx)("img",{src:(0,i.A)("/img/testfairy/using-tf/attribute-filter.png"),alt:"filter by session attribute"}),"\n",(0,r.jsx)(t.p,{children:"The default attributes are the primary attribute types (User, Session, Location, Device, etc.)."}),"\n",(0,r.jsx)(t.h2,{id:"custom-attributes-filters",children:"Custom Attributes Filters"}),"\n",(0,r.jsxs)(t.p,{children:["If you add ",(0,r.jsx)(t.a,{href:"https://docs.testfairy.com/SDK/Session_Attributes.html",children:"custom attributes"})," to your app's session, you see them here and be able to filter according to their values:"]}),"\n",(0,r.jsx)("img",{src:(0,i.A)("/img/testfairy/using-tf/custome-attributes.png"),alt:"filter by custom attribute"}),"\n",(0,r.jsx)(t.p,{children:"This potent tool can help you identify specific sessions and filter them out of the many sessions in your app."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["When you define values for this field, do not use characters other than text or numbers (a-z A-Z 0-9), such as ",(0,r.jsx)(t.code,{children:"/"}),", ",(0,r.jsx)(t.code,{children:'"'}),", or ",(0,r.jsx)(t.code,{children:"-"}),", as they are not searchable in this field. If you do use these characters, you can search only for the parts of the text without them (for example, in ",(0,r.jsx)(t.code,{children:'{attr1="dada-1270"}'})," the ",(0,r.jsx)(t.code,{children:"-"})," is not searchable, so you can only search for ",(0,r.jsx)(t.code,{children:"dada"})," or ",(0,r.jsx)(t.code,{children:"1270"}),"."]})}),"\n",(0,r.jsx)(t.p,{children:"After you select an attribute, you can add a logical expression and enter a value in the text field."}),"\n",(0,r.jsx)("img",{src:(0,i.A)("/img/testfairy/using-tf/atribute-filter-logical.png"),alt:"logica expression"}),"\n",(0,r.jsx)(t.p,{children:"You can see the result in the table."}),"\n",(0,r.jsxs)(t.p,{children:["You can add another attribute filter using a plus sign or save a filter by clicking the ",(0,r.jsx)(t.strong,{children:"Save Segment"}),". After entering the name, you can see the segment in the ",(0,r.jsx)(t.strong,{children:"Custom Segments"})," list."]}),"\n",(0,r.jsx)("img",{src:(0,i.A)("/img/testfairy/using-tf/filter-name.png"),alt:"save segment"})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>a});s(96540);var r=s(18215);const n={tabItem:"tabItem_Ymn6"};var i=s(74848);function a(e){let{children:t,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,a),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>A});var r=s(96540),n=s(18215),i=s(23104),a=s(56347),l=s(205),o=s(57485),u=s(31682),c=s(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:r,default:n}}=e;return{value:t,label:s,attributes:r,default:n}}))}(s);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function f(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:s}=e;const n=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function m(e){const{defaultValue:t,queryString:s=!1,groupId:n}=e,i=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[u,d]=p({queryString:s,groupId:n}),[m,g]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Dv)(s);return[n,(0,r.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:n}),b=(()=>{const e=u??m;return f({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=s(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=s(74848);function v(e){let{className:t,block:s,selectedValue:r,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,s=o.indexOf(t),n=l[s].value;n!==r&&(u(t),a(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;t=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;t=o[s]??o[o.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},t),children:l.map((e=>{let{value:t,label:s,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...i,className:(0,n.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===t}),children:s??t},t)}))})}function x(e){let{lazy:t,children:s,selectedValue:n}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function j(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,y.jsx)(v,{...e,...t}),(0,y.jsx)(x,{...e,...t})]})}function A(e){const t=(0,g.A)();return(0,y.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>l});var r=s(96540);const n={},i=r.createContext(n);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);