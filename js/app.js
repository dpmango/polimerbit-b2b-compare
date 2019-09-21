"use strict";function normalize(i,t,e,n,o){var a=(i-t)/(e-t)*(o-n)+n;return a>o?o:a<n?n:a}function getWindowWidth(){return window.innerWidth}function triggerBody(){$(window).scroll(),$(window).resize()}function formatNumberWithSpaces(i){return i.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}function hasCrossedBreakpoint(i,t,e){return t>=e&&i<=e||t<=e&&i>=e}function Plurize(i,t,e,n){var o=Math.abs(i);return(o%=100)>=5&&o<=20?n:1==(o%=10)?t:o>=2&&o<=4?e:n}function rgba(i,t){var e=parseInt(i.slice(1,3),16),n=parseInt(i.slice(3,5),16),o=parseInt(i.slice(5,7),16);return t?"rgba("+e+", "+n+", "+o+", "+t+")":"rgb("+e+", "+n+", "+o+")"}function mediaCondition(i){var t,e=i.substring(1),n=i.substring(0,1);return"<"===n?t=getWindowWidth()<e:">"===n&&(t=getWindowWidth()>e),t}!function(i){var t=i(window);i.fn.stick_in_parent=function(e){var n,o,a,s,r,l,d,c,u,h,p,f;for(null==e&&(e={}),f=e.sticky_class,l=e.inner_scrolling,p=e.recalc_every,h=e.parent,u=e.offset_top,c=e.spacer,a=e.bottoming,null==u&&(u=0),null==h&&(h=void 0),null==l&&(l=!0),null==f&&(f="is_stuck"),n=i(document),null==a&&(a=!0),s=function(e,o,s,r,d,g,v,m){var w,b,P,y,C,k,S,_,j,A,T,x;if(!e.data("sticky_kit")){if(e.data("sticky_kit",!0),C=n.height(),S=e.parent(),null!=h&&(S=S.closest(h)),!S.length)throw"failed to find stick parent";if(P=!1,w=!1,(T=null!=c?c&&e.closest(c):i("<div />"))&&T.css("position",e.css("position")),(_=function(){var i,t,a;if(!m)return C=n.height(),i=parseInt(S.css("border-top-width"),10),t=parseInt(S.css("padding-top"),10),o=parseInt(S.css("padding-bottom"),10),s=S.offset().top+i+t,r=S.height(),P&&(P=!1,w=!1,null==c&&(e.insertAfter(T),T.detach()),e.css({position:"",top:"",width:"",bottom:""}).removeClass(f),a=!0),d=e.offset().top-(parseInt(e.css("margin-top"),10)||0)-u,g=e.outerHeight(!0),v=e.css("float"),T&&T.css({width:e.outerWidth(!0),height:g,display:e.css("display"),"vertical-align":e.css("vertical-align"),float:v}),a?x():void 0})(),g!==r)return y=void 0,k=u,A=p,x=function(){var i,h,b,j,x,B;if(!m)return b=!1,null!=A&&(A-=1)<=0&&(A=p,_(),b=!0),b||n.height()===C||(_(),b=!0),j=t.scrollTop(),null!=y&&(h=j-y),y=j,P?(a&&(x=j+g+k>r+s,w&&!x&&(w=!1,e.css({position:"fixed",bottom:"",top:k}).trigger("sticky_kit:unbottom"))),j<d&&(P=!1,k=u,null==c&&("left"!==v&&"right"!==v||e.insertAfter(T),T.detach()),i={position:"",width:"",top:""},e.css(i).removeClass(f).trigger("sticky_kit:unstick")),l&&(B=t.height(),g+u>B&&(w||(k-=h,k=Math.max(B-g,k),k=Math.min(u,k),P&&e.css({top:k+"px"}))))):j>d&&(P=!0,(i={position:"fixed",top:k}).width="border-box"===e.css("box-sizing")?e.outerWidth()+"px":e.width()+"px",e.css(i).addClass(f),null==c&&(e.after(T),"left"!==v&&"right"!==v||T.append(e)),e.trigger("sticky_kit:stick")),P&&a&&(null==x&&(x=j+g+k>r+s),!w&&x)?(w=!0,"static"===S.css("position")&&S.css({position:"relative"}),e.css({position:"absolute",bottom:o,top:"auto"}).trigger("sticky_kit:bottom")):void 0},j=function(){return _(),x()},b=function(){if(m=!0,t.off("touchmove",x),t.off("scroll",x),t.off("resize",j),i(document.body).off("sticky_kit:recalc",j),e.off("sticky_kit:detach",b),e.removeData("sticky_kit"),e.css({position:"",bottom:"",top:"",width:""}),S.position("position",""),P)return null==c&&("left"!==v&&"right"!==v||e.insertAfter(T),T.remove()),e.removeClass(f)},t.on("touchmove",x),t.on("scroll",x),t.on("resize",j),i(document.body).on("sticky_kit:recalc",j),e.on("sticky_kit:detach",b),setTimeout(x,0)}},r=0,d=this.length;r<d;r++)o=this[r],s(i(o));return this}}(jQuery);var APP=window.APP||{};APP.Dev=APP.Dev||{},APP.Browser=APP.Browser||{},APP.Plugins=APP.Plugins||{},APP.Components=APP.Components||{},window.onbeforeunload=function(){window.scrollTo(0,0)};var _window=$(window),_document=$(document),easingSwing=[.02,.01,.47,1];!function(i,t){t.Initilizer=function(){var i={};return i.init=function(){i.initGlobalPlugins(),i.initPlugins(),i.initComponents()},i.onLoadTrigger=function(){t.Plugins.LazyLoadImages.init()},i.refresh=function(){t.Components.Header.closeMobileMenu(!0),t.Plugins.Sharer.refresh(),t.Plugins.Sliders.reinit(),i.initPlugins(!0),i.initComponents(!0)},i.destroy=function(){},i.newPageReady=function(){i.refresh()},i.transitionCompleted=function(){t.Plugins.AOS.refresh(),i.onLoadTrigger()},i.initGlobalPlugins=function(){t.Dev.Credentials.logCredentials(),t.Dev.Breakpoint.listenResize(),t.Browser().methods.setBodyTags(),t.Plugins.LegacySupport.init(),t.Plugins.ScrollBlock.listenScroll(),t.Plugins.Clicks.init(),t.Plugins.AOS.init(),t.Plugins.Barba.init()},i.initPlugins=function(i){t.Plugins.Teleport.init(),i||t.Plugins.Sliders.init(),t.Plugins.Modals.init(),t.Plugins.Masks.init(),t.Plugins.Selectric.init(),t.Plugins.ScrollReveal.init(),t.Plugins.TextareaAutoExpand.init(),t.Plugins.Validations.init(),t.Plugins.Tooltip.init(),t.Plugins.Sticky.init(),t.Plugins.Ymaps.init()},i.initComponents=function(i){t.Components.Header.init(i),t.Components.Brands.init(),t.Components.Nav.init()},i},i(function(){t.Initilizer().init()}),i(window).on("load",function(){i.ready.then(function(){t.Initilizer().onLoadTrigger()})})}(jQuery,window.APP),function(i,t){window.APP.Dev.Breakpoint={setBreakpoint:function(){var t=window.location.host.toLowerCase();if(t.indexOf("localhost")>=0||t.indexOf("surge")>=0){var e="<div class='dev-bp-debug'>"+window.innerWidth+" x "+_window.height()+"</div>";i(".page").append(e),setTimeout(function(){i(".dev-bp-debug").fadeOut()},1e3),setTimeout(function(){i(".dev-bp-debug").remove()},1500)}},listenResize:function(){i(window).on("resize",debounce(this.setBreakpoint,200))}}}(jQuery),jQuery,window.APP.Dev.Credentials={logCredentials:function(){console.log("👨‍💻 MADE WITH LOVE BY <> KHMELEVSKOY & ASSOCIATES </> https://khmelevskoy.co")}},jQuery,window.APP.Plugins.AOS={init:function(){AOS.init({offset:120,delay:0,duration:400,easing:"ease-in",once:!0,mirror:!1,anchorPlacement:"top-bottom"})},refresh:function(){AOS.refreshHard()}},function(i,t){t.Plugins.LazyLoadImages={init:function(){var i=this,e=_document.find("[js-lazy]");if(0===e.length)return t.Plugins.LegacySupport.fixImages(),void AOS.refresh();e.Lazy({threshold:300,enableThrottle:!0,throttle:100,scrollDirection:"vertical",onError:function(i){console.log("error loading "+i.data("src"));try{i.attr("src",i.data("src"))}catch(i){console.log("eroor appending src",i)}},beforeLoad:function(i){},afterLoad:function(t){i.animateLazy(t)},onFinishedAll:function(){t.Plugins.LegacySupport.fixImages(),AOS.refresh()}})},animateLazy:function(t){var e=t.closest(".scaler");e.addClass("is-loaded"),0===e.length&&i(t).addClass("is-loaded"),e.is(".no-bg-onload")&&setTimeout(function(){e.addClass("is-bg-hidden")},250)}}}(jQuery,window.APP),function(i,t){window.APP.Plugins.Modals={init:function(){var t=0;i("[js-popup]").magnificPopup({type:"inline",fixedContentPos:!0,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,mainClass:"popup-buble",callbacks:{beforeOpen:function(){t=_window.scrollTop()},close:function(){_window.scrollTop(t)}}}),i("[js-popup-gallery]").magnificPopup({delegate:"a",type:"image",tLoading:"Загрузка #%curr%...",mainClass:"popup-buble",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}})},destroy:function(){}}}(jQuery),function(i,t){window.APP.Plugins.Sliders={data:{swipers:[],responsiveSwipers:{featuredProducts:{instance:void 0,disableOn:1201}}},init:function(){this.initSwipers(),this.initResponsiveSwipers(),this.listenResize()},reinit:function(){this.initSwipers(),this.initResponsiveSwipers(!0)},listenResize:function(){_window.on("resize",debounce(this.initResponsiveSwipers.bind(this),200))},initSwipers:function(){new Swiper("[js-slider]",{wrapperClass:"swiper-wrapper",slideClass:"swiper-slide",direction:"horizontal",loop:!0,spaceBetween:0,slidesPerView:1,centeredSlides:!0,navigation:{nextEl:".slider-next",prevEl:".slider-prev"},breakpoints:{992:{autoHeight:!0}}})},initResponsiveSwipers:function(t){i("[js-featured-products-swiper]").length>0&&this.initFeaturedProductsSwiper("[js-featured-products-swiper]")},initFeaturedProductsSwiper:function(t){var e=this.data.responsiveSwipers.featuredProducts;i(t).length>0&&(window.innerWidth>=e.disableOn?void 0!==e.instance&&(e.instance.destroy(!0,!0),e.instance=void 0):void 0===e.instance&&(e.instance=new Swiper(t,{slidesPerView:"auto",breakpoints:{992:{spaceBetween:0}}})))},destroy:function(){}}}(jQuery),function(i,t){window.APP.Plugins.Sticky={init:function(){var t=i(".page").last().find("[js-sticky]");0!==t.length&&t.each(function(t,e){var n=i(e),o=n.data("offset-top")?parseInt(n.data("offset-top"),10):0;n.stick_in_parent({offset_top:o})})}}}(jQuery),function(i,t){window.APP.Plugins.Tooltip={init:function(){var t={side:"top"};i(".tooltipstered").tooltipster(t)}}}(jQuery),function(i,t){window.APP.Plugins.Validations={init:function(){this.localize(),this.validateFormsConstructor(),this.validateFormsCustom()},data:{validateErrorPlacement:function(i,t){i.addClass("ui-input__validation"),t.is("select")?i.appendTo(t.closest(".selectric-wrapper")):t.is('input[type="radio"]')||t.is('input[type="checkbox"]')?i.appendTo(t.closest(".ui-group")):i.appendTo(t.parent("div"))},validateHighlight:function(t){var e=i(t);e.is("select")?e.closest(".selectric-wrapper").addClass("has-error"):i(t).addClass("has-error")},validateUnhighlight:function(t){var e=i(t);e.is("select")?e.closest(".selectric-wrapper").removeClass("has-error"):i(t).removeClass("has-error")},validateSubmitHandler:function(t){i(t).addClass("loading"),i.ajax({type:"POST",url:i(t).attr("action"),data:i(t).serialize(),success:function(e){i(t).removeClass("loading");var n=i.parseJSON(e);"success"===n.status||i(t).find("[data-error]").html(n.message).show()}})},masks:{phone:{required:!0,normalizer:function(i){return i&&"+X (XXX) XXX-XXXX"!==i?i.replace(/[^\d]/g,""):i},minlength:11,digits:!0}}},localize:function(){i.extend(i.validator.messages,{required:"Это поле необходимо заполнить.",remote:"Пожалуйста, введите правильное значение.",email:"Пожалуйста, введите корректный адрес электронной почты.",url:"Пожалуйста, введите корректный URL.",date:"Пожалуйста, введите корректную дату.",dateISO:"Пожалуйста, введите корректную дату в формате ISO.",number:"Пожалуйста, введите число.",digits:"Пожалуйста, вводите только цифры.",creditcard:"Пожалуйста, введите правильный номер кредитной карты.",equalTo:"Пожалуйста, введите такое же значение ещё раз.",extension:"Пожалуйста, выберите файл с правильным расширением.",maxlength:i.validator.format("Пожалуйста, введите не больше {0} символов."),minlength:i.validator.format("Пожалуйста, введите не меньше {0} символов."),rangelength:i.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),range:i.validator.format("Пожалуйста, введите число от {0} до {1}."),max:i.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),min:i.validator.format("Пожалуйста, введите число, большее или равное {0}.")})},validateFormsConstructor:function(){var t=this,e=i("[js-validate-form]:not(.is-validation-attached)");0!==e.length&&e.each(function(e,n){var o=i(n),a={errorPlacement:t.data.validateErrorPlacement,highlight:t.data.validateHighlight,unhighlight:t.data.validateUnhighlight,submitHandler:t.data.validateSubmitHandler,rules:{name:{required:!0},email:{required:!0,email:!0},phone:t.data.masks.phone},messages:{name:{required:"Заполните это поле"},email:{required:"Заполните это поле",email:"Формат email неверен"},phone:{required:"Заполните это поле",minlength:"Введите корректный телефон"}}};o.validate(a),o.addClass("is-validation-attached")})},validateFormsCustom:function(){var t=this,e={errorPlacement:t.data.validateErrorPlacement,highlight:t.data.validateHighlight,unhighlight:t.data.validateUnhighlight,submitHandler:t.data.validateSubmitHandler,rules:{phone:t.data.masks.phone},messages:{phone:{required:"Заполните это поле",minlength:"Введите корректный телефон"}}};i("[js-validate-request]").validate(e)}}}(jQuery),function(i,t){window.APP.Plugins.Masks={init:function(){i("[js-dateMask]").mask("99.99.99",{placeholder:"ДД.ММ.ГГ"}),i("input[type='tel']").mask("+7 (000) 000-0000",{placeholder:"+7 (___) ___-____"})}}}(jQuery),function(i,t){window.APP.Plugins.Selectric={init:function(){var t=i("[js-select]");0!==t.length&&t.selectric({maxHeight:300,disableOnMobile:!1,nativeOnMobile:!0,onInit:function(t,e){var n=i(t);n.closest("."+e.classes.wrapper).find(".label").html(n.attr("placeholder"))},onBeforeOpen:function(t,e){var n=i(t),o=n.closest("."+e.classes.wrapper);o.find(".label").data("value",o.find(".label").html()).html(n.attr("placeholder"))},onBeforeClose:function(t,e){var n=i(t).closest("."+e.classes.wrapper);n.find(".label").html(n.find(".label").data("value"))}})}}}(jQuery),jQuery,window.APP.Plugins.TextareaAutoExpand={init:function(){_document.one("focus.autoExpand",".ui-group textarea",function(){var i=this.value;this.value="",this.baseScrollHeight=this.scrollHeight,this.value=i}).on("input.autoExpand",".ui-group textarea",function(){var i,t=0|this.getAttribute("data-min-rows");this.rows=t,i=Math.ceil((this.scrollHeight-this.baseScrollHeight)/17),this.rows=t+i})}},function(i,t){window.APP.Browser=function(){var t={};return t.isRetinaDisplay=function(){if(window.matchMedia){var i=window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");return i&&i.matches||window.devicePixelRatio>1}},t.isMobile=function(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},t.msieversion=function(){return!!(window.navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.match(/Trident.*rv:11\./))},t.setBodyTags=function(){t.msieversion()&&i("body").addClass("is-ie"),t.isMobile()&&i("body").addClass("is-mobile")},{data:{isIe:t.msieversion(),isMobile:t.isMobile(),isRetinaDisplay:t.isRetinaDisplay()},methods:t}}}(jQuery),function(i,t){window.APP.Plugins.Clicks={init:function(){i(document).on("click",'[href="#"]',function(i){i.preventDefault()}).on("click","[js-link]",function(t){var e=i(this).data("href");e&&"#"!==e&&(t.preventDefault(),t.stopPropagation(),Barba.Pjax.goTo(e))}).on("click","a, [js-link]",function(t){var e=i(this).data("href")||i(this).attr("href"),n=window.location.pathname;e===n.slice(1,n.length)&&(t.preventDefault(),t.stopPropagation())}).on("click","[js-materials-btn]",function(t){i(".materials__filter-btn").removeClass("is-active"),i(this).addClass("is-active")}).on("click",'a[href^="#section"]',function(){var t=i(this).attr("href"),e=i(t).offset().top;return TweenLite.to(window,1,{scrollTo:{y:e,autoKill:!1},ease:easingSwing}),!1}).on("change",".ui-checkbox",function(){var t=i(this).find("input[type='radio']").val(),e=i(".contacts__select"),n=i(".contacts__person"),o=i(".contacts__person-unknown");i(".ui-checkbox").find("input[type='radio']:checked").length?(e.removeClass("is-visible"),n.removeClass("is-visible"),o.addClass("is-visible"),i("[data-select='"+t+"']").addClass("is-visible")):e.removeClass("is-visible")}).on("change",".contacts__select select[js-select]",function(){var t=i(this).val(),e=i(".contacts__person-unknown"),n=i(".contacts__person");"val0"!==t?(e.removeClass("is-visible"),n.removeClass("is-visible"),i("[data-person='"+t+"']").addClass("is-visible")):(n.removeClass("is-visible"),e.addClass("is-visible"))}).on("click","[js-pagination]",function(){var t=parseInt(i(".cdp").attr("actpage"),10),e=i(this).attr("href").replace("#!","");"+1"===e?t++:"-1"===e?t--:t=parseInt(e,10),i(".cdp").attr("actpage",t)})},destroy:function(){}}}(jQuery),Number.prototype.pad=function(i){for(var t=String(this);t.length<(i||2);)t="0"+t;return t},function(i,t){t.Plugins.LegacySupport={init:function(){svg4everybody(),t.Browser().data.isIe||window.viewportUnitsBuggyfill.init({force:!1,refreshDebounceWait:150,appendToBody:!0})},fixImages:function(){t.Browser().data.isIe&&(picturefill(),objectFitImages())}}}(jQuery,window.APP),function(i,t){t.Plugins.Barba={getData:function(){return this.data},init:function(){Barba.Pjax.Dom.containerClass="page",this.data=this.data||{},this.data.transitionInitElement="",this.getTransition(),Barba.Prefetch.init(),Barba.Pjax.start(),this.listenEvents()},getTransition:function(){var i=this;Barba.Pjax.getTransition=function(){return i.transitions.FadeTransition}},transitions:{HideShowTransition:Barba.BaseTransition.extend({start:function(){this.newContainerLoading.then(this.finish.bind(this))},finish:function(){document.body.scrollTop=0,this.done()}}),FadeTransition:Barba.BaseTransition.extend({start:function(){Promise.all([this.newContainerLoading,this.fadeOut()]).then(this.fadeIn.bind(this))},fadeOut:function(){var t=i(this.oldContainer),e=(i(this.newContainer),Barba.Utils.deferred());return TweenLite.to(t,.5,{opacity:0,ease:Power1.easeIn,onComplete:function(){e.resolve()}}),e.promise},fadeIn:function(){var t=this,e=(i(this.oldContainer),i(this.newContainer));i(this.oldContainer).hide(),e.css({visibility:"visible",opacity:0}),TweenLite.to(window,.15,{scrollTo:{y:0,autoKill:!1},ease:easingSwing}),TweenLite.to(e,.5,{opacity:1,ease:Power1.easeOut,onComplete:function(){t.done()}})}})},listenEvents:function(){var e=this;Barba.Dispatcher.on("linkClicked",function(t){e.data.transitionInitElement=t instanceof jQuery?t:i(t)}),Barba.Dispatcher.on("newPageReady",function(i,e,n,o){t.Initilizer().newPageReady()}),Barba.Dispatcher.on("transitionCompleted",function(i,e){t.Initilizer().transitionCompleted()})}}}(jQuery,window.APP),function(i,t){window.APP.Plugins.Preloader={loaded:function(){i("#barba-wrapper").addClass("is-preloaded")}}}(jQuery),function(i,t){window.APP.Plugins.ScrollReveal={init:function(t){if(0!==i("[js-reveal]").length){i("[js-reveal]").each(function(e,n){var o=i(n).data("type")||"enterViewport";if("onload"!==o)if("halflyEnterViewport"!==o)scrollMonitor.create(i(n)).enterViewport(throttle(function(){i(n).addClass("is-animated")},100,{leading:!0}));else{var a=throttle(function(){_window.scrollTop()+_window.height()>i(n).offset().top+i(n).height()/2&&(i(n).addClass("is-animated"),window.removeEventListener("scroll",a,!1))},100);window.addEventListener("scroll",a,!1)}else var s=setInterval(function(){t?setTimeout(function(){i(n).addClass("is-animated"),clearInterval(s)},500):(i(n).addClass("is-animated"),clearInterval(s))},100)})}}}}(jQuery),function(i,t){window.APP.Plugins.ScrollBlock={data:{y:_window.scrollTop(),blocked:!1,direction:void 0,lastForScrollDir:0,lastForBodyLock:0},getData:function(){return this.data},disableScroll:function(){this.data.lastForBodyLock=_window.scrollTop(),this.data.blocked=!0,i(".page__content").css({"margin-top":"-"+this.data.lastForBodyLock+"px"}),i("body").addClass("body-lock")},enableScroll:function(t){this.data.blocked=!1,this.data.direction="up",i(".page__content").css({"margin-top":"-0px"}),i("body").removeClass("body-lock"),t||(_window.scrollTop(this.data.lastForBodyLock),this.data.lastForBodyLock=0)},blockScroll:function(t){t?this.enableScroll(t):i("[js-hamburger]").is(".is-active")?this.disableScroll():this.enableScroll()},getWindowScroll:function(){if(!this.data.blocked){var i=_window.scrollTop();this.data.y=i,this.data.direction=i>this.data.lastForScrollDir?"down":"up",this.data.lastForScrollDir=i<=0?0:i}},listenScroll:function(){_window.on("scroll",this.getWindowScroll.bind(this))}}}(jQuery),jQuery,window.APP.Plugins.Sharer={refresh:function(){window.Sharer.init()}},function(i,t){t.Plugins.Teleport={data:{teleports:[]},init:function(){this.getElements(),this.teleport(),this.listenResize()},getElements:function(){var t=this,e=i(".page").last().find("[js-teleport]");t.data.teleports=[],0!==e.length&&e.each(function(e,n){var o=i(n),a=i("[data-teleport-target="+o.data("teleport-to")+"]"),s=o.data("teleport-condition").substring(1),r=o.data("teleport-condition").substring(0,1);t.data.teleports.push({el:o,html:o.html(),target:a,conditionMedia:s,conditionPosition:r})})},listenResize:function(){_window.on("resize",debounce(this.teleport.bind(this),100))},teleport:function(){0!==this.data.teleports.length&&(i.each(this.data.teleports,function(i,t){if(t.target&&t.html&&t.conditionPosition){var e;"<"===t.conditionPosition?e=window.innerWidth<t.conditionMedia:">"===t.conditionPosition&&(e=window.innerWidth>t.conditionMedia),e?(t.target.html(t.html),t.el.html("")):(t.el.html(t.html),t.target.html(""))}}),t.Plugins.Sliders.reinit())}}}(jQuery,window.APP),function(i,t){window.APP.Plugins.Ymaps={data:{scriptsCreated:!1,ymapsLoaded:!1},init:function(){i(".js-ymap").length>0&&(this.data.ymapsLoaded?ymaps.ready(this.initMaps.bind(this)):this.tryLoadScripts())},createScripts:function(){var t=document.createElement("script");t.type="text/javascript",t.src="https://api-maps.yandex.ru/2.1/?apikey=9ba9a278-66f0-47c6-8197-0d404ee0def5&lang=ru_RU",i("head").append(t),this.data.scriptsCreated=!0},tryLoadScripts:function(){var i=this;i.data.scriptsCreated||i.createScripts();var t=setInterval(function(){if(!i.data.ymapsLoaded)try{ymaps.ready()&&(i.data.ymapsLoaded=!0,i.init(),clearInterval(t))}catch(i){}},250)},initMaps:function(){var t=this;i(".js-ymap").each(function(i,e){t.drawMap(e)})},drawMap:function(t){var e=this,n=i(t);if(0!==n.length){var o,a={center:e.geoStringToArr(n.data("center")),zoom:n.data("zoom")||10,placeholder:{geodata:e.geoStringToArr(n.data("placeholder")),caption:n.data("placeholder-caption"),balloon:n.data("placeholder-balloon")}};if(a.center&&((o=new ymaps.Map(t,{center:a.center,zoom:a.zoom})).controls.remove("trafficControl"),o.controls.remove("searchControl"),o.controls.remove("fullscreenControl"),o.controls.remove("rulerControl"),o.controls.remove("geolocationControl"),o.controls.remove("routeEditor"),o.controls.remove("typeSelector"),a.placeholder.geodata)){var s=new ymaps.Placemark(a.placeholder.geodata,{balloonContent:a.placeholder.balloon,iconCaption:a.placeholder.caption},{preset:"islands#redIcon"});o.geoObjects.add(s)}}},geoStringToArr:function(i){var t=i.split(",");return 2===t.length&&[parseFloat(t[0]),parseFloat(t[1])]}}}(jQuery),function(i,t){window.APP.Components.Brands={init:function(){i(document).on("mouseenter","[js-hover-polimer]",function(){i(".brands__bg--polimer").addClass("is-active"),i(".brands").addClass("brands--hover")}),i(document).on("mouseleave","[js-hover-polimer]",function(){i(".brands__bg--polimer").removeClass("is-active"),i(".brands").removeClass("brands--hover")}),i(document).on("mouseenter","[js-hover-forma]",function(){i(".brands__bg--forma").addClass("is-active"),i(".brands").addClass("brands--hover")}),i(document).on("mouseleave","[js-hover-forma]",function(){i(".brands__bg--forma").removeClass("is-active"),i(".brands").removeClass("brands--hover")})}}}(jQuery),function(i,t){t.Components.Header={data:{header:{container:void 0,bottomPoint:void 0}},init:function(i){i||(this.getHeaderParams(),this.hamburgerClickListener(),this.mobileNaviClickListener(),this.listenScroll(),this.listenResize()),this.setMenuClass(),this.controlHeaderClass()},getHeaderParams:function(){var t=i(".header"),e=t.outerHeight()+0;this.data.header={container:t,bottomPoint:e}},closeMobileMenu:function(e){i("[js-hamburger]").removeClass("is-active"),i(".mobile-navi").removeClass("is-active"),i(".header").removeClass("is-active"),t.Plugins.ScrollBlock.blockScroll(e)},hamburgerClickListener:function(){_document.on("click","[js-hamburger]",function(){i(this).toggleClass("is-active"),i(".mobile-navi").toggleClass("is-active"),i(".header").toggleClass("is-active"),t.Plugins.ScrollBlock.blockScroll()})},mobileNaviClickListener:function(){var t=this;_document.on("click touchstart",".mobile-navi",function(e){window.innerWidth<=1024&&i(e.target).is(".mobile-navi.is-active")&&t.closeMobileMenu()})},listenScroll:function(){_window.on("scroll",this.scrollHeader.bind(this))},listenResize:function(){_window.on("resize",debounce(this.getHeaderParams.bind(this),100))},scrollHeader:function(){if(void 0!==this.data.header.container){var i=t.Plugins.ScrollBlock.getData();if(i.blocked)return;i.y>0?this.data.header.container.addClass("is-fixed"):this.data.header.container.removeClass("is-fixed")}},setMenuClass:function(){var t=i(".header__menu li");0!==t.length&&t.each(function(t,e){i(e).find("a").attr("href")===window.location.pathname.split("/").pop()?i(e).addClass("is-active"):i(e).removeClass("is-active")})},controlHeaderClass:function(){this.data.header.container.attr("data-modifier",!1);var t=i(".page").last().find("[js-header-class]");t.length>0&&this.data.header.container.attr("data-modifier",t.data("class"))}}}(jQuery,window.APP),function(i,t){t.Components.Nav={data:{offsetHeight:void 0,paginationAnchors:[],historySections:[]},init:function(){this.getHistorySections(),this.clickListeners(),this.listenScroll()},getHistorySections:function(){var t=i(".page").last();this.data.offsetHeight=i(".header").outerHeight()+i(".history-nav").outerHeight(),this.data.paginationAnchors=t.find(".history-nav__list a"),this.data.historySections=t.find("[data-section]")},clickListeners:function(){var t=this;i(document).on("click",".history-nav__list a",function(){var e=i(this).data("for-section"),n=i('[data-section="'+e+'"]'),o=i(n).offset().top;return TweenLite.to(window,1,{scrollTo:{y:o-t.data.offsetHeight,autoKill:!1},ease:easingSwing}),i(".history-nav__list a").removeClass("is-active"),i(this).addClass("is-active"),!1})},listenScroll:function(){_window.on("scroll",throttle(this.scrollHistoryNav.bind(this),25))},scrollHistoryNav:function(){var e=this,n=t.Plugins.ScrollBlock.getData();if(!n.blocked){if(0===e.data.historySections.length)return e.data.paginationAnchors.removeClass("is-active"),!1;var o=e.data.historySections.map(function(){if(i(this).offset().top<=n.y+e.data.offsetHeight/.99)return this}),a=(o=i(o[o.length-1]))&&o.length?o.data("section"):"0";e.data.paginationAnchors.removeClass("is-active").filter("[data-for-section='"+a+"']").addClass("is-active")}}}}(jQuery,window.APP);