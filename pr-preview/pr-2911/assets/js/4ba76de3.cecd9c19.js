"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[70215],{51398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(74848),a=n(28453),i=n(11470),o=n(19365);n(86025);const s={id:"setup",title:"Setting Up Backtrace for Unity",sidebar_label:"Setup",description:"Add Backtrace to your Unity project."},c=void 0,l={id:"error-reporting/platform-integrations/unity/setup",title:"Setting Up Backtrace for Unity",description:"Add Backtrace to your Unity project.",source:"@site/docs/error-reporting/platform-integrations/unity/setup.md",sourceDirName:"error-reporting/platform-integrations/unity",slug:"/error-reporting/platform-integrations/unity/setup",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/platform-integrations/unity/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/unity/setup.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"setup",title:"Setting Up Backtrace for Unity",sidebar_label:"Setup",description:"Add Backtrace to your Unity project."},sidebar:"backtrace",previous:{title:"PLCrashReporter",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/platform-integrations/plcrash-reporter"},next:{title:"Configuration",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/platform-integrations/unity/configuration"}},d={},u=[{value:"Features",id:"features",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"System Requirements",id:"system-requirements",level:3},{value:"Player Configuration Settings",id:"player-configuration-settings",level:3},{value:"Install the Backtrace Unity SDK",id:"install-the-backtrace-unity-sdk",level:2},{value:"Initialize the Backtrace Client with GameObject",id:"initialize-the-backtrace-client-with-gameobject",level:2},{value:"Configure the Server Address",id:"configure-the-server-address",level:2},{value:"Verify the Setup",id:"verify-the-setup",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Add Backtrace to your Unity project to automatically detect and report errors and crashes that occur in your game."}),"\n",(0,r.jsx)(t.p,{children:"After you've completed the steps on this page, the Backtrace client will be installed and setup with the default configuration settings."}),"\n","\n",(0,r.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,r.jsx)(t.p,{children:"The Backtrace Unity SDK reports on the following types of errors:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Log errors - Error messages in the console log. Logged by Debug.LogError (a variant of Debug.Log)."}),"\n",(0,r.jsx)(t.li,{children:"Unhandled Exceptions - Exceptions that occur outside of an explicit try/catch statement."}),"\n",(0,r.jsx)(t.li,{children:"Handled exceptions - Exceptions that are explicitly caught and handled."}),"\n",(0,r.jsx)(t.li,{children:"Crashes - An end to the game play experience, where the game crashes or restarts."}),"\n",(0,r.jsx)(t.li,{children:"Hangs (mobile only) - Errors that occur when a game or an app is non-responsive."}),"\n",(0,r.jsx)(t.li,{children:"Out of memory crashes (mobile only) - Terminations of your game or app due to low memory conditions."}),"\n",(0,r.jsx)(t.li,{children:"Message reports - Error messages explicitly sent by the Backtrace client."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Supported Platforms"}),(0,r.jsx)(t.th,{children:"Supported Systems"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Mobile"}),(0,r.jsx)(t.td,{children:"Android, iOS"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"PC"}),(0,r.jsx)(t.td,{children:"Windows, MacOS*"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Web"}),(0,r.jsx)(t.td,{children:"WebGL*"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Game Consoles"}),(0,r.jsx)(t.td,{children:"PlayStation 4, PlayStation 5, Xbox One, Xbox Series X, Nintendo Switch."})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Native Crashes on MacOS and WeBGL are not supported via backtrace-unity."})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Native Crashes on PlayStation and Nintendo Switch are captured via Backtrace Data Sources, which connect to the vendor provided crash reporting server. Native Crashes on Xbox can be captured by installing an additional dynamic link library (DLL) for Backtrace-Unity. Reach out to your Xbox partner manager to verify developer status with Sauce Labs Backtrace."})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Offline database capabilities are currently not supported for Nintendo Switch."})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["The iOS SDK contains a privacy manifest to declare the types of data accessed on the device. Please refer to this ",(0,r.jsx)(t.a,{href:"https://github.com/backtrace-labs/backtrace-unity/blob/master/iOS/PrivacyInfo.xcprivacy",children:"source document"})," for the specific types of data collected by the SDK."]})}),"\n",(0,r.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A Backtrace account (",(0,r.jsx)(t.a,{href:"https://backtrace.io/login",children:"log in"}),"\xa0or sign up for a\xa0",(0,r.jsx)(t.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,r.jsxs)(t.li,{children:["Your subdomain name (used to connect to your Backtrace instance). For example, ",(0,r.jsx)(t.code,{children:"https://example-subdomain.sp.backtrace.io"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"A Backtrace project and a submission token."}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"Generate a Submission Token",type:"tip",children:(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["In the Backtrace Console, go to ",(0,r.jsx)(t.strong,{children:"Project settings > Error submission > Submission tokens"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Select ",(0,r.jsx)(t.strong,{children:"+"}),"."]}),"\n"]})}),"\n",(0,r.jsx)(t.h3,{id:"system-requirements",children:"System Requirements"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Unity Editor version 2018.4 or higher"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"player-configuration-settings",children:"Player Configuration Settings"}),"\n",(0,r.jsx)(t.p,{children:"Backtrace supports the following player configuration settings for Unity:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Scripting Backend: Mono or IL2CPP"}),"\n",(0,r.jsx)(t.li,{children:"API Compatibility Level: .NET 4.0 or .NET Standard 2.0"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"install-the-backtrace-unity-sdk",children:"Install the Backtrace Unity SDK"}),"\n",(0,r.jsx)(t.p,{children:"The following methods are available to install the Backtrace Unity SDK."}),"\n",(0,r.jsxs)(i.A,{defaultValue:"openupm",values:[{label:"OpenUPM",value:"openupm"},{label:"Unity Package Manager",value:"unity"},{label:"Git",value:"git"}],children:[(0,r.jsxs)(o.A,{value:"openupm",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"# Install openupm-cli\nnpm install -g openupm-cli\n\n# Go to your Unity project directory\ncd YOUR_UNITY_PROJECT_DIR\n\n# Install the latest io.backtrace.unity package\nopenupm add io.backtrace.unity\n"})}),"For more information, see the installation steps on ",(0,r.jsx)(t.a,{href:"https://openupm.com/packages/io.backtrace.unity/",children:"OpenUPM"}),"."]}),(0,r.jsx)(o.A,{value:"unity",children:(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Download the latest version of the Backtrace Unity SDK from ",(0,r.jsx)(t.a,{href:"https://github.com/backtrace-labs/backtrace-unity/releases",children:"GitHub"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Unzip the package and save it locally."}),"\n",(0,r.jsxs)(t.li,{children:["In your Unity project, go to ",(0,r.jsx)(t.strong,{children:"Window > Package Manager"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Complete the steps in ",(0,r.jsx)(t.a,{href:"https://docs.unity3d.com/Manual/upm-ui-local.html",children:"Installing a package from a local folder"})," in the Unity Documentation."]}),"\n"]})}),(0,r.jsxs)(o.A,{value:"git",children:[(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Clone the source project\u2019s ",(0,r.jsx)(t.a,{href:"https://github.com/backtrace-labs/backtrace-unity.git",children:"Git URL"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["In your Unity project, go to ",(0,r.jsx)(t.strong,{children:"Window > Package Manager"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Complete the steps in ",(0,r.jsx)(t.a,{href:"https://docs.unity3d.com/Manual/upm-ui-giturl.html",children:"Installing from a Git URL"})," in the Unity Documentation."]}),"\n"]}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"This installation method is supported for Unity 2018.3 or higher."}),"\n"]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"initialize-the-backtrace-client-with-gameobject",children:"Initialize the Backtrace Client with GameObject"}),"\n",(0,r.jsx)(t.p,{children:"In this step, you create the Backtrace Configuration asset, create a new GameObject, add the Backtrace Client component to the GameObject, then add the Backtrace Configuration to the Backtrace Client component."}),"\n",(0,r.jsx)(t.p,{children:"You can add the Backtrace Client component to any GameObject in your game scene."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Typically, the Backtrace Client component is added to a global GameManager or GameController object, given a descriptive name, and assigned a tag to identify it for scripting purposes."})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["In your Unity project, go to ",(0,r.jsx)(t.strong,{children:"Assets > Backtrace > Configuration"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Go to ",(0,r.jsx)(t.strong,{children:"GameObject > Create Empty"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Enter a descriptive name for the new GameObject."}),"\n",(0,r.jsxs)(t.li,{children:["In the Inspector, select ",(0,r.jsx)(t.strong,{children:"Add Component"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Search for \u201cBacktrace\u201d, then select ",(0,r.jsx)(t.strong,{children:"Backtrace Client"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["From the ",(0,r.jsx)(t.strong,{children:"Assets"})," folder, drag the Backtrace Configuration file to the Backtrace configuration field."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Additional fields now display for the Backtrace client configuration and database configuration options."}),"\n",(0,r.jsx)(t.p,{children:"To change Backtrace client and database options, we recommend to change these values in the Unity UI via Backtrace Configuration file. Alternatively, you can also make changes to the configuration in the C# code for your Unity project."}),"\n",(0,r.jsxs)(t.p,{children:["For more information about the available configuration options, see ",(0,r.jsx)(t.a,{href:"/error-reporting/platform-integrations/unity/configuration",children:"Configuration"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"configure-the-server-address",children:"Configure the Server Address"}),"\n",(0,r.jsx)(t.p,{children:"The server address is required to submit exceptions from your Unity project to your Backtrace instance."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["In the Backtrace Console, go to ",(0,r.jsx)(t.strong,{children:"Project Settings > Integration Guides > Unity"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Copy the server address."}),"\n",(0,r.jsx)(t.li,{children:"Go back to the Backtrace Configuration in your Unity project."}),"\n",(0,r.jsxs)(t.li,{children:["In the ",(0,r.jsx)(t.strong,{children:"Server Address"})," field, enter the server address in the following format: ",(0,r.jsx)(t.code,{children:"https://submit.backtrace.io/{subdomain}/{submission-token}/json"}),".","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Provide the name of your ",(0,r.jsx)(t.a,{href:"/error-reporting/platform-integrations/unity/setup/#what-youll-need",children:"subdomain and a submission token"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"verify-the-setup",children:"Verify the Setup"}),"\n",(0,r.jsx)(t.p,{children:"At this point, you've installed and setup the Backtrace client to automatically capture crashes and exceptions in your Unity game or app."}),"\n",(0,r.jsx)(t.p,{children:"To test the integration, use a try/catch block to throw an exception and start sending reports."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:' //Read from manager BacktraceClient instance\nvar backtraceClient = GameObject.Find("manager name").GetComponent<BacktraceClient>();\n\n//Set custom client attribute\nbacktraceClient["attribute"] = "attribute value";\n\n //Read from manager BacktraceClient instance\nvar database = GameObject.Find("manager name").GetComponent<BacktraceDatabase>();\n\n\ntry{\n    //throw exception here\n}\ncatch(Exception exception){\n    var report = new BacktraceReport(exception);\n    backtraceClient.Send(report);\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),a=n(34164),i=n(23104),o=n(56347),s=n(205),c=n(57485),l=n(31682),d=n(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,u]=m({queryString:n,groupId:a}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),x=(()=>{const e=l??f;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{x&&c(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==r&&(l(t),o(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...t,...e}),(0,b.jsx)(y,{...t,...e})]})}function k(e){const t=(0,g.A)();return(0,b.jsx)(v,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var r=n(96540);const a={},i=r.createContext(a);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);