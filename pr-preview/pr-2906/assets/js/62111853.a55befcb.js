"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[29550],{79511:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var t=a(74848),r=a(28453),s=a(86025),i=a(11470),l=a(19365);const o={id:"baseline-branch",title:"Baseline Branching and Merging",sidebar_label:"Baseline Branching and Merging"},c=void 0,u={id:"visual/e2e-testing/workflow/baseline-branch",title:"Baseline Branching and Merging",description:"In this section, you'll learn how to pull the baseline when branching and how to auto-accept when merging.",source:"@site/docs/visual/e2e-testing/workflow/baseline-branch.md",sourceDirName:"visual/e2e-testing/workflow",slug:"/visual/e2e-testing/workflow/baseline-branch",permalink:"/sauce-docs/pr-preview/pr-2906/visual/e2e-testing/workflow/baseline-branch",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/e2e-testing/workflow/baseline-branch.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"baseline-branch",title:"Baseline Branching and Merging",sidebar_label:"Baseline Branching and Merging"}},h={},d=[{value:"Workflow Optimization",id:"workflow-optimization",level:2},{value:"Setup Steps",id:"setup-steps",level:2},{value:"Additional Options",id:"additional-options",level:2}];function b(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In this section, you'll learn how to pull the baseline when branching and how to auto-accept when merging."}),"\n",(0,t.jsx)("img",{src:(0,s.A)("img/visual/e2e-branching-merging.png"),alt:"E2E Baseline Branching and Merging"}),"\n",(0,t.jsx)(n.h2,{id:"workflow-optimization",children:"Workflow Optimization"}),"\n",(0,t.jsx)(n.p,{children:"When working with feature branches, Visual E2E can save you time and optimize your workflow by automating the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Automatically Accept updates when merging to or from the base branch"}),": When merging an accepted base branch into a feature branch, Screener auto-accepts UI states that match the latest base branch test. And when merging into the base branch, Screener auto-accepts UI states that match the latest accepted feature branch test."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Automatically pull initial baseline from the base branch"}),": This is useful for having a set of UI states to initially compare a new branch against. For example, if you create a new feature branch based off of the main branch, and you have a set of UI states on the main branch, you can then compare the new branch's visual changes to the main branch's UI states."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This can accelerate your workflow since you'll only need to accept once, when merging accepted updates from your base branch into a feature branch. No need to re-review UI states or re-run builds to pass again."}),"\n",(0,t.jsx)(n.h2,{id:"setup-steps",children:"Setup Steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/visual/e2e-testing/integrations/continuous-integration",children:"Integrate your Visual E2E tests into your CI process"})," so that visual tests are automatically run when branching or merging."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set the ",(0,t.jsx)(n.code,{children:"branch"})," and ",(0,t.jsx)(n.code,{children:"baseBranch"})," options in your ",(0,t.jsxs)(n.a,{href:"/visual/e2e-testing/commands-options/#saucevisual-capability-options",children:[(0,t.jsx)(n.code,{children:"sauce:visual"})," WebDriver capabilities"]})," to set the name of your current branch and the name of your base branch respectively."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Below are examples of branch environment variables for various CI tools:"}),"\n",(0,t.jsxs)(i.A,{defaultValue:"Jenkins",values:[{label:"Jenkins",value:"Jenkins"},{label:"CircleCI",value:"CircleCI"},{label:"TravisCI",value:"TravisCI"},{label:"GitLab",value:"GitLab"}],children:[(0,t.jsx)(l.A,{value:"Jenkins",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"capabilities: {\n  ...\n  'sauce:visual': {\n    branch: process.env.GIT_BRANCH,\n    baseBranch: 'main'\n  }\n}\n"})})}),(0,t.jsx)(l.A,{value:"CircleCI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"capabilities: {\n  ...\n  'sauce:visual': {\n    branch: process.env.CIRCLE_BRANCH,\n    baseBranch: 'main'\n  }\n}\n"})})}),(0,t.jsx)(l.A,{value:"TravisCI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"capabilities: {\n  ...\n  'sauce:visual': {\n    branch: process.env.TRAVIS_PULL_REQUEST_BRANCH || process.env.TRAVIS_BRANCH,\n    baseBranch: 'main'\n  }\n}\n"})})}),(0,t.jsx)(l.A,{value:"GitLab",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"capabilities: {\n  ...\n  'sauce:visual': {\n    branch: process.env.CI_COMMIT_REF_NAME,\n    baseBranch: 'main'\n  }\n}\n"})})})]}),"\n",(0,t.jsxs)(i.A,{defaultValue:"Codeship",values:[{label:"Codeship",value:"Codeship"},{label:"Buildkite",value:"Buildkite"},{label:"Drone",value:"Drone"}],children:[(0,t.jsx)(l.A,{value:"Codeship",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"capabilities: {\n  ...\n  'sauce:visual': {\n    branch: process.env.CI_BRANCH,\n    baseBranch: 'main'\n  }\n}\n"})})}),(0,t.jsx)(l.A,{value:"Buildkite",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"capabilities: {\n  ...\n  'sauce:visual': {\n    branch: process.env.BUILDKITE_BRANCH,\n    baseBranch: 'main'\n  }\n}\n"})})}),(0,t.jsx)(l.A,{value:"Drone",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"capabilities: {\n  ...\n  'sauce:visual': {\n    branch: process.env.DRONE_BRANCH,\n    baseBranch: 'main'\n  }\n}\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"additional-options",children:"Additional Options"}),"\n",(0,t.jsxs)(n.p,{children:["See the full list of available ",(0,t.jsx)(n.code,{children:"sauce:visual"})," options ",(0,t.jsx)(n.a,{href:"/visual/e2e-testing/commands-options",children:"here"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>i});a(96540);var t=a(18215);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function i(e){let{children:n,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>y});var t=a(96540),r=a(18215),s=a(23104),i=a(56347),l=a(205),o=a(57485),c=a(31682),u=a(89466);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function b(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=d(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,h]=p({queryString:a,groupId:r}),[m,v]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),f=(()=>{const e=c??m;return b({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),v(e)}),[h,v,s]),tabValues:s}}var v=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function x(e){let{className:n,block:a,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,a=o.indexOf(n),r=l[a].value;r!==t&&(c(n),i(r))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:h,onClick:u,...s,className:(0,r.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function y(e){const n=(0,v.A)();return(0,g.jsx)(w,{...e,children:h(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>l});var t=a(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);