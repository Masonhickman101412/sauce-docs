"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[75788],{70246:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var t=s(74848),r=s(28453),a=(s(86025),s(11470)),i=s(19365);const o={id:"faq",title:"Sauce Visual Testing FAQ",sidebar_label:"FAQ"},l=void 0,u={id:"visual-testing/faq",title:"Sauce Visual Testing FAQ",description:"Is Sauce Visual's image comparison pixel-based or DOM-based?",source:"@site/docs/visual-testing/faq.md",sourceDirName:"visual-testing",slug:"/visual-testing/faq",permalink:"/sauce-docs/pr-preview/pr-2907/visual-testing/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual-testing/faq.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724771321e3,frontMatter:{id:"faq",title:"Sauce Visual Testing FAQ",sidebar_label:"FAQ"},sidebar:"docs",previous:{title:"Diffing Engines",permalink:"/sauce-docs/pr-preview/pr-2907/visual-testing/diffing-engines"},next:{title:"Test Configuration Options",permalink:"/sauce-docs/pr-preview/pr-2907/dev/test-configuration-options"}},c={},d=[{value:"Is Sauce Visual&#39;s image comparison pixel-based or DOM-based?",id:"is-sauce-visuals-image-comparison-pixel-based-or-dom-based",level:3},{value:"Does Sauce Visual support &quot;ignore regions&quot;?",id:"does-sauce-visual-support-ignore-regions",level:3},{value:"Can I integrate this into CI/CD testing?",id:"can-i-integrate-this-into-cicd-testing",level:3},{value:"What languages/frameworks will be supported at launch?",id:"what-languagesframeworks-will-be-supported-at-launch",level:3},{value:"What subsequent languages/frameworks will be supported?",id:"what-subsequent-languagesframeworks-will-be-supported",level:3},{value:"When will it support &quot;my favorite framework&quot;?",id:"when-will-it-support-my-favorite-framework",level:3},{value:"How to use Sauce Visual behind a Proxy?",id:"how-to-use-sauce-visual-behind-a-proxy",level:3},{value:"Setting up the proxy for Sauce Visual",id:"setting-up-the-proxy-for-sauce-visual",level:4}];function h(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"is-sauce-visuals-image-comparison-pixel-based-or-dom-based",children:"Is Sauce Visual's image comparison pixel-based or DOM-based?"}),"\n",(0,t.jsxs)(n.p,{children:["The current implementation is Pixel-based by default, while DOM-based diffing can be turned on by setting the flag ",(0,t.jsx)(n.code,{children:"captureDom"}),"  to ",(0,t.jsx)(n.code,{children:"true"}),". Read more in our integration guides."]}),"\n",(0,t.jsx)(n.h3,{id:"does-sauce-visual-support-ignore-regions",children:'Does Sauce Visual support "ignore regions"?'}),"\n",(0,t.jsx)(n.p,{children:'Yes, "ignore regions" are supported. Currently, you can define these regions in code by specifying the locator of a Web Element or by setting the coordinates of a rectangle.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"  // This rectangular area would be ignored, no  pixel\n  // changes will be diffed in this zone.\n  IgnoreRegion ignoreRegion = new IgnoreRegion(200,200,100,100);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"can-i-integrate-this-into-cicd-testing",children:"Can I integrate this into CI/CD testing?"}),"\n",(0,t.jsx)(n.p,{children:"Yes, Sauce Visual is 100% API-based and natively utilizes the same tools as the rest of the Sauce product line. When integrating Visual testing into your scripts, you can execute them just like any other scripts."}),"\n",(0,t.jsx)(n.h3,{id:"what-languagesframeworks-will-be-supported-at-launch",children:"What languages/frameworks will be supported at launch?"}),"\n",(0,t.jsxs)(n.p,{children:["Sauce Visual will support the following languages/frameworks at launch: Selenium/Appium/Cypress, WebDriverIO, Java JUnit/TestNG, and JavaScript. You can find examples of some of these at ",(0,t.jsx)(n.a,{href:"https://github.com/saucelabs/visual-examples",children:"https://github.com/saucelabs/visual-examples"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"what-subsequent-languagesframeworks-will-be-supported",children:"What subsequent languages/frameworks will be supported?"}),"\n",(0,t.jsxs)(n.p,{children:["Support for additional languages/frameworks will be determined based on demand. Frameworks like Playwright, TestCafe, XCUIT, Espresso, etc., are currently under consideration. Contributions are encouraged. Check out the ",(0,t.jsx)(n.a,{href:"https://github.com/saucelabs/visual-examples",children:"examples project"}),". If you create your own public library or binding, feel free to add another example to that project."]}),"\n",(0,t.jsx)(n.h3,{id:"when-will-it-support-my-favorite-framework",children:'When will it support "my favorite framework"?'}),"\n",(0,t.jsxs)(n.p,{children:["The support for any framework depends on the client-side implementation using the underlying API. If you require an SDK, submit a new idea at ",(0,t.jsx)(n.a,{href:"https://portal.productboard.com/sauceprod/2-sauce-labs-portal/tabs/4-under-consideration/submit-idea",children:"Productboard"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-use-sauce-visual-behind-a-proxy",children:"How to use Sauce Visual behind a Proxy?"}),"\n",(0,t.jsx)(n.p,{children:"When using Sauce Visual, the client libraries need to connect with Sauce Labs APIs. This connection is essential for uploading snapshots of your application and performing visual difference analysis. If your computer is set up to access the internet through a proxy, you will need to go through the setup described below. This setup is required to ensure that Sauce Visual can communicate with Sauce Labs APIs through your proxy."}),"\n",(0,t.jsx)(n.h4,{id:"setting-up-the-proxy-for-sauce-visual",children:"Setting up the proxy for Sauce Visual"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsxs)(i.A,{value:"js",label:"Javascript (WebdriverIO, Cypress, Storybook etc.)",default:!0,children:[(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Identify your proxy URL"}),": This URL is typically provided by your organization's IT department. It could look like one of these examples:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"http://my.org.proxy:3128"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"http://user:pass@my.org.proxy:3128"})," (if authentication is required)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"socks://username:password@myorgsocksproxy.com:9050"})," (for SOCKS proxy)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Configure the environment HTTPS_PROXY variable"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"On Windows"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Open the Start Search, type in "env", and choose "Edit the system environment variables".'}),"\n",(0,t.jsx)(n.li,{children:'In the System Properties window, click the "Environment Variables..." button.'}),"\n",(0,t.jsx)(n.li,{children:'Under "System variables", click "New..." to create a new variable.'}),"\n",(0,t.jsxs)(n.li,{children:["Enter ",(0,t.jsx)(n.code,{children:"HTTPS_PROXY"})," as the variable name and your proxy URL as the value."]}),"\n",(0,t.jsx)(n.li,{children:"Click OK to save and exit."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"On macOS/Linux"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open a terminal."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the export command to set the variable. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export HTTPS_PROXY=http://myorgproxy:3128\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To make this change permanent, add the export command to your shell's profile script (e.g., ",(0,t.jsx)(n.code,{children:".bash_profile"})," or ",(0,t.jsx)(n.code,{children:".bashrc"}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),(0,t.jsx)(n.strong,{children:"NOTE"}),": For WebdriverIO, make sure to check proxy settings described in the ",(0,t.jsx)(n.a,{href:"https://webdriver.io/docs/proxy/#proxy-between-driver-and-test",children:"official WebdriverIO documentation"}),".",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Run your Sauce Visual job"}),": After setting the ",(0,t.jsx)(n.code,{children:"HTTPS_PROXY"})," variable, you can proceed to run your Sauce Visual tests as usual."]}),"\n"]})]}),(0,t.jsxs)(i.A,{value:"java",label:"Java (Selenium WebDriver)",children:[(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Identify your proxy URL"}),": This URL is typically provided by your organization's IT department. It could look like one of these examples:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"http://my.org.proxy:3128"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"http://user:pass@my.org.proxy:3128"})," (if authentication is required)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"socks://username:password@myorgsocksproxy.com:9050"})," (for SOCKS proxy)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Run your Sauce Visual jobs using proxy"}),":\nSauce Visual Java client is capable of using system-wide proxy settings without any additional setup. If you'd like to use a custom proxy instead,\nyou need to set the ",(0,t.jsx)(n.a,{href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/net/doc-files/net-properties.html",children:"relevant Java system properties"})," when running your tests. For example:"]}),"\n"]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./mvnw clean test -Dtest=InventoryTest -Dhttps.proxyHost=my.org.proxy -Dhttps.proxyPort=3128\n"})}),"Since Sauce Visual interacts with endpoints using https protocol, you'll need to use either HTTPS or SOCKS properties."]})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var t=s(18215);const r={tabItem:"tabItem_Ymn6"};var a=s(74848);function i(e){let{children:n,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>w});var t=s(96540),r=s(18215),a=s(23104),i=s(56347),o=s(205),l=s(57485),u=s(31682),c=s(89466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const r=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function g(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,a=h(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[u,d]=m({queryString:s,groupId:r}),[g,x]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,c.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),b=(()=>{const e=u??g;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=s(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function v(e){let{className:n,block:s,selectedValue:t,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const n=e.currentTarget,s=l.indexOf(n),r=o[s].value;r!==t&&(u(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function y(e){let{lazy:n,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(y,{...e,...n})]})}function w(e){const n=(0,x.A)();return(0,f.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(96540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);