(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const bl=()=>{};var Di={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Vl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],l=n[e++],h=n[e++],f=((i&7)<<18|(o&63)<<12|(l&63)<<6|h&63)-65536;t[r++]=String.fromCharCode(55296+(f>>10)),t[r++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],l=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},Oo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],l=i+1<n.length,h=l?n[i+1]:0,f=i+2<n.length,p=f?n[i+2]:0,I=o>>2,w=(o&3)<<4|h>>4;let C=(h&15)<<2|p>>6,V=p&63;f||(V=64,l||(C=64)),r.push(e[I],e[w],e[C],e[V])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(No(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Vl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],h=i<n.length?e[n.charAt(i)]:0;++i;const p=i<n.length?e[n.charAt(i)]:64;++i;const w=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||h==null||p==null||w==null)throw new Dl;const C=o<<2|h>>4;if(r.push(C),p!==64){const V=h<<4&240|p>>2;if(r.push(V),w!==64){const N=p<<6&192|w;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Dl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nl=function(n){const t=No(n);return Oo.encodeByteArray(t,!0)},Un=function(n){return Nl(n).replace(/\./g,"")},Ol=function(n){try{return Oo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=()=>kl().__FIREBASE_DEFAULTS__,Ml=()=>{if(typeof process>"u"||typeof Di>"u")return;const n=Di.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ll=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ol(n[1]);return t&&JSON.parse(t)},rs=()=>{try{return bl()||xl()||Ml()||Ll()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Fl=n=>{var t,e;return(e=(t=rs())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},Ul=n=>{const t=Fl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},ko=()=>{var n;return(n=rs())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Un(JSON.stringify(e)),Un(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ql(){var t;const n=(t=rs())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zl(){return!ql()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hl(){try{return typeof indexedDB=="object"}catch{return!1}}function Gl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl="FirebaseError";class we extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Kl,Object.setPrototypeOf(this,we.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xo.prototype.create)}}class xo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?Wl(o,r):"Error",h=`${this.serviceName}: ${l} (${i}).`;return new we(i,h,r)}}function Wl(n,t){return n.replace(Ql,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Ql=/\{\$([^}]+)}/g;function Bn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],l=t[i];if(Ni(o)&&Ni(l)){if(!Bn(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Ni(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Xl(n){return(await fetch(n,{credentials:"include"})).ok}class Ye{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Bl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Zl(t))try{this.getOrInitializeService({instanceIdentifier:ee})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ee){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ee){return this.instances.has(t)}getOptions(t=ee){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,l]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&l.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ee){return this.component?this.component.multipleInstances?t:ee:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yl(n){return n===ee?void 0:n}function Zl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Jl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const eu={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},nu=U.INFO,ru={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},su=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=ru[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Lo{constructor(t){this.name=t,this._logLevel=nu,this._logHandler=su,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?eu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const iu=(n,t)=>t.some(e=>n instanceof e);let Oi,ki;function ou(){return Oi||(Oi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function au(){return ki||(ki=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fo=new WeakMap,Br=new WeakMap,Uo=new WeakMap,Nr=new WeakMap,ss=new WeakMap;function lu(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(jt(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&Fo.set(e,n)}).catch(()=>{}),ss.set(t,n),t}function uu(n){if(Br.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});Br.set(n,t)}let jr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Br.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Uo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return jt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function cu(n){jr=n(jr)}function hu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Or(this),t,...e);return Uo.set(r,t.sort?t.sort():[t]),jt(r)}:au().includes(n)?function(...t){return n.apply(Or(this),t),jt(Fo.get(this))}:function(...t){return jt(n.apply(Or(this),t))}}function fu(n){return typeof n=="function"?hu(n):(n instanceof IDBTransaction&&uu(n),iu(n,ou())?new Proxy(n,jr):n)}function jt(n){if(n instanceof IDBRequest)return lu(n);if(Nr.has(n))return Nr.get(n);const t=fu(n);return t!==n&&(Nr.set(n,t),ss.set(t,n)),t}const Or=n=>ss.get(n);function du(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(n,t),h=jt(l);return r&&l.addEventListener("upgradeneeded",f=>{r(jt(l.result),f.oldVersion,f.newVersion,jt(l.transaction),f)}),e&&l.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),h.then(f=>{o&&f.addEventListener("close",()=>o()),i&&f.addEventListener("versionchange",p=>i(p.oldVersion,p.newVersion,p))}).catch(()=>{}),h}const pu=["get","getKey","getAll","getAllKeys","count"],mu=["put","add","delete","clear"],kr=new Map;function xi(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(kr.get(t))return kr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=mu.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pu.includes(e)))return;const o=async function(l,...h){const f=this.transaction(l,i?"readwrite":"readonly");let p=f.store;return r&&(p=p.index(h.shift())),(await Promise.all([p[e](...h),i&&f.done]))[0]};return kr.set(t,o),o}cu(n=>({...n,get:(t,e,r)=>xi(t,e)||n.get(t,e,r),has:(t,e)=>!!xi(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(_u(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function _u(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const $r="@firebase/app",Mi="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Lo("@firebase/app"),yu="@firebase/app-compat",Eu="@firebase/analytics-compat",Tu="@firebase/analytics",vu="@firebase/app-check-compat",Iu="@firebase/app-check",Au="@firebase/auth",wu="@firebase/auth-compat",Ru="@firebase/database",Su="@firebase/data-connect",Pu="@firebase/database-compat",Cu="@firebase/functions",bu="@firebase/functions-compat",Vu="@firebase/installations",Du="@firebase/installations-compat",Nu="@firebase/messaging",Ou="@firebase/messaging-compat",ku="@firebase/performance",xu="@firebase/performance-compat",Mu="@firebase/remote-config",Lu="@firebase/remote-config-compat",Fu="@firebase/storage",Uu="@firebase/storage-compat",Bu="@firebase/firestore",ju="@firebase/ai",$u="@firebase/firestore-compat",qu="firebase",zu="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="[DEFAULT]",Hu={[$r]:"fire-core",[yu]:"fire-core-compat",[Tu]:"fire-analytics",[Eu]:"fire-analytics-compat",[Iu]:"fire-app-check",[vu]:"fire-app-check-compat",[Au]:"fire-auth",[wu]:"fire-auth-compat",[Ru]:"fire-rtdb",[Su]:"fire-data-connect",[Pu]:"fire-rtdb-compat",[Cu]:"fire-fn",[bu]:"fire-fn-compat",[Vu]:"fire-iid",[Du]:"fire-iid-compat",[Nu]:"fire-fcm",[Ou]:"fire-fcm-compat",[ku]:"fire-perf",[xu]:"fire-perf-compat",[Mu]:"fire-rc",[Lu]:"fire-rc-compat",[Fu]:"fire-gcs",[Uu]:"fire-gcs-compat",[Bu]:"fire-fst",[$u]:"fire-fst-compat",[ju]:"fire-vertex","fire-js":"fire-js",[qu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Map,Gu=new Map,zr=new Map;function Li(n,t){try{n.container.addComponent(t)}catch(e){kt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function $n(n){const t=n.name;if(zr.has(t))return kt.debug(`There were multiple attempts to register component ${t}.`),!1;zr.set(t,n);for(const e of jn.values())Li(e,n);for(const e of Gu.values())Li(e,n);return!0}function Ku(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Wu(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$t=new xo("app","Firebase",Qu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=zu;function Bo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:qr,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw $t.create("bad-app-name",{appName:String(i)});if(e||(e=ko()),!e)throw $t.create("no-options");const o=jn.get(i);if(o){if(Bn(e,o.options)&&Bn(r,o.config))return o;throw $t.create("duplicate-app",{appName:i})}const l=new tu(i);for(const f of zr.values())l.addComponent(f);const h=new Xu(e,r,l);return jn.set(i,h),h}function Yu(n=qr){const t=jn.get(n);if(!t&&n===qr&&ko())return Bo();if(!t)throw $t.create("no-app",{appName:n});return t}function ge(n,t,e){let r=Hu[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${t}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kt.warn(l.join(" "));return}$n(new Ye(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="firebase-heartbeat-database",tc=1,Ze="firebase-heartbeat-store";let xr=null;function jo(){return xr||(xr=du(Zu,tc,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ze)}catch(e){console.warn(e)}}}}).catch(n=>{throw $t.create("idb-open",{originalErrorMessage:n.message})})),xr}async function ec(n){try{const e=(await jo()).transaction(Ze),r=await e.objectStore(Ze).get($o(n));return await e.done,r}catch(t){if(t instanceof we)kt.warn(t.message);else{const e=$t.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});kt.warn(e.message)}}}async function Fi(n,t){try{const r=(await jo()).transaction(Ze,"readwrite");await r.objectStore(Ze).put(t,$o(n)),await r.done}catch(e){if(e instanceof we)kt.warn(e.message);else{const r=$t.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});kt.warn(r.message)}}}function $o(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=1024,rc=30;class sc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new oc(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ui();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>rc){const l=ac(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){kt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ui(),{heartbeatsToSend:r,unsentEntries:i}=ic(this._heartbeatsCache.heartbeats),o=Un(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return kt.warn(e),""}}}function Ui(){return new Date().toISOString().substring(0,10)}function ic(n,t=nc){const e=[];let r=n.slice();for(const i of n){const o=e.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),Bi(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Bi(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class oc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hl()?Gl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await ec(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fi(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fi(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Bi(n){return Un(JSON.stringify({version:2,heartbeats:n})).length}function ac(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(n){$n(new Ye("platform-logger",t=>new gu(t),"PRIVATE")),$n(new Ye("heartbeat",t=>new sc(t),"PRIVATE")),ge($r,Mi,n),ge($r,Mi,"esm2020"),ge("fire-js","")}lc("");var uc="firebase",cc="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ge(uc,cc,"app");var ji=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var is;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,d){function g(){}g.prototype=d.prototype,y.F=d.prototype,y.prototype=new g,y.prototype.constructor=y,y.D=function(E,_,v){for(var m=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)m[gt-2]=arguments[gt];return d.prototype[_].apply(E,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,d,g){g||(g=0);const E=Array(16);if(typeof d=="string")for(var _=0;_<16;++_)E[_]=d.charCodeAt(g++)|d.charCodeAt(g++)<<8|d.charCodeAt(g++)<<16|d.charCodeAt(g++)<<24;else for(_=0;_<16;++_)E[_]=d[g++]|d[g++]<<8|d[g++]<<16|d[g++]<<24;d=y.g[0],g=y.g[1],_=y.g[2];let v=y.g[3],m;m=d+(v^g&(_^v))+E[0]+3614090360&4294967295,d=g+(m<<7&4294967295|m>>>25),m=v+(_^d&(g^_))+E[1]+3905402710&4294967295,v=d+(m<<12&4294967295|m>>>20),m=_+(g^v&(d^g))+E[2]+606105819&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(d^_&(v^d))+E[3]+3250441966&4294967295,g=_+(m<<22&4294967295|m>>>10),m=d+(v^g&(_^v))+E[4]+4118548399&4294967295,d=g+(m<<7&4294967295|m>>>25),m=v+(_^d&(g^_))+E[5]+1200080426&4294967295,v=d+(m<<12&4294967295|m>>>20),m=_+(g^v&(d^g))+E[6]+2821735955&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(d^_&(v^d))+E[7]+4249261313&4294967295,g=_+(m<<22&4294967295|m>>>10),m=d+(v^g&(_^v))+E[8]+1770035416&4294967295,d=g+(m<<7&4294967295|m>>>25),m=v+(_^d&(g^_))+E[9]+2336552879&4294967295,v=d+(m<<12&4294967295|m>>>20),m=_+(g^v&(d^g))+E[10]+4294925233&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(d^_&(v^d))+E[11]+2304563134&4294967295,g=_+(m<<22&4294967295|m>>>10),m=d+(v^g&(_^v))+E[12]+1804603682&4294967295,d=g+(m<<7&4294967295|m>>>25),m=v+(_^d&(g^_))+E[13]+4254626195&4294967295,v=d+(m<<12&4294967295|m>>>20),m=_+(g^v&(d^g))+E[14]+2792965006&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(d^_&(v^d))+E[15]+1236535329&4294967295,g=_+(m<<22&4294967295|m>>>10),m=d+(_^v&(g^_))+E[1]+4129170786&4294967295,d=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(d^g))+E[6]+3225465664&4294967295,v=d+(m<<9&4294967295|m>>>23),m=_+(d^g&(v^d))+E[11]+643717713&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^d&(_^v))+E[0]+3921069994&4294967295,g=_+(m<<20&4294967295|m>>>12),m=d+(_^v&(g^_))+E[5]+3593408605&4294967295,d=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(d^g))+E[10]+38016083&4294967295,v=d+(m<<9&4294967295|m>>>23),m=_+(d^g&(v^d))+E[15]+3634488961&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^d&(_^v))+E[4]+3889429448&4294967295,g=_+(m<<20&4294967295|m>>>12),m=d+(_^v&(g^_))+E[9]+568446438&4294967295,d=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(d^g))+E[14]+3275163606&4294967295,v=d+(m<<9&4294967295|m>>>23),m=_+(d^g&(v^d))+E[3]+4107603335&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^d&(_^v))+E[8]+1163531501&4294967295,g=_+(m<<20&4294967295|m>>>12),m=d+(_^v&(g^_))+E[13]+2850285829&4294967295,d=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(d^g))+E[2]+4243563512&4294967295,v=d+(m<<9&4294967295|m>>>23),m=_+(d^g&(v^d))+E[7]+1735328473&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^d&(_^v))+E[12]+2368359562&4294967295,g=_+(m<<20&4294967295|m>>>12),m=d+(g^_^v)+E[5]+4294588738&4294967295,d=g+(m<<4&4294967295|m>>>28),m=v+(d^g^_)+E[8]+2272392833&4294967295,v=d+(m<<11&4294967295|m>>>21),m=_+(v^d^g)+E[11]+1839030562&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^d)+E[14]+4259657740&4294967295,g=_+(m<<23&4294967295|m>>>9),m=d+(g^_^v)+E[1]+2763975236&4294967295,d=g+(m<<4&4294967295|m>>>28),m=v+(d^g^_)+E[4]+1272893353&4294967295,v=d+(m<<11&4294967295|m>>>21),m=_+(v^d^g)+E[7]+4139469664&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^d)+E[10]+3200236656&4294967295,g=_+(m<<23&4294967295|m>>>9),m=d+(g^_^v)+E[13]+681279174&4294967295,d=g+(m<<4&4294967295|m>>>28),m=v+(d^g^_)+E[0]+3936430074&4294967295,v=d+(m<<11&4294967295|m>>>21),m=_+(v^d^g)+E[3]+3572445317&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^d)+E[6]+76029189&4294967295,g=_+(m<<23&4294967295|m>>>9),m=d+(g^_^v)+E[9]+3654602809&4294967295,d=g+(m<<4&4294967295|m>>>28),m=v+(d^g^_)+E[12]+3873151461&4294967295,v=d+(m<<11&4294967295|m>>>21),m=_+(v^d^g)+E[15]+530742520&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^d)+E[2]+3299628645&4294967295,g=_+(m<<23&4294967295|m>>>9),m=d+(_^(g|~v))+E[0]+4096336452&4294967295,d=g+(m<<6&4294967295|m>>>26),m=v+(g^(d|~_))+E[7]+1126891415&4294967295,v=d+(m<<10&4294967295|m>>>22),m=_+(d^(v|~g))+E[14]+2878612391&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~d))+E[5]+4237533241&4294967295,g=_+(m<<21&4294967295|m>>>11),m=d+(_^(g|~v))+E[12]+1700485571&4294967295,d=g+(m<<6&4294967295|m>>>26),m=v+(g^(d|~_))+E[3]+2399980690&4294967295,v=d+(m<<10&4294967295|m>>>22),m=_+(d^(v|~g))+E[10]+4293915773&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~d))+E[1]+2240044497&4294967295,g=_+(m<<21&4294967295|m>>>11),m=d+(_^(g|~v))+E[8]+1873313359&4294967295,d=g+(m<<6&4294967295|m>>>26),m=v+(g^(d|~_))+E[15]+4264355552&4294967295,v=d+(m<<10&4294967295|m>>>22),m=_+(d^(v|~g))+E[6]+2734768916&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~d))+E[13]+1309151649&4294967295,g=_+(m<<21&4294967295|m>>>11),m=d+(_^(g|~v))+E[4]+4149444226&4294967295,d=g+(m<<6&4294967295|m>>>26),m=v+(g^(d|~_))+E[11]+3174756917&4294967295,v=d+(m<<10&4294967295|m>>>22),m=_+(d^(v|~g))+E[2]+718787259&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~d))+E[9]+3951481745&4294967295,y.g[0]=y.g[0]+d&4294967295,y.g[1]=y.g[1]+(_+(m<<21&4294967295|m>>>11))&4294967295,y.g[2]=y.g[2]+_&4294967295,y.g[3]=y.g[3]+v&4294967295}r.prototype.v=function(y,d){d===void 0&&(d=y.length);const g=d-this.blockSize,E=this.C;let _=this.h,v=0;for(;v<d;){if(_==0)for(;v<=g;)i(this,y,v),v+=this.blockSize;if(typeof y=="string"){for(;v<d;)if(E[_++]=y.charCodeAt(v++),_==this.blockSize){i(this,E),_=0;break}}else for(;v<d;)if(E[_++]=y[v++],_==this.blockSize){i(this,E),_=0;break}}this.h=_,this.o+=d},r.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var d=1;d<y.length-8;++d)y[d]=0;d=this.o*8;for(var g=y.length-8;g<y.length;++g)y[g]=d&255,d/=256;for(this.v(y),y=Array(16),d=0,g=0;g<4;++g)for(let E=0;E<32;E+=8)y[d++]=this.g[g]>>>E&255;return y};function o(y,d){var g=h;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=d(y)}function l(y,d){this.h=d;const g=[];let E=!0;for(let _=y.length-1;_>=0;_--){const v=y[_]|0;E&&v==d||(g[_]=v,E=!1)}this.g=g}var h={};function f(y){return-128<=y&&y<128?o(y,function(d){return new l([d|0],d<0?-1:0)}):new l([y|0],y<0?-1:0)}function p(y){if(isNaN(y)||!isFinite(y))return w;if(y<0)return M(p(-y));const d=[];let g=1;for(let E=0;y>=g;E++)d[E]=y/g|0,g*=4294967296;return new l(d,0)}function I(y,d){if(y.length==0)throw Error("number format error: empty string");if(d=d||10,d<2||36<d)throw Error("radix out of range: "+d);if(y.charAt(0)=="-")return M(I(y.substring(1),d));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=p(Math.pow(d,8));let E=w;for(let v=0;v<y.length;v+=8){var _=Math.min(8,y.length-v);const m=parseInt(y.substring(v,v+_),d);_<8?(_=p(Math.pow(d,_)),E=E.j(_).add(p(m))):(E=E.j(g),E=E.add(p(m)))}return E}var w=f(0),C=f(1),V=f(16777216);n=l.prototype,n.m=function(){if(L(this))return-M(this).m();let y=0,d=1;for(let g=0;g<this.g.length;g++){const E=this.i(g);y+=(E>=0?E:4294967296+E)*d,d*=4294967296}return y},n.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(N(this))return"0";if(L(this))return"-"+M(this).toString(y);const d=p(Math.pow(y,6));var g=this;let E="";for(;;){const _=Rt(g,d).g;g=X(g,_.j(d));let v=((g.g.length>0?g.g[0]:g.h)>>>0).toString(y);if(g=_,N(g))return v+E;for(;v.length<6;)v="0"+v;E=v+E}},n.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function N(y){if(y.h!=0)return!1;for(let d=0;d<y.g.length;d++)if(y.g[d]!=0)return!1;return!0}function L(y){return y.h==-1}n.l=function(y){return y=X(this,y),L(y)?-1:N(y)?0:1};function M(y){const d=y.g.length,g=[];for(let E=0;E<d;E++)g[E]=~y.g[E];return new l(g,~y.h).add(C)}n.abs=function(){return L(this)?M(this):this},n.add=function(y){const d=Math.max(this.g.length,y.g.length),g=[];let E=0;for(let _=0;_<=d;_++){let v=E+(this.i(_)&65535)+(y.i(_)&65535),m=(v>>>16)+(this.i(_)>>>16)+(y.i(_)>>>16);E=m>>>16,v&=65535,m&=65535,g[_]=m<<16|v}return new l(g,g[g.length-1]&-2147483648?-1:0)};function X(y,d){return y.add(M(d))}n.j=function(y){if(N(this)||N(y))return w;if(L(this))return L(y)?M(this).j(M(y)):M(M(this).j(y));if(L(y))return M(this.j(M(y)));if(this.l(V)<0&&y.l(V)<0)return p(this.m()*y.m());const d=this.g.length+y.g.length,g=[];for(var E=0;E<2*d;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(let _=0;_<y.g.length;_++){const v=this.i(E)>>>16,m=this.i(E)&65535,gt=y.i(_)>>>16,Qt=y.i(_)&65535;g[2*E+2*_]+=m*Qt,Q(g,2*E+2*_),g[2*E+2*_+1]+=v*Qt,Q(g,2*E+2*_+1),g[2*E+2*_+1]+=m*gt,Q(g,2*E+2*_+1),g[2*E+2*_+2]+=v*gt,Q(g,2*E+2*_+2)}for(y=0;y<d;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=d;y<2*d;y++)g[y]=0;return new l(g,0)};function Q(y,d){for(;(y[d]&65535)!=y[d];)y[d+1]+=y[d]>>>16,y[d]&=65535,d++}function at(y,d){this.g=y,this.h=d}function Rt(y,d){if(N(d))throw Error("division by zero");if(N(y))return new at(w,w);if(L(y))return d=Rt(M(y),d),new at(M(d.g),M(d.h));if(L(d))return d=Rt(y,M(d)),new at(M(d.g),d.h);if(y.g.length>30){if(L(y)||L(d))throw Error("slowDivide_ only works with positive integers.");for(var g=C,E=d;E.l(y)<=0;)g=mt(g),E=mt(E);var _=Et(g,1),v=Et(E,1);for(E=Et(E,2),g=Et(g,2);!N(E);){var m=v.add(E);m.l(y)<=0&&(_=_.add(g),v=m),E=Et(E,1),g=Et(g,1)}return d=X(y,_.j(d)),new at(_,d)}for(_=w;y.l(d)>=0;){for(g=Math.max(1,Math.floor(y.m()/d.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),v=p(g),m=v.j(d);L(m)||m.l(y)>0;)g-=E,v=p(g),m=v.j(d);N(v)&&(v=C),_=_.add(v),y=X(y,m)}return new at(_,y)}n.B=function(y){return Rt(this,y).h},n.and=function(y){const d=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<d;E++)g[E]=this.i(E)&y.i(E);return new l(g,this.h&y.h)},n.or=function(y){const d=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<d;E++)g[E]=this.i(E)|y.i(E);return new l(g,this.h|y.h)},n.xor=function(y){const d=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<d;E++)g[E]=this.i(E)^y.i(E);return new l(g,this.h^y.h)};function mt(y){const d=y.g.length+1,g=[];for(let E=0;E<d;E++)g[E]=y.i(E)<<1|y.i(E-1)>>>31;return new l(g,y.h)}function Et(y,d){const g=d>>5;d%=32;const E=y.g.length-g,_=[];for(let v=0;v<E;v++)_[v]=d>0?y.i(v+g)>>>d|y.i(v+g+1)<<32-d:y.i(v+g);return new l(_,y.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=I,is=l}).apply(typeof ji<"u"?ji:typeof self<"u"?self:typeof window<"u"?window:{});var Cn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qo,He,zo,kn,Hr,Ho,Go,Ko;(function(){var n,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cn=="object"&&Cn];for(var a=0;a<s.length;++a){var u=s[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var u=r;s=s.split(".");for(var c=0;c<s.length-1;c++){var T=s[c];if(!(T in u))break t;u=u[T]}s=s[s.length-1],c=u[s],a=a(c),a!=c&&a!=null&&t(u,s,{configurable:!0,writable:!0,value:a})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(a){var u=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&u.push([c,a[c]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function h(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function f(s,a,u){return s.call.apply(s.bind,arguments)}function p(s,a,u){return p=f,p.apply(null,arguments)}function I(s,a){var u=Array.prototype.slice.call(arguments,1);return function(){var c=u.slice();return c.push.apply(c,arguments),s.apply(this,c)}}function w(s,a){function u(){}u.prototype=a.prototype,s.Z=a.prototype,s.prototype=new u,s.prototype.constructor=s,s.Ob=function(c,T,A){for(var P=Array(arguments.length-2),k=2;k<arguments.length;k++)P[k-2]=arguments[k];return a.prototype[T].apply(c,P)}}var C=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function V(s){const a=s.length;if(a>0){const u=Array(a);for(let c=0;c<a;c++)u[c]=s[c];return u}return[]}function N(s,a){for(let c=1;c<arguments.length;c++){const T=arguments[c];var u=typeof T;if(u=u!="object"?u:T?Array.isArray(T)?"array":u:"null",u=="array"||u=="object"&&typeof T.length=="number"){u=s.length||0;const A=T.length||0;s.length=u+A;for(let P=0;P<A;P++)s[u+P]=T[P]}else s.push(T)}}class L{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return this.h>0?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function M(s){l.setTimeout(()=>{throw s},0)}function X(){var s=y;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Q{constructor(){this.h=this.g=null}add(a,u){const c=at.get();c.set(a,u),this.h?this.h.next=c:this.g=c,this.h=c}}var at=new L(()=>new Rt,s=>s.reset());class Rt{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let mt,Et=!1,y=new Q,d=()=>{const s=Promise.resolve(void 0);mt=()=>{s.then(g)}};function g(){for(var s;s=X();){try{s.h.call(s.g)}catch(u){M(u)}var a=at;a.j(s),a.h<100&&(a.h++,s.next=a.g,a.g=s)}Et=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var v=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};l.addEventListener("test",u,a),l.removeEventListener("test",u,a)}catch{}return s}();function m(s){return/^[\s\xa0]*$/.test(s)}function gt(s,a){_.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,a)}w(gt,_),gt.prototype.init=function(s,a){const u=this.type=s.type,c=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget,a||(u=="mouseover"?a=s.fromElement:u=="mouseout"&&(a=s.toElement)),this.relatedTarget=a,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&gt.Z.h.call(this)},gt.prototype.h=function(){gt.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Qt="closure_listenable_"+(Math.random()*1e6|0),Ja=0;function Ya(s,a,u,c,T){this.listener=s,this.proxy=null,this.src=a,this.type=u,this.capture=!!c,this.ha=T,this.key=++Ja,this.da=this.fa=!1}function dn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function pn(s,a,u){for(const c in s)a.call(u,s[c],c,s)}function Za(s,a){for(const u in s)a.call(void 0,s[u],u,s)}function Vs(s){const a={};for(const u in s)a[u]=s[u];return a}const Ds="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ns(s,a){let u,c;for(let T=1;T<arguments.length;T++){c=arguments[T];for(u in c)s[u]=c[u];for(let A=0;A<Ds.length;A++)u=Ds[A],Object.prototype.hasOwnProperty.call(c,u)&&(s[u]=c[u])}}function mn(s){this.src=s,this.g={},this.h=0}mn.prototype.add=function(s,a,u,c,T){const A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);const P=ur(s,a,c,T);return P>-1?(a=s[P],u||(a.fa=!1)):(a=new Ya(a,this.src,A,!!c,T),a.fa=u,s.push(a)),a};function lr(s,a){const u=a.type;if(u in s.g){var c=s.g[u],T=Array.prototype.indexOf.call(c,a,void 0),A;(A=T>=0)&&Array.prototype.splice.call(c,T,1),A&&(dn(a),s.g[u].length==0&&(delete s.g[u],s.h--))}}function ur(s,a,u,c){for(let T=0;T<s.length;++T){const A=s[T];if(!A.da&&A.listener==a&&A.capture==!!u&&A.ha==c)return T}return-1}var cr="closure_lm_"+(Math.random()*1e6|0),hr={};function Os(s,a,u,c,T){if(Array.isArray(a)){for(let A=0;A<a.length;A++)Os(s,a[A],u,c,T);return null}return u=Ms(u),s&&s[Qt]?s.J(a,u,h(c)?!!c.capture:!1,T):tl(s,a,u,!1,c,T)}function tl(s,a,u,c,T,A){if(!a)throw Error("Invalid event type");const P=h(T)?!!T.capture:!!T;let k=dr(s);if(k||(s[cr]=k=new mn(s)),u=k.add(a,u,c,P,A),u.proxy)return u;if(c=el(),u.proxy=c,c.src=s,c.listener=u,s.addEventListener)v||(T=P),T===void 0&&(T=!1),s.addEventListener(a.toString(),c,T);else if(s.attachEvent)s.attachEvent(xs(a.toString()),c);else if(s.addListener&&s.removeListener)s.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return u}function el(){function s(u){return a.call(s.src,s.listener,u)}const a=nl;return s}function ks(s,a,u,c,T){if(Array.isArray(a))for(var A=0;A<a.length;A++)ks(s,a[A],u,c,T);else c=h(c)?!!c.capture:!!c,u=Ms(u),s&&s[Qt]?(s=s.i,A=String(a).toString(),A in s.g&&(a=s.g[A],u=ur(a,u,c,T),u>-1&&(dn(a[u]),Array.prototype.splice.call(a,u,1),a.length==0&&(delete s.g[A],s.h--)))):s&&(s=dr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=ur(a,u,c,T)),(u=s>-1?a[s]:null)&&fr(u))}function fr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Qt])lr(a.i,s);else{var u=s.type,c=s.proxy;a.removeEventListener?a.removeEventListener(u,c,s.capture):a.detachEvent?a.detachEvent(xs(u),c):a.addListener&&a.removeListener&&a.removeListener(c),(u=dr(a))?(lr(u,s),u.h==0&&(u.src=null,a[cr]=null)):dn(s)}}}function xs(s){return s in hr?hr[s]:hr[s]="on"+s}function nl(s,a){if(s.da)s=!0;else{a=new gt(a,this);const u=s.listener,c=s.ha||s.src;s.fa&&fr(s),s=u.call(c,a)}return s}function dr(s){return s=s[cr],s instanceof mn?s:null}var pr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ms(s){return typeof s=="function"?s:(s[pr]||(s[pr]=function(a){return s.handleEvent(a)}),s[pr])}function lt(){E.call(this),this.i=new mn(this),this.M=this,this.G=null}w(lt,E),lt.prototype[Qt]=!0,lt.prototype.removeEventListener=function(s,a,u,c){ks(this,s,a,u,c)};function dt(s,a){var u,c=s.G;if(c)for(u=[];c;c=c.G)u.push(c);if(s=s.M,c=a.type||a,typeof a=="string")a=new _(a,s);else if(a instanceof _)a.target=a.target||s;else{var T=a;a=new _(c,s),Ns(a,T)}T=!0;let A,P;if(u)for(P=u.length-1;P>=0;P--)A=a.g=u[P],T=gn(A,c,!0,a)&&T;if(A=a.g=s,T=gn(A,c,!0,a)&&T,T=gn(A,c,!1,a)&&T,u)for(P=0;P<u.length;P++)A=a.g=u[P],T=gn(A,c,!1,a)&&T}lt.prototype.N=function(){if(lt.Z.N.call(this),this.i){var s=this.i;for(const a in s.g){const u=s.g[a];for(let c=0;c<u.length;c++)dn(u[c]);delete s.g[a],s.h--}}this.G=null},lt.prototype.J=function(s,a,u,c){return this.i.add(String(s),a,!1,u,c)},lt.prototype.K=function(s,a,u,c){return this.i.add(String(s),a,!0,u,c)};function gn(s,a,u,c){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();let T=!0;for(let A=0;A<a.length;++A){const P=a[A];if(P&&!P.da&&P.capture==u){const k=P.listener,Z=P.ha||P.src;P.fa&&lr(s.i,P),T=k.call(Z,c)!==!1&&T}}return T&&!c.defaultPrevented}function rl(s,a){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=p(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(a)>2147483647?-1:l.setTimeout(s,a||0)}function Ls(s){s.g=rl(()=>{s.g=null,s.i&&(s.i=!1,Ls(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class sl extends E{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ls(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pe(s){E.call(this),this.h=s,this.g={}}w(Pe,E);var Fs=[];function Us(s){pn(s.g,function(a,u){this.g.hasOwnProperty(u)&&fr(a)},s),s.g={}}Pe.prototype.N=function(){Pe.Z.N.call(this),Us(this)},Pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mr=l.JSON.stringify,il=l.JSON.parse,ol=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function Bs(){}function js(){}var Ce={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function gr(){_.call(this,"d")}w(gr,_);function _r(){_.call(this,"c")}w(_r,_);var Xt={},$s=null;function _n(){return $s=$s||new lt}Xt.Ia="serverreachability";function qs(s){_.call(this,Xt.Ia,s)}w(qs,_);function be(s){const a=_n();dt(a,new qs(a))}Xt.STAT_EVENT="statevent";function zs(s,a){_.call(this,Xt.STAT_EVENT,s),this.stat=a}w(zs,_);function pt(s){const a=_n();dt(a,new zs(a,s))}Xt.Ja="timingevent";function Hs(s,a){_.call(this,Xt.Ja,s),this.size=a}w(Hs,_);function Ve(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},a)}function De(){this.g=!0}De.prototype.ua=function(){this.g=!1};function al(s,a,u,c,T,A){s.info(function(){if(s.g)if(A){var P="",k=A.split("&");for(let j=0;j<k.length;j++){var Z=k[j].split("=");if(Z.length>1){const tt=Z[0];Z=Z[1];const Pt=tt.split("_");P=Pt.length>=2&&Pt[1]=="type"?P+(tt+"="+Z+"&"):P+(tt+"=redacted&")}}}else P=null;else P=A;return"XMLHTTP REQ ("+c+") [attempt "+T+"]: "+a+`
`+u+`
`+P})}function ll(s,a,u,c,T,A,P){s.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+T+"]: "+a+`
`+u+`
`+A+" "+P})}function he(s,a,u,c){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+cl(s,u)+(c?" "+c:"")})}function ul(s,a){s.info(function(){return"TIMEOUT: "+a})}De.prototype.info=function(){};function cl(s,a){if(!s.g)return a;if(!a)return null;try{const A=JSON.parse(a);if(A){for(s=0;s<A.length;s++)if(Array.isArray(A[s])){var u=A[s];if(!(u.length<2)){var c=u[1];if(Array.isArray(c)&&!(c.length<1)){var T=c[0];if(T!="noop"&&T!="stop"&&T!="close")for(let P=1;P<c.length;P++)c[P]=""}}}}return mr(A)}catch{return a}}var yn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Gs={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ks;function yr(){}w(yr,Bs),yr.prototype.g=function(){return new XMLHttpRequest},Ks=new yr;function Ne(s){return encodeURIComponent(String(s))}function hl(s){var a=1;s=s.split(":");const u=[];for(;a>0&&s.length;)u.push(s.shift()),a--;return s.length&&u.push(s.join(":")),u}function xt(s,a,u,c){this.j=s,this.i=a,this.l=u,this.S=c||1,this.V=new Pe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ws}function Ws(){this.i=null,this.g="",this.h=!1}var Qs={},Er={};function Tr(s,a,u){s.M=1,s.A=Tn(St(a)),s.u=u,s.R=!0,Xs(s,null)}function Xs(s,a){s.F=Date.now(),En(s),s.B=St(s.A);var u=s.B,c=s.S;Array.isArray(c)||(c=[String(c)]),ui(u.i,"t",c),s.C=0,u=s.j.L,s.h=new Ws,s.g=Pi(s.j,u?a:null,!s.u),s.P>0&&(s.O=new sl(p(s.Y,s,s.g),s.P)),a=s.V,u=s.g,c=s.ba;var T="readystatechange";Array.isArray(T)||(T&&(Fs[0]=T.toString()),T=Fs);for(let A=0;A<T.length;A++){const P=Os(u,T[A],c||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=s.J?Vs(s.J):{},s.u?(s.v||(s.v="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,a)):(s.v="GET",s.g.ea(s.B,s.v,null,a)),be(),al(s.i,s.v,s.B,s.l,s.S,s.u)}xt.prototype.ba=function(s){s=s.target;const a=this.O;a&&Ft(s)==3?a.j():this.Y(s)},xt.prototype.Y=function(s){try{if(s==this.g)t:{const k=Ft(this.g),Z=this.g.ya(),j=this.g.ca();if(!(k<3)&&(k!=3||this.g&&(this.h.h||this.g.la()||gi(this.g)))){this.K||k!=4||Z==7||(Z==8||j<=0?be(3):be(2)),vr(this);var a=this.g.ca();this.X=a;var u=fl(this);if(this.o=a==200,ll(this.i,this.v,this.B,this.l,this.S,k,a),this.o){if(this.U&&!this.L){e:{if(this.g){var c,T=this.g;if((c=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(c)){var A=c;break e}}A=null}if(s=A)he(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ir(this,s);else{this.o=!1,this.m=3,pt(12),Jt(this),Oe(this);break t}}if(this.R){s=!0;let tt;for(;!this.K&&this.C<u.length;)if(tt=dl(this,u),tt==Er){k==4&&(this.m=4,pt(14),s=!1),he(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==Qs){this.m=4,pt(15),he(this.i,this.l,u,"[Invalid Chunk]"),s=!1;break}else he(this.i,this.l,tt,null),Ir(this,tt);if(Js(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),k!=4||u.length!=0||this.h.h||(this.m=1,pt(16),s=!1),this.o=this.o&&s,!s)he(this.i,this.l,u,"[Invalid Chunked Response]"),Jt(this),Oe(this);else if(u.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),Vr(P),P.P=!0,pt(11))}}else he(this.i,this.l,u,null),Ir(this,u);k==4&&Jt(this),this.o&&!this.K&&(k==4?Ai(this.j,this):(this.o=!1,En(this)))}else Pl(this.g),a==400&&u.indexOf("Unknown SID")>0?(this.m=3,pt(12)):(this.m=0,pt(13)),Jt(this),Oe(this)}}}catch{}finally{}};function fl(s){if(!Js(s))return s.g.la();const a=gi(s.g);if(a==="")return"";let u="";const c=a.length,T=Ft(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return Jt(s),Oe(s),"";s.h.i=new l.TextDecoder}for(let A=0;A<c;A++)s.h.h=!0,u+=s.h.i.decode(a[A],{stream:!(T&&A==c-1)});return a.length=0,s.h.g+=u,s.C=0,s.h.g}function Js(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function dl(s,a){var u=s.C,c=a.indexOf(`
`,u);return c==-1?Er:(u=Number(a.substring(u,c)),isNaN(u)?Qs:(c+=1,c+u>a.length?Er:(a=a.slice(c,c+u),s.C=c+u,a)))}xt.prototype.cancel=function(){this.K=!0,Jt(this)};function En(s){s.T=Date.now()+s.H,Ys(s,s.H)}function Ys(s,a){if(s.D!=null)throw Error("WatchDog timer not null");s.D=Ve(p(s.aa,s),a)}function vr(s){s.D&&(l.clearTimeout(s.D),s.D=null)}xt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(ul(this.i,this.B),this.M!=2&&(be(),pt(17)),Jt(this),this.m=2,Oe(this)):Ys(this,this.T-s)};function Oe(s){s.j.I==0||s.K||Ai(s.j,s)}function Jt(s){vr(s);var a=s.O;a&&typeof a.dispose=="function"&&a.dispose(),s.O=null,Us(s.V),s.g&&(a=s.g,s.g=null,a.abort(),a.dispose())}function Ir(s,a){try{var u=s.j;if(u.I!=0&&(u.g==s||Ar(u.h,s))){if(!s.L&&Ar(u.h,s)&&u.I==3){try{var c=u.Ba.g.parse(a)}catch{c=null}if(Array.isArray(c)&&c.length==3){var T=c;if(T[0]==0){t:if(!u.v){if(u.g)if(u.g.F+3e3<s.F)Rn(u),An(u);else break t;br(u),pt(18)}}else u.xa=T[1],0<u.xa-u.K&&T[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=Ve(p(u.Va,u),6e3));ei(u.h)<=1&&u.ta&&(u.ta=void 0)}else Zt(u,11)}else if((s.L||u.g==s)&&Rn(u),!m(a))for(T=u.Ba.g.parse(a),a=0;a<T.length;a++){let j=T[a];const tt=j[0];if(!(tt<=u.K))if(u.K=tt,j=j[1],u.I==2)if(j[0]=="c"){u.M=j[1],u.ba=j[2];const Pt=j[3];Pt!=null&&(u.ka=Pt,u.j.info("VER="+u.ka));const te=j[4];te!=null&&(u.za=te,u.j.info("SVER="+u.za));const Ut=j[5];Ut!=null&&typeof Ut=="number"&&Ut>0&&(c=1.5*Ut,u.O=c,u.j.info("backChannelRequestTimeoutMs_="+c)),c=u;const Bt=s.g;if(Bt){const Pn=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pn){var A=c.h;A.g||Pn.indexOf("spdy")==-1&&Pn.indexOf("quic")==-1&&Pn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(wr(A,A.h),A.h=null))}if(c.G){const Dr=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Dr&&(c.wa=Dr,q(c.J,c.G,Dr))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-s.F,u.j.info("Handshake RTT: "+u.T+"ms")),c=u;var P=s;if(c.na=Si(c,c.L?c.ba:null,c.W),P.L){ni(c.h,P);var k=P,Z=c.O;Z&&(k.H=Z),k.D&&(vr(k),En(k)),c.g=P}else vi(c);u.i.length>0&&wn(u)}else j[0]!="stop"&&j[0]!="close"||Zt(u,7);else u.I==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Zt(u,7):Cr(u):j[0]!="noop"&&u.l&&u.l.qa(j),u.A=0)}}be(4)}catch{}}var pl=class{constructor(s,a){this.g=s,this.map=a}};function Zs(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ti(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ei(s){return s.h?1:s.g?s.g.size:0}function Ar(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function wr(s,a){s.g?s.g.add(a):s.h=a}function ni(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Zs.prototype.cancel=function(){if(this.i=ri(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ri(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const u of s.g.values())a=a.concat(u.G);return a}return V(s.i)}var si=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ml(s,a){if(s){s=s.split("&");for(let u=0;u<s.length;u++){const c=s[u].indexOf("=");let T,A=null;c>=0?(T=s[u].substring(0,c),A=s[u].substring(c+1)):T=s[u],a(T,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Mt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let a;s instanceof Mt?(this.l=s.l,ke(this,s.j),this.o=s.o,this.g=s.g,xe(this,s.u),this.h=s.h,Rr(this,ci(s.i)),this.m=s.m):s&&(a=String(s).match(si))?(this.l=!1,ke(this,a[1]||"",!0),this.o=Me(a[2]||""),this.g=Me(a[3]||"",!0),xe(this,a[4]),this.h=Me(a[5]||"",!0),Rr(this,a[6]||"",!0),this.m=Me(a[7]||"")):(this.l=!1,this.i=new Fe(null,this.l))}Mt.prototype.toString=function(){const s=[];var a=this.j;a&&s.push(Le(a,ii,!0),":");var u=this.g;return(u||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Le(a,ii,!0),"@"),s.push(Ne(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&s.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(Le(u,u.charAt(0)=="/"?yl:_l,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",Le(u,Tl)),s.join("")},Mt.prototype.resolve=function(s){const a=St(this);let u=!!s.j;u?ke(a,s.j):u=!!s.o,u?a.o=s.o:u=!!s.g,u?a.g=s.g:u=s.u!=null;var c=s.h;if(u)xe(a,s.u);else if(u=!!s.h){if(c.charAt(0)!="/")if(this.g&&!this.h)c="/"+c;else{var T=a.h.lastIndexOf("/");T!=-1&&(c=a.h.slice(0,T+1)+c)}if(T=c,T==".."||T==".")c="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){c=T.lastIndexOf("/",0)==0,T=T.split("/");const A=[];for(let P=0;P<T.length;){const k=T[P++];k=="."?c&&P==T.length&&A.push(""):k==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),c&&P==T.length&&A.push("")):(A.push(k),c=!0)}c=A.join("/")}else c=T}return u?a.h=c:u=s.i.toString()!=="",u?Rr(a,ci(s.i)):u=!!s.m,u&&(a.m=s.m),a};function St(s){return new Mt(s)}function ke(s,a,u){s.j=u?Me(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function xe(s,a){if(a){if(a=Number(a),isNaN(a)||a<0)throw Error("Bad port number "+a);s.u=a}else s.u=null}function Rr(s,a,u){a instanceof Fe?(s.i=a,vl(s.i,s.l)):(u||(a=Le(a,El)),s.i=new Fe(a,s.l))}function q(s,a,u){s.i.set(a,u)}function Tn(s){return q(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function Me(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Le(s,a,u){return typeof s=="string"?(s=encodeURI(s).replace(a,gl),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function gl(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ii=/[#\/\?@]/g,_l=/[#\?:]/g,yl=/[#\?]/g,El=/[#\?@]/g,Tl=/#/g;function Fe(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Yt(s){s.g||(s.g=new Map,s.h=0,s.i&&ml(s.i,function(a,u){s.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}n=Fe.prototype,n.add=function(s,a){Yt(this),this.i=null,s=fe(this,s);let u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(a),this.h+=1,this};function oi(s,a){Yt(s),a=fe(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function ai(s,a){return Yt(s),a=fe(s,a),s.g.has(a)}n.forEach=function(s,a){Yt(this),this.g.forEach(function(u,c){u.forEach(function(T){s.call(a,T,c,this)},this)},this)};function li(s,a){Yt(s);let u=[];if(typeof a=="string")ai(s,a)&&(u=u.concat(s.g.get(fe(s,a))));else for(s=Array.from(s.g.values()),a=0;a<s.length;a++)u=u.concat(s[a]);return u}n.set=function(s,a){return Yt(this),this.i=null,s=fe(this,s),ai(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=li(this,s),s.length>0?String(s[0]):a):a};function ui(s,a,u){oi(s,a),u.length>0&&(s.i=null,s.g.set(fe(s,a),V(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(let c=0;c<a.length;c++){var u=a[c];const T=Ne(u);u=li(this,u);for(let A=0;A<u.length;A++){let P=T;u[A]!==""&&(P+="="+Ne(u[A])),s.push(P)}}return this.i=s.join("&")};function ci(s){const a=new Fe;return a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),a}function fe(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function vl(s,a){a&&!s.j&&(Yt(s),s.i=null,s.g.forEach(function(u,c){const T=c.toLowerCase();c!=T&&(oi(this,c),ui(this,T,u))},s)),s.j=a}function Il(s,a){const u=new De;if(l.Image){const c=new Image;c.onload=I(Lt,u,"TestLoadImage: loaded",!0,a,c),c.onerror=I(Lt,u,"TestLoadImage: error",!1,a,c),c.onabort=I(Lt,u,"TestLoadImage: abort",!1,a,c),c.ontimeout=I(Lt,u,"TestLoadImage: timeout",!1,a,c),l.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=s}else a(!1)}function Al(s,a){const u=new De,c=new AbortController,T=setTimeout(()=>{c.abort(),Lt(u,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:c.signal}).then(A=>{clearTimeout(T),A.ok?Lt(u,"TestPingServer: ok",!0,a):Lt(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Lt(u,"TestPingServer: error",!1,a)})}function Lt(s,a,u,c,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),c(u)}catch{}}function wl(){this.g=new ol}function Sr(s){this.i=s.Sb||null,this.h=s.ab||!1}w(Sr,Bs),Sr.prototype.g=function(){return new vn(this.i,this.h)};function vn(s,a){lt.call(this),this.H=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(vn,lt),n=vn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=a,this.readyState=1,Be(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const a={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(a.body=s),(this.H||l).fetch(new Request(this.D,a)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ue(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Be(this)),this.g&&(this.readyState=3,Be(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;hi(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function hi(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.B.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Ue(this):Be(this),this.readyState==3&&hi(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,Ue(this))},n.Na=function(s){this.g&&(this.response=s,Ue(this))},n.ga=function(){this.g&&Ue(this)};function Ue(s){s.readyState=4,s.l=null,s.j=null,s.B=null,Be(s)}n.setRequestHeader=function(s,a){this.A.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=a.next();return s.join(`\r
`)};function Be(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(vn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function fi(s){let a="";return pn(s,function(u,c){a+=c,a+=":",a+=u,a+=`\r
`}),a}function Pr(s,a,u){t:{for(c in u){var c=!1;break t}c=!0}c||(u=fi(u),typeof s=="string"?u!=null&&Ne(u):q(s,a,u))}function K(s){lt.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(K,lt);var Rl=/^https?$/i,Sl=["POST","PUT"];n=K.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,a,u,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ks.g(),this.g.onreadystatechange=C(p(this.Ca,this));try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(A){di(this,A);return}if(s=u||"",u=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var T in c)u.set(T,c[T]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const A of c.keys())u.set(A,c.get(A));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(u.keys()).find(A=>A.toLowerCase()=="content-type"),T=l.FormData&&s instanceof l.FormData,!(Array.prototype.indexOf.call(Sl,a,void 0)>=0)||c||T||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,P]of u)this.g.setRequestHeader(A,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(A){di(this,A)}};function di(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.o=5,pi(s),In(s)}function pi(s){s.A||(s.A=!0,dt(s,"complete"),dt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,dt(this,"complete"),dt(this,"abort"),In(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),In(this,!0)),K.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?mi(this):this.Xa())},n.Xa=function(){mi(this)};function mi(s){if(s.h&&typeof o<"u"){if(s.v&&Ft(s)==4)setTimeout(s.Ca.bind(s),0);else if(dt(s,"readystatechange"),Ft(s)==4){s.h=!1;try{const A=s.ca();t:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var u;if(!(u=a)){var c;if(c=A===0){let P=String(s.D).match(si)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),c=!Rl.test(P?P.toLowerCase():"")}u=c}if(u)dt(s,"complete"),dt(s,"success");else{s.o=6;try{var T=Ft(s)>2?s.g.statusText:""}catch{T=""}s.l=T+" ["+s.ca()+"]",pi(s)}}finally{In(s)}}}}function In(s,a){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const u=s.g;s.g=null,a||dt(s,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ft(s){return s.g?s.g.readyState:0}n.ca=function(){try{return Ft(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),il(a)}};function gi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Pl(s){const a={};s=(s.g&&Ft(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<s.length;c++){if(m(s[c]))continue;var u=hl(s[c]);const T=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const A=a[T]||[];a[T]=A,A.push(u)}Za(a,function(c){return c.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function je(s,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||a}function _i(s){this.za=0,this.i=[],this.j=new De,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=je("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=je("baseRetryDelayMs",5e3,s),this.Za=je("retryDelaySeedMs",1e4,s),this.Ta=je("forwardChannelMaxRetries",2,s),this.va=je("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new Zs(s&&s.concurrentRequestLimit),this.Ba=new wl,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=_i.prototype,n.ka=8,n.I=1,n.connect=function(s,a,u,c){pt(0),this.W=s,this.H=a||{},u&&c!==void 0&&(this.H.OSID=u,this.H.OAID=c),this.F=this.X,this.J=Si(this,null,this.W),wn(this)};function Cr(s){if(yi(s),s.I==3){var a=s.V++,u=St(s.J);if(q(u,"SID",s.M),q(u,"RID",a),q(u,"TYPE","terminate"),$e(s,u),a=new xt(s,s.j,a),a.M=2,a.A=Tn(St(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(a.A.toString(),"")}catch{}!u&&l.Image&&(new Image().src=a.A,u=!0),u||(a.g=Pi(a.j,null),a.g.ea(a.A)),a.F=Date.now(),En(a)}Ri(s)}function An(s){s.g&&(Vr(s),s.g.cancel(),s.g=null)}function yi(s){An(s),s.v&&(l.clearTimeout(s.v),s.v=null),Rn(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&l.clearTimeout(s.m),s.m=null)}function wn(s){if(!ti(s.h)&&!s.m){s.m=!0;var a=s.Ea;mt||d(),Et||(mt(),Et=!0),y.add(a,s),s.D=0}}function Cl(s,a){return ei(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=a.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=Ve(p(s.Ea,s,a),wi(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const T=new xt(this,this.j,s);let A=this.o;if(this.U&&(A?(A=Vs(A),Ns(A,this.U)):A=this.U),this.u!==null||this.R||(T.J=A,A=null),this.S)t:{for(var a=0,u=0;u<this.i.length;u++){e:{var c=this.i[u];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break e}c=void 0}if(c===void 0)break;if(a+=c,a>4096){a=u;break t}if(a===4096||u===this.i.length-1){a=u+1;break t}}a=1e3}else a=1e3;a=Ti(this,T,a),u=St(this.J),q(u,"RID",s),q(u,"CVER",22),this.G&&q(u,"X-HTTP-Session-Id",this.G),$e(this,u),A&&(this.R?a="headers="+Ne(fi(A))+"&"+a:this.u&&Pr(u,this.u,A)),wr(this.h,T),this.Ra&&q(u,"TYPE","init"),this.S?(q(u,"$req",a),q(u,"SID","null"),T.U=!0,Tr(T,u,null)):Tr(T,u,a),this.I=2}}else this.I==3&&(s?Ei(this,s):this.i.length==0||ti(this.h)||Ei(this))};function Ei(s,a){var u;a?u=a.l:u=s.V++;const c=St(s.J);q(c,"SID",s.M),q(c,"RID",u),q(c,"AID",s.K),$e(s,c),s.u&&s.o&&Pr(c,s.u,s.o),u=new xt(s,s.j,u,s.D+1),s.u===null&&(u.J=s.o),a&&(s.i=a.G.concat(s.i)),a=Ti(s,u,1e3),u.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),wr(s.h,u),Tr(u,c,a)}function $e(s,a){s.H&&pn(s.H,function(u,c){q(a,c,u)}),s.l&&pn({},function(u,c){q(a,c,u)})}function Ti(s,a,u){u=Math.min(s.i.length,u);const c=s.l?p(s.l.Ka,s.l,s):null;t:{var T=s.i;let k=-1;for(;;){const Z=["count="+u];k==-1?u>0?(k=T[0].g,Z.push("ofs="+k)):k=0:Z.push("ofs="+k);let j=!0;for(let tt=0;tt<u;tt++){var A=T[tt].g;const Pt=T[tt].map;if(A-=k,A<0)k=Math.max(0,T[tt].g-100),j=!1;else try{A="req"+A+"_"||"";try{var P=Pt instanceof Map?Pt:Object.entries(Pt);for(const[te,Ut]of P){let Bt=Ut;h(Ut)&&(Bt=mr(Ut)),Z.push(A+te+"="+encodeURIComponent(Bt))}}catch(te){throw Z.push(A+"type="+encodeURIComponent("_badmap")),te}}catch{c&&c(Pt)}}if(j){P=Z.join("&");break t}}P=void 0}return s=s.i.splice(0,u),a.G=s,P}function vi(s){if(!s.g&&!s.v){s.Y=1;var a=s.Da;mt||d(),Et||(mt(),Et=!0),y.add(a,s),s.A=0}}function br(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=Ve(p(s.Da,s),wi(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,Ii(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=Ve(p(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,pt(10),An(this),Ii(this))};function Vr(s){s.B!=null&&(l.clearTimeout(s.B),s.B=null)}function Ii(s){s.g=new xt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var a=St(s.na);q(a,"RID","rpc"),q(a,"SID",s.M),q(a,"AID",s.K),q(a,"CI",s.F?"0":"1"),!s.F&&s.ia&&q(a,"TO",s.ia),q(a,"TYPE","xmlhttp"),$e(s,a),s.u&&s.o&&Pr(a,s.u,s.o),s.O&&(s.g.H=s.O);var u=s.g;s=s.ba,u.M=1,u.A=Tn(St(a)),u.u=null,u.R=!0,Xs(u,s)}n.Va=function(){this.C!=null&&(this.C=null,An(this),br(this),pt(19))};function Rn(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Ai(s,a){var u=null;if(s.g==a){Rn(s),Vr(s),s.g=null;var c=2}else if(Ar(s.h,a))u=a.G,ni(s.h,a),c=1;else return;if(s.I!=0){if(a.o)if(c==1){u=a.u?a.u.length:0,a=Date.now()-a.F;var T=s.D;c=_n(),dt(c,new Hs(c,u)),wn(s)}else vi(s);else if(T=a.m,T==3||T==0&&a.X>0||!(c==1&&Cl(s,a)||c==2&&br(s)))switch(u&&u.length>0&&(a=s.h,a.i=a.i.concat(u)),T){case 1:Zt(s,5);break;case 4:Zt(s,10);break;case 3:Zt(s,6);break;default:Zt(s,2)}}}function wi(s,a){let u=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(u*=2),u*a}function Zt(s,a){if(s.j.info("Error code "+a),a==2){var u=p(s.bb,s),c=s.Ua;const T=!c;c=new Mt(c||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ke(c,"https"),Tn(c),T?Il(c.toString(),u):Al(c.toString(),u)}else pt(2);s.I=0,s.l&&s.l.pa(a),Ri(s),yi(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Ri(s){if(s.I=0,s.ja=[],s.l){const a=ri(s.h);(a.length!=0||s.i.length!=0)&&(N(s.ja,a),N(s.ja,s.i),s.h.i.length=0,V(s.i),s.i.length=0),s.l.oa()}}function Si(s,a,u){var c=u instanceof Mt?St(u):new Mt(u);if(c.g!="")a&&(c.g=a+"."+c.g),xe(c,c.u);else{var T=l.location;c=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;const A=new Mt(null);c&&ke(A,c),a&&(A.g=a),T&&xe(A,T),u&&(A.h=u),c=A}return u=s.G,a=s.wa,u&&a&&q(c,u,a),q(c,"VER",s.ka),$e(s,c),c}function Pi(s,a,u){if(a&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Aa&&!s.ma?new K(new Sr({ab:u})):new K(s.ma),a.Fa(s.L),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ci(){}n=Ci.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Sn(){}Sn.prototype.g=function(s,a){return new Tt(s,a)};function Tt(s,a){lt.call(this),this.g=new _i(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.sa&&(s?s["X-WebChannel-Client-Profile"]=a.sa:s={"X-WebChannel-Client-Profile":a.sa}),this.g.U=s,(s=a&&a.Qb)&&!m(s)&&(this.g.u=s),this.A=a&&a.supportsCrossDomainXhr||!1,this.v=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!m(a)&&(this.g.G=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new de(this)}w(Tt,lt),Tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Cr(this.g)},Tt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.v&&(u={},u.__data__=mr(s),s=u);a.i.push(new pl(a.Ya++,s)),a.I==3&&wn(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Cr(this.g),delete this.g,Tt.Z.N.call(this)};function bi(s){gr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const u in a){s=u;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}w(bi,gr);function Vi(){_r.call(this),this.status=1}w(Vi,_r);function de(s){this.g=s}w(de,Ci),de.prototype.ra=function(){dt(this.g,"a")},de.prototype.qa=function(s){dt(this.g,new bi(s))},de.prototype.pa=function(s){dt(this.g,new Vi)},de.prototype.oa=function(){dt(this.g,"b")},Sn.prototype.createWebChannel=Sn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,Ko=function(){return new Sn},Go=function(){return _n()},Ho=Xt,Hr={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},yn.NO_ERROR=0,yn.TIMEOUT=8,yn.HTTP_ERROR=6,kn=yn,Gs.COMPLETE="complete",zo=Gs,js.EventType=Ce,Ce.OPEN="a",Ce.CLOSE="b",Ce.ERROR="c",Ce.MESSAGE="d",lt.prototype.listen=lt.prototype.J,He=js,K.prototype.listenOnce=K.prototype.K,K.prototype.getLastError=K.prototype.Ha,K.prototype.getLastErrorCode=K.prototype.ya,K.prototype.getStatus=K.prototype.ca,K.prototype.getResponseJson=K.prototype.La,K.prototype.getResponseText=K.prototype.la,K.prototype.send=K.prototype.ea,K.prototype.setWithCredentials=K.prototype.Fa,qo=K}).apply(typeof Cn<"u"?Cn:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Re="12.13.0";function hc(n){Re=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new Lo("@firebase/firestore");function pe(){return ie.logLevel}function b(n,...t){if(ie.logLevel<=U.DEBUG){const e=t.map(os);ie.debug(`Firestore (${Re}): ${n}`,...e)}}function oe(n,...t){if(ie.logLevel<=U.ERROR){const e=t.map(os);ie.error(`Firestore (${Re}): ${n}`,...e)}}function tn(n,...t){if(ie.logLevel<=U.WARN){const e=t.map(os);ie.warn(`Firestore (${Re}): ${n}`,...e)}}function os(n){if(typeof n=="string")return n;try{return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Wo(n,r,e)}function Wo(n,t,e){let r=`FIRESTORE (${Re}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw oe(r),new Error(r)}function W(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||Wo(t,i,r)}function $(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends we{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class fc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ct.UNAUTHENTICATED))}shutdown(){}}class dc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class pc{constructor(t){this.t=t,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){W(this.o===void 0,42304);let r=this.i;const i=f=>this.i!==r?(r=this.i,e(f)):Promise.resolve();let o=new re;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new re,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await i(this.currentUser)})},h=f=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new re)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string",31837,{l:r}),new Qo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return W(t===null||typeof t=="string",2055,{h:t}),new ct(t)}}class mc{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class gc{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new mc(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $i{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _c{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wu(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){W(this.o===void 0,3512);const r=o=>{o.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.m;return this.m=o.token,b("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new $i(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(W(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new $i(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=yc(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function B(n,t){return n<t?-1:n>t?1:0}function Gr(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return Mr(i)===Mr(o)?B(i,o):Mr(i)?1:-1}return B(n.length,t.length)}const Ec=55296,Tc=57343;function Mr(n){const t=n.charCodeAt(0);return t>=Ec&&t<=Tc}function Te(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="__name__";class Ct{constructor(t,e,r){e===void 0?e=0:e>t.length&&x(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&x(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ct.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ct?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Ct.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return B(t.length,e.length)}static compareSegments(t,e){const r=Ct.isNumericId(t),i=Ct.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Ct.extractNumericId(t).compare(Ct.extractNumericId(e)):Gr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return is.fromString(t.substring(4,t.length-2))}}class G extends Ct{construct(t,e,r){return new G(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new D(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new G(e)}static emptyPath(){return new G([])}}const vc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Ct{construct(t,e,r){return new it(t,e,r)}static isValidIdentifier(t){return vc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qi}static keyField(){return new it([qi])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;i<t.length;){const h=t[i];if(h==="\\"){if(i+1===t.length)throw new D(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new D(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=f,i+=2}else h==="`"?(l=!l,i++):h!=="."||l?(r+=h,i++):(o(),i++)}if(o(),l)throw new D(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(e)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(G.fromString(t))}static fromName(t){return new O(G.fromString(t).popFirst(5))}static empty(){return new O(G.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&G.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return G.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new G(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(n,t,e){if(!e)throw new D(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Ic(n,t,e,r){if(t===!0&&r===!0)throw new D(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function zi(n){if(!O.isDocumentKey(n))throw new D(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Hi(n){if(O.isDocumentKey(n))throw new D(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Jo(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ls(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x(12329,{type:typeof n})}function Yo(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new D(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ls(n);throw new D(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(n,t){const e={typeString:n};return t&&(e.value=t),e}function an(n,t){if(!Jo(n))throw new D(S.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const l=n[r];if(i&&typeof l!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&l!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new D(S.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=-62135596800,Ki=1e6;class H{static now(){return H.fromMillis(Date.now())}static fromDate(t){return H.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Ki);return new H(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Gi)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ki}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:H._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(an(t,H._jsonSchema))return new H(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Gi;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}H._jsonSchemaVersion="firestore/timestamp/1.0",H._jsonSchema={type:Y("string",H._jsonSchemaVersion),seconds:Y("number"),nanoseconds:Y("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static fromTimestamp(t){return new z(t)}static min(){return new z(new H(0,0))}static max(){return new z(new H(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=-1;function Ac(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new H(e+1,0):new H(e,r));return new zt(i,O.empty(),t)}function wc(n){return new zt(n.readTime,n.key,en)}class zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new zt(z.min(),O.empty(),en)}static max(){return new zt(z.max(),O.empty(),en)}}function Rc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Sc)throw n;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,r)=>{e(t)})}static reject(t){return new R((e,r)=>{r(t)})}static waitFor(t){return new R((e,r)=>{let i=0,o=0,l=!1;t.forEach(h=>{++i,h.next(()=>{++o,l&&o===i&&e()},f=>r(f))}),l=!0,o===i&&e()})}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next(i=>i?R.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new R((r,i)=>{const o=t.length,l=new Array(o);let h=0;for(let f=0;f<o;f++){const p=f;e(t[p]).next(I=>{l[p]=I,++h,h===o&&r(l)},I=>i(I))}})}static doWhile(t,e){return new R((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Cc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ln(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}cs.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=-1;function fs(n){return n==null}function qn(n){return n===0&&1/n==-1/0}function bc(n){return typeof n=="number"&&Number.isInteger(n)&&!qn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="";function Vc(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Wi(t)),t=Dc(n.get(e),t);return Wi(t)}function Dc(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case Zo:e+="";break;default:e+=o}}return e}function Wi(n){return n+Zo+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Se(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ta(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e){this.comparator=t,this.root=e||rt.EMPTY}insert(t,e){return new yt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(t){return new yt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,rt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new bn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new bn(this.root,t,this.comparator,!1)}getReverseIterator(){return new bn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new bn(this.root,t,this.comparator,!0)}}class bn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class rt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=o??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new rt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw x(27949);return t+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.comparator=t,this.data=new yt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Xi(this.data.getIterator())}getIteratorFrom(t){return new Xi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ot)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ot(this.comparator);return e.data=t,e}}class Xi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new wt([])}unionWith(t){let e=new ot(it.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Te(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Nc("Invalid base64 string: "+o):o}}(t);return new Vt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o}(t);return new Vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const Oc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ae(n){if(W(!!n,39018),typeof n=="string"){let t=0;const e=Oc.exec(n);if(W(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ve(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="server_timestamp",na="__type__",ra="__previous_value__",sa="__local_write_time__";function ds(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[na])==null?void 0:r.stringValue)===ea}function ps(n){const t=n.mapValue.fields[ra];return ds(t)?ps(t):t}function zn(n){const t=ae(n.mapValue.fields[sa].timestampValue);return new H(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t,e,r,i,o,l,h,f,p,I,w){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=p,this.isUsingEmulator=I,this.apiKey=w}}const Hn="(default)";class Gn{constructor(t,e){this.projectId=t,this.database=e||Hn}static empty(){return new Gn("","")}get isDefaultDatabase(){return this.database===Hn}isEqual(t){return t instanceof Gn&&t.projectId===this.projectId&&t.database===this.database}}function xc(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new D(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gn(n.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="__type__",Mc="__max__",Vn={mapValue:{}},oa="__vector__",Kr="value";function le(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ds(n)?4:Fc(n)?9007199254740991:Lc(n)?10:11:x(28295,{value:n})}function Dt(n,t){if(n===t)return!0;const e=le(n);if(e!==le(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return zn(n).isEqual(zn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=ae(i.timestampValue),h=ae(o.timestampValue);return l.seconds===h.seconds&&l.nanos===h.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return ve(i.bytesValue).isEqual(ve(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return st(i.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(i.geoPointValue.longitude)===st(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return st(i.integerValue)===st(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=st(i.doubleValue),h=st(o.doubleValue);return l===h?qn(l)===qn(h):isNaN(l)&&isNaN(h)}return!1}(n,t);case 9:return Te(n.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:case 11:return function(i,o){const l=i.mapValue.fields||{},h=o.mapValue.fields||{};if(Qi(l)!==Qi(h))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(h[f]===void 0||!Dt(l[f],h[f])))return!1;return!0}(n,t);default:return x(52216,{left:n})}}function nn(n,t){return(n.values||[]).find(e=>Dt(e,t))!==void 0}function Ie(n,t){if(n===t)return 0;const e=le(n),r=le(t);if(e!==r)return B(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return function(o,l){const h=st(o.integerValue||o.doubleValue),f=st(l.integerValue||l.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(n,t);case 3:return Ji(n.timestampValue,t.timestampValue);case 4:return Ji(zn(n),zn(t));case 5:return Gr(n.stringValue,t.stringValue);case 6:return function(o,l){const h=ve(o),f=ve(l);return h.compareTo(f)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const h=o.split("/"),f=l.split("/");for(let p=0;p<h.length&&p<f.length;p++){const I=B(h[p],f[p]);if(I!==0)return I}return B(h.length,f.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const h=B(st(o.latitude),st(l.latitude));return h!==0?h:B(st(o.longitude),st(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Yi(n.arrayValue,t.arrayValue);case 10:return function(o,l){var C,V,N,L;const h=o.fields||{},f=l.fields||{},p=(C=h[Kr])==null?void 0:C.arrayValue,I=(V=f[Kr])==null?void 0:V.arrayValue,w=B(((N=p==null?void 0:p.values)==null?void 0:N.length)||0,((L=I==null?void 0:I.values)==null?void 0:L.length)||0);return w!==0?w:Yi(p,I)}(n.mapValue,t.mapValue);case 11:return function(o,l){if(o===Vn.mapValue&&l===Vn.mapValue)return 0;if(o===Vn.mapValue)return 1;if(l===Vn.mapValue)return-1;const h=o.fields||{},f=Object.keys(h),p=l.fields||{},I=Object.keys(p);f.sort(),I.sort();for(let w=0;w<f.length&&w<I.length;++w){const C=Gr(f[w],I[w]);if(C!==0)return C;const V=Ie(h[f[w]],p[I[w]]);if(V!==0)return V}return B(f.length,I.length)}(n.mapValue,t.mapValue);default:throw x(23264,{he:e})}}function Ji(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=ae(n),r=ae(t),i=B(e.seconds,r.seconds);return i!==0?i:B(e.nanos,r.nanos)}function Yi(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ie(e[i],r[i]);if(o)return o}return B(e.length,r.length)}function Ae(n){return Wr(n)}function Wr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ae(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ve(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Wr(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const l of r)o?o=!1:i+=",",i+=`${l}:${Wr(e.fields[l])}`;return i+"}"}(n.mapValue):x(61005,{value:n})}function xn(n){switch(le(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ps(n);return t?16+xn(t):16;case 5:return 2*n.stringValue.length;case 6:return ve(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+xn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Se(r.fields,(o,l)=>{i+=o.length+xn(l)}),i}(n.mapValue);default:throw x(13486,{value:n})}}function Qr(n){return!!n&&"integerValue"in n}function ms(n){return!!n&&"arrayValue"in n}function Mn(n){return!!n&&"mapValue"in n}function Lc(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[ia])==null?void 0:r.stringValue)===oa}function Ge(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Se(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ge(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ge(n.arrayValue.values[e]);return t}return{...n}}function Fc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Mc}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Mn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ge(e)}setAll(t){let e=it.emptyPath(),r={},i=[];t.forEach((l,h)=>{if(!e.isImmediateParentOf(h)){const f=this.getFieldsMap(e);this.applyChanges(f,r,i),r={},i=[],e=h.popLast()}l?r[h.lastSegment()]=Ge(l):i.push(h.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Mn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Mn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Se(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new It(Ge(this.value))}}function aa(n){const t=[];return Se(n.fields,(e,r)=>{const i=new it([e]);if(Mn(r)){const o=aa(r.mapValue).fields;if(o.length===0)t.push(i);else for(const l of o)t.push(i.child(l))}else t.push(i)}),new wt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e,r,i,o,l,h){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=l,this.documentState=h}static newInvalidDocument(t){return new vt(t,0,z.min(),z.min(),z.min(),It.empty(),0)}static newFoundDocument(t,e,r,i){return new vt(t,1,e,z.min(),r,i,0)}static newNoDocument(t,e){return new vt(t,2,e,z.min(),z.min(),It.empty(),0)}static newUnknownDocument(t,e){return new vt(t,3,e,z.min(),z.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e){this.position=t,this.inclusive=e}}function Zi(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],l=n.position[i];if(o.field.isKeyField()?r=O.comparator(O.fromName(l.referenceValue),e.key):r=Ie(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function to(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Dt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Uc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{}class nt extends la{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new jc(t,e,r):e==="array-contains"?new zc(t,r):e==="in"?new Hc(t,r):e==="not-in"?new Gc(t,r):e==="array-contains-any"?new Kc(t,r):new nt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new $c(t,r):new qc(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ie(e,this.value)):e!==null&&le(this.value)===le(e)&&this.matchesComparison(Ie(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends la{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Ht(t,e)}matches(t){return ua(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ua(n){return n.op==="and"}function ca(n){return Bc(n)&&ua(n)}function Bc(n){for(const t of n.filters)if(t instanceof Ht)return!1;return!0}function Xr(n){if(n instanceof nt)return n.field.canonicalString()+n.op.toString()+Ae(n.value);if(ca(n))return n.filters.map(t=>Xr(t)).join(",");{const t=n.filters.map(e=>Xr(e)).join(",");return`${n.op}(${t})`}}function ha(n,t){return n instanceof nt?function(r,i){return i instanceof nt&&r.op===i.op&&r.field.isEqual(i.field)&&Dt(r.value,i.value)}(n,t):n instanceof Ht?function(r,i){return i instanceof Ht&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,l,h)=>o&&ha(l,i.filters[h]),!0):!1}(n,t):void x(19439)}function fa(n){return n instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ae(e.value)}`}(n):n instanceof Ht?function(e){return e.op.toString()+" {"+e.getFilters().map(fa).join(" ,")+"}"}(n):"Filter"}class jc extends nt{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class $c extends nt{constructor(t,e){super(t,"in",e),this.keys=da("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class qc extends nt{constructor(t,e){super(t,"not-in",e),this.keys=da("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function da(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class zc extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ms(e)&&nn(e.arrayValue,this.value)}}class Hc extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&nn(this.value.arrayValue,e)}}class Gc extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!nn(this.value.arrayValue,e)}}class Kc extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ms(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>nn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t,e=null,r=[],i=[],o=null,l=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=l,this.endAt=h,this.Te=null}}function eo(n,t=null,e=[],r=[],i=null,o=null,l=null){return new Wc(n,t,e,r,i,o,l)}function gs(n){const t=$(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Xr(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),fs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ae(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ae(r)).join(",")),t.Te=e}return t.Te}function _s(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Uc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ha(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!to(n.startAt,t.startAt)&&to(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e=null,r=[],i=[],o=null,l="F",h=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=l,this.startAt=h,this.endAt=f,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Qc(n,t,e,r,i,o,l,h){return new tr(n,t,e,r,i,o,l,h)}function Xc(n){return new tr(n)}function no(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Jc(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Yc(n){return n.collectionGroup!==null}function Ke(n){const t=$(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let h=new ot(it.comparator);return l.filters.forEach(f=>{f.getFlattenedFilters().forEach(p=>{p.isInequality()&&(h=h.add(p.field))})}),h})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Wn(o,r))}),e.has(it.keyField().canonicalString())||t.Ie.push(new Wn(it.keyField(),r))}return t.Ie}function se(n){const t=$(n);return t.Ee||(t.Ee=Zc(t,Ke(n))),t.Ee}function Zc(n,t){if(n.limitType==="F")return eo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Wn(i.field,o)});const e=n.endAt?new Kn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Kn(n.startAt.position,n.startAt.inclusive):null;return eo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Jr(n,t,e){return new tr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function pa(n,t){return _s(se(n),se(t))&&n.limitType===t.limitType}function ma(n){return`${gs(se(n))}|lt:${n.limitType}`}function qe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>fa(i)).join(", ")}]`),fs(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Ae(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Ae(i)).join(",")),`Target(${r})`}(se(n))}; limitType=${n.limitType})`}function ys(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of Ke(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(l,h,f){const p=Zi(l,h,f);return l.inclusive?p<=0:p<0}(r.startAt,Ke(r),i)||r.endAt&&!function(l,h,f){const p=Zi(l,h,f);return l.inclusive?p>=0:p>0}(r.endAt,Ke(r),i))}(n,t)}function th(n){return(t,e)=>{let r=!1;for(const i of Ke(n)){const o=eh(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function eh(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,l,h){const f=l.data.field(o),p=h.data.field(o);return f!==null&&p!==null?Ie(f,p):x(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Se(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return ta(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=new yt(O.comparator);function Qn(){return nh}const ga=new yt(O.comparator);function Dn(...n){let t=ga;for(const e of n)t=t.insert(e.key,e);return t}function _a(n){let t=ga;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ne(){return We()}function ya(){return We()}function We(){return new ue(n=>n.toString(),(n,t)=>n.isEqual(t))}const rh=new yt(O.comparator),sh=new ot(O.comparator);function ht(...n){let t=sh;for(const e of n)t=t.add(e);return t}const ih=new ot(B);function oh(){return ih}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qn(t)?"-0":t}}function Ea(n){return{integerValue:""+n}}function ah(n,t){return bc(t)?Ea(t):Es(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this._=void 0}}function lh(n,t,e){return n instanceof rn?function(i,o){const l={fields:{[na]:{stringValue:ea},[sa]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ds(o)&&(o=ps(o)),o&&(l.fields[ra]=o),{mapValue:l}}(e,t):n instanceof sn?va(n,t):n instanceof on?Ia(n,t):function(i,o){const l=Ta(i,o),h=ro(l)+ro(i.Ae);return Qr(l)&&Qr(i.Ae)?Ea(h):Es(i.serializer,h)}(n,t)}function uh(n,t,e){return n instanceof sn?va(n,t):n instanceof on?Ia(n,t):e}function Ta(n,t){return n instanceof Xn?function(r){return Qr(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class rn extends er{}class sn extends er{constructor(t){super(),this.elements=t}}function va(n,t){const e=Aa(t);for(const r of n.elements)e.some(i=>Dt(i,r))||e.push(r);return{arrayValue:{values:e}}}class on extends er{constructor(t){super(),this.elements=t}}function Ia(n,t){let e=Aa(t);for(const r of n.elements)e=e.filter(i=>!Dt(i,r));return{arrayValue:{values:e}}}class Xn extends er{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function ro(n){return st(n.integerValue||n.doubleValue)}function Aa(n){return ms(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t,e){this.field=t,this.transform=e}}function hh(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof sn&&i instanceof sn||r instanceof on&&i instanceof on?Te(r.elements,i.elements,Dt):r instanceof Xn&&i instanceof Xn?Dt(r.Ae,i.Ae):r instanceof rn&&i instanceof rn}(n.transform,t.transform)}class fh{constructor(t,e){this.version=t,this.transformResults=e}}class Nt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Nt}static exists(t){return new Nt(void 0,t)}static updateTime(t){return new Nt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ln(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class nr{}function wa(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Sa(n.key,Nt.none()):new un(n.key,n.data,Nt.none());{const e=n.data,r=It.empty();let i=new ot(it.comparator);for(let o of t.fields)if(!i.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),i=i.add(o)}return new ce(n.key,r,new wt(i.toArray()),Nt.none())}}function dh(n,t,e){n instanceof un?function(i,o,l){const h=i.value.clone(),f=io(i.fieldTransforms,o,l.transformResults);h.setAll(f),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(n,t,e):n instanceof ce?function(i,o,l){if(!Ln(i.precondition,o))return void o.convertToUnknownDocument(l.version);const h=io(i.fieldTransforms,o,l.transformResults),f=o.data;f.setAll(Ra(i)),f.setAll(h),o.convertToFoundDocument(l.version,f).setHasCommittedMutations()}(n,t,e):function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function Qe(n,t,e,r){return n instanceof un?function(o,l,h,f){if(!Ln(o.precondition,l))return h;const p=o.value.clone(),I=oo(o.fieldTransforms,f,l);return p.setAll(I),l.convertToFoundDocument(l.version,p).setHasLocalMutations(),null}(n,t,e,r):n instanceof ce?function(o,l,h,f){if(!Ln(o.precondition,l))return h;const p=oo(o.fieldTransforms,f,l),I=l.data;return I.setAll(Ra(o)),I.setAll(p),l.convertToFoundDocument(l.version,I).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(o,l,h){return Ln(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):h}(n,t,e)}function ph(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=Ta(r.transform,i||null);o!=null&&(e===null&&(e=It.empty()),e.set(r.field,o))}return e||null}function so(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Te(r,i,(o,l)=>hh(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class un extends nr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ce extends nr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ra(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function io(n,t,e){const r=new Map;W(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let i=0;i<e.length;i++){const o=n[i],l=o.transform,h=t.data.field(o.field);r.set(o.field,uh(l,h,e[i]))}return r}function oo(n,t,e){const r=new Map;for(const i of n){const o=i.transform,l=e.data.field(i.field);r.set(i.field,lh(o,l,t))}return r}class Sa extends nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mh extends nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&dh(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Qe(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Qe(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=ya();return this.mutations.forEach(i=>{const o=t.get(i.key),l=o.overlayedDocument;let h=this.applyToLocalView(l,o.mutatedFields);h=e.has(i.key)?null:h;const f=wa(l,h);f!==null&&r.set(i.key,f),l.isValidDocument()||l.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ht())}isEqual(t){return this.batchId===t.batchId&&Te(this.mutations,t.mutations,(e,r)=>so(e,r))&&Te(this.baseMutations,t.baseMutations,(e,r)=>so(e,r))}}class Ts{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){W(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=function(){return rh}();const o=t.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,r[l].version);return new Ts(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J,F;function yh(n){switch(n){case S.OK:return x(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return x(15467,{code:n})}}function Eh(n){if(n===void 0)return oe("GRPC error has no .code"),S.UNKNOWN;switch(n){case J.OK:return S.OK;case J.CANCELLED:return S.CANCELLED;case J.UNKNOWN:return S.UNKNOWN;case J.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case J.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case J.INTERNAL:return S.INTERNAL;case J.UNAVAILABLE:return S.UNAVAILABLE;case J.UNAUTHENTICATED:return S.UNAUTHENTICATED;case J.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case J.NOT_FOUND:return S.NOT_FOUND;case J.ALREADY_EXISTS:return S.ALREADY_EXISTS;case J.PERMISSION_DENIED:return S.PERMISSION_DENIED;case J.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case J.ABORTED:return S.ABORTED;case J.OUT_OF_RANGE:return S.OUT_OF_RANGE;case J.UNIMPLEMENTED:return S.UNIMPLEMENTED;case J.DATA_LOSS:return S.DATA_LOSS;default:return x(39323,{code:n})}}(F=J||(J={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new is([4294967295,4294967295],0);class Th{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Yr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function vh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ih(n,t){return Yr(n,t.toTimestamp())}function _e(n){return W(!!n,49232),z.fromTimestamp(function(e){const r=ae(e);return new H(r.seconds,r.nanos)}(n))}function Pa(n,t){return Zr(n,t).canonicalString()}function Zr(n,t){const e=function(i){return new G(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ah(n){const t=G.fromString(n);return W(Dh(t),10190,{key:t.toString()}),t}function ts(n,t){return Pa(n.databaseId,t.path)}function wh(n){const t=Ah(n);return t.length===4?G.emptyPath():Sh(t)}function Rh(n){return new G(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Sh(n){return W(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ao(n,t,e){return{name:ts(n,t),fields:e.value.mapValue.fields}}function Ph(n,t){let e;if(t instanceof un)e={update:ao(n,t.key,t.value)};else if(t instanceof Sa)e={delete:ts(n,t.key)};else if(t instanceof ce)e={update:ao(n,t.key,t.data),updateMask:Vh(t.fieldMask)};else{if(!(t instanceof mh))return x(16599,{dt:t.type});e={verify:ts(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,l){const h=l.transform;if(h instanceof rn)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof sn)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof on)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Xn)return{fieldPath:l.field.canonicalString(),increment:h.Ae};throw x(20930,{transform:l.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Ih(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x(27497)}(n,t.precondition)),e}function Ch(n,t){return n&&n.length>0?(W(t!==void 0,14353),n.map(e=>function(i,o){let l=i.updateTime?_e(i.updateTime):_e(o);return l.isEqual(z.min())&&(l=_e(o)),new fh(l,i.transformResults||[])}(e,t))):[]}function bh(n){let t=wh(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){W(r===1,65062);const I=e.from[0];I.allDescendants?i=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(w){const C=Ca(w);return C instanceof Ht&&ca(C)?C.getFilters():[C]}(e.where));let l=[];e.orderBy&&(l=function(w){return w.map(C=>function(N){return new Wn(me(N.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(C))}(e.orderBy));let h=null;e.limit&&(h=function(w){let C;return C=typeof w=="object"?w.value:w,fs(C)?null:C}(e.limit));let f=null;e.startAt&&(f=function(w){const C=!!w.before,V=w.values||[];return new Kn(V,C)}(e.startAt));let p=null;return e.endAt&&(p=function(w){const C=!w.before,V=w.values||[];return new Kn(V,C)}(e.endAt)),Qc(t,i,l,o,h,"F",f,p)}function Ca(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=me(e.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=me(e.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=me(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=me(e.unaryFilter.field);return nt.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}}(n):n.fieldFilter!==void 0?function(e){return nt.create(me(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ht.create(e.compositeFilter.filters.map(r=>Ca(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return x(1026)}}(e.compositeFilter.op))}(n):x(30097,{filter:n})}function me(n){return it.fromServerFormat(n.fieldPath)}function Vh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Dh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function ba(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t){this.yt=t}}function Oh(n){const t=bh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Jr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(){this.bn=new xh}addToCollectionParentIndex(t,e){return this.bn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(zt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(zt.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class xh{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ot(G.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ot(G.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Va=41943040;class _t{static withCacheSize(t){return new _t(t,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(Va,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Gt(0)}static ar(){return new Gt(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="LruGarbageCollector",Mh=1048576;function co([n,t],[e,r]){const i=B(n,e);return i===0?B(t,r):i}class Lh{constructor(t){this.Pr=t,this.buffer=new ot(co),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();co(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Fh{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){b(uo,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ln(e)?b(uo,"Ignoring IndexedDB error during garbage collection: ",e):await us(e)}await this.Ar(3e5)})}}class Uh{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return R.resolve(cs.ce);const r=new Lh(e);return this.Vr.forEachTarget(t,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(t,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(lo)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),lo):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,i,o,l,h,f,p;const I=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,l=Date.now(),this.nthSequenceNumber(t,i))).next(w=>(r=w,h=Date.now(),this.removeTargets(t,r,e))).next(w=>(o=w,f=Date.now(),this.removeOrphanedDocuments(t,r))).next(w=>(p=Date.now(),pe()<=U.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-I}ms
	Determined least recently used ${i} in `+(h-l)+`ms
	Removed ${o} targets in `+(f-h)+`ms
	Removed ${w} documents in `+(p-f)+`ms
Total Duration: ${p-I}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:w})))}}function Bh(n,t){return new Uh(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.changes=new ue(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Qe(r.mutation,i,wt.empty(),H.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,ht()).next(()=>r))}getLocalViewOfDocuments(t,e,r=ht()){const i=ne();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let l=Dn();return o.forEach((h,f)=>{l=l.insert(h,f.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const r=ne();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,ht()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((l,h)=>{e.set(l,h)})})}computeViews(t,e,r,i){let o=Qn();const l=We(),h=function(){return We()}();return e.forEach((f,p)=>{const I=r.get(p.key);i.has(p.key)&&(I===void 0||I.mutation instanceof ce)?o=o.insert(p.key,p):I!==void 0?(l.set(p.key,I.mutation.getFieldMask()),Qe(I.mutation,p,I.mutation.getFieldMask(),H.now())):l.set(p.key,wt.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((p,I)=>l.set(p,I)),e.forEach((p,I)=>h.set(p,new $h(I,l.get(p)??null))),h))}recalculateAndSaveOverlays(t,e){const r=We();let i=new yt((l,h)=>l-h),o=ht();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const h of l)h.keys().forEach(f=>{const p=e.get(f);if(p===null)return;let I=r.get(f)||wt.empty();I=h.applyToLocalView(p,I),r.set(f,I);const w=(i.get(h.batchId)||ht()).add(f);i=i.insert(h.batchId,w)})}).next(()=>{const l=[],h=i.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),p=f.key,I=f.value,w=ya();I.forEach(C=>{if(!o.has(C)){const V=wa(e.get(C),r.get(C));V!==null&&w.set(C,V),o=o.add(C)}}),l.push(this.documentOverlayCache.saveOverlays(t,p,w))}return R.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return Jc(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Yc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):R.resolve(ne());let h=en,f=o;return l.next(p=>R.forEach(p,(I,w)=>(h<w.largestBatchId&&(h=w.largestBatchId),o.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(C=>{f=f.insert(I,C)}))).next(()=>this.populateOverlays(t,p,o)).next(()=>this.computeViews(t,f,p,ht())).next(I=>({batchId:h,changes:_a(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let i=Dn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let l=Dn();return this.indexManager.getCollectionParents(t,o).next(h=>R.forEach(h,f=>{const p=function(w,C){return new tr(C,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,p,r,i).next(I=>{I.forEach((w,C)=>{l=l.insert(w,C)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(l=>{o.forEach((f,p)=>{const I=p.getKey();l.get(I)===null&&(l=l.insert(I,vt.newInvalidDocument(I)))});let h=Dn();return l.forEach((f,p)=>{const I=o.get(f);I!==void 0&&Qe(I.mutation,p,wt.empty(),H.now()),ys(e,p)&&(h=h.insert(f,p))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return R.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:_e(i.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(i){return{name:i.name,query:Oh(i.bundledQuery),readTime:_e(i.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(){this.overlays=new yt(O.comparator),this.Lr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ne();return R.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.St(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const i=ne(),o=e.length+1,l=new O(e.child("")),h=this.overlays.getIteratorFrom(l);for(;h.hasNext();){const f=h.getNext().value,p=f.getKey();if(!e.isPrefixOf(p.path))break;p.path.length===o&&f.largestBatchId>r&&i.set(f.getKey(),f)}return R.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new yt((p,I)=>p-I);const l=this.overlays.getIterator();for(;l.hasNext();){const p=l.getNext().value;if(p.getKey().getCollectionGroup()===e&&p.largestBatchId>r){let I=o.get(p.largestBatchId);I===null&&(I=ne(),o=o.insert(p.largestBatchId,I)),I.set(p.getKey(),p)}}const h=ne(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((p,I)=>h.set(p,I)),!(h.size()>=i)););return R.resolve(h)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new _h(e,r));let o=this.Lr.get(e);o===void 0&&(o=ht(),this.Lr.set(e,o)),this.Lr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.kr=new ot(et.Kr),this.qr=new ot(et.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new et(t,e);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new et(t,e))}Qr(t,e){t.forEach(r=>this.removeReference(r,e))}Gr(t){const e=new O(new G([])),r=new et(e,t),i=new et(e,t+1),o=[];return this.qr.forEachInRange([r,i],l=>{this.Wr(l),o.push(l.key)}),o}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new O(new G([])),r=new et(e,t),i=new et(e,t+1);let o=ht();return this.qr.forEachInRange([r,i],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new et(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class et{constructor(t,e){this.key=t,this.Jr=e}static Kr(t,e){return O.comparator(t.key,e.key)||B(t.Jr,e.Jr)}static Ur(t,e){return B(t.Jr,e.Jr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new ot(et.Kr)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new gh(o,e,r,i);this.mutationQueue.push(l);for(const h of i)this.Hr=this.Hr.add(new et(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return R.resolve(l)}lookupMutationBatch(t,e){return R.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Xr(r),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?hs:this.Yn-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new et(e,0),i=new et(e,Number.POSITIVE_INFINITY),o=[];return this.Hr.forEachInRange([r,i],l=>{const h=this.Zr(l.Jr);o.push(h)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ot(B);return e.forEach(i=>{const o=new et(i,0),l=new et(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([o,l],h=>{r=r.add(h.Jr)})}),R.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const l=new et(new O(o),0);let h=new ot(B);return this.Hr.forEachWhile(f=>{const p=f.key.path;return!!r.isPrefixOf(p)&&(p.length===i&&(h=h.add(f.Jr)),!0)},l),R.resolve(this.Yr(h))}Yr(t){const e=[];return t.forEach(r=>{const i=this.Zr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){W(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return R.forEach(e.mutations,i=>{const o=new et(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Hr=r})}nr(t){}containsKey(t,e){const r=new et(e,0),i=this.Hr.firstAfterOrEqual(r);return R.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t){this.ti=t,this.docs=function(){return new yt(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,l=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(e))}getEntries(t,e){let r=Qn();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():vt.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Qn();const l=e.path,h=new O(l.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:p,value:{document:I}}=f.getNext();if(!l.isPrefixOf(p.path))break;p.path.length>l.length+1||Rc(wc(I),r)<=0||(i.has(I.key)||ys(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,i){x(9500)}ni(t,e){return R.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Qh(this)}getSize(t){return R.resolve(this.size)}}class Qh extends jh{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.Mr.addEntry(t,i)):this.Mr.removeEntry(r)}),R.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t){this.persistence=t,this.ri=new ue(e=>gs(e),_s),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.ii=0,this.si=new vs,this.targetCount=0,this.oi=Gt._r()}forEachTarget(t,e){return this.ri.forEach((r,i)=>e(i)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),R.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new Gt(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.lr(e),R.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.ri.forEach((l,h)=>{h.sequenceNumber<=e&&r.get(h.targetId)===null&&(this.ri.delete(l),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),i++)}),R.waitFor(o).next(()=>i)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),R.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(l=>{o.push(i.markPotentiallyOrphaned(t,l))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this.si.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,e){this._i={},this.overlays={},this.ai=new cs(0),this.ui=!1,this.ui=!0,this.ci=new Gh,this.referenceDelegate=t(this),this.li=new Xh(this),this.indexManager=new kh,this.remoteDocumentCache=function(i){return new Wh(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Nh(e),this.Pi=new zh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Hh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new Kh(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){b("MemoryPersistence","Starting transaction:",t);const i=new Jh(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(o=>this.referenceDelegate.Ii(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ei(t,e){return R.or(Object.values(this._i).map(r=>()=>r.containsKey(t,e)))}}class Jh extends Pc{constructor(t){super(),this.currentSequenceNumber=t}}class Is{constructor(t){this.persistence=t,this.Ri=new vs,this.Ai=null}static Vi(t){return new Is(t)}get di(){if(this.Ai)return this.Ai;throw x(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),R.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.di,r=>{const i=O.fromPath(r);return this.mi(t,i).next(o=>{o||e.removeEntry(i,z.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return R.or([()=>R.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Jn{constructor(t,e){this.persistence=t,this.fi=new ue(r=>Vc(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Bh(this,e)}static Vi(t,e){return new Jn(t,e)}Ti(){}Ii(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}pr(t){let e=0;return this.mr(t,r=>{e++}).next(()=>e)}mr(t,e){return R.forEach(this.fi,(r,i)=>this.wr(t,r,i).next(o=>o?R.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ni(t,l=>this.wr(t,l,e).next(h=>{h||(r++,o.removeEntry(l,z.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),R.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=xn(t.data.value)),e}wr(t,e,r){return R.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.fi.get(e);return R.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Ts=r,this.Is=i}static Es(t,e){let r=ht(),i=ht();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new As(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return zl()?8:Cc($l())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.gs(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.ps(t,e,i,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new Yh;return this.ys(t,e,l).next(h=>{if(o.result=h,this.As)return this.ws(t,e,l,h.size)})}).next(()=>o.result)}ws(t,e,r,i){return r.documentReadCount<this.Vs?(pe()<=U.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",qe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),R.resolve()):(pe()<=U.DEBUG&&b("QueryEngine","Query:",qe(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(pe()<=U.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",qe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,se(e))):R.resolve())}gs(t,e){if(no(e))return R.resolve(null);let r=se(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Jr(e,null,"F"),r=se(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const l=ht(...o);return this.fs.getDocuments(t,l).next(h=>this.indexManager.getMinOffset(t,r).next(f=>{const p=this.Ss(e,h);return this.bs(e,p,l,f.readTime)?this.gs(t,Jr(e,null,"F")):this.Ds(t,p,e,f)}))})))}ps(t,e,r,i){return no(e)||i.isEqual(z.min())?R.resolve(null):this.fs.getDocuments(t,r).next(o=>{const l=this.Ss(e,o);return this.bs(e,l,r,i)?R.resolve(null):(pe()<=U.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qe(e)),this.Ds(t,l,e,Ac(i,en)).next(h=>h))})}Ss(t,e){let r=new ot(th(t));return e.forEach((i,o)=>{ys(t,o)&&(r=r.add(o))}),r}bs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ys(t,e,r){return pe()<=U.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",qe(e)),this.fs.getDocumentsMatchingQuery(t,e,zt.min(),r)}Ds(t,e,r,i){return this.fs.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="LocalStore";class ef{constructor(t,e,r,i){this.persistence=t,this.Cs=e,this.serializer=i,this.vs=new yt(B),this.Fs=new ue(o=>gs(o),_s),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new qh(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function nf(n,t,e,r){return new ef(n,t,e,r)}async function Na(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.Os(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],h=[];let f=ht();for(const p of i){l.push(p.batchId);for(const I of p.mutations)f=f.add(I.key)}for(const p of o){h.push(p.batchId);for(const I of p.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(r,f).next(p=>({Ns:p,removedBatchIds:l,addedBatchIds:h}))})})}function rf(n,t){const e=$(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.xs.newChangeBuffer({trackRemovals:!0});return function(h,f,p,I){const w=p.batch,C=w.keys();let V=R.resolve();return C.forEach(N=>{V=V.next(()=>I.getEntry(f,N)).next(L=>{const M=p.docVersions.get(N);W(M!==null,48541),L.version.compareTo(M)<0&&(w.applyToRemoteDocument(L,p),L.isValidDocument()&&(L.setReadTime(p.commitVersion),I.addEntry(L)))})}),V.next(()=>h.mutationQueue.removeMutationBatch(f,w))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let f=ht();for(let p=0;p<h.mutationResults.length;++p)h.mutationResults[p].transformResults.length>0&&(f=f.add(h.batch.mutations[p].key));return f}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function sf(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function of(n,t){const e=$(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=hs),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class ho{constructor(){this.activeTargetIds=oh()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class af{constructor(){this.vo=new ho,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new ho,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{Mo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="ConnectivityMonitor";class po{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){b(fo,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){b(fo,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nn=null;function es(){return Nn===null?Nn=function(){return 268435456+Math.round(2147483648*Math.random())}():Nn++,"0x"+Nn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="RestConnection",uf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class cf{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Hn?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(t,e,r,i,o){const l=es(),h=this.Qo(t,e.toUriEncodedString());b(Lr,`Sending RPC '${t}' ${l}:`,h,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(f,i,o);const{host:p}=new URL(h),I=Mo(p);return this.zo(t,h,f,r,I).then(w=>(b(Lr,`Received RPC '${t}' ${l}: `,w),w),w=>{throw tn(Lr,`RPC '${t}' ${l} failed with error: `,w,"url: ",h,"request:",r),w})}jo(t,e,r,i,o,l){return this.Wo(t,e,r,i,o)}Go(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Re}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}Qo(t,e){const r=uf[t];let i=`${this.qo}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection",ze=(n,t,e)=>{n.listen(t,r=>{try{e(r)}catch(i){setTimeout(()=>{throw i},0)}})};class ye extends cf{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!ye.c_){const t=Go();ze(t,Ho.STAT_EVENT,e=>{e.stat===Hr.PROXY?b(ut,"STAT_EVENT: detected buffering proxy"):e.stat===Hr.NOPROXY&&b(ut,"STAT_EVENT: detected no buffering proxy")}),ye.c_=!0}}zo(t,e,r,i,o){const l=es();return new Promise((h,f)=>{const p=new qo;p.setWithCredentials(!0),p.listenOnce(zo.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case kn.NO_ERROR:const w=p.getResponseJson();b(ut,`XHR for RPC '${t}' ${l} received:`,JSON.stringify(w)),h(w);break;case kn.TIMEOUT:b(ut,`RPC '${t}' ${l} timed out`),f(new D(S.DEADLINE_EXCEEDED,"Request time out"));break;case kn.HTTP_ERROR:const C=p.getStatus();if(b(ut,`RPC '${t}' ${l} failed with status:`,C,"response text:",p.getResponseText()),C>0){let V=p.getResponseJson();Array.isArray(V)&&(V=V[0]);const N=V==null?void 0:V.error;if(N&&N.status&&N.message){const L=function(X){const Q=X.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(Q)>=0?Q:S.UNKNOWN}(N.status);f(new D(L,N.message))}else f(new D(S.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new D(S.UNAVAILABLE,"Connection failed."));break;default:x(9055,{l_:t,streamId:l,h_:p.getLastErrorCode(),P_:p.getLastError()})}}finally{b(ut,`RPC '${t}' ${l} completed.`)}});const I=JSON.stringify(i);b(ut,`RPC '${t}' ${l} sending request:`,i),p.send(e,"POST",I,r,15)})}T_(t,e,r){const i=es(),o=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=this.createWebChannelTransport(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Go(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");b(ut,`Creating RPC '${t}' stream ${i}: ${p}`,h);const I=l.createWebChannel(p,h);this.I_(I);let w=!1,C=!1;const V=new hf({Jo:N=>{C?b(ut,`Not sending because RPC '${t}' stream ${i} is closed:`,N):(w||(b(ut,`Opening RPC '${t}' stream ${i} transport.`),I.open(),w=!0),b(ut,`RPC '${t}' stream ${i} sending:`,N),I.send(N))},Ho:()=>I.close()});return ze(I,He.EventType.OPEN,()=>{C||(b(ut,`RPC '${t}' stream ${i} transport opened.`),V.i_())}),ze(I,He.EventType.CLOSE,()=>{C||(C=!0,b(ut,`RPC '${t}' stream ${i} transport closed`),V.o_(),this.E_(I))}),ze(I,He.EventType.ERROR,N=>{C||(C=!0,tn(ut,`RPC '${t}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),V.o_(new D(S.UNAVAILABLE,"The operation could not be completed")))}),ze(I,He.EventType.MESSAGE,N=>{var L;if(!C){const M=N.data[0];W(!!M,16349);const X=M,Q=(X==null?void 0:X.error)||((L=X[0])==null?void 0:L.error);if(Q){b(ut,`RPC '${t}' stream ${i} received error:`,Q);const at=Q.status;let Rt=function(y){const d=J[y];if(d!==void 0)return Eh(d)}(at),mt=Q.message;at==="NOT_FOUND"&&mt.includes("database")&&mt.includes("does not exist")&&mt.includes(this.databaseId.database)&&tn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Rt===void 0&&(Rt=S.INTERNAL,mt="Unknown error status: "+at+" with message "+Q.message),C=!0,V.o_(new D(Rt,mt)),I.close()}else b(ut,`RPC '${t}' stream ${i} received:`,M),V.__(M)}}),ye.u_(),setTimeout(()=>{V.s_()},0),V}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Ko()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(n){return new ye(n)}function Fr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(n){return new Th(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ye.c_=!1;class Oa{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=i,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="PersistentStream";class df{constructor(t,e,r,i,o,l,h,f){this.Ci=t,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Oa(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(oe(e.toString()),oe("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===e&&this.G_(r,i)},r=>{t(()=>{const i=new D(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return b(mo,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(b(mo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pf extends df{constructor(t,e,r,i,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,l),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return W(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,W(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){W(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Ch(t.writeResults,t.commitTime),r=_e(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Rh(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Ph(this.serializer,r))};this.K_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{}class gf extends mf{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Wo(t,Zr(e,r),i,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(S.UNKNOWN,o.toString())})}jo(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.jo(t,Zr(e,r),i,l,h,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new D(S.UNKNOWN,l.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function _f(n,t,e,r){return new gf(n,t,e,r)}class yf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(oe(e),this.aa=!1):b("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="RemoteStore";class Ef{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Gt(1e3),this.Va=new Gt(1001),this.da=new Set,this.ma=[],this.fa=o,this.fa.Mo(l=>{r.enqueueAndForget(async()=>{fn(this)&&(b(cn,"Restarting streams for network reachability change."),await async function(f){const p=$(f);p.da.add(4),await hn(p),p.ga.set("Unknown"),p.da.delete(4),await sr(p)}(this))})}),this.ga=new yf(r,i)}}async function sr(n){if(fn(n))for(const t of n.ma)await t(!0)}async function hn(n){for(const t of n.ma)await t(!1)}function fn(n){return $(n).da.size===0}async function ka(n,t,e){if(!ln(t))throw t;n.da.add(1),await hn(n),n.ga.set("Offline"),e||(e=()=>sf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{b(cn,"Retrying IndexedDB access"),await e(),n.da.delete(1),await sr(n)})}function xa(n,t){return t().catch(e=>ka(n,e,t))}async function ir(n){const t=$(n),e=Kt(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:hs;for(;Tf(t);)try{const i=await of(t.localStore,r);if(i===null){t.Ta.length===0&&e.L_();break}r=i.batchId,vf(t,i)}catch(i){await ka(t,i)}Ma(t)&&La(t)}function Tf(n){return fn(n)&&n.Ta.length<10}function vf(n,t){n.Ta.push(t);const e=Kt(n);e.O_()&&e.Y_&&e.ea(t.mutations)}function Ma(n){return fn(n)&&!Kt(n).x_()&&n.Ta.length>0}function La(n){Kt(n).start()}async function If(n){Kt(n).ra()}async function Af(n){const t=Kt(n);for(const e of n.Ta)t.ea(e.mutations)}async function wf(n,t,e){const r=n.Ta.shift(),i=Ts.from(r,t,e);await xa(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ir(n)}async function Rf(n,t){t&&Kt(n).Y_&&await async function(r,i){if(function(l){return yh(l)&&l!==S.ABORTED}(i.code)){const o=r.Ta.shift();Kt(r).B_(),await xa(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await ir(r)}}(n,t),Ma(n)&&La(n)}async function go(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),b(cn,"RemoteStore received new credentials");const r=fn(e);e.da.add(3),await hn(e),r&&e.ga.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await sr(e)}async function Sf(n,t){const e=$(n);t?(e.da.delete(2),await sr(e)):t||(e.da.add(2),await hn(e),e.ga.set("Unknown"))}function Kt(n){return n.wa||(n.wa=function(e,r,i){const o=$(e);return o.sa(),new pf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:If.bind(null,n),t_:Rf.bind(null,n),ta:Af.bind(null,n),na:wf.bind(null,n)}),n.ma.push(async t=>{t?(n.wa.B_(),await ir(n)):(await n.wa.stop(),n.Ta.length>0&&(b(cn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const l=Date.now()+r,h=new ws(t,e,l,i,o);return h.start(r),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fa(n,t){if(oe("AsyncQueue",`${t}: ${n}`),ln(n))return new D(S.UNAVAILABLE,`${t}: ${n}`);throw n}class Pf{constructor(){this.queries=_o(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(e,r){const i=$(e),o=i.queries;i.queries=_o(),o.forEach((l,h)=>{for(const f of h.va)f.onError(r)})})(this,new D(S.ABORTED,"Firestore shutting down"))}}function _o(){return new ue(n=>ma(n),pa)}function Cf(n){n.xa.forEach(t=>{t.next()})}var yo,Eo;(Eo=yo||(yo={})).Ba="default",Eo.Cache="cache";const bf="SyncEngine";class Vf{constructor(t,e,r,i,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Ru={},this.Au=new ue(h=>ma(h),pa),this.Vu=new Map,this.du=new Set,this.mu=new yt(O.comparator),this.fu=new Map,this.gu=new vs,this.pu={},this.yu=new Map,this.wu=Gt.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function Df(n,t,e){const r=xf(n);try{const i=await function(l,h){const f=$(l),p=H.now(),I=h.reduce((V,N)=>V.add(N.key),ht());let w,C;return f.persistence.runTransaction("Locally write mutations","readwrite",V=>{let N=Qn(),L=ht();return f.xs.getEntries(V,I).next(M=>{N=M,N.forEach((X,Q)=>{Q.isValidDocument()||(L=L.add(X))})}).next(()=>f.localDocuments.getOverlayedDocuments(V,N)).next(M=>{w=M;const X=[];for(const Q of h){const at=ph(Q,w.get(Q.key).overlayedDocument);at!=null&&X.push(new ce(Q.key,at,aa(at.value.mapValue),Nt.exists(!0)))}return f.mutationQueue.addMutationBatch(V,p,X,h)}).next(M=>{C=M;const X=M.applyToLocalDocumentSet(w,L);return f.documentOverlayCache.saveOverlays(V,M.batchId,X)})}).then(()=>({batchId:C.batchId,changes:_a(w)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(l,h,f){let p=l.pu[l.currentUser.toKey()];p||(p=new yt(B)),p=p.insert(h,f),l.pu[l.currentUser.toKey()]=p}(r,i.batchId,e),await or(r,i.changes),await ir(r.remoteStore)}catch(i){const o=Fa(i,"Failed to persist write");e.reject(o)}}function To(n,t,e){const r=$(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Au.forEach((o,l)=>{const h=l.view.Oa(t);h.snapshot&&i.push(h.snapshot)}),function(l,h){const f=$(l);f.onlineState=h;let p=!1;f.queries.forEach((I,w)=>{for(const C of w.va)C.Oa(h)&&(p=!0)}),p&&Cf(f)}(r.eventManager,t),i.length&&r.Ru.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Nf(n,t){const e=$(n),r=t.batch.batchId;try{const i=await rf(e.localStore,t);Ba(e,r,null),Ua(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await or(e,i)}catch(i){await us(i)}}async function Of(n,t,e){const r=$(n);try{const i=await function(l,h){const f=$(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let I;return f.mutationQueue.lookupMutationBatch(p,h).next(w=>(W(w!==null,37113),I=w.keys(),f.mutationQueue.removeMutationBatch(p,w))).next(()=>f.mutationQueue.performConsistencyCheck(p)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(p,I,h)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,I)).next(()=>f.localDocuments.getDocuments(p,I))})}(r.localStore,t);Ba(r,t,e),Ua(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await or(r,i)}catch(i){await us(i)}}function Ua(n,t){(n.yu.get(t)||[]).forEach(e=>{e.resolve()}),n.yu.delete(t)}function Ba(n,t,e){const r=$(n);let i=r.pu[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.pu[r.currentUser.toKey()]=i}}async function or(n,t,e){const r=$(n),i=[],o=[],l=[];r.Au.isEmpty()||(r.Au.forEach((h,f)=>{l.push(r.bu(f,t,e).then(p=>{var I;if((p||e)&&r.isPrimaryClient){const w=p?!p.fromCache:(I=e==null?void 0:e.targetChanges.get(f.targetId))==null?void 0:I.current;r.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(p){i.push(p);const w=As.Es(f.targetId,p);o.push(w)}}))}),await Promise.all(l),r.Ru.H_(i),await async function(f,p){const I=$(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(p,C=>R.forEach(C.Ts,V=>I.persistence.referenceDelegate.addReference(w,C.targetId,V)).next(()=>R.forEach(C.Is,V=>I.persistence.referenceDelegate.removeReference(w,C.targetId,V)))))}catch(w){if(!ln(w))throw w;b(tf,"Failed to update sequence numbers: "+w)}for(const w of p){const C=w.targetId;if(!w.fromCache){const V=I.vs.get(C),N=V.snapshotVersion,L=V.withLastLimboFreeSnapshotVersion(N);I.vs=I.vs.insert(C,L)}}}(r.localStore,o))}async function kf(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){b(bf,"User change. New user:",t.toKey());const r=await Na(e.localStore,t);e.currentUser=t,function(o,l){o.yu.forEach(h=>{h.forEach(f=>{f.reject(new D(S.CANCELLED,l))})}),o.yu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await or(e,r.Ns)}}function xf(n){const t=$(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Nf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Of.bind(null,t),t}class Yn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=rr(t.databaseInfo.databaseId),this.sharedClientState=this.Mu(t),this.persistence=this.xu(t),await this.persistence.start(),this.localStore=this.Ou(t),this.gcScheduler=this.Nu(t,this.localStore),this.indexBackfillerScheduler=this.Bu(t,this.localStore)}Nu(t,e){return null}Bu(t,e){return null}Ou(t){return nf(this.persistence,new Zh,t.initialUser,this.serializer)}xu(t){return new Da(Is.Vi,this.serializer)}Mu(t){return new af}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yn.provider={build:()=>new Yn};class Mf extends Yn{constructor(t){super(),this.cacheSizeBytes=t}Nu(t,e){W(this.persistence.referenceDelegate instanceof Jn,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Fh(r,t.asyncQueue,e)}xu(t){const e=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new Da(r=>Jn.Vi(r,e),this.serializer)}}class ns{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>To(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kf.bind(null,this.syncEngine),await Sf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Pf}()}createDatastore(t){const e=rr(t.databaseInfo.databaseId),r=ff(t.databaseInfo);return _f(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,l,h){return new Ef(r,i,o,l,h)}(this.localStore,this.datastore,t.asyncQueue,e=>To(this.syncEngine,e,0),function(){return po.v()?new po:new lf}())}createSyncEngine(t,e){return function(i,o,l,h,f,p,I){const w=new Vf(i,o,l,h,f,p);return I&&(w.Su=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=$(i);b(cn,"RemoteStore shutting down."),o.da.add(5),await hn(o),o.fa.shutdown(),o.ga.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}ns.provider={build:()=>new ns};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="FirestoreClient";class Lf{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=as.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async l=>{b(Wt,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(b(Wt,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new re;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Fa(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ur(n,t){n.asyncQueue.verifyOperationInProgress(),b(Wt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Na(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function vo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Ff(n);b(Wt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>go(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>go(t.remoteStore,i)),n._onlineComponents=t}async function Ff(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){b(Wt,"Using user provided OfflineComponentProvider");try{await Ur(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;tn("Error using user provided cache. Falling back to memory cache: "+e),await Ur(n,new Yn)}}else b(Wt,"Using default OfflineComponentProvider"),await Ur(n,new Mf(void 0));return n._offlineComponents}async function Uf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(b(Wt,"Using user provided OnlineComponentProvider"),await vo(n,n._uninitializedComponentsProvider._online)):(b(Wt,"Using default OnlineComponentProvider"),await vo(n,new ns))),n._onlineComponents}function Bf(n){return Uf(n).then(t=>t.syncEngine)}function jf(n,t){const e=new re;return n.asyncQueue.enqueueAndForget(async()=>Df(await Bf(n),t,e)),e.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f="ComponentProvider",Io=new Map;function qf(n,t,e,r,i){return new kc(n,t,e,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,ja(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="firestore.googleapis.com",Ao=!0;class wo{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new D(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$a,this.ssl=Ao}else this.host=t.host,this.ssl=t.ssl??Ao;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Va;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Mh)throw new D(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ic("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ja(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ar{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wo(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fc;switch(r.type){case"firstParty":return new gc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Io.get(e);r&&(b($f,"Removing Datastore"),Io.delete(e),r.terminate())}(this),Promise.resolve()}}function zf(n,t,e,r={}){var p;n=Yo(n,ar);const i=Mo(t),o=n._getSettings(),l={...o,emulatorOptions:n._getEmulatorOptions()},h=`${t}:${e}`;i&&Xl(`https://${h}`),o.host!==$a&&o.host!==h&&tn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f={...o,host:h,ssl:i,emulatorOptions:r};if(!Bn(f,l)&&(n._setSettings(f),r.mockUserToken)){let I,w;if(typeof r.mockUserToken=="string")I=r.mockUserToken,w=ct.MOCK_USER;else{I=jl(r.mockUserToken,(p=n._app)==null?void 0:p.options.projectId);const C=r.mockUserToken.sub||r.mockUserToken.user_id;if(!C)throw new D(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new ct(C)}n._authCredentials=new dc(new Qo(I,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Rs(this.firestore,t,this._query)}}class ft{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(an(e,ft._jsonSchema))return new ft(t,r||null,new O(G.fromString(e.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:Y("string",ft._jsonSchemaVersion),referencePath:Y("string")};class qt extends Rs{constructor(t,e,r){super(t,e,Xc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new O(t))}withConverter(t){return new qt(this.firestore,t,this._path)}}function Hf(n,t,...e){if(n=Je(n),Xo("collection","path",t),n instanceof ar){const r=G.fromString(t,...e);return Hi(r),new qt(n,null,r)}{if(!(n instanceof ft||n instanceof qt))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(G.fromString(t,...e));return Hi(r),new qt(n.firestore,null,r)}}function Gf(n,t,...e){if(n=Je(n),arguments.length===1&&(t=as.newId()),Xo("doc","path",t),n instanceof ar){const r=G.fromString(t,...e);return zi(r),new ft(n,null,new O(r))}{if(!(n instanceof ft||n instanceof qt))throw new D(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(G.fromString(t,...e));return zi(r),new ft(n.firestore,n instanceof qt?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="AsyncQueue";class So{constructor(t=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Oa(this,"async_queue_retry"),this.lc=()=>{const r=Fr();r&&b(Ro,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=t;const e=Fr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.Tc(t)}enterRestrictedMode(t){if(!this.sc){this.sc=!0,this.uc=t||!1;const e=Fr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.lc)}}enqueue(t){if(this.Pc(),this.sc)return new Promise(()=>{});const e=new re;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.rc.push(t),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(t){if(!ln(t))throw t;b(Ro,"Operation failed with retryable error: "+t)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(t){const e=this.hc.then(()=>(this.ac=!0,t().catch(r=>{throw this._c=r,this.ac=!1,oe("INTERNAL UNHANDLED ERROR: ",Po(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=e,e}enqueueAfterDelay(t,e,r){this.Pc(),this.cc.indexOf(t)>-1&&(e=0);const i=ws.createAndSchedule(this,t,e,r,o=>this.Ec(o));return this.oc.push(i),i}Pc(){this._c&&x(47125,{Rc:Po(this._c)})}verifyOperationInProgress(){}async Ac(){let t;do t=this.hc,await t;while(t!==this.hc)}Vc(t){for(const e of this.oc)if(e.timerId===t)return!0;return!1}dc(t){return this.Ac().then(()=>{this.oc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.oc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Ac()})}mc(t){this.cc.push(t)}Ec(t){const e=this.oc.indexOf(t);this.oc.splice(e,1)}}function Po(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class qa extends ar{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new So,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new So(t),this._firestoreClient=void 0,await t}}}function Kf(n,t){const e=typeof n=="object"?n:Yu(),r=typeof n=="string"?n:Hn,i=Ku(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Ul("firestore");o&&zf(i,...o)}return i}function Wf(n){if(n._terminated)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Qf(n),n._firestoreClient}function Qf(n){var r,i,o,l;const t=n._freezeSettings(),e=qf(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,t);n._componentsProvider||(o=t.localCache)!=null&&o._offlineComponentProvider&&((l=t.localCache)!=null&&l._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Lf(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this._byteString=t}static fromBase64String(t){try{return new At(Vt.fromBase64String(t))}catch(e){throw new D(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new At(Vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:At._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(an(t,At._jsonSchema))return At.fromBase64String(t.bytes)}}At._jsonSchemaVersion="firestore/bytes/1.0",At._jsonSchema={type:Y("string",At._jsonSchemaVersion),bytes:Y("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ot._jsonSchemaVersion}}static fromJSON(t){if(an(t,Ot._jsonSchema))return new Ot(t.latitude,t.longitude)}}Ot._jsonSchemaVersion="firestore/geoPoint/1.0",Ot._jsonSchema={type:Y("string",Ot._jsonSchemaVersion),latitude:Y("number"),longitude:Y("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:bt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(an(t,bt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new bt(t.vectorValues);throw new D(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}bt._jsonSchemaVersion="firestore/vectorValue/1.0",bt._jsonSchema={type:Y("string",bt._jsonSchemaVersion),vectorValues:Y("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=/^__.*__$/;class Jf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ce(t,this.data,this.fieldMask,e,this.fieldTransforms):new un(t,this.data,e,this.fieldTransforms)}}function Ha(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{dataSource:n})}}class Ps{constructor(t,e,r,i,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.fc(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new Ps({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),r=this.i({path:e,arrayElement:!1});return r.wc(t),r}Sc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),r=this.i({path:e,arrayElement:!1});return r.fc(),r}bc(t){return this.i({path:void 0,arrayElement:!0})}Dc(t){return Zn(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}fc(){if(this.path)for(let t=0;t<this.path.length;t++)this.wc(this.path.get(t))}wc(t){if(t.length===0)throw this.Dc("Document fields must not be empty");if(Ha(this.dataSource)&&Xf.test(t))throw this.Dc('Document fields cannot begin and end with "__"')}}class Yf{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||rr(t)}V(t,e,r,i=!1){return new Ps({dataSource:t,methodName:e,targetDoc:r,path:it.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zf(n){const t=n._freezeSettings(),e=rr(n._databaseId);return new Yf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function td(n,t,e,r,i,o={}){const l=n.V(o.merge||o.mergeFields?2:0,t,e,i);Qa("Data must be an object, but it was:",l,r);const h=Ka(r,l);let f,p;if(o.merge)f=new wt(l.fieldMask),p=l.fieldTransforms;else if(o.mergeFields){const I=[];for(const w of o.mergeFields){const C=bs(t,w,e);if(!l.contains(C))throw new D(S.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);rd(I,C)||I.push(C)}f=new wt(I),p=l.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,p=l.fieldTransforms;return new Jf(new It(h),f,p)}class Cs extends Ss{_toFieldTransform(t){return new ch(t.path,new rn)}isEqual(t){return t instanceof Cs}}function Ga(n,t){if(Wa(n=Je(n)))return Qa("Unsupported field value:",t,n),Ka(n,t);if(n instanceof Ss)return function(r,i){if(!Ha(i.dataSource))throw i.Dc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Dc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.Dc("Nested arrays are not supported");return function(r,i){const o=[];let l=0;for(const h of r){let f=Ga(h,i.bc(l));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),l++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ah(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=H.fromDate(r);return{timestampValue:Yr(i.serializer,o)}}if(r instanceof H){const o=new H(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yr(i.serializer,o)}}if(r instanceof Ot)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof At)return{bytesValue:vh(i.serializer,r._byteString)};if(r instanceof ft){const o=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw i.Dc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Pa(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof bt)return function(l,h){const f=l instanceof bt?l.toArray():l;return{mapValue:{fields:{[ia]:{stringValue:oa},[Kr]:{arrayValue:{values:f.map(I=>{if(typeof I!="number")throw h.Dc("VectorValues must only contain numeric values.");return Es(h.serializer,I)})}}}}}}(r,i);if(ba(r))return r._toProto(i.serializer);throw i.Dc(`Unsupported field value: ${ls(r)}`)}(n,t)}function Ka(n,t){const e={};return ta(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Se(n,(r,i)=>{const o=Ga(i,t.yc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Wa(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof H||n instanceof Ot||n instanceof At||n instanceof ft||n instanceof Ss||n instanceof bt||ba(n))}function Qa(n,t,e){if(!Wa(e)||!Jo(e)){const r=ls(e);throw r==="an object"?t.Dc(n+" a custom object"):t.Dc(n+" "+r)}}function bs(n,t,e){if((t=Je(t))instanceof za)return t._internalPath;if(typeof t=="string")return nd(n,t);throw Zn("Field path arguments must be of type string or ",n,!1,void 0,e)}const ed=new RegExp("[~\\*/\\[\\]]");function nd(n,t,e){if(t.search(ed)>=0)throw Zn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new za(...t.split("."))._internalPath}catch{throw Zn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Zn(n,t,e,r,i){const o=r&&!r.isEmpty(),l=i!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(o||l)&&(f+=" (found",o&&(f+=` in field ${r}`),l&&(f+=` in document ${i}`),f+=")"),new D(S.INVALID_ARGUMENT,h+n+f)}function rd(n,t){return n.some(e=>e.isEqual(t))}function sd(){return new Cs("serverTimestamp")}const Co="@firebase/firestore",bo="4.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new id(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(bs("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class id extends Xa{data(){return super.data()}}function od(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class On{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ee extends Xa{constructor(t,e,r,i,o,l){super(t,e,r,i,l),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Fn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(bs("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ee._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Ee._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ee._jsonSchema={type:Y("string",Ee._jsonSchemaVersion),bundleSource:Y("string","DocumentSnapshot"),bundleName:Y("string"),bundle:Y("string")};class Fn extends Ee{data(t={}){return super.data(t)}}class Xe{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new On(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Fn(this._firestore,this._userDataWriter,r.key,r,new On(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map(h=>{const f=new Fn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new On(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:l++}})}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const f=new Fn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new On(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let p=-1,I=-1;return h.type!==0&&(p=l.indexOf(h.doc.key),l=l.delete(h.doc.key)),h.type!==1&&(l=l.add(h.doc),I=l.indexOf(h.doc.key)),{type:ad(h.type),doc:f,oldIndex:p,newIndex:I}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Xe._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=as.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function ad(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe._jsonSchemaVersion="firestore/querySnapshot/1.0",Xe._jsonSchema={type:Y("string",Xe._jsonSchemaVersion),bundleSource:Y("string","QuerySnapshot"),bundleName:Y("string"),bundle:Y("string")};function ld(n,t){const e=Yo(n.firestore,qa),r=Gf(n),i=od(n.converter,t),o=Zf(n.firestore);return ud(e,[td(o,"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Nt.exists(!1))]).then(()=>r)}function ud(n,t){const e=Wf(n);return jf(e,t)}(function(t,e=!0){hc(Ju),$n(new Ye("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),h=new qa(new pc(r.getProvider("auth-internal")),new _c(l,r.getProvider("app-check-internal")),xc(l,i),l);return o={useFetchStreams:e,...o},h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),ge(Co,bo,t),ge(Co,bo,"esm2020")})();const cd={apiKey:"AIzaSyCO3jCuHTpP8rpuAjqydQxB0_k8Gd2AX0E",authDomain:"spac-site.firebaseapp.com",projectId:"spac-site",storageBucket:"spac-site.firebasestorage.app",messagingSenderId:"785803958504",appId:"1:785803958504:web:94535d0140baddec49915d"},hd=Bo(cd),fd=Kf(hd),Vo="https://discord.com/api/webhooks/1508827841511555183/soS64zmXIVqeeg-CXMsyd7B6ZqHqAl_g2jxA73RuLZMZ2y_zZerZS7EC3pY7wRZWLxzm",Do=()=>{const n=document.getElementById("site-title");n&&(n.textContent="SPAC");const t=document.getElementById("application-form");t&&t.addEventListener("submit",async e=>{e.preventDefault();const r=document.getElementById("user-name"),i=document.getElementById("user-email"),o=document.getElementById("user-purpose"),l=document.getElementById("user-message");if(!r||!i||!o||!l)return;const h={name:r.value,email:i.value,purpose:o.value,message:l.value};try{const f=await ld(Hf(fd,"applications"),{...h,createdAt:sd()});console.log("Firebase保存成功:",f.id),Vo&&(await fetch(Vo,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:`🔔 **WEBサイトから新着のお申し込みがありました！**
━━━━━━━━━━━━━━━━━━━━━━━━
👤 **お名前**: ${h.name}
📧 **メール**: ${h.email}
📌 **ご用件**: ${h.purpose}
💬 **メッセージ**: ${h.message}
━━━━━━━━━━━━━━━━━━━━━━━━`})}),console.log("Discord通知成功")),alert("お申し込みが完了しました！"),t.reset()}catch(f){console.error("エラーが発生しました:",f),alert("送信に失敗しました。")}})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Do):Do();
