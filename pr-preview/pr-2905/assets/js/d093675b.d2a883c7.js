"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[60011],{45879:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=n(74848),o=n(28453),s=n(86025);const i={id:"storage-management",title:"Storage Management",sidebar_label:"Storage Management",description:"Learn about storage management options for Backtrace."},a=void 0,l={id:"error-reporting/project-setup/storage-management",title:"Storage Management",description:"Learn about storage management options for Backtrace.",source:"@site/docs/error-reporting/project-setup/storage-management.md",sourceDirName:"error-reporting/project-setup",slug:"/error-reporting/project-setup/storage-management",permalink:"/sauce-docs/pr-preview/pr-2905/error-reporting/project-setup/storage-management",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/project-setup/storage-management.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1692688198e3,frontMatter:{id:"storage-management",title:"Storage Management",sidebar_label:"Storage Management",description:"Learn about storage management options for Backtrace."},sidebar:"backtrace",previous:{title:"API Tokens and Submission URLs",permalink:"/sauce-docs/pr-preview/pr-2905/error-reporting/project-setup/submission-url"},next:{title:"Data Retention",permalink:"/sauce-docs/pr-preview/pr-2905/error-reporting/project-setup/data-retention"}},c={},d=[{value:"Storage Notifications",id:"storage-notifications",level:2},{value:"Retention Policies",id:"retention-policies",level:2},{value:"Query Fingerprints",id:"query-fingerprints",level:2},{value:"Delete Group",id:"delete-group",level:3},{value:"Video: Delete Errors by Query",id:"video-delete-errors-by-query",level:4},{value:"Storage Sampling",id:"storage-sampling",level:2},{value:"Submission Actions",id:"submission-actions",level:2},{value:"Historical Usage",id:"historical-usage",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Backtrace instances have limits on how many monthly error submissions they can accept and how much storage space those submissions consume. If an instance reaches 100% storage quota, you won't be able to receive new submissions until more storage space is available \u2014 either through a reduction in consumption, or an increase in available space. You can purchase more storage space or monthly submission quota as required."}),"\n",(0,t.jsx)(r.p,{children:"Admin users can control retention, compression, storage sampling, and submission rules. In addition, the delete-by-query capability allows users to take a manual action to remove objects from the system and free space."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["To see how much storage was purchased and what percentage is consumed, admin users can go to the ",(0,t.jsx)(r.strong,{children:"Organization Settings"})," > ",(0,t.jsx)(r.strong,{children:"Subscriptions"})," page."]}),"\n",(0,t.jsxs)(r.li,{children:["To see how much storage is being consumed by project, go to the ",(0,t.jsx)(r.strong,{children:"Project settings"})," > ",(0,t.jsx)(r.strong,{children:"Overview"})," page > under ",(0,t.jsx)(r.strong,{children:"Storage usage"})," > see ",(0,t.jsx)(r.strong,{children:"attachments"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Our sales team can assist in the purchase of additional storage as needed, and our support team can disable storage enforcement in critical cases."}),"\n",(0,t.jsx)(r.h2,{id:"storage-notifications",children:"Storage Notifications"}),"\n",(0,t.jsx)(r.p,{children:"Admin users will receive notifications (in-app and via email) when their instance is consuming 75% or more of the allotted storage quota."}),"\n",(0,t.jsx)(r.p,{children:"When a storage notification is received:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["Review the ",(0,t.jsx)(r.a,{href:"#retention-policies",children:"retention policies"})," to confirm that they are set to appropriate levels."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"#query-fingerprints",children:"Query fingerprints"})," that consume a disproportionate amount of space and delete them as required.","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"You can then use the results to inform additional configurations for Storage Sampling or Submission Actions to reduce storage usage for incoming duplicate errors."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["Review ",(0,t.jsx)(r.a,{href:"#historical-usage",children:"historical storage usage"})," with the Explore view and add additional storage as required."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"retention-policies",children:"Retention Policies"}),"\n",(0,t.jsx)(r.p,{children:"Retention policies control how long error data is retained. By default, instances are set to compress and remove old objects after a set period of time to keep the amount of storage used at a reasonable amount, and admin users can tune these."}),"\n",(0,t.jsxs)(r.p,{children:["Admin users can configure retention policies in the ",(0,t.jsx)(r.strong,{children:"Project settings"})," > under ",(0,t.jsx)(r.strong,{children:"Project"})," > ",(0,t.jsx)(r.strong,{children:"Storage retention"}),". For more information on retention policies, see ",(0,t.jsx)(r.a,{href:"/error-reporting/project-setup/data-retention/",children:"Data Retention"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"We recommend the following retention policies:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["Set a rule to compress all dumps (removes ability to reprocess). This will compress items by at least 50% if not more.","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Consider how long you may need to get missing symbols or other actions that require reprocessing. For production instances, we recommend setting it to 45 days to start, though you can shorten this to 7-14 days once you get to production and high volumes.","\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsx)(r.p,{children:"Customers on the free tier may have limits on how much control they have over compression and retention."})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["Set a rule to delete all dumps and Debug view data. This will free storage quota by removing minidump objects and attachments after the specified number of days.","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Consider how far back you require Debug view data. Paid customers may default to 90 days, and we can suggest reducing this to a lower number if needed (30 days is reasonable if you are fixing issues on a monthly basis).","\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsx)(r.p,{children:"Objects that are deleted will still retain all metadata, so there is history of the error occurring, with all indexed data available."})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"query-fingerprints",children:"Query Fingerprints"}),"\n",(0,t.jsx)(r.p,{children:"You can query fingerprints that consume a disproportionate amount of storage to decide if it makes sense to run delete functions to remove objects that are duplicates."}),"\n",(0,t.jsx)(r.p,{children:"To query fingerprints:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["Go to the ",(0,t.jsx)(r.strong,{children:"Explore"})," view."]}),"\n",(0,t.jsxs)(r.li,{children:["From the ",(0,t.jsx)(r.strong,{children:"Group by"})," filter, select ",(0,t.jsx)(r.code,{children:"fingerprint"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Select ",(0,t.jsx)(r.strong,{children:"Add aggregation"}),", add the ",(0,t.jsx)(r.code,{children:"object.size"})," attribute and the ",(0,t.jsx)(r.code,{children:"sum"})," operator."]}),"\n",(0,t.jsx)(r.li,{children:"Click the column header to sort in decreasing order."}),"\n",(0,t.jsxs)(r.li,{children:["Set the ",(0,t.jsx)(r.strong,{children:"Time frame"})," filter for which you want to delete the fingerprints."]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,s.A)("img/error-reporting/project-settings/query-fingerprint.png"),alt:"Shows how to query for fingerprints in the Explore View."}),"\n",(0,t.jsxs)(r.p,{children:["You can add additional filters or aggregations for ",(0,t.jsx)(r.code,{children:"application.version"})," (or the attribute you use for the version of your game or app) to see if there are impacts on a particular version that require deletion."]}),"\n",(0,t.jsx)(r.h3,{id:"delete-group",children:"Delete Group"}),"\n",(0,t.jsx)(r.p,{children:"If you have a group of errors that have been identified as not useful or relevant, you can delete the group to manage storage. This action is available only for admins and fingerprint groups with fewer than 100k errors."}),"\n",(0,t.jsx)(r.p,{children:"To delete a group:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["Go to the ",(0,t.jsx)(r.strong,{children:"Explore"})," view."]}),"\n",(0,t.jsxs)(r.li,{children:["From the ",(0,t.jsx)(r.strong,{children:"Group - fingerprint"})," column, select the ",(0,t.jsx)(r.strong,{children:"Group options"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Select ",(0,t.jsx)(r.strong,{children:"Delete Group"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["From the ",(0,t.jsx)(r.strong,{children:"Delete selected group"})," dialog, select one of the following:","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Delete all physical objects"}),": Allows you to retain metadata for aggregates and searching, but all the details of the errors will no longer be available for debugging purposes."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Delete physical objects and metadata"}),": Removes all data from your Backtrace instance."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["To confirm the action, enter ",(0,t.jsx)(r.strong,{children:"DELETE"}),", then select ",(0,t.jsx)(r.strong,{children:"Delete forever"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"video-delete-errors-by-query",children:"Video: Delete Errors by Query"}),"\n",(0,t.jsx)(r.p,{children:"The following video shows how to query fingerprints and delete a group of errors."}),"\n",(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/rJ4kK_KCxLo?controls=0",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,t.jsx)(r.h2,{id:"storage-sampling",children:"Storage Sampling"}),"\n",(0,t.jsx)(r.p,{children:"Storage sampling controls how the objects attached to errors are sampled out before being stored."}),"\n",(0,t.jsxs)(r.p,{children:["For high volume customers, storage sampling is an effective way to conserve storage space by limiting the number of dump objects (used in the Debug view) that are persisted to long-term storage upon ingestion. Default rate limit rules are configured to keep a certain number of dump objects per fingerprint. You can also add an aggregation for ",(0,t.jsx)(r.code,{children:"application.version"})," to ensure that sampling is not overly broad."]}),"\n",(0,t.jsxs)(r.p,{children:["You can configure storage sampling in the ",(0,t.jsx)(r.strong,{children:"Project settings"})," > under ",(0,t.jsx)(r.strong,{children:"Project"})," > ",(0,t.jsx)(r.strong,{children:"Storage sampling"}),". For more information, see ",(0,t.jsx)(r.a,{href:"/error-reporting/project-setup/storage-sampling/",children:"Storage Sampling"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"submission-actions",children:"Submission Actions"}),"\n",(0,t.jsx)(r.p,{children:"Consider configuring submission actions that perform automation actions to allow more granular control over the errors being submitted, such as reject submission and drop object. These submission actions are very flexible, and can have a % probability set on them so you can configure how often the rule should execute."}),"\n",(0,t.jsxs)(r.p,{children:["You can configure submission actions in the ",(0,t.jsx)(r.strong,{children:"Project settings"})," > under ",(0,t.jsx)(r.strong,{children:"Error processing"})," > ",(0,t.jsx)(r.strong,{children:"Submission actions"}),". For more information, see ",(0,t.jsx)(r.a,{href:"/error-reporting/project-setup/submission-actions/",children:"Submission Actions"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"historical-usage",children:"Historical Usage"}),"\n",(0,t.jsx)(r.p,{children:"Once you have confirmed your configurations for retention, compression, and sampling, you can perform a historical review of required storage quota based on average object size and volume over the retention period to identify the required storage quota to meet your needs."}),"\n",(0,t.jsx)(r.p,{children:"To review historical storage usage:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["Go to the ",(0,t.jsx)(r.strong,{children:"Explore"})," view."]}),"\n",(0,t.jsxs)(r.li,{children:["From the ",(0,t.jsx)(r.strong,{children:"Group by"})," filter, select ",(0,t.jsx)(r.code,{children:"NONE"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Select ",(0,t.jsx)(r.strong,{children:"Add aggregation"}),", add the ",(0,t.jsx)(r.code,{children:"object.size"})," attribute and the ",(0,t.jsx)(r.code,{children:"sum"})," operator."]}),"\n",(0,t.jsxs)(r.li,{children:["Set the ",(0,t.jsx)(r.strong,{children:"Time frame"})," filter to a period for full error retention."]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,s.A)("img/error-reporting/project-settings/historical-usage.png"),alt:"Shows how to review historical storage usage in the Explore View."}),"\n",(0,t.jsx)(r.p,{children:"Since we have set retention/compression rules, this gives us an estimate for how much storage is required for the current state. With compressions/retention rules enabled, we should keep this usage consistent if traffic also remains consistent. With that said, we recommend a 25% buffer in storage needs, or a further reduction in object compression and retention rules."})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var t=n(96540);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);