(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(l,n,t){l.exports=t("zUnb")},ZXpM:function(l,n,t){"use strict";t.d(n,"a",function(){return h}),t.d(n,"b",function(){return v}),t.d(n,"c",function(){return y}),t.d(n,"d",function(){return R});var e=t("2dXW"),o=t("qSxk"),u=t("ICP0"),i=t("hKnq"),c=t("Ix1k"),a=t("dpyN"),s=t("vXEI"),r=t("CcnG"),f=t("Ip0R"),b=t("j+Jx"),p=t("iXzu"),h=new r.n("PERFECT_SCROLLBAR_CONFIG"),g=function(){return function(l,n,t,e){this.x=l,this.y=n,this.w=t,this.h=e}}(),d=function(){return function(l,n){this.x=l,this.y=n}}(),m=["psScrollY","psScrollX","psScrollUp","psScrollDown","psScrollLeft","psScrollRight","psYReachEnd","psYReachStart","psXReachEnd","psXReachStart"],x=function(){function l(l){void 0===l&&(l={}),this.assign(l)}return l.prototype.assign=function(l){for(var n in void 0===l&&(l={}),l)this[n]=l[n]},l}(),y=function(){function l(l,n,t,o,u){this.zone=l,this.differs=n,this.elementRef=t,this.platformId=o,this.defaults=u,this.instance=null,this.ro=null,this.timeout=null,this.animation=null,this.configDiff=null,this.ngDestroy=new e.a,this.disabled=!1,this.psScrollY=new r.l,this.psScrollX=new r.l,this.psScrollUp=new r.l,this.psScrollDown=new r.l,this.psScrollLeft=new r.l,this.psScrollRight=new r.l,this.psYReachEnd=new r.l,this.psYReachStart=new r.l,this.psXReachEnd=new r.l,this.psXReachStart=new r.l}return l.prototype.ngOnInit=function(){var l=this;if(!this.disabled&&Object(f.i)(this.platformId)){var n=new x(this.defaults);n.assign(this.config),this.zone.runOutsideAngular(function(){l.instance=new b.a(l.elementRef.nativeElement,n)}),this.configDiff||(this.configDiff=this.differs.find(this.config||{}).create(),this.configDiff.diff(this.config||{})),this.zone.runOutsideAngular(function(){l.ro=new p.a(function(){l.update()}),l.elementRef.nativeElement.children[0]&&l.ro.observe(l.elementRef.nativeElement.children[0]),l.ro.observe(l.elementRef.nativeElement)}),this.zone.runOutsideAngular(function(){m.forEach(function(n){var t=n.replace(/([A-Z])/g,function(l){return"-"+l.toLowerCase()});Object(o.a)(l.elementRef.nativeElement,t).pipe(Object(i.a)(20),Object(c.a)(l.ngDestroy)).subscribe(function(t){l[n].emit(t)})})})}},l.prototype.ngOnDestroy=function(){var l=this;Object(f.i)(this.platformId)&&(this.ngDestroy.next(),this.ngDestroy.complete(),this.ro&&this.ro.disconnect(),this.timeout&&"undefined"!=typeof window&&window.clearTimeout(this.timeout),this.zone.runOutsideAngular(function(){l.instance&&l.instance.destroy()}),this.instance=null)},l.prototype.ngDoCheck=function(){!this.disabled&&this.configDiff&&Object(f.i)(this.platformId)&&this.configDiff.diff(this.config||{})&&(this.ngOnDestroy(),this.ngOnInit())},l.prototype.ngOnChanges=function(l){l.disabled&&!l.disabled.isFirstChange()&&Object(f.i)(this.platformId)&&l.disabled.currentValue!==l.disabled.previousValue&&(!0===l.disabled.currentValue?this.ngOnDestroy():!1===l.disabled.currentValue&&this.ngOnInit())},l.prototype.ps=function(){return this.instance},l.prototype.update=function(){var l=this;"undefined"!=typeof window&&(this.timeout&&window.clearTimeout(this.timeout),this.timeout=window.setTimeout(function(){if(!l.disabled&&l.configDiff)try{l.zone.runOutsideAngular(function(){l.instance&&l.instance.update()})}catch(n){}},0))},l.prototype.geometry=function(l){return void 0===l&&(l="scroll"),new g(this.elementRef.nativeElement[l+"Left"],this.elementRef.nativeElement[l+"Top"],this.elementRef.nativeElement[l+"Width"],this.elementRef.nativeElement[l+"Height"])},l.prototype.position=function(l){return void 0===l&&(l=!1),!l&&this.instance?new d(this.instance.reach.x||0,this.instance.reach.y||0):new d(this.elementRef.nativeElement.scrollLeft,this.elementRef.nativeElement.scrollTop)},l.prototype.scrollable=function(l){void 0===l&&(l="any");var n=this.elementRef.nativeElement;return"any"===l?n.classList.contains("ps--active-x")||n.classList.contains("ps--active-y"):"both"===l?n.classList.contains("ps--active-x")&&n.classList.contains("ps--active-y"):n.classList.contains("ps--active-"+l)},l.prototype.scrollTo=function(l,n,t){this.disabled||(null==n&&null==t?this.animateScrolling("scrollTop",l,t):(null!=l&&this.animateScrolling("scrollLeft",l,t),null!=n&&this.animateScrolling("scrollTop",n,t)))},l.prototype.scrollToX=function(l,n){this.animateScrolling("scrollLeft",l,n)},l.prototype.scrollToY=function(l,n){this.animateScrolling("scrollTop",l,n)},l.prototype.scrollToTop=function(l,n){this.animateScrolling("scrollTop",l||0,n)},l.prototype.scrollToLeft=function(l,n){this.animateScrolling("scrollLeft",l||0,n)},l.prototype.scrollToRight=function(l,n){this.animateScrolling("scrollLeft",this.elementRef.nativeElement.scrollWidth-this.elementRef.nativeElement.clientWidth-(l||0),n)},l.prototype.scrollToBottom=function(l,n){this.animateScrolling("scrollTop",this.elementRef.nativeElement.scrollHeight-this.elementRef.nativeElement.clientHeight-(l||0),n)},l.prototype.scrollToElement=function(l,n,t){var e=this.elementRef.nativeElement.querySelector(l);if(e){var o=e.getBoundingClientRect(),u=this.elementRef.nativeElement.getBoundingClientRect();this.elementRef.nativeElement.classList.contains("ps--active-x")&&this.animateScrolling("scrollLeft",o.left-u.left+this.elementRef.nativeElement.scrollLeft+(n||0),t),this.elementRef.nativeElement.classList.contains("ps--active-y")&&this.animateScrolling("scrollTop",o.top-u.top+this.elementRef.nativeElement.scrollTop+(n||0),t)}},l.prototype.animateScrolling=function(l,n,t){var e=this;if(this.animation&&(window.cancelAnimationFrame(this.animation),this.animation=null),t&&"undefined"!=typeof window){if(n!==this.elementRef.nativeElement[l]){var o=0,u=0,i=performance.now(),c=this.elementRef.nativeElement[l],a=(c-n)/2,s=function(r){u+=Math.PI/(t/(r-i)),o=Math.round(n+a+a*Math.cos(u)),e.elementRef.nativeElement[l]===c&&(u>=Math.PI?e.animateScrolling(l,n,0):(e.elementRef.nativeElement[l]=o,c=e.elementRef.nativeElement[l],i=r,e.animation=window.requestAnimationFrame(s)))};window.requestAnimationFrame(s)}}else this.elementRef.nativeElement[l]=n},l}(),v=function(){function l(l,n,t){this.zone=l,this.cdRef=n,this.platformId=t,this.states={},this.indicatorX=!1,this.indicatorY=!1,this.interaction=!1,this.scrollPositionX=0,this.scrollPositionY=0,this.scrollDirectionX=0,this.scrollDirectionY=0,this.usePropagationX=!1,this.usePropagationY=!1,this.allowPropagationX=!1,this.allowPropagationY=!1,this.stateTimeout=null,this.ngDestroy=new e.a,this.stateUpdate=new e.a,this.disabled=!1,this.usePSClass=!0,this.autoPropagation=!1,this.scrollIndicators=!1,this.psScrollY=new r.l,this.psScrollX=new r.l,this.psScrollUp=new r.l,this.psScrollDown=new r.l,this.psScrollLeft=new r.l,this.psScrollRight=new r.l,this.psYReachEnd=new r.l,this.psYReachStart=new r.l,this.psXReachEnd=new r.l,this.psXReachStart=new r.l}return l.prototype.ngOnInit=function(){var l=this;Object(f.i)(this.platformId)&&(this.stateUpdate.pipe(Object(c.a)(this.ngDestroy),Object(a.a)(function(n,t){return n===t&&!l.stateTimeout})).subscribe(function(n){l.stateTimeout&&"undefined"!=typeof window&&(window.clearTimeout(l.stateTimeout),l.stateTimeout=null),"x"===n||"y"===n?(l.interaction=!1,"x"===n?(l.indicatorX=!1,l.states.left=!1,l.states.right=!1,l.autoPropagation&&l.usePropagationX&&(l.allowPropagationX=!1)):"y"===n&&(l.indicatorY=!1,l.states.top=!1,l.states.bottom=!1,l.autoPropagation&&l.usePropagationY&&(l.allowPropagationY=!1))):("left"===n||"right"===n?(l.states.left=!1,l.states.right=!1,l.states[n]=!0,l.autoPropagation&&l.usePropagationX&&(l.indicatorX=!0)):"top"!==n&&"bottom"!==n||(l.states.top=!1,l.states.bottom=!1,l.states[n]=!0,l.autoPropagation&&l.usePropagationY&&(l.indicatorY=!0)),l.autoPropagation&&"undefined"!=typeof window&&(l.stateTimeout=window.setTimeout(function(){l.indicatorX=!1,l.indicatorY=!1,l.stateTimeout=null,l.interaction&&(l.states.left||l.states.right)&&(l.allowPropagationX=!0),l.interaction&&(l.states.top||l.states.bottom)&&(l.allowPropagationY=!0),l.cdRef.markForCheck()},500))),l.cdRef.markForCheck(),l.cdRef.detectChanges()}),this.zone.runOutsideAngular(function(){if(l.directiveRef){var n=l.directiveRef.elementRef.nativeElement;Object(o.a)(n,"wheel").pipe(Object(c.a)(l.ngDestroy)).subscribe(function(n){!l.disabled&&l.autoPropagation&&l.checkPropagation(n,n.deltaX,n.deltaY)}),Object(o.a)(n,"touchmove").pipe(Object(c.a)(l.ngDestroy)).subscribe(function(n){if(!l.disabled&&l.autoPropagation){var t=n.touches[0].clientX,e=n.touches[0].clientY;l.checkPropagation(n,t-l.scrollPositionX,e-l.scrollPositionY),l.scrollPositionX=t,l.scrollPositionY=e}}),Object(u.a)(Object(o.a)(n,"ps-scroll-x").pipe(Object(s.a)("x")),Object(o.a)(n,"ps-scroll-y").pipe(Object(s.a)("y")),Object(o.a)(n,"ps-x-reach-end").pipe(Object(s.a)("right")),Object(o.a)(n,"ps-y-reach-end").pipe(Object(s.a)("bottom")),Object(o.a)(n,"ps-x-reach-start").pipe(Object(s.a)("left")),Object(o.a)(n,"ps-y-reach-start").pipe(Object(s.a)("top"))).pipe(Object(c.a)(l.ngDestroy)).subscribe(function(n){l.disabled||!l.autoPropagation&&!l.scrollIndicators||l.stateUpdate.next(n)})}}),window.setTimeout(function(){m.forEach(function(n){l.directiveRef&&(l.directiveRef[n]=l[n])})},0))},l.prototype.ngOnDestroy=function(){Object(f.i)(this.platformId)&&(this.ngDestroy.next(),this.ngDestroy.unsubscribe(),this.stateTimeout&&"undefined"!=typeof window&&window.clearTimeout(this.stateTimeout))},l.prototype.ngDoCheck=function(){if(Object(f.i)(this.platformId)&&!this.disabled&&this.autoPropagation&&this.directiveRef){var l=this.directiveRef.elementRef.nativeElement;this.usePropagationX=l.classList.contains("ps--active-x"),this.usePropagationY=l.classList.contains("ps--active-y")}},l.prototype.checkPropagation=function(l,n,t){this.interaction=!0;var e=n<0?-1:1,o=t<0?-1:1;(this.usePropagationX&&this.usePropagationY||this.usePropagationX&&(!this.allowPropagationX||this.scrollDirectionX!==e)||this.usePropagationY&&(!this.allowPropagationY||this.scrollDirectionY!==o))&&(l.preventDefault(),l.stopPropagation()),n&&(this.scrollDirectionX=e),t&&(this.scrollDirectionY=o),this.stateUpdate.next("interaction"),this.cdRef.detectChanges()},l}(),R=function(){return function(){}}()},crnd:function(l,n){function t(l){return Promise.resolve().then(function(){var n=new Error("Cannot find module '"+l+"'");throw n.code="MODULE_NOT_FOUND",n})}t.keys=function(){return[]},t.resolve=t,l.exports=t,t.id="crnd"},zUnb:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),o={wheelPropagation:!0},u=function(){return function(){}}(),i=function(){function l(){this.type="component",this.disabled=!1,this.config={}}return l.prototype.toggleType=function(){this.type="component"===this.type?"directive":"component"},l.prototype.toggleDisabled=function(){this.disabled=!this.disabled},l.prototype.scrollToXY=function(l,n){"directive"===this.type&&this.directiveRef?this.directiveRef.scrollTo(l,n,500):"component"===this.type&&this.componentRef&&this.componentRef.directiveRef&&this.componentRef.directiveRef.scrollTo(l,n,500)},l.prototype.scrollToTop=function(){"directive"===this.type&&this.directiveRef?this.directiveRef.scrollToTop():"component"===this.type&&this.componentRef&&this.componentRef.directiveRef&&this.componentRef.directiveRef.scrollToTop()},l.prototype.scrollToLeft=function(){"directive"===this.type&&this.directiveRef?this.directiveRef.scrollToLeft():"component"===this.type&&this.componentRef&&this.componentRef.directiveRef&&this.componentRef.directiveRef.scrollToLeft()},l.prototype.scrollToRight=function(){"directive"===this.type&&this.directiveRef?this.directiveRef.scrollToRight():"component"===this.type&&this.componentRef&&this.componentRef.directiveRef&&this.componentRef.directiveRef.scrollToRight()},l.prototype.scrollToBottom=function(){"directive"===this.type&&this.directiveRef?this.directiveRef.scrollToBottom():"component"===this.type&&this.componentRef&&this.componentRef.directiveRef&&this.componentRef.directiveRef.scrollToBottom()},l.prototype.onScrollEvent=function(l){console.log(l)},l}(),c=t("iXb4"),a=t("21Lb"),s=t("OzfB"),r=t("ZXpM"),f=t("Ip0R"),b=t("hUWP"),p=t("ZYjt"),h=e.eb({encapsulation:0,styles:[[".app-title[_ngcontent-%COMP%]{font-size:24px}.box-title[_ngcontent-%COMP%]{font-size:20px}.box-container[_ngcontent-%COMP%]{box-sizing:border-box;width:800px;height:500px;max-width:90%;max-height:90%;padding:24px;margin:24px auto;border-radius:4px;color:#555;background-color:#eee;box-shadow:0 6px 20px rgba(0,0,0,.18),0 6px 6px rgba(0,0,0,.25)}.info-container[_ngcontent-%COMP%]{padding:12px 16px;line-height:24px}.action-container[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]{position:relative;overflow:auto;height:300px;min-height:0;margin:8px 16px;border-radius:4px;background-color:#fff}.action-container[_ngcontent-%COMP%]{padding:16px}.content-container[_ngcontent-%COMP%]{position:relative;min-height:0;padding:8px;margin:12px 16px;border:1px solid #ccc}.horizontal-container[_ngcontent-%COMP%], .vertical-container[_ngcontent-%COMP%]{min-height:0!important}.action-button[_ngcontent-%COMP%]{box-sizing:border-box;width:calc(100% - 16px);min-height:35px;padding:4px 16px;margin:8px;border:1px solid #555;border-radius:4px;cursor:pointer;font-size:14px;font-weight:700;line-height:14px;text-align:center}.action-button[_ngcontent-%COMP%]:hover{color:#fff;background-color:#555}.scroll-container[_ngcontent-%COMP%]{position:relative}.scrollable-content[_ngcontent-%COMP%]{padding:16px;margin:0}\n/*# sourceMappingURL=app.component.css.map*/"]],data:{}});function g(l){return e.ub(0,[(l()(),e.gb(0,0,null,null,56,"perfect-scrollbar",[["class","scroll-container"],["fxFlex","auto"]],[[2,"ps-show-limits",null],[2,"ps-show-active",null]],[[null,"psXReachEnd"],[null,"psYReachEnd"],[null,"psXReachStart"],[null,"psYReachStart"]],function(l,n,t){var e=!0,o=l.component;return"psXReachEnd"===n&&(e=!1!==o.onScrollEvent(t)&&e),"psYReachEnd"===n&&(e=!1!==o.onScrollEvent(t)&&e),"psXReachStart"===n&&(e=!1!==o.onScrollEvent(t)&&e),"psYReachStart"===n&&(e=!1!==o.onScrollEvent(t)&&e),e},c.b,c.a)),e.fb(1,671744,null,0,a.a,[e.j,s.i,s.e,a.e,s.f],{fxFlex:[0,"fxFlex"]},null),e.fb(2,507904,[[1,4]],0,r.b,[e.u,e.g,e.w],{scrollIndicators:[0,"scrollIndicators"],config:[1,"config"]},{psYReachEnd:"psYReachEnd",psYReachStart:"psYReachStart",psXReachEnd:"psXReachEnd",psXReachStart:"psXReachStart"}),(l()(),e.gb(3,0,null,0,53,"div",[["class","scrollable-content"]],null,null,null,null,null)),(l()(),e.tb(-1,null,[" Scroll"])),(l()(),e.gb(5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" me!"])),(l()(),e.gb(7,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.gb(8,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" I"])),(l()(),e.gb(10,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" am"])),(l()(),e.gb(12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" an"])),(l()(),e.gb(14,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" example"])),(l()(),e.gb(16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" content"])),(l()(),e.gb(18,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" text"])),(l()(),e.gb(20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" for"])),(l()(),e.gb(22,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" this"])),(l()(),e.gb(24,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" really"])),(l()(),e.gb(26,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" cooooooooooooooooooooooooooooooooooooooooooooooooool"])),(l()(),e.gb(28,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" scrollable"])),(l()(),e.gb(30,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" area"])),(l()(),e.gb(32,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" in"])),(l()(),e.gb(34,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" this"])),(l()(),e.gb(36,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" example"])),(l()(),e.gb(38,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" app"])),(l()(),e.gb(40,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" which"])),(l()(),e.gb(42,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" is"])),(l()(),e.gb(44,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" using"])),(l()(),e.gb(46,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" the"])),(l()(),e.gb(48,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" angular2"])),(l()(),e.gb(50,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" perfect"])),(l()(),e.gb(52,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" scrollbar"])),(l()(),e.gb(54,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" library"])),(l()(),e.gb(56,0,null,null,0,"br",[],null,null,null,null,null))],function(l,n){var t=n.component;l(n,1,0,"auto"),l(n,2,0,!0,t.config)},function(l,n){l(n,0,0,e.pb(n,2).autoPropagation,e.pb(n,2).scrollIndicators)})}function d(l){return e.ub(0,[(l()(),e.gb(0,0,null,null,56,"div",[["class","scroll-container ps"],["fxFlex","auto"]],null,[[null,"psXReachEnd"],[null,"psYReachEnd"],[null,"psXReachStart"],[null,"psYReachStart"]],function(l,n,t){var e=!0,o=l.component;return"psXReachEnd"===n&&(e=!1!==o.onScrollEvent(t)&&e),"psYReachEnd"===n&&(e=!1!==o.onScrollEvent(t)&&e),"psXReachStart"===n&&(e=!1!==o.onScrollEvent(t)&&e),"psYReachStart"===n&&(e=!1!==o.onScrollEvent(t)&&e),e},null,null)),e.fb(1,671744,null,0,a.a,[e.j,s.i,s.e,a.e,s.f],{fxFlex:[0,"fxFlex"]},null),e.fb(2,999424,[[2,4]],0,r.c,[e.u,e.q,e.j,e.w,[2,r.a]],{config:[0,"config"]},{psYReachEnd:"psYReachEnd",psYReachStart:"psYReachStart",psXReachEnd:"psXReachEnd",psXReachStart:"psXReachStart"}),(l()(),e.gb(3,0,null,null,53,"div",[["class","scrollable-content"]],null,null,null,null,null)),(l()(),e.tb(-1,null,[" Scroll"])),(l()(),e.gb(5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" me!"])),(l()(),e.gb(7,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.gb(8,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" I"])),(l()(),e.gb(10,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" am"])),(l()(),e.gb(12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" an"])),(l()(),e.gb(14,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" example"])),(l()(),e.gb(16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" content"])),(l()(),e.gb(18,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" text"])),(l()(),e.gb(20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" for"])),(l()(),e.gb(22,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" this"])),(l()(),e.gb(24,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" really"])),(l()(),e.gb(26,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" cooooooooooooooooooooooooooooooooooooooooooooooooool"])),(l()(),e.gb(28,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" scrollable"])),(l()(),e.gb(30,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" area"])),(l()(),e.gb(32,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" in"])),(l()(),e.gb(34,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" this"])),(l()(),e.gb(36,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" example"])),(l()(),e.gb(38,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" app"])),(l()(),e.gb(40,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" which"])),(l()(),e.gb(42,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" is"])),(l()(),e.gb(44,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" using"])),(l()(),e.gb(46,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" the"])),(l()(),e.gb(48,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" angular2"])),(l()(),e.gb(50,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" perfect"])),(l()(),e.gb(52,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" scrollbar"])),(l()(),e.gb(54,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(-1,null,[" library"])),(l()(),e.gb(56,0,null,null,0,"br",[],null,null,null,null,null))],function(l,n){var t=n.component;l(n,1,0,"auto"),l(n,2,0,t.config)},null)}function m(l){return e.ub(0,[e.rb(671088640,1,{componentRef:0}),e.rb(671088640,2,{directiveRef:0}),(l()(),e.gb(2,0,null,null,65,"div",[["class","box-container"],["fxLayout","column"]],null,null,null,null,null)),e.fb(3,671744,null,0,a.c,[e.j,s.i,[2,a.g],s.f],{fxLayout:[0,"fxLayout"]},null),e.qb(512,null,f.m,f.n,[e.j,e.q,e.y]),e.fb(5,933888,null,0,b.a,[e.j,s.i,s.f,f.m,p.b,[8,null],[2,s.g],e.w],{"ngStyle.lt-sm":[0,"ngStyle.lt-sm"]},null),(l()(),e.gb(6,0,null,null,1,"div",[["class","app-title"]],null,null,null,null,null)),(l()(),e.tb(-1,null,["Simple example app for the ngx-perfect-scrollbar"])),(l()(),e.gb(8,0,null,null,1,"div",[["class","info-container"]],null,null,null,null,null)),(l()(),e.tb(-1,null,[" You can change the type and control the Perfect Scrollbar element by clicking the buttons on the controls pane. "])),(l()(),e.gb(10,0,null,null,57,"div",[["class","horizontal-container"],["fxFlex","100%"],["fxLayout","row"],["fxLayout.lt-sm","column"],["fxLayoutAlign","stretch"]],null,null,null,null,null)),e.fb(11,671744,null,0,a.c,[e.j,s.i,[2,a.g],s.f],{fxLayout:[0,"fxLayout"],"fxLayout.lt-sm":[1,"fxLayout.lt-sm"]},null),e.fb(12,671744,null,0,a.b,[e.j,s.i,[2,a.f],s.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),e.fb(13,671744,null,0,a.a,[e.j,s.i,s.e,a.e,s.f],{fxFlex:[0,"fxFlex"]},null),(l()(),e.gb(14,0,null,null,39,"div",[["class","vertical-container"],["fxFlex","50%"],["fxLayout","column"],["fxLayoutAlign","stretch"]],null,null,null,null,null)),e.fb(15,671744,null,0,a.c,[e.j,s.i,[2,a.g],s.f],{fxLayout:[0,"fxLayout"]},null),e.fb(16,671744,null,0,a.b,[e.j,s.i,[2,a.f],s.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),e.fb(17,671744,null,0,a.a,[e.j,s.i,s.e,a.e,s.f],{fxFlex:[0,"fxFlex"]},null),(l()(),e.gb(18,0,null,null,1,"div",[["class","box-title"]],null,null,null,null,null)),(l()(),e.tb(-1,null,["Controls"])),(l()(),e.gb(20,0,null,null,33,"div",[["class","action-container"],["fxFlex","auto"],["fxLayout","column"],["fxLayoutAlign","stretch"]],null,null,null,null,null)),e.fb(21,671744,null,0,a.c,[e.j,s.i,[2,a.g],s.f],{fxLayout:[0,"fxLayout"]},null),e.fb(22,671744,null,0,a.b,[e.j,s.i,[2,a.f],s.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),e.fb(23,671744,null,0,a.a,[e.j,s.i,s.e,a.e,s.f],{fxFlex:[0,"fxFlex"]},null),(l()(),e.gb(24,0,null,null,4,"div",[["class","action-button"],["fxFlex","auto"],["fxLayout","column"],["fxLayoutAlign","center"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.toggleType()&&e),e},null,null)),e.fb(25,671744,null,0,a.c,[e.j,s.i,[2,a.g],s.f],{fxLayout:[0,"fxLayout"]},null),e.fb(26,671744,null,0,a.b,[e.j,s.i,[2,a.f],s.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),e.fb(27,671744,null,0,a.a,[e.j,s.i,s.e,a.e,s.f],{fxFlex:[0,"fxFlex"]},null),(l()(),e.tb(28,null,["",""])),(l()(),e.gb(29,0,null,null,4,"div",[["class","action-button"],["fxFlex","auto"],["fxLayout","column"],["fxLayoutAlign","center"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.scrollToTop()&&e),e},null,null)),e.fb(30,671744,null,0,a.c,[e.j,s.i,[2,a.g],s.f],{fxLayout:[0,"fxLayout"]},null),e.fb(31,671744,null,0,a.b,[e.j,s.i,[2,a.f],s.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),e.fb(32,671744,null,0,a.a,[e.j,s.i,s.e,a.e,s.f],{fxFlex:[0,"fxFlex"]},null),(l()(),e.tb(-1,null,["Scroll to top"])),(l()(),e.gb(34,0,null,null,4,"div",[["class","action-button"],["fxFlex","auto"],["fxLayout","column"],["fxLayoutAlign","center"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.scrollToLeft()&&e),e},null,null)),e.fb(35,671744,null,0,a.c,[e.j,s.i,[2,a.g],s.f],{fxLayout:[0,"fxLayout"]},null),e.fb(36,671744,null,0,a.b,[e.j,s.i,[2,a.f],s.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),e.fb(37,671744,null,0,a.a,[e.j,s.i,s.e,a.e,s.f],{fxFlex:[0,"fxFlex"]},null),(l()(),e.tb(-1,null,["Scroll to left"])),(l()(),e.gb(39,0,null,null,4,"div",[["class","action-button"],["fxFlex","auto"],["fxLayout","column"],["fxLayoutAlign","center"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.scrollToRight()&&e),e},null,null)),e.fb(40,671744,null,0,a.c,[e.j,s.i,[2,a.g],s.f],{fxLayout:[0,"fxLayout"]},null),e.fb(41,671744,null,0,a.b,[e.j,s.i,[2,a.f],s.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),e.fb(42,671744,null,0,a.a,[e.j,s.i,s.e,a.e,s.f],{fxFlex:[0,"fxFlex"]},null),(l()(),e.tb(-1,null,["Scroll to right"])),(l()(),e.gb(44,0,null,null,4,"div",[["class","action-button"],["fxFlex","auto"],["fxLayout","column"],["fxLayoutAlign","center"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.scrollToBottom()&&e),e},null,null)),e.fb(45,671744,null,0,a.c,[e.j,s.i,[2,a.g],s.f],{fxLayout:[0,"fxLayout"]},null),e.fb(46,671744,null,0,a.b,[e.j,s.i,[2,a.f],s.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),e.fb(47,671744,null,0,a.a,[e.j,s.i,s.e,a.e,s.f],{fxFlex:[0,"fxFlex"]},null),(l()(),e.tb(-1,null,["Scroll to bottom"])),(l()(),e.gb(49,0,null,null,4,"div",[["class","action-button"],["fxFlex","auto"],["fxLayout","column"],["fxLayoutAlign","center"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.scrollToXY(25,50)&&e),e},null,null)),e.fb(50,671744,null,0,a.c,[e.j,s.i,[2,a.g],s.f],{fxLayout:[0,"fxLayout"]},null),e.fb(51,671744,null,0,a.b,[e.j,s.i,[2,a.f],s.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),e.fb(52,671744,null,0,a.a,[e.j,s.i,s.e,a.e,s.f],{fxFlex:[0,"fxFlex"]},null),(l()(),e.tb(-1,null,["Animate to 25,50"])),(l()(),e.gb(54,0,null,null,13,"div",[["class","vertical-container"],["fxFlex","50%"],["fxLayout","column"],["fxLayoutAlign","stretch"]],null,null,null,null,null)),e.fb(55,671744,null,0,a.c,[e.j,s.i,[2,a.g],s.f],{fxLayout:[0,"fxLayout"]},null),e.fb(56,671744,null,0,a.b,[e.j,s.i,[2,a.f],s.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),e.fb(57,671744,null,0,a.a,[e.j,s.i,s.e,a.e,s.f],{fxFlex:[0,"fxFlex"]},null),(l()(),e.gb(58,0,null,null,1,"div",[["class","box-title"]],null,null,null,null,null)),(l()(),e.tb(-1,null,["Perfect Scrollbar"])),(l()(),e.gb(60,0,null,null,7,"div",[["class","content-container"],["fxFlex","auto"],["fxLayout","column"],["fxLayoutAlign","stretch"]],null,null,null,null,null)),e.fb(61,671744,null,0,a.c,[e.j,s.i,[2,a.g],s.f],{fxLayout:[0,"fxLayout"]},null),e.fb(62,671744,null,0,a.b,[e.j,s.i,[2,a.f],s.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),e.fb(63,671744,null,0,a.a,[e.j,s.i,s.e,a.e,s.f],{fxFlex:[0,"fxFlex"]},null),(l()(),e.V(16777216,null,null,1,null,g)),e.fb(65,16384,null,0,f.d,[e.G,e.D],{ngIf:[0,"ngIf"]},null),(l()(),e.V(16777216,null,null,1,null,d)),e.fb(67,16384,null,0,f.d,[e.G,e.D],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,3,0,"column"),l(n,5,0,"min-height: 800px;"),l(n,11,0,"row","column"),l(n,12,0,"stretch"),l(n,13,0,"100%"),l(n,15,0,"column"),l(n,16,0,"stretch"),l(n,17,0,"50%"),l(n,21,0,"column"),l(n,22,0,"stretch"),l(n,23,0,"auto"),l(n,25,0,"column"),l(n,26,0,"center"),l(n,27,0,"auto"),l(n,30,0,"column"),l(n,31,0,"center"),l(n,32,0,"auto"),l(n,35,0,"column"),l(n,36,0,"center"),l(n,37,0,"auto"),l(n,40,0,"column"),l(n,41,0,"center"),l(n,42,0,"auto"),l(n,45,0,"column"),l(n,46,0,"center"),l(n,47,0,"auto"),l(n,50,0,"column"),l(n,51,0,"center"),l(n,52,0,"auto"),l(n,55,0,"column"),l(n,56,0,"stretch"),l(n,57,0,"50%"),l(n,61,0,"column"),l(n,62,0,"stretch"),l(n,63,0,"auto"),l(n,65,0,"component"===t.type),l(n,67,0,"directive"===t.type)},function(l,n){l(n,28,0,"component"==n.component.type?"Switch to directive":"Switch to component")})}function x(l){return e.ub(0,[(l()(),e.gb(0,0,null,null,1,"my-app",[],null,null,null,m,h)),e.fb(1,49152,null,0,i,[],null,null)],null,null)}var y=e.cb("my-app",i,x,{},{},[]),v=t("Fzqc"),R=t("3pJQ"),w=t("V9q+"),L=e.db(u,[i],function(l){return e.mb([e.nb(512,e.i,e.Q,[[8,[y]],[3,e.i],e.s]),e.nb(5120,e.r,e.ab,[[3,e.r]]),e.nb(4608,f.f,f.e,[e.r,[2,f.p]]),e.nb(5120,e.W,e.bb,[e.u]),e.nb(4608,e.h,e.h,[]),e.nb(5120,e.b,e.X,[]),e.nb(5120,e.p,e.Y,[]),e.nb(5120,e.q,e.Z,[]),e.nb(4608,p.b,p.k,[f.b]),e.nb(6144,e.B,null,[p.b]),e.nb(4608,p.e,p.g,[]),e.nb(5120,p.c,function(l,n,t,e,o,u,i,c){return[new p.i(l,n,t),new p.n(e),new p.m(o,u,i,c)]},[f.b,e.u,e.w,f.b,f.b,p.e,e.R,[2,p.f]]),e.nb(4608,p.d,p.d,[p.c,e.u]),e.nb(135680,p.l,p.l,[f.b]),e.nb(4608,p.j,p.j,[p.d,p.l,e.b]),e.nb(6144,e.z,null,[p.j]),e.nb(6144,p.o,null,[p.l]),e.nb(4608,e.E,e.E,[e.u]),e.nb(5120,e.a,function(l,n){return[s.j(l,n)]},[f.b,e.w]),e.nb(1073742336,f.a,f.a,[]),e.nb(1024,e.k,p.p,[]),e.nb(1024,e.c,function(l){return[p.q(l)]},[[2,e.t]]),e.nb(512,e.d,e.d,[[2,e.c]]),e.nb(131584,e.f,e.f,[e.u,e.R,e.o,e.k,e.i,e.d]),e.nb(1073742336,e.e,e.e,[e.f]),e.nb(1073742336,p.a,p.a,[[3,p.a]]),e.nb(1073742336,s.c,s.c,[]),e.nb(1073742336,v.a,v.a,[]),e.nb(1073742336,a.d,a.d,[]),e.nb(1073742336,b.b,b.b,[]),e.nb(1073742336,R.a,R.a,[]),e.nb(1073742336,w.a,w.a,[[2,s.g],e.w]),e.nb(1073742336,r.d,r.d,[]),e.nb(1073742336,u,u,[]),e.nb(256,e.P,!0,[]),e.nb(256,r.a,o,[])])});p.h().bootstrapModuleFactory(L)}},[[0,0,4]]]);
//# sourceMappingURL=main.js.map