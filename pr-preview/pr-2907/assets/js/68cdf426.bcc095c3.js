"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[53170],{83045:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=s(74848),o=s(28453);const r={id:"updating-an-on-premises-instance",title:"Updating a Self-Hosted Instance",sidebar_label:"Updating an Instance",keywords:["api","api-fortress","update","onpremises","selfhosted"]},i=void 0,a={id:"api-testing/on-prem/self-hosted/updating-an-on-premises-instance",title:"Updating a Self-Hosted Instance",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/self-hosted/updating-an-on-premises-instance.md",sourceDirName:"api-testing/on-prem/self-hosted",slug:"/api-testing/on-prem/self-hosted/updating-an-on-premises-instance",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/on-prem/self-hosted/updating-an-on-premises-instance",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/self-hosted/updating-an-on-premises-instance.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724771321e3,frontMatter:{id:"updating-an-on-premises-instance",title:"Updating a Self-Hosted Instance",sidebar_label:"Updating an Instance",keywords:["api","api-fortress","update","onpremises","selfhosted"]},sidebar:"apif",previous:{title:"Self-Hosted System Requirements",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/on-prem/self-hosted/on-premises-requirements"},next:{title:"Backing Up your Data",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/on-prem/self-hosted/on-premises-backing-up-your-data"}},d={},c=[];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{children:(0,t.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Legacy Documentation"}),(0,t.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,t.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Updating an On Premises instance of API Fortress is done as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Back up the databases. (Optional, but recommended)"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you're storing the API Fortress data on a persistent volume in a cloud system, you can take a snapshot of the disk."}),"\n",(0,t.jsx)(n.li,{children:"You can archive the data directories defined in the docker-compose.yml file."}),"\n",(0,t.jsxs)(n.li,{children:["You can dump the databases as described here: ",(0,t.jsx)(n.a,{href:"/api-testing/on-prem/self-hosted/on-premises-backing-up-your-data",children:"Backing up Your Data"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Stop the containers"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["From the 'core' directory, issue a ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"docker-compose stop"})})," command and wait for the operation to complete. This command stops the currently-running Docker containers."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Pull the updated containers"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["From the 'core' directory, issue a ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"docker-compose pull"})})," command and wait for the operation to complete. This command pulls updated images from the API Fortress Docker repository."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Restart the containers"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["From the 'core' directory, issue a ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"./start_all.sh"})})," command to restart the containers and wait for the operation to complete. This script restarts the containers in the proper order."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Once the preceding steps are completed, the On Premises version of API Fortress will be fully updated."}),"\n",(0,t.jsx)(n.p,{children:'Please note to update the instance you only need to stop and restart the "core" container. However, it is recommended that you verify the downloader is still up and running. To do so run the following command to see if the downloader is up:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo docker ps\n"})}),"\n",(0,t.jsx)(n.p,{children:'If the downloader is not listed in the response, please navigate to the "downloader" directory and issue the following command:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo docker-compose up -d\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(96540);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);