"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[16022],{20942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(74848),r=n(28453);n(86025),n(11470),n(19365);const a={id:"app-expiration",title:"Invalidating Apps After Distribution",sidebar_label:"Invalidating Apps"},s=void 0,o={id:"testfairy/app-distribution/app-expiration",title:"Invalidating Apps After Distribution",description:"There comes a time after distribution that you want to invalidate the app.",source:"@site/docs/testfairy/app-distribution/app-expiration.md",sourceDirName:"testfairy/app-distribution",slug:"/testfairy/app-distribution/app-expiration",permalink:"/sauce-docs/pr-preview/pr-2899/testfairy/app-distribution/app-expiration",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/app-distribution/app-expiration.md",tags:[],version:"current",lastUpdatedBy:"Gil Megidish",lastUpdatedAt:1719476578e3,frontMatter:{id:"app-expiration",title:"Invalidating Apps After Distribution",sidebar_label:"Invalidating Apps"},sidebar:"docs",previous:{title:"Auto-Update",permalink:"/sauce-docs/pr-preview/pr-2899/testfairy/app-distribution/auto-update"},next:{title:"Managing Release Notes",permalink:"/sauce-docs/pr-preview/pr-2899/testfairy/app-distribution/release-notes"}},l={},d=[{value:"Disabling Distribution",id:"disabling-distribution",level:2},{value:"Programmatically Detecting Distribution Status",id:"programmatically-detecting-distribution-status",level:2},{value:"Sample Code",id:"sample-code",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"There comes a time after distribution that you want to invalidate the app."}),"\n",(0,i.jsx)(t.p,{children:"Some cases for invalidation include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Releasing a final version, and beta version should stop working"}),"\n",(0,i.jsx)(t.li,{children:"A specific version should no longer be used, and new one should be downloaded"}),"\n",(0,i.jsx)(t.li,{children:"A terrible fault has been found, and current version should no longer run"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"disabling-distribution",children:"Disabling Distribution"}),"\n",(0,i.jsxs)(t.p,{children:["To disable a distribution of an App or a specific Build of an App, please follow the instructions for ",(0,i.jsx)(t.a,{href:"/testfairy/app-distribution/managing-dist/#stopping-distribution",children:"Stopping Distribution"})]}),"\n",(0,i.jsx)(t.p,{children:"After app distribution has been disabled, it could no longer be downloaded. However, in certain cases, you would\nwant to programmatically detect distribution status, and notify the end-user what they need to do next."}),"\n",(0,i.jsx)(t.p,{children:"For example:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"App detects distribution has been disabled, then present a popup message on screen and stop the process."}),"\n",(0,i.jsxs)(t.li,{children:["App detects distribution has been disabled and opens browser to ",(0,i.jsx)(t.a,{href:"https://mobile.saucelabs.com/my",children:"Internal App Store"})," page."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"programmatically-detecting-distribution-status",children:"Programmatically Detecting Distribution Status"}),"\n",(0,i.jsx)(t.p,{children:"Sauce Labs' App Distribution provides a simple API to receive the distribution status as\nset in the Build Settings page."}),"\n",(0,i.jsx)(t.p,{children:"To fetch the status of a specific version, use"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",metastring:'title="Sample Request"',children:'curl -XPOST \\\n    "https://mobile.saucelabs.com/services/?method=testfairy.session.getDistributionStatus" \\\n    -F token=$TESTFAIRY_APP_TOKEN \\\n    -F platform=0 \\\n    -F bundleIdentifier=com.saucelabs.mydemoapp.android \\\n    -F bundleVersion=22 \\\n    -F bundleShortVersion=2.0.1\n'})}),"\n",(0,i.jsx)("table",{id:"table-api",children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"token"})}),(0,i.jsx)("td",{children:(0,i.jsx)("p",{children:"TestFairy App Token"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"platform"})}),(0,i.jsx)("td",{children:(0,i.jsx)("p",{children:"Mobile OS to query (0 for Android, 1 for iOS)"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"bundleIdentifier"})}),(0,i.jsx)("td",{children:(0,i.jsx)("p",{children:"Bundle Identifier (iOS) or Package Name (Android)"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"bundleVersion"})}),(0,i.jsx)("td",{children:(0,i.jsx)("p",{children:"bundleVersion (iOS) or versionCode (Android) of build to query"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"bundleShortVersion"})}),(0,i.jsx)("td",{children:(0,i.jsx)("p",{children:"bundleShortVersion (iOS) or versionName (Android) of build to query"})})]})]})}),"\n",(0,i.jsx)(t.admonition,{title:"Important",type:"note",children:(0,i.jsx)(t.p,{children:"App Distribution is using a Token. This is not your Sauce Labs' username and access key. The token\nitself is not private and can be used only to query status. It cannot be used to access any other\ndata in your account."})}),"\n",(0,i.jsxs)(t.p,{children:["Upon response, the API will return a json with ",(0,i.jsx)(t.code,{children:"status"})," equal to either ",(0,i.jsx)(t.code,{children:"enabled"})," or ",(0,i.jsx)(t.code,{children:"disabled"}),". For example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{"status":"enabled"}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["If a Build cannot be found on App Distribution platform, it is assumed deleted, and the result will be ",(0,i.jsx)(t.code,{children:"disabled"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"sample-code",children:"Sample Code"}),"\n",(0,i.jsxs)(t.p,{children:["For reference, please visit the ",(0,i.jsx)(t.a,{href:"https://github.com/saucelabs/my-demo-app-android/",children:"My Demo App"})," sample application. A method called ",(0,i.jsx)(t.a,{href:"https://github.com/saucelabs/my-demo-app-android/blob/main/app/src/main/java/com/saucelabs/mydemoapp/android/view/activities/MainActivity.java#L617",children:"checkVersionIsStillSupported"})," calls the API and will display an AlertDialog if version has expired."]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var i=n(18215);const r={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>A});var i=n(96540),r=n(18215),a=n(23104),s=n(56347),o=n(205),l=n(57485),d=n(31682),u=n(89466);function c(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:a}))),[d,c]=b({queryString:n,groupId:r}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(n);return[r,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),x=(()=>{const e=d??m;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,a]),tabValues:a}}var f=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function j(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==i&&(d(t),s(r))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:c,onClick:u,...a,className:(0,r.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...e,...t}),(0,v.jsx)(g,{...e,...t})]})}function A(e){const t=(0,f.A)();return(0,v.jsx)(y,{...e,children:c(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);