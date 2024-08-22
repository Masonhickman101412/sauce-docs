"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[16115],{64697:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(74848),i=n(28453);const l={id:"start-session",title:"Virtual USB CLI: Start Test Session",sidebar_label:"Start Session"},t=void 0,c={id:"dev/cli/virtual-usb/start-session",title:"Virtual USB CLI: Start Test Session",description:"Launch a Virtual USB (vUSB) session between your local machine and a Sauce Labs device. Alternatively, you can connect to an existing vUSB session.",source:"@site/docs/dev/cli/virtual-usb/start-session.md",sourceDirName:"dev/cli/virtual-usb",slug:"/dev/cli/virtual-usb/start-session",permalink:"/sauce-docs/pr-preview/pr-2900/dev/cli/virtual-usb/start-session",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/virtual-usb/start-session.md",tags:[],version:"current",lastUpdatedBy:"eyaly",lastUpdatedAt:1724173384e3,frontMatter:{id:"start-session",title:"Virtual USB CLI: Start Test Session",sidebar_label:"Start Session"},sidebar:"dev",previous:{title:"Start Server",permalink:"/sauce-docs/pr-preview/pr-2900/dev/cli/virtual-usb/start-server"},next:{title:"Connect to Session",permalink:"/sauce-docs/pr-preview/pr-2900/dev/cli/virtual-usb/connect-session"}},r={},d=[{value:"Usage",id:"usage",level:2},{value:"Options Details",id:"options-details",level:2},{value:'<span class="cli">--username </span>',id:"--username-",level:3},{value:'<span class="cli">--accessKey</span>',id:"--accesskey",level:3},{value:'<span class="cli">--deviceName</span>',id:"--devicename",level:3},{value:'<span class="cli">--artifactsEnabled</span>',id:"--artifactsenabled",level:3},{value:'<span class="cli">--serverHost</span>',id:"--serverhost",level:3},{value:'<span class="cli">--serverPort</span>',id:"--serverport",level:3},{value:'<span class="cli">--proxyHost</span>',id:"--proxyhost",level:3},{value:'<span class="cli">--proxyPort</span>',id:"--proxyport",level:4},{value:'<span class="cli">--proxyUser</span>',id:"--proxyuser",level:3},{value:'<span class="cli">--proxyPassword</span>',id:"--proxypassword",level:3},{value:'<span class="cli">--tunnelIdentifier</span>',id:"--tunnelidentifier",level:3},{value:"Examples",id:"examples",level:2},{value:"Basic Example with Required Flags",id:"basic-example-with-required-flags",level:3},{value:"Full Example with Optional Flags",id:"full-example-with-optional-flags",level:3}];function o(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/mobile-apps/features/virtual-usb#start-test-session",children:"Launch a Virtual USB (vUSB) session"})," between your local machine and a Sauce Labs device. Alternatively, you can ",(0,a.jsx)(s.a,{href:"/dev/cli/virtual-usb/connect-session",children:"connect to an existing vUSB session"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"$ <main class> [OPTIONS] startSession [OPTIONS]\n"})}),"\n",(0,a.jsx)(s.h2,{id:"options-details",children:"Options Details"}),"\n",(0,a.jsx)(s.h3,{id:"--username-",children:(0,a.jsx)("span",{className:"cli",children:"--username "})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| REQUIRED | STRING |"})}),"A valid Sauce Labs user account. You can find your username on the Sauce Labs ",(0,a.jsx)(s.a,{href:"https://app.saucelabs.com/user-settings",children:"User Settings page"}),". This option supports environment variable values."]}),"\n",(0,a.jsx)(s.h3,{id:"--accesskey",children:(0,a.jsx)("span",{className:"cli",children:"--accessKey"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| REQUIRED | STRING |"})}),"The authentication access key associated with your Sauce Labs user account. You can find your access key on the Sauce Labs ",(0,a.jsx)(s.a,{href:"https://app.saucelabs.com/user-settings",children:"User Settings page"}),". This option supports environment variable values."]}),"\n",(0,a.jsx)(s.h3,{id:"--devicename",children:(0,a.jsx)("span",{className:"cli",children:"--deviceName"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| REQUIRED | STRING |"})}),"The name of the private device that you want to use for testing."]}),"\n",(0,a.jsx)(s.h3,{id:"--artifactsenabled",children:(0,a.jsx)("span",{className:"cli",children:"--artifactsEnabled"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL | BOOLEAN |"})}),"Whether to generate and save artifacts for this session (device logs and video recording). The default value, if not specified, is ",(0,a.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"--serverhost",children:(0,a.jsx)("span",{className:"cli",children:"--serverHost"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL | URL ADDRESS |"})}),"A specific vUSB server host address. The default value, if not specified, is ",(0,a.jsx)(s.code,{children:"http://127.0.0.1"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"--serverport",children:(0,a.jsx)("span",{className:"cli",children:"--serverPort"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"A specific vUSB server port. The default value, if not specified, is ",(0,a.jsx)(s.code,{children:"33657"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"--proxyhost",children:(0,a.jsx)("span",{className:"cli",children:"--proxyHost"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"Specify a proxy host to be set on the device."]}),"\n",(0,a.jsx)(s.h4,{id:"--proxyport",children:(0,a.jsx)("span",{className:"cli",children:"--proxyPort"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"Specify a proxy port to be set on the device. Default value: ",(0,a.jsx)(s.code,{children:"0"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"--proxyuser",children:(0,a.jsx)("span",{className:"cli",children:"--proxyUser"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"Specify a proxy user to be set on the device."]}),"\n",(0,a.jsx)(s.h3,{id:"--proxypassword",children:(0,a.jsx)("span",{className:"cli",children:"--proxyPassword"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"Specify a proxy password to be set on the device."]}),"\n",(0,a.jsx)(s.h3,{id:"--tunnelidentifier",children:(0,a.jsx)("span",{className:"cli",children:"--tunnelIdentifier"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"Specifies the name of an active ",(0,a.jsx)(s.a,{href:"/secure-connections/sauce-connect/",children:"Sauce Connect"})," tunnel to use for secure connectivity to the Sauce Labs platform.",(0,a.jsx)(s.br,{}),"\n","Use the ",(0,a.jsx)(s.code,{children:"--tunnelIdentifier"})," option with the tunnel identifier in the format:",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:'title="tunnel identifier format"',children:"--tunnelIdentifier tunnel-identifier:<tunnel-name>,<tunnel-owner>\n"})}),(0,a.jsx)(s.admonition,{title:"Identifying a Tunnel",type:"note",children:(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"tunnel-name"}),": The value expected here is the value shown under the ",(0,a.jsx)(s.strong,{children:"Tunnel Name"})," column on the Sauce Labs Tunnels page, not the Tunnel ID numerical value."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"tunnel-owner"}),": The name of the tunnel owner. This is the value shown under the ",(0,a.jsx)(s.strong,{children:"Owner"})," column on the Sauce Labs Tunnels page."]}),"\n"]})})]}),"\n",(0,a.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(s.h3,{id:"basic-example-with-required-flags",children:"Basic Example with Required Flags"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:'title="Start Session Request"',children:"java -jar virtual-usb-client.jar startSession --username $SAUCE_USERNAME --accessKey $SAUCE_ACCESS_KEY --deviceName iPhone_XS\n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:'title="Sample Response"',children:"07:43:22.551 [main] INFO com.saucelabs.vusb.client.Runner - Runner Version 2.0.0\nStarted new session:\ne21abb6f-a08e-4685-ba6e-8c6586dd4264\t\tiPhone SE 2020\t\tIOS\t\t14.3\t\thttps://app.eu-central-1.saucelabs.com/live/mobile/dataCenters/EU/devices/iPhone_SE_2020_14_POC05/shared/e21abb6f-a08e-4685-ba6e-8c6586dd4264\nlocalhost:-1\tonline\n"})}),"\n",(0,a.jsx)(s.h3,{id:"full-example-with-optional-flags",children:"Full Example with Optional Flags"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"java -jar virtual-usb-client.jar startSession \\\n    --username $SAUCE_USERNAME \\\n    --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxx \\\n    --deviceName iPhone_XS \\\n    --serverHost http://127.0.0.1 \\\n    --serverPort 8080 \\\n    --tunnelIdentifier tunnel-identifier:my-tunnel,my-owner\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>c});var a=n(96540);const i={},l=a.createContext(i);function t(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);