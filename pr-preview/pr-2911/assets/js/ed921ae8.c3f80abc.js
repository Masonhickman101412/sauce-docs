"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[13084],{29421:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var s=i(74848),t=i(28453),n=(i(86025),i(11470)),r=i(19365);const l={id:"virtual-devices",title:"Appium Testing with Emulators and Simulators",sidebar_label:"Virtual Devices"},o=void 0,p={id:"mobile-apps/automated-testing/appium/virtual-devices",title:"Appium Testing with Emulators and Simulators",description:"With Sauce Labs, you can run automated Appium tests for your native and hybrid mobile apps against many virtual",source:"@site/docs/mobile-apps/automated-testing/appium/virtual-devices.md",sourceDirName:"mobile-apps/automated-testing/appium",slug:"/mobile-apps/automated-testing/appium/virtual-devices",permalink:"/sauce-docs/pr-preview/pr-2911/mobile-apps/automated-testing/appium/virtual-devices",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/automated-testing/appium/virtual-devices.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"virtual-devices",title:"Appium Testing with Emulators and Simulators",sidebar_label:"Virtual Devices"},sidebar:"docs",previous:{title:"Real Devices",permalink:"/sauce-docs/pr-preview/pr-2911/mobile-apps/automated-testing/appium/real-devices"},next:{title:"Test App Upgrades",permalink:"/sauce-docs/pr-preview/pr-2911/mobile-apps/automated-testing/appium/test-app-upgrades"}},c={},u=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Upload Your App to Emulators and Simulators",id:"upload-your-app-to-emulators-and-simulators",level:2},{value:"Set Your Test Credentials",id:"set-your-test-credentials",level:2},{value:"Set Test Configurations",id:"set-test-configurations",level:2},{value:"Set the Location of Your Mobile App",id:"set-the-location-of-your-mobile-app",level:3},{value:"Set the <code>appiumVersion</code>",id:"set-the-appiumversion",level:3},{value:"Check the Appium Version for Your Test",id:"check-the-appium-version-for-your-test",level:3},{value:"iOS Code Examples",id:"ios-code-examples",level:2},{value:"Android Code Examples",id:"android-code-examples",level:2},{value:"Native Apps vs. Hybrid Apps",id:"native-apps-vs-hybrid-apps",level:2},{value:"Example Appium Test Scripts",id:"example-appium-test-scripts",level:2},{value:"Additional Test Configuration Options",id:"additional-test-configuration-options",level:2}];function d(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:["With Sauce Labs, you can run automated Appium tests for your native and hybrid mobile apps against many virtual\nOS and platform combinations with ",(0,s.jsx)(a.a,{href:"https://developer.android.com/studio/run/emulator",children:"Android Emulators"})," and\n",(0,s.jsx)(a.a,{href:"https://developer.apple.com/documentation/xcode/running-your-app-in-simulator-or-on-a-device/",children:"iOS Simulators"}),"."]}),"\n",(0,s.jsx)(a.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["A Sauce Labs account (",(0,s.jsx)(a.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,s.jsx)(a.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,s.jsxs)(a.li,{children:["Your Sauce Labs ",(0,s.jsx)(a.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:["The native or hybrid mobile app you want to test. If you don't have one on hand and would like to test this functionality, consider using our ",(0,s.jsx)(a.a,{href:"https://github.com/saucelabs/sample-app-mobile",children:"Sauce Labs demo mobile app"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:["Ensure that your system fulfills the project support and requirements prior to uploading your apps or leveraging device Emulators and Simulators. Review the ",(0,s.jsx)(a.a,{href:"/mobile-apps/supported-devices",children:"Automated Mobile App Testing Admin Guide"})," for further details."]}),"\n"]}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsxs)(a.p,{children:["Sauce Labs does not support Android Emulators with Play Store integration. For more information contact ",(0,s.jsx)(a.a,{href:"https://saucelabs.com/training-support",children:"Sauce Labs Support"})," or use the ",(0,s.jsx)(a.a,{href:"https://portal.productboard.com/sauceprod/2-sauce-labs-portal/submit-idea",children:"Sauce Labs Portal"}),"."]})}),"\n",(0,s.jsx)(a.h2,{id:"upload-your-app-to-emulators-and-simulators",children:"Upload Your App to Emulators and Simulators"}),"\n",(0,s.jsx)(a.p,{children:"To begin, upload your app to a publicly available source. Accepted file types are *.zip iOS package files for Simulators and *.apk or *.aab Android package files for Emulators. There are two ways you can upload your app for automated testing:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Upload a local file using the ",(0,s.jsx)(a.a,{href:"/dev/api/storage/#upload-file-to-app-storage",children:"App Storage REST API"})]}),"\n",(0,s.jsxs)(a.li,{children:["Provide a URL to install from a ",(0,s.jsx)(a.a,{href:"/mobile-apps/automated-testing/appium/real-devices/#uploading-mobile-apps-from-a-remote-location",children:"Remote Location"})]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"set-your-test-credentials",children:"Set Your Test Credentials"}),"\n",(0,s.jsxs)(a.p,{children:["After you've uploaded your app, open a new test script. Add your Sauce Labs credentials (",(0,s.jsx)(a.code,{children:"username"})," and ",(0,s.jsx)(a.code,{children:"accessKey"}),")."]}),"\n",(0,s.jsx)(a.admonition,{type:"warning",children:(0,s.jsxs)(a.p,{children:["Credentials should not be stored in as text in your code where they might be stored in version control system.\nFor every machine that executes the code,\n",(0,s.jsx)(a.a,{href:"/basics/environment-variables",children:"set your Sauce Labs credentials with environment variables"}),"."]})}),"\n",(0,s.jsx)(a.h2,{id:"set-test-configurations",children:"Set Test Configurations"}),"\n",(0,s.jsxs)(a.p,{children:["There are numerous ",(0,s.jsx)(a.a,{href:"/dev/test-configuration-options",children:"Test Configuration Options"})," that can be used to generate\nthe session you want and determine the behavior of the tests."]}),"\n",(0,s.jsx)(a.p,{children:"Here are some tips for configuring your Appium tests:"}),"\n",(0,s.jsx)(a.h3,{id:"set-the-location-of-your-mobile-app",children:"Set the Location of Your Mobile App"}),"\n",(0,s.jsxs)(a.p,{children:["Set the value of ",(0,s.jsx)(a.code,{children:"app"})," to the location for where it can be accessed. This can be a full URL, or it can use\n",(0,s.jsx)(a.a,{href:"/mobile-apps/app-storage/#using-application-storage-with-automated-test-builds",children:"Sauce Labs App Storage"})]}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsxs)(a.p,{children:["Sauce Labs only allows you to set either ",(0,s.jsx)(a.code,{children:"browserName"})," or ",(0,s.jsx)(a.code,{children:"app"}),". If you have a value set for ",(0,s.jsx)(a.code,{children:"browserName"})," Sauce will\ntreat it as a mobile-web test instead of a native app test, so make sure this value is empty or removed."]})}),"\n",(0,s.jsx)(a.p,{children:"Example of using Sauce Labs Storage:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",metastring:'reference title="Sauce Labs Storage"',children:"https://github.com/saucelabs-training/demo-java/blob/docs-1.0/appium-examples/src/test/java/com/realdevice/image_injection/ImageInjectionIosTest.java#L63-L65\n"})}),"\n",(0,s.jsxs)(a.h3,{id:"set-the-appiumversion",children:["Set the ",(0,s.jsx)(a.code,{children:"appiumVersion"})]}),"\n",(0,s.jsx)(a.p,{children:"We recommend specifying one of the newer Appium versions, which will provide a more extended API and fixes to known bugs.\nIf this value is not set, an older default value may be used instead."}),"\n",(0,s.jsx)(a.h3,{id:"check-the-appium-version-for-your-test",children:"Check the Appium Version for Your Test"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Log in to Sauce Labs."}),"\n",(0,s.jsxs)(a.li,{children:["Find and select the test that you ran using Appium to view the ",(0,s.jsx)(a.strong,{children:"Test Details"})," page."]}),"\n",(0,s.jsxs)(a.li,{children:["Click the ",(0,s.jsx)(a.strong,{children:"Metadata"})," tab."]}),"\n",(0,s.jsxs)(a.li,{children:["Look for the ",(0,s.jsx)(a.strong,{children:"Logs"})," row and select ",(0,s.jsx)(a.strong,{children:"Appium Log"}),". The first line should indicate the Appium version. For example:","\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"2014-05-05T17:45:07.541Z - info: Welcome to Appium v1.9.0.\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"ios-code-examples",children:"iOS Code Examples"}),"\n",(0,s.jsx)(a.p,{children:"Below are examples of an iPhone 8 project using iOS version 12.2:"}),"\n",(0,s.jsxs)(n.A,{defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Node.js",value:"Node.js"},{label:"Ruby",value:"Ruby"},{label:"C#",value:"C#"}],children:[(0,s.jsx)(r.A,{value:"Java",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:'DesiredCapabilities caps = DesiredCapabilities.iphone();\n    caps.setCapability("appiumVersion", "1.13.0");\n    caps.setCapability("deviceName","iPhone 8 Simulator");\n    caps.setCapability("deviceOrientation", "portrait");\n    caps.setCapability("platformVersion","12.2");\n    caps.setCapability("platformName", "iOS");\n    caps.setCapability("browserName", "");\n    caps.setCapability("app", "https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.1.0.zip");\n'})})}),(0,s.jsx)(r.A,{value:"Python",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-py",children:"caps['browserName'] = \"\"\ncaps['appiumVersion'] = \"1.13.0\"\ncaps['deviceName'] = \"iPhone 8 Simulator\"\ncaps['deviceOrientation'] = \"portrait\"\ncaps['platformVersion'] = \"12.2\"\ncaps['platformName'] = \"iOS\"\ncaps['app'] = \"https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.1.0.zip\"\n"})})}),(0,s.jsx)(r.A,{value:"Node.js",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-js",children:"caps['browserName'] = ''\ncaps['appiumVersion'] = '1.13.0'\ncaps['deviceName'] = 'iPhone 8 Simulator'\ncaps['deviceOrientation'] = 'portrait'\ncaps['platformVersion'] = '12.2'\ncaps['platformName'] = 'iOS'\ncaps['app'] =\n'https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.1.0.zip'\n"})})}),(0,s.jsx)(r.A,{value:"Ruby",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-rb",children:"caps = Selenium::WebDriver::Remote::Capabilities.iphone()\ncaps['appiumVersion'] = '1.13.0'\ncaps['deviceName'] = 'iPhone 8 Simulator'\ncaps['deviceOrientation'] = 'portrait'\ncaps['platformVersion'] = '12.2'\ncaps['platformName'] = 'iOS'\ncaps['browserName'] = ''\ncaps['app'] = 'https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.1.0.zip'\n"})})}),(0,s.jsx)(r.A,{value:"C#",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-Csharp",children:'DesiredCapabilities caps = new DesiredCapabilities();\n    caps.SetCapability("appiumVersion", "1.13.0");\n    caps.SetCapability("deviceName", "iPhone 8 Simulator");\n    caps.SetCapability("deviceOrientation", "portrait");\n    caps.SetCapability("platformVersion", "12.2");\n    caps.SetCapability("platformName", "iOS");\n    caps.SetCapability("browserName", "");\n    caps.SetCapability("app", "https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.1.0.zip");\n'})})})]}),"\n",(0,s.jsx)(a.h2,{id:"android-code-examples",children:"Android Code Examples"}),"\n",(0,s.jsx)(a.p,{children:"Below are examples of an Samsung Galaxy S9 Plus project using Android version 8.1:"}),"\n",(0,s.jsxs)(n.A,{defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Node.js",value:"Node.js"},{label:"Ruby",value:"Ruby"},{label:"C#",value:"C#"}],children:[(0,s.jsx)(r.A,{value:"Java",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:'DesiredCapabilities caps = DesiredCapabilities.android();\n    caps.setCapability("appiumVersion", "1.9.1");\n    caps.setCapability("deviceName","Samsung Galaxy S9 Plus FHD GoogleAPI Emulator");\n    caps.setCapability("deviceOrientation", "portrait");\n    caps.setCapability("browserName", "");\n    caps.setCapability("platformVersion","8.1");\n    caps.setCapability("platformName","Android");\n    caps.setCapability("app", "https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/Android.SauceLabs.Mobile.Sample.app.2.2.0.apk");\n'})})}),(0,s.jsx)(r.A,{value:"Python",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-py",children:"caps = {}\ncaps['appiumVersion'] = \"1.9.1\"\ncaps['deviceName'] = \"Samsung Galaxy S9 Plus FHD GoogleAPI Emulator\"\ncaps['deviceOrientation'] = \"portrait\"\ncaps['platformVersion'] = \"8.1\"\ncaps['platformName'] = \"Android\"\ncaps['app'] = \"https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/Android.SauceLabs.Mobile.Sample.app.2.2.0.apk\"\n"})})}),(0,s.jsx)(r.A,{value:"Node.js",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-js",children:"caps = {}\ncaps['appiumVersion'] = '1.9.1'\ncaps['deviceName'] = 'Samsung Galaxy S9 Plus FHD GoogleAPI Emulator'\ncaps['deviceOrientation'] = 'portrait'\ncaps['browserName'] = ''\ncaps['platformVersion'] = '8.1'\ncaps['platformName'] = 'Android'\ncaps['app'] =\n'https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/Android.SauceLabs.Mobile.Sample.app.2.2.0.apk'\n"})})}),(0,s.jsx)(r.A,{value:"Ruby",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-rb",children:"caps = Selenium::WebDriver::Remote::Capabilities.android()\ncaps['appiumVersion'] = '1.9.1'\ncaps['deviceName'] = 'Samsung Galaxy S9 Plus FHD GoogleAPI Emulator'\ncaps['deviceOrientation'] = 'portrait'\ncaps['browserName'] = ''\ncaps['platformVersion'] = '8.1'\ncaps['platformName'] = 'Android'\ncaps['app'] = 'https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/Android.SauceLabs.Mobile.Sample.app.2.2.0.apk'\n"})})}),(0,s.jsx)(r.A,{value:"C#",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-Csharp",children:'DesiredCapabilities caps = new DesiredCapabilities();\n    caps.SetCapability("appiumVersion", "1.9.1");\n    caps.SetCapability("deviceName", "Samsung Galaxy S9 Plus FHD GoogleAPI Emulator");\n    caps.SetCapability("deviceOrientation", "portrait");\n    caps.SetCapability("browserName", "");\n    caps.SetCapability("platformVersion", "8.1");\n    caps.SetCapability("platformName", "Android");\n    caps.SetCapability("app", "https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/Android.SauceLabs.Mobile.Sample.app.2.2.0.apk");\n'})})})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(a.h2,{id:"native-apps-vs-hybrid-apps",children:"Native Apps vs. Hybrid Apps"}),"\n",(0,s.jsxs)(n.A,{defaultValue:"iOS",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"}],children:[(0,s.jsxs)(r.A,{value:"iOS",children:["iPhone Native App",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:'DesiredCapabilities caps = DesiredCapabilities.iphone();\ncaps.setCapability("appiumVersion", "1.9.0");\ncaps.setCapability("deviceName","iPhone 8");\ncaps.setCapability("deviceOrientation", "portrait");\ncaps.setCapability("platformVersion","14.3");\ncaps.setCapability("platformName", "iOS");\ncaps.setCapability("browserName", "");\ncaps.setCapability("app","storage:filename=mapp.zip");\n'})}),"iPad Native App",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:'DesiredCapabilities caps = DesiredCapabilities.iphone();\n  caps.setCapability("appiumVersion", "1.9.0");\n  caps.setCapability("deviceName","iPad Retina");\n  caps.setCapability("deviceOrientation", "portrait");\n  caps.setCapability("platformVersion","14.3");\n  caps.setCapability("platformName", "iOS");\n  caps.setCapability("browserName", "");\n  caps.setCapability("app","storage:filename=myapp.zip");\n'})}),"iPhone Hybrid App,",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:'DesiredCapabilities caps = DesiredCapabilities.iphone();\n    caps.setCapability("appiumVersion", "1.9.0");\n    caps.setCapability("deviceName","iPhone Retina (4-inch 64-bit)");\n    caps.setCapability("deviceOrientation", "portrait");\n    caps.setCapability("platformVersion","7.1");\n    caps.setCapability("platformName", "iOS");\n    caps.setCapability("browserName", "");\n    caps.setCapability("app","storage:filename=myapp.zip");\n'})})]}),(0,s.jsxs)(r.A,{value:"Android",children:["Android Native App, Android version 4.3.",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:'DesiredCapabilities caps = DesiredCapabilities.android();\n    caps.setCapability("appiumVersion", "1.9.0");\n    caps.setCapability("deviceName","Samsung Galaxy S4 Emulator");\n    caps.setCapability("deviceOrientation", "portrait");\n    caps.setCapability("browserName", "");\n    caps.setCapability("platformVersion","4.3");\n    caps.setCapability("platformName","Android");\n    caps.setCapability("app","storage:filename=myapp.zip");\n'})}),"Android Hybrid App, Android version 4.1.",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:'DesiredCapabilities caps = DesiredCapabilities.android();\n    caps.setCapability("appiumVersion", "1.9.0");\n    caps.setCapability("deviceName","Android Emulator");\n    caps.setCapability("deviceType","tablet");\n    caps.setCapability("deviceOrientation", "portrait");\n    caps.setCapability("browserName", "");\n    caps.setCapability("platformVersion","4.1");\n    caps.setCapability("platformName","Android");\n    caps.setCapability("app","storage:filename=myapp.zip");\n    caps.setCapability("automationName","Selendroid");\n'})})]})]}),"\n",(0,s.jsx)(a.h2,{id:"example-appium-test-scripts",children:"Example Appium Test Scripts"}),"\n",(0,s.jsxs)(a.p,{children:["These Appium scripts for iOS and Android mobile app tests on Emulators and Simulators can help streamline your testing\nprocess. Below are links to the ",(0,s.jsx)(a.a,{href:"https://github.com/saucelabs-training",children:"Sauce Labs Training on GitHub"})," repository,\nwhere you'll find demo scripts for a variety of use cases to get you started with automated Appium testing:"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://github.com/saucelabs-training/demo-java/blob/docs-1.0/appium-examples",children:"Java"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://github.com/saucelabs-training/demo-js/blob/docs-1.0/webdriverio/appium-app/examples",children:"JavaScript"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://github.com/saucelabs-training/demo-python/blob/docs-1.0/best_practice/mobile_native",children:"Python"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://github.com/saucelabs-training/demo-ruby/blob/docs-1.0/appium-examples",children:"Ruby"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://github.com/saucelabs-training/demo-csharp",children:"C#"})}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"additional-test-configuration-options",children:"Additional Test Configuration Options"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"/dev/test-configuration-options/#virtual-device-capabilities-sauce-specific--optional",children:"Implement timeouts to control text execution times"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"/basics/test-config-annotation/test-annotation/#sauce-labs-rest-api",children:"Annotating Tests with the Sauce Labs REST API"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"/basics/test-config-annotation/test-annotation/#selenium-javascript-executor",children:"Annotating Tests with Selenium's JavaScript Executor"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"/test-results/test-status",children:"Setting Test Status to Pass or Fail"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"/basics/test-config-annotation/test-annotation",children:"Using Build IDs and tags to differentiate and identify test runs"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://saucelabs.com/platform/platform-configurator#/",children:"Create your own test script examples using our Platform Configurator"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"/dev/test-configuration-options",children:"Browse our full suite of test configuration options and advanced configurations"})}),"\n"]})]})}function m(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,a,i)=>{i.d(a,{A:()=>r});i(96540);var s=i(34164);const t={tabItem:"tabItem_Ymn6"};var n=i(74848);function r(e){let{children:a,hidden:i,className:r}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,r),hidden:i,children:a})}},11470:(e,a,i)=>{i.d(a,{A:()=>S});var s=i(96540),t=i(34164),n=i(23104),r=i(56347),l=i(205),o=i(57485),p=i(31682),c=i(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:a,children:i}=e;return(0,s.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:i,attributes:s,default:t}}=e;return{value:a,label:i,attributes:s,default:t}}))}(i);return function(e){const a=(0,p.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,i])}function m(e){let{value:a,tabValues:i}=e;return i.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:i}=e;const t=(0,r.W6)(),n=function(e){let{queryString:a=!1,groupId:i}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:a,groupId:i});return[(0,o.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const a=new URLSearchParams(t.location.search);a.set(n,e),t.replace({...t.location,search:a.toString()})}),[n,t])]}function b(e){const{defaultValue:a,queryString:i=!1,groupId:t}=e,n=d(e),[r,o]=(0,s.useState)((()=>function(e){let{defaultValue:a,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const s=i.find((e=>e.default))??i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:n}))),[p,u]=h({queryString:i,groupId:t}),[b,v]=function(e){let{groupId:a}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,n]=(0,c.Dv)(i);return[t,(0,s.useCallback)((e=>{i&&n.set(e)}),[i,n])]}({groupId:t}),f=(()=>{const e=p??b;return m({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),v(e)}),[u,v,n]),tabValues:n}}var v=i(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=i(74848);function x(e){let{className:a,block:i,selectedValue:s,selectValue:r,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:p}=(0,n.a_)(),c=e=>{const a=e.currentTarget,i=o.indexOf(a),t=l[i].value;t!==s&&(p(a),r(t))},u=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const i=o.indexOf(e.currentTarget)+1;a=o[i]??o[0];break}case"ArrowLeft":{const i=o.indexOf(e.currentTarget)-1;a=o[i]??o[o.length-1];break}}a?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":i},a),children:l.map((e=>{let{value:a,label:i,attributes:n}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,ref:e=>o.push(e),onKeyDown:u,onClick:c,...n,className:(0,t.A)("tabs__item",f.tabItem,n?.className,{"tabs__item--active":s===a}),children:i??a},a)}))})}function y(e){let{lazy:a,children:i,selectedValue:n}=e;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function j(e){const a=b(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,g.jsx)(x,{...a,...e}),(0,g.jsx)(y,{...a,...e})]})}function S(e){const a=(0,v.A)();return(0,g.jsx)(j,{...e,children:u(e.children)},String(a))}},28453:(e,a,i)=>{i.d(a,{R:()=>r,x:()=>l});var s=i(96540);const t={},n=s.createContext(t);function r(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);