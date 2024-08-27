"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[68296],{32912:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=t(74848),s=t(28453),r=t(86025);const o={id:"zephyr-enterprise-integration",title:"Jenkins: Zephyr Enterprise Integration",sidebar_label:"Zephyr Enterprise Integration",keywords:["cicd","jenkins","api-fortress","zephyr-enterprise"]},a=void 0,l={id:"api-testing/on-prem/ci/jenkins/zephyr-enterprise-integration",title:"Jenkins: Zephyr Enterprise Integration",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/ci/jenkins/zephyr-enterprise-integration.md",sourceDirName:"api-testing/on-prem/ci/jenkins",slug:"/api-testing/on-prem/ci/jenkins/zephyr-enterprise-integration",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/on-prem/ci/jenkins/zephyr-enterprise-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/ci/jenkins/zephyr-enterprise-integration.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724771321e3,frontMatter:{id:"zephyr-enterprise-integration",title:"Jenkins: Zephyr Enterprise Integration",sidebar_label:"Zephyr Enterprise Integration",keywords:["cicd","jenkins","api-fortress","zephyr-enterprise"]},sidebar:"apif",previous:{title:"APIF-Auto with GitHub",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/on-prem/ci/jenkins/apif-auto-and-github"},next:{title:"Micro Focus ALM",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/on-prem/ci/micro-focus-alm-integration"}},c={},p=[{value:"Step 1 - Install the Zephyr Enterprise Jenkins Plugin",id:"step-1---install-the-zephyr-enterprise-jenkins-plugin",level:2},{value:"Step 2 - Configure the Zephyr Enterprise Jenkins Plugin",id:"step-2---configure-the-zephyr-enterprise-jenkins-plugin",level:2},{value:"Step 3 \u2013 Generate an API Hook",id:"step-3--generate-an-api-hook",level:2},{value:"Step 4 \u2013 Execute HTTP Call from Jenkins",id:"step-4--execute-http-call-from-jenkins",level:2},{value:"Step 5 - Publish JUnit Test Results in Jenkins",id:"step-5---publish-junit-test-results-in-jenkins",level:2},{value:"Step 6 - Exporting Data to Zephyr",id:"step-6---exporting-data-to-zephyr",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Legacy Documentation"}),(0,i.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,i.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,i.jsx)(n.h2,{id:"step-1---install-the-zephyr-enterprise-jenkins-plugin",children:"Step 1 - Install the Zephyr Enterprise Jenkins Plugin"}),"\n",(0,i.jsx)(n.p,{children:"The first step to exporting data to Zephyr Enterprise is to download and configure the Zephyr Enterprise plugin."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'From the Jenkins main page, click "Configure" and then "Manage Plugins."'}),"\n",(0,i.jsx)(n.li,{children:'From the "Manage Plugins" window, search for and install "Zephyr Enterprise."'}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/jenkinsAddons.gif"),alt:"Jenkins Add On"}),"\n",(0,i.jsx)(n.h2,{id:"step-2---configure-the-zephyr-enterprise-jenkins-plugin",children:"Step 2 - Configure the Zephyr Enterprise Jenkins Plugin"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Click the "Configure System" option in the "Manage Jenkins" menu.'}),"\n",(0,i.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/JenkConfig.png"),alt:"Jenkins config"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Scroll down to "Zephyr Server Configuration" and enter your domain and login credentials.'}),"\n",(0,i.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/Screen-Shot-2018-05-29-at-10.30.39-AM.png"),alt:"Jenkins config"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Click "Test Configuration." If the test is successful, your Jenkins is properly configured to communicate with your Zephyr instance.'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-3--generate-an-api-hook",children:"Step 3 \u2013 Generate an API Hook"}),"\n",(0,i.jsx)(n.p,{children:"Next, we need to create an API Fortress Webhook to export the test data to Jenkins."}),"\n",(0,i.jsxs)(n.p,{children:["To do so, head to the Settings panel in API Fortress. This view, seen below, can be accessed from anywhere in the application by clicking the ",(0,i.jsx)(n.em,{children:"Gear"})," icon in the top right corner of the screen."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": You need Manager access to generate a Webhook. From Settings, click the API Hooks section and generate the hook for your project."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/hook.gif"),alt:"Jenkins hook gif"}),"\n",(0,i.jsx)(n.p,{children:"The next step depends on what you\u2019re trying to test. The following steps are going to assume that you wish to run all of the tests in a project. You can also run a single test, or a series of tests with a certain tag. If you would like to learn more about that please contact API Fortress."}),"\n",(0,i.jsx)(n.p,{children:"To import our data into Jenkins as JUnit, we\u2019ll export it in JUnit format using a query parameter. Since we already have our API hook, we just need to add the parameter to do so."}),"\n",(0,i.jsx)(n.p,{children:"As it stands, our API hook is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",metastring:"request",children:"https://mastiff.apifortress.com/app/api/rest/v3/86f81b19-2d29-4879-91d9-6dbb2271fec0861\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The normal command to run all of the tests in the project, per the API Fortress docs is ",(0,i.jsx)(n.code,{children:"/tests/run-all"})," , so we append this on to the end of the API call."]}),"\n",(0,i.jsxs)(n.p,{children:["We also need to request JUnit output via query parameters. First, we need to set ",(0,i.jsx)(n.em,{children:"sync"})," to ",(0,i.jsx)(n.em,{children:"true"}),", and then we can set ",(0,i.jsx)(n.em,{children:"format"})," to ",(0,i.jsx)(n.em,{children:"JUnit"}),". In short, we need to append ",(0,i.jsx)(n.code,{children:"?sync=true&format=junit"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"That gives us the final API call:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",metastring:"request",children:"https://mastiff.apifortress.com/app/api/rest/v3/86f81b19-2d29-4879-91d9-6dbb2271fec0861/tests/run-all?sync=true&format=junit\n"})}),"\n",(0,i.jsx)(n.p,{children:"Great! If we make this API call via a browser or a tool like Postman, we can see our results in JUnit."}),"\n",(0,i.jsx)(n.h2,{id:"step-4--execute-http-call-from-jenkins",children:"Step 4 \u2013 Execute HTTP Call from Jenkins"}),"\n",(0,i.jsx)(n.p,{children:"From the Jenkins dashboard, let\u2019s create a New Item."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Next, we\u2019re going to name and create a Freestyle Project. Click the ",(0,i.jsx)(n.em,{children:"OK"})," button to proceed."]}),"\n",(0,i.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/jenkinsSetup.gif"),alt:"Jenkins Setup gif"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Scroll down the page until you see the \u201c",(0,i.jsx)(n.em,{children:"Add Build Step"}),"\u201d pulldown menu. Select \u201c",(0,i.jsx)(n.em,{children:"HTTP Request"}),".\u201d\nThis option will only be available if you installed the ",(0,i.jsx)(n.em,{children:"HTTP Request"})," plugin in the previous step."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"We\u2019re going to paste the API call we created above into the URL line. If we save this configuration, we can run the build and see Jenkins receive our JUnit test results in real time."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Next, we\u2019re going to click the \u201c",(0,i.jsx)(n.em,{children:"Advanced"}),"\u201d button. Scroll to the bottom of the newly opened view and enter a filename of your choice into the \u201c",(0,i.jsx)(n.em,{children:"Output Response to File\u201d"})," line."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/Screen-Shot-2018-04-03-at-9.56.58-AM-2.png"),alt:"output"}),"\n",(0,i.jsx)(n.h2,{id:"step-5---publish-junit-test-results-in-jenkins",children:"Step 5 - Publish JUnit Test Results in Jenkins"}),"\n",(0,i.jsx)(n.p,{children:"Now that we're receiving JUnit data from API Fortress in Jenkins, we need to publish the data so that we can use it further downstream."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Click "Add Post-Build Action"'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Then click "Publish JUnit Data"'}),"\n",(0,i.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/junit.gif"),alt:"JUnit Gif"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the new window, enter the same filename that we saved our JUnit data to in the API call in the previous step."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Now, we\u2019ve enabled Jenkins to execute API Fortress tests and receive the test data in JUnit format. Next, we\u2019re going to allow it to pass this data on to Zephyr."}),"\n",(0,i.jsx)(n.h2,{id:"step-6---exporting-data-to-zephyr",children:"Step 6 - Exporting Data to Zephyr"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Click "Add Post-Build Action"'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Select "Publish Test Results to Zephyr Enterprise."\nSince we configured the Zephyr plugin in step 2, Zephyr information should populate automatically from your Zephyr Enterprise instance.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Select the project, release and cycle of your choice and save the build."}),"\n",(0,i.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/Screen-Shot-2018-05-29-at-10.30.05-AM.png"),alt:"Screen Shot"}),"\n",(0,i.jsx)(n.p,{children:"Test data will now export to Zephyr every time this project is built."}),"\n",(0,i.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/05/Screen-Shot-2018-05-29-at-10.31.14-AM.png"),alt:"Screen Shot"}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);