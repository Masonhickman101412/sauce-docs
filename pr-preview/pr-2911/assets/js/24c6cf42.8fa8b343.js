"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[91371],{53977:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(74848),o=t(28453),s=(t(86025),t(11470)),i=t(19365);const r={id:"yaml-config",title:"Sauce Connect Tunnel YAML File Configuration",sidebar_label:"YAML File Configuration"},c=void 0,l={id:"secure-connections/sauce-connect/setup-configuration/yaml-config",title:"Sauce Connect Tunnel YAML File Configuration",description:"The standard way to launch a Sauce Connect Proxy tunnel is to execute a single command line comprised of all required flags and any optional flags you want to use to customize tunnel behavior.",source:"@site/docs/secure-connections/sauce-connect/setup-configuration/yaml-config.md",sourceDirName:"secure-connections/sauce-connect/setup-configuration",slug:"/secure-connections/sauce-connect/setup-configuration/yaml-config",permalink:"/sauce-docs/pr-preview/pr-2911/secure-connections/sauce-connect/setup-configuration/yaml-config",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect/setup-configuration/yaml-config.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"yaml-config",title:"Sauce Connect Tunnel YAML File Configuration",sidebar_label:"YAML File Configuration"},sidebar:"docs",previous:{title:"Basic Setup",permalink:"/sauce-docs/pr-preview/pr-2911/secure-connections/sauce-connect/setup-configuration/basic-setup"},next:{title:"Environment Variables",permalink:"/sauce-docs/pr-preview/pr-2911/secure-connections/sauce-connect/setup-configuration/environment-variables"}},u={},d=[{value:"Use Cases",id:"use-cases",level:2},{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Using the YAML Config File",id:"using-the-yaml-config-file",level:2},{value:"More Information",id:"more-information",level:2}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The standard way to launch a Sauce Connect Proxy tunnel is to execute a single command line comprised of all ",(0,a.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#main",children:"required flags"})," and any ",(0,a.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/",children:"optional flags"})," you want to use to customize tunnel behavior."]}),"\n",(0,a.jsxs)(n.p,{children:["Another way to launch a tunnel is to fill out our YAML config file template and then use the ",(0,a.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--config-file",children:(0,a.jsx)(n.code,{children:"-c (--config-file)"})})," flag in your command line to specify the YAML file path. Instead of writing out all tunnel configuration options on your command line, you'd just modify the properties in your YAML file."]}),"\n",(0,a.jsx)(n.p,{children:"Config file may contain any Sauce Connect Proxy CLI flag. It may also contain comments that could help make its content more readable, for example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"---\nregion: 'us-west'\nuser: 'janedoe-sauce'\napi-key: 'xxxx-xxx-xxx'\n# this is my log file for SC I use for Mac OS tests.\nlogfile: '/tmp/sc-mac.log'\n# this is the tunnel I use for Mac OS tests\ntunnel-identifier: 'my-macos'\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["It's possible to pass the same command-line arguments on the command line, through a YAML config file, and as ",(0,a.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/environment-variables/",children:"environment variables"}),".\nWhen the same argument is passed through multiple methods, the order of precedence is as follows (from highest to lowest): command-line option, environment variable, YAML config file."]})}),"\n",(0,a.jsxs)(n.p,{children:["For the reference, below is the complete config file that contains the latest Sauce Connect Proxy version defaults.\nTo view the description for a YAML file property, look up the corresponding ",(0,a.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/",children:"CLI flag"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'$ cat /sc-4.9.1-osx/config_examples/config.yml\napi-key: ""\nauth: []\ncainfo: ""\ncapath: ""\ndirect-domains: []\ndns: []\nfast-fail-regexps: []\nlog-stats: 0\nlogfile: ""\nmax-logsize: 0\nstatus-address: "localhost:0"\nno-autodetect: false\nno-proxy-caching: false\ntunnel-pool: false\nno-ssl-bump-domains: []\npac: ""\npidfile: ""\nproxy: ""\nproxy-tunnel: false\nproxy-userpwd: ""\nreadyfile: ""\nregion: "us-west"\nrest-url: ""\nscproxy-port: 0\nscproxy-read-limit: 0\nscproxy-write-limit: 0\nse-port: 0\nshared-tunnel: false\ntunnel-domains: []\ntunnel-name: ""\nuser: ""\nverbose: 0\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["You can find a complete configuration file example in the extracted .zip file content in ",(0,a.jsx)(n.code,{children:"config_examples"})," folder (see ",(0,a.jsx)(n.a,{href:"/secure-connections/sauce-connect/installation/",children:"the download instructions"}),")."]})}),"\n",(0,a.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,a.jsx)(n.p,{children:"We recommend using a YAML config file in production environments."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Facilitates tracking tunnel configuration changes because they're all included in a single YAML file."}),"\n",(0,a.jsx)(n.li,{children:"Facilitates management of potentially long CLI options such as tunnel-domains and direct-domains."}),"\n",(0,a.jsx)(n.li,{children:"Secures Sauce Connect Proxy credentials with tighter access control."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["See ",(0,a.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/basic-setup/#what-youll-need",children:"Sauce Connect Proxy Basic Setup requirements"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"using-the-yaml-config-file",children:"Using the YAML Config File"}),"\n",(0,a.jsxs)(n.p,{children:["To launch a tunnel using a ",(0,a.jsx)(n.strong,{children:"config.yml"})," file option."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Create Sauce Connect Proxy config file in any location, for example: ",(0,a.jsx)(n.code,{children:"~/sc/config.yml"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"Enter values for the properties you'd like to use."}),"\n",(0,a.jsxs)(n.li,{children:["Navigate to the Sauce Connect Proxy client bin folder as described in ",(0,a.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/basic-setup#basic-setup-with-a-test-script",children:"Basic Setup with a Test Script"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"Use the following command line to start Sauce Connect Proxy with the configuration from your YAML file."}),"\n"]}),"\n",(0,a.jsxs)(s.A,{defaultValue:"Mac/Linux",values:[{label:"Mac/Linux",value:"Mac/Linux"},{label:"Windows",value:"Windows"}],children:[(0,a.jsx)(i.A,{value:"Mac/Linux",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"./sc -c ~/sc/config.yml\n"})})}),(0,a.jsx)(i.A,{value:"Windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sc -c %HOMEPATH%\\sc\\config.yml\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/secure-connections/sauce-connect/quickstart",children:"Sauce Connect Proxy Quickstart"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy",children:"Sauce Connect Proxy CLI"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var a=t(34164);const o={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(96540),o=t(34164),s=t(23104),i=t(56347),r=t(205),c=t(57485),l=t(31682),u=t(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=f(e),[i,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[l,d]=p({queryString:t,groupId:o}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,u.Dv)(t);return[o,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),x=(()=>{const e=l??m;return h({value:e,tabValues:s})?e:null})();(0,r.A)((()=>{x&&c(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function b(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:r}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),o=r[t].value;o!==a&&(l(n),i(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,o.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=m(e);return(0,y.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,y.jsx)(b,{...n,...e}),(0,y.jsx)(v,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,y.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(96540);const o={},s=a.createContext(o);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);