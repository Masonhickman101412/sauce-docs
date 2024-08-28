"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[59198],{31407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(74848),s=n(28453),o=n(86025);const r={id:"integrate-with-your-cicd",title:"Integrate with CI/CD Platforms",sidebar_label:"Integrate with CI/CD",description:"Using the API Fortress API or CLI you can easily and seamlessly integrate continuous API testing powered by API Fortress into your CI/CD pipeline."},a=void 0,l={id:"api-testing/on-prem/quick-start/integrate-with-your-cicd",title:"Integrate with CI/CD Platforms",description:"Using the API Fortress API or CLI you can easily and seamlessly integrate continuous API testing powered by API Fortress into your CI/CD pipeline.",source:"@site/docs/api-testing/on-prem/quick-start/integrate-with-your-cicd.md",sourceDirName:"api-testing/on-prem/quick-start",slug:"/api-testing/on-prem/quick-start/integrate-with-your-cicd",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/quick-start/integrate-with-your-cicd",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/quick-start/integrate-with-your-cicd.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"integrate-with-your-cicd",title:"Integrate with CI/CD Platforms",sidebar_label:"Integrate with CI/CD",description:"Using the API Fortress API or CLI you can easily and seamlessly integrate continuous API testing powered by API Fortress into your CI/CD pipeline."},sidebar:"apif",previous:{title:"The Dashboard",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/quick-start/dashboard"},next:{title:"Intro to Integration Testing",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/quick-start/introduction-to-integration-testing"}},c={},d=[{value:"APIs &amp; Webhooks",id:"apis--webhooks",level:2},{value:"Command-line Tool (APIF-Auto)",id:"command-line-tool-apif-auto",level:2},{value:"API General Usage Guide",id:"api-general-usage-guide",level:2},{value:"Step 1 - Install an HTTP Plugin",id:"step-1---install-an-http-plugin",level:3},{value:"Step 2 - Generate an API Hook",id:"step-2---generate-an-api-hook",level:3},{value:"Step 3 - Execute HTTP Calls",id:"step-3---execute-http-calls",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Legacy Documentation"}),(0,i.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,i.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,i.jsxs)(t.p,{children:["API Fortress is an API-first platform that was built from the ground up for deployment flexibility and non-disruption to existing workflows. Whether you are transitioning to a CI/CD pipeline or have already invested in a CI/CD pipeline, it is easy and seamless to integrate continuous API testing powered by API Fortress into your CI/CD pipeline. We offer a ",(0,i.jsx)(t.a,{href:"https://apifortress.com/doc/quick-start-guide-schedule-a-test/",children:"scheduler"}),", APIs, and command-line tools to simplify integrations with your CI/CD pipeline."]}),"\n",(0,i.jsx)(t.h2,{id:"apis--webhooks",children:"APIs & Webhooks"}),"\n",(0,i.jsx)(t.p,{children:"Find APIs on the API Fortress platform for most features, including data and test execution. You can use that API to easily run a single test, all tests, tests with specific tags, and more. Learn more about this:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-testing/on-prem/ci/jenkins/using-the-api",children:"Jenkins and API Fortress"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-testing/on-prem/ci/connecting-with-bamboo",children:"Bamboo and API Fortress"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-testing/on-prem/api/using-the-api",children:"Comprehensive API docs"})}),"\n",(0,i.jsxs)(t.li,{children:["Search below to the ",(0,i.jsx)(t.em,{children:"General Guide"})," for all other CI platforms:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Azure DevOps Server"}),"\n",(0,i.jsx)(t.li,{children:"TravisCI"}),"\n",(0,i.jsx)(t.li,{children:"TeamCity"}),"\n",(0,i.jsx)(t.li,{children:"CircleCI"}),"\n",(0,i.jsx)(t.li,{children:"Gitlab CI"}),"\n",(0,i.jsx)(t.li,{children:"Buddy"}),"\n",(0,i.jsx)(t.li,{children:"Wercker"}),"\n",(0,i.jsx)(t.li,{children:"And more!"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"command-line-tool-apif-auto",children:"Command-line Tool (APIF-Auto)"}),"\n",(0,i.jsx)(t.p,{children:"We have also created a command-line tool that is easy to use, and exposes the execution of APIF tests in their local environment. It is also a great way to expose results during the build phase directly in the CI platform."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-testing/on-prem/ci/apif-auto",children:"Download APIF-Auto"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-testing/on-prem/ci/jenkins/apif-auto",children:"Jenkins and APIF-Auto"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/api-testing/on-prem/ci/apif-auto",children:"APIF-Auto General Docs"})," - The command-line tool can be used with ",(0,i.jsx)(t.em,{children:"any"})," CI/CD platform! We are working on creating additional dedicated docs."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"api-general-usage-guide",children:"API General Usage Guide"}),"\n",(0,i.jsx)(t.h3,{id:"step-1---install-an-http-plugin",children:"Step 1 - Install an HTTP Plugin"}),"\n",(0,i.jsx)(t.p,{children:"Depending on your CI/CD platform, you may need to install a plugin that allows for HTTP requests during the build process. API Fortress will need the plugin to execute the tests."}),"\n",(0,i.jsx)(t.h3,{id:"step-2---generate-an-api-hook",children:"Step 2 - Generate an API Hook"}),"\n",(0,i.jsx)(t.p,{children:"The first step of integrating API Fortress into your CI/CD process is to grab the generated API hook for the project in question. To do so, go to the Settings panel in API Fortress. This view, seen below, can be accessed from anywhere in the application by clicking the gear icon in the top right corner. Please note that you need Manager access to generate a webhook. From Settings, click the API Hooks section to generate the hook for your project."}),"\n",(0,i.jsx)("img",{src:(0,o.Ay)("img/api-fortress/2018/04/hook.gif"),alt:"Hook Gif"}),"\n",(0,i.jsx)(t.p,{children:"The next step depends on what you\u2019re trying to test. The following directions are based on the assumption that you wish to run all of the tests in a project. You can also run a single test, or a series of tests with a certain tag. If you would like to learn more, please contact API Fortress."}),"\n",(0,i.jsx)(t.p,{children:"As it stands, our API hook is as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-http",metastring:"request",children:"https://mastiff.apifortress.com/app/api/rest/v3/86f81b19-2d29-4879-91d9-6dbb2271fec0861\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The normal command to run all of the tests in the project, per the API Fortress docs is ",(0,i.jsx)(t.em,{children:"/tests/run-all"}),", so we append this onto the end of the API call. You may need to request a JUnit output. To do that, simply collect a few query parameters. First, set ",(0,i.jsx)(t.em,{children:"sync"})," to ",(0,i.jsx)(t.em,{children:"true"})," so that we can set ",(0,i.jsx)(t.em,{children:"format"})," to ",(0,i.jsx)(t.em,{children:"JUnit"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["In short, we need to append ",(0,i.jsx)(t.code,{children:"?sync=true&format=junit"})," to the webhook call. That gives us the final API call:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-http",metastring:"request",children:"https://mastiff.apifortress.com/app/api/rest/v3/86f81b19-2d29-4879-91d9-6dbb2271fec0861/tests/run-all?sync=true&format=junit\n"})}),"\n",(0,i.jsx)(t.p,{children:"Great! If we make this API call via a browser or a tool like Postman, we can see our results in JUnit. We\u2019re almost there."}),"\n",(0,i.jsx)(t.h3,{id:"step-3---execute-http-calls",children:"Step 3 - Execute HTTP Calls"}),"\n",(0,i.jsxs)(t.p,{children:["From your CI/CD platform\u2019s dashboard, you\u2019ll need to paste the webhook call to the flow. We have more specific docs available, for instance, if you wish to use ",(0,i.jsx)(t.a,{href:"/api-testing/on-prem/ci/jenkins/using-the-api",children:"Jenkins"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The test results can then be passed along to platforms like qTest or Zephyr in your CI/CD pipeline."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);