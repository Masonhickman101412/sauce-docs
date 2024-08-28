"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[75744],{51675:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=r(74848),n=r(28453),a=r(86025);r(11470),r(19365);const i={id:"managing-testers",title:"Managing Testers",sidebar_label:"Managing Testers"},o=void 0,l={id:"testfairy/testers/managing-testers",title:"Managing Testers",description:"To see all the testers you have for your app, invite new testers, or import/export a list of testers, click on the TESTERS tab:",source:"@site/docs/testfairy/testers/managing-testers.md",sourceDirName:"testfairy/testers",slug:"/testfairy/testers/managing-testers",permalink:"/sauce-docs/pr-preview/pr-2913/testfairy/testers/managing-testers",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/testers/managing-testers.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724864962e3,frontMatter:{id:"managing-testers",title:"Managing Testers",sidebar_label:"Managing Testers"},sidebar:"docs",previous:{title:"Tags",permalink:"/sauce-docs/pr-preview/pr-2913/testfairy/app-distribution/tags"},next:{title:"Build the Testers App",permalink:"/sauce-docs/pr-preview/pr-2913/testfairy/testers/building-testers-app"}},u={},c=[{value:"Manage testers through the API",id:"manage-testers-through-the-api",level:2},{value:"Inviting Testers by Email",id:"inviting-testers-by-email",level:2},{value:"Managing Tester Groups",id:"managing-tester-groups",level:2},{value:"Deleting Groups",id:"deleting-groups",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["To see all the testers you have for your app, invite new testers, or import/export a list of testers, click on the ",(0,s.jsx)(t.strong,{children:"TESTERS"})," tab:"]}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("/img/test-fairy/group-testers.png"),alt:"alt upload"}),"\n",(0,s.jsx)(t.h2,{id:"manage-testers-through-the-api",children:"Manage testers through the API"}),"\n",(0,s.jsxs)(t.p,{children:["You can fully automate and control tester management through our APIs. For more details, refer to our ",(0,s.jsx)(t.a,{href:"/testfairy/api-reference/rest-api/#testers",children:"API documentation."}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"inviting-testers-by-email",children:"Inviting Testers by Email"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Login to ",(0,s.jsx)(t.a,{href:"https://app.testfairy.com/",children:"TestFairy"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["To invite testers by email, click on the ",(0,s.jsx)(t.strong,{children:"Add Testers"}),".","\n",(0,s.jsx)("img",{src:(0,a.Ay)("/img/test-fairy/add-testers1.png"),alt:"alt upload"}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"In the Email box, add the email addresses of the testers you wish to invite. Each email address should be entered on a separate row."}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["You can also select a Group for the testers in the list or leave it blank (see ",(0,s.jsx)(t.strong,{children:"Managing tester groups"})," below)."]})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["After you finish, click ",(0,s.jsx)(t.strong,{children:"Add Beta Testers"})," below the list to complete the process."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You can add testers manually or ",(0,s.jsx)(t.a,{href:"https://app.testfairy.com/testers/import/",children:"import lists of testers"})," in CSV format."]}),"\n",(0,s.jsx)(t.admonition,{title:"Only for iOS",type:"note",children:(0,s.jsxs)(t.p,{children:["If you are ",(0,s.jsx)(t.strong,{children:"not"})," using an ",(0,s.jsx)(t.a,{href:"https://developer.apple.com/programs/ios/enterprise/",children:"iOS Enterprise certificate"}),", you will need to obtain the UDIDs (Unique Device Identifiers) of your testers' devices before sending them the app. The registration link in the email sent to testers will enable them to provide their UDIDs. These details will be added to your ",(0,s.jsx)(t.a,{href:"https://app.testfairy.com/testers",children:"testers page"}),".\nFor more information on how to add UDIDs to provisioning profiles, see ",(0,s.jsx)(t.a,{href:"/testfairy/sdk/ios/adding-udids/",children:"Adding UDIDs to iOS Development Profile"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"managing-tester-groups",children:"Managing Tester Groups"}),"\n",(0,s.jsxs)(t.p,{children:["You can also divide testers into ",(0,s.jsx)(t.strong,{children:"groups"})," to add more structure and organize your testing efforts."]}),"\n",(0,s.jsx)(t.p,{children:"To create a group, follow the steps below:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Click in the GROUPS text box and then on ",(0,s.jsx)(t.code,{children:"Create new group..."}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("/img/test-fairy/testers-new-group.png"),alt:"Create new group"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Choose a group name and click ",(0,s.jsx)(t.strong,{children:"OK"}),". The tester you clicked in their group will be assigned the group you created."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Tester groups help you manage the invitation process to your apps. If you want to invite several testers that are all under the same group, filter the list of testers according to that group and then select all and invite them."}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("/img/test-fairy/group-add.png"),alt:"Add multiple testers to the group"}),"\n",(0,s.jsx)(t.h2,{id:"deleting-groups",children:"Deleting Groups"}),"\n",(0,s.jsx)(t.p,{children:"To delete a group, you must first delete all its mentions in the GROUPS field. Delete the group by pressing the x next to its name. Once you have deleted all its occurrences, it will be deleted. Then, refresh the page to make sure it was deleted."}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("/img/test-fairy/remove-group.png"),alt:"Add multiple testers to the group"})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(34164);const n={tabItem:"tabItem_Ymn6"};var a=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,i),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var s=r(96540),n=r(34164),a=r(23104),i=r(56347),o=r(205),l=r(57485),u=r(31682),c=r(70679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=p(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[u,d]=g({queryString:r,groupId:n}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,c.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),b=(()=>{const e=u??m;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function y(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),n=o[r].value;n!==s&&(u(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...a,className:(0,n.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":s===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,v.jsx)(y,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var s=r(96540);const n={},a=s.createContext(n);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);