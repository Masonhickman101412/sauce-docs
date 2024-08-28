"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[45843],{13e3:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(74848),i=t(28453);t(11470),t(19365),t(86025);const r={id:"yaml",title:"Configuring saucectl for API Testing",sidebar_label:"saucectl YAML Configuration"},a=void 0,l={id:"api-testing/integrations/yaml",title:"Configuring saucectl for API Testing",description:"saucectl relies on a YAML specification file to determine exactly which tests to run and how to run them. To customize saucectl to run your API tests, simply modify the properties of the YAML file accordingly. This page defines each of the configuration properties specific to running API tests.",source:"@site/docs/api-testing/integrations/yaml.md",sourceDirName:"api-testing/integrations",slug:"/api-testing/integrations/yaml",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/integrations/yaml",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/integrations/yaml.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"yaml",title:"Configuring saucectl for API Testing",sidebar_label:"saucectl YAML Configuration"},sidebar:"docs",previous:{title:"CI/CD Integration (saucectl)",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/integrations/apitesting-saucectl-integration"},next:{title:"PagerDuty and Webhook Connectors",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/integrations/pagerduty-webhooks"}},o={},c=[{value:"Setting an Alternative Configuration File",id:"setting-an-alternative-configuration-file",level:2},{value:"Example Configuration",id:"example-configuration",level:2},{value:"<code>apiVersion</code>",id:"apiversion",level:2},{value:"<code>kind</code>",id:"kind",level:2},{value:"<code>sauce</code>",id:"sauce",level:2},{value:"<code>region</code>",id:"region",level:3},{value:"<code>tunnel</code>",id:"tunnel",level:3},{value:"<code>name</code>",id:"name",level:4},{value:"<code>owner</code>",id:"owner",level:4},{value:"<code>metadata</code>",id:"metadata",level:3},{value:"<code>env</code>",id:"env",level:2},{value:"<code>rootDir</code>",id:"rootdir",level:2},{value:"<code>suites</code>",id:"suites",level:2},{value:"<code>name</code>",id:"name-1",level:3},{value:"<code>env</code>",id:"env-1",level:3},{value:"<code>useRemoteTests</code>",id:"useremotetests",level:3},{value:"<code>tags</code>",id:"tags",level:3},{value:"<code>testMatch</code>",id:"testmatch",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"saucectl"})," relies on a YAML specification file to determine exactly which tests to run and how to run them. To customize ",(0,s.jsx)(n.code,{children:"saucectl"})," to run your API tests, simply modify the properties of the YAML file accordingly. This page defines each of the configuration properties specific to running API tests."]}),"\n",(0,s.jsx)(n.h2,{id:"setting-an-alternative-configuration-file",children:"Setting an Alternative Configuration File"}),"\n",(0,s.jsxs)(n.p,{children:["By default, ",(0,s.jsx)(n.code,{children:"saucectl"})," looks for the ",(0,s.jsx)(n.code,{children:"config.yml"})," file in the ",(0,s.jsx)(n.code,{children:".sauce"})," folder of your project root, but you can actually specify a different file, or if you are using multiple frameworks or need to configure different sets of tests to run separately, you may choose to have multiple configuration files that you can direct ",(0,s.jsx)(n.code,{children:"saucectl"})," to reference as necessary."]}),"\n",(0,s.jsxs)(n.p,{children:["Use the following configuration at runtime to direct ",(0,s.jsx)(n.code,{children:"saucectl"})," to use any configuration file you choose:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"saucectl run -c ./path/to/{config-file}.yml\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"YAML Required",type:"note",children:(0,s.jsxs)(n.p,{children:["While you can use multiple files of different names or locations to specify your configurations, each file must be a ",(0,s.jsx)(n.code,{children:"*.yml"})," and follow the ",(0,s.jsx)(n.code,{children:"saucectl"})," syntax. Our IDE Integrations (e.g., ",(0,s.jsx)(n.a,{href:"/dev/cli/saucectl/usage/ide/vscode",children:"Visual Studio Code"}),") can help you out by validating the YAML files and provide handy suggestions, so make sure to check them out!"]})}),"\n",(0,s.jsx)(n.h2,{id:"example-configuration",children:"Example Configuration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:"reference",children:"https://github.com/saucelabs/saucectl-apitest-example/blob/master/.sauce/config.yml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Each of the properties supported for running API tests through ",(0,s.jsx)(n.code,{children:"saucectl"})," is defined below."]}),"\n",(0,s.jsx)(n.h2,{id:"apiversion",children:(0,s.jsx)(n.code,{children:"apiVersion"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| REQUIRED | STRING |"})}),"\n",(0,s.jsxs)(n.p,{children:["Identifies the version of the underlying configuration schema. At this time, ",(0,s.jsx)(n.code,{children:"v1alpha"})," is the only supported value."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1alpha\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"kind",children:(0,s.jsx)(n.code,{children:"kind"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| REQUIRED | STRING/ENUM |"})}),"\n",(0,s.jsx)(n.p,{children:"Specifies which framework is associated with the automation tests configured in this specification."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"kind: apitest\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"sauce",children:(0,s.jsx)(n.code,{children:"sauce"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,s.jsx)(n.p,{children:"The parent property containing all settings related to how tests are run and identified in the Sauce Labs platform."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  region: eu-central-1\n  metadata:\n    build: Release $CI_COMMIT_SHORT_SHA\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"region",children:(0,s.jsx)(n.code,{children:"region"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | STRING/ENUM |"})}),"\n",(0,s.jsxs)(n.p,{children:["Specifies through which Sauce Labs data center tests will run. Valid values are: ",(0,s.jsx)(n.code,{children:"us-west-1"})," or ",(0,s.jsx)(n.code,{children:"eu-central-1"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you do not specify a region in your config file, you must set it when running your command with the ",(0,s.jsx)(n.code,{children:"--region"})," flag."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"  region: eu-central-1\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"tunnel",children:(0,s.jsx)(n.code,{children:"tunnel"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"saucectl"})," supports using ",(0,s.jsx)(n.a,{href:"/api-testing/sauce-connect/",children:"Sauce Connect"})," to establish a secure connection with Sauce Labs. To do so, launch a tunnel; then provide the name and owner (if applicable) in this property."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  tunnel:\n    name: your_tunnel_name\n    owner: tunnel_owner_username\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"name",children:(0,s.jsx)(n.code,{children:"name"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"\n",(0,s.jsx)(n.p,{children:"Identifies an active Sauce Connect tunnel to use for secure connectivity to the Sauce Labs cloud."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This property replaces the former ",(0,s.jsx)(n.code,{children:"id"})," property, which is deprecated."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  tunnel:\n    name: your_tunnel_name\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"owner",children:(0,s.jsx)(n.code,{children:"owner"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"\n",(0,s.jsx)(n.p,{children:"Identifies the Sauce Labs user who created the specified tunnel, which is required if the user running the tests did not create the tunnel."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  tunnel:\n    name: your_tunnel_name\n    owner: tunnel_owner_username\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:(0,s.jsx)(n.code,{children:"metadata"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,s.jsx)(n.p,{children:"The set of properties that allows you to provide additional information about your project that helps you distinguish it in the various environments in which it is used and reviewed, and also helps you apply filters to easily isolate tests based on metrics that are meaningful to you, as shown in the following example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"metadata:\n  build: RC 10.4.a\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"env",children:(0,s.jsx)(n.code,{children:"env"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,s.jsx)(n.p,{children:"A property containing one or more environment variables that are global for all tests suites in this configuration. Values set in this global property will overwrite values set for the same environment variables set at the suite level."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"  env:\n    hello: world\n    my_var: $MY_VAR  # You can also pass through existing environment variables through parameter expansion\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"rootdir",children:(0,s.jsx)(n.code,{children:"rootDir"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| REQUIRED | OBJECT |"})}),"\n",(0,s.jsx)(n.p,{children:"The directory where tests will be looked for."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'  rootDir: "./" # Use the current directory\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'  rootDir: "api/tests" # Some other package from within a monorepo\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"suites",children:(0,s.jsx)(n.code,{children:"suites"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| REQUIRED | OBJECT |"})}),"\n",(0,s.jsxs)(n.p,{children:["The set of properties providing details about the test suites to run. May contain multiple suite definitions. See the full ",(0,s.jsx)(n.a,{href:"#example-configuration",children:"example config"})," for an illustration of multiple suite definitions."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"name-1",children:(0,s.jsx)(n.code,{children:"name"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| REQUIRED | STRING |"})}),"\n",(0,s.jsx)(n.p,{children:"The name of the test suite, which will be reflected in the results."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'  - name: "saucy test"\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"env-1",children:(0,s.jsx)(n.code,{children:"env"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,s.jsxs)(n.p,{children:["A property containing one or more environment variables that may be referenced in the tests for this suite. Expanded environment variables are supported. Values set here will be overwritten by values set in the global ",(0,s.jsx)(n.code,{children:"env"})," property."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"  env:\n    hello: world\n    my_var: $MY_VAR\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"useremotetests",children:(0,s.jsx)(n.code,{children:"useRemoteTests"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | STRING/ARRAY |"})}),"\n",(0,s.jsx)(n.p,{children:"Use the tests already stored in Sauce Labs instead of uploading them before execution."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"    useRemoteTests: true\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"tags",children:(0,s.jsx)(n.code,{children:"tags"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| OPTIONAL | STRING/ARRAY |"})}),"\n",(0,s.jsxs)(n.p,{children:["Executes the tests contained in the specified tags. This value is only considered when using ",(0,s.jsx)(n.code,{children:"useRemoteTests: true"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'    tags: ["contract"]\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"testmatch",children:(0,s.jsx)(n.code,{children:"testMatch"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("small",{children:"| REQUIRED | STRING/ARRAY |"})}),"\n",(0,s.jsx)(n.p,{children:"One or more paths to the API Testing folders to run for this suite. Regex values are supported to indicate all or certain directory, etc."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'    testMatch: ["01 Basic Request"]\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var s=t(34164);const i={tabItem:"tabItem_Ymn6"};var r=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var s=t(96540),i=t(34164),r=t(23104),a=t(56347),l=t(205),o=t(57485),c=t(31682),d=t(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[a,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,u]=m({queryString:t,groupId:i}),[x,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.Dv)(t);return[i,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),g=(()=>{const e=c??x;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),i=l[t].value;i!==s&&(c(n),a(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...r,className:(0,i.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function b(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(y,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,j.jsx)(b,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);