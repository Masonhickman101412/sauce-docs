"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[85846],{9788:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var n=a(74848),i=a(28453),r=a(86025),s=a(11470),o=a(19365);const l={id:"camera-image-injection",title:"Camera Image Injection",sidebar_label:"Camera Image Injection"},c=void 0,d={id:"mobile-apps/features/camera-image-injection",title:"Camera Image Injection",description:"Real Devices Only",source:"@site/docs/mobile-apps/features/camera-image-injection.md",sourceDirName:"mobile-apps/features",slug:"/mobile-apps/features/camera-image-injection",permalink:"/sauce-docs/pr-preview/pr-2911/mobile-apps/features/camera-image-injection",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/features/camera-image-injection.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"camera-image-injection",title:"Camera Image Injection",sidebar_label:"Camera Image Injection"},sidebar:"docs",previous:{title:"Biometric Authentication",permalink:"/sauce-docs/pr-preview/pr-2911/mobile-apps/features/biometric-authentication"},next:{title:"Audio Capture",permalink:"/sauce-docs/pr-preview/pr-2911/mobile-apps/features/audio-capture"}},u={},h=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Key Specs",id:"key-specs",level:2},{value:"Android System Camera",id:"android-system-camera",level:3},{value:"iOS System Camera",id:"ios-system-camera",level:3},{value:"Example Use Cases",id:"example-use-cases",level:2},{value:"Live Testing",id:"live-testing",level:2},{value:"Testing with QR Codes",id:"testing-with-qr-codes",level:3},{value:"Padding",id:"padding",level:4},{value:"Automated Testing",id:"automated-testing",level:2},{value:"Common Errors",id:"common-errors",level:2},{value:"Error: <code>Image injection failed</code>",id:"error-image-injection-failed",level:4},{value:"Error: <code>Image injection is not enabled for the application</code>",id:"error-image-injection-is-not-enabled-for-the-application",level:4},{value:"Additional Resources",id:"additional-resources",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:(0,n.jsx)("small",{children:(0,n.jsx)("span",{className:"sauceGreen",children:"Real Devices Only"})})}),"\n",(0,n.jsx)(t.p,{children:"Do you have a mobile app with the ability to take images on the device camera, then process or store them within the app (e.g., scanning/depositing a check in a banking app)?"}),"\n",(0,n.jsx)(t.p,{children:"Camera Image Injection, also known as camera mocking, is a Sauce Labs Real Device Cloud (RDC) core feature that simulates taking a picture through your mobile app. It then allows you to test your app's camera-based functionality and deliver the best possible user experience."}),"\n",(0,n.jsx)(t.p,{children:"You employ the built-in device camera in your live and automated testing and perform test cases that require taking images with any of the device cameras. To mimic the system camera behavior during a test, you'll provide the app with an image of your choosing. Your app will access the camera and instead of getting back the picture of the device camera, it'll retrieve the uploaded image."}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"Make sure you have a debuggable AND not obfuscated version of your application uploaded to Mobile App Storage."})}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Sauce Labs account (",(0,n.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,n.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/mobile-apps/app-storage",children:"Upload your app to Sauce Labs"})," prior to testing. The Camera Image Injection functionality points to Sauce Labs storage to get your app information."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"key-specs",children:"Key Specs"}),"\n",(0,n.jsx)(t.p,{children:"Camera Image Injection is available for testing on all Sauce Labs Android and iOS real devices, public and private real device clouds, and front-facing and rear-facing system device cameras. Image uploads must be JPG, JPEG, or PNG format, up to 5MB."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"}}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Supported"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Not Supported"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"**Device Type **"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Android real devices"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"iOS real devices"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Android Emulators"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2715"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"iOS Simulators"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2715"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"App Type"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Flutter(iOS/Android)"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2715"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"React Native(iOS/Android)"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2715"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Cordova (iOS/Android)"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2715"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Framework Type"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Appium"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Espresso (Android)"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2715"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"XCUITest (iOS)"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2715"})]})]})]}),"\n",(0,n.jsx)(t.admonition,{title:"Not Supported",type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Mobile browsers and pre-installed system apps."}),"\n",(0,n.jsx)(t.li,{children:"Cross-platform development frameworks like Flutter, React Native, and Cordova (libraries and frameworks are not supported)."}),"\n",(0,n.jsx)(t.li,{children:"Ephemeral apps (apps with temporary, disappearing messages and photos)."}),"\n"]})}),"\n",(0,n.jsx)(t.h3,{id:"android-system-camera",children:"Android System Camera"}),"\n",(0,n.jsxs)(t.p,{children:["For Android devices, there are multiple ways to capture an image, as described in the ",(0,n.jsx)(t.a,{href:"https://developer.android.com/guide/topics/media/camera",children:"Android Camera API"})," developer documentation. We support the following:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.a,{href:"https://developer.android.com/reference/android/provider/MediaStore#ACTION_IMAGE_CAPTURE",children:[(0,n.jsx)(t.code,{children:"ACTION_IMAGE_CAPTURE"})," Intent"]}),": opens the system camera and notifies the calling app gets when the image is taken."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.android.com/reference/android/hardware/camera2/package-summary",children:"camera2 API"}),": everything is configured and handled from within the app."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.android.com/training/camerax",children:"cameraX"}),": leverages the capabilities of camera2, but uses a simpler, use case-based approach that is lifecycle-aware."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.android.com/reference/android/hardware/Camera",children:"Camera API (deprecated)"}),": partially supported. As with camera2, everything is handled in the app itself. QR Code readers often use ",(0,n.jsx)(t.a,{href:"https://developer.android.com/reference/android/hardware/Camera#setPreviewCallback(android.hardware.Camera.PreviewCallback)",children:(0,n.jsx)(t.code,{children:"Camera#setPreviewCallback"})}),". We pass the injected image to this method, but the rest of this deprecated API is not supported. UI Elements will not likely display the injected image."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"ios-system-camera",children:"iOS System Camera"}),"\n",(0,n.jsx)(t.p,{children:"For iOS devices, the camera can be configured with different outputs. We support the following:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/avfoundation/avcapturephotooutput?language=objc",children:(0,n.jsx)(t.code,{children:"AVCapturePhotoOutput"})}),": for capturing still images. The results are received via the ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate?language=objc",children:(0,n.jsx)(t.code,{children:"AVCapturePhotoCaptureDelegate"})})," and the method ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/2873949-captureoutput?language=objc",children:(0,n.jsx)(t.code,{children:"captureOutput:didFinishProcessingPhoto:error:"})})," The other methods in this delegate are either deprecated or handle live photos, which we don't support."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput?language=objc",children:(0,n.jsx)(t.code,{children:"AVCaptureVideoDataOutput"})}),": for capturing video frames and processing them. The frames are received via ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate?language=objc",children:(0,n.jsx)(t.code,{children:"AVCaptureVideoDataOutputSampleBufferDelegate"})})," and the method ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate/1385775-captureoutput?language=objc",children:(0,n.jsx)(t.code,{children:"captureOutput:didOutputSampleBuffer:fromConnection:"})}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutput?language=objc",children:(0,n.jsx)(t.code,{children:"AVCaptureMetadataOutput"})}),": for reading QR-Codes. The QR Codes are passed to the app via ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutputobjectsdelegate/1389481-captureoutput?language=objc",children:(0,n.jsx)(t.code,{children:"captureOutput:didOutputMetadataObjects:fromConnection:"})}),". We are detecting the ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/avfoundation/avmetadatamachinereadablecodeobject?language=objc",children:(0,n.jsx)(t.code,{children:"AVMetadataMachineReadableCodeObject"})})," and QR Codes are part of that."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example-use-cases",children:"Example Use Cases"}),"\n",(0,n.jsx)(t.p,{children:"Below are common use cases ideal for implementing Camera Image Injection in your tests."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Scanning a check for a mobile banking app deposit"}),": Many mobile banking apps allow customers to deposit checks using their smartphone. The customer takes and uploads an image of their physical paper check, and the image is then submitted to the bank for processing."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Using a QR code to link to an embedded URL"}),": QR codes are often used as a way to bridge print media to digital. Users take a photo with a QR code reader app, the app scans the code and directs them to an embedded URL. For use cases that involve scanning barcodes or QR codes, your own application in testing must do the actual image processing. Camera Image Injection passes your uploaded image directly to your app as if it came from the device camera; it does not do any processing."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Taking a selfie for a user profile photo"}),": This could be taking a selfie or uploading a picture for apps that require a user profile photo. You can use Camera Image Injection to test image formats and sizes."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Taking an image to store or send via mobile app"}),": Whether it\u2019s a social media app or photo sharing, this use case can encompass many different scenarios. In its simplest form, it could be taking pictures from the front or back camera to send and/or archive within the app."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"live-testing",children:"Live Testing"}),"\n",(0,n.jsx)(t.p,{children:"During a live test, you'll be prompted in Sauce Labs to upload a photo that will be fed to your app, rather than using your device camera to take the photo."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["In Sauce Labs, click ",(0,n.jsx)(t.strong,{children:"App Management"}),", hover over the test and then click ",(0,n.jsx)(t.strong,{children:"Settings"}),"."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,r.Ay)("img/mobile-apps/camera-injection-1.png"),alt:"Mobile app settings navigation",width:"650"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["On the ",(0,n.jsx)(t.strong,{children:"Settings"})," page, ensure that ",(0,n.jsx)(t.strong,{children:"Instrumentation"})," and ",(0,n.jsx)(t.strong,{children:"Image Injection"})," is enabled and then return to the ",(0,n.jsx)(t.strong,{children:"App Management"})," page."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,r.Ay)("img/mobile-apps/camera-injection-2.png"),alt:"Mobile app settings navigation",width:"650"}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["On the ",(0,n.jsx)(t.strong,{children:"App Management"})," test page, hover over the test and then click ",(0,n.jsx)(t.strong,{children:"Start Test"}),"."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,r.Ay)("img/mobile-apps/camera-injection-3.png"),alt:"Mobile app settings navigation",width:"650"}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsxs)(t.li,{children:["On the device selection page, hover over a device and then click ",(0,n.jsx)(t.strong,{children:"Start Test"}),"."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,r.Ay)("img/mobile-apps/camera-injection-4.png"),alt:"Mobile app settings navigation",width:"650"}),"\n",(0,n.jsxs)(t.ol,{start:"6",children:["\n",(0,n.jsxs)(t.li,{children:["When you want to capture an image of the test, in the right toolbar, click ",(0,n.jsx)(t.strong,{children:"Tools"})," and then click ",(0,n.jsx)(t.strong,{children:"Camera Upload"}),"."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,r.Ay)("img/mobile-apps/camera-injection-5.png"),alt:"Camera Injection navigation",width:"650"}),"\n",(0,n.jsxs)(t.ol,{start:"7",children:["\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Choose Image"})," and navigate to the image you want to use."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,r.Ay)("img/mobile-apps/camera-injection-6.png"),alt:"Choose a file",width:"450"}),"\n",(0,n.jsx)(t.p,{children:"If the image upload is successful, you will see a thumbnail of the image and a successful upload message."}),"\n",(0,n.jsx)("img",{src:(0,r.Ay)("img/mobile-apps/camera-injection-7.png"),alt:"Camera image upload successful",width:"450"}),"\n",(0,n.jsxs)(t.ol,{start:"8",children:["\n",(0,n.jsx)(t.li,{children:"Activate the camera inside of your app. The device will show your uploaded image in the app as if the image was taken by the device camera. The image will continue to be available, should you go back to the camera during your test session, or you can upload another image and capture it with the camera."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"testing-with-qr-codes",children:"Testing with QR Codes"}),"\n",(0,n.jsx)(t.p,{children:"You can use the Camera Image Injection feature to upload QR codes for testing."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["In the live test window, in the right toolbar, click ",(0,n.jsx)(t.strong,{children:"Tools"})," and then click ",(0,n.jsx)(t.strong,{children:"Camera Upload"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.strong,{children:"Choose Image"})," and navigate to the QR code file."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,r.Ay)("img/mobile-apps/camera-injection-6.png"),alt:"Choose a file",width:"450"}),"\n",(0,n.jsx)(t.p,{children:"If the image upload is successful, you will see a thumbnail of the image and a successful upload message."}),"\n",(0,n.jsx)("img",{src:(0,r.Ay)("img/mobile-apps/camera-injection-7.png"),alt:"Camera image upload successful",width:"450"}),"\n",(0,n.jsx)(t.h4,{id:"padding",children:"Padding"}),"\n",(0,n.jsx)(t.p,{children:"Sometimes when you upload a QR code image your app will not recognize it because it doesn't fit in the target area defined by your application. This is because image injection strictly overrides what is seen by the camera and your image will be scaled linearly to fit the camera image size as best it can. But this might not always be the same as what your application is expecting."}),"\n",(0,n.jsx)("img",{src:(0,r.Ay)("img/live-testing/camera-injection-target-area.png"),alt:"QR code target area example",width:"300"}),"\n",(0,n.jsx)("img",{src:(0,r.Ay)("img/live-testing/camera-injection-qr-too-big.png"),alt:"QR code target area example",width:"300"}),"\n",(0,n.jsx)(t.p,{children:'If your application only registers a code being read when it is within this target area, you will need to take this behavior into account when testing your application. Adding extra space (or "padding") around your image before uploading it for image injection will ensure that the QR code is within the target area that your application defines.'}),"\n",(0,n.jsx)(t.h2,{id:"automated-testing",children:"Automated Testing"}),"\n",(0,n.jsx)(t.p,{children:"During an automated test, you'll pass an image to the image injection endpoint. Image injection intercepts the camera input and replaces the camera output with the image file via the camera APIs. When the app requests an image from the device's camera, we inject your uploaded image into the response (the app doesn't know the difference)."}),"\n",(0,n.jsx)(t.p,{children:"In your test script, you'll need to input the desired capabilities specific to Camera Image Injection (see below code snippets). The code will execute your image upload and opening of the device camera."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["First, add the camera instrumentation desired capability command, ",(0,n.jsx)(t.code,{children:"sauceLabsImageInjectionEnabled"}),", to your test script. This capability enables image injection functionality."]}),"\n"]}),"\n",(0,n.jsxs)(s.A,{defaultValue:"Webdriver.io example",values:[{label:"Webdriver.io example",value:"Webdriver.io example"},{label:"Java example",value:"Java example"}],children:[(0,n.jsx)(o.A,{value:"Webdriver.io example",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"exports.config = {\n//...\ncapabilities: [\n{\ndeviceName: 'Samsung Galaxy S10',\nplatformName: 'Android',\nplatformVersion: '10',\nautomationName: 'UiAutomator2',\n// Enable image-injection on RDC\nsauceLabsImageInjectionEnabled: true\n}\n]\n//...\n}\n"})})}),(0,n.jsx)(o.A,{value:"Java example",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'var desiredCapabilities = new DesiredCapabilities();\ndesiredCapabilities.setCapability("deviceName", "Samsung Galaxy S10");\ndesiredCapabilities.setCapability("platformVersionName", "10");\n...\n// Enable image-injection on RDC\ndesiredCapabilities.setCapability("sauceLabsImageInjectionEnabled", true);\n'})})})]}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"In this step, you're adding the image injection method to your test script by providing a file path to your image. You can put the below code snippet into your test script in one or more places. Then, when you execute your test, the code snippets will call the endpoint and pass the image to the app for further processing or for other use."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"To change the image, you'll need to send a custom command with a different image. Note that your image file path must be converted to base64 encoding."}),"\n",(0,n.jsxs)(s.A,{defaultValue:"Webdriver.io example",values:[{label:"Webdriver.io example",value:"Webdriver.io example"},{label:"Java example",value:"Java example"}],children:[(0,n.jsx)(o.A,{value:"Webdriver.io example",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const { readFileSync } = require('fs')\nconst { join } = require('path')\n\n// Read the file from your project and transform it to a base64 string\nconst qrCodeImage = readFileSync(\njoin(process.cwd(), 'assets/qr-code.png'),\n'base64'\n)\n\n// Provide the transformed image to the device\ndriver.execute(`sauce:inject-image=${qrCodeImage}`)\n"})})}),(0,n.jsx)(o.A,{value:"Java example",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'import java.util.Base64;\nimport static org.apache.commons.io.IOUtils.toByteArray;\n\n// Read the file from the classpath and transform it to a base64 string\nFileInputStream in = new FileInputStream("/Users/enriquegonzalez/Desktop/Gorilla.png");\nqrCodeImage = Base64.getEncoder().encodeToString(\n        toByteArray(in)\n);\n// Provide the transformed image to the device\n((JavascriptExecutor)driver).executeScript("sauce:inject-image=" + qrCodeImage);\n'})})})]}),"\n",(0,n.jsx)(t.h2,{id:"common-errors",children:"Common Errors"}),"\n",(0,n.jsx)(t.p,{children:"Here are some common errors you may see in the course of testing with camera image injection and how to resolve them."}),"\n",(0,n.jsxs)(t.h4,{id:"error-image-injection-failed",children:["Error: ",(0,n.jsx)(t.code,{children:"Image injection failed"})]}),"\n",(0,n.jsx)(t.p,{children:"This error is displayed when you attempt to inject your image before the app fully loads during your initial test session startup. You must wait until your app has fully loaded prior to injecting your image."}),"\n",(0,n.jsxs)(t.h4,{id:"error-image-injection-is-not-enabled-for-the-application",children:["Error: ",(0,n.jsx)(t.code,{children:"Image injection is not enabled for the application"})]}),"\n",(0,n.jsx)(t.p,{children:"This error is displayed due to one or more of these reasons:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Enable Image Injection"})," checkbox is not checked; this needs to be checked."]}),"\n",(0,n.jsxs)(t.li,{children:["For Android tests, the debuggable flag (",(0,n.jsx)(t.code,{children:'android:debuggable="true"'}),") is missing from your app's manifest file."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/saucelabs-training/demo-js/tree/master/webdriverio/appium-app/examples/image-injection",children:"Sauce Labs Image Injection code examples (GitHub)"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.android.com/guide/topics/media/camera",children:"Android Camera API | Google Developer Documentation"}),"."]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var n=a(34164);const i={tabItem:"tabItem_Ymn6"};var r=a(74848);function s(e){let{children:t,hidden:a,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,s),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>A});var n=a(96540),i=a(34164),r=a(23104),s=a(56347),o=a(205),l=a(57485),c=a(31682),d=a(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}(a);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const i=(0,s.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:i}=e,r=h(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,u]=m({queryString:a,groupId:i}),[g,x]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,d.Dv)(a);return[i,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:i}),j=(()=>{const e=c??g;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=a(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(74848);function b(e){let{className:t,block:a,selectedValue:n,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const t=e.currentTarget,a=l.indexOf(t),i=o[a].value;i!==n&&(c(t),s(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,i.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=g(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...t,...e}),(0,f.jsx)(v,{...t,...e})]})}function A(e){const t=(0,x.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var n=a(96540);const i={},r=n.createContext(i);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);