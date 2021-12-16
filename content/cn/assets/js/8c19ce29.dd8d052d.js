"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[275],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(b,l(l({ref:t},d),{},{components:a})):n.createElement(b,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},26396:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),r=a(79443);var i=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(86010),o="tabItem_vU9c",s="tabItemActive_cw6a";var c=37,d=39;var p=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,p=e.values,u=e.groupId,m=e.className,b=i(),h=b.tabGroupChoices,g=b.setTabGroupChoices,k=(0,n.useState)(r),f=k[0],y=k[1],N=n.Children.toArray(e.children),v=[];if(null!=u){var T=h[u];null!=T&&T!==f&&p.some((function(e){return e.value===T}))&&y(T)}var w=function(e){var t=e.currentTarget,a=v.indexOf(t),n=p[a].value;y(n),null!=u&&(g(u,n),setTimeout((function(){var e,a,n,r,i,l,o,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,c=l.innerWidth,a>=0&&i<=c&&r<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,a;switch(e.keyCode){case d:var n=v.indexOf(e.target)+1;a=v[n]||v[0];break;case c:var r=v.indexOf(e.target)-1;a=v[r]||v[v.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":f===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:x,onFocus:w,onClick:w},a)}))),t?(0,n.cloneElement)(N.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},39924:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=(a(26396),a(58215),["components"]),o={title:"SQL DDL",summary:"In this page, we introduce how to create tables with Hudi.",toc:!0,last_modified_at:null},s=void 0,c={unversionedId:"table_management",id:"table_management",isDocsHomePage:!1,title:"SQL DDL",description:"The following are SparkSQL table management actions available:",source:"@site/docs/table_management.md",sourceDirName:".",slug:"/table_management",permalink:"/cn/docs/next/table_management",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/table_management.md",version:"current",frontMatter:{title:"SQL DDL",summary:"In this page, we introduce how to create tables with Hudi.",toc:!0,last_modified_at:null},sidebar:"docs",previous:{title:"Concurrency Control",permalink:"/cn/docs/next/concurrency_control"},next:{title:"\u5199\u5165 Hudi \u6570\u636e\u96c6",permalink:"/cn/docs/next/writing_data"}},d=[{value:"Spark Create Table",id:"spark-create-table",children:[{value:"Options",id:"options",children:[]},{value:"Table Type",id:"table-type",children:[]},{value:"Primary Key",id:"primary-key",children:[]},{value:"PreCombineField",id:"precombinefield",children:[]},{value:"Partitioned Table",id:"partitioned-table",children:[]},{value:"Create Table for an External Hudi Table",id:"create-table-for-an-external-hudi-table",children:[]},{value:"Create Table AS SELECT",id:"create-table-as-select",children:[]},{value:"Set hoodie config options",id:"set-hoodie-config-options",children:[]}]},{value:"Spark Alter Table",id:"spark-alter-table",children:[{value:"Syntax",id:"syntax",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Alter hoodie config options",id:"alter-hoodie-config-options",children:[]},{value:"Use set command",id:"use-set-command",children:[]}]},{value:"Flink",id:"flink",children:[{value:"Create Table",id:"create-table",children:[]},{value:"Alter Table",id:"alter-table",children:[]}]}],p={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following are SparkSQL table management actions available:"),(0,i.kt)("h2",{id:"spark-create-table"},"Spark Create Table"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Only SparkSQL needs an explicit Create Table command. No Create Table command is required in Spark when using Scala or Python. The first batch of a ",(0,i.kt)("a",{parentName:"p",href:"/docs/writing_data"},"Write")," to a table will create the table if it does not exist."))),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("p",null,"Users can set table options while creating a hudi table."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"(Optional/Required) : Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"primaryKey"),(0,i.kt)("td",{parentName:"tr",align:null},"The primary key names of the table, multiple fields separated by commas."),(0,i.kt)("td",{parentName:"tr",align:null},"(Optional) : ",(0,i.kt)("inlineCode",{parentName:"td"},"id"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"The type of table to create (",(0,i.kt)("a",{parentName:"td",href:"/docs/table_types"},"read more"),"). ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"cow")," = COPY-ON-WRITE, ",(0,i.kt)("inlineCode",{parentName:"td"},"mor")," = MERGE-ON-READ."),(0,i.kt)("td",{parentName:"tr",align:null},"(Optional) : ",(0,i.kt)("inlineCode",{parentName:"td"},"cow"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"preCombineField"),(0,i.kt)("td",{parentName:"tr",align:null},"The Pre-Combine field of the table."),(0,i.kt)("td",{parentName:"tr",align:null},"(Optional) : ",(0,i.kt)("inlineCode",{parentName:"td"},"ts"))))),(0,i.kt)("p",null,'To set any custom hudi config(like index type, max parquet size, etc), see the  "Set hudi config section" .'),(0,i.kt)("h3",{id:"table-type"},"Table Type"),(0,i.kt)("p",null,"Here is an example of creating a COW table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- create a non-primary key table\ncreate table if not exists hudi_table2(\n  id int, \n  name string, \n  price double\n) using hudi\noptions (\n  type = 'cow'\n);\n")),(0,i.kt)("h3",{id:"primary-key"},"Primary Key"),(0,i.kt)("p",null,"Here is an example of creating COW table with a primary key 'id'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- create a managed cow table\ncreate table if not exists hudi_table0 (\n  id int, \n  name string, \n  price double\n) using hudi\noptions (\n  type = 'cow',\n  primaryKey = 'id'\n);\n")),(0,i.kt)("h3",{id:"precombinefield"},"PreCombineField"),(0,i.kt)("p",null,"Here is an example of creating an MOR external table. The ",(0,i.kt)("strong",{parentName:"p"},"preCombineField")," option\nis used to specify the preCombine field for merge."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- create an external mor table\ncreate table if not exists hudi_table1 (\n  id int, \n  name string, \n  price double,\n  ts bigint\n) using hudi\noptions (\n  type = 'mor',\n  primaryKey = 'id,name',\n  preCombineField = 'ts' \n);\n")),(0,i.kt)("h3",{id:"partitioned-table"},"Partitioned Table"),(0,i.kt)("p",null,"Here is an example of creating a COW partitioned table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table if not exists hudi_table_p0 (\nid bigint,\nname string,\ndt string\uff0c\nhh string  \n) using hudi\noptions (\n  type = 'cow',\n  primaryKey = 'id',\n  preCombineField = 'ts'\n ) \npartitioned by (dt, hh);\n")),(0,i.kt)("h3",{id:"create-table-for-an-external-hudi-table"},"Create Table for an External Hudi Table"),(0,i.kt)("p",null,"You can create an External table using the ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," statement. If an external location is not specified it is considered a managed table. You can read more about external vs managed tables ",(0,i.kt)("a",{parentName:"p",href:"https://sparkbyexamples.com/apache-hive/difference-between-hive-internal-tables-and-external-tables/"},"here"),".\nAn external table is useful if you need to read/write to/from a pre-existing hudi table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"}," create table h_p1 using hudi \n options (\n    primaryKey = 'id',\n    preCombineField = 'ts'\n )\n partitioned by (dt)\n location '/path/to/hudi';\n")),(0,i.kt)("h3",{id:"create-table-as-select"},"Create Table AS SELECT"),(0,i.kt)("p",null,"Hudi supports CTAS(Create table as select) on spark sql. ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Note:")," For better performance to load data to hudi table, CTAS uses ",(0,i.kt)("strong",{parentName:"p"},"bulk insert")," as the write operation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example CTAS command to create a non-partitioned COW table.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table h3 using hudi\nas\nselect 1 as id, 'a1' as name, 10 as price;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example CTAS command to create a partitioned, primary key COW table.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table h2 using hudi\noptions (type = 'cow', primaryKey = 'id')\npartitioned by (dt)\nas\nselect 1 as id, 'a1' as name, 10 as price, 1000 as dt;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example CTAS command to load data from another table.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"# create managed parquet table \ncreate table parquet_mngd using parquet location 'file:///tmp/parquet_dataset/*.parquet';\n\n# CTAS by loading data into hudi table\ncreate table hudi_tbl using hudi location 'file:/tmp/hudi/hudi_tbl/' options ( \n  type = 'cow', \n  primaryKey = 'id', \n  preCombineField = 'ts' \n ) \npartitioned by (datestr) as select * from parquet_mngd;\n")),(0,i.kt)("h3",{id:"set-hoodie-config-options"},"Set hoodie config options"),(0,i.kt)("p",null,"You can also set the config with table options when creating table which will work for\nthe table scope only and override the config set by the SET command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table if not exists h3(\n  id bigint, \n  name string, \n  price double\n) using hudi\noptions (\n  primaryKey = 'id',\n  type = 'mor',\n  ${hoodie.config.key1} = '${hoodie.config.value2}',\n  ${hoodie.config.key2} = '${hoodie.config.value2}',\n  ....\n);\n\ne.g.\ncreate table if not exists h3(\n  id bigint, \n  name string, \n  price double\n) using hudi\noptions (\n  primaryKey = 'id',\n  type = 'mor',\n  hoodie.cleaner.fileversions.retained = '20',\n  hoodie.keep.max.commits = '20'\n);\n")),(0,i.kt)("h2",{id:"spark-alter-table"},"Spark Alter Table"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- Alter table name\nALTER TABLE oldTableName RENAME TO newTableName\n\n-- Alter table add columns\nALTER TABLE tableIdentifier ADD COLUMNS(colAndType (,colAndType)*)\n\n-- Alter table column type\nALTER TABLE tableIdentifier CHANGE COLUMN colName colName colType\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"alter table h0 rename to h0_1;\n\nalter table h0_1 add columns(ext0 string);\n\nalter table h0_1 change column id id bigint;\n")),(0,i.kt)("h3",{id:"alter-hoodie-config-options"},"Alter hoodie config options"),(0,i.kt)("p",null,"You can also alter the write config for a table by the ",(0,i.kt)("strong",{parentName:"p"},"ALTER SERDEPROPERTIES")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"}," alter table h3 set serdeproperties (hoodie.keep.max.commits = '10') \n")),(0,i.kt)("h3",{id:"use-set-command"},"Use set command"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("strong",{parentName:"p"},"set")," command to set any custom hudi's config, which will work for the\nwhole spark session scope."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"set hoodie.insert.shuffle.parallelism = 100;\nset hoodie.upsert.shuffle.parallelism = 100;\nset hoodie.delete.shuffle.parallelism = 100;\n")),(0,i.kt)("h2",{id:"flink"},"Flink"),(0,i.kt)("h3",{id:"create-table"},"Create Table"),(0,i.kt)("p",null,"The following is a Flink example to create a table. ",(0,i.kt)("a",{parentName:"p",href:"/docs/flink-quick-start-guide"},"Read the Flink Quick Start")," guide for more examples."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hudi_table2(\n  id int, \n  name string, \n  price double\n)\nWITH (\n'connector' = 'hudi',\n'path' = 's3://bucket-name/hudi/',\n'table.type' = 'MERGE_ON_READ' -- this creates a MERGE_ON_READ table, by default is COPY_ON_WRITE\n);\n")),(0,i.kt)("h3",{id:"alter-table"},"Alter Table"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"alter table h0 rename to h0_1;\n")))}u.isMDXComponent=!0}}]);