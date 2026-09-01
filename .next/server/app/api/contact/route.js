"use strict";(()=>{var e={};e.id=386,e.ids=[386],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8370:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>m,patchFetch:()=>N,requestAsyncStorage:()=>p,routeModule:()=>c,serverHooks:()=>d,staticGenerationAsyncStorage:()=>l});var o={};r.r(o),r.d(o,{POST:()=>u});var a=r(9303),n=r(8716),i=r(670),s=r(7070);async function u(e){try{let{name:t,brand:o,email:a,phone:n,brief:i,needs:u,website:c}=await e.json();if(c)return s.NextResponse.json({ok:!0});if(!t||!a||!i)return s.NextResponse.json({error:"Name, email, and brief are required."},{status:400});let p=Array.isArray(u)?u.join(", "):u||"Not specified",l=process.env.RESEND_API_KEY;if(l){let{Resend:e}=await r.e(591).then(r.bind(r,2591)),s=new e(l);await s.emails.send({from:"Niko Labs <hello@nikocreativelabs.com>",to:["hello@nikocreativelabs.com"],replyTo:a,subject:`New brief — ${t} — ${o||"No brand"} — ${p}`,text:`New project inquiry — Niko Creative Labs

Name: ${t}
Brand/Film: ${o||"-"}
Email: ${a}
Phone: ${n||"-"}
Needs: ${p}

Brief:
${i}

---
Reply to: ${a} | Call: ${n||"-"}
`})}else console.log("[NIKO CONTACT]",{name:t,brand:o,email:a,phone:n,needs:p,brief:i});return s.NextResponse.json({ok:!0})}catch(e){return console.error(e),s.NextResponse.json({error:e.message||"Failed"},{status:500})}}let c=new a.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/contact/route",pathname:"/api/contact",filename:"route",bundlePath:"app/api/contact/route"},resolvedPagePath:"/home/ubuntu/nikocreativelabs/niko-creative-labs/src/app/api/contact/route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:p,staticGenerationAsyncStorage:l,serverHooks:d}=c,m="/api/contact/route";function N(){return(0,i.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:l})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[948,972],()=>r(8370));module.exports=o})();