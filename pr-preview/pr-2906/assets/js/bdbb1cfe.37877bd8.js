"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[23518],{80533:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var n=i(74848),t=i(28453),r=i(86025);const a={id:"migration-from-deprecated-sso",title:"Migration From The deprecated SSO",sidebar_label:"Migration From The Deprecated SSO"},o=void 0,d={id:"basics/sso/migration-from-deprecated-sso",title:"Migration From The deprecated SSO",description:"Enterprise Plans only",source:"@site/docs/basics/sso/migration-from-deprecated-sso.md",sourceDirName:"basics/sso",slug:"/basics/sso/migration-from-deprecated-sso",permalink:"/sauce-docs/pr-preview/pr-2906/basics/sso/migration-from-deprecated-sso",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/sso/migration-from-deprecated-sso.md",tags:[],version:"current",lastUpdatedBy:"Adam Dabrowski",lastUpdatedAt:1712661506e3,frontMatter:{id:"migration-from-deprecated-sso",title:"Migration From The deprecated SSO",sidebar_label:"Migration From The Deprecated SSO"},sidebar:"docs",previous:{title:"Setting Up SSO - Special Cases",permalink:"/sauce-docs/pr-preview/pr-2906/basics/sso/setting-up-sso-special-cases"},next:{title:"Configuring Auth0",permalink:"/sauce-docs/pr-preview/pr-2906/basics/sso/configuring-sso-in-auth0"}},l={},c=[{value:"Differences In The New SSO",id:"differences-in-the-new-sso",level:2},{value:"Migration Tutorial",id:"migration-tutorial",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Migration Wizard",id:"migration-wizard",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:(0,n.jsx)("span",{className:"sauceGreen",children:"Enterprise Plans only"})}),"\n",(0,n.jsxs)(s.p,{children:["This guide explains how to migrate from the ",(0,n.jsx)(s.a,{href:"/basics/sso-deprecated/setting-up-single-sign-on/",children:"deprecated SSO"})," to the ",(0,n.jsx)(s.a,{href:"/basics/sso/setting-up-sso/",children:"new SSO"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Before you begin the migration process, review the differences between the two implementations listed below."}),"\n",(0,n.jsxs)(s.admonition,{type:"tip",children:[(0,n.jsx)(s.p,{children:"Both the deprecated SSO integration and the new SSO integration can work independently and concurrently. This means that you can set up the new SSO and test it while your users continue to use the deprecated integration."}),(0,n.jsx)(s.p,{children:"You will have access to the configuration panels of both integrations in the Organization Management UI, allowing you to manage and configure them separately."})]}),"\n",(0,n.jsx)(s.h2,{id:"differences-in-the-new-sso",children:"Differences In The New SSO"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Feature"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Global Configuration"}),(0,n.jsx)(s.td,{children:"The new SSO is configured globally, meaning it is not bound to a specific region, unlike the deprecated SSO which was region-specific."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"SP-initiated Flow"}),(0,n.jsxs)(s.td,{children:["The new SSO supports both ",(0,n.jsx)(s.a,{href:"/basics/sso/logging-in-via-sso",children:"Service Provider (SP) initiated and Identity Provider (IdP) initiated SSO"}),", whereas the deprecated SSO only supports IdP-initiated flow."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Email Domains"}),(0,n.jsxs)(s.td,{children:["Assign your ",(0,n.jsx)(s.a,{href:"/basics/sso/setting-up-sso/#email-domains",children:"company email domains"})," to your SSO integration at Sauce Labs to allow for provisioning of new accounts via SP-initiated flow. ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," The deprecated SSO does not require email domains as it does not support SP-initiated flow."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"JIT Provisioning"}),(0,n.jsxs)(s.td,{children:["In the new SSO, JIT (Just-In-Time) provisioning is enabled by default and cannot be disabled. This means that if a user from your Identity Provider (IdP) does not have a Sauce Labs account, one will be automatically created for them. ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," However, in the deprecated SSO, it was possible to disable this feature. In such cases, it's important to note that users from the IdP who do not have accounts in Sauce Labs will still be able to provision accounts automatically. Keep this in mind during the migration process from deprecated SSO to the new SSO."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Enforce SAML SSO"}),(0,n.jsxs)(s.td,{children:["This ",(0,n.jsx)(s.a,{href:"/basics/sso/setting-up-sso/#enforce-saml-sso---big-bang-configuration",children:"setting"})," is also present in the new SSO, but it is common to both the new SSO and the deprecated SSO. When turned on, it allows authentication only via either the new SSO or the deprecated SSO. When turned off, users can also log in via username and password, in addition to SSO authentication."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"User Identifier (NameID)"}),(0,n.jsxs)(s.td,{children:["The ",(0,n.jsx)(s.a,{href:"/basics/sso/setting-up-sso/#name-id",children:"Name ID format"})," must be set to ",(0,n.jsx)(s.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"})," in the new SSO. The value of the attribute NameID in the SAML response must be a valid email address. We do not accept non-email address values, such as usernames or IDs. ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," The deprecated SSO accepts any value in NameID, such as usernames, email addresses, or other user identifiers."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"No Unique Identifier String (UIS)"}),(0,n.jsxs)(s.td,{children:["In the new SSO, there is no need to specify the ",(0,n.jsx)(s.a,{href:"/basics/acct-team-mgmt/org-settings/#single-sign-on-settings-deprecated-flow",children:"Unique Identifier String"})," which was used in the deprecated SSO to generate usernames for new users.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Usernames for accounts provisioned via the new SSO are generated according to the ",(0,n.jsx)(s.a,{href:"/basics/sso/setting-up-sso/#usernames",children:"following pattern"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Team Placement"}),(0,n.jsxs)(s.td,{children:["New users are provisioned in the ",(0,n.jsx)(s.a,{href:"/basics/sso/setting-up-sso/#team-placement",children:"default team"})," in the new SSO, unlike the deprecated SSO where you can specify a team for new user provisioning."]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"migration-tutorial",children:"Migration Tutorial"}),"\n",(0,n.jsx)(s.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Before starting the migration process, ensure that your organization is currently using the deprecated SSO integration. To confirm this, follow the steps provided in ",(0,n.jsx)(s.a,{href:"/basics/sso-deprecated/setting-up-single-sign-on/#how-do-i-know-if-my-organization-uses-the-deprecated-sso-integration",children:"this guide"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Next, on Sauce Labs click ",(0,n.jsx)(s.strong,{children:"Account"}),", and then click ",(0,n.jsx)(s.strong,{children:"Organization Management"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/basics/sso/setup-sso-sp-tm-menu.png"),alt:"Organization Management Menu",width:"300"}),"\n",(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsxs)(s.li,{children:["On the ",(0,n.jsx)(s.strong,{children:"Organization Management"})," page, in the ",(0,n.jsx)(s.strong,{children:"ORGANIZATION SETTINGS"})," section, click ",(0,n.jsx)(s.strong,{children:"View Settings"}),"."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/basics/sso/setup-sso-sp-org-settings-btn.png"),alt:"Organization Setting Button",width:"800"}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsxs)(s.li,{children:["On the ",(0,n.jsx)(s.strong,{children:"Organization Settings"})," page, click the ",(0,n.jsx)(s.strong,{children:"SINGLE SIGN-ON"})," tab."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/basics/sso/setup-sso-sp-sso-tab.png"),alt:"SSO Tab",width:"400"}),"\n",(0,n.jsxs)(s.ol,{start:"4",children:["\n",(0,n.jsxs)(s.li,{children:["If your organization is eligible for migrating to the new SSO, you will see the following banner. It is important to be aware that the migration wizard may not be enabled for your organization yet. If you don't see the banner, it means our development team is still working on enabling the migration wizard for your organization.","\n",(0,n.jsx)("img",{src:(0,r.A)("img/basics/sso/migration-to-the-new-sso/migration-banner.png"),alt:"SSO Migration Banner",width:"800"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"migration-wizard",children:"Migration Wizard"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["First, follow the instructions provided in ",(0,n.jsx)(s.a,{href:"/basics/sso/setting-up-sso/#setting-up-identity-provider",children:"this guide"})," to create a new SAML integration in your Identity Provider."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Next, on Sauce Labs in the organization settings in the ",(0,n.jsx)(s.strong,{children:"Single Sign-On"})," tab, click ",(0,n.jsx)(s.strong,{children:"Migrate to new SSO"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/basics/sso/migration-to-the-new-sso/migration-wizard-button.png"),alt:"SSO Migration Banner",width:"800"}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsx)(s.li,{children:"If some users from your organization have their email addresses empty at Sauce Labs, you will see the following pop-up. Otherwise, email addresses for all users are set up correctly, and you can proceed to the step 4."}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/basics/sso/migration-to-the-new-sso/provide-missing-emails.png"),alt:"Provide Missing Email Addresses",width:"800"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Download as CSV"})," to download a CSV file containing the list of users with missing email addresses."]}),"\n",(0,n.jsxs)(s.li,{children:["Fill in the email addresses for the users in the CSV file in the second column ",(0,n.jsx)(s.strong,{children:"valid_email_address"})," and then upload the file and click ",(0,n.jsx)(s.strong,{children:"Continue"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"You will get error messages for any invalid email addresses. Correct the email addresses and upload the file again."}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/basics/sso/migration-to-the-new-sso/missing-emails-errors.png"),alt:"Missing Email Addresses Validation",width:"800"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"After successfully uploading the file, you will be able to proceed to the step 4 to upload the metadata file."}),"\n"]}),"\n",(0,n.jsxs)(s.ol,{start:"4",children:["\n",(0,n.jsxs)(s.li,{children:["Upload the XML file containing your Identity Provider metadata generated in the first step, and then click ",(0,n.jsx)(s.strong,{children:"Enable new SSO"}),"."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/basics/sso/migration-to-the-new-sso/upload-metadata.png"),alt:"Upload metadata",width:"700"}),"\n",(0,n.jsxs)(s.ol,{start:"5",children:["\n",(0,n.jsx)(s.li,{children:"After successfully uploading the metadata, you will see a confirmation message and the configuration panel for managing the new SSO."}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/basics/sso/migration-to-the-new-sso/success-new-ui.png"),alt:"Successful Setup",width:"800"}),"\n",(0,n.jsxs)(s.ol,{start:"6",children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Test the new integration using the ",(0,n.jsx)(s.a,{href:"/basics/sso/logging-in-via-sso",children:"IdP and the SP initiated login"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Keep in mind that the deprecated SSO integration continues to work independently and concurrently. It is not affected by the migration and remains enabled. You can manage this integration in the Organization Management UI. To disable the deprecated SSO, toggle the ",(0,n.jsx)(s.strong,{children:"Enable Single Sign on"})," option after validating the new integration. You may also permanently delete the metadata file of your previous integration by clicking ",(0,n.jsx)(s.strong,{children:"Delete metadata file"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/basics/sso/migration-to-the-new-sso/legacy-sso-ui.png"),alt:"Deprecated SSO Configuration Panel",width:"800"})]})}function g(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>o});var n=i(96540);const t={},r=n.createContext(t);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);