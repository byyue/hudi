"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[8493],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86876:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],u={version:"0.5.2",title:"\u6027\u80fd",keywords:["hudi","index","storage","compaction","cleaning","implementation"],toc:!1,last_modified_at:new Date("2019-12-30T19:59:57.000Z"),language:"cn"},p=void 0,c={unversionedId:"performance",id:"version-0.5.2/performance",isDocsHomePage:!1,title:"\u6027\u80fd",description:"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u4e00\u4e9b\u6709\u5173Hudi\u63d2\u5165\u66f4\u65b0\u3001\u589e\u91cf\u63d0\u53d6\u7684\u5b9e\u9645\u6027\u80fd\u6570\u636e\uff0c\u5e76\u5c06\u5176\u4e0e\u5b9e\u73b0\u8fd9\u4e9b\u4efb\u52a1\u7684\u5176\u5b83\u4f20\u7edf\u5de5\u5177\u8fdb\u884c\u6bd4\u8f83\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/version-0.5.2/performance.md",sourceDirName:".",slug:"/performance",permalink:"/cn/docs/0.5.2/performance",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.5.2/performance.md",version:"0.5.2",frontMatter:{version:"0.5.2",title:"\u6027\u80fd",keywords:["hudi","index","storage","compaction","cleaning","implementation"],toc:!1,last_modified_at:"2019-12-30T19:59:57.000Z",language:"cn"},sidebar:"version-0.5.2/docs",previous:{title:"\u914d\u7f6e",permalink:"/cn/docs/0.5.2/configurations"},next:{title:"\u7ba1\u7406 Hudi Pipelines",permalink:"/cn/docs/0.5.2/deployment"}},s=[{value:"\u63d2\u5165\u66f4\u65b0",id:"\u63d2\u5165\u66f4\u65b0",children:[]},{value:"\u7d22\u5f15",id:"\u7d22\u5f15",children:[]},{value:"\u8bfb\u4f18\u5316\u67e5\u8be2",id:"\u8bfb\u4f18\u5316\u67e5\u8be2",children:[]}],l={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u4e00\u4e9b\u6709\u5173Hudi\u63d2\u5165\u66f4\u65b0\u3001\u589e\u91cf\u63d0\u53d6\u7684\u5b9e\u9645\u6027\u80fd\u6570\u636e\uff0c\u5e76\u5c06\u5176\u4e0e\u5b9e\u73b0\u8fd9\u4e9b\u4efb\u52a1\u7684\u5176\u5b83\u4f20\u7edf\u5de5\u5177\u8fdb\u884c\u6bd4\u8f83\u3002"),(0,o.kt)("h2",{id:"\u63d2\u5165\u66f4\u65b0"},"\u63d2\u5165\u66f4\u65b0"),(0,o.kt)("p",null,"\u4e0b\u9762\u663e\u793a\u4e86\u4eceNoSQL\u6570\u636e\u5e93\u6444\u53d6\u83b7\u5f97\u7684\u901f\u5ea6\u63d0\u5347\uff0c\u8fd9\u4e9b\u901f\u5ea6\u63d0\u5347\u6570\u636e\u662f\u901a\u8fc7\u5728\u5199\u5165\u65f6\u590d\u5236\u5b58\u50a8\u4e0a\u7684Hudi\u6570\u636e\u96c6\u4e0a\u63d2\u5165\u66f4\u65b0\u800c\u83b7\u5f97\u7684\uff0c\n\u6570\u636e\u96c6\u5305\u62ec5\u4e2a\u4ece\u5c0f\u5230\u5927\u7684\u8868\uff08\u76f8\u5bf9\u4e8e\u6279\u91cf\u52a0\u8f7d\u8868\uff09\u3002"),(0,o.kt)("figure",null,(0,o.kt)("img",{className:"docimage",src:"/assets/images/hudi_upsert_perf1.png",alt:"hudi_upsert_perf1.png"})),(0,o.kt)("p",null,"\u7531\u4e8eHudi\u53ef\u4ee5\u901a\u8fc7\u589e\u91cf\u6784\u5efa\u6570\u636e\u96c6\uff0c\u5b83\u4e5f\u4e3a\u66f4\u9891\u7e41\u5730\u8c03\u5ea6\u6444\u53d6\u63d0\u4f9b\u4e86\u53ef\u80fd\u6027\uff0c\u4ece\u800c\u51cf\u5c11\u4e86\u5ef6\u8fdf\uff0c\u5e76\u663e\u8457\u8282\u7701\u4e86\u603b\u4f53\u8ba1\u7b97\u6210\u672c\u3002"),(0,o.kt)("figure",null,(0,o.kt)("img",{className:"docimage",src:"/assets/images/hudi_upsert_perf2.png",alt:"hudi_upsert_perf2.png"})),(0,o.kt)("p",null,"Hudi\u63d2\u5165\u66f4\u65b0\u5728t1\u8868\u7684\u4e00\u6b21\u63d0\u4ea4\u4e2d\u5c31\u8fdb\u884c\u4e86\u9ad8\u8fbe4TB\u7684\u538b\u529b\u6d4b\u8bd5\u3002\n\u6709\u5173\u4e00\u4e9b\u8c03\u4f18\u6280\u5de7\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/Tuning+Guide"},"\u8fd9\u91cc"),"\u3002"),(0,o.kt)("h2",{id:"\u7d22\u5f15"},"\u7d22\u5f15"),(0,o.kt)("p",null,"\u4e3a\u4e86\u6709\u6548\u5730\u63d2\u5165\u66f4\u65b0\u6570\u636e\uff0cHudi\u9700\u8981\u5c06\u8981\u5199\u5165\u7684\u6279\u91cf\u6570\u636e\u4e2d\u7684\u8bb0\u5f55\u5206\u7c7b\u4e3a\u63d2\u5165\u548c\u66f4\u65b0\uff08\u5e76\u6807\u8bb0\u5b83\u6240\u5c5e\u7684\u6587\u4ef6\u7ec4\uff09\u3002\n\u4e3a\u4e86\u52a0\u5feb\u6b64\u64cd\u4f5c\u7684\u901f\u5ea6\uff0cHudi\u91c7\u7528\u4e86\u53ef\u63d2\u62d4\u7d22\u5f15\u673a\u5236\uff0c\u8be5\u673a\u5236\u5b58\u50a8\u4e86recordKey\u548c\u5b83\u6240\u5c5e\u7684\u6587\u4ef6\u7ec4ID\u4e4b\u95f4\u7684\u6620\u5c04\u3002\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHudi\u4f7f\u7528\u5185\u7f6e\u7d22\u5f15\uff0c\u8be5\u7d22\u5f15\u4f7f\u7528\u6587\u4ef6\u8303\u56f4\u548c\u5e03\u9686\u8fc7\u6ee4\u5668\u6765\u5b8c\u6210\u6b64\u4efb\u52a1\uff0c\u76f8\u6bd4\u4e8eSpark Join\uff0c\u5176\u901f\u5ea6\u6700\u9ad8\u53ef\u63d0\u9ad810\u500d\u3002"),(0,o.kt)("p",null,"\u5f53\u60a8\u5c06recordKey\u5efa\u6a21\u4e3a\u5355\u8c03\u9012\u589e\u65f6\uff08\u4f8b\u5982\u65f6\u95f4\u6233\u524d\u7f00\uff09\uff0cHudi\u63d0\u4f9b\u4e86\u6700\u4f73\u7684\u7d22\u5f15\u6027\u80fd\uff0c\u4ece\u800c\u8fdb\u884c\u8303\u56f4\u8fc7\u6ee4\u6765\u907f\u514d\u4e0e\u8bb8\u591a\u6587\u4ef6\u8fdb\u884c\u6bd4\u8f83\u3002\n\u5373\u4f7f\u5bf9\u4e8e\u57fa\u4e8eUUID\u7684\u952e\uff0c\u4e5f\u6709",(0,o.kt)("a",{parentName:"p",href:"https://www.percona.com/blog/2014/12/19/store-uuid-optimized-way/"},"\u5df2\u77e5\u6280\u672f"),"\u6765\u8fbe\u5230\u540c\u6837\u76ee\u7684\u3002\n\u4f8b\u5982\uff0c\u5728\u5177\u670980B\u952e\u30013\u4e2a\u5206\u533a\u300111416\u4e2a\u6587\u4ef6\u300110TB\u6570\u636e\u7684\u4e8b\u4ef6\u8868\u4e0a\u4f7f\u7528100M\u4e2a\u65f6\u95f4\u6233\u524d\u7f00\u7684\u952e\uff085\uff05\u7684\u66f4\u65b0\uff0c95\uff05\u7684\u63d2\u5165\uff09\u65f6\uff0c\n\u76f8\u6bd4\u4e8e\u539f\u59cbSpark Join\uff0cHudi\u7d22\u5f15\u901f\u5ea6\u7684\u63d0\u5347",(0,o.kt)("strong",{parentName:"p"},"\u7ea6\u4e3a7\u500d\uff08440\u79d2\u76f8\u6bd4\u4e8e2880\u79d2\uff09"),"\u3002\n\u5373\u4f7f\u5bf9\u4e8e\u5177\u6709\u6311\u6218\u6027\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u5982\u4f7f\u7528300\u4e2a\u6838\u5bf93.25B UUID\u952e\u300130\u4e2a\u5206\u533a\u30016180\u4e2a\u6587\u4ef6\u7684\u201c100\uff05\u66f4\u65b0\u201d\u7684\u6570\u636e\u5e93\u6444\u53d6\u5de5\u4f5c\u8d1f\u8f7d\uff0cHudi\u7d22\u5f15\u4e5f\u53ef\u4ee5\u63d0\u4f9b",(0,o.kt)("strong",{parentName:"p"},"80-100\uff05\u7684\u52a0\u901f"),"\u3002"),(0,o.kt)("h2",{id:"\u8bfb\u4f18\u5316\u67e5\u8be2"},"\u8bfb\u4f18\u5316\u67e5\u8be2"),(0,o.kt)("p",null,"\u8bfb\u4f18\u5316\u89c6\u56fe\u7684\u4e3b\u8981\u8bbe\u8ba1\u76ee\u6807\u662f\u5728\u4e0d\u5f71\u54cd\u67e5\u8be2\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0\u4e0a\u4e00\u8282\u4e2d\u63d0\u5230\u7684\u5ef6\u8fdf\u51cf\u5c11\u548c\u6548\u7387\u63d0\u9ad8\u3002\n\u4e0b\u56fe\u6bd4\u8f83\u4e86\u5bf9Hudi\u548c\u975eHudi\u6570\u636e\u96c6\u7684Hive\u3001Presto\u3001Spark\u67e5\u8be2\uff0c\u5e76\u5bf9\u6b64\u8fdb\u884c\u8bf4\u660e\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hive")),(0,o.kt)("figure",null,(0,o.kt)("img",{className:"docimage",src:"/assets/images/hudi_query_perf_hive.png",alt:"hudi_query_perf_hive.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Spark")),(0,o.kt)("figure",null,(0,o.kt)("img",{className:"docimage",src:"/assets/images/hudi_query_perf_spark.png",alt:"hudi_query_perf_spark.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Presto")),(0,o.kt)("figure",null,(0,o.kt)("img",{className:"docimage",src:"/assets/images/hudi_query_perf_presto.png",alt:"hudi_query_perf_presto.png"})))}d.isMDXComponent=!0}}]);