"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[69926],{15173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(74848),a=n(28453);n(11470),n(19365),n(86025);const s={id:"electron",title:"Electron Support on Sauce Labs [Beta]",sidebar_label:"Using Electron"},o=void 0,i={id:"web-apps/automated-testing/electron",title:"Electron Support on Sauce Labs [Beta]",description:"Electron embeds Chromium and Node.js to enable web developers to create desktop applications. Sauce Labs is beta trialing support for automated testing with Electron-based apps on Windows 10 and 11, available to all users with VDC concurrency at US West or EU Central.",source:"@site/docs/web-apps/automated-testing/electron.md",sourceDirName:"web-apps/automated-testing",slug:"/web-apps/automated-testing/electron",permalink:"/sauce-docs/pr-preview/pr-2913/web-apps/automated-testing/electron",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/automated-testing/electron.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724864962e3,frontMatter:{id:"electron",title:"Electron Support on Sauce Labs [Beta]",sidebar_label:"Using Electron"}},l={},c=[{value:"Supported Testing Platforms",id:"supported-testing-platforms",level:2},{value:"How to Get Started",id:"how-to-get-started",level:2},{value:"App management",id:"app-management",level:3},{value:"Binary location",id:"binary-location",level:3},{value:"Configuring your tests",id:"configuring-your-tests",level:3},{value:"Viewing results",id:"viewing-results",level:2},{value:"Limitations",id:"limitations",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://electronjs.org/",children:"Electron"})," embeds Chromium and Node.js to enable web developers to create desktop applications. Sauce Labs is beta trialing support for automated testing with Electron-based apps on Windows 10 and 11, available to all users with VDC concurrency at US West or EU Central."]}),"\n",(0,r.jsx)(t.h2,{id:"supported-testing-platforms",children:"Supported Testing Platforms"}),"\n",(0,r.jsx)(t.p,{children:"Sauce Labs currently supports the following test configurations for Electron."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Platforms","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Windows 10"}),"\n",(0,r.jsx)(t.li,{children:"Windows 11"}),"\n",(0,r.jsx)(t.li,{children:"MacOS 10.15"}),"\n",(0,r.jsx)(t.li,{children:"MacOS 11"}),"\n",(0,r.jsx)(t.li,{children:"MacOS 12"}),"\n",(0,r.jsx)(t.li,{children:"MacOS 13"}),"\n",(0,r.jsx)(t.li,{children:"(Linux support to be decided)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Electron versions","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"versions 5 - 31 inclusive"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"how-to-get-started",children:"How to Get Started"}),"\n",(0,r.jsx)(t.h3,{id:"app-management",children:"App management"}),"\n",(0,r.jsxs)(t.p,{children:["Upload a zip file containing your Electron app via ",(0,r.jsx)(t.a,{href:"/mobile-apps/app-storage/#uploading-apps-via-rest-api",children:"REST API"}),". You can refer to uploaded apps by either the file ID or file name. Note that as with mobile apps, Electron apps are accessible only to members of the same team, and retained for 60 days."]}),"\n",(0,r.jsx)(t.h3,{id:"binary-location",children:"Binary location"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"binary_location"})," is the folderpath and filename of your Electron executable within your zip file structure."]}),"\n",(0,r.jsx)(t.p,{children:"For example, if your zip file is structured like this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"SauceLabsElectronAppv1.zip\n-- [ Sauce Labs Test ]\n  -- SauceLabsElectronApp.exe\n  -- mobi.dll\n  -- [ resources ]\n      -- ffmpeg.dll  \n  [ guide ]\n  -- config.yaml\n  -- readme.txt\n"})}),"\n",(0,r.jsxs)(t.p,{children:["then the ",(0,r.jsx)(t.code,{children:"binary"})," value is ",(0,r.jsx)(t.code,{children:"'Sauce Labs Test\\SauceLabsElecronApp.exe'"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"configuring-your-tests",children:"Configuring your tests"}),"\n",(0,r.jsxs)(t.p,{children:["You need to specify Electron as the ",(0,r.jsx)(t.a,{href:"https://docs.saucelabs.com/dev/test-configuration-options/#browsername",children:(0,r.jsx)(t.code,{children:"browserName"})})," along with the Electron version needed as the ",(0,r.jsx)(t.a,{href:"https://docs.saucelabs.com/dev/test-configuration-options/#browserversion",children:(0,r.jsx)(t.code,{children:"browserVersion"})}),". You will also need to include either the file ID or file name of your uploaded zip file containing your Electron app, with the path to the binary inside that zip."]}),"\n",(0,r.jsxs)(t.p,{children:["Because Electron is based on the Chromium browser, you need to specify the options using the ",(0,r.jsx)(t.code,{children:"ChromeOptions"})," class."]}),"\n",(0,r.jsx)(t.p,{children:"Example written in Python with an Electron app test running on Windows 11 with Electron 29 at US West:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"options = ChromeOptions()\noptions.set_capability('browserName', 'electron')\noptions.browser_version = '29'\noptions.platform_name = 'Windows 11'\noptions.binary_location='<app_folder_name>\\<app_file_name.exe>'\nsauce_options = {}\nsauce_options['username'] = \u2018<username>\u2019\nsauce_options['accessKey'] = \u2018<accesskey>\u2019\nsauce_options['app'] = 'storage:<file_id>'\noptions.set_capability('sauce:options', sauce_options)\nurl = 'https://ondemand.us-west-1.saucelabs.com:443/wd/hub'\ndriver = webdriver.Remote(command_executor=url, options=options)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"viewing-results",children:"Viewing results"}),"\n",(0,r.jsx)(t.p,{children:"Test results are visible on the UI under \u201cAutomated Tests > Test Results.\u2019 You can filter directly for Electron test results by selecting \u201cElectron\u201d from the \u201cBrowser\u201d drop-down."}),"\n",(0,r.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Electron support is currently enabled only for automated testing on Windows 10 and 11, and MacOS 10.15, 11, 12 and 13."}),"\n",(0,r.jsx)(t.li,{children:"Electron apps uploaded via REST API are not currently visible within the App Management of the UI."}),"\n",(0,r.jsx)(t.li,{children:"Live testing and UI enhancements to come in a future release."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(96540),a=n(34164),s=n(23104),o=n(56347),i=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:n,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=c??b;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(c(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(w,{...t,...e})]})}function j(e){const t=(0,f.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);