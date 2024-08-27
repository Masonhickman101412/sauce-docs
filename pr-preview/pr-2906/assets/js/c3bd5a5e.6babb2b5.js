"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[50575],{36183:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=i(74848),s=i(28453),a=(i(86025),i(11470)),r=i(19365);const o={id:"configuration",title:"Configuring Your Appium Tests",sidebar_label:"Configuration",description:"Reference the property settings for running Appium mobile app tests in any of our supported environments."},l=void 0,c={id:"mobile-apps/automated-testing/appium/configuration",title:"Configuring Your Appium Tests",description:"Reference the property settings for running Appium mobile app tests in any of our supported environments.",source:"@site/docs/mobile-apps/automated-testing/appium/configuration.md",sourceDirName:"mobile-apps/automated-testing/appium",slug:"/mobile-apps/automated-testing/appium/configuration",permalink:"/sauce-docs/pr-preview/pr-2906/mobile-apps/automated-testing/appium/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/automated-testing/appium/configuration.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"configuration",title:"Configuring Your Appium Tests",sidebar_label:"Configuration",description:"Reference the property settings for running Appium mobile app tests in any of our supported environments."}},d={},p=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Creating an Appium Test",id:"creating-an-appium-test",level:2},{value:"1. Set your app location",id:"1-set-your-app-location",level:3},{value:"2. Create a WebDriver Instance",id:"2-create-a-webdriver-instance",level:3},{value:"<strong>WebDriver Examples</strong>",id:"webdriver-examples",level:4},{value:"3. Locate App Elements",id:"3-locate-app-elements",level:3},{value:"<strong>Best Practices for Identifying Application Elements</strong>",id:"best-practices-for-identifying-application-elements",level:4},{value:"4. Perform Action(s) on the App Elements",id:"4-perform-actions-on-the-app-elements",level:3},{value:"5. Anticipate App Response to the Action",id:"5-anticipate-app-response-to-the-action",level:3},{value:"<strong>Implicit Waits Strategy</strong>",id:"implicit-waits-strategy",level:4},{value:"<strong>Explicit Waits Strategy</strong>",id:"explicit-waits-strategy",level:4},{value:"6. Run Tests and Record Your Results",id:"6-run-tests-and-record-your-results",level:3},{value:"<strong>Test Frameworks</strong>",id:"test-frameworks",level:4},{value:"<strong>Test Assertions</strong>",id:"test-assertions",level:4},{value:"<strong>Recording Test Results</strong>",id:"recording-test-results",level:4},{value:"7. Concluding Your Test",id:"7-concluding-your-test",level:3},{value:"<code>quit</code>\xa0Method",id:"quitmethod",level:4},{value:"Full Example Script",id:"full-example-script",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Sauce Labs supports Appium to test your app on a mobile device in multiple ways:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["On any of a vast library of ",(0,n.jsx)(t.a,{href:"https://docs.saucelabs.com/mobile-apps/automated-testing/appium/real-devices",children:"Android and iOS real devices"})," in our data centers"]}),"\n",(0,n.jsxs)(t.li,{children:["On any of a vast library of [Android emulators or iOS simulators]((",(0,n.jsx)(t.a,{href:"https://docs.saucelabs.com/mobile-apps/automated-testing/appium/virtual-devices",children:"https://docs.saucelabs.com/mobile-apps/automated-testing/appium/virtual-devices"}),") in our cloud"]}),"\n",(0,n.jsx)(t.li,{children:"As a web-app running in any of a wide variety of supported mobile browser/OS combinations"}),"\n",(0,n.jsx)(t.li,{children:"As a native app running on any supported device, emulator, simulator, and OS"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Depending on which combination of environments you wish to apply to your testing, the Appium configurations may be different. This page provides descriptions for the settings that are applicable to each of the testing scenarios support for Appium on Sauce Labs."}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/saucelabs-training/quickstart-appium-java",children:"Sample Tests"})}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs/sample-app-mobile/releases",children:"Swag Labs Sample App"})]}),"\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Sauce Labs Username and Access Key"})]}),"\n",(0,n.jsxs)(t.li,{children:["An IDE such as ",(0,n.jsx)(t.a,{href:"https://www.jetbrains.com/idea/download/#section=mac",children:"IntelliJ IDEA"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://maven.apache.org/install.html",children:"Maven"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"creating-an-appium-test",children:"Creating an Appium Test"}),"\n",(0,n.jsx)(t.p,{children:"Here are the basic steps for creating an Appium test script for your app under test (AUT):"}),"\n",(0,n.jsx)(t.h3,{id:"1-set-your-app-location",children:"1. Set your app location"}),"\n",(0,n.jsxs)(t.p,{children:["When you write an Appium test script, the most basic component is the ",(0,n.jsx)(t.a,{href:"/basics/test-config-annotation/test-annotation",children:"capabilities object"}),". This is where you set your test parameters, such as the mobile platform and operating system you want to test against."]}),"\n",(0,n.jsxs)(t.p,{children:["Within that object, one of the ",(0,n.jsx)(t.a,{href:"/dev/test-configuration-options",children:"required capabilities"})," is the ",(0,n.jsx)(t.code,{children:"app"})," capability: the path to your app (e.g., Sauce Storage, AWS, GitHub). One of the advantages of the Appium architecture is that the app you want to test can be hosted anywhere, from a local path to any other web host on the network, since the Appium server will send the commands it receives from the client to any app path you specify. Practically, you have three options."]}),"\n",(0,n.jsxs)(t.p,{children:["To learn about App Storage on Sauce Labs, ",(0,n.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2906/mobile-apps/app-storage",children:"click here"}),"."]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h3,{id:"2-create-a-webdriver-instance",children:"2. Create a WebDriver Instance"}),"\n",(0,n.jsx)(t.p,{children:"In this step, you'll create an Appium driver instance which points to a running Appium server (e.g., the servers on Sauce Labs). The\xa0WebDriver\xa0instance is the starting point for all uses of the Mobile JSON Wire Protocol."}),"\n",(0,n.jsxs)(t.p,{children:["You'll need to create an instance of the WebDriver interface using a constructor for either Android or iOS. For mobile native app tests, you set both the platform and browser to test against by setting the ",(0,n.jsx)(t.code,{children:"browserName"})," capability."]}),"\n",(0,n.jsx)(t.p,{children:"Once you have created an instance of the\xa0WebDriver\xa0interface, you use this instance to invoke methods, such as tap and swipe, to access other interfaces used in basic test steps. You do so by assigning the instance to a variable when you create it, and by using that variable to invoke methods."}),"\n",(0,n.jsx)(t.h4,{id:"webdriver-examples",children:(0,n.jsx)(t.strong,{children:"WebDriver Examples"})}),"\n",(0,n.jsx)(t.p,{children:"These pseudo-code examples illustrate how to instantiate iOS and Android\xa0WebDriver objects in the various Appium language bindings."}),"\n",(0,n.jsxs)(a.A,{defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Node.js",value:"Node.js"},{label:"Ruby",value:"Ruby"},{label:"C#",value:"C#"}],children:[(0,n.jsxs)(r.A,{value:"Java",children:["Visit the ",(0,n.jsx)(t.a,{href:"https://github.com/appium/java-client",children:"java-client page"})," for more information on the Java Appium language bindings.",(0,n.jsx)(t.strong,{children:"iOS"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'WebDriver driver = new iOSDriver<WebElement>( new URL("https://ondemand.us-west-1.saucelabs.com/wd/hub"), capabilities);\n'})}),(0,n.jsx)(t.strong,{children:"Android"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'WebDriver driver = new AndroidDriver<WebElement>( new URL("https://ondemand.us-west-1.saucelabs.com/wd/hub"), capabilities);\n'})})]}),(0,n.jsxs)(r.A,{value:"Python",children:["Visit the ",(0,n.jsx)(t.a,{href:"https://github.com/appium/python-client",children:"python-client page"})," for more information on the Python Appium language bindings.",(0,n.jsx)(t.strong,{children:"iOS"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-py",children:"desired_caps = {}\ndesired_caps['platformName'] = 'iOS'\ndesired_caps['app'] = PATH('../../apps/MyIOS.app.zip')\nself.driver = webdriver.Remote('https://ondemand.us-west-1.saucelabs.com/wd/hub', desired_caps)\n"})}),(0,n.jsx)(t.strong,{children:"Android"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-py",children:"desired_caps = {}\ndesired_caps['platformName'] = 'Android'\ndesired_caps['app'] = PATH('../../apps/MyIOS.apk')\nself.driver = webdriver.Remote('https://ondemand.us-west-1.saucelabs.com/wd/hub', desired_caps)\n"})})]}),(0,n.jsxs)(r.A,{value:"Node.js",children:["We recommend using the ",(0,n.jsx)(t.a,{href:"https://webdriver.io/",children:"webdriverio testing utility"})," as your WebDriver testing framework for node.js. For more information, refer to the ",(0,n.jsx)(t.a,{href:"https://webdriver.io/docs/gettingstarted/",children:"documentation"}),".",(0,n.jsx)(t.strong,{children:"iOS"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const opts = {\ncapabilities: {\nplatformName: 'iOS',\napp: '/path/to/the/downloaded/MyiOS.app.zip'\n}\n}\n\nconst client = wdio.remote(opts)\n"})}),(0,n.jsx)(t.strong,{children:"Android"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const opts = {\ncapabilities: {\nplatformName: 'Android',\napp: '/path/to/the/downloaded/MyAndroid.apk'\n}\n}\n\nconst client = wdio.remote(opts)\n"})})]}),(0,n.jsxs)(r.A,{value:"Ruby",children:["Visit ",(0,n.jsx)(t.a,{href:"https://github.com/appium/ruby_lib/blob/master/lib/appium_lib/driver.rb",children:"appium_lib"})," for more information about the Ruby Appium language bindings.",(0,n.jsx)(t.strong,{children:"iOS"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ruby",children:"opts = { caps: { platformName: :ios, app: '/path/to/MyiOS.app'}, appium_lib: { wait_timeout: 30 }}\nappium_driver = Appium::Driver.new(opts, true)\nappium_driver.start_driver\n"})}),(0,n.jsx)(t.strong,{children:"Android"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ruby",children:"opts = { caps: { platformName: :android, app: '/path/to/MyAndroid.apk'}, appium_lib: { wait_timeout: 30 }}\nappium_driver = Appium::Driver.new(opts, true)\nappium_driver.start_driver\n"})})]}),(0,n.jsxs)(r.A,{value:"C#",children:["Visit the ",(0,n.jsx)(t.a,{href:"https://github.com/appium/appium-dotnet-driver",children:"appium-dot-net page"})," for more information about the C# Appium language bindings.",(0,n.jsx)(t.strong,{children:"iOS"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-CS",children:'var sauceURL = "https://ondemand.us-west-1.saucelabs.com";\nvar driver = new IOSDriver<IWebElement>(new Uri(sauceURL));\n'})}),(0,n.jsx)(t.strong,{children:"Android"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-CS",children:'var sauceURL = "https://ondemand.us-west-1.saucelabs.com";\nvar driver = new AndroidDriver<IWebElement>(new Uri(sauceURL));\n'})})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h3,{id:"3-locate-app-elements",children:"3. Locate App Elements"}),"\n",(0,n.jsx)(t.p,{children:"Next, locate an element within your app, such as a login button or a link.\nIn order to find elements in a mobile environment, Appium implements a number of locator strategies that are specific to, or adaptations for, the particulars of a mobile device.\xa0Three are available for both Android and iOS:"}),"\n",(0,n.jsxs)(a.A,{defaultValue:"accessibility ID",values:[{label:"accessibility ID",value:"accessibility ID"},{label:"class name",value:"class name"},{label:"id",value:"id"},{label:"xpath",value:"xpath"}],children:[(0,n.jsxs)(r.A,{value:"accessibility ID",children:["The\xa0",(0,n.jsx)(t.code,{children:"accessibility ID"}),"\xa0locator strategy is designed to read a unique identifier for a UI element. This has the benefit of not changing during localization or any other process that might change text. In addition, it can be an aid in creating cross-platform tests, if elements that are functionally the same have the same accessibility id.",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["For iOS, this is the\xa0accessibility identifier\xa0laid out by Apple\xa0",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/uikit/uiaccessibilityidentification",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["For Android, the\xa0accessibility id\xa0maps to the\xa0content-description\xa0for the element, as described\xa0",(0,n.jsx)(t.a,{href:"https://developer.android.com/guide/topics/ui/accessibility/apps",children:"here"}),"."]}),"\n"]}),"For both platforms getting an element, or multiple elements, by their\xa0accessibility id\xa0is usually the best method. It is also the preferred way, in replacement of the deprecated\xa0name\xa0strategy.","The client libraries specific to Appium support getting elements by\xa0",(0,n.jsx)(t.code,{children:"accessibility id"}),".",(0,n.jsx)(t.strong,{children:"Example"}),":",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-py",children:"driver.find_element_by_accessibility_id('my_accessibility_identifier')\n"})})]}),(0,n.jsxs)(r.A,{value:"class name",children:["The\xa0",(0,n.jsx)(t.code,{children:"class name"}),"\xa0strategy is a\xa0string\xa0representing a UI element on the current view.",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["For iOS, it is the full name of a\xa0",(0,n.jsx)(t.a,{href:"https://help.apple.com/instruments/mac/current/",children:"UIAutomation\xa0class"}),". It will begin with\xa0UIA-, such as\xa0",(0,n.jsx)(t.code,{children:"UIATextField"}),"\xa0for a text field. A full reference can be found\xa0",(0,n.jsx)(t.a,{href:"https://developer.apple.com/library/archive/navigation/#section=Frameworks&topic=UIAutomation",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["For Android, it is the fully qualified name of a\xa0",(0,n.jsx)(t.a,{href:"https://developer.android.com/training/testing#UIAutomator",children:"UI Automator\xa0class"}),", such\xa0",(0,n.jsx)(t.code,{children:"android.widget.EditText"}),"\xa0for a text field. A full reference can be found\xa0",(0,n.jsx)(t.a,{href:"https://developer.android.com/reference/android/widget/package-summary.html",children:"here"}),"."]}),"\n"]}),"The client libraries for Appium support getting a single element, or multiple elements, based on the\xa0class name. This functionality is in the Selenium clients (e.g.,\xa0",(0,n.jsx)(t.a,{href:"https://selenium-python.readthedocs.io/locating-elements.html#locating-elements-by-class-name",children:"Python"}),").",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-py",children:"driver.find_element_by_class_name('android.widget.DatePicker')\n"})})]}),(0,n.jsxs)(r.A,{value:"id",children:["In the mobile environment,\xa0",(0,n.jsx)(t.code,{children:"id"}),"s are not, as in WebDriver, CSS ids, but rather some form of native identifier.",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["For iOS, the situation is complicated. Appium will first search for an\xa0",(0,n.jsx)(t.code,{children:"accessibility id"}),"\xa0that matches. If none are found, a string match will be attempted on the element labels. Finally, if the ",(0,n.jsx)(t.code,{children:"id"})," passed in is a localization key, it will search the localized string."]}),"\n",(0,n.jsxs)(t.li,{children:["For Android, the\xa0",(0,n.jsx)(t.code,{children:"id"}),"\xa0is the element\u2019s\xa0",(0,n.jsx)(t.code,{children:"android:id"}),"."]}),"\n"]}),"This example below invokes the ",(0,n.jsx)(t.code,{children:"findElement"})," method on the driver variable, using the name attribute to locate the ",(0,n.jsx)(t.code,{children:"username"})," and ",(0,n.jsx)(t.code,{children:"password"})," text input elements, and (optionally) the ",(0,n.jsx)(t.code,{children:"id"})," attribute to locate the form element.",(0,n.jsx)(t.strong,{children:"Example"}),":",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'import org.openqa.selenium.By;\nimport org.openqa.selenium.WebElement;\nWebElement emailInput = driver.findElement(By.id("fbemail"));\n'})})]}),(0,n.jsxs)(r.A,{value:"xpath",children:["The\xa0",(0,n.jsx)(t.code,{children:"xpath"}),"\xa0locator strategy is also available in the WebDriver protocol, and exposes the functionality of\xa0",(0,n.jsx)(t.a,{href:"https://www.w3.org/TR/xpath20/",children:"XPath\xa0language"})," to locate elements within a mobile view. An XML representation of the view is created in Appium, and searches are made against that image.","The Selenium clients have methods for retrieving elements using the\xa0",(0,n.jsx)(t.code,{children:"xpath"}),"\xa0locator strategy.",(0,n.jsx)(t.strong,{children:"Example"}),":",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-py",children:"driver.find_element_by_xpath('//UIAApplication[1]/UIAWindow[1]/UIATextField[1]')\n"})})]})]}),"\n",(0,n.jsx)(t.h4,{id:"best-practices-for-identifying-application-elements",children:(0,n.jsx)(t.strong,{children:"Best Practices for Identifying Application Elements"})}),"\n",(0,n.jsxs)(t.p,{children:["We recommend using an element locator that uniquely identifies the element, like an ",(0,n.jsx)(t.code,{children:"id"})," or an ",(0,n.jsx)(t.code,{children:"accessibility id"}),". ",(0,n.jsx)(t.code,{children:"class name"})," and ",(0,n.jsx)(t.code,{children:"xpath"})," are best used only when IDs are not available."]}),"\n",(0,n.jsxs)(t.p,{children:["Multiple elements can have the same ",(0,n.jsx)(t.code,{children:"class name"}),", and using ",(0,n.jsx)(t.code,{children:"xpath"})," searches through the entire markup to find the element, which can slow down your tests."]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h3,{id:"4-perform-actions-on-the-app-elements",children:"4. Perform Action(s) on the App Elements"}),"\n",(0,n.jsx)(t.p,{children:"Once you've identified the mobile elements you want your test to interact with, the next step is to interact with them. You perform an action on a mobile element by invoking an interaction method on an instance of the\xa0WebElement\xa0interface."}),"\n",(0,n.jsx)(t.p,{children:"In this example, we'll test a login button. The\xa0WebElement\xa0interface declares basic interaction methods including:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The\xa0",(0,n.jsx)(t.code,{children:"sendKeys"}),"\xa0method, to enter text."]}),"\n",(0,n.jsxs)(t.li,{children:["The\xa0",(0,n.jsx)(t.code,{children:"clear"}),"\xa0method, to clear entered text."]}),"\n",(0,n.jsxs)(t.li,{children:["The\xa0",(0,n.jsx)(t.code,{children:"submit"}),"\xa0method, to submit a form."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["This example first invokes the\xa0",(0,n.jsx)(t.code,{children:"sendKeys"}),"\xa0method to enter text in the\xa0username\xa0and\xa0password\xa0elements, and then invokes the\xa0",(0,n.jsx)(t.code,{children:"submit"}),"\xa0method to submit the\xa0login\xa0form.\xa0Enter a username and password:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'emailInput.sendKeys("SauceIsAwesome@email.com");\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The\xa0",(0,n.jsx)(t.code,{children:"submit"}),"\xa0method can be invoked either on any text input element on a form, or on the form element itself. Submit Text Element:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"emailInput.submit();\n"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h3,{id:"5-anticipate-app-response-to-the-action",children:"5. Anticipate App Response to the Action"}),"\n",(0,n.jsxs)(t.p,{children:["When you click a\xa0",(0,n.jsx)(t.strong,{children:"Submit"}),"\xa0button, you know that you have to wait a second or two for your action to reach the server, and for the server to respond, before you do anything else. You want to anticipate the right response (i.e., successful login)."]}),"\n",(0,n.jsx)(t.p,{children:"If you're trying to test the response, and what happens afterwards, then you need to build that waiting time into your test. Otherwise, the test might fail because the elements that are expected for the next step haven't loaded into the browser you."}),"\n",(0,n.jsxs)(t.p,{children:["The WebDriver API supports two basic techniques for anticipating browser response by waiting:\xa0",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"implicit waits"})}),"\xa0and\xa0",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"explicit waits"})}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"implicit-waits-strategy",children:(0,n.jsx)(t.strong,{children:"Implicit Waits Strategy"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Implicit waits"})," set a maximum time that the Appium server will continue trying to find an element. Using implicit waits is not recommended because app response times are not definitely predictable and fixed elapsed times are not applicable to all interactions. Using explicit waits requires more technical sophistication,\xa0but is a Sauce Labs best practice."]}),"\n",(0,n.jsx)(t.p,{children:"This example below illustrates how you could use an implicit wait to anticipate web browser response after submitting the login form:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);\n"})}),"\n",(0,n.jsx)(t.h4,{id:"explicit-waits-strategy",children:(0,n.jsx)(t.strong,{children:"Explicit Waits Strategy"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Explicit waits"})," wait until an\xa0expected condition\xa0occurs on the web page, or until a maximum wait time elapses. To use an explicit wait, you create an instance of the\xa0WebDriverWait\xa0class with a maximum wait time, and you invoke its\xa0until\xa0method with an expected condition."]}),"\n",(0,n.jsxs)(t.p,{children:["The WebDriver API provides an\xa0",(0,n.jsx)(t.code,{children:"ExpectedConditions"}),"\xa0class with methods for various standard types of expected condition. These methods return an instance of an\xa0expected condition\xa0class. You can pass an invocation of these standard expected-condition methods as argument values to\xa0",(0,n.jsx)(t.code,{children:"until"}),"\xa0method. You can also pass - in ways that your programming language and its WebDriver API support - any function, code block, or closure that returns a boolean value or an object reference to a found web element as an argument value to the\xa0until\xa0method. How this is done varies over programming languages. The\xa0",(0,n.jsx)(t.code,{children:"until"}),"\xa0method checks repeatedly, until the maximum wait time elapses, for a\xa0true\xa0boolean return value or a non-",(0,n.jsx)(t.code,{children:"null"}),"\xa0object reference, as an indication that the expected condition has occurred."]}),"\n",(0,n.jsx)(t.p,{children:"This example below illustrates how you could use an explicit wait to anticipate web browser response after submitting the login form."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'import org.openqa.selenium.support.ui.ExpectedConditions;\xa0\nimport org.openqa.selenium.support.ui.WebDriverWait;\xa0\nWebDriverWait wait = new WebDriverWait(driver, 10); WebElement messageElement = wait.until( ExpectedConditions.presenceOfElementLocated(By.id("loginResponse")) );\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Do not mix implicit and explicit waits. Doing so can cause unpredictable wait times. For example setting an implicit wait of 10s and an explicit wait of 15 seconds, could cause a timeout to occur after 20 seconds."})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h3,{id:"6-run-tests-and-record-your-results",children:"6. Run Tests and Record Your Results"}),"\n",(0,n.jsx)(t.p,{children:"This is where you log whether your test passed, failed, or returned an error."}),"\n",(0,n.jsx)(t.p,{children:"Running tests and recording test results is the ultimate purpose of your test script: you run tests in an automated test script in order to\xa0evaluate function and performance\xa0in the AUT, without requiring human interaction."}),"\n",(0,n.jsx)(t.h4,{id:"test-frameworks",children:(0,n.jsx)(t.strong,{children:"Test Frameworks"})}),"\n",(0,n.jsx)(t.p,{children:"To run test and to record test results, you use methods of a\xa0test framework\xa0for your programming language. There are many available test frameworks, including the frameworks in the so-called\xa0XUnit family, which includes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"JUnit\xa0for Java"}),"\n",(0,n.jsx)(t.li,{children:"NUnit\xa0for C#"}),"\n",(0,n.jsx)(t.li,{children:"unittest\xa0or\xa0pyunit\xa0for Python"}),"\n",(0,n.jsx)(t.li,{children:"RSpec\xa0for Ruby"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For some programming languages, test frameworks other than those in the XUnit family are common - for example, the\xa0RSpec\xa0framework for Ruby. Our ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs-training",children:"sample test framework repos\xa0on GitHub"})," contain over 60 examples of test frameworks set up to work with Sauce Labs."]}),"\n",(0,n.jsx)(t.h4,{id:"test-assertions",children:(0,n.jsx)(t.strong,{children:"Test Assertions"})}),"\n",(0,n.jsxs)(t.p,{children:["Most test frameworks implement the basic concept of an\xa0",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"assertion"})}),", a method representing whether or not a logical condition holds after interaction with an AUT."]}),"\n",(0,n.jsxs)(t.p,{children:["Test frameworks generally declare methods whose names begin with the term\xa0",(0,n.jsx)(t.code,{children:"assert"}),"\xa0and end with a term for a logical condition (e.g.,\xa0",(0,n.jsx)(t.code,{children:"assertEquals"}),"\xa0in JUnit). Generally, when the logical condition represented by an\xa0assert\xa0method does not hold, an exception for the condition is thrown."]}),"\n",(0,n.jsxs)(t.p,{children:["There are various approaches to using exceptions in most test frameworks.\xa0The ",(0,n.jsx)(t.a,{href:"https://www.selenium.dev/documentation/en/",children:"SeleniumHQ documentation"})," has more detailed information\xa0on using assertions and verifications in your tests."]}),"\n",(0,n.jsx)(t.h4,{id:"recording-test-results",children:(0,n.jsx)(t.strong,{children:"Recording Test Results"})}),"\n",(0,n.jsx)(t.p,{children:"Recording of test results can be done in various ways, supported by the test framework or by a logging framework for the programming language, or by both together. Selenium also supports taking screenshots of web browser windows as a helpful additional type of recording."}),"\n",(0,n.jsxs)(t.p,{children:["Because of the wide variations in recording technique, this beginning section omits recording, instead emphasizing a simple approach to applying a test using an\xa0assert\xa0method. See our ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs-training",children:"sample test framework repos"})," for examples of setting up test results reporting."]}),"\n",(0,n.jsx)(t.p,{children:"The following example runs a test by asserting that the login response message is equal to an expected success message:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'import org.junit.jupiter.api.Assertions.assertEquals;\n\nWebElement messageElement     = driver.findElement(By.id("loginResponse"));\nString message                = messageElement.getText();\nString successMsg             = "Welcome to foo. You logged in successfully.";\nassertEquals (message, successMsg);\n'})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h3,{id:"7-concluding-your-test",children:"7. Concluding Your Test"}),"\n",(0,n.jsx)(t.p,{children:"In this step, you'll shut down the connection to Sauce Labs."}),"\n",(0,n.jsxs)(t.h4,{id:"quitmethod",children:[(0,n.jsx)(t.code,{children:"quit"}),"\xa0Method"]}),"\n",(0,n.jsxs)(t.p,{children:["Conclude your test by invoking the\xa0",(0,n.jsxs)(t.em,{children:[(0,n.jsx)(t.code,{children:"quit"}),"\xa0method"]})," on an instance of the\xa0WebDriver\xa0interface (e.g., on the\xa0driver\xa0variable)."]}),"\n",(0,n.jsxs)(t.p,{children:["The\xa0",(0,n.jsx)(t.code,{children:"quit"}),"\xa0method concludes a test by disposing of resources, which allows later tests to run without resources and app state affected by earlier tests. The\xa0quit\xa0method:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"quits the web browser app, closing all web pages."}),"\n",(0,n.jsx)(t.li,{children:"quits the WebDriver server, which interacts with the web browser."}),"\n",(0,n.jsx)(t.li,{children:"releases\xa0driver, the variable referencing the unique instance of the\xa0WebDriver\xa0interface."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The following example invokes the\xa0",(0,n.jsx)(t.code,{children:"quit"}),"\xa0method on the\xa0driver\xa0variable:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"driver.quit();\n"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h2,{id:"full-example-script",children:"Full Example Script"}),"\n",(0,n.jsx)(t.p,{children:"The following example includes code for all steps. The example also defines a Java test class Example, and its main method, so that the code can be run."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'package com.yourcompany;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.WebElement;\nimport org.openqa.selenium.remote.DesiredCapabilities;\nimport io.appium.java_client.android.AndroidDriver;\nimport java.net.MalformedURLException;\nimport java.net.URL;\nimport org.junit.jupiter.api.Assertions.assertEquals;\npublic class SampleSauceTest {\n\n    public static void  main() throws MalformedURLException {\n        desiredCapabilities capabilities = new DesiredCapabilities();\n        capabilities.setCapability("platformName", "Android");\n        capabilities.setCapability("deviceName", "Android GoogleAPI Emulator");\n        capabilities.setCapability("platformVersion", "10.0");\n        capabilities.setCapability("app", "storage:filename=swag-labs.apk");\n        capabilities.setCapability("browserName", "");\n        capabilities.setCapability("deviceOrientation", "portrait");\n        capabilities.setCapability("appiumVersion", "1.16.0");\n        WebDriver driver = new AndroidDriver<WebElement>( new URL("http://SAUCE_USERNAME:SAUCE_ACCESS_KEY@ondemand.us-west-1.saucelabs.com/wd/hub"), capabilities);\n\n        try {\n            WebElement emailInput = driver.findElement(By.id("fbemail"));\n            emailInput.sendKeys("SauceIsAwesome@email.com");\n            assertEquals(emailInput.getText(), "SauceIsAwesome@email.com");\n        } finally {\n            driver.quit();\n        }\n    }\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://saucelabs.com/blog/appium-bootcamp-chapter-1-get-started-with-appium",children:"Appium Bootcamp"}),", by Bill McGee."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"http://appium.io",children:"Official Appium website"}),": documentation and test script examples."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://youtu.be/1J0aXDbjiUE?list=PLSIUOFhnxEiCODb8XQB-RUQ0RGNZ2yW7d",children:"An Introduction to Appium"}),", presented by Jonathan Lipps of Sauce Labs and the Appium project given at the 2013 Google Test Automation Conference."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://confengine.com/selenium-conf-2015/proposal/1319/the-mobile-json-wire-protocol",children:"A talk on the Mobile JSON Wire Protocol"}),", presented by Jonathan Lipps at the 2015 Selenium Conference."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"http://stackshare.io/sauce-labs/mobile-automation-with-appium-and-sauce-labs",children:"An in-depth tutorial"}),", by Jonathan Lipps covering Appium basics using Ruby and Sauce Labs."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,i)=>{i.d(t,{A:()=>r});i(96540);var n=i(18215);const s={tabItem:"tabItem_Ymn6"};var a=i(74848);function r(e){let{children:t,hidden:i,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,r),hidden:i,children:t})}},11470:(e,t,i)=>{i.d(t,{A:()=>w});var n=i(96540),s=i(18215),a=i(23104),r=i(56347),o=i(205),l=i(57485),c=i(31682),d=i(89466);function p(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:i}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:i,attributes:n,default:s}}=e;return{value:t,label:i,attributes:n,default:s}}))}(i);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function h(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:i}=e;const s=(0,r.W6)(),a=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function b(e){const{defaultValue:t,queryString:i=!1,groupId:s}=e,a=u(e),[r,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=i.find((e=>e.default))??i[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,p]=m({queryString:i,groupId:s}),[b,g]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Dv)(i);return[s,(0,n.useCallback)((e=>{i&&a.set(e)}),[i,a])]}({groupId:s}),x=(()=>{const e=c??b;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),g(e)}),[p,g,a]),tabValues:a}}var g=i(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=i(74848);function j(e){let{className:t,block:i,selectedValue:n,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,i=l.indexOf(t),s=o[i].value;s!==n&&(c(t),r(s))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;t=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;t=l[i]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":i},t),children:o.map((e=>{let{value:t,label:i,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:p,onClick:d,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":n===t}),children:i??t},t)}))})}function v(e){let{lazy:t,children:i,selectedValue:s}=e;const a=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=b(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,f.jsx)(j,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function w(e){const t=(0,g.A)();return(0,f.jsx)(y,{...e,children:p(e.children)},String(t))}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(96540);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);