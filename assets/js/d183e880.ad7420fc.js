"use strict";(self.webpackChunkblog_github_io=self.webpackChunkblog_github_io||[]).push([[1898],{9322:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>t,toc:()=>o});var c=s(4848),r=s(8453);const i={sidebar_position:1,tags:["HTTP","CSP"],title:"CSP",sidebar_label:"CSP",description:"\u4ecb\u7ecd CSP \u5b89\u5168\u7b56\u7565"},l="CSP",t={id:"penetration/Network/HTTP/\u6269\u5c55/1",title:"CSP",description:"\u4ecb\u7ecd CSP \u5b89\u5168\u7b56\u7565",source:"@site/docs/penetration/Network/HTTP/\u6269\u5c55/1.md",sourceDirName:"penetration/Network/HTTP/\u6269\u5c55",slug:"/penetration/Network/HTTP/\u6269\u5c55/1",permalink:"/docs/penetration/Network/HTTP/\u6269\u5c55/1",draft:!1,unlisted:!1,tags:[{label:"HTTP",permalink:"/docs/tags/http"},{label:"CSP",permalink:"/docs/tags/csp"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["HTTP","CSP"],title:"CSP",sidebar_label:"CSP",description:"\u4ecb\u7ecd CSP \u5b89\u5168\u7b56\u7565"},sidebar:"penetrationSidebar",previous:{title:"\u6269\u5c55",permalink:"/docs/category/\u6269\u5c55"},next:{title:"kerberos",permalink:"/docs/category/kerberos"}},d={},o=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u6307\u4ee4",id:"\u6307\u4ee4",level:3},{value:"\u8d44\u6e90\u52a0\u8f7d\u6307\u4ee4",id:"\u8d44\u6e90\u52a0\u8f7d\u6307\u4ee4",level:4},{value:"\u6269\u5c55\u9650\u5236",id:"\u6269\u5c55\u9650\u5236",level:3},{value:"\u6307\u4ee4\u914d\u7f6e",id:"\u6307\u4ee4\u914d\u7f6e",level:3},{value:"default-src",id:"default-src",level:4},{value:"\u9009\u9879\u914d\u7f6e",id:"\u9009\u9879\u914d\u7f6e",level:4},{value:"\u521b\u5efa CSP",id:"\u521b\u5efa-csp",level:3},{value:"Notifys",id:"notifys",level:2},{value:"data URLS",id:"data-urls",level:3},{value:"script-src \u7684\u7279\u6b8a\u503c",id:"script-src-\u7684\u7279\u6b8a\u503c",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"csp",children:"CSP"}),"\n",(0,c.jsx)(n.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,c.jsxs)(n.p,{children:["CSP (\u5185\u5bb9\u5b89\u5168\u7b56\u7565) \u662f\u4e00\u79cd",(0,c.jsx)(n.strong,{children:"\u57fa\u4e8eHTTP\u5934\u90e8\u4fe1\u606f"}),"\u7684\u5b89\u5168\u7b56\u7565\u673a\u5236, \u53ef\u4ee5\u6709\u6548\u7684\u9632\u6b62\u8de8\u7ad9\u811a\u672c\u653b\u51fb\u548c\u5176\u4ed6\u7c7b\u578b\u7684\u4ee3\u7801\u6ce8\u5165\u653b\u51fb, \u4e3a\u7f51\u7ad9\u63d0\u4f9b\u66f4\u9ad8\u7684\u5b89\u5168\u6027."]}),"\n",(0,c.jsxs)(n.p,{children:["CSP \u53ef\u4ee5\u8ba9\u7f51\u7ad9\u7ba1\u7406\u5458\u63a7\u5236\u7f51\u7ad9\u7684\u8d44\u6e90\u52a0\u8f7d\u60c5\u51b5, ",(0,c.jsx)(n.strong,{children:"\u901a\u8fc7\u6307\u5b9a\u5141\u8bb8\u52a0\u8f7d\u5916\u90e8\u8d44\u6e90\u7684\u767d\u540d\u5355\u3001\u9650\u5236\u5185\u8054\u811a\u672c\u548c\u7981\u6b62\u4f7f\u7528"})," ",(0,c.jsxs)(n.strong,{children:["\u200b",(0,c.jsx)(n.code,{children:"eval()"}),"\u200b"]}),"  ",(0,c.jsx)(n.strong,{children:"\u7b49\u65b9\u5f0f\u9650\u5236\u7f51\u7ad9\u7684\u811a\u672c\u6267\u884c,"}),"  \u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u5e2e\u52a9\u6d4f\u89c8\u5668\u53bb\u8bc6\u522b\u548c\u963b\u6b62\u6076\u610f\u5185\u5bb9\u7684\u52a0\u8f7d"]}),"\n",(0,c.jsx)(n.admonition,{type:"info",children:(0,c.jsx)(n.p,{children:"CSP \u7684\u5b9e\u8d28\u5c31\u662f\u767d\u540d\u5355\u5236\u5ea6\uff0c\u5f00\u53d1\u8005\u660e\u786e\u544a\u8bc9\u5ba2\u6237\u7aef\uff0c\u54ea\u4e9b\u5916\u90e8\u8d44\u6e90\u53ef\u4ee5\u52a0\u8f7d\u548c\u6267\u884c\uff0c\u7b49\u540c\u4e8e\u63d0\u4f9b\u767d\u540d\u5355\u3002\u5b83\u7684\u5b9e\u73b0\u548c\u6267\u884c\u5168\u90e8\u7531\u6d4f\u89c8\u5668\u5b8c\u6210\uff0c\u5f00\u53d1\u8005\u53ea\u9700\u63d0\u4f9b\u914d\u7f6e\u3002CSP \u5927\u5927\u589e\u5f3a\u4e86\u7f51\u9875\u7684\u5b89\u5168\u6027\u3002"})}),"\n",(0,c.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,c.jsxs)(n.p,{children:["CSP \u901a\u8fc7\u63d0\u4f9b\u591a\u79cd\u7c7b\u578b\u7684\u7b56\u7565\u6307\u4ee4, \u5305\u62ec ",(0,c.jsx)(n.code,{children:"default-src"})," \u3001",(0,c.jsx)(n.code,{children:"script-src"})," \u3001",(0,c.jsx)(n.code,{children:"style-src"})," \u3001",(0,c.jsx)(n.code,{children:"img-src"})," \u3001",(0,c.jsx)(n.code,{children:"font-src"})," \u3001",(0,c.jsx)(n.code,{children:"connect-src"})," \u7b49\uff0c\u53ef\u4ee5\u5feb\u901f\u914d\u7f6e\u5e76\u9002\u7528\u4e8e\u4e0d\u540c\u7684\u7f51\u7ad9\u3002\u5b83\u8fd8\u652f\u6301 ",(0,c.jsx)(n.code,{children:"report-uri"})," \u6307\u793a\u5668\uff0c\u8ba9\u7f51\u7ad9\u7ba1\u7406\u5458\u53ef\u4ee5\u8bb0\u5f55\u6d4f\u89c8\u5668\u62a5\u544a\u7684\u8fdd\u89c4\u5185\u5bb9\uff0c\u4ece\u800c\u8fdb\u4e00\u6b65\u52a0\u5f3a\u5b89\u5168\u6027\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["CSP \u7b56\u7565\u4e5f\u53ef\u4ee5\u5305\u542b\u5728\u9875\u9762\u7684 HTML \u6e90\u4ee3\u7801\u4e2d, \u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"<meta>"})," \u8fdb\u884c\u6807\u8bb0"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:"<meta http-equiv=\"Content-Security-Policy\" content=\"script-src 'none'; object-src 'none';\">\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u6307\u4ee4",children:"\u6307\u4ee4"}),"\n",(0,c.jsx)(n.admonition,{type:"book",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy",children:"Content-Security-Policy"})," : \u6587\u6863"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"https://content-security-policy.com/#directive",children:"Content-Security-Policy (CSP) Header Quick Reference"})," : \u6307\u4ee4\u53c2\u8003"]}),"\n"]})}),"\n",(0,c.jsx)(n.h4,{id:"\u8d44\u6e90\u52a0\u8f7d\u6307\u4ee4",children:"\u8d44\u6e90\u52a0\u8f7d\u6307\u4ee4"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u7c7b\u6307\u4ee4\u7684\u76ee\u7684\u65f6\u7528\u4e8e\u63a7\u5236\u67d0\u4e9b\u53ef\u80fd\u88ab\u52a0\u8f7d\u7684\u786e\u5207\u8d44\u6e90\u7c7b\u578b\u7684\u4f4d\u7f6e"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"script-src"}),"\uff1a\u5728\u5904\u7406\u811a\u672c\u8d44\u6e90\u7684\u65f6\u5019\u8bbe\u7f6e ",(0,c.jsx)(n.code,{children:"unsafe-inline"})," \u53ef\u4ee5\u963b\u6b62\u5185\u8054 Js \u4ee3\u7801\u7684\u6267\u884c\uff0c\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"unsafe-eval"})," \u5f00\u5173\u53ef\u4ee5\u7981\u6b62 ",(0,c.jsx)(n.code,{children:"eval"}),"\u3001",(0,c.jsx)(n.code,{children:"setTimeout"}),"\u3001",(0,c.jsx)(n.code,{children:"setInterval"})," \u51fd\u6570\u7684\u6267\u884c"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"style-src"}),"\uff1a\u4f1a\u63a7\u5236\u6837\u5f0f\u8868@import \u548c rel \u65f6\u6240\u5f15\u5165\u7684 URI \u8d44\u6e90\uff0c\u8bbe\u7f6e unsafe-inline \u89c4\u5219\u53ef\u4ee5\u662f\u6d4f\u89c8\u5668\u62d2\u7edd\u89e3\u6790\u5185\u90e8\u6837\u5f0f\u548c\u5185\u8054\u6837\u5f0f\u5b9a\u4e49\u3002\u5e76\u4e0d\u4f1a\u963b\u6b62\u94fe\u5165\u5916\u90e8\u6837\u5f0f\u8868\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"img-src"}),"\uff1a\u53ef\u4ee5\u63a7\u5236\u56fe\u7247\u8d44\u6e90\u7684\u8fde\u63a5\uff0c\u5305\u62ec ",(0,c.jsx)(n.code,{children:"img"})," \u6807\u7b7e\u7684 ",(0,c.jsx)(n.code,{children:"src"})," \u5c5e\u6027\uff0c\u4ee5\u53ca CSS3 \u4e2d\u7684 ",(0,c.jsx)(n.code,{children:"url()"})," \u548c ",(0,c.jsx)(n.code,{children:"image()"}),"\u65b9\u6cd5\uff0c\u4ee5\u53ca link \u6807\u7b7e\u4e2d\u7684 href \u5c5e\u6027\uff08\u5f53 rel \u8bbe\u7f6e\u6210\u4e0e\u56fe\u50cf\u76f8\u5173\u7684\u503c\uff0c\u6bd4\u5982 HTML \u652f\u6301\u7684 icon\uff09"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"font-src"}),"\uff1a\u63a7\u5236 CSS \u4e2d\u7684 ",(0,c.jsx)(n.code,{children:"@font-face"})," \u52a0\u8f7d\u7684\u5b57\u4f53\u6e90\u5730\u5740"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"frame-src"}),"\uff1a\u8bbe\u7f6e\u5141\u8bb8\u901a\u8fc7\u7c7b\u4f3c ",(0,c.jsx)(n.code,{children:"<frame>"})," \u548c ",(0,c.jsx)(n.code,{children:"<iframe>"})," \u6807\u7b7e\u52a0\u8f7d\u7684\u5185\u5d4c\u5185\u5bb9\u7684\u6e90\u5730\u5740"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"manifest-src"}),"\uff1a\u9650\u5236\u5e94\u7528\u58f0\u660e\u6587\u4ef6\u7684\u6e90\u5730\u5740"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"media-src"}),"\uff1a\u63a7\u5236\u5a92\u4f53\u7c7b\u578b\u7684\u5916\u90e8\u94fe\u5165\u8d44\u6e90\uff0c\u5982 ",(0,c.jsx)(n.code,{children:"<audio>"}),"\u3001",(0,c.jsx)(n.code,{children:"<video>"}),"\u3001",(0,c.jsx)(n.code,{children:"<source>"})," \u548c ",(0,c.jsx)(n.code,{children:"<track>"})," \u6807\u7b7e\u7684 src \u5c5e\u6027"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"object-src"}),"\uff1a\u63a7\u5236 ",(0,c.jsx)(n.code,{children:"<embed>"}),"\u3001",(0,c.jsx)(n.code,{children:"<code>"}),"\u3001",(0,c.jsx)(n.code,{children:"<archive>"}),"\u3001",(0,c.jsx)(n.code,{children:"<applet>"})," \u7b49\u5bf9\u8c61"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"prefetch-src"}),"\uff1a\u6307\u5b9a\u9884\u52a0\u8f7d\u6216\u9884\u6e32\u67d3\u7684\u5141\u8bb8\u6e90\u5730\u5740"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"connect-src"}),"\uff1a\u63a7\u5236 XMLHttpRequest \u4e2d\u7684 ",(0,c.jsx)(n.code,{children:"open()"}),"\u3001",(0,c.jsx)(n.code,{children:"WebSocket"}),"\u3001",(0,c.jsx)(n.code,{children:"EventSource"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"report-uri"}),": \u7279\u6b8a\u6307\u4ee4, \u5f53\u6d4f\u89c8\u5668\u68c0\u6d4b\u5230\u8fdd\u53cd\u4e86 CSP \u7b56\u7565\uff0c\u5b83\u4f1a\u5c06\u8fd9\u4e9b\u4fe1\u606f\u62a5\u544a\u7ed9\u6307\u5b9a\u7684\u62a5\u544a\u63a5\u6536\u65b9\u3002\u63a5\u6536\u65b9\u53ef\u4ee5\u662f\u4efb\u4f55 HTTP \u6216 HTTPS URL\uff0c\u53ef\u4ee5\u662f\u7ad9\u5185\u6216\u7ad9\u5916\u7684 URL\u3002\u5df2\u7ecf\u88ab ",(0,c.jsx)(n.code,{children:"report-to"}),"\u66ff\u4ee3"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u6269\u5c55\u9650\u5236",children:"\u6269\u5c55\u9650\u5236"}),"\n",(0,c.jsx)(n.p,{children:"\u4e00\u4e9b\u5b89\u5168\u76f8\u5173\u7684\u529f\u80fd, \u4f5c\u4e3a\u6269\u5c55\u5b58\u5728:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"block-all-mixed-content\uff1aHTTPS \u7f51\u9875\u4e0d\u5f97\u52a0\u8f7d HTTP \u8d44\u6e90\uff08\u6d4f\u89c8\u5668\u5df2\u7ecf\u9ed8\u8ba4\u5f00\u542f\uff09"}),"\n",(0,c.jsx)(n.li,{children:"upgrade-insecure-requests\uff1a\u81ea\u52a8\u5c06\u7f51\u9875\u4e0a\u6240\u6709\u52a0\u8f7d\u5916\u90e8\u8d44\u6e90\u7684 HTTP \u94fe\u63a5\u6362\u6210 HTTPS \u534f\u8bae"}),"\n",(0,c.jsx)(n.li,{children:"plugin-types\uff1a\u9650\u5236\u53ef\u4ee5\u4f7f\u7528\u7684\u63d2\u4ef6\u683c\u5f0f"}),"\n",(0,c.jsx)(n.li,{children:"sandbox\uff1a\u6d4f\u89c8\u5668\u884c\u4e3a\u7684\u9650\u5236\uff0c\u6bd4\u5982\u4e0d\u80fd\u6709\u5f39\u51fa\u7a97\u53e3\u7b49"}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u6307\u4ee4\u914d\u7f6e",children:"\u6307\u4ee4\u914d\u7f6e"}),"\n",(0,c.jsx)(n.h4,{id:"default-src",children:"default-src"}),"\n",(0,c.jsx)(n.p,{children:"default-src \u7528\u4e8e\u8bbe\u7f6e\u4e0a\u9762\u5404\u4e2a\u9009\u9879\u7684\u9ed8\u8ba4\u503c\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-http",children:"Content-Security-Policy: default-src 'self'\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4e0a\u9762\u4ee3\u7801\u9650\u5236\u6240\u6709\u5916\u90e8\u8d44\u6e90\uff0c\u53ea\u80fd\u4ece\u5f53\u524d\u57df\u540d\u52a0\u8f7d\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u540c\u65f6\u8bbe\u7f6e\u67d0\u4e2a\u5355\u9879\u9650\u5236\uff08\u6bd4\u5982 font-src\uff09\u548c default-src\uff0c\u524d\u8005\u4f1a\u8986\u76d6\u540e\u8005\uff0c\u5373\u5b57\u4f53\u6587\u4ef6\u4f1a\u91c7\u7528 font-src \u7684\u503c\uff0c\u5176\u4ed6\u8d44\u6e90\u4f9d\u7136\u91c7\u7528 default-src \u7684\u503c\u3002"}),"\n",(0,c.jsx)(n.h4,{id:"\u9009\u9879\u914d\u7f6e",children:"\u9009\u9879\u914d\u7f6e"}),"\n",(0,c.jsx)(n.p,{children:"\u901a\u8fc7\u5bf9\u4ee5\u4e0b\u5185\u5bb9\u8fdb\u884c\u8bbe\u7f6e, \u8fd9\u4e9b\u503c\u5c31\u6784\u6210\u4e86\u767d\u540d\u5355:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u4e3b\u673a\u540d : example.org\u3001",(0,c.jsx)(n.a,{href:"https://example.com:443",children:"https://example.com:443"})]}),"\n",(0,c.jsx)(n.li,{children:"\u8def\u5f84\u540d : example.org/resources/js/"}),"\n",(0,c.jsxs)(n.li,{children:["\u901a\u914d\u7b26 :  ",(0,c.jsx)(n.em,{children:".example.org\u3001"})," :// ",(0,c.jsx)(n.em,{children:".example.com:"})," \uff08\u8868\u793a\u4efb\u610f\u534f\u8bae\u3001\u4efb\u610f\u5b50\u57df\u540d\u3001\u4efb\u610f\u7aef\u53e3\uff09"]}),"\n",(0,c.jsx)(n.li,{children:"\u534f\u8bae\u540d : https:\u3001data:"}),"\n",(0,c.jsxs)(n.li,{children:["\u5173\u952e\u5b57 ",(0,c.jsx)(n.code,{children:"self"})," : \u8fd9\u4e2a\u6e90\u5141\u8bb8\u4f60\u52a0\u8f7d\u4e0e\u7f51\u7ad9",(0,c.jsx)(n.strong,{children:"\u76f8\u540c\u7684\u534f\u8bae"}),"\uff08http/https\uff09\u3001",(0,c.jsx)(n.strong,{children:"\u4e3b\u673a\u540d"}),"\uff08example.com\uff09\u548c",(0,c.jsx)(n.strong,{children:"\u7aef\u53e3"}),"\uff0880/443\uff09\u4e0a\u7684\u8d44\u6e90\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u6b63\u5728\u8bbf\u95ee\u4e00\u4e2a\u7f51\u7ad9\uff0c\u5982",(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.a,{href:"https://example.com**%EF%BC%8C%E5%B9%B6%E4%B8%94%E5%AE%83%E7%9A%84CSP%E5%A4%B4%E8%AE%BE%E7%BD%AE%E4%B8%BA**default-src",children:"https://example.com**\uff0c\u5e76\u4e14\u5b83\u7684CSP\u5934\u8bbe\u7f6e\u4e3a**default-src"})," 'self'"]})," \uff0c\u4f60\u5c06\u65e0\u6cd5\u4ece",(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.a,{href:"https://subdomain.example.com**%E3%80%81**http://example.com",children:"https://subdomain.example.com**\u3001**http://example.com"})})," \u6216 **",(0,c.jsx)(n.a,{href:"https://example.org**%EF%BC%8C%E5%8A%A0%E8%BD%BD%E4%BB%BB%E4%BD%95%E8%84%9A%E6%9C%AC%E3%80%81%E5%9B%BE%E5%83%8F%E6%88%96%E6%A0%B7%E5%BC%8F%E8%A1%A8%E3%80%82",children:"https://example.org**\uff0c\u52a0\u8f7d\u4efb\u4f55\u811a\u672c\u3001\u56fe\u50cf\u6216\u6837\u5f0f\u8868\u3002"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u5173\u952e\u5b57 ",(0,c.jsx)(n.code,{children:"none"})," : \u7981\u6b62\u52a0\u8f7d\u4efb\u4f55\u5916\u90e8\u8d44\u6e90\uff0c\u9700\u8981\u52a0\u5f15\u53f7"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u591a\u4e2a\u503c\u4e5f\u53ef\u4ee5\u5e76\u5217\uff0c\u7528\u7a7a\u683c\u5206\u9694\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-http",children:"Content-Security-Policy: script-src 'self' <https://apis.google.com>\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u540c\u4e00\u4e2a\u9650\u5236\u9009\u9879\u4f7f\u7528\u591a\u6b21\uff0c\u53ea\u6709\u7b2c\u4e00\u6b21\u4f1a\u751f\u6548\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-http",children:"# \u9519\u8bef\u7684\u5199\u6cd5\nContent-Security-Policy: script-src <https://host1.com>; script-src <https://host2.com>\n\n# \u6b63\u786e\u7684\u5199\u6cd5\nContent-Security-Policy: script-src https://host1.com https://host2.com;\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u521b\u5efa-csp",children:"\u521b\u5efa CSP"}),"\n",(0,c.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.a,{href:"https://report-uri.com/home/generate",title:"Report URI: Generate your Content Security Policy",children:"Report URI: Generate your Content Security Policy"})," \u6765\u5e2e\u52a9\u6211\u4eec\u5feb\u901f\u751f\u6210\u6240\u9700\u7684 CSP \u7b56\u7565."]}),"\n",(0,c.jsxs)(n.p,{children:["\u5f53\u8bbe\u7f6e ",(0,c.jsx)(n.code,{children:"script-src"})," \u6307\u4ee4\u4ee5\u53ca\u6765\u6e90\u65f6, \u6211\u4eec\u9700\u8981\u6ce8\u610f\u5141\u8bb8\u52a0\u8f7d\u7684\u5185\u5bb9,\u5982\u679c\u6211\u4eec\u9700\u8981\u4ece CDN \u7b49\u5916\u90e8\u6765\u6e90\u52a0\u8f7d\u811a\u672c,\u6211\u4eec\u9700\u8981\u786e\u4fdd\u811a\u672c\u7684\u5b8c\u6574 URL \u6216\u8005\u811a\u672c\u7684SHA \u54c8\u5e0c,\u800c\u4e0d\u4ec5\u4ec5\u65f6\u6258\u7ba1\u4e3b\u673a\u540d,\u6bd4\u5982 ",(0,c.jsx)(n.a,{href:"https://cdnjs.com/libraries/jquery",children:"jQuery - Libraries- cdnjs"})," \u5c31\u5305\u542b\u4e00\u4e2a \u5b8c\u6574 URL \u548c SHA256"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u6211\u4eec\u9700\u8981\u5728\u7f51\u7ad9\u4e2d\u5305\u542b\u5185\u8054 JS \u6216\u8005 CSS, \u6211\u4eec\u9700\u8981\u5728\u670d\u52a1\u5668\u7aef\u8bbe\u7f6e\u968f\u673a\u6570\u751f\u6210\u5668\u6216\u8ba1\u7b97\u5185\u8054\u811a\u672c\u7684 SHA \u54c8\u5e0c\u503c, \u7136\u540e\u5305\u542b\u5728\u81ea\u5df1\u7684\u7b56\u7565\u4e2d, \u6bd4\u5982: \u5728\u4f7f\u7528\u57fa\u4e8e ",(0,c.jsx)(n.strong,{children:"Express"}),"\u7684\u7f51\u7ad9, \u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 npm \u7684 ",(0,c.jsx)(n.a,{href:"https://www.npmjs.com/package/helmet-csp",children:"helmet-csp"})," \u6a21\u5757.\u5982\u679c\u6211\u4eec\u53ef\u4ee5\u5e0c\u671b\u5bf9\u811a\u672c\u8fdb\u884c\u54c8\u5e0c\u5904\u7406,\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.a,{href:"https://report-uri.com/home/hash",title:"Report URI: CSP Hash Generator",children:"Report URI: CSP Hash Generator"})," \u3001",(0,c.jsx)(n.a,{href:"https://www.srihash.org/",title:"SRI Hash Generator",children:"SRI Hash Generator"})," \u3001",(0,c.jsx)(n.a,{href:"https://github.com/fcsonline/autocsp",children:"autocsp"})]}),"\n",(0,c.jsx)(n.h2,{id:"notifys",children:"Notifys"}),"\n",(0,c.jsx)(n.h3,{id:"data-urls",children:"data URLS"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cCSP \u7b56\u7565\u4e0d\u5141\u8bb8\u4f7f\u7528 data URIs \u8d44\u6e90\uff0c\u56e0\u4e3a data URIs \u5141\u8bb8\u5c06\u6570\u636e\u76f4\u63a5\u5d4c\u5165\u5230 HTML\u3001CSS \u6216 JavaScript \u4e2d\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5b89\u5168\u98ce\u9669\uff0c\u7279\u522b\u662f\u5728 XSS \u653b\u51fb\u65b9\u9762\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["data URIs \u7684\u683c\u5f0f\u901a\u5e38\u4e3a ",(0,c.jsx)(n.code,{children:"data:[<mediatype>][;base64],<data>"}),"\uff0c\u5176\u4e2d ",(0,c.jsx)(n.code,{children:"<mediatype>"})," \u8868\u793a\u5d4c\u5165\u6570\u636e\u7684 MIME \u7c7b\u578b\uff0c\u800c ",(0,c.jsx)(n.code,{children:"<data>"})," \u5219\u662f\u7ecf\u8fc7 Base64 \u7f16\u7801\u7684\u6570\u636e\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u60f3\u5728 CSP \u7b56\u7565\u4e2d\u5141\u8bb8\u4f7f\u7528 data URIs \u8d44\u6e90\uff0c\u4f60\u9700\u8981\u663e\u5f0f\u5730\u6307\u5b9a\u5141\u8bb8\u5b83\u4eec\u7684\u6765\u6e90\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7 CSP \u7684 ",(0,c.jsx)(n.code,{children:"img-src"}),"\u3001",(0,c.jsx)(n.code,{children:"font-src"}),"\u3001",(0,c.jsx)(n.code,{children:"style-src"})," \u6216\u5176\u4ed6\u76f8\u5173\u6307\u4ee4\u6765\u5b9e\u73b0\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u4f60\u60f3\u8981\u5728\u54ea\u4e2a\u4e0a\u4e0b\u6587\u4e2d\u5141\u8bb8\u4f7f\u7528 data URIs\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u8981\u5141\u8bb8\u5728 ",(0,c.jsx)(n.code,{children:"img"})," \u6807\u7b7e\u4e2d\u4f7f\u7528 data URIs\uff0c\u4f60\u53ef\u4ee5\u5c06 ",(0,c.jsx)(n.code,{children:"img-src"})," \u6307\u4ee4\u8bbe\u7f6e\u4e3a\u5305\u542b ",(0,c.jsx)(n.code,{children:"'data:'"}),"\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-http",children:"Content-Security-Policy: img-src 'self' data:;\n"})}),"\n",(0,c.jsx)(n.h3,{id:"script-src-\u7684\u7279\u6b8a\u503c",children:"script-src \u7684\u7279\u6b8a\u503c"}),"\n",(0,c.jsx)(n.p,{children:"\u9664\u4e86\u5e38\u89c4\u503c\uff0cscript-src \u8fd8\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e9b\u7279\u6b8a\u503c\u3002\u6ce8\u610f\uff0c\u4e0b\u9762\u8fd9\u4e9b\u503c\u90fd\u5fc5\u987b\u653e\u5728\u5355\u5f15\u53f7\u91cc\u9762\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"unsafe-inline\uff1a\u5141\u8bb8\u6267\u884c\u9875\u9762\u5185\u5d4c\u7684 <script> \u6807\u7b7e\u548c\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570"}),"\n",(0,c.jsx)(n.li,{children:"unsafe-eval\uff1a\u5141\u8bb8\u5c06\u5b57\u7b26\u4e32\u5f53\u4f5c\u4ee3\u7801\u6267\u884c\uff0c\u6bd4\u5982\u4f7f\u7528 eval\u3001setTimeout\u3001setInterval \u548c Function \u7b49\u51fd\u6570\u3002"}),"\n",(0,c.jsx)(n.li,{children:"nonce \u503c\uff1a\u6bcf\u6b21 HTTP \u56de\u5e94\u7ed9\u51fa\u4e00\u4e2a\u6388\u6743 token\uff0c\u9875\u9762\u5185\u5d4c\u811a\u672c\u5fc5\u987b\u6709\u8fd9\u4e2a token\uff0c\u624d\u4f1a\u6267\u884c"}),"\n",(0,c.jsxs)(n.li,{children:["hash \u503c\uff1a\u5217\u51fa\u5141\u8bb8\u6267\u884c\u7684\u811a\u672c\u4ee3\u7801\u7684 Hash \u503c\uff0c\u9875\u9762\u5185\u5d4c\u811a\u672c\u7684\u54c8\u5e0c\u503c\u53ea\u6709\u543b\u5408\u7684\u60c5\u51b5\u4e0b\uff0c\u624d\u80fd\u6267\u884c\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.a,{href:"https://report-uri.com/home/hash",title:"Report URI: CSP Hash Generator",children:"Report URI: CSP Hash Generator"}),"  \u5de5\u5177\u6765\u5e2e\u52a9\u6211\u4eec\u751f\u6210"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"nonce \u503c\u7684\u4f8b\u5b50\u5982\u4e0b\uff0c\u670d\u52a1\u5668\u53d1\u9001\u7f51\u9875\u7684\u65f6\u5019\uff0c\u544a\u8bc9\u6d4f\u89c8\u5668\u4e00\u4e2a\u968f\u673a\u751f\u6210\u7684 token\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-http",children:"Content-Security-Policy: script-src 'nonce-EDNnf03nceIOfn39fn3e9h3sdfa'\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u9875\u9762\u5185\u5d4c\u811a\u672c\uff0c\u5fc5\u987b\u6709\u8fd9\u4e2a token \u624d\u80fd\u6267\u884c\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:'<script nonce="EDNnf03nceIOfn39fn3e9h3sdfa">\n  // some code\n<\/script>\n'})}),"\n",(0,c.jsx)(n.p,{children:"hash \u503c\u7684\u4f8b\u5b50\u5982\u4e0b\uff0c\u670d\u52a1\u5668\u7ed9\u51fa\u4e00\u4e2a\u5141\u8bb8\u6267\u884c\u7684\u4ee3\u7801\u7684 hash \u503c\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-http",children:"Content-Security-Policy: script-src 'sha256-qznLcsROx4GACP2dm0UCKCzCG-HiZ1guq6ZZDob_Tng='\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4e0b\u9762\u7684\u4ee3\u7801\u5c31\u4f1a\u5141\u8bb8\u6267\u884c\uff0c\u56e0\u4e3a hash \u503c\u76f8\u7b26\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:"<script type=\"text/javascript\">\n  alert('Hello, world.');\n<\/script>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c\u8ba1\u7b97 hash \u503c\u7684\u65f6\u5019\uff0c",(0,c.jsx)(n.code,{children:"<script>"})," \u6807\u7b7e\u4e0d\u7b97\u5728\u5185\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u9664\u4e86 script-src \u9009\u9879\uff0cnonce \u503c\u548c hash \u503c\u8fd8\u53ef\u4ee5\u7528\u5728 style-src \u9009\u9879\uff0c\u63a7\u5236\u9875\u9762\u5185\u5d4c\u7684\u6837\u5f0f\u8868\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>t});var c=s(6540);const r={},i=c.createContext(r);function l(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);