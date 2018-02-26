/*! jQuery UI - v1.10.3 - 2013-09-16
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
!function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,l,d={},h=i.split(".")[0];i=i.split(".")[1],o=h+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[h]=t[h]||{},a=t[h][i],r=t[h][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),l=new s,l.options=t.widget.extend({},l.options),t.each(n,function(i,n){return t.isFunction(n)?(d[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(d[i]=n,e)}),r.prototype=t.widget.extend(l,{widgetEventPrefix:a?l.widgetEventPrefix:i},d,{constructor:r,namespace:h,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,l=a.length;l>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,l=s.call(arguments,1),d=this;return a=!r&&l.length?t.widget.extend.apply(null,[a].concat(l)):a,this.each(r?function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,l),s!==n&&s!==e?(d=s&&s.jquery?d.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+a+"'")}:function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),d}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),s===e)return o[i]===e?null:o[i];o[i]=s}else{if(s===e)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function l(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(l.guid=r.guid=r.guid||l.guid||t.guid++);var d=n.match(/^(\w+)\s*(.*)$/),h=d[1]+a.eventNamespace,c=d[2];c?o.delegate(c,h,l):s.bind(h,l)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})}(jQuery),/* jquery Tocify - v1.8.0 - 2013-09-16
* http://www.gregfranko.com/jquery.tocify.js/
* Copyright (c) 2013 Greg Franko; Licensed MIT
* Modified lightly by Robert Lord to fix a bug I found,
* and also so it adds ids to headers
* also because I want height caching, since the
* height lookup for h1s and h2s was causing serious
* lag spikes below 30 fps */
function(t){"use strict";t(window.jQuery,window,document)}(function(t,e,i,s){"use strict";var n="tocify",o="tocify-focus",a="tocify-hover",r="tocify-hide",l="tocify-header",d="."+l,h="tocify-subheader",c="."+h,u="tocify-item",f="."+u,p="tocify-extend-page",g="."+p;t.widget("toc.tocify",{version:"1.8.0",options:{context:"body",ignoreSelector:null,selectors:"h1, h2, h3",showAndHide:!0,showEffect:"slideDown",showEffectSpeed:"medium",hideEffect:"slideUp",hideEffectSpeed:"medium",smoothScroll:!0,smoothScrollSpeed:"medium",scrollTo:0,showAndHideOnScroll:!0,highlightOnScroll:!0,highlightOffset:40,theme:"bootstrap",extendPage:!0,extendPageOffset:100,history:!0,scrollHistory:!1,hashGenerator:"compact",highlightDefault:!0},_create:function(){var i=this;i.tocifyWrapper=t(".tocify-wrapper"),i.extendPageScroll=!0,i.items=[],i._generateToc(),i.cachedHeights=[],i.cachedAnchors=[],i._addCSSClasses(),i.webkit=function(){for(var t in e)if(t&&-1!==t.toLowerCase().indexOf("webkit"))return!0;return!1}(),i._setEventHandlers(),t(e).load(function(){i._setActiveElement(!0),t("html, body").promise().done(function(){setTimeout(function(){i.extendPageScroll=!1},0)})})},_generateToc:function(){var e,i,s=this,o=s.options.ignoreSelector;return e=t(this.options.context).find(-1!==this.options.selectors.indexOf(",")?this.options.selectors.replace(/ /g,"").substr(0,this.options.selectors.indexOf(",")):this.options.selectors.replace(/ /g,"")),e.length?(s.element.addClass(n),void e.each(function(e){t(this).is(o)||(i=t("<ul/>",{id:l+e,"class":l}).append(s._nestElements(t(this),e)),s.element.append(i),t(this).nextUntil(this.nodeName.toLowerCase()).each(function(){0===t(this).find(s.options.selectors).length?t(this).filter(s.options.selectors).each(function(){t(this).is(o)||s._appendSubheaders.call(this,s,i)}):t(this).find(s.options.selectors).each(function(){t(this).is(o)||s._appendSubheaders.call(this,s,i)})}))})):void s.element.addClass(r)},_setActiveElement:function(t){var i=this,s=e.location.hash.substring(1),n=i.element.find("li[data-unique='"+s+"']");return s.length?(i.element.find("."+i.focusClass).removeClass(i.focusClass),n.addClass(i.focusClass),i.options.showAndHide&&n.click()):(i.element.find("."+i.focusClass).removeClass(i.focusClass),!s.length&&t&&i.options.highlightDefault&&i.element.find(f).first().addClass(i.focusClass)),i},_nestElements:function(e,i){var s,n,o;return s=t.grep(this.items,function(t){return t===e.text()}),this.items.push(s.length?e.text()+i:e.text()),o=this._generateHashValue(s,e,i),n=t("<li/>",{"class":u,"data-unique":o}).append(t("<a/>",{text:e.text()})),e.before(t("<div/>",{name:o,"data-unique":o})),n},_generateHashValue:function(t,e,i){var s="",n=this.options.hashGenerator;if("pretty"===n){for(s=e.text().toLowerCase().replace(/\s/g,"-"),s=s.replace(/[^\x00-\x7F]/g,"");s.indexOf("--")>-1;)s=s.replace(/--/g,"-");for(;s.indexOf(":-")>-1;)s=s.replace(/:-/g,"-")}else s="function"==typeof n?n(e.text(),e):e.text().replace(/\s/g,"");return t.length&&(s+=""+i),s},_appendSubheaders:function(e,i){var s=t(this).index(e.options.selectors),n=t(e.options.selectors).eq(s-1),o=+t(this).prop("tagName").charAt(1),a=+n.prop("tagName").charAt(1);a>o?e.element.find(c+"[data-tag="+o+"]").last().append(e._nestElements(t(this),s)):o===a?i.find(f).last().after(e._nestElements(t(this),s)):i.find(f).last().after(t("<ul/>",{"class":h,"data-tag":o})).next(c).append(e._nestElements(t(this),s))},_setEventHandlers:function(){var n=this;this.element.on("click.tocify","li",function(){if(n.options.history&&(e.location.hash=t(this).attr("data-unique")),n.element.find("."+n.focusClass).removeClass(n.focusClass),t(this).addClass(n.focusClass),n.options.showAndHide){var i=t('li[data-unique="'+t(this).attr("data-unique")+'"]');n._triggerShow(i)}n._scrollTo(t(this))}),this.element.find("li").on({"mouseenter.tocify":function(){t(this).addClass(n.hoverClass),t(this).css("cursor","pointer")},"mouseleave.tocify":function(){"bootstrap"!==n.options.theme&&t(this).removeClass(n.hoverClass)}}),t(e).on("resize",function(){n.calculateHeights()}),t(e).on("scroll.tocify",function(){t("html, body").promise().done(function(){var o,a,r,l,d=t(e).scrollTop(),h=t(e).height(),c=t(i).height(),u=t("body")[0].scrollHeight;if(n.options.extendPage&&(n.webkit&&d>=u-h-n.options.extendPageOffset||!n.webkit&&h+d>c-n.options.extendPageOffset)&&!t(g).length){if(a=t('div[data-unique="'+t(f).last().attr("data-unique")+'"]'),!a.length)return;r=a.offset().top,t(n.options.context).append(t("<div />",{"class":p,height:Math.abs(r-d)+"px","data-unique":p})),n.extendPageScroll&&(l=n.element.find("li.active"),n._scrollTo(t("div[data-unique="+l.attr("data-unique")+"]")))}setTimeout(function(){var a,r=null;0==n.cachedHeights.length&&n.calculateHeights();var l=t(e).scrollTop();if(n.cachedAnchors.each(function(t){return n.cachedHeights[t]-l<0?void(r=t):!1}),a=t(n.cachedAnchors[r]).attr("data-unique"),o=t('li[data-unique="'+a+'"]'),n.options.highlightOnScroll&&o.length&&!o.hasClass(n.focusClass)){n.element.find("."+n.focusClass).removeClass(n.focusClass),o.addClass(n.focusClass);var d=n.tocifyWrapper,h=t(o).closest(".tocify-header"),c=h.offset().top,u=d.offset().top,f=c-u;if(f>=t(e).height()){var p=f+d.scrollTop();d.scrollTop(p)}else 0>f&&d.scrollTop(0)}n.options.scrollHistory&&e.location.hash!=="#"+a&&a!==s&&(history.replaceState?history.replaceState({},"","#"+a):(scrollV=i.body.scrollTop,scrollH=i.body.scrollLeft,location.hash="#"+a,i.body.scrollTop=scrollV,i.body.scrollLeft=scrollH)),n.options.showAndHideOnScroll&&n.options.showAndHide&&n._triggerShow(o,!0)},0)})})},calculateHeights:function(){var e=this;e.cachedHeights=[],e.cachedAnchors=[];var i=t(e.options.context).find("div[data-unique]");i.each(function(i){var s=(t(this).next().length?t(this).next():t(this)).offset().top-e.options.highlightOffset;e.cachedHeights[i]=s}),e.cachedAnchors=i},show:function(e){var i=this;if(!e.is(":visible"))switch(e.find(c).length||e.parent().is(d)||e.parent().is(":visible")?e.children(c).length||e.parent().is(d)||(e=e.closest(c)):e=e.parents(c).add(e),i.options.showEffect){case"none":e.show();break;case"show":e.show(i.options.showEffectSpeed);break;case"slideDown":e.slideDown(i.options.showEffectSpeed);break;case"fadeIn":e.fadeIn(i.options.showEffectSpeed);break;default:e.show()}return i.hide(t(c).not(e.parent().is(d)?e:e.closest(d).find(c).not(e.siblings()))),i},hide:function(t){var e=this;switch(e.options.hideEffect){case"none":t.hide();break;case"hide":t.hide(e.options.hideEffectSpeed);break;case"slideUp":t.slideUp(e.options.hideEffectSpeed);break;case"fadeOut":t.fadeOut(e.options.hideEffectSpeed);break;default:t.hide()}return e},_triggerShow:function(t,e){var i=this;return t.parent().is(d)||t.next().is(c)?i.show(t.next(c),e):t.parent().is(c)&&i.show(t.parent(),e),i},_addCSSClasses:function(){return"jqueryui"===this.options.theme?(this.focusClass="ui-state-default",this.hoverClass="ui-state-hover",this.element.addClass("ui-widget").find(".toc-title").addClass("ui-widget-header").end().find("li").addClass("ui-widget-content")):"bootstrap"===this.options.theme?(this.element.find(d+","+c).addClass("nav nav-list"),this.focusClass="active"):(this.focusClass=o,this.hoverClass=a),this},setOption:function(){t.Widget.prototype._setOption.apply(this,arguments)},setOptions:function(){t.Widget.prototype._setOptions.apply(this,arguments)},_scrollTo:function(e){var i=this,s=i.options.smoothScroll||0,n=i.options.scrollTo;return t("html, body").promise().done(function(){t("html, body").animate({scrollTop:t('div[data-unique="'+e.attr("data-unique")+'"]').next().offset().top-(t.isFunction(n)?n.call():n)+"px"},{duration:s})}),i}})});