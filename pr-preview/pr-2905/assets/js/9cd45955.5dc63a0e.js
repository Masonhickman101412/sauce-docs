"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[16615],{78306:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(74848),r=t(28453);t(86025),t(11470),t(19365);const s={id:"eggplant",title:"Eggplant Integration",sidebar_label:"Eggplant",description:"Create, execute, and maintain test easily with the industry's leading model-based test platform"},i=void 0,o={id:"basics/integrations/eggplant",title:"Eggplant Integration",description:"Create, execute, and maintain test easily with the industry's leading model-based test platform",source:"@site/docs/basics/integrations/eggplant.md",sourceDirName:"basics/integrations",slug:"/basics/integrations/eggplant",permalink:"/sauce-docs/pr-preview/pr-2905/basics/integrations/eggplant",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/integrations/eggplant.md",tags:[],version:"current",lastUpdatedBy:"Laura Thomas",lastUpdatedAt:1681912623e3,frontMatter:{id:"eggplant",title:"Eggplant Integration",sidebar_label:"Eggplant",description:"Create, execute, and maintain test easily with the industry's leading model-based test platform"},sidebar:"docs",previous:{title:"Evinced",permalink:"/sauce-docs/pr-preview/pr-2905/basics/integrations/evinced"},next:{title:"Tosca",permalink:"/sauce-docs/pr-preview/pr-2905/basics/integrations/tosca"}},l={},c=[{value:"Using Sauce Connect Proxy with Eggplant Gateway\u200b",id:"using-sauce-connect-proxy-with-eggplant-gateway",level:2},{value:"What You\u2019ll Need",id:"what-youll-need",level:2},{value:"Connecting a Browser to Eggplant",id:"connecting-a-browser-to-eggplant",level:2},{value:"Connecting a Browser to Eggplant Functional",id:"connecting-a-browser-to-eggplant-functional",level:2},{value:"Setting up a VNC and WebDriver Server",id:"setting-up-a-vnc-and-webdriver-server",level:2},{value:"Real Devices",id:"real-devices",level:2},{value:"What You&#39;ll Need",id:"what-youll-need-1",level:3},{value:"Connecting a Real Device to Eggplant",id:"connecting-a-real-device-to-eggplant",level:3},{value:"Connecting a Real Device to Eggplant Functional",id:"connecting-a-real-device-to-eggplant-functional",level:3},{value:"Setting up a VNC and WebDriver Server",id:"setting-up-a-vnc-and-webdriver-server-1",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"The Eggplant Gateway enables Eggplant Functional to connect directly to devices hosted in the Sauce Labs Real Device Cloud. Typically, the Eggplant Gateway runs on the same machine as on which you have installed Eggplant Functional. The Eggplant Gateway and Eggplant Functional communicate using the VNC protocol (for image-based automation, usually at port 5900) and WebDriver (for Appium-driven automation, usually at port 5000)."}),"\n",(0,a.jsxs)(n.p,{children:["The Eggplant Gateway will allocate a device on the Sauce Labs Real Device Cloud using the Sauce Labs API. The Eggplant Gateway connects to the Sauce Labs API using the HTTPS protocol (at port 443) and the Secure WebSockets protocol (at port 443). For more information, see ",(0,a.jsx)(n.a,{href:"/basics/data-center-endpoints/",children:"Data Center Endpoints"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"The communication flow is similar when running a DAI model on a Sauce Labs device. In this case, DAI connects to an instance of Eggplant Functional, which leverages the Eggplant Gateway to connect to the Sauce Labs Real Device Cloud."}),"\n",(0,a.jsx)(n.h2,{id:"using-sauce-connect-proxy-with-eggplant-gateway",children:"Using Sauce Connect Proxy with Eggplant Gateway\u200b"}),"\n",(0,a.jsxs)(n.p,{children:["When using the Eggplant Gateway, the application under test is running on a Sauce Labs device. These devices are located in one of Sauce Labs' data centers. In certain scenarios, these applications may need to connect to corporate systems, such as UAT environments, that are not usually exposed over the public internet. In these scenarios, you can consider using Sauce Connect Proxy to provide your application with access to the corporate systems. For more information, see ",(0,a.jsx)(n.a,{href:"/secure-connections/sauce-connect/",children:"Sauce Connect Proxy"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"You can use the Eggplant Gateway for Sauce Labs Browsers to run Eggplant Functional and Eggplant DAI tests on browsers running in the Sauce Labs cloud."}),"\n",(0,a.jsx)(n.h2,{id:"what-youll-need",children:"What You\u2019ll Need"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["A Sauce Labs account (",(0,a.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,a.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,a.jsxs)(n.li,{children:["Your Sauce Labs ",(0,a.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"Username"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Download and install Eggplant Gateway. For details, see ",(0,a.jsx)(n.a,{href:"https://docs.eggplantsoftware.com/gateway/download/",children:"Install Eggplant Gateway"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"connecting-a-browser-to-eggplant",children:"Connecting a Browser to Eggplant"}),"\n",(0,a.jsx)(n.p,{children:"To set up a connection to a browser in the Sauce Labs cloud, run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"./epgw add sauce-browser \\\n --name <name> \\\n --user <user> \\\n --apiKey <apiKey> \\\n --dataCenter <dataCenter> \\\n --platformName <platformName> \\\n --browserName <browserName> \\\n --browserVersion <browserVersion> \\\n --screenResolution <screenResolution> \\\n --url <url>\n"})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Key"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"name"}),(0,a.jsx)(n.td,{children:"The name of the connection you want to create."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"user"}),(0,a.jsxs)(n.td,{children:["Your ",(0,a.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"Sauce Labs user name"}),". For example, ",(0,a.jsx)(n.code,{children:"awesome-user"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"apiKey"}),(0,a.jsxs)(n.td,{children:["Your ",(0,a.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"Sauce Labs API key"})," (also referred to as Access Key). For example, ",(0,a.jsx)(n.code,{children:"33b6cc9e-1cba-4e1e-84d3-eb2a24f5ea28"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"dataCenter"}),(0,a.jsxs)(n.td,{children:["The ",(0,a.jsx)(n.a,{href:"/basics/data-center-endpoints/",children:"Sauce Labs data center"})," you want to use. For example, ",(0,a.jsx)(n.code,{children:"us-west-1"})," or ",(0,a.jsx)(n.code,{children:"eu-central-1"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"platformName"}),(0,a.jsxs)(n.td,{children:["The platform you want to use. The default is ",(0,a.jsx)(n.code,{children:"Windows 10"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"browserName"}),(0,a.jsxs)(n.td,{children:["The browser name. The default is ",(0,a.jsx)(n.code,{children:"chrome"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"browserVersion"}),(0,a.jsxs)(n.td,{children:["The browser version. The default is ",(0,a.jsx)(n.code,{children:"98"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"screenResolution"}),(0,a.jsxs)(n.td,{children:["The screen resolution. The default is ",(0,a.jsx)(n.code,{children:"1400x1050"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"url"}),(0,a.jsx)(n.td,{children:"The URL to navigate to when the browser launches."})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["For example, to create a connection that will launch Chrome and navigate to ",(0,a.jsx)(n.a,{href:"https://www.google.com",children:"https://www.google.com"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"./epgw add sauce-browser \\\n --name chrome \\\n --user sauce_user \\\n --apiKey awesome_key \\\n --dataCenter eu-central-1 \\\n --browserName chrome \\\n --url https://www.google.com\n"})}),"\n",(0,a.jsx)(n.h2,{id:"connecting-a-browser-to-eggplant-functional",children:"Connecting a Browser to Eggplant Functional"}),"\n",(0,a.jsx)(n.p,{children:"To provision a browser in the Sauce Labs cloud and use it through Eggplant Functional:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Start ",(0,a.jsx)(n.strong,{children:"Eggplant Functional"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Run ",(0,a.jsx)(n.code,{children:"epgw connect <name>"}),", where ",(0,a.jsx)(n.code,{children:"name"})," is the name of your Gateway connection. For example, ",(0,a.jsx)(n.code,{children:"epgw connect chrome"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"setting-up-a-vnc-and-webdriver-server",children:"Setting up a VNC and WebDriver Server"}),"\n",(0,a.jsx)(n.p,{children:"Alternatively, you can set up a VNC and WebDriver server for your browser."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Run ",(0,a.jsx)(n.code,{children:"epgw vnc <name>"}),", where ",(0,a.jsx)(n.code,{children:"name"})," is the name of your Gateway connection. For example, ",(0,a.jsx)(n.code,{children:"epgw vnc chrome"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"The Eggplant Gateway will now provision your browser in the Sauce Labs cloud and start:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"A VNC server at port 5900"}),"\n",(0,a.jsx)(n.li,{children:"A WebDriver server at port 5000"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Manually add your device to the connection list in Eggplant Functional."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"To run multiple Eggplant Gateways simultaneously, specify a custom VNC port and WebDriver port."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Key"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"vncPort"}),(0,a.jsx)(n.td,{children:"The custom VNC port. The Eggplant Gateway starts a VNC server at the given vncPort."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"webDriverPort"}),(0,a.jsx)(n.td,{children:"The custom WebDriver port. The Eggplant Gateway starts a WebDriver server at the given webDriverPort."})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["For example, ",(0,a.jsx)(n.code,{children:"epgw vnc chrome --vncPort 5901 --webDriverPort 5001"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"real-devices",children:"Real Devices"}),"\n",(0,a.jsx)(n.p,{children:"You can use the Eggplant Gateway for the Sauce Labs Real Device Cloud to run Eggplant Functional and Eggplant DAI tests on public and private devices running in the Sauce Labs Real Device Cloud (RDC)."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Eggplant Functional 22.3 (or later) has built-in support for Sauce Labs devices. You do not need to use the Eggplant Gateway to connect to Sauce Labs devices using these versions of Eggplant Functional. See the ",(0,a.jsx)(n.a,{href:"https://docs.eggplantsoftware.com/studio/epf-connecting-to-sauce-labs-devices-and-browsers/",children:"Connecting to Sauce Labs Devices and Browsers"})," for more information."]})}),"\n",(0,a.jsx)(n.h3,{id:"what-youll-need-1",children:"What You'll Need"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["A Sauce Labs account (",(0,a.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,a.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,a.jsxs)(n.li,{children:["Your Sauce Labs ",(0,a.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"Username"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Download and install Eggplant Gateway. For details, see ",(0,a.jsx)(n.a,{href:"https://docs.eggplantsoftware.com/gateway/download/",children:"Install Eggplant Gateway"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"connecting-a-real-device-to-eggplant",children:"Connecting a Real Device to Eggplant"}),"\n",(0,a.jsx)(n.p,{children:"To set up a connection to an RDC device, run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"./epgw add sauce-device \\\n --name <name> \\\n --user <user> \\\n --apiKey <apiKey> \\\n --dataCenter <dataCenter> \\\n --platformName <platformName> \\\n --deviceName <deviceName> \\\n --app <app>\n"})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Key"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"name"}),(0,a.jsx)(n.td,{children:"The name of the connection you want to create."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"user"}),(0,a.jsxs)(n.td,{children:["Your ",(0,a.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"Sauce Labs user name"}),". For example, ",(0,a.jsx)(n.code,{children:"awesome-user"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"apiKey"}),(0,a.jsxs)(n.td,{children:["Your ",(0,a.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"Sauce Labs API key"})," (also referred to as Access Key). For example, ",(0,a.jsx)(n.code,{children:"33b6cc9e-1cba-4e1e-84d3-eb2a24f5ea28"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"dataCenter"}),(0,a.jsxs)(n.td,{children:["The ",(0,a.jsx)(n.a,{href:"/basics/data-center-endpoints/",children:"Sauce Labs data center"})," you want to use. For example, ",(0,a.jsx)(n.code,{children:"us-west-1"})," or ",(0,a.jsx)(n.code,{children:"eu-central-1"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"platformName"}),(0,a.jsxs)(n.td,{children:["The device platform you want to use (e.g., ",(0,a.jsx)(n.code,{children:"iOS"})," or ",(0,a.jsx)(n.code,{children:"Android"}),")."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"deviceName"}),(0,a.jsxs)(n.td,{children:["The name of the device you want to connect to (e.g., ",(0,a.jsx)(n.code,{children:"iPhone 8"}),"). You can use static or dynamic device allocation. For more information, see ",(0,a.jsx)(n.a,{href:"/mobile-apps/supported-devices/#static-and-dynamic-device-allocation",children:"Static and Dynamic Device Allocation"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"app"}),(0,a.jsxs)(n.td,{children:["(Optional) The app you want to launch on the device. This can be the location of your app in app storage or the URL to a remote location where your app is located. For more information, see ",(0,a.jsx)(n.a,{href:"/mobile-apps/app-storage/",children:"Mobile App Storage"}),"."]})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["For example, to create a connection that will launch the Swag Labs demo application on an iPhone 8 in the ",(0,a.jsx)(n.code,{children:"eu-central-1"})," data center, run the following command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'./epgw add sauce-device \\\n --name swaglabs-iphone8 \\\n --user sauce_user \\\n --apiKey awesome_key \\\n --dataCenter eu-central-1 \\\n --platformName iOS \\\n --deviceName "iPhone 8" \\\n --app https://github.com/saucelabs/sample-app-mobile/releases/download/2.7.1/iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa\n'})}),"\n",(0,a.jsx)(n.h3,{id:"connecting-a-real-device-to-eggplant-functional",children:"Connecting a Real Device to Eggplant Functional"}),"\n",(0,a.jsx)(n.p,{children:"To connect a public or private real device to Eggplant Functional:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Start ",(0,a.jsx)(n.strong,{children:"Eggplant Functional"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Run ",(0,a.jsx)(n.code,{children:"epgw connect <name>"}),", where ",(0,a.jsx)(n.code,{children:"name"})," is the name of your Gateway connection. For example, ",(0,a.jsx)(n.code,{children:"epgw connect swaglabs-iphone8"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The Eggplant Gateway will rent the device and add it to the connection list in Eggplant Functional."}),"\n",(0,a.jsx)(n.h3,{id:"setting-up-a-vnc-and-webdriver-server-1",children:"Setting up a VNC and WebDriver Server"}),"\n",(0,a.jsx)(n.p,{children:"To set up a VNC and WebDriver for your server:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Run ",(0,a.jsx)(n.code,{children:"epgw vnc <name>"}),", where ",(0,a.jsx)(n.code,{children:"name"})," is the name of your Gateway connection. For example, ",(0,a.jsx)(n.code,{children:"epgw vnc swaglabs-iphone8"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The Eggplant Gateway will rent the device and start:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"A VNC server at port 5900"}),"\n",(0,a.jsx)(n.li,{children:"A WebDriver server at port 5000"}),"\n"]}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Manually add your device to the connection list in Eggplant Functional."}),"\n",(0,a.jsx)(n.li,{children:"To run multiple Eggplant Gateways simultaneously, specify a custom VNC port and WebDriver port."}),"\n"]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Key"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"vncPort"}),(0,a.jsx)(n.td,{children:"The custom VNC port. The Eggplant Gateway starts a VNC server at the given vncPort."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"webDriverPort"}),(0,a.jsx)(n.td,{children:"The custom WebDriver port. The Eggplant Gateway starts a WebDriver server at the given webDriverPort."})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["For example, ",(0,a.jsx)(n.code,{children:"epgw vnc swaglabs-iphone8 --vncPort 5901 --webDriverPort 5001"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(96540),r=t(18215),s=t(23104),i=t(56347),o=t(205),l=t(57485),c=t(31682),d=t(89466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,u]=g({queryString:t,groupId:r}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),j=(()=>{const e=c??x;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(c(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function f(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(w,{...e,...n})]})}function y(e){const n=(0,m.A)();return(0,b.jsx)(f,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(96540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);