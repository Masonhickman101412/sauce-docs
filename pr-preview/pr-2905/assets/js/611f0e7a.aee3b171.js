"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[91956],{17629:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(74848),s=t(28453);t(86025),t(11470),t(19365);const i={id:"flutter",title:"Adding TestFairy to Your Flutter Project",sidebar_label:"Flutter"},a=void 0,o={id:"testfairy/platforms/flutter",title:"Adding TestFairy to Your Flutter Project",description:"If you are developing your app in Flutter, follow the instructions in this document add the TestFairy SDK.",source:"@site/docs/testfairy/platforms/flutter.md",sourceDirName:"testfairy/platforms",slug:"/testfairy/platforms/flutter",permalink:"/sauce-docs/pr-preview/pr-2905/testfairy/platforms/flutter",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/platforms/flutter.md",tags:[],version:"current",lastUpdatedBy:"Laura Thomas",lastUpdatedAt:168874644e4,frontMatter:{id:"flutter",title:"Adding TestFairy to Your Flutter Project",sidebar_label:"Flutter"},sidebar:"docs",previous:{title:"Expo",permalink:"/sauce-docs/pr-preview/pr-2905/testfairy/platforms/expo"},next:{title:"Ionic",permalink:"/sauce-docs/pr-preview/pr-2905/testfairy/platforms/ionic"}},l={},d=[{value:"Installation",id:"installation",level:2},{value:"Depend On It",id:"depend-on-it",level:3},{value:"Install It",id:"install-it",level:3},{value:"Import It",id:"import-it",level:3},{value:"Quick Start",id:"quick-start",level:2},{value:"How to Compile With the Latest Flutter and null-safe Dart?",id:"how-to-compile-with-the-latest-flutter-and-null-safe-dart",level:2},{value:"Troubleshooting FAQ",id:"troubleshooting-faq",level:2},{value:"API Reference",id:"api-reference",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"If you are developing your app in Flutter, follow the instructions in this document add the TestFairy SDK."}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.p,{children:"Use this package as a library."}),"\n",(0,r.jsx)(n.h3,{id:"depend-on-it",children:"Depend On It"}),"\n",(0,r.jsxs)(n.p,{children:["Add this to your package's ",(0,r.jsx)(n.code,{children:"pubspec.yaml"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"dependencies:\n  testfairy_flutter: any\n"})}),"\n",(0,r.jsx)(n.h3,{id:"install-it",children:"Install It"}),"\n",(0,r.jsx)(n.p,{children:"You can install packages from the command line:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ flutter packages get\n"})}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, your editor might support Flutter packages get. Check the docs for your editor to learn more."}),"\n",(0,r.jsx)(n.h3,{id:"import-it",children:"Import It"}),"\n",(0,r.jsx)(n.p,{children:"Now in your Dart code, you can use the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"import 'package:testfairy_flutter/testfairy_flutter.dart';\n\nvoid main() {\n TestFairy.begin(\"SDK-myToken\");\n runApp(MyApp());\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,r.jsx)(n.p,{children:"Include the library and run your main app like this."}),"\n",(0,r.jsxs)(n.p,{children:["Make sure your project is ",(0,r.jsx)(n.a,{href:"https://flutter.dev/docs/development/androidx-migration",children:"AndroidX"})," compatible."]}),"\n",(0,r.jsx)(n.p,{children:"The minimum supported iOS target is 9.0."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# inside pubspec.yaml\ndependencies:\n  testfairy_flutter: any\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"// inside your main.dart\n\n// @dart = 2.12\n// You can use other dart versions but we suggest 2.12 for better compile time checks.\nimport 'dart:async';\nimport 'dart:io';\nimport 'package:testfairy_flutter/testfairy_flutter.dart';\n\nvoid main() {\n  HttpOverrides.global = TestFairy.httpOverrides();\n\n  runZonedGuarded(\n    () async {\n      try {\n        FlutterError.onError =\n            (details) => TestFairy.logError(details.exception);\n\n        // Call `await TestFairy.begin()` or any other setup code here.\n\n        runApp(TestFairyGestureDetector(child: TestfairyExampleApp()));\n      } catch (error) {\n        TestFairy.logError(error);\n      }\n    },\n    (e, s) {\n      TestFairy.logError(e);\n    },\n    zoneSpecification: new ZoneSpecification(\n      print: (self, parent, zone, message) {\n        TestFairy.log(message);\n      },\n    )\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"how-to-compile-with-the-latest-flutter-and-null-safe-dart",children:"How to Compile With the Latest Flutter and null-safe Dart?"}),"\n",(0,r.jsxs)(n.p,{children:["To use TestFairy with the latest ",(0,r.jsx)(n.strong,{children:"stable"})," Flutter channel, you must set the minimum version for the plugin as 2.1.0."]}),"\n",(0,r.jsxs)(n.p,{children:["To use TestFairy with the latest ",(0,r.jsx)(n.strong,{children:"unstable"})," Flutter channel, you must clone this repository and use it as an offline dependency instead of the published version in pub."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Clone this ",(0,r.jsx)(n.a,{href:"https://github.com/testfairy/testfairy-flutter",children:"repository"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Use the following code to include the clone as an offline dependency (assuming both projects reside in the same directory as siblings)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'dependencies:\n  testfairy_flutter:\n  path: ../testfairy-flutter # or "./testfairy-flutter" if you cloned it inside your main project as a child directory\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Checkout ",(0,r.jsx)(n.strong,{children:"testfairy-flutter"})," to your VCS without including its ",(0,r.jsx)(n.strong,{children:".git"})," directory."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When there is a new update in this repository, delete ",(0,r.jsx)(n.strong,{children:"testfairy-flutter"})," and retry the steps."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"troubleshooting-faq",children:"Troubleshooting FAQ"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["I see ",(0,r.jsx)(n.code,{children:"warning: None of the architectures in ARCHS (x86_64) are valid"})," when I build an iOS app."]})}),"\n",(0,r.jsxs)(n.p,{children:["Launch your Runner workspace and add ",(0,r.jsx)(n.code,{children:"x86_64"})," to ",(0,r.jsx)(n.code,{children:"VALID_ARCHS"})," under ",(0,r.jsx)(n.strong,{children:"Build Settings"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["I see ",(0,r.jsx)(n.code,{children:"Specs satisfying the TestFairy dependency were found, but they required a higher minimum deployment target."})," when I build an iOS app."]})}),"\n",(0,r.jsx)(n.p,{children:"You have to update the native SDK alongside with CocoaPods repository."}),"\n",(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"pod repo update"})," and update the plugin in ",(0,r.jsx)(n.em,{children:"pubspec.yaml"}),". Then run ",(0,r.jsx)(n.code,{children:"cd ios; pod update TestFairy; cd .."}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["I have my own ",(0,r.jsx)(n.code,{children:"HttpOverrides.global"})," setup. How can I make it work with TestFairy?"]})}),"\n",(0,r.jsxs)(n.p,{children:["Copy ",(0,r.jsx)(n.a,{href:"https://github.com/testfairy/testfairy-flutter/blob/master/lib/src/network_logging.dart",children:"this"})," file to your project. Add the necessary functionality and assign an instance from your new implementation to ",(0,r.jsx)(n.code,{children:"HttpOverrides.global"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["I see ",(0,r.jsx)(n.code,{children:"Errno::ENOENT - No such file or directory @ rb_sysopen - ./ios/Pods/Local Podspecs/testfairy.podspec.json"})," when I build an iOS app."]})}),"\n",(0,r.jsxs)(n.p,{children:["This error happens due to a pod misconfiguration bug on the Flutter side. We have ",(0,r.jsx)(n.a,{href:"https://blog.testfairy.com/errnoenoent-fix-for-flutter-ios/",children:"a blog post"})," explaining the fix."]}),"\n",(0,r.jsxs)(n.p,{children:["Clean your project, and remove ",(0,r.jsx)(n.em,{children:"ios/Podfile"})," and Xcode workspace files. (make sure you have backups, just in case)"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"flutter clean\nrm -rf ios/Podfile ios/Podfile.lock pubspec.lock ios/Pods ios/Runner.xcworkspace\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Revert to ",(0,r.jsx)(n.strong,{children:"cocoapods 1.7.5"})," temporarily."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gem uninstall cocoapods\ngem install cocoapods -v 1.7.5\n"})}),"\n",(0,r.jsx)(n.p,{children:"Add the following line to the beginning of your iOS project's generated Podfile."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Beginning of file\nuse_frameworks!\n\n# The rest of the file contents\n# ...\n"})}),"\n",(0,r.jsx)(n.p,{children:"Install pods."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pod repo update\ncd ios\npod install\ncd ..\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retry your build."}),"\n",(0,r.jsx)(n.p,{children:"Once your build succeeds, you can update cocoapods to its latest version. If the error reoccurs, you must revert to 1.7.5 and retry the steps."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["I see ",(0,r.jsx)(n.code,{children:"Automatically assigning platform ios with version 8.0"})," when I build."]})}),"\n",(0,r.jsx)(n.p,{children:"TestFairy supports iOS 9.0 and above. Change the build target accordingly in your Xcode project."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["I see ",(0,r.jsx)(n.code,{children:"Looks like TestFairy has an upgrade to do... 1.X.Y+hotfixZ is the latest stable branch"})," or errors related to Jetifier in the logs when I call an SDK method."]})}),"\n",(0,r.jsxs)(n.p,{children:["Migrate your Android project to AndroidX by following ",(0,r.jsx)(n.a,{href:"https://flutter.dev/docs/development/androidx-migration",children:"this"})," guide."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["I see ",(0,r.jsx)(n.code,{children:"Undefined symbols for architecture"})," error during compilation."]})}),"\n",(0,r.jsxs)(n.p,{children:["You must use frameworks and specify a platform version of at least ",(0,r.jsx)(n.code,{children:"9.0"})," in your generated iOS project's Podfile. Make the following changes in ",(0,r.jsx)(n.em,{children:"ios/Podfile"})," and rebuild."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"target 'Runner' do\nplatform :ios, '9.0'   ####################################### <--- add this and specify at least 9.0\n\nuse_frameworks!        ####################################### <--- add this, and try building if there is\n                      #######################################      no Swift code or plugin in the project.\n                      #######################################      If there is Swift code, please also add\n                      #######################################      the marked line below\n\n...\nend\n\npost_install do |installer|\ninstaller.pods_project.targets.each do |target|\n  target.build_configurations.each do |config|\n    config.build_settings['ENABLE_BITCODE'] = 'NO'\n    config.build_settings['SWIFT_VERSION'] = '3.2'  ########## <--- add this, change the version to what's being\n                                                    ##########      used in the project, remove if there is none\n  end\n end\nend\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:'CocoaPods could not find compatible versions for pod "TestFairy".'})}),"\n",(0,r.jsxs)(n.p,{children:["This error is an old bug in the plugin pubspec file. First, run ",(0,r.jsx)(n.code,{children:"flutter clean"})," in your root directory."]}),"\n",(0,r.jsxs)(n.p,{children:["Move ",(0,r.jsx)(n.em,{children:"ios/Podfile.lock"})," into a temporary place before running ",(0,r.jsx)(n.code,{children:"pod repo update; pod install"})," in your ",(0,r.jsx)(n.em,{children:"ios"})," directory."]}),"\n",(0,r.jsxs)(n.p,{children:["If some of the libraries you use need to be at specific versions, copy the necessary lines from your backed-up ",(0,r.jsx)(n.em,{children:"Podfile.lock"})," into the newly created one. Keep the lines related to TestFairy (note the title case in the name) untouched."]}),"\n",(0,r.jsxs)(n.p,{children:["Finally, run ",(0,r.jsx)(n.code,{children:"pod repo update; pod install; pod update TestFairy"})," again to re-download libraries from the replaced lines."]}),"\n",(0,r.jsx)(n.p,{children:"If everything went smoothly, this issue should never happen again."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"There are syntax errors in TestFairyFlutterPlugin.java or TestFairyFlutterPlugin.m file."})}),"\n",(0,r.jsxs)(n.p,{children:["In your project root, run ",(0,r.jsx)(n.code,{children:"flutter clean; cd ios; pod repo update; pod install; pod update TestFairy; cd .."})," and test again."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"api-reference",children:"API Reference"}),"\n",(0,r.jsxs)(n.p,{children:["Check the latest ",(0,r.jsx)(n.a,{href:"https://pub.dartlang.org/documentation/testfairy_flutter/latest/",children:"Dart interface documentation"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),s=t(18215),i=t(23104),a=t(56347),o=t(205),l=t(57485),d=t(31682),c=t(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[d,u]=f({queryString:t,groupId:s}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,c.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),x=(()=>{const e=d??m;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==r&&(d(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...i,className:(0,s.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=m(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,y.jsx)(j,{...e,...n}),(0,y.jsx)(b,{...e,...n})]})}function w(e){const n=(0,g.A)();return(0,y.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);