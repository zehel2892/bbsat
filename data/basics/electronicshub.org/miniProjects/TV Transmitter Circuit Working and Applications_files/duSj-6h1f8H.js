/*!CK:2389295099!*//*1436819901,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["5lV\/Y"]); }

__d("PlatformVersions",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={LATEST:"v2.5",versions:{UNVERSIONED:"unversioned",V1_0:"v1.0",V2_0:"v2.0",V2_1:"v2.1",V2_2:"v2.2",V2_3:"v2.3",V2_4:"v2.4",V2_5:"v2.5"}};},null);
__d("PluginConnectButtonType",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={BLUE_BASE:1,WHITE_BASE:2};},null);
__d("PlatformDialog",["DOMEventListener","DOMEvent","CSS","cx"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(l,m,n){"use strict";this.$PlatformDialog0=l;this.$PlatformDialog1=m;if(n){var o=false;g.add(this.$PlatformDialog0,'submit',function(p){if(o){new h(p).kill();return;}o=true;i.addClass(l,"_32qa");});}}k.prototype.getForm=function(){"use strict";return this.$PlatformDialog0;};k.prototype.getDisplay=function(){"use strict";return this.$PlatformDialog1;};k.RESPONSE='platform/dialog/response';e.exports=k;},null);
__d("ArtillerySegment",["ImmutableObject","invariant","performanceAbsoluteNow"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=0;function k(l){"use strict";h(l);h(('category' in l)&&('description' in l));this.$ArtillerySegment0=false;this.$ArtillerySegment1=Object.assign({},l,{id:(j++).toString(36)});this.$ArtillerySegment2=[];}k.prototype.getID=function(){"use strict";return this.$ArtillerySegment1.id;};k.prototype.begin=function(){"use strict";this.$ArtillerySegment1.begin=i();return this;};k.prototype.end=function(){"use strict";this.$ArtillerySegment1.end=i();return this;};k.prototype.appendChild=function(){"use strict";for(var l=[],m=0,n=arguments.length;m<n;m++)l.push(arguments[m]);h(!this.$ArtillerySegment0);l.forEach(function(o){this.$ArtillerySegment2.push(o.getID());}.bind(this));return this;};k.prototype.setPosted=function(){"use strict";this.$ArtillerySegment0=true;return this;};k.prototype.getPostData=function(){"use strict";return new g(this.$ArtillerySegment1,{children:this.$ArtillerySegment2.slice()});};e.exports=k;},null);
__d("ArtillerySequence",["ImmutableObject","invariant"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=0;function j(k){"use strict";h(k);h('description' in k);this.$ArtillerySequence0=false;this.$ArtillerySequence1=Object.assign({},k,{id:(i++).toString(36)});this.$ArtillerySequence2=[];}j.prototype.getID=function(){"use strict";return this.$ArtillerySequence1.id;};j.prototype.addSegment=function(){"use strict";for(var k=[],l=0,m=arguments.length;l<m;l++)k.push(arguments[l]);h(!this.$ArtillerySequence0);k.forEach(function(n){this.$ArtillerySequence2.push(n.getID());}.bind(this));return this;};j.prototype.setPosted=function(){"use strict";this.$ArtillerySequence0=true;return this;};j.prototype.getPostData=function(){"use strict";return new g(this.$ArtillerySequence1,{segments:this.$ArtillerySequence2.slice()});};e.exports=j;},null);
__d("ArtilleryTrace",["ArtillerySegment","ArtillerySequence","ImmutableObject","invariant","mixInEventEmitter"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(){"use strict";this.$ArtilleryTrace0=false;this.$ArtilleryTrace1=(void 0);this.$ArtilleryTrace2={};this.$ArtilleryTrace3=[];this.$ArtilleryTrace4=[];this.$ArtilleryTrace5={};this.$ArtilleryTrace6=[];}l.prototype.createSequence=function(m){"use strict";j(!this.$ArtilleryTrace0);var n=new h(m);this.$ArtilleryTrace3.push(n);return n;};l.prototype.createSegment=function(m){"use strict";j(!this.$ArtilleryTrace0);var n=new g(m);this.$ArtilleryTrace4.push(n);return n;};l.prototype.markSegment=function(m,n){"use strict";j(!this.$ArtilleryTrace0);this.$ArtilleryTrace5[n]=m.getID();return this;};l.prototype.connectTrace=function(m,n){"use strict";j(!this.$ArtilleryTrace0);n=n||this.$ArtilleryTrace1;j(n);this.$ArtilleryTrace6.push({segment:m.getID(),trace:n});return this;};l.prototype.setID=function(m){"use strict";j(!this.$ArtilleryTrace1);this.$ArtilleryTrace1=m;return this;};l.prototype.getID=function(){"use strict";return this.$ArtilleryTrace1;};l.prototype.addProperty=function(m,n){"use strict";this.$ArtilleryTrace2[m]=n;};l.prototype.post=function(){"use strict";j(!this.$ArtilleryTrace0);this.$ArtilleryTrace0=true;var m=new i({id:this.$ArtilleryTrace1,properties:this.$ArtilleryTrace2,sequences:this.$ArtilleryTrace3.map(function(n){return n.setPosted().getPostData();}),segments:this.$ArtilleryTrace4.map(function(n){return n.setPosted().getPostData();}),marks:Object.assign({},this.$ArtilleryTrace5),connections:this.$ArtilleryTrace6.slice()});this.emitAndHold('post',m);};l.prototype.isPosted=function(){"use strict";return this.$ArtilleryTrace0;};k(l,{post:true});e.exports=l;},null);
__d("Artillery",["ArtilleryTrace","Banzai","forEachObject","invariant","mixInEventEmitter"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l=false,m=false,n=[],o,p,q;function r(){if(l)return;l=true;h.subscribe(h.SHUTDOWN,function(){s.postAll();});}var s={isEnabled:function(){return m;},createTrace:function(){r();var t=new g();n.push(t);t.addListener('post',s.emitAndHold.bind(s,'posttrace'));return t;},getPageTrace:function(){j(o);if(p)return p;p=s.createTrace().setID(o);i(q,function(t,u,v){p.addProperty(u,t);});return p;},postAll:function(){n.forEach(function(t){return !t.isPosted()&&t.post();});},enable:function(){m=true;},setPageTraceID:function(t){j(!o);o=t;},setPageProperties:function(t){q=t;},getPageProperty:function(t){return q[t];}};k(s,{posttrace:true});e.exports=s;},null);
__d("StrSet",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h){"use strict";this.$StrSet0={};this.$StrSet1=0;if(h)this.addAll(h);}g.prototype.add=function(h){"use strict";if(!this.$StrSet0.hasOwnProperty(h)){this.$StrSet0[h]=true;this.$StrSet1++;}return this;};g.prototype.addAll=function(h){"use strict";h.forEach(this.add,this);return this;};g.prototype.remove=function(h){"use strict";if(this.$StrSet0.hasOwnProperty(h)){delete this.$StrSet0[h];this.$StrSet1--;}return this;};g.prototype.removeAll=function(h){"use strict";h.forEach(this.remove,this);return this;};g.prototype.toArray=function(){"use strict";return Object.keys(this.$StrSet0);};g.prototype.toMap=function(h){"use strict";var i={};Object.keys(this.$StrSet0).forEach(function(j){i[j]=typeof h=='function'?h(j):h||true;});return i;};g.prototype.contains=function(h){"use strict";return this.$StrSet0.hasOwnProperty(h);};g.prototype.count=function(){"use strict";return this.$StrSet1;};g.prototype.clear=function(){"use strict";this.$StrSet0={};this.$StrSet1=0;return this;};g.prototype.clone=function(){"use strict";return new g(this);};g.prototype.forEach=function(h,i){"use strict";Object.keys(this.$StrSet0).forEach(h,i);};g.prototype.map=function(h,i){"use strict";return Object.keys(this.$StrSet0).map(h,i);};g.prototype.some=function(h,i){"use strict";return Object.keys(this.$StrSet0).some(h,i);};g.prototype.every=function(h,i){"use strict";return Object.keys(this.$StrSet0).every(h,i);};g.prototype.filter=function(h,i){"use strict";return new g(Object.keys(this.$StrSet0).filter(h,i));};g.prototype.union=function(h){"use strict";return this.clone().addAll(h);};g.prototype.intersect=function(h){"use strict";return this.filter(function(i){return h.contains(i);});};g.prototype.difference=function(h){"use strict";return h.filter(function(i){return !this.contains(i);}.bind(this));};g.prototype.equals=function(h){"use strict";var i=function(m,n){return m===n?0:m<n?-1:1;},j=this.toArray(),k=h.toArray();if(j.length!==k.length)return false;var l=j.length;j=j.sort(i);k=k.sort(i);while(l--)if(j[l]!==k[l])return false;return true;};e.exports=g;},null);
__d("PlatformBaseVersioning",["PlatformVersions","getObjectValues","StrSet","invariant"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=new i(h(g.versions)),l=location.pathname,m=l.substring(1,l.indexOf('/',1)),n=k.contains(m)?m:g.versions.UNVERSIONED;function o(r,s){if(s==g.versions.UNVERSIONED)return r;j(k.contains(s));if(r.indexOf('/')!==0)r='/'+r;return '/'+s+r;}function p(r){if(k.contains(r.substring(1,r.indexOf('/',1))))return r.substring(r.indexOf('/',1));return r;}var q={addVersionToPath:o,getLatestVersion:function(){return g.LATEST;},versionAwareURI:function(r){return r.setPath(o(r.getPath(),n));},versionAwarePath:function(r){return o(r,n);},getUnversionedPath:p};e.exports=q;},null);
__d("PlatformWidgetEndpoint",["PlatformBaseVersioning"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(m,n){return g.versionAwarePath('/dialog'+'/'+m+(n?'/'+n:''));}function i(m,n){return g.versionAwarePath('/plugins'+'/'+m+(n?'/'+n:''));}function j(m){return (/^\/plugins\//).test(g.getUnversionedPath(m));}function k(m){return (/^\/dialog\//).test(g.getUnversionedPath(m));}var l={dialog:h,plugins:i,isPluginEndpoint:j,isDialogEndpoint:k};e.exports=l;},null);
__d("ArbiterFrame",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={inform:function(h,i,j){var k=parent.frames,l=k.length,m;i.crossFrame=true;for(var n=0;n<l;n++){m=k[n];try{if(!m||m==window)continue;if(m.require){m.require('Arbiter').inform(h,i,j);}else if(m.ServerJSAsyncLoader)m.ServerJSAsyncLoader.wakeUp(h,i,j);}catch(o){}}}};e.exports=g;},null);
__d("Popup",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={open:function(h,i,j){var k=document.body,l='screenX' in window?window.screenX:window.screenLeft,m='screenY' in window?window.screenY:window.screenTop,n='outerWidth' in window?window.outerWidth:k.clientWidth,o='outerHeight' in window?window.outerHeight:k.clientHeight-22,p=Math.floor(l+(n-i)/2),q=Math.floor(m+(o-j)/2.5),r=['width='+i,'height='+j,'left='+p,'top='+q,'scrollbars'];return window.open(h,'_blank',r.join(','));}};e.exports=g;},null);
__d("PopupLink",["DOMEvent","DOMEventListener","Popup"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={listen:function(k,l,m){h.add(k,'click',function(n){new g(n).kill();i.open(k.href,l,m);});}};e.exports=j;},null);
__d("PopupWindow",["DOMDimensions","DOMQuery","Layer","Popup"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k={_opts:{allowShrink:true,strategy:'vector',timeout:100,widthElement:null},init:function(l){Object.assign(k._opts,l);setInterval(k._resizeCheck,k._opts.timeout);},_resizeCheck:function(){var l=g.getViewportDimensions(),m=k._getDocumentSize(),n=i.getTopmostLayer();if(n){var o=n.getRoot().firstChild,p=g.getElementDimensions(o);p.height+=g.measureElementBox(o,'height',true,true,true);p.width+=g.measureElementBox(o,'width',true,true,true);m.height=Math.max(m.height,p.height);m.width=Math.max(m.width,p.width);}var q=m.height-l.height,r=m.width-l.width;if(r<0&&!k._opts.widthElement)r=0;r=r>1?r:0;if(!k._opts.allowShrink&&q<0)q=0;if(q||r)try{window.console&&window.console.firebug;window.resizeBy(r,q);if(r)window.moveBy(r/-2,0);}catch(s){}},_getDocumentSize:function(){var l=g.getDocumentDimensions();if(k._opts.strategy==='offsetHeight')l.height=document.body.offsetHeight;if(k._opts.widthElement){var m=h.scry(document.body,k._opts.widthElement)[0];if(m)l.width=g.getElementDimensions(m).width;}var n=a.Dialog;if(n&&n.max_bottom&&n.max_bottom>l.height)l.height=n.max_bottom;return l;},open:function(l,m,n){return j.open(l,n,m);}};e.exports=k;},null);
__d("Queue",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={};function h(i){"use strict";this._opts=Object.assign({interval:0,processor:null},i);this._queue=[];this._stopped=true;}h.prototype._dispatch=function(i){"use strict";if(this._stopped||this._queue.length===0)return;if(!this._opts.processor){this._stopped=true;throw new Error('No processor available');}if(this._opts.interval){this._opts.processor.call(this,this._queue.shift());this._timeout=setTimeout(this._dispatch.bind(this),this._opts.interval);}else while(this._queue.length)this._opts.processor.call(this,this._queue.shift());};h.prototype.enqueue=function(i){"use strict";if(this._opts.processor&&!this._stopped){this._opts.processor.call(this,i);}else this._queue.push(i);return this;};h.prototype.start=function(i){"use strict";if(i)this._opts.processor=i;this._stopped=false;this._dispatch();return this;};h.prototype.isStarted=function(){"use strict";return !this._stopped;};h.prototype.dispatch=function(){"use strict";this._dispatch(true);};h.prototype.stop=function(i){"use strict";this._stopped=true;if(i)clearTimeout(this._timeout);return this;};h.prototype.merge=function(i,j){"use strict";this._queue[j?'unshift':'push'].apply(this._queue,i._queue);i._queue=[];this._dispatch();return this;};h.prototype.getLength=function(){"use strict";return this._queue.length;};h.get=function(i,j){"use strict";var k;if(i in g){k=g[i];}else k=g[i]=new h(j);return k;};h.exists=function(i){"use strict";return i in g;};h.remove=function(i){"use strict";return delete g[i];};e.exports=h;},null);
__d("resolveWindow",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h){var i=window,j=h.split('.');try{for(var l=0;l<j.length;l++){var m=j[l],n=/^frames\[['"]?([a-zA-Z0-9\-_]+)['"]?\]$/.exec(m);if(n){i=i.frames[n[1]];}else if(m==='opener'||m==='parent'||m==='top'){i=i[m];}else return null;}}catch(k){return null;}return i;}e.exports=g;},null);
__d("XD",["Arbiter","DOM","DOMDimensions","Log","PHPQuerySerializer","URI","Queue","isFacebookURI","isInIframe","resolveWindow"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();var q='fb_xdm_frame_'+location.protocol.replace(':',''),r={_callbacks:[],_opts:{autoResize:false,allowShrink:true,channelUrl:null,hideOverflow:false,resizeTimeout:1000,resizeWidth:false,expectResizeAck:false,resizeAckTimeout:6000},_lastResizeAckId:0,_resizeCount:0,_resizeTimestamp:0,_shrinker:null,init:function(t){this._opts=Object.assign({},this._opts,t);if(this._opts.autoResize)this._startResizeMonitor();g.subscribe('Connect.Unsafe.resize.ack',function(u,v){if(!v.id)v.id=this._resizeCount;if(v.id>this._lastResizeAckId)this._lastResizeAckId=v.id;}.bind(this));},getQueue:function(){if(!this._queue)this._queue=new m();return this._queue;},setChannelUrl:function(t){this.getQueue().start(function(u){return this.send(u,t);}.bind(this));},send:function(t,u){u=u||this._opts.channelUrl;if(!u){this.getQueue().enqueue(t);return;}var v={},w=new l(u);Object.assign(v,t,k.deserialize(w.getFragment()));var x=new l(v.origin).getOrigin(),y=p(v.relation.replace(/^parent\./,'')),z=50,aa=function(){var ba=y.frames[q];try{ba.proxyMessage(k.serialize(v),x);}catch(ca){if(--z){setTimeout(aa,100);}else j.warn('No such frame "'+q+'" to proxyMessage to');}};aa();},_computeSize:function(){var t=i.getDocumentDimensions(),u=0;if(this._opts.resizeWidth){var v=document.body;if(v.clientWidth<v.scrollWidth){u=t.width;}else{var w=v.childNodes;for(var x=0;x<w.length;x++){var y=w[x],z=y.offsetLeft+y.offsetWidth;if(z>u)u=z;}}u=Math.max(u,r.forced_min_width);}t.width=u;if(this._opts.allowShrink){if(!this._shrinker)this._shrinker=h.create('div');h.appendContent(document.body,this._shrinker);t.height=Math.max(this._shrinker.offsetTop,0);}return t;},_startResizeMonitor:function(){var t,u=document.documentElement;if(this._opts.hideOverflow){u.style.overflow='hidden';document.body.style.overflow='hidden';}var v=(function(){var w=this._computeSize(),x=Date.now(),y=this._lastResizeAckId<this._resizeCount&&(x-this._resizeTimestamp)>this._opts.resizeAckTimeout;if(!t||(this._opts.expectResizeAck&&y)||(this._opts.allowShrink&&t.width!=w.width)||(!this._opts.allowShrink&&t.width<w.width)||(this._opts.allowShrink&&t.height!=w.height)||(!this._opts.allowShrink&&t.height<w.height)){t=w;this._resizeCount++;this._resizeTimestamp=x;var z={type:'resize',height:w.height,ackData:{id:this._resizeCount}};if(w.width&&w.width!=0)z.width=w.width;try{if(n(new l(document.referrer))&&o()&&window.name&&window.parent.location&&window.parent.location.toString&&n(new l(window.parent.location))){var ba=window.parent.document.getElementsByTagName('iframe');for(var ca=0;ca<ba.length;ca=ca+1)if(ba[ca].name==window.name){if(this._opts.resizeWidth)ba[ca].style.width=z.width+'px';ba[ca].style.height=z.height+'px';}}this.send(z);}catch(aa){this.send(z);}}}).bind(this);v();setInterval(v,this._opts.resizeTimeout);}},s=Object.assign({},r);e.exports.UnverifiedXD=s;e.exports.XD=r;a.UnverifiedXD=s;a.XD=r;},null);
__d("Plugin",["Arbiter","ArbiterFrame"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={CONNECT:'platform/plugins/connect',DISCONNECT:'platform/plugins/disconnect',ERROR:'platform/plugins/error',RELOAD:'platform/plugins/reload',DIALOG:'platform/plugins/dialog',connect:function(j,k){var l={identifier:j,href:j,story_fbid:k};g.inform(i.CONNECT,l);h.inform(i.CONNECT,l);},disconnect:function(j,k){var l={identifier:j,href:j,story_fbid:k};g.inform(i.DISCONNECT,l);h.inform(i.DISCONNECT,l);},error:function(j,k){g.inform(i.ERROR,{action:j,content:k});},reload:function(j){g.inform(i.RELOAD,{reloadUrl:j||''});h.inform(i.RELOAD,{reloadUrl:j||''});},reloadOtherPlugins:function(){h.inform(i.RELOAD,{reloadUrl:''});}};e.exports=i;},null);
__d("PluginMessage",["DOMEventListener"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={listen:function(){g.add(window,'message',function(event){if((/\.facebook\.com$/).test(event.origin)&&/^FB_POPUP:/.test(event.data)){var i=JSON.parse(event.data.substring(9));if('reload' in i&&/^https?:/.test(i.reload))document.location.replace(i.reload);}});}};e.exports=h;},null);
__d("PluginOptin",["DOMEvent","DOMEventListener","PluginMessage","PopupWindow","URI","UserAgent_DEPRECATED","PlatformWidgetEndpoint"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();function n(o,p){Object.assign(this,{return_params:k.getRequestURI().getQueryData(),login_params:{},optin_params:{},plugin:o,api_key:p});this.addReturnParams({ret:'optin'});this.login_params.nux=false;delete this.return_params.hash;}Object.assign(n.prototype,{addReturnParams:function(o){Object.assign(this.return_params,o);return this;},addLoginParams:function(o){Object.assign(this.login_params,o);return this;},addOptinParams:function(o){Object.assign(this.optin_params,o);return this;},start:function(){var o=new k(m.dialog('plugin.optin')).addQueryData(this.optin_params).addQueryData({app_id:this.api_key||127760087237610,secure:k.getRequestURI().isSecure(),social_plugin:this.plugin,return_params:JSON.stringify(this.return_params),login_params:JSON.stringify(this.login_params)});if(l.mobile()){o.setSubdomain('m');}else o.addQueryData({display:'popup'});this.popup=j.open(o.toString(),420,450);i.listen();return this;}});n.starter=function(o,p,q,r){var s=new n(o);s.addReturnParams(p||{});s.addLoginParams(q||{});s.addOptinParams(r||{});return s.start.bind(s);};n.listen=function(o,p,q,r,s){h.add(o,'click',function(t){new g(t).kill();n.starter(p,q,r,s)();});};e.exports=n;},null);
__d("PluginConnectButton",["Arbiter","CSS","DOM","DOMDimensions","DOMEvent","DOMEventListener","Form","PlatformWidgetEndpoint","Plugin","PluginConnectButtonType","PluginOptin","Style","URI","csx","cx","getElementPosition"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){b.__markCompiled&&b.__markCompiled();var w=g.SUBSCRIBE_NEW,x=g.subscribe,y=function(aa,ba){return l.add(aa,'click',ba);};function z(aa){this.config=aa;this.busy=false;var ba=i.find(aa.form,'.pluginConnectButton');this.buttons=ba;this.node_connected=i.find(ba,'.pluginConnectButtonConnected');this.node_disconnected=i.find(ba,'.pluginConnectButtonDisconnected');var ca=function(ea){new k(ea).kill();if(!this.busy){this.submit();this.busy=this.canpersonalize;}}.bind(this);y(this.node_disconnected,ca);if(aa.buttontype===p.BLUE_BASE){y(i.find(ba,'.pluginButtonX button'),ca);}else if(aa.buttontype===p.WHITE_BASE)y(this.node_connected,ca);y(this.node_connected,function(ea){return g.inform(o.DIALOG,ea);});var da=this.update.bind(this);x(o.CONNECT,da,w);x(o.DISCONNECT,da,w);x(o.ERROR,this.error.bind(this),w);x('Connect.Unsafe.xd/reposition',this.flip.bind(this));if(aa.autosubmit)setTimeout(this.submit.bind(this),0);}Object.assign(z.prototype,{update:function(aa,event){this.busy=false;var ba=this.config;if(event.identifier!==ba.identifier)return;var ca=aa===o.CONNECT?true:false,da=n.plugins(ba.plugin);da+='/'+(!ca?"connect":"disconnect");h[ca?'show':'hide'](this.node_connected);h[ca?'hide':'show'](this.node_disconnected);try{if(document.activeElement.nodeName.toLowerCase()==='button'){var fa=ca?this.node_connected:this.node_disconnected,ga=i.find(fa,'button');ga.disabled=false;ga.focus();}}catch(ea){}ba.connected=ca;ba.form.setAttribute('action',da);ba.form.setAttribute('ajaxify',da);},error:function(event,aa){this.busy=false;if(aa.action in {connect:1,disconnect:1}){i.setContent(this.buttons,aa.content);var ba=i.scry(this.buttons,'.confirmButton');if(ba.length===1)ba[0].focus();}},submit:function(){if(!this.config.canpersonalize)return this.login();m.bootstrap(this.config.form);this.fireStateToggle();},fireStateToggle:function(){var aa=this.config;if(aa.connected){o.disconnect(aa.identifier);}else o.connect(aa.identifier);},login:function(){var aa=this.config.plugin;new q(aa,s.getRequestURI().getQueryData().api_key).addReturnParams({act:'connect'}).addLoginParams({social_plugin_action:this.config.pluginaction}).start();},flip:function(aa,ba){var ca=i.scry(document.body,"._4xn8");if(ca.length===0){return;}else ca=ca[0];var da=i.scry(this.config.form,'.pluginConnectButtonConnected .pluginButtonIcon'),ea=r.get(da[0],'display')!=='none'?da[0]:da[1],fa=i.find(document.body,'.pluginConnectButtonLayoutRoot'),ga;if(ba.type==='reposition'){h.addClass(fa,"_1f8a");r.set(fa,'padding-left',450-fa.offsetWidth+'px');h.removeClass(fa,"_1f8b");ga=v(ea).x+j.getElementDimensions(ea).width/2-6;}else{h.addClass(fa,"_1f8b");r.set(fa,'padding-left','0px');h.removeClass(fa,"_1f8a");ga=6;}r.set(ca,'left',ga+'px');}});e.exports=z;},null);
__d("UnverifiedXD",["XD"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g=b('XD').UnverifiedXD;e.exports=g;},null);
__d("PluginResize",["Locale","Log","UnverifiedXD","getOffsetParent","getStyleProperty"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(p){p=p||document.body;var q=0,r=j(p);if(g.isRTL()&&r){q=r.offsetWidth-p.offsetLeft-p.offsetWidth;}else if(!g.isRTL())q=p.offsetLeft;return m(p)+q;}function m(p){return Math.ceil(parseFloat(k(p,'width')))||p.offsetWidth;}function n(p){p=p||document.body;return p.offsetHeight+p.offsetTop;}function o(p,q,event,r){this.calcWidth=p||l;this.calcHeight=q||n;this.width=(void 0);this.height=(void 0);this.reposition=!!r;this.event=event||'resize';}Object.assign(o.prototype,{resize:function(){var p=this.calcWidth(),q=this.calcHeight();if(p!==this.width||q!==this.height){h.debug('Resizing Plugin: (%s, %s, %s, %s)',p,q,this.event,this.reposition);this.width=p;this.height=q;i.send({type:this.event,width:p,height:q,reposition:this.reposition});}return this;},auto:function(p){setInterval(this.resize.bind(this),p||250);return this;}});o.auto=function(p,event,q){return new o(l.bind(null,p),n.bind(null,p),event).resize().auto(q);};o.autoHeight=function(p,q,event,r){return new o(function(){return p;},n.bind(null,q),event).resize().auto(r);};o.getElementWidth=m;e.exports=o;},null);
__d("PluginConnectButtonResize",["DOMDimensions","DOMQuery","PluginResize","Style","getElementPosition"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(m,n,o){if(o)j.set(m,'width',o+'px');i.auto(m,'resize.flow');function p(){var q=h.scry(document.body,'.uiTypeaheadView')[0];if(!q)return {x:0,y:0};var r=k(q),s=g.getElementDimensions(q);return {x:r.x+s.width,y:r.y+s.height};}new i(function(){return Math.max(i.getElementWidth(m),n&&n.offsetWidth,p().x);},function(){return Math.max(m.offsetHeight,n?n.offsetHeight+n.offsetTop:0,p().y);},'resize.iframe',true).resize().auto();}e.exports=l;},null);
__d("PluginConnection",["Arbiter","CSS","Plugin"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=function(){};Object.assign(j.prototype,{init:function(k,l,m,event){event=event||i.CONNECT;this.identifier=k;this.element=l;this.css=m;g.subscribe([i.CONNECT,i.DISCONNECT],function(n,o){if(k===o.href)h[n===event?'addClass':'removeClass'](l,m);return true;});return this;},connected:function(){return h.hasClass(this.element,this.css);},connect:function(){return g.inform(i.CONNECT,{href:this.identifier},g.BEHAVIOR_STATE);},disconnect:function(){return g.inform(i.DISCONNECT,{href:this.identifier},g.BEHAVIOR_STATE);},toggle:function(){return this.connected()?this.disconnect():this.connect();}});j.init=function(k){for(var l,m=0;m<k.length;m++){l=new j();l.init.apply(l,k[m]);}};e.exports=j;},null);
__d("PluginReturn",["Arbiter","Log","PlatformDialog","Plugin","URI","invariant","PlatformWidgetEndpoint"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();g.subscribe(i.RESPONSE,function(event,o){if(o.error_code){h.debug('Plugin Return Error (%s): %s',o.error_code,o.error_message||o.error_description);return;}j.reload(o.plugin_reload);});var n={auto:function(){g.subscribe(j.RELOAD,function(event,o){var p=typeof o=='object'?o.reloadUrl:o;n.reload(p);});},syncPlugins:function(){g.subscribe(j.RELOAD,function(event,o){if(o.crossFrame)n.reload(o.reloadUrl);});},reload:function(o){var p=k.getRequestURI().removeQueryData('ret').removeQueryData('act').removeQueryData('hash');if(o){var q=new k(o);l(m.isPluginEndpoint(q.getPath()));p.setPath(q.getPath()).addQueryData(q.getQueryData());}window.location.replace(p.toString());}};e.exports=n;},null);
__d("PluginXDReady",["Arbiter","UnverifiedXD"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={handleMessage:function(j){if(!j.method)return;try{g.inform('Connect.Unsafe.'+j.method,JSON.parse(j.params),g.BEHAVIOR_PERSISTENT);}catch(k){}}};a.XdArbiter=i;h.send({xd_action:'plugin_ready',name:window.name});e.exports=null;},null);