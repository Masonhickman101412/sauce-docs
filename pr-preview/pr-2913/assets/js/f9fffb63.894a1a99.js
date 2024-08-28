"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[69981],{4084:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=s(74848),r=s(28453);const i={id:"storybook-interactions-testing",title:"Testing Component Interactions with Storybook",sidebar_label:"Storybook Interactions Testing"},o=void 0,c={id:"visual/component-testing/storybook-interactions-testing",title:"Testing Component Interactions with Storybook",description:"Screener provides Interaction Testing that can be added directly to your Storybook stories. This can be used for clicking buttons, filling out forms, and getting your components into the proper visual state to test. This also helps keep your stories and interaction test code in the same place.",source:"@site/docs/visual/component-testing/storybook-interactions-testing.md",sourceDirName:"visual/component-testing",slug:"/visual/component-testing/storybook-interactions-testing",permalink:"/sauce-docs/pr-preview/pr-2913/visual/component-testing/storybook-interactions-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/component-testing/storybook-interactions-testing.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724864962e3,frontMatter:{id:"storybook-interactions-testing",title:"Testing Component Interactions with Storybook",sidebar_label:"Storybook Interactions Testing"}},d={},l=[{value:"Integrating Steps into Stories",id:"integrating-steps-into-stories",level:2},{value:"For React",id:"for-react",level:3},{value:"For Vue",id:"for-vue",level:3},{value:"For Angular",id:"for-angular",level:3},{value:"Steps API",id:"steps-api",level:2}];function h(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Screener provides Interaction Testing that can be added directly to your Storybook stories. This can be used for clicking buttons, filling out forms, and getting your components into the proper visual state to test. This also helps keep your stories and interaction test code in the same place."}),"\n",(0,n.jsx)(t.p,{children:"Example use cases:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Testing stateful components."}),"\n",(0,n.jsx)(t.li,{children:"Testing functional flows."}),"\n",(0,n.jsx)(t.li,{children:"Integration testing multiple layers of your app."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"integrating-steps-into-stories",children:"Integrating Steps into Stories"}),"\n",(0,n.jsxs)(t.p,{children:["To test interactions, Screener provides a class called ",(0,n.jsx)(t.code,{children:"Steps"})," that you can add to your existing Storybook stories. Each step is an instruction to interact with the component."]}),"\n",(0,n.jsx)(t.h3,{id:"for-react",children:"For React"}),"\n",(0,n.jsxs)(t.p,{children:["To add steps to a React story, wrap your component within the ",(0,n.jsx)(t.code,{children:"<Screener/>"})," component, and pass it as a ",(0,n.jsx)(t.code,{children:"'steps'"})," prop. The steps can then be generated using our fluent API below."]}),"\n",(0,n.jsx)(t.p,{children:"Example using React Storybook:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import Screener, {Steps} from 'screener-storybook/src/screener';\n\nstoriesOf('MyComponent', module)\n  .add('default', () => (\n    <Screener steps={new Steps()\n      .click('.selector')\n      .snapshot('name')\n      .end()\n    }>\n      <MyComponent />\n    </Screener>\n  ));\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"<Screener/>"})," component must be the top-most component returned within a story. If you use ",(0,n.jsx)(t.code,{children:"addDecorator"})," in your stories, ensure the last decorator contains the Screener component and steps."]})}),"\n",(0,n.jsx)(t.h3,{id:"for-vue",children:"For Vue"}),"\n",(0,n.jsxs)(t.p,{children:["To add steps to a Vue story, add a ",(0,n.jsx)(t.code,{children:"'steps'"})," prop to the story object being returned. The steps can then be generated using our fluent API below."]}),"\n",(0,n.jsx)(t.p,{children:"Example using Vue Storybook:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import Steps from 'screener-runner/src/steps';\n\nstoriesOf('MyComponent', module)\n  .add('default', () => ({\n    render: h => h(MyComponent),\n    steps: new Steps()\n      .click('.selector')\n      .snapshot('name')\n      .end()\n  }));\n"})}),"\n",(0,n.jsx)(t.h3,{id:"for-angular",children:"For Angular"}),"\n",(0,n.jsxs)(t.p,{children:["To add steps to a Angular story, add a ",(0,n.jsx)(t.code,{children:"'steps'"})," prop to the story object being returned. The steps can then be generated using our fluent API below."]}),"\n",(0,n.jsx)(t.p,{children:"Example using Angular Storybook:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import * as Steps from 'screener-runner/src/steps';\n\nstoriesOf('MyComponent', module)\n  .add('default', () => ({\n    component: MyComponent,\n    props: {},\n    steps: new Steps()\n      .click('.selector')\n      .snapshot('name')\n      .end()\n  }));\n"})}),"\n",(0,n.jsx)(t.h2,{id:"steps-api",children:"Steps API"}),"\n",(0,n.jsx)(t.p,{children:"The following step methods are available. Step methods with selectors have built-in waits to simplify test flow creation."}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"Step Method"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"Description"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"snapshot(name)"})}),(0,n.jsx)("td",{children:"this will capture a Screener snapshot."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"click(selector)"})}),(0,n.jsx)("td",{children:"this will click on the first element matching the provided css selector."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"snapshot(name)"})}),(0,n.jsx)("td",{children:"this will capture a Screener snapshot."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"hover(selector)"})}),(0,n.jsx)("td",{children:"this will move the mouse over the first element matching the provided css selector."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"mouseDown(selector)"})}),(0,n.jsx)("td",{children:"this will press and hold the mouse button over the first element matching the provided css selector."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"mouseUp(selector)"})}),(0,n.jsx)("td",{children:'this will release the mouse button. The "selector" parameter is optional.'})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"focus(selector)"})}),(0,n.jsx)("td",{children:"this will set cursor focus on the first element matching the provided css selector."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"setValue(selector, value)"})}),(0,n.jsx)("td",{children:"this will set the value of the input field matching the provided css selector."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"clearValue(selector)"})}),(0,n.jsx)("td",{children:"this will clear the value of the input field matching the provided css selector."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"keys(selector, keys)"})}),(0,n.jsx)("td",{children:"this will send the provided keys to the first element matching the provided css selector."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"executeScript(code)"})}),(0,n.jsxs)("td",{children:["this executes custom JS code against the client browser the test is running in. ",(0,n.jsx)("strong",{children:"NOTE:"}),' The "code" parameter is a string.']})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"ignore(selector)"})}),(0,n.jsx)("td",{children:"this ignores all elements matching the provided css selector(s)."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"clearIgnores()"})}),(0,n.jsx)("td",{children:"this resets all ignores added using the ignore(selector) step."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"wait(ms)"})}),(0,n.jsx)("td",{children:"this will pause execution for the specified number of ms."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"wait(selector)"})}),(0,n.jsx)("td",{children:"this will wait until the element matching the provided css selector is present."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"waitForNotFound(selector)"})}),(0,n.jsx)("td",{children:"this will wait until the element matching the provided css selector is Not present."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"cssAnimations(isEnabled)"})}),(0,n.jsxs)("td",{children:["this will override the global cssAnimations option for the current UI state. Set to ",(0,n.jsx)("code",{children:"true"})," to enable CSS Animations; set to ",(0,n.jsx)("code",{children:"false"})," to disable."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"rtl()"})}),(0,n.jsx)("td",{children:"this will set the current UI state to right-to-left direction."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"ltr()"})}),(0,n.jsx)("td",{children:"this will set the current UI state to left-to-right direction."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"url(url)"})}),(0,n.jsx)("td",{children:"this will load a new url."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"end()"})}),(0,n.jsx)("td",{children:"this will return the steps to be run."})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["When adding ",(0,n.jsx)(t.code,{children:"Steps"})," using the fluent API, you must end the method chain with ",(0,n.jsx)(t.code,{children:"end()"}),"."]})})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>c});var n=s(96540);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);