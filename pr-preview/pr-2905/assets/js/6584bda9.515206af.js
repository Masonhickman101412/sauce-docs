"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[42044],{50608:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var r=s(74848),i=s(28453),t=s(86025);const d={id:"generating-fake-test-data",title:"Generating Fake Test Data",sidebar_label:"Generating Fake Test Data",keywords:["api-testing","how-to","fake-test-data"]},o=void 0,l={id:"api-testing/on-prem/how-to/generating-fake-test-data",title:"Generating Fake Test Data",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/generating-fake-test-data.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/generating-fake-test-data",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/on-prem/how-to/generating-fake-test-data",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/generating-fake-test-data.md",tags:[],version:"current",lastUpdatedBy:"Logan Graham",lastUpdatedAt:1712352404e3,frontMatter:{id:"generating-fake-test-data",title:"Generating Fake Test Data",sidebar_label:"Generating Fake Test Data",keywords:["api-testing","how-to","fake-test-data"]},sidebar:"apif",previous:{title:"Generate a Status Page",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/on-prem/how-to/generate-a-status-page"},next:{title:"GitHub \u2013 Use Files as Datasource",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/on-prem/how-to/github-for-datasets"}},a={},c=[{value:"<em>Introduced in API Fortress 17.1.0</em>",id:"introduced-in-api-fortress-1710",level:2},{value:"1. Generate a String",id:"1-generate-a-string",level:3},{value:"2. Generate an Array",id:"2-generate-an-array",level:3},{value:"3. Generate an Object",id:"3-generate-an-object",level:3},{value:"List of Methods",id:"list-of-methods",level:2},{value:"Addresses and Countries",id:"addresses-and-countries",level:3},{value:"People and People identity",id:"people-and-people-identity",level:3},{value:"Internet",id:"internet",level:3},{value:"Credit Card",id:"credit-card",level:3},{value:"Products",id:"products",level:3},{value:"Companies",id:"companies",level:3},{value:"Currency",id:"currency",level:3},{value:"Random Numbers",id:"random-numbers",level:3},{value:"Boolean",id:"boolean",level:3},{value:"Collection/single Data",id:"collectionsingle-data",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Legacy Documentation"}),(0,r.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,r.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,r.jsx)(n.h2,{id:"introduced-in-api-fortress-1710",children:(0,r.jsx)(n.em,{children:"Introduced in API Fortress 17.1.0"})}),"\n",(0,r.jsx)(n.p,{children:"Does your API or test require random full names, valid/invalid ids, or various types of input data? Well now you can generate these random data points directly in API Fortress with the Fake Data Generator."}),"\n",(0,r.jsx)(n.p,{children:"There are a couple of ways you can generate this data:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'You can directly reference the method within your variable, API call, or anywhere in the test where you can type in the following syntax: "${F.zipCode()}"\nFor example:'}),"\n",(0,r.jsx)("img",{src:(0,t.A)("img/api-fortress/2019/07/Screen-Shot-2019-07-19-at-11.33.10-AM.png"),alt:"screenshot"}),"\n",(0,r.jsx)("img",{src:(0,t.A)("img/api-fortress/2019/07/Screen-Shot-2019-07-19-at-11.57.30-AM.png"),alt:"screenshot"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'You can use the "Fake data generation" component to generate this data.'}),"\n",(0,r.jsx)("img",{src:(0,t.A)("img/api-fortress/2019/07/Screen-Shot-2019-07-16-at-3.06.57-PM.png"),alt:"screenshot"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"There are a few different ways this component can be used. You can use it to generate a string, array, or an object. See below for examples."}),"\n",(0,r.jsx)(n.h3,{id:"1-generate-a-string",children:"1. Generate a String"}),"\n",(0,r.jsx)("img",{src:(0,t.A)("img/api-fortress/2019/07/Screen-Shot-2019-07-16-at-3.12.14-PM.png"),alt:"screenshot"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Var"})," - name of variable in which data will be stored (for referencing in the test elsewhere)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Variable mode"})," - String (single piece of data)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"String"})," - Here you will put the name of the type of data you want. See the list below for all options. Some examples are ",(0,r.jsx)(n.em,{children:"firstName"}),", ",(0,r.jsx)(n.em,{children:"lastName"}),", and ",(0,r.jsx)(n.em,{children:"emailAddress"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Count"})," - How many examples of this data type would you like to generate."]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,t.A)("img/api-fortress/2019/07/Screen-Shot-2019-07-19-at-12.04.03-PM.png"),alt:"screenshot"}),"\n",(0,r.jsx)(n.h3,{id:"2-generate-an-array",children:"2. Generate an Array"}),"\n",(0,r.jsx)("img",{src:(0,t.A)("img/api-fortress/2019/07/Screen-Shot-2019-07-19-at-2.27.03-PM.png"),alt:"screenshot"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Var"})," - name of variable in which data will be stored (for referencing in the test elsewhere)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Variable mode"})," - Array (multiple data points)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Array"})," - Here you will put the name of the type of data you want. See the list below for all options. Some examples are ",(0,r.jsx)(n.em,{children:"firstName"}),", ",(0,r.jsx)(n.em,{children:"lastName"}),", and ",(0,r.jsx)(n.em,{children:"emailAddress"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Count"})," - How many arrays of these data types would you like to generate. (Notice that the count field has been left blank, in that case the system will generate 1 iteration of the data)"]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,t.A)("img/api-fortress/2019/07/Screen-Shot-2019-07-19-at-2.27.50-PM.png"),alt:"screenshot"}),"\n",(0,r.jsx)(n.h3,{id:"3-generate-an-object",children:"3. Generate an Object"}),"\n",(0,r.jsx)("img",{src:(0,t.A)("img/api-fortress/2019/07/Screen-Shot-2019-07-19-at-2.35.23-PM.png"),alt:"screenshot"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Var"})," - name of variable in which data will be stored (for referencing in the test elsewhere)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Variable mode"})," - Object (a map of name",":data"," point). This is often used to create JSON objects."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Array"})," - Here you will put the name of the type of data you want. See the list below for all options. Some examples are ",(0,r.jsx)(n.em,{children:"firstName"}),", ",(0,r.jsx)(n.em,{children:"lastName"}),", and ",(0,r.jsx)(n.em,{children:"emailAddress"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Count"})," - How many strings of this data type would you like to generate."]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,t.A)("img/api-fortress/2019/07/Screen-Shot-2019-07-19-at-2.45.35-PM.png"),alt:"screenshot"}),"\n",(0,r.jsx)(n.h2,{id:"list-of-methods",children:"List of Methods"}),"\n",(0,r.jsx)(n.p,{children:'Please note that the method itself is listed below. When using the Fake data component only use the name of the method without the "()"\nThis library based on java faker provides several methods to generate fake data'}),"\n",(0,r.jsx)(n.h3,{id:"addresses-and-countries",children:"Addresses and Countries"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"streetName"}),"(): provides random street name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"streetAddressNumber"}),"(): provides random address number"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"streetAddress"}),"(",(0,r.jsx)(n.code,{children:"<boolean secondary>"}),"): provides random street and address number. If secondary specifided provides apt number."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"secondaryAddress"}),"(): provides random apt number"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"zipCode"}),"(",(0,r.jsx)(n.code,{children:"<String state>"}),"): provides random zip code. If state provided provides proper zip code for the state **(valid only for US states)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"streetSuffix"}),"(): provides random street suffix"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"streetPrefix"}),"(): provides random street prefix"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"citySuffix"}),"(): provides random city suffix"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"cityPrefix"}),"(): provides random city prefix"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"city"}),"(): provides random city Name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"cityName"}),"(): provides random city Name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"state"}),"(): provides random state/province"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"buildingNumber"}),"(): provides random build number"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"fullAddress"}),"(): provides random full adress"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"country"}),"(): provides random country"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"countryCode"}),"(): provides random country code"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"countryCodeSL"}),"(): provides random country code in small letters"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"countryCodeSL3d"}),"(): provides random country code in small letters on 3 digits"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"capital"}),"(): provides random capital city"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"people-and-people-identity",children:"People and People identity"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"fullName"}),"(): provides random full name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"firstName"}),"(): provides random first name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"lastName"}),"(): provides random last name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"profession"}),"(): provides random profession"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"timeZone"}),"(): provides random time zone"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"validID"}),"(): provides random valid ID"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"invalidID"}),"(): provides random invalid ID"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"validSSN"}),"(): provides random valid SSN"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"invalidSSN"}),"(): provides random invalid SSN"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"phone"}),"(): provides random phone number"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"mobile"}),"(): provides random mobile number"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"internet",children:"Internet"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"emailAddress"}),"(): provides random email address"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"domainName"}),"(): provides random domain name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"domainWord"}),"(): provides random word"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"domainSuffix"}),"(): provides random suffix"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"url"}),"(): provides random url"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"password"}),"(",(0,r.jsx)(n.code,{children:"<minimumLength,maximumLength,includeUppercase,includeSpecial,includeDigit>"}),"): provides random password"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"credit-card",children:"Credit Card"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"creditCardNumber"}),"(): provides random credit card number"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"creditCardExpiry"}),"(): provides random credit card expire date"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"creditCardType"}),"(): provides random credit card type"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"products",children:"Products"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"productName"}),"(): provides random product name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"material"}),"(): provides random material"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"price"}),"(): provides random price"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"promotionCode"}),"(): provides random promotion code"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"companies",children:"Companies"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"companyName"}),"(): provides random company name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"suffix"}),"(): provides random company suffix"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"industry"}),"(): provides random industry"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"currency",children:"Currency"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"currency"}),"(): provides random currency"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"currencyCode"}),"(): provides random currency code"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"random-numbers",children:"Random Numbers"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"integer"}),"(",(0,r.jsx)(n.code,{children:"<min,max>"}),"): provides random integer number"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"decimal"}),"(",(0,r.jsx)(n.code,{children:"<min,max,maxdecimals>"}),"): provides random decimal number"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"uuid"}),"(): provides random unique identifier"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"boolean",children:"Boolean"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"bool"}),"(): provides random boolean value"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"collectionsingle-data",children:"Collection/single Data"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"collection"}),"(",(0,r.jsx)(n.code,{children:'<number_of_elements,"method">'}),"):","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'provides a list of elements generated by "method".'}),"\n",(0,r.jsx)(n.li,{children:"The single element is a simple string."}),"\n",(0,r.jsx)(n.li,{children:"The size of the list is equal to the number_of_elements"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"collection"}),"(",(0,r.jsx)(n.code,{children:'<number of elements,["method1","method2",...,"methodN2]>'}),"):","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"provides a list of elements generated by the list of methods provided."}),"\n",(0,r.jsx)(n.li,{children:"The single element is a list."}),"\n",(0,r.jsx)(n.li,{children:"The size of the list is equal to the number_of_elements"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"collection"}),"(",(0,r.jsx)(n.code,{children:"<number of elements,[method1: 'method1',method2:'method2',...,methodN:'methodN'>"}),"):","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"provides a list of elements generated by the list of methods provided."}),"\n",(0,r.jsx)(n.li,{children:"The single element is a map."}),"\n",(0,r.jsx)(n.li,{children:"The size of the list is equal to the number_of_elements"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"single"}),"(",(0,r.jsx)(n.code,{children:'<"method">'}),"):","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'provides an element generated by "method".'}),"\n",(0,r.jsx)(n.li,{children:"The element is a simple string."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"single"}),"(",(0,r.jsx)(n.code,{children:'<["method1","method2",...,"methodN2]>'}),"):","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"provides an element generated by the list of methods provided."}),"\n",(0,r.jsx)(n.li,{children:"The element is a list."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"single"}),"(",(0,r.jsx)(n.code,{children:"<[method1: 'method1',method2:'method2',...,methodN:'methodN'>"}),"):","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"provides an element generated by the list of methods provided."}),"\n",(0,r.jsx)(n.li,{children:"The single element is a map"}),"\n"]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var r=s(96540);const i={},t=r.createContext(i);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);