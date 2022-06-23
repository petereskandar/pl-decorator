const SINGLETON_KEY=Symbol(),Singleton=r=>new Proxy(r,{construct(e,t,n){return console.info(`%c PL-decorator Singleton -  Class: ${r.name} is in singleton mode...`,"color: blue "),e.prototype!==n.prototype?Reflect.construct(e,t,n):(e[SINGLETON_KEY]||(e[SINGLETON_KEY]=Reflect.construct(e,t,n)),e[SINGLETON_KEY])}}),TryCatch=o=>(e,n,t)=>{let r=t.value;return t.value=function(...e){try{return r.apply(this,e)}catch(e){let t=new o;t.handleError(e,n)}},t},moment$3=require("moment"),Log=(c="log")=>(t,n,e)=>{const r=e=>{console[c]("%c"+[moment$3().format("HH:mm:ss"),...e].join(""),"color: white; background:darkslateblue")};let o=e.value;return e.value=function(...e){r(["- Called method START: ",t.constructor.name," => ",n,"( ",JSON.stringify(e)," )"].join(""));e=o.apply(this,e);return r([" - Called method END: ",t.constructor.name," => ",n," return: ",null==e?"-NO RESULT-":JSON.stringify(e)].join("")),e},e},moment$2=require("moment"),FormatDate=(r="DD/MM/yyyy HH:mm:ss",o="it")=>(e,t)=>{let n=e[t];moment$2.locale(o),Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:()=>{try{return moment$2(n).format(r)}catch(e){return e}},set:e=>{try{n=moment$2(e)}catch(e){n=moment$2()}}})};function __decorate(e,t,n,r){var o,c=arguments.length,l=c<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;0<=a;a--)(o=e[a])&&(l=(c<3?o(l):3<c?o(t,n,l):o(t,n))||l);return 3<c&&l&&Object.defineProperty(t,n,l),l}const moment$1=require("moment");let Utils=class{constructor(){this.log=(e,t="log")=>{console[t]("%c"+[moment$1().format("HH:mm:ss"),...e].join(" "),"color: blue")}}};Utils=__decorate([Singleton],Utils);const{interval,take}=require("rxjs"),Delay=(s=0)=>(o,c,e)=>{let l=e.value,a=new Utils;return a.log([" - Delay - Class; ",o.constructor.name,"Method:",c,"REGISTERED"].join("")),e.value=function(...r){return new Promise((t,n)=>{interval(s).pipe(take(1)).toPromise().then(e=>{t(l&&l.apply(this,r)),a.log([" - Delay - Class; ",o.constructor.name,"Method:",c,"EXCUTED"].join(""))}).catch(e=>{n(e)})})},e};var FORMAT_NUMBER;!function(e){e.EN="en-EN",e.DE="de-DE",e.AF="af-AF",e.AM="am-AM",e.AR="ar-AR",e.BN="bn-BN",e.BG="bg-BG",e.CA="ca-CA",e.CS="cs-CS",e.NL="nl-NL",e.ET="et-ET",e.FR="fr-FR",e.HE="he-HE",e.HI="hi-HI",e.IT="it-IT",e.NB="nb-NB",e.MS="ms-MS",e.ID="id-ID",e.PL="pl-PL"}(FORMAT_NUMBER=FORMAT_NUMBER||{});const FormatNumber=(o=FORMAT_NUMBER.IT,c)=>(e,t)=>{let n=e[t],r=new Intl.NumberFormat(o,c);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:()=>{try{if(r)return r.format(n)}catch(e){return e}},set:e=>{try{n=e}catch(e){n=0}}})},Unsubscribe=(o=[])=>n=>{const r=n.prototype.ngOnDestroy;n.prototype.ngOnDestroy=function(){for(var t in this){const e=this[t];if(!o.includes(t)&&e&&"function"==typeof e.unsubscribe)try{console.info(`%c PLUnsubscribe -  Class:   ${n.name} unsubscriber: ${t} `,"color: green "),e.unsubscribe()}catch(e){console.error(`%c PLUnsubscribe -  Class:  ${n.name}  unsubscriber: ${t} ERROR: `,"color: red ",e||"")}console.info(`%c PLUnsubscribe -  Class:   ${n.name} unsubscriber IGNORED: ${t} `,"color: blue ")}r&&r.apply(this)}},moment=require("moment");let DependencyManager=class{constructor(){this.deps={}}set(e,t){e in this.deps||(this.deps[e]=t)}get(e){return e in this.deps?this.deps[e]:null}};DependencyManager=__decorate([Singleton],DependencyManager);const manager=new DependencyManager,colorTrace=e=>{console.log("%c"+[moment().format("HH:mm:ss"),...e].join(" "),"color: red; ")},Inject=o=>(e,t)=>{let n=o.name,r=e.constructor.name;Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:()=>{let e=manager.get(n);if(e&&e.injectable)return e.singleton=!0,e;throw colorTrace([` ${n} is not injectable, delete @Inject(${n}) on attribure ${t} in `+r].join("")),new Error(`### ${n} is not injectable ###`)}})},Injectable=r=>{var e=new r;return Object.defineProperty(e,"instanceID",{value:Symbol(),writable:!1}),Object.defineProperty(e,"injectable",{value:!0,writable:!1}),null==manager.get(r.prototype.constructor.name)&&manager.set(r.prototype.constructor.name,e),new Proxy(r,{construct(e,t,n){return e.prototype!==n.prototype?Reflect.construct(e,t,n):(r&&1==r.prototype.injectable&&1==r.prototype.singleton?e=manager.get(r.prototype.constructor.name):(e=Reflect.construct(e,t,n),Object.defineProperty(e,"instanceID",{value:Symbol(),writable:!1}),Object.defineProperty(e,"injectable",{value:!1,writable:!1})),e)}})};export{Delay,FORMAT_NUMBER,FormatDate,FormatNumber,Inject,Injectable,Log,Singleton,TryCatch,Unsubscribe};