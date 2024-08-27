"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[41352],{77178:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=i(74848),s=i(28453),a=i(86025);i(11470),i(19365);const r={id:"managing-dist",title:"Managing and Distributing Your App",sidebar_label:"Managing and Distributing Your App"},o=void 0,l={id:"testfairy/app-distribution/managing-dist",title:"Managing and Distributing Your App",description:"The distribution process begins once you have uploaded your application.",source:"@site/docs/testfairy/app-distribution/managing-dist.md",sourceDirName:"testfairy/app-distribution",slug:"/testfairy/app-distribution/managing-dist",permalink:"/sauce-docs/pr-preview/pr-2907/testfairy/app-distribution/managing-dist",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/app-distribution/managing-dist.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724771321e3,frontMatter:{id:"managing-dist",title:"Managing and Distributing Your App",sidebar_label:"Managing and Distributing Your App"},sidebar:"docs",previous:{title:"App Center Alternative",permalink:"/sauce-docs/pr-preview/pr-2907/testfairy/app-center-alternative"},next:{title:"App Versioning",permalink:"/sauce-docs/pr-preview/pr-2907/testfairy/app-distribution/app-versioning"}},d={},u=[{value:"Email Invitations",id:"email-invitations",level:2},{value:"Pre-Invitation",id:"pre-invitation",level:3},{value:"Adding to a Specific Build",id:"adding-to-a-specific-build",level:3},{value:"Landing Pages",id:"landing-pages",level:2},{value:"Testers Dashboard",id:"testers-dashboard",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Stopping Distribution",id:"stopping-distribution",level:2},{value:"Disabling Distribution",id:"disabling-distribution",level:3},{value:"Deleting a Build from the Dashboard",id:"deleting-a-build-from-the-dashboard",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The distribution process begins once you have uploaded your application."}),"\n",(0,n.jsxs)(t.p,{children:["For Android applications, refer to ",(0,n.jsx)(t.a,{href:"/testfairy/using-testfairy/uploading-an-app",children:"Uploading Apps"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"If you're distributing an iOS application:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"When using an enterprise certificate, the process mirrors the Android distribution."}),"\n",(0,n.jsxs)(t.li,{children:["With an ad-hoc certificate, follow the steps outlined in ",(0,n.jsx)(t.a,{href:"/testfairy/sdk/ios/adding-udids/",children:"Adding UDIDs to the iOS Development Profile"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["If you're distributing a macOS application, first zip the application (before zipping, the file extension will be ",(0,n.jsx)(t.code,{children:".app"}),"; after zipping, it will become ",(0,n.jsx)(t.code,{children:".zip"}),"). Then, proceed with the process described in ",(0,n.jsx)(t.a,{href:"/testfairy/using-testfairy/uploading-an-app",children:"Uploading Apps"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Distributing your application is a straightforward process:"}),"\n",(0,n.jsx)("img",{src:(0,a.A)("/img/testfairy/app-distribution/upload-process-1.png"),alt:"upload process"}),"\n",(0,n.jsx)(t.p,{children:"You'll need to decide whether testers should log in to their accounts before downloading or if anyone with the link can download the app."}),"\n",(0,n.jsx)(t.p,{children:"The distribution process described above can be used for pre-registered testers or testers invited to specific builds."}),"\n",(0,n.jsx)(t.h2,{id:"email-invitations",children:"Email Invitations"}),"\n",(0,n.jsx)(t.p,{children:"You can invite your testers via email either by pre-inviting them or by adding them to a build."}),"\n",(0,n.jsx)(t.h3,{id:"pre-invitation",children:"Pre-Invitation"}),"\n",(0,n.jsxs)(t.p,{children:["To pre-invite testers, add them to the testers list on the ",(0,n.jsx)(t.a,{href:"https://app.testfairy.com/testers/",children:"TESTERS"})," tab of the dashboard."]}),"\n",(0,n.jsx)("img",{src:(0,a.A)("/img/testfairy/app-distribution/invite-testers-from-build-1.png"),alt:"inviting testers to a build"}),"\n",(0,n.jsx)(t.p,{children:"Pre-inviting is useful when distributing iOS applications to specific devices without an enterprise certificate. It is also commonly used for in-house testing teams."}),"\n",(0,n.jsx)(t.h3,{id:"adding-to-a-specific-build",children:"Adding to a Specific Build"}),"\n",(0,n.jsx)(t.p,{children:"For adding a tester's email to a specific build, use the empty email box at the bottom of the testers list."}),"\n",(0,n.jsx)("img",{src:(0,a.A)("/img/testfairy/app-distribution/invite-testers-from-build-2.png"),alt:"add tester email"}),"\n",(0,n.jsx)(t.p,{children:"This action sends them an email with a download link. It can be done with Android and iOS apps signed with enterprise certificates. This method is also suitable for in-house testing teams that need access to multiple builds and applications."}),"\n",(0,n.jsx)(t.h2,{id:"landing-pages",children:"Landing Pages"}),"\n",(0,n.jsxs)(t.p,{children:["You can build a community of testers or distribute your app by utilizing a pre-designed landing page (see ",(0,n.jsx)(t.a,{href:"/testfairy/app-distribution/landing-pages",children:"Landing Pages"}),"). Share the landing page link with testers to facilitate app downloads. The download link on the landing page can be secured through login, requiring testers to log in before downloading."]}),"\n",(0,n.jsx)(t.h2,{id:"testers-dashboard",children:"Testers Dashboard"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Testers Dashboard"})," is where a tester can view the apps they were invited to test. While all testers have access to this view, developers can switch to the full dashboard view using the ",(0,n.jsx)(t.strong,{children:"View as Developer"})," menu option."]}),"\n",(0,n.jsx)(t.h2,{id:"permissions",children:"Permissions"}),"\n",(0,n.jsx)(t.p,{children:"Permissions manage app distribution to groups of testers/users and are defined for each app (including all its builds). This means all testers within a group can access all builds of the app."}),"\n",(0,n.jsxs)(t.p,{children:["Permissions are based on defined groups of testers (see ",(0,n.jsx)(t.a,{href:"/testfairy/testers/managing-testers",children:"Managing Testers"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["Once groups are defined, they will appear on the ",(0,n.jsx)(t.strong,{children:"Permissions"})," page."]}),"\n",(0,n.jsx)("img",{src:(0,a.A)("/img/testfairy/app-distribution/permissions-screen-1.png"),alt:"permissions"}),"\n",(0,n.jsxs)(t.p,{children:["Selecting the checkbox of a group makes the app (and all its builds) available to that group (and its testers). The app will then be shown on the ",(0,n.jsx)(t.strong,{children:"Testers Dashboard"})," for download. Deselecting a group checkbox removes the app from the ",(0,n.jsx)(t.strong,{children:"Testers Dashboard"})," for testers in that group."]}),"\n",(0,n.jsx)(t.admonition,{title:"Auto-Update in Production",type:"note",children:(0,n.jsx)(t.p,{children:"For apps in production, Auto-Update must be disabled."})}),"\n",(0,n.jsx)(t.h2,{id:"stopping-distribution",children:"Stopping Distribution"}),"\n",(0,n.jsx)(t.p,{children:"To halt the distribution of an app, you have two options:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Disable distribution"}),"\n",(0,n.jsx)(t.li,{children:"Delete the build"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"disabling-distribution",children:"Disabling Distribution"}),"\n",(0,n.jsxs)(t.p,{children:["In build settings, switch ",(0,n.jsx)(t.strong,{children:"App Distribution"})," to ",(0,n.jsx)(t.strong,{children:"Disabled"})," and then click ",(0,n.jsx)(t.strong,{children:"Save Changes"}),"."]}),"\n",(0,n.jsx)("img",{src:(0,a.A)("/img/testfairy/app-distribution/dissable-dist-build.png"),alt:"disable distribution build"}),"\n",(0,n.jsx)(t.p,{children:"A confirmation message will indicate the settings have been updated."}),"\n",(0,n.jsx)("img",{src:(0,a.A)("/img/testfairy/app-distribution/app-dist-save-sucsess.png"),alt:"save settings"}),"\n",(0,n.jsx)(t.p,{children:"On the build overview, you'll see a notification that the build has expired and testers won't be able to install it."}),"\n",(0,n.jsx)("img",{src:(0,a.A)("/img/testfairy/app-distribution/build-invalid.png"),alt:"expired build"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Once a build is disabled, the app will no longer appear on the testers' dashboard. However, testers who have already installed the app can continue using it."})}),"\n",(0,n.jsx)(t.h3,{id:"deleting-a-build-from-the-dashboard",children:"Deleting a Build from the Dashboard"}),"\n",(0,n.jsxs)(t.p,{children:["To remove a build from the system, navigate to the ",(0,n.jsx)(t.strong,{children:"App Overview"})," menu."]}),"\n",(0,n.jsx)("img",{src:(0,a.A)("/img/testfairy/app-distribution/select-builds.png"),alt:"delete build"}),"\n",(0,n.jsx)(t.p,{children:"In the left column, select the checkbox of the build you want to delete. You can choose one, many, or all the builds."}),"\n",(0,n.jsxs)(t.p,{children:["After selecting the build(s), in the bottom actions dropdown list, click ",(0,n.jsx)(t.strong,{children:"Delete (n) builds"}),"."]}),"\n",(0,n.jsx)("img",{src:(0,a.A)("/img/testfairy/app-distribution/delet-builds.png"),alt:"delete build"}),"\n",(0,n.jsx)(t.p,{children:"Confirm the deletion."}),"\n",(0,n.jsx)("img",{src:(0,a.A)("/img/testfairy/app-distribution/confirm-delete.png"),alt:"confirm delete build"})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},19365:(e,t,i)=>{i.d(t,{A:()=>r});i(96540);var n=i(18215);const s={tabItem:"tabItem_Ymn6"};var a=i(74848);function r(e){let{children:t,hidden:i,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,r),hidden:i,children:t})}},11470:(e,t,i)=>{i.d(t,{A:()=>w});var n=i(96540),s=i(18215),a=i(23104),r=i(56347),o=i(205),l=i(57485),d=i(31682),u=i(89466);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:i}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:i,attributes:n,default:s}}=e;return{value:t,label:i,attributes:n,default:s}}))}(i);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function h(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:i}=e;const s=(0,r.W6)(),a=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function g(e){const{defaultValue:t,queryString:i=!1,groupId:s}=e,a=p(e),[r,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=i.find((e=>e.default))??i[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[d,c]=b({queryString:i,groupId:s}),[g,f]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(i);return[s,(0,n.useCallback)((e=>{i&&a.set(e)}),[i,a])]}({groupId:s}),m=(()=>{const e=d??g;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{m&&l(m)}),[m]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,a]),tabValues:a}}var f=i(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=i(74848);function x(e){let{className:t,block:i,selectedValue:n,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),u=e=>{const t=e.currentTarget,i=l.indexOf(t),s=o[i].value;s!==n&&(d(t),r(s))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;t=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;t=l[i]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":i},t),children:o.map((e=>{let{value:t,label:i,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:c,onClick:u,...a,className:(0,s.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":n===t}),children:i??t},t)}))})}function j(e){let{lazy:t,children:i,selectedValue:s}=e;const a=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,v.jsx)(y,{...e,children:c(e.children)},String(t))}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(96540);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);