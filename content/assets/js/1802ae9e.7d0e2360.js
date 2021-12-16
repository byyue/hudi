"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[7605],{3905:function(e,t,i){i.d(t,{Zo:function(){return l},kt:function(){return f}});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(i),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||r;return i?n.createElement(m,o(o({ref:t},l),{},{components:i})):n.createElement(m,o({ref:t},l))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},10677:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=i(87462),a=i(63366),r=(i(67294),i(3905)),o=["components"],s={title:"JuiceFS",keywords:["hudi","hive","juicefs","jfs","spark","flink"],summary:"In this page, we go over how to configure Hudi with JuiceFS file system.",last_modified_at:new Date("2021-10-12T02:50:00.000Z")},u=void 0,c={unversionedId:"jfs_hoodie",id:"version-0.10.0/jfs_hoodie",isDocsHomePage:!1,title:"JuiceFS",description:"In this page, we explain how to use Hudi with JuiceFS.",source:"@site/versioned_docs/version-0.10.0/jfs_hoodie.md",sourceDirName:".",slug:"/jfs_hoodie",permalink:"/docs/jfs_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.0/jfs_hoodie.md",version:"0.10.0",frontMatter:{title:"JuiceFS",keywords:["hudi","hive","juicefs","jfs","spark","flink"],summary:"In this page, we go over how to configure Hudi with JuiceFS file system.",last_modified_at:"2021-10-12T02:50:00.000Z"},sidebar:"version-0.10.0/docs",previous:{title:"Baidu Cloud",permalink:"/docs/bos_hoodie"},next:{title:"Use Cases",permalink:"/docs/use_cases"}},l=[{value:"JuiceFS configs",id:"juicefs-configs",children:[{value:"Creating JuiceFS file system",id:"creating-juicefs-file-system",children:[]},{value:"Adding JuiceFS configuration for Hudi",id:"adding-juicefs-configuration-for-hudi",children:[]},{value:"Adding JuiceFS Hadoop Java SDK",id:"adding-juicefs-hadoop-java-sdk",children:[]}]}],d={toc:l};function p(e){var t=e.components,i=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this page, we explain how to use Hudi with JuiceFS."),(0,r.kt)("h2",{id:"juicefs-configs"},"JuiceFS configs"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/juicedata/juicefs"},"JuiceFS")," is a high-performance distributed file system. Any data stored into JuiceFS, the data itself will be persisted in object storage (e.g. Amazon S3), and the metadata corresponding to the data can be persisted in various database engines such as Redis, MySQL, and TiKV according to the needs of the scene."),(0,r.kt)("p",null,"There are three configurations required for Hudi-JuiceFS compatibility:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Creating JuiceFS file system"),(0,r.kt)("li",{parentName:"ol"},"Adding JuiceFS configuration for Hudi"),(0,r.kt)("li",{parentName:"ol"},"Adding required JAR to ",(0,r.kt)("inlineCode",{parentName:"li"},"classpath"))),(0,r.kt)("h3",{id:"creating-juicefs-file-system"},"Creating JuiceFS file system"),(0,r.kt)("p",null,"JuiceFS supports multiple ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/juicedata/juicefs/blob/main/docs/en/databases_for_metadata.md"},"metadata engines")," such as Redis, MySQL, SQLite, and TiKV. And supports almost all ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/juicedata/juicefs/blob/main/docs/en/how_to_setup_object_storage.md#supported-object-storage"},"object storage")," as data storage, e.g. Amazon S3, Google Cloud Storage, Azure Blob Storage."),(0,r.kt)("p",null,'The following example uses Redis as "Metadata Engine" and Amazon S3 as "Data Storage" in Linux environment.'),(0,r.kt)("h4",{id:"download-juicefs-client"},"Download JuiceFS client"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ JFS_LATEST_TAG=$(curl -s https://api.github.com/repos/juicedata/juicefs/releases/latest | grep 'tag_name' | cut -d '\"' -f 4 | tr -d 'v')\n$ wget \"https://github.com/juicedata/juicefs/releases/download/v${JFS_LATEST_TAG}/juicefs-${JFS_LATEST_TAG}-linux-amd64.tar.gz\"\n")),(0,r.kt)("h4",{id:"install-juicefs-client"},"Install JuiceFS client"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ mkdir juice && tar -zxvf "juicefs-${JFS_LATEST_TAG}-linux-amd64.tar.gz" -C juice\n$ sudo install juice/juicefs /usr/local/bin\n')),(0,r.kt)("h4",{id:"format-a-juicefs-file-system"},"Format a JuiceFS file system"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ juicefs format \\\n    --storage s3 \\\n    --bucket https://<bucket>.s3.<region>.amazonaws.com \\\n    --access-key <your-access-key-id> \\\n    --secret-key <your-access-key-secret> \\\n    redis://:<password>@<redis-host>:6379/1 \\\n    myjfs\n")),(0,r.kt)("p",null,"For more information, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/juicedata/juicefs/blob/main/docs/en/quick_start_guide.md"},'"JuiceFS Quick Start Guide"'),"."),(0,r.kt)("h3",{id:"adding-juicefs-configuration-for-hudi"},"Adding JuiceFS configuration for Hudi"),(0,r.kt)("p",null,"Add the required configurations in your ",(0,r.kt)("inlineCode",{parentName:"p"},"core-site.xml")," from where Hudi can fetch them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<property>\n    <name>fs.defaultFS</name>\n    <value>jfs://myjfs</value>\n    <description>Optional, you can also specify full path "jfs://myjfs/path-to-dir" with location to use JuiceFS</description>\n</property>\n<property>\n    <name>fs.jfs.impl</name>\n    <value>io.juicefs.JuiceFileSystem</value>\n</property>\n<property>\n    <name>fs.AbstractFileSystem.jfs.impl</name>\n    <value>io.juicefs.JuiceFS</value>\n</property>\n<property>\n    <name>juicefs.meta</name>\n    <value>redis://:<password>@<redis-host>:6379/1</value>\n</property>\n<property>\n    <name>juicefs.cache-dir</name>\n    <value>/path-to-your-disk</value>\n</property>\n<property>\n    <name>juicefs.cache-size</name>\n    <value>1024</value>\n</property>\n<property>\n    <name>juicefs.access-log</name>\n    <value>/tmp/juicefs.access.log</value>\n</property>\n')),(0,r.kt)("p",null,"You can visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/juicedata/juicefs/blob/main/docs/en/hadoop_java_sdk.md#client-configurations"},"here")," for more configuration information."),(0,r.kt)("h3",{id:"adding-juicefs-hadoop-java-sdk"},"Adding JuiceFS Hadoop Java SDK"),(0,r.kt)("p",null,"You can download latest JuiceFS Hadoop Java SDK from ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/juicedata/juicefs/releases/latest"},"here")," (download the file called like ",(0,r.kt)("inlineCode",{parentName:"p"},"juicefs-hadoop-X.Y.Z-linux-amd64.jar"),"), and place it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"classpath"),". You can also ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/juicedata/juicefs/blob/main/docs/en/hadoop_java_sdk.md#client-compilation"},"compile")," it by yourself."),(0,r.kt)("p",null,"For example, if you use Hudi in Spark, please put the JAR in ",(0,r.kt)("inlineCode",{parentName:"p"},"$SPARK_HOME/jars"),"."))}p.isMDXComponent=!0}}]);