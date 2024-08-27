"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[74833],{46867:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=r(74848),n=r(28453);r(86025),r(11470),r(19365);const s={id:"expo",title:"Expo",sidebar_label:"Expo"},o=void 0,i={id:"testfairy/platforms/expo",title:"Expo",description:"TestFairy for React Native is a bridge to the TestFairy SDK and is supported for Expo projects. Integrating the TestFairy SDK into your app enables you to understand how your app performs on real devices. It shows when and how people use your app and provides any metrics you may need to optimize your user experience and code.",source:"@site/docs/testfairy/platforms/expo.md",sourceDirName:"testfairy/platforms",slug:"/testfairy/platforms/expo",permalink:"/sauce-docs/pr-preview/pr-2905/testfairy/platforms/expo",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/platforms/expo.md",tags:[],version:"current",lastUpdatedBy:"Laura Thomas",lastUpdatedAt:168874583e4,frontMatter:{id:"expo",title:"Expo",sidebar_label:"Expo"},sidebar:"docs",previous:{title:"Cordova",permalink:"/sauce-docs/pr-preview/pr-2905/testfairy/platforms/cordova"},next:{title:"Flutter",permalink:"/sauce-docs/pr-preview/pr-2905/testfairy/platforms/flutter"}},l={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Steps",id:"steps",level:2},{value:"Notes",id:"notes",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/react-native-testfairy",children:"TestFairy for React Native"})," is a bridge to the TestFairy SDK and is supported for Expo projects. Integrating the TestFairy SDK into your app enables you to understand how your app performs on real devices. It shows when and how people use your app and provides any metrics you may need to optimize your user experience and code."]}),"\n",(0,a.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsxs)(t.p,{children:["You have to eject your Expo project before installing TestFairy. This process is revertable, but reverting makes you lose access to TestFairy features. Apps that require native components are expected to utilize the bare workflow as stated in the ",(0,a.jsx)(t.a,{href:"https://docs.expo.io/expokit/eject/",children:"Expo docs"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,a.jsx)(t.p,{children:"From your project root, run the following commands:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"expo eject\nnpm install --save react-native-testfairy\n\ncd ios\npod install\n"})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsxs)(t.p,{children:["Since all Expo apps are React Native apps behind the scenes, all features introduced in ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/react-native-testfairy",children:"TestFairy for React Native"})," also apply to Expo."]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var a=r(18215);const n={tabItem:"tabItem_Ymn6"};var s=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>j});var a=r(96540),n=r(18215),s=r(23104),o=r(56347),i=r(205),l=r(57485),u=r(31682),c=r(89466);function p(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=d(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,p]=h({queryString:r,groupId:n}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),v=(()=>{const e=u??m;return f({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),b(e)}),[p,b,s]),tabValues:s}}var b=r(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(74848);function x(e){let{className:t,block:r,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),n=i[r].value;n!==a&&(u(t),o(n))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:p,onClick:c,...s,className:(0,n.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function w(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,y.jsx)(x,{...e,...t}),(0,y.jsx)(g,{...e,...t})]})}function j(e){const t=(0,b.A)();return(0,y.jsx)(w,{...e,children:p(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var a=r(96540);const n={},s=a.createContext(n);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);