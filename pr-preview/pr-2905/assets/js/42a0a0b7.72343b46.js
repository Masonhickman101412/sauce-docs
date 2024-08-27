"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[11436],{58156:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>t});var s=i(74848),l=i(28453);const r={id:"run",title:"sc run"},d="Sc Run",o={id:"dev/cli/sauce-connect-5/run",title:"sc run",description:"Usage: sc run --username  --access-key  --region  --tunnel-name  [flags]",source:"@site/docs/dev/cli/sauce-connect-5/sc_run.md",sourceDirName:"dev/cli/sauce-connect-5",slug:"/dev/cli/sauce-connect-5/run",permalink:"/sauce-docs/pr-preview/pr-2905/dev/cli/sauce-connect-5/run",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/sauce-connect-5/sc_run.md",tags:[],version:"current",lastUpdatedBy:"Sauce Connect Bot",lastUpdatedAt:1719235051e3,frontMatter:{id:"run",title:"sc run"},sidebar:"dev",previous:{title:"sc",permalink:"/sauce-docs/pr-preview/pr-2905/dev/cli/sauce-connect-5"},next:{title:"sc legacy",permalink:"/sauce-docs/pr-preview/pr-2905/dev/cli/sauce-connect-5/legacy"}},c={},t=[{value:"Required",id:"required",level:2},{value:"<code>-k, --access-key</code>",id:"access-key",level:3},{value:"<code>-r, --region</code>",id:"region",level:3},{value:"<code>-i, --tunnel-name</code>",id:"tunnel-name",level:3},{value:"<code>-u, --username</code>",id:"username",level:3},{value:"Options",id:"options",level:2},{value:"<code>-M, --metadata</code>",id:"metadata",level:3},{value:"<code>-s, --shared</code>",id:"shared",level:3},{value:"<code>-t, --tunnel-pool</code>",id:"tunnel-pool",level:3},{value:"Tunnel traffic",id:"tunnel-traffic",level:2},{value:"<code>-F, --deny-domains</code>",id:"deny-domains",level:3},{value:"<code>-D, --direct-domains</code>",id:"direct-domains",level:3},{value:"<code>-B, --tls-passthrough-domains</code>",id:"tls-passthrough-domains",level:3},{value:"<code>-b, --tls-resign-domains</code>",id:"tls-resign-domains",level:3},{value:"<code>-T, --tunnel-domains</code>",id:"tunnel-domains",level:3},{value:"Proxy",id:"proxy",level:2},{value:"<code>-a, --auth</code>",id:"auth",level:3},{value:"<code>-H, --header</code>",id:"header",level:3},{value:"<code>-p, --pac</code>",id:"pac",level:3},{value:"<code>-x, --proxy</code>",id:"proxy",level:3},{value:"<code>--proxy-localhost</code>",id:"proxy-localhost",level:3},{value:"<code>--proxy-sauce</code>",id:"proxy-sauce",level:3},{value:"DNS",id:"dns",level:2},{value:"<code>--dns-round-robin</code>",id:"dns-round-robin",level:3},{value:"<code>-n, --dns-server</code>",id:"dns-server",level:3},{value:"<code>--dns-timeout</code>",id:"dns-timeout",level:3},{value:"HTTP client",id:"http-client",level:2},{value:"<code>--cacert-file</code>",id:"cacert-file",level:3},{value:"<code>--http-dial-timeout</code>",id:"http-dial-timeout",level:3},{value:"<code>--http-idle-conn-timeout</code>",id:"http-idle-conn-timeout",level:3},{value:"<code>--http-response-header-timeout</code>",id:"http-response-header-timeout",level:3},{value:"<code>--http-tls-handshake-timeout</code>",id:"http-tls-handshake-timeout",level:3},{value:"API server",id:"api-server",level:2},{value:"<code>--api-address</code>",id:"api-address",level:3},{value:"<code>--api-basic-auth</code>",id:"api-basic-auth",level:3},{value:"<code>--api-idle-timeout</code>",id:"api-idle-timeout",level:3},{value:"Logging",id:"logging",level:2},{value:"<code>--log-file</code>",id:"log-file",level:3},{value:"<code>--log-http</code>",id:"log-http",level:3},{value:"<code>--log-level</code>",id:"log-level",level:3},{value:"Formatting Domains",id:"formatting-domains",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sc-run",children:"Sc Run"}),"\n",(0,s.jsxs)(n.p,{children:["Usage: ",(0,s.jsx)(n.code,{children:"sc run --username <username> --access-key <UUID> --region <data center> --tunnel-name <value> [flags]"})]}),"\n",(0,s.jsx)(n.p,{children:"Run Sauce Connect Proxy"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," You can also specify the options as YAML, JSON or TOML file using ",(0,s.jsx)(n.code,{children:"--config-file"})," flag.\nYou can generate a config file by running ",(0,s.jsx)(n.code,{children:"sc run config-file"})," command."]}),"\n",(0,s.jsx)(n.h2,{id:"required",children:"Required"}),"\n",(0,s.jsx)(n.h3,{id:"access-key",children:(0,s.jsx)(n.code,{children:"-k, --access-key"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_ACCESS_KEY"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<UUID>"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Sauce Labs Access Key, you can get it from the ",(0,s.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"User Settings page"}),".\nFor additional security, we recommend setting this as an environment variable."]}),"\n",(0,s.jsx)(n.h3,{id:"region",children:(0,s.jsx)(n.code,{children:"-r, --region"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_REGION"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<data center>"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Sauce Labs region name, ex.\nus-west or eu-central.\nMore details ",(0,s.jsx)(n.a,{href:"/basics/data-center-endpoints",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"tunnel-name",children:(0,s.jsx)(n.code,{children:"-i, --tunnel-name"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_TUNNEL_NAME"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<name>"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Name of the tunnel or tunnel pool.\nYou can run tests using this tunnel by specifying the tunnelName value in your test capabilities, see ",(0,s.jsx)(n.a,{href:"/dev/test-configuration-options/",children:"here"}),".\nIt can also assign a name to a group of tunnels in the same high availability pool, see ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/high-availability/",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"username",children:(0,s.jsx)(n.code,{children:"-u, --username"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_USERNAME"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<username>"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Sauce Labs username.\nFor additional security, we recommend setting this as an environment variable."}),"\n",(0,s.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:(0,s.jsx)(n.code,{children:"-M, --metadata"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_METADATA"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<key=value>,..."})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Custom metadata key-value pairs.\nThis flag is, primarily, used by Sauce Labs to assign custom properties to the tunnel for reporting purposes."}),"\n",(0,s.jsx)(n.h3,{id:"shared",children:(0,s.jsx)(n.code,{children:"-s, --shared"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_SHARED"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<all>"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Share the tunnel within the same org unit.\nOnly the 'all' option is currently supported.\nSee ",(0,s.jsx)(n.a,{href:"/basics/acct-team-mgmt/sauce-connect-proxy-tunnels/",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"tunnel-pool",children:(0,s.jsx)(n.code,{children:"-t, --tunnel-pool"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_TUNNEL_POOL"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<value>"})]}),"\n",(0,s.jsxs)(n.li,{children:["Default value: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Denotes a tunnel as part of a high availability tunnel pool.\nSee ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/high-availability/",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"tunnel-traffic",children:"Tunnel traffic"}),"\n",(0,s.jsx)(n.h3,{id:"deny-domains",children:(0,s.jsx)(n.code,{children:"-F, --deny-domains"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_DENY_DOMAINS"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"[-]<regexp>,..."})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Deny requests to the matching domains.\nPrefix domains with '-' to exclude requests from being denied.\nSpecial keyword 'all' matches all domains."}),"\n",(0,s.jsx)(n.p,{children:"The following example denies requests to *.example.com and *.google.com."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"--deny-domains .*\\.example\\.com,.*\\.google\\.com\n"})}),"\n",(0,s.jsx)(n.h3,{id:"direct-domains",children:(0,s.jsx)(n.code,{children:"-D, --direct-domains"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_DIRECT_DOMAINS"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"[-]<regexp>,..."})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Forward matching requests to their origin server over the public internet.\nRequests that don't match \"direct domains\" will be forwarded to customer-side over the Sauce Connect Proxy connection.\nYou can specify --direct-domains or --tunnel-domains, but not both.\nPrefix domains with '-' to exclude requests from being forwarded directly.\nNote that direct domains are automatically excluded from being resigned.\nSpecial keyword 'all' matches all domains."}),"\n",(0,s.jsx)(n.p,{children:"The following example sends requests to *.example.com and *.google.com directly.\nIt would tunnel all other domains."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"--direct-domains .*\\.example\\.com,.*\\.google\\.com\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tls-passthrough-domains",children:(0,s.jsx)(n.code,{children:"-B, --tls-passthrough-domains"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_TLS_PASSTHROUGH_DOMAINS"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"[-]<regexp>,..."})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Pass matching requests to their origin server without SSL/TLS re-encryption.\nRequests that don't match will be re-encrypted.\nYou can specify --tls-passthrough-domains or --tls-resign-domains, but not both.\nPrefix domains with '-' to exclude requests from being passed through.\nNote that direct domains will always be passed through.\nSpecial keyword 'all' matches all domains."}),"\n",(0,s.jsx)(n.p,{children:"The following example passes requests to *.example.com and *.google.com through without SSL/TLS re-encryption."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"--tls-passthrough-domains .*\\.example\\.com,.*\\.google\\.com\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tls-resign-domains",children:(0,s.jsx)(n.code,{children:"-b, --tls-resign-domains"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_TLS_RESIGN_DOMAINS"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"[-]<regexp>,..."})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Resign SSL/TLS certificates for matching requests.\nYou can specify --tls-resign-domains or --tls-passthrough-domains, but not both.\nPrefix domains with '-' to exclude requests from being resigned.\nNote that direct domains will never be resigned.\nSpecial keyword 'all' matches all domains."}),"\n",(0,s.jsx)(n.p,{children:"The following example resigns SSL/TLS certificates for all requests to *.myorg.dev, except abc.myorg.dev."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"--tls-resign-domains .*\\.myorg\\.dev,-abc\\.myorg\\.dev\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tunnel-domains",children:(0,s.jsx)(n.code,{children:"-T, --tunnel-domains"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_TUNNEL_DOMAINS"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"[-]<regexp>,..."})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Forward matching requests over the Sauce Connect Proxy connection.\nRequests not matching \"tunnel domains\" will be forwarded to their origin server over the public internet.\nThis is the recommended option for the best performance since it minimizes the expensive tunnelled traffic and uses it only for internal domains that are not publicly available.\nYou can specify --tunnel-domains or --direct-domains, but not both.\nPrefix domains with '-' to exclude requests from being forwarded over the SC Proxy connection.\nSpecial keyword 'all' matches all domains."}),"\n",(0,s.jsx)(n.p,{children:"The following example tunnels all requests to *.myorg.dev, except abc.myorg.com."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"--tunnel-domains .*\\.myorg\\.dev,-abc\\.myorg\\.com\n"})}),"\n",(0,s.jsx)(n.h2,{id:"proxy",children:"Proxy"}),"\n",(0,s.jsx)(n.h3,{id:"auth",children:(0,s.jsx)(n.code,{children:"-a, --auth"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_AUTH"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<username[:password]@host:port,...>"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'Site or upstream proxy basic authentication credentials.\nThe host and port can be set to "*" to match all hosts and ports respectively.\nThe flag can be specified multiple times to add multiple credentials.\nNote that all the hosts are automatically resigned as if they were passed to --tls-resign-domains flag.'}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"--proxy myproxy.org:3128 --proxy-sauce https://external.com:443 --auth user1:pass1@myproxy.org:3128,user2:pass2@external.com:*\n"})}),"\n",(0,s.jsx)(n.h3,{id:"header",children:(0,s.jsx)(n.code,{children:"-H, --header"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_HEADER"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<header>"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Add or remove HTTP request headers."}),"\n",(0,s.jsx)(n.p,{children:"Use the format:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["name",":value"," to add a header"]}),"\n",(0,s.jsx)(n.li,{children:"name; to set the header to empty value"}),"\n",(0,s.jsx)(n.li,{children:"-name to remove the header"}),"\n",(0,s.jsx)(n.li,{children:"-name* to remove headers by prefix"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The header name will be normalized to canonical form.\nThe header value should not contain any newlines or carriage returns.\nThe flag can be specified multiple times.\nThe following example removes the User-Agent header and all headers starting with X-."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'-H "-User-Agent" -H "-X-*"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"pac",children:(0,s.jsx)(n.code,{children:"-p, --pac"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_PAC"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<path or URL>"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Proxy Auto-Configuration file to use for upstream proxy selection."}),"\n",(0,s.jsx)(n.p,{children:"Syntax:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["File: ",(0,s.jsx)(n.code,{children:"/path/to/file.pac"})]}),"\n",(0,s.jsxs)(n.li,{children:["URL: ",(0,s.jsx)(n.code,{children:"http://example.com/proxy.pac"})]}),"\n",(0,s.jsxs)(n.li,{children:["Embed: ",(0,s.jsx)(n.code,{children:"data:base64,<base64 encoded data>"})]}),"\n",(0,s.jsxs)(n.li,{children:["Stdin: ",(0,s.jsx)(n.code,{children:"-"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"proxy",children:(0,s.jsx)(n.code,{children:"-x, --proxy"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_PROXY"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<[protocol://]host:port>"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Upstream proxy for test sessions.\nIt is used for requests received from the Sauce Connect Server only.\nThe supported protocols are: http, https, socks5.\nNo protocol specified will be interpreted as an HTTP proxy.\nThe basic authentication username and password can be specified in the host string, e.g.\nuser",":pass","@host",":port",".\nAlternatively, you can specify the credentials using the -a, --auth flag."]}),"\n",(0,s.jsx)(n.h3,{id:"proxy-localhost",children:(0,s.jsx)(n.code,{children:"--proxy-localhost"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_PROXY_LOCALHOST"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<allow|deny|direct>"})]}),"\n",(0,s.jsxs)(n.li,{children:["Default value: ",(0,s.jsx)(n.code,{children:"deny"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Setting this to allow enables sending requests to localhost through the upstream proxy.\nSetting this to direct sends requests to localhost directly without using the upstream proxy.\nBy default, requests to localhost are denied."}),"\n",(0,s.jsx)(n.h3,{id:"proxy-sauce",children:(0,s.jsx)(n.code,{children:"--proxy-sauce"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_PROXY_SAUCE"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<[protocol://]host:port>"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Establish a tunnel through an upstream proxy.\nProxy for requests to Sauce Labs REST API and Sauce Connect servers only.\nSee the -x, --proxy flag for more details on the format."}),"\n",(0,s.jsx)(n.h2,{id:"dns",children:"DNS"}),"\n",(0,s.jsx)(n.h3,{id:"dns-round-robin",children:(0,s.jsx)(n.code,{children:"--dns-round-robin"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_DNS_ROUND_ROBIN"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<value>"})]}),"\n",(0,s.jsxs)(n.li,{children:["Default value: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If more than one DNS server is specified with the --dns-server flag, passing this flag will enable round-robin selection."}),"\n",(0,s.jsx)(n.h3,{id:"dns-server",children:(0,s.jsx)(n.code,{children:"-n, --dns-server"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_DNS_SERVER"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<ip>[:<port>]"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"DNS server(s) to use instead of system default.\nThere are two execution policies, when more then one server is specified.\nFallback: the first server in a list is used as primary, the rest are used as fallbacks.\nRound robin: the servers are used in a round-robin fashion.\nThe port is optional, if not specified the default port is 53."}),"\n",(0,s.jsx)(n.h3,{id:"dns-timeout",children:(0,s.jsx)(n.code,{children:"--dns-timeout"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_DNS_TIMEOUT"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<duration>"})]}),"\n",(0,s.jsxs)(n.li,{children:["Default value: ",(0,s.jsx)(n.code,{children:"5s"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Timeout for dialing DNS servers.\nOnly used if DNS servers are specified."}),"\n",(0,s.jsx)(n.h2,{id:"http-client",children:"HTTP client"}),"\n",(0,s.jsx)(n.h3,{id:"cacert-file",children:(0,s.jsx)(n.code,{children:"--cacert-file"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_CACERT_FILE"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<path or base64>"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Add your own CA certificates to verify against.\nThe system root certificates will be used in addition to any certificates in this list.\nUse this flag multiple times to specify multiple CA certificate files."}),"\n",(0,s.jsx)(n.p,{children:"Syntax:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["File: ",(0,s.jsx)(n.code,{children:"/path/to/file.pac"})]}),"\n",(0,s.jsxs)(n.li,{children:["Embed: ",(0,s.jsx)(n.code,{children:"data:base64,<base64 encoded data>"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"http-dial-timeout",children:(0,s.jsx)(n.code,{children:"--http-dial-timeout"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_HTTP_DIAL_TIMEOUT"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<duration>"})]}),"\n",(0,s.jsxs)(n.li,{children:["Default value: ",(0,s.jsx)(n.code,{children:"30s"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The maximum amount of time a dial will wait for a connect to complete.\nWith or without a timeout, the operating system may impose its own earlier timeout.\nFor instance, TCP timeouts are often around 3 minutes."}),"\n",(0,s.jsx)(n.h3,{id:"http-idle-conn-timeout",children:(0,s.jsx)(n.code,{children:"--http-idle-conn-timeout"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_HTTP_IDLE_CONN_TIMEOUT"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<duration>"})]}),"\n",(0,s.jsxs)(n.li,{children:["Default value: ",(0,s.jsx)(n.code,{children:"1m30s"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The maximum amount of time an idle (keep-alive) connection will remain idle before closing itself.\nZero means no limit."}),"\n",(0,s.jsx)(n.h3,{id:"http-response-header-timeout",children:(0,s.jsx)(n.code,{children:"--http-response-header-timeout"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_HTTP_RESPONSE_HEADER_TIMEOUT"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<duration>"})]}),"\n",(0,s.jsxs)(n.li,{children:["Default value: ",(0,s.jsx)(n.code,{children:"0s"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The amount of time to wait for a server's response headers after fully writing the request (including its body, if any).This time does not include the time to read the response body.\nZero means no limit."}),"\n",(0,s.jsx)(n.h3,{id:"http-tls-handshake-timeout",children:(0,s.jsx)(n.code,{children:"--http-tls-handshake-timeout"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_HTTP_TLS_HANDSHAKE_TIMEOUT"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<duration>"})]}),"\n",(0,s.jsxs)(n.li,{children:["Default value: ",(0,s.jsx)(n.code,{children:"10s"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The maximum amount of time waiting to wait for a TLS handshake.\nZero means no limit."}),"\n",(0,s.jsx)(n.h2,{id:"api-server",children:"API server"}),"\n",(0,s.jsx)(n.h3,{id:"api-address",children:(0,s.jsx)(n.code,{children:"--api-address"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_API_ADDRESS"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<host:port>"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The server address to listen on.\nIf the host is empty, the server will listen on all available interfaces."}),"\n",(0,s.jsx)(n.h3,{id:"api-basic-auth",children:(0,s.jsx)(n.code,{children:"--api-basic-auth"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_API_BASIC_AUTH"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<username[:password]>"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Basic authentication credentials to protect the server."}),"\n",(0,s.jsx)(n.h3,{id:"api-idle-timeout",children:(0,s.jsx)(n.code,{children:"--api-idle-timeout"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_API_IDLE_TIMEOUT"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<duration>"})]}),"\n",(0,s.jsxs)(n.li,{children:["Default value: ",(0,s.jsx)(n.code,{children:"1h0m0s"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The maximum amount of time to wait for the next request before closing connection."}),"\n",(0,s.jsx)(n.h2,{id:"logging",children:"Logging"}),"\n",(0,s.jsx)(n.h3,{id:"log-file",children:(0,s.jsx)(n.code,{children:"--log-file"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_LOG_FILE"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<path>"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Path to the log file, if empty, logs to stdout."}),"\n",(0,s.jsx)(n.h3,{id:"log-http",children:(0,s.jsx)(n.code,{children:"--log-http"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_LOG_HTTP"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"[api|proxy|control:]<none|short-url|url|headers|body|errors>,..."})]}),"\n",(0,s.jsxs)(n.li,{children:["Default value: ",(0,s.jsx)(n.code,{children:"none"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"HTTP request and response logging mode."}),"\n",(0,s.jsx)(n.p,{children:"Modes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"none: no logging"}),"\n",(0,s.jsx)(n.li,{children:"short-url: logs [scheme://]host[/path] instead of the full URL"}),"\n",(0,s.jsx)(n.li,{children:"url: logs the full URL including query parameters"}),"\n",(0,s.jsx)(n.li,{children:"headers: logs request line and headers"}),"\n",(0,s.jsx)(n.li,{children:"body: logs request line, headers, and body"}),"\n",(0,s.jsx)(n.li,{children:"errors: logs request line and headers if status code is greater than or equal to 500"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Modes for different modules can be specified separated by commas.\nThe following example specifies that the API module logs errors, the proxy module logs headers, and anything else logs full URL."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"--log-http=api:errors,proxy:headers,url\n"})}),"\n",(0,s.jsx)(n.h3,{id:"log-level",children:(0,s.jsx)(n.code,{children:"--log-level"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Environment variable: ",(0,s.jsx)(n.code,{children:"SAUCE_LOG_LEVEL"})]}),"\n",(0,s.jsxs)(n.li,{children:["Value Format: ",(0,s.jsx)(n.code,{children:"<error|info|debug>"})]}),"\n",(0,s.jsxs)(n.li,{children:["Default value: ",(0,s.jsx)(n.code,{children:"info"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Log level."}),"\n",(0,s.jsx)(n.h2,{id:"formatting-domains",children:"Formatting Domains"}),"\n",(0,s.jsx)(n.p,{children:"Here are some guidelines to follow when formatting domain regular expressions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use only the domain name. Do not precede it with ",(0,s.jsx)(n.code,{children:"http:"})," or ",(0,s.jsx)(n.code,{children:"https:"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Example: ",(0,s.jsx)(n.code,{children:"mydomain\\.com"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Make sure your comma-separated list of domains doesn't include any spaces.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Example, ",(0,s.jsx)(n.code,{children:"mydomain\\.com,saucelabs.com,mysite\\.com"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Domains flags can be repeated multiple times","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Example, ",(0,s.jsx)(n.code,{children:"--direct-domains mydomain\\.com,saucelabs\\.com --direct-domains mysite\\.com"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Prefix domain names with ",(0,s.jsx)(n.code,{children:".*"})," to match all its subdomains.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Example: You could refer to ",(0,s.jsx)(n.code,{children:"docs\\.saucelabs\\.com"})," and ",(0,s.jsx)(n.code,{children:"my\\.saucelabs\\.com"})," as ",(0,s.jsx)(n.code,{children:".*saucelabs\\.com"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Escape special characters, such as ",(0,s.jsx)(n.code,{children:"."})," to ensure they are not parsed","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Not escaping dot character doesn't result in error, dot matches every single character except a newline. For example, ",(0,s.jsx)(n.code,{children:"example.com"})," will match ",(0,s.jsx)(n.code,{children:"example.com"})," and also ",(0,s.jsx)(n.code,{children:"examplescom"}),", while ",(0,s.jsx)(n.code,{children:"example\\.com"})," will match ",(0,s.jsx)(n.code,{children:"example.com"})," only."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/installation/",children:"Sauce Connect Proxy Installation"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>o});var s=i(96540);const l={},r=s.createContext(l);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);