"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[65833],{95038:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(74848),r=t(28453);t(11470),t(19365),t(86025);const s={id:"client-getting-started",title:"Coroner Client - Getting Started",sidebar_label:"Client Getting Started",description:"Submit snapshot files (.btt files) to the object store (coronerd)."},i=void 0,a={id:"error-reporting/advanced/coroner/client-getting-started",title:"Coroner Client - Getting Started",description:"Submit snapshot files (.btt files) to the object store (coronerd).",source:"@site/docs/error-reporting/advanced/coroner/client-getting-started.md",sourceDirName:"error-reporting/advanced/coroner",slug:"/error-reporting/advanced/coroner/client-getting-started",permalink:"/sauce-docs/pr-preview/pr-2907/error-reporting/advanced/coroner/client-getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/advanced/coroner/client-getting-started.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724771321e3,frontMatter:{id:"client-getting-started",title:"Coroner Client - Getting Started",sidebar_label:"Client Getting Started",description:"Submit snapshot files (.btt files) to the object store (coronerd)."},sidebar:"backtrace",previous:{title:"Server Advanced",permalink:"/sauce-docs/pr-preview/pr-2907/error-reporting/advanced/coroner/server-advanced"},next:{title:"Client Usage",permalink:"/sauce-docs/pr-preview/pr-2907/error-reporting/advanced/coroner/client-usage"}},c={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Configuration Using CA-Trusted Certificates",id:"configuration-using-ca-trusted-certificates",level:3},{value:"Configuration Using Self-Signed Certificates",id:"configuration-using-self-signed-certificates",level:3},{value:"Configuration for Unsecured Communications",id:"configuration-for-unsecured-communications",level:3},{value:"Uploading Individual Snapshots with <code>coroner put</code>",id:"uploading-individual-snapshots-with-coroner-put",level:3},{value:"Uploading Snapshots Automatically with <code>coroner daemon</code>",id:"uploading-snapshots-automatically-with-coroner-daemon",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"coroner"})," client tool enables you to submit snapshot files (.btt files) to the object store (coronerd). To perform command-line querying of the Backtrace object store, use the ",(0,o.jsx)(n.a,{href:"https://documentation.backtrace.io/product_product_morgue/",children:"morgue tool"})," instead."]}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["By default, the coroner client uses ",(0,o.jsx)(n.code,{children:"~/.coroner.cf"})," as its configuration file. You can specify alternate configurations by passing the ",(0,o.jsx)(n.code,{children:"-c"})," flag to ",(0,o.jsx)(n.code,{children:"coroner"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"coroner"})," configuration file has two key sections: ",(0,o.jsx)(n.code,{children:"universe"})," and ",(0,o.jsx)(n.code,{children:"token"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.code,{children:"universe"}),", you specify information about the name and URL of your ",(0,o.jsx)(n.code,{children:"coronerd"})," universe.\nIn ",(0,o.jsx)(n.code,{children:"token"}),", you associate a friendly token name with the value of a token you create with the object store web UI. This way, you can use the shorter friendly name in ",(0,o.jsx)(n.code,{children:"coroner"})," commands."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"universe"})," section contains the following settings:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"name"}),": The name of the top-level universe you selected when installing coronerd (typically your organization name)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"write"}),": The full URL to the coronerd submission endpoint (typically ",(0,o.jsx)(n.a,{href:"https://your.server.com:6098",children:"https://your.server.com:6098"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"read"}),": The address and port of the coronerd read endpoint (typically your.server.com:4097 - leave off the protocol)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"read.ssl.enabled"}),": Set this to ",(0,o.jsx)(n.code,{children:"true"})," to enable secure communications over the read endpoint (",(0,o.jsx)(n.code,{children:"false"})," if omitted)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"read.ssl.method"}),": The encryption method for secure communications (typically TLSv12)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"curl.ssl_verifyhost"}),": Set this to ",(0,o.jsx)(n.code,{children:"false"})," to skip certificate verification for secure communications. Use with self-signed certificates."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"curl.ssl_verifypeer"}),": Set this to ",(0,o.jsx)(n.code,{children:"false"})," to skip certificate verification for secure communications. Use with self-signed certificates."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Below are some example configurations for coroner for common scenarios:"}),"\n",(0,o.jsx)(n.h3,{id:"configuration-using-ca-trusted-certificates",children:"Configuration Using CA-Trusted Certificates"}),"\n",(0,o.jsxs)(n.p,{children:["For server-side configuration with CA-trusted certificates, refer to: ",(0,o.jsx)(n.a,{href:"https://documentation.backtrace.io/coronerd_install#ca-trusted-certificates",children:"Database Install with CA-Trusted Certificates"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"[universe]\nname = myuniversename\nwrite = https://:6098\nread = :4097\nread.ssl.enabled = true\nread.ssl.method = TLSv12\n\n# Below, you will associate the tokens you created in the coroner console (token_id)\n# with a concise name (token_name). You will use these token names when submitting\n# snapshots to coroner later on.\n[token]\n=\n"})}),"\n",(0,o.jsx)(n.h3,{id:"configuration-using-self-signed-certificates",children:"Configuration Using Self-Signed Certificates"}),"\n",(0,o.jsxs)(n.p,{children:["For server-side configuration with self-signed certificates, refer to: ",(0,o.jsx)(n.a,{href:"https://documentation.backtrace.io/coronerd_install#self-signed-certificates",children:"Database Install with Self-Signed Certificates"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"[universe]\nname = myuniversename\nwrite = https://:6098\nread = :4097\nread.ssl.enabled = true\nread.ssl.method = TLSv12\ncurl.ssl_verifyhost = false\ncurl.ssl_verifypeer = false\n\n# Below, you will associate the tokens you created in the coroner console (token_id)\n# with a concise name (token_name). You will use these token names when submitting\n# snapshots to coroner later on.\n[token]\n=\n"})}),"\n",(0,o.jsx)(n.h3,{id:"configuration-for-unsecured-communications",children:"Configuration for Unsecured Communications"}),"\n",(0,o.jsxs)(n.p,{children:["For server-side configuration with no SSL/TLS, refer to: ",(0,o.jsx)(n.a,{href:"https://documentation.backtrace.io/coronerd_install#no-ssltls",children:"Database Install with No SSL/TLS"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"[universe]\nname = myuniversename\nwrite = http://:6097\nread = :4097\n\n# Below, you will associate the tokens you created in the coroner console (token_id)\n# with a concise name (token_name). You will use these token names when submitting\n# snapshots to coroner later on.\n[token]\n=\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"uploading-individual-snapshots-with-coroner-put",children:["Uploading Individual Snapshots with ",(0,o.jsx)(n.code,{children:"coroner put"})]}),"\n",(0,o.jsxs)(n.p,{children:["The most common use for ",(0,o.jsx)(n.code,{children:"coroner"})," is to submit individual snapshots to the object store. This is how the ",(0,o.jsx)(n.code,{children:"coresnap"})," utility uploads the snapshots it creates."]}),"\n",(0,o.jsx)(n.p,{children:"To upload a snapshot, use the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ coroner put projectname tokenname /path/to/snapshot.btt\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can optionally include the ",(0,o.jsx)(n.code,{children:"-c"})," flag to specify a coroner configuration file, and the ",(0,o.jsx)(n.code,{children:"-u"})," flag to unlink the snapshot file when the upload is complete."]}),"\n",(0,o.jsxs)(n.h3,{id:"uploading-snapshots-automatically-with-coroner-daemon",children:["Uploading Snapshots Automatically with ",(0,o.jsx)(n.code,{children:"coroner daemon"})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"coroner daemon"})," mode allows coroner to monitor a list of folders for snapshot files continuously. Whenever a snapshot is saved to one of these folders, ",(0,o.jsx)(n.code,{children:"coroner"})," will automatically upload it to the object store using a specified token and then remove it. It helps if you have a process that saves snapshots to a central location and you want to upload them automatically."]}),"\n",(0,o.jsxs)(n.p,{children:["To configure ",(0,o.jsx)(n.code,{children:"daemon"})," mode, add a section to your ",(0,o.jsx)(n.code,{children:"coroner.cf"})," file called ",(0,o.jsx)(n.code,{children:"[daemon]"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"[daemon]\nproj1.root=/home/jdoe/workspace/proj1\nproj1.token=proj1\nproj2.root=/home/jdoe/workspace/proj2\nproj2.token=proj2\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Each ",(0,o.jsx)(n.code,{children:"root"})," setting specifies the path to a folder for ",(0,o.jsx)(n.code,{children:"coroner"})," to watch, and the corresponding ",(0,o.jsx)(n.code,{children:"token"})," specifies the friendly token name to use for the upload."]}),"\n",(0,o.jsxs)(n.p,{children:["In the example above, when a snapshot file is saved to ",(0,o.jsx)(n.code,{children:"/home/jdoe/workspace/proj1"}),", ",(0,o.jsx)(n.code,{children:"coroner daemon"})," will automatically run the equivalent of ",(0,o.jsx)(n.code,{children:"coroner put proj1 proj1 /home/jdoe/workspace/proj1/file.btt"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Once configured, run ",(0,o.jsx)(n.code,{children:"coroner daemon"})," and leave it running."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var o=t(18215);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var o=t(96540),r=t(18215),s=t(23104),i=t(56347),a=t(205),c=t(57485),l=t(31682),d=t(89466);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[i,c]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[l,u]=f({queryString:t,groupId:r}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,o.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),j=(()=>{const e=l??m;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{j&&c(j)}),[j]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function b(e){let{className:n,block:t,selectedValue:o,selectValue:i,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=a[t].value;r!==o&&(l(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,v.jsx)(b,{...e,...n}),(0,v.jsx)(x,{...e,...n})]})}function w(e){const n=(0,g.A)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);