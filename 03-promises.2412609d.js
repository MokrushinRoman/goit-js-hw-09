!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("h6c0i");var i={labelRefs:document.querySelectorAll("label"),inputRefs:document.querySelectorAll("input"),btnRef:document.querySelector("button"),formRef:document.querySelector("form")},l={};function a(e,t){var n=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}function u(e){var t=e.position,n=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))}function f(e){var t=e.position,n=e.delay;r.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}!function(e){var t=e.labelRefs;Array.from(t).map((function(e){e.style.display="inline-flex",e.style.flexDirection="column",e.style.marginRight="10px"}));var n=e.inputRefs;Array.from(n).map((function(e){e.style.padding="5px"})),e.btnRef.style.padding="10px",e.formRef.style.display="flex",e.formRef.style.alignItems="end"}(i),i.formRef.addEventListener("submit",(function(e){e.preventDefault(),i.btnRef.setAttribute("disabled","disabled");for(var t=l.delay,n=l.amount,o=l.step,r=0;r<n;r+=1){console.log(r),a(r+1,o*r+t).then(u).catch(f)}})),i.formRef.addEventListener("input",(function(e){l.delay=Number(e.currentTarget.elements.delay.value),l.step=Number(e.currentTarget.elements.step.value),l.amount=Number(e.currentTarget.elements.amount.value),i.btnRef.removeAttribute("disabled")}))}();
//# sourceMappingURL=03-promises.2412609d.js.map