import{c as l}from"./D5FW1E9F.js";import{r as a}from"#entry";/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=l("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),f=()=>{const r=a(!1),t=a(null);return{run:async(s,o)=>{r.value=!0,t.value=null;try{const e=typeof o=="object"?JSON.stringify(o):o;return(await $fetch("https://chatgpt-proxy.guillermoantoniomedel.workers.dev",{method:"POST",body:{command:s,data:e}})).result}catch(e){throw t.value=e?.data?.error||"Request failed",e}finally{r.value=!1}},loading:r,error:t}};export{d as L,f as u};
