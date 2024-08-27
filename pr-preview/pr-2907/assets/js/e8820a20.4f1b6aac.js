"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[39289],{61822:(e,t,s)=>{s.r(t),s.d(t,{Highlight:()=>h,assets:()=>u,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=s(74848),i=s(28453),a=s(86025),r=s(11470),o=s(19365);const l={id:"test-annotation",title:"Test Annotation",sidebar_label:"Test Annotation",keywords:["update RDC job","update real device","update device job"]},c=void 0,d={id:"basics/test-config-annotation/test-annotation",title:"Test Annotation",description:"Test annotation refers to adding information to your tests, such as a name, build number, tag, and pass/fail status. These annotations are useful for managing your tests and builds (for example, when filtering tests in your Test Results).",source:"@site/docs/basics/test-config-annotation/test-annotation.md",sourceDirName:"basics/test-config-annotation",slug:"/basics/test-config-annotation/test-annotation",permalink:"/sauce-docs/pr-preview/pr-2907/basics/test-config-annotation/test-annotation",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/test-config-annotation/test-annotation.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724771321e3,frontMatter:{id:"test-annotation",title:"Test Annotation",sidebar_label:"Test Annotation",keywords:["update RDC job","update real device","update device job"]},sidebar:"docs",previous:{title:"Test Configuration",permalink:"/sauce-docs/pr-preview/pr-2907/basics/test-config-annotation/test-config"},next:{title:"Getting Started",permalink:"/sauce-docs/pr-preview/pr-2907/basics/integrations-overview"}},u={},h=({children:e,color:t})=>{const s={span:"span",...(0,i.R)()};return(0,n.jsx)(s.span,{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:e})},m=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Selenium JavaScript Executor",id:"selenium-javascript-executor",level:2},{value:"Basic Example",id:"basic-example",level:3},{value:"Methods",id:"methods",level:3},{value:"Setting Pass/Fail",id:"setting-passfail",level:3},{value:"Code Example",id:"code-example",level:3},{value:"Providing Context for Selenium or Appium Commands",id:"providing-context-for-selenium-or-appium-commands",level:3},{value:"Code Example",id:"code-example-1",level:4},{value:"Sauce Labs REST API",id:"sauce-labs-rest-api",level:2},{value:"Desired Capabilities for Annotation",id:"desired-capabilities-for-annotation",level:2},{value:"Examples",id:"examples",level:3},{value:"Setting Job Info with cURL for OS X/Linux",id:"setting-job-info-with-curl-for-os-xlinux",level:4},{value:"Setting Job Info with cURL for Windows",id:"setting-job-info-with-curl-for-windows",level:4},{value:"Setting Job Info Using JSON",id:"setting-job-info-using-json",level:4},{value:"Use Build IDs, Tags, and Names to Identify Your Tests",id:"use-build-ids-tags-and-names-to-identify-your-tests",level:2},{value:"Code Examples: Build, Tags, and Name",id:"code-examples-build-tags-and-name",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Test annotation refers to adding information to your tests, such as a name, build number, tag, and pass/fail status. These annotations are useful for managing your tests and builds (for example, when filtering tests in your ",(0,n.jsx)(t.a,{href:"/test-results/viewing-test-results/#filtering-and-searching-automated-test-results",children:"Test Results"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["You can add annotations after test execution with our ",(0,n.jsx)(t.a,{href:"/basics/test-config-annotation/test-annotation/#sauce-labs-rest-api",children:"REST API"})," or during test execution with the ",(0,n.jsx)(t.a,{href:"/basics/test-config-annotation/test-annotation/#selenium-javascript-executor",children:"Selenium JavaScript Executor"}),". You can also use ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs-training",children:"sample test frameworks"})," to automatically add annotations to your tests."]}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Sauce Labs account (",(0,n.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,n.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Your Sauce Labs ",(0,n.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"selenium-javascript-executor",children:"Selenium JavaScript Executor"}),"\n",(0,n.jsx)(t.p,{children:"Selenium's JavascriptExecutor lets you use JavaScript commands in your test scripts to perform actions in the browser. We've developed a set of custom JavascriptExecutor methods you can use to annotate tests and record pass/fail status. You can also use these methods to track information in your Selenium log for debugging."}),"\n",(0,n.jsx)(t.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,n.jsx)(t.p,{children:"Here's a Java code sample setting a job's name to \"My test\":"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'((JavascriptExecutor)driver).executeScript("sauce:job-name=My test");\n'})}),"\n",(0,n.jsx)(t.h3,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Appium JS-Executor methods for Real Device Testing in Sauce Labs are limited and are indicated with the following badge: ",(0,n.jsx)("small",{children:(0,n.jsx)("span",{className:"sauceGreen",children:"RDC \u2713"})})]})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Method"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:'"sauce:job-result=passed"'})," ",(0,n.jsx)("small",{children:(0,n.jsx)("span",{className:"sauceGreen",children:"RDC \u2713"})})]}),(0,n.jsxs)(t.td,{children:["Sets the pass/fail status of the job. Options are ",(0,n.jsx)(t.code,{children:"passed"}),", ",(0,n.jsx)(t.code,{children:"failed"}),", ",(0,n.jsx)(t.code,{children:"true"}),", and ",(0,n.jsx)(t.code,{children:"false"}),". ",(0,n.jsx)(t.code,{children:"True"})," means passed and ",(0,n.jsx)(t.code,{children:"false"})," means failed."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:'"sauce:job-name=My awesome job"'})," ",(0,n.jsx)("small",{children:(0,n.jsx)("span",{className:"sauceGreen",children:"RDC \u2713"})})]}),(0,n.jsx)(t.td,{children:"Sets the job name"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"sauce:job-tags=tag1,tag2,tag3"'})}),(0,n.jsx)(t.td,{children:"Sets the job tags in a comma-separated list."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"sauce:job-build=mybuild123"'})}),(0,n.jsx)(t.td,{children:"Sets the job\u2019s build name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:'"sauce: stop network"'}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:'"sauce: start network"'})]}),(0,n.jsx)(t.td,{children:"Stops and restart the VM\u2019s network connection (Mac OSX only)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:'"sauce: disable log"'}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:'"sauce: enable log"'})]}),(0,n.jsxs)(t.td,{children:["Turns off logging for certain commands within the test in order to omit sensitive data from the ",(0,n.jsx)(t.code,{children:"log.json"})," file; then re-enables logging.",(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"NOTE"}),": This method does not omit the commands from other possible records."]})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"sauce: break"'})}),(0,n.jsx)(t.td,{children:"Sets a Sauce breakpoint in the test. Test execution will pause at this point, waiting for manual control by clicking in the test\u2019s live video."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"\"sauce:context=This line appears in the command list as 'info'\""})," ",(0,n.jsx)("small",{children:(0,n.jsx)("span",{className:"sauceGreen",children:"RDC \u2713"})})]}),(0,n.jsx)(t.td,{children:"Logs the given line in the job\u2019s Selenium commands list."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"\"sauce:job-info={'build':'mybuild','name':'my test name', 'public':'team}\""})}),(0,n.jsx)(t.td,{children:"Sets one or more job information fields to the values sent in the JSON-formatted dictionary."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:'"sauce:inject-image=[base64_encoded_image]"'})," ",(0,n.jsx)("small",{children:(0,n.jsx)("span",{className:"sauceGreen",children:"RDC \u2713"})})]}),(0,n.jsx)(t.td,{children:"Points to file for testing image injection (e.g., barcode scanning)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"sauce:performanceEnable"'})}),(0,n.jsx)(t.td,{children:"Allows performance metrics to be collected."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"mobile:deepLink"'})}),(0,n.jsxs)(t.td,{children:["Opens the given URL with the default or the given application. This functionality is only available since iOS version 17. The following arguments are supported: ",(0,n.jsx)(t.code,{children:"url"})," (required) The URL to be opened; ",(0,n.jsx)(t.code,{children:"bundleId"})," (optional) The bundle identifier of an application to open the given url with. If not provided then the default application for the given url scheme is going to be used."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"sauce:performanceDisable"'})}),(0,n.jsx)(t.td,{children:"Pauses performance metrics collection."})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Spacing in the methods is sensitive, i.e., some methods require a space following sauce: (",(0,n.jsx)(t.code,{children:"stop"}),", ",(0,n.jsx)(t.code,{children:"start"}),", ",(0,n.jsx)(t.code,{children:"disable"}),", ",(0,n.jsx)(t.code,{children:"enable"}),", ",(0,n.jsx)(t.code,{children:"break"}),", and ",(0,n.jsx)(t.code,{children:"job-info"}),"), while other methods do not."]})}),"\n",(0,n.jsx)(t.h3,{id:"setting-passfail",children:"Setting Pass/Fail"}),"\n",(0,n.jsxs)(t.p,{children:["Setting the pass/fail status of your tests is important for getting the most out of your ",(0,n.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2907/insights",children:"insights"}),", as Selenium has only three built-in states: In Progress, Error, and Complete."]}),"\n",(0,n.jsxs)(t.p,{children:["You should update your tests to record pass/fail status with our ",(0,n.jsx)(t.a,{href:"/basics/test-config-annotation/test-annotation",children:"REST API"})," on completion, using a test framework, or the ",(0,n.jsx)(t.code,{children:"sauce:job-result"})," method."]}),"\n",(0,n.jsx)(t.h3,{id:"code-example",children:"Code Example"}),"\n",(0,n.jsxs)(t.p,{children:["This code is from a sample Java test script using TestNG. You can find the full version in our ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs-sample-test-frameworks/Java-TestNG-Selenium",children:"Test Frameworks repository"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'/**\n      * Method that gets invoked after test.\n      * Dumps browser log and\n      * Closes the browser\n      */\n\n    @AfterMethod\n\n    public void tearDown(ITestResult result) throws Exception {\n\n        //Gets browser logs if available.\n        ((JavascriptExecutor) webDriver.get()).executeScript("sauce:job-result=" + (result.isSuccess() ? "passed" : "failed"));\n        webDriver.get().quit();\n    }\n'})}),"\n",(0,n.jsx)(t.h3,{id:"providing-context-for-selenium-or-appium-commands",children:"Providing Context for Selenium or Appium Commands"}),"\n",(0,n.jsxs)(t.p,{children:["One of the most difficult aspects of troubleshooting Selenium or Appium tests can be matching commands to actions. The ",(0,n.jsx)(t.code,{children:"sauce:context"})," method provides you with a way to inject text into the command log to associate with a specific command, essentially adding a comment."]}),"\n",(0,n.jsx)(t.p,{children:"For example, in the command log on the left, it's hard to immediately see which command is responsible for following a link to the page, which one submitted a comment, and which one asserted that the comment was valid. In the screenshot on the right, each set of commands has been provided with a context."}),"\n",(0,n.jsx)("img",{src:(0,a.A)("img/test-config-js-context1.png"),alt:"Context for Selenium commands - before",width:"250"}),"\n",(0,n.jsx)("img",{src:(0,a.A)("img/test-config-js-context2.png"),alt:"Context for Selenium commands - after",width:"250"}),"\n",(0,n.jsx)(t.h4,{id:"code-example-1",children:"Code Example"}),"\n",(0,n.jsxs)(t.p,{children:["In your ",(0,n.jsx)(t.code,{children:"TestBase.java"})," script, assign a context with each step of the test is set using the ",(0,n.jsx)(t.code,{children:"sauce:context"})," method."]}),"\n",(0,n.jsxs)(t.p,{children:["The following code examples are from the Java-TestNG-Selenium framework in ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs-sample-test-frameworks/Java-TestNG-Selenium",children:"our GitHub repository"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'/**\n      * Method to be invoked after test.\n      * Dumps browser log and\n      * Closes the browser\n      */\n\n    @AfterMethod\n\n    public void tearDown(ITestResult result) throws Exception {\n\n        //Gets browser logs if available.\n        ((JavascriptExecutor) webDriver.get()).executeScript("sauce:job-result=" + (result.isSuccess() ? "passed" : "failed"));\n        webDriver.get().quit();\n    }\n\n    protected void annotate(String text) {\n        ((JavascriptExecutor) webDriver.get()).executeScript("sauce:context=" + text);\n    }\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"In your test script, specify the text you want associated with each step of the test:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'public class TextInputTest extends TestBase {\n\n    /**\n      * Runs a simple test verifying if the comment input is functional.\n      * @throws InvalidElementStateException\n      */\n\n    @org.testng.annotations.Test(dataProvider = "hardCodedBrowsers")\n    public void verifyCommentInputTest(String browser, String version, String os, Method method)\n            throws MalformedURLException, InvalidElementStateException, UnexpectedException {\n        this.createDriver(browser, version, os, method.getName());\n        WebDriver driver = this.getWebDriver();\n\n\n        String commentInputText = UUID.randomUUID().toString();\n        this.annotate("Visiting GuineaPig page...");\n        GuineaPigPage page = GuineaPigPage.visitPage(driver);\n\n\n        this.annotate(String.format("Submitting comment: \\"%s\\"", commentInputText));\n        page.submitComment(commentInputText);\n\n        this.annotate(String.format("Asserting submitted comment is: \\"%s\\"", commentInputText));\n        Assert.assertTrue(page.getSubmittedCommentText().contains(commentInputText));\n\n    }\n'})}),"\n",(0,n.jsx)(t.h2,{id:"sauce-labs-rest-api",children:"Sauce Labs REST API"}),"\n",(0,n.jsx)("p",{children:(0,n.jsx)("span",{className:"sauceGreen",children:"Virtual Devices Only"})}),"\n",(0,n.jsxs)(t.p,{children:["You can manage your tests more effectively from your Dashboard with annotations. The Sauce Labs REST API includes an ",(0,n.jsx)(t.a,{href:"/dev/api/jobs/#update-a-job",children:"update_job"})," method that you can use to set a name, tags, pass/fail status, and custom data for your test after it runs. To automate test annotation with this method, you'll want to create a simple set of functions to perform the put request for you."]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Sauce Labs REST API Examples"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/saucelabs/saucerest-java",children:"Java"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://gist.github.com/1644439",children:"Python"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://gist.github.com/DylanLacey/5218959",children:"Ruby"})}),"\n"]})]}),"\n",(0,n.jsx)(t.admonition,{title:"Adding Pass/Fail Status and Build Numbers to Test Results with Frameworks",type:"note",children:(0,n.jsxs)(t.p,{children:["In addition to using the REST API to set these annotations once your test completes, you can use ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs-training",children:"one of the Sauce Labs test framework examples"})," to set these and other annotations for you automatically as part of the test execution."]})}),"\n",(0,n.jsx)(t.h2,{id:"desired-capabilities-for-annotation",children:"Desired Capabilities for Annotation"}),"\n",(0,n.jsxs)(t.p,{children:["You can set the following ",(0,n.jsx)(t.a,{href:"/basics/test-config-annotation/test-config",children:"test configuration options"})," to keep track of your jobs:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Option"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Key"}),(0,n.jsx)(t.th,{children:"Value Type"}),(0,n.jsx)(t.th,{children:"Example"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Test Names"}),(0,n.jsx)(t.td,{children:"Used to record test names for jobs and make it easier to find individual tests"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"name"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"name" : "my example name"'})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Build Numbers"}),(0,n.jsx)(t.td,{children:"Used to associate jobs with a build number or app version, displayed on the Dashboard views"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"build"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"build": "build-1234"'})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tagging"}),(0,n.jsx)(t.td,{children:"User-defined tags for grouping and filtering jobs in the Dashboard"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"tags"})}),(0,n.jsx)(t.td,{children:"list"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"tags": ["tag1","tag2","tag3"]'})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Pass/Fail Status"}),(0,n.jsxs)(t.td,{children:["Selenium and Appium handle sending commands to control a browser or app, but don't report to the server whether a test passed or failed. To record pass/fail status on Sauce, set the passed flag on the job.",(0,n.jsx)("br",{}),"Since you can't know in advance whether a test passed or failed, this flag can't be set in the initial configuration."]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"passed"})}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"passed": "true"'})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Custom Data"}),(0,n.jsx)(t.td,{children:"User-defined custom data that will accept any valid JSON object, limited to 64KB in size."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"customData"})}),(0,n.jsx)(t.td,{children:"object"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"customData": {"release": "1.0", "commit": "0k392a9dkjr", "staging": true, "execution_number": 5, "server": "test.customer.com"}'})})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.h4,{id:"setting-job-info-with-curl-for-os-xlinux",children:"Setting Job Info with cURL for OS X/Linux"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"curl -X PUT \\\n-s -d '{\"passed\": true}' \\\n-u YOUR_USERNAME:YOUR_ACCESS_KEY \\\nhttps://saucelabs.com/rest/v1/YOUR_USERNAME/jobs/YOUR_JOB_ID\n"})}),"\n",(0,n.jsx)(t.h4,{id:"setting-job-info-with-curl-for-windows",children:"Setting Job Info with cURL for Windows"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'curl -X PUT\n-s -d "{\\"passed\\": true}"\n-u YOUR_USERNAME:YOUR_ACCESS_KEY\nhttps://saucelabs.com/rest/v1/YOUR_USERNAME/jobs/YOUR_JOB_ID\n'})}),"\n",(0,n.jsx)(t.h4,{id:"setting-job-info-using-json",children:"Setting Job Info Using JSON"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'{\n      "name": "my job name",\n      "passed": true,\n      "public": "public",\n      "tags": ["tag1", "tag2", "tag3"],\n      "build": 234,\n      "customData": {\n          "release": "1.0",\n          "s erver": "test.customer.com"\n      }\n  }\n'})}),"\n",(0,n.jsx)(t.h2,{id:"use-build-ids-tags-and-names-to-identify-your-tests",children:"Use Build IDs, Tags, and Names to Identify Your Tests"}),"\n",(0,n.jsx)(t.p,{children:"By assigning unique attributes (such as test name, tags, and build ID) in your test capabilities, you can then apply these annotations to filter results on your Sauce Labs Test Results and Archive pages. Although not required, following this best practice can make it easier to monitor tests and builds in your CI pipeline."}),"\n",(0,n.jsx)(t.p,{children:"You can set these capabilities to be any combination of letters and numbers. To differentiate between builds, it's also a good practice to add a timestamp or CI job/build number at the end of your build tag."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"While it's technically possible to use the same build name for multiple test runs, this will cause all of your test results to appear incorrectly as part of a single run. This, in turn, will cause your test results for those builds to be inaccurate."})}),"\n",(0,n.jsx)(t.h3,{id:"code-examples-build-tags-and-name",children:"Code Examples: Build, Tags, and Name"}),"\n",(0,n.jsxs)(r.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C#",value:"c#"},{label:"Node.js",value:"nodejs"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"}],children:[(0,n.jsx)(o.A,{value:"java",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'String username = System.getenv("SAUCE_USERNAME");\nString accessKey = System.getenv("SAUCE_ACCESS_KEY");\nMutableCapabilities sauceOptions = new MutableCapabilities();\nsauceOptions.setCapability("name", "Web Driver demo Test");\nsauceOptions.setCapability("tags", "tag1");\nsauceOptions.setCapability("build", "build-1234");\nsauceOptions.setCapability("username", username);\nsauceOptions.setCapability("accessKey", accessKey);\n\nFirefoxOptions firefoxOptions = new FirefoxOptions();\nfirefoxOptions.setCapability("sauce:options", sauceOptions);\nfirefoxOptions.setCapability("platformName", "Windows 10");\nfirefoxOptions.setCapability("browserVersion", "79.0");\nWebDriver driver = new RemoteWebDriver(new URL("https://ondemand.us-west-1.saucelabs.com/wd/hub"), firefoxOptions);\n'})})}),(0,n.jsx)(o.A,{value:"c#",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'string _sauceUsername = Environment.GetEnvironmentVariable("SAUCE_USERNAME", EnvironmentVariableTarget.User);\nstring _sauceAccessKey = = Environment.GetEnvironmentVariable("SAUCE_ACCESS_KEY", EnvironmentVariableTarget.User);\nvar sauceOptions = new Dictionary<string, object>\n{\n    ["username"] = _sauceUsername,\n    ["accessKey"] = _sauceAccessKey,\n    ["name"] = "Web Driver demo Test",\n    ["build"] = "build-1234",\n    ["tags"] = "tag1"\n};\nvar firefoxOptions = new FirefoxOptions()\n{\n    BrowserVersion = "79.0",\n    PlatformName = "Windows 10",\n    UseSpecCompliantProtocol = true\n};\nfirefoxOptions.AddAdditionalCapability("sauce:options", sauceOptions, true);\nIWebDriver driver = new RemoteWebDriver(new Uri("https://ondemand.us-west-1.saucelabs.com/wd/hub"), firefoxOptions.ToCapabilities(), TimeSpan.FromSeconds(600));\n'})})}),(0,n.jsx)(o.A,{value:"nodejs",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const username = process.env.SAUCE_USERNAME\nconst accessKey = process.env.SAUCE_ACCESS_KEY\nconst tags = ['tag1', 'tag2', 'tag3']\nconst driver = new webdriver.Builder()\n.withCapabilities({\nbrowserName: 'firefox',\nplatform: 'Windows 10',\nversion: '79.0',\n'sauce:options': {\nname: 'Web Driver demo Test',\nbuild: 'build-1234',\ntags: tags,\nusername: username,\naccessKey: accessKey\n}\n})\n.usingServer('https://ondemand.us-west-1.saucelabs.com:443/wd/hub')\n.build()\n"})})}),(0,n.jsx)(o.A,{value:"python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'sauce_username = os.environ["SAUCE_USERNAME"]\nsauce_access_key = os.environ["SAUCE_ACCESS_KEY"]\nsauceOptions = {\n    "build": "build-1234",\n    \u201cname\u201d: \u201cWeb Driver demo Test\u201d,\n    \u201ctags\u201d: [ "tag1", "tag2", "tag3" ]\n}\nbrowserOptions =  {\n    \'platformName\':"Windows 10",\n    \'browserName\': "firefox",\n    \'browserVersion\': \'79.0\',\n    \'sauce:options\': sauceOptions\n}\nbrowser = webdriver.Remote(\u201chttps://ondemand.us-west-1.saucelabs.com/wd/hub\u201d, desired_capabilities=browserOptions)\n'})})}),(0,n.jsx)(o.A,{value:"ruby",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"caps = {\n    browser_name: 'firefox',\n    platform_name: 'windows 10',\n    browser_version: '79.0',\n    \"sauce:options\" => {\n        name: 'Web Driver demo Test',\n        build: 'build-1234',\n        tags: 'tag1',\n        username: ENV['SAUCE_USERNAME'],\n        access_key: ENV['SAUCE_ACCESS_KEY']\n    }\n}\ndriver = Selenium::WebDriver.for(:remote,\n    url: 'https://ondemand.us-west-1.saucelabs.com:443/wd/hub',\n    desired_capabilities: caps)\n"})})})]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>r});s(96540);var n=s(18215);const i={tabItem:"tabItem_Ymn6"};var a=s(74848);function r(e){let{children:t,hidden:s,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,r),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>y});var n=s(96540),i=s(18215),a=s(23104),r=s(56347),o=s(205),l=s(57485),c=s(31682),d=s(89466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:i}}=e;return{value:t,label:s,attributes:n,default:i}}))}(s);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function m(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:s}=e;const i=(0,r.W6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function x(e){const{defaultValue:t,queryString:s=!1,groupId:i}=e,a=h(e),[r,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,u]=p({queryString:s,groupId:i}),[x,b]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,d.Dv)(s);return[i,(0,n.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:i}),j=(()=>{const e=c??x;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=s(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function g(e){let{className:t,block:s,selectedValue:n,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,s=l.indexOf(t),i=o[s].value;i!==n&&(c(t),r(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":s},t),children:o.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,i.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function v(e){let{lazy:t,children:s,selectedValue:i}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=x(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,f.jsx)(g,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function y(e){const t=(0,b.A)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var n=s(96540);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);