var e,t,r,n,i,a,o,s,c,u,l,d,p,f,h,g=globalThis;function v(e){return e&&e.__esModule?e.default:e}var m={},y={},b=function(e){return e&&e.Math===Math&&e};y=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||b("object"==typeof self&&self)||b("object"==typeof g&&g)||b("object"==typeof y&&y)||function(){return this}()||Function("return this")();var _={},w={};_=!(w=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var k={},E={};E=!w(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var S=Function.prototype.call;k=E?S.bind(S):function(){return S.apply(S,arguments)};var $={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor;r=O&&!$.call({1:2},1)?function(e){var t=O(this,e);return!!t&&t.enumerable}:$;var j={};j=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var L={},x={},P={},T=Function.prototype,M=T.call,F=E&&T.bind.bind(M,M),I={},q=(P=E?F:function(e){return function(){return M.apply(e,arguments)}})({}.toString),A=P("".slice);I=function(e){return A(q(e),8,-1)};var N=Object,D=P("".split);x=w(function(){return!N("z").propertyIsEnumerable(0)})?function(e){return"String"===I(e)?D(e,""):N(e)}:N;var H={},C={};C=function(e){return null==e};var R=TypeError;H=function(e){if(C(e))throw new R("Can't call method on "+e);return e},L=function(e){return x(H(e))};var U={},W={},B={},G={},Q="object"==typeof document&&document.all;G=void 0===Q&&void 0!==Q?function(e){return"function"==typeof e||e===Q}:function(e){return"function"==typeof e},B=function(e){return"object"==typeof e?null!==e:G(e)};var z={},J={};J=function(e,t){var r;return arguments.length<2?(r=y[e],G(r)?r:void 0):y[e]&&y[e][t]};var Y={};Y=P({}.isPrototypeOf);var V={},K={},X={},Z={},ee=y.navigator,et=ee&&ee.userAgent;Z=et?String(et):"";var er=y.process,en=y.Deno,ei=er&&er.versions||en&&en.version,ea=ei&&ei.v8;ea&&(i=(n=ea.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&Z&&(!(n=Z.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=Z.match(/Chrome\/(\d+)/))&&(i=+n[1]),X=i;var eo=y.String;V=(K=!!Object.getOwnPropertySymbols&&!w(function(){var e=Symbol("symbol detection");return!eo(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&X&&X<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var es=Object;z=V?function(e){return"symbol"==typeof e}:function(e){var t=J("Symbol");return G(t)&&Y(t.prototype,es(e))};var ec={},eu={},el={},ed=String;el=function(e){try{return ed(e)}catch(e){return"Object"}};var ep=TypeError;eu=function(e){if(G(e))return e;throw new ep(el(e)+" is not a function")},ec=function(e,t){var r=e[t];return C(r)?void 0:eu(r)};var ef={},eh=TypeError;ef=function(e,t){var r,n;if("string"===t&&G(r=e.toString)&&!B(n=k(r,e))||G(r=e.valueOf)&&!B(n=k(r,e))||"string"!==t&&G(r=e.toString)&&!B(n=k(r,e)))return n;throw new eh("Can't convert object to primitive value")};var eg={},ev={},em={};em=!1;var ey={},eb=Object.defineProperty;ey=function(e,t){try{eb(y,e,{value:t,configurable:!0,writable:!0})}catch(r){y[e]=t}return t};var e_="__core-js_shared__",ew=ev=y[e_]||ey(e_,{});(ew.versions||(ew.versions=[])).push({version:"3.46.0",mode:em?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)",license:"https://github.com/zloirock/core-js/blob/v3.46.0/LICENSE",source:"https://github.com/zloirock/core-js"}),eg=function(e,t){return ev[e]||(ev[e]=t||{})};var ek={},eE={},eS=Object;eE=function(e){return eS(H(e))};var e$=P({}.hasOwnProperty);ek=Object.hasOwn||function(e,t){return e$(eE(e),t)};var eO={},ej=0,eL=Math.random(),ex=P(1.1.toString);eO=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ex(++ej+eL,36)};var eP=y.Symbol,eT=eg("wks"),eM=V?eP.for||eP:eP&&eP.withoutSetter||eO,eF=TypeError,eI=function(e){return ek(eT,e)||(eT[e]=K&&ek(eP,e)?eP[e]:eM("Symbol."+e)),eT[e]}("toPrimitive");W=function(e,t){if(!B(e)||z(e))return e;var r,n=ec(e,eI);if(n){if(void 0===t&&(t="default"),r=k(n,e,t),!B(r)||z(r))return r;throw new eF("Can't convert object to primitive value")}return void 0===t&&(t="number"),ef(e,t)},U=function(e){var t=W(e,"string");return z(t)?t:t+""};var eq={},eA={},eN=y.document,eD=B(eN)&&B(eN.createElement);eA=function(e){return eD?eN.createElement(e):{}},eq=!_&&!w(function(){return 7!==Object.defineProperty(eA("div"),"a",{get:function(){return 7}}).a});var eH=Object.getOwnPropertyDescriptor;t=_?eH:function(e,t){if(e=L(e),t=U(t),eq)try{return eH(e,t)}catch(e){}if(ek(e,t))return j(!k(r,e,t),e[t])};var eC={},eR={};eR=_&&w(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eU={},eW=String,eB=TypeError;eU=function(e){if(B(e))return e;throw new eB(eW(e)+" is not an object")};var eG=TypeError,eQ=Object.defineProperty,ez=Object.getOwnPropertyDescriptor,eJ="enumerable",eY="configurable",eV="writable";a=_?eR?function(e,t,r){if(eU(e),t=U(t),eU(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eV in r&&!r[eV]){var n=ez(e,t);n&&n[eV]&&(e[t]=r.value,r={configurable:eY in r?r[eY]:n[eY],enumerable:eJ in r?r[eJ]:n[eJ],writable:!1})}return eQ(e,t,r)}:eQ:function(e,t,r){if(eU(e),t=U(t),eU(r),eq)try{return eQ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eG("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eC=_?function(e,t,r){return a(e,t,j(1,r))}:function(e,t,r){return e[t]=r,e};var eK={},eX={},eZ=Function.prototype,e0=_&&Object.getOwnPropertyDescriptor,e1=ek(eZ,"name"),e2=e1&&(!_||_&&e0(eZ,"name").configurable),e9={},e4=P(Function.toString);G(ev.inspectSource)||(ev.inspectSource=function(e){return e4(e)}),e9=ev.inspectSource;var e3={},e5={},e7=y.WeakMap;e5=G(e7)&&/native code/.test(String(e7));var e8={},e6=eg("keys");e8=function(e){return e6[e]||(e6[e]=eO(e))};var te={};te={};var tt="Object already initialized",tr=y.TypeError,tn=y.WeakMap;if(e5||ev.state){var ti=ev.state||(ev.state=new tn);ti.get=ti.get,ti.has=ti.has,ti.set=ti.set,o=function(e,t){if(ti.has(e))throw new tr(tt);return t.facade=e,ti.set(e,t),t},s=function(e){return ti.get(e)||{}},c=function(e){return ti.has(e)}}else{var ta=e8("state");te[ta]=!0,o=function(e,t){if(ek(e,ta))throw new tr(tt);return t.facade=e,eC(e,ta,t),t},s=function(e){return ek(e,ta)?e[ta]:{}},c=function(e){return ek(e,ta)}}var to=(e3={set:o,get:s,has:c,enforce:function(e){return c(e)?s(e):o(e,{})},getterFor:function(e){return function(t){var r;if(!B(t)||(r=s(t)).type!==e)throw new tr("Incompatible receiver, "+e+" required");return r}}}).enforce,ts=e3.get,tc=String,tu=Object.defineProperty,tl=P("".slice),td=P("".replace),tp=P([].join),tf=_&&!w(function(){return 8!==tu(function(){},"length",{value:8}).length}),th=String(String).split("String"),tg=eX=function(e,t,r){"Symbol("===tl(tc(t),0,7)&&(t="["+td(tc(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ek(e,"name")||e2&&e.name!==t)&&(_?tu(e,"name",{value:t,configurable:!0}):e.name=t),tf&&r&&ek(r,"arity")&&e.length!==r.arity&&tu(e,"length",{value:r.arity});try{r&&ek(r,"constructor")&&r.constructor?_&&tu(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=to(e);return ek(n,"source")||(n.source=tp(th,"string"==typeof t?t:"")),e};Function.prototype.toString=tg(function(){return G(this)&&ts(this).source||e9(this)},"toString"),eK=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(G(r)&&eX(r,o,n),n.global)i?e[t]=r:ey(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tv={},tm={},ty={},tb={},t_={},tw={},tk=Math.ceil,tE=Math.floor;tw=Math.trunc||function(e){var t=+e;return(t>0?tE:tk)(t)},t_=function(e){var t=+e;return t!=t||0===t?0:tw(t)};var tS=Math.max,t$=Math.min;tb=function(e,t){var r=t_(e);return r<0?tS(r+t,0):t$(r,t)};var tO={},tj={},tL=Math.min;tj=function(e){var t=t_(e);return t>0?tL(t,0x1fffffffffffff):0},tO=function(e){return tj(e.length)};var tx=function(e){return function(t,r,n){var i,a=L(t),o=tO(a);if(0===o)return!e&&-1;var s=tb(n,o);if(e&&r!=r){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},tP={includes:tx(!0),indexOf:tx(!1)}.indexOf,tT=P([].push);ty=function(e,t){var r,n=L(e),i=0,a=[];for(r in n)!ek(te,r)&&ek(n,r)&&tT(a,r);for(;t.length>i;)ek(n,r=t[i++])&&(~tP(a,r)||tT(a,r));return a};var tM=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");u=Object.getOwnPropertyNames||function(e){return ty(e,tM)},l=Object.getOwnPropertySymbols;var tF=P([].concat);tm=J("Reflect","ownKeys")||function(e){var t=u(eU(e));return l?tF(t,l(e)):t},tv=function(e,r,n){for(var i=tm(r),o=0;o<i.length;o++){var s=i[o];ek(e,s)||n&&ek(n,s)||a(e,s,t(r,s))}};var tI={},tq=/#|\.prototype\./,tA=function(e,t){var r=tD[tN(e)];return r===tC||r!==tH&&(G(t)?w(t):!!t)},tN=tA.normalize=function(e){return String(e).replace(tq,".").toLowerCase()},tD=tA.data={},tH=tA.NATIVE="N",tC=tA.POLYFILL="P";tI=tA,m=function(e,r){var n,i,a,o,s,c=e.target,u=e.global,l=e.stat;if(n=u?y:l?y[c]||ey(c,{}):y[c]&&y[c].prototype)for(i in r){if(o=r[i],a=e.dontCallGetSet?(s=t(n,i))&&s.value:n[i],!tI(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==a){if(typeof o==typeof a)continue;tv(o,a)}(e.sham||a&&a.sham)&&eC(o,"sham",!0),eK(n,i,o,e)}};var tR={},tU={},tW=Function.prototype,tB=tW.apply,tG=tW.call;tU="object"==typeof Reflect&&Reflect.apply||(E?tG.bind(tB):function(){return tG.apply(tB,arguments)});var tQ={},tz={},tJ=(tz=function(e){if("Function"===I(e))return P(e)})(tz.bind);tQ=function(e,t){return eu(e),void 0===t?e:E?tJ(e,t):function(){return e.apply(t,arguments)}};var tY={};tY=J("document","documentElement");var tV={};tV=P([].slice);var tK={},tX=TypeError;tK=function(e,t){if(e<t)throw new tX("Not enough arguments");return e};var tZ={};tZ=/(?:ipad|iphone|ipod).*applewebkit/i.test(Z);var t0={},t1={},t2=function(e){return Z.slice(0,e.length)===e};t0="NODE"===(t1=t2("Bun/")?"BUN":t2("Cloudflare-Workers")?"CLOUDFLARE":t2("Deno/")?"DENO":t2("Node.js/")?"NODE":y.Bun&&"string"==typeof Bun.version?"BUN":y.Deno&&"object"==typeof Deno.version?"DENO":"process"===I(y.process)?"NODE":y.window&&y.document?"BROWSER":"REST");var t9=y.setImmediate,t4=y.clearImmediate,t3=y.process,t5=y.Dispatch,t7=y.Function,t8=y.MessageChannel,t6=y.String,re=0,rt={},rr="onreadystatechange";w(function(){d=y.location});var rn=function(e){if(ek(rt,e)){var t=rt[e];delete rt[e],t()}},ri=function(e){return function(){rn(e)}},ra=function(e){rn(e.data)},ro=function(e){y.postMessage(t6(e),d.protocol+"//"+d.host)};t9&&t4||(t9=function(e){tK(arguments.length,1);var t=G(e)?e:t7(e),r=tV(arguments,1);return rt[++re]=function(){tU(t,void 0,r)},p(re),re},t4=function(e){delete rt[e]},t0?p=function(e){t3.nextTick(ri(e))}:t5&&t5.now?p=function(e){t5.now(ri(e))}:t8&&!tZ?(h=(f=new t8).port2,f.port1.onmessage=ra,p=tQ(h.postMessage,h)):y.addEventListener&&G(y.postMessage)&&!y.importScripts&&d&&"file:"!==d.protocol&&!w(ro)?(p=ro,y.addEventListener("message",ra,!1)):p=rr in eA("script")?function(e){tY.appendChild(eA("script"))[rr]=function(){tY.removeChild(this),rn(e)}}:function(e){setTimeout(ri(e),0)});var rs=(tR={set:t9,clear:t4}).clear;m({global:!0,bind:!0,enumerable:!0,forced:y.clearImmediate!==rs},{clearImmediate:rs});var rc=tR.set,ru={},rl=y.Function,rd=/MSIE .\./.test(Z)||"BUN"===t1&&((e=y.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));ru=function(e,t){var r=t?2:1;return rd?function(n,i){var a=tK(arguments.length,1)>r,o=G(n)?n:rl(n),s=a?tV(arguments,r):[],c=a?function(){tU(o,this,s)}:o;return t?e(c,i):e(c)}:e};var rp=y.setImmediate?ru(rc,!1):rc;m({global:!0,bind:!0,enumerable:!0,forced:y.setImmediate!==rp},{setImmediate:rp});const rf="https://forkify-api.herokuapp.com/api/v2/recipes/",rh="54810f53-320a-4da9-ac92-5a812da428f8",rg=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rv={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rm=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},ry=async function(e){try{let t=await rg(`${rf}${e}?key=${rh}`);rv.recipe=rm(t),rv.bookmarks.some(t=>t.id===e)?rv.recipe.bookmarked=!0:rv.recipe.bookmarked=!1,console.log(rv.recipe)}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rb=async function(e){try{rv.search.query=e;let t=await rg(`${rf}?search=${e}&key=${rh}`);console.log(t),rv.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rv.search.page=1}catch(e){throw console.error(`${e}\u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},r_=function(e=rv.search.page){rv.search.page=e;let t=(e-1)*rv.search.resultsPerPage,r=e*rv.search.resultsPerPage;return rv.search.results.slice(t,r)},rw=function(e){rv.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rv.recipe.servings}),rv.recipe.servings=e},rk=function(){localStorage.setItem("bookmarks",JSON.stringify(rv.bookmarks))},rE=function(e){rv.bookmarks.push(e),e.id===rv.recipe.id&&(rv.recipe.bookmarked=!0),rk()},rS=function(e){let t=rv.bookmarks.findIndex(t=>t.id===e);rv.bookmarks.splice(t,1),e===rv.recipe.id&&(rv.recipe.bookmarked=!1),rk()},r$=localStorage.getItem("bookmarks");r$&&(rv.bookmarks=JSON.parse(r$));const rO=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient fromat! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rg(`${rf}?key=${rh}`,r);rv.recipe=rm(n),rE(rv.recipe)}catch(e){throw e}};var rj={};rj=import.meta.resolve("eyyUD");class rL{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()==""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
        <div class="spinner">
          <svg>
            <use href="${v(rj)}#icon-loader"></use>
          </svg>
        </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
            <div class="error">
                <div>
                  <svg>
                    <use href="${v(rj)}#icon-alert-triangle"></use>
                  </svg>
                </div>
                <p>${e}</p>
              </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
            <div class="message">
                <div>
                  <svg>
                    <use href="${v(rj)}#icon-smile"></use>
                  </svg>
                </div>
                <p>${e}</p>
              </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var rx={};function rP(e,t,r,n,i){var a,o,s,c;let u=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&u.push(t);let l=0,d=e,p=t;for(;l<=u.length;)d%u[l]==0&&p%u[l]==0?(u[l],d/=u[l],p/=u[l]):l++;return a=p,o=d,s=r,c=n,1===a&&1===o?(s=`${c}${(parseInt(s)+1).toString()}`,`${s}`):0===o?`${c}${s}`:"0"==s?`${c}${o}/${a}`:`${c}${s} ${o}/${a}`}rx=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!o||!(r.length>2)){var s,c,u;return s=r,c=a,u=t,rP(parseInt(s,10),Math.pow(10,s.length),c,u,!1)}{let e=o[0].split("").reverse().join(""),n=o[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=Math.pow(10,a),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length);return rP(Math.round((s*c-s)*Math.pow(10,a)),(c-1)*o,n,i,!0)}(r,n,e,a,t)}};class rT extends rL{_parentElement=document.querySelector(".recipe");_data;_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;console.log(r);let{updateTo:n}=r.dataset;n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${v(rj)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${v(rj)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${v(rj)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${v(rj)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${v(rj)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${v(rj)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
          </div>

          <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${v(rj)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `}_generateMarkupIngredient(e){return`
              <li class="recipe__ingredient">
                <svg class="recipe__icon">
                  <use href="${v(rj)}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${e.quantity?v(rx)(e.quantity).toString():""}</div>
                <div class="recipe__description">
                  <span class="recipe__unit">${e.unit}</span>
                  ${e.description}
                </div>
              </li>
`}}var rM=new rT;class rF{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rI=new rF,rq=new class extends rL{_parentElement="";_generateMarkup(e){let t=window.location.hash.slice(1);return`
            <li class="preview">
                <a class="preview__link ${this._data.id===t?"preview__link--active":""}" href="#${this._data.id}">
                <figure class="preview__fig">
                    <img src="${this._data.image}" alt="${this._data.title}" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${this._data.title}</h4>
                    <p class="preview__publisher">${this._data.publisher}</p>
                    <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                      <svg>
                        <use href="${v(rj)}#icon-user"></use>
                      </svg>
                  </div>
                </div>
                </a>
            </li>
              `}};class rA extends rL{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again.";_message="";_generateMarkup(){return this._data.map(e=>rq.render(e,!1)).join("")}}var rN=new rA;class rD extends rL{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(console.log(t),1===e&&t>1)?`
            <button data-goto="${e+1}" 
            class="btn--inline pagination__btn--next">
                <span>Page ${e+1}</span>
                <svg class="search__icon">
                <use href="${v(rj)}#icon-arrow-right"></use>
                </svg>
            </button>
      `:e===t&&t>1?`
          <button data-goto="${e-1}"
          class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${v(rj)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
      `:e<t?`
          <button data-goto="${e-1}" 
          class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${v(rj)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
          <button data-goto="${e+1}"
          } class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${v(rj)}#icon-arrow-right"></use>
            </svg>
          </button>
      `:""}}var rH=new rD;class rC extends rL{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it.";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rq.render(e,!1)).join("")}}var rR=new rC;class rU extends rL{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}_generateFormMarkup(){return`<div class="upload__column">
      <h3 class="upload__heading">Recipe data</h3>
      <label>Title</label>
      <input value="TEST23" required name="title" type="text" />
      <label>URL</label>
      <input value="TEST23" required name="sourceUrl" type="text" />
      <label>Image URL</label>
      <input value="TEST23" required name="image" type="text" />
      <label>Publisher</label>
      <input value="TEST23" required name="publisher" type="text" />
      <label>Prep time</label>
      <input value="23" required name="cookingTime" type="number" />
      <label>Servings</label>
      <input value="23" required name="servings" type="number" />
    </div>
 
    <div class="upload__column">
      <h3 class="upload__heading">Ingredients</h3>
      <label>Ingredient 1</label>
      <input
        value="0.5,kg,Rice"
        type="text"
        required
        name="ingredient-1"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
      <label>Ingredient 2</label>
      <input
        value="1,,Avocado"
        type="text"
        name="ingredient-2"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
      <label>Ingredient 3</label>
      <input
        value=",,salt"
        type="text"
        name="ingredient-3"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
      <label>Ingredient 4</label>
      <input
        type="text"
        name="ingredient-4"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
      <label>Ingredient 5</label>
      <input
        type="text"
        name="ingredient-5"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
      <label>Ingredient 6</label>
      <input
        type="text"
        name="ingredient-6"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
    </div>
 
        <button class="btn upload__btn">
          <svg>
            <use href="src/img/icons.svg#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>`}_addHandlerRender(){window.addEventListener("load",this.resetForm.bind(this))}toggleWindow(){Array.from(this._parentElement.childNodes).length<7&&Array.from(this._overlay.classList).includes("hidden")&&(this._parentElement.innerHTML=this._generateFormMarkup()),this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rW=new rU,rB=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,a){var o,s,c,u,l=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(l,"_invoke",{value:(o=e,s=n,c=new j(a||[]),u=p,function(e,r){if(u===f)throw Error("Generator is already running");if(u===h){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var i=function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return(n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?g:("return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g);var o=d(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(n,c);if(i){if(i===g)continue;return i}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===p)throw u=h,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=f;var a=d(o,s,c);if("normal"===a.type){if(u=c.done?h:"suspendedYield",a.arg===g)continue;return{value:a.arg,done:c.done}}"throw"===a.type&&(u=h,c.method="throw",c.arg=a.arg)}})}),l}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};u(b,o,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,o)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=d(e[i],e,a);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(l).then(function(e){u.value=e,o(u)},function(e){return r("throw",e,o,s)})}}(i,a,r,o)})}return r=r?r.then(o,o):o()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function L(e){if(null!=e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new S(l(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(k),u(k,c,"Generator"),u(k,o,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);else if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(u){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rB}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rB:Function("r","regeneratorRuntime = r")(rB)}const rG=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rM.renderSpinner(),rN.update(r_()),rR.update(rv.bookmarks),await ry(e),rM.render(rv.recipe)}catch(e){rM.renderError()}},rQ=async function(){try{rN.renderSpinner();let e=rI.getQuery();if(!e)return;await rb(e),rN.render(r_()),rH.render(rv.search)}catch(e){console.log(e)}},rz=async function(e){try{rW.renderSpinner(),await rO(e),console.log(rv.recipe),rM.render(rv.recipe),rW.renderMessage(),rR.render(rv.bookmarks),window.history.pushState(null,"",`#${rv.recipe.id}`),setTimeout(function(){rW.toggleWindow()},2500)}catch(e){console.error("\uD83D\uDCA5",e),rW.renderError(e.message)}};rR.addHandlerRender(function(){rR.render(rv.bookmarks)}),rM.addHandlerRender(rG),rM.addHandlerUpdateServings(function(e){rw(e),rM.update(rv.recipe)}),rM.addHandlerAddBookmark(function(){rv.recipe.bookmarked?rS(rv.recipe.id):rE(rv.recipe),rM.update(rv.recipe),rR.render(rv.bookmarks)}),rI.addHandlerSearch(rQ),rH.addHandlerClick(function(e){rN.render(r_(e)),rH.render(rv.search)}),rW.addHandlerUpload(rz),console.log("Andy Test");
//# sourceMappingURL=starter.02aeeb98.js.map
