"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[93412],{82989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(74848),a=n(28453),s=(n(11470),n(19365),n(86025));const r={id:"uipath",title:"UiPath Integration",sidebar_label:"UiPath",description:"Use UiPath with Sauce Labs to scale your RPA/app testing.",keywords:["uipath","rpa","mobile-testing","automated-testing","how-to"]},o=void 0,l={id:"basics/integrations/uipath",title:"UiPath Integration",description:"Use UiPath with Sauce Labs to scale your RPA/app testing.",source:"@site/docs/basics/integrations/uipath.md",sourceDirName:"basics/integrations",slug:"/basics/integrations/uipath",permalink:"/sauce-docs/pr-preview/pr-2905/basics/integrations/uipath",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/integrations/uipath.md",tags:[],version:"current",lastUpdatedBy:"James Tacker",lastUpdatedAt:1675366343e3,frontMatter:{id:"uipath",title:"UiPath Integration",sidebar_label:"UiPath",description:"Use UiPath with Sauce Labs to scale your RPA/app testing.",keywords:["uipath","rpa","mobile-testing","automated-testing","how-to"]},sidebar:"docs",previous:{title:"Tosca",permalink:"/sauce-docs/pr-preview/pr-2905/basics/integrations/tosca"},next:{title:"Sumo Logic",permalink:"/sauce-docs/pr-preview/pr-2905/basics/integrations/sumo"}},c={},u=[{value:"Setup and Configuration",id:"setup-and-configuration",level:2},{value:"Overview",id:"overview",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Device Configuration - Local",id:"device-configuration---local",level:3},{value:"Adding a Sauce Labs Device",id:"adding-a-sauce-labs-device",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"setup-and-configuration",children:"Setup and Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["Revolutionize automated testing for your software, automation, and QA teams with ",(0,i.jsx)(t.a,{href:"https://www.uipath.com/solutions/department/enterprise-test-suite",children:"Test Suite"}),": the resilient testing product portfolio powered by the UiPath Automation Platform. Leverage production-grade, low-code automation and AI power tools to automate testing for any technology while still managing testing your way."]}),"\n",(0,i.jsx)(t.p,{children:"Test Suite was built to test any application, but testing mobile apps can get complicated when the device you need isn't available to you."}),"\n",(0,i.jsx)(t.p,{children:"Sauce Labs provides thousands of real devices, with a wide range of operating systems and configurations, to help you test your mobile app when you need to, however you need to, without any hassle."}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Using Test Suite in combination with Sauce Labs allows you to run mobile tests at scale with minimal configuration. This document outlines:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"What you need to get started"}),"\n",(0,i.jsx)(t.li,{children:"Sauce Labs device configuration from Test Suite"}),"\n",(0,i.jsx)(t.li,{children:"Tips and tricks on how to get the most out of the integration"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A Sauce Labs account (if you don't have one, start a ",(0,i.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial"}),")"]}),"\n",(0,i.jsx)(t.li,{children:"Your Sauce Labs Username and Access Key"}),"\n",(0,i.jsxs)(t.li,{children:["A UiPath Test Suite account (if you don't have one, ",(0,i.jsx)(t.a,{href:"https://www.uipath.com/developers/enterprise-edition-download",children:"sign up"})," for a free trial)"]}),"\n",(0,i.jsxs)(t.li,{children:["Basic understanding of UiPath\u2019s ",(0,i.jsx)(t.a,{href:"https://docs.uipath.com/test-suite/docs/configuring-mobile-device-manager",children:"Mobile Device Manager (MDM)"})]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"You need to have an automation framework (this example will assume an Appium test suite) and a mobile testing project within UiPath Studio."})}),"\n",(0,i.jsx)(t.h3,{id:"device-configuration---local",children:"Device Configuration - Local"}),"\n",(0,i.jsx)(t.p,{children:"Before introducing Sauce Labs devices, it might be helpful to show an example of local device configuration. This serves as the foundation for the changes we need to make to get connected to the Sauce Labs cloud."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Open MDM from Studio."}),"\n",(0,i.jsx)(t.li,{children:"In the left navigation panel go to Devices."}),"\n",(0,i.jsxs)(t.li,{children:["On the ",(0,i.jsx)(t.strong,{children:"Add a device"})," tab, configure the following settings:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Name"})," - Enter a name to identify your device."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Appium URL"})," - Enter the Appium server where your device is hosted. ",(0,i.jsx)("br",{}),"\nLocally, this would likely be an Appium server: ",(0,i.jsx)(t.code,{children:"https://localhost:4723/wd/hub"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Platform"})," - Select ",(0,i.jsx)(t.strong,{children:"Android"})," or ",(0,i.jsx)(t.strong,{children:"iOS"})," from the dropdown."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Device Name"})," - Enter the device name."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Platform Version"})," - Add the version number of your Android OS."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Additional Desired Capabilities"})," (",(0,i.jsx)(t.em,{children:"Optional"}),") - Add specific capabilities to customize your automation session. For more information, see ",(0,i.jsx)(t.a,{href:"http://appium.io/docs/en/writing-running-appium/caps/#appium-desired-capabilities",children:"Appium Desired Capabilities"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Set Geo Location"})," (",(0,i.jsx)(t.em,{children:"Optional"}),") - Set your device location to test applications that use Location Services to generate location data. ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/integrations/uipath 2.png"),alt:"UiPath Mobile Device Manager configuration form",width:"700"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Optional"})," - From the ",(0,i.jsx)(t.strong,{children:"Logging"})," tab, configure logging and video recording settings."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Optional"})," - From the ",(0,i.jsx)(t.strong,{children:"Development"})," tab, configure your development settings.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Close Similar Tabs"})," (",(0,i.jsx)(t.em,{children:"Activated by default"}),"): Close tabs running connections with similar devices and applications."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Wait for Page Update"})," (",(0,i.jsx)(t.em,{children:"Activated by default"}),"): Wait for the page source to retrieve a screenshot of each action."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Save & Close"})," to add your device."]}),"\n",(0,i.jsxs)(t.li,{children:["Your device is added to the Devices list. ",(0,i.jsx)("br",{}),"\nFor more information on how to test your device, see ",(0,i.jsx)(t.a,{href:"https://docs.uipath.com/test-suite/docs/device-interaction",children:"Device Interaction"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"adding-a-sauce-labs-device",children:"Adding a Sauce Labs Device"}),"\n",(0,i.jsxs)(t.p,{children:["A few small alterations are needed to access a Sauce Labs device. For more information on capabilities and options, see ",(0,i.jsx)(t.a,{href:"https://saucelabs.com/platform/platform-configurator",children:"Sauce Labs Platform Configurator"}),"."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Appium URL"})," - Enter the Appium server where your device is hosted. You can get the Appium URL from Sauce Labs by navigating to ",(0,i.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Account > User Settings"})," and copying the string from the Driver Creation. ",(0,i.jsx)("br",{})," It will likely look something like this: ",(0,i.jsx)(t.code,{children:"https://<username>:<access_key>@ondemand.us-west-1.saucelabs.com:443/wd/hub"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Device Name"})," - Match the device name with the value from the Device field in Sauce Labs."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Platform Version"})," - Match the OS version number with the value from the Operating System field in Sauce Labs."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Additional Desired Capabilities"})," - Match the value with the one from the Appium Version field in Sauce Labs. ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/integrations/uipath 1.png"),alt:"UiPath MDM Sauce configuration form"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For more information on adding a cloud device, see ",(0,i.jsx)(t.a,{href:"https://docs.uipath.com/test-suite/docs/cloud-devices#adding-cloud-device",children:"UiPath\u2019s documentation"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var i=n(18215);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,r),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var i=n(96540),a=n(18215),s=n(23104),r=n(56347),o=n(205),l=n(57485),c=n(31682),u=n(89466);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:a}}=e;return{value:t,label:n,attributes:i,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,r.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:n,groupId:a}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(n);return[a,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),b=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function x(e){let{className:t,block:n,selectedValue:i,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==i&&(c(t),r(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function y(e){const t=(0,f.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);