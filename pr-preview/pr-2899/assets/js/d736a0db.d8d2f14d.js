"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[31102],{42274:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var r=t(74848),o=t(28453),i=t(86025),s=t(11470),a=t(19365);const c={id:"additional-proxies",title:"Sauce Connect Proxy Setup with Additional Proxies",sidebar_label:"Setup with Additional Proxies"},l=void 0,u={id:"secure-connections/sauce-connect/setup-configuration/additional-proxies",title:"Sauce Connect Proxy Setup with Additional Proxies",description:"This is a guide for users who have an existing internal network proxy through which outbound communication is routed from their network to the public internet. If this sounds like your setup, additional proxy configuration of the Sauce Connect Proxy tunnel is required:",source:"@site/docs/secure-connections/sauce-connect/setup-configuration/additional-proxies.md",sourceDirName:"secure-connections/sauce-connect/setup-configuration",slug:"/secure-connections/sauce-connect/setup-configuration/additional-proxies",permalink:"/sauce-docs/pr-preview/pr-2899/secure-connections/sauce-connect/setup-configuration/additional-proxies",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect/setup-configuration/additional-proxies.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1690972699e3,frontMatter:{id:"additional-proxies",title:"Sauce Connect Proxy Setup with Additional Proxies",sidebar_label:"Setup with Additional Proxies"},sidebar:"docs",previous:{title:"High Availability Setup",permalink:"/sauce-docs/pr-preview/pr-2899/secure-connections/sauce-connect/setup-configuration/high-availability"},next:{title:"Specialized Environment Setups",permalink:"/sauce-docs/pr-preview/pr-2899/secure-connections/sauce-connect/setup-configuration/specialized-environments"}},d={},h=[{value:"Warning About Man-in-the-Middle Proxies",id:"warning-about-man-in-the-middle-proxies",level:2},{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Setting Up Sauce Connect Proxy With Your Proxy",id:"setting-up-sauce-connect-proxy-with-your-proxy",level:2},{value:"Proxied Site Under Test (SUT)",id:"proxied-site-under-test-sut",level:3},{value:"Proxy Auto-Configuration (Automatic)",id:"proxy-auto-configuration-automatic",level:3},{value:"Command Line Configuration (Manual)",id:"command-line-configuration-manual",level:3},{value:"Command Line Configuration Using <code>-p (-\u2013proxy &lt;host:port&gt;)</code> and <code>-w (--proxy-userpwd &lt;user:pwd&gt;</code>)",id:"command-line-configuration-using--p--proxy-hostport-and--w---proxy-userpwd-userpwd",level:4},{value:"Command Line Configuration Using <code>-p (-\u2013proxy &lt;host:port&gt;)</code> and <code>-T (--proxy-tunnel)</code>",id:"command-line-configuration-using--p--proxy-hostport-and--t---proxy-tunnel",level:4},{value:"Command Line Configuration Using PAC Files (<code>\u2013pac url</code>)",id:"command-line-configuration-using-pac-files-pac-url",level:4},{value:"Network Traffic Flow Diagrams",id:"network-traffic-flow-diagrams",level:3},{value:"Site Under Test (SUT) Behind a Proxy",id:"site-under-test-sut-behind-a-proxy",level:4},{value:"Network Traffic Flow With Tunnel Established using <code>-p</code>",id:"network-traffic-flow-with-tunnel-established-using--p",level:4},{value:"Network Traffic Flow When a Test is Run Through a Tunnel Started with <code>-p</code>",id:"network-traffic-flow-when-a-test-is-run-through-a-tunnel-started-with--p",level:4},{value:"Network Traffic Flow when a Tunnel is Established Using <code>-T</code>",id:"network-traffic-flow-when-a-tunnel-is-established-using--t",level:4},{value:"Network Traffic Flow When a Test is Run Through a Tunnel Started Using <code>-T</code>",id:"network-traffic-flow-when-a-test-is-run-through-a-tunnel-started-using--t",level:4},{value:"Setting Up with Third Party Proxies",id:"setting-up-with-third-party-proxies",level:3},{value:"Charles Proxy Configuration",id:"charles-proxy-configuration",level:4},{value:"WonderProxy",id:"wonderproxy",level:4},{value:"Using Multiple Proxies",id:"using-multiple-proxies",level:4}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This is a guide for users who have an existing internal network proxy through which outbound communication is routed from their network to the public internet. If this sounds like your setup, additional proxy configuration of the Sauce Connect Proxy tunnel is required:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Between the internet and the machine hosting Sauce Connect Proxy."}),"\n",(0,r.jsx)(n.li,{children:"Between the machine hosting Sauce Connect and the machine hosting the website or mobile app you want to test."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["To configure Sauce Connect Proxy to use your proxy or proxies, you will need to include one or more Sauce Connect command-line options (see the ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy",children:"Sauce Connect Proxy Command-Line Quick Reference Guide"}),") in your test script."]}),"\n",(0,r.jsx)(n.h2,{id:"warning-about-man-in-the-middle-proxies",children:"Warning About Man-in-the-Middle Proxies"}),"\n",(0,r.jsx)(n.p,{children:"If you use a Man-in-the-Middle proxy to monitor network traffic, it must be configured to allow the TLS connection and proprietary protocol used by Sauce Connect Proxy to communicate with the Sauce Labs virtual machines that are running your tests. If it will allow only HTTP or HTTPS sessions, it will drop the inbound Sauce Connect Proxy connection."}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/basic-setup",children:"Sauce Connect Proxy Tunnel Startup Diagram"})," for more information about how Sauce Connect Proxy initiates and maintains the connection with the Sauce Labs browser cloud."]}),"\n",(0,r.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,r.jsxs)(n.p,{children:["Review the ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/basic-setup",children:"Basic Setup"})," to confirm that your system and network architecture are compatible with Sauce Connect Proxy."]}),"\n",(0,r.jsx)(n.h2,{id:"setting-up-sauce-connect-proxy-with-your-proxy",children:"Setting Up Sauce Connect Proxy With Your Proxy"}),"\n",(0,r.jsx)(n.p,{children:"There are several different ways to set up Sauce Connect Proxy to use a proxy server that is on your network, depending on the desired behavior. There are three types of network traffic that are relevant to using proxy servers with Sauce Connect Proxy:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"REST API Traffic:"})," The Sauce Connect client running on your network maintains a lightweight connection to our REST API that simply tells our servers basic information about the status of Sauce Connect's status (for example, starting up, ready, stopping)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"SUT Traffic:"})," The Sauce Connect client communicates with the Site Under Test (SUT) running in your network"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Tunnel Traffic:"})," The Sauce Connect client makes a connection to the actual tunnel virtual machine (VM) in the Sauce Labs cloud, created for your Sauce Connect instance\nThe configuration options described below will cause the REST API and SUT traffic to be routed through your proxy. While it is technically possible to route the tunnel traffic through your proxy, it is ",(0,r.jsx)(n.strong,{children:"not"})," recommended because this traffic is already TLS-secured. Also, routing tunnel traffic through your proxy will significantly degrade test performance. This option should only be used if your network does not allow outbound communication over ",(0,r.jsx)(n.code,{children:"port 443"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"proxied-site-under-test-sut",children:"Proxied Site Under Test (SUT)"}),"\n",(0,r.jsx)(n.p,{children:"In this configuration, the Site Under Test (SUT) is behind a proxy in order to allow even more control over traffic before it reaches the SUT. This setup is used to control access to the SUT by IP allowlisting or by restricting proxy access to users with valid username/password credentials."}),"\n",(0,r.jsx)(n.h3,{id:"proxy-auto-configuration-automatic",children:"Proxy Auto-Configuration (Automatic)"}),"\n",(0,r.jsxs)(n.p,{children:["Proxies and proxy auto-configuration (PAC) (see ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Proxy_auto-config",children:"Proxy auto-config"}),") settings may be configured based on the operating system settings on the machine where it is installed."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"On Windows, Sauce Connect Proxy will use the proxy settings for Internet Explorer, as well as the system-wide proxy settings that are set in the Control Panel."}),"\n",(0,r.jsx)(n.li,{children:"On macOS, Sauce Connect Proxy will use the proxy settings in Preferences/Network. Both proxy and PAC settings are supported."}),"\n",(0,r.jsxs)(n.li,{children:["On macOS and Linux, Sauce Connect Proxy looks for these variables, in this order:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"http_proxy"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"HTTP_PROXY"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"all_proxy"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ALL_PROXY"})," (they can be in the form ",(0,r.jsx)(n.code,{children:"http://host.name:port"})," or ",(0,r.jsx)(n.code,{children:"host.name:port"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"When a proxy is detected, Sauce Connect Proxy will route the following traffic through the detected proxy:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"all network traffic between the Sauce Connect Proxy client running on your network and the Sauce Labs REST API"}),"\n",(0,r.jsx)(n.li,{children:"all network traffic between the Sauce Connect Proxy client and the SUT"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Network traffic between the Sauce Connect Proxy client running on your network and the Sauce Connect server will not use the detected proxy unless the ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy#--proxy-tunnel",children:"--proxy-tunnel"})," flag is specified."]})}),"\n",(0,r.jsxs)(n.p,{children:["You can disable automatic proxy detection with the command-line option ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy#--no-autodetect",children:"--no-autodetect"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To set up and run Sauce Connect Proxy for this situation, see ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/basic-setup",children:"Basic Setup"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"command-line-configuration-manual",children:"Command Line Configuration (Manual)"}),"\n",(0,r.jsxs)(n.p,{children:["If automatic proxy configuration fails, you will need to override the settings or enable proxies when starting Sauce Connect Proxy. There are several ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy",children:"command line arguments"})," that you can use to configure proxies manually."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Flag"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"-p (--proxy <host:port>)"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["Proxy host and port that Sauce Connect Proxy should use to connect to the Sauce Labs REST API and SUT traffic. Can be used on its own or combined with ",(0,r.jsx)(n.code,{children:"-w -pac"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"-p (--proxy <host:port>) -w (--proxy-userpwd <user:pwd>)"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["Requires username and password sent via basic authentication to access the proxy specified with ",(0,r.jsx)(n.code,{children:"-p"}),". Can be combined with ",(0,r.jsx)(n.code,{children:"-pac"}),". ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.strong,{children:"Note"}),": Do not use this ",(0,r.jsx)(n.code,{children:"-p -w"})," combination with more than one proxy. Multiple proxies requiring auth are not supported."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"-p (-\u2013proxy <host:port>) -T (--proxy-tunnel)"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["Reroutes all tunnel traffic through the proxy specified with ",(0,r.jsx)(n.code,{children:"-p"}),". This should only be used as a last resort if the machine running Sauce Connect Proxy cannot send outgoing connections from ",(0,r.jsx)(n.code,{children:"port 443"}),". Cannot be combined with ",(0,r.jsx)(n.code,{children:"--pac"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"--pac url"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["Proxy auto-configuration (can be a http(s) or local ",(0,r.jsx)(n.code,{children:"file://URL"}),"). Absolute paths are required when specifying a local PAC file (for example, ",(0,r.jsx)(n.code,{children:"file://Users/JohnSmith/Desktop/MyPac.pac"})," on Mac/Linux or ",(0,r.jsx)(n.code,{children:"file:///Users/JohnSmith/Desktop/MyPac.pac"})," on Windows). Can be used on its own or combined with ",(0,r.jsx)(n.code,{children:"-p -w"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"--proxy-localhost"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["If the upstream proxy is hosted on ",(0,r.jsx)(n.code,{children:"localhost"}),", add this flag to correctly proxy traffic. By default, any traffic to ",(0,r.jsx)(n.code,{children:"localhost"})," is not sent to an upstream proxy."]})]})]})]}),"\n",(0,r.jsxs)(n.h4,{id:"command-line-configuration-using--p--proxy-hostport-and--w---proxy-userpwd-userpwd",children:["Command Line Configuration Using ",(0,r.jsx)(n.code,{children:"-p (-\u2013proxy <host:port>)"})," and ",(0,r.jsx)(n.code,{children:"-w (--proxy-userpwd <user:pwd>"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:["Using the ",(0,r.jsx)(n.code,{children:"-p"})," and ",(0,r.jsx)(n.code,{children:"-w"})," commands together when starting a Sauce Connect Proxy tunnel will route traffic between the Sauce Connect Proxy client on your network and the Sauce REST API through the proxy server specified by the ",(0,r.jsx)(n.code,{children:"<host:port>"})," argument."]}),"\n",(0,r.jsxs)(n.p,{children:["Here are some examples for starting a tunnel using ",(0,r.jsx)(n.code,{children:"-p"})," and ",(0,r.jsx)(n.code,{children:"-w"}),":"]}),"\n",(0,r.jsxs)(s.A,{defaultValue:"maclinux",values:[{label:"Mac or Linux",value:"maclinux"},{label:"Windows",value:"windows"}],children:[(0,r.jsx)(a.A,{value:"maclinux",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY \\\n  -p $PROXY_HOST:$PROXY_PORT  -w $PROXY_USERNAME:$PROXY_PASSWORD\n"})})}),(0,r.jsx)(a.A,{value:"windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\\sc.exe -u %SAUCE_USERNAME% -k %SAUCE_ACCESS_KEY% ^\n  -p %PROXY_HOST%:%PROXY_PORT%  -w %PROXY_USERNAME%:%PROXY_PASSWORD%\n"})})})]}),"\n",(0,r.jsxs)(n.h4,{id:"command-line-configuration-using--p--proxy-hostport-and--t---proxy-tunnel",children:["Command Line Configuration Using ",(0,r.jsx)(n.code,{children:"-p (-\u2013proxy <host:port>)"})," and ",(0,r.jsx)(n.code,{children:"-T (--proxy-tunnel)"})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"-p"})," and ",(0,r.jsx)(n.code,{children:"-T"})," combination is generally not recommended and should only be used as a last resort if the machine running Sauce Connect Proxy cannot send outgoing connections from ",(0,r.jsx)(n.code,{children:"port 443"}),". Using this configuration will slow down your tests because all tunnel traffic will be re-routed through the proxy specified with ",(0,r.jsx)(n.code,{children:"-p"}),". Your tunnel traffic is already encrypted."]}),"\n",(0,r.jsxs)(n.p,{children:["Here are some examples for starting a Sauce Connect Proxy tunnel using ",(0,r.jsx)(n.code,{children:"-p"})," and ",(0,r.jsx)(n.code,{children:"-T"}),":"]}),"\n",(0,r.jsxs)(s.A,{defaultValue:"maclinux",values:[{label:"Mac or Linux",value:"maclinux"},{label:"Windows",value:"windows"}],children:[(0,r.jsx)(a.A,{value:"maclinux",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY \\\n  -p $PROXY_HOST:$PROXY_PORT  -w $PROXY_USERNAME:$PROXY_PASSWORD -T\n"})})}),(0,r.jsx)(a.A,{value:"windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\\sc.exe -u %SAUCE_USERNAME% -k %SAUCE_ACCESS_KEY% ^\n  -p %PROXY_HOST:PROXY_PORT%  -w %PROXY_USERNAME%:%PROXY_PASSWORD% -T\n"})})})]}),"\n",(0,r.jsxs)(n.h4,{id:"command-line-configuration-using-pac-files-pac-url",children:["Command Line Configuration Using PAC Files (",(0,r.jsx)(n.code,{children:"\u2013pac url"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"Your IT organization may have a PAC file that is used to specify how your own internal proxy servers should be configured."}),"\n",(0,r.jsxs)(n.p,{children:["To have Sauce Connect Proxy with your PAC file, use the ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy#--pac",children:"--pac url"})," command line option when starting Sauce Connect Proxy.\nThe URL argument can be an http(s) or local ",(0,r.jsx)(n.code,{children:"file://URL"}),". Absolute paths are required when specifying a local PAC file (for example, ",(0,r.jsx)(n.code,{children:"file://Users/JohnSmith/Desktop/MyPac.pac"})," on Mac/Linux or ",(0,r.jsx)(n.code,{children:"file:///C:/Users/JohnSmith/Desktop/MyPac.pac"})," on Windows)."]}),"\n",(0,r.jsxs)(n.p,{children:["If your PAC file contains multiple proxies, in addition to ",(0,r.jsx)(n.code,{children:"-pac"}),", you'll need to specify the ",(0,r.jsx)(n.code,{children:"-p"})," option to designate which proxy will receive the username and password."]}),"\n",(0,r.jsxs)(n.p,{children:["Here are some examples for starting a Sauce Connect Proxy tunnel using ",(0,r.jsx)(n.code,{children:"--pac url"}),":"]}),"\n",(0,r.jsxs)(s.A,{defaultValue:"maclinux",values:[{label:"Mac or Linux",value:"maclinux"},{label:"Windows",value:"windows"}],children:[(0,r.jsx)(a.A,{value:"maclinux",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --pac PAC_FILE_URL\n"})})}),(0,r.jsx)(a.A,{value:"windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\\sc.exe -u %SAUCE_USERNAME% -k %SAUCE_ACCESS_KEY% --pac PAC_FILE_URL\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["If you are starting a tunnel for Real Device tests, see ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/specialized-environments#real-device-cloud-setup",children:"Real Device Cloud Setup"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"network-traffic-flow-diagrams",children:"Network Traffic Flow Diagrams"}),"\n",(0,r.jsx)(n.p,{children:"The following diagrams illustrate different Sauce Connect Proxy network flow configurations."}),"\n",(0,r.jsx)(n.h4,{id:"site-under-test-sut-behind-a-proxy",children:"Site Under Test (SUT) Behind a Proxy"}),"\n",(0,r.jsx)("img",{src:(0,i.A)("img/sauce-connect/scp-sut-proxy.png"),alt:"Site Under Test (SUT) behind a proxy",width:"800"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Diagram Legend"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Term"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Definition"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"SC Host (Sauce Connect Host)"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Machine in your network on which the Sauce Connect Proxy app is running."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"SUT (Site Under Test)"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The site that you're testing."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Sauce SC Host (Tunnel VM)"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Virtual machine that hosts Sauce Connect Proxy on the Sauce Labs side."})]})]})]}),"\n",(0,r.jsxs)(n.h4,{id:"network-traffic-flow-with-tunnel-established-using--p",children:["Network Traffic Flow With Tunnel Established using ",(0,r.jsx)(n.code,{children:"-p"})]}),"\n",(0,r.jsx)("img",{src:(0,i.A)("img/sauce-connect/scp-traffic-flow-tunnel.png"),alt:"Network traffic flow With tunnel established using '-p'",width:"800"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Sauce Connect Proxy client sends new tunnel request to proxy."}),"\n",(0,r.jsx)(n.li,{children:"Proxy forwards request to REST API."}),"\n",(0,r.jsx)(n.li,{children:"REST API initiates a request to the system to create a new Tunnel VM."}),"\n",(0,r.jsx)(n.li,{children:"REST API returns DNS name of Tunnel VM via your proxy."}),"\n",(0,r.jsx)(n.li,{children:"Your proxy forwards DNS name to Sauce Connect Proxy client."}),"\n",(0,r.jsx)(n.li,{children:"Sauce Connect Proxy client makes a connection request to Tunnel VM using DNS name."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"At this point, the tunnel is established between the Sauce Connect Client and the Tunnel VM."}),"\n",(0,r.jsxs)(n.h4,{id:"network-traffic-flow-when-a-test-is-run-through-a-tunnel-started-with--p",children:["Network Traffic Flow When a Test is Run Through a Tunnel Started with ",(0,r.jsx)(n.code,{children:"-p"})]}),"\n",(0,r.jsx)("img",{src:(0,i.A)("img/sauce-connect/scp-traffic-flow-through-tunnel.png"),alt:"Network traffic flow through a tunnel started with '-p'",width:"800"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Selenium/Appium test code sends an HTTPS request to the VM or Real Device that was created for this test (for example, 'GET ",(0,r.jsx)(n.a,{href:"http://www.saucedemo.com",children:"www.saucedemo.com"}),"')."]}),"\n",(0,r.jsx)(n.li,{children:"Test VM or Device sends this request to Tunnel VM in order to access Site Under Test (SUT)."}),"\n",(0,r.jsx)(n.li,{children:"Tunnel VM forwards this request to Sauce Connect Proxy client via the secure tunnel."}),"\n",(0,r.jsx)(n.li,{children:"Sauce Connect Proxy client forwards the request to SUT via your proxy."}),"\n",(0,r.jsx)(n.li,{children:"Site Under Test returns response to Sauce Connect Proxy client via your proxy."}),"\n",(0,r.jsx)(n.li,{children:"Sauce Connect Proxy client sends response to Tunnel VM via secure tunnel."}),"\n",(0,r.jsx)(n.li,{children:"Tunnel VM sends response to Test VM."}),"\n",(0,r.jsx)(n.li,{children:"Test VM sends results back to Selenium/Appium Test cloud."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Throughout the lifetime of a tunnel, Sauce Connect Proxy client sends status information to Sauce Labs REST API via your proxy."}),"\n",(0,r.jsxs)(n.h4,{id:"network-traffic-flow-when-a-tunnel-is-established-using--t",children:["Network Traffic Flow when a Tunnel is Established Using ",(0,r.jsx)(n.code,{children:"-T"})]}),"\n",(0,r.jsx)("img",{src:(0,i.A)("img/sauce-connect/scp-traffic-flow-t.png"),alt:"Network traffic flow through a tunnel established using '-T'",width:"800"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Sauce Connect Proxy client sends new tunnel request to REST API via your proxy."}),"\n",(0,r.jsx)(n.li,{children:"REST API initiates a request to the system to create a new Tunnel VM."}),"\n",(0,r.jsx)(n.li,{children:"REST API sends DNS name of Tunnel VM to Sauce Connect Proxy client via your proxy."}),"\n",(0,r.jsx)(n.li,{children:"Sauce Connect Proxy client sends connect request to Tunnel VM via your proxy."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"At this point, the tunnel is established between the Sauce Connect Proxy client and the Tunnel VM, but all traffic will go through your proxy."}),"\n",(0,r.jsxs)(n.h4,{id:"network-traffic-flow-when-a-test-is-run-through-a-tunnel-started-using--t",children:["Network Traffic Flow When a Test is Run Through a Tunnel Started Using ",(0,r.jsx)(n.code,{children:"-T"})]}),"\n",(0,r.jsx)("img",{src:(0,i.A)("img/sauce-connect/scp-traffic-flow-through-t.png"),alt:"Network traffic flow through a tunnel started using '-T'",width:"800"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Selenium/Appium test code sends an HTTPS request to the VM or Real Device that was created for this test (for example, ",(0,r.jsx)(n.code,{children:"GET www.saucedemo.com"}),")."]}),"\n",(0,r.jsx)(n.li,{children:"Test VM or device sends this request to Tunnel VM in order to access Site Under Test (SUT)."}),"\n",(0,r.jsx)(n.li,{children:"Tunnel VM forwards this request to Sauce Connect Proxy client through tunnel via your proxy."}),"\n",(0,r.jsx)(n.li,{children:"Sauce Connect Proxy client forwards the request to SUT via your proxy."}),"\n",(0,r.jsx)(n.li,{children:"Site Under Test returns response to Sauce Connect Proxy client via your proxy."}),"\n",(0,r.jsx)(n.li,{children:"Sauce Connect Proxy client sends response to Tunnel VM through tunnel via your proxy."}),"\n",(0,r.jsx)(n.li,{children:"Tunnel VM sends response to Test VM."}),"\n",(0,r.jsx)(n.li,{children:"Test VM sends results back to Selenium/Appium Test cloud."}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Throughout the lifetime of a tunnel, Sauce Connect Proxy client sends status information to Sauce Labs REST API via your proxy.",type:"note"}),"\n",(0,r.jsx)(n.h3,{id:"setting-up-with-third-party-proxies",children:"Setting Up with Third Party Proxies"}),"\n",(0,r.jsx)(n.h4,{id:"charles-proxy-configuration",children:"Charles Proxy Configuration"}),"\n",(0,r.jsx)(n.p,{children:"The Charles Proxy is useful for monitoring traffic passing between your Sauce VM or RDC device and your site under test. To begin, you'll need to create a PAC file that matches the REST and tunnel VM hostnames, then use the Charles Proxy for everything else."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Download and install Charles Proxy (see the ",(0,r.jsx)(n.a,{href:"https://www.charlesproxy.com/",children:"Charles Web Debugging Proxy App"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Open ",(0,r.jsx)(n.strong,{children:"Charles Proxy"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["To enable your machine to trust SSL/TLS certificates, in Charles Proxy, click ",(0,r.jsx)(n.strong,{children:"Help"}),", and then click ",(0,r.jsx)(n.strong,{children:"SSL Proxying"})," > ",(0,r.jsx)(n.strong,{children:"Install Charles Root Certificate"}),". For more information, see ",(0,r.jsx)(n.a,{href:"https://www.charlesproxy.com/documentation/using-charles/ssl-certificates/",children:"SSL Certificates"}),"."]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,i.A)("img/sauce-connect/charles-ssl-cert-nav.webp"),alt:"Charles SSL certificates navigation",width:"800"}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Create a pac.js file for Sauce Connect Proxy:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'function FindProxyForURL(url, host) {\n    if (shExpMatch(host, "*.miso.saucelabs.com*") ||\n        shExpMatch(host, "*.saucelabs.com") ||\n        shExpMatch(host, "saucelabs.com")) {\n        // KGP and REST connections. Another proxy can also be specified.\n        return "DIRECT";\n    }\n\n    // Test HTTP traffic, route it through the Charles proxy.\n    return "PROXY localhost:8890";\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Start ",(0,r.jsx)(n.strong,{children:"Charles Proxy"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["To change to an open port, in Charles Proxy, click ",(0,r.jsx)(n.strong,{children:"Proxy"})," and then click ",(0,r.jsx)(n.strong,{children:"Proxy Settings"}),". Under ",(0,r.jsx)(n.strong,{children:"HTTP Proxy"}),", enter an open port (for example, ",(0,r.jsx)(n.code,{children:"port 8890"}),") and then click ",(0,r.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,i.A)("img/sauce-connect/charles-proxy-settings.webp"),alt:"Charles Proxy settings navigation",width:"800"}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsx)(n.li,{children:"Start your Sauce Connect Proxy tunnel:"}),"\n"]}),"\n",(0,r.jsxs)(s.A,{defaultValue:"maclinux",values:[{label:"Mac or Linux",value:"maclinux"},{label:"Windows",value:"windows"}],children:[(0,r.jsx)(a.A,{value:"maclinux",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./sc --pac file://Users/JohnSmith/workspace/scstuff/pac.js\n"})})}),(0,r.jsx)(a.A,{value:"windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./sc --pac file:///C:/Users/JohnSmith/workspace/scstuff/pac.js\n"})})})]}),"\n",(0,r.jsxs)(n.ol,{start:"8",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start your test using the proxy, then observe the traffic in Charles Proxy."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Copy the file to the same directory as Sauce Connect Proxy, and then start Sauce Connect Proxy."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"wonderproxy",children:"WonderProxy"}),"\n",(0,r.jsxs)(n.p,{children:["You can use WonderProxy for GeoIP website testing with Sauce Connect Proxy. For more information, see ",(0,r.jsx)(n.a,{href:"https://wonderproxy.com/docs/devs/guides/globalize-your-testing-with-sauce",children:"Testing with Sauce Labs and WonderProxy"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"using-multiple-proxies",children:"Using Multiple Proxies"}),"\n",(0,r.jsx)(n.p,{children:"If you have multiple proxies (two or more), you may need to edit the PAC file to reflect that. In a multi-proxy environment, you may have:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A proxy specifically for the staging area or SUT"}),"\n",(0,r.jsxs)(n.li,{children:["A transparent proxy that connects you to the internet (see ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Proxy_server#Transparent_proxy",children:"Transparent proxy"})," for more information)"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["To confirm if you have additional proxies, you can use basic curl commands. If ",(0,r.jsx)(n.code,{children:"curl -v google.com"})," doesn't return anything, but ",(0,r.jsx)(n.code,{children:"curl -v --proxy external.proxy.com:8080 google.com"})," does return something, you have at least one proxy required to access the public internet."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"curl -v --proxy external.proxy.com private.mysite.com"})," does not get a response from your SUT, you may need to use a different proxy, such as ",(0,r.jsx)(n.code,{children:"internal.proxy.com:8080"}),", access your SUT. In this case, you'd need your PAC file to reflect your network setup:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="multiproxy proxy.pac"',children:"function FindProxyForURL(url, host) {\n// Sauce domain calls required to start a tunnel\nif (\nshExpMatch(host, '*.miso.saucelabs.com*') ||\nshExpMatch(host, '*.saucelabs.com') ||\nshExpMatch(host, 'saucelabs.com')\n) {\n// Send the required Sauce Traffic\n// to the External proxy\nreturn 'PROXY external.proxy.com:8080'\n}\n\n// Test VM HTTP traffic gets routed to the\n// Internal proxy to reach the site Under Test\nreturn 'PROXY internal.proxy.com:8080'\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Here's an example of a single-proxy PAC setup for public internet access:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="single_proxy.pac"',children:"// A proxy is required to reach external resources\nfunction FindProxyForURL(url, host) {\n// Internal calls for resources in your network\nif (\nshExpMatch(host, '*.auth.my-company.com') ||\nshExpMatch(host, '*staging.my-company.com') ||\nshExpMatch(host, 'internal-resource1.com')\n) {\nreturn 'DIRECT'\n}\n\n// All other traffic should\n// go to the public internet via proxy\nreturn 'PROXY my-company.org:8880'\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const o={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>b});var r=t(96540),o=t(18215),i=t(23104),s=t(56347),a=t(205),c=t(57485),l=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,i=h(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[l,d]=p({queryString:t,groupId:o}),[f,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,i]=(0,u.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:o}),g=(()=>{const e=l??f;return x({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{g&&c(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),y(e)}),[d,y,i]),tabValues:i}}var y=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),o=a[t].value;o!==r&&(l(n),s(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...i,className:(0,o.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function S(e){const n=f(e);return(0,m.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,m.jsx)(j,{...e,...n}),(0,m.jsx)(w,{...e,...n})]})}function b(e){const n=(0,y.A)();return(0,m.jsx)(S,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(96540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);