"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[74242],{47454:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(74848),a=s(28453),i=(s(11470),s(19365),s(86025));const r={id:"other-components",title:"Other Test Components",sidebar_label:"Other Components",description:"Learn to write Sauce Labs API Testing components."},l=void 0,o={id:"api-testing/composer/other-components",title:"Other Test Components",description:"Learn to write Sauce Labs API Testing components.",source:"@site/docs/api-testing/composer/other-components.md",sourceDirName:"api-testing/composer",slug:"/api-testing/composer/other-components",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/composer/other-components",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/composer/other-components.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724771321e3,frontMatter:{id:"other-components",title:"Other Test Components",sidebar_label:"Other Components",description:"Learn to write Sauce Labs API Testing components."},sidebar:"docs",previous:{title:"Logical Components",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/composer/logical-components"},next:{title:"Using Expressions",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/composer/expressions"}},c={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Tag",id:"tag",level:2},{value:"Examples",id:"examples",level:4},{value:"Set (Variable)",id:"set-variable",level:2},{value:"Lang: Javascript",id:"lang-javascript",level:4},{value:"Lang: Template",id:"lang-template",level:4},{value:"Parse",id:"parse",level:2},{value:"Examples",id:"examples-1",level:4},{value:"Comment",id:"comment",level:2},{value:"Examples",id:"examples-2",level:4},{value:"Flow",id:"flow",level:2},{value:"Examples",id:"examples-3",level:4},{value:"Fact",id:"fact",level:2},{value:"Call Snippet",id:"call-snippet",level:2},{value:"Paste Snippet",id:"paste-snippet",level:2},{value:"K/V Store",id:"kv-store",level:2},{value:"Methods",id:"methods",level:3},{value:"More Information",id:"more-information",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Here are some other components that you can add to a test using the Composer. This guide describes each component and shows you how to add them to tests. To learn how to access the components and create a test using the Composer see ",(0,t.jsx)(n.a,{href:"/api-testing/composer/",children:"Writing API Tests with the Composer"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,i.A)("img/api-testing/otherComponents.png"),alt:"Other Components"}),"\n",(0,t.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A Sauce Labs account (",(0,t.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,t.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["Familiarity with the ",(0,t.jsx)(n.a,{href:"/api-testing/composer/",children:"API Testing Composer"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"tag",children:"Tag"}),"\n",(0,t.jsx)(n.p,{children:"The Tag component within the Composer enables you to dynamically tag the resulting document of a test execution. You can add different tags based on dynamic events happening during the test execution, such as a certain value retrieved in the payload. You can assign multiple tags to each test by adding more 'tag' components to it."}),"\n",(0,t.jsxs)(n.p,{children:["This is different from the tags applied when you first ",(0,t.jsx)(n.a,{href:"/api-testing/composer/#create-a-composer-test",children:"create the test"}),". That feature enables you to search for that tag(s) filter in your Project ",(0,t.jsx)(n.strong,{children:"Tests"})," tab or ",(0,t.jsx)(n.a,{href:"/api-testing/project-dashboard",children:(0,t.jsx)(n.strong,{children:"Dashboard"})})," tab."]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:"Parameters"})}),(0,t.jsx)("table",{id:"table-api",children:(0,t.jsxs)("tbody",{children:[(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:"2",children:"Fields"})}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Tag"})}),(0,t.jsx)("td",{children:(0,t.jsx)("p",{children:(0,t.jsx)("small",{children:"| REQUIRED | STRING |"})})})]})]})}),(0,t.jsx)(n.h4,{id:"examples",children:"Examples"}),"Here's an example of how you could use a tag in the Composer tab.",(0,t.jsx)("img",{src:(0,i.A)("img/api-testing/tagComposer.png"),alt:"tagComposer.jpg"}),"You can also add tags to the test details screen when you create or edit a test.",(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:(0,i.A)("img/api-testing/tagNewtest.png"),alt:"Tag Component - create new test"}),"Static tags will be displayed in your ",(0,t.jsx)(n.strong,{children:"Tests"})," list.",(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:(0,i.A)("img/api-testing/testsTag.webp"),alt:"Tests tag.jpg"}),"All tags, dynamic and static will mark the test execution documents. On your project ",(0,t.jsx)(n.strong,{children:"Dashboard"}),", you can filter events by tags.",(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:(0,i.A)("img/api-testing/projDashTag.webp"),alt:"project dashboard tag"})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:"Code View Example"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: tag\n  value: Production\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"set-variable",children:"Set (Variable)"}),"\n",(0,t.jsxs)(n.p,{children:["In Sauce Labs API Testing you can create variables in several different ways by using ",(0,t.jsx)(n.code,{children:"SET (variable)"}),". This component has different modes that allow you to create variables in different ways, such as ",(0,t.jsx)(n.code,{children:"String"}),", ",(0,t.jsx)(n.code,{children:"Data"}),", and ",(0,t.jsx)(n.code,{children:"Language"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,i.A)("img/api-testing/set-var-component.png"),alt:"Set var component"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:"Parameters"})}),(0,t.jsx)("table",{id:"table-api",children:(0,t.jsxs)("tbody",{children:[(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:"2",children:"Fields"})}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Variable"})}),(0,t.jsx)("td",{children:(0,t.jsx)("p",{children:(0,t.jsx)("small",{children:"| REQUIRED | STRING |"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Mode"})}),(0,t.jsx)("td",{children:(0,t.jsx)("p",{children:(0,t.jsx)("small",{children:"| REQUIRED | STRING, DATA, or LANGUAGE |"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Value (depends on \u2018Mode = String\u2019)"})}),(0,t.jsx)("td",{children:(0,t.jsx)("p",{children:(0,t.jsx)("small",{children:"| REQUIRED | DATA |"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Data (depends on \u2018Mode = Data\u2019)"})}),(0,t.jsx)("td",{children:(0,t.jsx)("p",{children:(0,t.jsx)("small",{children:"| REQUIRED | DATA |"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Lang (depends on \u2018Mode = Language\u2019)"})}),(0,t.jsx)("td",{children:(0,t.jsx)("p",{children:(0,t.jsx)("small",{children:"| REQUIRED | JAVASCRIPT or TEMPLATE |"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Body (depends on \u2018Mode = Language\u2019)"})}),(0,t.jsx)("td",{children:(0,t.jsx)("p",{children:(0,t.jsx)("small",{children:"| REQUIRED | DATA |"})})})]})]})}),(0,t.jsx)(n.strong,{children:"Mode: String"}),"This mode generates a String variable, which can be a static value or a variable taken from the response payload. If it is a static value you just have to write it and the engine will take it as is. If it is a variable the engine will evaluate the variable value every time the test will be executed. Check out ",(0,t.jsx)(n.a,{href:"/api-testing/use-cases/set-variable/#mode-string",children:"the example"})," to learn more about this mode.",(0,t.jsx)(n.strong,{children:"Mode: Data"}),"Using this mode, the variable will be evaluated (like the Expression field), therefore the variable type can be everything. The variable type will depend on the object being evaluated. In the Data field, you need to enter a single line expression that returns a value. To learn more about this mode, check out ",(0,t.jsx)(n.a,{href:"/api-testing/use-cases/set-variable/#mode-data",children:"the example"}),".",(0,t.jsx)(n.strong,{children:"Mode: Language"}),"This is the most advanced way to create your variables. There are two different options available: ",(0,t.jsx)(n.code,{children:"Javascript"})," and ",(0,t.jsx)(n.code,{children:"Template"}),".",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"lang-javascript",children:"Lang: Javascript"}),"\n",(0,t.jsxs)(n.p,{children:["In this mode you can create your variable by writing a JavaScript script in the ",(0,t.jsx)(n.code,{children:"Body"})," field. It can be a complete script with variable declarations or loops."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"lang-template",children:"Lang: Template"}),"\n",(0,t.jsx)(n.p,{children:"In this mode you can create your own template in the same way as it is done for Request Body, the advantage here is that you can print the variable to check if all is correct (Body cannot be printed)."}),"\n"]}),"\n"]}),"You can learn more about this mode by checking out ",(0,t.jsx)(n.a,{href:"/api-testing/use-cases/set-variable/#mode-language",children:"the example"}),"."]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:"Code View Examples"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: set\n  var: product\n  mode: string\n  value: t-shirt\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: set\n  var: product\n  mode: string\n  value: ${payload.name}\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'- id: set\n  var: product\n  mode: object\n  object: \'["Bluetooth Headphones","Long Sleeve Shirt","Baseball Cap"]\'\n'})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: set\n  var: product\n  mode: object\n  object: payload.filter(it=>it.name=='Bluetooth Headphones')\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: set\n  var: jsonData\n  mode: lang\n  lang: javascript\n  body: |-\n    var pieces = token.split('.')\n    var b64payload = pieces[1]\n    var decoded = Buffer.from(b64payload,'base64').toString()\n    var json = JSON.parse(decoded)\n    return json\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'- id: set\n  var: new_product\n  mode: lang\n  lang: template\n  body: >-\n    {\n        "id": 4,\n        "name": "T-Shirt",\n        "price": ${price},\n        "category": "1",\n        "description": "This is product ${id}!",\n        "quantity": 5,\n        "imageURL": "http://image.com",\n        "color": ["red", "green"],\n        "createdAt": "${D.format (D.nowMillis(), \'yyyy-MM-DD\')}",\n        "updatedAt": "${D.format (D.nowMillis(), \'yyyy-MM-DD\')}T${D.format(D.nowMillis(), \'HH:mm:ssz\')}"\n      }\n'})})]}),"\n",(0,t.jsx)(n.h2,{id:"parse",children:"Parse"}),"\n",(0,t.jsx)(n.p,{children:"This component allows you to parse a string into structured data, using one of the available parsers."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:"Parameters"})}),(0,t.jsx)("table",{id:"table-api",children:(0,t.jsxs)("tbody",{children:[(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:"2",children:"Fields"})}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Variable"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:(0,t.jsx)("small",{children:"| REQUIRED | STRING |"})}),(0,t.jsx)("p",{children:"The name of the variable you want to parse."})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Adapter"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:(0,t.jsx)("small",{children:"| REQUIRED | json, xml, etc. |"})}),(0,t.jsx)("p",{children:"The parser to use"})]})]})]})}),(0,t.jsx)("img",{src:(0,i.A)("img/api-testing/parseComponentUI.png"),alt:"Parse component UI"}),(0,t.jsx)(n.h4,{id:"examples-1",children:"Examples"}),"Set a variable (which will be a plain string) as a list of colors.",(0,t.jsx)("img",{src:(0,i.A)("img/api-testing/parseComponentUI_variable.png"),alt:"Parse component variable"}),"Next, use the ",(0,t.jsx)(n.strong,{children:"Comment"})," component to see what happens if you print \u201ccolors[1]\u201d before and after parsing it into JSON.",(0,t.jsx)("img",{src:(0,i.A)("img/api-testing/parseComponentUI_test.png"),alt:"Parse component test"}),"Here are the results of the above test:",(0,t.jsx)("img",{src:(0,i.A)("img/api-testing/parseComponentUI_results.png"),alt:"Parse component test"}),"Before parsing the string, the test will consider the variable ",(0,t.jsx)(n.code,{children:"colors"})," as one big string so ",(0,t.jsx)(n.code,{children:"colors[1]"})," will print ",(0,t.jsx)(n.code,{children:"\u201c"})," as that is the second character in the string. After parsing the string into JSON the system can traverse through the variable as a JSON, so ",(0,t.jsx)(n.code,{children:"colors[1]"})," will print the second element in the JSON array: ",(0,t.jsx)(n.code,{children:"blue"}),"."]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:"Code View Examples"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: parse\n  var: varName\n  adapter: json\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: parse\n  var: fileName\n  adapter: csv\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"comment",children:"Comment"}),"\n",(0,t.jsx)(n.p,{children:"This assertion allows you to print out (in test reports) information. It can have two sorts of values, as described below."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:"Parameters"})}),"There are no parameters -- text only.",(0,t.jsx)(n.h4,{id:"examples-2",children:"Examples"}),"The first is a normal string value. An example of that would be to explain what a specific WHEN loop is being used for. Similar to when you write comments in code.",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"This is a comment\n"})}),"The second is useful for test debugging and analysis. You can pass variables into the comments. An example use of this would be to print out the product ID being used in the current loop of a test.",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"The value of the ID is ${payload.id}\n"})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:"Code View Example"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: comment\n  text: This is a comment\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: comment\n  text: The value of the ID is ${payload.id}\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"flow",children:"Flow"}),"\n",(0,t.jsx)(n.p,{children:"This component allows you to pause or stop a test entirely."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:"Parameters"})}),(0,t.jsx)("table",{id:"table-api",children:(0,t.jsxs)("tbody",{children:[(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:"2",children:"Fields"})}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Command"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:(0,t.jsx)("small",{children:"| REQUIRED | 'stop', 'wait' |"})}),(0,t.jsx)("p",{children:"This parameter defines the action you want to take. 'Stop' will stop the test. 'Wait' will pause the test for a number of milliseconds defined in the 'Value' parameter."})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Value"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:(0,t.jsx)("small",{children:"| REQUIRED | INTEGER |"})}),(0,t.jsx)("p",{children:"Depends on 'Command = wait'. The number of milliseconds you want to pause the test for."})]})]})]})}),(0,t.jsx)(n.h4,{id:"examples-3",children:"Examples"}),"This component is especially useful when combined with the ",(0,t.jsxs)(n.a,{href:"#if",children:[(0,t.jsx)(n.code,{children:"If"})," component"]}),". See the examples below:",(0,t.jsx)("img",{src:(0,i.A)("img/api-testing/flow_stop.png"),alt:"flow_stop.png"}),"If the statusCode is not ",(0,t.jsx)(n.code,{children:"200"}),", the test will be halted; none of the\xa0remaining assertions will be checked.",(0,t.jsx)("img",{src:(0,i.A)("img/api-testing/flow_wait.png"),alt:"flow_wait.png"}),"In this example, the test will wait 1000 milliseconds before performing the ",(0,t.jsx)(n.code,{children:"GET"})," request."]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:"Code View Examples"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: flow\n  command: stop\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: flow\n  command: wait\n  value: 1000\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"fact",children:"Fact"}),"\n",(0,t.jsxs)(n.p,{children:["The Fact component enables you to add information (facts) about the nature of the test execution, along with static or dynamic data. It's used to control the behavior of ",(0,t.jsx)(n.a,{href:"/api-testing/project-access/#email-notifications",children:"Email notifications"}),", which (if enabled) alert you to test failures."]}),"\n",(0,t.jsx)(n.p,{children:"Test activity is tracked using test ID number. This may not work if you're testing in multiple environments (i.e., production, staging, QA), as an incident could be environment-specific. When a Fact component is added to a test, it will inform our system which environment the execution relates to so that the incident signature will carry the environment as well."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:"Parameters"})}),(0,t.jsx)("table",{id:"table-api",children:(0,t.jsxs)("tbody",{children:[(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:"2",children:"Fields"})}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Identifier"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:(0,t.jsx)("small",{children:"| REQUIRED | STRING |"})}),(0,t.jsx)("p",{children:"Should be unique within the test."})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Label"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:(0,t.jsx)("small",{children:"| REQUIRED |"})}),(0,t.jsx)("p",{children:"To provide an understanding of the Fact."})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Value"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:(0,t.jsx)("small",{children:"| REQUIRED | STRING |"})}),(0,t.jsxs)("p",{children:["String value that supports the template language (i.e., ",(0,t.jsx)("code",{children:"${...}"}),"). "]})]})]})]})}),(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"The Fact component should be set as high up in the test as possible. If the test fails before it reaches the Fact, then it will not be set."})}),(0,t.jsx)("br",{}),"Learn how to ",(0,t.jsx)(n.a,{href:"/api-testing/use-cases/fact/#setting-alert-environments",children:"improve the email notifications"}),", ",(0,t.jsx)(n.a,{href:"/api-testing/use-cases/fact/#disabling-email-notifications",children:"disable the notifications"})," and ",(0,t.jsx)(n.a,{href:"/api-testing/use-cases/fact/#setting-email-notification-thresholds",children:"set the thresholds"})," by checking the examples."]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:"Code View Examples"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: fact\n  identifier: environment\n  label: environment\n  value: ${env}\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"call-snippet",children:"Call Snippet"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Looking to create or update a snippet? See ",(0,t.jsx)(n.a,{href:"/api-testing/vault/#snippets",children:"Snippets"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"Creates a Call component that will invoke the snippet. If the snippet changes, all the tests containing the Call component to that snippet will inherit the changes."}),"\n",(0,t.jsx)(n.h2,{id:"paste-snippet",children:"Paste Snippet"}),"\n",(0,t.jsx)(n.p,{children:"This allows you to paste the entire snippet inside the test, which you can then edit as needed. The pasted components will lose any reference to the original snippet."}),"\n",(0,t.jsx)(n.h2,{id:"kv-store",children:"K/V Store"}),"\n",(0,t.jsx)(n.p,{children:"The Key/Value store allows you to create temporary key/value pairs that can be accessed across different tests. The Key/Value store is accessed via the Key/Value Store Component."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"These Key/Value pairs are temporary. They expire after 24 hours has elapsed since the last update to the value itself."})}),"\n",(0,t.jsx)(n.h3,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.p,{children:"The Key/Value Store component has four methods available for use:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/api-testing/use-cases/key-value/#basic-workflow-set-and-load-methods",children:(0,t.jsx)(n.strong,{children:"Set"})}),": creates a new key/value pair in the Key/Value store. The value is entered in the ",(0,t.jsx)(n.strong,{children:"Data"})," field.",(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:(0,i.A)("img/api-testing/KeyValueSet.png"),alt:"KeyValueSet.png"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/api-testing/use-cases/key-value/#basic-workflow-set-and-load-methods",children:(0,t.jsx)(n.strong,{children:"Load"})}),": recalls a value from the Key/Value store when provided with a key.",(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:(0,i.A)("img/api-testing/KeyValueLoad.png"),alt:"KeyValueLoad.png"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/api-testing/use-cases/key-value/#pushpop-workflow",children:(0,t.jsx)(n.strong,{children:"Push"})}),": adds a value to the end of an existent value ",(0,t.jsx)(n.strong,{children:'of the datatype "Array"'})," in the Key/Value store. If no such key exists, it will create a new array containing the passed in value.\xa0 The passed in value is entered in the ",(0,t.jsx)(n.strong,{children:"Data"})," field.",(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:(0,i.A)("img/api-testing/KeyValuePush.png"),alt:"KeyValuePush.png"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/api-testing/use-cases/key-value/#pushpop-workflow",children:(0,t.jsx)(n.strong,{children:"Pop"})}),": removes a value from the end of an existent value ",(0,t.jsx)(n.strong,{children:'of the datatype "Array"'})," in the Key/Value store.",(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:(0,i.A)("/img/api-testing/KeyValuePop.png"),alt:"KeyValuePop.png"})]}),"\n"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:"Code View Examples"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: kv\n  key:\n  action: load\n  var:\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: kv\n  key: prods\n  action: load\n  var: kvprods\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: kv\n  key:\n  action: pop\n  var:\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: kv\n  key:\n  action: set\n  object:\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: kv\n  key: adasd\n  action: set\n  object: products[0].name\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: kv\n  key: prods\n  action: set\n  object: '[products[0].color]'\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- id: kv\n  key:\n  action: push\n  object:\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-testing/use-cases/set-variable/",children:"Setting up Variables"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-testing/use-cases/fact/",children:"Improving Email Notifications"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-testing/vault/",children:"Variables, Snippets and Files"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-testing/use-cases/key-value/",children:"Basic workflow using Key/Value Store"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-testing/use-cases/saving-token-kv/",children:"Saving a Token in a Key/Value Store"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>r});s(96540);var t=s(18215);const a={tabItem:"tabItem_Ymn6"};var i=s(74848);function r(e){let{children:n,hidden:s,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,r),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>w});var t=s(96540),a=s(18215),i=s(23104),r=s(56347),l=s(205),o=s(57485),c=s(31682),d=s(89466);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:a}}=e;return{value:n,label:s,attributes:t,default:a}}))}(s);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function u(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const a=(0,r.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:a}=e,i=p(e),[r,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,h]=m({queryString:s,groupId:a}),[x,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,d.Dv)(s);return[a,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:a}),g=(()=>{const e=c??x;return u({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),j(e)}),[h,j,i]),tabValues:i}}var j=s(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function v(e){let{className:n,block:s,selectedValue:t,selectValue:r,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,s=o.indexOf(n),a=l[s].value;a!==t&&(c(n),r(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...i,className:(0,a.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:a}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(b,{...e,...n})]})}function w(e){const n=(0,j.A)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var t=s(96540);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);