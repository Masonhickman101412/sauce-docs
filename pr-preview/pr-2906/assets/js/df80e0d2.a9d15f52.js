"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[6904],{33369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=r(74848),n=r(28453),o=(r(86025),r(11470)),s=r(19365);const l={id:"remote-logging",title:"Remote Logging",sidebar_label:"Remote Logging"},i=void 0,u={id:"testfairy/sdk/remote-logging",title:"Remote Logging",description:"TestFairy allows developers to log items with a session without logging into the console output. In some cases, workarounds allow you to wrap the TestFairy remote logging method in a way that both log to the console and the session.",source:"@site/docs/testfairy/sdk/remote-logging.md",sourceDirName:"testfairy/sdk",slug:"/testfairy/sdk/remote-logging",permalink:"/sauce-docs/pr-preview/pr-2906/testfairy/sdk/remote-logging",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/remote-logging.md",tags:[],version:"current",lastUpdatedBy:"Laura Thomas",lastUpdatedAt:16888306e5,frontMatter:{id:"remote-logging",title:"Remote Logging",sidebar_label:"Remote Logging"},sidebar:"docs",previous:{title:"Identifying your Users",permalink:"/sauce-docs/pr-preview/pr-2906/testfairy/sdk/identifying-users"},next:{title:"Session Attributes",permalink:"/sauce-docs/pr-preview/pr-2906/testfairy/sdk/session-attributes"}},c={},d=[{value:"Changing Your Prefix Header",id:"changing-your-prefix-header",level:3},{value:"Creating a New Prefix Header",id:"creating-a-new-prefix-header",level:3}];function h(e){const t={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"TestFairy allows developers to log items with a session without logging into the console output. In some cases, workarounds allow you to wrap the TestFairy remote logging method in a way that both log to the console and the session."}),"\n",(0,a.jsxs)(o.A,{groupId:"sdk",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS Objective C",value:"iosC"},{label:"iOS Swift",value:"iosS"},{label:"Cordova",value:"cordova"},{label:"React Native",value:"react"},{label:"Nativescript",value:"native"},{label:"Xamarin",value:"xamarin"},{label:"Unity",value:"unity"},{label:"Adobe Air",value:"adobe"},{label:"Titanium",value:"titanium"}],children:[(0,a.jsxs)(s.A,{value:"android",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'TestFairy.log("<tag>", "<message>");\n'})}),"Example",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'// Be sure to import TestFairy\nimport com.testfairy.TestFairy;\n\nTestFairy.log("Tag", "Hello, TestFairy!");\n'})})]}),(0,a.jsxs)(s.A,{value:"iosC",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'TFLog(@"<message with format>", <arguments>);\n[TestFairy log:@"<message>"];\n'})}),"Example",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'// Be sure to import TestFairy\n#import "TestFairy.h"\n\nTFLog(@"Hello, %@", @"TestFairy!");\n[TestFairy log:@"Hello, TestFairy!"];\n'})}),"We recommend sending all calls to ",(0,a.jsx)("code",{children:"NSLog"})," to TestFairy so you can continue to use ",(0,a.jsx)("code",{children:"NSLog"})," and see all your log statements in your session.",(0,a.jsx)("br",{}),"\nTo enable sending logs to TestFairy, you have to redefine ",(0,a.jsx)("code",{children:"NSLog"})," using a macro with the following lines. This macro allows you to continue using ",(0,a.jsx)("code",{children:"NSLog"})," in your code while also adding the logs to the matching session in TestFairy).",(0,a.jsx)(t.h3,{id:"changing-your-prefix-header",children:"Changing Your Prefix Header"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'#import "TestFairy.h"\n#define NSLog(s, ...) do { NSLog(s, ##__VA_ARGS__); TFLog(s, ##__VA_ARGS__); } while (0)\n'})}),(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Add the above line to a global header in your project, accessible to every class file."}),"\n",(0,a.jsx)(t.li,{children:"Update or create a Prefix Header (.pch) for your project. If you do not have a PCH file in your project, you can follow the steps in the next section."}),"\n"]}),(0,a.jsx)(t.h3,{id:"creating-a-new-prefix-header",children:"Creating a New Prefix Header"}),"If your project doesn\u2019t already include a Prefix Header (.pch):",(0,a.jsx)("br",{}),(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Create a new file under iOS > Other > PCH File."}),"\n",(0,a.jsxs)(t.li,{children:["Name your file ",(0,a.jsx)(t.code,{children:"PCH file"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"Add these lines of code to the file:"}),"\n"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'#import "TestFairy.h"\n#define NSLog(s, ...) do { NSLog(s, ##__VA_ARGS__); TFLog(s, ##__VA_ARGS__); } while (0)\n'})}),(0,a.jsxs)(t.ol,{start:"4",children:["\n",(0,a.jsxs)(t.li,{children:["From the ",(0,a.jsx)(t.strong,{children:"Project Navigator"}),", select your project and the corresponding target."]}),"\n",(0,a.jsx)(t.li,{children:'Project > Build Settings > Search: "Prefix Header".'}),"\n",(0,a.jsxs)(t.li,{children:["Under ",(0,a.jsx)(t.strong,{children:"Apple LLVM 7.0"}),", you get the Prefix Header key."]}),"\n",(0,a.jsxs)(t.li,{children:["Type the file's path, for example: ",(0,a.jsx)(t.code,{children:"$(SRCROOT)/$(PROJECT_NAME)/ProjectName-Prefix.pch"}),". Your file may be at a different location."]}),"\n",(0,a.jsxs)(t.li,{children:["Make sure the option ",(0,a.jsx)(t.code,{children:"Precompile Prefix Header"})," is set to YES."]}),"\n",(0,a.jsx)(t.li,{children:"Clean your project, and rebuild."}),"\n"]})]}),(0,a.jsx)(s.A,{value:"iosS"}),(0,a.jsx)(s.A,{value:"cordova"}),(0,a.jsx)(s.A,{value:"react"}),(0,a.jsx)(s.A,{value:"native"}),(0,a.jsx)(s.A,{value:"xamarin"}),(0,a.jsx)(s.A,{value:"unity"}),(0,a.jsx)(s.A,{value:"adobe"}),(0,a.jsx)(s.A,{value:"titanium"})]})]})}function g(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var a=r(18215);const n={tabItem:"tabItem_Ymn6"};var o=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,s),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var a=r(96540),n=r(18215),o=r(23104),s=r(56347),l=r(205),i=r(57485),u=r(31682),c=r(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function g(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=h(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,d]=p({queryString:r,groupId:n}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),b=(()=>{const e=u??m;return g({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function v(e){let{className:t,block:r,selectedValue:a,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),n=l[r].value;n!==a&&(u(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,n.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function j(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(y,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var a=r(96540);const n={},o=a.createContext(n);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);