"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[52778],{15858:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var t=i(74848),n=i(28453),r=(i(86025),i(11470)),l=i(19365);const o={id:"appium-flutter",title:"Appium Flutter Testing on Sauce Labs",sidebar_label:"Appium Flutter Testing",description:"Learn how to test Flutter apps with the Appium Flutter Driver."},s=void 0,p={id:"mobile-apps/automated-testing/appium/appium-flutter",title:"Appium Flutter Testing on Sauce Labs",description:"Learn how to test Flutter apps with the Appium Flutter Driver.",source:"@site/docs/mobile-apps/automated-testing/appium/appium-flutter.md",sourceDirName:"mobile-apps/automated-testing/appium",slug:"/mobile-apps/automated-testing/appium/appium-flutter",permalink:"/sauce-docs/pr-preview/pr-2905/mobile-apps/automated-testing/appium/appium-flutter",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/automated-testing/appium/appium-flutter.md",tags:[],version:"current",lastUpdatedBy:"bahrimootaz",lastUpdatedAt:1720706086e3,frontMatter:{id:"appium-flutter",title:"Appium Flutter Testing on Sauce Labs",sidebar_label:"Appium Flutter Testing",description:"Learn how to test Flutter apps with the Appium Flutter Driver."},sidebar:"docs",previous:{title:"Test App Upgrades",permalink:"/sauce-docs/pr-preview/pr-2905/mobile-apps/automated-testing/appium/test-app-upgrades"},next:{title:"Appium Flutter Integration Testing",permalink:"/sauce-docs/pr-preview/pr-2905/mobile-apps/automated-testing/appium/appium-flutter-integration-driver"}},u={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Preprocessing your Flutter App",id:"preprocessing-your-flutter-app",level:2},{value:"Building your Flutter App",id:"building-your-flutter-app",level:2},{value:"Uploading your Flutter App to Sauce Labs",id:"uploading-your-flutter-app-to-sauce-labs",level:2},{value:"Configuring your Appium Capabilities",id:"configuring-your-appium-capabilities",level:2},{value:"Android Emulators and iOS Simulators",id:"android-emulators-and-ios-simulators",level:3},{value:"Real Devices",id:"real-devices",level:3}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.admonition,{title:"Appium Flutter Driver",type:"warning",children:(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.a,{href:"https://github.com/appium-userland/appium-flutter-driver/",children:(0,t.jsx)(a.code,{children:"appium-flutter-driver"})}),". is now considered a legacy driver by Appium,\nmeaning no bug fixes or updates will be released. However, it can still be used when running tests on Sauce Labs.\nWe advise transitioning to the ",(0,t.jsx)(a.a,{href:"https://github.com/AppiumTestDistribution/appium-flutter-integration-driver",children:"appium-flutter-integration-driver"}),".\nA guide on how to run tests on Sauce Labs using the new driver can be found ",(0,t.jsx)(a.a,{href:"/mobile-apps/automated-testing/appium/appium-flutter-integration-driver",children:"here"}),"."]})}),"\n",(0,t.jsxs)(a.p,{children:["Sauce Labs supports testing Flutter apps on Android and iOS virtual and real devices with Appium by supporting the ",(0,t.jsx)(a.a,{href:"https://github.com/appium-userland/appium-flutter-driver/",children:(0,t.jsx)(a.code,{children:"appium-flutter-driver"})}),". The process to test Flutter apps with Appium involves an extra and important step, which is ",(0,t.jsx)(a.a,{href:"#preprocessing-your-flutter-app",children:"preprocessing your app"}),". After that you can ",(0,t.jsx)(a.a,{href:"#building-your-flutter-app",children:"build"})," it, ",(0,t.jsx)(a.a,{href:"#uploading-your-flutter-app-to-sauce-labs",children:"upload"})," it to Sauce Labs, ",(0,t.jsx)(a.a,{href:"#configuring-your-appium-capabilities",children:"configure your Appium capabilities"})," and run your tests."]}),"\n",(0,t.jsx)(a.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Familiarity with creating, signing and building ",(0,t.jsx)(a.a,{href:"https://docs.flutter.dev/",children:"Flutter apps"}),"."]}),"\n",(0,t.jsxs)(a.li,{children:["Familiarity writing and running ",(0,t.jsx)(a.a,{href:"/mobile-apps/automated-testing/appium/",children:"Appium tests"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"preprocessing-your-flutter-app",children:"Preprocessing your Flutter App"}),"\n",(0,t.jsxs)(a.p,{children:["The Appium Flutter Driver uses the ",(0,t.jsx)(a.a,{href:"https://github.com/dart-lang/sdk/blob/master/runtime/vm/service/service.md",children:"Dart VM Service Protocol"})," with extension ",(0,t.jsx)(a.code,{children:"ext.flutter.driver"}),", similar to Flutter Driver, to control the Flutter app-under-test (AUT). This needs to be enabled in the AUT before the app can be tested with Appium Flutter Driver and can be done by following the steps below:"]}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"Open your Flutter project in your favorite IDE."}),"\n",(0,t.jsxs)(a.li,{children:["In your ",(0,t.jsx)(a.code,{children:"pubspec.yaml"})," file, add the following dependency:"]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-yaml",children:"#...\ndev_dependencies:\ntest: any\nflutter_test:\nsdk: flutter\nflutter_driver:\nsdk: flutter\n#...\n"})}),"\n",(0,t.jsx)(a.p,{children:"Both libraries provide functions and APIs respectively to write tests for Flutter apps."}),"\n",(0,t.jsxs)(a.ol,{start:"3",children:["\n",(0,t.jsxs)(a.li,{children:["Run the following command to install the ",(0,t.jsx)(a.code,{children:"dev_dependencies"})," that you added in the previous step."]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"flutter pub get\n"})}),"\n",(0,t.jsxs)(a.ol,{start:"4",children:["\n",(0,t.jsxs)(a.li,{children:["Now open the ",(0,t.jsx)(a.code,{children:"main.dart"})," file in your Flutter project and add the following code statement."]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-dart",children:"import 'package:flutter_driver/driver_extension.dart';\n"})}),"\n",(0,t.jsxs)(a.p,{children:["This statement imports the ",(0,t.jsx)(a.code,{children:"driver_extension.dart"})," file from the ",(0,t.jsx)(a.code,{children:"flutter_driver"})," library and is the first step to enable the Flutter Driver extension."]}),"\n",(0,t.jsxs)(a.ol,{start:"5",children:["\n",(0,t.jsxs)(a.li,{children:["The ",(0,t.jsx)(a.code,{children:"import"})," from the previous step provides an ",(0,t.jsx)(a.code,{children:"enableFlutterDriverExtension()"})," function that enables the Flutter Driver extension. Add the following code statement in the main.dart file of your Flutter project to enable it for your project."]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-dart",children:"void main() {\n  // This line enables the extension\n  enableFlutterDriverExtension();\n\n  runApp(const MyApp());\n}\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Check out the ",(0,t.jsx)(a.a,{href:"https://api.flutter.dev/flutter/flutter_driver_extension/enableFlutterDriverExtension.html",children:(0,t.jsx)(a.code,{children:"enableFlutterDriverExtension"})})," function section to learn more about it's powers."]}),"\n",(0,t.jsx)(a.h2,{id:"building-your-flutter-app",children:"Building your Flutter App"}),"\n",(0,t.jsx)(a.p,{children:"After you have enabled the Flutter Driver extension, you can now build your app for testing. To do so, follow the steps below"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"Open your Flutter project in your favorite IDE and or open a terminal in the root directory of your Flutter project."}),"\n",(0,t.jsx)(a.li,{children:"Determine for which device type (Android Emulator/Real Device or iOS Simulator/Real Device) you want to build your app for."}),"\n",(0,t.jsx)(a.li,{children:"Run one of the following commands"}),"\n"]}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"OS"}),(0,t.jsx)(a.th,{children:"Device Type"}),(0,t.jsx)(a.th,{children:"Build Command"}),(0,t.jsx)(a.th,{children:"Output Folder"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"Android"}),(0,t.jsx)(a.td,{children:"Emulator"}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"flutter build apk --debug"})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"{project-root}/build/app/outputs/flutter-apk/"})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"Android"}),(0,t.jsx)(a.td,{children:"Real Device"}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"flutter build apk --debug"})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"{project-root}/build/app/outputs/flutter-apk/"})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"iOS"}),(0,t.jsx)(a.td,{children:"Simulator"}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"flutter build ios --simulator"})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"{project-root}/build/ios/iphonesimulator/"})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"iOS"}),(0,t.jsx)(a.td,{children:"Real Device"}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"flutter build ipa --profile"})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"{project-root}/build/ios/ipa/"})})]})]})]}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["For more information regarding the build modes (",(0,t.jsx)(a.code,{children:"debug"}),", ",(0,t.jsx)(a.code,{children:"release"}),", ",(0,t.jsx)(a.code,{children:"profile"}),") for Flutter apps, see ",(0,t.jsx)(a.a,{href:"https://docs.flutter.dev/testing/build-modes",children:"Flutter's build modes documentation"}),"."]})}),"\n",(0,t.jsx)(a.h2,{id:"uploading-your-flutter-app-to-sauce-labs",children:"Uploading your Flutter App to Sauce Labs"}),"\n",(0,t.jsxs)(a.p,{children:["You can now upload the built apps with our ",(0,t.jsx)(a.a,{href:"/dev/api/storage/#upload-file-to-app-storage",children:"REST API"}),", or manually upload them to the preferred Data Center. See ",(0,t.jsx)(a.a,{href:"/mobile-apps/live-testing/live-mobile-app-testing/#uploading-an-app",children:"Manually Uploading an App"})," for more information."]}),"\n",(0,t.jsx)(a.h2,{id:"configuring-your-appium-capabilities",children:"Configuring your Appium Capabilities"}),"\n",(0,t.jsxs)(a.p,{children:["More information on how to write Appium tests for Flutter apps can be found in the ",(0,t.jsx)(a.a,{href:"https://github.com/appium-userland/appium-flutter-driver/",children:"Appium Flutter Driver"})," repository. You can also find a sample Flutter app and tests in the ",(0,t.jsx)(a.a,{href:"https://github.com/saucelabs-training/demo-js/tree/docs-1.2/webdriverio/appium-app/examples/appium-flutter",children:"Demo JS - Appium Flutter"}),"-repository."]}),"\n",(0,t.jsx)(a.admonition,{title:"W3C Capabilities",type:"note",children:(0,t.jsxs)(a.p,{children:["We encourage you to use W3C capabilities for your tests. For more information on W3C capabilities, see ",(0,t.jsx)(a.a,{href:"/dev/test-configuration-options/#mobile-appium-capabilities",children:"W3C Capabilities"}),"."]})}),"\n",(0,t.jsx)(a.p,{children:"Apps that have been built with Flutter 2 can use Appium 1 and Appium 2, while apps that have been built with Flutter 3 can only use Appium 2."}),"\n",(0,t.jsx)(a.h3,{id:"android-emulators-and-ios-simulators",children:"Android Emulators and iOS Simulators"}),"\n",(0,t.jsxs)(r.A,{groupId:"capability-ex-emusim",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Node.js",value:"js"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"C#",value:"csharp"}],children:[(0,t.jsx)(l.A,{value:"java",children:(0,t.jsxs)(r.A,{groupId:"capability-java-emusim",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],children:[(0,t.jsx)(l.A,{value:"android",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'MutableCapabilities capabilities = new MutableCapabilities();\n\ncapabilities.setCapability("platformName", "android");\ncapabilities.setCapability("appium:platformVersion", "12");\ncapabilities.setCapability("appium:deviceName", "Google Pixel 6 Pro GoogleAPI Emulator");\n// Mandatory for using the appium-flutter-driver\ncapabilities.setCapability("appium:automationName", "flutter");\ncapabilities.setCapability("appium:app", "storage:filename=flutter-counter-debug.apk");\n\nHashMap<String, Object> sauceOptions = new HashMap<String, Object>();\nsauceOptions.put("appiumVersion", "2.0.0-beta56");\ncapabilities.setCapability("sauce:options", sauceOptions);\n'})})}),(0,t.jsx)(l.A,{value:"ios",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'MutableCapabilities capabilities = new MutableCapabilities();\n\ncapabilities.setCapability("platformName", "ios");\ncapabilities.setCapability("appium:platformVersion", "15.4");\ncapabilities.setCapability("appium:deviceName", "iPhone 13 Simulator");\n// Mandatory for using the appium-flutter-driver\ncapabilities.setCapability("appium:automationName", "flutter");\ncapabilities.setCapability("appium:app", "storage:filename=flutter-counter-debug.zip");\n\nHashMap<String, Object> sauceOptions = new HashMap<String, Object>();\nsauceOptions.put("appiumVersion", "2.0.0-beta56");\ncapabilities.setCapability("sauce:options", sauceOptions);\n'})})})]})}),(0,t.jsx)(l.A,{value:"js",children:(0,t.jsxs)(r.A,{groupId:"capability-js-emusim",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],children:[(0,t.jsx)(l.A,{value:"android",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",children:"const capabilities = {\n    platformName: 'android',\n    'appium:platformVersion': '12',\n    'appium:deviceName': 'Google Pixel 6 Pro GoogleAPI Emulator',\n    // Mandatory for using the appium-flutter-driver\n    'appium:automationName': 'flutter',\n    'appium:app': 'storage:filename=flutter-counter-debug.apk',\n    'sauce:options': {\n        appiumVersion: '2.0.0-beta56'\n    }\n}\n"})})}),(0,t.jsx)(l.A,{value:"ios",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",children:"const capabilities = {\n    platformName: 'ios',\n    'appium:platformVersion': '15.4',\n    'appium:deviceName': 'iPhone 13 Simulator',\n    // Mandatory for using the appium-flutter-driver\n    'appium:automationName': 'flutter',\n    'appium:app': 'storage:filename=flutter-counter-debug.zip',\n    'sauce:options': {\n        appiumVersion: '2.0.0-beta56'\n    }\n}\n"})})})]})}),(0,t.jsx)(l.A,{value:"python",children:(0,t.jsxs)(r.A,{groupId:"capability-python-emusim",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],children:[(0,t.jsx)(l.A,{value:"android",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-py",children:'capabilities = {\n    "platformName" : "android",\n    "appium:platformVersion" : "12",\n    "appium:deviceName" : "Google Pixel 6 Pro GoogleAPI Emulator",\n    # Mandatory for using the appium-flutter-driver\n    \'appium:automationName\': \'flutter\',\n    \'appium:app\': \'storage:filename=flutter-counter-debug.apk\',\n    "sauce:options" : {\n        "appiumVersion" : "2.0.0-beta56"\n    }\n}\n'})})}),(0,t.jsx)(l.A,{value:"ios",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-py",children:'capabilities = {\n    "platformName" : "ios",\n    "appium:platformVersion" : "15.4",\n    "appium:deviceName" : "iPhone 13 Simulator",\n    # Mandatory for using the appium-flutter-driver\n    \'appium:automationName\': \'flutter\',\n    \'appium:app\': \'storage:filename=flutter-counter-debug.zip\',\n    "sauce:options" : {\n        "appiumVersion" : "2.0.0-beta56"\n    }\n}\n'})})})]})}),(0,t.jsx)(l.A,{value:"ruby",children:(0,t.jsxs)(r.A,{groupId:"capability-ruby-emusim",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],children:[(0,t.jsx)(l.A,{value:"android",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ruby",children:'capabilities = {\n    "platformName" => "android",\n    "appium:platformVersion" => "12",\n    "appium:deviceName" => "Google Pixel 6 Pro GoogleAPI Emulator",\n    # Mandatory for using the appium-flutter-driver\n    \'appium:automationName\' => \'flutter\',\n    \'appium:app\' => \'storage:filename=flutter-counter-debug.apk\',\n    "sauce:options" => {\n        "appiumVersion" => "2.0.0-beta56"\n    }\n}\n'})})}),(0,t.jsx)(l.A,{value:"ios",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ruby",children:'capabilities = {\n    "platformName" => "ios",\n    "appium:platformVersion" => "15.4",\n    "appium:deviceName" => "iPhone 13 Simulator",\n    # Mandatory for using the appium-flutter-driver\n    \'appium:automationName\'=> \'flutter\',\n    \'appium:app\' => \'storage:filename=flutter-counter-debug.zip\',\n    "sauce:options" => {\n        "appiumVersion" => "2.0.0-beta56"\n    }\n}\n'})})})]})}),(0,t.jsx)(l.A,{value:"csharp",children:(0,t.jsxs)(r.A,{groupId:"capability-csharp",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],children:[(0,t.jsx)(l.A,{value:"android",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csharp",children:'AppiumOptions capabilities = new AppiumOptions();\n\ncapabilities.AddAdditionalCapability("platformName", "android");\ncapabilities.AddAdditionalCapability("appium:platformVersion", "12");\ncapabilities.AddAdditionalCapability("appium:deviceName", "Google Pixel 6 Pro GoogleAPI Emulator");\n// Mandatory for using the appium-flutter-driver\ncapabilities.AddAdditionalCapability("appium:automationName", "flutter");\ncapabilities.AddAdditionalCapability("appium:app", "storage:filename=flutter-counter-debug.apk");\n\nHashMap<String, Object> sauceOptions = new Dictionary<string, object>();\nsauceOptions.Add("appiumVersion", "2.0.0-beta56");\ncapabilities.AddAdditionalCapability("sauce:options", sauceOptions);\n'})})}),(0,t.jsx)(l.A,{value:"ios",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csharp",children:'AppiumOptions capabilities = new AppiumOptions();\n\ncapabilities.AddAdditionalCapability("platformName", "ios");\ncapabilities.AddAdditionalCapability("appium:platformVersion", "15.4");\ncapabilities.AddAdditionalCapability("appium:deviceName", "iPhone 13 Simulator");\n// Mandatory for using the appium-flutter-driver\ncapabilities.AddAdditionalCapability("appium:automationName", "flutter");\ncapabilities.AddAdditionalCapability("appium:app", "storage:filename=flutter-counter-debug.zip");\n\nHashMap<String, Object> sauceOptions = new Dictionary<string, object>();\nsauceOptions.Add("appiumVersion", "2.0.0-beta56");\ncapabilities.AddAdditionalCapability("sauce:options", sauceOptions);\n'})})})]})})]}),"\n",(0,t.jsx)(a.h3,{id:"real-devices",children:"Real Devices"}),"\n",(0,t.jsxs)(r.A,{groupId:"capability-ex",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Node.js",value:"js"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"C#",value:"csharp"}],children:[(0,t.jsx)(l.A,{value:"java",children:(0,t.jsxs)(r.A,{groupId:"capability-java",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],children:[(0,t.jsx)(l.A,{value:"android",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'MutableCapabilities capabilities = new MutableCapabilities();\n\ncapabilities.setCapability("platformName", "android");\n// W3C Protocol is mandatory for Appium 2.0\ncapabilities.setCapability("appium:platformVersion", "12");\ncapabilities.setCapability("appium:deviceName", "Google Pixel 6");\n// Mandatory for Appium 2.0\ncapabilities.setCapability("appium:automationName", "flutter");\ncapabilities.setCapability("appium:app", "storage:filename=flutter-counter-debug.apk");\n\nHashMap<String, Object> sauceOptions = new HashMap<String, Object>();\n// appiumVersion is mandatory to use Appium 2.0 on Sauce Labs\nsauceOptions.put("appiumVersion", "2.0.0");\ncapabilities.setCapability("sauce:options", sauceOptions);\n'})})}),(0,t.jsx)(l.A,{value:"ios",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'MutableCapabilities capabilities = new MutableCapabilities();\n\ncapabilities.setCapability("platformName", "ios");\n// W3C Protocol is mandatory for Appium 2.0\ncapabilities.setCapability("appium:platformVersion", "16");\ncapabilities.setCapability("appium:deviceName", "iPhone 14");\n// Mandatory for Appium 2.0\ncapabilities.setCapability("appium:automationName", "flutter");\ncapabilities.setCapability("appium:app", "storage:filename=flutter-counter-debug.ipa");\n\nHashMap<String, Object> sauceOptions = new HashMap<String, Object>();\n// appiumVersion is mandatory to use Appium 2.0 on Sauce Labs\nsauceOptions.put("appiumVersion", "2.0.0");\ncapabilities.setCapability("sauce:options", sauceOptions);\n'})})})]})}),(0,t.jsx)(l.A,{value:"js",children:(0,t.jsxs)(r.A,{groupId:"capability-js",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],children:[(0,t.jsx)(l.A,{value:"android",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",children:"const capabilities = {\n    platformName: 'android',\n    // W3C Protocol is mandatory for Appium 2.0\n    'appium:platformVersion': '12',\n    'appium:deviceName': 'Google Pixel 6',\n    // Mandatory for Appium 2.0\n    'appium:automationName': 'flutter',\n    'appium:app': 'storage:filename=flutter-counter-debug.apk',\n    'sauce:options': {\n        // appiumVersion is mandatory to use Appium 2.0 on Sauce Labs\n        appiumVersion: '2.0.0'\n    }\n}\n"})})}),(0,t.jsx)(l.A,{value:"ios",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",children:"const capabilities = {\n    platformName: 'ios',\n    // W3C Protocol is mandatory for Appium 2.0\n    'appium:platformVersion': '16',\n    'appium:deviceName': 'iPhone 14',\n    // Mandatory for Appium 2.0\n    'appium:automationName': 'flutter',\n    'appium:app': 'storage:filename=flutter-counter-debug.ipa',\n    'sauce:options': {\n        // appiumVersion is mandatory to use Appium 2.0 on Sauce Labs\n        appiumVersion: '2.0.0'\n    }\n}\n"})})})]})}),(0,t.jsx)(l.A,{value:"python",children:(0,t.jsxs)(r.A,{groupId:"capability-python",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],children:[(0,t.jsx)(l.A,{value:"android",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-py",children:'capabilities = {\n    "platformName" : "android",\n    # W3C Protocol is mandatory for Appium 2.0\n    "appium:platformVersion" : "12",\n    "appium:deviceName" : "Google Pixel 6",\n    # Mandatory for Appium 2.0\n    \'appium:automationName\': \'flutter\',\n    \'appium:app\': \'storage:filename=flutter-counter-debug.apk\',\n    "sauce:options" : {\n        # appiumVersion is mandatory to use Appium 2.0 on Sauce Labs\n        "appiumVersion" : "2.0.0"\n    }\n}\n'})})}),(0,t.jsx)(l.A,{value:"ios",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-py",children:'capabilities = {\n    "platformName" : "ios",\n    # W3C Protocol is mandatory for Appium 2.0\n    "appium:platformVersion" : "16",\n    "appium:deviceName" : "iPhone 14",\n    # Mandatory for Appium 2.0\n    \'appium:automationName\': \'flutter\',\n    \'appium:app\': \'storage:filename=flutter-counter-debug.ipa\',\n    "sauce:options" : {\n        # appiumVersion is mandatory to use Appium 2.0 on Sauce Labs\n        "appiumVersion" : "2.0.0"\n    }\n}\n'})})})]})}),(0,t.jsx)(l.A,{value:"ruby",children:(0,t.jsxs)(r.A,{groupId:"capability-ruby",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],children:[(0,t.jsx)(l.A,{value:"android",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ruby",children:'capabilities = {\n    "platformName" => "android",\n    # W3C Protocol is mandatory for Appium 2.0\n    "appium:platformVersion" => "12",\n    "appium:deviceName" => "Google Pixel 6",\n    # Mandatory for Appium 2.0\n    \'appium:automationName\' => \'flutter\',\n    \'appium:app\' => \'storage:filename=flutter-counter-debug.apk\',\n    "sauce:options" => {\n        # appiumVersion is mandatory to use Appium 2.0 on Sauce Labs\n        "appiumVersion" => "2.0.0"\n    }\n}\n'})})}),(0,t.jsx)(l.A,{value:"ios",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ruby",children:'capabilities = {\n    "platformName" => "ios",\n    # W3C Protocol is mandatory for Appium 2.0\n    "appium:platformVersion" => "16",\n    "appium:deviceName" => "iPhone 14",\n    # Mandatory for Appium 2.0\n    \'appium:automationName\'=> \'flutter\',\n    \'appium:app\' => \'storage:filename=flutter-counter-debug.ipa\',\n    "sauce:options" => {\n        # appiumVersion is mandatory to use Appium 2.0 on Sauce Labs\n        "appiumVersion" => "2.0.0"\n    }\n}\n'})})})]})}),(0,t.jsx)(l.A,{value:"csharp",children:(0,t.jsxs)(r.A,{groupId:"capability-csharp",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],children:[(0,t.jsx)(l.A,{value:"android",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csharp",children:'AppiumOptions capabilities = new AppiumOptions();\n\ncapabilities.AddAdditionalCapability("platformName", "android");\n// W3C Protocol is mandatory for Appium 2.0\ncapabilities.AddAdditionalCapability("appium:platformVersion", "12");\ncapabilities.AddAdditionalCapability("appium:deviceName", "Google Pixel 6");\n// Mandatory for Appium 2.0\ncapabilities.AddAdditionalCapability("appium:automationName", "flutter");\ncapabilities.AddAdditionalCapability("appium:app", "storage:filename=flutter-counter-debug.apk");\n\nHashMap<String, Object> sauceOptions = new Dictionary<string, object>();\n// appiumVersion is mandatory to use Appium 2.0 on Sauce Labs\nsauceOptions.Add("appiumVersion", "2.0.0");\ncapabilities.AddAdditionalCapability("sauce:options", sauceOptions);\n'})})}),(0,t.jsx)(l.A,{value:"ios",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csharp",children:'AppiumOptions capabilities = new AppiumOptions();\n\ncapabilities.AddAdditionalCapability("platformName", "ios");\n// W3C Protocol is mandatory for Appium 2.0\ncapabilities.AddAdditionalCapability("appium:platformVersion", "16");\ncapabilities.AddAdditionalCapability("appium:deviceName", "iPhone 14");\n// Mandatory for Appium 2.0\ncapabilities.AddAdditionalCapability("appium:automationName", "flutter");\ncapabilities.AddAdditionalCapability("appium:app", "storage:filename=flutter-counter-debug.ipa");\n\nHashMap<String, Object> sauceOptions = new Dictionary<string, object>();\n// appiumVersion is mandatory to use Appium 2.0 on Sauce Labs\nsauceOptions.Add("appiumVersion", "2.0.0");\ncapabilities.AddAdditionalCapability("sauce:options", sauceOptions);\n'})})})]})})]})]})}function m(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},19365:(e,a,i)=>{i.d(a,{A:()=>l});i(96540);var t=i(18215);const n={tabItem:"tabItem_Ymn6"};var r=i(74848);function l(e){let{children:a,hidden:i,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,l),hidden:i,children:a})}},11470:(e,a,i)=>{i.d(a,{A:()=>A});var t=i(96540),n=i(18215),r=i(23104),l=i(56347),o=i(205),s=i(57485),p=i(31682),u=i(89466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:a,children:i}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:i,attributes:t,default:n}}=e;return{value:a,label:i,attributes:t,default:n}}))}(i);return function(e){const a=(0,p.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,i])}function m(e){let{value:a,tabValues:i}=e;return i.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:i}=e;const n=(0,l.W6)(),r=function(e){let{queryString:a=!1,groupId:i}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:a,groupId:i});return[(0,s.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace({...n.location,search:a.toString()})}),[r,n])]}function b(e){const{defaultValue:a,queryString:i=!1,groupId:n}=e,r=c(e),[l,s]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[p,d]=h({queryString:i,groupId:n}),[b,f]=function(e){let{groupId:a}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,r]=(0,u.Dv)(i);return[n,(0,t.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:n}),g=(()=>{const e=p??b;return m({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=i(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=i(74848);function v(e){let{className:a,block:i,selectedValue:t,selectValue:l,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.a_)(),u=e=>{const a=e.currentTarget,i=s.indexOf(a),n=o[i].value;n!==t&&(p(a),l(n))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const i=s.indexOf(e.currentTarget)+1;a=s[i]??s[0];break}case"ArrowLeft":{const i=s.indexOf(e.currentTarget)-1;a=s[i]??s[s.length-1];break}}a?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":i},a),children:o.map((e=>{let{value:a,label:i,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>s.push(e),onKeyDown:d,onClick:u,...r,className:(0,n.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":t===a}),children:i??a},a)}))})}function x(e){let{lazy:a,children:i,selectedValue:n}=e;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function y(e){const a=b(e);return(0,j.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,j.jsx)(v,{...e,...a}),(0,j.jsx)(x,{...e,...a})]})}function A(e){const a=(0,f.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(a))}},28453:(e,a,i)=>{i.d(a,{R:()=>l,x:()=>o});var t=i(96540);const n={},r=t.createContext(n);function l(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);