"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[99794],{67169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(74848),i=n(28453),a=(n(11470),n(19365),n(86025));const s={id:"metrics",title:"Stability Metrics Configuration",sidebar_label:"Stability Metrics Configuration",description:"Configure your Unity SDK for your project's stability metrics."},o=void 0,c={id:"error-reporting/platform-integrations/unity/metrics",title:"Stability Metrics Configuration",description:"Configure your Unity SDK for your project's stability metrics.",source:"@site/docs/error-reporting/platform-integrations/unity/metrics.md",sourceDirName:"error-reporting/platform-integrations/unity",slug:"/error-reporting/platform-integrations/unity/metrics",permalink:"/sauce-docs/pr-preview/pr-2907/error-reporting/platform-integrations/unity/metrics",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/unity/metrics.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724771321e3,frontMatter:{id:"metrics",title:"Stability Metrics Configuration",sidebar_label:"Stability Metrics Configuration",description:"Configure your Unity SDK for your project's stability metrics."},sidebar:"backtrace",previous:{title:"Attributes",permalink:"/sauce-docs/pr-preview/pr-2907/error-reporting/platform-integrations/unity/attributes"},next:{title:"HelpShift SDK",permalink:"/sauce-docs/pr-preview/pr-2907/error-reporting/platform-integrations/unity/helpshift"}},l={},u=[{value:"Attribute Configuration",id:"attribute-configuration",level:2},{value:"SDK Event Attributes",id:"sdk-event-attributes",level:3},{value:"Default Event Attributes - Unity SDK",id:"default-event-attributes---unity-sdk",level:3},{value:"Metric Group: Application Launches Attributes",id:"metric-group-application-launches-attributes",level:4},{value:"Web Console Metric Group / Attribute Linking",id:"web-console-metric-group--attribute-linking",level:3},{value:"Creating New Metric Groups via Unity SDK",id:"creating-new-metric-groups-via-unity-sdk",level:2},{value:"<code>MinutesPlayed</code> Configuration",id:"minutesplayed-configuration",level:3},{value:"Step 1: Add the new metric group to your Backtrace Project in the Web Console by navigating to <strong>Project Settings</strong> &gt; <strong>Stability Monitoring</strong>",id:"step-1-add-the-new-metric-group-to-your-backtrace-project-in-the-web-console-by-navigating-to-project-settings--stability-monitoring",level:4},{value:"Step 2: Configure the Unity SDK to send this metric group and the desired attributes",id:"step-2-configure-the-unity-sdk-to-send-this-metric-group-and-the-desired-attributes",level:4},{value:"Metric Event Control",id:"metric-event-control",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Starting from version 3.6.0 of backtrace-unity, the SDK captures events by default to calculate two stability metrics: Crash Free Users and Crash Free Application Launches. These stability metrics can be grouped and filtered by default using the attributes ",(0,r.jsx)(t.code,{children:"application.version"})," and ",(0,r.jsx)(t.code,{children:"uname.sysname"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"This document provides instructions on further configuring your Unity SDK to enhance the custom details you track for your project's stability metrics. The configurations include:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Attribute Configuration: Ensure your stability metrics respond to additional attribute filters and queries in the Web Console."}),"\n",(0,r.jsx)(t.li,{children:"Custom Metric Groups: Track stability based on the relevant metrics to your game, such as crashes per minute played."}),"\n",(0,r.jsx)(t.li,{children:"Metric Event Control: Fine-tune the frequency of metric events for more granular data."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For a high-level overview of stability metrics, see ",(0,r.jsx)(t.a,{href:"/error-reporting/project-setup/stability-metrics/",children:"Stability Metrics"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"attribute-configuration",children:"Attribute Configuration"}),"\n",(0,r.jsx)(t.p,{children:"For stability metrics to respond to queries and filters in the Web Console, follow these steps:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Ensure that the SDK sends relevant attributes on events for the metric group in question."}),"\n",(0,r.jsxs)(t.li,{children:["Create the metric group and associate the relevant attributes in the Web Console's ",(0,r.jsx)(t.strong,{children:"Stability Monitoring"})," project setting."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["By default, the Unity SDK sends events that contribute to the ",(0,r.jsx)(t.code,{children:"Application Launches"})," metric group. This metric group calculates Crash Free Sessions and Crash Free Users on the ",(0,r.jsx)(t.a,{href:"/error-reporting/web-console/overview/",children:"Overview dashboard"}),". This metric group serves as an example throughout this configuration process."]}),"\n",(0,r.jsx)(t.h3,{id:"sdk-event-attributes",children:"SDK Event Attributes"}),"\n",(0,r.jsx)(t.p,{children:"Stability metrics like Crash Free Users/Sessions are calculated using events sent from the Unity SDK. To ensure that stability metrics respond to queries and filters in the Web Console (for example., widgets on the Overview page), the attribute you want to use for filtering must be included in the events sent by the SDK. Refer to the following list of attributes that are sent by default with events from the Unity SDK:"}),"\n",(0,r.jsxs)(t.p,{children:["To add new attributes to be sent for a given metric group's event, use the ",(0,r.jsx)(t.a,{href:"https://github.com/backtrace-labs/backtrace-unity/blob/7a4a67bbb256a8105b7efdacd1ebe359721942ec/Runtime/Interfaces/IBacktraceMetrics.cs",children:"AddSummedEvent method (IBacktraceMetrics)"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["For example, the following code adds an event to the ",(0,r.jsx)(t.code,{children:"levels_played"})," metric group and links the attributes ",(0,r.jsx)(t.code,{children:"application.version"})," and ",(0,r.jsx)(t.code,{children:"score"})," to the events. Therefore, any metrics calculated using the ",(0,r.jsx)(t.code,{children:"levels_played"})," metric group respond to queries involving the ",(0,r.jsx)(t.code,{children:"application.version"})," and/or ",(0,r.jsx)(t.code,{children:"score"})," attributes."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'BacktraceClient.Instance.Metrics.AddSummedEvent("levels_played", new Dictionary<string, string>() {\n  {"application.version", BacktraceClient.Instance["application.version"]},\n  {"score", "" + score}\n }\n);\n'})}),"\n",(0,r.jsx)(t.h3,{id:"default-event-attributes---unity-sdk",children:"Default Event Attributes - Unity SDK"}),"\n",(0,r.jsx)(t.h4,{id:"metric-group-application-launches-attributes",children:"Metric Group: Application Launches Attributes"}),"\n",(0,r.jsxs)(t.p,{children:["These attributes are sent as part of the ",(0,r.jsx)(t.code,{children:"Application Launch "}),"metric group. By default, this event is sent on startup, game end, and every 30 minutes. Due to its relative infrequency, there are many attributes forwarded by default. If you increase the frequency of these events, consider reducing the amount of data sent with each event."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Guid\nGraphic.id\ngraphic.nameM\nGraphic.type\nGraphic.vendor\nGraphic.vendor.id\nGraphic.driver.version\nGraphic.memory\nGraphic.multithreaded\nGraphic.shader\ngraphic.topUv\nUname.sysname\nUname.version\nUname.fullname\nUname.family\nCpu.count\nCpu.frequency\nCpu.brand\nAudio.supported\nCpu.boottime\nHostname\nVm.rss.size\nBacktrace.version\nApi.compatibility\nScripting.backend\nApplication\nApplication.version\nApplication.url\nApplication.company.name\nApplication.data_path\nApplication.id\nApplication.installer.name\nApplication.internet_reachability\nApplication.editor\nApplication.focused\nApplication.mobile\nApplication.playing\napplication.background\napplication.sandboxType\napplication.system.language\napplication.unity.version\napplication.session\n"})}),"\n",(0,r.jsx)(t.h3,{id:"web-console-metric-group--attribute-linking",children:"Web Console Metric Group / Attribute Linking"}),"\n",(0,r.jsxs)(t.p,{children:["Refer to ",(0,r.jsx)(t.a,{href:"https://github.com/backtrace-labs/backtrace-unity/blob/7a4a67bbb256a8105b7efdacd1ebe359721942ec/Runtime/Interfaces/IBacktraceMetrics.cs",children:"this documentation"})," for instructions on how to set up a metric group and link attributes to it in the Web Console."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Creating a new project or submission token takes up to 15 minutes to recognize your new submission token. Events are rejected and appear in your Unity log during this time. Once your token is identified, the SDK automatically triggers the creation of metric groups, which may take up to 30 minutes. No metrics are captured during this provisioning process."})}),"\n",(0,r.jsxs)(t.p,{children:["By default, the ",(0,r.jsx)(t.code,{children:"Application Launches"})," metric group is automatically created when Crash Free Metrics are enabled in your game. It links the attributes ",(0,r.jsx)(t.code,{children:"uname.sysname"})," and ",(0,r.jsx)(t.code,{children:"application.version"}),". Since the Unity SDK sends all the attributes listed above by default, you can try linking one or more to test it."]}),"\n",(0,r.jsx)(t.h2,{id:"creating-new-metric-groups-via-unity-sdk",children:"Creating New Metric Groups via Unity SDK"}),"\n",(0,r.jsxs)(t.p,{children:["This section explains configuring your Unity game to send custom metric groups using the SDK's public APIs. For information on uploading metric groups from external data sources, refer to the ",(0,r.jsx)(t.a,{href:"/error-reporting/project-setup/metrics-stability-scores/",children:"Importing Metrics documentation"}),"."]}),"\n",(0,r.jsxs)(t.h3,{id:"minutesplayed-configuration",children:[(0,r.jsx)(t.code,{children:"MinutesPlayed"})," Configuration"]}),"\n",(0,r.jsx)(t.p,{children:"Let's walk through an example to illustrate the setup process. Suppose you want to analyze crashes/errors against the minutes a user has played your game. This allows you to calculate metrics such as:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Average crash-free playtime for users"}),"\n",(0,r.jsx)(t.li,{children:"Average playtime per user"}),"\n",(0,r.jsx)(t.li,{children:"Average session length"}),"\n",(0,r.jsx)(t.li,{children:"Average session length by platform"}),"\n",(0,r.jsx)(t.li,{children:"Average session length by release version"}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"step-1-add-the-new-metric-group-to-your-backtrace-project-in-the-web-console-by-navigating-to-project-settings--stability-monitoring",children:["Step 1: Add the new metric group to your Backtrace Project in the Web Console by navigating to ",(0,r.jsx)(t.strong,{children:"Project Settings"})," > ",(0,r.jsx)(t.strong,{children:"Stability Monitoring"})]}),"\n",(0,r.jsx)("img",{src:(0,a.A)("/img/error-reporting/unity/AttributeLinking.png"),alt:"Attribute Linking"}),"\n",(0,r.jsxs)(t.p,{children:["In the above example, a new metric group called ",(0,r.jsx)(t.code,{children:"MinutesPlayed"})," is created, linking the ",(0,r.jsx)(t.code,{children:"application.version"})," and ",(0,r.jsx)(t.code,{children:"uname.sysname"})," attributes to it."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Metrics"})," section under ",(0,r.jsx)(t.strong,{children:"Attributes"})," needs to be left empty for Unity. This section applies only when importing external metrics."]})}),"\n",(0,r.jsx)(t.h4,{id:"step-2-configure-the-unity-sdk-to-send-this-metric-group-and-the-desired-attributes",children:"Step 2: Configure the Unity SDK to send this metric group and the desired attributes"}),"\n",(0,r.jsxs)(t.p,{children:["Next, use the ",(0,r.jsx)(t.code,{children:"AddSummedEvent"})," method to add events for the new metric group. In this example, we add an event every minute because we track ",(0,r.jsx)(t.code,{children:"MinutesPlayed"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'private void Update(){\n    timeElapsedSeconds += Time.deltaTime;\n\n    // Every second, add an event for this metric group\n    if (timeElapsedSeconds >= 60)\n    {\n      timeElapsedSeconds = 0;\n\n      // Generate your attribute values for the attributes you want linked\n      Dictionary<string,string> attributes = new Dictionary<string, string>()\n      {\n        { "application.version", BacktraceClient.Instance["application.version"] },\n        { "uname.sysname", BacktraceClient.Instance["uname.sysname"] },\n        { "custom.field", "custom.value" },\n      };\n\n      // Add the summed event using the metric group name and attributes\n      BacktraceClient.Instance.Metrics.AddSummedEvent("MinutesPlayed", attributes);\n    }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"metric-event-control",children:"Metric Event Control"}),"\n",(0,r.jsxs)(t.p,{children:["The above example adds events for this metric group to a queue, automatically sent based on the interval set in your ",(0,r.jsx)(t.code,{children:"BacktraceConfiguration"})," scriptable object (default every 30 minutes)."]}),"\n",(0,r.jsxs)(t.p,{children:["You can adjust the frequency of the sending process to suit your needs or manually send the events by calling ",(0,r.jsx)(t.code,{children:"BacktraceClient.Instance.Metrics.Send()"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Avoid adding too many events with numerous linked attributes or sending them too frequently, as this can impact your game's performance and consume a significant amount of your Backtrace data storage limits."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(18215);const i={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),i=n(18215),a=n(23104),s=n(56347),o=n(205),c=n(57485),l=n(31682),u=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=p(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[l,d]=m({queryString:n,groupId:i}),[g,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,u.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),f=(()=>{const e=l??g;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{f&&c(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),i=o[n].value;i!==r&&(l(t),s(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,i.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function j(e){const t=g(e);return(0,y.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,y.jsx)(v,{...e,...t}),(0,y.jsx)(x,{...e,...t})]})}function k(e){const t=(0,b.A)();return(0,y.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);