!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).bugsnag=e()}}(function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){return J((Math.random()*re<<0).toString(ne),te)}function r(){return ee=ee<re?ee:0,++ee-1}function i(){return"c"+(new Date).getTime().toString(ne)+J(r().toString(ne),te)+Q()+(n()+n())}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e){var t=[e.tagName];if(e.id&&t.push("#"+e.id),e.className&&e.className.length&&t.push("."+e.className.split(" ").join(".")),!document.querySelectorAll||!Array.prototype.indexOf)return t.join("");try{if(1===document.querySelectorAll(t.join("")).length)return t.join("")}catch(r){return t.join("")}if(e.parentNode.childNodes.length>1){var n=Array.prototype.indexOf.call(e.parentNode.childNodes,e)+1;t.push(":nth-child("+n+")")}return 1===document.querySelectorAll(t.join("")).length?t.join(""):e.parentNode?s(e.parentNode)+" > "+t.join(""):t.join("")}function u(e,t){return e&&e.length<=t?e:e.slice(0,t-"(...)".length)+"(...)"}function c(){if(!tt(rt(),this[Qe])){var e={status:this.status,request:this[et]+" "+this[Qe]};this.status>=400?nt.leaveBreadcrumb("XMLHttpRequest failed",e,Ze):nt.leaveBreadcrumb("XMLHttpRequest succeeded",e,Ze)}}function f(){tt(rt(),this[Qe])||nt.leaveBreadcrumb("XMLHttpRequest error",{request:this[et]+" "+this[Qe]},Ze)}function d(e){return"[Throws: "+(e?e.message:"?")+"]"}function l(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return!0;return!1}function g(e){return"[object Array]"===Object.prototype.toString.call(e)}function p(e,t){try{return e[t]}catch(n){return d(n)}}function h(e){function t(e,i){function o(){return i>xt&&r>Dt}if(r++,i===undefined&&(i=0),i>Bt)return Lt;if(o())return Lt;if(null===e||"object"!=typeof e)return e;if(l(n,e))return"[Circular]";if(n.push(e),"function"==typeof e.toJSON)try{r--;var a=t(e.toJSON(),i);return n.pop(),a}catch(m){return d(m)}if(g(e)){for(var s=[],u=0,c=e.length;u<c;u++){if(o()){s.push(Lt);break}s.push(t(e[u],i+1))}return n.pop(),s}var f={};try{for(var h in e)if(Object.prototype.hasOwnProperty.call(e,h)){if(o()){f[h]=Lt;break}f[h]=t(p(e,h),i+1)}}catch(v){}return n.pop(),f}var n=[],r=0;return t(e)}var m=function(e,t,n){for(var r=n,i=0,o=e.length;i<o;i++)r=t(r,e[i],i,e);return r},v=!{toString:null}.propertyIsEnumerable("toString"),y=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],b=function(e){return e<10?"0"+e:e},w={map:function(e,t){return m(e,function(e,n,r,i){return e.concat(t(n,r,i))},[])},reduce:m,filter:function(e,t){return m(e,function(e,n,r,i){return t(n,r,i)?e.concat(n):e},[])},includes:function(e,t){return m(e,function(e,n,r,i){return!0===e||n===t},!1)},keys:function(e){var t=[],n=void 0;for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);if(!v)return t;for(var r=0,i=y.length;r<i;r++)Object.prototype.hasOwnProperty.call(e,y[r])&&t.push(y[r]);return t},isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},isoDate:function(){var e=new Date;return e.getUTCFullYear()+"-"+b(e.getUTCMonth()+1)+"-"+b(e.getUTCDate())+"T"+b(e.getUTCHours())+":"+b(e.getUTCMinutes())+":"+b(e.getUTCSeconds())+"."+(e.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"}},S=w.isoDate,O=function(){function t(){var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"[anonymous]",r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"manual",o=arguments.length>3&&arguments[3]!==undefined?arguments[3]:S();e(this,t),this.type=i,this.name=n,this.metaData=r,this.timestamp=o}return t.prototype.toJSON=function(){return{type:this.type,name:this.name,timestamp:this.timestamp,metaData:this.metaData}},t}(),j={},E=w.includes;j.positiveIntIfDefined=function(e){return E(["undefined","number"],typeof e)&&parseInt(""+e,10)===e&&e>0},j.stringWithLength=function(e){return"string"==typeof e&&!!e.length};var N={},R=w.filter,k=w.reduce,B=w.keys,D=w.isArray,x=w.includes,L=j.positiveIntIfDefined,_=j.stringWithLength;N.schema={apiKey:{defaultValue:function(){return null},message:"is required",validate:_},appVersion:{defaultValue:function(){return null},message:"should be a string",validate:function(e){return null===e||_(e)}},autoNotify:{defaultValue:function(){return!0},message:"should be true|false",validate:function(e){return!0===e||!1===e}},beforeSend:{defaultValue:function(){return[]},message:"should be a function or array of functions",validate:function(e){return"function"==typeof e||D(e)&&R(e,function(e){return"function"==typeof e}).length===e.length}},endpoints:{defaultValue:function(){return{notify:"https://notify.bugsnag.com",sessions:"https://sessions.bugsnag.com"}},message:"should be an object containing endpoint URLs { notify, sessions }. sessions is optional if autoCaptureSessions=false",validate:function(e,t){return e&&"object"==typeof e&&_(e.notify)&&(!1===t.autoCaptureSessions||_(e.sessions))&&0===R(B(e),function(e){return!x(["notify","sessions"],e)}).length}},autoCaptureSessions:{defaultValue:function(e,t){return t.endpoints===undefined||!!t.endpoints&&!!t.endpoints.sessions},message:"should be true|false",validate:function(e){return!0===e||!1===e}},notifyReleaseStages:{defaultValue:function(){return null},message:"should be an array of strings",validate:function(e){return null===e||D(e)&&R(e,function(e){return"string"==typeof e}).length===e.length}},releaseStage:{defaultValue:function(){return"production"},message:"should be a string",validate:function(e){return"string"==typeof e&&e.length}},maxBreadcrumbs:{defaultValue:function(){return 20},message:"should be a number ≤40",validate:function(e){return 0===e||L(e)&&(e===undefined||e<=40)}},autoBreadcrumbs:{defaultValue:function(){return!0},message:"should be true|false",validate:function(e){return"boolean"==typeof e}},user:{defaultValue:function(){return null},message:"(object) user should be an object",validate:function(e){return"object"==typeof e}},metaData:{defaultValue:function(){return null},message:"should be an object",validate:function(e){return"object"==typeof e}},logger:{defaultValue:function(){return undefined},message:"should be null or an object with methods { debug, info, warn, error }",validate:function(e){return!e||e&&k(["debug","info","warn","error"],function(t,n){return t&&"function"==typeof e[n]},!0)}}},N.mergeDefaults=function(e,t){if(!e||!t)throw new Error("opts and schema objects are required");return k(B(t),function(n,r){return n[r]=e[r]!==undefined?e[r]:t[r].defaultValue(e[r],e),n},{})},N.validate=function(e,t){if(!e||!t)throw new Error("opts and schema objects are required");var n=k(B(t),function(n,r){return t[r].validate(e[r],e)?n:n.concat({key:r,message:t[r].message,value:e[r]})},[]);return{valid:!n.length,errors:n}};var C=function(e){return e.app&&"string"==typeof e.app.releaseStage?e.app.releaseStage:e.config.releaseStage},q=function(e){return!(!e||!e.stack&&!e.stacktrace&&!e["opera#sourceloc"]||"string"!=typeof(e.stack||e.stacktrace||e["opera#sourceloc"])||e.stack===e.name+": "+e.message)},T={};!function(e,t){"use strict";"object"==typeof T?T=t():e.StackFrame=t()}(this,function(){"use strict";function e(e){return!isNaN(parseFloat(e))&&isFinite(e)}function t(e){return e.charAt(0).toUpperCase()+e.substring(1)}function n(e){return function(){return this[e]}}function r(e){if(e instanceof Object)for(var n=0;n<u.length;n++)e.hasOwnProperty(u[n])&&e[u[n]]!==undefined&&this["set"+t(u[n])](e[u[n]])}var i=["isConstructor","isEval","isNative","isToplevel"],o=["columnNumber","lineNumber"],a=["fileName","functionName","source"],s=["args"],u=i.concat(o,a,s);r.prototype={getArgs:function(){return this.args},setArgs:function(e){if("[object Array]"!==Object.prototype.toString.call(e))throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof r)this.evalOrigin=e;else{if(!(e instanceof Object))throw new TypeError("Eval Origin must be an Object or StackFrame");this.evalOrigin=new r(e)}},toString:function(){return(this.getFunctionName()||"{anonymous}")+("("+(this.getArgs()||[]).join(",")+")")+(this.getFileName()?"@"+this.getFileName():"")+(e(this.getLineNumber())?":"+this.getLineNumber():"")+(e(this.getColumnNumber())?":"+this.getColumnNumber():"")}};for(var c=0;c<i.length;c++)r.prototype["get"+t(i[c])]=n(i[c]),r.prototype["set"+t(i[c])]=function(e){return function(t){this[e]=Boolean(t)}}(i[c]);for(var f=0;f<o.length;f++)r.prototype["get"+t(o[f])]=n(o[f]),r.prototype["set"+t(o[f])]=function(t){return function(n){if(!e(n))throw new TypeError(t+" must be a Number");this[t]=Number(n)}}(o[f]);for(var d=0;d<a.length;d++)r.prototype["get"+t(a[d])]=n(a[d]),r.prototype["set"+t(a[d])]=function(e){return function(t){this[e]=String(t)}}(a[d]);return r});var A={};!function(e,t){"use strict";"object"==typeof A?A=t(T):e.ErrorStackParser=t(e.StackFrame)}(this,function(e){"use strict";var t=/(^|@)\S+\:\d+/,n=/^\s*at .*(\S+\:\d+|\(native\))/m,r=/^(eval@)?(\[native code\])?$/;return{parse:function(e){if("undefined"!=typeof e.stacktrace||"undefined"!=typeof e["opera#sourceloc"])return this.parseOpera(e);if(e.stack&&e.stack.match(n))return this.parseV8OrIE(e);if(e.stack)return this.parseFFOrSafari(e);throw new Error("Cannot parse given Error object")},extractLocation:function(e){if(-1===e.indexOf(":"))return[e];var t=/(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(e.replace(/[\(\)]/g,""));return[t[1],t[2]||undefined,t[3]||undefined]},parseV8OrIE:function(t){return t.stack.split("\n").filter(function(e){return!!e.match(n)},this).map(function(t){t.indexOf("(eval ")>-1&&(t=t.replace(/eval code/g,"eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g,""));var n=t.replace(/^\s+/,"").replace(/\(eval code/g,"(").split(/\s+/).slice(1),r=this.extractLocation(n.pop()),i=n.join(" ")||undefined,o=["eval","<anonymous>"].indexOf(r[0])>-1?undefined:r[0];return new e({functionName:i,fileName:o,lineNumber:r[1],columnNumber:r[2],source:t})},this)},parseFFOrSafari:function(t){return t.stack.split("\n").filter(function(e){return!e.match(r)},this).map(function(t){if(t.indexOf(" > eval")>-1&&(t=t.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g,":$1")),-1===t.indexOf("@")&&-1===t.indexOf(":"))return new e({functionName:t});var n=/((.*".+"[^@]*)?[^@]*)(?:@)/,r=t.match(n),i=r&&r[1]?r[1]:undefined,o=this.extractLocation(t.replace(n,""));return new e({functionName:i,fileName:o[0],lineNumber:o[1],columnNumber:o[2],source:t})},this)},parseOpera:function(e){return!e.stacktrace||e.message.indexOf("\n")>-1&&e.message.split("\n").length>e.stacktrace.split("\n").length?this.parseOpera9(e):e.stack?this.parseOpera11(e):this.parseOpera10(e)},parseOpera9:function(t){for(var n=/Line (\d+).*script (?:in )?(\S+)/i,r=t.message.split("\n"),i=[],o=2,a=r.length;o<a;o+=2){var s=n.exec(r[o]);s&&i.push(new e({fileName:s[2],lineNumber:s[1],source:r[o]}))}return i},parseOpera10:function(t){for(var n=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,r=t.stacktrace.split("\n"),i=[],o=0,a=r.length;o<a;o+=2){var s=n.exec(r[o]);s&&i.push(new e({functionName:s[3]||undefined,fileName:s[2],lineNumber:s[1],source:r[o]}))}return i},parseOpera11:function(n){return n.stack.split("\n").filter(function(e){return!!e.match(t)&&!e.match(/^Error created at/)},this).map(function(t){var n,r=t.split("@"),i=this.extractLocation(r.pop()),o=r.shift()||"",a=o.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^\)]*\)/g,"")||undefined;o.match(/\(([^\)]*)\)/)&&(n=o.replace(/^[^\(]+\(([^\)]*)\)$/,"$1"));var s=n===undefined||"[arguments not available]"===n?undefined:n.split(",");return new e({functionName:a,args:s,fileName:i[0],lineNumber:i[1],columnNumber:i[2],source:t})},this)}}});var M={};!function(e,t){"use strict";"object"==typeof M?M=t(T):e.StackGenerator=t(e.StackFrame)}(this,function(e){return{backtrace:function(t){var n=[],r=10;"object"==typeof t&&"number"==typeof t.maxStackSize&&(r=t.maxStackSize);for(var i=arguments.callee;i&&n.length<r&&i.arguments;){for(var o=new Array(i.arguments.length),a=0;a<o.length;++a)o[a]=i.arguments[a];/function(?:\s+([\w$]+))+\s*\(/.test(i.toString())?n.push(new e({functionName:RegExp.$1||undefined,args:o})):n.push(new e({args:o}));try{i=i.caller}catch(s){break}}return n}}});var P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V=w.reduce,H=w.filter,U=function(){function e(n,r){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[],o=arguments.length>3&&arguments[3]!==undefined?arguments[3]:F();t(this,e),this.__isBugsnagReport=!0,this._ignored=!1,this._handledState=o,this.app=undefined,this.apiKey=undefined,this.breadcrumbs=[],this.context=undefined,this.device=undefined,this.errorClass=K(n,"[no error class]"),this.errorMessage=K(r,"[no error message]"),this.groupingHash=undefined,this.metaData={},this.request=undefined,this.severity=this._handledState.severity,this.stacktrace=V(i,function(e,t){var n=I(t);try{return"{}"===JSON.stringify(n)?e:e.concat(n)}catch(r){return e}},[]),this.user=undefined,this.session=undefined}return e.prototype.ignore=function(){this._ignored=!0},e.prototype.isIgnored=function(){return this._ignored},e.prototype.updateMetaData=function(e){var t;if(!e)return this;var n=void 0;return null===(arguments.length<=1?undefined:arguments[1])?this.removeMetaData(e):null===(arguments.length<=2?undefined:arguments[2])?this.removeMetaData(e,arguments.length<=1?undefined:arguments[1],arguments.length<=2?undefined:arguments[2]):("object"==typeof(arguments.length<=1?undefined:arguments[1])&&(n=arguments.length<=1?undefined:arguments[1]),"string"==typeof(arguments.length<=1?undefined:arguments[1])&&(t={},t[arguments.length<=1?undefined:arguments[1]]=arguments.length<=2?undefined:arguments[2],n=t),n?(this.metaData[e]||(this.metaData[e]={}),this.metaData[e]=P({},this.metaData[e],n),this):this)},e.prototype.removeMetaData=function(e,t){return"string"!=typeof e?this:t?this.metaData[e]?(delete this.metaData[e][t],this):this:(delete this.metaData[e],this)},e.prototype.toJSON=function(){return{payloadVersion:"4",exceptions:[{errorClass:this.errorClass,message:this.errorMessage,stacktrace:this.stacktrace,type:"browserjs"}],severity:this.severity,unhandled:this._handledState.unhandled,severityReason:this._handledState.severityReason,app:this.app,device:this.device,breadcrumbs:this.breadcrumbs,context:this.context,user:this.user,metaData:this.metaData,groupingHash:this.groupingHash,request:this.request,session:this.session}},e}(),I=function(e){var t={file:e.fileName,method:$(e.functionName),lineNumber:e.lineNumber,columnNumber:e.columnNumber,code:undefined,inProject:undefined};return t.lineNumber>-1&&!t.file&&!t.method&&(t.file="global code"),t},$=function(e){return/^global code$/i.test(e)?"global code":e},F=function(){return{unhandled:!1,severity:"warning",severityReason:{type:"handledException"}}},K=function(e,t){return"string"==typeof e&&e?e:t};U.getStacktrace=function(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0,n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;return q(e)?A.parse(e).slice(t):H(M.backtrace(),function(e){return-1===(e.functionName||"").indexOf("StackGenerator$$")}).slice(1+n)},U.ensureReport=function(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0,n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;if(e.__isBugsnagReport)return e;try{var r=U.getStacktrace(e,t,1+n);return new U(e.name,e.message,r)}catch(i){return new U(e.name,e.message,[])}};var X=U,J=function(e,t){var n="000000000"+e;return n.substr(n.length-t)},z="object"==typeof window?window:self,G=0;for(var W in z)Object.hasOwnProperty.call(z,W)&&G++;var Y=navigator.mimeTypes?navigator.mimeTypes.length:0,Z=J((Y+navigator.userAgent.length).toString(36)+G.toString(36),4),Q=function(){return Z},ee=0,te=4,ne=36,re=Math.pow(ne,te);i.fingerprint=Q;var ie=i,oe=w.isoDate,ae=function(){function e(){o(this,e),this.id=ie(),this.startedAt=oe(),this._handled=0,this._unhandled=0}return e.prototype.toJSON=function(){return{id:this.id,startedAt:this.startedAt,events:{handled:this._handled,unhandled:this._unhandled}}},e.prototype.trackError=function(e){this[e._handledState.unhandled?"_unhandled":"_handled"]+=1},e}(),se=function(e){switch(Object.prototype.toString.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return e instanceof Error}},ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ce=w.map,fe=w.reduce,de=w.includes,le=w.isArray,ge=function(){},pe=function(){function e(t){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:N.schema,r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;if(a(this,e),!(t&&t.name&&t.version&&t.url))throw new Error("`notifier` argument is required");this.notifier=t,this.configSchema=n,this._configured=!1,this._transport={sendSession:ge,sendReport:ge},this._logger={debug:ge,info:ge,warn:ge,error:ge},this.plugins=[],this.session=r,this.beforeSession=[],this.breadcrumbs=[],this.app={},this.context=undefined,this.device=undefined,this.metaData=undefined,this.request=undefined,this.user={},this.BugsnagReport=X,this.BugsnagBreadcrumb=O,this.BugsnagSession=ae}return e.prototype.configure=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.config=N.mergeDefaults(ue({},this.config,e),this.configSchema);var t=N.validate(this.config,this.configSchema);if(!0==!t.valid)throw new Error(ve(t.errors));return"function"==typeof this.config.beforeSend&&(this.config.beforeSend=[this.config.beforeSend]),null!==this.config.appVersion&&(this.app.version=this.config.appVersion),this.config.metaData&&(this.metaData=this.config.metaData),this.config.user&&(this.user=this.config.user),this.config.logger&&this.logger(this.config.logger),this._configured=!0,this._logger.debug("Loaded!"),this},e.prototype.use=function(e){return this.plugins.push(e),e.init(this)},e.prototype.transport=function(e){return this._transport=e,this},e.prototype.logger=function(e,t){return this._logger=e,this},e.prototype.sessionDelegate=function(e){return this._sessionDelegate=e,this},e.prototype.startSession=function(){return this._sessionDelegate?this._sessionDelegate.startSession(this):(this._logger.warn("No session implementation is installed"),this)},e.prototype.leaveBreadcrumb=function(e,t,n,r){if(!this._configured)throw new Error("client not configured");if(e=e||undefined,n="string"==typeof n?n:undefined,r="string"==typeof r?r:undefined,t="object"==typeof t&&null!==t?t:undefined,"string"==typeof e||t){var i=new O(e,t,n,r);return this.breadcrumbs.push(i),this.breadcrumbs.length>this.config.maxBreadcrumbs&&(this.breadcrumbs=this.breadcrumbs.slice(this.breadcrumbs.length-this.config.maxBreadcrumbs)),this}},e.prototype.notify=function(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};if(!this._configured)throw new Error("client not configured");var n=C(this),r=he(e,t,this._logger),i=r.err,o=r.errorFramesToSkip,a=r._opts;if(a&&(t=a),!i){var s=ye("nothing");this._logger.warn("Usage error. "+s),i=new Error("Bugsnag usage error. "+s)}"object"==typeof t&&null!==t||(t={});var u=X.ensureReport(i,o,1);if(u.app=ue({releaseStage:n},u.app,this.app),u.context=u.context||t.context||this.context||undefined,u.device=ue({},u.device,this.device,t.device),u.request=ue({},u.request,this.request,t.request),u.user=ue({},u.user,this.user,t.user),u.metaData=ue({},u.metaData,this.metaData,t.metaData),u.breadcrumbs=this.breadcrumbs.slice(0),this.session&&(this.session.trackError(u),u.session=this.session),t.severity!==undefined&&(u.severity=t.severity,u._handledState.severityReason={type:"userSpecifiedSeverity"}),le(this.config.notifyReleaseStages)&&!de(this.config.notifyReleaseStages,n))return this._logger.warn("Report not sent due to releaseStage/notifyReleaseStages configuration"),!1;var c=u.severity,f=[].concat(t.beforeSend).concat(this.config.beforeSend);return fe(f,function(e,t){return!0===e||("function"==typeof t&&!1===t(u)||!!u.isIgnored())},!1)?(this._logger.debug("Report not sent due to beforeSend callback"),!1):(this.config.autoBreadcrumbs&&this.leaveBreadcrumb(u.errorClass,{errorClass:u.errorClass,errorMessage:u.errorMessage,severity:u.severity},"error"),c!==u.severity&&(u._handledState.severityReason={type:"userCallbackSetSeverity"}),this._transport.sendReport(this._logger,this.config,{apiKey:u.apiKey||this.config.apiKey,notifier:this.notifier,events:[u]}),!0)},e}(),he=function(e,t,n){var r=void 0,i=0,o=void 0;switch(typeof e){case"string":if("string"==typeof t){var a=ye("string/string");n.warn("Usage error. "+a),r=new Error("Bugsnag usage error. "+a),o={metaData:{notifier:{notifyArgs:[e,t]}}}}else r=new Error(String(e)),i+=2;break;case"number":case"boolean":r=new Error(String(e));break;case"function":var s=ye("function");n.warn("Usage error. "+s),r=new Error("Bugsnag usage error. "+s);break;case"object":if(null!==e&&(se(e)||e.__isBugsnagReport))r=e;else if(null!==e&&me(e))(r=new Error(e.message||e.errorMessage)).name=e.name||e.errorClass,i+=2;else{var u=ye("unsupported object");n.warn("Usage error. "+u),r=new Error("Bugsnag usage error. "+u)}}return{err:r,errorFramesToSkip:i,_opts:o}},me=function(e){return!("string"!=typeof e.name&&"string"!=typeof e.errorClass||"string"!=typeof e.message&&"string"!=typeof e.errorMessage)},ve=function(e){return"Bugsnag configuration error\n"+ce(e,function(e){return'"'+e.key+'" '+e.message+" \n    got "+be(e.value)}).join("\n\n")},ye=function(e){return"notify() expected error/opts parameters, got "+e},be=function(e){return"object"==typeof e?JSON.stringify(e):String(e)},we=pe,Se=j.positiveIntIfDefined,Oe={init:function(e){var t=0;e.config.beforeSend.push(function(n){if(t>=e.config.maxEvents)return n.ignore();t++}),e.refresh=function(){t=0}},configSchema:{maxEvents:{defaultValue:function(){return 10},message:"should be a positive integer ≤100",validate:function(e){return Se(e)&&e<100}}}},je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ee=N.schema,Ne=w.map,Re={releaseStage:{defaultValue:function(){return/^localhost(:\d+)?$/.test(window.location.host)?"development":"production"},message:"should be set",validate:j.stringWithLength},collectUserIp:{defaultValue:function(){return!0},message:"should be true|false",validate:function(e){return!0===e||!1===e}},logger:je({},Ee.logger,{defaultValue:function(){return"undefined"!=typeof console&&"function"==typeof console.debug?ke():undefined}})},ke=function(){var e={},t=console.log;return Ne(["debug","info","warn","error"],function(n){var r=console[n];e[n]="function"==typeof r?r.bind(console,"[bugsnag]"):t.bind(console,"[bugsnag]")}),e},Be={},De=w.map,xe=w.reduce,Le=w.filter;Be.init=function(e){De(_e,function(t){var n=console[t];console[t]=function(){for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];e.leaveBreadcrumb("Console output",xe(i,function(e,t,n){var r=String(t);if("[object Object]"===r)try{r=JSON.stringify(t)}catch(i){}return e["["+n+"]"]=r,e},{severity:0===t.indexOf("group")?"log":t}),"log"),n.apply(console,i)},console[t]._restore=function(){console[t]=n}})},Be.configSchema={consoleBreadcrumbsEnabled:{defaultValue:function(){return undefined},validate:function(e){return!0===e||!1===e||e===undefined},message:"should be true|false"}};var _e=Le(["log","debug","info","warn","error"],function(e){return"undefined"!=typeof console&&"function"==typeof console[e]}),Ce={init:function(e){e.config.beforeSend.unshift(function(e){e.context||(e.context=window.location.pathname)})}},qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Te=w.isoDate,Ae={init:function(e){e.config.beforeSend.unshift(function(e){e.device=qe({time:Te(),locale:navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||navigator.language,userAgent:navigator.userAgent},e.device)}),e.beforeSession.push(function(e){e.device={userAgent:navigator.userAgent}})}},Me={},Pe=w.reduce,Ve=/^.*<script.*?>/,He=/<\/script>.*$/,Ue=(Me={init:function(e){var t="",n=!1,r=function(){return document.documentElement.outerHTML},i=window.location.href;t=r(),document.onreadystatechange=function(){"interactive"===document.readyState&&(t=r(),n=!0)},e.config.beforeSend.unshift(function(e){var o=e.stacktrace[0];if(!o||!o.file||!o.lineNumber)return o;if(o.file.replace(/#.*$/,"")!==i.replace(/#.*$/,""))return o;n&&t||(t=r());var a=["\x3c!-- DOC START --\x3e"].concat(t.split("\n")),s=Ue(a,o.lineNumber-1),u=s.script,c=s.start,f=Pe(u,function(e,t,n){return Math.abs(c+n+1-o.lineNumber)>10?e:(e[""+(c+n+1)]=t,e)},{});o.code=f,e.updateMetaData("script",{content:u.join("\n")})})}}).extractScriptContent=function(e,t){for(var n=t;n<e.length&&!He.test(e[n]);)n++;for(var r=n;n>0&&!Ve.test(e[n]);)n--;var i=n,o=e.slice(i,r+1);return o[0]=o[0].replace(Ve,""),o[o.length-1]=o[o.length-1].replace(He,""),{script:o,start:i}},Ie={init:function(e){"addEventListener"in window&&window.addEventListener("click",function(t){var n=void 0,r=void 0;try{n=$e(t.target),r=s(t.target)}catch(i){n="[hidden]",r="[hidden]",e._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/y94fq5zm")}e.leaveBreadcrumb("UI click",{targetText:n,targetSelector:r},"user")},!0)},configSchema:{interactionBreadcrumbsEnabled:{defaultValue:function(){return undefined},validate:function(e){return!0===e||!1===e||e===undefined},message:"should be true|false"}}},$e=function(e){var t=e.textContent||e.innerText||"";return t||"submit"!==e.type&&"button"!==e.type||(t=e.value),t=t.replace(/^\s+|\s+$/g,""),u(t,140)},Fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ke={init:function(e){e.config.collectUserIp||e.config.beforeSend.push(function(e){e.user=Fe({id:"[NOT COLLECTED]"},e.user),e.request=Fe({clientIp:"[NOT COLLECTED]"},e.request)})}},Xe={};Xe.init=function(e){if("addEventListener"in window){var t=function(t){return function(){return e.leaveBreadcrumb(t,{},"navigation")}};window.addEventListener("pagehide",t("Page hidden"),!0),window.addEventListener("pageshow",t("Page shown"),!0),window.addEventListener("load",t("Page loaded"),!0),window.document.addEventListener("DOMContentLoaded",t("DOMContentLoaded"),!0),window.addEventListener("load",function(){return window.addEventListener("popstate",t("Navigated back"),!0)}),window.addEventListener("hashchange",function(t){var n=t.oldURL?{from:Je(t.oldURL),to:Je(t.newURL),state:We()}:{to:Je(window.location.href)};e.leaveBreadcrumb("Hash changed",n,"navigation")},!0),window.history.replaceState&&Ge(e,window.history,"replaceState"),window.history.pushState&&Ge(e,window.history,"pushState"),e.leaveBreadcrumb("Bugsnag loaded",{},"navigation")}},Xe.configSchema={navigationBreadcrumbsEnabled:{defaultValue:function(){return undefined},validate:function(e){return!0===e||!1===e||e===undefined},message:"should be true|false"}};var Je=function(e){var t=document.createElement("A");return t.href=e,""+t.pathname+t.search+t.hash},ze=function(e,t,n){var r=Je(window.location.href);return{title:t,state:e,prevState:We(),to:n||r,from:r}},Ge=function(e,t,n){var r=t[n];t[n]=function(i,o,a){e.leaveBreadcrumb("History "+n,ze(i,o,a),"navigation"),"function"==typeof e.refresh&&e.refresh(),e.session&&e.startSession(),r.apply(t,[i,o].concat(a!==undefined?a:[]))},t[n]._restore=function(){t[n]=r}},We=function(){try{return window.history.state}catch(e){}},Ye={},Ze="request",Qe="BS~~U",et="BS~~M",tt=w.includes,nt=void 0,rt=function(){return[nt.config.endpoints.notify,nt.config.endpoints.sessions]};Ye.init=function(e){nt=e,it(),ot()},Ye.configSchema={networkBreadcrumbsEnabled:{defaultValue:function(){return undefined},validate:function(e){return!0===e||!1===e||e===undefined},message:"should be true|false"}};var it=function(){if("addEventListener"in window.XMLHttpRequest.prototype){var e=window.XMLHttpRequest.prototype.open;window.XMLHttpRequest.prototype.open=function(t,n){this[Qe]=n,this[et]=t,this["BS~~S"]&&(this.removeEventListener("load",c),this.removeEventListener("error",f)),this.addEventListener("load",c),this.addEventListener("error",f),this["BS~~S"]=!0,e.apply(this,arguments)}}},ot=function(){if("fetch"in window){var e=window.fetch;window.fetch=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=n[0],o=n[1],a="GET";return o&&o.method&&(a=o.method),new Promise(function(t,r){e.apply(undefined,n).then(function(e){at(e,a,i),t(e)})["catch"](function(e){st(a,i),r(e)})})}}},at=function(e,t,n){var r={status:e.status,request:t+" "+n};e.status>=400?nt.leaveBreadcrumb("fetch() failed",r,Ze):nt.leaveBreadcrumb("fetch() succeeded",r,Ze)},st=function(e,t){nt.leaveBreadcrumb("fetch() error",{request:e+" "+t},Ze)},ut=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ct={init:function(e){e.config.beforeSend.unshift(function(e){e.request&&e.request.url||(e.request=ut({},e.request,{url:window.location.href}))})}},ft=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dt=w.map,lt=w.isArray,gt=w.includes,pt={init:function(e){return e.sessionDelegate(ht)}},ht={startSession:function(e){var t=e;t.session=new e.BugsnagSession,dt(t.beforeSession,function(e){return e(t)});var n=C(t);return lt(t.config.notifyReleaseStages)&&!gt(t.config.notifyReleaseStages,n)?(t._logger.warn("Session not sent due to releaseStage/notifyReleaseStages configuration"),t):t.config.endpoints.sessions?(t._transport.sendSession(t._logger,t.config,{notifier:t.notifier,device:t.device,app:ft({releaseStage:n},t.app),sessions:[{id:t.session.id,startedAt:t.session.startedAt,user:t.user}]}),t):(t._logger.warn("Session not sent due to missing endpoints.sessions configuration"),t)}},mt={},vt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yt=w.map,bt=(mt={init:function(e){e.config.beforeSend.push(function(e){e.stacktrace=yt(e.stacktrace,function(e){return vt({},e,{file:bt(e.file)})})})}})._strip=function(e){return"string"==typeof e?e.replace(/\?.*$/,"").replace(/#.*$/,""):e},wt={},St=w.reduce,Ot=void 0;wt.init=function(e){var t=function(t){var n=t.reason,r=!1;t.detail&&t.detail.reason&&(n=t.detail.reason,r=!0);var i={severity:"error",unhandled:!0,severityReason:{type:"unhandledPromiseRejection"}},o=void 0;if(n&&q(n))o=new e.BugsnagReport(n.name,n.message,A.parse(n),i),r&&(o.stacktrace=St(o.stacktrace,Et(n),[]));else{(o=new e.BugsnagReport(n&&n.name?n.name:"UnhandledRejection",n&&n.message?n.message:'Rejection reason was not an Error. See "Promise" tab for more detail.',[],i)).updateMetaData("promise","rejection reason",jt(n))}e.notify(o)};"addEventListener"in window?window.addEventListener("unhandledrejection",t):window.onunhandledrejection=function(e,n){t({detail:{reason:e,promise:n}})},Ot=t};var jt=function(e){if(null===e||e===undefined)return"undefined (or null)";if(se(e)){var t;return t={},t[Object.prototype.toString.call(e)]={name:e.name,message:e.message,code:e.code,stack:e.stack},t}return e},Et=function(e){return function(t,n){return n.file===e.toString()?t:(n.method&&(n.method=n.method.replace(/^\s+/,"")),t.concat(n))}},Nt={init:function(e){var t=window.onerror;window.onerror=function(n,r,i,o,a){if(0===i&&/Script error\.?/.test(n))e._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/y94fq5zm");else{var s={severity:"error",unhandled:!0,severityReason:{type:"unhandledException"}},u=void 0;if(a)a.name&&a.message?u=new e.BugsnagReport(a.name,a.message,Rt(e.BugsnagReport.getStacktrace(a),r,i,o),s):(u=new e.BugsnagReport("window.onerror",String(a),Rt(e.BugsnagReport.getStacktrace(a,1),r,i,o),s)).updateMetaData("window onerror",{error:a});else if("object"!=typeof n||null===n||r||i||o||a)(u=new e.BugsnagReport("window.onerror",String(n),Rt(e.BugsnagReport.getStacktrace(a,1),r,i,o),s)).updateMetaData("window onerror",{event:n});else{var c=n.type?"Event: "+n.type:"window.onerror",f=n.message||n.detail||"";(u=new e.BugsnagReport(c,f,e.BugsnagReport.getStacktrace(new Error,1).slice(1),s)).updateMetaData("window onerror",{event:n})}e.notify(u),"function"==typeof t&&t(n,r,i,o,a)}}}},Rt=function(e,t,n,r){var i=e[0];return i?(i.fileName||i.setFileName(t),i.lineNumber||i.setLineNumber(n),i.columnNumber||(r!==undefined?i.setColumnNumber(r):window.event&&window.event.errorCharacter&&i.setColumnNumber(window.event&&window.event.errorCharacter)),e):e},kt=function(e,t,n){return JSON.stringify(h(e),t,n)},Bt=20,Dt=25e3,xt=8,Lt="...",_t=function(e){var t=kt(e);if(t.length>1e6&&(delete e.events[0].metaData,e.events[0].metaData={notifier:"WARNING!\nSerialized payload was "+t.length/1e6+"MB (limit = 1MB)\nmetaData was removed"},(t=kt(e)).length>1e6))throw new Error("payload exceeded 1MB limit");return t},Ct={},qt=w.isoDate;Ct={sendReport:function(e,t,n){var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:function(){},i=Tt(t,"notify","4.0"),o=new window.XDomainRequest;o.onload=function(){r(null,o.responseText)},o.open("POST",i),setTimeout(function(){try{o.send(_t(n))}catch(t){e.error(t)}},0)},sendSession:function(e,t,n){var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:function(){},i=Tt(t,"sessions","1.0"),o=new window.XDomainRequest;o.onload=function(){r(null,o.responseText)},o.open("POST",i),setTimeout(function(){try{o.send(kt(n))}catch(t){e.error(t)}},0)}};var Tt=function(e,t,n){return At(e.endpoints[t],window.location.protocol)+"?apiKey="+encodeURIComponent(e.apiKey)+"&payloadVersion="+n+"&sentAt="+encodeURIComponent(qt())},At=Ct._matchPageProtocol=function(e,t){return"http:"===t?e.replace(/^https:/,"http:"):e},Mt=w.isoDate,Pt={sendReport:function(e,t,n){var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:function(){};try{var i=t.endpoints.notify,o=new window.XMLHttpRequest;o.onreadystatechange=function(){o.readyState===window.XMLHttpRequest.DONE&&r(null,o.responseText)},o.open("POST",i),o.setRequestHeader("Content-Type","application/json"),o.setRequestHeader("Bugsnag-Api-Key",n.apiKey||t.apiKey),o.setRequestHeader("Bugsnag-Payload-Version","4.0"),o.setRequestHeader("Bugsnag-Sent-At",Mt()),o.send(_t(n))}catch(a){e.error(a)}},sendSession:function(e,t,n){var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:function(){};try{var i=t.endpoints.sessions,o=new window.XMLHttpRequest;o.onreadystatechange=function(){o.readyState===window.XMLHttpRequest.DONE&&r(null,o.responseText)},o.open("POST",i),o.setRequestHeader("Content-Type","application/json"),o.setRequestHeader("Bugsnag-Api-Key",t.apiKey),o.setRequestHeader("Bugsnag-Payload-Version","1.0"),o.setRequestHeader("Bugsnag-Sent-At",Mt()),o.send(kt(n))}catch(a){e.error(a)}}},Vt={},Ht=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ut=w.map,It=w.reduce,$t=Ht({},N.schema,Re),Ft=[Nt,wt,Ae,Ce,ct,Oe,Be,Ye,Xe,Ie,Me,pt,Ke,mt];Vt=function(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];"string"==typeof e&&(e={apiKey:e});var n=[];e.sessionTrackingEnabled&&(n.push("deprecated option sessionTrackingEnabled is now called autoCaptureSessions"),e.autoCaptureSessions=e.sessionTrackingEnabled),!e.endpoint&&!e.sessionEndpoint||e.endpoints||(n.push("deprecated options endpoint/sessionEndpoint are now configured in the endpoints object"),e.endpoints={notify:e.endpoint,sessions:e.sessionEndpoint}),e.endpoints&&e.endpoints.notify&&!e.endpoints.sessions&&n.push("notify endpoint is set but sessions endpoint is not. No sessions will be sent.");var r=It([].concat(Ft).concat(t),function(e,t){return t.configSchema?Ht({},e,t.configSchema):e},$t),i=new we({name:"Bugsnag JavaScript",version:"4.7.3",url:"https://github.com/bugsnag/bugsnag-js"},r);return i.transport(window.XDomainRequest?Ct:Pt),i.configure(e),Ut(n,function(e){return i._logger.warn(e)}),i.use(Ae),i.use(Ce),i.use(ct),i.use(Me),i.use(Oe),i.use(pt),i.use(Ke),i.use(mt),!1!==i.config.autoNotify&&(i.use(Nt),i.use(wt)),Kt(i.config,"navigationBreadcrumbsEnabled")&&i.use(Xe),Kt(i.config,"interactionBreadcrumbsEnabled")&&i.use(Ie),Kt(i.config,"networkBreadcrumbsEnabled")&&i.use(Ye),Kt(i.config,"consoleBreadcrumbsEnabled",!1)&&i.use(Be),Ut(t,function(e){return i.use(e)}),i.config.autoCaptureSessions?i.startSession():i};var Kt=function(e,t){var n=!(arguments.length>2&&arguments[2]!==undefined)||arguments[2];return"boolean"==typeof e[t]?e[t]:e.autoBreadcrumbs&&(n||!/^dev(elopment)?$/.test(e.releaseStage))};return Vt.Bugsnag={Client:we,Report:X,Session:ae,Breadcrumb:O},Vt["default"]=Vt,Vt});
//# sourceMappingURL=bugsnag.min.js.map