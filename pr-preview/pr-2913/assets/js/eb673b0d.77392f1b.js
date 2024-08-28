"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[43332],{99045:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>x,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=i(74848),s=i(28453),l=i(86025);const a={id:"fact",title:"Using Fact for Handling Email Notifications",sidebar_label:"Improving Email Notifications using Fact",description:"Using Fact for Handling Email Notifications"},r=void 0,c={id:"api-testing/use-cases/fact",title:"Using Fact for Handling Email Notifications",description:"Using Fact for Handling Email Notifications",source:"@site/docs/api-testing/use-cases/fact.md",sourceDirName:"api-testing/use-cases",slug:"/api-testing/use-cases/fact",permalink:"/sauce-docs/pr-preview/pr-2913/api-testing/use-cases/fact",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/use-cases/fact.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724864962e3,frontMatter:{id:"fact",title:"Using Fact for Handling Email Notifications",sidebar_label:"Improving Email Notifications using Fact",description:"Using Fact for Handling Email Notifications"},sidebar:"docs",previous:{title:"Generating Test Data",permalink:"/sauce-docs/pr-preview/pr-2913/api-testing/use-cases/generate-test-data"},next:{title:"Saving a Variable in Vault",permalink:"/sauce-docs/pr-preview/pr-2913/api-testing/use-cases/vault-variable"}},o={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Setting Alert Environments",id:"setting-alert-environments",level:2},{value:"Use Case: Setting Alert Environments",id:"use-case-setting-alert-environments",level:3},{value:"Disabling Email Notifications",id:"disabling-email-notifications",level:2},{value:"Use Case: Disabling Email Notifications",id:"use-case-disabling-email-notifications",level:3},{value:"Setting Email Notification Thresholds",id:"setting-email-notification-thresholds",level:2},{value:"Use Case: Setting Email Notification Thresholds",id:"use-case-setting-email-notification-thresholds",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Fact"})," component is used to control the behavior of Email notifications, which (if enabled) alert you to test failures. It enables you to add information about the nature of the test execution."]}),"\n",(0,t.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A Sauce Labs account (",(0,t.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,t.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,t.jsx)(n.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Your email address already saved in the ",(0,t.jsx)(n.a,{href:"/api-testing/project-access/#email-notifications",children:"Notifications"})," section."]}),"\n",(0,t.jsxs)(n.li,{children:["Familiarity with the ",(0,t.jsx)(n.a,{href:"/api-testing/composer/",children:"API Testing Composer"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setting-alert-environments",children:"Setting Alert Environments"}),"\n",(0,t.jsx)(n.p,{children:"Testing activity is tracked using a test ID number. This may not work if you're testing in multiple environments, as an incident could be environment-specific. When a Fact component is added to a test, it will inform our system which environment the execution relates to so that the incident signature will carry the environment as well."}),"\n",(0,t.jsxs)(n.p,{children:["Assume that you are running the same test in ",(0,t.jsx)(n.em,{children:"staging"})," and ",(0,t.jsx)(n.em,{children:"production"}),", you will get an email notification the first time the test fails in one of the two environments. This does not allow you to know which environment the test fails in. The same will happens when the test starts working again."]}),"\n",(0,t.jsxs)(n.p,{children:["By configuring a ",(0,t.jsx)(n.strong,{children:"Fact"})," (together with ",(0,t.jsx)(n.strong,{children:"Tag"}),"), you can add the environment value to the incident signature, and from that moment on the signature of the incident will be ",(0,t.jsx)(n.code,{children:"id_of_the_test"})," + ",(0,t.jsx)(n.code,{children:"value_of_environment"}),".\nIn this way, you will get a separate notification for each environment the test fails in: for example, you will receive start/end incidents for ",(0,t.jsx)(n.code,{children:"test123"})," in the production environment, and start/end incidents for ",(0,t.jsx)(n.code,{children:"test123"})," in the staging environment, as a separate flow of events."]}),"\n",(0,t.jsxs)(n.p,{children:["Assume that in the variable scope of your test, you have a variable called ",(0,t.jsx)(n.em,{children:"env"})," that contains your environment string (",(0,t.jsx)(n.em,{children:"production, staging, qa"})," etc.)."]}),"\n",(0,t.jsx)(n.p,{children:"By configuring a Fact in the following way, you can add the environment value to the incident signature:"}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/fact.png"),alt:"fact component"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: fact\n  identifier: environment\n  label: environment\n  value: ${env}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"use-case-setting-alert-environments",children:"Use Case: Setting Alert Environments"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In Composer, in the ",(0,t.jsx)(n.strong,{children:"Input Set"}),", set the default environment as ",(0,t.jsx)(n.code,{children:"staging"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/fact-examples/set-environment.png"),alt:"set environment",width:"450"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"  - id: global\n    children:\n      - id: variable\n        name: env\n        value: staging\n"})}),"\n",(0,t.jsxs)(n.p,{children:["With this setting, the test will be executed against the ",(0,t.jsx)(n.code,{children:"staging"})," environment by default."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Unit"}),", set the ",(0,t.jsx)(n.strong,{children:"Fact"})," component to add the environment value to the incident signature."]}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/fact-examples/fact-component.png"),alt:"fact component"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"  - id: fact\n    identifier: environment\n    label: environment\n    value: ${env}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.strong,{children:"Tag"})," component to set the environment as tag in the email notifications."]}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/fact-examples/tag.png"),alt:"tag component"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"  - id: tag\n    value: ${env}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the ",(0,t.jsx)(n.strong,{children:"GET"})," request."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Url - for example ",(0,t.jsx)(n.code,{children:"http://demoapi.apifortress.com/api/retail/product"})]}),"\n",(0,t.jsxs)(n.li,{children:["Variable - for example ",(0,t.jsx)(n.code,{children:"payload"})]}),"\n",(0,t.jsxs)(n.li,{children:["Mode - for example ",(0,t.jsx)(n.code,{children:"json"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/fact-examples/get.png"),alt:"get request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"  - id: get\n    children: []\n    url: http://demoapi.apifortress.com/api/retail/product\n    var: payload\n    mode: json\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Publish"}),", then exit the Composer."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["From the Test list, ",(0,t.jsx)(n.strong,{children:"Run"})," the test."]}),"\n",(0,t.jsxs)(n.p,{children:["The test is meant to fail, so you will get the email notification with ",(0,t.jsx)(n.code,{children:"staging"})," tag in the subject."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Environments"})," (defaults to ",(0,t.jsx)(n.strong,{children:"No environment"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.strong,{children:"Add item"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Enter a name for your environment, for example ",(0,t.jsx)(n.code,{children:"production"}),", then click ",(0,t.jsx)(n.strong,{children:"Confirm"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create variable"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Key - for example ",(0,t.jsx)(n.code,{children:"env"})]}),"\n",(0,t.jsxs)(n.li,{children:["Value - for example ",(0,t.jsx)(n.code,{children:"production"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/fact-examples/environment2.png"),alt:"set new environment"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Confirm"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Run"})," the test with the environment active: you will get the email notification with the ",(0,t.jsx)(n.code,{children:"production"})," tag in the subject."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Double-click on the test to edit it."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.strong,{children:"Add Child Component"})," below the GET component."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.strong,{children:"Request Header"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Name - for example ",(0,t.jsx)(n.code,{children:"key"})]}),"\n",(0,t.jsxs)(n.li,{children:["Value - for example ",(0,t.jsx)(n.code,{children:"ABC123"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/fact-examples/req-header.png"),alt:"request header"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Publish"}),", then exit the Composer."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["From the Test list, ",(0,t.jsx)(n.strong,{children:"Run"})," the test without any environment."]}),"\n",(0,t.jsxs)(n.p,{children:["This time the test will pass, so you will get the email notification that resolves the incident with ",(0,t.jsx)(n.code,{children:"staging"})," tag in the subject."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select the ",(0,t.jsx)(n.code,{children:"production"})," environment."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Run"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The test will pass and you will get the email notification that resolves the incident with the ",(0,t.jsx)(n.code,{children:"production"})," tag in the subject."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{title:"Schedule with Environments",type:"note",children:[(0,t.jsx)(n.p,{children:"In the example test was run manually, but it works in the same way when you schedule it:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add one schedule without adding any variable in the ",(0,t.jsx)(n.strong,{children:"Overrides"}),": the test will be executed with ",(0,t.jsx)(n.code,{children:"staging"})," value as the environment."]}),"\n",(0,t.jsxs)(n.li,{children:["Create a second schedule adding ",(0,t.jsx)(n.code,{children:"env"})," as key and ",(0,t.jsx)(n.code,{children:"production"})," as value in ",(0,t.jsx)(n.strong,{children:"Overrides"}),": the test will be executed with ",(0,t.jsx)(n.code,{children:"production"})," value as the environment."]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"disabling-email-notifications",children:"Disabling Email Notifications"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Fact"})," component can also be used to disable email notifications:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'  - id: fact\n    identifier: disable_alerts\n    label: alerts disabled\n    value: "true"\n'})}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/factDisableAlert.png"),alt:"factDisableAlert.png"}),"\n",(0,t.jsx)(n.p,{children:"You can use logic in the test to set the Fact component and use that to alter the email notification."}),"\n",(0,t.jsx)(n.p,{children:'As an example, you could say "IF the env is development, then disable emails for this test":'}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/factAlertDisabled.png"),alt:"factAlertDisabled.png"}),"\n",(0,t.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Identifier"})," must be equal to ",(0,t.jsx)(n.code,{children:"disable_alerts"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"use-case-disabling-email-notifications",children:"Use Case: Disabling Email Notifications"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In Composer, add the ",(0,t.jsx)(n.strong,{children:"Fact"})," component."]}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/factDisableAlert.png"),alt:"factDisableAlert.png"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'  - id: fact\n    identifier: disable_alerts\n    label: alerts disabled\n    value: "true"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the ",(0,t.jsx)(n.strong,{children:"GET"})," request."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Url - for example ",(0,t.jsx)(n.code,{children:"http://demoapi.apifortress.com/api/retail/product"})]}),"\n",(0,t.jsxs)(n.li,{children:["Variable - for example ",(0,t.jsx)(n.code,{children:"payload"})]}),"\n",(0,t.jsxs)(n.li,{children:["Mode - for example ",(0,t.jsx)(n.code,{children:"json"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/fact-examples/get.png"),alt:"get request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"  - id: get\n    children: []\n    url: http://demoapi.apifortress.com/api/retail/product\n    var: payload\n    mode: json\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Publish"}),", then exit the Composer."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["From the Test list, ",(0,t.jsx)(n.strong,{children:"Run"})," the test.\nThe notifications are disabled, so you won't receive an email notification."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Double-click on the test to edit it and change the value for ",(0,t.jsx)(n.strong,{children:"Fact"})," from ",(0,t.jsx)(n.code,{children:"true"})," to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/fact-examples/disable-alerts-false.png"),alt:"disable alerts false"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'  - id: fact\n    identifier: disable_alerts\n    label: alerts disabled\n    value: "false"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Publish"}),", then exit the Composer."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["From the Test list, ",(0,t.jsx)(n.strong,{children:"Run"})," the test."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The notifications are now activated, so you will receive an email notification."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"In the example we ran the test manually, but the behavior is the same when you schedule it."})}),"\n",(0,t.jsx)(n.h2,{id:"setting-email-notification-thresholds",children:"Setting Email Notification Thresholds"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.strong,{children:"Fact"})," component to set the email alert threshold: if you want a test to fail more than once before an email is sent, a Fact called ",(0,t.jsx)(n.code,{children:"mail_threshold"})," can be set in the test:"]}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/factMultiFailure.png"),alt:"factMultiFailure.png"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'- id: fact\n  identifier: mail_threshold\n  label: multi failure\n  value: "2"\n'})}),"\n",(0,t.jsx)(n.p,{children:"The above example means the test will need to fail twice in a row before an email alert is sent."}),"\n",(0,t.jsxs)(n.p,{children:["Given that this can be configured in the test, it offers all the flexibility provided by conditional statements, such as an ",(0,t.jsx)(n.strong,{children:"If"})," condition on the environment the test is running upon:"]}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/factMultiFailure2.png"),alt:"factMultiFailure2.png"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'- id: if\n  children:\n    - id: fact\n      identifier: mail_threshold\n      label: multi failure\n      value: "2"\n  expression: env=="development"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"use-case-setting-email-notification-thresholds",children:"Use Case: Setting Email Notification Thresholds"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the Composer, add the ",(0,t.jsx)(n.strong,{children:"Fact"})," component."]}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/fact-examples/threshold.png"),alt:"fact threshold"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'  - id: fact\n    identifier: mail_threshold\n    label: threshold\n    value: "3"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the ",(0,t.jsx)(n.strong,{children:"GET"})," request."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Url - for example ",(0,t.jsx)(n.code,{children:"http://demoapi.apifortress.com/api/retail/product"})]}),"\n",(0,t.jsxs)(n.li,{children:["Variable - for example ",(0,t.jsx)(n.code,{children:"payload"})]}),"\n",(0,t.jsxs)(n.li,{children:["Mode - for example ",(0,t.jsx)(n.code,{children:"json"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/fact-examples/get.png"),alt:"get request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"  - id: get\n    children: []\n    url: http://demoapi.apifortress.com/api/retail/product\n    var: payload\n    mode: json\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Publish"}),", then exit the Composer."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["From the Test list, ",(0,t.jsx)(n.strong,{children:"Run"})," the test twice in a row: you will not receive any email notification."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Run"})," the test one more time: you reached the threshold value therefore you will receive the email notification."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The example considers a scenario where you run the test manually, but you can accomplish the same results by scheduling the test."})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(96540);const s={},l=t.createContext(s);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);