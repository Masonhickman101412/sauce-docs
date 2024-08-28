"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[89613],{48115:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(74848),o=t(28453),r=(t(86025),t(11470)),i=t(19365);const s={id:"map-locations",title:"Using Map Locations",sidebar_label:"Using Map Locations"},l=void 0,c={id:"testfairy/sdk/map-locations",title:"Using Map Locations",description:"The TestFairy SDK does not require location permissions and does track location out of the box.",source:"@site/docs/testfairy/sdk/map-locations.md",sourceDirName:"testfairy/sdk",slug:"/testfairy/sdk/map-locations",permalink:"/sauce-docs/pr-preview/pr-2913/testfairy/sdk/map-locations",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/map-locations.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724864962e3,frontMatter:{id:"map-locations",title:"Using Map Locations",sidebar_label:"Using Map Locations"},sidebar:"docs",previous:{title:"TestFairy Crash Handler",permalink:"/sauce-docs/pr-preview/pr-2913/testfairy/sdk/tf-crash-handler"},next:{title:"Getting Started",permalink:"/sauce-docs/pr-preview/pr-2913/mobile-apps"}},u={},d=[];function p(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"The TestFairy SDK does not require location permissions and does track location out of the box."}),"\n",(0,a.jsxs)(n.p,{children:["To send location information to TestFairy, add location permissions to your app and use the code below to call ",(0,a.jsx)(n.code,{children:"TestFairy.updateLocation"}),". The location will then be presented on a map as part of the session page."]}),"\n",(0,a.jsxs)(r.A,{groupId:"sdk",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS Objective C",value:"ios"}],children:[(0,a.jsxs)(i.A,{value:"android",children:["To record locations, you must first add the correct permissions to your application. Depending on your application's needs, you may want to add one or both of the following permissions to your ",(0,a.jsx)(n.code,{children:"AndroidManifest.xml"}),".",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />\n<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />\n'})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"TestFairy.updateLocation(android.location.Location location)\n"})}),"Example",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"import android.content.Context;\nimport android.location.Criteria;\nimport android.location.Location;\nimport android.location.LocationListener;\nimport android.location.LocationManager;\nimport android.support.v7.app.AppCompatActivity;\nimport android.os.Bundle;\n\nimport com.testfairy.TestFairy;\n\npublic class MainActivity extends AppCompatActivity implements LocationListener {\n\n    private LocationManager locationManager;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n\n        // Get the location manager\n        locationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);\n\n        Criteria criteria = new Criteria();\n        String provider = locationManager.getBestProvider(criteria, false);\n        Location location = locationManager.getLastKnownLocation(provider);\n\n        // Initialize the location fields\n        if (location != null) {\n            onLocationChanged(location);\n        }\n    }\n\n    @Override\n    public void onLocationChanged(Location location) {\n        TestFairy.updateLocation(location);\n    }\n}\n"})})]}),(0,a.jsxs)(i.A,{value:"ios",children:["To record locations, call the static instance method ",(0,a.jsx)(n.code,{children:"updateLocation"})," in the ",(0,a.jsx)(n.code,{children:"TestFairy"})," class, passing in a collection of ",(0,a.jsx)(n.code,{children:"CLLocations"}),".",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"NSArray<CLLocation *> *locations = ...\n[TestFairy updateLocation:locations];\n"})}),"Example",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'#import "TestFairy.h"\n\n@interface NewRunViewController: UIViewController <CLLocationManagerDelegate>\n- (void)viewDidLoad\n{\n    [super viewDidLoad];\n\n    self.locationManager = [[CLLocationManager alloc] init];\n    self.locationManager.delegate = self;\n    self.locationManager.distanceFilter = kCLDistanceFilterNone;\n    self.locationManager.desiredAccuracy = kCLLocationAccuracyBest;\n    [self.locationManager startUpdatingLocation];\n}\n\n...\n\n-(void)locationManager:(CLLocationManager *)manager didUpdateLocations:(NSArray<CLLocation *> *)locations {\n    [TestFairy updateLocation:locations];\n}\n\n@end\n'})})]})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var a=t(34164);const o={tabItem:"tabItem_Ymn6"};var r=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>C});var a=t(96540),o=t(34164),r=t(23104),i=t(56347),s=t(205),l=t(57485),c=t(31682),u=t(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=h({queryString:t,groupId:o}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,u.Dv)(t);return[o,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),g=(()=>{const e=c??f;return m({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function y(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),o=s[t].value;o!==a&&(c(n),i(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,o.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function L(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function x(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...n,...e}),(0,v.jsx)(L,{...n,...e})]})}function C(e){const n=(0,b.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(96540);const o={},r=a.createContext(o);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);