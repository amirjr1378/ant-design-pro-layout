(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"3keo":function(e,t,a){"use strict";a.r(t);a("FMmA");var n=a("laim"),c=(a("JP+d"),a("5uwi")),l=a("Uu5e"),m=a("ZZRV"),o=a.n(m),r=a("2YZa"),d=[{path:"/",name:"welcome",children:[{path:"/welcome",name:"one",children:[{path:"/welcome/welcome",name:"two",exact:!0}]}]},{path:"/demo",name:"demo"}];t["default"]=()=>{var e=Object(m["useState"])([]),t=Object(l["a"])(e,2),a=t[0],i=t[1],u=Object(m["useState"])(!0),p=Object(l["a"])(u,2),s=p[0],w=p[1],b=Object(m["useState"])(0),h=Object(l["a"])(b,2),j=h[0],E=h[1];return Object(m["useEffect"])(()=>{i([]),w(!0),setTimeout(()=>{i(d),w(!1)},2e3)},[j]),o.a.createElement(o.a.Fragment,null,o.a.createElement(c["a"],{onClick:()=>E(j+1),style:{margin:8}},"\u91cd\u65b0\u52a0\u8f7d"),o.a.createElement(r["e"],{style:{height:400,border:"1px solid #ddd"},menuContentRender:(e,t)=>s?o.a.createElement("div",{style:{padding:"24px 0"}},o.a.createElement(n["a"],{tip:"\u83dc\u5355\u52a0\u8f7d\u4e2d"},t)):t,location:{pathname:"/welcome"},menuDataRender:()=>a},o.a.createElement(r["b"],{content:"\u6b22\u8fce\u4f7f\u7528"},"Hello World")))}}}]);