"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[6364],{56276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var i=n(74848),s=n(28453);const o={id:"apif-auto-and-github",title:"Jenkins: APIF-Auto and GitHub",sidebar_label:"APIF-Auto with GitHub",keywords:["cicd","jenkins","apif-auto","github","api-fortress"]},r=void 0,a={id:"api-testing/on-prem/ci/jenkins/apif-auto-and-github",title:"Jenkins: APIF-Auto and GitHub",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/ci/jenkins/apif-auto-and-github.md",sourceDirName:"api-testing/on-prem/ci/jenkins",slug:"/api-testing/on-prem/ci/jenkins/apif-auto-and-github",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/ci/jenkins/apif-auto-and-github",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/ci/jenkins/apif-auto-and-github.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"apif-auto-and-github",title:"Jenkins: APIF-Auto and GitHub",sidebar_label:"APIF-Auto with GitHub",keywords:["cicd","jenkins","apif-auto","github","api-fortress"]},sidebar:"apif",previous:{title:"APIF-Auto",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/ci/jenkins/apif-auto"},next:{title:"Zephyr Enterprise Integration",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/ci/jenkins/zephyr-enterprise-integration"}},c={},p=[];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Legacy Documentation"}),(0,i.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,i.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"APIF-Auto, a command line tool that supports automated API Fortress test execution is an ideal tool for executing API Fortress tests in a Jenkins workflow."}),"\n",(0,i.jsxs)(t.p,{children:["The pipeline script below serves as a template for creating stages in your Jenkins Pipeline for testing your APIs with API Fortress' tests that are stored in Github. If you\u2019d like to take a look at the documentation for APIF-Auto, click ",(0,i.jsx)(t.a,{href:"https://apifortress.com/doc/command-line-tools/",children:"here"}),"."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": It\u2019s important to note that this is an ",(0,i.jsx)(t.strong,{children:"example"})," of a ",(0,i.jsx)(t.code,{children:"Jenkinsfile"})," (Jenkins Pipeline). Experienced Jenkins users are free to configure their workflow as best suits their needs."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"node {\n   def mvnHome\n   stage('Preparation') {\n      git 'https://github.com/theirish81/temp.git'\n   }\n   stage('Build') {\n\n   }\n   stage('API Fortress'){\n       sh 'python /var/jenkins\\_home/apif-auto/apif-push.py jenkins\\_project -r -p testing/apifortress'\n       sh 'mkdir -p target/apifortress'\n       sh 'python /var/jenkins\\_home/apif-auto/apif-run.py run-all jenkins\\_project -S -f junit -o target/apifortress/junit.xml'\n   }\n   stage('Results') {\n      junit '\\*\\*/target/apifortress/junit.xml'\n   }\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"Let's break down what's happening in the script above:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'First, we have the "Preparation" stage, this is where we will define the Github repository where we have the tests stored.'}),"\n",(0,i.jsxs)(t.li,{children:['Next, we have the "API Fortress" stage, where a few things are happening:',"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"sh 'python /var/jenkins_home/apif-auto/apif-push.py jenkins_project -r -p testing/apifortress'"}),' This is the command that will pull the tests from the Github repository we defined in the first step and push them into the API Fortress project "jenkins_project" using the ',(0,i.jsx)(t.code,{children:"apif-push.py"})," tool."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"sh 'mkdir -p target/apifortress'"})," This is the command that will create a directory to store the results from our API Fortress test executions. Remember the ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"-p"})})," flag! It\u2019ll keep the pipeline from overwriting the directory if it already exists in the future."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"sh 'python /var/jenkins_home/apif-auto/apif-run.py run-all jenkins_project -S -f junit -o target/apifortress/junit.xml'"})," This is the command that will execute all the tests we pushed into the ",(0,i.jsx)(t.code,{children:'"jenkins_project"'})," using the ",(0,i.jsx)(t.code,{children:"apif-run.py"})," tool and store the returned junit test results into the directory we created in the previous step."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Finally, we have the ",(0,i.jsx)(t.code,{children:'"Results"'})," stage, where we evaluate the junit results to see if the test passed or failed."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"By using the above workflow, we have a modular method of running API Fortress tests stored in Github in authenticated mode in our Jenkins pipeline."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);