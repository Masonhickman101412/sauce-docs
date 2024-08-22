"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[88224],{43290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(74848),i=n(28453),r=n(86025);n(11470),n(19365);const s={id:"auto-update",title:"Auto-Update",sidebar_label:"Auto-Update"},o=void 0,l={id:"testfairy/app-distribution/auto-update",title:"Auto-Update",description:"Auto-update is a feature that allows you to seamlessly push new versions of  your app to users, ensuring that everyone is always using the latest version. By enabling auto-update, users with older versions of the app will receive a notification prompting them to update the next time they use the app.",source:"@site/docs/testfairy/app-distribution/auto-update.md",sourceDirName:"testfairy/app-distribution",slug:"/testfairy/app-distribution/auto-update",permalink:"/sauce-docs/pr-preview/pr-2900/testfairy/app-distribution/auto-update",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/app-distribution/auto-update.md",tags:[],version:"current",lastUpdatedBy:"Gil Megidish",lastUpdatedAt:1719476816e3,frontMatter:{id:"auto-update",title:"Auto-Update",sidebar_label:"Auto-Update"},sidebar:"docs",previous:{title:"Landing Pages",permalink:"/sauce-docs/pr-preview/pr-2900/testfairy/app-distribution/landing-pages"},next:{title:"Invalidating Apps",permalink:"/sauce-docs/pr-preview/pr-2900/testfairy/app-distribution/app-expiration"}},u={},d=[{value:"Configuring Auto-Update",id:"configuring-auto-update",level:2},{value:"In Build Settings",id:"in-build-settings",level:3},{value:"Via Upload API",id:"via-upload-api",level:3},{value:"Implementing Auto Update in Your App",id:"implementing-auto-update-in-your-app",level:3},{value:"Reasons Auto-Update May Fail",id:"reasons-auto-update-may-fail",level:3},{value:"Notes on Security",id:"notes-on-security",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Auto-update is a feature that allows you to seamlessly push new versions of  your app to users, ensuring that everyone is always using the latest version. By enabling auto-update, users with older versions of the app will receive a notification prompting them to update the next time they use the app."}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"Auto-update is not available in production."})}),"\n",(0,a.jsx)(t.h2,{id:"configuring-auto-update",children:"Configuring Auto-Update"}),"\n",(0,a.jsx)(t.p,{children:"There are two ways to configure auto-update for a specific build:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Via Upload API"}),"\n",(0,a.jsx)(t.li,{children:"In build settings"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"in-build-settings",children:"In Build Settings"}),"\n",(0,a.jsxs)(t.p,{children:["After uploading a build, access the build settings and navigate to the ",(0,a.jsx)(t.strong,{children:"App Distribution"})," section. Here, you can select the ",(0,a.jsx)(t.strong,{children:"Auto-Update"})," checkbox to enable auto-update for the build."]}),"\n",(0,a.jsx)("img",{src:(0,r.A)("/img/testfairy/app-distribution/auto-update-img1.png"),alt:"testfairy build settings"}),"\n",(0,a.jsx)(t.h3,{id:"via-upload-api",children:"Via Upload API"}),"\n",(0,a.jsxs)(t.p,{children:["When uploading a new build via the upload api /testfairy/api-reference/upload-api, set the ",(0,a.jsx)(t.code,{children:"auto-update"})," parameter to ",(0,a.jsx)(t.code,{children:"on"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"implementing-auto-update-in-your-app",children:"Implementing Auto Update in Your App"}),"\n",(0,a.jsxs)(t.p,{children:["To detect if there is a new version, we will be using the ",(0,a.jsx)(t.code,{children:"getDistributionStatus"}),"\nmethod. This method is also used to detect if the current version is still available\nfor distribution. You can read more regarding ",(0,a.jsx)(t.a,{href:"/testfairy/app-distribution/app-expiration/",children:"Invalidating Apps"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",metastring:'title="Sample Request"',children:'curl -XPOST \\\n    "https://mobile.saucelabs.com/services/?method=testfairy.session.getDistributionStatus" \\\n    -F token=$TESTFAIRY_APP_TOKEN \\\n    -F platform=0 \\\n    -F bundleIdentifier=com.saucelabs.mydemoapp.android \\\n    -F bundleVersion=22 \\\n    -F bundleShortVersion=2.0.1\n'})}),"\n",(0,a.jsx)(t.p,{children:'And the response would include to fields, "status" and "autoUpdateDownloadUrl" (optional). Like so:'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",metastring:'title="Sample Response"',children:'{\n    "status": "enabled", \n    "autoUpdateDownloadUrl": "https://mobile.saucelabs.com/download/XXXXXXX"\n}\n'})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"status"}),": Is the distribution of the current version still allowed? Useful for invalidating specific versions after distribution."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"autoUpdateDownloadUrl"}),": Optional string, if available, points out to the url the end user needs to open in a browser."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"reasons-auto-update-may-fail",children:"Reasons Auto-Update May Fail"}),"\n",(0,a.jsx)(t.p,{children:"Auto-update may fail for the following reasons:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The version number and name of the new build are the same as the old one. Auto-update only works when versions are different."}),"\n",(0,a.jsx)(t.li,{children:"(iOS) The app is not signed with an ad-hoc or enterprise certificate."}),"\n",(0,a.jsx)(t.li,{children:"(Android) The sign certificates for each version is different. If an app does not sign with the same certificate, auto-update is rejected. This is because it's impossible to install the new version without previously uninstalling the current one."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"notes-on-security",children:"Notes on Security"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"getDistributionStatus"})," is called from within your mobile app. It uses ",(0,a.jsx)(t.strong,{children:"TestFairy App Token"}),", which is a public token that cannot be used to make changes on the platform."]}),"\n",(0,a.jsx)(t.p,{children:"If your app is publicly available for download, the returned url is for a direct download (only for Android). Otherwise, the returned url is of a download page, which will require re-authentication before build can be downloaded."}),"\n",(0,a.jsx)(t.p,{children:"Also note, that there can be only 1 build version marked for auto-update. This may point to any version, not necessarily a version that the current tester has been invited to. Please plan your auto-update policy."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(18215);const i={tabItem:"tabItem_Ymn6"};var r=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(96540),i=n(18215),r=n(23104),s=n(56347),o=n(205),l=n(57485),u=n(31682),d=n(89466);function c(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,r=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[u,c]=f({queryString:n,groupId:i}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,d.Dv)(n);return[i,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),g=(()=>{const e=u??b;return h({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),m(e)}),[c,m,r]),tabValues:r}}var m=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function y(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==a&&(u(t),s(i))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:c,onClick:d,...r,className:(0,i.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:i}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function j(e){const t=(0,m.A)();return(0,v.jsx)(w,{...e,children:c(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);