"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[3409],{22157:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>j,frontMatter:()=>t,metadata:()=>c,toc:()=>h});var r=n(74848),i=n(28453),l=n(11470),d=n(19365);const t={id:"builds",title:"Builds API Endpoints",sidebar_label:"Builds",description:"Retrieve information about the Sauce Labs tests that have been grouped together in builds."},a=void 0,c={id:"dev/api/builds",title:"Builds API Endpoints",description:"Retrieve information about the Sauce Labs tests that have been grouped together in builds.",source:"@site/docs/dev/api/builds.md",sourceDirName:"dev/api",slug:"/dev/api/builds",permalink:"/sauce-docs/pr-preview/pr-2911/dev/api/builds",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/api/builds.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"builds",title:"Builds API Endpoints",sidebar_label:"Builds",description:"Retrieve information about the Sauce Labs tests that have been grouped together in builds."},sidebar:"dev",previous:{title:"Jobs",permalink:"/sauce-docs/pr-preview/pr-2911/dev/api/jobs"},next:{title:"Sauce Connect",permalink:"/sauce-docs/pr-preview/pr-2911/dev/api/connect"}},o={},h=[{value:"Lookup Builds",id:"lookup-builds",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Responses",id:"responses",level:4},{value:"Get a Specific Build",id:"get-a-specific-build",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Responses",id:"responses-1",level:4},{value:"Lookup the Build for a Specific Job",id:"lookup-the-build-for-a-specific-job",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Responses",id:"responses-2",level:4},{value:"Lookup Jobs in a Build",id:"lookup-jobs-in-a-build",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Responses",id:"responses-3",level:4}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Builds are a means of categorizing your jobs on Sauce Labs, allowing you to view related jobs together for greater insight. The Builds API methods retrieve information about the builds and the jobs assigned to them."}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Builds are exclusive to the device source on which the jobs were run, meaning you cannot group real device tests and emulator/simulator tests in the same build. Therefore, all Build API methods require a ",(0,r.jsx)(s.code,{children:"{build_source}"})," parameter."]})}),"\n",(0,r.jsxs)(s.p,{children:["Refer to ",(0,r.jsx)(s.a,{href:"/dev/api",children:"Getting Started"})," for Authentication and Server information."]}),"\n",(0,r.jsx)(s.h3,{id:"lookup-builds",children:"Lookup Builds"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsxs)("summary",{children:[(0,r.jsx)("span",{className:"api get",children:"GET"})," ",(0,r.jsx)("code",{children:"/v2/builds/{build_source}/"})]}),(0,r.jsx)("p",{}),"Queries the requesting account and returns a summary of each build matching the query, including the ",(0,r.jsx)(s.code,{children:"ID"})," value, which may be a required parameter of other API calls related to a specific build.","You can narrow the results of your query using any of the optional filtering parameters.",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),(0,r.jsxs)("table",{id:"table-api",children:[(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"build_source"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| PATH | REQUIRED | ENUM |"})}),(0,r.jsxs)("p",{children:["The type of device for which you are getting builds. Valid values are:",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"rdc"})," - Real Device Builds"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"vdc"})," - Emulator or Simulator Builds"]})]})]})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"user_id"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | STRING |"})}),(0,r.jsxs)("p",{children:["Returns any builds owned by the specified user that the authenticated user is authorized to view. You can look up the IDs of users in your organization using the ",(0,r.jsx)("a",{href:"/dev/api/accounts/#lookup-users",children:"Lookup Users"})," endpoint."]})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"org_id"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | STRING |"})}),(0,r.jsx)("p",{children:"Returns all builds in the specified organization that the authenticated user is authorized to view."})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"group_id"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | STRING |"})}),(0,r.jsx)("p",{children:"Returns all builds associated with the specified group that the authenticated user is authorized to view."})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"team_id"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | STRING |"})}),(0,r.jsx)("p",{children:"Returns all builds for the specified team that the authenticated user is authorized to view."})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"status"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | ARRAY |"})}),(0,r.jsxs)("p",{children:["Returns only builds where the status matches the list of values specified. Valid values are:",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"running"})," - Any job in the build has a state of ",(0,r.jsx)("i",{children:"running"}),", ",(0,r.jsx)("i",{children:"new"}),", or ",(0,r.jsx)("i",{children:"queued"}),"."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"error"})," - The build is not ",(0,r.jsx)("b",{children:"running"})," and at least one job in the build has a state of ",(0,r.jsx)("i",{children:"errored"}),"."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"failed"})," - The build is not ",(0,r.jsx)("b",{children:"running"})," or ",(0,r.jsx)("b",{children:"error"})," and at least one job in the build has a state of ",(0,r.jsx)("i",{children:"failed"}),"."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"complete"})," - The build is not ",(0,r.jsx)("b",{children:"running"}),", ",(0,r.jsx)("b",{children:"error"}),", or ",(0,r.jsx)("b",{children:"failed"}),", but the number of jobs with a state of ",(0,r.jsx)("i",{children:"finished"})," does not equal the number of jobs marked ",(0,r.jsx)("i",{children:"passed"}),", so at least one job has a state other than ",(0,r.jsx)("i",{children:"passed"}),"."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"success"})," -- All jobs in the build have a state of ",(0,r.jsx)("i",{children:"passed"}),"."]})]})]})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"start"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | DATE-TIME |"})}),(0,r.jsx)("p",{children:"Returns only builds where the earliest job ran on or after this Unix timestamp."})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"end"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | DATE-TIME |"})}),(0,r.jsx)("p",{children:"Returns only builds where the latest job ran on or before this Unix timestamp."})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"limit"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | INTEGER |"})}),(0,r.jsx)("p",{children:"The maximum number of builds to return in the response."})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"name"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | STRING |"})}),(0,r.jsx)("p",{children:"Returns builds with a matching build name."})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"offset"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | INTEGER |"})}),(0,r.jsx)("p",{children:"Begins the set of results at this index number."})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"sort"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | ENUM |"})}),(0,r.jsxs)("p",{children:["Sorts the results in alphabetically ascending or descending order. Valid values are:",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"asc"})," - Ascending"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"desc"})," - Descending"]})]})]})]})]})})]}),(0,r.jsxs)(l.A,{groupId:"dc-url",defaultValue:"us",values:[{label:"United States",value:"us"},{label:"Europe",value:"eu"}],children:[(0,r.jsx)(d.A,{value:"us",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.us-west-1.saucelabs.com/v2/builds/vdc/' | json_pp\n"})})}),(0,r.jsx)(d.A,{value:"eu",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.eu-central-1.saucelabs.com/v2/builds/vdc/' | json_pp\n"})})})]}),(0,r.jsx)(s.h4,{id:"responses",children:"Responses"}),(0,r.jsxs)("table",{id:"table-api",children:[(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"200"})}),(0,r.jsx)("td",{colSpan:"2",children:"Success. Build info returned."})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"404"})}),(0,r.jsx)("td",{colSpan:"2",children:"Not found."})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"422"})}),(0,r.jsxs)("td",{colSpan:"2",children:["Validation Error. One or more of the parameters in the request is not formatted properly. The error response ",(0,r.jsx)(s.code,{children:"msg"})," property may contain additional details about the specific failure."]})]})})]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",metastring:'title="Sample Response"',children:'{\n    "builds": [\n        {\n            "creation_time": 1631824314,\n            "deletion_time": null,\n            "end_time": 1631824422,\n            "group_id": "8cdb4afe7cba4846b5cae339a87e3b70",\n            "id": "780fbea7d2313b258a935e1b7f7e48e2",\n            "jobs": {\n                "completed": 0,\n                "errored": 0,\n                "failed": 0,\n                "finished": 3,\n                "passed": 3,\n                "public": 0,\n                "queued": 0,\n                "running": 0\n            },\n            "modification_time": 1631824426,\n            "name": "DevX SS",\n            "org_id": "7fb25570b4064716b9b6daae1a846790",\n            "owner_id": "5c207d581a48462e9c0eb21d30b931e2",\n            "passed": null,\n            "public": false,\n            "run": 0,\n            "start_time": 1631824314,\n            "status": "success",\n            "team_id": "98b9f34e596047d99abba56f517846a9"\n        },\n        {more build results...}\n    ]\n}\n'})})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"get-a-specific-build",children:"Get a Specific Build"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsxs)("summary",{children:[(0,r.jsx)("span",{className:"api get",children:"GET"})," ",(0,r.jsx)("code",{children:"/v2/builds/{build_source}/{build_id}/"})]}),(0,r.jsx)("p",{}),"Retrieve the details related to a specific build by passing its unique ID in the request.",(0,r.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),(0,r.jsxs)("table",{id:"table-api",children:[(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"build_source"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| PATH | REQUIRED | ENUM |"})}),(0,r.jsxs)("p",{children:["The type of test device associated with the build. Valid values are:",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"rdc"})," - Real Device Builds"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"vdc"})," - Emulator or Simulator Builds"]})]})]})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"build_id"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| PATH | REQUIRED | STRING |"})}),(0,r.jsxs)("p",{children:["The unique identifier of the build to retrieve. You can look up build IDs in your organization using the ",(0,r.jsx)("a",{href:"#lookup-builds",children:"Lookup Builds"})," endpoint."]})]})]})})]}),(0,r.jsxs)(l.A,{groupId:"dc-url",defaultValue:"us",values:[{label:"United States",value:"us"},{label:"Europe",value:"eu"}],children:[(0,r.jsx)(d.A,{value:"us",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.us-west-1.saucelabs.com/v2/builds/vdc/6027d9672cc430c89582fa69e96ae7b8/' | json_pp\n"})})}),(0,r.jsx)(d.A,{value:"eu",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.eu-central-1.saucelabs.com/v2/builds/vdc/6027d9672cc430c89582fa69e96ae7b8/' | json_pp\n"})})})]}),(0,r.jsx)(s.h4,{id:"responses-1",children:"Responses"}),(0,r.jsxs)("table",{id:"table-api",children:[(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"200"})}),(0,r.jsx)("td",{colSpan:"2",children:"Success. Build info returned."})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"404"})}),(0,r.jsx)("td",{colSpan:"2",children:"Not found."})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"422"})}),(0,r.jsxs)("td",{colSpan:"2",children:["Validation Error. One or more of the parameters in the request is not formatted properly. The error response ",(0,r.jsx)(s.code,{children:"msg"})," property may contain additional details about the specific failure."]})]})})]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",metastring:'title="Sample Response"',children:'{\n    "creation_time": 1632226660,\n    "deletion_time": null,\n    "end_time": 1632226689,\n    "group_id": "8cdb4afe7cba4846b5cae339a87e3b70",\n    "id": "6027d9672cc430c89582fa69e96ae7b8",\n    "jobs": {\n        "completed": 0,\n        "errored": 0,\n        "failed": 1,\n        "finished": 3,\n        "passed": 2,\n        "public": 0,\n        "queued": 0,\n        "running": 0\n    },\n    "modification_time": 1632226691,\n    "name": "insights-vdc-test-20210921-121737",\n    "org_id": "7fb25570b4064716b9b6daae1a846790",\n    "owner_id": "c315e56ecd954018b9a0bc6e85732826",\n    "passed": null,\n    "public": false,\n    "run": 0,\n    "start_time": 1632226659,\n    "status": "failed",\n    "team_id": "64e0d884a79b4f81ba6bc1025c10eb63"\n}\n'})})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"lookup-the-build-for-a-specific-job",children:"Lookup the Build for a Specific Job"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsxs)("summary",{children:[(0,r.jsx)("span",{className:"api get",children:"GET"})," ",(0,r.jsx)("code",{children:"/v2/builds/{build_source}/jobs/{job_id}/build/"})]}),(0,r.jsx)("p",{}),"Retrieves the build details for a known job.",(0,r.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),(0,r.jsxs)("table",{id:"table-api",children:[(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"build_source"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| PATH | REQUIRED | ENUM |"})}),(0,r.jsxs)("p",{children:["The type of test device associated with the job and build. Valid values are:",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"rdc"})," - Real Device Builds"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"vdc"})," - Emulator or Simulator Builds"]})]})]})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"job_id"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| PATH | REQUIRED | STRING |"})}),(0,r.jsxs)("p",{children:["The unique identifier of the job whose build you are looking up. You can look up job IDs in your organization using the ",(0,r.jsx)("a",{href:"/dev/api/jobs/#get-jobs",children:"Get Jobs"})," endpoint."]})]})]})})]}),(0,r.jsxs)(l.A,{groupId:"dc-url",defaultValue:"us",values:[{label:"United States",value:"us"},{label:"Europe",value:"eu"}],children:[(0,r.jsx)(d.A,{value:"us",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.us-west-1.saucelabs.com/v2/builds/vdc/jobs/eacde1439dd0437e807b61845d8e92b8/build/' | json_pp\n"})})}),(0,r.jsx)(d.A,{value:"eu",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.eu-central-1.saucelabs.com/v2/builds/vdc/jobs/eacde1439dd0437e807b61845d8e92b8/build/' | json_pp\n"})})})]}),(0,r.jsx)(s.h4,{id:"responses-2",children:"Responses"}),(0,r.jsxs)("table",{id:"table-api",children:[(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"200"})}),(0,r.jsx)("td",{colSpan:"2",children:"Success. Build info returned."})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"404"})}),(0,r.jsx)("td",{colSpan:"2",children:"Not found."})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"422"})}),(0,r.jsxs)("td",{colSpan:"2",children:["Validation Error. One or more of the parameters in the request is not formatted properly. The error response ",(0,r.jsx)(s.code,{children:"msg"})," property may contain additional details about the specific failure."]})]})})]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",metastring:'title="Sample Response"',children:'{\n    "creation_time": 1631824314,\n    "deletion_time": null,\n    "end_time": 1631824422,\n    "group_id": "8cdb4afe7cba4846b5cae339a87e3b70",\n    "id": "780fbea7d2313b258a935e1b7f7e48e2",\n    "jobs": {\n        "completed": 0,\n        "errored": 0,\n        "failed": 0,\n        "finished": 3,\n        "passed": 3,\n        "public": 0,\n        "queued": 0,\n        "running": 0\n    },\n    "modification_time": 1631824426,\n    "name": "DevX SS",\n    "org_id": "7fb25570b4064716b9b6daae1a846790",\n    "owner_id": "5c207d581a48462e9c0eb21d30b931e2",\n    "passed": null,\n    "public": false,\n    "run": 0,\n    "start_time": 1631824314,\n    "status": "success",\n    "team_id": "98b9f34e596047d99abba56f517846a9"\n}\n'})})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"lookup-jobs-in-a-build",children:"Lookup Jobs in a Build"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsxs)("summary",{children:[(0,r.jsx)("span",{className:"api get",children:"GET"})," ",(0,r.jsx)("code",{children:"/v2/builds/{build_source}/{build_id}/jobs/"})]}),(0,r.jsx)("p",{}),"Returns information about all jobs associated with the specified build. You can limit which jobs are returned using any of the optional filtering parameters.",(0,r.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),(0,r.jsxs)("table",{id:"table-api",children:[(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"build_source"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| PATH | REQUIRED | ENUM |"})}),(0,r.jsxs)("p",{children:["The type of test device associated with the build and its jobs. Valid values are:",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"rdc"})," - Real Device Builds"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"vdc"})," - Emulator or Simulator Builds"]})]})]})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"build_id"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| PATH | REQUIRED | STRING |"})}),(0,r.jsxs)("p",{children:["The unique identifier of the build whose jobs you are looking up. You can look up build IDs in your organization using the ",(0,r.jsx)("a",{href:"#lookup-builds",children:"Lookup Builds"})," endpoint."]})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"modified_since"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | DATE-TIME |"})}),(0,r.jsx)("p",{children:"Returns only jobs that have been modified after this unicode timestamp."})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"completed"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | BOOLEAN |"})}),(0,r.jsxs)("p",{children:["Returns jobs based on whether they completed, meaning the tests ran uninterrupted to completion:",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"true"})," - Return jobs that have a completed state of true."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"false"})," - Return jobs that have a completed state of false."]})]})]})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"errored"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | BOOLEAN |"})}),(0,r.jsxs)("p",{children:["Returns jobs based on their ",(0,r.jsx)("code",{children:"errored"})," state:",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"true"})," - Return jobs that have an errored state of true."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"false"})," - Return jobs that have an errored state of false."]})]})]})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"failed"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | BOOLEAN |"})}),(0,r.jsxs)("p",{children:["Returns jobs based on their ",(0,r.jsx)("code",{children:"failed"})," state:",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"true"})," - Return jobs that have a failed state of true."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"false"})," - Return jobs that have a failed state of false."]})]})]})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"finished"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | BOOLEAN |"})}),(0,r.jsxs)("p",{children:["Returns jobs based on whether they have finished, meaning they are no longer ",(0,r.jsx)("i",{children:"running"}),", but may not have run to completion:",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"true"})," - Return jobs that have a finished state of true."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"false"})," - Return jobs that have a finished state of false."]})]})]})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"new"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | BOOLEAN |"})}),(0,r.jsxs)("p",{children:["Returns jobs based on their ",(0,r.jsx)("code",{children:"new"})," state:",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"true"})," - Return jobs that have a new state of true."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"false"})," - Return jobs that have a new state of false."]})]})]})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"passed"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | BOOLEAN |"})}),(0,r.jsxs)("p",{children:["Returns jobs based on their ",(0,r.jsx)("code",{children:"passed"})," state:",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"true"})," - Return jobs that have a passed state of true."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"false"})," - Return jobs that have a passed state of false."]})]})]})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"public"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | BOOLEAN |"})}),(0,r.jsxs)("p",{children:["Returns jobs based on whether they were run on public devices:",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"true"})," - Return jobs that have a public state of true."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"false"})," - Return jobs that have a public state of false."]})]})]})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"queued"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | BOOLEAN |"})}),(0,r.jsxs)("p",{children:["Returns jobs based on whether their current state is ",(0,r.jsx)("i",{children:"queued"}),":",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"true"})," - Return jobs that have a queued state of true."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"false"})," - Return jobs that have a queued state of false."]})]})]})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"running"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | BOOLEAN |"})}),(0,r.jsxs)("p",{children:["Returns jobs based on whether they are currently in a ",(0,r.jsx)("i",{children:"running"})," state:",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"true"})," - Return jobs that are currently running."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"false"})," - Return jobs that are not currently running."]})]})]})]})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"faulty"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| QUERY | OPTIONAL | BOOLEAN |"})}),(0,r.jsxs)("p",{children:["Returns jobs based on whether they are identified as ",(0,r.jsx)("i",{children:"faulty"}),", meaning either ",(0,r.jsx)("i",{children:"errored"})," or ",(0,r.jsx)("i",{children:"failed"})," state is true.",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"true"})," - Return jobs that have a faulty state of true."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"false"})," - Return jobs that have a faulty state of false."]})]})]})]})]})})]}),(0,r.jsxs)(l.A,{groupId:"dc-url",defaultValue:"us",values:[{label:"United States",value:"us"},{label:"Europe",value:"eu"}],children:[(0,r.jsx)(d.A,{value:"us",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.us-west-1.saucelabs.com/v2/builds/vdc/a633354c3bc232ee8871f24332046cb9/jobs/?finished=true' | json_pp\n"})})}),(0,r.jsx)(d.A,{value:"eu",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",metastring:'title="Sample Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request GET 'https://api.eu-central-1.saucelabs.com/v2/builds/rdc/fe121deb65333ba5948c2c5b45418bbf/jobs/?passed=true' | json_pp\n"})})})]}),(0,r.jsx)(s.h4,{id:"responses-3",children:"Responses"}),(0,r.jsxs)("table",{id:"table-api",children:[(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"200"})}),(0,r.jsx)("td",{colSpan:"2",children:"Success. Build info returned."})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"403"})}),(0,r.jsx)("td",{colSpan:"2",children:"Forbidden. The authenticating account does not have permission to make the request."})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"404"})}),(0,r.jsx)("td",{colSpan:"2",children:"Not found."})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"422"})}),(0,r.jsxs)("td",{colSpan:"2",children:["Validation Error. One or more of the parameters in the request is not formatted properly. The error response ",(0,r.jsx)(s.code,{children:"msg"})," property may contain additional details about the specific failure."]})]})})]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",metastring:'title="Sample Response"',children:'{\n    "jobs": [\n        {\n            "creation_time": 1632236598,\n            "deletion_time": null,\n            "id": "ac50bd0253834f78abdee6d5afea89ba",\n            "modification_time": 1632236607,\n            "state": {\n                "completed": false,\n                "errored": false,\n                "failed": false,\n                "finished": true,\n                "new": false,\n                "passed": true,\n                "public": false,\n                "queued": false,\n                "running": false\n            }\n        },\n        {more job results...}\n    ]\n}\n'})})]}),"\n",(0,r.jsx)(s.hr,{})]})}function j(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,s,n)=>{n.d(s,{A:()=>d});n(96540);var r=n(34164);const i={tabItem:"tabItem_Ymn6"};var l=n(74848);function d(e){let{children:s,hidden:n,className:d}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,d),hidden:n,children:s})}},11470:(e,s,n)=>{n.d(s,{A:()=>y});var r=n(96540),i=n(34164),l=n(23104),d=n(56347),t=n(205),a=n(57485),c=n(31682),o=n(70679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:s,children:n}=e;return(0,r.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:n,attributes:r,default:i}}=e;return{value:s,label:n,attributes:r,default:i}}))}(n);return function(e){const s=(0,c.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function j(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function x(e){let{queryString:s=!1,groupId:n}=e;const i=(0,d.W6)(),l=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,a.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const s=new URLSearchParams(i.location.search);s.set(l,e),i.replace({...i.location,search:s.toString()})}),[l,i])]}function p(e){const{defaultValue:s,queryString:n=!1,groupId:i}=e,l=u(e),[d,a]=(0,r.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!j({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:l}))),[c,h]=x({queryString:n,groupId:i}),[p,b]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[i,l]=(0,o.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:i}),m=(()=>{const e=c??p;return j({value:e,tabValues:l})?e:null})();(0,t.A)((()=>{m&&a(m)}),[m]);return{selectedValue:d,selectValue:(0,r.useCallback)((e=>{if(!j({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),b(e)}),[h,b,l]),tabValues:l}}var b=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function v(e){let{className:s,block:n,selectedValue:r,selectValue:d,tabValues:t}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),o=e=>{const s=e.currentTarget,n=a.indexOf(s),i=t[n].value;i!==r&&(c(s),d(i))},h=e=>{let s=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;s=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;s=a[n]??a[a.length-1];break}}s?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},s),children:t.map((e=>{let{value:s,label:n,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===s?0:-1,"aria-selected":r===s,ref:e=>a.push(e),onKeyDown:h,onClick:o,...l,className:(0,i.A)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":r===s}),children:n??s},s)}))})}function g(e){let{lazy:s,children:n,selectedValue:l}=e;const d=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=d.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:d.map(((e,s)=>(0,r.cloneElement)(e,{key:s,hidden:e.props.value!==l})))})}function E(e){const s=p(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,f.jsx)(v,{...s,...e}),(0,f.jsx)(g,{...s,...e})]})}function y(e){const s=(0,b.A)();return(0,f.jsx)(E,{...e,children:h(e.children)},String(s))}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>t});var r=n(96540);const i={},l=r.createContext(i);function d(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);