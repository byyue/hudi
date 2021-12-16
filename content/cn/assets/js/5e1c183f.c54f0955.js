"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[737],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return p}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=c(r),p=n,u=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return r?a.createElement(u,o(o({ref:t},m),{},{components:r})):a.createElement(u,o({ref:t},m))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3578:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return h}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],s={title:"Marker Mechanism",toc:!0},l=void 0,c={unversionedId:"markers",id:"markers",isDocsHomePage:!1,title:"Marker Mechanism",description:"Purpose of Markers",source:"@site/docs/markers.md",sourceDirName:".",slug:"/markers",permalink:"/cn/docs/next/markers",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/markers.md",version:"current",frontMatter:{title:"Marker Mechanism",toc:!0},sidebar:"docs",previous:{title:"Transformers",permalink:"/cn/docs/next/transforms"},next:{title:"File Sizing",permalink:"/cn/docs/next/file_sizing"}},m=[{value:"Purpose of Markers",id:"purpose-of-markers",children:[]},{value:"Marker structure",id:"marker-structure",children:[]},{value:"Marker Writing Options",id:"marker-writing-options",children:[{value:"Direct Write Markers",id:"direct-write-markers",children:[]},{value:"Timeline Server Markers (Default)",id:"timeline-server-markers-default",children:[]}]},{value:"Marker Configuration Parameters",id:"marker-configuration-parameters",children:[]}],d={toc:m};function h(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"purpose-of-markers"},"Purpose of Markers"),(0,i.kt)("p",null,"A write operation can fail before it completes, leaving partial or corrupt data files on storage. Markers are used to track\nand cleanup any partial or failed write operations. As a write operation begins, a marker is created indicating\nthat a file write is in progress. When the write commit succeeds, the marker is deleted. If a write operation fails part\nway through, a marker is left behind which indicates that the file is incomplete. Two important operations that use markers include: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Removing duplicate/partial data files"),": ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In Spark, the Hudi write client delegates the data file writing to multiple executors. One executor can fail the task,\nleaving partial data files written, and Spark retries the task in this case until it succeeds. "),(0,i.kt)("li",{parentName:"ul"},"When speculative execution is enabled, there can also be multiple successful attempts at writing out the same data\ninto different files, only one of which is finally handed to the Spark driver process for committing.\nThe markers help efficiently identify the partial data files written, which contain duplicate data compared to the data\nfiles written by the successful trial later, and these duplicate data files are cleaned up when the commit is finalized."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rolling back failed commits"),": If a write operation fails, the next write client will roll back the failed commit before proceeding with the new write. The rollback is done with the help of markers to identify the data files written as part of the failed commit.")),(0,i.kt)("p",null,"If we did not have markers to track the per-commit data files, we would have to list all files in the file system,\ncorrelate that with the files seen in timeline and then delete the ones that belong to partial write failures.\nAs you could imagine, this would be very costly in a very large installation of a datalake."),(0,i.kt)("h2",{id:"marker-structure"},"Marker structure"),(0,i.kt)("p",null,"Each marker entry is composed of three parts, the data file name,\nthe marker extension (",(0,i.kt)("inlineCode",{parentName:"p"},".marker"),"), and the I/O operation created the file (",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE")," - inserts, ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE")," - updates/deletes,\nor ",(0,i.kt)("inlineCode",{parentName:"p"},"APPEND")," - either). For example, the marker ",(0,i.kt)("inlineCode",{parentName:"p"},"91245ce3-bb82-4f9f-969e-343364159174-0_140-579-0_20210820173605.parquet.marker.CREATE")," indicates\nthat the corresponding data file is ",(0,i.kt)("inlineCode",{parentName:"p"},"91245ce3-bb82-4f9f-969e-343364159174-0_140-579-0_20210820173605.parquet")," and the I/O type is ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE"),"."),(0,i.kt)("h2",{id:"marker-writing-options"},"Marker Writing Options"),(0,i.kt)("p",null,"There are two ways to write Markers: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Directly writing markers to storage, which is a legacy configuration."),(0,i.kt)("li",{parentName:"ul"},"Writing markers to the Timeline Server which batches marker requests before writing them to storage (Default). This option improves write performance of large files as described below.")),(0,i.kt)("h3",{id:"direct-write-markers"},"Direct Write Markers"),(0,i.kt)("p",null,"Directly writing to storage creates a new marker file corresponding to each data file, with the marker filename as described above.\nThe marker file does not have any content, i.e., empty. Each marker file is written to storage in the same directory\nhierarchy, i.e., commit instant and partition path, under a temporary folder ",(0,i.kt)("inlineCode",{parentName:"p"},".hoodie/.temp")," under the base path of the Hudi table.\nFor example, the figure below shows one example of the marker files created and the corresponding data files when writing\ndata to the Hudi table.  When getting or deleting all the marker file paths, the mechanism first lists all the paths\nunder the temporary folder, ",(0,i.kt)("inlineCode",{parentName:"p"},".hoodie/.temp/<commit_instant>"),", and then does the operation."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"An example of marker and data files in direct marker file mechanism",src:r(62830).Z})),(0,i.kt)("p",null,"While it's much efficient over scanning the entire table for uncommitted data files, as the number of data files to write\nincreases, so does the number of marker files to create. For large writes which need to write significant number of data\nfiles, e.g., 10K or more, this can create performance bottlenecks for cloud storage such as AWS S3. In AWS S3, each\nfile create and delete call triggers an HTTP request and there is ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html"},"rate-limiting"),"\non how many requests can be processed per second per prefix in a bucket. When the number of data files to write concurrently\nand the number of marker files is huge, the marker file operations could take up non-trivial time during the write operation,\nsometimes on the order of a few minutes or more. "),(0,i.kt)("h3",{id:"timeline-server-markers-default"},"Timeline Server Markers (Default)"),(0,i.kt)("p",null,"To address the performance bottleneck due to rate-limiting of AWS S3 explained above, we introduce a new marker mechanism\nleveraging the timeline server, which optimizes the marker-related latency for storage with non-trivial file I/O latency.\nIn the diagram below you can see the timeline-server-based marker mechanism delegates the marker creation and other marker-related\noperations from individual executors to the timeline server for centralized processing. The timeline server batches the\nmarker creation requests and writes the markers to a bounded set of files in the file system at configurable batch intervals (default 50ms).\nIn this way, the number of actual file operations and latency related to markers can be significantly reduced even with\na huge number of data files, leading to improved performance of large writes."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Timeline-server-based marker mechanism",src:r(29241).Z})),(0,i.kt)("p",null,"Each marker creation request is handled asynchronously in the Javalin timeline server and queued before processing.\nFor every batch interval, the timeline server pulls the pending marker creation requests from the queue and\nwrites all markers to the next file in a round robin fashion. Inside the timeline server, such batch processing is\nmulti-threaded, designed and implemented to guarantee consistency and correctness. Both the batch interval and the batch\nconcurrency can be configured through the write options."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Batched processing of marker creation requests",src:r(10787).Z})),(0,i.kt)("p",null,"Note that the worker thread always checks whether the marker has already been created by comparing the marker name from\nthe request with the memory copy of all markers maintained at the timeline server. The underlying files storing the\nmarkers are only read upon the first marker request (lazy loading). The responses of requests are only sent back once the\nnew markers are flushed to the files, so that in the case of the timeline server failure, the timeline server can recover\nthe already created markers. These ensure consistency between storage and the in-memory copy, and improve the performance\nof processing marker requests."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," Timeline based markers are not yet supported for HDFS, however, users may barely notice performance challenges\nwith direct markers because the file system metadata is efficiently cached in memory and doesn't face the same rate-limiting as S3."),(0,i.kt)("h2",{id:"marker-configuration-parameters"},"Marker Configuration Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hoodie.write.markers.type")),(0,i.kt)("td",{parentName:"tr",align:null},"timeline_server_based"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Marker type to use.  Two modes are supported: (1) ",(0,i.kt)("inlineCode",{parentName:"td"},"direct"),": individual marker file corresponding to each data file is directly created by the executor; (2) ",(0,i.kt)("inlineCode",{parentName:"td"},"timeline_server_based"),": marker operations are all handled at the timeline service which serves as a proxy.  New marker entries are batch processed and stored in a limited number of underlying files for efficiency.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hoodie.markers.timeline_server_based.batch.num_threads")),(0,i.kt)("td",{parentName:"tr",align:null},"20"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Number of threads to use for batch processing marker creation requests at the timeline server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hoodie.markers.timeline_server_based.batch.interval_ms")),(0,i.kt)("td",{parentName:"tr",align:null},"50"),(0,i.kt)("td",{parentName:"tr",align:"center"},"The batch interval in milliseconds for marker creation batch processing.")))))}h.isMDXComponent=!0},10787:function(e,t,r){t.Z=r.p+"assets/images/batched-marker-creation-e8455c544f3b11ceed810b663df59f7f.png"},62830:function(e,t,r){t.Z=r.p+"assets/images/direct-marker-file-mechanism-b97b82f80430598f1d6a9b96521bb1a0.png"},29241:function(e,t,r){t.Z=r.p+"assets/images/timeline-server-based-marker-mechanism-fd71c7ce7f08827069ef9973900f8757.png"}}]);