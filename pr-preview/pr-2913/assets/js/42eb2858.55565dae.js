"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[34685],{67800:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var i=n(74848),s=n(28453),t=(n(86025),n(11470)),l=n(19365);const r={id:"app-storage",title:"Mobile App Storage",sidebar_label:"App Storage"},o=void 0,p={id:"mobile-apps/app-storage",title:"Mobile App Storage",description:"When testing mobile apps, you have the option to upload your app to our app storage. The benefits of app storage include:",source:"@site/docs/mobile-apps/app-storage.md",sourceDirName:"mobile-apps",slug:"/mobile-apps/app-storage",permalink:"/sauce-docs/pr-preview/pr-2913/mobile-apps/app-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/app-storage.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724864962e3,frontMatter:{id:"app-storage",title:"Mobile App Storage",sidebar_label:"App Storage"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/sauce-docs/pr-preview/pr-2913/mobile-apps"},next:{title:"Supported Mobile Devices",permalink:"/sauce-docs/pr-preview/pr-2913/mobile-apps/supported-devices"}},d={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Rate Limiting",id:"rate-limiting",level:2},{value:"Uploading Apps via UI",id:"uploading-apps-via-ui",level:2},{value:"Uploading Apps via REST API",id:"uploading-apps-via-rest-api",level:2},{value:"Considerations",id:"considerations",level:3},{value:"Installing Apps from a Remote Location",id:"installing-apps-from-a-remote-location",level:2},{value:"Accepted File Types\xa0",id:"accepted-file-types",level:2},{value:"Team Management Sync",id:"team-management-sync",level:2},{value:"Using Application Storage with Automated Test Builds",id:"using-application-storage-with-automated-test-builds",level:2},{value:"File Name instead of File ID",id:"file-name-instead-of-file-id",level:3},{value:"Limitations",id:"limitations",level:4},{value:"Updating WebDriver Capabilities",id:"updating-webdriver-capabilities",level:2},{value:"Example Code",id:"example-code",level:3},{value:"Using Dependent Apps for a Test",id:"using-dependent-apps-for-a-test",level:2},{value:"Appium Capability",id:"appium-capability",level:3},{value:"Espresso/XCUITest Configuration",id:"espressoxcuitest-configuration",level:3}];function u(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"When testing mobile apps, you have the option to upload your app to our app storage. The benefits of app storage include:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Uploading all of your mobile apps to the same location for cross-device automated and live testing with virtual devices and real devices."}),"\n",(0,i.jsx)(a.li,{children:"Sharing your uploaded apps with your team members."}),"\n",(0,i.jsx)(a.li,{children:"Storing apps for up to 60 days."}),"\n",(0,i.jsx)(a.li,{children:"App Storage supports app files in _.apk, _.aab, _.ipa, or _.zip format, up to 4GB."}),"\n"]}),"\n",(0,i.jsx)(a.admonition,{title:"Limitation",type:"note",children:(0,i.jsx)(a.p,{children:"Executable files (.exe) are not supported."})}),"\n",(0,i.jsx)(a.admonition,{type:"caution",children:(0,i.jsx)(a.p,{children:"Make sure you have a debuggable AND non-obfuscated version of your application uploaded to Mobile App Storage to leverage all of our capabilities like Biometrics, Image injection, or Mobile App Diagnostics."})}),"\n",(0,i.jsx)(a.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["A Sauce Labs account (",(0,i.jsx)(a.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,i.jsx)(a.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,i.jsxs)(a.li,{children:["Your Sauce Labs ",(0,i.jsx)(a.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"}),"."]}),"\n",(0,i.jsxs)(a.li,{children:["Your mobile app file. If you don't have one on hand, consider using our Demo Apps:","\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"https://github.com/saucelabs/my-demo-app-rn/releases",children:"React Native Demo App"})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"https://github.com/saucelabs/my-demo-app-ios/releases",children:"iOS Demo App"})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"https://github.com/saucelabs/my-demo-app-android/releases",children:"Android Demo App"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"rate-limiting",children:"Rate Limiting"}),"\n",(0,i.jsx)(a.p,{children:"To increase service stability and prevent overload by a high volume of incoming traffic, we have set the following rate limits for uploading your mobile apps (effective from 14.11.2022):"}),"\n",(0,i.jsxs)(a.table,{children:[(0,i.jsx)(a.thead,{children:(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.th,{style:{textAlign:"left"}}),(0,i.jsx)(a.th,{style:{textAlign:"left"},children:"Trial Users"}),(0,i.jsx)(a.th,{style:{textAlign:"left"},children:"Non Trial Users"})]})}),(0,i.jsx)(a.tbody,{children:(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{style:{textAlign:"left"},children:(0,i.jsx)(a.strong,{children:"Uploads"})}),(0,i.jsx)(a.td,{style:{textAlign:"left"},children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"5 Uploads per 15 minute window "}),(0,i.jsx)("li",{children:"2 uploads in parallel "})]})}),(0,i.jsx)(a.td,{style:{textAlign:"left"},children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:" 100 uploads per 15 minute window"}),(0,i.jsx)("li",{children:" 15 uploads in parallel "})]})})]})})]}),"\n",(0,i.jsx)(a.h2,{id:"uploading-apps-via-ui",children:"Uploading Apps via UI"}),"\n",(0,i.jsxs)(a.p,{children:["For information about using the Sauce Labs UI to upload your mobile file to app storage, see ",(0,i.jsx)(a.a,{href:"/mobile-apps/live-testing/live-mobile-app-testing/#uploading-an-app",children:"Uploading an App"}),"."]}),"\n",(0,i.jsx)(a.h2,{id:"uploading-apps-via-rest-api",children:"Uploading Apps via REST API"}),"\n",(0,i.jsxs)(a.p,{children:["You can upload your mobile app programmatically using the ",(0,i.jsx)(a.a,{href:"/dev/api/storage",children:"File Storage API Methods"}),". The API endpoints are ",(0,i.jsx)(a.a,{href:"/basics/data-center-endpoints",children:"Data center-specific"}),", so make sure you are using the endpoint that is applicable for your account data center, as shown in the following example requests."]}),"\n",(0,i.jsx)(a.h3,{id:"considerations",children:"Considerations"}),"\n",(0,i.jsx)(a.p,{children:"When using the cURL sample requests below, consider the following:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["The ",(0,i.jsx)(a.code,{children:"<path/to/your/file>"})," variable must include the file itself, including the file extension."]}),"\n",(0,i.jsxs)(a.li,{children:["The ",(0,i.jsx)(a.code,{children:"<filename.ext>"})," variable is the portion of the path that is just the file itself and must also include the file extension. Otherwise, the upload will succeed, but your app will not be accessible to your tests."]}),"\n",(0,i.jsxs)(a.li,{children:["The ",(0,i.jsx)(a.code,{children:"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY"})," variable assumes you have set your Sauce Labs credentials as ",(0,i.jsx)(a.a,{href:"/basics/environment-variables",children:"environment variables"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.A,{groupId:"dc-url",defaultValue:"usw",values:[{label:"US West",value:"usw"},{label:"US East",value:"use"},{label:"Europe",value:"eu"}],children:[(0,i.jsx)(l.A,{value:"usw",children:(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request POST 'https://api.us-west-1.saucelabs.com/v1/storage/upload' \\\n--form 'payload=@\"<path/to/your/file>\"' \\\n--form 'name=\"<filename.ext>\"'\n"})})}),(0,i.jsx)(l.A,{value:"use",children:(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request POST 'https://api.us-east-4.saucelabs.com/v1/storage/upload' \\\n--form 'payload=@\"<path/to/your/file>\"' \\\n--form 'name=\"<filename.ext>\"'\n"})})}),(0,i.jsx)(l.A,{value:"eu",children:(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request POST 'https://api.eu-central-1.saucelabs.com/v1/storage/upload' \\\n--form 'payload=@\"<path/to/your/file>\"' \\\n--form 'name=\"<filename.ext>\"'\n"})})})]}),"\n",(0,i.jsx)(a.h2,{id:"installing-apps-from-a-remote-location",children:"Installing Apps from a Remote Location"}),"\n",(0,i.jsxs)("p",{children:[" ",(0,i.jsx)("small",{children:(0,i.jsx)("span",{className:"sauceGreen",children:"Real Devices Only"})})]}),"\n",(0,i.jsxs)(a.p,{children:["If your app is downloadable from a remote location (e.g., AWS S3 bucket, a GitHub repository), you can provide a URL as the value for the ",(0,i.jsx)(a.code,{children:"app"})," capability in your test, which will install the app onto the real devices prior to test execution."]}),"\n",(0,i.jsx)(a.admonition,{type:"note",children:(0,i.jsx)(a.p,{children:"Appium cannot log into secure locations, so apps installed via remote download must be accessible, so are then removed from the real device immediately following test completion, providing an added layer of security."})}),"\n",(0,i.jsx)(a.p,{children:"To install a remote app on a real device for a test:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["Make sure the app meets the ",(0,i.jsx)(a.a,{href:"/mobile-apps/supported-devices",children:"requirements"})," for Android and iOS Mobile App Testing."]}),"\n",(0,i.jsx)(a.li,{children:"Ensure Sauce Labs has READ access to the app URL."}),"\n",(0,i.jsxs)(a.li,{children:["In your Appium test script, enter the app file location URL as the ",(0,i.jsx)(a.code,{children:"app"})," desired capability:"]}),"\n"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-java",metastring:'title="Example Java Remote App URL Capability"',children:'caps.setCapability("app", "https://github.com/saucelabs/sample-app-mobile/releases/download/2.3.0/Android.SauceLabs.Mobile.Sample.app.2.3.0.apk?raw=true");\n'})}),"\n",(0,i.jsxs)(a.admonition,{title:"LIMITATIONS",type:"note",children:[(0,i.jsx)(a.p,{children:(0,i.jsx)(a.strong,{children:"Android:"})}),(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"The Instrumentation feature will not work if the app is installed from an external location."}),"\n"]}),(0,i.jsx)(a.p,{children:(0,i.jsx)(a.strong,{children:"iOS:"})}),(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"The app cannot be installed on public devices due to signing."}),"\n",(0,i.jsxs)(a.li,{children:["The app can be installed on private devices. However, to make this work you must add the UDID of the private device to the provisioning profile for iOS (see our ",(0,i.jsx)(a.a,{href:"/mobile-apps/automated-testing/ipa-files/",children:"resigning process"})," to learn more)."]}),"\n",(0,i.jsx)(a.li,{children:"The Instrumentation feature will not work if the app is installed from external location."}),"\n"]})]}),"\n",(0,i.jsx)(a.h2,{id:"accepted-file-types",children:"Accepted File Types\xa0"}),"\n",(0,i.jsx)(a.p,{children:"App storage recognizes *.apk and *.aab files as Android apps and *.ipa or *.zip files as iOS apps. *.zip files (for simulator tests only) are parsed to determine whether a valid *.app bundle exists."}),"\n",(0,i.jsx)(a.admonition,{title:"AAB App Signing",type:"caution",children:(0,i.jsxs)(a.p,{children:["To install an *.apk app that is extracted from an *.aab file, Sauce Labs must sign the *.apk using its own signature. In such cases, Sauce Labs signs both the ",(0,i.jsx)(a.code,{children:"app"})," and ",(0,i.jsx)(a.code,{children:"testApp"})," to ensure matching signatures, even if instrumentation is disabled. Otherwise, the app installation will fail. For more information, see ",(0,i.jsx)(a.a,{href:"https://developer.android.com/guide/app-bundle",children:"Android App Bundles"}),"."]})}),"\n",(0,i.jsx)(a.p,{children:"You can also upload and store other file types for generic use, such as a pre-run executable, package, or binary. Some of the formats for this type of use case include:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"*.js"}),"\n",(0,i.jsx)(a.li,{children:"*.py"}),"\n",(0,i.jsx)(a.li,{children:"*.tar"}),"\n",(0,i.jsx)(a.li,{children:"*.zip"}),"\n",(0,i.jsx)(a.li,{children:"*.sh"}),"\n",(0,i.jsx)(a.li,{children:"*.bat"}),"\n"]}),"\n",(0,i.jsx)(a.admonition,{type:"note",children:(0,i.jsx)(a.p,{children:"Sauce Labs only supports valid .zip files that can be extracted by standard unzip tools."})}),"\n",(0,i.jsx)(a.h2,{id:"team-management-sync",children:"Team Management Sync"}),"\n",(0,i.jsx)(a.p,{children:"All uploaded files are shared with the same team. Members can only access files that are shared with the team where you contribute/participate. Organization admins have access to all files in your organization."}),"\n",(0,i.jsxs)(a.p,{children:["For more information about managing access to your organization, see ",(0,i.jsx)(a.a,{href:"/basics/acct-team-mgmt/managing-user-info",children:"Managing User Information"}),"."]}),"\n",(0,i.jsx)(a.h2,{id:"using-application-storage-with-automated-test-builds",children:"Using Application Storage with Automated Test Builds"}),"\n",(0,i.jsxs)(a.p,{children:["After successfully uploading your file to app storage, you need to reference the unique app Identifier (",(0,i.jsx)(a.code,{children:"file_id"}),") in your test code to retrieve and use your app for automated tests."]}),"\n",(0,i.jsxs)(a.p,{children:["For example, let's assume you've updated a new version of your app using the ",(0,i.jsx)(a.code,{children:"/upload"})," endpoint. The JSON response would be something like:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:'{\n   "item":{\n      "id":"379c301a-199c-4b40-ad45-4a95e5f30a3a",\n      "owner":{\n         "id":"286c0fbb0cb644c4a012d505b8a0a1ac",\n         "org_id":"c064890612424e34a12fca98ce4f32c6"\n      },\n      "name":"Android.SauceLabs.Mobile.Sample.app.2.3.0.apk",\n      "upload_timestamp":1593450387,\n      "etag":"0cf189b1c4c17a56656ada5e2d75cd51",\n      "kind":"android",\n      "group_id":2807,\n      "metadata":{\n         "identifier":"com.swaglabsmobileapp",\n         "name":"Swag Labs Mobile App",\n         "version":"2.3.0",\n         "icon":"<long-serial-number>",\n         "version_code":13,\n         "min_sdk":16,\n         "target_sdk":28\n      },\n      ...\n      }\n   }\n}\n'})}),"\n",(0,i.jsxs)(a.p,{children:["Then the file_id would be ",(0,i.jsx)(a.code,{children:'"id":"379c301a-199c-4b40-ad45-4a95e5f30a3a"'}),". If you're unsure of the id of an existing app, you can use the ",(0,i.jsx)(a.a,{href:"/dev/api/storage",children:"Storage API"})," to lookup the ID of an app in storage or look into the app's details in the ",(0,i.jsx)(a.a,{href:"https://app.saucelabs.com/live/app-testing",children:"Sauce UI"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"file-name-instead-of-file-id",children:"File Name instead of File ID"}),"\n",(0,i.jsxs)(a.p,{children:["You can also use the app ",(0,i.jsx)(a.code,{children:"name"})," field from the storage API in the ",(0,i.jsx)(a.code,{children:"app"})," capability. This approach is particularly useful if you upload your build to app storage via a CI pipeline, and you either don't know the id, or you do not wish to perform JSON parsing to retrieve the id. The filename field also includes any supported file that can be uploaded to app storage."]}),"\n",(0,i.jsx)(a.p,{children:"Example of uploading an Android .apk file:"}),"\n",(0,i.jsxs)(t.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"JS",value:"js"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"C#",value:"csharp"}],children:[(0,i.jsx)(l.A,{value:"java",children:(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:'caps.setCapability("app", "storage:filename=<file-name>.apk");\n'})})}),(0,i.jsx)(l.A,{value:"js",children:(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"caps['app'] = 'storage:filename=<file-name>.apk';\n"})})}),(0,i.jsx)(l.A,{value:"python",children:(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"caps['app'] = \"storage:filename=<file-name>.apk\"\n"})})}),(0,i.jsx)(l.A,{value:"ruby",children:(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"caps['app'] = 'storage:filename=<file-name>.apk'\n"})})}),(0,i.jsx)(l.A,{value:"csharp",children:(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:'caps.SetCapability("app","storage:filename=<file-name>.apk");\n'})})})]}),"\n",(0,i.jsx)(a.h4,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"File names are NOT unique, therefore they will always default to the latest version."}),"\n",(0,i.jsx)(a.li,{children:"Currently, you cannot specify the version of the app using this feature."}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"build"})," capability is not supported in VDC at this time."]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"updating-webdriver-capabilities",children:"Updating WebDriver Capabilities"}),"\n",(0,i.jsxs)(a.p,{children:["If you were previously using app stored in sauce-storage, you can convert your existing test capabilities by replacing ",(0,i.jsx)(a.code,{children:"sauce-storage:myapp"})," with ",(0,i.jsx)(a.code,{children:"storage:<file_id>"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"example-code",children:"Example Code"}),"\n",(0,i.jsxs)(a.p,{children:["These examples assume ",(0,i.jsx)(a.code,{children:"file_id = c8511dd6-38ec-4f58-b8b9-4ec8c23ad882"})]}),"\n",(0,i.jsxs)(t.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"JS",value:"js"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"C#",value:"csharp"}],children:[(0,i.jsxs)(l.A,{value:"java",children:["Before:",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:'caps.setCapability("app", "sauce-storage:some-app.apk");\n'})}),"After:",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:'caps.setCapability("app", "storage:c8511dd6-38ec-4f58-b8b9-4ec8c23ad882");\n'})})]}),(0,i.jsxs)(l.A,{value:"js",children:["Before:",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"caps['app'] = 'sauce-storage:my_app.apk';\n"})}),"After:",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"caps['app'] = 'storage:c8511dd6-38ec-4f58-b8b9-4ec8c23ad882';\n"})})]}),(0,i.jsxs)(l.A,{value:"python",children:["Before:",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"caps['app'] = \"sauce-storage:my_app.apk\"\n"})}),"After:",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"caps['app'] = \"storage:c8511dd6-38ec-4f58-b8b9-4ec8c23ad882\"\n"})})]}),(0,i.jsxs)(l.A,{value:"ruby",children:["Before:",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"caps['app'] = 'sauce-storage:my_app.apk'\n"})}),"After:",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"caps['app'] = 'storage:c8511dd6-38ec-4f58-b8b9-4ec8c23ad882'\n"})})]}),(0,i.jsxs)(l.A,{value:"csharp",children:["Before:",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:'caps.SetCapability("app","sauce-storage:my_app.apk");\n'})}),"After:",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:'caps.SetCapability("app","storage:c8511dd6-38ec-4f58-b8b9-4ec8c23ad882");\n'})})]})]}),"\n",(0,i.jsx)(a.h2,{id:"using-dependent-apps-for-a-test",children:"Using Dependent Apps for a Test"}),"\n",(0,i.jsx)("small",{children:(0,i.jsx)("span",{class:"sauceGreen",children:"Real Devices Only"})}),"\n",(0,i.jsxs)(a.p,{children:["If your real device testing requires your app under test to have access to other apps and you, therefore, need to install those dependent apps and reference them in your tests, you can do so using the ",(0,i.jsx)(a.code,{children:"otherApps"})," capability."]}),"\n",(0,i.jsx)(a.admonition,{type:"note",children:(0,i.jsxs)(a.p,{children:["Dependent apps inherit the configuration of the main app under test for ",(0,i.jsxs)(a.a,{href:"https://app.saucelabs.com/live/app-testing#group-details",children:[(0,i.jsx)(a.code,{children:"Device Language"}),", ",(0,i.jsx)(a.code,{children:"Device Orientation"}),", and ",(0,i.jsx)(a.code,{children:"Proxy"})]}),", regardless of what settings may have been applied to the app at the time of upload, because the settings are specific to the device under test. For example, if the dependent app is intended to run in landscape orientation, but the main app is set to portrait, the dependent app will run in portrait for the test, which may have unintended consequences."]})}),"\n",(0,i.jsx)(a.h3,{id:"appium-capability",children:"Appium Capability"}),"\n",(0,i.jsxs)(a.p,{children:["For ",(0,i.jsx)(a.a,{href:"/dev/test-configuration-options#mobile-app-capabilities-sauce-specific--optional",children:"Appium"})," tests, you can specify up to seven apps that have already been uploaded to App Storage using one of the previously described methods by setting the ",(0,i.jsx)(a.code,{children:"otherApps"})," desired capability and referencing the app's storage ID or filename."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:'caps.setCapability("otherApps", "storage:filename=<file-name>")\ncaps.setCapability("otherApps", "storage:<fileId>")\n'})}),"\n",(0,i.jsx)(a.admonition,{type:"note",children:(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Android dependent apps will not be instrumented or modified."}),"\n",(0,i.jsx)(a.li,{children:"iOS dependent apps will always be resigned/modified (even when resigning is disabled for the main app) because apps can't be installed on iOS devices without resigning them. If a dependent app cannot be resigned (such as a 3rd party app), the test will not work as intended."}),"\n"]})}),"\n",(0,i.jsx)(a.h3,{id:"espressoxcuitest-configuration",children:"Espresso/XCUITest Configuration"}),"\n",(0,i.jsxs)(a.p,{children:["For ",(0,i.jsx)(a.a,{href:"/mobile-apps/automated-testing/espresso-xcuitest/espresso",children:"Espresso"})," or ",(0,i.jsx)(a.a,{href:"/mobile-apps/automated-testing/espresso-xcuitest/xcuitest",children:"XCUITest"})," testing, you can specify up to seven dependent apps to either upload from your local machine or that are already in App Storage. In your ",(0,i.jsx)(a.code,{children:"saucectl"})," configuration file, specify a local filepath (relative location is ",(0,i.jsx)(a.code,{children:"{project-root}/apps/app1.apk"}),") or an expanded environment variable representing the path, and ",(0,i.jsx)(a.code,{children:"saucectl"})," will upload the app to App Storage for use with the test. Otherwise, specify an app in App Storage using the reference ",(0,i.jsx)(a.code,{children:"storage:<fileId>"})," or ",(0,i.jsx)(a.code,{children:"storage:filename=<filename>"}),"."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-yaml",children:"espresso:\notherApps:\n- ./apps/pre-installed-app1.apk\n- $PRE_INSTALLED_APP2\n- storage:c78ec45e-ea3e-ac6a-b094-00364171addb\n- storage:filename=pre-installed-app3.apk\n"})})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,a,n)=>{n.d(a,{A:()=>l});n(96540);var i=n(34164);const s={tabItem:"tabItem_Ymn6"};var t=n(74848);function l(e){let{children:a,hidden:n,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,l),hidden:n,children:a})}},11470:(e,a,n)=>{n.d(a,{A:()=>A});var i=n(96540),s=n(34164),t=n(23104),l=n(56347),r=n(205),o=n(57485),p=n(31682),d=n(70679);function c(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:a,children:n}=e;return(0,i.useMemo)((()=>{const e=a??function(e){return c(e).map((e=>{let{props:{value:a,label:n,attributes:i,default:s}}=e;return{value:a,label:n,attributes:i,default:s}}))}(n);return function(e){const a=(0,p.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function h(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:n}=e;const s=(0,l.W6)(),t=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,o.aZ)(t),(0,i.useCallback)((e=>{if(!t)return;const a=new URLSearchParams(s.location.search);a.set(t,e),s.replace({...s.location,search:a.toString()})}),[t,s])]}function f(e){const{defaultValue:a,queryString:n=!1,groupId:s}=e,t=u(e),[l,o]=(0,i.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:a,tabValues:t}))),[p,c]=m({queryString:n,groupId:s}),[f,x]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,t]=(0,d.Dv)(n);return[s,(0,i.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:s}),b=(()=>{const e=p??f;return h({value:e,tabValues:t})?e:null})();(0,r.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),x(e)}),[c,x,t]),tabValues:t}}var x=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function j(e){let{className:a,block:n,selectedValue:i,selectValue:l,tabValues:r}=e;const o=[],{blockElementScrollPositionUntilNextRender:p}=(0,t.a_)(),d=e=>{const a=e.currentTarget,n=o.indexOf(a),s=r[n].value;s!==i&&(p(a),l(s))},c=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;a=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;a=o[n]??o[o.length-1];break}}a?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},a),children:r.map((e=>{let{value:a,label:n,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,ref:e=>o.push(e),onKeyDown:c,onClick:d,...t,className:(0,s.A)("tabs__item",b.tabItem,t?.className,{"tabs__item--active":i===a}),children:n??a},a)}))})}function v(e){let{lazy:a,children:n,selectedValue:t}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,i.cloneElement)(e,{key:a,hidden:e.props.value!==t})))})}function y(e){const a=f(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,g.jsx)(j,{...a,...e}),(0,g.jsx)(v,{...a,...e})]})}function A(e){const a=(0,x.A)();return(0,g.jsx)(y,{...e,children:c(e.children)},String(a))}},28453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>r});var i=n(96540);const s={},t=i.createContext(s);function l(e){const a=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:a},e.children)}}}]);