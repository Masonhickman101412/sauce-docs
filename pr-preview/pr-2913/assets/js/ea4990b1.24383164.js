"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[44132],{37423:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(74848),a=t(28453),s=t(86025);t(11470),t(19365);const i={id:"slack",title:"Slack",sidebar_label:"Slack"},l=void 0,o={id:"testfairy/integrations/slack",title:"Slack",description:"One-Click Integration",source:"@site/docs/testfairy/integrations/slack.md",sourceDirName:"testfairy/integrations",slug:"/testfairy/integrations/slack",permalink:"/sauce-docs/pr-preview/pr-2913/testfairy/integrations/slack",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/integrations/slack.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724864962e3,frontMatter:{id:"slack",title:"Slack",sidebar_label:"Slack"},sidebar:"docs",previous:{title:"Coralogix",permalink:"/sauce-docs/pr-preview/pr-2913/testfairy/integrations/coralogix"},next:{title:"SMTP and Gmail",permalink:"/sauce-docs/pr-preview/pr-2913/testfairy/integrations/smtp-gmail"}},c={},u=[{value:"One-Click Integration",id:"one-click-integration",level:2},{value:"Manual Integration",id:"manual-integration",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"one-click-integration",children:"One-Click Integration"}),"\n",(0,r.jsx)(n.p,{children:"TestFairy integrates with Slack seamlessly, providing human-readable, real-time notifications for your selected events."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Head over to your TestFairy Dashboard, and select ",(0,r.jsx)(n.strong,{children:"Account Preferences"}),"."]}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("/img/testfairy/integrations/slack/preferences-link.png"),alt:"account preferences"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select ",(0,r.jsx)(n.strong,{children:"Integrations"}),", then click ",(0,r.jsx)(n.strong,{children:"Add integration"}),"."]}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("/img/testfairy/integrations/slack/account-settings-4.png"),alt:"add integration"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enter the domain of your Slack account:"}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("/img/testfairy/integrations/slack/slack-domain-1.png"),alt:"slack domain"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["It determines where your notifications appear. You may select an existing channel or create a new channel. Choose your channel and select ",(0,r.jsx)(n.strong,{children:"Authorize"}),"."]}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("/img/testfairy/integrations/slack/slack-1c.png"),alt:"authorize channel"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["You are returned to your TestFairy page with the ",(0,r.jsx)(n.code,{children:"URL"})," and ",(0,r.jsx)(n.code,{children:"Events"})," already filled in and selected."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Test URL"})," to test the webhook."]}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.strong,{children:"Save webhook"})," to add and confirm the Slack integration.","\n",(0,r.jsx)("img",{src:(0,s.Ay)("/img/testfairy/integrations/slack/slack-1d.png"),alt:"Save webhook"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Now, you receive notifications in your Slack channel."}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("/img/testfairy/integrations/slack/slack-message-preview.png"),alt:"slack message preview"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Integrations require a paid account; click ",(0,r.jsx)(n.a,{href:"https://www.testfairy.com/pricing",children:"https://www.testfairy.com/pricing"})," for more information."]})}),"\n",(0,r.jsx)(n.h2,{id:"manual-integration",children:"Manual Integration"}),"\n",(0,r.jsx)(n.p,{children:"If you need to create a manual integration with Slack, follow these steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open the Slack ",(0,r.jsx)(n.a,{href:"https://slack.com/apps/A0F7XDUAZ-incoming-webhooks",children:"Incoming WebHooks"})," app."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If you do not have the app installed in your workspace, press ",(0,r.jsx)(n.strong,{children:"Add to Slack"}),"."]}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("/img/testfairy/integrations/slack/slack-manualint-1.png"),alt:"add slack"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["After adding the app choose the Slack channel you want to post the messages in and press the ",(0,r.jsx)(n.strong,{children:"Add Incoming Webhooks Integration"}),"."]}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("/img/testfairy/integrations/slack/slack-manualint-2.png"),alt:"Add incoming webhook integration"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Copy the ",(0,r.jsx)(n.code,{children:"Webhook URL"})," link."]}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("/img/testfairy/integrations/slack/slack-manualint-3.png"),alt:"webhook URL"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to the ",(0,r.jsx)(n.strong,{children:"Integrations"}),", and press ",(0,r.jsx)(n.strong,{children:"Add Integration"})," for Slack."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open your TestFairy Preferences, go to ",(0,r.jsx)(n.strong,{children:"Integrations"})," and click ",(0,r.jsx)(n.strong,{children:"Add integration"})," next to WEBHOOK."]}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("/img/testfairy/integrations/slack/account-settings-4.png"),alt:"Add integration"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Paste the Webhook URL into the URL field and then ",(0,r.jsx)(n.strong,{children:"Save webhook"}),"."]}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("/img/testfairy/integrations/slack/slack-manualint-5.png"),alt:"save webhook"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"You now receive notifications in your Slack channel."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(96540),a=t(34164),s=t(23104),i=t(56347),l=t(205),o=t(57485),c=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=g({queryString:t,groupId:a}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),x=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=t(74848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(c(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,k.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,k.jsx)(b,{...n,...e}),(0,k.jsx)(j,{...n,...e})]})}function v(e){const n=(0,f.A)();return(0,k.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);