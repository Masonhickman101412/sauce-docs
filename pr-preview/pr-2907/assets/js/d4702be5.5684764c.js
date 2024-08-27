"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[91196],{47701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(74848),o=n(28453),i=n(86025);const r={id:"jenkins",title:"Jenkins: Tricentis qTest Integration",sidebar_label:"Jenkins: Tricentis qTest Integration",keywords:["api-testing","integrations","jenkins","tricentis","qTest","enterprise"]},a=void 0,c={id:"api-testing/on-prem/integrations/jenkins",title:"Jenkins: Tricentis qTest Integration",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/integrations/jenkins.md",sourceDirName:"api-testing/on-prem/integrations",slug:"/api-testing/on-prem/integrations/jenkins",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/on-prem/integrations/jenkins",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/integrations/jenkins.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724771321e3,frontMatter:{id:"jenkins",title:"Jenkins: Tricentis qTest Integration",sidebar_label:"Jenkins: Tricentis qTest Integration",keywords:["api-testing","integrations","jenkins","tricentis","qTest","enterprise"]},sidebar:"apif",previous:{title:"Helper \u2013 Connect to Any Database",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/on-prem/integrations/helper-databases-jdbc"},next:{title:"SSO / SAML 2.0 (beta)",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/on-prem/integrations/single-sign-on-with-saml-2-0-beta"}},l={},d=[{value:"Install Jenkins Plugins (qTest)",id:"install-jenkins-plugins-qtest",level:2},{value:"Integrate API Fortress into your CI/CD Process",id:"integrate-api-fortress-into-your-cicd-process",level:2},{value:"Add API Fortress Step to qTest",id:"add-api-fortress-step-to-qtest",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Legacy Documentation"}),(0,s.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,s.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,s.jsx)(t.p,{children:"The following procedure will allow you to integrate API Fortress test results into your qTest instance. By passing JUnit test data through Jenkins and into qTest, your API Fortress test results can be visible in the same space as the rest of your tests."}),"\n",(0,s.jsx)(t.h2,{id:"install-jenkins-plugins-qtest",children:"Install Jenkins Plugins (qTest)"}),"\n",(0,s.jsxs)(t.p,{children:["Log in to your Jenkins account. In order for the qTest integration to work, we need to extend Jenkins with a couple of plugins. First, click \u201c",(0,s.jsx)(t.em,{children:"Manage Jenkins,"}),"\u201d then click \u201c",(0,s.jsx)(t.em,{children:"Manage Plugins"}),".\u201d"]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2018/04/jenkinsAddons-1.gif"),alt:"jenkinsAddons-1.gif"}),"\n",(0,s.jsxs)(t.p,{children:["We\u2019re going to need both the ",(0,s.jsx)(t.em,{children:"qTest"})," plugin, and the ",(0,s.jsx)(t.em,{children:"HTTP Request"})," plugin. To find the plugins, click the ",(0,s.jsx)(t.em,{children:"\u201cAvailable\u201d"})," tab in the Plugins menu and use the filter in the top right corner to search for them. Install both."]}),"\n",(0,s.jsx)(t.h2,{id:"integrate-api-fortress-into-your-cicd-process",children:"Integrate API Fortress into your CI/CD Process"}),"\n",(0,s.jsxs)(t.p,{children:["The first step to integrating API Fortress into your CI/CD process is to grab the generated API hook for the project in question. To do so, head to the Settings panel in API Fortress. This view, seen below, can be accessed from anywhere in the application by clicking the\xa0",(0,s.jsx)(t.em,{children:"Gear"}),"\xa0icon in the top right corner of the screen. Please note you need Manager access to generate a webhook. From Settings, click the API Hooks section and generate the hook for your project."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2018/04/hook.gif"),alt:"hook.gif"}),"\n",(0,s.jsx)(t.p,{children:"The next step depends on what you\u2019re trying to test. The following steps are going to assume that you wish to run all of the tests in a project. You can also run a single test, or a series of tests with a certain tag. If you would like to learn more about that please contact API Fortress."}),"\n",(0,s.jsx)(t.p,{children:"To import our data into qTest via Jenkins, we\u2019ll export it in JUnit format using a query parameter. Since we already have our API hook, we just need to add the parameter to do so."}),"\n",(0,s.jsx)(t.p,{children:"As it stands, our API hook is as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"https://mastiff.apifortress.com/app/api/rest/v3/86f81b19-2d29-4879-91d9-6dbb2271fec0861\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The normal command to run all of the tests in the project, per the API Fortress docs is ",(0,s.jsx)(t.em,{children:"/tests/run-all"}),", so we append this on to the end of the API call. We also need to request JUnit output via query parameters. First, we need to set ",(0,s.jsx)(t.em,{children:"sync"})," to ",(0,s.jsx)(t.em,{children:"true"}),", and then we can set ",(0,s.jsx)(t.em,{children:"format"})," to ",(0,s.jsx)(t.em,{children:"JUnit"}),". In short, we need to append ",(0,s.jsx)(t.code,{children:"?sync=true&format=junit"}),". That gives us the final API call:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"https://mastiff.apifortress.com/app/api/rest/v3/86f81b19-2d29-4879-91d9-6dbb2271fec0861/tests/run-all?sync=true&format=junit\n"})}),"\n",(0,s.jsx)(t.p,{children:"Great! If we make this API call via a browser or a tool like Postman, we can see our results in JUnit. We\u2019re almost there."}),"\n",(0,s.jsx)(t.h2,{id:"add-api-fortress-step-to-qtest",children:"Add API Fortress Step to qTest"}),"\n",(0,s.jsxs)(t.p,{children:["From the Jenkins dashboard, let\u2019s create a New Item. Next, we\u2019re going to name and create a Freestyle Project. Click the ",(0,s.jsx)(t.em,{children:"OK"})," button to proceed."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2018/04/jenkinsSetup.gif"),alt:"jenkinsSetup.gif"}),"\n",(0,s.jsxs)(t.p,{children:["Scroll down the page until you see the \u201c",(0,s.jsx)(t.em,{children:"Add Build Step"}),"\u201d pulldown menu. Select \u201c",(0,s.jsx)(t.em,{children:"HTTP Request"}),".\u201d This option will only be available if you installed the ",(0,s.jsx)(t.em,{children:"HTTP Request"})," plugin in the previous step. We\u2019re going to paste the API call we created above into the URL line."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2018/04/Screen-Shot-2018-04-03-at-10.50.38-AM-2.png"),alt:"Screen-Shot-2018-04-03-at-10.50.38-AM-2.png"}),"\n",(0,s.jsxs)(t.p,{children:["Next, we\u2019re going to click the \u201c",(0,s.jsx)(t.em,{children:"Advanced"}),"\u201d button. Scroll to the bottom of the newly opened view and enter a filename of your choice into the \u201c",(0,s.jsx)(t.em,{children:"Output Response to File\u201d"})," line."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2018/04/Screen-Shot-2018-04-03-at-9.56.58-AM-2.png"),alt:"Screen-Shot-2018-04-03-at-9.56.58-AM-2.png"}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2018/04/Screen-Shot-2018-04-03-at-10.50.38-AM-2.png"),alt:"Screen-Shot-2018-04-03-at-10.50.38-AM-2.png"}),"\n",(0,s.jsx)(t.p,{children:"In the new window, enter the same filename that we saved our JUnit data to in the API call in the previous step."}),"\n",(0,s.jsx)(t.p,{children:"Now, we\u2019ve enabled Jenkins to execute API Fortress tests and receive the test data in JUnit format. Next, we\u2019re going to allow it to pass this data on to qTest."}),"\n",(0,s.jsxs)(t.p,{children:["Click on the \u201c",(0,s.jsx)(t.em,{children:"Add Post-Build Action"}),"\u201d pulldown below the build step we just created and select \u201c",(0,s.jsx)(t.em,{children:"Submit JUnit Test Results to qTest.\u201d"})]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2018/04/Screen-Shot-2-1.png"),alt:"Screen-Shot-2-1.png"}),"\n",(0,s.jsxs)(t.p,{children:["Enter the URL of your qTest instance and your ",(0,s.jsx)(t.a,{href:"https://support.qasymphony.com/hc/en-us/articles/115002955466-Jenkins-and-Bamboo-Integration#11-configure-the-qtest-jenkins-plugin-for-freestyle",children:"qTest \u2013 Jenkins API Key"}),". Click the \u201c",(0,s.jsx)(t.em,{children:"Retrieve Data"}),"\u201d button to populate the next few menus. Select a project, release, and environment (optional) where you want to push the test results. Choose the final options with regards to how you wish the data to be stored in qTest, and click save."]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2018/04/Screen-Shot-3.png"),alt:"Screen-Shot-3.png"}),"\n",(0,s.jsx)(t.p,{children:"From now on, every time you click \u201cBuild Now\u201d with this test, the results will be exported to the qTest Project of your choice automatically."}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/api-fortress/2018/04/manager_APIFortress.png"),alt:"manager_APIFortress.png"})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);