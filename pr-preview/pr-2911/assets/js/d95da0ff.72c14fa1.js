"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[68414],{60951:(e,i,s)=>{s.r(i),s.d(i,{Highlight:()=>p,assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var t=s(74848),n=s(28453),a=s(86025),l=s(11470),r=s(19365);const o={id:"supported-devices",title:"Using Real and Virtual Mobile Devices for Testing",sidebar_label:"Supported Mobile Devices"},c=void 0,d={id:"mobile-apps/supported-devices",title:"Using Real and Virtual Mobile Devices for Testing",description:"Getting the most out of your live and automated testing means including a healthy mix of Emulators, Simulators, and real devices as your mobile testing platforms. Why? Most aspects of the mobile experience you can test on Emulators or Simulators, while some scenarios require testing on physical real devices (e.g., memory consumption, CPU usage, location-based apps that use manufacturer-specific device sensors).",source:"@site/docs/mobile-apps/supported-devices.md",sourceDirName:"mobile-apps",slug:"/mobile-apps/supported-devices",permalink:"/sauce-docs/pr-preview/pr-2911/mobile-apps/supported-devices",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/supported-devices.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"supported-devices",title:"Using Real and Virtual Mobile Devices for Testing",sidebar_label:"Supported Mobile Devices"},sidebar:"docs",previous:{title:"App Storage",permalink:"/sauce-docs/pr-preview/pr-2911/mobile-apps/app-storage"},next:{title:"Real Device Cleaning Process",permalink:"/sauce-docs/pr-preview/pr-2911/mobile-apps/real-device-cleaning"}},h={},p=({children:e,color:i})=>{const s={span:"span",...(0,n.R)()};return(0,t.jsx)(s.span,{style:{backgroundColor:i,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:e})},u=[{value:"When to Test on Emulators and Simulators",id:"when-to-test-on-emulators-and-simulators",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"System Requirements",id:"system-requirements",level:3},{value:"When to Test on Real Devices",id:"when-to-test-on-real-devices",level:2},{value:"Use Cases",id:"use-cases-1",level:3},{value:"Supported OS versions and devices",id:"supported-os-versions-and-devices",level:3},{value:"Public Device Cloud",id:"public-device-cloud",level:3},{value:"Private Device Cloud",id:"private-device-cloud",level:3},{value:"System Requirements",id:"system-requirements-1",level:3},{value:"Security",id:"security",level:3},{value:"Real Device Cleaning",id:"real-device-cleaning",level:4},{value:"Data Center Security",id:"data-center-security",level:4},{value:"Static and Dynamic Device Allocation",id:"static-and-dynamic-device-allocation",level:3},{value:"Static Device Allocation",id:"static-device-allocation",level:4},{value:"Dynamic Device Allocation",id:"dynamic-device-allocation",level:4},{value:"Based on Display Name",id:"based-on-display-name",level:5},{value:"Based on platform version",id:"based-on-platform-version",level:5},{value:"Additional Resources",id:"additional-resources",level:2}];function m(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Getting the most out of your live and automated testing means including a healthy mix of Emulators, Simulators, and real devices as your mobile testing platforms. Why? Most aspects of the mobile experience you can test on Emulators or Simulators, while some scenarios require testing on physical real devices (e.g., memory consumption, CPU usage, location-based apps that use manufacturer-specific device sensors)."}),"\n",(0,t.jsx)(i.p,{children:"There are a variety of use cases to consider when you're deciding on the mix of Emulators, Simulators, and real devices to use in your testing."}),"\n",(0,t.jsxs)(i.p,{children:["We support thousands of device/OS combinations and test automation frameworks such as Appium, Espresso, XCUITest, and Robotium. For a full list, see ",(0,t.jsx)(i.a,{href:"https://saucelabs.com/platform/supported-browsers-devices",children:"Supported Browsers & Devices"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"when-to-test-on-emulators-and-simulators",children:"When to Test on Emulators and Simulators"}),"\n",(0,t.jsx)(i.h3,{id:"use-cases",children:"Use Cases"}),"\n",(0,t.jsx)(i.p,{children:"If you need:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Massive concurrency."}),"\n",(0,t.jsx)(i.li,{children:"To reduce build times."}),"\n",(0,t.jsx)(i.li,{children:"To save costs."}),"\n",(0,t.jsx)(i.li,{children:"Immediate availability."}),"\n",(0,t.jsx)(i.li,{children:"Extremely low error rates for your test environment."}),"\n",(0,t.jsx)(i.li,{children:"Longer test times -- native framework tests on real devices enforce a maximum test duration limit of 60 minutes."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"system-requirements",children:"System Requirements"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{style:{textAlign:"center"}}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:"iOS Mobile Apps"}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:"Android Mobile Apps"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"Requirements"})}),(0,t.jsxs)(i.td,{style:{textAlign:"center"},children:[(0,t.jsx)("p",{children:"Your iOS app must be:"}),(0,t.jsx)("p",{children:"Compiled for the simulator/device version of your choice"}),(0,t.jsx)("p",{children:"Compressed into a .zip package/archive file (must include app directory)"}),(0,t.jsxs)("p",{children:[(0,t.jsx)(i.a,{href:"/sauce-docs/pr-preview/pr-2911/mobile-apps/app-storage",children:"Uploaded and hosted"})," in a place that Sauce Labs can access (for example: AWS, GitHub, or Sauce Labs App Storage)"]})]}),(0,t.jsxs)(i.td,{style:{textAlign:"center"},children:[(0,t.jsx)("p",{children:"Your Android app must be:"}),(0,t.jsx)("p",{children:"Compiled for the simulator/device version of your choice"}),(0,t.jsx)("p",{children:"Configured to have\xa0internet permissions"}),(0,t.jsx)("p",{children:"Built into an .apk or .aab package/archive file"}),(0,t.jsxs)("p",{children:[(0,t.jsx)(i.a,{href:"/sauce-docs/pr-preview/pr-2911/mobile-apps/app-storage",children:"Uploaded and hosted"})," in a place that Sauce Labs can access (for example: AWS, GitHub, or Sauce Labs App Storage)."]})," ",(0,t.jsx)("p",{children:(0,t.jsxs)(i.em,{children:["Appium only. For Espresso, ",(0,t.jsx)(i.code,{children:"saucectl"})," uploads the referenced app for you."]})})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"Versions supported"})}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"iOS versions 10.3 and higher"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"Android versions 5.0 and higher"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"Tips"})}),(0,t.jsxs)(i.td,{style:{textAlign:"center"},children:[(0,t.jsxs)("p",{children:["If you're using App Storage, get the returned location, which will look something like\xa0storage",":filename","=myApplication.zip."]}),(0,t.jsxs)("p",{children:["In your ",(0,t.jsx)(i.a,{href:"/dev/test-configuration-options",children:"test capabilities"}),", specify the location of the .zip file, or the ",(0,t.jsx)(i.code,{children:"storage:filename=myApplication.zip"})," URL as described in\xa0",(0,t.jsx)(i.a,{href:"/sauce-docs/pr-preview/pr-2911/mobile-apps/app-storage",children:"App Storage"}),"."]})]}),(0,t.jsxs)(i.td,{style:{textAlign:"center"},children:[(0,t.jsx)("p",{children:"This StackOverflow article\xa0contains instructions on how to build an\xa0.apk\xa0file in Eclipse."}),(0,t.jsxs)("p",{children:["In your test capabilities, specify the location of the\xa0.apk\xa0 or \xa0.aab\xa0file, or the\xa0",(0,t.jsx)(i.code,{children:"storage:filename=app.apk"}),"\xa0URL as described in ",(0,t.jsx)(i.a,{href:"/sauce-docs/pr-preview/pr-2911/mobile-apps/app-storage",children:"App Storage"}),"."]})]})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"when-to-test-on-real-devices",children:"When to Test on Real Devices"}),"\n",(0,t.jsxs)(i.p,{children:["The Sauce Labs Real Device Cloud (RDC) provides you with the ability to run live and automated tests across Android and iOS devices. ",(0,t.jsx)(i.a,{href:"https://saucelabs.com/platform/real-device-cloud",children:"Learn more here"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"use-cases-1",children:"Use Cases"}),"\n",(0,t.jsx)(i.p,{children:"If you need:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"A breadth of device types for panel/compatibility testing."}),"\n",(0,t.jsx)(i.li,{children:"Manual, interactive testing on actual physical devices."}),"\n",(0,t.jsx)(i.li,{children:"To replicate an issue to match exact model as reported."}),"\n",(0,t.jsx)(i.li,{children:"Pixel-perfect display testing."}),"\n",(0,t.jsx)(i.li,{children:"To test hardware dependencies like CPU, memory, display, GPS."}),"\n",(0,t.jsx)(i.li,{children:"To test native ARM Libraries."}),"\n",(0,t.jsx)(i.li,{children:"To test on a custom OS (e.g., Samsung TouchWiz, OnePlus OxygenOS)"}),"\n",(0,t.jsx)(i.li,{children:"To test on a native framework like Espresso and Robotium."}),"\n",(0,t.jsx)(i.li,{children:"To test scenarios that require carrier network connectivity (e.g., making phone calls and sending SMS messages to devices with SIM cards)."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"supported-os-versions-and-devices",children:"Supported OS versions and devices"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Available major OS versions for iOS/iPadOS real devices: 17.X, 16.X, 15.X, 14.X, 13.X, 12.X"}),"\n",(0,t.jsx)(i.li,{children:"Available major OS versions for Android real devices: 14.X, 13.X, 12.X, 11.X, 10.X, 9.X"}),"\n",(0,t.jsx)(i.li,{children:"Our support is limited to real devices manufactured within the last 6 years."}),"\n",(0,t.jsx)(i.li,{children:"Devices manufactured longer than 6 years ago are not supported."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"public-device-cloud",children:"Public Device Cloud"}),"\n",(0,t.jsxs)(i.p,{children:["Our public cloud, available to all users regardless of pricing plan, contains a wide selection of thoroughly cleaned devices. They are subject to availability. On the mobile device selection screen, if a device is in use, it'll be marked with a ",(0,t.jsxs)(i.a,{href:"/mobile-apps/live-testing/live-mobile-app-testing/#public-vs-private-devices",children:[(0,t.jsx)(i.strong,{children:"In Use"})," flag"]}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Here are some use cases:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The devices available on the public cloud are sufficient for your testing coverage."}),"\n",(0,t.jsx)(i.li,{children:"You need to reproduce bugs on a selection of hundreds of iOS and Android devices."}),"\n",(0,t.jsx)(i.li,{children:"You need to upload and spot check apps on devices you don\u2019t have access to."}),"\n",(0,t.jsx)(i.li,{children:"You need to share manual test sessions and devices across teams worldwide."}),"\n",(0,t.jsx)(i.li,{children:"You are looking for a low-cost real device testing option."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"private-device-cloud",children:"Private Device Cloud"}),"\n",(0,t.jsx)("p",{children:(0,t.jsx)("span",{className:"sauceGreen",children:"Enterprise Only"})}),"\n",(0,t.jsxs)(i.p,{children:["This is a dedicated pool of devices just for your organization. On the mobile device selection screen, your private devices are marked with a ",(0,t.jsx)(i.a,{href:"/mobile-apps/live-testing/live-mobile-app-testing/#public-vs-private-devices",children:"green device icon"}),". Here are some use cases:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"You need to use a very specific set of devices that aren't supported on the public cloud."}),"\n",(0,t.jsx)(i.li,{children:"Your security team insists on dedicated devices."}),"\n",(0,t.jsx)(i.li,{children:"You want to run automated parallel tests across multiple devices simultaneously."}),"\n",(0,t.jsx)(i.li,{children:"You need specific settings which are set on the devices all the time."}),"\n",(0,t.jsxs)(i.li,{children:["You need to establish a secure ",(0,t.jsx)(i.a,{href:"/secure-connections/ipsec-vpn",children:"IPSec VPN connection"})," between your network and the Sauce Labs cloud."]}),"\n",(0,t.jsx)(i.li,{children:"You want to test your apps with MDM Distribution (Intune)."}),"\n",(0,t.jsx)(i.li,{children:"You want to test securely payment workflow with Apple Payment, or In-App Purchase, and retain your card data on your own dedicated device."}),"\n",(0,t.jsx)(i.li,{children:"You want to test eSIM/SIM card-related workflows."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"system-requirements-1",children:"System Requirements"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{style:{textAlign:"center"}}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:"iOS Mobile Apps"}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:"Android Mobile Apps"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"Requirements"})}),(0,t.jsxs)(i.td,{style:{textAlign:"center"},children:[(0,t.jsx)("p",{children:"Your iOS app must be:"}),(0,t.jsxs)("p",{children:["Formatted as a .app or .ipa file. Refer to the documentation on ",(0,t.jsx)(i.a,{href:"/mobile-apps/automated-testing/ipa-files",children:"how to create an .ipa file"})]}),(0,t.jsxs)("p",{children:["Uploaded and hosted in ",(0,t.jsx)(i.a,{href:"/sauce-docs/pr-preview/pr-2911/mobile-apps/app-storage",children:"Sauce Labs storage"})," or installed from a remote location."]}),(0,t.jsx)("p",{children:(0,t.jsxs)(i.em,{children:["Appium only. For XCUITest, ",(0,t.jsx)(i.code,{children:"saucectl"})," uploads the referenced app for you."]})})]}),(0,t.jsxs)(i.td,{style:{textAlign:"center"},children:[(0,t.jsx)("p",{children:"Your Android app must be:"}),(0,t.jsx)("p",{children:"Built into an .apk or .aab package/archive file."}),(0,t.jsxs)("p",{children:["Configured to have ",(0,t.jsx)(i.a,{href:"http://developer.android.com/reference/android/Manifest.permission.html#INTERNET",children:"internet permissions"})]}),(0,t.jsxs)("p",{children:["Uploaded and hosted in ",(0,t.jsx)(i.a,{href:"/sauce-docs/pr-preview/pr-2911/mobile-apps/app-storage",children:"Sauce Labs storage"})," or installed from a remote location."]}),(0,t.jsx)("p",{children:(0,t.jsxs)(i.em,{children:["Appium only. For Expresso, ",(0,t.jsx)(i.code,{children:"saucectl"})," uploads the referenced app for you."]})})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"Versions supported"})}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"iOS versions 12.5.X and higher"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"Android versions 8.0 and higher"})]})]})]}),"\n",(0,t.jsxs)(i.p,{children:["For the full list of supported real devices, see ",(0,t.jsx)(i.a,{href:"https://saucelabs.com/platform/supported-browsers-devices",children:"Supported Browsers and Devices"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"security",children:"Security"}),"\n",(0,t.jsx)(i.h4,{id:"real-device-cleaning",children:"Real Device Cleaning"}),"\n",(0,t.jsx)(i.p,{children:"We use a proprietary process that wipes every real device clean at the end of the testing session:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"User accounts and data are cleared from the device."}),"\n",(0,t.jsx)(i.li,{children:"History and user data is removed from the default system browser. Non-default browsers are uninstalled."}),"\n",(0,t.jsx)(i.li,{children:"Network settings are reset."}),"\n",(0,t.jsx)(i.li,{children:"Device settings are reset."}),"\n",(0,t.jsx)(i.li,{children:"Your app is uninstalled."}),"\n",(0,t.jsx)(i.li,{children:"Cached data is deleted."}),"\n",(0,t.jsx)(i.li,{children:"Device is de-allocated from you."}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{type:"caution",children:(0,t.jsx)(i.p,{children:"While we take these actions to clean public real devices after each test session, we do not perform factory resets nor do we have anti-virus software installed on them. It is possible that other users of the public RDC may engage in malicious, careless or unsecure activity, and that sophisticated, persistent malware could therefore be present on any device in the public RDC."})}),"\n",(0,t.jsx)(i.admonition,{type:"caution",children:(0,t.jsx)(i.p,{children:"If you test a Progressive Web Application (PWA) and install it on the home screen of the device, make sure that you remove the PWA manually before you close your session. At the moment we can\u2019t remove the PWA and its data during our cleaning process."})}),"\n",(0,t.jsx)(i.h4,{id:"data-center-security",children:"Data Center Security"}),"\n",(0,t.jsxs)(i.p,{children:["Real Device Cloud Data Center security is described in ",(0,t.jsx)(i.a,{href:"/basics/data-center-endpoints",children:"Data Center Endpoints"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"static-and-dynamic-device-allocation",children:"Static and Dynamic Device Allocation"}),"\n",(0,t.jsxs)(i.p,{children:["Regardless of the test frameworks you're using (Appium, Espresso, XCUITest), you can configure your real device tests using static and dynamic device allocation. While the syntax may be different (i.e., ",(0,t.jsx)(i.code,{children:"--device"}),", ",(0,t.jsx)(i.code,{children:"deviceName"}),"), the functionality is the same across all frameworks."]}),"\n",(0,t.jsx)(i.h4,{id:"static-device-allocation",children:"Static Device Allocation"}),"\n",(0,t.jsxs)(i.p,{children:["This is specifying an exact device for your test by setting ",(0,t.jsx)(i.code,{children:"deviceName"})," to the Device ID, which you can find under ",(0,t.jsx)(i.strong,{children:"Live"})," > ",(0,t.jsx)(i.strong,{children:"Mobile-App"})," > ",(0,t.jsx)(i.strong,{children:"Choose device"})," > Find Your Device > ",(0,t.jsx)(i.strong,{children:"Details"})," > ",(0,t.jsx)(i.strong,{children:"ID"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,a.Ay)("img/mobile-apps/static-allocation-data.jpg"),alt:"Sauce Labs Static Allocation data",width:"750"}),"\n",(0,t.jsxs)(i.p,{children:["When using this, there's no need to specify the ",(0,t.jsx)(i.code,{children:"platformName"})," and ",(0,t.jsx)(i.code,{children:"platformVersion"})," because they'll be set by default (i.e., if you include these separately included in your test script, they will be ignored)."]}),"\n",(0,t.jsxs)(l.A,{defaultValue:"Appium-android",values:[{label:"Appium (Android)",value:"Appium-android"},{label:"Appium (iOS)",value:"Appium-ios"},{label:"Espresso",value:"Espresso"},{label:"XCUITest",value:"XCUITest"}],children:[(0,t.jsxs)(r.A,{value:"Espresso",children:["Static allocation example \u2014 exact device names are provided.",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yml",children:"devices:\n  - id: Google_Pixel_7_Pro_real_us\n"})})]}),(0,t.jsxs)(r.A,{value:"XCUITest",children:["Static allocation example \u2014 exact device names are provided.",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yml",children:"devices:\n  - id: iPhone_11_13_5_real_us\n"})})]}),(0,t.jsxs)(r.A,{value:"Appium-android",children:["Static allocation examples \u2014 exact device name are provided.",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'capabilities.setCapability("appium:deviceName", "Google_Pixel_7_Pro_real_us");\n'})})]}),(0,t.jsxs)(r.A,{value:"Appium-ios",children:["Static allocation examples \u2014 exact device name are provided.",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'capabilities.setCapability("appium:deviceName", "iPhone_11_13_5_real_us");\n'})})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(i.h4,{id:"dynamic-device-allocation",children:"Dynamic Device Allocation"}),"\n",(0,t.jsxs)(i.p,{children:["This is specifying basic parameters for your test by setting ",(0,t.jsx)(i.code,{children:"deviceName"})," to the Display Name and or ",(0,t.jsx)(i.code,{children:"platformVersion"})," to the OS Version by ",(0,t.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Regular_expression",children:"regular expressions (regex)"})," to dynamically allocate a device. (If you want to use the OS Version you need to remove the ",(0,t.jsx)(i.code,{children:"Android"})," or ",(0,t.jsx)(i.code,{children:"iOS"})," prefix from the OS version). A device(s) with your specifications will be selected from the real device pool."]}),"\n",(0,t.jsxs)(i.p,{children:["You can find the Display Name or OS Version under ",(0,t.jsx)(i.strong,{children:"Live"})," > ",(0,t.jsx)(i.strong,{children:"Mobile-App"})," > ",(0,t.jsx)(i.strong,{children:"Choose device"})," > Find Your Device > ",(0,t.jsx)(i.strong,{children:"Details"})," > ",(0,t.jsx)(i.strong,{children:"Title|OS"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,a.Ay)("img/mobile-apps/dynamic-allocation-data.jpg"),alt:"Sauce Labs Dynamic Allocation data",width:"750"}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"The more strict you set the capabilities, the smaller the pool of available devices will be and the longer you might need to wait for an available device."})}),"\n",(0,t.jsx)(i.h5,{id:"based-on-display-name",children:"Based on Display Name"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{style:{textAlign:"left"},children:"Regex Input"}),(0,t.jsx)(i.th,{style:{textAlign:"left"},children:"Dynamic Allocation Action"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:'"iPhone.*" ,  "iPhone .*"'})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Allocates any iPhone device. See ",(0,t.jsx)(i.a,{href:"https://regex101.com/r/PC63Dw/1",children:"example"})," or this ",(0,t.jsx)(i.a,{href:"https://regex101.com/r/WzEPxP/1",children:"example"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:'".*nexus.*"'})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:['Allocates any device with the word "nexus" in its display name. See ',(0,t.jsx)(i.a,{href:"https://regex101.com/r/dzDlCh/1",children:"example"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,t.jsx)(i.code,{children:'"iPhone [67]"'})," or ",(0,t.jsx)(i.code,{children:'"iPhone [6-7]"'})]}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Both will allocate either an iPhone 7 or iPhone 6 device. See ",(0,t.jsx)(i.a,{href:"https://regex101.com/r/KE9vt1/1",children:"example"})," or this ",(0,t.jsx)(i.a,{href:"https://regex101.com/r/xe0FgY/1",children:"example"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,t.jsx)(i.code,{children:'"iPhone [67]S"'})," or ",(0,t.jsx)(i.code,{children:'"iPhone [6-7]S"'})]}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Both will allocate either an iPhone 7S or iPhone 6S device. See ",(0,t.jsx)(i.a,{href:"https://regex101.com/r/fkzBJj/2",children:"example"})," or this ",(0,t.jsx)(i.a,{href:"https://regex101.com/r/fkzBJj/3",children:"example"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:'"iPhone 7.*"'})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:['Allocates any device that starts with the display name "iPhone 7" (e.g., iPhone 7, iPhone 7S). See ',(0,t.jsx)(i.a,{href:"https://regex101.com/r/oTpgdA/1",children:"example"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)("code",{children:'"^(?!Nokia.*|Oppo.*|Huawei.*|Xiaomi.*).*"'})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Allocates any Android devices, ",(0,t.jsx)(i.strong,{children:"except"})," Nokia, Oppo, Huawei, and Xiaomi. See ",(0,t.jsx)(i.a,{href:"https://regex101.com/r/YKdiQQ/1",children:"example"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)("code",{children:'"^(?=Nokia.*|Oppo.*|Huawei.*|Xiaomi.*).*"'})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Allocates ",(0,t.jsx)(i.strong,{children:"only"})," Nokia, Oppo, Huawei, and Xiaomi devices. See ",(0,t.jsx)(i.a,{href:"https://regex101.com/r/yhQ3oy/2",children:"example"}),"."]})]})]})]}),"\n",(0,t.jsxs)(l.A,{defaultValue:"Appium-android",values:[{label:"Appium (Android)",value:"Appium-android"},{label:"Appium (iOS)",value:"Appium-ios"},{label:"Espresso",value:"Espresso"},{label:"XCUITest",value:"XCUITest"}],children:[(0,t.jsxs)(r.A,{value:"Espresso",children:['Dynamic allocation example - finds any device that starts with the display name "Google".',(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yml",children:'devices:\n  - name: "^Google.*"\n'})}),"Dynamic allocation example - finds all Android devices except the Oppo ones.",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yml",children:'devices:\n  - name: "^(?!Oppo).*"\n'})})]}),(0,t.jsxs)(r.A,{value:"XCUITest",children:['Dynamic allocation example - finds any device that starts with the display name "iPhone".',(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yml",children:'devices:\n  - name: "^iPhone.*"\n'})}),"Dynamic allocation example - finds all iPhone devices except 5 and 5S.",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yml",children:'devices:\n  - name: "^iPhone\\s+(?!(5|5S)).*"\n'})})]}),(0,t.jsxs)(r.A,{value:"Appium-android",children:['Dynamic allocation example - finds any device that starts with the display name "Google".',(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'capabilities.setCapability("appium:deviceName", "^Google.*");\n'})}),"Dynamic allocation example - finds all Android devices except the Oppo ones.",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'capabilities.setCapability("appium:deviceName", "^(?!Oppo).*");\n'})})]}),(0,t.jsxs)(r.A,{value:"Appium-ios",children:['Dynamic allocation example - finds any device that starts with the display name "iPhone".',(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'capabilities.setCapability("appium:deviceName", "^iPhone.*");\n'})}),"Dynamic allocation example - finds all iPhone devices except 5 and 5S.",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'capabilities.setCapability("appium:deviceName", "^iPhone\\s+(?!(5|5S)).*");\n'})})]})]}),"\n",(0,t.jsx)(i.h5,{id:"based-on-platform-version",children:"Based on platform version"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{style:{textAlign:"left"},children:"Regex Input"}),(0,t.jsx)(i.th,{style:{textAlign:"left"},children:"Dynamic Allocation Action"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)("code",{children:'"^1[3-4|6].*"'})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Will match ",(0,t.jsx)(i.code,{children:"13"}),", ",(0,t.jsx)(i.code,{children:"14"})," and ",(0,t.jsx)(i.code,{children:"16"}),", but not 15, see ",(0,t.jsx)(i.a,{href:"https://regex101.com/r/ExICgZ/1",children:"example"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:'"^(?!15).*"'})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Will exclude version ",(0,t.jsx)(i.code,{children:"15"})," with all it's minors and patches, but will match all other versions, see ",(0,t.jsx)(i.a,{href:"https://regex101.com/r/UqqYrM/1",children:"example"}),"."]})]})]})]}),"\n",(0,t.jsxs)(l.A,{defaultValue:"Appium-android",values:[{label:"Appium (Android)",value:"Appium-android"},{label:"Appium (iOS)",value:"Appium-ios"},{label:"Espresso",value:"Espresso"},{label:"XCUITest",value:"XCUITest"}],children:[(0,t.jsxs)(r.A,{value:"Espresso",children:['Dynamic allocation example - finds any device that starts with the display name "Google" and uses Android 11, 12 or 13.',(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yml",children:'devices:\n  - name: "^Google.*"\n    platformVersion: "^1[1-3].*"\n'})})]}),(0,t.jsxs)(r.A,{value:"XCUITest",children:['Dynamic allocation example - finds any device that starts with the display name "iPhone" and does not have iOS 15.',(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yml",children:'devices:\n  - name: "^iPhone.*"\n    platformVersion: "^(?!15).*"\n'})})]}),(0,t.jsxs)(r.A,{value:"Appium-android",children:['Dynamic allocation example - finds any device that starts with the display name "Google" and uses Android 11, 12 or 13.',(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'capabilities.setCapability("appium:deviceName", "^Google.*");\ncapabilities.setCapability("appium:platformVersion", "^1[1-3].*");\n'})})]}),(0,t.jsxs)(r.A,{value:"Appium-ios",children:['Dynamic allocation example - finds any device that starts with the display name "iPhone" and does not have iOS 15.',(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'capabilities.setCapability("appium:deviceName", "^iPhone.*");\ncapabilities.setCapability("appium:platformVersion", "^(?!15).*");\n'})})]})]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"A matching device must be present in your account in order for the test to run."}),"\n",(0,t.jsxs)(i.li,{children:["Regex values are not case-sensitive (i.e., ",(0,t.jsx)(i.code,{children:'"iphone .*S"'})," and ",(0,t.jsx)(i.code,{children:'"IPHONe .*s"'})," are the same)."]}),"\n"]})}),"\n",(0,t.jsx)("div",{width:"100%",children:(0,t.jsx)("iframe",{src:"https://vercel.live/open-feedback/dynamic-allocation-git-add-signup-api-wswebcreation.vercel.app?via=pr-comment-visit-preview-link&passThrough=1",width:"100%",height:"600"})}),"\n",(0,t.jsx)(i.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/mobile-apps/automated-testing/appium/real-devices",children:"Appium Testing on Real Devices"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/dev/test-configuration-options",children:"Test Configuration Options"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/mobile-apps/automated-testing/espresso-xcuitest",children:"Espresso and XCUITest Testing"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://saucelabs.com/blog/how-to-choose-mobile-devices-for-testing",children:"Sauce Labs Blog: How to Choose Mobile Devices for Testing"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://saucelabs.com/blog/better-together-real-devices-emulators-simulators-for-mobile-testing",children:"Better Together: Using Real Devices, Simulators, and Emulators for Mobile Testing"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://saucelabs.com/blog/mobile-testing-basics-manual-vs-automated-testing",children:"Mobile Testing Basics: Live Testing vs. Automated Testing"})}),"\n"]})]})}function x(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},19365:(e,i,s)=>{s.d(i,{A:()=>l});s(96540);var t=s(34164);const n={tabItem:"tabItem_Ymn6"};var a=s(74848);function l(e){let{children:i,hidden:s,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,l),hidden:s,children:i})}},11470:(e,i,s)=>{s.d(i,{A:()=>A});var t=s(96540),n=s(34164),a=s(23104),l=s(56347),r=s(205),o=s(57485),c=s(31682),d=s(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:i}=e;return!!i&&"object"==typeof i&&"value"in i}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:i,children:s}=e;return(0,t.useMemo)((()=>{const e=i??function(e){return h(e).map((e=>{let{props:{value:i,label:s,attributes:t,default:n}}=e;return{value:i,label:s,attributes:t,default:n}}))}(s);return function(e){const i=(0,c.XI)(e,((e,i)=>e.value===i.value));if(i.length>0)throw new Error(`Docusaurus error: Duplicate values "${i.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[i,s])}function u(e){let{value:i,tabValues:s}=e;return s.some((e=>e.value===i))}function m(e){let{queryString:i=!1,groupId:s}=e;const n=(0,l.W6)(),a=function(e){let{queryString:i=!1,groupId:s}=e;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:i,groupId:s});return[(0,o.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const i=new URLSearchParams(n.location.search);i.set(a,e),n.replace({...n.location,search:i.toString()})}),[a,n])]}function x(e){const{defaultValue:i,queryString:s=!1,groupId:n}=e,a=p(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:i,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!u({value:i,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${i}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return i}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:a}))),[c,h]=m({queryString:s,groupId:n}),[x,v]=function(e){let{groupId:i}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(i),[n,a]=(0,d.Dv)(s);return[n,(0,t.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:n}),j=(()=>{const e=c??x;return u({value:e,tabValues:a})?e:null})();(0,r.A)((()=>{j&&o(j)}),[j]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),v(e)}),[h,v,a]),tabValues:a}}var v=s(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function f(e){let{className:i,block:s,selectedValue:t,selectValue:l,tabValues:r}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const i=e.currentTarget,s=o.indexOf(i),n=r[s].value;n!==t&&(c(i),l(n))},h=e=>{let i=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;i=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;i=o[s]??o[o.length-1];break}}i?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},i),children:r.map((e=>{let{value:i,label:s,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===i?0:-1,"aria-selected":t===i,ref:e=>o.push(e),onKeyDown:h,onClick:d,...a,className:(0,n.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":t===i}),children:s??i},i)}))})}function y(e){let{lazy:i,children:s,selectedValue:a}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(i){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,i)=>(0,t.cloneElement)(e,{key:i,hidden:e.props.value!==a})))})}function b(e){const i=x(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",j.tabList),children:[(0,g.jsx)(f,{...i,...e}),(0,g.jsx)(y,{...i,...e})]})}function A(e){const i=(0,v.A)();return(0,g.jsx)(b,{...e,children:h(e.children)},String(i))}},28453:(e,i,s)=>{s.d(i,{R:()=>l,x:()=>r});var t=s(96540);const n={},a=t.createContext(n);function l(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);