"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[44132],{18418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=t(74848),r=t(28453),s=t(86025);t(11470),t(19365);const i={id:"slack",title:"Slack",sidebar_label:"Slack"},l=void 0,o={id:"testfairy/integrations/slack",title:"Slack",description:"One-Click Integration",source:"@site/docs/testfairy/integrations/slack.md",sourceDirName:"testfairy/integrations",slug:"/testfairy/integrations/slack",permalink:"/sauce-docs/pr-preview/pr-2899/testfairy/integrations/slack",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/integrations/slack.md",tags:[],version:"current",lastUpdatedBy:"Laura Thomas",lastUpdatedAt:16887427e5,frontMatter:{id:"slack",title:"Slack",sidebar_label:"Slack"},sidebar:"docs",previous:{title:"Coralogix",permalink:"/sauce-docs/pr-preview/pr-2899/testfairy/integrations/coralogix"},next:{title:"SMTP and Gmail",permalink:"/sauce-docs/pr-preview/pr-2899/testfairy/integrations/smtp-gmail"}},c={},u=[{value:"One-Click Integration",id:"one-click-integration",level:2},{value:"Manual Integration",id:"manual-integration",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"one-click-integration",children:"One-Click Integration"}),"\n",(0,a.jsx)(n.p,{children:"TestFairy integrates with Slack seamlessly, providing human-readable, real-time notifications for your selected events."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Head over to your TestFairy Dashboard, and select ",(0,a.jsx)(n.strong,{children:"Account Preferences"}),"."]}),"\n",(0,a.jsx)("img",{src:(0,s.A)("/img/testfairy/integrations/slack/preferences-link.png"),alt:"account preferences"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Select ",(0,a.jsx)(n.strong,{children:"Integrations"}),", then click ",(0,a.jsx)(n.strong,{children:"Add integration"}),"."]}),"\n",(0,a.jsx)("img",{src:(0,s.A)("/img/testfairy/integrations/slack/account-settings-4.png"),alt:"add integration"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Enter the domain of your Slack account:"}),"\n",(0,a.jsx)("img",{src:(0,s.A)("/img/testfairy/integrations/slack/slack-domain-1.png"),alt:"slack domain"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["It determines where your notifications appear. You may select an existing channel or create a new channel. Choose your channel and select ",(0,a.jsx)(n.strong,{children:"Authorize"}),"."]}),"\n",(0,a.jsx)("img",{src:(0,s.A)("/img/testfairy/integrations/slack/slack-1c.png"),alt:"authorize channel"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["You are returned to your TestFairy page with the ",(0,a.jsx)(n.code,{children:"URL"})," and ",(0,a.jsx)(n.code,{children:"Events"})," already filled in and selected."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.strong,{children:"Test URL"})," to test the webhook."]}),"\n",(0,a.jsxs)(n.li,{children:["Select ",(0,a.jsx)(n.strong,{children:"Save webhook"})," to add and confirm the Slack integration.","\n",(0,a.jsx)("img",{src:(0,s.A)("/img/testfairy/integrations/slack/slack-1d.png"),alt:"Save webhook"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Now, you receive notifications in your Slack channel."}),"\n",(0,a.jsx)("img",{src:(0,s.A)("/img/testfairy/integrations/slack/slack-message-preview.png"),alt:"slack message preview"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Integrations require a paid account; click ",(0,a.jsx)(n.a,{href:"https://www.testfairy.com/pricing",children:"https://www.testfairy.com/pricing"})," for more information."]})}),"\n",(0,a.jsx)(n.h2,{id:"manual-integration",children:"Manual Integration"}),"\n",(0,a.jsx)(n.p,{children:"If you need to create a manual integration with Slack, follow these steps:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Open the Slack ",(0,a.jsx)(n.a,{href:"https://slack.com/apps/A0F7XDUAZ-incoming-webhooks",children:"Incoming WebHooks"})," app."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["If you do not have the app installed in your workspace, press ",(0,a.jsx)(n.strong,{children:"Add to Slack"}),"."]}),"\n",(0,a.jsx)("img",{src:(0,s.A)("/img/testfairy/integrations/slack/slack-manualint-1.png"),alt:"add slack"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["After adding the app choose the Slack channel you want to post the messages in and press the ",(0,a.jsx)(n.strong,{children:"Add Incoming Webhooks Integration"}),"."]}),"\n",(0,a.jsx)("img",{src:(0,s.A)("/img/testfairy/integrations/slack/slack-manualint-2.png"),alt:"Add incoming webhook integration"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Copy the ",(0,a.jsx)(n.code,{children:"Webhook URL"})," link."]}),"\n",(0,a.jsx)("img",{src:(0,s.A)("/img/testfairy/integrations/slack/slack-manualint-3.png"),alt:"webhook URL"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Go to the ",(0,a.jsx)(n.strong,{children:"Integrations"}),", and press ",(0,a.jsx)(n.strong,{children:"Add Integration"})," for Slack."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Open your TestFairy Preferences, go to ",(0,a.jsx)(n.strong,{children:"Integrations"})," and click ",(0,a.jsx)(n.strong,{children:"Add integration"})," next to WEBHOOK."]}),"\n",(0,a.jsx)("img",{src:(0,s.A)("/img/testfairy/integrations/slack/account-settings-4.png"),alt:"Add integration"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Paste the Webhook URL into the URL field and then ",(0,a.jsx)(n.strong,{children:"Save webhook"}),"."]}),"\n",(0,a.jsx)("img",{src:(0,s.A)("/img/testfairy/integrations/slack/slack-manualint-5.png"),alt:"save webhook"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"You now receive notifications in your Slack channel."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var a=t(96540),r=t(18215),s=t(23104),i=t(56347),l=t(205),o=t(57485),c=t(31682),u=t(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,d]=p({queryString:t,groupId:r}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),x=(()=>{const e=c??m;return g({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=t(74848);function b(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),r=l[t].value;r!==a&&(c(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,k.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,k.jsx)(b,{...e,...n}),(0,k.jsx)(j,{...e,...n})]})}function v(e){const n=(0,f.A)();return(0,k.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var a=t(96540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);