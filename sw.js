if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,r,c)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=c(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-52b7736b"],(function(e){"use strict";e.enable(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/static/2.eaf6de0793736dacbd35.css",revision:null},{url:"/static/4.a0700f24d468995b2fe3.css",revision:null},{url:"/static/5.f54d7590525868984eae.css",revision:null},{url:"/static/6.7a3b1a222bf2af53af27.css",revision:null},{url:"/static/assets/.DS_Store",revision:"e0ec5e75c41dd4feb6e7190470cd9e27"},{url:"/static/bundle.40a894d9d913248ad458.js",revision:null},{url:"/static/bundle.7dba038d486a1374f5ad.css",revision:null},{url:"/static/codeSample.a8b6dab7bdd091e1f336.chunk.js",revision:null},{url:"/static/generic.worker.3d8b6f03f23dd77c0ca6.js",revision:null},{url:"/static/golang.js",revision:"4e617463decd26e315cc06f16e37b186"},{url:"/static/golang.worker.664a654deddcb366559b.js",revision:null},{url:"/static/java.worker.0b23551f802cc06ef920.js",revision:null},{url:"/static/java.worker.3a63e7a687e08c8869b8.js",revision:null},{url:"/static/java8.js",revision:"69cbd2f719031cbeb7315b206e93781c"},{url:"/static/javascript.worker.725239b60bcf8e714e79.js",revision:null},{url:"/static/javascript.worker.da3cde5e307038319d54.js",revision:null},{url:"/static/markdownContainer.14a5a64196ec6fa9f35a.chunk.js",revision:null},{url:"/static/pcre.worker.61304fdf0e30279e7dfb.js",revision:null},{url:"/static/pcre2.worker.332163554f8f1f863a9f.js",revision:null},{url:"/static/pcre2.worker.5295d38ab413ae13214b.js",revision:null},{url:"/static/pcre2lib.js",revision:"49463b7468fbac539b30ecca1aa0d520"},{url:"/static/pcre2lib.wasm",revision:"386a10a4d19026a43ca951581d9568b1"},{url:"/static/pcrelib.js",revision:"157f618b0aaeb74cbc883736e3188a27"},{url:"/static/pcrelib.wasm",revision:"ffa71f804dcbb9473efaff6427c940e7"},{url:"/static/polyfills.a894b4edbf44d97f4cde.chunk.js",revision:null},{url:"/static/quickref.23d4c191325571d73612.chunk.js",revision:null},{url:"/static/quizStats.b8ab1b959fe9ed807abe.chunk.js",revision:null},{url:"/static/regexDebugger.d5c120202fdc5cd73532.chunk.js",revision:null},{url:"/static/vendors-bundle.d7344bc686df8d11ede6.chunk.js",revision:null},{url:"/static/vendors-codeSample.a834534dd0fa3790354d.chunk.js",revision:null},{url:"/static/vendors-markdownContainer.acf6beafad4bddd93269.chunk.js",revision:null},{url:"/static/vendors-polyfills.221fc8e46ddcbf1dea33.chunk.js",revision:null},{url:"/static/vendors-quickref.feefd9b382eea69bbd65.chunk.js",revision:null},{url:"/static/vendors-quizStats.8808b32cc317fead7adc.chunk.js",revision:null},{url:"/static/vendors-regexDebugger.f496654486ebff7527e8.chunk.js",revision:null},{url:"/static/vendors-sentry.cdc7a0086c242cde31e6.chunk.js",revision:null}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/\.(?:png|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[]}),"GET"),e.registerRoute(/\.json$/,new e.CacheFirst({cacheName:"jsonFiles",plugins:[]}),"GET"),e.registerRoute(/fonts\.(?:googleapi|gstatic)\.com/,new e.CacheFirst({cacheName:"fonts",plugins:[]}),"GET"),e.registerRoute(/\/api\/|buysellads/,new e.NetworkOnly,"GET"),e.registerRoute(/.*/,new e.NetworkFirst({cacheName:"html",plugins:[]}),"GET")}));