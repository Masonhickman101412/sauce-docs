"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[66691],{65538:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var t=n(74848),r=n(28453),a=(n(86025),n(11470)),i=n(19365);const l={id:"commands-options",title:"Visual E2E Testing Reference",sidebar_label:"Commands and Options"},c=void 0,d={id:"visual/e2e-testing/commands-options",title:"Visual E2E Testing Reference",description:"The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the integration steps.",source:"@site/docs/visual/e2e-testing/commands-options.md",sourceDirName:"visual/e2e-testing",slug:"/visual/e2e-testing/commands-options",permalink:"/sauce-docs/pr-preview/pr-2899/visual/e2e-testing/commands-options",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/e2e-testing/commands-options.md",tags:[],version:"current",lastUpdatedBy:"Logan Graham",lastUpdatedAt:1712351123e3,frontMatter:{id:"commands-options",title:"Visual E2E Testing Reference",sidebar_label:"Commands and Options"}},o={},h=[{value:"Visual E2E Commands",id:"visual-e2e-commands",level:2},{value:"Init command",id:"init-command",level:3},{value:"Arguments",id:"arguments",level:4},{value:"Code Snippets",id:"code-snippets",level:4},{value:"Snapshot command",id:"snapshot-command",level:3},{value:"Arguments",id:"arguments-1",level:4},{value:"Code Snippets",id:"code-snippets-1",level:4},{value:"End command",id:"end-command",level:3},{value:"Code Snippets",id:"code-snippets-2",level:4},{value:"Example Responses",id:"example-responses",level:4},{value:"<code>sauce:visual</code> Capability Options",id:"saucevisual-capability-options",level:2}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.admonition,{title:"Screener End-of-life",type:"warning",children:[(0,t.jsxs)(s.p,{children:["The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the ",(0,t.jsx)(s.a,{href:"/visual-testing/",children:"integration steps"}),"."]}),(0,t.jsx)(s.p,{children:"If you have any questions, please reach out to your Customer Success Manager or Sauce Labs Support."})]}),"\n",(0,t.jsx)(s.h2,{id:"visual-e2e-commands",children:"Visual E2E Commands"}),"\n",(0,t.jsx)(s.p,{children:"Screener's Visual E2E commands can be integrated into existing WebDriver test code simply and safely. Each command is simply a JavaScript comment placed in a WebDriver execute command \u2014 no need to install anything."}),"\n",(0,t.jsx)(s.h3,{id:"init-command",children:"Init command"}),"\n",(0,t.jsxs)(s.p,{children:["The Init command (",(0,t.jsx)(s.code,{children:"/*@visual.init*/"}),") is used to initialize and name a Visual test. This command must be added before any ",(0,t.jsx)(s.a,{href:"/visual/e2e-testing/commands-options/#snapshot-command",children:"snapshot commands"}),". It can be used multiple times in a browser session to initialize multiple visual tests."]}),"\n",(0,t.jsx)(s.h4,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Argument"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Type"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Required"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Description"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"name"})}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{children:"Yes"}),(0,t.jsx)("td",{children:"Name of Visual test"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"options"})}),(0,t.jsx)("td",{children:"Object"}),(0,t.jsx)("td",{children:"No"}),(0,t.jsxs)("td",{children:["Init command options. ",(0,t.jsx)("p",{children:"Options available:"}),"\n",(0,t.jsx)("ul",{children:(0,t.jsxs)("li",{children:[(0,t.jsx)("code",{children:"ignore"}),": comma-delimited list of css-selectors to ignore in all snapshots in test."]})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",metastring:'title="Example"',children:"{ ignore: '.selector' }\n"})})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"code-snippets",children:"Code Snippets"}),"\n",(0,t.jsxs)(a.A,{defaultValue:"JS/WebdriverIO",values:[{label:"JS/WebdriverIO",value:"JS/WebdriverIO"},{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Ruby",value:"Ruby"},{label:"C#",value:"C#"}],children:[(0,t.jsx)(i.A,{value:"JS/WebdriverIO",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"browser.execute('/*@visual.init*/', 'My Visual Test')\nbrowser.execute('/*@visual.init*/', 'My Visual Test', { ignore: '.selector' })\n"})})}),(0,t.jsx)(i.A,{value:"Java",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:'((JavascriptExecutor) driver).executeScript("/*@visual.init*/", "My Visual Test");\n'})})}),(0,t.jsx)(i.A,{value:"Python",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:"self.driver.execute_script('/*@visual.init*/', 'My Visual Test')\n"})})}),(0,t.jsx)(i.A,{value:"Ruby",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rb",children:"driver.execute_script('/*@visual.init*/', 'My Visual Test')\n"})})}),(0,t.jsx)(i.A,{value:"C#",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'((IJavaScriptExecutor) driver).ExecuteScript("/*@visual.init*/", "My Visual Test");\n'})})})]}),"\n",(0,t.jsx)(s.h3,{id:"snapshot-command",children:"Snapshot command"}),"\n",(0,t.jsxs)(s.p,{children:["The Snapshot command (",(0,t.jsx)(s.code,{children:"/*@visual.snapshot*/"}),") is used to capture a visual snapshot. This JS comment can be added into your code wherever you want a snapshot to be taken, and can be used multiple times."]}),"\n",(0,t.jsx)(s.p,{children:"The above Init command must be called first before any snapshots are taken, or an error will occur."}),"\n",(0,t.jsx)(s.h4,{id:"arguments-1",children:"Arguments"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Argument"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Type"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Required"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Description"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"name"}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{children:"Yes"}),(0,t.jsx)("td",{children:"Name of Snapshot"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"options"}),(0,t.jsx)("td",{children:"Object"}),(0,t.jsx)("td",{children:"No"}),(0,t.jsxs)("td",{children:["Snapshot command options. ",(0,t.jsx)("p",{children:"Options available:"}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("code",{children:"ignore"}),": comma-delimited list of css-selectors to ignore in snapshot."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("code",{children:"cropTo"}),": single css-selector to crop the snapshot to."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("code",{children:"scrollAndStitchScreenshot"}),": boolean option to capture a full-page screenshot using a scrolling and stitching strategy instead of using native browser full-page screenshot capabilities."]})]})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"code-snippets-1",children:"Code Snippets"}),"\n",(0,t.jsxs)(a.A,{defaultValue:"JS/WebdriverIO",values:[{label:"JS/WebdriverIO",value:"JS/WebdriverIO"},{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Ruby",value:"Ruby"},{label:"C#",value:"C#"}],children:[(0,t.jsxs)(i.A,{value:"JS/WebdriverIO",children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"browser.execute('/*@visual.snapshot*/', 'State Name')\n"})}),"Example with ",(0,t.jsx)("code",{children:"ignore"})," option:",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"browser.execute('/*@visual.snapshot*/', 'State Name', { ignore: '.selector' })\n"})}),"Example with ",(0,t.jsx)("code",{children:"cropTo"})," option:",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"browser.execute('/*@visual.snapshot*/', 'State Name', {\nignore: '.selector',\ncropTo: '#header'\n})\n"})}),"Example with ",(0,t.jsx)("code",{children:"scrollAndStitchScreenshot"})," option:",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"browser.execute('/*@visual.snapshot*/', 'State Name', {\nignore: '.selector',\ncropTo: '#header',\nscrollAndStitchScreenshot: true\n})\n"})})]}),(0,t.jsxs)(i.A,{value:"Java",children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:'((JavascriptExecutor) driver).executeScript("/*@visual.snapshot*/", "State Name");\n'})}),"Example with ignore option:",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:'HashMap options = new HashMap();\noptions.put("ignore", ".selector");\n((JavascriptExecutor) driver).executeScript("/*@visual.snapshot*/", "State Name", options);\n'})})]}),(0,t.jsx)(i.A,{value:"Python",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:"self.driver.execute_script('/*@visual.snapshot*/', 'State Name')\n"})})}),(0,t.jsx)(i.A,{value:"Ruby",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rb",children:"driver.execute_script('/*@visual.snapshot*/', 'State Name')\n"})})}),(0,t.jsxs)(i.A,{value:"C#",children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'((IJavaScriptExecutor) driver).ExecuteScript("/*@visual.snapshot*/", "State Name");\n'})}),"Example with ignore option:",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'var ignoredElement = new Dictionary<string, object>();\nignoredElement.Add("ignore", "#login_button_container");\nJsExecutor.ExecuteScript("/*@visual.snapshot*/", "Ignore on Snapshot", ignoredElement);\n'})}),"Example with ",(0,t.jsx)("code",{children:"cropTo"})," option:",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'var croppedElement = new Dictionary<string, object>();\ncroppedElement.Add("cropTo", ".bot_column");\nJsExecutor.ExecuteScript("/*@visual.snapshot*/", "cropTo", croppedElement);\n'})})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.h3,{id:"end-command",children:"End command"}),"\n",(0,t.jsxs)(s.p,{children:["The End command (",(0,t.jsx)(s.code,{children:"/*@visual.end*/"}),") is used to wait and get visual results. This command should be the last visual command in your browser session, used after all your visual snapshots."]}),"\n",(0,t.jsx)(s.p,{children:"The response will contain the following properties:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"passed"})}),(0,t.jsx)("td",{children:"Whether or not the test passed."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"status"})}),(0,t.jsxs)("td",{children:["The test status. Possible values: ",(0,t.jsx)("code",{children:"success"}),", ",(0,t.jsx)("code",{children:"failure"}),", ",(0,t.jsx)("code",{children:"error"}),", ",(0,t.jsx)("code",{children:"timeout"}),", ",(0,t.jsx)("code",{children:"cancelled"}),"."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"totals"})}),(0,t.jsx)("td",{children:"Visual regression result totals."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"states"})}),(0,t.jsxs)("td",{children:["List of all snapshots, including name, status and URL. ",(0,t.jsx)("strong",{children:"NOTE"}),": URLs are not permalinks; URL will direct to the latest results for the snapshot."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"message"})}),(0,t.jsx)("td",{children:"Error message."})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.h4,{id:"code-snippets-2",children:"Code Snippets"}),"\n",(0,t.jsxs)(a.A,{defaultValue:"JS/WebdriverIO",values:[{label:"JS/WebdriverIO",value:"JS/WebdriverIO"},{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Ruby",value:"Ruby"},{label:"C#",value:"C#"}],children:[(0,t.jsx)(i.A,{value:"JS/WebdriverIO",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"const result = browser.execute('/*@visual.end*/')\nassert.ok(result.passed, result.message)\n"})})}),(0,t.jsx)(i.A,{value:"Java",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:'Map response = (Map)((JavascriptExecutor) driver).executeScript("/*@visual.end*/");\nAssert.assertTrue((Boolean)response.get("passed"), (String)response.get("message"));\n'})})}),(0,t.jsx)(i.A,{value:"Python",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:"result = self.driver.execute_script('/*@visual.end*/')\nassert result['passed'] is True\n"})})}),(0,t.jsx)(i.A,{value:"Ruby",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rb",children:"result = driver.execute_script('/*@visual.end*/')\nexpect(result['passed']).to be_truthy, result['message']\n"})})}),(0,t.jsx)(i.A,{value:"C#",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'var response = ((IJavaScriptExecutor) driver).ExecuteScript("/*@visual.end*/") as Dictionary;\nAssert.IsTrue((Boolean)response["passed"], (String)response["message"]);\n'})})})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.h4,{id:"example-responses",children:"Example Responses"}),"\n",(0,t.jsxs)(a.A,{defaultValue:"Success",values:[{label:"Success",value:"Success"},{label:"Failure",value:"Failure"}],children:[(0,t.jsx)(i.A,{value:"Success",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:"{\n  passed: true,\n  status: 'success',\n  totals: {new: 0, changed: 0, accepted: 2, rejected: 0, all: 2},\n  states: [\n    {name: 'State 1', groupName: 'Test 1', status: 'accepted', url: '...'}\n    {name: 'State 2', groupName: 'Test 1', status: 'accepted', url: '...'}\n  ],\n  message: null\n}\n"})})}),(0,t.jsx)(i.A,{value:"Failure",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:"{\n  passed: false,\n  status: 'failure',\n  totals: {new: 0, changed: 1, accepted: 1, rejected: 0, all: 2},\n  states: [\n    {name: 'State 1', groupName: 'Test 1', status: 'accepted', url: '...'}\n    {name: 'State 2', groupName: 'Test 1', status: 'changed', url: '...'}\n  ],\n  message: '1 visual regression found. Test failed.'\n}\n"})})})]}),"\n",(0,t.jsxs)(s.h2,{id:"saucevisual-capability-options",children:[(0,t.jsx)(s.code,{children:"sauce:visual"})," Capability Options"]}),"\n",(0,t.jsxs)(s.p,{children:["Below are the available options that you can define with the ",(0,t.jsx)(s.a,{href:"/visual/e2e-testing/workflow/baseline-branch",children:(0,t.jsx)(s.code,{children:"sauce:visual"})})," capability."]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Key"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Type"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Required"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Description"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Default"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"projectName"})}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{children:"Yes"}),(0,t.jsx)("td",{children:"Project name."}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"apiKey"})}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{children:"Yes"}),(0,t.jsx)("td",{children:"API Key for user's Screener account."}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"viewportSize"})}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{children:"No"}),(0,t.jsxs)("td",{children:["A <width>x<height> representation of desired viewport size.\n",(0,t.jsxs)("p",{children:["Example: ",(0,t.jsx)("code",{children:"1024x768"}),"."]})]}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:'"1024x768"'})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"branch"})}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{children:"No"}),(0,t.jsxs)("td",{children:["Branch or environment name.\n",(0,t.jsxs)("p",{children:["Example: ",(0,t.jsx)("code",{children:"main"}),"."]})]}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"baseBranch"})}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{children:"No"}),(0,t.jsxs)("td",{children:["Branch name of project's base branch. Used for ",(0,t.jsx)("a",{href:"/visual/e2e-testing/workflow/baseline-branch",children:"baseline branching and merging"}),".\n",(0,t.jsxs)("p",{children:["Example: ",(0,t.jsx)("code",{children:"main"}),"."]})]}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"diffOptions"})}),(0,t.jsx)("td",{children:"Object"}),(0,t.jsx)("td",{children:"No"}),(0,t.jsxs)("td",{children:["Visual diff options to control validations.\n",(0,t.jsx)("p",{children:"Options available:"}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("code",{children:"structure"}),": enable or disable ",(0,t.jsx)("a",{href:"/visual/e2e-testing/workflow/change-details",children:"structural changes"}),". Defaults to true."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("code",{children:"layout"}),": enable or disable ",(0,t.jsx)("a",{href:"/visual/e2e-testing/workflow/change-details",children:"layout changes"}),". Defaults to true."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("code",{children:"style"}),": enable or disable ",(0,t.jsx)("a",{href:"/visual/e2e-testing/workflow/change-details",children:"style changes"}),". Defaults to true."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("code",{children:"content"}),": enable or disable ",(0,t.jsx)("a",{href:"/visual/e2e-testing/workflow/change-details",children:"content changes"}),". Defaults to true."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("code",{children:"minLayoutPosition"}),": Optional threshold for Layout position changes (in css pixels)."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("code",{children:"minLayoutDimension"}),": Optional threshold for Layout dimension changes (in css pixels)."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("code",{children:"minShiftGraphic"}),": Optional threshold for pixel shifts in graphics (in css pixels)."]})]})]}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:"{\n  structure: true,\n  layout: true,\n  style: true,\n  content: true,\n  minLayoutPosition: 4,\n  minLayoutDimension: 10\n  minShiftGraphic: 2\n}\n"})})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"ignore"})}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{children:"No"}),(0,t.jsxs)("td",{children:["A comma-delimited list of css selectors to ignore when performing visual diffs.\n",(0,t.jsxs)("p",{children:["Example: ",(0,t.jsx)("code",{children:"#some-id, .some-selector"}),"."]})]}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"failOnNewStates"})}),(0,t.jsx)("td",{children:"Boolean"}),(0,t.jsx)("td",{children:"No"}),(0,t.jsxs)("td",{children:["Option to set build to failure when new states are found, and to disable using new states as a baseline.\n",(0,t.jsx)("p",{children:"This option defaults to true, and can be set to false if user wants new states to automatically be the visual baseline without needing to review and accept them."})]}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"true"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"alwaysAcceptBaseBranch"})}),(0,t.jsx)("td",{children:"Boolean"}),(0,t.jsx)("td",{children:"No"}),(0,t.jsx)("td",{children:"Option to automatically accept new and changed states in base branch. Assumes base branch should always be correct."}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"false"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"disableBranchBaseline"})}),(0,t.jsx)("td",{children:"Boolean"}),(0,t.jsx)("td",{children:"No"}),(0,t.jsx)("td",{children:'Option to disable independent baseline for each feature branch, and only use base branch as baseline. Must be used with "baseBranch" option.'}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"false"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"scrollAndStitchScreenshots"})}),(0,t.jsx)("td",{children:"Boolean"}),(0,t.jsx)("td",{children:"No"}),(0,t.jsx)("td",{children:"Option to capture a full-page screenshot using a scrolling and stitching strategy instead of using native browser full-page screenshot capabilities."}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"false"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"disableCORS"})}),(0,t.jsx)("td",{children:"Boolean"}),(0,t.jsx)("td",{children:"No"}),(0,t.jsx)("td",{children:"Option to disable adding CORS headers. By default, CORS headers are set for all cross-origin requests."}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"false"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"iframes"}),(0,t.jsx)("span",{className:"sauceGreen",children:"Beta"})]}),(0,t.jsx)("td",{children:"Boolean"}),(0,t.jsx)("td",{children:"No"}),(0,t.jsx)("td",{children:"Option to enable the capturing and comparing of iframes content. Pseudo states on iframes like hover, focus, focus-within, and active are not supported."}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"false"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"iframesOptions"}),(0,t.jsx)("span",{className:"sauceGreen",children:"Beta"})]}),(0,t.jsx)("td",{children:"Object"}),(0,t.jsx)("td",{children:"No"}),(0,t.jsx)("td",{children:"Options to control the capturing and comparing of iframes content."}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:"{\n  maxFrames: Infinity\n}\n"})})})})]})]})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,s,n)=>{n.d(s,{A:()=>i});n(96540);var t=n(18215);const r={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:s,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:n,children:s})}},11470:(e,s,n)=>{n.d(s,{A:()=>S});var t=n(96540),r=n(18215),a=n(23104),i=n(56347),l=n(205),c=n(57485),d=n(31682),o=n(89466);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:s,children:n}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:n,attributes:t,default:r}}=e;return{value:s,label:n,attributes:t,default:r}}))}(n);return function(e){const s=(0,d.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function x(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function j(e){let{queryString:s=!1,groupId:n}=e;const r=(0,i.W6)(),a=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,c.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const s=new URLSearchParams(r.location.search);s.set(a,e),r.replace({...r.location,search:s.toString()})}),[a,r])]}function p(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,a=u(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!x({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:a}))),[d,h]=j({queryString:n,groupId:r}),[p,m]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,a]=(0,o.Dv)(n);return[r,(0,t.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),g=(()=>{const e=d??p;return x({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{g&&c(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),m(e)}),[h,m,a]),tabValues:a}}var m=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function b(e){let{className:s,block:n,selectedValue:t,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),o=e=>{const s=e.currentTarget,n=c.indexOf(s),r=l[n].value;r!==t&&(d(s),i(r))},h=e=>{let s=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;s=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;s=c[n]??c[c.length-1];break}}s?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},s),children:l.map((e=>{let{value:s,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>c.push(e),onKeyDown:h,onClick:o,...a,className:(0,r.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":t===s}),children:n??s},s)}))})}function f(e){let{lazy:s,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function y(e){const s=p(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(b,{...e,...s}),(0,v.jsx)(f,{...e,...s})]})}function S(e){const s=(0,m.A)();return(0,v.jsx)(y,{...e,children:h(e.children)},String(s))}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var t=n(96540);const r={},a=t.createContext(r);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);