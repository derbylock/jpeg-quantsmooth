var b;b||(b=typeof Module !== 'undefined' ? Module : {});var k={},m;for(m in b)b.hasOwnProperty(m)&&(k[m]=b[m]);function n(a,c){throw c;}var p=!1,q=!1,r=!1,t=!1;p="object"===typeof window;q="function"===typeof importScripts;r="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;t=!p&&!r&&!q;var u="",x,z,A,B;
if(r)u=q?require("path").dirname(u)+"/":__dirname+"/",x=function(a,c){A||(A=require("fs"));B||(B=require("path"));a=B.normalize(a);return A.readFileSync(a,c?null:"utf8")},z=function(a){a=x(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||C("Assertion failed: undefined");return a},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),"undefined"!==typeof module&&(module.exports=b),process.on("uncaughtException",function(a){if(!(a instanceof D))throw a;}),process.on("unhandledRejection",
C),n=function(a){process.exit(a)},b.inspect=function(){return"[Emscripten Module object]"};else if(t)"undefined"!=typeof read&&(x=function(a){return read(a)}),z=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||C("Assertion failed: undefined");return a},"function"===typeof quit&&(n=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==
typeof printErr?printErr:print);else if(p||q)q?u=self.location.href:document.currentScript&&(u=document.currentScript.src),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",x=function(a){var c=new XMLHttpRequest;c.open("GET",a,!1);c.send(null);return c.responseText},q&&(z=function(a){var c=new XMLHttpRequest;c.open("GET",a,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)});var E=b.print||console.log.bind(console),F=b.printErr||console.warn.bind(console);
for(m in k)k.hasOwnProperty(m)&&(b[m]=k[m]);k=null;b.quit&&(n=b.quit);var G;b.wasmBinary&&(G=b.wasmBinary);var H;b.noExitRuntime&&(H=b.noExitRuntime);"object"!==typeof WebAssembly&&F("no native wasm support detected");var I,aa=new WebAssembly.Table({initial:80,maximum:80,element:"anyfunc"}),J=!1,K="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var buffer,L,M;
function N(a){buffer=a;b.HEAP8=new Int8Array(a);b.HEAP16=new Int16Array(a);b.HEAP32=M=new Int32Array(a);b.HEAPU8=L=new Uint8Array(a);b.HEAPU16=new Uint16Array(a);b.HEAPU32=new Uint32Array(a);b.HEAPF32=new Float32Array(a);b.HEAPF64=new Float64Array(a)}var ba=b.TOTAL_MEMORY||16777216;b.wasmMemory?I=b.wasmMemory:I=new WebAssembly.Memory({initial:ba/65536});I&&(buffer=I.buffer);ba=buffer.byteLength;N(buffer);M[2996]=5255024;
function O(a){for(;0<a.length;){var c=a.shift();if("function"==typeof c)c();else{var e=c.s;"number"===typeof e?void 0===c.o?b.dynCall_v(e):b.dynCall_vi(e,c.o):e(void 0===c.o?null:c.o)}}}var ca=[],da=[],ea=[],fa=[];function ha(){var a=b.preRun.shift();ca.unshift(a)}var ia=Math.ceil,na=Math.floor,U=0,V=null,W=null;b.preloadedImages={};b.preloadedAudios={};
function C(a){if(b.onAbort)b.onAbort(a);E(a);F(a);J=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function oa(){var a=X;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var X="quantsmooth.wasm";if(!oa()){var pa=X;X=b.locateFile?b.locateFile(pa,u):u+pa}
function qa(){try{if(G)return new Uint8Array(G);if(z)return z(X);throw"both async and sync fetching of the wasm failed";}catch(a){C(a)}}function ra(){return G||!p&&!q||"function"!==typeof fetch?new Promise(function(a){a(qa())}):fetch(X,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+X+"'";return a.arrayBuffer()}).catch(function(){return qa()})}da.push({s:function(){sa()}});
var ta=[null,[],[]],ua={e:function(a,c,e){L.set(L.subarray(c,c+e),a)},f:function(a){var c=L.length;if(2147418112<a)return!1;for(var e=1;4>=e;e*=2){var f=c*(1+.2/e);f=Math.min(f,a+100663296);f=Math.max(16777216,a,f);0<f%65536&&(f+=65536-f%65536);a:{try{I.grow(Math.min(2147418112,f)-buffer.byteLength+65535>>16);N(I.buffer);var d=1;break a}catch(g){}d=void 0}if(d)return!0}return!1},h:function(a){if(!H&&(J=!0,b.onExit))b.onExit(a);n(a,new D(a))},g:function(){return 0},d:function(){return 0},b:function(a,
c,e,f){try{for(var d=0,g=0;g<e;g++){for(var va=M[c+8*g>>2],ja=M[c+(8*g+4)>>2],P=0;P<ja;P++){var Q=L[va+P],R=ta[a];if(0===Q||10===Q){var wa=1===a?E:F;for(var v=R,l=0,w=l+NaN,y=l;v[y]&&!(y>=w);)++y;if(16<y-l&&v.subarray&&K)var ka=K.decode(v.subarray(l,y));else{for(w="";l<y;){var h=v[l++];if(h&128){var S=v[l++]&63;if(192==(h&224))w+=String.fromCharCode((h&31)<<6|S);else{var la=v[l++]&63;h=224==(h&240)?(h&15)<<12|S<<6|la:(h&7)<<18|S<<12|la<<6|v[l++]&63;if(65536>h)w+=String.fromCharCode(h);else{var ma=
h-65536;w+=String.fromCharCode(55296|ma>>10,56320|ma&1023)}}}else w+=String.fromCharCode(h)}ka=w}wa(ka);R.length=0}else R.push(Q)}d+=ja}M[f>>2]=d;return 0}catch(T){return"undefined"!==typeof FS&&T instanceof FS.u||C(T),T.v}},c:function(a){var c=Date.now();M[a>>2]=c/1E3|0;M[a+4>>2]=c%1E3*1E3|0;return 0},memory:I,a:function(a){a=+a;return 0<=a?+na(a+.5):+ia(a-.5)},table:aa},xa=function(){function a(d){b.asm=d.exports;U--;b.monitorRunDependencies&&b.monitorRunDependencies(U);0==U&&(null!==V&&(clearInterval(V),
V=null),W&&(d=W,W=null,d()))}function c(d){a(d.instance)}function e(d){return ra().then(function(g){return WebAssembly.instantiate(g,f)}).then(d,function(g){F("failed to asynchronously prepare wasm: "+g);C(g)})}var f={a:ua};U++;b.monitorRunDependencies&&b.monitorRunDependencies(U);if(b.instantiateWasm)try{return b.instantiateWasm(f,a)}catch(d){return F("Module.instantiateWasm callback failed with error: "+d),!1}(function(){if(G||"function"!==typeof WebAssembly.instantiateStreaming||oa()||"function"!==
typeof fetch)return e(c);fetch(X,{credentials:"same-origin"}).then(function(d){return WebAssembly.instantiateStreaming(d,f).then(c,function(g){F("wasm streaming compile failed: "+g);F("falling back to ArrayBuffer instantiation");e(c)})})})();return{}}();b.asm=xa;var sa=b.___wasm_call_ctors=function(){return(sa=b.___wasm_call_ctors=b.asm.i).apply(null,arguments)};b._web_process=function(){return(b._web_process=b.asm.j).apply(null,arguments)};
b._malloc=function(){return(b._malloc=b.asm.k).apply(null,arguments)};b._free=function(){return(b._free=b.asm.l).apply(null,arguments)};b.dynCall_vi=function(){return(b.dynCall_vi=b.asm.m).apply(null,arguments)};b.asm=xa;var Y;function D(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}W=function ya(){Y||Z();Y||(W=ya)};
function Z(){function a(){if(!Y&&(Y=!0,!J)){O(da);O(ea);if(b.onRuntimeInitialized)b.onRuntimeInitialized();if(b.postRun)for("function"==typeof b.postRun&&(b.postRun=[b.postRun]);b.postRun.length;){var c=b.postRun.shift();fa.unshift(c)}O(fa)}}if(!(0<U)){if(b.preRun)for("function"==typeof b.preRun&&(b.preRun=[b.preRun]);b.preRun.length;)ha();O(ca);0<U||(b.setStatus?(b.setStatus("Running..."),setTimeout(function(){setTimeout(function(){b.setStatus("")},1);a()},1)):a())}}b.run=Z;
if(b.preInit)for("function"==typeof b.preInit&&(b.preInit=[b.preInit]);0<b.preInit.length;)b.preInit.pop()();H=!0;Z();
