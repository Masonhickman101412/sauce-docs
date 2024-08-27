"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[95218],{71757:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(74848),a=t(28453),s=(t(86025),t(11470)),i=t(19365);const l={id:"environment-variables",title:"Using Environment Variables for Authentication Credentials",sidebar_label:"Using Environment Variables"},o=void 0,c={id:"basics/environment-variables",title:"Using Environment Variables for Authentication Credentials",description:"As a best practice, we recommend setting your Sauce Labs authentication credentials as environment variables on your local system, that can then be referenced from in your tests. This provides an extra layer of security for your tests, and also enables other members of your development and testing team to write tests that authenticate against a single account.",source:"@site/docs/basics/environment-variables.md",sourceDirName:"basics",slug:"/basics/environment-variables",permalink:"/sauce-docs/pr-preview/pr-2905/basics/environment-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/environment-variables.md",tags:[],version:"current",lastUpdatedBy:"Lysanne Pinto",lastUpdatedAt:1685581071e3,frontMatter:{id:"environment-variables",title:"Using Environment Variables for Authentication Credentials",sidebar_label:"Using Environment Variables"},sidebar:"docs",previous:{title:"Data Center Endpoints",permalink:"/sauce-docs/pr-preview/pr-2905/basics/data-center-endpoints"},next:{title:"Getting Started",permalink:"/sauce-docs/pr-preview/pr-2905/basics/acct-team-mgmt-hub"}},u={},d=[{value:"What You\u2019ll Need",id:"what-youll-need",level:2},{value:"Setting Up Environment Variables",id:"setting-up-environment-variables",level:2},{value:"Referencing Environment Variables in Test Scripts",id:"referencing-environment-variables-in-test-scripts",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"As a best practice, we recommend setting your Sauce Labs authentication credentials as environment variables on your local system, that can then be referenced from in your tests. This provides an extra layer of security for your tests, and also enables other members of your development and testing team to write tests that authenticate against a single account."}),"\n",(0,r.jsxs)(n.p,{children:["For a list of Sauce Connect Proxy environment variables, see ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/environment-variables",children:"Environment Variables"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"what-youll-need",children:"What You\u2019ll Need"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A Sauce Labs account (",(0,r.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,r.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Your Sauce Labs ",(0,r.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setting-up-environment-variables",children:"Setting Up Environment Variables"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(i.A,{value:"macOS/Linux",label:"macOS and Linux",default:!0,children:["You can persist Sauce Connect Proxy environment variables by adding them to one of your user environment configuration files, such as ",(0,r.jsx)(n.code,{children:".bash_profile"})," or ",(0,r.jsx)(n.code,{children:".zshrc"}),".",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Open ",(0,r.jsx)(n.code,{children:"~/.bash_profile"})," or ",(0,r.jsx)(n.code,{children:"~/.zshrc"})," in your preferred text editor."]}),"\n",(0,r.jsxs)(n.li,{children:["Add the variables","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-zsh",children:'export SAUCE_USERNAME="your Sauce username"\nexport SAUCE_ACCESS_KEY="your Sauce access key"\n'})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Start a new shell or a new terminal."}),"\n",(0,r.jsxs)(n.li,{children:["To confirm that your environment variables are set, enter ",(0,r.jsx)(n.code,{children:"echo $SAUCE_USERNAME"})," in your terminal. The expected response is your username value."]}),"\n"]})]}),(0,r.jsx)(i.A,{value:"Windows",label:"Windows",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Open the Control Panel and click the System icon to open the ",(0,r.jsx)(n.strong,{children:"System Properties"})," dialog."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Environment Variables"})," to open the ",(0,r.jsx)(n.strong,{children:"Environment Variables"})," dialog."]}),"\n",(0,r.jsxs)(n.li,{children:["In the ",(0,r.jsx)(n.strong,{children:"User variables"})," section, click ",(0,r.jsx)(n.strong,{children:"New"})," to open the ",(0,r.jsx)(n.strong,{children:"New System Variable"})," dialog."]}),"\n",(0,r.jsxs)(n.li,{children:["For ",(0,r.jsx)(n.strong,{children:"Variable name"}),", enter ",(0,r.jsx)(n.strong,{children:"SAUCE_USERNAME"})," and for ",(0,r.jsx)(n.strong,{children:"Variable value"}),", enter your Sauce username and then click ",(0,r.jsx)(n.strong,{children:"OK"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Repeat 3-4 to set up the ",(0,r.jsx)(n.strong,{children:"SAUCE_ACCESS_KEY"})," or any other environment variable."]}),"\n",(0,r.jsxs)(n.li,{children:["To confirm that your environment variables are set, enter ",(0,r.jsx)(n.code,{children:"echo $SAUCE_USERNAME"})," in your terminal. The expected response is your username value."]}),"\n"]})})]}),"\n",(0,r.jsx)(n.h2,{id:"referencing-environment-variables-in-test-scripts",children:"Referencing Environment Variables in Test Scripts"}),"\n",(0,r.jsxs)(n.p,{children:["Once you've set up the environment variables for your credentials, you need to reference them in the test scripts that you want to run on Sauce. You can find examples of test scripts that use environment variables for authentication in the demo directory for each language in the ",(0,r.jsx)(n.a,{href:"https://github.com/saucelabs-training",children:"Sauce Labs Training repository"})," on GitHub."]}),"\n",(0,r.jsx)(n.p,{children:"Below are examples of how to set environment variables in a given language/framework:"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"java",label:"Java",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'reference title="Authenticating with Environment Variables"',children:"https://github.com/saucelabs-training/demo-java/blob/docs-1.0/selenium-examples/src/test/java/com/saucedemo/selenium/demo/SeleniumTest.java#L34-L35\n"})})}),(0,r.jsx)(i.A,{value:"nodejs",label:"Node.js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'reference title="Authenticating with Environment Variables"',children:"https://github.com/saucelabs-training/demo-js/blob/docs-1.0/webdriverio/webdriver/examples/w3c/test/configs/wdio.saucelabs.conf.js#L7-L8\n"})})}),(0,r.jsx)(i.A,{value:"python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'reference title="Authenticating with Environment Variables"',children:"https://github.com/saucelabs-training/demo-python/blob/docs-1.0/examples/w3c-examples/test_pytest_chrome.py#L9-L10\n"})})}),(0,r.jsx)(i.A,{value:"ruby",label:"Ruby",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",metastring:'reference title="Authenticating with Environment Variables"',children:"https://github.com/saucelabs-training/demo-ruby/blob/docs-1.0/selenium-examples/rspec/spec/spec_helper.rb#L23-L24\n"})})}),(0,r.jsx)(i.A,{value:"csharp",label:"C#",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",metastring:'reference title="Authenticating with Environment Variables"',children:"https://github.com/saucelabs-training/demo-csharp/blob/docs-1.0/SauceExamples/Common/SauceLabs/SauceUser.cs#L7-L11\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),a=t(18215),s=t(23104),i=t(56347),l=t(205),o=t(57485),c=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=b({queryString:t,groupId:a}),[p,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),f=(()=>{const e=c??p;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(c(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=p(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function w(e){const n=(0,v.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);