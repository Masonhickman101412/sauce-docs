"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[21763],{43672:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=s(74848),l=s(28453),t=s(11470),r=s(19365);const i={id:"connect",title:"Sauce Connect API Endpoints",sidebar_label:"Sauce Connect",description:"Retrieve information about or close your Sauce Connect tunnels."},o=void 0,d={id:"dev/api/connect",title:"Sauce Connect API Endpoints",description:"Retrieve information about or close your Sauce Connect tunnels.",source:"@site/docs/dev/api/connect.md",sourceDirName:"dev/api",slug:"/dev/api/connect",permalink:"/sauce-docs/pr-preview/pr-2913/dev/api/connect",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/api/connect.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724864962e3,frontMatter:{id:"connect",title:"Sauce Connect API Endpoints",sidebar_label:"Sauce Connect",description:"Retrieve information about or close your Sauce Connect tunnels."},sidebar:"dev",previous:{title:"Builds",permalink:"/sauce-docs/pr-preview/pr-2913/dev/api/builds"},next:{title:"Insights",permalink:"/sauce-docs/pr-preview/pr-2913/dev/api/insights"}},c={},u=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Get Tunnels for a User",id:"get-tunnels-for-a-user",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Responses",id:"responses",level:4},{value:"Get Tunnel Information",id:"get-tunnel-information",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Responses",id:"responses-1",level:4},{value:"Get Tunnel Version Downloads",id:"get-tunnel-version-downloads",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Responses",id:"responses-2",level:4},{value:"Get Current Jobs for a Tunnel",id:"get-current-jobs-for-a-tunnel",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Responses",id:"responses-3",level:4},{value:"Stop a Tunnel",id:"stop-a-tunnel",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Responses",id:"responses-4",level:4}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Use the Sauce Connect API methods to monitor and clean up your active proxy tunnels."}),"\n",(0,a.jsxs)(n.p,{children:["To download Sauce Connect, see ",(0,a.jsx)(n.a,{href:"/sauce-docs/pr-preview/pr-2913/secure-connections/sauce-connect/installation",children:"Sauce Connect Installation"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Refer to ",(0,a.jsx)(n.a,{href:"/dev/api",children:"Getting Started"})," for Authentication and Server information."]}),"\n",(0,a.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["A Sauce Labs account (",(0,a.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,a.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,a.jsxs)(n.li,{children:["Your Sauce Labs ",(0,a.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"get-tunnels-for-a-user",children:"Get Tunnels for a User"}),"\n",(0,a.jsxs)(s,{children:[(0,a.jsxs)("summary",{children:[(0,a.jsx)("span",{className:"api get",children:"GET"})," ",(0,a.jsx)("code",{children:"/rest/v1/{username}/tunnels"})]}),(0,a.jsx)("p",{}),'Returns Tunnel IDs or Tunnels Info for any currently running tunnels launched by or shared with the specified user.\nIt also allows to filter tunnels using an optional "filter" parameter that may take the following values:',(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)("code",{children:"filter=v2alpha"})," - a response will contain only tunnels that were started with ",(0,a.jsx)("code",{children:"--vm-version v2alpha"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)("code",{children:"filter=one_per_pool"})," - a response will contain only one (arbitrary) tunnel per tunnel pool."]}),"\n"]}),(0,a.jsx)(n.h4,{id:"parameters",children:"Parameters"}),(0,a.jsx)("table",{id:"table-api",children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"username"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| PATH | REQUIRED | STRING |"})}),(0,a.jsx)("p",{children:"The authentication username of the user whose tunnels you are requesting."})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"full"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| QUERY | OPTIONAL | BOOLEAN |"})}),(0,a.jsxs)("p",{children:["Set to ",(0,a.jsx)("code",{children:"true"})," to return all the tunnels info and not just IDs. Defaults to ",(0,a.jsx)("code",{children:"false"}),". "]})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"all"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| QUERY | OPTIONAL | BOOLEAN |"})}),(0,a.jsxs)("p",{children:["Set to ",(0,a.jsx)("code",{children:"true"})," to return the tunnels IDs/info for all the tunnels shared with the specified user. If this option is set, the response type would be a dictionary mapping user name to a list of tunnels. Defaults to ",(0,a.jsx)("code",{children:"false"}),". "]})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"filter"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| QUERY | OPTIONAL | STRING |"})}),(0,a.jsxs)("p",{children:["Predefined filter name that can be used to filter out the tunnels. Currently the following filters are supported: ",(0,a.jsx)("code",{children:"one_per_pool"}),", ",(0,a.jsx)("code",{children:"v2alpha"}),"."]})]})]})]})}),(0,a.jsxs)(t.A,{groupId:"dc-url",defaultValue:"US-West",values:[{label:"US-West",value:"US-West"},{label:"US-East",value:"US-East"},{label:"EU-Central",value:"EU-Central"}],children:[(0,a.jsx)(r.A,{value:"US-West",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.us-west-1.saucelabs.com/rest/v1/jim.smith/tunnels' \\\n--header 'Content-Type: application/json' | json_pp\n"})})}),(0,a.jsx)(r.A,{value:"US-East",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.us-east-4.saucelabs.com/rest/v1/jim.smith/tunnels' \\\n--header 'Content-Type: application/json' | json_pp\n"})})}),(0,a.jsx)(r.A,{value:"EU-Central",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.eu-central-1.saucelabs.com/rest/v1/jim.smith/tunnels' \\\n--header 'Content-Type: application/json' | json_pp\n"})})})]}),(0,a.jsx)(n.h4,{id:"responses",children:"Responses"}),(0,a.jsxs)("table",{id:"table-api",children:[(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"200"})}),(0,a.jsx)("td",{colSpan:"2",children:"Success."})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"404"})}),(0,a.jsx)("td",{colSpan:"2",children:"Not found."})]})})]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Response to the default request"',children:"['28e7c8133ede4588a891666dd35af1f8']\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Response to the request with an optional parameter full=true"',children:'[\n    {\n        "owner": "jim.smith",\n        "team_ids": [...],\n        "creation_time": 1618345938,\n        "domain_names": null,\n        "owner": "jim.smith",\n        "id": "28e7c8133ede4588a891666dd35af1f8",\n        "extra_info": "{\u2026}",\n        \u2026\n        "tunnel_identifier": "jim.smith_tunnel_id"\n    }\n]\n'})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Response to the request with an optional parameter all=true"',children:'{\n    "jim.smith": [\n        "28e7c8133ede4588a891666dd35af1f8"\n    ]\n}\n'})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Response to the request with all=true&full=true"',children:'{\n    "jim.smith": [\n      {\n          "owner": "jim.smith",\n          "team_ids": [...],\n          "creation_time": 1618345938,\n          "domain_names": null,\n          "owner": "jim.smith",\n          "id": "28e7c8133ede4588a891666dd35af1f8",\n          "extra_info": "{\u2026}",\n          \u2026\n          "tunnel_identifier": "jim.smith_tunnel_id"\n      }\n    ]\n}\n'})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"get-tunnel-information",children:"Get Tunnel Information"}),"\n",(0,a.jsxs)(s,{children:[(0,a.jsxs)("summary",{children:[(0,a.jsx)("span",{className:"api get",children:"GET"})," ",(0,a.jsx)("code",{children:"/rest/v1/{username}/tunnels/{tunnel_id}"})]}),(0,a.jsx)("p",{}),"Returns information about the specified tunnel.",(0,a.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),(0,a.jsxs)("table",{id:"table-api",children:[(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"username"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| PATH | REQUIRED | STRING |"})}),(0,a.jsx)("p",{children:"The authentication username of the owner of the requested tunnel."})]})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"tunnel_id"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| PATH | REQUIRED | STRING |"})}),(0,a.jsx)("p",{children:"The unique identifier of the requested tunnel."})]})]})})]}),(0,a.jsxs)(t.A,{groupId:"dc-url",defaultValue:"US-West",values:[{label:"US-West",value:"US-West"},{label:"US-East",value:"US-East"},{label:"EU-Central",value:"EU-Central"}],children:[(0,a.jsx)(r.A,{value:"US-West",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.us-west-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8' \\\n--header 'Content-Type: application/json' | json_pp\n"})})}),(0,a.jsx)(r.A,{value:"US-East",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.us-east-4.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8' \\\n--header 'Content-Type: application/json' | json_pp\n"})})}),(0,a.jsx)(r.A,{value:"EU-Central",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.eu-central-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8' \\\n--header 'Content-Type: application/json' | json_pp\n"})})})]}),(0,a.jsx)(n.h4,{id:"responses-1",children:"Responses"}),(0,a.jsxs)("table",{id:"table-api",children:[(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"200"})}),(0,a.jsx)("td",{colSpan:"2",children:"Success."})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"404"})}),(0,a.jsx)("td",{colSpan:"2",children:"Not found."})]})})]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Response"',children:'{\n    "owner": "jim.smith",\n    "team_ids": [...],\n    "creation_time": 1618345938,\n    "domain_names": null,\n    "id": "28e7c8133ede4588a891666dd35af1f8",\n    "extra_info": "{\u2026}",\n    "direct_domains": null,\n    "vm_version": "",\n    "no_ssl_bump_domains": null,\n    "shared_tunnel": false,\n    "metadata": {...},\n    "status": "running",\n    "is_ready": true,\n    "shutdown_reason" : null,\n    "shutdown_time" : null,\n    "user_shutdown": null,\n    "host": "maki3429.miso.saucelabs.com",\n    "ip_address": null,\n    "last_connected": 1618346660,\n    "launch_time": 1618345940,\n    "tunnel_identifier": "jim.smith_tunnel_id"\n}\n'})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"get-tunnel-version-downloads",children:"Get Tunnel Version Downloads"}),"\n",(0,a.jsxs)(s,{children:[(0,a.jsxs)("summary",{children:[(0,a.jsx)("span",{className:"api get",children:"GET"})," ",(0,a.jsx)("code",{children:"/rest/v1/public/tunnels/info/versions"})]}),(0,a.jsx)("p",{}),"Returns tunnel version download information.",(0,a.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),(0,a.jsx)("table",{id:"table-api",children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"client_version"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| QUERY | OPTIONAL | STRING |"})}),(0,a.jsxs)("p",{children:["Returns download information for the specified Sauce Connect client version (For example, ",(0,a.jsx)("code",{children:"4.7.1"}),")."]})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"client_host"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| QUERY | OPTIONAL | STRING |"})}),(0,a.jsxs)("p",{children:["Returns download information for the Sauce Connect Proxy version with the specified host OS and CPU Architecture (For example, ",(0,a.jsx)("code",{children:"darwin-amd64"}),"). "]})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"all"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| QUERY | OPTIONAL | BOOLEAN |"})}),(0,a.jsxs)("p",{children:["Set to ",(0,a.jsx)(n.code,{children:"true"})," to return download information for all available Sauce Connect Proxy versions. Defaults to ",(0,a.jsx)(n.code,{children:"false"}),"."]})]})]})]})}),(0,a.jsxs)(t.A,{groupId:"dc-url",defaultValue:"US-West",values:[{label:"US-West",value:"US-West"},{label:"US-East",value:"US-East"},{label:"EU-Central",value:"EU-Central"}],children:[(0,a.jsx)(r.A,{value:"US-West",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.us-west-1.saucelabs.com/rest/v1/public/tunnels/info/versions' | json_pp\n"})})}),(0,a.jsx)(r.A,{value:"US-East",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.us-east-4.saucelabs.com/rest/v1/public/tunnels/info/versions' | json_pp\n"})})}),(0,a.jsx)(r.A,{value:"EU-Central",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.eu-central-1.saucelabs.com/rest/v1/public/tunnels/info/versions' | json_pp\n"})})})]}),(0,a.jsx)(n.h4,{id:"responses-2",children:"Responses"}),(0,a.jsxs)("table",{id:"table-api",children:[(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"200"})}),(0,a.jsx)("td",{colSpan:"2",children:"Success."})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"404"})}),(0,a.jsx)("td",{colSpan:"2",children:"Not found."})]})})]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Response to the default request"',children:'{\n   "downloads" : {\n      "linux" : {\n         "download_url" : "https://saucelabs.com/downloads/sc-4.9.2-linux.tar.gz",\n         "sha1" : "<hash>"\n      },\n      "linux-arm64" : {\n         "download_url" : "https://saucelabs.com/downloads/sc-4.9.2-linux-arm64.tar.gz",\n         "sha1" : "<hash>"\n      },\n      "osx" : {\n         "download_url" : "https://saucelabs.com/downloads/sc-4.9.2-osx.zip",\n         "sha1" : "<hash>"\n      },\n      "win32" : {\n         "download_url" : "https://saucelabs.com/downloads/sc-4.9.2-win32.zip",\n         "sha1" : "<hash>"\n      }\n   },\n   "info_url" : "https://docs.saucelabs.com/secure-connections/sauce-connect/installation",\n   "latest_version" : "4.9.2",\n   "warning" : [\n      "Client host platform is not specified, the download URL cannot be determined"\n   ]\n}\n'})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Response to the request with an optional parameter all=true"',children:'{\n   "all_downloads" : {\n      "4.7.0" : {\n         "linux" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.7.0-linux.tar.gz",\n            "sha1" : "<hash>"\n         },\n         "osx" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.7.0-osx.zip",\n            "sha1" : "<hash>"\n         }\n      },\n      "4.7.1" : {\n         "linux" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.7.1-linux.tar.gz",\n            "sha1" : "<hash>"\n         },\n         "linux-arm64" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.7.1-linux-arm64.tar.gz",\n            "sha1" : "<hash>"\n         },\n         "osx" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.7.1-osx.zip",\n            "sha1" : "<hash>"\n         },\n         "win32" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.7.1-win32.zip",\n            "sha1" : "<hash>"\n         }\n      },\n      "4.8.0" : {\n         "linux" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.8.0-linux.tar.gz",\n            "sha1" : "<hash>"\n         },\n         "linux-arm64" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.8.0-linux-arm64.tar.gz",\n            "sha1" : "<hash>"\n         },\n         "osx" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.8.0-osx.zip",\n            "sha1" : "<hash>"\n         },\n         "win32" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.8.0-win32.zip",\n            "sha1" : "<hash>"\n         }\n      },\n      "4.8.1" : {\n         "linux" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.8.1-linux.tar.gz",\n            "sha1" : "<hash>"\n         },\n         "linux-arm64" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.8.1-linux-arm64.tar.gz",\n            "sha1" : "<hash>"\n         },\n         "osx" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.8.1-osx.zip",\n            "sha1" : "<hash>"\n         },\n         "win32" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.8.1-win32.zip",\n            "sha1" : "<hash>"\n         }\n      },\n      "4.8.2" : {\n         "linux" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.8.2-linux.tar.gz",\n            "sha1" : "<hash>"\n         },\n         "linux-arm64" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.8.2-linux-arm64.tar.gz",\n            "sha1" : "<hash>"\n         },\n         "osx" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.8.2-osx.zip",\n            "sha1" : "<hash>"\n         },\n         "win32" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.8.2-win32.zip",\n            "sha1" : "<hash>"\n         }\n      },\n      "4.9.0" : {\n         "linux" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.9.0-linux.tar.gz",\n            "sha1" : "<hash>"\n         },\n         "linux-arm64" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.9.0-linux-arm64.tar.gz",\n            "sha1" : "<hash>"\n         },\n         "osx" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.9.0-osx.zip",\n            "sha1" : "<hash>"\n         },\n         "win32" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.9.0-win32.zip",\n            "sha1" : "<hash>"\n         }\n      },\n      "4.9.1" : {\n         "linux" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.9.1-linux.tar.gz",\n            "sha1" : "<hash>"\n         },\n         "linux-arm64" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.9.1-linux-arm64.tar.gz",\n            "sha1" : "<hash>"\n         },\n         "osx" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.9.1-osx.zip",\n            "sha1" : "<hash>"\n         },\n         "win32" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.9.1-win32.zip",\n            "sha1" : "<hash>"\n         }\n      },\n      "4.9.2" : {\n         "linux" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.9.2-linux.tar.gz",\n            "sha1" : "<hash>"\n         },\n         "linux-arm64" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.9.2-linux-arm64.tar.gz",\n            "sha1" : "<hash>"\n         },\n         "win32" : {\n            "download_url" : "https://saucelabs.com/downloads/sc-4.9.2-win32.zip",\n            "sha1" : "<hash>"\n         }\n      }\n   },\n   "downloads" : {\n      "linux" : {\n         "download_url" : "https://saucelabs.com/downloads/sc-4.9.2-linux.tar.gz",\n         "sha1" : "<hash>"\n      },\n      "linux-arm64" : {\n         "download_url" : "https://saucelabs.com/downloads/sc-4.9.2-linux-arm64.tar.gz",\n         "sha1" : "<hash>"\n      },\n      "win32" : {\n         "download_url" : "https://saucelabs.com/downloads/sc-4.9.2-win32.zip",\n         "sha1" : "<hash>"\n      }\n   },\n   "info_url" : "https://docs.saucelabs.com/secure-connections/sauce-connect/installation",\n   "latest_version" : "4.9.2",\n   "warning" : [\n      "Client host platform is not specified, the download URL cannot be determined"\n   ]\n}\n'})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Response to the request with an optional parameter client_host=linux"',children:'{\n   "download_url" : "https://saucelabs.com/downloads/sc-4.9.2-linux.tar.gz",\n   "downloads" : {\n      "linux" : {\n         "download_url" : "https://saucelabs.com/downloads/sc-4.9.2-linux.tar.gz",\n         "sha1" : "<hash>"\n      },\n      "linux-arm64" : {\n         "download_url" : "https://saucelabs.com/downloads/sc-4.9.2-linux-arm64.tar.gz",\n         "sha1" : "<hash>"\n      },\n      "win32" : {\n         "download_url" : "https://saucelabs.com/downloads/sc-4.9.2-win32.zip",\n         "sha1" : "<hash>"\n      }\n   },\n   "info_url" : "https://docs.saucelabs.com/secure-connections/sauce-connect/installation",\n   "latest_version" : "4.9.2",\n   "sha1" : "<hash>"\n}\n\n'})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Response to the request with an optional parameter client_version=4.7.1"',children:'{\n   "client_version" : "4.7.1",\n   "downloads" : {\n      "linux" : {\n         "download_url" : "https://saucelabs.com/downloads/sc-4.9.2-linux.tar.gz",\n         "sha1" : "<hash>"\n      },\n      "linux-arm64" : {\n         "download_url" : "https://saucelabs.com/downloads/sc-4.9.2-linux-arm64.tar.gz",\n         "sha1" : "<hash>"\n      },\n      "win32" : {\n         "download_url" : "https://saucelabs.com/downloads/sc-4.9.2-win32.zip",\n         "sha1" : "<hash>"\n      }\n   },\n   "info_url" : "https://docs.saucelabs.com/secure-connections/sauce-connect/installation",\n   "latest_version" : "4.9.2",\n   "status" : "UPGRADE",\n   "warning" : [\n      "Client host platform is not specified, the download URL cannot be determined"\n   ]\n}\n'})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"get-current-jobs-for-a-tunnel",children:"Get Current Jobs for a Tunnel"}),"\n",(0,a.jsxs)(s,{children:[(0,a.jsxs)("summary",{children:[(0,a.jsx)("span",{className:"api get",children:"GET"})," ",(0,a.jsx)("code",{children:"/rest/v1/{username}/tunnels/{tunnel_id}/num_jobs"})]}),(0,a.jsx)("p",{}),"Returns the number of currently running jobs for the specified tunnel.",(0,a.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),(0,a.jsxs)("table",{id:"table-api",children:[(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"username"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| PATH | REQUIRED | STRING |"})}),(0,a.jsx)("p",{children:"The authentication username of the user whose tunnels you are requesting."})]})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"tunnel_id"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| PATH | REQUIRED | STRING |"})}),(0,a.jsx)("p",{children:"The unique identifier of the requested tunnel."})]})]})})]}),(0,a.jsxs)(t.A,{groupId:"dc-url",defaultValue:"US-West",values:[{label:"US-West",value:"US-West"},{label:"US-East",value:"US-East"},{label:"EU-Central",value:"EU-Central"}],children:[(0,a.jsx)(r.A,{value:"US-West",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.us-west-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8/num_jobs' \\\n--header 'Content-Type: application/json' | json_pp\n"})})}),(0,a.jsx)(r.A,{value:"US-East",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.us-east-4.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8/num_jobs' \\\n--header 'Content-Type: application/json' | json_pp\n"})})}),(0,a.jsx)(r.A,{value:"EU-Central",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.eu-central-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8/num_jobs' \\\n--header 'Content-Type: application/json' | json_pp\n"})})})]}),(0,a.jsx)(n.h4,{id:"responses-3",children:"Responses"}),(0,a.jsxs)("table",{id:"table-api",children:[(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"200"})}),(0,a.jsx)("td",{colSpan:"2",children:"Success."})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"404"})}),(0,a.jsx)("td",{colSpan:"2",children:"Not found."})]})})]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Response"',children:'{\n    "id": "28e7c8133ede4588a891666dd35af1f8",\n    "jobs_running": 1\n}\n'})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"stop-a-tunnel",children:"Stop a Tunnel"}),"\n",(0,a.jsxs)(s,{children:[(0,a.jsxs)("summary",{children:[(0,a.jsx)("span",{className:"api delete",children:"DELETE"})," ",(0,a.jsx)("code",{children:"/rest/v1/{username}/tunnels/{tunnel_id}"})]}),(0,a.jsx)("p",{}),"Shuts down the specified tunnel.",(0,a.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),(0,a.jsxs)("table",{id:"table-api",children:[(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"username"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| PATH | REQUIRED | STRING |"})}),(0,a.jsx)("p",{children:"The authentication username of the user whose tunnels you are requesting."})]})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"tunnel_id"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| PATH | REQUIRED | STRING |"})}),(0,a.jsx)("p",{children:"The unique identifier of the tunnel to stop."})]})]})})]}),(0,a.jsxs)(t.A,{groupId:"dc-url",defaultValue:"US-West",values:[{label:"US-West",value:"US-West"},{label:"US-East",value:"US-East"},{label:"EU-Central",value:"EU-Central"}],children:[(0,a.jsx)(r.A,{value:"US-West",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request DELETE 'https://api.us-west-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8' \\\n--header 'Content-Type: application/json' | json_pp\n"})})}),(0,a.jsx)(r.A,{value:"US-East",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request DELETE 'https://api.us-east-4.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8' \\\n--header 'Content-Type: application/json' | json_pp\n"})})}),(0,a.jsx)(r.A,{value:"EU-Central",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request DELETE 'https://api.eu-central-1.saucelabs.com/rest/v1/jim.smith/tunnels/28e7c8133ede4588a891666dd35af1f8' \\\n--header 'Content-Type: application/json' | json_pp\n"})})})]}),(0,a.jsx)(n.h4,{id:"responses-4",children:"Responses"}),(0,a.jsxs)("table",{id:"table-api",children:[(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"200"})}),(0,a.jsx)("td",{colSpan:"2",children:"Success."})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"404"})}),(0,a.jsx)("td",{colSpan:"2",children:"Not found."})]})})]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Sample Response"',children:'{\n    "result": true,\n    "id": "28e7c8133ede4588a891666dd35af1f8",\n    "jobs_running": 0\n}\n'})})]}),"\n",(0,a.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>r});s(96540);var a=s(34164);const l={tabItem:"tabItem_Ymn6"};var t=s(74848);function r(e){let{children:n,hidden:s,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,r),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>v});var a=s(96540),l=s(34164),t=s(23104),r=s(56347),i=s(205),o=s(57485),d=s(31682),c=s(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:l}}=e;return{value:n,label:s,attributes:a,default:l}}))}(s);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const l=(0,r.W6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o.aZ)(t),(0,a.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(l.location.search);n.set(t,e),l.replace({...l.location,search:n.toString()})}),[t,l])]}function j(e){const{defaultValue:n,queryString:s=!1,groupId:l}=e,t=h(e),[r,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:t}))),[d,u]=x({queryString:s,groupId:l}),[j,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,t]=(0,c.Dv)(s);return[l,(0,a.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:l}),b=(()=>{const e=d??j;return p({value:e,tabValues:t})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,t]),tabValues:t}}var m=s(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function S(e){let{className:n,block:s,selectedValue:a,selectValue:r,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.a_)(),c=e=>{const n=e.currentTarget,s=o.indexOf(n),l=i[s].value;l!==a&&(d(n),r(l))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...t,className:(0,l.A)("tabs__item",b.tabItem,t?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function w(e){let{lazy:n,children:s,selectedValue:t}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function E(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,l.A)("tabs-container",b.tabList),children:[(0,f.jsx)(S,{...n,...e}),(0,f.jsx)(w,{...n,...e})]})}function v(e){const n=(0,m.A)();return(0,f.jsx)(E,{...e,children:u(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var a=s(96540);const l={},t=a.createContext(l);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);