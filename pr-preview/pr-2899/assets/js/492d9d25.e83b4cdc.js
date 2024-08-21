"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[12088],{90196:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=t(74848),i=t(28453),s=(t(86025),t(11470)),a=t(19365);const o={id:"selenium-grid",title:"Selenium Grid and Sauce Labs",sidebar_label:"Selenium Grid"},l=void 0,d={id:"web-apps/automated-testing/selenium/selenium-grid",title:"Selenium Grid and Sauce Labs",description:"Testing new features and bug fixes is vital to enable quick software development. Selenium Grid helps with this by allowing concurrent execution of WebDriver tests across different browsers, platforms, and devices on multiple remote machines.",source:"@site/docs/web-apps/automated-testing/selenium/selenium-grid.md",sourceDirName:"web-apps/automated-testing/selenium",slug:"/web-apps/automated-testing/selenium/selenium-grid",permalink:"/sauce-docs/pr-preview/pr-2899/web-apps/automated-testing/selenium/selenium-grid",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/automated-testing/selenium/selenium-grid.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"selenium-grid",title:"Selenium Grid and Sauce Labs",sidebar_label:"Selenium Grid"},sidebar:"docs",previous:{title:"Demo Scripts",permalink:"/sauce-docs/pr-preview/pr-2899/web-apps/automated-testing/selenium/sample-scripts"},next:{title:"Using Cypress",permalink:"/sauce-docs/pr-preview/pr-2899/web-apps/automated-testing/cypress"}},c={},u=[{value:"What You&#39;ll Learn",id:"what-youll-learn",level:2},{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"How Selenium Grid Works",id:"how-selenium-grid-works",level:2},{value:"Running Tests on Selenium Grid",id:"running-tests-on-selenium-grid",level:2},{value:"Extending Selenium Grid with Sauce",id:"extending-selenium-grid-with-sauce",level:2},{value:"1. Create a <code>toml</code> Configuration File",id:"1-create-a-toml-configuration-file",level:3},{value:"2. Add a Node to your Local Grid",id:"2-add-a-node-to-your-local-grid",level:3},{value:"3. Create a Remote Session Request",id:"3-create-a-remote-session-request",level:3},{value:"Moving from Selenium Grid to Sauce",id:"moving-from-selenium-grid-to-sauce",level:2},{value:"More Information",id:"more-information",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Testing new features and bug fixes is vital to enable quick software development. Selenium Grid helps with this by allowing concurrent execution of WebDriver tests across different browsers, platforms, and devices on multiple remote machines."}),"\n",(0,r.jsx)(n.p,{children:"However, building your own testing infrastructure with Selenium Grid becomes challenging over time due to the continued releases of new browser versions, browser drivers, operating systems, and mobile devices. You'll need to invest a large amount of time to set up a fine tuned Selenium Grid that supports cross browser, cross platform, and cross device testing."}),"\n",(0,r.jsx)(n.p,{children:"By executing your tests on Sauce Labs, in addition to having a solid testing infrastructure, you can also benefit from the following features:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Live debugging, video recording, command tracing, screenshots, and exception highlighting to enable easy debugging on the Sauce Labs ",(0,r.jsx)(n.a,{href:"/test-results/viewing-test-results/",children:"tests results dashboard"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Sharing test results securely between team members by configuring ",(0,r.jsx)(n.a,{href:"/basics/acct-team-mgmt-hub/",children:"users and teams"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Understanding how your application renders on every device and operating system by analyzing results from ",(0,r.jsx)(n.a,{href:"/performance/",children:"Front-End Performance Testing"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Interpreting test results over time and identifying failure patterns across different platforms with ",(0,r.jsx)(n.a,{href:"/insights/",children:"Insights"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Integrating your Sauce Labs test suite with ",(0,r.jsx)(n.a,{href:"/basics/integrations-overview/",children:"CI/CD platforms"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"what-youll-learn",children:"What You'll Learn"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"How to extend Selenium Grid with Sauce Labs."}),"\n",(0,r.jsx)(n.li,{children:"How to move from Selenium Grid to Sauce Labs."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A Sauce Labs account (",(0,r.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,r.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,r.jsx)(n.li,{children:"Java 11 or higher installed on every machine part of Selenium Grid."}),"\n",(0,r.jsx)(n.li,{children:"Browsers and browser drivers you want to support installed on each node."}),"\n",(0,r.jsxs)(n.li,{children:["Selenium Server JAR file from the ",(0,r.jsx)(n.a,{href:"https://github.com/SeleniumHQ/selenium/releases/latest",children:"latest release"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"how-selenium-grid-works",children:"How Selenium Grid Works"}),"\n",(0,r.jsxs)(n.p,{children:["Selenium is built on a ",(0,r.jsx)(n.a,{href:"/web-apps/automated-testing/selenium/#architecture",children:"client-server architecture"}),", where Selenium Grid is the server. For details on how Selenium Grid works, its components, and how to set it up, see the ",(0,r.jsx)(n.a,{href:"https://www.selenium.dev/documentation/grid/getting_started/",children:"Selenium Grid Documentation"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"running-tests-on-selenium-grid",children:"Running Tests on Selenium Grid"}),"\n",(0,r.jsx)(n.p,{children:"After following the steps to get Selenium Grid up and running, tests that run locally need to be modified to run remotely on Selenium Grid."}),"\n",(0,r.jsxs)(n.p,{children:["Below is a Java example where code is modified from using a local driver to use a remote driver. For extended examples on remote drivers, see ",(0,r.jsx)(n.a,{href:"/web-apps/automated-testing/selenium/#step-1-create-a-remote-session",children:"Step 1: Create a Remote Session"}),"."]}),"\n",(0,r.jsx)(n.admonition,{title:"Check your Grid URL",type:"note",children:(0,r.jsxs)(n.p,{children:["The example assumes that your Grid is running on ",(0,r.jsx)(n.code,{children:"http://localhost:4444"}),". Replace the URL with the one where your Grid is actually running."]})}),"\n",(0,r.jsxs)(s.A,{defaultValue:"local",values:[{label:"Local execution",value:"local"},{label:"Remote execution",value:"remote"}],children:[(0,r.jsx)(a.A,{value:"local",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Local execution"',children:'WebDriver driver = new ChromeDriver();\ndriver.get("https://www.saucedemo.com");\ndriver.findElement(By.id("user-name")).sendKeys("standard_user");\ndriver.findElement(By.id("password")).sendKeys("secret_sauce");\ndriver.findElement(By.id("login-button")).click();\ndriver.quit();\n'})})}),(0,r.jsx)(a.A,{value:"remote",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Remote execution"',children:'WebDriver driver = new RemoteWebDriver(new URL("http://localhost:4444"), new ChromeOptions());\ndriver.get("https://www.saucedemo.com");\ndriver.findElement(By.id("user-name")).sendKeys("standard_user");\ndriver.findElement(By.id("password")).sendKeys("secret_sauce");\ndriver.findElement(By.id("login-button")).click();\ndriver.quit();\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"extending-selenium-grid-with-sauce",children:"Extending Selenium Grid with Sauce"}),"\n",(0,r.jsx)(n.p,{children:"Setting up your own Grid can be simple at the beginning but as usage grows, and more platforms and browsers are needed, you will find yourself in the situation where a bigger infrastructure needs to be supported. Adding macOS and Safari or mobile devices and emulators can be challenging due to the hardware costs and very diverse requirements. Extending Selenium Grid with Sauce Labs is an excellent solution to add capacity and support more use cases."}),"\n",(0,r.jsx)(n.p,{children:"Selenium Grid has a Relay feature that enables a local Grid to add Sauce Labs as an extra Node. In this way, Grid can enable more coverage to platforms and versions not present locally."}),"\n",(0,r.jsxs)(n.h3,{id:"1-create-a-toml-configuration-file",children:["1. Create a ",(0,r.jsx)(n.code,{children:"toml"})," Configuration File"]}),"\n",(0,r.jsxs)(n.p,{children:["A configuration file in ",(0,r.jsx)(n.a,{href:"https://toml.io/en/",children:(0,r.jsx)(n.code,{children:"toml"})})," format is needed to setup a Node and relay WebDriver sessions to Sauce Labs. For example, if your local Selenium Grid supports Chrome and Firefox on Linux, and you want to add support for Windows 11 and macOS, and also iOS and Android devices, you can configure those extra capabilities in the ",(0,r.jsx)(n.code,{children:"toml"})," configuration file."]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsxs)("summary",{children:[(0,r.jsx)("strong",{children:"Click here"})," to see an example ",(0,r.jsx)("code",{children:"toml"})," configuration file."]}),"For example, to support the following configuration settings:",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"OS"}),(0,r.jsx)(n.th,{children:"Browser/Device"}),(0,r.jsx)(n.th,{children:"Version"}),(0,r.jsx)(n.th,{children:"Concurrent sessions"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Windows 11"}),(0,r.jsx)(n.td,{children:"Chrome"}),(0,r.jsx)(n.td,{children:"104"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Windows 10"}),(0,r.jsx)(n.td,{children:"Firefox"}),(0,r.jsx)(n.td,{children:"103"}),(0,r.jsx)(n.td,{children:"10"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"macOS Monterey (12)"}),(0,r.jsx)(n.td,{children:"Safari"}),(0,r.jsx)(n.td,{children:"15"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"iOS 15.4"}),(0,r.jsx)(n.td,{children:"Safari on Simulator"}),(0,r.jsx)(n.td,{children:"iPhone 13"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Android 12"}),(0,r.jsx)(n.td,{children:"Chrome on Emulator"}),(0,r.jsx)(n.td,{children:"Pixel 6 Pro"}),(0,r.jsx)(n.td,{children:"2"})]})]})]}),"Here is how the ",(0,r.jsx)(n.code,{children:"config.toml"})," would look like:",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[node]\ndetect-drivers = false\n\n[relay]\nurl = "https://ondemand.us-west-1.saucelabs.com:443/wd/hub"\nconfigs = [\n  "5", \'{"browserName": "chrome", "platformName": "Windows 11", "browserVersion": "104"}\',\n  "10", \'{"browserName": "firefox", "platformName": "Windows 10", "browserVersion": "103"}\',\n  "5", \'{"browserName": "safari", "platformName": "macOS 12", "browserVersion": "15"}\',\n  "2", \'{"browserName": "safari", "platformName": "iOS", "appium:platformVersion": "15.4", "appium:deviceName": "iPhone 13 Simulator"}\',\n  "2", \'{"browserName": "chrome", "platformName": "android", "appium:platformVersion": "12.0", "appium:deviceName": "Google Pixel 6 Pro GoogleAPI Emulator"}\'\n]\n'})}),(0,r.jsx)(n.admonition,{title:"Sauce Labs endpoint URL",type:"note",children:(0,r.jsxs)(n.p,{children:["The example file shows the US West data center. See the different ",(0,r.jsx)(n.a,{href:"/basics/data-center-endpoints/",children:"endpoints"})," if you want to use another region."]})})]}),"\n",(0,r.jsx)(n.h3,{id:"2-add-a-node-to-your-local-grid",children:"2. Add a Node to your Local Grid"}),"\n",(0,r.jsx)(n.p,{children:"Finally, adding a new Node to your local Selenium Grid is possible through the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"java -jar selenium-server-<version>.jar node --config config.toml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["With that, you will be able to send test requests to your local Grid and when the capabilities match, they will be redirected to Sauce Labs. Extra capabilities in ",(0,r.jsx)(n.code,{children:"sauce:options"})," are also supported to have better readability on the test reports page at Sauce Labs."]}),"\n",(0,r.jsx)(n.h3,{id:"3-create-a-remote-session-request",children:"3. Create a Remote Session Request"}),"\n",(0,r.jsx)(n.p,{children:"The following Java example shows how to create and send a session request to a local Grid with capabilities to match with Safari 15 on macOS Monterey served on Sauce Labs."}),"\n",(0,r.jsx)(n.admonition,{title:"Use Credential Environment Variables",type:"tip",children:(0,r.jsxs)(n.p,{children:["Set your Sauce Labs account credentials as ",(0,r.jsx)(n.a,{href:"/basics/environment-variables",children:"environment variables"})," rather than hard-coding them into all your scripts for efficiency and to protect them from unintended exposure."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Remote execution using an extended Grid with Sauce Labs"',children:'SafariOptions browserOptions = new SafariOptions();\nbrowserOptions.setPlatformName("macOS 12");\nbrowserOptions.setBrowserVersion("15");\nMap<String, Object> sauceOptions = new HashMap<>();\nsauceOptions.put("build", "<your build id>");\nsauceOptions.put("name", "<your test name>");\nsauceOptions.put("username", System.getenv("SAUCE_USERNAME"));\nsauceOptions.put("accessKey", System.getenv("SAUCE_ACCESS_KEY"));\nbrowserOptions.setCapability("sauce:options", sauceOptions);\nRemoteWebDriver driver = new RemoteWebDriver(new URL("http://localhost:4444"), browserOptions);\ndriver.get("https://www.saucedemo.com");\ndriver.findElement(By.id("user-name")).sendKeys("standard_user");\ndriver.findElement(By.id("password")).sendKeys("secret_sauce");\ndriver.findElement(By.id("login-button")).click();\ndriver.quit();\n'})}),"\n",(0,r.jsx)(n.h2,{id:"moving-from-selenium-grid-to-sauce",children:"Moving from Selenium Grid to Sauce"}),"\n",(0,r.jsx)(n.p,{children:"Supporting a new browser version in a local Selenium Grid requires a complete verification of its functionality before running your actual tests with it. In addition, providing features like video recording, logs, and screenshots, comes with the burden of building a custom test results dashboard, which needs provisioning storage for those files plus an automated archiving strategy."}),"\n",(0,r.jsx)(n.p,{children:"With Sauce Labs, using new browser versions, platforms, or mobile devices, is as easy as setting the desired configuration options in your test."}),"\n",(0,r.jsxs)(n.p,{children:["A single line of code needs to be changed to execute the same test code directly on Sauce Labs. Instead of using ",(0,r.jsx)(n.code,{children:"http://localhost:4444"})," as a URL, a Sauce Labs ",(0,r.jsx)(n.a,{href:"/basics/data-center-endpoints/",children:"endpoint"})," URL should be used in the ",(0,r.jsx)(n.code,{children:"RemoteWebDriver"}),". See the code sample below."]}),"\n",(0,r.jsxs)(s.A,{defaultValue:"local",values:[{label:"Local Grid",value:"local"},{label:"Sauce Labs",value:"sauce"}],children:[(0,r.jsx)(a.A,{value:"local",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Local Grid"',children:'RemoteWebDriver driver = new RemoteWebDriver(new URL("http://localhost:4444"), browserOptions);\n'})})}),(0,r.jsx)(a.A,{value:"sauce",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Sauce Labs"',children:'RemoteWebDriver driver = new RemoteWebDriver(new URL("https://ondemand.us-west-1.saucelabs.com:443/wd/hub"), browserOptions);\n'})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Use our ",(0,r.jsx)(n.a,{href:"https://saucelabs.com/platform/platform-configurator",children:"Platform Configurator"})," to auto-generate test configuration options in the language of your choice to copy and paste into your source code."]})}),"\n",(0,r.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://saucelabs.com/resources/white-papers/selenium-grid-build-vs-buy",children:"White Paper: Selenium Grid Build vs. Buy"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.youtube.com/watch?v=mSxRf-zaa5I",children:"Webinar: Selenium Grid Build vs. Buy"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.selenium.dev/documentation/grid/",children:"Selenium Grid Documentation"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(18215);const i={tabItem:"tabItem_Ymn6"};var s=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),i=t(18215),s=t(23104),a=t(56347),o=t(205),l=t(57485),d=t(31682),c=t(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[d,u]=p({queryString:t,groupId:i}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,c.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),g=(()=>{const e=d??f;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==r&&(d(n),a(i))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...s,className:(0,i.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function j(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(w,{...e,...n})]})}function y(e){const n=(0,b.A)();return(0,x.jsx)(j,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);