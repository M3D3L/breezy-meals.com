import{b as s}from"#entry";import{u as y}from"./ClVL_7T7.js";/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=s("image-off",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=s("upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),r="Images",t="field",f=5*1024*1024;function k(){const{createItem:c,getFileUrl:m,updateItem:u}=y();function o(e){if(!e.type.startsWith("image/"))throw new Error(`${e.name} no es una imagen valida`);if(e.size>f)throw new Error(`${e.name} supera el limite de 5 MB`)}function i(e){const a=m(e,e[t]);return/^https?:\/\//i.test(a)?a:new URL(a,window.location.origin).href}async function p(e){o(e);const a=new FormData;a.append(t,e);const n=await c(r,a);return i(n)}async function d(e,a){o(a);const n=new FormData;n.append(t,a,e[t]);const l=await u(r,e.id,n);return i(l)}return{collection:r,fileField:t,imageUrl:i,replaceImage:d,uploadImage:p,validateImage:o}}export{h as I,w as U,k as u};
