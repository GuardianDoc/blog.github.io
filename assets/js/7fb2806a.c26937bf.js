"use strict";(self.webpackChunkblog_github_io=self.webpackChunkblog_github_io||[]).push([[7567],{4437:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var s=i(4848),o=i(8453);const t={sidebar_position:2,tags:["Tool"],title:"Github Action",sidebar_label:"Github Action",description:"Github Action \u4ecb\u7ecd&\u4f7f\u7528"},c="Github Action",l={id:"help/Github/1",title:"Github Action",description:"Github Action \u4ecb\u7ecd&\u4f7f\u7528",source:"@site/docs/help/Github/1.md",sourceDirName:"help/Github",slug:"/help/Github/1",permalink:"/docs/help/Github/1",draft:!1,unlisted:!1,tags:[{label:"Tool",permalink:"/docs/tags/tool"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Tool"],title:"Github Action",sidebar_label:"Github Action",description:"Github Action \u4ecb\u7ecd&\u4f7f\u7528"},sidebar:"helpSidebar",previous:{title:"Github",permalink:"/docs/category/github"}},r={},d=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"workflow \u6587\u4ef6",id:"workflow-\u6587\u4ef6",level:2},{value:"\u6269\u5c55",id:"\u6269\u5c55",level:2},{value:"Actions \u5e02\u573a",id:"actions-\u5e02\u573a",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function a(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"github-action",children:"Github Action"}),"\n",(0,s.jsx)(e.p,{children:"Github Action \u662f Github \u63a8\u51fa\u7684\u6301\u7eed\u96c6\u6210\u5de5\u5177. \u6211\u4eec\u53ef\u4ee5\u501f\u7528GitHub\u63d0\u4f9b\u7684\u5404\u79cd\u7c7b\u578b\u7684\u865a\u62df\u673a\uff0c\u6d41\u6c34\u7ebf\u5f0f\u7684\u5b8c\u6210\u7a0b\u5e8f\u7684\u7f16\u8bd1 \u6d4b\u8bd5 \u6253\u5305 \u90e8\u7f72\u3002\u66f4\u91cd\u8981\u7684\u662f\u5b83\u5b8c\u5168\u514d\u8d39\uff0c\u6bcf\u4e2a\u8d26\u6237\u6bcf\u4e2a\u6708\u53ef\u4ee5\u767d\u5ad62000\u5206\u949f\u7684\u4f7f\u7528\u65f6\u957f\u3002\u6709\u4e86\u8fd9\u4e9b\u514d\u8d39\u65f6\u957f\uff0c\u6211\u4eec\u751a\u81f3\u53ef\u4ee5\u4e0d\u4e70\u670d\u52a1\u5668\uff0c\u4f7f\u7528action\u5c31\u80fd\u5b9a\u65f6\u6267\u884c\u4e00\u4e9b\u5c0f\u4efb\u52a1\uff0c\u6bd4\u5982\u5b9a\u65f6\u5929\u6c14\u63a8\u9001\uff0c\u7b7e\u5230\u8585\u7f8a\u6bdb\u7b49\u7b49\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"workflow (\u5de5\u4f5c\u6d41\u7a0b) : \u6301\u7eed\u96c6\u6210\u4e00\u6b21\u8fd0\u884c\u7684\u8fc7\u7a0b\uff0c\u5c31\u662f\u4e00\u4e2a workflow\u3002"}),"\n",(0,s.jsx)(e.li,{children:"job (\u4efb\u52a1) : \u4e00\u4e2a workflow \u7531\u4e00\u4e2a\u6216\u591a\u4e2a jobs \u6784\u6210\uff0c\u542b\u4e49\u662f\u4e00\u6b21\u6301\u7eed\u96c6\u6210\u7684\u8fd0\u884c\uff0c\u53ef\u4ee5\u5b8c\u6210\u591a\u4e2a\u4efb\u52a1\u3002"}),"\n",(0,s.jsx)(e.li,{children:"step (\u6b65\u9aa4) : \u6bcf\u4e2a job \u7531\u591a\u4e2a step \u6784\u6210\uff0c\u4e00\u6b65\u6b65\u5b8c\u6210\u3002"}),"\n",(0,s.jsx)(e.li,{children:"action (\u52a8\u4f5c) : \u6bcf\u4e2a step \u53ef\u4ee5\u4f9d\u6b21\u6267\u884c\u4e00\u4e2a\u6216\u591a\u4e2a\u547d\u4ee4\uff08action\uff09\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"workflow-\u6587\u4ef6",children:"workflow \u6587\u4ef6"}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Github Action \u7684\u914d\u7f6e\u6587\u4ef6\u79f0\u4e3a ",(0,s.jsx)(e.code,{children:"workflow"})," \u6587\u4ef6, \u5b58\u653e\u5728\u4ed3\u5e93 ",(0,s.jsx)(e.code,{children:".github/workflows/"})," \u76ee\u5f55\u4e2d, \u4e14\u91c7\u7528 ",(0,s.jsx)(e.code,{children:"YAML"})," \u683c\u5f0f\u7f16\u5199, \u6587\u4ef6\u540d\u53ef\u4ee5\u4efb\u610f\u53d6, \u4f46\u662f\u540e\u7f00\u5fc5\u987b\u7edf\u4e00\u4e3a ",(0,s.jsx)(e.code,{children:".yml"})," \u6587\u4ef6"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4e2a\u5e93\u53ef\u4ee5\u6709\u591a\u4e2a ",(0,s.jsx)(e.code,{children:"workflow"})," \u6587\u4ef6\u3002GitHub \u53ea\u8981\u53d1\u73b0 ",(0,s.jsx)(e.code,{children:".github/workflows"})," \u76ee\u5f55\u91cc\u9762\u6709 ",(0,s.jsx)(e.code,{children:".yml"})," \u6587\u4ef6\uff0c\u5c31\u4f1a\u81ea\u52a8\u8fd0\u884c\u8be5\u6587\u4ef6\u3002"]}),"\n"]})}),"\n",(0,s.jsxs)(e.p,{children:["workflow \u6587\u4ef6\u7684\u914d\u7f6e\u5b57\u6bb5\u6709\u5f88\u591a, \u4e0b\u9762\u8fdb\u884c\u4e00\u4e9b\u7b80\u5355\u7684\u4ecb\u7ecd, \u8be6\u7ec6\u5185\u5bb9\u67e5\u770b",(0,s.jsx)(e.a,{href:"https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions",children:"\u5b98\u65b9\u6587\u6863"})]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"name : \u8fd9\u4e2a\u5b57\u6bb5\u662f workflow \u7684\u540d\u79f0, \u9ed8\u8ba4\u662f\u5f53\u524d workflow \u7684\u6587\u4ef6\u540d\u79f0"}),"\n",(0,s.jsxs)(e.li,{children:["on : \u6307\u5b9a\u89e6\u53d1 workflow \u7684\u6761\u4ef6: \u624b\u52a8\u89e6\u53d1\u3001\u5b9a\u65f6\u89e6\u53d1\u3001\u4e8b\u4ef6\u89e6\u53d1\u3001\u9650\u5b9a\u5206\u652f\u548c\u6807\u7b7e","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:"on:\n  workflow_dispatch: # \u624b\u52a8\u89e6\u53d1\n\n  schedule: # \u8bbe\u7f6e\u4e3a\u5b9a\u65f6\u89e6\u53d1\u4e3a UTC \u65f6\u95f4, UTC23\u70b9 \u5bf9\u5e94\u5317\u4eac\u65f6\u95f4\u65e97\u70b9\n    - cron : '00 23 * * *' # \u4e8b\u4ef6\u8868\u8fbe\u5f0f\n\n  [push, pull_request]: # push\u4e8b\u4ef6\u6216pull_request\u4e8b\u4ef6\u90fd\u53ef\u4ee5\u89e6\u53d1 (\u4e8b\u4ef6\u6570\u7ec4)\n    branches:      # \u53ea\u5728\u7279\u5b9a\u5206\u652f/\u6807\u7b7e\u4e0a\u89e6\u53d1\n      - main     # \u5177\u4f53\u662f\u6307 `main` \u5206\u652f\u65f6\u89e6\u53d1 \n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["jobs : \u8868\u793a\u6b64\u6b21 workflow \u4e2d\u9700\u8981\u6267\u884c\u7684\u4e00\u9879\u6216\u591a\u9879\u4efb\u52a1, \u5728 job \u5b57\u6bb5\u91cc\u9762, \u9700\u8981\u5199\u51fa\u6bcf\u4e00\u9879\u4efb\u52a1\u7684job_id\uff0c\u5177\u4f53\u540d\u79f0\u81ea\u5b9a\u4e49\u3002","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"jobs.<job_id>.name"})," : \u7528\u6237\u63cf\u8ff0\u672c\u6b21\u4efb\u52a1"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:"jobs:\n  job1:\n    name: \u7b2c\u4e00\u4e2a\u4efb\u52a1\n  job2:\n    name: \u7b2c\u4e8c\u4e2a\u4efb\u52a1\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"jobs.<job_id>needs"})," : \u6307\u5b9a\u5f53\u524d\u4efb\u52a1\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u5373\u8fd0\u884c\u987a\u5e8f\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:"jobs:\n  job1:\n  job2:\n    needs: job1\n  job3:\n    needs: [job1, job2]\n"})}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d, ",(0,s.jsx)(e.code,{children:"job"})," \u5fc5\u987b\u5148\u4e8e ",(0,s.jsx)(e.code,{children:"job2"})," \u5b8c\u6210\uff0c\u800c ",(0,s.jsx)(e.code,{children:"job3"})," \u7b49\u5f85 ",(0,s.jsx)(e.code,{children:"job1"})," \u548c ",(0,s.jsx)(e.code,{children:"job2"})," \u7684\u5b8c\u6210\u624d\u80fd\u8fd0\u884c\u3002\u56e0\u6b64\uff0c\u8fd9\u4e2a ",(0,s.jsx)(e.code,{children:"workflow"})," \u7684\u8fd0\u884c\u987a\u5e8f\u4f9d\u6b21\u4e3a\uff1a",(0,s.jsx)(e.code,{children:"job1->job2->job3"})]})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"jobs.<job_id>.runs-on"})," : \u6307\u5b9a\u8fd0\u884c\u6240\u9700\u8981\u7684\u865a\u62df\u673a\u73af\u5883\u3002\u5b83\u662f\u5fc5\u586b\u5b57\u6bb5\u3002\u76ee\u524d\u53ef\u7528\u865a\u62df\u673a\u5982\u4e0b:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"ubuntu-latest\uff0cubuntu-18.04\u6216ubuntu-16.04"}),"\n",(0,s.jsx)(e.li,{children:"windows-latest\uff0cwindows-2019\u6216windows-2016"}),"\n",(0,s.jsx)(e.li,{children:"macOS-latest\u6216macOS-10.14"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:"runs-on: ubuntu-18.04\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"jobs.<job_id>.steps"})," : \u6307\u5b9a\u6bcf\u4e2a Job \u7684\u8fd0\u884c\u6b65\u9aa4\uff0c\u53ef\u4ee5\u5305\u542b\u4e00\u4e2a\u6216\u591a\u4e2a\u6b65\u9aa4\u3002\u6bcf\u4e2a\u6b65\u9aa4\u90fd\u53ef\u4ee5\u6307\u5b9a\u4ee5\u4e0b\u4e09\u4e2a\u5b57\u6bb5\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:"- jobs.<job_id>.steps.name\uff1a\u6b65\u9aa4\u540d\u79f0\u3002\n- jobs.<job_id>.steps.run\uff1a\u8be5\u6b65\u9aa4\u8fd0\u884c\u7684\u547d\u4ee4\u6216\u8005 action\u3002\n- jobs.<job_id>.steps.env\uff1a\u8be5\u6b65\u9aa4\u6240\u9700\u7684\u73af\u5883\u53d8\u91cf\u3002\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",metastring:'title="workflow \u6587\u4ef6\u7684\u8303\u4f8b"',children:"jobs:\n    job1:\n        name: \u7b2c\u4e00\u4e2a\u4efb\u52a1 # \u4efb\u52a1\u540d\u79f0\n        runs-on: ubuntu-latest # \u8fd0\u884c\u73af\u5883\n        steps: # job1 \u7684\u8fd0\u884c\u6b65\u9aa4\n          - name: \u7b2c\u4e00\u6b65\n            env: # \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\n              username: root\n              password: root\n            run: |\n              echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.\n    job2:\n        name: \u7b2c\u4e8c\u4e2a\u4efb\u52a1\n        needs: job1\n    job3:\n        name: \u7b2c\u4e09\u4e2a\u4efb\u52a1\n        needs: [job1, job2]\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6269\u5c55",children:"\u6269\u5c55"}),"\n",(0,s.jsx)(e.h3,{id:"actions-\u5e02\u573a",children:"Actions \u5e02\u573a"}),"\n",(0,s.jsxs)(e.p,{children:["Github \u505a\u4e86\u4e00\u4e2a ",(0,s.jsx)(e.a,{href:"https://github.com/marketplace?type=actions",children:"\u5b98\u65b9\u5e02\u573a"}),"\n, \u53ef\u4ee5\u641c\u7d22\u5230\u4ed6\u4eba\u63d0\u4ea4\u7684 actions"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240529222735.png",alt:"20240529222735"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6bcf\u4e2a action \u5c31\u662f\u4e00\u4e2a\u72ec\u7acb\u811a\u672c\uff0c\u56e0\u6b64\u53ef\u4ee5\u505a\u6210\u4ee3\u7801\u4ed3\u5e93\uff0c\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"userName/repoName"})," \u7684\u8bed\u6cd5\u5f15\u7528 action\u3002\u6bd4\u5982\uff0c",(0,s.jsx)(e.code,{children:"actions/setup-node"})," \u5c31\u8868\u793a ",(0,s.jsx)(e.code,{children:"github.com/actions/setup-node"})," \u8fd9\u4e2a\u4ed3\u5e93\uff0c\u5b83\u4ee3\u8868\u4e00\u4e2a action\uff0c\u4f5c\u7528\u662f\u5b89\u88c5 Node.js\u3002\u4e8b\u5b9e\u4e0a\uff0cGitHub \u5b98\u65b9\u7684 actions \u90fd\u653e\u5728 ",(0,s.jsx)(e.a,{href:"https://github.com/actions",children:"github.com/actions"})," \u91cc\u9762\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u65e2\u7136 actions \u662f\u4ee3\u7801\u4ed3\u5e93\uff0c\u5f53\u7136\u5c31\u6709\u7248\u672c\u7684\u6982\u5ff5\uff0c\u7528\u6237\u53ef\u4ee5\u5f15\u7528\u67d0\u4e2a\u5177\u4f53\u7248\u672c\u7684 action\u3002\u4e0b\u9762\u90fd\u662f\u5408\u6cd5\u7684 action \u5f15\u7528\uff0c\u7528\u7684\u5c31\u662f Git \u7684\u6307\u9488\u6982\u5ff5\uff0c\u8be6\u89c1",(0,s.jsx)(e.a,{href:"https://docs.github.com/en/actions/creating-actions/about-custom-actions#versioning-your-action",children:"\u5b98\u65b9\u6587\u6863"}),"\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-txt",children:"actions/setup-node@74bc508 # \u6307\u5411\u4e00\u4e2a commit\nactions/setup-node@v1.0    # \u6307\u5411\u4e00\u4e2a\u6807\u7b7e\nactions/setup-node@master  # \u6307\u5411\u4e00\u4e2a\u5206\u652f\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c\u60f3\u8981\u5f15\u7528\u4ed6\u4eba\u7684 action, \u9700\u8981\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"uses"})," \u53c2\u6570\u8fdb\u884c\u914d\u7f6e, \u540c\u65f6\u53ef\u4ee5\u770b\u5230\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\u6709\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"with"})," \u53c2\u6570, \u8fd9\u662f\u5bf9\u5e94\u7684 action \u914d\u7f6e\u53c2\u6570"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0b\u9762\u662f\u6211\u7684 Blog \u7684 action \u914d\u7f6e\u6587\u4ef6, \u5c24\u5176\u5173\u6ce8\u5176\u4e2d\u7684 ",(0,s.jsx)(e.code,{children:"uses"})," \u548c ",(0,s.jsx)(e.code,{children:"with"})," \u53c2\u6570\u5373\u53ef"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:"name: Deploy Arden Github pages\non:\n  push:\n    branches:\n      - main\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n    - name: Checkout\n      uses: actions/checkout@main\n      with:\n        persist-credentials: false\n    - name: Install and Build\n      run: |\n        npm install\n        npm run-script build \n    - name: Deploy\n      uses: JamesIves/github-pages-deploy-action@releases/v3\n      with:\n        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}\n        BRANCH: gh-branch\n        FOLDER: build\n        BUILD_SCRIPT: npm install && npm run build\n"})}),"\n",(0,s.jsxs)(e.admonition,{title:"secrets \u4ecb\u7ecd",type:"tip",children:[(0,s.jsxs)(e.p,{children:["secrets \u8868\u660e\u8be5\u503c\u662f\u4ece ",(0,s.jsx)(e.code,{children:"Repository secrets"})," \u4e2d\u83b7\u53d6\u7684, \u9700\u8981\u81ea\u884c\u914d\u7f6e, \u6bd4\u5982\u6211\u7684\u5982\u4e0b\u6240\u793a"]}),(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240529224131.png",alt:"20240529224131"})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",children:"GitHub Actions \u5165\u95e8\u6559\u7a0b"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://imroc.cc/note/github/action/docker-ci",children:"\u81ea\u52a8\u6784\u5efa\u5e76 Push Docker \u955c\u50cf"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://imroc.cc/note/github/action/chart-releaser",children:"\u81ea\u52a8\u53d1\u5e03 Chart \u5e76\u6258\u7ba1\u5230 Github Pages"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>l});var s=i(6540);const o={},t=s.createContext(o);function c(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);