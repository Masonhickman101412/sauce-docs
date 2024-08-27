"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[36964],{68281:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=s(74848),t=s(28453),r=(s(86025),s(11470)),i=s(19365);const l={id:"azure",title:"Sauce Labs with Azure DevOps",sidebar_label:"Azure"},o=void 0,u={id:"basics/integrations/azure",title:"Sauce Labs with Azure DevOps",description:"Azure DevOps (formerly Visual Studio Team Services or VSTS) is a Microsoft product that provides version control, reporting, requirements management, project management, automated builds, testing and release management capabilities.",source:"@site/docs/basics/integrations/azure.md",sourceDirName:"basics/integrations",slug:"/basics/integrations/azure",permalink:"/sauce-docs/pr-preview/pr-2905/basics/integrations/azure",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/integrations/azure.md",tags:[],version:"current",lastUpdatedBy:"mmerrell",lastUpdatedAt:1680552517e3,frontMatter:{id:"azure",title:"Sauce Labs with Azure DevOps",sidebar_label:"Azure"},sidebar:"docs",previous:{title:"GitLab",permalink:"/sauce-docs/pr-preview/pr-2905/basics/integrations/gitlab"},next:{title:"Jenkins",permalink:"/sauce-docs/pr-preview/pr-2905/basics/integrations/jenkins"}},c={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Using Azure DevOps",id:"using-azure-devops",level:2},{value:"More Information",id:"more-information",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Azure DevOps (formerly Visual Studio Team Services or VSTS) is a Microsoft product that provides version control, reporting, requirements management, project management, automated builds, testing and release management capabilities."}),"\n",(0,a.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["A Sauce Labs account (",(0,a.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,a.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["Your Sauce Labs ",(0,a.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,a.jsx)(n.li,{children:"An existing Azure DevOps pipeline"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"using-azure-devops",children:"Using Azure DevOps"}),"\n",(0,a.jsx)(n.p,{children:"Follow the instructions below to integrate Sauce Labs testing into your Azure pipeline."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Sign in to your Azure DevOps organization and go to your project."}),"\n",(0,a.jsxs)(n.li,{children:["Go to ",(0,a.jsx)(n.strong,{children:"Pipelines"})," > ",(0,a.jsx)(n.strong,{children:"New pipeline"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Link the new pipeline to your repository (see ",(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/",children:"Azure Pipelines Documentation"})," for guidance). You'll likely need to provide permissions for Azure Pipelines to access your repository management system."]}),"\n",(0,a.jsxs)(n.li,{children:["Set your ",(0,a.jsx)(n.a,{href:"https://ultimateqa.com/tfs-vsts-and-azure-devops/#1_Setup_your_username_and_access_key_in_ADO",children:"Sauce Labs username and access key as environment variables"})," in your pipeline by clicking ",(0,a.jsx)(n.strong,{children:"Pipeline"})," > ",(0,a.jsx)(n.strong,{children:"Variables"}),", and then pasting the values of your username and access key."]}),"\n",(0,a.jsx)(n.li,{children:"In your source code, you'll need to reference the Sauce Labs environment variables that you set in Azure DevOps. For example:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",metastring:'title="C# example"',children:'var sauceUserName = Environment.GetEnvironmentVariable("SAUCE_USERNAME");\nvar sauceAccessKey = Environment.GetEnvironmentVariable("SAUCE_ACCESS_KEY");\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"6",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a YAML file using one of the templates below. You'll also need to reference your Sauce Labs environment variables here."}),"\n",(0,a.jsxs)(r.A,{defaultValue:"node.js",values:[{label:"Node.js",value:"node.js"},{label:"Java",value:"java"},{label:"C#",value:"C#"}],children:[(0,a.jsx)(i.A,{value:"node.js",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:"trigger:\n- main\n\npool:\n  vmImage: ubuntu-latest\n\n# Multiple pipelines can re-use variables\n# that are stored in a variable group\nvariables:\n- group: sauce-labs-variables\n\nsteps:\n- task: NodeTool@0\n  inputs:\n    versionSpec: '14.x'\n  displayName: 'Install Node.js'\n\n- script: |\n# Navigate to the working directory\n   cd ./webdriverio/webdriver/examples/w3c/\n# Install node packages\n   npm install\n# Run tests on Sauce and enables a high level of logging for CI\n   npm run test.saucelabs.us -- --logLevel \"debug\"\n|\n\n env:\n   # Reads the value from 'sauceUsername' in Azure DevOps and\n   # stores it into SAUCE_USERNAME env variable\n   SAUCE_USERNAME: $(sauceUsername)\n   SAUCE_ACCESS_KEY: $(sauceAccessKey)\n displayName: 'install and run WebdriverIO tests in Sauce Labs'\n"})})}),(0,a.jsx)(i.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# Build your Java project and run tests with Apache Maven.\ntrigger:\n\u2013 main\npr:\n\u2013 main\n\npool:\n  vmImage: 'ubuntu-latest'\n\n# Sets the environment variables for the pipeline.\n# We create a variable sauce_user and assign it a value of $(SAUCE_USERNAME), which comes from the Azure DevOps.\nvariables:\n\u2013 name: sauce_user\n  value: $(SAUCE_USERNAME)\n\u2013 name: sauce_key\n  value: $(SAUCE_ACCESS_KEY)\n\nsteps:\n\u2013 bash: echo $SAUCE_USER\n\u2013 bash: echo $SAUCE_KEY\n\n# Builds and runs the tests in the Maven project.\n\u2013 task: Maven@3\n  inputs:\n    mavenPomFile: 'pom.xml'\n    mavenOptions: '-Xmx3072m'\n    javaHomeOption: 'JDKVersion'\n    jdkVersionOption: '1.8'\n    jdkArchitectureOption: 'x64'\n    publishJUnitResults: true\n    testResultsFiles: '**/surefire-reports/TEST-*.xml'\n    goals: 'package'\n"})})}),(0,a.jsx)(i.A,{value:"C#",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"pool:\n  name: Hosted VS2017\n  demands:\n  \u2013 msbuild\n  \u2013 visualstudio\n  \u2013 vstest\n\nsteps:\n\u2013 script: set\n  displayName: print all variables\n\u2013 task: NuGetToolInstaller@0\n  displayName: 'Use NuGet 4.4.1'\n  inputs:\n    versionSpec: 4.4.1\n\n\u2013 task: NuGetCommand@2\n  displayName: 'NuGet restore'\n  inputs:\n    restoreSolution: '**\\*.sln'\n\n\u2013 task: VSBuild@1\n  displayName: 'Build solution'\n  inputs:\n    solution: '**\\*.sln'\n    msbuildArgs: '/p:DeployOnBuild=true /p:WebPublishMethod=Package /p:PackageAsSingleFile=true /p:SkipInvalidConfigurations=true /p:DesktopBuildPackageLocation=\"$(build.artifactstagingdirectory)\\WebApp.zip\" /p:DeployIisAppPath=\"Default Web Site\"'\n    logProjectEvents: true\n\n\u2013 task: PowerShell@2\n  displayName: 'Set Sauce Environment Variables'\n  inputs:\n    targetType: filePath\n    filePath: ./setEnvironmentVariables.ps1\n    arguments: '$env:SAUCE_USER $env:SAUCE_KEY'\n\n# Using powershell ##vso command to set an environment variable in the system\n\u2013 powershell: |\n    Write-Host \"Sauce Username stored in Azure DevOps variables is=>$($env:SAUCE_USER)\";\n    Write-Host \"Sauce Access Key stored in Azure DevOps variables is=>$($env:SAUCE_KEY)\";\n    Write-Host \"Sauce Username stored in Env variables is=>$($env:SAUCE_USERNAME)\";\n    Write-Host \"Sauce Access Key stored in Env variables is=>$($env:SAUCE_ACCESS_KEY)\";\n    Write-Host \"Sauce Build Repository URI stored in Env variables is=>$($env:BUILD_REPOSITORY_URI)\";\n|\n\n # Checking to make sure that environment variables were set between yml tasks\n \u2013 powershell: |\n     Write-Host \"Sauce Username stored in Env Variables variables is=>$($env:SAUCE_USERNAME)\";\n     Write-Host \"Sauce Access Key stored in Azure DevOps variables is=>$($env:SAUCE_ACCESS_KEY)\";\n displayName: display env variables bw posh tasks\n\n \u2013 task: VSTest@2\n   displayName: 'Run Best Practices Framework'\n   inputs:\n     searchFolder: '$(System.DefaultWorkingDirectory)'\n     testSelector: 'testAssemblies'\n     testAssemblyVer2: |\n       **\\*Selenium*.dll\n      !**\\SauceExamples\\packages\\*.dll\n      !**\\packages\\*.dll\n     testFiltercriteria: 'TestCategory=BestPractices'\n     runInParallel: true\n     codeCoverageEnabled: true\n     testRunTitle: 'NUnit Automation Framework'\n     rerunFailedTests: true\n     rerunFailedThreshold: 10\n     rerunMaxAttempts: 2\n     failOnMinTestsNotRun: true\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://ultimateqa.com/tfs-vsts-and-azure-devops/",children:"Sauce Labs Testing with Azure DevOps"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/?view=azure-devops",children:"Azure DevOps Pipelines documentation"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/azure/devops/pipelines/languages/javascript",children:"Build JavaScript and Node.js apps"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/azure/devops/pipelines/languages/java",children:"Build Java apps"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/apps/aspnet/build-aspnet-4?view=azure-devops",children:"Build ASP.NET apps with .NET Framework"})}),"\n"]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var a=s(18215);const t={tabItem:"tabItem_Ymn6"};var r=s(74848);function i(e){let{children:n,hidden:s,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,i),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>x});var a=s(96540),t=s(18215),r=s(23104),i=s(56347),l=s(205),o=s(57485),u=s(31682),c=s(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:t}}=e;return{value:n,label:s,attributes:a,default:t}}))}(s);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function m(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:s}=e;const t=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function v(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,r=p(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[u,d]=h({queryString:s,groupId:t}),[v,b]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,c.Dv)(s);return[t,(0,a.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:t}),g=(()=>{const e=u??v;return m({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=s(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function S(e){let{className:n,block:s,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const n=e.currentTarget,s=o.indexOf(n),t=l[s].value;t!==a&&(u(n),i(t))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...r,className:(0,t.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function A(e){let{lazy:n,children:s,selectedValue:t}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function j(e){const n=v(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,f.jsx)(S,{...e,...n}),(0,f.jsx)(A,{...e,...n})]})}function x(e){const n=(0,b.A)();return(0,f.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var a=s(96540);const t={},r=a.createContext(t);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);