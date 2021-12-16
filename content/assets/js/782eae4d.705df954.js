"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[3674],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(a),p=r,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},53977:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={title:"Metadata Table",keywords:["hudi","metadata","S3 file listings"]},s=void 0,d={unversionedId:"metadata",id:"metadata",isDocsHomePage:!1,title:"Metadata Table",description:"Motivation for a Metadata Table",source:"@site/docs/metadata.md",sourceDirName:".",slug:"/metadata",permalink:"/docs/next/metadata",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/metadata.md",version:"current",frontMatter:{title:"Metadata Table",keywords:["hudi","metadata","S3 file listings"]},sidebar:"docs",previous:{title:"File Layouts",permalink:"/docs/next/file_layouts"},next:{title:"Write Operations",permalink:"/docs/next/write_operations"}},c=[{value:"Motivation for a Metadata Table",id:"motivation-for-a-metadata-table",children:[{value:"Some numbers from a study:",id:"some-numbers-from-a-study",children:[]}]},{value:"Enable Hudi Metadata Table",id:"enable-hudi-metadata-table",children:[]},{value:"Deployment considerations",id:"deployment-considerations",children:[]}],u={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"motivation-for-a-metadata-table"},"Motivation for a Metadata Table"),(0,i.kt)("p",null,'The Apache Hudi Metadata Table can significantly improve read/write performance of your queries. The main purpose of the\nMetadata Table is to eliminate the requirement for the "list files" operation.'),(0,i.kt)("p",null,"When reading and writing data, file listing operations are performed to get the current view of the file system.\nWhen data sets are large, listing all the files may be a performance bottleneck, but more importantly in the case of cloud storage systems\nlike AWS S3, the large number of file listing requests sometimes causes throttling due to certain request limits.\nThe Metadata Table will instead proactively maintain the list of files and remove the need for recursive file listing operations"),(0,i.kt)("h3",{id:"some-numbers-from-a-study"},"Some numbers from a study:"),(0,i.kt)("p",null,"Running a TPCDS benchmark the p50 list latencies for a single folder scales ~linearly with the amount of files/objects:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number of files/objects"),(0,i.kt)("th",{parentName:"tr",align:null},"100"),(0,i.kt)("th",{parentName:"tr",align:null},"1K"),(0,i.kt)("th",{parentName:"tr",align:null},"10K"),(0,i.kt)("th",{parentName:"tr",align:null},"100K"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"P50 list latency"),(0,i.kt)("td",{parentName:"tr",align:null},"50ms"),(0,i.kt)("td",{parentName:"tr",align:null},"131ms"),(0,i.kt)("td",{parentName:"tr",align:null},"1062ms"),(0,i.kt)("td",{parentName:"tr",align:null},"9932ms")))),(0,i.kt)("p",null,"Whereas listings from the Metadata Table will not scale linearly with file/object count and instead take about 100-500ms per read even for very large tables.\nEven better, the timeline server caches portions of the metadata (currently only for writers), and provides ~10ms performance for listings."),(0,i.kt)("h2",{id:"enable-hudi-metadata-table"},"Enable Hudi Metadata Table"),(0,i.kt)("p",null,"The Hudi Metadata Table is not enabled by default. If you wish to turn it on you need to enable the following configuration:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/configurations#hoodiemetadataenable"},(0,i.kt)("inlineCode",{parentName:"a"},"hoodie.metadata.enable"))),(0,i.kt)("h2",{id:"deployment-considerations"},"Deployment considerations"),(0,i.kt)("p",null,"Once you turn on the Hudi Metadata Table, ensure that all write and read operations enable the configuration above to\nensure the Metadata Table stays up to date."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If your current deployment model is single writer along with async table services (such as cleaning, clustering, compaction)\nconfigured, then it is a must to have ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/concurrency_control#enabling-multi-writing"},"lock providers configured"),"\nbefore turning on the metadata table."))))}m.isMDXComponent=!0}}]);