"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[97822],{82700:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var t=s(74848),i=s(28453),l=s(86025);const r={id:"saving-token-kv",title:"Saving a Token in a Key/Value Store",sidebar_label:"Saving Token in K/V Store",description:"Saving a Token in a Key/Value Store"},o=void 0,a={id:"api-testing/use-cases/saving-token-kv",title:"Saving a Token in a Key/Value Store",description:"Saving a Token in a Key/Value Store",source:"@site/docs/api-testing/use-cases/saving-token-kv.md",sourceDirName:"api-testing/use-cases",slug:"/api-testing/use-cases/saving-token-kv",permalink:"/sauce-docs/pr-preview/pr-2906/api-testing/use-cases/saving-token-kv",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/use-cases/saving-token-kv.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1681895013e3,frontMatter:{id:"saving-token-kv",title:"Saving a Token in a Key/Value Store",sidebar_label:"Saving Token in K/V Store",description:"Saving a Token in a Key/Value Store"},sidebar:"docs",previous:{title:"Saving a Variable in Vault",permalink:"/sauce-docs/pr-preview/pr-2906/api-testing/use-cases/vault-variable"},next:{title:"Setting up Variables",permalink:"/sauce-docs/pr-preview/pr-2906/api-testing/use-cases/set-variable"}},d={},h=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Saving a Token in a Key/Value Store",id:"saving-a-token-in-a-keyvalue-store",level:2},{value:"Using the Key/Value in Other Tests",id:"using-the-keyvalue-in-other-tests",level:3},{value:"Refreshing the Token",id:"refreshing-the-token",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["One of the common scenarios you can face when you are working with APIs is authentication. Most of the time you call the endpoint that lets you authenticate and then use the token in the following calls. Sometimes, there may be cases where you can't call the endpoint every time, hence you need to save the token in a variable and use it more times. If you have only one test, you can reuse the same token smoothly. What happens if you need it in more tests inside your project or across the whole organization? The ",(0,t.jsx)(n.a,{href:"/api-testing/vault/",children:"Vault"})," is not the solution because it contains static values and you have to manually update the value every time. Here is when the Key/Value store can help."]}),"\n",(0,t.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A Sauce Labs account (",(0,t.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,t.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,t.jsx)(n.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Familiarity with the ",(0,t.jsx)(n.a,{href:"/api-testing/composer/",children:"API Testing Composer"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"saving-a-token-in-a-keyvalue-store",children:"Saving a Token in a Key/Value Store"}),"\n",(0,t.jsx)(n.p,{children:"In this example, you learn how to save a token in the Key/Value Store and then use it across the Organization."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["First, open the Composer and add the ",(0,t.jsx)(n.strong,{children:"Key/Value Store"})," component."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Action - for example ",(0,t.jsx)(n.code,{children:"Load"})]}),"\n",(0,t.jsxs)(n.li,{children:["Key - for example ",(0,t.jsx)(n.code,{children:"token"})]}),"\n",(0,t.jsxs)(n.li,{children:["Variable - for example ",(0,t.jsx)(n.code,{children:"token_var"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.A)("img/api-testing/kv-examples/token-kv1.png"),alt:"load method in key value component"}),"\n",(0,t.jsx)(n.p,{children:"It loads the token: the first time you run the test, the value will be empty then, it will be the token retrieved from the following call."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the ",(0,t.jsx)(n.strong,{children:"If"})," component, then ",(0,t.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Expression - for example ",(0,t.jsx)(n.code,{children:"!token_var"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.A)("img/api-testing/kv-examples/token-if.png"),alt:"if component"}),"\n",(0,t.jsx)(n.p,{children:"In this step you check if there is a token in the Key/Value Store: if the token is not available will perform the call to retrieve it, otherwise, the test will proceed using the already available token."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Add Child Component"})," inside the ",(0,t.jsx)(n.strong,{children:"If"})," and then, add the ",(0,t.jsx)(n.strong,{children:"GET"})," component."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Url - for example ",(0,t.jsx)(n.code,{children:"https://m2-keyvalueexample.load2.apifortress.com/token"})]}),"\n",(0,t.jsxs)(n.li,{children:["Variable - for example ",(0,t.jsx)(n.code,{children:"payload"})]}),"\n",(0,t.jsxs)(n.li,{children:["Mode - for example ",(0,t.jsx)(n.code,{children:"json"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.A)("img/api-testing/kv-examples/token-get.png"),alt:"GET request"}),"\n",(0,t.jsx)(n.p,{children:"This step calls the endpoint that generates the token."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Add Child Component"})," for the ",(0,t.jsx)(n.strong,{children:"If"})," and then, add the ",(0,t.jsx)(n.strong,{children:"Key/Value Store"})," component."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Action - for example ",(0,t.jsx)(n.code,{children:"Set"})]}),"\n",(0,t.jsxs)(n.li,{children:["Key - for example ",(0,t.jsx)(n.code,{children:"token"})]}),"\n",(0,t.jsxs)(n.li,{children:["Data - for example ",(0,t.jsx)(n.code,{children:"payload.token"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.A)("img/api-testing/kv-examples/token-kv2.png"),alt:"set method in key value component"}),"\n",(0,t.jsx)(n.p,{children:"In this step you add the value of the token in the Key/Value store."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Outside the ",(0,t.jsx)(n.strong,{children:"If"}),", add ",(0,t.jsx)(n.strong,{children:"Assert Exists"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Expression - for example ",(0,t.jsx)(n.code,{children:"token_var"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.A)("img/api-testing/kv-examples/token-assert.png"),alt:"assert exists"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"token_var"})," is available for further use inside the test (and inside your Organization)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the ",(0,t.jsx)(n.strong,{children:"POST"})," component and then, ",(0,t.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Url - for example ",(0,t.jsx)(n.code,{children:"https://m2-keyvalueexample.load2.apifortress.com/profile"})]}),"\n",(0,t.jsxs)(n.li,{children:["Variable - for example ",(0,t.jsx)(n.code,{children:"profilePayload"})]}),"\n",(0,t.jsxs)(n.li,{children:["Mode - for example ",(0,t.jsx)(n.code,{children:"json"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.A)("img/api-testing/kv-examples/token-post.png"),alt:"POST request"}),"\n",(0,t.jsx)(n.p,{children:"This step calls the endpoint that requires the token for authenticate."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the ",(0,t.jsx)(n.strong,{children:"Request Header"})," to the ",(0,t.jsx)(n.strong,{children:"POST"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Name - for example ",(0,t.jsx)(n.code,{children:"Authorization"})]}),"\n",(0,t.jsxs)(n.li,{children:["Value - for example ",(0,t.jsx)(n.code,{children:"${token_var}"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.A)("img/api-testing/kv-examples/token-auth.png"),alt:"Request Header"}),"\n",(0,t.jsx)(n.p,{children:"In the request header you pass the token saved in the Key/Value Store."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The final test looks like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'- id: kv\n  key: token\n  action: load\n  var: token_var\n- id: if\n  children:\n    - id: get\n      children: []\n      url: https://m2-loadtest.load2.apifortress.com/token\n      var: payload\n      mode: json\n    - id: set\n      var: token_var\n      mode: string\n      value: ${payload.token}\n    - id: kv\n      key: token\n      action: set\n      object: token_var\n  expression: "!token_var"\n- id: assert-exists\n  expression: token_var\n- id: post\n  children:\n    - id: header\n      name: Authorization\n      value: ${token_var}\n  url: https://m2-loadtest.load2.apifortress.com/profile\n  var: profilePayload\n  mode: json\n'})}),"\n",(0,t.jsx)(n.h3,{id:"using-the-keyvalue-in-other-tests",children:"Using the Key/Value in Other Tests"}),"\n",(0,t.jsx)(n.p,{children:"To use the Key/Value Store in other tests in the same Organization, you have to first load the value from the Key/Value Store and then use it."}),"\n",(0,t.jsx)("img",{src:(0,l.A)("img/api-testing/kv-examples/token-kv-tests.png"),alt:"Load the key/value in other tests"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Action - for example ",(0,t.jsx)(n.code,{children:"Load"})]}),"\n",(0,t.jsxs)(n.li,{children:["Key - for example ",(0,t.jsx)(n.code,{children:"token"})]}),"\n",(0,t.jsxs)(n.li,{children:["Variable - for example ",(0,t.jsx)(n.code,{children:"my_token"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"token"})," is the ",(0,t.jsx)(n.strong,{children:"Key"})," you assigned in the ",(0,t.jsx)(n.a,{href:"/#saving-a-token-in-a-keyvalue-store",children:"first step"})," of the previous example.\n",(0,t.jsx)(n.code,{children:"my_token"})," is the variable name you will use inside the test for referencing it."]}),"\n",(0,t.jsx)(n.h2,{id:"refreshing-the-token",children:"Refreshing the Token"}),"\n",(0,t.jsx)(n.p,{children:"The previous example shows how to save the token in the Key/Value Store but, once created, the token will remain the same. In reality, tokens usually expire after a certain amount of time so you need to generate a new one. In the following example, you will see how to improve the previous example by refreshing the token."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["First, add the ",(0,t.jsx)(n.strong,{children:"Key/Value Store"})," component."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Action - for example ",(0,t.jsx)(n.code,{children:"Load"})]}),"\n",(0,t.jsxs)(n.li,{children:["Key - for example ",(0,t.jsx)(n.code,{children:"token"})]}),"\n",(0,t.jsxs)(n.li,{children:["Variable - for example ",(0,t.jsx)(n.code,{children:"token_var"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.A)("img/api-testing/kv-examples/token-kv1.png"),alt:"load method in key value component"}),"\n",(0,t.jsx)(n.p,{children:"It loads the token: the first time you run the test, the value will be empty then, it will be the token retrieved from the following call."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Next, add the ",(0,t.jsx)(n.strong,{children:"Key/Value Store"})," component."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Action - for example ",(0,t.jsx)(n.code,{children:"Load"})]}),"\n",(0,t.jsxs)(n.li,{children:["Key - for example ",(0,t.jsx)(n.code,{children:"last_token"})]}),"\n",(0,t.jsxs)(n.li,{children:["Variable - for example ",(0,t.jsx)(n.code,{children:"last_token_var"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.A)("img/api-testing/kv-examples/refresh-kv1.png"),alt:"load method in key value component"}),"\n",(0,t.jsx)(n.p,{children:"In this step, you load the date and time the token was last generated."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the ",(0,t.jsx)(n.strong,{children:"If"})," component, then ",(0,t.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Expression - for example ",(0,t.jsx)(n.code,{children:"!token_var || ! last_token_var || last_token_var+60000 < D.nowMillis()"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.A)("img/api-testing/kv-examples/refresh-if.png"),alt:"if component"}),"\n",(0,t.jsx)(n.p,{children:"In this step you check if there is a token in the Key/Value store, the date is present and one minute has not passed since the last token generation. If any of these conditions are not met, you generate a new one. The example refreshes the token every minute (60000ms), you can choose to refresh it differently by changing the value."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Add Child Component"})," inside the ",(0,t.jsx)(n.strong,{children:"If"})," and then, add the ",(0,t.jsx)(n.strong,{children:"GET"})," component."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Url - for example ",(0,t.jsx)(n.code,{children:"https://m2-keyvalueexample.load2.apifortress.com/token"})]}),"\n",(0,t.jsxs)(n.li,{children:["Variable - for example ",(0,t.jsx)(n.code,{children:"payload"})]}),"\n",(0,t.jsxs)(n.li,{children:["Mode - for example ",(0,t.jsx)(n.code,{children:"json"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.A)("img/api-testing/kv-examples/token-get.png"),alt:"GET request"}),"\n",(0,t.jsx)(n.p,{children:"This step calls the endpoint that generates the token."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Add Child Component"})," for the ",(0,t.jsx)(n.strong,{children:"If"})," and then, add the ",(0,t.jsx)(n.strong,{children:"Key/Value Store"})," component."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Action - for example ",(0,t.jsx)(n.code,{children:"Set"})]}),"\n",(0,t.jsxs)(n.li,{children:["Key - for example ",(0,t.jsx)(n.code,{children:"token"})]}),"\n",(0,t.jsxs)(n.li,{children:["Data - for example ",(0,t.jsx)(n.code,{children:"payload.token"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.A)("img/api-testing/kv-examples/token-kv2.png"),alt:"set method in key value component"}),"\n",(0,t.jsx)(n.p,{children:"In this step you add the value of the token in the Key/Value store."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Add Child Component"})," inside the ",(0,t.jsx)(n.strong,{children:"If"})," and then, add the ",(0,t.jsx)(n.strong,{children:"Key/Value Store"})," component."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Action - for example ",(0,t.jsx)(n.code,{children:"Set"})]}),"\n",(0,t.jsxs)(n.li,{children:["Key - for example ",(0,t.jsx)(n.code,{children:"last_token"})]}),"\n",(0,t.jsxs)(n.li,{children:["Data - for example ",(0,t.jsx)(n.code,{children:"D.nowMillis()"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.A)("img/api-testing/kv-examples/refresh-kv2.png"),alt:"set method in key value component"}),"\n",(0,t.jsx)(n.p,{children:"In this step, you add the date in the Key/Value Store."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Outside the ",(0,t.jsx)(n.strong,{children:"If"}),", add ",(0,t.jsx)(n.strong,{children:"Assert Exists"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Expression - for example ",(0,t.jsx)(n.code,{children:"token_var"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.A)("img/api-testing/kv-examples/token-assert.png"),alt:"assert exists"}),"\n",(0,t.jsx)(n.p,{children:"The token will not be generated again for the next minute and the existing one will be used."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the ",(0,t.jsx)(n.strong,{children:"POST"})," component and then, ",(0,t.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Url - for example ",(0,t.jsx)(n.code,{children:"https://m2-keyvalueexample.load2.apifortress.com/profile"})]}),"\n",(0,t.jsxs)(n.li,{children:["Variable - for example ",(0,t.jsx)(n.code,{children:"profilePayload"})]}),"\n",(0,t.jsxs)(n.li,{children:["Mode - for example ",(0,t.jsx)(n.code,{children:"json"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.A)("img/api-testing/kv-examples/token-post.png"),alt:"POST request"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This step calls the endpoint that requires the token for authenticate."}),"\n",(0,t.jsxs)(n.ol,{start:"14",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the ",(0,t.jsx)(n.strong,{children:"Request Header"})," to the ",(0,t.jsx)(n.strong,{children:"POST"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Name - for example ",(0,t.jsx)(n.code,{children:"Authorization"})]}),"\n",(0,t.jsxs)(n.li,{children:["Value - for example ",(0,t.jsx)(n.code,{children:"${token_var}"})]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.A)("img/api-testing/kv-examples/token-auth.png"),alt:"Request Header"}),"\n",(0,t.jsx)(n.p,{children:"In the request header you pass the token saved in the Key/Value Store."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The test looks like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'- id: kv\n  key: token\n  action: load\n  var: token_var\n- id: kv\n  key: last_token\n  action: load\n  var: last_token_var\n- id: if\n  children:\n    - id: get\n      children: []\n      url: https://m2-keyvalueexample.load2.apifortress.com/token\n      var: payload\n      mode: json\n    - id: kv\n      key: token\n      action: set\n      object: payload.token\n    - id: kv\n      key: last_token\n      action: set\n      object: D.nowMillis()\n  expression: "!token_var || ! last_token_var || last_token_var+60000 < D.nowMillis()"\n- id: assert-exists\n  expression: token_var\n- id: post\n  children:\n    - id: header\n      name: Authorization\n      value: ${token_var}\n  url: https://m2-keyvalueexample.load2.apifortress.com/profile\n  var: profilePayload\n  mode: json\n'})}),"\n",(0,t.jsx)(n.p,{children:"By running the test two times in a row (in less than one minute) you can notice that the first time, the test will perform the call that generates the token and the second time it will execute only the call that uses the token."})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(96540);const i={},l=t.createContext(i);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);