"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[9360],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var o=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=i,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||n;return a?o.createElement(m,r(r({ref:t},d),{},{components:a})):o.createElement(m,r({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<n;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5829:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var o=a(87462),i=a(63366),n=(a(67294),a(3905)),r=["components"],s={title:"Troubleshooting",keywords:["hudi","troubleshooting"],last_modified_at:new Date("2021-08-18T19:59:57.000Z")},l=void 0,c={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"Troubleshooting",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/next/troubleshooting",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/troubleshooting.md",version:"current",frontMatter:{title:"Troubleshooting",keywords:["hudi","troubleshooting"],last_modified_at:"2021-08-18T19:59:57.000Z"},sidebar:"docs",previous:{title:"Metrics",permalink:"/docs/next/metrics"},next:{title:"Tuning Guide",permalink:"/docs/next/tuning-guide"}},d=[{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Missing records",id:"missing-records",children:[]},{value:"Duplicates",id:"duplicates",children:[]},{value:"Spark failures",id:"spark-ui",children:[]},{value:"Common Issues",id:"common-issues",children:[]}]}],u={toc:d};function p(e){var t=e.components,s=(0,i.Z)(e,r);return(0,n.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Section below generally aids in debugging Hudi failures. Off the bat, the following metadata is added to every record to help triage  issues easily using standard Hadoop SQL engines (Hive/PrestoDB/Spark)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"_hoodie_record_key")," - Treated as a primary key within each DFS partition, basis of all updates/inserts"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"_hoodie_commit_time")," - Last commit that touched this record"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"_hoodie_file_name")," - Actual file name containing the record (super useful to triage duplicates)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"_hoodie_partition_path")," - Path from basePath that identifies the partition containing this record")),(0,n.kt)("p",null,"For performance related issues, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/tuning-guide"},"tuning guide")),(0,n.kt)("h3",{id:"missing-records"},"Missing records"),(0,n.kt)("p",null,"Please check if there were any write errors using the admin commands above, during the window at which the record could have been written.\nIf you do find errors, then the record was not actually written by Hudi, but handed back to the application to decide what to do with it."),(0,n.kt)("h3",{id:"duplicates"},"Duplicates"),(0,n.kt)("p",null,"First of all, please confirm if you do indeed have duplicates ",(0,n.kt)("strong",{parentName:"p"},"AFTER")," ensuring the query is accessing the Hudi table ",(0,n.kt)("a",{parentName:"p",href:"/docs/querying_data"},"properly")," ."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If confirmed, please use the metadata fields above, to identify the physical files & partition files containing the records ."),(0,n.kt)("li",{parentName:"ul"},"If duplicates span files across partitionpath, then this means your application is generating different partitionPaths for same recordKey, Please fix your app"),(0,n.kt)("li",{parentName:"ul"},"if duplicates span multiple files within the same partitionpath, please engage with mailing list. This should not happen. You can use the ",(0,n.kt)("inlineCode",{parentName:"li"},"records deduplicate")," command to fix your data.")),(0,n.kt)("h3",{id:"spark-ui"},"Spark failures"),(0,n.kt)("p",null,"Typical upsert() DAG looks like below. Note that Hudi client also caches intermediate RDDs to intelligently profile workload and size files and spark parallelism.\nAlso Spark UI shows sortByKey twice due to the probe job also being shown, nonetheless its just a single sort."),(0,n.kt)("figure",null,(0,n.kt)("img",{className:"docimage",src:a(77102).Z,alt:"hudi_upsert_dag.png"})),(0,n.kt)("p",null,"At a high level, there are two steps"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Index Lookup to identify files to be changed")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Job 1 : Triggers the input data read, converts to HoodieRecord object and then stops at obtaining a spread of input records to target partition paths"),(0,n.kt)("li",{parentName:"ul"},"Job 2 : Load the set of file names which we need check against"),(0,n.kt)("li",{parentName:"ul"},"Job 3  & 4 : Actual lookup after smart sizing of spark join parallelism, by joining RDDs in 1 & 2 above"),(0,n.kt)("li",{parentName:"ul"},"Job 5 : Have a tagged RDD of recordKeys with locations")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Performing the actual writing of data")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Job 6 : Lazy join of incoming records against recordKey, location to provide a final set of HoodieRecord which now contain the information about which file/partitionpath they are found at (or null if insert). Then also profile the workload again to determine sizing of files"),(0,n.kt)("li",{parentName:"ul"},"Job 7 : Actual writing of data (update + insert + insert turned to updates to maintain file size)")),(0,n.kt)("p",null,"Depending on the exception source (Hudi/Spark), the above knowledge of the DAG can be used to pinpoint the actual issue. The most often encountered failures result from YARN/DFS temporary failures.\nIn the future, a more sophisticated debug/management UI would be added to the project, that can help automate some of this debugging."),(0,n.kt)("h3",{id:"common-issues"},"Common Issues"),(0,n.kt)("p",null,"This section lists down all the common issues that users have faced while using Hudi. ",(0,n.kt)("a",{parentName:"p",href:"https://hudi.apache.org/contribute/get-involved"},"Contributions")," are always welcome to improve this section."),(0,n.kt)("h4",{id:"writing-data"},"Writing Data"),(0,n.kt)("h5",{id:"caused-by-orgapacheparquetioinvalidrecordexception-parquetavro-schema-mismatch-avro-field-col1-not-found"},"Caused by: org.apache.parquet.io.InvalidRecordException: Parquet/Avro schema mismatch: Avro field 'col1' not found"),(0,n.kt)("p",null,"It is recommended that schema should evolve in ",(0,n.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/schema-registry/avro.html"},"backwards compatible way")," while using Hudi. Please refer here for more information on avro schema resolution - ",(0,n.kt)("a",{parentName:"p",href:"https://avro.apache.org/docs/1.8.2/spec.html"},"https://avro.apache.org/docs/1.8.2/spec.html"),". This error generally occurs when the schema has evolved in backwards ",(0,n.kt)("strong",{parentName:"p"},"incompatible")," way by deleting some column 'col1' and we are trying to update some record in parquet file which has alredy been written with previous schema (which had 'col1'). In such cases, parquet tries to find all the present fields in the incoming record and when it finds 'col1' is not present, the mentioned exception is thrown."),(0,n.kt)("p",null,"The fix for this is to try and create uber schema using all the schema versions evolved so far for the concerned event and use this uber schema as the target schema. One of the good approaches can be fetching schema from hive metastore and merging it with the current schema."),(0,n.kt)("p",null,'Sample stacktrace where a field named "toBeDeletedStr" was omitted from new batch of updates : ',(0,n.kt)("a",{parentName:"p",href:"https://gist.github.com/nsivabalan/cafc53fc9a8681923e4e2fa4eb2133fe"},"https://gist.github.com/nsivabalan/cafc53fc9a8681923e4e2fa4eb2133fe")),(0,n.kt)("h5",{id:"caused-by-javalangunsupportedoperationexception-orgapacheparquetavroavroconvertersfieldintegerconverter"},"Caused by: java.lang.UnsupportedOperationException: org.apache.parquet.avro.AvroConverters$FieldIntegerConverter"),(0,n.kt)("p",null,"This error will again occur due to schema evolutions in non-backwards compatible way. Basically there is some incoming update U for a record R which is already written to your Hudi dataset in the concerned parquet file. R contains field F which is having certain data type, let us say long. U has the same field F with updated data type of int type. Such incompatible data type conversions are not supported by Parquet FS."),(0,n.kt)("p",null,"For such errors, please try to ensure only valid data type conversions are happening in your primary data source from where you are trying to ingest."),(0,n.kt)("p",null,"Sample stacktrace when trying to evolve a field from Long type to Integer type with Hudi : ",(0,n.kt)("a",{parentName:"p",href:"https://gist.github.com/nsivabalan/0d81cd60a3e7a0501e6a0cb50bfaacea"},"https://gist.github.com/nsivabalan/0d81cd60a3e7a0501e6a0cb50bfaacea")),(0,n.kt)("h5",{id:"orgapachehudiexceptionschemacompatabilityexception-unable-to-validate-the-rewritten-record-record-against-schema-schema-at-orgapachehudicommonutilhoodieavroutilsrewritehoodieavroutilsjava215"},"org.apache.hudi.exception.SchemaCompatabilityException: Unable to validate the rewritten record ","<","record",">"," against schema ","<","schema",">"," at org.apache.hudi.common.util.HoodieAvroUtils.rewrite(HoodieAvroUtils.java:215)"),(0,n.kt)("p",null,"This can possibly occur if your schema has some non-nullable field whose value is not present or is null. It is recommended to evolve schema in backwards compatible ways. In essence, this means either have every newly added field as nullable or define default values for every new field. In case if you are relying on default value for your field, as of Hudi version 0.5.1, this is not handled."),(0,n.kt)("h5",{id:"hudi-consumes-too-much-space-in-a-temp-folder-while-upsert"},"hudi consumes too much space in a temp folder while upsert"),(0,n.kt)("p",null,'When upsert large input data, hudi will spills part of input data to disk when reach the max memory for merge. if there is enough memory, please increase spark executor\'s memory and  "hoodie.memory.merge.fraction" option, for example'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'option("hoodie.memory.merge.fraction", "0.8")\n')),(0,n.kt)("h4",{id:"ingestion"},"Ingestion"),(0,n.kt)("h5",{id:"caused-by-javaioeofexception-received--1-when-reading-from-channel-socket-has-likely-been-closed-at-kafkautilsutilsreadutilsscala381-at-kafkanetworkboundedbytebufferreceivereadfromboundedbytebufferreceivescala54"},"Caused by: java.io.EOFException: Received -1 when reading from channel, socket has likely been closed. at kafka.utils.Utils$.read(Utils.scala:381) at kafka.network.BoundedByteBufferReceive.readFrom(BoundedByteBufferReceive.scala:54)"),(0,n.kt)("p",null,"This might happen if you are ingesting from Kafka source, your cluster is ssl enabled by default and you are using some version of Hudi older than 0.5.1. Previous versions of Hudi were using spark-streaming-kafka-0-8 library. With the release of 0.5.1 version of Hudi, spark was upgraded to 2.4.4 and spark-streaming-kafka library was upgraded to spark-streaming-kafka-0-10. SSL support was introduced from spark-streaming-kafka-0-10. Please see here for reference."),(0,n.kt)("p",null,"The workaround can be either use Kafka cluster which is not ssl enabled, else upgrade Hudi version to at least 0.5.1 or spark-streaming-kafka library to spark-streaming-kafka-0-10."),(0,n.kt)("h5",{id:"exception-in-thread-main-orgapachekafkacommonkafkaexception-failed-to-construct-kafka-consumer"},'Exception in thread "main" org.apache.kafka.common.KafkaException: Failed to construct kafka consumer'),(0,n.kt)("h5",{id:"caused-by-javalangillegalargumentexception-could-not-find-a-kafkaclient-entry-in-the-jaas-configuration-system-property-javasecurityauthloginconfig-is-not-set"},"Caused by: java.lang.IllegalArgumentException: Could not find a 'KafkaClient' entry in the JAAS configuration. System property 'java.security.auth.login.config' is not set"),(0,n.kt)("p",null,"This might happen when you are trying to ingest from ssl enabled kafka source and your setup is not able to read jars.conf file and its properties. To fix this, you need to pass the required property as part of your spark-submit command something like"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"--files jaas.conf,failed_tables.json --conf 'spark.driver.extraJavaOptions=-Djava.security.auth.login.config=jaas.conf' --conf 'spark.executor.extraJavaOptions=-Djava.security.auth.login.config=jaas.conf'\n")),(0,n.kt)("h5",{id:"comuberhoodieexceptionhoodieexception-created_atpart--created_at-field-not-found-in-record-acceptable-fields-were-col1-col2-col3-id-name-dob-created_at-updated_at"},"com.uber.hoodie.exception.HoodieException: created_at(Part -created_at) field not found in record. Acceptable fields were :","[col1, col2, col3, id, name, dob, created_at, updated_at]"),(0,n.kt)("p",null,"Happens generally when field marked as recordKey or partitionKey is not present in some incoming record. Please cross verify your incoming record once."),(0,n.kt)("h5",{id:"if-it-is-possible-to-use-a-nullable-field-that-contains-null-records-as-a-primary-key-when-creating-hudi-table"},"If it is possible to use a nullable field that contains null records as a primary key when creating hudi table"),(0,n.kt)("p",null,"No, will throw HoodieKeyException"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'Caused by: org.apache.hudi.exception.HoodieKeyException: recordKey value: "null" for field: "name" cannot be null or empty.\n  at org.apache.hudi.keygen.SimpleKeyGenerator.getKey(SimpleKeyGenerator.java:58)\n  at org.apache.hudi.HoodieSparkSqlWriter$$anonfun$1.apply(HoodieSparkSqlWriter.scala:104)\n  at org.apache.hudi.HoodieSparkSqlWriter$$anonfun$1.apply(HoodieSparkSqlWriter.scala:100)\n')),(0,n.kt)("h4",{id:"hive-sync"},"Hive Sync"),(0,n.kt)("h5",{id:"caused-by-javasqlsqlexception-error-while-processing-statement-failed-execution-error-return-code-1-from-orgapachehadoophiveqlexecddltask-unable-to-alter-table-the-following-columns-have-types-incompatible-with-the-existing-columns-in-their-respective-positions--col1col2"},"Caused by: java.sql.SQLException: Error while processing statement: FAILED: Execution Error, return code 1 from org.apache.hadoop.hive.ql.exec.DDLTask. Unable to alter table. The following columns have types incompatible with the existing columns in their respective positions : ",(0,n.kt)("strong",{parentName:"h5"},"col1,"),"col2"),(0,n.kt)("p",null,"This will usually happen when you are trying to add a new column to existing hive table using our HiveSyncTool.java class. Databases usually will not allow to modify a column datatype from a higher order to lower order or cases where the datatypes may clash with the data that is already stored/will be stored in the table. To fix the same, try setting the following property -"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"set hive.metastore.disallow.incompatible.col.type.changes=false;\n")),(0,n.kt)("h5",{id:"comuberhoodiehivehoodiehivesyncexception-could-not-convert-field-type-from-type1-to-type2-for-field-col1"},"com.uber.hoodie.hive.HoodieHiveSyncException: Could not convert field Type from ","<","type1",">"," to ","<","type2",">"," for field col1"),(0,n.kt)("p",null,"This occurs because HiveSyncTool currently supports only few compatible data type conversions. Doing any other incompatible change will throw this exception. Please check the data type evolution for the concerned field and verify if it indeed can be considered as a valid data type conversion as per Hudi code base."),(0,n.kt)("h5",{id:"caused-by-orgapachehadoophiveqlparsesemanticexception-database-does-not-exist-test_db"},"Caused by: org.apache.hadoop.hive.ql.parse.SemanticException: Database does not exist: test_db"),(0,n.kt)("p",null,"This generally occurs if you are trying to do Hive sync for your Hudi dataset and the configured hive_sync database does not exist. Please create the corresponding database on your Hive cluster and try again."),(0,n.kt)("h5",{id:"caused-by-orgapachethrifttapplicationexception-invalid-method-name-get_table_req"},"Caused by: org.apache.thrift.TApplicationException: Invalid method name: 'get_table_req'"),(0,n.kt)("p",null,"This issue is caused by hive version conflicts, hudi built with hive-2.3.x version, so if still want hudi work with older hive version"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"Steps: (build with hive-2.1.0)\n1. git clone git@github.com:apache/incubator-hudi.git\n2. rm hudi-hadoop-mr/src/main/java/org/apache/hudi/hadoop/hive/HoodieCombineHiveInputFormat.java\n3. mvn clean package -DskipTests -DskipITs -Dhive.version=2.1.0\n")),(0,n.kt)("h5",{id:"caused-by--javalangunsupportedoperationexception-table-rename-is-not-supported"},"Caused by : java.lang.UnsupportedOperationException: Table rename is not supported"),(0,n.kt)("p",null,"This issue could occur when syncing to hive. Possible reason is that, hive does not play well if your table name has upper and lower case letter. Try to have all lower case letters for your table name and it should likely get fixed. Related issue: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/issues/2409"},"https://github.com/apache/hudi/issues/2409")),(0,n.kt)("h4",{id:"running-from-ide"},"Running from IDE"),(0,n.kt)("h5",{id:"javalangillegalargumentexception-unsupported-class-file-major-version-56"},'"java.lang.IllegalArgumentException: Unsupported class file major version 56"'),(0,n.kt)("p",null,"Please use java 8, and not java 11"))}p.isMDXComponent=!0},77102:function(e,t,a){t.Z=a.p+"assets/images/hudi_upsert_dag-3b2d81de8560fad7af112e40a2f8c437.png"}}]);