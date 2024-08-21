"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[51778],{91860:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=n(74848),i=n(28453);n(11470),n(19365),n(86025);const s={id:"post-migration",title:"Post Migration Verification Steps",sidebar_label:"Post migration",description:"Required steps after a server migration."},o=void 0,a={id:"error-reporting/advanced/post-migration",title:"Post Migration Verification Steps",description:"Required steps after a server migration.",source:"@site/docs/error-reporting/advanced/post-migration.md",sourceDirName:"error-reporting/advanced",slug:"/error-reporting/advanced/post-migration",permalink:"/sauce-docs/pr-preview/pr-2899/error-reporting/advanced/post-migration",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/advanced/post-migration.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1689328429e3,frontMatter:{id:"post-migration",title:"Post Migration Verification Steps",sidebar_label:"Post migration",description:"Required steps after a server migration."},sidebar:"backtrace",previous:{title:"Feature Overview",permalink:"/sauce-docs/pr-preview/pr-2899/error-reporting/advanced/assistive-unix/overview"},next:{title:"Invariants",permalink:"/sauce-docs/pr-preview/pr-2899/error-reporting/advanced/invariants"}},l={},c=[{value:"Startup/Service",id:"startupservice",level:2},{value:"Server Requirements",id:"server-requirements",level:2},{value:"Error Submission Flow",id:"error-submission-flow",level:2},{value:"Symbolification",id:"symbolification",level:2},{value:"General UI",id:"general-ui",level:2},{value:"Login/SSO",id:"loginsso",level:2},{value:"Network/Endpoints/Certs",id:"networkendpointscerts",level:2},{value:"Misc. Services",id:"misc-services",level:2},{value:"Workflows/Reports",id:"workflowsreports",level:2},{value:"Data",id:"data",level:2}];function d(e){const r={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"After a server migration or similar work, the minimum verification steps need to be completed."}),"\n",(0,t.jsx)(r.h2,{id:"startupservice",children:"Startup/Service"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Confirm the coronerd version by running the following command:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ /opt/backtrace/sbin/coronerd -v 1.42.1\n"})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Ensure that coronerd, backtrace-proxy, and backtrace-nginx can be started, stopped, and queried for status via systemctl."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ systemctl status coronerd\n\u25cf coronerd.service - Backtrace I/O server\nLoaded: loaded (/etc/systemd/system/coronerd.service; enabled; vendor preset: enabled)\nActive: active (running) since Tue 2019-11-12 01:41:25 UTC; 13h ago\nMain PID: 18126 (monitor)\n    Tasks: 104 (limit: 4915)\nCGroup: /system.slice/coronerd.service\n        \u251c\u250018126 /opt/backtrace/sbin/coronerd: monitoring child 18127\n        \u251c\u250018127 /opt/backtrace/sbin/coronerd -f -c /etc/coronerd/coronerd.conf\n        (... etc \u2026)\n"})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Perform the following checks for Coronerd:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Coronerd starts and stays running."}),"\n",(0,t.jsx)(r.li,{children:"Coronerd is listening on the necessary ports/firewall is open."}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ systemctl status coronerd\n\u25cf coronerd.service - Backtrace I/O server\nLoaded: loaded (/etc/systemd/system/coronerd.service; enabled; vendor preset: enabled)\nActive: active (running) since Tue 2019-11-12 01:41:25 UTC; 13h ago\nMain PID: 18126 (monitor)\n    Tasks: 104 (limit: 4915)\nCGroup: /system.slice/coronerd.service\n        \u251c\u250018126 /opt/backtrace/sbin/coronerd: monitoring child 18127\n        \u251c\u250018127 /opt/backtrace/sbin/coronerd -f -c /etc/coronerd/coronerd.conf\n        (... etc \u2026)\n"})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Check the logs and look for abnormal messages from coronerd."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Confirm that the ",(0,t.jsx)(r.code,{children:"/api/is_configured"}),' endpoint returns a literal "1" by running the following command:']}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'# Look carefully - there will be no line break after the "1"\n$ curl https://yolo.sp.backtrace.io/api/is_configured\n1\n'})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Confirm that the ",(0,t.jsx)(r.code,{children:"coronerd-crash-report"})," service is running by running the following command:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ sudo systemctl status coronerd-crash-report\n\u25cf coronerd-crash-report.service - Coronerd Crash Report server\nLoaded: loaded (/etc/systemd/system/coronerd-crash-report.service; enabled; vendor preset: enabled)\nActive: active (running) since Tue 2019-11-12 01:41:25 UTC; 13h ago\nMain PID: 18197 (monitor)\n    Tasks: 2 (limit: 4915)\nCGroup: /system.slice/coronerd-crash-report.service\n        \u251c\u250018197 /opt/backtrace/bin/coroner: monitoring child 18198\n        \u2514\u250018198 /opt/backtrace/bin/coroner -c /etc/coronerd/coroner.cf daemon -f\n\nNov 12 01:41:25 yolo01.linode-nj1.backtrace.io systemd[1]: Starting Coronerd Crash Report server...\nNov 12 01:41:25 yolo01.linode-nj1.backtrace.io coronerd-crash-report[18189]:  * Starting Backtrace I/O database error reporting coroner\nNov 12 01:41:25 yolo01.linode-nj1.backtrace.io coronerd-crash-report[18189]:    ...done.\nNov 12 01:41:25 yolo01.linode-nj1.backtrace.io systemd[1]: Started Coronerd Crash Report server.\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"server-requirements",children:"Server Requirements"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Ensure that ",(0,t.jsx)(r.code,{children:"ulimit -n"})," is set to at least 131072 by running the following command:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'# 18172 is the pid of the main coronerd process (see above)\n$ cat /proc/18127/limits | grep "open files" | tr -s \' \' | cut -d " " -f 4\n524288\n'})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Check coronerd's memory and CPU usage with the ",(0,t.jsx)(r.code,{children:"top"})," command."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Check disk space usage."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Verify the correct storage path."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"error-submission-flow",children:"Error Submission Flow"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"Test the end-to-end error flow."}),"\n",(0,t.jsx)(r.li,{children:"Submit and reprocess a test error."}),"\n",(0,t.jsx)(r.li,{children:"Submit an error."}),"\n",(0,t.jsx)(r.li,{children:"Check for a sane response."}),"\n",(0,t.jsxs)(r.li,{children:["Retrieve ",(0,t.jsx)(r.code,{children:"objid/txid"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Query coronerd for this ",(0,t.jsx)(r.code,{children:"objid"}),"."]}),"\n",(0,t.jsx)(r.li,{children:"Compare the returned results."}),"\n",(0,t.jsx)(r.li,{children:"Submit a symbol file."}),"\n",(0,t.jsx)(r.li,{children:"Reprocess and ensure symbolification."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"symbolification",children:"Symbolification"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Ensure that the uploaded symbols count/list matches the old server."}),"\n",(0,t.jsx)(r.li,{children:"Ensure that the missing symbols count/list matches the old server."}),"\n",(0,t.jsxs)(r.li,{children:["If using custom symbol servers:","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Verify that the symbol server configs are present."}),"\n",(0,t.jsx)(r.li,{children:'Ensure that the configs are not labeled as "Backtrace Server".'}),"\n",(0,t.jsx)(r.li,{children:"Check if the whitelist/blacklist/skiplist is brought over."}),"\n",(0,t.jsx)(r.li,{children:"Verify that the failure/success counts look good."}),"\n",(0,t.jsx)(r.li,{children:"Check if Symbold is not logging anything irregular in syslog/journalctl."}),"\n",(0,t.jsx)(r.li,{children:"Force Symbold to test a download of a known good symbol."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"general-ui",children:"General UI"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Confirm that the Coronerd/console is updated in ",(0,t.jsx)(r.strong,{children:"Help"})," > ",(0,t.jsx)(r.strong,{children:"About"}),"."]}),"\n",(0,t.jsx)(r.li,{children:"Verify that the triage view for each project loads correctly."}),"\n",(0,t.jsx)(r.li,{children:"Visit each config applet and make sure they all open correctly."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"loginsso",children:"Login/SSO"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Ensure that user accounts are brought over and able to login."}),"\n",(0,t.jsxs)(r.li,{children:["If using SSO:","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Verify that the configuration matches. Check if the option to configure SSO in the UI is present and does not return errors when navigated to."}),"\n",(0,t.jsxs)(r.li,{children:["Check if the ",(0,t.jsx)(r.strong,{children:"Login via SSO"})," button is available."]}),"\n",(0,t.jsx)(r.li,{children:"Test an SSO login."}),"\n",(0,t.jsx)(r.li,{children:"Test an invitation request and confirm both the receipt of the email and the functioning of the link."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"networkendpointscerts",children:"Network/Endpoints/Certs"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Ensure that the server has the same listeners set up."}),"\n",(0,t.jsx)(r.li,{children:"Verify that the SSL config matches up on each SSL-configured listener."}),"\n",(0,t.jsx)(r.li,{children:"Make sure the proper DNS name is set up on the necessary endpoints."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"misc-services",children:"Misc. Services"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Verify that link sharing is functioning (if applicable)."}),"\n",(0,t.jsxs)(r.li,{children:["For each installed service:","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Check its conf file in ",(0,t.jsx)(r.code,{children:"/etc/backtrace/<servicename>/"}),"."]}),"\n",(0,t.jsx)(r.li,{children:"Check for it in the morgue service status."}),"\n",(0,t.jsx)(r.li,{children:"Verify that it's listening on its necessary port."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"workflowsreports",children:"Workflows/Reports"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Ensure that the workflow configurations are ported over."}),"\n",(0,t.jsx)(r.li,{children:"Verify that the workflows fire properly (check if the new server isn't having trouble talking to the third-party service)."}),"\n",(0,t.jsx)(r.li,{children:"Check the links in notifications."}),"\n",(0,t.jsx)(r.li,{children:"If applicable, test manual ticket creation."}),"\n",(0,t.jsx)(r.li,{children:"If using reporting, make sure the reports are ported over."}),"\n",(0,t.jsx)(r.li,{children:"Send a test report."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Verify that all projects exist with identical tokens as the old system."}),"\n",(0,t.jsx)(r.li,{children:"Check if all projects have an identical error count post-migration."}),"\n",(0,t.jsx)(r.li,{children:"Ensure that attribute indices are ported over."}),"\n",(0,t.jsx)(r.li,{children:"Verify that deduplication rules are ported over."}),"\n",(0,t.jsx)(r.li,{children:"Check if retention settings are ported over."}),"\n",(0,t.jsx)(r.li,{children:"Ensure that sampling settings are ported over."}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>o});n(96540);var t=n(18215);const i={tabItem:"tabItem_Ymn6"};var s=n(74848);function o(e){let{children:r,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,o),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>k});var t=n(96540),i=n(18215),s=n(23104),o=n(56347),a=n(205),l=n(57485),c=n(31682),d=n(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:i}}=e;return{value:r,label:n,attributes:t,default:i}}))}(n);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const i=(0,o.W6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(i.location.search);r.set(s,e),i.replace({...i.location,search:r.toString()})}),[s,i])]}function f(e){const{defaultValue:r,queryString:n=!1,groupId:i}=e,s=h(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[c,u]=m({queryString:n,groupId:i}),[f,v]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[i,s]=(0,d.Dv)(n);return[i,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),g=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,s]),tabValues:s}}var v=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function x(e){let{className:r,block:n,selectedValue:t,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const r=e.currentTarget,n=l.indexOf(r),i=a[n].value;i!==t&&(c(r),o(i))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},r),children:a.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,i.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function j(e){let{lazy:r,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==i})))})}function y(e){const r=f(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,b.jsx)(x,{...e,...r}),(0,b.jsx)(j,{...e,...r})]})}function k(e){const r=(0,v.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>a});var t=n(96540);const i={},s=t.createContext(i);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);