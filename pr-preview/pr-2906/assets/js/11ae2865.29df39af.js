"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[134],{37489:(e,i,a)=>{a.r(i),a.d(i,{Highlight:()=>p,assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=a(74848),n=a(28453);a(86025),a(11470),a(19365);const s={id:"test-config",title:"Test Configuration",sidebar_label:"Test Configuration"},o=void 0,r={id:"basics/test-config-annotation/test-config",title:"Test Configuration",description:"Before running a browser or device test with Sauce Labs, you need to write your test script to launch the platform/operating system/browser combination you want, and specify the location of the app for testing. You'll also want to configure other options, such as the path to your app.",source:"@site/docs/basics/test-config-annotation/test-config.md",sourceDirName:"basics/test-config-annotation",slug:"/basics/test-config-annotation/test-config",permalink:"/sauce-docs/pr-preview/pr-2906/basics/test-config-annotation/test-config",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/test-config-annotation/test-config.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"test-config",title:"Test Configuration",sidebar_label:"Test Configuration"},sidebar:"docs",previous:{title:"Configuring Okta",permalink:"/sauce-docs/pr-preview/pr-2906/basics/sso-deprecated/config-okta"},next:{title:"Test Annotation",permalink:"/sauce-docs/pr-preview/pr-2906/basics/test-config-annotation/test-annotation"}},l={},p=({children:e,color:i})=>{const a={span:"span",...(0,n.R)()};return(0,t.jsx)(a.span,{style:{backgroundColor:i,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:e})},c=[{value:"Getting Ready to Test",id:"getting-ready-to-test",level:2},{value:"Capabilities for Selenium and Appium Tests",id:"capabilities-for-selenium-and-appium-tests",level:2},{value:"Examples of Test Configuration Options for Website Tests",id:"examples-of-test-configuration-options-for-website-tests",level:2},{value:"Default Selenium Version",id:"default-selenium-version",level:3},{value:"Examples for Selenium Mobile and Desktop Browsers",id:"examples-for-selenium-mobile-and-desktop-browsers",level:3},{value:"PC/Windows/IE",id:"pcwindowsie",level:4},{value:"PC/Linux/Chrome",id:"pclinuxchrome",level:4},{value:"Mac/OSX/Safari",id:"macosxsafari",level:4},{value:"Android Emulator Phone/Android 5.1",id:"android-emulator-phoneandroid-51",level:4},{value:"Samsung Galaxy S3 Emulator/Android 4.4",id:"samsung-galaxy-s3-emulatorandroid-44",level:4},{value:"Appium Mobile and Desktop Browser Test Configuration Examples",id:"appium-mobile-and-desktop-browser-test-configuration-examples",level:3},{value:"iPhone",id:"iphone",level:4},{value:"iPad",id:"ipad",level:4},{value:"Android Phone Emulator/Android 4.4",id:"android-phone-emulatorandroid-44",level:4},{value:"iPhone 6 Real Device",id:"iphone-6-real-device",level:4},{value:"Samsung Galaxy S5 Real Device",id:"samsung-galaxy-s5-real-device",level:4},{value:"Samsung Galaxy S4 Real Device",id:"samsung-galaxy-s4-real-device",level:4},{value:"Examples for Mobile Native Application Tests",id:"examples-for-mobile-native-application-tests",level:3},{value:"Mobile Native Application Test Configuration Tips",id:"mobile-native-application-test-configuration-tips",level:3},{value:"Setting <code>appiumVersion</code>",id:"setting-appiumversion",level:4},{value:"Checking the Appium Version for Your Test",id:"checking-the-appium-version-for-your-test",level:4},{value:"Setting Browser Name",id:"setting-browser-name",level:4},{value:"Setting the Location of the Mobile App",id:"setting-the-location-of-the-mobile-app",level:4},{value:"Setting <code>automationName</code> for Android Apps",id:"setting-automationname-for-android-apps",level:4},{value:"Enabling Location Services for iOS Devices",id:"enabling-location-services-for-ios-devices",level:4},{value:"Examples of Native and Hybrid Mobile Application Test Configuration",id:"examples-of-native-and-hybrid-mobile-application-test-configuration",level:3},{value:"iPhone Simulator Native Application",id:"iphone-simulator-native-application",level:4},{value:"iPad Simulator Native Application",id:"ipad-simulator-native-application",level:4},{value:"iPhone Simulator Hybrid Application",id:"iphone-simulator-hybrid-application",level:4},{value:"Android Native Application, Android v. 4.3",id:"android-native-application-android-v-43",level:4},{value:"Android Hybrid Application, Android v. 4.1",id:"android-hybrid-application-android-v-41",level:4}];function d(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Before running a browser or device test with Sauce Labs, you need to write your test script to launch the platform/operating system/browser combination you want, and specify the location of the app for testing. You'll also want to configure other options, such as the path to your app."}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"/dev/test-configuration-options",children:"Test Configuration Options"})," for a list of valid test configuration options for tests run on Sauce Labs."]}),"\n",(0,t.jsxs)(i.p,{children:["You can also ",(0,t.jsx)(i.a,{href:"/basics/test-config-annotation/test-annotation/",children:"annotate"})," your tests with attributes (such as build ID, name, tags, and pass/fail status) using the Sauce Labs REST API or Selenium's JavaScript executor."]}),"\n",(0,t.jsx)(i.h2,{id:"getting-ready-to-test",children:"Getting Ready to Test"}),"\n",(0,t.jsxs)(i.p,{children:["Test configuration refers to setting the capabilities of your test within the test script itself. There are required capabilities for both Selenium and Appium tests, as well as an extensive set of optional capabilities (some of which are exclusive to Sauce Labs). You can use our ",(0,t.jsx)(i.a,{href:"https://saucelabs.com/platform/platform-configurator#/",children:"Platform Configurator"})," to create the required capabilities for your test scripts, or use one of our ",(0,t.jsx)(i.a,{href:"https://github.com/saucelabs-training",children:"sample test frameworks"})," to set up the capabilities for parallel testing across multiple platform/operating systems."]}),"\n",(0,t.jsx)(i.h2,{id:"capabilities-for-selenium-and-appium-tests",children:"Capabilities for Selenium and Appium Tests"}),"\n",(0,t.jsxs)(i.p,{children:["You can configure the environment for your Appium and Selenium tests by specifying a set of capabilities. Our ",(0,t.jsx)(i.a,{href:"https://saucelabs.com/platform/platform-configurator#/",children:"Platform Configurator"})," can set test capabilities for testing in the scripting language of your choice. ",(0,t.jsx)(i.a,{href:"/dev/test-configuration-options",children:"Test Configuration Options"})," provides a complete list of all Selenium, Appium, and Sauce Labs testing capabilities."]}),"\n",(0,t.jsx)(i.h2,{id:"examples-of-test-configuration-options-for-website-tests",children:"Examples of Test Configuration Options for Website Tests"}),"\n",(0,t.jsx)(i.p,{children:"You can test websites using either Selenium or Appium. Selenium has better support for desktop devices, while Appium has better support for testing websites on mobile devices with native browsers. However, website testing against Android devices with Appium is only supported for Android versions 4.4 and higher.\nAll examples are for Java, but you can use our Platform Configurator to configure your tests in the language of your choice."}),"\n",(0,t.jsx)(i.h3,{id:"default-selenium-version",children:"Default Selenium Version"}),"\n",(0,t.jsx)(i.p,{children:"By default, Sauce Labs will use the following version of Selenium, depending on your selected combination of browser and operating system. While Selenium 3 is not yet fully implemented as a default version, it is supported for all Chrome and Firefox browsers on Mac and Windows platforms, for Safari 10+ on macOS 10.12 Sierra, and for Microsoft Edge and IE browsers version 10 and above. Currently Sauce Labs supports Selenium 3.4.0+ for Firefox and Safari and Selenium 3.5.0+ for Microsoft Edge and Chrome."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Browser Name"}),(0,t.jsx)(i.th,{children:"Default Selenium Version"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Microsoft Edge"}),(0,t.jsx)(i.td,{children:"2.52.0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Chrome"}),(0,t.jsx)(i.td,{children:"Latest Chromedriver"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Firefox"}),(0,t.jsxs)(i.td,{children:["Dev: 3.4.0",(0,t.jsx)("br",{}),"Beta: 3.4.0",(0,t.jsx)("br",{}),"53+: 3.4.0",(0,t.jsx)("br",{}),"39+: 2.53.1"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Safari"}),(0,t.jsxs)(i.td,{children:["11.0: 3.4.0",(0,t.jsx)("br",{}),"< 11.0: 2.48.0"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Internet Explorer"}),(0,t.jsx)(i.td,{children:"2.53.1"})]})]})]}),"\n",(0,t.jsx)(i.p,{children:"You can set the Selenium version for your tests by using the seleniumVersion desired capability:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"'seleniumVersion' = '3.8.1'\n"})}),"\n",(0,t.jsx)(i.h3,{id:"examples-for-selenium-mobile-and-desktop-browsers",children:"Examples for Selenium Mobile and Desktop Browsers"}),"\n",(0,t.jsx)(i.p,{children:"With Selenium you can test against both desktop and mobile devices, though there are limitations with Android versions and devices."}),"\n",(0,t.jsx)(i.h4,{id:"pcwindowsie",children:"PC/Windows/IE"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'DesiredCapabilities caps = DesiredCapabilities.internetExplorer();\ncaps.setCapability("platform", "Windows 8.1");\ncaps.setCapability("version", "11.0");\n'})}),"\n",(0,t.jsx)(i.h4,{id:"pclinuxchrome",children:"PC/Linux/Chrome"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'DesiredCapabilities caps = DesiredCapabilities.chrome();\ncaps.setCapability("platform", "Linux");\ncaps.setCapability("version", "47.0");\n'})}),"\n",(0,t.jsx)(i.h4,{id:"macosxsafari",children:"Mac/OSX/Safari"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'DesiredCapabilities caps = DesiredCapabilities.safari();\ncaps.setCapability("platform", "OS X 10.9");\ncaps.setCapability("version", "7.0");\n'})}),"\n",(0,t.jsx)(i.h4,{id:"android-emulator-phoneandroid-51",children:"Android Emulator Phone/Android 5.1"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'DesiredCapabilities caps = DesiredCapabilities.android();\ncaps.setCapability("platform", "Linux");\ncaps.setCapability("version", "5.1");\ncaps.setCapability("deviceName","Android Emulator");\ncaps.setCapability("deviceType","phone");\ncaps.setCapability("deviceOrientation", "portrait");\n'})}),"\n",(0,t.jsx)(i.h4,{id:"samsung-galaxy-s3-emulatorandroid-44",children:"Samsung Galaxy S3 Emulator/Android 4.4"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'DesiredCapabilities caps = DesiredCapabilities.android();\ncaps.setCapability("platform", "Linux");\ncaps.setCapability("version", "4.4");\ncaps.setCapability("deviceName","Samsung Galaxy S3 Emulator");\ncaps.setCapability("deviceOrientation", "portrait");\n'})}),"\n",(0,t.jsx)(i.h3,{id:"appium-mobile-and-desktop-browser-test-configuration-examples",children:"Appium Mobile and Desktop Browser Test Configuration Examples"}),"\n",(0,t.jsx)(i.h4,{id:"iphone",children:"iPhone"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'DesiredCapabilities caps = DesiredCapabilities.iphone();\ncaps.setCapability("appiumVersion", "1.5.1");\ncaps.setCapability("deviceName","iPhone 6");\ncaps.setCapability("deviceOrientation", "portrait");\ncaps.setCapability("platformVersion","8.4");\ncaps.setCapability("platformName", "iOS");\ncaps.setCapability("browserName", "Safari");\n'})}),"\n",(0,t.jsx)(i.h4,{id:"ipad",children:"iPad"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'DesiredCapabilities caps = DesiredCapabilities.iphone();\ncaps.setCapability("appiumVersion", "1.5.1");\ncaps.setCapability("deviceName","iPad Retina");\ncaps.setCapability("deviceOrientation", "portrait");\ncaps.setCapability("platformVersion","8.4");\ncaps.setCapability("platformName", "iOS");\ncaps.setCapability("browserName", "Safari");\n'})}),"\n",(0,t.jsx)(i.h4,{id:"android-phone-emulatorandroid-44",children:"Android Phone Emulator/Android 4.4"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'DesiredCapabilities caps = DesiredCapabilities.android();\ncaps.setCapability("appiumVersion", "1.5.1");\ncaps.setCapability("deviceName","Android Emulator");\ncaps.setCapability("deviceType","phone");\ncaps.setCapability("deviceOrientation", "portrait");\ncaps.setCapability("browserName", "Browser");\ncaps.setCapability("platformVersion", "4.4");\ncaps.setCapability("platformName","Android");\n'})}),"\n",(0,t.jsx)(i.h4,{id:"iphone-6-real-device",children:"iPhone 6 Real Device"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"{\ndeviceName:'iPhone 6 Device',\nplatformName:'iOS',\nplatformVersion:'8.0',\nbrowserName:'Safari',\n\"appium-version\":\"1.5.1\"\n}\n"})}),"\n",(0,t.jsx)(i.h4,{id:"samsung-galaxy-s5-real-device",children:"Samsung Galaxy S5 Real Device"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"{\ndeviceName:'Samsung Galaxy S5 Device',\nplatformName:'Android',\nplatformVersion:'4.4',\nbrowserName:'Chrome',\nname:'S5 real device google.com'\n}\n"})}),"\n",(0,t.jsx)(i.h4,{id:"samsung-galaxy-s4-real-device",children:"Samsung Galaxy S4 Real Device"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"{\ndeviceName:'Samsung Galaxy S4 Device',\nplatformName:'Android',\nplatformVersion:'4.4',\nbrowserName:'Chrome',\nname:'S5 real device google.com'\n}\n"})}),"\n",(0,t.jsx)(i.h3,{id:"examples-for-mobile-native-application-tests",children:"Examples for Mobile Native Application Tests"}),"\n",(0,t.jsxs)(i.p,{children:["This following includes tips and examples of how to configure your mobile native app tests with Appium. For more detailed descriptions about the capabilities of Appium tests, check out the ",(0,t.jsx)(i.a,{href:"http://appium.io/slate/en/master/?python#appium-server-capabilities",children:"Server Capabilities"})," section of the official Appium website. All examples are for Java, but you can use the ",(0,t.jsx)(i.a,{href:"https://saucelabs.com/platform/platform-configurator#/",children:"Platform Configurator"})," to set the capabilities in the language of your choice."]}),"\n",(0,t.jsx)(i.h3,{id:"mobile-native-application-test-configuration-tips",children:"Mobile Native Application Test Configuration Tips"}),"\n",(0,t.jsxs)(i.h4,{id:"setting-appiumversion",children:["Setting ",(0,t.jsx)(i.code,{children:"appiumVersion"})]}),"\n",(0,t.jsxs)(i.p,{children:["If you omit the ",(0,t.jsx)(i.code,{children:"appiumVersion"})," in your test configuration, your test will be running with our default Appium version. Sauce recommends that you specify one of the newer Appium versions that provides a more extended API and fixes to known bugs."]}),"\n",(0,t.jsx)(i.h4,{id:"checking-the-appium-version-for-your-test",children:"Checking the Appium Version for Your Test"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Log in to saucelabs.com."}),"\n",(0,t.jsxs)(i.li,{children:["Find and select the test that you ran using Appium to view the ",(0,t.jsx)(i.strong,{children:"Test Details"})," page."]}),"\n",(0,t.jsxs)(i.li,{children:["Click the ",(0,t.jsx)(i.strong,{children:"Metadata"})," tab."]}),"\n",(0,t.jsxs)(i.li,{children:["Look for the ",(0,t.jsx)(i.strong,{children:"Logs"})," row and select ",(0,t.jsx)(i.strong,{children:"Appium Log"}),".\nThe first line should indicate the Appium version. For example, ",(0,t.jsx)(i.code,{children:"2014-05-05T17:45:07.541Z - info: Welcome to Appium v1.3.6"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"setting-browser-name",children:"Setting Browser Name"}),"\n",(0,t.jsxs)(i.p,{children:["When testing a native mobile app, the value for browserName is an empty string, as in ",(0,t.jsx)(i.code,{children:'caps.setCapability("browserName", "");'})]}),"\n",(0,t.jsx)(i.h4,{id:"setting-the-location-of-the-mobile-app",children:"Setting the Location of the Mobile App"}),"\n",(0,t.jsxs)(i.p,{children:["If the app you want to test has been uploaded to a location other than our App Storage, you need to specify this location for app, and make sure that this location is accessible to Sauce Labs browsers. For example, ",(0,t.jsx)(i.code,{children:'caps.setCapability("app","storage:filename=mapp.zip");'})]}),"\n",(0,t.jsxs)(i.h4,{id:"setting-automationname-for-android-apps",children:["Setting ",(0,t.jsx)(i.code,{children:"automationName"})," for Android Apps"]}),"\n",(0,t.jsxs)(i.p,{children:["If you're testing a native mobile app against Android versions 4.0 - 4.1, or a hybrid mobile against Android versions 4.0 - 4.2, you need to set the capability ",(0,t.jsx)(i.code,{children:'"automationName","selendroid"'}),". These Android versions are only supported via Appium\u2019s bundled version of Selendroid, which utilizes ",(0,t.jsx)(i.a,{href:"http://developer.android.com/reference/android/app/Instrumentation.html",children:"Instrumentation"}),". Later versions of Android are supported via Appium\u2019s own UiAutomator library."]}),"\n",(0,t.jsx)(i.h4,{id:"enabling-location-services-for-ios-devices",children:"Enabling Location Services for iOS Devices"}),"\n",(0,t.jsx)(i.p,{children:"If you want to enable location services in an iOS simulator, for example to test GPS-dependent apps, you should set these capabilities in your Appium test script:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"locationServicesEnabled=true"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"locationServicesAuthorized=true"})}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"examples-of-native-and-hybrid-mobile-application-test-configuration",children:"Examples of Native and Hybrid Mobile Application Test Configuration"}),"\n",(0,t.jsx)(i.h4,{id:"iphone-simulator-native-application",children:"iPhone Simulator Native Application"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'DesiredCapabilities caps = DesiredCapabilities.iphone();\ncaps.setCapability("appiumVersion", "1.5.1");\ncaps.setCapability("deviceName","iPhone 5");\ncaps.setCapability("deviceOrientation", "portrait");\ncaps.setCapability("platformVersion","8.4");\ncaps.setCapability("platformName", "iOS");\ncaps.setCapability("browserName", "");\ncaps.setCapability("app","storage:filename=mapp.zip");\n'})}),"\n",(0,t.jsx)(i.h4,{id:"ipad-simulator-native-application",children:"iPad Simulator Native Application"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'DesiredCapabilities caps = DesiredCapabilities.iphone();\ncaps.setCapability("appiumVersion", "1.5.1");\ncaps.setCapability("deviceName","iPad Retina");\ncaps.setCapability("deviceOrientation", "portrait");\ncaps.setCapability("platformVersion","9.2");\ncaps.setCapability("platformName", "iOS");\ncaps.setCapability("browserName", "");\ncaps.setCapability("app","storage:filename=myapp.zip");\n'})}),"\n",(0,t.jsx)(i.h4,{id:"iphone-simulator-hybrid-application",children:"iPhone Simulator Hybrid Application"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'DesiredCapabilities caps = DesiredCapabilities.iphone();\ncaps.setCapability("appiumVersion", "1.5.1");\ncaps.setCapability("deviceName","iPhone Retina (4-inch 64-bit)");\ncaps.setCapability("deviceOrientation", "portrait");\ncaps.setCapability("platformVersion","8.4");\ncaps.setCapability("platformName", "iOS");\ncaps.setCapability("browserName", "");\ncaps.setCapability("app","storage:filename=myapp.zip");\n'})}),"\n",(0,t.jsx)(i.h4,{id:"android-native-application-android-v-43",children:"Android Native Application, Android v. 4.3"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'DesiredCapabilities caps = DesiredCapabilities.android();\ncaps.setCapability("appiumVersion", "1.5.1");\ncaps.setCapability("deviceName","Samsung Galaxy S4 Emulator");\ncaps.setCapability("deviceOrientation", "portrait");\ncaps.setCapability("browserName", "");\ncaps.setCapability("platformVersion","4.3");\ncaps.setCapability("platformName","Android");\ncaps.setCapability("app","storage:filename=myapp.zip");\n'})}),"\n",(0,t.jsx)(i.h4,{id:"android-hybrid-application-android-v-41",children:"Android Hybrid Application, Android v. 4.1"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'DesiredCapabilities caps = DesiredCapabilities.android();\ncaps.setCapability("appiumVersion", "1.5.1");\ncaps.setCapability("deviceName","Android Emulator");\ncaps.setCapability("deviceType","tablet");\ncaps.setCapability("deviceOrientation", "portrait");\ncaps.setCapability("browserName", "");\ncaps.setCapability("platformVersion","4.1");\ncaps.setCapability("platformName","Android");\ncaps.setCapability("app","storage:filename=myapp.zip");\ncaps.setCapability("automationName","Selendroid");\n'})})]})}function u(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},19365:(e,i,a)=>{a.d(i,{A:()=>o});a(96540);var t=a(18215);const n={tabItem:"tabItem_Ymn6"};var s=a(74848);function o(e){let{children:i,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,o),hidden:a,children:i})}},11470:(e,i,a)=>{a.d(i,{A:()=>j});var t=a(96540),n=a(18215),s=a(23104),o=a(56347),r=a(205),l=a(57485),p=a(31682),c=a(89466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:i}=e;return!!i&&"object"==typeof i&&"value"in i}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:i,children:a}=e;return(0,t.useMemo)((()=>{const e=i??function(e){return d(e).map((e=>{let{props:{value:i,label:a,attributes:t,default:n}}=e;return{value:i,label:a,attributes:t,default:n}}))}(a);return function(e){const i=(0,p.X)(e,((e,i)=>e.value===i.value));if(i.length>0)throw new Error(`Docusaurus error: Duplicate values "${i.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[i,a])}function h(e){let{value:i,tabValues:a}=e;return a.some((e=>e.value===i))}function m(e){let{queryString:i=!1,groupId:a}=e;const n=(0,o.W6)(),s=function(e){let{queryString:i=!1,groupId:a}=e;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:i,groupId:a});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const i=new URLSearchParams(n.location.search);i.set(s,e),n.replace({...n.location,search:i.toString()})}),[s,n])]}function b(e){const{defaultValue:i,queryString:a=!1,groupId:n}=e,s=u(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:i,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!h({value:i,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${i}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return i}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:s}))),[p,d]=m({queryString:a,groupId:n}),[b,f]=function(e){let{groupId:i}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(i),[n,s]=(0,c.Dv)(a);return[n,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),v=(()=>{const e=p??b;return h({value:e,tabValues:s})?e:null})();(0,r.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=a(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(74848);function g(e){let{className:i,block:a,selectedValue:t,selectValue:o,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.a_)(),c=e=>{const i=e.currentTarget,a=l.indexOf(i),n=r[a].value;n!==t&&(p(i),o(n))},d=e=>{let i=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;i=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;i=l[a]??l[l.length-1];break}}i?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},i),children:r.map((e=>{let{value:i,label:a,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===i?0:-1,"aria-selected":t===i,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":t===i}),children:a??i},i)}))})}function y(e){let{lazy:i,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(i){const e=s.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,i)=>(0,t.cloneElement)(e,{key:i,hidden:e.props.value!==n})))})}function C(e){const i=b(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...e,...i}),(0,x.jsx)(y,{...e,...i})]})}function j(e){const i=(0,f.A)();return(0,x.jsx)(C,{...e,children:d(e.children)},String(i))}},28453:(e,i,a)=>{a.d(i,{R:()=>o,x:()=>r});var t=a(96540);const n={},s=t.createContext(n);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);