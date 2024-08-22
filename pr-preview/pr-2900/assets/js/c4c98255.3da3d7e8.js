"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[87562],{87862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=t(74848),a=t(28453),s=(t(86025),t(11470)),i=t(19365);const o={id:"overview",title:"Sauce Connect Proxy 5 operations and administration",sidebar_label:"Getting Started"},c=void 0,u={id:"secure-connections/sauce-connect-5/operation/overview",title:"Sauce Connect Proxy 5 operations and administration",description:"Sauce Connect Proxy operations and administration involve everything required to install, configure, maintain and use secure connections.",source:"@site/docs/secure-connections/sauce-connect-5/operation/overview.md",sourceDirName:"secure-connections/sauce-connect-5/operation",slug:"/secure-connections/sauce-connect-5/operation/overview",permalink:"/sauce-docs/pr-preview/pr-2900/secure-connections/sauce-connect-5/operation/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect-5/operation/overview.md",tags:[],version:"current",lastUpdatedBy:"Micha\u0142 Matczuk",lastUpdatedAt:1716982033e3,frontMatter:{id:"overview",title:"Sauce Connect Proxy 5 operations and administration",sidebar_label:"Getting Started"},sidebar:"docs",previous:{title:"Monitoring",permalink:"/sauce-docs/pr-preview/pr-2900/secure-connections/sauce-connect-5/monitoring"},next:{title:"Configuration",permalink:"/sauce-docs/pr-preview/pr-2900/secure-connections/sauce-connect-5/operation/configuration"}},l={},d=[{value:"Installation and Configuration",id:"installation-and-configuration",level:2},{value:"Administration",id:"administration",level:2},{value:"Security Considerations",id:"security-considerations",level:3},{value:"Shared Tunnels",id:"shared-tunnels",level:3},{value:"Running Sauce Connect Proxy",id:"running-sauce-connect-proxy",level:3},{value:"Monitoring Tunnels",id:"monitoring-tunnels",level:3},{value:"Service Management Tools",id:"service-management-tools",level:3},{value:"More Information",id:"more-information",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Sauce Connect Proxy operations and administration involve everything required to install, configure, maintain and use secure connections."}),"\n",(0,r.jsx)(n.h2,{id:"installation-and-configuration",children:"Installation and Configuration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["See the ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/installation/",children:"installation instructions"})]}),"\n",(0,r.jsxs)(n.li,{children:["See the ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/operation/configuration/",children:"configuration guide"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"administration",children:"Administration"}),"\n",(0,r.jsx)(n.p,{children:"We recommend using a single Sauce Connect Proxy tunnel or tunnel pool for each test suite or build, and tearing it down at the end of your test. Your test automation framework should launch Sauce Connect Proxy before the test suite is triggered and shut it down when the suite finishes."}),"\n",(0,r.jsx)(n.h3,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,r.jsxs)(n.p,{children:["We recommend using a ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/operation/configuration/#config-file",children:"config file"})," or ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/operation/configuration/#environment-variables/",children:"setting environment variables"})," to hide sensitive information like your password (",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--access-key",children:"--access-key"}),") and proxy credentials. This way, they won't be visible in the list of running processes."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://saucelabs.com/resources/white-papers/sauce-connect-proxy-security-overview",children:"Sauce Connect Proxy white paper"})," contains an in-depth overview of the proxy and its security."]}),"\n",(0,r.jsx)(n.h3,{id:"shared-tunnels",children:"Shared Tunnels"}),"\n",(0,r.jsxs)(n.p,{children:["Sauce Connect Proxy tunnel can be shared between multiple accounts in the same organization. To share a tunnel, start Sauce Connect Proxy with the ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--shared",children:(0,r.jsx)(n.code,{children:"--shared all"})})," flag.\nFor most Sauce Labs customers, your access to shared tunnels is determined by the permissions of the user who creates them.\nOrganization admins can create tunnels that any user on any team can use.\nTeam admins can create tunnels that any member of their team can use. Team members cannot share tunnels they create with any other team member."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information about user roles and permissions, see ",(0,r.jsx)(n.a,{href:"/basics/acct-team-mgmt/managing-user-info",children:"User Roles"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In order to use a tunnel that an admin or team member shares with you, you'll need to add ",(0,r.jsx)(n.a,{href:"https://docs.saucelabs.com/dev/test-configuration-options/#tunnelowner",children:(0,r.jsx)(n.code,{children:"tunnelOwner"})})," to your test capabilities and specify that person's username."]}),"\n",(0,r.jsx)(n.h3,{id:"running-sauce-connect-proxy",children:"Running Sauce Connect Proxy"}),"\n",(0,r.jsx)(n.p,{children:"Every Sauce Connect Proxy tunnel spins up a fresh virtual machine (VM) that is used only for your tests. Once the tunnel is closed, VMs are destroyed."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Make sure that the directory containing the ",(0,r.jsx)(n.code,{children:"sc"})," binary (or ",(0,r.jsx)(n.code,{children:"sc.exe"}),", for Windows) is in the ",(0,r.jsx)(n.code,{children:"$PATH"}),". Otherwise, you will have to specify the path to the binary in the command line, i.e. ",(0,r.jsx)(n.code,{children:"/path/to/sc"})]}),"\n",(0,r.jsx)(n.li,{children:"Define environment variables containing sensitive data: your user name, access key, proxy authentication (if needed), etc."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"SAUCE_USERNAME=<username>\nSAUCE_ACCESS_KEY=<your access key>\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Start Sauce Connect Proxy"}),"\n"]}),"\n",(0,r.jsxs)(s.A,{defaultValue:"Mac/Linux",values:[{label:"Mac/Linux",value:"Mac/Linux"},{label:"Windows",value:"Windows"}],children:[(0,r.jsxs)(i.A,{value:"Mac/Linux",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sc run --tunnel-name $SAUCE_TUNNEL_NAME --region <us-west|eu-central>\n"})}),"Or without environment variables:",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sc run --username <your user> --access-key <your access key> --region <us-west|eu-central> --tunnel-name $SAUCE_TUNNEL_NAME\n"})})]}),(0,r.jsxs)(i.A,{value:"Windows",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sc.exe run --tunnel-name $SAUCE_TUNNEL_NAME --region <us-west|eu-central>\n"})}),"Or without environment variables:",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sc.exe run --username <your user> --access-key <your access key> --region <us-west|eu-central> --tunnel-name $SAUCE_TUNNEL_NAME\n"})})]})]}),"\n",(0,r.jsx)(n.h3,{id:"monitoring-tunnels",children:"Monitoring Tunnels"}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/monitoring",children:"monitoring overview"})]}),"\n",(0,r.jsx)(n.h3,{id:"service-management-tools",children:"Service Management Tools"}),"\n",(0,r.jsx)(n.p,{children:"Running Sauce Connect Proxy as a service is recommended when your tests often require an active secure connection and, operationally, it's complicated to set up a tunnel just before each test suite.\nThe following options are available:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/installation/kubernetes",children:"Running Sauce Connect Proxy in Kubernetes"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/docker/#running-the-sauce-connect-proxy-container-indefinitely-in-kubernetes",children:"Running a containerized Sauce Connect Proxy"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Running a ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/installation/linux/",children:"systemd service"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/",children:"Sauce Connect Proxy Overview"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/",children:"Sauce Connect Proxy 5 CLI Reference"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),a=t(18215),s=t(23104),i=t(56347),o=t(205),c=t(57485),u=t(31682),l=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=p({queryString:t,groupId:a}),[f,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,l.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),x=(()=>{const e=u??f;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{x&&c(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),l=e=>{const n=e.currentTarget,t=c.indexOf(n),a=o[t].value;a!==r&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:l,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,b.jsx)(g,{...e,...n}),(0,b.jsx)(y,{...e,...n})]})}function w(e){const n=(0,v.A)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);