webpackJsonp([1],{"2P5F":function(t,e){},"6A3X":function(t,e){},"7s1j":function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("7+uW"),r={name:"App",data:function(){return{transitionName:"",title:""}},created:function(){this.$nextTick(this.updateTitle)},methods:{onBack:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;sys.navigateBack(t)},updateTitle:function(){this.title=this.$route.meta.title}},watch:{$route:function(t,e){var o=t.path.split("/").length,n=e.path.split("/").length;this.transitionName=o<n?"zoom":"fade",this.$nextTick(this.updateTitle)}}},l={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Layout",{staticClass:"layout"},[o("Header",{staticClass:"layout-header-bar"},[o("div",{staticClass:"layout-header-left",on:{click:function(e){t.onBack(1)}}},[o("Icon",{staticClass:"layout-back btn-active",attrs:{type:"ios-arrow-back",size:"28"}})],1),t._v(" "),o("div",{staticClass:"layout-header-center"},[t._v("\n\t\t\t"+t._s(t.title)+"\n\t\t")]),t._v(" "),o("div",{staticClass:"layout-header-right"})]),t._v(" "),o("Content",{staticClass:"layout-content"},[o("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[o("router-view")],1)],1)],1)},staticRenderFns:[]};var a=o("VU/8")(r,l,!1,function(t){o("2P5F")},null,null).exports,i=o("/ocq"),s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")]),t._v(" "),o("router-link",{attrs:{to:"World",tag:"h1"}},[t._v("Hello")])],1)},staticRenderFns:[]};var c=o("VU/8")({name:"Hello",data:function(){return{}}},s,!1,function(t){o("zqS1")},"data-v-114b310e",null).exports,u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"hello"},[e("router-link",{attrs:{to:"/"}},[this._v("World")])],1)},staticRenderFns:[]};var d=o("VU/8")({name:"World",data:function(){return{}}},u,!1,function(t){o("7s1j")},"data-v-748027e1",null).exports;n.default.use(i.a);var v=new i.a({routes:[{path:"/",name:"Hello",meta:{title:"Hello"},component:c},{path:"/world",name:"World",meta:{title:"World"},component:d}],scrollBehavior:function(t,e,o){return t.hash?{selector:t.hash}:o||{x:0,y:0}}});v.afterEach(function(t){t.meta&&t.meta.title&&(document.title=t.meta.title)});var h=v,f=o("BTaQ"),g=o.n(f),p=o("Dd8w"),m=o.n(p),_=null;function w(t){_&&_.call(null,t)}window.addEventListener("online",w),window.addEventListener("offline",w);var k={getSystemInfo:function(){var t=navigator.userAgent.split(" "),e=t[t.length-1].split("/");return{appName:2===e.length?e[0]:navigator.appCodeName,appVersion:2===e.length?e[1]:"0.0.0",platform:navigator.platform,mimeTypes:navigator.mimeTypes,language:navigator.language,languages:navigator.languages,width:window.screen.width,height:window.screen.height,colorDepth:window.screen.colorDepth,deviceXDPI:window.screen.deviceXDPI,fontSmoothingEnabled:window.screen.fontSmoothingEnabled}},getNetworkType:function(){return"unknown"},getNetworkStatus:function(){return navigator.onLine?"online":"offline"},isNetworkOnline:function(){return navigator.onLine},isNetworkOffline:function(){return!navigator.onLine},setOnNetworkStatusListener:function(t){_=t},getClipboardData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=null;try{if(window.clipboardData&&window.clipboardData.getData)e={data:window.clipboardData.getData("Text")},t.success&&t.success.call(null,e);else e={errMsg:"功能未实现"},t.fail&&t.fail.call(null,e)}catch(t){console.error(t)}t.complete&&t.complete(e)},setClipboardData:function(t){var e=null;try{window.clipboardData&&window.clipboardData.setData?window.clipboardData.setData("Text",t.data)?(e={data:t.data},t.success&&t.success.call(null,e)):(e={errMsg:"设置失败"},t.fail&&t.fail.call(null,e)):(e={errMsg:"功能未实现"},t.fail&&t.fail.call(null,e))}catch(t){console.error(t)}t.complete&&t.complete(e)},clearClipboardData:function(){return!(!window.clipboardData||!window.clipboardData.clearData)&&window.clipboardData.clearData("Text")},setNavigateTitle:function(t){window.document.title=t}},y=o("woOf"),W=o.n(y);var H=!1,b={showLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};H=!0,f.Spin.show(t)},hideLoading:function(){H&&(H=!1,setTimeout(f.Spin.hide,100))},showToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];t="string"==typeof t?{content:t,onClose:e}:t,f.Message.message(t.icon||"info",W()({duration:1},t))},showNotification:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"info"===t.type?f.Notice.info(t):"success"===t.type?f.Notice.success(t):"warning"===t.type?f.Notice.warning(t):"error"===t.type?f.Notice.error(t):f.Notice.open(t)},showModal:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((t=W()({showCancel:!0,onRemove:function(){}},t)).icon){case"info":case"success":case"warning":case"error":t.showCancel=!1;break;case"confirm":t.icon="confirm"}var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return f.Modal.newInstance(W()({closable:!1,maskClosable:!1,footerHide:!0},t))}(t.modal||{});return t.className&&e.component.$el.classList.add(t.className),e.show(t),e},alert:function(t){return t.icon="info",this.showModal(t)},confirm:function(t){return t.icon="confirm",this.showModal(t)},prompt:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o={value:"number"===e.type?e.value||0:e.value||"",autofocus:!0,placeholder:e.placeholder,type:e.type||"text",maxlength:e.maxlength,icon:e.icon,rows:e.rows,autosize:e.autosize,number:e.number,autocomplete:e.autocomplete,elementId:e.elementId,spellcheck:e.spellcheck,max:e.max,min:e.min,step:e.step,editable:e.editable,style:e.inputStyle},n="number"===e.type?"InputNumber":"select"===e.type?"Select":"Input";e.modal=e.modal||{},e.loading=e.require,e.modal.render=function(t){var r="Select"===n?e.items.map(function(e,o){return t("Option",{props:{value:o}},e)}):[];return t("Form",{props:{labelPosition:"left"}},[t("p",{style:{marginTop:"10px",marginBottom:"10px"},domProps:{innerHTML:e.content}}),t("FormItem",{props:{label:e.label,labelWidth:e.labelWidth?e.labelWidth:e.label?80:0},style:{marginBottom:"10px"}},[t(n,{props:o,style:"InputNumber"===n?W()(o.style||{},{width:"100%"}):o.style,on:{input:function(t){return o.value=t}}},r)])])};var r=e.onOk;e.onOk=function(){if(!e.require||void 0!==o.value&&null!==o.value&&""!==o.value)e.require&&l.remove(),r&&r(o.value);else{l.component.$parent.buttonLoading=!1;var a="Select"===n?"请选择":"请输入";t.showToast({content:e.emptyTip||a,icon:"error"})}};var l=this.confirm(e);return l},showActionSheet:function(t){},showNavigateLoading:function(){g.a.LoadingBar.start()},hideNavigateLoading:function(){g.a.LoadingBar.finish()}},T=o("NpXC"),S=o.n(T),C=o("2Pnh"),I=o.n(C),L={chooseImage:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]},previewImage:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]},getImageInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=new Image;e.onload=function(){try{t.success&&t.success(e)}catch(t){console.error(t)}t.complete&&t.complete(e)},e.onabort=e.onerror=function(e){try{t.fail&&t.fail(e)}catch(t){console.error(t)}t.complete&&t.complete(e)}},canvas2Image:function(t){return S.a.convertToImage(t.canvas,t.width,t.height,t.type||"png")},html2Canvas:function(t){I()(t.el).then(function(e){try{t.success&&t.success.call(null,e)}catch(t){console.error(t)}t.complete&&t.complete.call(null,e)}).catch(function(e){try{t.fail&&t.fail.call(null,e)}catch(e){console.error(e)}t.complete&&t.complete.call(null,e)})}},N=o("mtWM"),D=o.n(N),x=o("mw3O"),q=o.n(x);function E(t,e){try{t.complete&&t.complete.call(t.thisArg,e)}catch(t){console.error(t)}t.isShowLoading&&b.hideLoading()}var A=null;function O(){return null==A&&(A=R()),A}function R(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return D.a.create(W()({responseType:"json",withCredentials:!0,timeout:3e4,paramsSerializer:function(t){return q.a.stringify(t,{arrayFormat:"brackets"})}},t))}function $(t){return(t=W()({isShowLoading:!0,thisArg:void 0,dataType:"json",method:"get"},t)).isShowLoading&&b.showLoading(),t.method=t.method?t.method.toLowerCase():"get",-1!==["get","delete","options"].indexOf(t.method)?(t.params=t.data,delete t.data):"json"===t.dataType?t.headers=W()(t.headers||{},{"Content-Type":"application/json"}):(t.headers=W()(t.headers||{},{"Content-Type":"application/x-www-form-urlencoded"}),t.data&&(t.data=q.a.stringify(t.data,{encodeValuesOnly:!0}))),O().request(t).then(function(e){!function(t,e){try{t.success&&t.success.call(t.thisArg,e.data,e)}catch(t){console.error(t)}E(t,e.data)}(t,e)}).catch(function(e){!function(t,e,o){try{console.error("{url:"+t.url+"}请求失败",e),!1!==(!t.error||t.error.call(t.thisArg,e))&&(e.message?b.showToast({icon:"error",content:e.message||"请求服务器失败，稍后再试~",duration:3}):b.showToast({icon:"error",content:"请求服务器失败，稍后再试~",duration:3}))}catch(t){console.error(t)}E(t,e)}(t,e)})}$.get=function(t,e,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this(W()({url:t,data:e,success:o,method:"GET"},n))},$.post=function(t,e,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this(W()({url:t,data:e,success:o,method:"POST"},n))},$.put=function(t,e,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this(W()({url:t,data:e,success:o,method:"PUT"},n))},$.delete=function(t,e,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this(W()({url:t,data:e,success:o,method:"DELETE"},n))};var B={init:R,request:$,requestAll:function(t){},upload:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]},download:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]},addRequestInterceptor:function(t,e){return O().interceptors.request.use(t,e)},removeRequestInterceptor:function(t){O().interceptors.request.eject(t)},addResponseInterceptor:function(t,e){return O().interceptors.response.use(t,e)},removeResponseInterceptor:function(t){O().interceptors.response.eject(t)}},M={navigateTo:function(t){h.push(t.url,function(e){try{t.success&&t.success.call(null,e)}catch(t){console.log(t)}t.complete&&t.complete.call(null,e)},function(e){try{t.success&&t.success.call(null,e)}catch(e){console.log(e)}t.complete&&t.complete.call(null,e)})},redirectTo:function(t){h.replace(t.url,function(e){try{t.success&&t.success.call(null,e)}catch(t){console.log(t)}t.complete&&t.complete.call(null,e)},function(e){try{t.success&&t.success.call(null,e)}catch(e){console.log(e)}t.complete&&t.complete.call(null,e)})},reLaunch:function(t){this.navigateBack(h.getMatchedComponents().length),this.redirectTo(t)},navigateBack:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;h.go(-t)},navigateForward:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;h.go(t)}},X=o("Zrlr"),F=o.n(X),P=o("wxAW"),U=o.n(P),j=function(){function t(e){F()(this,t),e instanceof t&&(e=e.el),this.el=e}return U()(t,[{key:"query",value:function(e){var o=this.el.querySelector(e);return o?new t(o):null}},{key:"queryAll",value:function(e){return this.el.querySelectorAll(e).map(function(e){return new t(e)})}},{key:"getLocation",value:function(){return{offsetX:this.offsetX,offsetY:this.offsetY,pageX:this.pageX,pageY:this.pageY}}}]),t}(),z=null;function V(){return z||(z=new j(document)),z}var Y={createDomQuery:function(t){return new j(t)},domQuery:function(t){return V().query(t)},domQueryAll:function(t){return V().queryAll(t)}},Q=o("lbHh"),K=o.n(Q),G={setStorage:function(t,e){return!!window.localStorage&&(localStorage.setItem(t,e),!0)},getStorage:function(t){return!!window.localStorage&&localStorage.getItem(t)},removeStorage:function(t){return!!window.localStorage&&(localStorage.removeItem(t),!0)},clearStorage:function(){return!!window.localStorage&&(localStorage.clear(),!0)},setCookie:function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};K.a.set(t,e,o)},getCookie:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return K.a.get(t)},removeCookie:function(t){K.a.remove(t)}},J=m()({},k,b,L,B,M,Y,G);function Z(t){J.showNotification({title:"错误提示",type:"error",desc:"上传失败："+t})}window.sys=J,window.IS_DEV=!1,J.addResponseInterceptor(function(t){var e=t.data;if(e.ret)return e;var o=new Error(e.msg);throw o.response=t,o.data=e,o},function(t){console.error(t)}),n.default.mixin({methods:{onUploadFormatError:function(){return Z("文件格式错误")},onUploadSizeError:function(){return Z("文件大小超出限制")}}});n.default.use(function(t){t.directive("drag",{bind:function(t){var e=t.style.cursor;t.style.cursor="move",t.onmousedown=function(o){var n=o.clientX-t.offsetLeft,r=o.clientY-t.offsetTop;t.onmousemove=function(e){e.preventDefault();var o=e.offsetX+t.offsetLeft-n,l=e.offsetY+t.offsetTop-r;t.style.left=o+"px",t.style.top=l+"px"},t.onmouseup=function(o){t.onmousemove=null,t.onmouseup=null,t.style.cursor=e}}}}),t.prototype.$getConferenceId=function(){return __ROUTER__.app.$route.query.id},t.prototype.$getConferenceName=function(){return __ROUTER__.app.$route.query.name}});o("6A3X"),o("waKr");n.default.config.productionTip=!1,n.default.use(g.a),h.afterEach(function(){g.a.LoadingBar.finish()}),window.__ROUTER__=h,window.__VUE__=new n.default({el:"#app",router:h,components:{App:a},template:"<App/>"})},waKr:function(t,e){},zqS1:function(t,e){}},["NHnr"]);