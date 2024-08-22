"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[96280],{37147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(74848),i=n(28453),s=n(86025);n(11470),n(19365);const o={id:"network-capture",title:"Network Traffic Capture"},l=void 0,a={id:"mobile-apps/features/network-capture",title:"Network Traffic Capture",description:"Network Traffic Capture is a functionality that gives you the ability to record network traffic for HTTP/HTTPS requests during Android and iOS/iPadOS mobile app tests on real devices. This provides granular insight into your app\u2019s behavior, facilitates debugging, and helps you determine which development team is responsible for application failure.",source:"@site/docs/mobile-apps/features/network-capture.md",sourceDirName:"mobile-apps/features",slug:"/mobile-apps/features/network-capture",permalink:"/sauce-docs/pr-preview/pr-2900/mobile-apps/features/network-capture",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/features/network-capture.md",tags:[],version:"current",lastUpdatedBy:"Diego Perini",lastUpdatedAt:1724257751e3,frontMatter:{id:"network-capture",title:"Network Traffic Capture"},sidebar:"docs",previous:{title:"Explore View Tree",permalink:"/sauce-docs/pr-preview/pr-2900/mobile-apps/features/mobile-app-diagnostics/view-tree"},next:{title:"Live Mobile App Testing",permalink:"/sauce-docs/pr-preview/pr-2900/mobile-apps/live-testing/live-mobile-app-testing"}},c={},u=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Using Network Traffic Capture",id:"using-network-traffic-capture",level:2},{value:"Accessing Network Traffic in Realtime (Live Testing)",id:"accessing-network-traffic-in-realtime-live-testing",level:2},{value:"Accessing HAR Files (Live and Automated Testing)",id:"accessing-har-files-live-and-automated-testing",level:2},{value:"Viewing HAR Files",id:"viewing-har-files",level:3},{value:"HAR Files",id:"har-files",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3},{value:"More Information",id:"more-information",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Network Traffic Capture is a functionality that gives you the ability to record network traffic for HTTP/HTTPS requests during Android and iOS/iPadOS mobile app tests on real devices. This provides granular insight into your app\u2019s behavior, facilitates debugging, and helps you determine which development team is responsible for application failure."}),"\n",(0,r.jsx)(t.p,{children:"With this feature, traffic is recorded on our side and exposes the HAR file through your test\u2019s endpoint, producing HTTP traffic information to help you troubleshoot."}),"\n",(0,r.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A Sauce Labs account (",(0,r.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,r.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["A native Android, iOS, or iPadOS mobile app that makes HTTP/HTTPS requests. We currently support the following:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Android 6.0 and higher"}),"\n",(0,r.jsx)(t.li,{children:"For Swift: iOS 11.0 and higher"}),"\n",(0,r.jsx)(t.li,{children:"For Objective-C: iOS (all)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"using-network-traffic-capture",children:"Using Network Traffic Capture"}),"\n",(0,r.jsx)(t.p,{children:"To enable network traffic capturing in your tests:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["On Sauce Labs, click ",(0,r.jsx)(t.strong,{children:"Live"})," > ",(0,r.jsx)(t.strong,{children:"Mobile App"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Upload your mobile app to Sauce Labs ",(0,r.jsx)(t.a,{href:"/mobile-apps/app-storage/#uploading-apps-via-ui",children:"through our UI"})," or ",(0,r.jsx)(t.a,{href:"/mobile-apps/app-storage/#uploading-apps-via-rest-api",children:"our REST API"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["After you\u2019ve uploaded your app, return to the ",(0,r.jsx)(t.strong,{children:"Live"})," > ",(0,r.jsx)(t.strong,{children:"Mobile App"})," page, hover your mouse over your app, then select ",(0,r.jsx)(t.strong,{children:"Settings"}),".",(0,r.jsx)("br",{}),(0,r.jsx)("img",{src:(0,s.A)("img/mobile-apps/networkcapturescr.png"),alt:"Mobile app settings navigation",width:"600"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Under ",(0,r.jsx)(t.strong,{children:"Default Settings"}),", toggle Instrumentation and Network Capture to enable the feature.",(0,r.jsx)("br",{}),(0,r.jsx)("img",{src:(0,s.A)("img/mobile-apps/networkcapturescr2.png"),alt:"Mobile app settings navigation",width:"800"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"For Automated Testing only: add the networkCapture capability to your test script. Click the link below corresponding to your framework:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/dev/test-configuration-options/#saucelabsnetworkcaptureenabled",children:"Appium"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/mobile-apps/automated-testing/espresso-xcuitest/espresso/#networkcapture",children:"Espresso via saucectl"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/mobile-apps/automated-testing/espresso-xcuitest/xcuitest/#networkcapture",children:"XCUITest via saucectl"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Now you can start your live or automated testing session. Your network logs will be captured and displayed in the test results page as well as During a Live Testing session with the Developer Options window."}),"\n",(0,r.jsx)(t.h2,{id:"accessing-network-traffic-in-realtime-live-testing",children:"Accessing Network Traffic in Realtime (Live Testing)"}),"\n",(0,r.jsx)(t.p,{children:"To be able to observe network traffic in realtime:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Navigate to ",(0,r.jsx)(t.strong,{children:"Live"})," -> ",(0,r.jsx)(t.strong,{children:"Mobile App"}),"/",(0,r.jsx)(t.strong,{children:"Cross Browser"})]}),"\n",(0,r.jsx)(t.li,{children:"Choose device and start a session"}),"\n",(0,r.jsx)(t.li,{children:"Launch the network inspector"}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,s.A)("img/mobile-apps/network-capture-1.png"),alt:"Select Developer Options",width:"300"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Start the capture."}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,s.A)("img/mobile-apps/network-capture-2.png"),alt:"Start capture",width:"650"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Inspect network logs as they arrive"}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,s.A)("img/mobile-apps/network-capture-3.png"),alt:"Inspect network logs",width:"650"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"A copy of what you see in the inspector can be downloaded in HAR format with the following button."}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,s.A)("img/mobile-apps/network-capture-4.png"),alt:"Inspect network logs",width:"650"}),"\n",(0,r.jsx)(t.h2,{id:"accessing-har-files-live-and-automated-testing",children:"Accessing HAR Files (Live and Automated Testing)"}),"\n",(0,r.jsx)(t.p,{children:"To download HAR files from Sauce Labs:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Navigate to ",(0,r.jsx)(t.strong,{children:"Test Results"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Select the applicable test."}),"\n",(0,r.jsxs)(t.li,{children:["Click the ",(0,r.jsx)(t.strong,{children:"Network"})," tab in the bottom to preview network calls."]}),"\n",(0,r.jsxs)(t.li,{children:["Click the ",(0,r.jsx)(t.strong,{children:"Logs"})," tab on the right panel and select ",(0,r.jsx)(t.strong,{children:"network.har"})," from the dropdown menu to download the report."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"You can also download a HAR file programmatically using the following API request:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-curl",children:"curl --compressed \\\n-O https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{DATA_CENTER}.saucelabs.com/v1/rdc/jobs/{JOB_ID}/network.har\n"})}),"\n",(0,r.jsx)(t.h3,{id:"viewing-har-files",children:"Viewing HAR Files"}),"\n",(0,r.jsxs)(t.p,{children:["You'll need a HAR viewer to read HAR files. Sauce Labs provides a ",(0,r.jsx)(t.a,{href:"https://opensource.saucelabs.com/network-viewer/",children:"React Network Viewer"})," HAR viewer for your convenience. For step-by-step usage instructions, see our ",(0,r.jsx)(t.a,{href:"https://opensource.saucelabs.com/blog/react_network_viewer/",children:"Visualize HAR Files with the New React Network Viewer"})," blog article."]}),"\n",(0,r.jsx)(t.p,{children:"Alternatively, some other commonly used HAR viewers include:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Chrome devtools builtin ",(0,r.jsx)(t.a,{href:"https://developer.chrome.com/blog/new-in-devtools-62/#har-imports",children:"HAR imports"})]}),"\n",(0,r.jsxs)(t.li,{children:["Google Admin Toolbox ",(0,r.jsx)(t.a,{href:"https://toolbox.googleapps.com/apps/har_analyzer/",children:"HAR Analyzer"})]}),"\n",(0,r.jsxs)(t.li,{children:["Software is Hard blog ",(0,r.jsx)(t.a,{href:"http://www.softwareishard.com/har/viewer/",children:"HTTP Archive Viewer"})]}),"\n",(0,r.jsxs)(t.li,{children:["Firefox network monitoring builtin ",(0,r.jsx)(t.a,{href:"https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/toolbar/index.html",children:"HAR imports"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"har-files",children:"HAR Files"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/HAR_(file_format)",children:"HTTP Archive Format (HAR) files"})," collect all network requests and responses made and received by the browser during testing. HAR files offer useful debugging information, such as:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Identifying browser requests that time out"}),"\n",(0,r.jsx)(t.li,{children:"Pinpointing requests slowing down the loading process"}),"\n",(0,r.jsx)(t.li,{children:"Locating faulty API calls"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,r.jsx)(t.admonition,{title:"Not Supported",type:"note",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Android Emulators"}),"\n",(0,r.jsx)(t.li,{children:"iOS Simulators"}),"\n",(0,r.jsx)(t.li,{children:"Hybrid Applications in automated tests (React Native, Cordova, Flutter)"}),"\n",(0,r.jsx)(t.li,{children:"Android Chrome Browser in automated tests"}),"\n",(0,r.jsx)(t.li,{children:"iOS Safari Browser in automated tests"}),"\n"]})}),"\n",(0,r.jsx)(t.h3,{id:"android",children:"Android"}),"\n",(0,r.jsx)(t.p,{children:"Our network capture code depends on the fact that these classes are not obfuscated:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://square.github.io/okhttp/",children:"OkHTTP"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"okhttp3.Interceptor"}),"\n",(0,r.jsx)(t.li,{children:"okhttp3.OkHttpClient"}),"\n",(0,r.jsx)(t.li,{children:"okhttp3.Request"}),"\n",(0,r.jsx)(t.li,{children:"okhttp3.Response"}),"\n",(0,r.jsx)(t.li,{children:"okhttp3.ResponseBody"}),"\n",(0,r.jsx)(t.li,{children:"okio.Buffer"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/google/volley",children:"Volley"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"com.android.volley.AuthFailureError"}),"\n",(0,r.jsx)(t.li,{children:"com.android.volley.NetworkResponse"}),"\n",(0,r.jsx)(t.li,{children:"com.android.volley.Request"}),"\n",(0,r.jsx)(t.li,{children:"com.android.volley.RequestQueue"}),"\n",(0,r.jsx)(t.li,{children:"com.android.volley.Response"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"ios",children:"iOS"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Network capture works if the app uses ",(0,r.jsx)(t.a,{href:"https://developer.apple.com/documentation/foundation/nsurlsession",children:"NSURLSession"})," or a library (like ",(0,r.jsx)(t.a,{href:"https://github.com/Alamofire/Alamofire",children:"Alamofire"})," or ",(0,r.jsx)(t.a,{href:"https://github.com/AFNetworking/AFNetworking",children:"AFNetworking"}),") that uses NSURLSession inside."]}),"\n",(0,r.jsxs)(t.li,{children:["Calls made by ",(0,r.jsx)(t.a,{href:"https://developer.apple.com/documentation/foundation/nsurlconnection",children:"NSURLConnection"})," (deprecated by Apple), will not be captured."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"more-information",children:"More Information"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/test-results",children:"Sauce Labs Test Results"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/insights",children:"Sauce Labs Insights"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(18215);const i={tabItem:"tabItem_Ymn6"};var s=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),i=n(18215),s=n(23104),o=n(56347),l=n(205),a=n(57485),c=n(31682),u=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=h(e),[o,a]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=f({queryString:n,groupId:i}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,u.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),x=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&a(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=a.indexOf(t),i=l[n].value;i!==r&&(c(t),o(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>a.push(e),onKeyDown:d,onClick:u,...s,className:(0,i.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function k(e){const t=(0,g.A)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);