"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[80975],{38068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(74848),a=n(28453),i=n(86025);n(11470),n(19365);const s={id:"tf-connect",title:"TestFairy Connect",sidebar_label:"TestFairy Connect"},o=void 0,c={id:"testfairy/sdk/bug-tracking/tf-connect",title:"TestFairy Connect",description:"TestFairy Connect is a proxy server designed to facilitate the connection between your bug-tracking system (Jira Server) behind a firewall and the TestFairy cloud. By installing TestFairy Connect on-premise, companies can securely integrate their bug-tracking systems with TestFairy's web app, allowing for efficient and streamlined bug tracking and reporting.",source:"@site/docs/testfairy/sdk/bug-tracking/tf-connect.md",sourceDirName:"testfairy/sdk/bug-tracking",slug:"/testfairy/sdk/bug-tracking/tf-connect",permalink:"/sauce-docs/pr-preview/pr-2913/testfairy/sdk/bug-tracking/tf-connect",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/bug-tracking/tf-connect.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724864962e3,frontMatter:{id:"tf-connect",title:"TestFairy Connect",sidebar_label:"TestFairy Connect"},sidebar:"docs",previous:{title:"Jira Server",permalink:"/sauce-docs/pr-preview/pr-2913/testfairy/sdk/bug-tracking/jira-server"},next:{title:"Trello",permalink:"/sauce-docs/pr-preview/pr-2913/testfairy/sdk/bug-tracking/trello"}},l={},u=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuring TestFairy Connect",id:"configuring-testfairy-connect",level:2},{value:"Running TestFairy Connect",id:"running-testfairy-connect",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"SELinux",id:"selinux",level:4}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"TestFairy Connect is a proxy server designed to facilitate the connection between your bug-tracking system (Jira Server) behind a firewall and the TestFairy cloud. By installing TestFairy Connect on-premise, companies can securely integrate their bug-tracking systems with TestFairy's web app, allowing for efficient and streamlined bug tracking and reporting."}),"\n",(0,r.jsx)(t.p,{children:"You can install TestFairy Connect via a Docker image."}),"\n",(0,r.jsx)(t.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,r.jsx)(t.p,{children:"The core component of TestFairy Connect is the agent service. This service operates on a system within your firewall and establishes connections between TestFairy's web app and your bug-tracking system. Through this connection, bug reports and relevant data can be seamlessly exchanged between the two platforms:"}),"\n",(0,r.jsx)("img",{src:(0,i.Ay)("/img/testfairy/testing-an-app/bug-tracking/0-overview.png"),alt:"Overview"}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"To install TestFairy Connect, follow the steps below. The installation process is required only once, and the Docker will automatically download the latest version:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"docker run -i -t -v $PWD:/etc/testfairy-connect testfairy/testfairy-connect:latest configure\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["You can replace ",(0,r.jsx)(t.code,{children:"$PWD"})," with a directory of your choice to store your TestFairy Connect configuration."]})}),"\n",(0,r.jsx)(t.p,{children:"If there are no issues, you can follow the interactive configuration wizard displayed on the screen."}),"\n",(0,r.jsx)(t.h2,{id:"configuring-testfairy-connect",children:"Configuring TestFairy Connect"}),"\n",(0,r.jsx)(t.p,{children:"Before TestFairy Connect can function correctly, you need to provide specific configuration data. Ensure you have the following information:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"TestFairy API key. You can find at https://[your-subdomain].testfairy.com/settings/api-key/."}),"\n",(0,r.jsx)(t.li,{children:"The URL to your bug system."}),"\n",(0,r.jsxs)(t.li,{children:["In the case of a Jira basic authentication - valid credentials (",(0,r.jsx)(t.code,{children:"Username"})," and ",(0,r.jsx)(t.code,{children:"API Token"}),") for the Jira user."]}),"\n",(0,r.jsx)(t.li,{children:"In the case of a Jira OAuth authentication - admin access to Jira/the ability to manage Application Links (as described in the configuration wizard script)."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["By default, your configuration file ",(0,r.jsx)(t.code,{children:"config.json"})," is saved to ",(0,r.jsx)(t.code,{children:".testfairy-connect"})," under the Dockers Image home directory: ",(0,r.jsx)(t.code,{children:"~/.testfairy-connect/config.json"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"running-testfairy-connect",children:"Running TestFairy Connect"}),"\n",(0,r.jsx)(t.p,{children:"Once you have completed the configuration, TestFairy Connect is ready to run. To start the TestFairy Connect server, use the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"docker run -d -v $PWD:/etc/testfairy-connect --restart=always testfairy/testfairy-connect:latest start\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["You can replace ",(0,r.jsx)(t.code,{children:"$PWD"})," with a directory of your choice to store your TestFairy Connect configuration."]})}),"\n",(0,r.jsxs)(t.p,{children:["TestFairy Connect will be running in the background, and it is safe to close the ssh connection. Remember that stopping docker or rebooting the server will require you to run the ",(0,r.jsx)(t.code,{children:"start"})," command again."]}),"\n",(0,r.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(t.h4,{id:"selinux",children:"SELinux"}),"\n",(0,r.jsx)(t.p,{children:"If you have permission errors related to your docker volume, you can attach the volume in relaxed SELinux mode or disable SELinux enforcement entirely."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Use these commands to attach volume in relaxed SELinux mode:","\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"docker run -i -t -v $PWD:/etc/testfairy-connect:z testfairy/testfairy-connect:latest configure\ndocker run -d -v $PWD:/etc/testfairy-connect:z --restart=always testfairy/testfairy-connect:latest start\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Alternatively, you can disable SELinux altogether by running the following:","\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"sudo setenforce 0\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(96540),a=n(34164),i=n(23104),s=n(56347),o=n(205),c=n(57485),l=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,d]=p({queryString:n,groupId:a}),[y,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),m=(()=>{const e=l??y;return f({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{m&&c(m)}),[m]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),a=o[n].value;a!==r&&(l(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=y(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,b.jsx)(v,{...t,...e}),(0,b.jsx)(x,{...t,...e})]})}function j(e){const t=(0,g.A)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);