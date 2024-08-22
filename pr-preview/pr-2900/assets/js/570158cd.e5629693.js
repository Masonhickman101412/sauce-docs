"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[83104],{57683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(74848),s=n(28453),l=n(86025);n(11470),n(19365);const a={sidebar_label:"Review"},r="Review Workflow",o={id:"visual-testing/workflows/review",title:"Review Workflow",description:"The review workflow happens in the Sauce UI.",source:"@site/docs/visual-testing/workflows/review.md",sourceDirName:"visual-testing/workflows",slug:"/visual-testing/workflows/review",permalink:"/sauce-docs/pr-preview/pr-2900/visual-testing/workflows/review",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual-testing/workflows/review.md",tags:[],version:"current",lastUpdatedBy:"Pawel Tomaszewski",lastUpdatedAt:1722426842e3,frontMatter:{sidebar_label:"Review"},sidebar:"docs",previous:{title:"Test Execution",permalink:"/sauce-docs/pr-preview/pr-2900/visual-testing/workflows/test-execution"},next:{title:"Continuous Integration",permalink:"/sauce-docs/pr-preview/pr-2900/visual-testing/workflows/ci"}},d={},c=[{value:"Reviewing and Accepting baselines",id:"reviewing-and-accepting-baselines",level:2},{value:"Bulk Accept",id:"bulk-accept",level:3},{value:"Accept All",id:"accept-all",level:4},{value:"Accept Only New",id:"accept-only-new",level:4},{value:"Single Accept",id:"single-accept",level:3},{value:"Build Details page",id:"build-details-page",level:4},{value:"Grouping and Filtering",id:"grouping-and-filtering",level:5},{value:"Diff Review-overlay",id:"diff-review-overlay",level:4},{value:"Diff inspection",id:"diff-inspection",level:5},{value:"Subsequent Test Execution Review",id:"subsequent-test-execution-review",level:2},{value:"Enhancing test accuracy",id:"enhancing-test-accuracy",level:2},{value:"Code ignored regions",id:"code-ignored-regions",level:3},{value:"UI ignored regions",id:"ui-ignored-regions",level:3},{value:"Defining regions",id:"defining-regions",level:4},{value:"User Interface",id:"user-interface",level:2},{value:"Additional Keyboard Actions",id:"additional-keyboard-actions",level:3},{value:"Visual Statuses",id:"visual-statuses",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"review-workflow",children:"Review Workflow"}),"\n",(0,i.jsxs)(t.p,{children:["The review workflow happens in the ",(0,i.jsx)(t.a,{href:"https://app.saucelabs.com/visual/",children:"Sauce UI"}),".\nIts purpose is to define new baseline snapshots and review diffing results."]}),"\n",(0,i.jsxs)(t.p,{children:["Every execution of the ",(0,i.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2900/visual-testing/workflows/test-execution",children:"test execution workflow"}),' generates a "Visual Build".\nFor many integrations, there will also be at least one automated job that generated the snapshots for the "Visual Build".']}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/build-row.jpg"),alt:"Build row"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:'A "Visual Build" is currently not related to builds of automated jobs. We are working on a solution to make this more clear.'})}),"\n",(0,i.jsx)(t.h2,{id:"reviewing-and-accepting-baselines",children:"Reviewing and Accepting baselines"}),"\n",(0,i.jsxs)(t.p,{children:["The first time you run a test, a baseline is automatically created in our system and will be marked as ",(0,i.jsx)(t.a,{href:"#visual-statuses",children:'"For Review"'}),". This baseline serves as the standard for all subsequent tests and matches based on the metadata as described in the ",(0,i.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2900/visual-testing#baseline-matching",children:"Baseline Matching"})," and must be reviewed and accepted by a user."]}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsx)(t.p,{children:"Subsequent Test Executions can also generate new baseline snapshots. This can happen when:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The metadata, that is used for ",(0,i.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2900/visual-testing#baseline-matching",children:"Baseline Matching"}),", changes. For example, when you change viewport size."]}),"\n",(0,i.jsx)(t.li,{children:"New configurations are added to the test execution. For example, when you add a new browser or viewport size."}),"\n",(0,i.jsx)(t.li,{children:"New snapshots are added to the test execution. For example, when you add a new test case."}),"\n"]})]}),"\n",(0,i.jsx)(t.h3,{id:"bulk-accept",children:"Bulk Accept"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Bulk Accept will not affect already accepted snapshots."})}),"\n",(0,i.jsx)(t.p,{children:'You can "bulk accept" all the snapshots in a build by clicking on the "More options" button from the "Build" page'}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/build-bulk-accept.jpg"),alt:"Build page bulk accepts"}),"\n",(0,i.jsx)(t.p,{children:'or the "Build > Build Details" page.'}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/build-details-bulk-accept.jpg"),alt:"Build details page bulk accepts"}),"\n",(0,i.jsx)(t.h4,{id:"accept-all",children:"Accept All"}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/bulk-accept-all.jpg"),alt:"Bulk Accept All"}),"\n",(0,i.jsxs)(t.p,{children:["Using this option will accept ",(0,i.jsx)(t.strong,{children:"all"})," snapshots with the following statuses:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'All snapshots that don\'t have a baseline image, marked as "For Review" in the "Build Details" page and labeled "New" in the "Diff Review" page.'}),"\n",(0,i.jsx)(t.li,{children:'All snapshots that have a baseline image where Sauce Visual detected a difference. They are marked as "For Review" in the "Build Details" page and labeled as "{number} changes" in the "Diff Review" page.'}),"\n",(0,i.jsx)(t.li,{children:'All snapshots with "Rejected" status'}),"\n",(0,i.jsx)(t.li,{children:'All snapshots with "No changes" status'}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:['The amount in "',(0,i.jsxs)(t.em,{children:["Accept All (",(0,i.jsx)(t.strong,{children:"19"}),")"]}),'" will show you how many snapshots will be affected.']}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"An accepted snapshot in the current build will be used as a baseline image for all subsequent builds."})}),"\n",(0,i.jsx)(t.h4,{id:"accept-only-new",children:"Accept Only New"}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/bulk-accept-only-new.jpg"),alt:"Bulk Accept Only New"}),"\n",(0,i.jsxs)(t.p,{children:["Using this option will only accept all snapshots that ",(0,i.jsx)(t.strong,{children:"don't have a baseline image"}),"."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'All snapshots that don\'t have a baseline image, marked as "For Review" in the "Build Details" page and labeled "New" in the "Diff Review" page.'}),"\n",(0,i.jsx)(t.li,{children:'All snapshots that don\'t have a baseline image, marked as "Rejected".'}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["If this happens after a ",(0,i.jsx)(t.a,{href:"#subsequent-test-execution-review",children:"Subsequent Test Executions"})," where we also detected visual differences, then we don't accept those snapshots. This is because we want you to review and accept the visual differences first."]}),"\n",(0,i.jsxs)(t.p,{children:['The amount in "',(0,i.jsxs)(t.em,{children:["Accept Only New (",(0,i.jsx)(t.strong,{children:"11"}),")"]}),'" will show you how many snapshots will be affected.']}),"\n",(0,i.jsx)(t.h3,{id:"single-accept",children:"Single Accept"}),"\n",(0,i.jsx)(t.p,{children:'Snapshots can be reviewed from the "Build Details" page or the "Diff Review" page.'}),"\n",(0,i.jsx)(t.h4,{id:"build-details-page",children:"Build Details page"}),"\n",(0,i.jsx)(t.p,{children:'Open the "Build Details" page by clicking on the Build row from the Visual Build Overview page. You will see a list of all the snapshots that were generated during the test execution and match the status that has been selected in the "Filter" dropdown.'}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/build-details-overview.jpg"),alt:"Bulk Details Overview"}),"\n",(0,i.jsx)(t.p,{children:'When for example, the status "For Review" is selected, you can review and accept the snapshots by using the "Accept" button.'}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/build-details-accept.jpg"),alt:"Review and accept baseline images"}),"\n",(0,i.jsx)(t.h5,{id:"grouping-and-filtering",children:"Grouping and Filtering"}),"\n",(0,i.jsx)(t.p,{children:'The list of snapshots can be grouped and filtered by using the "Group By" and "Filter" dropdowns.'}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/build-details-grouping-filtering.jpg"),alt:"Build Details Grouping and Filtering"}),"\n",(0,i.jsx)(t.p,{children:"The grouping can be done by:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Group by"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Determined by"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Suite Name"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The Name of the Suite/Class"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"This will automatically be determined by the used binding"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Test Name"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The Name of the Test that holds the visual checks"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"This will automatically be determined by the used binding"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Device"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The Device that has been used to take the snapshot. This can be a Desktop browser or a Mobile Device"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"This will automatically be determined by the used binding"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"OS"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The OS that has been used to take the snapshot."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"This will automatically be determined by the used binding"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Storybook (Depth 1)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The name of the Storybook library you used."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"This will automatically be determined by the used binding"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Storybook (Depth 2)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The name of the Storybook component that was used to create the snapshot."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"This will automatically be determined by the used binding"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"diff-review-overlay",children:"Diff Review-overlay"}),"\n",(0,i.jsx)(t.p,{children:'You can also review and accept a single snapshot by clicking on a thumbnail from the "Build Details" page. This will open a "Diff Review" page where you can review and accept the snapshots by using the "Accept" button.'}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:'The "Diff Review" page will only show the snapshots that match the filter you have selected on the "Build Details" page. If you want to see all the snapshots, you need to clear your filter.'})}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/build-details-single-baseline.jpg"),alt:"Review and accept single baseline images"}),"\n",(0,i.jsx)(t.p,{children:"If you have more than one baseline image, and you accept one, you will automatically be taken to the next one. This will continue until you have reviewed and accepted all the baseline images."}),"\n",(0,i.jsx)(t.p,{children:'There is also an option to reject the snapshot. This will mark the snapshot as "Rejected" and will not be used as a baseline. A subsequent test execution will then generate a new baseline snapshot which needs to be reviewed and accepted.'}),"\n",(0,i.jsxs)(t.p,{children:["More information about reviewing and approving diffs can be found in ",(0,i.jsx)(t.a,{href:"#subsequent-test-execution-review",children:"Subsequent Test Execution Review"}),"."]}),"\n",(0,i.jsx)(t.h5,{id:"diff-inspection",children:"Diff inspection"}),"\n",(0,i.jsx)(t.p,{children:"The Diff Inspection Tool is a valuable utility that helps identify and verify which DOM changes have impacted the UI. It offers a visual representation of the differences between two versions, making it easy to spot modified, added, or removed elements."}),"\n",(0,i.jsx)(t.p,{children:"It detects changes in:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"HTML"}),"\n",(0,i.jsx)(t.li,{children:"computed CSS styles"}),"\n",(0,i.jsx)(t.li,{children:"position"}),"\n",(0,i.jsx)(t.li,{children:"dimensions"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"captureDom"})," option is disabled by default. For information on how to enable this option or for examples, please refer to the integration page."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["To generate the DOM diff, it is important to ensure that both the baseline and snapshot have accurately captured the DOM.\nBear in mind that ",(0,i.jsx)(t.a,{href:"#bulk-accept",children:"Bulk Accept"})," will not update baselines for snapshots with ",(0,i.jsx)(t.code,{children:"No Changes"})," status."]})}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/dom-diff-inspection.jpg"),alt:"DOM diff inspection"}),"\n",(0,i.jsx)(t.h2,{id:"subsequent-test-execution-review",children:"Subsequent Test Execution Review"}),"\n",(0,i.jsxs)(t.p,{children:['Every subsequent test execution will generate a new "Visual Build" and will be marked as ',(0,i.jsx)(t.a,{href:"#visual-statuses",children:'"For Review"'}),". This is because:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A new baseline snapshot could be generated for the new test execution, see also ",(0,i.jsx)(t.a,{href:"#reviewing-and-accepting-baselines",children:"Reviewing and Accepting baselines"})," and ",(0,i.jsx)(t.a,{href:"#accept-only-new",children:"Accept Only New"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"You need to review the visual differences between the new snapshot and the previously accepted baseline snapshot."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The process of reviewing and approving the visual differences is the same as described in ",(0,i.jsx)(t.a,{href:"#reviewing-and-accepting-baselines",children:"Reviewing and Accepting baselines"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The user interface including the actions you can take are described in ",(0,i.jsx)(t.a,{href:"#user-interface",children:"User Interface"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"enhancing-test-accuracy",children:"Enhancing test accuracy"}),"\n",(0,i.jsx)(t.p,{children:"Ignored regions are areas of a user interface excluded from visual checks.\nThese regions often contain dynamic content or non-critical elements that change frequently.\nDefining ignore regions helps focus on significant UI discrepancies, reducing false positives and enhancing test accuracy."}),"\n",(0,i.jsx)(t.h3,{id:"code-ignored-regions",children:"Code ignored regions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Definition"}),": defined only in the code and are linked to specific snapshots."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Initialization"}),": can be added from the first run."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Specification"}),": defined by provided dimensions or by elements."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Auto-Adjustment"}),": automatically adjusted size with the corresponding element."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Auto-Propagation"}),": populated across all screenshot variations (capabilities)."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Check our integration documentation to learn how to get started."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"../../integrations/cypress/#ignored-regions",children:"Cypress"}),", ",(0,i.jsx)(t.a,{href:"../../integrations/csharp/#ignored-regions",children:"C#/.Net"}),",\n",(0,i.jsx)(t.a,{href:"../../integrations/java/#ignored-regions",children:"Java"}),", ",(0,i.jsx)(t.a,{href:"../../integrations/nightwatch/#ignored-regions",children:"Nightwatch"}),",\n",(0,i.jsx)(t.a,{href:"../../integrations/webdriverio/#ignored-regions",children:"WebdriverIO"}),", ",(0,i.jsx)(t.a,{href:"../../integrations/python/#ignored-regions",children:"Python"}),",\n",(0,i.jsx)(t.a,{href:"../../integrations/python-robot-framework/#ignored-regions",children:"Python (Robot Framework)"})]}),"\n",(0,i.jsx)(t.h3,{id:"ui-ignored-regions",children:"UI ignored regions"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"We recommend using Code ignored regions over UI ignore regions whenever possible"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Definition"}),": can be defined only on UI. Every modification will create a new baseline and link UI ignored regions to specific baseline."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Initialization"}),": can be added after the first run and snapshot approval."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Specification"}),": defined by provided dimensions."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Manual-Adjustment"}),": defined size should adjust for changes in dimensions, like longer or wrapped text."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Manual-Propagation"}),": needs to be manually added to all screenshot variations (capabilities)."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"defining-regions",children:"Defining regions"}),"\n",(0,i.jsx)(t.p,{children:'Open "Ignored regions" in diff review overlay'}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/build-overlay-ignore.jpg"),alt:"Open Ignored regions"}),"\n",(0,i.jsx)(t.p,{children:'Click "Add New Region"'}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/build-overlay-ignore-add.jpg"),alt:"Add Ignored regions"}),"\n",(0,i.jsxs)(t.p,{children:["1 - Adjust the region size and position by dragging it with the mouse",(0,i.jsx)("br",{}),"\n1a - Optionally, you can change the ignoring types. Before using, please read ",(0,i.jsx)(t.a,{href:"../../selective-diffing/",children:"Selective Diffing"}),(0,i.jsx)("br",{}),'\n2 - Click "Save All"']}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/build-overlay-ignore-save.jpg"),alt:"Save Ignored regions"}),"\n",(0,i.jsx)(t.p,{children:"Congratulations! You added a new UI ignored region. Now you can continue the review process."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Updated UI Ignored Regions will be reflected in both future and older builds."})}),"\n",(0,i.jsx)(t.h2,{id:"user-interface",children:"User Interface"}),"\n",(0,i.jsx)(t.p,{children:'Selecting one of the builds allows you to get to the "Diff Review" page, where you can Accept or Reject detected diffs.'}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/diff-review-page.jpg"),alt:"Diff review page with toolbars"}),"\n",(0,i.jsx)(t.p,{children:"By default, you will see diffs in a Side-by-side view, which lets you easily compare the Current diff against the Baseline. On the top, you will see the toggle options which allow you to review snapshots by switching the view from Side-by-side to Overlay mode. On the right side, you will see a toolbar enabling you to review the diffs. You can:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Zoom in or out of the snapshots."}),"\n",(0,i.jsx)(t.li,{children:"Zoom to 100% or fit snapshot to the screen."}),"\n",(0,i.jsx)(t.li,{children:"Highlight or hide diffs for easier discovery of the changes."}),"\n",(0,i.jsx)(t.li,{children:"Open Diff Inspector"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"There are conditional actions you can use, depending on the type of view you have activated:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"If in Side-by-side view, you can mirror the zoom and pan actions from the Current snapshot to the Baseline."}),"\n",(0,i.jsx)(t.li,{children:"If in Overlay view, you can change the opacity between Baseline and Current snapshot."}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/review-page-modes.jpg"),alt:"Diff review page modes"}),"\n",(0,i.jsx)(t.p,{children:"The list below shows the available actions and their keyboard shortcuts."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Icon"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Action [Keyboard Shortcut]"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/accept.png"),alt:"Accept changes icon",width:"25"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Accept changes [A] or Undo [U]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/reject.png"),alt:"Reject changes icon",width:"25"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Reject changes [R] or Undo [U]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/cycle-through-diffs.png"),alt:"Cycle through snapshots arrows icon",width:"50"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Cycle through snapshots [\u27f5] and [\u27f6]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/zoom-in.png"),alt:"Zoom in icon",width:"25"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Zoom in [=]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/zoom-out.png"),alt:"Zoom out icon",width:"25"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Zoom out [-]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/fit-to-100.png"),alt:"Fit to 100% or to screen icon",width:"25"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Zoom to fit [1] or Zoom to 100% [0]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/highlight-diffs.png"),alt:"Emphasize diffs icon",width:"25"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Emphasize diffs [E]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/hide-diffs.png"),alt:"Hide diffs icon",width:"25"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Hide diffs [H]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/sync-actions.png"),alt:"Sync pan and zoom icon",width:"25"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Sync pan and zoom [P]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/view-current.png"),alt:"View current icon",width:"25"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Toggle Baseline and Current snapshots [T]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/dom-diff.png"),alt:"Show Diff Inspector",width:"25"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Diff Inspector [I]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:(0,l.A)("/img/sauce-visual/ignored-regions.png"),alt:"Show Ignored Regions",width:"25"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Ignored Regions [J]"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"additional-keyboard-actions",children:"Additional Keyboard Actions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"cmd"})," on Mac / ",(0,i.jsx)(t.code,{children:"ctrl"})," on Windows + mouse scroll: for zooming in or out of the snapshot."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"space"})," + click and drag: for panning the snapshot."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"visual-statuses",children:"Visual Statuses"}),"\n",(0,i.jsx)(t.p,{children:"Visual uses different statuses:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Status"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Accepted"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"All detected changes were accepted. This is considered a success state."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"No\xa0Changes"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The snapshots assigned to your build matched your baseline. It is considered a success because your assertions were successful."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Running"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"These builds have not been finished yet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Queued"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Some of your diffs are waiting to be generated."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"For\xa0Review"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"There were either no baselines available to compare against your uploaded snapshot or some were different from their baselines. You are supposed to review those detected diffs. As long as those changes aren't accepted, they are considered a failure state."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Errored"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:'One or more errors occurred. More information is available in the "Build Details" page.'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Rejected"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Some of your detected changes were rejected. This is considered a failure state."})]})]})]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var i=n(18215);const s={tabItem:"tabItem_Ymn6"};var l=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var i=n(96540),s=n(18215),l=n(23104),a=n(56347),r=n(205),o=n(57485),d=n(31682),c=n(89466);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:s}}=e;return{value:t,label:n,attributes:i,default:s}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,i.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,l=u(e),[a,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:l}))),[d,h]=p({queryString:n,groupId:s}),[x,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,c.Dv)(n);return[s,(0,i.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),j=(()=>{const e=d??x;return g({value:e,tabValues:l})?e:null})();(0,r.A)((()=>{j&&o(j)}),[j]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,l]),tabValues:l}}var f=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function v(e){let{className:t,block:n,selectedValue:i,selectValue:a,tabValues:r}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),s=r[n].value;s!==i&&(d(t),a(s))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:r.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>o.push(e),onKeyDown:h,onClick:c,...l,className:(0,s.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function m(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(w,{...e,...t})]})}function y(e){const t=(0,f.A)();return(0,b.jsx)(m,{...e,children:h(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const s={},l=i.createContext(s);function a(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);