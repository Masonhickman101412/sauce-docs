"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[86168],{15417:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(74848),i=t(28453);t(86025),t(11470),t(19365);const a={id:"integrating-android",title:"Integrating Android SDK",sidebar_label:"Integrating Android SDK"},s=void 0,o={id:"testfairy/sdk/android/integrating-android",title:"Integrating Android SDK",description:"Integrating the TestFairy SDK into your app can help you better understand how your app performs on real devices. It tells you when and how people use your app and provides any metrics you may need to optimize your user experience and code.",source:"@site/docs/testfairy/sdk/android/integrating-android.md",sourceDirName:"testfairy/sdk/android",slug:"/testfairy/sdk/android/integrating-android",permalink:"/sauce-docs/pr-preview/pr-2907/testfairy/sdk/android/integrating-android",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/android/integrating-android.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724771321e3,frontMatter:{id:"integrating-android",title:"Integrating Android SDK",sidebar_label:"Integrating Android SDK"},sidebar:"docs",previous:{title:"Webhooks",permalink:"/sauce-docs/pr-preview/pr-2907/testfairy/api-reference/webhooks"},next:{title:"Exporting Ad Hoc IPA",permalink:"/sauce-docs/pr-preview/pr-2907/testfairy/sdk/ios/ad-hoc-ipa"}},d={},l=[{value:"Installation",id:"installation",level:2},{value:"Proguard (Optional)",id:"proguard-optional",level:2},{value:"Upgrading",id:"upgrading",level:2},{value:"How to Identify Users (Optional)",id:"how-to-identify-users-optional",level:2},{value:"Additional Permissions (Optional)",id:"additional-permissions-optional",level:2},{value:"Logs - <code>android.permission.READ_LOGS</code> (Optional)",id:"logs---androidpermissionread_logs-optional",level:3},{value:"Tracking Battery Usage - <code>android.permission.BATTERY_STATS</code> (Optional)",id:"tracking-battery-usage---androidpermissionbattery_stats-optional",level:3},{value:"Tracking Phone Signal - <code>android.permission.READ_PHONE_STATE</code> (Optional)",id:"tracking-phone-signal---androidpermissionread_phone_state-optional",level:3},{value:"Tracking WiFi Signal - <code>android.permission.ACCESS_WIFI_STATE</code> (Optional)",id:"tracking-wifi-signal---androidpermissionaccess_wifi_state-optional",level:3},{value:"File Size",id:"file-size",level:2},{value:"Troubleshoot",id:"troubleshoot",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Integrating the TestFairy SDK into your app can help you better understand how your app performs on real devices. It tells you when and how people use your app and provides any metrics you may need to optimize your user experience and code."}),"\n",(0,r.jsx)(n.p,{children:"Both Java and Kotlin apps are supported."}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Add the SDK to Your App Module's build.gradle (that is, ",(0,r.jsx)(n.code,{children:"app/build.gradle"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"dependencies {\n    implementation 'com.testfairy:testfairy-android-sdk:1.+@aar'\n}\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Add the TestFairy Maven Repository to Your Project"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Depending on how you build your project, there are multiple options to add the TestFairy Maven."}),"\n",(0,r.jsxs)(n.p,{children:["The most popular option is to add to build.gradle (eg. ",(0,r.jsx)(n.code,{children:"PROJECT_ROOT/build.gradle"}),")"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"buildscript {\n    repositories {\n        maven { url 'https://maven.testfairy.com' }\n    }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"OR"})}),"\n",(0,r.jsxs)(n.p,{children:["Add the TestFairy maven to ",(0,r.jsx)(n.code,{children:"settings.gradle"})," if you create projects with the newer versions of Android Studio."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"dependencyResolutionManagement {\n    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)\n    repositories {\n        google()\n        mavenCentral()\n        maven { url 'https://maven.testfairy.com' }\n\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Add TestFairy to Your Main Activity's ",(0,r.jsx)(n.code,{children:"onCreate"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import com.testfairy.TestFairy;\n\npublic class MyApplication extends Application {\n\n   @Override\n   public void onCreate() {\n       super.onCreate();\n       TestFairy.begin(this, "<YOUR_APP_TOKEN_HERE>");\n   }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"proguard-optional",children:"Proguard (Optional)"}),"\n",(0,r.jsxs)(n.p,{children:["If you have ",(0,r.jsx)(n.code,{children:"Proguard"})," enabled, add this snippet to your proguard rules file (that is, ",(0,r.jsx)(n.code,{children:"proguard-rules.pro"}),", ",(0,r.jsx)(n.code,{children:"proguard.cfg"}),", or others):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"-keep class com.testfairy.** { *; }\n-dontwarn com.testfairy.**\n-keepattributes Exceptions, Signature, LineNumberTable\n-dontusemixedcaseclassnames\n"})}),"\n",(0,r.jsx)(n.h2,{id:"upgrading",children:"Upgrading"}),"\n",(0,r.jsx)(n.p,{children:"TestFairy is constantly improving and updating the Android SDK. Generally, it's a good idea always to use the latest SDK."}),"\n",(0,r.jsxs)(n.p,{children:["Using version wildcards like ",(0,r.jsx)(n.code,{children:"1.+@aar"}),", automatically upgrade your TestFairy to the latest version. To refresh dependency and force Gradle to download the latest version, run the command: ",(0,r.jsx)(n.code,{children:"gradlew --refresh-dependencies"})]}),"\n",(0,r.jsxs)(n.p,{children:["You must manually update the version if you use a fixed version, such as ",(0,r.jsx)(n.code,{children:"testfairy:testfairy-android-sdk:1.2.4@aar"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"how-to-identify-users-optional",children:"How to Identify Users (Optional)"}),"\n",(0,r.jsx)(n.p,{children:"Here is a quick example of identifying users by email address."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'TestFairy.setUserId("john@example.com");\n'})}),"\n",(0,r.jsx)(n.p,{children:"Read Identifying your Users /testfairy/sdk/identifying-users for more identification options."}),"\n",(0,r.jsx)(n.h2,{id:"additional-permissions-optional",children:"Additional Permissions (Optional)"}),"\n",(0,r.jsx)(n.p,{children:"TestFairy can record additional insights that require specific permissions. Below is a list of permissions required for each metric:"}),"\n",(0,r.jsxs)(n.h3,{id:"logs---androidpermissionread_logs-optional",children:["Logs - ",(0,r.jsx)(n.code,{children:"android.permission.READ_LOGS"})," (Optional)"]}),"\n",(0,r.jsxs)(n.p,{children:["To automatically upload device logs (logcat) to your account, add the permission ",(0,r.jsx)(n.code,{children:"android.permission.READ_LOGS"}),".\nCheck the ",(0,r.jsx)(n.strong,{children:"Log collection"})," under the ",(0,r.jsx)(n.strong,{children:"Insights"})," in Build Settings. You can do it after the app is uploaded or the first session performed."]}),"\n",(0,r.jsxs)(n.h3,{id:"tracking-battery-usage---androidpermissionbattery_stats-optional",children:["Tracking Battery Usage - ",(0,r.jsx)(n.code,{children:"android.permission.BATTERY_STATS"})," (Optional)"]}),"\n",(0,r.jsxs)(n.p,{children:["Add the ",(0,r.jsx)(n.code,{children:"android.permission.BATTERY_STATS"})," permission to automatically upload the battery status to your account.\nIt tracks the general battery status and when the device is connected or disconnected from a charger."]}),"\n",(0,r.jsxs)(n.h3,{id:"tracking-phone-signal---androidpermissionread_phone_state-optional",children:["Tracking Phone Signal - ",(0,r.jsx)(n.code,{children:"android.permission.READ_PHONE_STATE"})," (Optional)"]}),"\n",(0,r.jsxs)(n.p,{children:["To automatically upload a phone signal to your account, add the ",(0,r.jsx)(n.code,{children:"android.permission.READ_PHONE_STATE"})," permission.\nThe phone signal graph shows the GSM Signal Strength, with valid values (0-31, 99). 0 equals -113 dBm or less, and 31 equals -51 dBm or more. For more information, read ",(0,r.jsx)(n.a,{href:"http://www.etsi.org/deliver/etsi_ts/127000_127099/127007/08.05.00_60/ts_127007v080500p.pdf",children:"GSM standard TS 27.007, section 8.5"})]}),"\n",(0,r.jsxs)(n.h3,{id:"tracking-wifi-signal---androidpermissionaccess_wifi_state-optional",children:["Tracking WiFi Signal - ",(0,r.jsx)(n.code,{children:"android.permission.ACCESS_WIFI_STATE"})," (Optional)"]}),"\n",(0,r.jsxs)(n.p,{children:["To automatically upload the wifi status to your account, add the ",(0,r.jsx)(n.code,{children:"android.permission.ACCESS_WIFI_STATE"})," permission: it tracks the wifi signal."]}),"\n",(0,r.jsx)(n.h2,{id:"file-size",children:"File Size"}),"\n",(0,r.jsx)(n.p,{children:"The size of the TestFairy SDK is 500KB."}),"\n",(0,r.jsxs)(n.p,{children:["You might also like to read Manual Integration with Eclipse and Ant ",(0,r.jsx)(n.a,{href:"http://docs.testfairy.com/Android/Manual_integration_with_Eclipse_and_Ant.html",children:"http://docs.testfairy.com/Android/Manual_integration_with_Eclipse_and_Ant.html"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"troubleshoot",children:"Troubleshoot"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Could not GET 'https://jcenter.bintray.com/testfairy/testfairy-android-sdk/1.11.45/testfairy-android-sdk-1.11.45.pom'. Received status code 400\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Could not GET 'https://jcenter.bintray.com/testfairy/testfairy-android-sdk/1.11.45/testfairy-android-sdk-1.11.45.pom'. Received status code 403\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Could not GET 'https://jcenter.bintray.com/testfairy/testfairy-android-sdk/1.11.45/testfairy-android-sdk-1.11.45.pom'. Received status code 407\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you see one of these errors when you include TestFairy SDK in your project, follow step 2 in the installation section on this page.\nTestFairy is no longer on Jcenter, and you must switch to ",(0,r.jsx)(n.code,{children:"maven.testfairy.com"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const i={tabItem:"tabItem_Ymn6"};var a=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>T});var r=t(96540),i=t(18215),a=t(23104),s=t(56347),o=t(205),d=t(57485),l=t(31682),c=t(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=p(e),[s,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,u]=g({queryString:t,groupId:i}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,c.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),y=(()=>{const e=l??m;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{y&&d(y)}),[y]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=d.indexOf(n),i=o[t].value;i!==r&&(l(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:u,onClick:c,...a,className:(0,i.A)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function b(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",y.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function T(e){const n=(0,f.A)();return(0,x.jsx)(b,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);