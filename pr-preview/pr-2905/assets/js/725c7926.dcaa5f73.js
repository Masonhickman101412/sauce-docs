"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[67468],{74370:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(74848),r=t(28453);const i={id:"sauce-connect",title:"Sauce Connect Proxy 4",sidebar_label:"Overview"},c=void 0,s={id:"secure-connections/sauce-connect",title:"Sauce Connect Proxy 4",description:"Please refer to Sauce Connect Proxy 5 Overview for the most recent Sauce Connect Proxy documentation.",source:"@site/docs/secure-connections/sauce-connect.md",sourceDirName:"secure-connections",slug:"/secure-connections/sauce-connect",permalink:"/sauce-docs/pr-preview/pr-2905/secure-connections/sauce-connect",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect.md",tags:[],version:"current",lastUpdatedBy:"Dan Slov",lastUpdatedAt:1707169605e3,frontMatter:{id:"sauce-connect",title:"Sauce Connect Proxy 4",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Architecture",permalink:"/sauce-docs/pr-preview/pr-2905/secure-connections/sauce-connect-5/advanced/architecture"},next:{title:"Lifecycle",permalink:"/sauce-docs/pr-preview/pr-2905/secure-connections/sauce-connect/lifecycle"}},a={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Setup and Configuration",id:"setup-and-configuration",level:3},{value:"Why We Recommend Sauce Connect Proxy over Allowlisting IP Addresses",id:"why-we-recommend-sauce-connect-proxy-over-allowlisting-ip-addresses",level:2},{value:"Configurability",id:"configurability",level:3},{value:"Portability",id:"portability",level:3},{value:"Reliability and Ease of Maintenance",id:"reliability-and-ease-of-maintenance",level:3},{value:"Security",id:"security",level:3},{value:"More Information",id:"more-information",level:2}];function u(e){const n={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"Sauce Connect Proxy 5 is released",type:"caution",children:(0,o.jsxs)(n.p,{children:["Please refer to ",(0,o.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/",children:"Sauce Connect Proxy 5 Overview"})," for the most recent Sauce Connect Proxy documentation."]})}),"\n",(0,o.jsx)(n.p,{children:"If your company has firewall rules that limit your ability to run tests on Sauce Labs, you can use our Sauce Connect Proxy feature to connect to Sauce Labs in the cloud without exposing your company's IT infrastructure to security risks."}),"\n",(0,o.jsx)(n.p,{children:"Sauce Connect is a proxy server that opens a secure connection between a Sauce Labs virtual machine, emulator, simulator or real device running your browser or native app tests, and an app or website you want to test that is on your local machine or behind a corporate firewall."}),"\n",(0,o.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,o.jsx)(n.p,{children:"Prior to getting started, you'll need to validate that your local machine meets our system requirements and confirm that your firewall rules allow for outbound traffic."}),"\n",(0,o.jsx)(n.p,{children:"From there, install the Sauce Connect Proxy client on your local network. Should you encounter issues when starting or using the client, we recommend consulting your network administrator. They may need to update firewall rules or help configure Sauce Connect Proxy to use a network proxy."}),"\n",(0,o.jsxs)(n.p,{children:["Sauce Connect Proxy must be physically installed on the same ",(0,o.jsx)(n.em,{children:"network"})," as the app or website you're testing, but does not need to be on the same local machine. For this reason, when setting up Sauce Connect Proxy, be mindful of how it will interact with your network architecture."]}),"\n",(0,o.jsx)(n.h3,{id:"setup-and-configuration",children:"Setup and Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["We offer several different setup types, from the ",(0,o.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/basic-setup",children:"Basic Sauce Connect Proxy Setup"})," to the ",(0,o.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/high-availability",children:"High Availability Sauce Connect Proxy Setup"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"As you\u2019re configuring the setup type that\u2019s right for you, it's important to understand how the program will interact with your network architecture components, such as proxies, firewalls, and geographically distributed data centers."}),"\n",(0,o.jsx)(n.h2,{id:"why-we-recommend-sauce-connect-proxy-over-allowlisting-ip-addresses",children:"Why We Recommend Sauce Connect Proxy over Allowlisting IP Addresses"}),"\n",(0,o.jsx)(n.p,{children:"Testing your internal systems with Sauce Labs requires that our service is able to establish a secure connection."}),"\n",(0,o.jsx)(n.p,{children:"Rather than allowlisting our external IP addresses, we strongly recommend using our Sauce Connect Proxy tool, which will provide the following benefits:"}),"\n",(0,o.jsx)(n.h3,{id:"configurability",children:"Configurability"}),"\n",(0,o.jsx)(n.p,{children:"Sauce Connect Proxy provides many tools designed to improve the testing experience, from selective traffic routing to bandwidth restriction."}),"\n",(0,o.jsx)(n.p,{children:"Each Sauce Connect Proxy instance can be assigned different network proxies, run on different hosts, allocated to different users and allowed access to different systems under test. This allows infrastructure teams great control and flexibility over system access."}),"\n",(0,o.jsx)(n.p,{children:"Allowlisting provides no controls over which systems can be accessed by which users; anyone with the correct URL can access any service."}),"\n",(0,o.jsx)(n.h3,{id:"portability",children:"Portability"}),"\n",(0,o.jsx)(n.p,{children:"Sauce Connect Proxy can be used in any part of your corporate infrastructure, with relatively minimal setup. It allows you to test systems in different environments, different locations, and different physical hosts. With a flexible Sauce Connect setup, a developer can run tests on their local machine, their staging service, their build server, and anywhere else required."}),"\n",(0,o.jsx)(n.p,{children:"Allowlisting, in comparison, requires different routes and URLs for each environment under test. This places a maintenance burden on the networking team and leads to configuration problems for testers."}),"\n",(0,o.jsx)(n.h3,{id:"reliability-and-ease-of-maintenance",children:"Reliability and Ease of Maintenance"}),"\n",(0,o.jsx)(n.p,{children:"Once you're up and running with Sauce Connect Proxy, no maintenance is required; you'll only need to update to the new versions of our software, upon release."}),"\n",(0,o.jsx)(n.p,{children:"Sauce Connect Proxy can be set up for multiple corporate users and multiple systems under test, at the same time."}),"\n",(0,o.jsx)(n.p,{children:"With Sauce Connect Proxy, our support team can provide greater assistance debugging connectivity and reliability problems, thanks to improved logging and network tracking. Additionally, Sauce Connect Proxy's underlying network tools improve reliability over bad network connections."}),"\n",(0,o.jsx)(n.h3,{id:"security",children:"Security"}),"\n",(0,o.jsx)(n.p,{children:"Sauce Labs operates from a wide range of IP addresses, which you could allocate to any test environment at any time. By allowlisting these IP addresses, any Sauce Labs customer could conceivably send requests to your system under test, and your network infrastructure would allow it. Additionally, allowlisting does not provide tools for time-based access controls or easy disconnection."}),"\n",(0,o.jsx)(n.p,{children:"By using Sauce Connect Proxy instead of allowlisting, your network will be secure. At the end of every Sauce Connect Proxy session, upon terminating the client, the connection between our service and your infrastructure is severed, allowing you fine-grained access control."}),"\n",(0,o.jsxs)(n.p,{children:["For more information about Sauce Connect Proxy\u2122 and its security, see ",(0,o.jsx)(n.a,{href:"https://saucelabs.com/resources/white-papers/sauce-connect-proxy-security-overview",children:"this white paper"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/",children:"Sauce Connect Proxy 5 Overview"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/secure-connections/sauce-connect/quickstart/",children:"Sauce Connect Proxy Quickstart"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/basic-setup/",children:"Sauce Connect Proxy Basic Setup and Configuration"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy",children:"Sauce Connect Proxy CLI Reference"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var o=t(96540);const r={},i=o.createContext(r);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);