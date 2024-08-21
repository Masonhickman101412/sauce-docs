"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[93537],{65328:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=s(74848),r=s(28453),a=s(86025);const o={id:"integrating",title:"Coresnap Integration Guide",sidebar_label:"Coresnap Integration Guide",description:"Integrating Backtrace for system-wide core dump analysis with Coresnap."},i=void 0,c={id:"error-reporting/platform-integrations/coresnap/integrating",title:"Coresnap Integration Guide",description:"Integrating Backtrace for system-wide core dump analysis with Coresnap.",source:"@site/docs/error-reporting/platform-integrations/coresnap/integrating.md",sourceDirName:"error-reporting/platform-integrations/coresnap",slug:"/error-reporting/platform-integrations/coresnap/integrating",permalink:"/sauce-docs/pr-preview/pr-2899/error-reporting/platform-integrations/coresnap/integrating",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/coresnap/integrating.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1692688198e3,frontMatter:{id:"integrating",title:"Coresnap Integration Guide",sidebar_label:"Coresnap Integration Guide",description:"Integrating Backtrace for system-wide core dump analysis with Coresnap."},sidebar:"backtrace",previous:{title:"React Native",permalink:"/sauce-docs/pr-preview/pr-2899/error-reporting/language-integrations/react-native"},next:{title:"Setup for FreeBSD",permalink:"/sauce-docs/pr-preview/pr-2899/error-reporting/platform-integrations/coresnap/setup"}},l={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Install Coresnap and Dependencies",id:"install-coresnap-and-dependencies",level:2},{value:"RHEL",id:"rhel",level:3},{value:"Debian-based Systems (Including Ubuntu)",id:"debian-based-systems-including-ubuntu",level:3},{value:"FreeBSD",id:"freebsd",level:3},{value:"Install Morgue Command-Line Querying Tool",id:"install-morgue-command-line-querying-tool",level:3},{value:"Basic Testing",id:"basic-testing",level:2},{value:"Testing With Morgue",id:"testing-with-morgue",level:3},{value:"Troubleshooting",id:"troubleshooting",level:4},{value:"Integration",id:"integration",level:3},{value:"Deploy Client Configuration",id:"deploy-client-configuration",level:3},{value:"Prepare Coresnap.conf",id:"prepare-coresnapconf",level:3},{value:"Start and Test Coresnap",id:"start-and-test-coresnap",level:3},{value:"Verify Object Store",id:"verify-object-store",level:3},{value:"Troubleshooting",id:"troubleshooting-1",level:2},{value:"First Steps",id:"first-steps",level:3},{value:"Troubleshooting Tools",id:"troubleshooting-tools",level:3},{value:"Advanced",id:"advanced",level:2},{value:"Create Additional Projects",id:"create-additional-projects",level:3},{value:"Create Additional Users",id:"create-additional-users",level:3},{value:"Route Snapshots to the Correct Projects",id:"route-snapshots-to-the-correct-projects",level:3},{value:"Configure Workflow Integrations",id:"configure-workflow-integrations",level:3},{value:"Attach and Display Attributes",id:"attach-and-display-attributes",level:3},{value:"Go Application Integration",id:"go-application-integration",level:3},{value:"Managing Disk Space",id:"managing-disk-space",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This section guides you through integrating Backtrace for system-wide core dump analysis with Coresnap, our core dump aggregation service. Coresnap is lightweight and non-intrusive to applications when idle."}),"\n",(0,t.jsx)(n.p,{children:"Coresnap is the Backtrace service that automatically processes coredumps on the machine where it is installed. By default, Coresnap generates Backtrace snapshots from coredumps on the system and sends them to the object store. For those integrating via C/C++ applications, this is the recommended approach."}),"\n",(0,t.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A Backtrace account (",(0,t.jsx)(n.a,{href:"https://backtrace.io/login",children:"log in"})," or sign up for a ",(0,t.jsx)(n.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["Your subdomain name (used to connect to your Backtrace instance). For example, ",(0,t.jsx)(n.code,{children:"https://example-subdomain.sp.backtrace.io"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"A Backtrace license number."}),"\n",(0,t.jsxs)(n.li,{children:["A Backtrace project and a ",(0,t.jsx)(n.a,{href:"/error-reporting/project-setup/submission-url",children:"submission token"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"install-coresnap-and-dependencies",children:"Install Coresnap and Dependencies"}),"\n",(0,t.jsx)(n.h3,{id:"rhel",children:"RHEL"}),"\n",(0,t.jsx)(n.p,{children:"To install Backtrace packages, first, install Backtrace's RPM mirror by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -s https://<LICENSE>:@packagecloud.io/install/repositories/backtrace/stork/script.rpm.sh | sudo bash\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"<LICENSE>"})," with your license number. If you haven't received your license number yet, contact us. Also, make sure to provide the correct RHEL/CentOS Release Number."]}),"\n",(0,t.jsx)(n.p,{children:"This command configures yum to pull packages from Backtrace's RPM mirror. To verify the proper yum configuration, run the following commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Clean and update yum package listing\n$ sudo yum clean; sudo yum update\n\n# Confirm that the backtrace-* packages are available\n$ yum list ^backtrace-*\nbacktrace-coresnap\nbacktrace-coronerd\nbacktrace-coroner\nbacktrace-ptrace\nbacktrace-hydra\n[...]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then install the required packages:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Install packages (on machines that submit snapshots)\n$ yum install backtrace-coroner\n$ yum install backtrace-coresnap\n$ yum install backtrace-ptrace\n"})}),"\n",(0,t.jsx)(n.h3,{id:"debian-based-systems-including-ubuntu",children:"Debian-based Systems (Including Ubuntu)"}),"\n",(0,t.jsx)(n.p,{children:"To install Backtrace packages, first, install Backtrace's APT mirror by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -s https://<LICENSE>:@packagecloud.io/install/repositories/backtrace/stork/script.deb.sh | sudo bash\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"<LICENSE>"})," with your license number. If you haven't received your license number yet, contact us. Also, provide the appropriate values for ",(0,t.jsx)(n.code,{children:"DISTRO"})," and ",(0,t.jsx)(n.code,{children:"RELEASE"})," based on your system's configuration."]}),"\n",(0,t.jsx)(n.p,{children:"This command configures apt to pull packages from Backtrace's APT mirror. To verify the proper apt configuration, run the following commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Clean and update apt package listing\n$ apt-get clean; apt-get update\n\n# Confirm that backtrace-* packages are available\n$ apt-cache search ^backtrace-*\nbacktrace-coresnap\nbacktrace-coronerd\nbacktrace-coroner\nbacktrace-ptrace\nbacktrace-hydra\n[...]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then install the required packages:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Install packages (on machines that submit snapshots)\n$ apt-get install backtrace-coroner\n$ apt-get install backtrace-coresnap\n$ apt-get install backtrace-ptrace\n"})}),"\n",(0,t.jsx)(n.h3,{id:"freebsd",children:"FreeBSD"}),"\n",(0,t.jsx)(n.p,{children:"Consult the dedicated page for FreeBSD installation instructions."}),"\n",(0,t.jsx)(n.h3,{id:"install-morgue-command-line-querying-tool",children:"Install Morgue Command-Line Querying Tool"}),"\n",(0,t.jsxs)(n.p,{children:["To install morgue, you'll need ",(0,t.jsx)(n.a,{href:"https://nodejs.org/en/",children:"Node.js"}),". Run the following command to install Morgue globally:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ npm install backtrace-morgue -g\n"})}),"\n",(0,t.jsx)(n.h2,{id:"basic-testing",children:"Basic Testing"}),"\n",(0,t.jsx)(n.p,{children:"Now, let's perform a basic test to ensure connectivity to the object store before proceeding."}),"\n",(0,t.jsx)(n.h3,{id:"testing-with-morgue",children:"Testing With Morgue"}),"\n",(0,t.jsx)(n.p,{children:"Login to the object store by issuing the following login command with the credentials provided by Backtrace:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ morgue login https://yourcompany.sp.backtrace.io\nUsername: jdoe\nPassword:\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now, list the contents of the ",(0,t.jsx)(n.code,{children:"blackhole"})," project. It returns an empty result set, like the example below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ morgue list blackhole\njdoe: yourcompany/blackhole as of 1M ago [384 us]\n"})}),"\n",(0,t.jsx)(n.h4,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsxs)(n.p,{children:["If you encounter any issues querying the object store with ",(0,t.jsx)(n.code,{children:"morgue"}),", ensure that your machine can communicate with ",(0,t.jsx)(n.code,{children:"yourcompany.sp.backtrace.io"})," via the following TCP ports:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"443"}),"\n",(0,t.jsx)(n.li,{children:"4097"}),"\n",(0,t.jsx)(n.li,{children:"6098"}),"\n",(0,t.jsx)(n.li,{children:"9040"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"integration",children:"Integration"}),"\n",(0,t.jsxs)(n.p,{children:["Before proceeding, make sure to turn off any services that process coredumps or modify ",(0,t.jsx)(n.code,{children:"/proc/sys/kernel/core_pattern"}),", such as apport."]}),"\n",(0,t.jsx)(n.h3,{id:"deploy-client-configuration",children:"Deploy Client Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Coresnap requires a copy of the coroner client configuration file (coroner.cf) provided to you by a Backtrace representative. Place a copy of this file in ",(0,t.jsx)(n.code,{children:"/usr/local/etc/coroner.cf"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This file needs to be updated for each new project token (see ",(0,t.jsx)(n.a,{href:"#create-additional-projects",children:"Create Additional Projects"}),")"]}),"\n",(0,t.jsx)(n.h3,{id:"prepare-coresnapconf",children:"Prepare Coresnap.conf"}),"\n",(0,t.jsxs)(n.p,{children:["Copy the file ",(0,t.jsx)(n.code,{children:"/opt/backtrace/etc/coresnap/coresnap.conf"})," to either ",(0,t.jsx)(n.code,{children:"/usr/local/etc/coresnap/coresnap.conf"})," or ",(0,t.jsx)(n.code,{children:"/etc/coresnap/coresnap.conf"}),". The new file is where you'll changes to the Coresnap configuration when customizing your installation later."]}),"\n",(0,t.jsxs)(n.p,{children:["On FreeBSD, copy ",(0,t.jsx)(n.code,{children:"/opt/backtrace/etc/coresnap/coresnap.conf.sample"})," to ",(0,t.jsx)(n.code,{children:"/opt/backtrace/etc/coresnap/coresnap.conf"})," instead."]}),"\n",(0,t.jsxs)(n.p,{children:["Installing Coresnap does not create the paths ",(0,t.jsx)(n.code,{children:"/usr/local/etc/coresnap/coresnap.conf"})," or ",(0,t.jsx)(n.code,{children:"/etc/coresnap/coresnap.conf"})," - If they do not exist, you can create them manually."]}),"\n",(0,t.jsx)(n.h3,{id:"start-and-test-coresnap",children:"Start and Test Coresnap"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ service coresnapd start\n"})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ /etc/init.d/coresnapd start\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now, let's test Coresnap by triggering a coredump. One way to do this is by sending a SIGABRT to the PID of a running ",(0,t.jsx)(n.code,{children:"vim"})," process. However, if your application already correctly handles this signal to generate coredumps, you can use its PID instead:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ kill -SIGABRT\n"})}),"\n",(0,t.jsx)(n.h3,{id:"verify-object-store",children:"Verify Object Store"}),"\n",(0,t.jsxs)(n.p,{children:["Now, let's verify that the snapshot was sent to the object store. You can do this by re-running ",(0,t.jsx)(n.code,{children:"morgue list blackhole"})," and checking if it now shows a single crash:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ morgue list blackhole\n* \u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2582 5 seconds ago\nDate: Mon Jan 23 2017 17:25:12 GMT-0500 (EST)\nMon Jan 23 2017 17:25:12 GMT-0500 (EST)\nOccurrences: 1\n\njdoe: yourcompany/blackhole as of 1M ago [497 us]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also view this via the Web Console UI. Browse to ",(0,t.jsx)(n.code,{children:"https://<yourcompany>.sp.backtrace.io"})," and login with the credentials you previously created."]}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting-1",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.h3,{id:"first-steps",children:"First Steps"}),"\n",(0,t.jsx)(n.p,{children:"The first step in troubleshooting is to check the system log for messages from the Coresnap service:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ cat /var/log/syslog | grep coresnap\n"})}),"\n",(0,t.jsx)(n.p,{children:"When Coresnap processes a snapshot successfully, you see a series of log messages similar to the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Oct 6 17:49:06 mbreauxpc coresnap[27337]: Crash dump archived in /var/coresnap/archive/pending/a78771dc-b687-4e28-b885-8fa9ed43894d\nOct 6 17:49:06 mbreauxpc coresnap[27338]: Executing slave: /opt/backtrace/bin/ptrace --faulted -o/var/coresnap/archive/sending/a78771dc-b687-4e28-b885-8fa9ed43894d --load=libc- --kv=coresnap.object:a78771dc-b687-4e28-b885-8fa9ed43894d --resource=/var/coresnap/archive/assets/a78771dc-b687-4e28-b885-8fa9ed43894d --core /var/coresnap/archive/pending/a78771dc-b687-4e28-b885-8fa9ed43894d /usr/bin/vim.basic\nOct 6 17:49:07 mbreauxpc coresnap[27339]: Executing slave: /opt/backtrace/bin/coroner -c /usr/local/etc/coroner.cf put blackhole blackhole /var/coresnap/archive/sending/a78771dc-b687-4e28-b885-8fa9ed43894d\nOct 6 17:49:07 mbreauxpc coresnap[847]: crash a78771dc-b687-4e28-b885-8fa9ed43894d processed in 1 second\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"If you don't see any of these messages, your system or application is not set up to generate coredumps:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["First, check ",(0,t.jsx)(n.code,{children:"ulimit -a"})," and ensure that the core file size is unlimited for the user under which the faulting application is running. If it's not, execute a ",(0,t.jsx)(n.code,{children:"ulimit -c unlimited"})," as that user."]}),"\n",(0,t.jsxs)(n.li,{children:["Try running ",(0,t.jsx)(n.code,{children:"vim"})," as the same user you'll be running your application as and send it a SIGABRT signal to verify that it generates a coredump. If this does not trigger Coresnap, it means your system cannot generate coredumps."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"If coresnap fails after the second step:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Note the following error message and attempt to manually run the full ",(0,t.jsx)(n.code,{children:"ptrace"})," command listed after ",(0,t.jsx)(n.code,{children:"Executing slave:"})," as the Coresnap user. This helps reveal permissions issues with ",(0,t.jsx)(n.code,{children:"ptrace"})," reading the coredump or generating the output file. You can also refer to the Troubleshooting Tools section below."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"If coresnap fails after the third step:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["There may be a connectivity issue with sending the snapshot to the object store. Attempt to manually run the coroner command listed after ",(0,t.jsx)(n.code,{children:"Executing slave:"}),". If this fails, verify that nothing is blocking traffic on port 6098 between the client and the object store (",(0,t.jsx)(n.code,{children:"yourcustomername.sp.backtrace.io"}),")."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"troubleshooting-tools",children:"Troubleshooting Tools"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"coresnap list"})," command the view the state of unprocessed coredumps and snapshots that haven't been sent yet:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ /opt/backtrace/bin/coresnap list\n\nsending/3d22c19c-09c... -s- vim.basic Fri Apr 14 22:48:44 2017 9.45kB\npending/84605573-9de... c-- vim.basic Fri Apr 14 22:49:40 2017 3.12mB\npending/143fc129-afc... c-- vim.basic Fri Apr 14 22:50:01 2017 3.12mB\n\n[pending]/1O/6.24mB [sending]/1O/9.45kB\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To retry processing an object in one of these stages, you can use the ",(0,t.jsx)(n.code,{children:"coresnap retry"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ /opt/backtrace/bin/coresnap retry pending/84605573\n$ /opt/backtrace/bin/coresnap list\nsending/3d22c19c-09c... -sa vim.basic Fri Apr 14 22:48:44 2017 9.45kB\nsending/84605573-9de... -sa vim.basic Fri Apr 14 22:53:44 2017 9.44kB\npending/143fc129-afc... c-- vim.basic Fri Apr 14 22:50:01 2017 3.12mB\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"For an object stuck in pending state"})}),"\n",(0,t.jsxs)(n.p,{children:["For an object stuck in the ",(0,t.jsx)(n.code,{children:"pending"})," state, it means Coresnap has not yet generated a Backtrace snapshot. This may indicate a failure when Coresnap runs ",(0,t.jsx)(n.code,{children:"ptrace"})," against the coredump."]}),"\n",(0,t.jsxs)(n.p,{children:["You can try to manually creating a snapshot to submit to the object store by running ",(0,t.jsx)(n.code,{children:"ptrace --core"}),". By default, Coresnap places coredumps and snapshots in subfolders of ",(0,t.jsx)(n.code,{children:"/var/coresnap/archive"})," (you can verify this in coresnap.conf). In the example above, the core dump still in a ",(0,t.jsx)(n.code,{children:"pending"})," state is located at ",(0,t.jsx)(n.code,{children:"/var/coresnap/archive/pending"}),". You can try creating a snapshot with the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ ptrace --core /var/coresnap/archive/pending/143fc129-afc* `which vim`\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If ptrace is failing, you can try using the ",(0,t.jsx)(n.code,{children:"bt"})," tool instead:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ bt --core /var/coresnap/archive/pending/143fc129-afc* `which vim`\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"For an object stuck in sending state"})}),"\n",(0,t.jsxs)(n.p,{children:["It means snapshots have not yet been submitted to the object store. If an object gets stuck in ",(0,t.jsx)(n.code,{children:"pending"})," state, Coresnap may have trouble sending the snapshot. Refer to the ",(0,t.jsx)(n.a,{href:"#first-steps",children:"If coresnap fails after the third step"})," section above."]}),"\n",(0,t.jsx)(n.h2,{id:"advanced",children:"Advanced"}),"\n",(0,t.jsx)(n.p,{children:"Now that the Backtrace components are up and running on a basic level, you can proceed with customizations."}),"\n",(0,t.jsx)(n.h3,{id:"create-additional-projects",children:"Create Additional Projects"}),"\n",(0,t.jsxs)(n.p,{children:["By default, coresnap sends everything to the ",(0,t.jsx)(n.code,{children:"blackhole"})," project. However, it is more beneficial to sort your application snapshots into their respective projects in the object store."]}),"\n",(0,t.jsx)(n.p,{children:"To create a new project, follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Return to the Web UI and click the ",(0,t.jsx)(n.strong,{children:"Menu Icon"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.strong,{children:"Configure Organization"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,a.A)("/img/error-reporting/coresnap/5e601cedc71a7.png"),alt:"configure organization"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On the project listing page, you find an option to ",(0,t.jsx)(n.strong,{children:"Create a new project"}),". Click on it and enter a name for your new project."]}),"\n",(0,t.jsx)("img",{src:(0,a.A)("/img/error-reporting/coresnap/5e601cee9715f.png"),alt:"create a new project"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"After creating the project, you need to configure the project's token."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Select the project from the project listing."}),"\n",(0,t.jsxs)(n.li,{children:["In the left menu, click on ",(0,t.jsx)(n.strong,{children:"Tokens"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Create a new token"}),", select your user, and click ",(0,t.jsx)(n.strong,{children:"Create"}),"."]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,a.A)("/img/error-reporting/coresnap/5e601cef9bdfb.png"),alt:"create a new token"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To copy the newly created token string, click on the clipboard icon located on the left side of the token."}),"\n",(0,t.jsx)("img",{src:(0,a.A)("/img/error-reporting/coresnap/5e601cf0cbc4e.png"),alt:"copy token"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Edit your ",(0,t.jsx)(n.code,{children:"/usr/local/etc/coroner.cf"})," and add this token to the ",(0,t.jsx)(n.code,{children:"tokens"})," section using the same format as the ",(0,t.jsx)(n.code,{children:"blackhole"})," project: ",(0,t.jsx)(n.code,{children:"projectname = "}),". Repeat this process for each new project you create."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-additional-users",children:"Create Additional Users"}),"\n",(0,t.jsx)(n.p,{children:"If you want to grant UI access to additional users, you can create new user accounts directly in the Web UI. Follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"In the Web UI, navigate to the first configuration screen."}),"\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.strong,{children:"Users"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"Create a new User"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Follow the prompts to create the new user account."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"route-snapshots-to-the-correct-projects",children:"Route Snapshots to the Correct Projects"}),"\n",(0,t.jsx)(n.p,{children:"To ensure that coresnap sends snapshots to the correct projects, follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Edit either ",(0,t.jsx)(n.code,{children:"/usr/local/etc/coresnap/coresnap.conf"})," or ",(0,t.jsx)(n.code,{children:"/etc/coresnap/coresnap.conf"})," (depending on which one you created in the previous step)"]}),"\n",(0,t.jsxs)(n.li,{children:["Locate the line ",(0,t.jsx)(n.code,{children:"format.1 = blackhole"})," in the file."]}),"\n",(0,t.jsxs)(n.li,{children:["Add additional ",(0,t.jsx)(n.code,{children:"format.1"})," lines for each project above the blackhole line. Follow this pattern:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"format.1 = projectname %e /end-of-executablename$\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["For this to work correctly, ensure that the token name you added to ",(0,t.jsx)(n.code,{children:"coroner.cf"})," in the previous section matches the name of the project you set up in the object store Web UI. The ",(0,t.jsx)(n.code,{children:"projectname"})," in the ",(0,t.jsx)(n.code,{children:"format.1"})," line must also match these."]})}),"\n",(0,t.jsxs)(n.p,{children:["In the pattern, ",(0,t.jsx)(n.code,{children:"%e"})," specifies that we are matching based on the process' executable name. The part after it is a regular expression match. In this case, we are setting the project and token name to ",(0,t.jsx)(n.code,{children:"projectname"})," if the executable name ends with ",(0,t.jsx)(n.code,{children:"end-of-executablename"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"In summary, if the executable matches the specified pattern, the snapshot will be sent to the corresponding project."}),"\n",(0,t.jsxs)(n.p,{children:["If you want to customize this further, refer to the inline notes in the ",(0,t.jsx)(n.code,{children:"coresnap.conf"})," file just above the ",(0,t.jsx)(n.code,{children:"format.1"})," line or consult your Backtrace support representative."]}),"\n",(0,t.jsxs)(n.p,{children:["Remember to restart coresnapd after making any changes to ",(0,t.jsx)(n.code,{children:"coresnap.conf"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"configure-workflow-integrations",children:"Configure Workflow Integrations"}),"\n",(0,t.jsx)(n.p,{children:"After you have your Backtrace integration set up, you can configure alerts to your preferred third-party ticketing or messaging services. Refer to the product guide for detailed instructions on setting up workflow integrations."}),"\n",(0,t.jsx)(n.h3,{id:"attach-and-display-attributes",children:"Attach and Display Attributes"}),"\n",(0,t.jsx)(n.p,{children:"To enhance the querying and grouping capabilities in the Web UI and the morgue command-line tool, you can add custom attributes to your snapshots. Backtrace automatically populates the following attributes to your snapshots:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"hostname"}),"\n",(0,t.jsx)(n.li,{children:"application"}),"\n",(0,t.jsx)(n.li,{children:"uname.machine"}),"\n",(0,t.jsx)(n.li,{children:"uname.release"}),"\n",(0,t.jsx)(n.li,{children:"uname.version"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to add additional key-value pairs to your snapshots, you can use the ",(0,t.jsx)(n.code,{children:"BACKTRACE_DEFAULTS"})," environment variable. Populate this variable with line-delimited key-value pairs in the format:"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"version=1.2.3"}),"\n",(0,t.jsx)(n.code,{children:"dc=newyork"})]}),"\n",(0,t.jsx)(n.p,{children:"Additionally, you can specify a program or script for coresnap to call during snapshot generation to populate these values dynamically."}),"\n",(0,t.jsxs)(n.p,{children:["By default, coresnap executes ",(0,t.jsx)(n.code,{children:"/opt/backtrace/etc/coresnap/defaults"})," and passes the faulted process' executable name as the first parameter to the script. If needed, you can modify the ",(0,t.jsx)(n.code,{children:"defaults.command"})," path in the ",(0,t.jsx)(n.code,{children:"coresnap.conf"})," file."]}),"\n",(0,t.jsxs)(n.p,{children:["After making any changes to ",(0,t.jsx)(n.code,{children:"coresnap.conf"}),", remember to restart coresnapd."]}),"\n",(0,t.jsxs)(n.p,{children:["Finally, in the Web UI configuration section, select your project, navigate to ",(0,t.jsx)(n.strong,{children:"Attributes"}),", and click on ",(0,t.jsx)(n.strong,{children:"Create a new attribute"}),". Specify the attribute's name, type, and format, and click ",(0,t.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Make sure the attribute name matches the key you set in the ",(0,t.jsx)(n.code,{children:"BACKTRACE_DEFAULTS"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To display these attributes in the ",(0,t.jsx)(n.code,{children:"morgue list"})," output, include an aggregation flag such as -",(0,t.jsx)(n.code,{children:"-select="})," or ",(0,t.jsx)(n.code,{children:"--histogram="})," in your ",(0,t.jsx)(n.code,{children:"morgue list"})," command. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ morgue list blackhole --select=hostname\n*\n#9c5f\nhostname: jdoepc\njdoe: yourcompany/blackhole as of 1M ago [529 us]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For more information, refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/backtrace-labs/backtrace-morgue",children:"Morgue README"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"go-application-integration",children:"Go Application Integration"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to capture errors from your Go application using Coresnap, make sure to include the environment variable ",(0,t.jsx)(n.code,{children:"GOTRACEBACK=crash"})," in your application's environment. This enables your application to generate a core dump when it encounters a panic or receives a SIGABRT signal."]}),"\n",(0,t.jsx)(n.h3,{id:"managing-disk-space",children:"Managing Disk Space"}),"\n",(0,t.jsx)(n.p,{children:"Coresnap provides several settings to help you manage your disk space effectively. Take a look at the following options:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"#\n# Do not archive dumps if the target has less than 10% of\n# free space rounded to the next disk block size.\n#\ndump.quota = 10%\n\n#\n# These options dictate how the coresnapd process will behave.\n#\n[daemon]\n#\n# The purge.age option specifies when coresnapd should unlink files according\n# to the age of the files. The format is\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"dump.quota"})," option allows you to specify a threshold for archiving core dumps. If the free disk space falls below this threshold, coresnap won't archive new core dumps. This includes processing snapshots from the core dump, sending the snapshot to the object store, and triggering notifications via workflow integrations. It's recommended to set the quota generously in combination with the ",(0,t.jsx)(n.code,{children:"purge.age"})," setting."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"purge.age"})," setting determines when coresnap should unlink (delete) archived files based on their age. Combining this setting with ",(0,t.jsx)(n.code,{children:"dump.quota"})," helps you manage disk space efficiently. If you expect a low error volume and wish to retain files indefinitely, you can set ",(0,t.jsx)(n.code,{children:"purge.disabled"})," to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["After making any changes to the configuration, remember to restart the ",(0,t.jsx)(n.code,{children:"coresnapd"})," process."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var t=s(96540);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);