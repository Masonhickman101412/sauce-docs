"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[77630],{74928:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=i(74848),s=i(28453),n=(i(86025),i(11470)),o=i(19365);const r={id:"ios-version-management",title:"iOS Version Management",sidebar_label:"iOS Version Management",description:"Learn how to use iOS Version Management to test your app on the latest versions."},l=void 0,c={id:"mobile-apps/features/ios-version-management",title:"iOS Version Management",description:"Learn how to use iOS Version Management to test your app on the latest versions.",source:"@site/docs/mobile-apps/features/ios-version-management.md",sourceDirName:"mobile-apps/features",slug:"/mobile-apps/features/ios-version-management",permalink:"/sauce-docs/pr-preview/pr-2900/mobile-apps/features/ios-version-management",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/features/ios-version-management.md",tags:[],version:"current",lastUpdatedBy:"Lysanne Pinto",lastUpdatedAt:1682459673e3,frontMatter:{id:"ios-version-management",title:"iOS Version Management",sidebar_label:"iOS Version Management",description:"Learn how to use iOS Version Management to test your app on the latest versions."},sidebar:"docs",previous:{title:"Gestures",permalink:"/sauce-docs/pr-preview/pr-2900/mobile-apps/features/gestures"},next:{title:"Virtual USB (Real Devices)",permalink:"/sauce-docs/pr-preview/pr-2900/mobile-apps/features/virtual-usb"}},u={},d=[{value:"Aliases",id:"aliases",level:2},{value:"How to use iOS Version Management",id:"how-to-use-ios-version-management",level:2},{value:"Examples",id:"examples",level:2},{value:"FAQ",id:"faq",level:2},{value:"I&#39;m getting the error <code>Invalid platform version specified for simulator: &lt;selected Simulator&gt;</code>",id:"im-getting-the-error-invalid-platform-version-specified-for-simulator-selected-simulator",level:3},{value:"I want to test on the latest version of iOS for an iPhone 7, but it lands on iOS 15.x instead of 16.x",id:"i-want-to-test-on-the-latest-version-of-ios-for-an-iphone-7-but-it-lands-on-ios-15x-instead-of-16x",level:3},{value:"I want to test on a specific version of iOS, how can I do that?",id:"i-want-to-test-on-a-specific-version-of-ios-how-can-i-do-that",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:(0,a.jsx)("span",{className:"sauceGreen",children:"iOS Simulators Only"})})}),"\n",(0,a.jsx)(t.p,{children:"With every major iOS release (for example iOS 15 to iOS 16) it takes 4-6 months for 80% of the end-users to fully adopt a new major version. To help you test your app on the latest versions of iOS, Sauce Labs provides iOS Version Management based on aliases. These aliases allow you to test your app on the latest versions of iOS without having to update your capabilities every time a new version is released."}),"\n",(0,a.jsx)(t.h2,{id:"aliases",children:"Aliases"}),"\n",(0,a.jsx)(t.p,{children:"Sauce Labs provides the following aliases for iOS Simulators:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"latest"})," or ",(0,a.jsx)(t.code,{children:"current_major"})," - The latest installed version of the current major version."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"previous_major"})," - The latest installed version of the previous major version."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["If the latest major released version of iOS is ",(0,a.jsx)(t.code,{children:"16"})," and the latest installed version in the Sauce Labs cloud is ",(0,a.jsx)(t.code,{children:"16.4"}),", then ",(0,a.jsx)(t.code,{children:"latest"})," and ",(0,a.jsx)(t.code,{children:"current_major"})," will both point to ",(0,a.jsx)(t.code,{children:"16.4"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["If the latest previous major released version of iOS is ",(0,a.jsx)(t.code,{children:"15"})," and the latest installed version in the Sauce Labs cloud is ",(0,a.jsx)(t.code,{children:"15.5"}),", then ",(0,a.jsx)(t.code,{children:"previous_major"})," will point to ",(0,a.jsx)(t.code,{children:"15.5"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"When Sauce Labs releases new versions of iOS, the aliases will be updated to automatically point to the latest installed versions."}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"Apple doesn't release every version of iOS for every device. For example:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["iOS 16 is not released for the iPhone 7/Plus because Apple stopped support. If you use the ",(0,a.jsx)(t.code,{children:"latest"})," or ",(0,a.jsx)(t.code,{children:"current_major"})," aliases, Sauce Labs will automatically select the latest version of iOS that is available for the device you are testing on."]}),"\n",(0,a.jsxs)(t.li,{children:["Not every iOS minor version update leads to a new iOS Simulator version. New Simulator versions are released when Apple updates the underlying Xcode version. For example, iOS 15.1 is not released as a new Simulator version because it is not released with Xcode 13.1 or XCODE 13.2, which is the same Xcode version as iOS 15.0. More information about Xcode and iOS versions can be found ",(0,a.jsx)(t.a,{href:"https://xcodereleases.com/?scope=release",children:"here"}),"."]}),"\n"]})]}),"\n",(0,a.jsx)(t.h2,{id:"how-to-use-ios-version-management",children:"How to use iOS Version Management"}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["The following examples will use an ",(0,a.jsx)(t.code,{children:"iPhone Simulator"})," or ",(0,a.jsx)(t.code,{children:"iPad Simulator"})," to test on a Safari browser. You can use the same approach to test your web or native app on any iOS Simulator. To learn about possible configurations please visit our ",(0,a.jsx)(t.a,{href:"https://saucelabs.com/platform/platform-configurator#/",children:"Platform Configurator"})," tool for more information."]})}),"\n",(0,a.jsxs)(n.A,{groupId:"capability-ex-emusim",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Node.js",value:"js"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"C#",value:"csharp"}],children:[(0,a.jsx)(o.A,{value:"java",children:(0,a.jsxs)(n.A,{groupId:"capability-java-emusim",defaultValue:"iphone",values:[{label:"iPhone",value:"iphone"},{label:"iPad",value:"ipad"}],children:[(0,a.jsx)(o.A,{value:"iphone",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'MutableCapabilities capabilities = new MutableCapabilities();\n\ncapabilities.setCapability("browserName", "safari");\ncapabilities.setCapability("platformName", "ios");\n// Use one of the following aliases to test on the latest version of iOS of your choice\ncapabilities.setCapability("appium:platformVersion", "latest|current_major|previous_major");\ncapabilities.setCapability("appium:deviceName", "iPhone Simulator");\ncapabilities.setCapability("appium:automationName", "xcuitest");\n\nHashMap<String, Object> sauceOptions = new HashMap<String, Object>();\ncapabilities.setCapability("sauce:options", sauceOptions);\n'})})}),(0,a.jsx)(o.A,{value:"ipad",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'MutableCapabilities capabilities = new MutableCapabilities();\n\ncapabilities.setCapability("browserName", "safari");\ncapabilities.setCapability("platformName", "ios");\n// Use one of the following aliases to test on the latest version of iOS of your choice\ncapabilities.setCapability("appium:platformVersion", "latest|current_major|previous_major");\ncapabilities.setCapability("appium:deviceName", "iPad Simulator");\ncapabilities.setCapability("appium:automationName", "xcuitest");\n\nHashMap<String, Object> sauceOptions = new HashMap<String, Object>();\ncapabilities.setCapability("sauce:options", sauceOptions);\n'})})})]})}),(0,a.jsx)(o.A,{value:"js",children:(0,a.jsxs)(n.A,{groupId:"capability-js-emusim",defaultValue:"iphone",values:[{label:"iPhone",value:"iphone"},{label:"iPad",value:"ipad"}],children:[(0,a.jsx)(o.A,{value:"iphone",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const capabilities = {\n    browserName: 'safari',\n    platformName: 'ios',\n    // Use one of the following aliases to test on the latest version of iOS of your choice\n    'appium:platformVersion': 'latest|current_major|previous_major',\n    'appium:deviceName': 'iPhone Simulator',\n    'appium:automationName': 'xcuitest',\n    'sauce:options': {\n    }\n}\n"})})}),(0,a.jsx)(o.A,{value:"ipad",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const capabilities = {\n    browserName: 'safari',\n    platformName: 'ios',\n    // Use one of the following aliases to test on the latest version of iOS of your choice\n    'appium:platformVersion': 'latest|current_major|previous_major',\n    'appium:deviceName': 'iPad Simulator',\n    'appium:automationName': 'xcuitest',\n    'sauce:options': {\n    }\n}\n"})})})]})}),(0,a.jsx)(o.A,{value:"python",children:(0,a.jsxs)(n.A,{groupId:"capability-python-emusim",defaultValue:"iphone",values:[{label:"iPhone",value:"iphone"},{label:"iPad",value:"ipad"}],children:[(0,a.jsx)(o.A,{value:"iphone",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:'capabilities = {\n    "browserName" : "safari",\n    "platformName" : "ios",\n    # Use one of the following aliases to test on the latest version of iOS of your choice\n    "appium:platformVersion" : "latest|current_major|previous_major",\n    "appium:deviceName" : "iPhone Simulator",\n    \'appium:automationName\': \'xcuitest\',\n    "sauce:options" : {\n    }\n}\n'})})}),(0,a.jsx)(o.A,{value:"ipad",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:'capabilities = {\n    "browserName" : "safari",\n    "platformName" : "ios",\n    # Use one of the following aliases to test on the latest version of iOS of your choice\n    "appium:platformVersion" : "latest|current_major|previous_major",\n    "appium:deviceName" : "iPad Simulator",\n    \'appium:automationName\': \'xcuitest\',\n    "sauce:options" : {\n    }\n}\n'})})})]})}),(0,a.jsx)(o.A,{value:"ruby",children:(0,a.jsxs)(n.A,{groupId:"capability-ruby-emusim",defaultValue:"iphone",values:[{label:"iPhone",value:"iphone"},{label:"iPad",value:"ipad"}],children:[(0,a.jsx)(o.A,{value:"iphone",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ruby",children:'capabilities = {\n    "browserName" => "safari",\n    "platformName" => "ios",\n    # Use one of the following aliases to test on the latest version of iOS of your choice\n    "appium:platformVersion" => "latest|current_major|previous_major",\n    "appium:deviceName" => "iPhone Simulator",\n    \'appium:automationName\' => \'xcuitest\',\n    "sauce:options" => {\n    }\n}\n'})})}),(0,a.jsx)(o.A,{value:"ipad",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ruby",children:'capabilities = {\n    "browserName" => "safari",\n    "platformName" => "ios",\n    # Use one of the following aliases to test on the latest version of iOS of your choice\n    "appium:platformVersion" => "latest|current_major|previous_major",\n    "appium:deviceName" => "iPad Simulator"",\n    \'appium:automationName\'=> \'xcuitest\',\n    "sauce:options" => {\n    }\n}\n'})})})]})}),(0,a.jsx)(o.A,{value:"csharp",children:(0,a.jsxs)(n.A,{groupId:"capability-csharp",defaultValue:"iphone",values:[{label:"iPhone",value:"iphone"},{label:"iPad",value:"ipad"}],children:[(0,a.jsx)(o.A,{value:"iphone",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:'AppiumOptions capabilities = new AppiumOptions();\n\ncapabilities.AddAdditionalCapability("browserName", "safari");\ncapabilities.AddAdditionalCapability("platformName", "ios");\n// Use one of the following aliases to test on the latest version of iOS of your choice\ncapabilities.AddAdditionalCapability("appium:platformVersion", "latest|current_major|previous_major");\ncapabilities.AddAdditionalCapability("appium:deviceName", "iPhone Simulator");\ncapabilities.AddAdditionalCapability("appium:automationName", "xcuitest");\n\nHashMap<String, Object> sauceOptions = new Dictionary<string, object>();\ncapabilities.AddAdditionalCapability("sauce:options", sauceOptions);\n'})})}),(0,a.jsx)(o.A,{value:"ipad",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:'AppiumOptions capabilities = new AppiumOptions();\n\ncapabilities.AddAdditionalCapability("browserName", "safari");\ncapabilities.AddAdditionalCapability("platformName", "ios");\n// Use one of the following aliases to test on the latest version of iOS of your choice\ncapabilities.AddAdditionalCapability("appium:platformVersion", "latest|current_major|previous_major");\ncapabilities.AddAdditionalCapability("appium:deviceName", "iPad Simulator");\ncapabilities.AddAdditionalCapability("appium:automationName", "xcuitest");\n\nHashMap<String, Object> sauceOptions = new Dictionary<string, object>();\ncapabilities.AddAdditionalCapability("sauce:options", sauceOptions);\n'})})})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["The following examples use iOS 16 and 15 as the current and previous major versions of iOS, respectively. The examples don't always reflect the actual versions of iOS that are supported by Sauce Labs and Apple on Simulators. See our ",(0,a.jsx)(t.a,{href:"https://saucelabs.com/platform/platform-configurator#/",children:"Platform Configurator"})," tool for the most up-to-date information."]})}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Configuration"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Supported by Apple on Simulators"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Supported by Sauce Labs"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Land On"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Note"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{style:{textAlign:"left"},children:["iPhone 14 Simulator + ",(0,a.jsx)(t.code,{children:"latest"})," or ",(0,a.jsx)(t.code,{children:"current_major"})]}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"16.0-16.4"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"16.0-16.4"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"16.4"}),(0,a.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{style:{textAlign:"left"},children:["iPhone 14 Simulator + ",(0,a.jsx)(t.code,{children:"previous_major"})]}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"16.0-16.4"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"16.0-16.4"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"\u2715"}),(0,a.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,a.jsxs)("pre",{children:["Error: Failed to create session. ",(0,a.jsx)("br",{}),"Invalid platform version specified for simulator:",(0,a.jsx)("br",{}),"iPhone 14 Simulator"]})," iPhone 14 was released with iOS 16, not with 15"]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{style:{textAlign:"left"},children:["iPad (10th Generation) Simulator + ",(0,a.jsx)(t.code,{children:"latest"})," or ",(0,a.jsx)(t.code,{children:"current_major"})]}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"16.1-16.4"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"16.1-16.4"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"16.4"}),(0,a.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{style:{textAlign:"left"},children:["iPad (10th Generation) Simulator + ",(0,a.jsx)(t.code,{children:"previous_major"})]}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"16.1-16.4"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"16.1-16.4"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"\u2715"}),(0,a.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,a.jsxs)("pre",{children:["Error: Failed to create session. ",(0,a.jsx)("br",{}),"Invalid platform version specified for simulator:",(0,a.jsx)("br",{}),"iPad (10th Generation) Simulator"]})," iPad (10th Generation) was released with iOS 16.1, not with 15"]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{style:{textAlign:"left"},children:["iPhone 13 Simulator + ",(0,a.jsx)(t.code,{children:"latest"})," or ",(0,a.jsx)(t.code,{children:"current_major"})]}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"15.0-16.4"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"15.0-16.4"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"16.4"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"iPhone 13 was released with iOS 15 and supports 16"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{style:{textAlign:"left"},children:["iPhone 13 Simulator + ",(0,a.jsx)(t.code,{children:"previous_major"})]}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"15.0-16.4"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"15.0-16.4"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"15.5"}),(0,a.jsxs)(t.td,{style:{textAlign:"left"},children:["iPhone 13 was released with iOS 15, the current is higher, so ",(0,a.jsx)(t.code,{children:"previous_major"})," will result in iOS 15"]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{style:{textAlign:"left"},children:["iPhone 7 Simulator + ",(0,a.jsx)(t.code,{children:"latest"})," or ",(0,a.jsx)(t.code,{children:"current_major"})]}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"10.0-15.5"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"15.0-16.4"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"15.4"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"iPhone 7 was released with iOS 10 and Apple supports till iOS 15.x"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{style:{textAlign:"left"},children:["iPhone 7 Simulator + ",(0,a.jsx)(t.code,{children:"previous_major"})]}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"10.0-15.5"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"15.0-16.4"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"14.4"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Apple supports 14.5, Sauce Labs only released till 14.4"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,a.jsxs)(t.h3,{id:"im-getting-the-error-invalid-platform-version-specified-for-simulator-selected-simulator",children:["I'm getting the error ",(0,a.jsx)(t.code,{children:"Invalid platform version specified for simulator: <selected Simulator>"})]}),"\n",(0,a.jsxs)(t.p,{children:["This error means that the platform version you specified is not supported by Apple on Simulators. For example, if you specify ",(0,a.jsx)(t.code,{children:"previous_major"})," for an iPhone 14 Simulator when it has just been released (it was released with iOS 16), you'll get this error because Apple doesn't support iOS 15 on this Simulator. You can use the ",(0,a.jsx)(t.a,{href:"https://saucelabs.com/platform/platform-configurator#/",children:"Platform Configurator"})," tool to check which versions of iOS are supported by Apple and Sauce Labs."]}),"\n",(0,a.jsxs)(t.p,{children:["You can start using ",(0,a.jsx)(t.code,{children:"previous_major"})," once Apple has released a new major version of iOS (for example iOS 17) and Sauce Labs has released a new version of the Simulator for that major version."]}),"\n",(0,a.jsx)(t.h3,{id:"i-want-to-test-on-the-latest-version-of-ios-for-an-iphone-7-but-it-lands-on-ios-15x-instead-of-16x",children:"I want to test on the latest version of iOS for an iPhone 7, but it lands on iOS 15.x instead of 16.x"}),"\n",(0,a.jsxs)(t.p,{children:["The reason is that Apple doesn't support iOS 16 on the iPhone 7 Simulator. You can use the ",(0,a.jsx)(t.a,{href:"https://saucelabs.com/platform/platform-configurator#/",children:"Platform Configurator"})," tool to see which versions of iOS are supported by Apple and Sauce Labs on Simulators."]}),"\n",(0,a.jsx)(t.h3,{id:"i-want-to-test-on-a-specific-version-of-ios-how-can-i-do-that",children:"I want to test on a specific version of iOS, how can I do that?"}),"\n",(0,a.jsxs)(t.p,{children:["You can use the ",(0,a.jsx)(t.code,{children:"appium:platformVersion"})," capability to specify the version of iOS you want to test on. You can use ",(0,a.jsx)(t.a,{href:"https://saucelabs.com/platform/platform-configurator#/",children:"Platform Configurator"})," tool to see how to construct your capabilities for your preferred language."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,t,i)=>{i.d(t,{A:()=>o});i(96540);var a=i(18215);const s={tabItem:"tabItem_Ymn6"};var n=i(74848);function o(e){let{children:t,hidden:i,className:o}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,o),hidden:i,children:t})}},11470:(e,t,i)=>{i.d(t,{A:()=>S});var a=i(96540),s=i(18215),n=i(23104),o=i(56347),r=i(205),l=i(57485),c=i(31682),u=i(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:i}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:i,attributes:a,default:s}}=e;return{value:t,label:i,attributes:a,default:s}}))}(i);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function h(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:i}=e;const s=(0,o.W6)(),n=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,l.aZ)(n),(0,a.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(s.location.search);t.set(n,e),s.replace({...s.location,search:t.toString()})}),[n,s])]}function f(e){const{defaultValue:t,queryString:i=!1,groupId:s}=e,n=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=i.find((e=>e.default))??i[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:n}))),[c,d]=m({queryString:i,groupId:s}),[f,x]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,n]=(0,u.Dv)(i);return[s,(0,a.useCallback)((e=>{i&&n.set(e)}),[i,n])]}({groupId:s}),j=(()=>{const e=c??f;return h({value:e,tabValues:n})?e:null})();(0,r.A)((()=>{j&&l(j)}),[j]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,n]),tabValues:n}}var x=i(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=i(74848);function v(e){let{className:t,block:i,selectedValue:a,selectValue:o,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),u=e=>{const t=e.currentTarget,i=l.indexOf(t),s=r[i].value;s!==a&&(c(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;t=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;t=l[i]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":i},t),children:r.map((e=>{let{value:t,label:i,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...n,className:(0,s.A)("tabs__item",j.tabItem,n?.className,{"tabs__item--active":a===t}),children:i??t},t)}))})}function g(e){let{lazy:t,children:i,selectedValue:s}=e;const n=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function S(e){const t=(0,x.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>r});var a=i(96540);const s={},n=a.createContext(s);function o(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);