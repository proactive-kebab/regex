"use strict";(("undefined"!=typeof self?self:this).webpackChunkregex101=("undefined"!=typeof self?self:this).webpackChunkregex101||[]).push([[781],{90372:(s,e,t)=>{t.r(e),t.d(e,{default:()=>y});var r=t(98152),l=t(93942),i=t(29009),n=t(93246),a=t(14195),o=t(3023),c=t(75358),u=t(99307),d=t(80968),h=t(43815),x=t(14850),b=t(424),f=t(53808),j=t(63101),v=t(23543),p=t(99237);const g="XaFD3";var k=t(85893);const m=({stats:s,payload:e,label:t,bestSolution:r})=>{if(null==(null==e?void 0:e[0]))return null;const l=s.find((s=>s.score===t));return t===r?(0,k.jsx)(j.vV,{text:"{1} user(s) (including you) have a score of {2}, better than {3}% of submissions",ph1:(0,k.jsx)("strong",{children:(null==l?void 0:l.totalUsers)||0}),ph2:(0,k.jsx)("strong",{children:t}),ph3:(0,k.jsx)("strong",{children:(null==l?void 0:l.betterThan)||0}),className:g}):(0,k.jsx)(j.vV,{text:"{1} user(s) have a score of {2}, better than {3}% of submissions",ph1:(0,k.jsx)("strong",{children:(null==l?void 0:l.totalUsers)||0}),ph2:(0,k.jsx)("strong",{children:t}),ph3:(0,k.jsx)("strong",{children:(null==l?void 0:l.betterThan)||0}),className:g})},y=({taskIdx:s,bestSolution:e,taskNumber:t})=>{const g=(0,l.v9)((e=>{var t;return null===(t=e.quiz.allTasks[s-1])||void 0===t?void 0:t.stats}))||null,y=(0,b.$5)("getQuizTaskStatistics"),z=(0,r.Z)(y,3),S=z[0],q=z[1],R=z[2];if((0,b.DB)((()=>{null==g&&R((0,x.sk)(s-1,t))}),[g,s,t]),(0,b.vI)((()=>{R((0,x.sk)(s-1,t))}),[e,s,t]),S)return(0,k.jsx)(j.$j,{size:v.J7.TC,className:"vxOH6"});if(q)return(0,k.jsx)(j.qX,{type:v.gr.pn,className:"bRnPi",children:(0,f.Z)("Unable to fetch detailed task statistics. Please try again later.")});if(!g)return null;const N=(0,p.R)("--quiz-grid-color"),U=(0,p.R)("--quiz-dashed-grid-color"),T=(0,p.R)("--quiz-bar-color"),Z=(0,p.R)("--quiz-my-bar-color");return(0,k.jsx)("div",{className:"AbcRc",children:(0,k.jsx)(i.h,{debounce:300,children:(0,k.jsxs)(n.v,{data:g,maxBarSize:20,children:[(0,k.jsx)(a.q,{strokeDasharray:"3 3",stroke:U}),(0,k.jsx)(o.K,{dataKey:"score",label:{value:(0,f.Z)("RegEx Score (lower is better)"),position:"insideBottom",fill:U,offset:0,height:50},stroke:N}),(0,k.jsx)(c.B,{dataKey:"totalUsersPercent",label:{value:(0,f.Z)("User distribution (%)"),angle:270,position:"insideLeft",fill:U,style:{textAnchor:"middle"}},stroke:N,width:40}),(0,k.jsx)(u.u,{content:(0,k.jsx)(m,{stats:g,bestSolution:e}),cursor:{fill:"black",fillOpacity:.2}}),(0,k.jsx)(d.$,{dataKey:"totalUsersPercent",name:(0,f.Z)("Quiz Submission Score"),children:g.map((s=>{const t=s.score===e?Z:T;return(0,k.jsx)(h.b,{fill:t},`bar-score-${s.score}`)}))})]})})})}}}]);