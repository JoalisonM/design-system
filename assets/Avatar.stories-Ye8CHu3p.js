import{j as r}from"./polished.esm-DNUF9YvO.js";import{A as s,o as E,t as S,a as z}from"./theme-DorejDH4.js";import{r as c}from"./index-DhXULflY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BBFzS1Xs.js";/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),M=(...a)=>a.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=c.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:p="",children:o,iconNode:J,...w},I)=>c.createElement("svg",{ref:I,...L,width:e,height:e,stroke:a,strokeWidth:n?Number(t)*24/Number(e):t,className:M("lucide",p),...w},[...J.map(([W,C])=>c.createElement(W,C)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=(a,e)=>{const t=c.forwardRef(({className:n,...p},o)=>c.createElement(R,{ref:o,iconNode:e,className:M(`lucide-${_(a)}`,n),...p}));return t.displayName=`${a}`,t};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],N=$("User",B),K={title:"Data Display/Avatar",component:s.Root,args:{src:"https://github.com/JoalisonM.png",size:12},argTypes:{size:{type:"string",description:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 12 | 16 | 20 | 40 | 64 | 80",options:["1","2","3","4","5","6","7","8","10","12","16","20","40","64","80"],control:{type:"select"}}},decorators:[a=>r.jsx(E,{theme:S,children:r.jsx(z,{children:a()})})]},i={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(s.Image,{src:"https://github.com/JoalisonM.png"}),r.jsx(s.Fallback,{children:"JM"})]})}},l={args:{size:16,children:r.jsxs(r.Fragment,{children:[r.jsx(s.Image,{src:"https://github.com/JoalisonM.png"}),r.jsx(s.Fallback,{children:"JM"})]})}},m={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(s.Image,{src:void 0}),r.jsx(s.Fallback,{children:r.jsx(N,{})})]})}},d={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(s.Image,{src:void 0}),r.jsx(s.Fallback,{children:"JM"})]})}};var g,h,u;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: <>
        <Avatar.Image src='https://github.com/JoalisonM.png' />
        <Avatar.Fallback>
          JM
        </Avatar.Fallback>
      </>
  }
}`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var b,v,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 16,
    children: <>
        <Avatar.Image src='https://github.com/JoalisonM.png' />
        <Avatar.Fallback>
          JM
        </Avatar.Fallback>
      </>
  }
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var k,A,F;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: <>
        <Avatar.Image src={undefined} />
        <Avatar.Fallback>
          <User />
        </Avatar.Fallback>
      </>
  }
}`,...(F=(A=m.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var j,f,y;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: <>
        <Avatar.Image src={undefined} />
        <Avatar.Fallback>
          JM
        </Avatar.Fallback>
      </>
  }
}`,...(y=(f=d.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const T=["Primary","Size","WithAvatarFallback","WithWordFallback"];export{i as Primary,l as Size,m as WithAvatarFallback,d as WithWordFallback,T as __namedExportsOrder,K as default};
