"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[89558],{97616:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var a=i(74848),n=i(28453);const l={id:"find-sessionid",title:"Virtual USB CLI: Find SessionID",sidebar_label:"Find SessionID"},c=void 0,t={id:"dev/cli/virtual-usb/find-sessionid",title:"Virtual USB CLI: Find SessionID",description:"Look up the list of active Virtual USB (vUSB) device sessions available to a specified user, allowing you to obtain the session ID for use in other vUSB CLI requests.",source:"@site/docs/dev/cli/virtual-usb/find-sessionid.md",sourceDirName:"dev/cli/virtual-usb",slug:"/dev/cli/virtual-usb/find-sessionid",permalink:"/sauce-docs/pr-preview/pr-2911/dev/cli/virtual-usb/find-sessionid",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/virtual-usb/find-sessionid.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"find-sessionid",title:"Virtual USB CLI: Find SessionID",sidebar_label:"Find SessionID"},sidebar:"dev",previous:{title:"Delete Session",permalink:"/sauce-docs/pr-preview/pr-2911/dev/cli/virtual-usb/delete-session"}},r={},d=[{value:"Usage",id:"usage",level:2},{value:"Options Details",id:"options-details",level:2},{value:'<span class="cli">--username</span>',id:"--username",level:3},{value:'<span class="cli">--accessKey</span>',id:"--accesskey",level:3},{value:'<span class="cli">--serverHost</span>',id:"--serverhost",level:3},{value:'<span class="cli">--serverPort</span>',id:"--serverport",level:3},{value:"Examples",id:"examples",level:2},{value:"Basic Example with Required Flags",id:"basic-example-with-required-flags",level:3},{value:"Full Example with Optional Flags",id:"full-example-with-optional-flags",level:3}];function o(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Look up the list of active Virtual USB (vUSB) device sessions available to a specified user, allowing you to obtain the session ID for use in other vUSB CLI requests."}),"\n",(0,a.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"$ <main class> [OPTIONS] sessions [OPTIONS]\n"})}),"\n",(0,a.jsx)(s.h2,{id:"options-details",children:"Options Details"}),"\n",(0,a.jsx)(s.h3,{id:"--username",children:(0,a.jsx)("span",{className:"cli",children:"--username"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| REQUIRED | STRING |"})}),"A valid Sauce Labs user account. You can find your username on the Sauce Labs ",(0,a.jsx)(s.a,{href:"https://app.saucelabs.com/user-settings",children:"User Settings page"}),". This option supports environment variable values."]}),"\n",(0,a.jsx)(s.h3,{id:"--accesskey",children:(0,a.jsx)("span",{className:"cli",children:"--accessKey"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| REQUIRED | STRING |"})}),"The authentication access key associated with your Sauce Labs user account. You can find your access key on the Sauce Labs ",(0,a.jsx)(s.a,{href:"https://app.saucelabs.com/user-settings",children:"User Settings page"}),". This option supports environment variable values."]}),"\n",(0,a.jsx)(s.h3,{id:"--serverhost",children:(0,a.jsx)("span",{className:"cli",children:"--serverHost"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL | URL ADDRESS |"})}),"A specific vUSB server host address. The default value, if not specified, is ",(0,a.jsx)(s.code,{children:"http://127.0.0.1"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"--serverport",children:(0,a.jsx)("span",{className:"cli",children:"--serverPort"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"A specific vUSB server port. The default value, if not specified, is ",(0,a.jsx)(s.code,{children:"33657"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(s.h3,{id:"basic-example-with-required-flags",children:"Basic Example with Required Flags"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",metastring:'title="Session Lookup Request"',children:"java -jar virtual-usb-client.jar sessions --username $SAUCE_USERNAME --accessKey $SAUCE_ACCESS_KEY\n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",metastring:'title="Sample Response"',children:"07:45:46.375 [main] INFO com.saucelabs.vusb.client.Runner - Runner Version 2.0.0\nList of active sessions\nd03a1b81-158d-4bb4-bcc9-074e43dd8465   Samsung Galaxy S10  ANDROID  10\nc7729c7a-56a9-46cf-ba96-958709a86b4f   iPhone XS           IOS      14.3\ne21abb6f-a08e-4685-ba6e-8c6586dd4264   iPhone SE 2020      IOS      14.3\n"})}),"\n",(0,a.jsx)(s.h3,{id:"full-example-with-optional-flags",children:"Full Example with Optional Flags"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"java -jar virtual-usb-client.jar sessions \\\n    --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465 \\\n    --username $SAUCE_USERNAME \\\n    --accessKey $SAUCE_ACCESS_KEY \\\n    --serverHost http://127.0.0.1 \\\n    --serverPort 8080 \\\n"})})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>c,x:()=>t});var a=i(96540);const n={},l=a.createContext(n);function c(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);