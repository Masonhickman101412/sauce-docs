"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[43547],{81934:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var s=t(74848),a=t(28453),i=t(86025),r=t(11470),c=t(19365);const o={id:"basic-setup",title:"Sauce Connect Proxy Basic Setup",sidebar_label:"Basic Setup"},l=void 0,u={id:"secure-connections/sauce-connect/setup-configuration/basic-setup",title:"Sauce Connect Proxy Basic Setup",description:"The basic Sauce Connect Proxy setup is ideal for non-enterprise users with network configurations that require a proxy to open communication between Sauce Labs and their website or mobile app hosted locally or behind a firewall.",source:"@site/docs/secure-connections/sauce-connect/setup-configuration/basic-setup.md",sourceDirName:"secure-connections/sauce-connect/setup-configuration",slug:"/secure-connections/sauce-connect/setup-configuration/basic-setup",permalink:"/sauce-docs/pr-preview/pr-2899/secure-connections/sauce-connect/setup-configuration/basic-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect/setup-configuration/basic-setup.md",tags:[],version:"current",lastUpdatedBy:"Alana McKenzie",lastUpdatedAt:1698705076e3,frontMatter:{id:"basic-setup",title:"Sauce Connect Proxy Basic Setup",sidebar_label:"Basic Setup"},sidebar:"docs",previous:{title:"System and Network Requirements",permalink:"/sauce-docs/pr-preview/pr-2899/secure-connections/sauce-connect/system-requirements"},next:{title:"YAML File Configuration",permalink:"/sauce-docs/pr-preview/pr-2899/secure-connections/sauce-connect/setup-configuration/yaml-config"}},d={},h=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Basic Setup without a Test Script",id:"basic-setup-without-a-test-script",level:2},{value:"Basic Setup with a Test Script",id:"basic-setup-with-a-test-script",level:2},{value:"Test Not Working?",id:"test-not-working",level:3},{value:"Using Tunnel Names",id:"using-tunnel-names",level:2},{value:"Example Configurations",id:"example-configurations",level:4},{value:"Architecture",id:"architecture",level:2},{value:"Sauce Connect Proxy Basic Network Configuration",id:"sauce-connect-proxy-basic-network-configuration",level:3},{value:"Sauce Connect Proxy Tunnel Startup Process",id:"sauce-connect-proxy-tunnel-startup-process",level:3},{value:"Sauce Connect Proxy Communication When Test is Running",id:"sauce-connect-proxy-communication-when-test-is-running",level:3},{value:"Network Traffic Flow through a Tunnel",id:"network-traffic-flow-through-a-tunnel",level:4},{value:"More Information",id:"more-information",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The basic Sauce Connect Proxy setup is ideal for non-enterprise users with network configurations that require a proxy to open communication between Sauce Labs and their website or mobile app hosted locally or behind a firewall."}),"\n",(0,s.jsxs)(n.p,{children:["It is also a key step for any Sauce Connect Proxy deployment as a way to verify if you need help from network administrators to complete the configuration. For details, see ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/system-requirements",children:"Validating Your Basic Sauce Connect Proxy Setup"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A Sauce Labs account (",(0,s.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,s.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Your Sauce Labs ",(0,s.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Have Sauce Connect Proxy ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/installation",children:"installed on your local machine"}),". Make sure it's the latest version - otherwise, you may run into technical issues.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Review ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/system-requirements",children:"Sauce Connect Proxy System and Network Requirements"})," to confirm that your system and network architecture will be compatible with Sauce Connect Proxy."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Know your regional ",(0,s.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--region",children:"Sauce Labs Data Center"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Understand what kinds of tests you're running:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If you're using virtual machines or devices, see the instructions below."}),"\n",(0,s.jsxs)(n.li,{children:["If you're testing real devices, see ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/specialized-environments",children:"Setting Up for Real Device Cloud"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Security Recommendation",type:"note",children:(0,s.jsxs)(n.p,{children:["We recommend setting your ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/environment-variables/",children:"username and api key values as environment variables"})," to protect them from exposure. They'll be reusable (you won't need to type them in every time)."]})}),"\n",(0,s.jsx)(n.h2,{id:"basic-setup-without-a-test-script",children:"Basic Setup without a Test Script"}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/quickstart/",children:"Sauce Connect Proxy Quickstart"})," for instructions on how to run a Live (Manual) test on a locally hosted app."]}),"\n",(0,s.jsx)(n.h2,{id:"basic-setup-with-a-test-script",children:"Basic Setup with a Test Script"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open your terminal and navigate to the Sauce Connect Proxy client bin folder on your local machine."}),"\n"]}),"\n",(0,s.jsxs)(r.A,{defaultValue:"Linux",values:[{label:"Linux",value:"Linux"},{label:"Windows",value:"Windows"},{label:"Mac",value:"Mac"}],children:[(0,s.jsx)(c.A,{value:"Linux",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd sc-4.9.2-linux/bin\n"})})}),(0,s.jsx)(c.A,{value:"Windows",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd sc-4.9.2-win32/bin\n"})})}),(0,s.jsx)(c.A,{value:"Mac",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd sc-4.9.1-osx/bin\n"})})})]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"From your command line terminal, launch a tunnel with the below commands."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can also find the code snippet with your credentials populated from the ",(0,s.jsx)(n.a,{href:"https://app.saucelabs.com/tunnels",children:(0,s.jsx)(n.strong,{children:"Tunnel Proxies"})})," page, under ",(0,s.jsx)(n.strong,{children:"2: Authenticate & connect"}),"."]}),"\n",(0,s.jsxs)(r.A,{defaultValue:"Mac/Linux",values:[{label:"Mac/Linux",value:"Mac/Linux"},{label:"Windows",value:"Windows"}],children:[(0,s.jsx)(c.A,{value:"Mac/Linux",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --region $SAUCE_DC --tunnel-name $TUNNEL_NAME\n"})})}),(0,s.jsx)(c.A,{value:"Windows",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".\\sc.exe -u %SAUCE_USERNAME% -k %SAUCE_ACCESS_KEY% --region %SAUCE_DC% --tunnel-name $TUNNEL_NAME\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--user",children:(0,s.jsx)(n.code,{children:"-u (--user)"})})," and ",(0,s.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--api-key",children:(0,s.jsx)(n.code,{children:"-k (--api-key)"})})," are required. While the ",(0,s.jsxs)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--region",children:[(0,s.jsx)(n.code,{children:"-r"})," (",(0,s.jsx)(n.code,{children:"--region"}),")"]})," and ",(0,s.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--tunnel-name",children:(0,s.jsx)(n.code,{children:"--tunnel-name"})})," flags are technically not required, we strongly recommend them for best performance."]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Select an appropriate test script. Options might include:"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"An existing test, if available."}),"\n",(0,s.jsxs)(n.li,{children:["Create a new test using an example from ",(0,s.jsx)(n.a,{href:"https://github.com/saucelabs-training",children:"Sauce Labs Demonstration Scripts"}),". Follow those instructions to configure the test before proceeding to the next step."]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["If you are using a name for your tunnel, add the ",(0,s.jsx)(n.a,{href:"/dev/test-configuration-options/#tunnelName",children:(0,s.jsx)(n.code,{children:"TUNNEL_NAME"})})," to the capabilities section of your test script. Use the same name you used in Step 1."]}),"\n"]}),"\n",(0,s.jsxs)(r.A,{defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Node.js",value:"Node.js"},{label:"C#",value:"C#"},{label:"Python",value:"Python"},{label:"Ruby",value:"Ruby"}],children:[(0,s.jsx)(c.A,{value:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'caps.SetCapability("tunnelName", "TUNNEL_NAME");\n'})})}),(0,s.jsx)(c.A,{value:"Node.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"'tunnelName': 'TUNNEL_NAME'\n"})})}),(0,s.jsx)(c.A,{value:"C#",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'caps.SetCapability("tunnelName", "TUNNEL_NAME");\n'})})}),(0,s.jsx)(c.A,{value:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"'tunnelName': 'TUNNEL_NAME'\n"})})}),(0,s.jsx)(c.A,{value:"Ruby",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rb",children:"'tunnelName': 'TUNNEL_NAME'\n"})})})]}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["When you see ",(0,s.jsx)(n.code,{children:"connected"}),", ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/quickstart/#verifying-a-tunnel",children:"verify that your tunnel is active"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Once you've confirmed that your network is configured for Sauce Connect Proxy, you can start new tunnels as needed. As a best practice, we recommend creating a new tunnel for each test suite or build and tearing it down at the end of your test."}),"\n",(0,s.jsx)(n.p,{children:"You can continue using this basic setup or try a more advanced configuration, which is ideal for large scale, enterprise-level testing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/additional-proxies",children:"Sauce Connect Proxy with Additional Proxies"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/high-availability",children:"Sauce Connect Proxy High Availability Setup"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"test-not-working",children:"Test Not Working?"}),"\n",(0,s.jsxs)(n.p,{children:["If you're unable to connect, check with your network administrator about examining firewall settings for roadblocks. For more information, see ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/system-requirements",children:"Allowlisting for Restricted Networks"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Another possible issue is certificate authentication. The server hosting Sauce Connect Proxy may need to connect to Online Certificate Status Protocol (OCSP). See ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/security-authentication",children:"Certificate Handling"})," for more information."]}),"\n",(0,s.jsxs)(n.p,{children:["For troubleshooting specific errors or common issues, see ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/troubleshooting",children:"Troubleshooting"})," and ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/faq",children:"Frequently Asked Questions"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"using-tunnel-names",children:"Using Tunnel Names"}),"\n",(0,s.jsx)(n.p,{children:"When launching a Sauce Connect Proxy tunnel for automated web and mobile app tests, you have two options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Launch a Sauce Connect tunnel as-is, without naming it. That default, unnamed tunnel will automatically be used for all automated tests. This can be useful for small organizations with a limited number of tests."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Recommended"}),": Assign a name to help distinguish tunnels in a way that is meaningful to your organization. To accomplish this:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use the ",(0,s.jsxs)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--tunnel-name",children:[" ",(0,s.jsx)(n.code,{children:"--tunnel-name"})," flag"]})," when you launch a tunnel."]}),"\n",(0,s.jsxs)(n.li,{children:["Specify the named tunnel in your automated tests by adding the ",(0,s.jsx)(n.a,{href:"/dev/test-configuration-options#tunnelName",children:(0,s.jsx)(n.code,{children:"tunnelName"})})," capability."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-configurations",children:"Example Configurations"}),"\n",(0,s.jsx)(n.p,{children:"The following code samples demonstrate specifying a tunnel name when launching a tunnel and then referencing that tunnel in your automated test."}),"\n",(0,s.jsxs)(n.p,{children:["Launch a new tunnel on the ",(0,s.jsx)(n.code,{children:"SC_HOST"})," using the ",(0,s.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy",children:"Sauce Connect Proxy CLI"})," and the ",(0,s.jsx)(n.code,{children:"--tunnel-name"})," flag:"]}),"\n",(0,s.jsxs)(r.A,{defaultValue:"macOS/Linux",values:[{label:"macOS/Linux",value:"macOS/Linux"},{label:"Windows",value:"Windows"}],children:[(0,s.jsx)(c.A,{value:"macOS/Linux",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -r $SAUCE_DC --tunnel-name sc-proxy-tunnel\n"})})}),(0,s.jsx)(c.A,{value:"Windows",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".\\sc.exe -u %SAUCE_USERNAME% -k %SAUCE_ACCESS_KEY% -r %SAUCE_DC% --tunnel-name sc-proxy-tunnel\n"})})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ensure that your network configuration allows for communication between the ",(0,s.jsx)(n.code,{children:"SC Host"}),", the Tunnel VM, and the SUT (site under test). See the basic network configuration diagram for further explanation."]}),"\n",(0,s.jsxs)(n.li,{children:["Select an example from ",(0,s.jsx)(n.a,{href:"https://github.com/saucelabs-training",children:"Sauce Labs Demonstration Scripts"})," and follow the instructions to configure the test in your dev environment."]}),"\n",(0,s.jsxs)(n.li,{children:["Navigate to the desired test script and add the ",(0,s.jsx)(n.a,{href:"/dev/test-configuration-options#tunnelName",children:(0,s.jsx)(n.code,{children:"tunnelName"})})," capability to your ",(0,s.jsx)(n.a,{href:"/dev/w3c-webdriver-capabilities",children:(0,s.jsx)(n.code,{children:"sauce:options"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.A,{defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Node.js",value:"Node.js"},{label:"C#",value:"C#"},{label:"Python",value:"Python"},{label:"Ruby",value:"Ruby"}],children:[(0,s.jsx)(c.A,{value:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'caps.SetCapability("tunnelName", "sc-proxy-tunnel");\n'})})}),(0,s.jsx)(c.A,{value:"Node.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"'tunnelName': 'sc-proxy-tunnel'\n"})})}),(0,s.jsx)(c.A,{value:"C#",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'caps.SetCapability("tunnelName", "sc-proxy-tunnel");\n'})})}),(0,s.jsx)(c.A,{value:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"'tunnelName': 'sc-proxy-tunnel'\n"})})}),(0,s.jsx)(c.A,{value:"Ruby",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rb",children:"tunnelName: 'sc-proxy-tunnel',\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(n.h3,{id:"sauce-connect-proxy-basic-network-configuration",children:"Sauce Connect Proxy Basic Network Configuration"}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/sauce-connect/scp-basic-network-config.png"),alt:"Basic network configuration diagram",width:"650"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Diagram Legend"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Term"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Definition"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"SC Host (Sauce Connect Host)"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"The machine in your network on which the Sauce Connect Proxy app is running. In this setup, it has a direct connection to the internet."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"SUT (Site Under Test)"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"The site that you're testing. It is on the same local network as the SC Host machine."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Tunnel VM (Tunnel Virtual Machine)"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Virtual machine that hosts Sauce Connect on the Sauce Labs side."})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Sauce Connect Proxy must be on the same network as the website or mobile app being tested, but it is not required to set it up on the same machine."})}),"\n",(0,s.jsx)(n.h3,{id:"sauce-connect-proxy-tunnel-startup-process",children:"Sauce Connect Proxy Tunnel Startup Process"}),"\n",(0,s.jsx)(n.p,{children:"Every Sauce Connect Proxy tunnel spins up a fresh virtual machine (VM) that is used only for your tests. VMs are destroyed once the tunnel is closed."}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/sauce-connect/scp-tunnel-startup.png"),alt:"Tunnel startup diagram",width:"650"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Sauce Connect Proxy client calls REST API to start a tunnel."}),"\n",(0,s.jsx)(n.li,{children:"REST API initiates a request to system to create a new Tunnel VM."}),"\n",(0,s.jsx)(n.li,{children:"REST API tells the Sauce Connect Proxy client DNS name of the Tunnel VM."}),"\n",(0,s.jsx)(n.li,{children:"Sauce Connect Proxy client makes connection request to Tunnel VM using its DNS name."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The tunnel should now be established between the Sauce Connect Client and the Tunnel VM."}),"\n",(0,s.jsx)(n.h3,{id:"sauce-connect-proxy-communication-when-test-is-running",children:"Sauce Connect Proxy Communication When Test is Running"}),"\n",(0,s.jsx)(n.h4,{id:"network-traffic-flow-through-a-tunnel",children:"Network Traffic Flow through a Tunnel"}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/sauce-connect/scp-network-traffic-flow.webp"),alt:"Network traffic flow diagram",width:"650"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Selenium/Appium test code sends an HTTPS request to the VM or Real Device that was created for this test (e.g., ",(0,s.jsx)(n.code,{children:"GET www.saucedemo.com"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Test VM or Device sends this request to Tunnel VM in order to access SUT.","\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The tunnel assignment depends on the ",(0,s.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--tunnel-name",children:"tunnel-name"})," that tells Sauce Labs what tunnel to use."]})}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Tunnel VM forwards this request to Sauce Connect Proxy client via the secure tunnel."}),"\n",(0,s.jsx)(n.li,{children:"Sauce Connect Proxy client forwards the request to Site Under Test (SUT)."}),"\n",(0,s.jsx)(n.li,{children:"Site Under Test returns response to Sauce Connect Proxy client."}),"\n",(0,s.jsx)(n.li,{children:"Sauce Connect Proxy client sends response to Tunnel VM via secure tunnel."}),"\n",(0,s.jsx)(n.li,{children:"Tunnel VM sends response to Test VM."}),"\n",(0,s.jsx)(n.li,{children:"Test VM sends results back to Selenium/Appium test cloud."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Throughout the lifetime of a tunnel, Sauce Connect Proxy client will send status information to Sauce Labs REST API."}),"\n",(0,s.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/basics/acct-team-mgmt/org-settings/#security-settings",children:"Sauce Connect Proxy Security Settings"}),": learn about additional security settings, such as requiring organization-wide use of Sauce Connect Proxy"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/advanced/architecture/",children:"Sauce Connect Proxy Architecture"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/advanced/kgp/",children:"KGP Sauce Connect Proxy Tunneling Protocol"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var s=t(18215);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>S});var s=t(96540),a=t(18215),i=t(23104),r=t(56347),c=t(205),o=t(57485),l=t(31682),u=t(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,r.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[r,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[l,d]=p({queryString:t,groupId:a}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),j=(()=>{const e=l??m;return x({value:e,tabValues:i})?e:null})();(0,c.A)((()=>{j&&o(j)}),[j]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function y(e){let{className:n,block:t,selectedValue:s,selectValue:r,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=c[t].value;a!==s&&(l(n),r(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,g.jsx)(y,{...e,...n}),(0,g.jsx)(b,{...e,...n})]})}function S(e){const n=(0,f.A)();return(0,g.jsx)(v,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(96540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);