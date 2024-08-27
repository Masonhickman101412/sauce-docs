"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[97478],{346:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var i=s(74848),a=s(28453);s(86025);const t={id:"mocking",title:"API Mocking with Piestry",sidebar_label:"API Mocking Server"},r=void 0,o={id:"api-testing/mocking",title:"API Mocking with Piestry",description:"Sauce Labs Piestry is our API mocking server tool that mimics a real API server's calls and responses, based on the OpenAPI spec file data you provide. Get a jumpstart on testing and debugging your APIs while they're still in development by re-creating them in our mocking platform and writing tests against them.",source:"@site/docs/api-testing/mocking.md",sourceDirName:"api-testing",slug:"/api-testing/mocking",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/mocking",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/mocking.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724771321e3,frontMatter:{id:"mocking",title:"API Mocking with Piestry",sidebar_label:"API Mocking Server"},sidebar:"docs",previous:{title:"Test Results and Insights",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/project-dashboard"},next:{title:"API Load Testing",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/load-testing"}},l={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Usage",id:"usage",level:2},{value:"OpenAPI Spec Files",id:"openapi-spec-files",level:3},{value:"Generating a Mock",id:"generating-a-mock",level:2},{value:"Enhancing OpenAPI with x-sauce-cond",id:"enhancing-openapi-with-x-sauce-cond",level:3},{value:"Enhancing Schemas with x-sauce-faker",id:"enhancing-schemas-with-x-sauce-faker",level:3},{value:"Mocking Mode",id:"mocking-mode",level:2},{value:"Contract Validators",id:"contract-validators",level:3},{value:"Validate Examples",id:"validate-examples",level:3},{value:"Validate Request",id:"validate-request",level:3},{value:"Dynamic Examples",id:"dynamic-examples",level:3},{value:"E2E Mode",id:"e2e-mode",level:2},{value:"Contract Validators",id:"contract-validators-1",level:3},{value:"Validate Request",id:"validate-request-1",level:3},{value:"Validate Response",id:"validate-response",level:3},{value:"Capture Mode",id:"capture-mode",level:3},{value:"More Information",id:"more-information",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Sauce Labs ",(0,i.jsx)(n.a,{href:"/dev/glossary/#piestry",children:(0,i.jsx)(n.em,{children:"Piestry"})})," is our API mocking server tool that mimics a real API server's calls and responses, based on the OpenAPI spec file data you provide. Get a jumpstart on testing and debugging your APIs while they're still in development by re-creating them in our mocking platform and writing tests against them."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Benefits"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get dynamic responses that you can use to perform proper positive testing, negative testing, and edge case testing."}),"\n",(0,i.jsx)(n.li,{children:"Eliminates the need to add third-party API dependencies, which can be expensive and restrictive."}),"\n",(0,i.jsx)(n.li,{children:"Eliminates the need to depend on potentially unreliable staging environments."}),"\n",(0,i.jsx)(n.li,{children:"Allows you to create stubbed APIs to use to in your testing flow."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Common Use Cases"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Simulating a payment transaction in a banking mobile app."}),"\n",(0,i.jsx)(n.li,{children:"Isolating a microservice from the rest of the API actions so that everything else is stable and you can drill down to find the error."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A Sauce Labs account (",(0,i.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,i.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,i.jsx)(n.li,{children:"An OpenAPI spec file."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"Piestry must be started from a Docker container in your CI/CD pipeline using the following code snippet:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'docker run --pull always -v "$(pwd)/specs:/specs" -p 5000:5000 quay.io/saucelabs/piestry -u /specs/myspec.yaml\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"quay.io/saucelabs/piestry"})," is our Docker image and ",(0,i.jsx)(n.code,{children:"/specs/myspec.yaml"})," needs to be the URI to your YAML spec file (can be local or remote)."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In the above command, ",(0,i.jsx)(n.code,{children:"-p 5000:5000"})," is used to map the port on your machine and the port for Piestry. If you are using macOS Monterey, the command will not work because port 5000 is already used by the Airplay Receiver service by default. In this case, you have to remap the port for your local machine. To do so, enter a different port in the left part of the command. For example: ",(0,i.jsx)(n.code,{children:"-p 8000:5000"}),", where port 8000 can be replaced with any other port. This scenario is valid every time your port is already used by any other service."]})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Some container runtimes will maintain port bindings even when containers exit, making it impossible for a new instance of the same container to run again on the same port unless the dead container is removed. To avoid this issue you can use the flag ",(0,i.jsx)(n.code,{children:"--rm"})," like in this example: ",(0,i.jsx)(n.code,{children:'docker run -v "$(pwd)/specs:/specs" -p 5000:5000 --rm quay.io/saucelabs/piestry -u /specs/myspec.yaml'}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"openapi-spec-files",children:"OpenAPI Spec Files"}),"\n",(0,i.jsx)(n.p,{children:"If you provide a standard OpenAPI spec file, our system should bind a series of endpoints to simulate what's in the spec:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When only a response schema is present, the system will generate random data for each field."}),"\n",(0,i.jsx)(n.li,{children:"When one response example is present, the system will present the example."}),"\n",(0,i.jsx)(n.li,{children:"When multiple response examples are present, the system will present the first example."}),"\n",(0,i.jsx)(n.li,{children:'When multiple content types are available, the system will pick the one closer to the "Accept" header, any JSON response if a match is not found.'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"generating-a-mock",children:"Generating a Mock"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["On your local machine, place your spec file (or set of files in a folder) in a location of your choice. For this example, we'll call it ",(0,i.jsx)(n.code,{children:"myspec.yaml"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Open your CLI terminal and navigate to right outside\xa0that folder, then run this command:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'docker run --pull always -v "$(pwd)/myspec:/specs" -p 5000:5000 quay.io/saucelabs/piestry -u /specs/myspec.yaml\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$(pwd)/myspec"}),"\xa0means the ",(0,i.jsx)(n.code,{children:"{current_directory}/myspec"})," that gets mounted to the container in the\xa0",(0,i.jsx)(n.code,{children:"/specs"}),"\xa0folder. Therefore, the -u (relative to the container is)\xa0",(0,i.jsx)(n.code,{children:"/specs/myspec.yaml"}),". 3. If successful, you should see the listing of the available routes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"2021-10-05T07:32:35.157Z info: Piestry booting on port: 5000\n2021-10-05T07:32:35.189Z info: Registering GET /api/v1/release-notes\n2021-10-05T07:32:35.191Z info: Registering GET /api/v1/user\n2021-10-05T07:32:35.191Z info: Registering GET /api/v1/user/:id\n2021-10-05T07:32:35.192Z info: Registering GET /api/v1/echo\n2021-10-05T07:32:35.192Z info: Registering POST /api/v1/echo\n2021-10-05T07:32:35.192Z info: Registering POST /api/v1/post-check\n2021-10-05T07:32:35.193Z info: Registering POST /api/v1/check-in\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["At this point, you can use any HTTP client to query one of these endpoints. For example, ",(0,i.jsx)(n.code,{children:"curl localhost:5000/api/v1/release-notes"})," would should return a mock for release notes. Additionally, you can add the option to connect our ",(0,i.jsx)(n.a,{href:"/api-testing/logger/",children:"Logger"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"enhancing-openapi-with-x-sauce-cond",children:"Enhancing OpenAPI with x-sauce-cond"}),"\n",(0,i.jsxs)(n.p,{children:["You can enrich OpenAPI schemas using the ",(0,i.jsx)(n.code,{children:"x-sauce"})," vendor extension. This extension will have no impact on the docs."]}),"\n",(0,i.jsxs)(n.p,{children:["There currently are five types of ",(0,i.jsx)(n.code,{children:"x-sauce-cond"})," operations: three evaluators (",(0,i.jsx)(n.code,{children:"exists"}),", ",(0,i.jsx)(n.code,{children:"equals"}),", and ",(0,i.jsx)(n.code,{children:"matches"}),") and two logical operators (",(0,i.jsx)(n.code,{children:"or"})," and ",(0,i.jsx)(n.code,{children:"and"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["There also are four collections you can evaluate: ",(0,i.jsx)(n.code,{children:"uriParams"}),", ",(0,i.jsx)(n.code,{children:"queryParams"}),", ",(0,i.jsx)(n.code,{children:"headers"}),", and ",(0,i.jsx)(n.code,{children:"body"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In the below example, the ",(0,i.jsx)(n.code,{children:"x-sauce-cond"})," extension tells the mock to take the ",(0,i.jsx)(n.code,{children:"200"})," status code as response only when an ",(0,i.jsx)(n.code,{children:"authorization"})," header is present and its value matches the ",(0,i.jsx)(n.code,{children:"Basic .*"})," regex. The ",(0,i.jsx)(n.code,{children:"priority"})," field determines the order of evaluation of multiple objects at the same level. For example, if both ",(0,i.jsx)(n.code,{children:"200"})," and ",(0,i.jsx)(n.code,{children:"404"})," have an ",(0,i.jsx)(n.code,{children:"x-sauce-cond"})," instruction, they will be evaluated by descending priority."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"responses:\n  '200':\n    x-sauce-cond:\n      op: matches\n      collection: headers\n      key: authorization\n      value: Basic .*\n      priority: 10\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Items with no ",(0,i.jsx)(n.code,{children:"x-sauce-cond"})," will be picked up last and treated as fallback."]}),"\n",(0,i.jsx)(n.p,{children:"On the examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"content:\n  'application/json':\n    schema:\n      $ref: '#/components/schemas/user'\n    examples:\n      sample_user_1:\n        x-sauce-cond:\n          op: equals\n          collection: uriParams\n          key: id\n          value: abc\n          priority: 10\n        externalValue: myspec_examples/sample_user_1.json\n      sample_user_2:\n        x-sauce-cond:\n          op: equals\n          collection: uriParams\n          key: id\n          value: def\n          priority: 20\n        externalValue: myspec_examples/sample_user_2.json\n      sample_user_3:\n        x-sauce-cond:\n          op: equals\n          collection: uriParams\n          key: id\n          value: ghi\n          priority: 30\n        externalValue: myspec_examples/sample_user_3.json\n"})}),"\n",(0,i.jsx)(n.p,{children:"Pick one specific example based on the value of a URI param."}),"\n",(0,i.jsxs)(n.p,{children:["If you have to add multiple conditions you can use ",(0,i.jsx)(n.code,{children:"and"})," and ",(0,i.jsx)(n.code,{children:"or"})," conditions. You can have the depth and nesting you want."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"x-sauce-cond:\n  op: and\n  priority: 10\n  conditions:\n  - op: matches\n    collection: headers\n    key: authorization\n    value: Basic .*\n  - op: equals\n    collection: headers\n    key: key\n    value: ABC123\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Mind that ",(0,i.jsx)(n.code,{children:"priority"})," should be at the top level instruction."]}),"\n",(0,i.jsx)(n.h3,{id:"enhancing-schemas-with-x-sauce-faker",children:"Enhancing Schemas with x-sauce-faker"}),"\n",(0,i.jsxs)(n.p,{children:["If you don't want to add examples because they're not useful to you, that's ok. You can still force the system to generate data that makes specific sense to you, using the Faker extension, ",(0,i.jsx)(n.code,{children:"x-sauce-faker"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"releaseNotes:\n  type: object\n  required:\n   - text\n   - contact\n  properties:\n   text:\n    type: string\n   contact:\n    type: string\n    x-sauce-faker: internet.email\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Learn more about the ",(0,i.jsx)(n.a,{href:"https://fakerjs.dev/guide/",children:"Faker library"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"mocking-mode",children:"Mocking Mode"}),"\n",(0,i.jsx)(n.h3,{id:"contract-validators",children:"Contract Validators"}),"\n",(0,i.jsx)(n.p,{children:"There are two types of validations, focusing on different areas, that you can activate."}),"\n",(0,i.jsx)(n.h3,{id:"validate-examples",children:"Validate Examples"}),"\n",(0,i.jsx)(n.p,{children:"Examples may go out of sync when the schema gets updated, but the example does not."}),"\n",(0,i.jsxs)(n.p,{children:["Run Piestry with ",(0,i.jsx)(n.code,{children:"--validate-examples"})," to activate the validation of examples. Once activated, whenever a request is performed, the response example (if available) is validated against the response schema (if available). If the example does not match the request, then an error is returned - for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n   "errors":[\n      {\n         "argument":[\n            "boolean"\n         ],\n         "instance":"false",\n         "message":"is not of a type(s) boolean",\n         "name":"type",\n         "path":[\n            "is_admin"\n         ],\n         "property":"instance.is_admin",\n         "schema":{\n            "type":"boolean"\n         },\n         "stack":"instance.is_admin is not of a type(s) boolean"\n      }\n   ],\n   "message":"The example does not match the schema"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The response will also contain the ",(0,i.jsx)(n.code,{children:"x-sauce-error: true"})," header, signifying that the response is not mocked, but it's an internal error."]}),"\n",(0,i.jsx)(n.h3,{id:"validate-request",children:"Validate Request"}),"\n",(0,i.jsx)(n.p,{children:"If you want to ensure your requests are compliant with the schema, Piestry can help you."}),"\n",(0,i.jsxs)(n.p,{children:["Run it with the ",(0,i.jsx)(n.code,{children:"--validate-request"})," switch to activate the validation of inbound requests. Whenever a request is performed, it will be validated against the schema, and if a mismatch is present, an error like the following will be returned:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n   "collection":"queryParams",\n   "errors":[\n      {\n         "argument":[\n            "integer"\n         ],\n         "instance":"aa",\n         "message":"is not of a type(s) integer",\n         "name":"type",\n         "path":[\n\n         ],\n         "property":"instance",\n         "schema":{\n            "type":"integer"\n         },\n         "stack":"instance is not of a type(s) integer"\n      }\n   ],\n   "message":"Wrong field types"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The response will also contain the ",(0,i.jsx)(n.code,{children:"x-sauce-error: true"})," header, signifying that the response is not mocked, but it's an internal error."]}),"\n",(0,i.jsx)(n.h3,{id:"dynamic-examples",children:"Dynamic Examples"}),"\n",(0,i.jsx)(n.p,{children:"The system allows for examples containing dynamic data using the Handlebars markup. Remember that if you use dynamic examples in your OpenAPI specs, your spec will reduce its usability for documentation purposes as documentation renderers don't support it."}),"\n",(0,i.jsxs)(n.p,{children:["To have dynamic parameters, place an expression between double curly brackets, i.e., ",(0,i.jsx)(n.code,{children:"{{requestUrl}}"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The available objects in the scope are the same as the ones used by ",(0,i.jsx)(n.code,{children:"x-sauce-cond"}),", so: ",(0,i.jsx)(n.code,{children:"uriParams"}),", ",(0,i.jsx)(n.code,{children:"queryParams"}),", ",(0,i.jsx)(n.code,{children:"headers"}),", ",(0,i.jsx)(n.code,{children:"body"}),". As an example, the following template will echo the shape of the request back in the response:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n "url":"{{requestUrl}}",\n "requestHeaders": {{json headers}},\n "requestBody": {{json body}},\n "ipAddress": "{{ipAddress}}"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Using the ",(0,i.jsx)(n.code,{children:"json"})," keyword will convert a full data structure into its JSON equivalent."]}),"\n",(0,i.jsx)(n.h2,{id:"e2e-mode",children:"E2E Mode"}),"\n",(0,i.jsxs)(n.p,{children:["When Piestry is run with ",(0,i.jsx)(n.code,{children:"--e2e"}),', it will turn into a reverse proxy gateway and forward the requests based to the origin, according to the OpenAPI specification. The requirement is the "server" definition of the OpenAPI spec should lead to an actual location.']}),"\n",(0,i.jsx)(n.p,{children:"In E2E mode, you can enable contract validators as well as capture mode."}),"\n",(0,i.jsx)(n.h3,{id:"contract-validators-1",children:"Contract Validators"}),"\n",(0,i.jsx)(n.p,{children:"There are two types of validations you can activate, focusing on different areas."}),"\n",(0,i.jsx)(n.h3,{id:"validate-request-1",children:"Validate Request"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to make sure your requests are compliant with the origin, run it with the ",(0,i.jsx)(n.code,{children:"--validate-request"})," switch to activate the validation of inbound requests."]}),"\n",(0,i.jsx)(n.h3,{id:"validate-response",children:"Validate Response"}),"\n",(0,i.jsxs)(n.p,{children:["This is similar to ",(0,i.jsxs)(n.a,{href:"#validate-examples",children:[(0,i.jsx)(n.strong,{children:"Validate Examples"})," (mocking mode)"]}),"; the difference is that it will validate the actual responses in an end-to-end session. Use the switch ",(0,i.jsx)(n.code,{children:"--validate-response"})," to enable it."]}),"\n",(0,i.jsx)(n.h3,{id:"capture-mode",children:"Capture Mode"}),"\n",(0,i.jsxs)(n.p,{children:["Capture mode is activated by passing the ",(0,i.jsx)(n.code,{children:"--capture"})," parameter, followed by the path to a directory. As the requests go through, Piestry will capture the responses coming from the origin and save them to file."]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"--capture"})," is executed without ",(0,i.jsx)(n.code,{children:"--e2e"}),", Piestry will try to map the saved files to the OpenAPI definition and serve them as examples."]}),"\n",(0,i.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api-testing/logger",children:"API Testing Logger"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var i=s(96540);const a={},t=i.createContext(a);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);