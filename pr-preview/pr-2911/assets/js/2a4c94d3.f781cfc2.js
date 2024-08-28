"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[64907],{25301:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=t(74848),s=t(28453),n=t(86025),i=t(11470),o=t(19365);const l={id:"user-feedback",title:"Submitting User Feedback",sidebar_label:"Submitting User Feedback"},c=void 0,d={id:"testfairy/sdk/user-feedback",title:"Submitting User Feedback",description:"Getting feedback from users and testers is crucial in the app development process. It provides valuable insights and helps improve the overall user experience. TestFairy offers an effortless way to collect feedback through its In-App Feedback feature. By integrating the TestFairy SDK into your app, you can enable users to report bugs, suggest improvements, and share their thoughts directly from within the app.",source:"@site/docs/testfairy/sdk/user-feedback.md",sourceDirName:"testfairy/sdk",slug:"/testfairy/sdk/user-feedback",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/sdk/user-feedback",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/user-feedback.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"user-feedback",title:"Submitting User Feedback",sidebar_label:"Submitting User Feedback"},sidebar:"docs",previous:{title:"Private Cloud Integration",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/sdk/private-cloud-int"},next:{title:"TestFairy in Production",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/sdk/tf-production"}},u={},p=[{value:"Using In-app Feedback",id:"using-in-app-feedback",level:2},{value:"Feedback Contents",id:"feedback-contents",level:2},{value:"Customizing In-app Feedback",id:"customizing-in-app-feedback",level:2}];function h(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"Getting feedback from users and testers is crucial in the app development process. It provides valuable insights and helps improve the overall user experience. TestFairy offers an effortless way to collect feedback through its In-App Feedback feature. By integrating the TestFairy SDK into your app, you can enable users to report bugs, suggest improvements, and share their thoughts directly from within the app."}),"\n",(0,r.jsx)(a.h2,{id:"using-in-app-feedback",children:"Using In-app Feedback"}),"\n",(0,r.jsxs)(a.p,{children:["TestFairy provides an effortless way to collect this feedback. If you ",(0,r.jsx)(a.a,{href:"https://docs.testfairy.com/SDK/Adding_The_SDK_To_Your_App.html",children:"added the TestFairy SDK"})," to your app, then all you need to do is enable the ",(0,r.jsx)(a.strong,{children:"In-App Bug Reporting"})," feature in your build settings in the TestFairy dashboard, and you can start collection feedbacks from your users with ",(0,r.jsx)(a.code,{children:'"shake to report"'}),":"]}),"\n",(0,r.jsx)("img",{src:(0,n.Ay)("/img/test-fairy/enable-bug-2.png"),alt:"Enable Shake to Feedback"}),"\n",(0,r.jsx)(a.p,{children:"Users or testers can initiate the feedback collection process by shaking their devices while using the app. When they shake the device, the feedback form will be triggered, allowing them to report bugs or share their suggestions."}),"\n",(0,r.jsx)(a.p,{children:"This feedback will be added to the existing app session they are currently running."}),"\n",(0,r.jsx)(a.p,{children:"All feedback includes a screenshot, device information, submitter email, and text comments added. The feedback is added to the event timeline so you can find it without difficulty."}),"\n",(0,r.jsx)(a.h2,{id:"feedback-contents",children:"Feedback Contents"}),"\n",(0,r.jsx)(a.p,{children:"When users provide feedback using the In-App Bug Reporting feature, the following information will be included:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Screenshot"})," - A screenshot of the app at the moment the feedback was triggered."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Device Information"})," - Details about the device, such as model, OS version, and other relevant technical information."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Submitter Email"})," - If available, the email address of the user or tester providing the feedback."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Text Comments"})," - Users can include specific comments to describe the issue or suggestion they are reporting."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Event Timeline"})," - The feedback will be added to the app's event timeline, making it easy for developers to track and analyze the feedback."]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"customizing-in-app-feedback",children:"Customizing In-app Feedback"}),"\n",(0,r.jsx)(a.p,{children:"TestFairy allows you to customize the way In-App Feedback is collected. If you prefer not to use the shake gesture for feedback collection, you can programmatically invoke the feedback form using a button click or any other gesture within your app. This way, users can access the feedback form from a designated area within the app, like the help menu or after encountering unexpected errors."}),"\n",(0,r.jsx)(a.p,{children:"Note that if you choose to invoke the feedback form programmatically, it will be shown regardless if the in-app feedback is disabled in your build settings."}),"\n",(0,r.jsxs)(i.A,{groupId:"sdk",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"Cordova",value:"cordova"},{label:"React Native",value:"react"},{label:"Nativescript",value:"native"},{label:"Xamarin",value:"xamarin"},{label:"Unity",value:"unity"},{label:"Adobe Air",value:"adobe"}],children:[(0,r.jsxs)(o.A,{value:"android",children:[(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:"TestFairy.showFeedbackForm();\n"})}),"Example",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:"// Be sure to import TestFairy\nimport com.testfairy.TestFairy;\n\n// Can be invoked on a button press\n// or after your app passes a given page\nTestFairy.showFeedbackForm();\n"})}),(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsxs)(a.p,{children:["For advanced customization, see ",(0,r.jsx)(a.a,{href:"https://docs.testfairy.com/reference/android/com/testfairy/FeedbackOptions.Builder.html",children:"Class FeedbackOptions.Builder"}),"."]})})]}),(0,r.jsxs)(o.A,{value:"ios",children:[(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"[TestFairy pushFeedbackController];\n"})}),"Example",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:'// Be sure to import TestFairy\n#import "TestFairy.h"\n\n// Can be invoked on a button press\n// or after your app passes a given page\n[TestFairy pushFeedbackController];\n'})}),(0,r.jsxs)(a.admonition,{type:"note",children:[(0,r.jsx)(a.p,{children:"On iOS, if the In-App Bug Reporting feature is enabled, the feedback form will also be shown when the tester takes a screenshot."}),(0,r.jsxs)(a.p,{children:["You can also choose to hide the user email field in the feedback form using the ",(0,r.jsx)(a.a,{href:"https://docs.testfairy.com/reference/ios/Classes/TestFairy.html#//api/name/setFeedbackEmailVisible:",children:"setFeedbackEmailVisible"})," class."]})]})]}),(0,r.jsxs)(o.A,{value:"cordova",children:[(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"TestFairy.pushFeedbackController();\n"})}),"Example",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"// Can be invoked on a button press\n// or after your app passes a given page\nTestFairy.pushFeedbackController();\n"})})]}),(0,r.jsxs)(o.A,{value:"react",children:[(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"TestFairy.pushFeedbackController();\n"})}),"Example",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"// Be sure to import TestFairy\nconst TestFairy = require('react-native-testfairy');\n\n// Can be invoked on a button press\n// or after your app passes a given page\nTestFairy.pushFeedbackController();\n"})})]}),(0,r.jsxs)(o.A,{value:"native",children:[(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"TestFairySDK.pushFeedbackController();\n"})}),"Example",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"// Be sure to import TestFairy\nimport { TestFairySDK } from 'nativescript-testfairy';\n\n// Can be invoked on a button press\n// or after your app passes a given page\nTestFairySDK.pushFeedbackController();\n"})})]}),(0,r.jsxs)(o.A,{value:"xamarin",children:[(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:'TestFairy.SetUserId ("<userId>");\n'})}),"Example",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"// Be sure to import TestFairy\nusing TestFairyLib;\n\n// Can be invoked on a button press\n// or after your app passes a given page\nTestFairy.PushFeedbackController();\n"})})]}),(0,r.jsxs)(o.A,{value:"unity",children:[(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"TestFairy.pushFeedbackController();\n"})}),"Example",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"// Be sure to import TestFairy\nusing TestFairyUnity;\n\n// Can be invoked on a button press\n// or after your app passes a given page\nTestFairy.pushFeedbackController();\n"})})]}),(0,r.jsxs)(o.A,{value:"adobe",children:[(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"AirTestFairy.pushFeedbackController();\n"})}),"Example",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"// Be sure to import TestFairy\nimport com.testfairy.AirTestFairy;\n\n// Can be invoked on a button press\n// or after your app passes a given page\nAirTestFairy.pushFeedbackController();\n"})})]})]})]})}function b(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,a,t)=>{t.d(a,{A:()=>i});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var n=t(74848);function i(e){let{children:a,hidden:t,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:a})}},11470:(e,a,t)=>{t.d(a,{A:()=>j});var r=t(96540),s=t(34164),n=t(23104),i=t(56347),o=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:s}}=e;return{value:a,label:t,attributes:r,default:s}}))}(t);return function(e){const a=(0,c.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:t}=e;const s=(0,i.W6)(),n=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,l.aZ)(n),(0,r.useCallback)((e=>{if(!n)return;const a=new URLSearchParams(s.location.search);a.set(n,e),s.replace({...s.location,search:a.toString()})}),[n,s])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:s}=e,n=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:n}))),[c,u]=b({queryString:t,groupId:s}),[f,m]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,n]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:s}),g=(()=>{const e=c??f;return h({value:e,tabValues:n})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,n]),tabValues:n}}var m=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function v(e){let{className:a,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),d=e=>{const a=e.currentTarget,t=l.indexOf(a),s=o[t].value;s!==r&&(c(a),i(s))},u=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;a=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;a=l[t]??l[l.length-1];break}}a?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},a),children:o.map((e=>{let{value:a,label:t,attributes:n}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>l.push(e),onKeyDown:u,onClick:d,...n,className:(0,s.A)("tabs__item",g.tabItem,n?.className,{"tabs__item--active":r===a}),children:t??a},a)}))})}function k(e){let{lazy:a,children:t,selectedValue:n}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function x(e){const a=f(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,y.jsx)(v,{...a,...e}),(0,y.jsx)(k,{...a,...e})]})}function j(e){const a=(0,m.A)();return(0,y.jsx)(x,{...e,children:u(e.children)},String(a))}},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>o});var r=t(96540);const s={},n=r.createContext(s);function i(e){const a=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);