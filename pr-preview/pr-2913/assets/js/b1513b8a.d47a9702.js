"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[6388],{23261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(74848),s=n(28453),a=n(86025);n(11470),n(19365);const r={id:"testing-push-notifications",title:"Testing Push Notifications",sidebar_label:"Testing Push Notifications"},o=void 0,l={id:"mobile-apps/live-testing/testing-push-notifications",title:"Testing Push Notifications",description:"Testing push notifications is essential to deliver a satisfactory mobile experience. With Sauce Labs' Real Device Cloud, you can test push notifications on Android and iOS devices. These notifications, delivered as pop-up messages initiated by the application and sent to the user's device, offer numerous benefits for app publishers. By utilizing push notifications, you can deliver relevant and timely messages, provide personalized content, re-engage users, and geo-target them based on their location.",source:"@site/docs/mobile-apps/live-testing/testing-push-notifications.md",sourceDirName:"mobile-apps/live-testing",slug:"/mobile-apps/live-testing/testing-push-notifications",permalink:"/sauce-docs/pr-preview/pr-2913/mobile-apps/live-testing/testing-push-notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/live-testing/testing-push-notifications.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724864962e3,frontMatter:{id:"testing-push-notifications",title:"Testing Push Notifications",sidebar_label:"Testing Push Notifications"},sidebar:"docs",previous:{title:"Live Mobile App Testing",permalink:"/sauce-docs/pr-preview/pr-2913/mobile-apps/live-testing/live-mobile-app-testing"},next:{title:"Testing Apple Pay",permalink:"/sauce-docs/pr-preview/pr-2913/mobile-apps/live-testing/testing-apple-pay"}},u={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Disabling Instrumentation for iOS Apps",id:"disabling-instrumentation-for-ios-apps",level:2},{value:"iOS and Android Differences",id:"ios-and-android-differences",level:2},{value:"Video Tutorial",id:"video-tutorial",level:2}];function d(e){const t={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Testing push notifications is essential to deliver a satisfactory mobile experience. With Sauce Labs' Real Device Cloud, you can test push notifications on Android and iOS devices. These notifications, delivered as pop-up messages initiated by the application and sent to the user's device, offer numerous benefits for app publishers. By utilizing push notifications, you can deliver relevant and timely messages, provide personalized content, re-engage users, and geo-target them based on their location."}),"\n",(0,i.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A Sauce Labs account (",(0,i.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,i.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,i.jsx)(t.li,{children:"An Android or iOS mobile application that includes push notification functionality."}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"iOS Only"}),": Instrumentation disabled."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"iOS Only"}),": You must use private devices due to signing requirements."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"disabling-instrumentation-for-ios-apps",children:"Disabling Instrumentation for iOS Apps"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["On Sauce Labs, in the left navigation, click ",(0,i.jsx)(t.strong,{children:"App Management"}),"."]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:(0,a.Ay)("img/mobile-apps/app-logs5.png"),alt:"App Logs",width:"300"}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Upload your mobile app to Sauce Labs."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:(0,a.Ay)("img/mobile-apps/app-logs-8.png"),alt:"App Logs",width:"700"}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["Hover over the app, then select ",(0,i.jsx)(t.strong,{children:"Settings"}),"."]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:(0,a.Ay)("img/mobile-apps/app-logs-6.png"),alt:"App Logs",width:"700"}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsxs)(t.li,{children:["Under ",(0,i.jsx)(t.strong,{children:"Real Device Settings"}),", toggle ",(0,i.jsx)(t.strong,{children:"Instrumentation"})," to ",(0,i.jsx)(t.strong,{children:"Disabled"}),"."]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:(0,a.Ay)("img/mobile-apps/push-notifications-scrn1.png"),alt:"App Logs",width:"700"}),"\n",(0,i.jsx)(t.h2,{id:"ios-and-android-differences",children:"iOS and Android Differences"}),"\n",(0,i.jsx)(t.p,{children:"Push notifications function differently on iOS and Android. Understanding these differences is crucial when implementing and testing push notifications."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Android"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"No specific build or additional steps are required to test push notifications on Android devices in the Sauce Labs Real Device Cloud."}),"\n",(0,i.jsx)(t.li,{children:"After building your Android app, you can install it on an Emulator or a real device provided by Sauce Labs for comprehensive testing of push notifications."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"iOS"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Due to the signing process for app installation, disabling instrumentation is required to test push notifications on iOS devices."}),"\n",(0,i.jsx)(t.li,{children:"Sauce Labs offers support for various signing methods, including guidance on using developer certificates. Refer to our detailed documentation or interactive demo video for step-by-step instructions."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"video-tutorial",children:"Video Tutorial"}),"\n",(0,i.jsx)(t.p,{children:"We understand that visual demonstrations can help with understanding and implementing push notifications for Android and iOS apps effectively. Watch the video to learn the capabilities used by Apple to enable push notifications and explore proven methods to overcome any challenges that may arise during the process."}),"\n",(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/RIseDgjB4ZQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var i=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,r),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>A});var i=n(96540),s=n(34164),a=n(23104),r=n(56347),o=n(205),l=n(57485),u=n(31682),c=n(70679);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:s}}=e;return{value:t,label:n,attributes:i,default:s}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=p(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:a}))),[u,d]=f({queryString:n,groupId:s}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(n);return[s,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),b=(()=>{const e=u??g;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function x(e){let{className:t,block:n,selectedValue:i,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==i&&(u(t),r(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function A(e){const t=(0,m.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);