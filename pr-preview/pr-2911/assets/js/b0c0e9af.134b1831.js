"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[3915],{22571:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var s=o(74848),t=o(28453);const l={id:"logging",title:"Logging"},c=void 0,i={id:"secure-connections/sauce-connect-5/logging",title:"Logging",description:"This document describes how to configure logging for Sauce Connect Proxy 5.",source:"@site/docs/secure-connections/sauce-connect-5/logging.md",sourceDirName:"secure-connections/sauce-connect-5",slug:"/secure-connections/sauce-connect-5/logging",permalink:"/sauce-docs/pr-preview/pr-2911/secure-connections/sauce-connect-5/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect-5/logging.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"logging",title:"Logging"},sidebar:"docs",previous:{title:"Kubernetes",permalink:"/sauce-docs/pr-preview/pr-2911/secure-connections/sauce-connect-5/installation/kubernetes"},next:{title:"Monitoring",permalink:"/sauce-docs/pr-preview/pr-2911/secure-connections/sauce-connect-5/monitoring"}},r={},a=[{value:"Log rotation",id:"log-rotation",level:2},{value:"Linux",id:"linux",level:3},{value:"MacOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3},{value:"HTTP request logging",id:"http-request-logging",level:2},{value:"Syntax",id:"syntax",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This document describes how to configure logging for Sauce Connect Proxy 5."}),"\n",(0,s.jsx)(n.p,{children:"By default, Sauce Connect Proxy 5 logs messages to the console.\nLogging can be configured using the following options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#log-file",children:(0,s.jsx)(n.code,{children:"log-file"})}),": specify the log file"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#log-level",children:(0,s.jsx)(n.code,{children:"log-level"})}),": set the log level"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#log-http",children:(0,s.jsx)(n.code,{children:"log-http"})}),": log HTTP requests and responses"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"log-rotation",children:"Log rotation"}),"\n",(0,s.jsxs)(n.p,{children:["Logs are automatically rotated when running Sauce Connect Proxy 5 as a Linux Systemd service or in a Docker container.\nFor other setups, use the ",(0,s.jsx)(n.code,{children:"logrotate"})," utility."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The logrotate integration in Linux and macOS is available in ",(0,s.jsx)(n.strong,{children:"Sauce Connect Proxy 5.1.2"})," and later."]})}),"\n",(0,s.jsx)(n.h3,{id:"linux",children:"Linux"}),"\n",(0,s.jsxs)(n.p,{children:["When running as a Systemd service, logs are stored in ",(0,s.jsx)(n.code,{children:"/var/log/sauce-connect"})," and rotated automatically."]}),"\n",(0,s.jsx)(n.p,{children:"For standalone runs, configure logrotate as follows:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a directory for log files:"}),"\n",(0,s.jsx)(n.p,{children:"First, create a directory for Sauce Connect log files or use existing one.\nThe directory needs to be writable by the user running Sauce Connect."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir -p /path/to/sauce-connect/logs\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Adjust Sauce Connect configuration to write logs to the log file:"}),"\n",(0,s.jsx)(n.p,{children:"Command line:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sc run ... --log-file /path/to/sauce-connect/logs/sc.log\n"})}),"\n",(0,s.jsx)(n.p,{children:"Configuration file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"log-file: /path/to/sauce-connect/logs/sc.log\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure logrotate:"}),"\n",(0,s.jsxs)(n.p,{children:["Create a logrotate configuration file ",(0,s.jsx)(n.code,{children:"/etc/logrotate.d/sauce-connect"})," with the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"/path/to/sauce-connect/logs/sc.log {\n    size 100M\n    rotate 10\n    compress\n    maxage 30\n    postrotate\n        /usr/bin/killall -HUP sc\n    endscript\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"This configuration rotates the log file when it reaches 100MB, keeps 10 rotated files, compresses rotated files, and deletes files older than 30 days.\nYou can adjust these values to suit your needs."}),"\n",(0,s.jsxs)(n.p,{children:["For information on available logrotate config file options, check ",(0,s.jsx)(n.a,{href:"https://linux.die.net/man/8/logrotate",children:(0,s.jsx)(n.code,{children:"man logrotate"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"You can test the configuration with the following command."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"logrotate -d /etc/logrotate.d/sauce-connect\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"macos",children:"MacOS"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install logrotate:"}),"\n",(0,s.jsx)(n.p,{children:"First, ensure logrotate is installed via Homebrew."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install logrotate\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a directory for log files:"}),"\n",(0,s.jsx)(n.p,{children:"Create a directory for log Sauce Connect files or use existing one.\nThe directory needs to be writable by the user running Sauce Connect."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir -p /path/to/sauce-connect/logs\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Adjust Sauce Connect configuration to write logs to the log file:"}),"\n",(0,s.jsx)(n.p,{children:"Command line:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sc run ... --log-file /path/to/sauce-connect/logs/sc.log\n"})}),"\n",(0,s.jsx)(n.p,{children:"Configuration file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"log-file: /path/to/sauce-connect/logs/sc.log\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure logrotate:"}),"\n",(0,s.jsx)(n.p,{children:"Create logrotate configration directory."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo mkdir -p /usr/local/etc/logrotate.d\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Create a logrotate configuration file ",(0,s.jsx)(n.code,{children:"/usr/local/etc/logrotate.d/sauce-connect"})," with the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"/path/to/sauce-connect/logs/sc.log {\n    size 100M\n    rotate 10\n    compress\n    maxage 30\n    postrotate\n        /usr/bin/killall -HUP sc\n    endscript\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"This configuration rotates the log file when it reaches 100MB, keeps 10 rotated files, compresses rotated files, and deletes files older than 30 days.\nYou can adjust these values to suit your needs."}),"\n",(0,s.jsxs)(n.p,{children:["For information on available logrotate config file options, check ",(0,s.jsx)(n.a,{href:"https://linux.die.net/man/8/logrotate",children:(0,s.jsx)(n.code,{children:"man logrotate"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"You can test the configuration with the following command."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"logrotate -d /usr/local/etc/logrotate.d/sauce-connect\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create run logrotate script:"}),"\n",(0,s.jsxs)(n.p,{children:["Create ",(0,s.jsx)(n.code,{children:"run_logrotate.sh"})," script with the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#!/bin/sh\n/opt/homebrew/sbin/logrotate -s /opt/homebrew/var/run/logrotate.status /usr/local/etc/logrotate.d/*\n"})}),"\n",(0,s.jsx)(n.p,{children:"Set execute permissions for the script."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chmod 755 run_logrotate.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set up periodic job:"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"periodic"})," utility runs scripts located in specific directories at daily, weekly, or monthly intervals.\nPlace your script in ",(0,s.jsx)(n.code,{children:"/etc/periodic/daily"})," for daily execution."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo cp run_logrotate.sh /etc/periodic/daily/500.logrotate\n"})}),"\n",(0,s.jsx)(n.p,{children:"Manually run the script to test it."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo periodic daily\n"})}),"\n",(0,s.jsx)(n.p,{children:"Check the logs or the logrotate results to ensure it is functioning as expected."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,s.jsx)(n.p,{children:"Open Terminal application to run the following commands."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install Log-Rotate:"}),"\n",(0,s.jsx)(n.p,{children:"First, install logrotate compatible PowerShell module."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"Install-Module -Name Log-Rotate -Scope CurrentUser\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If log compression is required, install the ",(0,s.jsx)(n.code,{children:"7zip"})," utility."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"winget install 7zip\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a directory for log files:"}),"\n",(0,s.jsx)(n.p,{children:"Create a directory for Sauce Connect log files or use existing one."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir -p c:\\sauce-connect\\logs\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Adjust Sauce Connect configuration to write logs to the log file:"}),"\n",(0,s.jsx)(n.p,{children:"Command line:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sc run ... --log-file c:\\sauce-connect\\logs\\sc.log\n"})}),"\n",(0,s.jsx)(n.p,{children:"Configuration file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"log-file: c:\\sauce-connect\\logs\\sc.log\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure Log-Rotate:"}),"\n",(0,s.jsxs)(n.p,{children:["Create Log-Rotate configration directory ",(0,s.jsx)(n.code,{children:"c:\\Log-Rotate\\"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir c:\\Log-Rotate\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Create a logrotate configuration file ",(0,s.jsx)(n.code,{children:"c:\\Log-Rotate\\sauce-connect"})," with the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"c:\\sauce-connect\\logs\\sc.log {\n    size 100M\n    rotate 10\n    compress\n    maxage 30\n    copy\n    postrotate\n        Clear-Content c:\\sauce-connect\\logs\\sc.log\n    endscript\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"This configuration rotates the log file when it reaches 100MB, keeps 10 rotated files, compresses rotated files, and deletes files older than 30 days.\nYou can adjust these values to suit your needs."}),"\n",(0,s.jsxs)(n.p,{children:["For information on available logrotate config file options, check ",(0,s.jsx)(n.a,{href:"https://linux.die.net/man/8/logrotate",children:(0,s.jsx)(n.code,{children:"man logrotate"})}),".\nNot all options are supported by Log-Rotate PowerShell module.\nCheck the ",(0,s.jsx)(n.a,{href:"https://github.com/theohbrothers/Log-Rotate",children:"Log-Rotate documentation"})," for more information."]}),"\n",(0,s.jsx)(n.p,{children:"You can test the configuration with the following command.`"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"Log-Rotate -Config C:\\LogRotate\\sauce-connect -State C:\\LogRotate\\Log-Rotate.status -Verbose -WhatIf\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set up scheduled task:"}),"\n",(0,s.jsx)(n.p,{children:"Run the following PowerShell script to create a scheduled task to run the Log-Rotate command daily at 9 AM."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:'$trigger = New-ScheduledTaskTrigger -Daily -At 9am\n$action = New-ScheduledTaskAction -Execute \'PowerShell.exe\' -Argument \'-Command "Log-Rotate -Config C:\\LogRotate\\sauce-connect -State C:\\LogRotate\\Log-Rotate.status -Verbose"\'\nRegister-ScheduledTask -TaskName "SauceConnectLogRotate" -Trigger $trigger -Action $action -Description "Daily task rotate Sauce Connect logs"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Manually run the task to test it."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:'Start-ScheduledTask -TaskName "SauceConnectLogRotate"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Check the logs or the Log-Rotate results to ensure it is functioning as expected."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"http-request-logging",children:"HTTP request logging"}),"\n",(0,s.jsxs)(n.p,{children:["Sauce Connect Proxy 5 does not log HTTP requests and responses by default.\nTo enable this, use the ",(0,s.jsx)(n.code,{children:"--log-http"})," flag."]}),"\n",(0,s.jsx)(n.p,{children:"The following example logs request and response headers for proxied requests:\nNote: Proxied request logging works only with plain HTTP requests or HTTPS requests when TLS resigning is enabled."}),"\n",(0,s.jsx)(n.p,{children:"Command line:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sc run ... --log-http proxy:headers\n"})}),"\n",(0,s.jsx)(n.p,{children:"Configuration file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"log-http: proxy:headers\n"})}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"--log-http"})," flag accepts a comma-separated list of ",(0,s.jsx)(n.code,{children:"[module]:[option]"})," pairs.\nModule can be one of the following:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"proxy"}),": requests and responses from test jobs"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"api"}),": requests received by the sc API server"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"control"}),": requests sent to the Sauce Labs API"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"[module]:"})," is omitted, the option applies to all modules."]}),"\n",(0,s.jsx)(n.p,{children:"Available options are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"none"}),": no logging"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"short-url"}),": logs ",(0,s.jsx)(n.code,{children:"[scheme://]host[/path]"})," instead of the full URL"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"url"}),": logs the full URL including query parameters"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"headers"}),": logs request line and headers"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"body"}),": logs request line, headers, and body"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"errors"}),": logs request line and headers if status code is greater than or equal to 500"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>i});var s=o(96540);const t={},l=s.createContext(t);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);