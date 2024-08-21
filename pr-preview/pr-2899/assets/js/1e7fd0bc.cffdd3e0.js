"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[89643],{76367:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=o(74848),i=o(28453),r=o(86025);const s={id:"mock-recording-with-kong",title:"Mock Recording with Kong (Deprecated)",sidebar_label:"Mock Recording with Kong (Deprecated)",keywords:["api-testing","mocking","servicevirtualization","kong"]},a=void 0,c={id:"api-testing/on-prem/mocking/mock-recording-with-kong",title:"Mock Recording with Kong (Deprecated)",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/mocking/mock-recording-with-kong.md",sourceDirName:"api-testing/on-prem/mocking",slug:"/api-testing/on-prem/mocking/mock-recording-with-kong",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/mocking/mock-recording-with-kong",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/mocking/mock-recording-with-kong.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"mock-recording-with-kong",title:"Mock Recording with Kong (Deprecated)",sidebar_label:"Mock Recording with Kong (Deprecated)",keywords:["api-testing","mocking","servicevirtualization","kong"]},sidebar:"apif",previous:{title:"Expressions in Mocked APIs",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/mocking/expressions-in-mocked-apis"},next:{title:"Generate a Status Page",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/how-to/generate-a-status-page"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"What We Need",id:"what-we-need",level:2},{value:"Starting Kong",id:"starting-kong",level:2},{value:"Proxying a Route",id:"proxying-a-route",level:2},{value:"Route Details",id:"route-details",level:3},{value:"Test the Route",id:"test-the-route",level:3},{value:"Recording a Mock Endpoint",id:"recording-a-mock-endpoint",level:2},{value:"Activate Mock Recording:",id:"activate-mock-recording",level:3},{value:"Record an Endpoint",id:"record-an-endpoint",level:3},{value:"Query the Recorded Mock API",id:"query-the-recorded-mock-api",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o,{children:(0,t.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Legacy Documentation"}),(0,t.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,t.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["The latest version of Kong is not supported by API Fortress. However, we have now released our own Microgateway that you can use to do mock recording as well as many other features! Click here to download ",(0,t.jsx)(n.a,{href:"https://github.com/apifortress/afthem",children:"AFtheM"})," and learn more about the ",(0,t.jsx)(n.a,{href:"https://github.com/apifortress/afthem/tree/master/doc",children:"features"})," here."]})}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["Mock recording allows an API Fortress user to pass API requests and responses directly into the API Fortress mocking platform. This largely eliminates the need to manually create mock response cases. To do so, we're making use of the ",(0,t.jsx)(n.a,{href:"https://konghq.com",children:"Kong Microgateway"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The process is divided into a few parts. Here's how we're going to approach it:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"First, we're going to turn on the Kong proxy server."}),"\n",(0,t.jsx)(n.li,{children:"Next, we're going to create a proxied endpoint."}),"\n",(0,t.jsx)(n.li,{children:"Finally, we're going to push that proxied endpoint into API Fortress mocking."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["A few of these steps are fairly technical, but we're going to be as explicit as possible with the documentation and as always, if you need assistance, feel free to reach out to ",(0,t.jsx)(n.a,{href:"mailto:support@apifortress.com",children:"support@apifortress.com"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"what-we-need",children:"What We Need"}),"\n",(0,t.jsx)(n.p,{children:"Let's make sure we have everything we need:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["An updated version of the API Fortress ",(0,t.jsx)(n.code,{children:"core/docker-compose.yml"})," which includes the Kong section at the end. The bottom of your docker-compose should look like this:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"#APIFORTRESS KONG\napifortress-kong:\nimage: apifortress/kong\nhostname: kong.apifortress\nnetworks:\napifortress:\naliases:\n- kong.apifortress\nenvironment:\nKONG\\_DATABASE: postgres\nKONG\\_PG\\_HOST: postgres.apifortress\nKONG\\_PG\\_USER: \\*\\*\\*\\*\\*\\*\\*\\*\nKONG\\_PG\\_PASSWORD: \\*\\*\\*\\*\\*\\*\\*\\*\nKONG\\_ADMIN\\_LISTEN: 0.0.0.0:8001\nKONG\\_PLUGINS: fortress-http-log,file-log-extended,request-transformer,upstream-replace\nKONG\\_PROXY\\_ERROR\\_LOG: /dev/stdout\nports:\n- 8000:8000\n- 8001:8001\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The initialization script, ",(0,t.jsx)(n.code,{children:"init_kong.sh"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The start script, ",(0,t.jsx)(n.code,{children:"start\\_kong.sh"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If we have all of the above, perfect! We're ready to start. If not, feel free to reach out to ",(0,t.jsx)(n.a,{href:"mailto:support@apifortress.com",children:"support@apifortress.com"})," to let us know what you need!"]}),"\n",(0,t.jsx)(n.h2,{id:"starting-kong",children:"Starting Kong"}),"\n",(0,t.jsx)(n.p,{children:"First, we need to ensure that at the API Fortress Postgres instance is running. Execute the following command from the command line and ensure that it is running:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo docker ps\n"})}),"\n",(0,t.jsx)(n.p,{children:"The image below is the entry that you're looking for:"}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/11/Screen-Shot-2018-11-08-at-10.05.35-AM.png"),alt:"screeenshot"}),"\n",(0,t.jsxs)(n.p,{children:["Next, we need to initialize Kong. This is done by running the previously mentioned script, ",(0,t.jsx)(n.code,{children:"_init_kong.sh_"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Issue the following command from the command line:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo ./init_kong.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once Kong has finished initializing, we can proceed."}),"\n",(0,t.jsx)(n.p,{children:"Next, we need to start the Kong container itself. We do so by issuing the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo docker-compose up -d apifortress-kong\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once the container has finished starting, we can do a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo docker ps\n"})}),"\n",(0,t.jsx)(n.p,{children:"To view the currently running containers and verify that we started it successfully."}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/11/Screen-Shot-2018-11-07-at-2.09.31-PM.png"),alt:"screeenshot"}),"\n",(0,t.jsx)(n.p,{children:"Finally, we can verify that the proxy is up and running by issuing the following cURL command from the command line, or an identically structured HTTP request from the HTTP client of your choice (note: replace the 'apif.example.com' component with the corresponding part of your instances URL):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl -v http://apif.example.com:8001\n"})}),"\n",(0,t.jsx)(n.p,{children:"A positive response from this route indicates that the proxy server is up and running. Congratulations! You now have a live proxy server!"}),"\n",(0,t.jsx)(n.p,{children:"Our last step in the setup phase is creating an API Fortress API key. The gif below shows the process."}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/11/make_api_key.gif"),alt:"make_api_key.gif"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Click the gear in the upper right corner of the view"}),"\n",(0,t.jsx)(n.li,{children:'Click "API Keys" in the navigation bar on the left'}),"\n",(0,t.jsx)(n.li,{children:'Click "+API Key"'}),"\n",(0,t.jsx)(n.li,{children:"Name and save your API Key. It's helpful at this point to copy the key and secret to an easy to reach location, as we'll need it in later steps."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://apifortress.com/doc/proxying-a-route/",children:"NEXT - Step 2: Proxying a Route"})}),"\n",(0,t.jsx)(n.h2,{id:"proxying-a-route",children:"Proxying a Route"}),"\n",(0,t.jsx)(n.p,{children:"Alright! The proxy is up. Let's learn how to proxy a route."}),"\n",(0,t.jsx)(n.admonition,{title:"First, an important note!",type:"note",children:(0,t.jsxs)(n.p,{children:["It is ideal for every subdomain mentioned herein to have a DNS entry pointed at the server running API Fortress. Our suggestion is, wherever possible, to introduce a wildcard entry. That is to say, if API Fortress is running at ",(0,t.jsx)(n.strong,{children:"'apif.example.com'"}),", the wildcard entry of ",(0,t.jsx)(n.strong,{children:"'*.apif.example.com'"})," would point at the same IP address and allow every prepended domain to reach the same server."]})}),"\n",(0,t.jsx)(n.p,{children:"In order to proxy an API route, we need to send the following request to the proxy via HTTP (again, this can be done via cURL or your HTTP client of choice):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'curl -v -XPOST -d "name=apif" -d "upstream_url=http://demoapi.apifortress.com" -d "hosts=proxy-demoapi.apif.example.com" apif.example.com:8001/apis\n'})}),"\n",(0,t.jsx)(n.h3,{id:"route-details",children:"Route Details"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name"}),": the name of the API profile"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"upstream_url"}),": the origin URL (the destination that we're passing through the proxy on our way to)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hosts"}),": A list of hosts that will trigger this API profile (the URL(s) that will trigger this proxied response)"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["So, we're sending a post to ",(0,t.jsx)(n.code,{children:"apif.example.com:8001/apis"})," with headers defining a ",(0,t.jsx)(n.code,{children:"name"}),", an ",(0,t.jsx)(n.code,{children:"upstream_url"})," and ",(0,t.jsx)(n.code,{children:"hosts"}),". The result is a profile of a proxied API."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"name"})," of the profile is ",(0,t.jsx)(n.code,{children:'"apif"'}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"upstream_url"})," is ",(0,t.jsx)(n.code,{children:'"http://demoapi.apifortress.com"'})]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"host"})," for the profile is ",(0,t.jsx)(n.code,{children:'"proxy-demoapi.apif.example.com"'})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Naturally, when you do this yourself, you'll be replacing ",(0,t.jsx)(n.code,{children:'"apif.example.com"'})," with the URL of your API Fortress instance."]}),"\n",(0,t.jsx)(n.h3,{id:"test-the-route",children:"Test the Route"}),"\n",(0,t.jsx)(n.p,{children:"The last step in the setup phase would be to test the actual proxied route itself. To do so, execute the following command in the command line or send it with the HTTP client of your choice:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl -v -H 'key:ABC123' http://proxy-demoapi.apif.example.com:8000/api/retail/product\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here, the 'header",":value","' string would be replaced with any required header key/value pairs that you need to submit. The URL would be replaced with the URL previously defined as the host, appended with port 8000, and then followed by any necessary routing. Our expected response should match the response of the endpoint that we're proxying, provided we're passing the correct headers."]}),"\n",(0,t.jsx)(n.h2,{id:"recording-a-mock-endpoint",children:"Recording a Mock Endpoint"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["As with creating the actual proxied endpoints, creating recorded mocks requires a modification of the DNS. Adding a wildcard entry for the mock server (",(0,t.jsx)(n.code,{children:"*.demoapi-mocks.apif.example.com"}),") will allow these requests to be properly routed once the mocks are recorded."]})}),"\n",(0,t.jsx)(n.h3,{id:"activate-mock-recording",children:"Activate Mock Recording:"}),"\n",(0,t.jsxs)(n.p,{children:["The next step is to activate the ",(0,t.jsx)(n.code,{children:"fotress-http-log"})," plugin for Kong. In order to do so, we must format and send the following request, either through cURL or the HTTP client of your choice:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'curl -v -XPOST -d "name=fortress-http-log" -d "config.disable_on_header=x-mock" -d "config.http_endpoint=http://dashboard.apifortress:8080/app/api/rest/v3/1/mocks/push/raw" -d "config.api_key=yourAPIKey" -d "config.secret=yourAPISecret" -d "config.mock_domain=demoapi-mocks.apif.example.com" apif.example.com:8001/apis/3389fcee-3ada-4ed6-957b-082085601111/plugins\n'})}),"\n",(0,t.jsx)(n.p,{children:"Another big HTTP request! Let's unpack the components therein."}),"\n",(0,t.jsx)(n.p,{children:"Initially, we're passing a number of url-encoded key/value pairs in the POST body (commonly known as post parameters). These values are largely static."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"config.api_key"}),": The ",(0,t.jsx)(n.em,{children:"API Key"})," value created in ",(0,t.jsx)(n.a,{href:"#starting-kong",children:"step 1"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"config.secret"}),": The ",(0,t.jsx)(n.em,{children:"API Secret"})," value created in ",(0,t.jsx)(n.a,{href:"#starting-kong",children:"step 1"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"config.mock_domain"}),": The mock domain you wish these routes to be appended to in API Fortress Mocking. ",(0,t.jsx)(n.em,{children:"It does not need to already exist."})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The URL we're actually sending the request to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"apif.example.com:8001/apis/3389fcee-3ada-4ed6-957b-082085601111/plugins\n"})}),"\n",(0,t.jsxs)(n.p,{children:["needs to have the first part of the URL (",(0,t.jsx)(n.code,{children:"apif.example.com"}),") replaced with the URL of your self-hosted/on-premises API Fortress instance."]}),"\n",(0,t.jsx)(n.p,{children:"Once this request has successfully been sent, the fortress-http-log plugin for Kong will be active, and mock recording will be enabled!"}),"\n",(0,t.jsx)(n.h3,{id:"record-an-endpoint",children:"Record an Endpoint"}),"\n",(0,t.jsx)(n.p,{children:"Record a mock by calling the proxied API. Issue the following call from the command line or from the HTTP client of your choosing:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl -v -H 'key:ABC123' http://proxy-demoapi.apif.example.com:8000/api/retail/product\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this case, we'd be recording the ",(0,t.jsx)(n.code,{children:"/api/retail/product"})," route of our proxied API to the mock domain we configured in the first call (",(0,t.jsx)(n.code,{children:"demoapi-mocks.apif.example.com"}),"). As always, note that the proxy route in this call must be replaced with the proxy route that you created. Also, note that the port in this case is ",(0,t.jsx)(n.code,{children:"8000"})," rather than ",(0,t.jsx)(n.code,{children:"8001"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"query-the-recorded-mock-api",children:"Query the Recorded Mock API"}),"\n",(0,t.jsx)(n.p,{children:"Finally, we can verify the new mock route in two primary ways. First, we should now see it in the Mocking interface in API Fortress. Second, we can query the route directly via cURL or the HTTP client of your choosing:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl -v -H 'x-mock:true' http://proxy-demoapi.apif.example.com:8000/api/retail/product\n"})}),"\n",(0,t.jsx)(n.p,{children:"We should receive the same expected response to this call that we receive when polling either the actual or the proxied API. Note that in this case, the previously required header is no longer explicitly required, and that it's been replaced with a header that requests the mock endpoint specifically."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(96540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);