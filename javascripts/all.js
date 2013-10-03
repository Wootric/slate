/*! jQuery UI - v1.10.3 - 2013-09-16
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
function activateLanguage(t){$("#lang-selector a").removeClass("active"),$("#lang-selector a[data-language-name='"+t+"']").addClass("active");for(var e=0;e<languages.length;e++)$(".highlight."+languages[e]).hide();$(".highlight."+t).show()}function setupLanguages(t){languages=t,currentLanguage=languages[0],""!=location.search.substr(1)?activateLanguage(location.search.substr(1)):activateLanguage(languages[0]),$("#lang-selector a").bind("click",function(){return window.location.replace("?"+$(this).data("language-name")+window.location.hash),!1})}!function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,l,c={},h=i.split(".")[0];i=i.split(".")[1],o=h+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[h]=t[h]||{},a=t[h][i],r=t[h][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),l=new s,l.options=t.widget.extend({},l.options),t.each(n,function(i,n){return t.isFunction(n)?(c[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(c[i]=n,e)}),r.prototype=t.widget.extend(l,{widgetEventPrefix:a?l.widgetEventPrefix:i},c,{constructor:r,namespace:h,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,l=a.length;l>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,l=s.call(arguments,1),c=this;return a=!r&&l.length?t.widget.extend.apply(null,[a].concat(l)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,l),s!==n&&s!==e?(c=s&&s.jquery?c.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),c}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),s===e)return o[i]===e?null:o[i];o[i]=s}else{if(s===e)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function l(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(l.guid=r.guid=r.guid||l.guid||t.guid++);var c=n.match(/^(\w+)\s*(.*)$/),h=c[1]+a.eventNamespace,d=c[2];d?o.delegate(d,h,l):s.bind(h,l)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})}(jQuery),/* jquery Tocify - v1.8.0 - 2013-09-16
* http://www.gregfranko.com/jquery.tocify.js/
* Copyright (c) 2013 Greg Franko; Licensed MIT
* Modified lightly by Robert Lord to fix a bug I found,
* and also so it adds ids to headers
* also because I want height caching, since the
* height lookup for h1s and h2s was causing serious
* lag spikes below 30 fps */
function(t){"use strict";t(window.jQuery,window,document)}(function(t,e,i){"use strict";var s="tocify",n="tocify-focus",o="tocify-hover",a="tocify-hide",r="tocify-header",l="."+r,c="tocify-subheader",h="."+c,d="tocify-item",u="."+d,f="tocify-extend-page",p="."+f;t.widget("toc.tocify",{version:"1.8.0",options:{context:"body",ignoreSelector:null,selectors:"h1, h2, h3",showAndHide:!0,showEffect:"slideDown",showEffectSpeed:"medium",hideEffect:"slideUp",hideEffectSpeed:"medium",smoothScroll:!0,smoothScrollSpeed:"medium",scrollTo:0,showAndHideOnScroll:!0,highlightOnScroll:!0,highlightOffset:40,theme:"bootstrap",extendPage:!0,extendPageOffset:100,history:!0,scrollHistory:!1,hashGenerator:"compact",highlightDefault:!0},_create:function(){var i=this;i.extendPageScroll=!0,i.items=[],i._generateToc(),i.cachedHeights=[],i.cachedAnchors=[],i._addCSSClasses(),i.webkit=function(){for(var t in e)if(t&&-1!==t.toLowerCase().indexOf("webkit"))return!0;return!1}(),i._setEventHandlers(),t(e).load(function(){i._setActiveElement(!0),t("html, body").promise().done(function(){setTimeout(function(){i.extendPageScroll=!1},0)})})},_generateToc:function(){var e,i,n=this,o=n.options.ignoreSelector;return e=-1!==this.options.selectors.indexOf(",")?t(this.options.context).find(this.options.selectors.replace(/ /g,"").substr(0,this.options.selectors.indexOf(","))):t(this.options.context).find(this.options.selectors.replace(/ /g,"")),e.length?(n.element.addClass(s),e.each(function(e){t(this).is(o)||(i=t("<ul/>",{id:r+e,"class":r}).append(n._nestElements(t(this),e)),n.element.append(i),t(this).nextUntil(this.nodeName.toLowerCase()).each(function(){0===t(this).find(n.options.selectors).length?t(this).filter(n.options.selectors).each(function(){t(this).is(o)||n._appendSubheaders.call(this,n,i)}):t(this).find(n.options.selectors).each(function(){t(this).is(o)||n._appendSubheaders.call(this,n,i)})}))}),void 0):(n.element.addClass(a),void 0)},_setActiveElement:function(t){var i=this,s=e.location.hash.substring(1),n=i.element.find("li[data-unique='"+s+"']");return s.length?(i.element.find("."+i.focusClass).removeClass(i.focusClass),n.addClass(i.focusClass),i.options.showAndHide&&n.click()):(i.element.find("."+i.focusClass).removeClass(i.focusClass),!s.length&&t&&i.options.highlightDefault&&i.element.find(u).first().addClass(i.focusClass)),i},_nestElements:function(e,i){var s,n,o;return s=t.grep(this.items,function(t){return t===e.text()}),s.length?this.items.push(e.text()+i):this.items.push(e.text()),o=this._generateHashValue(s,e,i),n=t("<li/>",{"class":d,"data-unique":o}).append(t("<a/>",{text:e.text()})),e.before(t("<div/>",{name:o,"data-unique":o})),n},_generateHashValue:function(t,e,i){var s="",n=this.options.hashGenerator;if("pretty"===n){for(s=e.text().toLowerCase().replace(/\s/g,"-"),s=s.replace(/[^\x00-\x7F]/g,"");s.indexOf("--")>-1;)s=s.replace(/--/g,"-");for(;s.indexOf(":-")>-1;)s=s.replace(/:-/g,"-")}else s="function"==typeof n?n(e.text(),e):e.text().replace(/\s/g,"");return t.length&&(s+=""+i),s},_appendSubheaders:function(e,i){var s=t(this).index(e.options.selectors),n=t(e.options.selectors).eq(s-1),o=+t(this).prop("tagName").charAt(1),a=+n.prop("tagName").charAt(1);a>o?e.element.find(h+"[data-tag="+o+"]").last().append(e._nestElements(t(this),s)):o===a?i.find(u).last().after(e._nestElements(t(this),s)):i.find(u).last().after(t("<ul/>",{"class":c,"data-tag":o})).next(h).append(e._nestElements(t(this),s))},_setEventHandlers:function(){var s=this;this.element.on("click.tocify","li",function(){if(s.options.history&&(e.location.hash=t(this).attr("data-unique")),s.element.find("."+s.focusClass).removeClass(s.focusClass),t(this).addClass(s.focusClass),s.options.showAndHide){var i=t('li[data-unique="'+t(this).attr("data-unique")+'"]');s._triggerShow(i)}s._scrollTo(t(this))}),this.element.find("li").on({"mouseenter.tocify":function(){t(this).addClass(s.hoverClass),t(this).css("cursor","pointer")},"mouseleave.tocify":function(){"bootstrap"!==s.options.theme&&t(this).removeClass(s.hoverClass)}}),t(e).on("resize",function(){console.log("resizing"+s.cachedHeights),s.calculateHeights(),console.log("done"+s.cachedHeights)}),t(e).on("scroll.tocify",function(){t("html, body").promise().done(function(){var n,o,a,r,l=t(e).scrollTop(),c=t(e).height(),h=t(i).height(),d=t("body")[0].scrollHeight;if(s.options.extendPage&&(s.webkit&&l>=d-c-s.options.extendPageOffset||!s.webkit&&c+l>h-s.options.extendPageOffset)&&!t(p).length){if(o=t('div[data-unique="'+t(u).last().attr("data-unique")+'"]'),!o.length)return;a=o.offset().top,t(s.options.context).append(t("<div />",{"class":f,height:Math.abs(a-l)+"px","data-unique":f})),s.extendPageScroll&&(r=s.element.find("li.active"),s._scrollTo(t("div[data-unique="+r.attr("data-unique")+"]")))}setTimeout(function(){var o,a=null;0==s.cachedHeights.length&&s.calculateHeights(),s.cachedAnchors.each(function(i){return s.cachedHeights[i]-t(e).scrollTop()<0?(a=i,void 0):!1}),o=t(s.cachedAnchors[a]).attr("data-unique"),n=t('li[data-unique="'+o+'"]'),s.options.highlightOnScroll&&n.length&&(s.element.find("."+s.focusClass).removeClass(s.focusClass),n.addClass(s.focusClass)),s.options.scrollHistory&&e.location.hash!=="#"+o&&(history.replaceState?history.replaceState({},"","#"+o):(scrollV=i.body.scrollTop,scrollH=i.body.scrollLeft,location.hash="#"+o,i.body.scrollTop=scrollV,i.body.scrollLeft=scrollH)),s.options.showAndHideOnScroll&&s.options.showAndHide&&s._triggerShow(n,!0)},0)})})},calculateHeights:function(){var e=this;e.cachedHeights=[],e.cachedAnchors=[];var i=t(e.options.context).find("div[data-unique]");i.each(function(i){var s=(t(this).next().length?t(this).next():t(this)).offset().top-e.options.highlightOffset;e.cachedHeights[i]=s}),e.cachedAnchors=i},show:function(e){var i=this;if(!e.is(":visible"))switch(e.find(h).length||e.parent().is(l)||e.parent().is(":visible")?e.children(h).length||e.parent().is(l)||(e=e.closest(h)):e=e.parents(h).add(e),i.options.showEffect){case"none":e.show();break;case"show":e.show(i.options.showEffectSpeed);break;case"slideDown":e.slideDown(i.options.showEffectSpeed);break;case"fadeIn":e.fadeIn(i.options.showEffectSpeed);break;default:e.show()}return e.parent().is(l)?i.hide(t(h).not(e)):i.hide(t(h).not(e.closest(l).find(h).not(e.siblings()))),i},hide:function(t){var e=this;switch(e.options.hideEffect){case"none":t.hide();break;case"hide":t.hide(e.options.hideEffectSpeed);break;case"slideUp":t.slideUp(e.options.hideEffectSpeed);break;case"fadeOut":t.fadeOut(e.options.hideEffectSpeed);break;default:t.hide()}return e},_triggerShow:function(t,e){var i=this;return t.parent().is(l)||t.next().is(h)?i.show(t.next(h),e):t.parent().is(h)&&i.show(t.parent(),e),i},_addCSSClasses:function(){return"jqueryui"===this.options.theme?(this.focusClass="ui-state-default",this.hoverClass="ui-state-hover",this.element.addClass("ui-widget").find(".toc-title").addClass("ui-widget-header").end().find("li").addClass("ui-widget-content")):"bootstrap"===this.options.theme?(this.element.find(l+","+h).addClass("nav nav-list"),this.focusClass="active"):(this.focusClass=n,this.hoverClass=o),this},setOption:function(){t.Widget.prototype._setOption.apply(this,arguments)},setOptions:function(){t.Widget.prototype._setOptions.apply(this,arguments)},_scrollTo:function(e){var i=this,s=i.options.smoothScroll||0,n=i.options.scrollTo;return t("html, body").promise().done(function(){t("html, body").animate({scrollTop:t('div[data-unique="'+e.attr("data-unique")+'"]').next().offset().top-(t.isFunction(n)?n.call():n)+"px"},{duration:s})}),i}})}),languages=[];