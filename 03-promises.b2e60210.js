var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var l=o("iQIUW");const r={labelRefs:document.querySelectorAll("label"),inputRefs:document.querySelectorAll("input"),btnRef:document.querySelector("button"),formRef:document.querySelector("form")};let i={};function s(e,t){const n=Math.random()>.3;return new Promise(((o,l)=>{setTimeout((()=>{n?o({position:e,delay:t}):l({position:e,delay:t})}),t)}))}function u({position:e,delay:t}){l.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)}function a({position:e,delay:t}){l.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}!function(e){const t=e.labelRefs;Array.from(t).map((e=>{e.style.display="inline-flex",e.style.flexDirection="column",e.style.marginRight="10px"}));const n=e.inputRefs;Array.from(n).map((e=>{e.style.padding="5px"})),e.btnRef.style.padding="10px",e.formRef.style.display="flex",e.formRef.style.alignItems="end"}(r),r.formRef.addEventListener("submit",(function(e){e.preventDefault(),r.btnRef.setAttribute("disabled","disabled");const{delay:t,amount:n,step:o}=i;for(let e=0;e<n;e+=1){console.log(e);s(e+1,o*e+t).then(u).catch(a)}})),r.formRef.addEventListener("input",(function(e){i.delay=Number(e.currentTarget.elements.delay.value),i.step=Number(e.currentTarget.elements.step.value),i.amount=Number(e.currentTarget.elements.amount.value),r.btnRef.removeAttribute("disabled")}));
//# sourceMappingURL=03-promises.b2e60210.js.map