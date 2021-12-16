"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[5535],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return y}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(t),y=o,m=d["".concat(u,".").concat(y)]||d[y]||p[y]||i;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6571:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),s=["components"],a={title:"OSS Filesystem",keywords:["hudi","hive","aliyun","oss","spark","presto"],summary:"In this page, we go over how to configure Hudi with OSS filesystem.",last_modified_at:new Date("2020-04-21T22:50:50.000Z"),language:"cn"},u=void 0,l={unversionedId:"oss_hoodie",id:"version-0.9.0/oss_hoodie",isDocsHomePage:!1,title:"OSS Filesystem",description:"\u8fd9\u4e2a\u9875\u9762\u63cf\u8ff0\u4e86\u5982\u4f55\u8ba9\u4f60\u7684Hudi spark\u4efb\u52a1\u4f7f\u7528Aliyun OSS\u5b58\u50a8\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/version-0.9.0/oss_hoodie.md",sourceDirName:".",slug:"/oss_hoodie",permalink:"/cn/docs/0.9.0/oss_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.9.0/oss_hoodie.md",version:"0.9.0",frontMatter:{title:"OSS Filesystem",keywords:["hudi","hive","aliyun","oss","spark","presto"],summary:"In this page, we go over how to configure Hudi with OSS filesystem.",last_modified_at:"2020-04-21T22:50:50.000Z",language:"cn"},sidebar:"version-0.9.0/docs",previous:{title:"GCS Filesystem",permalink:"/cn/docs/0.9.0/gcs_hoodie"},next:{title:"Azure Filesystem",permalink:"/cn/docs/0.9.0/azure_hoodie"}},c=[{value:"Aliyun OSS \u90e8\u7f72",id:"aliyun-oss-\u90e8\u7f72",children:[{value:"Aliyun OSS \u76f8\u5173\u7684\u914d\u7f6e",id:"aliyun-oss-\u76f8\u5173\u7684\u914d\u7f6e",children:[]},{value:"Aliyun OSS Libs",id:"aliyun-oss-libs",children:[]}]}],p={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8fd9\u4e2a\u9875\u9762\u63cf\u8ff0\u4e86\u5982\u4f55\u8ba9\u4f60\u7684Hudi spark\u4efb\u52a1\u4f7f\u7528Aliyun OSS\u5b58\u50a8\u3002"),(0,i.kt)("h2",{id:"aliyun-oss-\u90e8\u7f72"},"Aliyun OSS \u90e8\u7f72"),(0,i.kt)("p",null,"\u4e3a\u4e86\u8ba9Hudi\u4f7f\u7528OSS\uff0c\u9700\u8981\u589e\u52a0\u4e24\u90e8\u5206\u7684\u914d\u7f6e:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e3aHudi\u589e\u52a0Aliyun OSS\u7684\u76f8\u5173\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"\u589e\u52a0Jar\u5305\u7684MVN\u4f9d\u8d56")),(0,i.kt)("h3",{id:"aliyun-oss-\u76f8\u5173\u7684\u914d\u7f6e"},"Aliyun OSS \u76f8\u5173\u7684\u914d\u7f6e"),(0,i.kt)("p",null,"\u65b0\u589e\u4e0b\u9762\u7684\u914d\u7f6e\u5230\u4f60\u7684Hudi\u80fd\u8bbf\u95ee\u7684core-site.xml\u6587\u4ef6\u3002\u4f7f\u7528\u4f60\u7684OSS bucket name\u66ff\u6362\u6389",(0,i.kt)("inlineCode",{parentName:"p"},"fs.defaultFS"),"\uff0c\u4f7f\u7528OSS endpoint\u5730\u5740\u66ff\u6362",(0,i.kt)("inlineCode",{parentName:"p"},"fs.oss.endpoint"),"\uff0c\u4f7f\u7528OSS\u7684key\u548csecret\u5206\u522b\u66ff\u6362",(0,i.kt)("inlineCode",{parentName:"p"},"fs.oss.accessKeyId"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"fs.oss.accessKeySecret"),"\u3002\u8fd9\u6837Hudi\u5c31\u80fd\u8bfb\u5199\u76f8\u5e94\u7684bucket\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"    <property>\n        <name>fs.defaultFS</name>\n        <value>oss://bucketname/</value>\n    </property>\n\n    <property>\n      <name>fs.oss.endpoint</name>\n      <value>oss-endpoint-address</value>\n      <description>Aliyun OSS endpoint to connect to.</description>\n    </property>\n\n    <property>\n      <name>fs.oss.accessKeyId</name>\n      <value>oss_key</value>\n      <description>Aliyun access key ID</description>\n    </property>\n\n    <property>\n      <name>fs.oss.accessKeySecret</name>\n      <value>oss-secret</value>\n      <description>Aliyun access key secret</description>\n    </property>\n\n    <property>\n      <name>fs.oss.impl</name>\n      <value>org.apache.hadoop.fs.aliyun.oss.AliyunOSSFileSystem</value>\n    </property>\n")),(0,i.kt)("h3",{id:"aliyun-oss-libs"},"Aliyun OSS Libs"),(0,i.kt)("p",null,"\u65b0\u589eAliyun hadoop\u7684jar\u5305\u7684MVN\u4f9d\u8d56\u5230pom.xml\u6587\u4ef6\u3002\u7531\u4e8ehadoop-aliyun\u4f9d\u8d56hadoop 2.9.1+\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u4f7f\u7528hadoop 2.9.1\u6216\u66f4\u65b0\u7684\u7248\u672c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.hadoop</groupId>\n    <artifactId>hadoop-aliyun</artifactId>\n    <version>3.2.1</version>\n</dependency>\n<dependency>\n    <groupId>com.aliyun.oss</groupId>\n    <artifactId>aliyun-sdk-oss</artifactId>\n    <version>3.8.1</version>\n</dependency>\n<dependency>\n    <groupId>org.jdom</groupId>\n    <artifactId>jdom</artifactId>\n    <version>1.1</version>\n</dependency>\n")))}d.isMDXComponent=!0}}]);