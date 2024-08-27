"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[64176],{48962:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=s(74848),o=s(28453),a=s(86025);const r={id:"different-ways-to-compose-a-request-body",title:"Different Ways to Compose a Request Body",sidebar_label:"Different Ways to Compose a Request Body",keywords:["api-testing","how-to","request-body"]},i=void 0,l={id:"api-testing/on-prem/how-to/different-ways-to-compose-a-request-body",title:"Different Ways to Compose a Request Body",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/different-ways-to-compose-a-request-body.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/different-ways-to-compose-a-request-body",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/on-prem/how-to/different-ways-to-compose-a-request-body",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/different-ways-to-compose-a-request-body.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724771321e3,frontMatter:{id:"different-ways-to-compose-a-request-body",title:"Different Ways to Compose a Request Body",sidebar_label:"Different Ways to Compose a Request Body",keywords:["api-testing","how-to","request-body"]},sidebar:"apif",previous:{title:"Dealing with Authentication",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/on-prem/how-to/authorization-simple-oauth-etc"},next:{title:"Disable SSL Validation",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/on-prem/how-to/disable-ssl-validation"}},c={},d=[{value:"Copy and Paste the Body from Somewhere",id:"copy-and-paste-the-body-from-somewhere",level:2},{value:"Using Variables in the Request Body",id:"using-variables-in-the-request-body",level:2},{value:"Using a Variable from Another Call",id:"using-a-variable-from-another-call",level:2},{value:"Using an Object from Another Call",id:"using-an-object-from-another-call",level:2},{value:"Creating a New Structure to Add as a Body",id:"creating-a-new-structure-to-add-as-a-body",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{children:(0,t.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Legacy Documentation"}),(0,t.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,t.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,t.jsx)(n.p,{children:"In this post we will show you the different ways you can compose a Request Body: from the\xa0simplest to the most complex."}),"\n",(0,t.jsx)(n.h2,{id:"copy-and-paste-the-body-from-somewhere",children:"Copy and Paste the Body from Somewhere"}),"\n",(0,t.jsx)(n.p,{children:"The first and easiest way is when we have a body from somewhere to copy\xa0and paste as is into the call. Let's see how this is done:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In the composer we add the POST component and type the url and all of the required fields."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"//mydomain.com/myPost //the url of the resource you want to test\nUrl: https: Variable: payload //the name of the variable that contains the response\nMode: json //the type of the response\n"})}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2018/09/post_comp.jpg"),alt:"post_comp.jpg"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Now we add the Body component and after selecting the ",(0,t.jsx)(n.code,{children:"Content-Type"})," we paste the body in ",(0,t.jsx)(n.code,{children:"Content"})," field."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'Content-Type: application/json\nContent: {"method":"post","url":"http://www.testme.com/api/run/test"} //the body required in your call\n'})}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2018/09/paste_body.jpg"),alt:"paste_body.jpg"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Now we can execute the call and proceed with the test. ",(0,t.jsx)(n.a,{href:"https://apifortress.com/doc/wp-content/uploads/2018/09/final_call.jpg",children:(0,t.jsx)(n.img,{src:"https://apifortress.com/doc/wp-content/uploads/2018/09/final_call.jpg",alt:"final_call"})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"using-variables-in-the-request-body",children:"Using Variables in the Request Body"}),"\n",(0,t.jsx)(n.p,{children:"Another way to compose a request is using variables in the body."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In the composer we add the POST component typing the url and all the required fields."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"//mydomain.com/myPost //the url of the resource you want to test)\nUrl: https: Variable: payload //the name of the variable that contains the response)\nMode: json //the type of the response)\n"})}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2018/09/post_comp.jpg"),alt:"post_comp.jpg"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"We add the Body component. In the Content-Type we choose the proper one, let's say application/json. In this scenario we need to use a variable so in the Content field we enter the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n "user": ${user},\n "password": ${password},\n "url": "http://www.testme.com/api/run/test"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this scenario ",(0,t.jsx)(n.code,{children:'"user"'})," and ",(0,t.jsx)(n.code,{children:'"password"'})," are not directly passed in the body, but they are variables defined as global parameters in the data set."]}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2018/09/var_body.jpg"),alt:"var_body.jpg"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The POST has been done and can be executed."}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2018/09/final_call2.jpg"),alt:"final_call2.jpg"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"using-a-variable-from-another-call",children:"Using a Variable from Another Call"}),"\n",(0,t.jsx)(n.p,{children:"The next way to compose a Request Body is by using a variable from another call. Let's see how this can be done."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The first thing we need to do is add the call we will retrieve the variable from. Let's consider, as example, the common scenario where we need to perform a login for authentication and retrieve the authentication token required for the following\xa0call."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"Url: http://www.mydomain.com/login // the url of the resource you want to test\nVariable: payload // the name of the variable that contains the response\nMode: json // the type of the response\nHeader:\n    Name: Authorization\n    Value: Basic YWRtaW46cGFzc3dvcmQ=\n    // this value comes from encoding username:password in Base64\n"})}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2018/09/loginAuth.jpg"),alt:"loginAuth.jpg"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Executing the login we will have as response the desired token. Let's see it using our console. ",(0,t.jsx)(n.a,{href:"https://apifortress.com/doc/wp-content/uploads/2018/09/response_token.jpg",children:(0,t.jsx)(n.img,{src:"https://apifortress.com/doc/wp-content/uploads/2018/09/response_token.jpg",alt:"response_token"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Now we need to save the token as variable."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"Var: token //the name of the variable\nVariable mode: String // the type of the variable\nValue: ${payload.access_token} // we retrive the value from the previous 'payload'\n"})}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2018/09/var_token.jpg"),alt:"var_token.jpg"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Once the token has been saved as variable we can proceed adding the second call and use that token in the Request Body."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'Content-Type: application/json\nContent: {"token":"${token}"}\n'})}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2018/09/bodyWToken.jpg"),alt:"bodyWToken.jpg"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"using-an-object-from-another-call",children:"Using an Object from Another Call"}),"\n",(0,t.jsx)(n.p,{children:"In the next example we will show you a more complex case. We will consider the scenario where we need to use an object retrieved from a previous call into the body of a subsequent call. Let's take a look at an example:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"First, we perform the call we retrieve the object from."}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2018/09/search.jpg"),alt:"search.jpg"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Let's execute the call in our console in order to see the response."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n"id": 123,\n"items": [\n{\n"id": 11,\n"name": "stuff1"\n},\n{\n"id": 12,\n"name": "stuff2"\n},\n{\n"id": 13,\n"name": "stuff3"\n}\n]\n}\n'})}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2018/09/search_response.jpg"),alt:"search_response.jpg"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Let's say we need the object 'items' as the body in the subsequent call. So, as a second call, we will add a ",(0,t.jsx)(n.code,{children:"POST"})," and we will type the following as body:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"${searchPayload.items.asJSON()}\n"})}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2018/09/objectInBody.jpg"),alt:"objectInBody.jpg"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Now we can proceed with the test."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"creating-a-new-structure-to-add-as-a-body",children:"Creating a New Structure to Add as a Body"}),"\n",(0,t.jsx)(n.p,{children:"The last scenario is yet another more complex one. In this case, we consider the scenario where we need to create a new structure to add as a body, using data from a previous call."}),"\n",(0,t.jsx)(n.p,{children:"Let's see how we can do this:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The first thing we have to do is to perform the call which retrieves the data we're using. Let's consider a ",(0,t.jsx)(n.code,{children:"GET"})," that returns an array of items."]}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2018/09/firstCall.jpg"),alt:"firstCall.jpg"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Let's see the response using our console."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n"items": [\n{\n"id": 11,\n"price": 5.99\n},\n{\n"id": 12,\n"price": 6.99\n},\n{\n"id": 13,\n"price": 10.99\n},\n{\n"id": 14,\n"price": 15.99\n}\n]\n}\n'})}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2018/09/response_get.jpg"),alt:"response_get.jpg"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Now we need to create the new data structure. To do so, we add a SET component as follow:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// for each item in the array,\npayload.items.each {\n    it -> it.currency='$'\n};\n// we add the currency attribute with \"$\" as value\n\nreturn payload.asJSON();\n"})}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2018/09/newData.jpg"),alt:"newData.jpg"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Now we can add the POST and add the new structure as the ",(0,t.jsx)(n.code,{children:"POST"})," request body:"]}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2018/09/postWithNewStructure.jpg"),alt:"postWithNewStructure.jpg"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"That's it. Now we can proceed with the test."}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2018/09/allDone.jpg"),alt:"allDone.jpg"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NOTE"}),": In this post we used the ",(0,t.jsx)(n.code,{children:"POST"})," method, but all examples shown apply to the other REST methods. In this same way, we demonstrated scenarios with Request Bodies, but all examples apply for Header or Param cases as well."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var t=s(96540);const o={},a=t.createContext(o);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);