"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[3],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),d=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=d(a),c=r,u=k["".concat(m,".").concat(c)]||k[c]||s[c]||i;return a?n.createElement(u,l(l({ref:t},p),{},{components:a})):n.createElement(u,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},30303:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return p},default:function(){return k}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={title:"Flink Setup",toc:!0},m=void 0,d={unversionedId:"flink_configuration",id:"version-0.10.0/flink_configuration",isDocsHomePage:!1,title:"Flink Setup",description:"Global Configurations",source:"@site/versioned_docs/version-0.10.0/flink_configuration.md",sourceDirName:".",slug:"/flink_configuration",permalink:"/docs/flink_configuration",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.0/flink_configuration.md",version:"0.10.0",frontMatter:{title:"Flink Setup",toc:!0},sidebar:"version-0.10.0/docs",previous:{title:"Querying Data",permalink:"/docs/querying_data"},next:{title:"Syncing to Metastore",permalink:"/docs/syncing_metastore"}},p=[{value:"Global Configurations",id:"global-configurations",children:[{value:"Parallelism",id:"parallelism",children:[]},{value:"Memory",id:"memory",children:[]},{value:"Checkpoint",id:"checkpoint",children:[]}]},{value:"Table Options",id:"table-options",children:[{value:"Memory",id:"memory-1",children:[]},{value:"Parallelism",id:"parallelism-1",children:[]},{value:"Compaction",id:"compaction",children:[]}]},{value:"Memory Optimization",id:"memory-optimization",children:[{value:"MOR",id:"mor",children:[]},{value:"COW",id:"cow",children:[]}]},{value:"Write Rate Limit",id:"write-rate-limit",children:[{value:"Options",id:"options",children:[]}]}],s={toc:p};function k(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"global-configurations"},"Global Configurations"),(0,i.kt)("p",null,"When using Flink, you can set some global configurations in ",(0,i.kt)("inlineCode",{parentName:"p"},"$FLINK_HOME/conf/flink-conf.yaml")),(0,i.kt)("h3",{id:"parallelism"},"Parallelism"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"taskmanager.numberOfTaskSlots")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Integer")),(0,i.kt)("td",{parentName:"tr",align:null},"The number of parallel operator or user function instances that a single TaskManager can run. We recommend setting this value > 4, and the actual value needs to be set according to the amount of data")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"parallelism.default")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Integer")),(0,i.kt)("td",{parentName:"tr",align:null},"The default parallelism used when no parallelism is specified anywhere (default: 1). For example, If the value of ",(0,i.kt)("a",{parentName:"td",href:"#parallelism-1"},(0,i.kt)("inlineCode",{parentName:"a"},"write.bucket_assign.tasks"))," is not set, this value will be used")))),(0,i.kt)("h3",{id:"memory"},"Memory"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"jobmanager.memory.process.size")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(none)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MemorySize")),(0,i.kt)("td",{parentName:"tr",align:null},"Total Process Memory size for the JobManager. This includes all the memory that a JobManager JVM process consumes, consisting of Total Flink Memory, JVM Metaspace, and JVM Overhead")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"taskmanager.memory.task.heap.size")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(none)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MemorySize")),(0,i.kt)("td",{parentName:"tr",align:null},"Task Heap Memory size for TaskExecutors. This is the size of JVM heap memory reserved for write cache")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"taskmanager.memory.managed.size")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(none)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MemorySize")),(0,i.kt)("td",{parentName:"tr",align:null},"Managed Memory size for TaskExecutors. This is the size of off-heap memory managed by the memory manager, reserved for sorting and RocksDB state backend. If you choose RocksDB as the state backend, you need to set this memory")))),(0,i.kt)("h3",{id:"checkpoint"},"Checkpoint"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"execution.checkpointing.interval")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(none)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Duration")),(0,i.kt)("td",{parentName:"tr",align:null},"Setting this value as ",(0,i.kt)("inlineCode",{parentName:"td"},"execution.checkpointing.interval = 150000ms"),", 150000ms = 2.5min. Configuring this parameter is equivalent to enabling the checkpoint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"state.backend")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(none)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"The state backend to be used to store state. We recommend setting store state as ",(0,i.kt)("inlineCode",{parentName:"td"},"rocksdb")," : ",(0,i.kt)("inlineCode",{parentName:"td"},"state.backend: rocksdb"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"state.backend.rocksdb.localdir")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(none)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"The local directory (on the TaskManager) where RocksDB puts its files")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"state.checkpoints.dir")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(none)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"The default directory used for storing the data files and meta data of checkpoints in a Flink supported filesystem. The storage path must be accessible from all participating processes/nodes(i.e. all TaskManagers and JobManagers), like hdfs and oss path")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"state.backend.incremental")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"Option whether the state backend should create incremental checkpoints, if possible. For an incremental checkpoint, only a diff from the previous checkpoint is stored, rather than the complete checkpoint state. If store state is setting as ",(0,i.kt)("inlineCode",{parentName:"td"},"rocksdb"),", recommending to turn on")))),(0,i.kt)("h2",{id:"table-options"},"Table Options"),(0,i.kt)("p",null,"Flink SQL jobs can be configured through options in the ",(0,i.kt)("inlineCode",{parentName:"p"},"WITH")," clause.\nThe actual datasource level configs are listed below."),(0,i.kt)("h3",{id:"memory-1"},"Memory"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When optimizing memory, we need to pay attention to the memory configuration\nand the number of taskManagers, parallelism of write tasks (write.tasks : 4) first. After confirm each write task to be\nallocated with enough memory, we can try to set these memory options."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"write.task.max.size")),(0,i.kt)("td",{parentName:"tr",align:null},"Maximum memory in MB for a write task, when the threshold hits, it flushes the max size data bucket to avoid OOM. Default ",(0,i.kt)("inlineCode",{parentName:"td"},"1024MB")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1024D")),(0,i.kt)("td",{parentName:"tr",align:null},"The memory reserved for write buffer is ",(0,i.kt)("inlineCode",{parentName:"td"},"write.task.max.size")," - ",(0,i.kt)("inlineCode",{parentName:"td"},"compaction.max_memory"),". When total buffer of write tasks reach the threshold, the largest buffer in the memory will be flushed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"write.batch.size")),(0,i.kt)("td",{parentName:"tr",align:null},"In order to improve the efficiency of writing, Flink write task will cache data in buffer according to the write bucket until the memory reaches the threshold. When reached threshold, the data buffer would be flushed out. Default ",(0,i.kt)("inlineCode",{parentName:"td"},"64MB")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"64D")),(0,i.kt)("td",{parentName:"tr",align:null},"Recommend to use the default settings")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"write.log_block.size")),(0,i.kt)("td",{parentName:"tr",align:null},"The log writer of Hudi will not flush the data immediately after receiving data. The writer flush data to the disk in the unit of ",(0,i.kt)("inlineCode",{parentName:"td"},"LogBlock"),". Before ",(0,i.kt)("inlineCode",{parentName:"td"},"LogBlock")," reached threshold, records will be buffered in the writer in form of serialized bytes. Default ",(0,i.kt)("inlineCode",{parentName:"td"},"128MB")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"128")),(0,i.kt)("td",{parentName:"tr",align:null},"Recommend to use the default settings")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"write.merge.max_memory")),(0,i.kt)("td",{parentName:"tr",align:null},"If write type is ",(0,i.kt)("inlineCode",{parentName:"td"},"COPY_ON_WRITE"),", Hudi will merge the incremental data and base file data. The incremental data will be cached and spilled to disk. this threshold controls the max heap size that can be used. Default ",(0,i.kt)("inlineCode",{parentName:"td"},"100MB")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"100")),(0,i.kt)("td",{parentName:"tr",align:null},"Recommend to use the default settings")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"compaction.max_memory")),(0,i.kt)("td",{parentName:"tr",align:null},"Same as ",(0,i.kt)("inlineCode",{parentName:"td"},"write.merge.max_memory"),", but occurs during compaction. Default ",(0,i.kt)("inlineCode",{parentName:"td"},"100MB")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"100")),(0,i.kt)("td",{parentName:"tr",align:null},"If it is online compaction, it can be turned up when resources are sufficient, such as setting as ",(0,i.kt)("inlineCode",{parentName:"td"},"1024MB"))))),(0,i.kt)("h3",{id:"parallelism-1"},"Parallelism"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"write.tasks")),(0,i.kt)("td",{parentName:"tr",align:null},"The parallelism of writer tasks. Each write task writes 1 to ",(0,i.kt)("inlineCode",{parentName:"td"},"N")," buckets in sequence. Default ",(0,i.kt)("inlineCode",{parentName:"td"},"4")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"4")),(0,i.kt)("td",{parentName:"tr",align:null},"Increases the parallelism has no effect on the number of small files")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"write.bucket_assign.tasks")),(0,i.kt)("td",{parentName:"tr",align:null},"The parallelism of bucket assigner operators. No default value, using Flink ",(0,i.kt)("inlineCode",{parentName:"td"},"parallelism.default")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#parallelism"},(0,i.kt)("inlineCode",{parentName:"a"},"parallelism.default"))),(0,i.kt)("td",{parentName:"tr",align:null},"Increases the parallelism also increases the number of buckets, thus the number of small files (small buckets)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"write.index_boostrap.tasks")),(0,i.kt)("td",{parentName:"tr",align:null},"The parallelism of index bootstrap. Increasing parallelism can speed up the efficiency of the bootstrap stage. The bootstrap stage will block checkpointing. Therefore, it is necessary to set more checkpoint failure tolerance times. Default using Flink ",(0,i.kt)("inlineCode",{parentName:"td"},"parallelism.default")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#parallelism"},(0,i.kt)("inlineCode",{parentName:"a"},"parallelism.default"))),(0,i.kt)("td",{parentName:"tr",align:null},"It only take effect when ",(0,i.kt)("inlineCode",{parentName:"td"},"index.bootsrap.enabled")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"read.tasks")),(0,i.kt)("td",{parentName:"tr",align:null},"The parallelism of read operators (batch and stream). Default ",(0,i.kt)("inlineCode",{parentName:"td"},"4")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"4")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"compaction.tasks")),(0,i.kt)("td",{parentName:"tr",align:null},"The parallelism of online compaction. Default ",(0,i.kt)("inlineCode",{parentName:"td"},"4")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"4")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Online compaction")," will occupy the resources of the write task. It is recommended to use ",(0,i.kt)("a",{parentName:"td",href:"#offline-compaction"},(0,i.kt)("inlineCode",{parentName:"a"},"offline compaction")))))),(0,i.kt)("h3",{id:"compaction"},"Compaction"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"These are options only for ",(0,i.kt)("inlineCode",{parentName:"p"},"online compaction"),"."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Turn off online compaction by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"compaction.async.enabled")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", but we still recommend turning on ",(0,i.kt)("inlineCode",{parentName:"p"},"compaction.schedule.enable")," for the writing job. You can then execute the compaction plan by ",(0,i.kt)("a",{parentName:"p",href:"#offline-compaction"},(0,i.kt)("inlineCode",{parentName:"a"},"offline compaction")),"."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"compaction.schedule.enabled")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to generate compaction plan periodically"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Recommend to turn it on, even if ",(0,i.kt)("inlineCode",{parentName:"td"},"compaction.async.enabled")," = ",(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"compaction.async.enabled")),(0,i.kt)("td",{parentName:"tr",align:null},"Async Compaction, enabled by default for MOR"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Turn off ",(0,i.kt)("inlineCode",{parentName:"td"},"online compaction")," by turning off this option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"compaction.trigger.strategy")),(0,i.kt)("td",{parentName:"tr",align:null},"Strategy to trigger compaction"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"num_commits")),(0,i.kt)("td",{parentName:"tr",align:null},"Options are ",(0,i.kt)("inlineCode",{parentName:"td"},"num_commits"),": trigger compaction when reach N delta commits; ",(0,i.kt)("inlineCode",{parentName:"td"},"time_elapsed"),": trigger compaction when time elapsed > N seconds since last compaction; ",(0,i.kt)("inlineCode",{parentName:"td"},"num_and_time"),": trigger compaction when both ",(0,i.kt)("inlineCode",{parentName:"td"},"NUM_COMMITS")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"TIME_ELAPSED")," are satisfied; ",(0,i.kt)("inlineCode",{parentName:"td"},"num_or_time"),": trigger compaction when ",(0,i.kt)("inlineCode",{parentName:"td"},"NUM_COMMITS")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"TIME_ELAPSED")," is satisfied.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"compaction.delta_commits")),(0,i.kt)("td",{parentName:"tr",align:null},"Max delta commits needed to trigger compaction, default ",(0,i.kt)("inlineCode",{parentName:"td"},"5")," commits"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5")),(0,i.kt)("td",{parentName:"tr",align:null},"--")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"compaction.delta_seconds")),(0,i.kt)("td",{parentName:"tr",align:null},"Max delta seconds time needed to trigger compaction, default ",(0,i.kt)("inlineCode",{parentName:"td"},"1")," hour"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"3600")),(0,i.kt)("td",{parentName:"tr",align:null},"--")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"compaction.max_memory")),(0,i.kt)("td",{parentName:"tr",align:null},"Max memory in MB for compaction spillable map, default ",(0,i.kt)("inlineCode",{parentName:"td"},"100MB")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"100")),(0,i.kt)("td",{parentName:"tr",align:null},"If your have sufficient resources, recommend to adjust to ",(0,i.kt)("inlineCode",{parentName:"td"},"1024MB"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"compaction.target_io")),(0,i.kt)("td",{parentName:"tr",align:null},"Target IO per compaction (both read and write), default ",(0,i.kt)("inlineCode",{parentName:"td"},"500GB")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"512000")),(0,i.kt)("td",{parentName:"tr",align:null},"--")))),(0,i.kt)("h2",{id:"memory-optimization"},"Memory Optimization"),(0,i.kt)("h3",{id:"mor"},"MOR"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#checkpoint"},"Setting Flink state backend to ",(0,i.kt)("inlineCode",{parentName:"a"},"rocksdb"))," (the default ",(0,i.kt)("inlineCode",{parentName:"li"},"in memory")," state backend is very memory intensive)."),(0,i.kt)("li",{parentName:"ol"},"If there is enough memory, ",(0,i.kt)("inlineCode",{parentName:"li"},"compaction.max_memory")," can be set larger (",(0,i.kt)("inlineCode",{parentName:"li"},"100MB")," by default, and can be adjust to ",(0,i.kt)("inlineCode",{parentName:"li"},"1024MB"),")."),(0,i.kt)("li",{parentName:"ol"},"Pay attention to the memory allocated to each write task by taskManager to ensure that each write task can be allocated to the\ndesired memory size ",(0,i.kt)("inlineCode",{parentName:"li"},"write.task.max.size"),". For example, taskManager has ",(0,i.kt)("inlineCode",{parentName:"li"},"4GB")," of memory running two streamWriteFunction, so each write task\ncan be allocated with ",(0,i.kt)("inlineCode",{parentName:"li"},"2GB")," memory. Please reserve some buffers because the network buffer and other types of tasks on taskManager (such as bucketAssignFunction) will also consume memory."),(0,i.kt)("li",{parentName:"ol"},"Pay attention to the memory changes of compaction. ",(0,i.kt)("inlineCode",{parentName:"li"},"compaction.max_memory")," controls the maximum memory that each task can be used when compaction tasks read\nlogs. ",(0,i.kt)("inlineCode",{parentName:"li"},"compaction.tasks")," controls the parallelism of compaction tasks.")),(0,i.kt)("h3",{id:"cow"},"COW"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#checkpoint"},"Setting Flink state backend to ",(0,i.kt)("inlineCode",{parentName:"a"},"rocksdb"))," (the default ",(0,i.kt)("inlineCode",{parentName:"li"},"in memory")," state backend is very memory intensive)."),(0,i.kt)("li",{parentName:"ol"},"Increase both ",(0,i.kt)("inlineCode",{parentName:"li"},"write.task.max.size")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"write.merge.max_memory")," (",(0,i.kt)("inlineCode",{parentName:"li"},"1024MB")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"100MB")," by default, adjust to ",(0,i.kt)("inlineCode",{parentName:"li"},"2014MB")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"1024MB"),")."),(0,i.kt)("li",{parentName:"ol"},"Pay attention to the memory allocated to each write task by taskManager to ensure that each write task can be allocated to the\ndesired memory size ",(0,i.kt)("inlineCode",{parentName:"li"},"write.task.max.size"),". For example, taskManager has ",(0,i.kt)("inlineCode",{parentName:"li"},"4GB")," of memory running two write tasks, so each write task\ncan be allocated with ",(0,i.kt)("inlineCode",{parentName:"li"},"2GB")," memory. Please reserve some buffers because the network buffer and other types of tasks on taskManager (such as ",(0,i.kt)("inlineCode",{parentName:"li"},"BucketAssignFunction"),") will also consume memory.")),(0,i.kt)("h2",{id:"write-rate-limit"},"Write Rate Limit"),(0,i.kt)("p",null,"In the existing data synchronization, ",(0,i.kt)("inlineCode",{parentName:"p"},"snapshot data")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"incremental data")," are send to kafka first, and then streaming write\nto Hudi by Flink. Because the direct consumption of ",(0,i.kt)("inlineCode",{parentName:"p"},"snapshot data")," will lead to problems such as high throughput and serious\ndisorder (writing partition randomly), which will lead to write performance degradation and throughput glitches. At this time,\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"write.rate.limit")," option can be turned on to ensure smooth writing."),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"write.rate.limit")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:null},"Turn off by default")))))}k.isMDXComponent=!0}}]);