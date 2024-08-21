"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[88003],{57917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var i=n(74848),r=n(28453),o=n(86025);const a={id:"storage-sampling",title:"Storage Sampling",sidebar_label:"Storage Sampling",description:"Learn how to configure storage sampling for your Backtrace instance to limit disk usage."},s=void 0,c={id:"error-reporting/project-setup/storage-sampling",title:"Storage Sampling",description:"Learn how to configure storage sampling for your Backtrace instance to limit disk usage.",source:"@site/docs/error-reporting/project-setup/storage-sampling.md",sourceDirName:"error-reporting/project-setup",slug:"/error-reporting/project-setup/storage-sampling",permalink:"/sauce-docs/pr-preview/pr-2899/error-reporting/project-setup/storage-sampling",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/project-setup/storage-sampling.md",tags:[],version:"current",lastUpdatedBy:"James Tacker",lastUpdatedAt:1675366343e3,frontMatter:{id:"storage-sampling",title:"Storage Sampling",sidebar_label:"Storage Sampling",description:"Learn how to configure storage sampling for your Backtrace instance to limit disk usage."},sidebar:"backtrace",previous:{title:"Data Retention",permalink:"/sauce-docs/pr-preview/pr-2899/error-reporting/project-setup/data-retention"},next:{title:"Access Control",permalink:"/sauce-docs/pr-preview/pr-2899/error-reporting/project-setup/access-control"}},l={},p=[{value:"Rate Limit Rules",id:"rate-limit-rules",level:2},{value:"Configuration",id:"configuration",level:2}];function d(e){const t={a:"a",admonition:"admonition",h2:"h2",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Popular games or applications can see volumes of 1,000,000 submitted crashes a week with average attached object files (i.e. dumps or attachments) ranging from 15-20 MB. Storing all these objects can easily fill up 17.5 TB of storage every week, or 200 TB for 90 days retention of data."}),"\n",(0,i.jsx)(t.p,{children:"When a fingerprint has large numbers of objects, storing most objects beyond a certain amount, generally a few dozen, adds little value. Backtrace offers storage sampling to control object storage with respect to a unique combination of fingerprint and optional specified attribute values."}),"\n",(0,i.jsx)(t.p,{children:"Storage sampling dynamically decides upon ingestion which files should be kept in long-term storage and which files can be discarded after processing is complete. Most Backtrace instances have disk quota associated to them, and storage sampling provides a way to control the usage of disk depending on your teams specific needs by limiting the number of objects stored within a fingerprint."}),"\n",(0,i.jsx)(t.h2,{id:"rate-limit-rules",children:"Rate Limit Rules"}),"\n",(0,i.jsx)(t.p,{children:"Rate limit rules allow you to specify minimum time intervals between storing received objects. Rate limits include a count (number of objects to be stored) and an interval (minimum number of seconds between storing a received object)."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"A rate limit's time interval is a minimum and there is no guarantee of getting objects for a particular group in any particular timeframe."})}),"\n",(0,i.jsx)(t.p,{children:"Indexing of objects always occurs even when an object is deleted by sampling, so metadata will always be updated by each object. The object deletion only impacts the Debug view and object download."}),"\n",(0,i.jsxs)(t.p,{children:["Storage sampling configurations include a reset interval at which the sampling counts are reset. Backtrace also provides a ",(0,i.jsx)(t.a,{href:"/error-reporting/project-setup/data-retention",children:"Retention Policy"})," system, and generally, this reset interval for storage sampling should be no more than the Retention Policy's deletion interval to ensure that if objects within a given sampling group continue to be submitted, then there are always objects available in it."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"As of March 5, 2020, the reset interval begins when the final rate limit's bucket is filled. Note that we are considering updating this behavior so that the interval begins upon a group's first stored object. Backtrace will work with customers to enable sampling configurations that are appropriate for their instance or projects."})}),"\n",(0,i.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["Storage sampling can be configured by Admin users in ",(0,i.jsx)(t.strong,{children:"Project settings"})," > ",(0,i.jsx)(t.strong,{children:"Project"})," > ",(0,i.jsx)(t.strong,{children:"Storage sampling"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"See the example configuration below:"}),"\n",(0,i.jsx)("img",{src:(0,o.A)("img/error-reporting/project-settings/storage-sampling-config.png"),alt:"Shows an example configuration for storage sampling.",width:"750"}),"\n",(0,i.jsx)(t.p,{children:"The above configuration defines a unique combination of fingerprint and application version. It will store 2 objects with 0 minutes in between, then 4 more objects with at least 1 minute in between, then 8 objects with at least 60 minutes in between. After the final rate limit, nothing is stored until the reset interval (1 day) is reached. The rate limits will then start again from the first bucket."})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(96540);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);