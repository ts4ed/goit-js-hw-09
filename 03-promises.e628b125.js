var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("iQIUW");const u={delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),form:document.querySelector(".form")};u.delay.addEventListener("input",f),u.step.addEventListener("input",f),u.amount.addEventListener("input",f),u.form.addEventListener("submit",(function(e){e.preventDefault();const t=setInterval((()=>{if(!1===i&&(l=d+l),function(e,t){const n=Math.random()>.3;setTimeout((()=>{n?o.Notify.success(`Fulfilled promise ${e} in ${t}ms`):o.Notify.failure(`Rejected promise ${e} in ${t}ms`)}),t)}(a+1,l),i=!1,a+=1,a===s)return clearInterval(t),a=0,i=!0,void(l=0)}))}));let i=!0,a=0,l=0,d=0,s=0;function f(){l=Number(u.delay.value),d=Number(u.step.value),s=Number(u.amount.value)}
//# sourceMappingURL=03-promises.e628b125.js.map
