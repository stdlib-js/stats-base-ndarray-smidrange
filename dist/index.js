"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var t=s(function(l,a){
var v=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-stride/dist'),d=require('@stdlib/ndarray-base-offset/dist'),m=require('@stdlib/ndarray-base-data-buffer/dist'),o=require('@stdlib/stats-strided-smidrange/dist').ndarray;function g(e){var r=e[0];return o(v(r,0),m(r),q(r,0),d(r))}a.exports=g
});var f=require("path").join,c=require('@stdlib/utils-try-require/dist'),j=require('@stdlib/assert-is-error/dist'),p=t(),i,u=c(f(__dirname,"./native.js"));j(u)?i=p:i=u;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
