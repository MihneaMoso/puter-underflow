// Automatically combined file using master.jsbundle

// Begin PartialJS/masterAndMasterChat.jsbundle

// Automatically combined file using PartialJS/masterAndMasterChat.jsbundle

// Begin PartialJS/namespace.js

window.CHAT = {
    RoomUsers: {},
    BulkDelete: {}
};
if (/^#nonewmob;/.test(location.hash)) {
    location.hash = location.hash.substr(10);
    if (location.hash.length <= 1 && window.history && window.history.replaceState)
        history.replaceState(null, null, location.href.replace(/#$/, "")); // remove the ugly lonely "#"
}


// End PartialJS/namespace.js

// Begin PartialJS/../third-party/jquery.scrollTo.min.js

/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.2
 */
; (function (f) { "use strict"; "function" === typeof define && define.amd ? define(["jquery"], f) : "undefined" !== typeof module && module.exports ? module.exports = f(require("jquery")) : f(jQuery) })(function ($) { "use strict"; function n(a) { return !a.nodeName || -1 !== $.inArray(a.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) } function h(a) { return $.isFunction(a) || $.isPlainObject(a) ? a : { top: a, left: a } } var p = $.scrollTo = function (a, d, b) { return $(window).scrollTo(a, d, b) }; p.defaults = { axis: "xy", duration: 0, limit: !0 }; $.fn.scrollTo = function (a, d, b) { "object" === typeof d && (b = d, d = 0); "function" === typeof b && (b = { onAfter: b }); "max" === a && (a = 9E9); b = $.extend({}, p.defaults, b); d = d || b.duration; var u = b.queue && 1 < b.axis.length; u && (d /= 2); b.offset = h(b.offset); b.over = h(b.over); return this.each(function () { function k(a) { var k = $.extend({}, b, { queue: !0, duration: d, complete: a && function () { a.call(q, e, b) } }); r.animate(f, k) } if (null !== a) { var l = n(this), q = l ? this.contentWindow || window : this, r = $(q), e = a, f = {}, t; switch (typeof e) { case "number": case "string": if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)) { e = h(e); break } e = l ? $(e) : $(e, q); case "object": if (e.length === 0) return; if (e.is || e.style) t = (e = $(e)).offset() }var v = $.isFunction(b.offset) && b.offset(q, e) || b.offset; $.each(b.axis.split(""), function (a, c) { var d = "x" === c ? "Left" : "Top", m = d.toLowerCase(), g = "scroll" + d, h = r[g](), n = p.max(q, c); t ? (f[g] = t[m] + (l ? 0 : h - r.offset()[m]), b.margin && (f[g] -= parseInt(e.css("margin" + d), 10) || 0, f[g] -= parseInt(e.css("border" + d + "Width"), 10) || 0), f[g] += v[m] || 0, b.over[m] && (f[g] += e["x" === c ? "width" : "height"]() * b.over[m])) : (d = e[m], f[g] = d.slice && "%" === d.slice(-1) ? parseFloat(d) / 100 * n : d); b.limit && /^\d+$/.test(f[g]) && (f[g] = 0 >= f[g] ? 0 : Math.min(f[g], n)); !a && 1 < b.axis.length && (h === f[g] ? f = {} : u && (k(b.onAfterFirst), f = {})) }); k(b.onAfter) } }) }; p.max = function (a, d) { var b = "x" === d ? "Width" : "Height", h = "scroll" + b; if (!n(a)) return a[h] - $(a)[b.toLowerCase()](); var b = "client" + b, k = a.ownerDocument || a.document, l = k.documentElement, k = k.body; return Math.max(l[h], k[h]) - Math.min(l[b], k[b]) }; $.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = { get: function (a) { return $(a.elem)[a.prop]() }, set: function (a) { var d = this.get(a); if (a.options.interrupt && a._last && a._last !== d) return $(a.elem).stop(); var b = Math.round(a.now); d !== b && ($(a.elem)[a.prop](b), a._last = this.get(a)) } }; return p });

// End PartialJS/../third-party/jquery.scrollTo.min.js

// Begin PartialJS/../third-party/jquery.cookie.js

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * https://www.opensource.org/licenses/mit-license.php
 * https://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

// End PartialJS/../third-party/jquery.cookie.js

// Begin PartialJS/../third-party/jquery.preload.js

/**
 * jQuery.Preload
 * Copyright (c) 2008 Ariel Flesler - aflesler(at)gmail(dot)com
 * Dual licensed under MIT and GPL.
 * Date: 3/25/2009
 *
 * Small addition 2010/11/3 to get around the load event not being fired for already available images
 *
 * @projectDescription Multifunctional preloader
 * @author Ariel Flesler
 * @version 1.0.8
 *
 * @id jQuery.preload
 * @param {String, jQuery, Array< String, <a>, <link>, <img> >} original Collection of sources to preload
 * @param {Object} settings Hash of settings.
 *
 * @id jQuery.fn.preload
 * @param {Object} settings Hash of settings.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @example Link Mode:
 *	$.preload( '#images a' );
 *
 * @example Rollover Mode:
 *	$.preload( '#images img', {
 *		find:/\.(gif|jpg)/,
 *		replace:'_over.$1'
 *	});
 *
 * @example Src Mode:
 *	$.preload( [ 'red', 'blue', 'yellow' ], {
 *		base:'images/colors/',
 *		ext:'.jpg'
 *	});
 *
 * @example Placeholder Mode:
 *	$.preload( '#images img', {
 *		placeholder:'placeholder.jpg',
 *		notFound:'notfound.jpg'
 *	});
 *
 * @example Placeholder+Rollover Mode(High res):
 *	$.preload( '#images img', {
 *		placeholder:true,
 *		find:/\.(gif|jpg)/,
 *		replace:'_high.$1'
 *	});
 */

;(function( $ ){

	var $preload = $.preload = function( original, settings ){
		if( original.split ) // selector
			original = $(original);

		settings = $.extend( {}, $preload.defaults, settings );
		var sources = $.map( original, function( source ){
			if( !source ) 
				return; // skip
			if( source.split ) // URL Mode
				return settings.base + source + settings.ext;
			var url = source.src || source.href; // save the original source
			if( typeof settings.placeholder == 'string' && source.src ) // Placeholder Mode, if it's an image, set it.
				source.src = settings.placeholder;
			if( url && settings.find ) // Rollover mode
				url = url.replace( settings.find, settings.replace );
			return url || null; // skip if empty string
		});

		var data = {
			loaded:0, // how many were loaded successfully
			failed:0, // how many urls failed
			next:0, // which one's the next image to load (index)
			done:0, // how many urls were tried
			/*
			index:0, // index of the related image			
			found:false, // whether the last one was successful
			*/
			total:sources.length // how many images are being preloaded overall
		};
		
		if( !data.total ) // nothing to preload
			return finish();
		
		var imgs = $(Array(settings.threshold+1).join('<img/>'))
			.load(handler).error(handler).bind('abort',handler).each(fetch);
		
		function handler( e ){
			data.element = this;
			data.found = e.type == 'load';
			data.image = this.src;
			data.index = this.index;
			var orig = data.original = original[this.index];
			data[data.found?'loaded':'failed']++;
			data.done++;

			// This will ensure that the images aren't "un-cached" after a while
			if( settings.enforceCache )
				$preload.cache.push( 
					$('<img/>').attr('src',data.image)[0]
				);

			if( settings.placeholder && orig.src ) // special case when on placeholder mode
				orig.src = data.found ? data.image : settings.notFound || orig.src;
			if( settings.onComplete )
				settings.onComplete( data );
			if( data.done < data.total ) // let's continue
				fetch( 0, this );
			else{ // we are finished
				if( imgs && imgs.unbind )
					imgs.unbind('load').unbind('error').unbind('abort'); // cleanup
				imgs = null;
				finish();
			}
		};
		function fetch( i, img, retry ){
			// IE problem, can't preload more than 15
			if( img.attachEvent /* msie */ && data.next && data.next % $preload.gap == 0 && !retry ){
				setTimeout(function(){ fetch( i, img, true ); }, 0);
				return false;
			}
			if( data.next == data.total ) return false; // no more to fetch
			img.index = data.next; // save it, we'll need it.
			img.src = sources[data.next++];
			if( settings.onRequest ){
				data.index = img.index;
				data.element = img;
				data.image = img.src;
				data.original = original[data.next-1];
				settings.onRequest( data );
			}

            // (our custom addition to the plugin: if the image is already available, the browser may never
            // fire the load event, so we force it)
            if (img.complete) {
                $(img).trigger("load");
            }
		};
		function finish(){
			if( settings.onFinish )
				settings.onFinish( data );
		};
	};

	 // each time we load this amount and it's IE, we must rest for a while, make it lower if you get stack overflow.
	$preload.gap = 14; 
	$preload.cache = [];
	
	$preload.defaults = {
		threshold:2, // how many images to load simultaneously
		base:'', // URL mode: a base url can be specified, it is prepended to all string urls
		ext:'', // URL mode:same as base, but it's appended after the original url.
		replace:'' // Rollover mode: replacement (can be left empty)
		/*
		enforceCache: false, // If true, the plugin will save a copy of the images in $.preload.cache
		find:null, // Rollover mode: a string or regex for the replacement
		notFound:'' // Placeholder Mode: Optional url of an image to use when the original wasn't found
		placeholder:'', // Placeholder Mode: url of an image to set while loading
		onRequest:function( data ){ ... }, // callback called every time a new url is requested
		onComplete:function( data ){ ... }, // callback called every time a response is received(successful or not)
		onFinish:function( data ){ ... } // callback called after all the images were loaded(or failed)
		*/
	};

	$.fn.preload = function( settings ){
		$preload( this, settings );
		return this;
	};

    // SE change:
    // IE barfs when accessing (even reading, but especially writing)
    // image.src if it's a particularly broken URL (http://meta.stackexchange.com/a/250589).
    // This can prevent a room from loading at all. Thus we wrap the preload plugin
    // in try/catch.
    (function () {
        var originalFnPreload = $.fn.preload;
        var originalPreload = $.preload;
        $.fn.preload = function () {
            try {
                return originalPreload.apply(this, arguments);
            } catch (ex) {
                return this;
            }
        }
        $.preload = function () {
            try {
                originalPreload.apply(this, arguments);
            } catch (ex) {
            }
        }
    })();
    
})( jQuery );

// End PartialJS/../third-party/jquery.preload.js

// Begin PartialJS/../third-party/jquery.typewatch.js

/*
 *	TypeWatch 2.0 - Original by Denny Ferrassoli / Refactored by Charles Christolini
 *
 *	Examples/Docs: www.dennydotnet.com
 *	
 *  Copyright(c) 2007 Denny Ferrassoli - DennyDotNet.com
 *  Coprright(c) 2008 Charles Christolini - BinaryPie.com
 *  
 *  Dual licensed under the MIT and GPL licenses:
 *  https://www.opensource.org/licenses/mit-license.php
 *  https://www.gnu.org/licenses/gpl.html
*/

(function(jQuery) {
	jQuery.fn.typeWatch = function(o){
		// Options
		var options = jQuery.extend({
			wait : 750,
			callback : function() { },
			highlight : true,
			captureLength : 2
		}, o);
			
		function checkElement(timer, override) {
			var elTxt = jQuery(timer.el).val();
		
			// Fire if text > options.captureLength AND text != saved txt OR if override AND text > options.captureLength
			if ((elTxt.length > options.captureLength && elTxt.toUpperCase() != timer.text) 
			|| (override && elTxt.length > options.captureLength)) {
				timer.text = elTxt.toUpperCase();
				timer.cb(elTxt);
			}
		};
		
		function watchElement(elem) {			
			// Must be text or textarea
			if (elem.type.toUpperCase() == "TEXT" || elem.nodeName.toUpperCase() == "TEXTAREA") {

				// Allocate timer element
				var timer = {
					timer : null, 
					text : jQuery(elem).val().toUpperCase(),
					cb : options.callback, 
					el : elem, 
					wait : options.wait
				};

				// Set focus action (highlight)
				if (options.highlight) {
					jQuery(elem).focus(
						function() {
							this.select();
						});
				}

				// Key watcher / clear and reset the timer
				var startWatch = function(evt) {
					var timerWait = timer.wait;
					var overrideBool = false;
					
					if (evt.keyCode == 13 && this.type.toUpperCase() == "TEXT") {
						timerWait = 1;
						overrideBool = true;
					}
					
					var timerCallbackFx = function()
					{
						checkElement(timer, overrideBool)
					}
					
					// Clear timer					
					clearTimeout(timer.timer);
					timer.timer = setTimeout(timerCallbackFx, timerWait);				
										
				};
				
				jQuery(elem).keydown(startWatch);
			}
		};
		
		// Watch Each Element
		return this.each(function(index){
			watchElement(this);
		});
		
	};

})(jQuery);

// End PartialJS/../third-party/jquery.typewatch.js

// Begin PartialJS/../third-party/lyfe.js

/*!
 * Copyright (c) 2011, 2012, 2013 Benjamin Dumke-von der Ehe
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished
 * to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
 
(function (global) {

    var arrIndexOf;
    if (Array.prototype.indexOf) {
        arrIndexOf = function (arr, val) { return arr.indexOf(val); };
    } else {
        arrIndexOf = function (arr, val) {
            var len = arr.length;
            for (var i = 0; i < len; i++)
                if (i in arr && arr[i] === val)
                    return i;
            return -1;
        };
    }

    var BreakIteration = {};

    var Generator = function (source) {
        if (!(this instanceof Generator))
            return new Generator(source);
    
        if (typeof source === "function")
            this.forEach = makeForEach_fromFunction(source);
        else if (source.constructor === Array)
            this.forEach = makeForEach_fromArray(source);
        else
            this.forEach = makeForEach_fromObject(source);
    };
    
    var asGenerator = function (source) {
        if (source instanceof Generator)
            return source;
            
        return new Generator(source);
    };

    var stopIteration = function () {
        throw BreakIteration; 
    };
    
    var IterationError = function (message) {
        this.message = message;
        this.name = "IterationError";
    };
    IterationError.prototype = Error.prototype;

    var makeForEach_fromFunction = function (f) {
        return function (g, thisObj) {
            var stopped = false,
                index = 0,
                Yield = function (val) {
                    if (stopped)
                        throw new IterationError("yield after end of iteration");
                    var send = g.call(thisObj, val, index, stopIteration);
                    index++;
                    return send;
                },
                yieldMany = function (source) {
                    asGenerator(source).forEach(function (val) { Yield(val); })
                };
            try {
                f(Yield, yieldMany, stopIteration);
            } catch (ex) {
                if (ex !== BreakIteration)
                    throw ex;
            } finally {
                stopped = true;
            }
        };
    };
    
    var makeForEach_fromArray = function (arr) {
        return makeForEach_fromFunction(function (Yield) {
            var len = arr.length;
            for (var i = 0; i < len; i++)
                if (i in arr)
                    Yield(arr[i]);
        });
    };
    
    var makeForEach_fromObject = function (obj) {
        return makeForEach_fromFunction(function (Yield) {
            for (var key in obj)
                if (obj.hasOwnProperty(key))
                    Yield([key, obj[key]]);
        });
    };
    
    var selector = function (f) {
        if (typeof f === "string")
            return function (o) { return o[f]; }
        return f;
    };

    Generator.prototype = {
        toArray: function () {
            var result = [];
            this.forEach(function (val) { result.push(val); });
            return result;
        },
        filter: function (pred, thisObj) {
            var source = this;
            pred = selector(pred);
            return new Generator(function (Yield) {
                source.forEach(function (val) {
                    if (pred.call(thisObj, val))
                        Yield(val);
                });
            });
        },
        take: function (n) {
            var source = this;
            return new Generator(function (Yield) {
                source.forEach(function (val, index, stop) {
                    if (index >= n)
                        stop();
                    Yield(val);
                });
            });
        },
        skip: function (n) {
            var source = this;
            return new Generator(function (Yield) {
                source.forEach(function(val, index) {
                    if (index >= n)
                        Yield(val);
                });
            });
        },
        map: function (f, thisObj) {
            var source = this;
            f = selector(f);
            return new Generator(function (Yield) {
                source.forEach(function (val) {
                    Yield(f.call(thisObj, val));
                });
            });
        },
        zipWithArray: function (arr, zipper) {
            if (typeof zipper === "undefined")
                zipper = function (a, b) { return [a, b]; };
            
            var source = this;
            
            return new Generator(function (Yield) {
                var len = arr.length,
                    delta = 0;
                    
                source.forEach(function (val, index, stop) {
                    while (!(index + delta in arr) && index + delta < len)
                        delta++;
                    if (index + delta >= len)
                        stop();
                    
                    Yield(zipper(val, arr[index + delta]));
                });
            });
        },
        reduce: function (f, firstValue) {
            var first,
                current;
        
            if (arguments.length < 2) { 
                first = true;
            } else {
                first = false;
                current = firstValue;
            }
            
            this.forEach(function (val) {
                if (first) {
                    current = val;
                    first = false;
                } else {
                    current = f(current, val);
                }                
            });
            return current;
        },
        and: function (other) {
            var source = this;
            return new Generator(function (Yield, yieldMany) {
                yieldMany(source);
                yieldMany(other);
            });
        },
        takeWhile: function (pred) {
            var source = this;
            pred = selector(pred);
            return new Generator(function (Yield) {
                source.forEach(function (val, index, stop) {
                    if (pred(val))
                        Yield(val);
                    else
                        stop();
                });
            });
        },
        skipWhile: function (pred) {
            var source = this;
            pred = selector(pred);
            return new Generator(function (Yield) {
                var skipping = true;
                    
                source.forEach(function (val) {
                    skipping = skipping && pred(val);
                    if (!skipping)
                        Yield(val);
                });                    
            });
        },
        all: function (pred) {
            var result = true;
            pred = selector(pred);
            this.forEach(function (val, index, stop) {
                if (!(pred ? pred(val) : val)) {
                    result = false;
                    stop();
                }
            });
            return result;
        },
        any: function (pred) {
            var result = false;
            pred = selector(pred);
            this.forEach(function (val, index, stop) {
                if (pred ? pred(val) : val) {
                    result = true;
                    stop();
                }
            });
            return result;
        },
        first: function () {
            var result;
            this.forEach(function (val, index, stop) {
                result = val;
                stop();
            });
            return result;
        },
        groupBy: function (grouper) {
            var source = this;
            grouper = selector(grouper);
            return new Generator(function (Yield, yieldMany) {
                var groups = [],
                    group_contents = [];
                    
                source.forEach(function (val) {
                    var group = grouper(val);
                    var i = arrIndexOf(groups, group);
                    if (i === -1) {
                        groups.push(group);
                        group_contents.push([val]);
                    } else {
                        group_contents[i].push(val);
                    }
                });
            
                yieldMany(new Generator(groups).zipWithArray(group_contents, function (group, contents) {
                    var result = new Generator(contents);
                    result.key = group;
                    return result;
                }));
            });
        },
        evaluated: function () {
            return new Generator(this.toArray());
        },
        except: function (what) {
            return this.filter(function (x) { return x !== what; });
        },
        sortBy: function (keyFunc) {
            var source = this;
            keyFunc = selector(keyFunc);
            return new Generator(function (Yield) {
                var arr = source.toArray(),
                    indexes = Range(0, arr.length).toArray(),
                    keys = Generator(arr).map(keyFunc).toArray();
                
                indexes.sort(function (a, b) {
                    var ka = keys[a],
                        kb = keys[b];
                    if (typeof ka === typeof kb) {
                        if (ka === kb)
                            return a < b ? -1 : 1;
                        if (ka < kb)
                            return -1;
                        if (ka > kb)
                            return 1;
                    }
                    throw new TypeError("cannot compare " + ka + " and " + kb);
                });
                new Generator(indexes).forEach(function (index) {
                    Yield(arr[index]);
                });
            });
        },
        count: function () {
            var result = 0;
            this.forEach(function () { result++; });
            return result;
        }
    };

    var Count = function (start, step) {
        var i = start;
        if (typeof step === "undefined")
            step = 1;
        return new Generator(function (Yield) {
            while (true) {
                Yield(i);
                i += step;
            }
        });
    };

    var Range = function (start, len) {
        return Count(start, 1).take(len);
    };

    var originalGenerator = global.Generator;
    global.Generator = Generator;
    Generator.BreakIteration = BreakIteration;
    Generator.Count = Count;
    Generator.Range = Range;
    Generator.IterationError = IterationError;
    Generator.noConflict = function () {
        global.Generator = originalGenerator;
        return Generator;
    }
    
})(this);



// End PartialJS/../third-party/lyfe.js

// Begin PartialJS/chatHelpers.js

// used for time, edits, starred, and flagged on messages, so these four can be set in one go
// in newMessage(), where it has a large impact on page load time
$.fn.info = function (key, val) {
    var i = this.data("info");
    if (arguments.length == 1) {
        if (!i)
            return undefined;
        return i[key];
    }
    else {
        if (i)
            i[key] = val;
        else {
            i = {};
            i[key] = val;
            this.data("info", i);
        }
        return this;
    }
}
function toggleVote(jMessage, verb, target, hasGlobalFlag) {
    if (target) $(target).toggleClass("user-" + verb);
    if (verb == "flag" && !hasGlobalFlag) // if they're not a mod, they should at least see their own flags
        jMessage.find(".flash").toggleClass("flag-indicator");
    var pastPerfect = { star: "starred", flag: "flagged" }[verb]; // it just had to be irregular verbs, didn't it?
    jMessage.info(pastPerfect, !jMessage.info(pastPerfect));
}

// End PartialJS/chatHelpers.js

// Begin PartialJS/quote.js


function handleQuoteMessage(orig) {
    
    var html = $.trim(orig);

    var quote = html.match(/^&gt;\s+(.*)$/);
    if (quote) {
        var span = $("<div/>").addClass("quote").html(quote[1])
        return $("<p/>").append(span).html();
    } else if (/^<div[^>]*?>&gt;/i.test(html)) { // possibly a multi-line quote
        var jDiv = $(html);
        if (jDiv.hasClass("partial") || jDiv.hasClass("full")) {
            jDiv[0].normalize();
            var children = jDiv[0].childNodes;
            var first = true,
                anyQuoted = false,
                anyNotQuoted = false;
            // we go textnode-by-textnode, which essentially means line-by-line
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                if (child.nodeType !== 3)
                    continue;
                if (!/\S/.test(child.nodeValue))
                    continue;
                var thisQuoted = /^\s*>\s/.test(child.nodeValue);
                if (!first) {
                    anyQuoted |= thisQuoted;
                    anyNotQuoted |= !thisQuoted;
                }
                first = false;
                if (thisQuoted) {
                    child.nodeValue = child.nodeValue.replace(/^\s*>\s+/, "");
                }
                
            }
            
            // it's a quote if either all of the lines, or the first and only the first line
            // starts with "> "
            if (!anyNotQuoted || !anyQuoted)
                return jDiv.addClass("quote")[0].outerHTML;
        }
    }
    return orig;
}

// End PartialJS/quote.js

// Begin PartialJS/flagModal.js

(function () {
    function initFlagModal(isCurrentUserMod = false) {
        var notify = Notifier().notify;
        $(document).on("click", ".js-submit-flag", function (e) {
            e.preventDefault();
            handleFlagSelection($(this), notify, isCurrentUserMod);
            return;
        });

        $("#flag-form").on("input change", setSubmitButtonState);
        $("#flag-modal").on("s-modal:hidden", resetFormAndModal);
    }

    function isReadyToSubmit() {
        const checked = $("input[name='flag-action']:checked");
        if (!checked.length) {
            return false;
        }
        if (checked.val() === "moderator-action") {
            return !!$("#flag-option-Moderator-expandable").find("textarea").val().trim();
        }
        return true;
    }

    function setSubmitButtonState() {
        $(".js-submit-flag").prop("disabled", !isReadyToSubmit());
    }

    function openFlagModal(msgId, hideModeratorOption = false, onlyShowModeratorOption = false) {
        $("#moderator-flag-option-wrapper").toggleClass("d-none", hideModeratorOption);

        var $message = $(`#message-${msgId}`);
        $message.find(".popup").hide();
        var flagForm = document.querySelector("#flag-form");
        var flagModal = document.querySelector("#flag-modal");

        // reset message Id
        $(flagForm).data("message-id", msgId);

        if (onlyShowModeratorOption) {
            var $normalFlagOptions = $(".s-check-control:not(#moderator-flag-option-wrapper)");
            $normalFlagOptions.toggleClass("d-none", onlyShowModeratorOption);
            $("input[value='moderator-action']").click();
            setTimeout(function () {
                $("#flag-option-Moderator-expandable").find("textarea").focus();
            }, 0);
        }

        Stacks.showModal(flagModal);
    }

    function resetFormAndModal() {
        var $flagForm = $("#flag-form");
        var $flagModal = $("#flag-modal");
        var $modFlagInfo = $("#flag-option-Moderator-expandable").find("textarea");
        var $submitBtn = $(".js-submit-flag");

        $modFlagInfo.val("");
        $submitBtn.attr("disabled", true);
        $flagForm.data("message-id", null);
        $flagModal.removeData();
        $flagForm.find("input[name='flag-action']").prop("checked", false);
        $flagForm.find(".s-check-control").removeClass("d-none");
        $("#flag-option-Moderator-expandable").removeClass("is-expanded");

        if ($("#flag-action-to-remove").length) {
            $("#flag-action-to-remove").removeAttr("id");
        }
    }

    function handleFlagSubmit(result, $msg, isModFlag, notify) {
        if (isModFlag) {
            if (result === "ok") {
                notify("Thanks, we'll take a look at it.");
            } else {
                notify(result || GENERIC_ERROR);
            }
        }

        if (!isModFlag) {
            // if this is to confirm another flag in the flag popup or admin page, remove the confirm line
            if ($("#flag-action-to-remove").length) {
                if (result === "ok") {
                    $("#flag-action-to-remove").fadeOut(function () { $(this).remove(); });
                } else {
                    notify(result || GENERIC_ERROR);
                }
                $("#flag-action-to-remove").removeAttr("id");
            } else {
                // if it reaches here, it means this action is to cast a flag in chat/transcript/side menu
                if (result === "ok") {
                    var el = $msg.find(".flags");
                    toggleVote($msg, "flag", el, $("#flag-count").length > 1);
                } else {
                    toggleVote($msg, "flag", el);
                    notify(result || GENERIC_ERROR);
                }
            }
        }
        Stacks.hideModal($("#flag-modal").get(0));
        resetFormAndModal();
    }

    function handleFlagSelection($submitBtn, notify, isCurrentUserMod) {
        var messageId = $submitBtn.closest("#flag-form").data("message-id");
        var flagReason = $submitBtn.closest("#flag-form").find("input[name='flag-action']:checked").val();

        var $message = $(`#message-${messageId}`);
        var modFlagInfo = $("#flag-option-Moderator-expandable").find("textarea").val();

        var isModFlag = flagReason === "moderator-action";
        var verb = isModFlag ? "mod" : "flag";
        var info = isModFlag ? { info: modFlagInfo } : { flagReason };

        if (!isModFlag && isCurrentUserMod) {
            if (confirmFlagForMods(true)) {
                messageActionById(messageId, verb, info, function (result) {
                    handleFlagSubmit(result, $message, isModFlag, notify);
                });
            }
        } else {
            messageActionById(messageId, verb, info, function (result) {
                handleFlagSubmit( result, $message, isModFlag, notify);
            });
        }
    }

    function confirmFlagForMods() {
        return confirm("Do you want to flag this message? Since you're a moderator, this flag is binding.");
    }

    CHAT.FlagHelpers = {
        initFlagModal,
        openFlagModal
    }
})();


// End PartialJS/flagModal.js

// Begin PartialJS/popup.js

/* popup.js */
;
// Be sure to call evt.stopPropagation() on the click event that caused the
// popup to be created, to prevent the click handler in popupDismisser() from
// firing. popUp() will dismiss a possibly present other popup itself.
function popUp(left, top, parent, keepOld) {
    if(!keepOld) $(".popup").remove();
    var css = {};
    var x = left - $(window).scrollLeft();
    var y = top - $(window).scrollTop();
    if (x < $(window).width() / 2)
        css.left = x;
    else
        css.right = $(window).width() - x;
    if (y < $(window).height() / 2)
        css.top = y;
    else
        css.bottom = $(window).height() - y;
    var menu = div("popup").css(css).hide();
    var close = $("<div class='btn-close'>X</div>");
    close.click(function () { $(this).closest(".popup").fadeOut(200, function () { $(this).remove(); }); }).prependTo(menu);

    menu.appendTo(parent || $("body")).fadeIn(200);
    menu.close = function () { menu.fadeOut(200, function () { menu.remove(); }) };
    return menu;
}


function popupDismisser() {
    $(document).click(function (evt) {
        if ($(evt.target).closest(".popup").length == 0 && $(evt.target).closest(".ac_results").length == 0) // the click was *not* on a popup or auto-complete
        {
            $(".popup:not(.mini-help)").fadeOut(200, function () { $(this).remove(); });
        }
    });
    $(document).bind("keydown", function (evt) {
        // note that pressing escape might stop running ajax requests in some
        // browsers -- open to ideas how to handle that. So better use
        // the "click anywhere".
        if (evt.which == 27) // escape
            $(".popup:not(.mini-help)").fadeOut(200, function () { $(this).remove(); })
    });
}
function fkey(body) {
    if (!body) body = {};
    if (!body.fkey) body.fkey = $("input[name='fkey']").attr("value");
    return body;
}
function repNumber(n) {
    if (n < 10000)
        return n;
    else if (n < 100000) {
        var pre = Math.floor(Math.round(n / 100) / 10);
        var post = Math.round((n - pre * 1000) / 100);
        return pre + (post > 0 ? "." + post : "") + "k";
    } else
        return Math.round(n / 1000) + "k";
}
function htmlEncode(s) {
    return document.createElement('div').appendChild(document.createTextNode(s)).parentNode.innerHTML;
}
function selectStackSite(evt, userId, showUser, callback, parent, keepOld) {
    var popup = popUp(evt.pageX, evt.pageY, parent, keepOld).css({ width: "auto", position: "absolute" });
    var ld = $("<p/>").text("Loading available sites...");
    popup.append(ld);
    var body = showUser ? {} : { sort: 'site' };
    var showSites = function (data) {
        if (data && data.length) {
            ld.text('select a site:');
            var inp = $('<input type="text"/>').appendTo(popup);
            inp.autocomplete(data, {
                minChars: 0,
                width: 310,
                matchContains: "word",
                autoFill: false,
                formatItem: function (row, i, max) {
                    return '<img class="icon-16" src="' + row.SiteIcon + '"/> ' + htmlEncode(row.SiteCaption);
                },
                formatMatch: function (row, i, max) {
                    return htmlEncode(row.SiteCaption + " " + row.Host);
                },
                formatResult: function (row) {
                    return row.Host;
                }
            }).result(function log(event, row, formatted) {
                if (row) {
                    popup.close();
                    callback(row.Host, row.SiteCaption, row.SiteIcon);
                }
            }).focus();
        } else {
            ld.text('(no sites found)');
        }
    };
    if (userId) {
        $.post("/users/sites/" + userId, body, showSites);
    } else {
        $.get("/rooms/sites", showSites);
    }

}
function PERMALINK(message_id) {
    return "/transcript/message/" + message_id + '#' + message_id;
}

var moderatorTools = function (notify) {
    var result = {};

    // used in both the full "flagged" page and the popup; hence the tests for whether we're in a <table> or in a <ul>

    var initDismissFlags = function () {
        $(document).on("click", ".quick-unmod", function () {
            var flagContainer = $(this).closest("tr");
            var flagId, messageRemoveContainer;
            if (flagContainer.length) {
                flagId = flagContainer.attr("id").replace("fl-", "");
                if (flagContainer.prev().hasClass("monologue-row") && (flagContainer.next().length == 0 || flagContainer.next().hasClass("monologue-row"))) // it was the last flag on this message
                    messageRemoveContainer = flagContainer.prev();
            } else {
                flagContainer = $(this).closest("li");
                flagId = flagContainer.data("flag_id");
                if (flagContainer.closest("ul").find("li").length == 1) {
                    messageRemoveContainer = flagContainer.closest(".flagged-message");
                }
            }
            var noise = "";
            var noiseConfirm = "";
            if (flagContainer.find("input[name=noise]").prop("checked")) {
                noise = "?noise=true";
                noiseConfirm = " and notify the flagger that moderator flags should only be used for serious issues"
            }

            if (confirm('Dismiss this flag' + noiseConfirm + '?')) {
                $.post("/flags/" + flagId + "/clear" + noise, fkey(), function () {
                    flagContainer.remove();
                    if (messageRemoveContainer)
                        messageRemoveContainer.remove();
                });
            }
        });
    };

    result.initFlagSupport = function (isMod, userId, noDataCallback) {
        $(document).on('click', ".reflag,.counterflag,.mehflag", function (evt) {
            evt.preventDefault();
            var jThis = $(this);
            var row = jThis.closest("tr");
            var loaderContainer;
            var messageId;
            // TODO: switch all instances to proper data-* pattern
            if (row.length) {
                var monologueRow = row.prevAll(".monologue-row").eq(0);
                messageId = monologueRow.attr("id").replace("msg-", "");
                loaderContainer = jThis.closest("td");
            } else {
                row = jThis.closest(".flagged-message");
                messageId = row.data("message_id");
                loaderContainer = jThis.parent();
            }

            var verb = jThis.hasClass("reflag") ? "flag" : jThis.hasClass("counterflag") ? "counter-flag" : "meh-flag";

            if (verb === "flag") {
                row.attr("id", "flag-action-to-remove");
                CHAT.FlagHelpers.openFlagModal(messageId, true);
                return;
            }

            if (isMod && verb != "meh-flag") {
                if (!confirm("Please note that since you're a moderator, your vote is binding. Continue?")) return;
            }
            var loader = $("<img/>").attr("src", IMAGE("progress-dots.gif")).appendTo(loaderContainer);
            var successCB = function (result) {
                if (result == "ok") {
                    row.fadeOut(function () { $(this).remove(); });
                } else {
                    var tmp = result || GENERIC_ERROR;
                    if (notify && tmp) notify(tmp);
                    loader.remove();
                }
            };
            var errorCB = function (errorMessage) { loader.remove(); if (notify) notify(errorMessage) };
            messageActionById(messageId, verb, null, successCB, errorCB);
        });
        BindFlagListPopup("#flag-count, .global-flags:not(.mod-flag)", "/admin/flagged?json=true&show=new", "/admin/flagged?show=all", notify, noDataCallback);
        BindFlagListPopup("#modflag-count, .global-flags.mod-flag", "/admin/flagged-moderator?json=true", "/admin/flagged-moderator", notify);
        if (isMod)
            initDismissFlags();
    };
    return result;
};

$.fn.fadeOutAndRemove = function () {
    return this.each(function () {
        var toHide = $(this);
        toHide.fadeOut('fast', function () { toHide.trigger('removing').remove(); });
    });
}

// End PartialJS/popup.js

// Begin PartialJS/notify.js

; /* notify.js */
function div(cls) {
    return $("<div/>").addClass(cls);
}
function span(cls) {
    return $("<span/>").addClass(cls);
}

GENERIC_ERROR = "An error occurred performing this action";

// note that this function is also given to the sidebar
async function messageActionById(msgid, verb, info, callback, notify) {
    if (!await CHAT.turnstile.isHumanAsync()) {
        (callback || notify)("You must confirm that you’re a human before you can perform this action.");
        return;
    }

    if (!info) info = {};
    $.ajax({
        type: "POST",
        url: "/messages/" + msgid + "/" + verb,
        data: fkey(info),
        success: function (result) {
            if (callback) {
                callback(result);
            } else if (result != "ok" && notify) {
                notify(result || GENERIC_ERROR);
            }
        },
        dataType: "json",
        error: function (xhr, failType) {
            var message = failType == 'error' ? (xhr.status == 409 ? xhr.responseText : GENERIC_ERROR) : failType;
            if (callback)
                callback(message)
            else if (notify)
                notify(message);
            CHAT.turnstile.forceTurnstileIfIndicatedByHeader(xhr);
        }
    });
}

function Notifier(icc, mobile) {
    
    var mobile_old = mobile && !CHAT.NEW_MOBILE;
    var mobile_new = mobile && CHAT.NEW_MOBILE;

    if (!icc)
        icc = { broadcast: function () { } };

    // broadcast defaults to true
    function dismissSingleNotification(text, broadcast) {
        if (typeof text != "string")
            text = text.text();
        if (broadcast == undefined || broadcast)
            icc.broadcast({ command: "dismiss notification", notification: text });
        var bar = $(".notification").not(".closing");
        bar.find("p.notification-message").not(".dismissed").each(function () {
            if ($(this).text() == text) {
                $(this).addClass("dismissed").slideUp(function () { $(this).remove(); });
            }
        });
        if (!bar.find("p.notification-message").not(".dismissed").length) {
            bar.slideUp(function () { $(this).remove(); });
        }
    }

    function notify(html, cls) {
        if (html && html.message) html = html.message;
        var bar = $(".notification").not(".closing");
        var waspresent = true;
        if (bar.length == 0) {
            waspresent = false;
            bar = div("notification").hide().appendTo("body");
            var dismisser = $("<div/>").addClass("notify-close-info").text(mobile_old ? "Ok" : mobile_new ? "remove notification" : "click here to remove the notification bar")
                .appendTo(bar).click(function () {
                    if (mobile_old) {
                        bar.find("p.notification-message:last").remove();
                        var notificationsLeft = bar.find("p.notification-message").length;
                        if (notificationsLeft === 0)
                            bar.remove();
                        else
                            $(this).text("Ok" + (notificationsLeft > 1 ? " (" + notificationsLeft + ")" : ""));
                    } else {
                        bar.find("p.notification-message").not(".dismissed").each(function () {
                            icc.broadcast({ command: "dismiss notification", notification: $(this).text() });
                        });
                        bar.addClass("closing").slideUp(function () {
                            $(this).remove();
                            if ($(".banner-container").length) {
                                $(".banner-container").css("top", "34px");
                            }
                        });
                    }
                });
            if (mobile_old) {
                dismisser.addClass("button");
                
                // Thanks to the ultimate wisdom of Apple (tm), we can't use position fixed
                // while iOS 4 is still supported.
                bar.css("top", $(window).scrollTop() + $(window).height() / 20);
            }
        } else {
            lastmsg = bar.find("p.notification-message:" + (mobile_old ? "first" : "last"));
            if (lastmsg.html() == $("<span />").html(html).html()) // it's the same message as the most recent one
                return lastmsg;
        }
        var msg = $("<p/>").addClass("notification-message").html(html).hide();
        if (mobile_old)
            msg.prependTo(bar);
        else
            msg.insertBefore(bar.find(".notify-close-info"));
        if (cls && cls.length > 0) msg.addClass(cls);
        if (waspresent) {
            msg.slideDown();
            if (mobile_old) {
                var totalCount = bar.find("p.notification-message").length;
                bar.find(".notify-close-info").text("Ok" + (totalCount > 1 ? " (" + totalCount + ")" : ""));
            }
        }
        else {
            msg.show();
            bar.slideDown();
        }
        msg.find("a").click(function () { dismissSingleNotification($(this).closest(".notification-message")) });
        return msg;
    }
    var desktop = null;
    if (window.Notification && "permission" in Notification) {

        var toasts = [];
        function eatToast(popup) {
            popup.close();
            toasts = Generator(toasts).filter(function (x) { return x !== popup; }).toArray();
        }

        function eatAllToasts() {
            Generator(toasts).forEach(function (p) { p.close(); });
            toasts = [];
        }

        function makeToast(popup, timeout) {
            toasts.push(popup);
            popup.onclick = function () { window.focus(); };
            if (timeout)
                setTimeout(function () { eatToast(popup); }, timeout);
        }

        desktop = function (obj) {
            if (obj && obj.text) { // treat as "show a message" - otherwise is a query/request for permission
                if (window.Notification.permission !== "granted") return false;
                if (!obj.icon || !obj.icon.length) obj.icon = $('link[rel="apple-touch-icon"]').attr("href");
                if (!obj.icon || !obj.icon.length) obj.icon = $('link[rel="shortcut icon"]').attr("href");
                var popup = new Notification(obj.title, {body: obj.text, icon: obj.icon});
                if (popup) {
                    makeToast(popup, obj.timeout);
                    return true;
                }
                return false;
            } else if (window.Notification.permission === "granted") { // already have permission
                if (obj && obj.callback) obj.callback();
                return true;
            } else if (obj && obj.callback) { // has callback, so is a request for permission
                window.Notification.requestPermission(obj.callback);
                return false; // not granted **yet**
            } else { // query permission, but not granted
                return false;
            }
        };

        desktop.removeAll = eatAllToasts;
    }
    return { notify: notify, dismissSingleNotification: dismissSingleNotification, desktop: desktop };
};
$(function () {
    
    CHAT.inputHint = {show: show};
    
    var elem = $(".input-hint");
    queue = [];
    
    // If the user has the new JS, but not the new CSS, the input hint will cause ugly breakage.
    // This check can be removed after a few days. (Today is 2016/2/24)
    if (elem.css("position") != "absolute") {
        elem.remove(); 
    }

    elem.on("click", ".dismiss-input-hint", function () {
        var pref = parseInt($(this).data("set-pref"), 10);
        elem.empty();
        if (queue.length) {
            show.apply(null, queue.shift());
        }
        if (pref > 0) {
            $.post("/users/set-pref/" + pref, fkey());
        }
    });
    
    function show(html, dismissText, setPrefOnDismiss) {
        if (!elem.is(":empty")) {
            queue.push(Array.prototype.slice.call(arguments));
            return;
        }
        elem.html(html);
        elem.append($("<p><button class='dismiss-input-hint button'/></p>").find("button").text(dismissText || "Ok").data("set-pref", setPrefOnDismiss || -1).end());
    }
    
});


// End PartialJS/notify.js

// Begin PartialJS/searchbox.js

; /* searchbox.js */

function initSearchBox() {
    var box = $("#searchbox");
    var caption = "search";
    box.focus(function () {
        if ($(this).val() == caption)
            $(this).val("");
    });
    box.blur(function () {
        if ($(this).val() == "") {
            $(this).val(caption);
        }
    });
    var startVal = box.val();
    if (startVal === "" || startVal === caption) {
        box.val(caption);
    }
    // the following is irrelevant (but doesn't hurt) outside of the live chat
    box.closest("form").on("submit", function () {
        // empty the box *after* the search is submitted, hence the timeout
        setTimeout(function () { box.val(caption).addClass("watermark").blur(); }, 0);
    });
}

// End PartialJS/searchbox.js

// Begin PartialJS/flagListPopup.js

/* flagListPopup.js */
;
function BindFlagListPopup(selector, ajaxUrl, linkUrl, notify, noDataCallback) {
    $(selector).click(function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        var menu = popUp(evt.pageX, evt.pageY).css({ width: "auto", maxWidth: 600, minWidth: 300 }).addClass("flags-popup")
            .append("<h3>Loading flags <img class='ajax-loader' src='" + IMAGE("progress-dots.gif") + "' /></h3>");
        $.getJSON(ajaxUrl, function (data) { populateFlagListPopup(data, menu); });
    });

    function afterDelete(container) {
        return function () {
            container.find(".ajax-loader").remove();
            container.closest("li").find("button:contains('delete')").replaceWith("<span>message deleted</span>");
        };
    }
    function deleter(message_id, container) {
        return function () {
            if (!confirm("Delete this message?"))
                return;
            $("<img class='ajax-loader' src='" + IMAGE("progress-dots.gif") + "' />").appendTo(container);
            messageActionById(message_id, "delete", null, afterDelete(container), notify);
        }
    }

    function populateFlagListPopup(data, menu) {
        menu.find("img.ajax-loader").remove();
        menu.find("h3").text(ajaxUrl.indexOf("moderator") != -1 ? "Moderator flags" : "New flags")
            .append(" <a href='" + linkUrl + "'>show all</a>");
        var list = $("<ul />").appendTo(menu);

        if (!(data.messages && data.messages.length)) {
            $("<div>There are no flags to display.</div>").appendTo(menu);
            if (noDataCallback)
                noDataCallback();
            return;
        }

        for (var i = 0; i < data.messages.length; i++) {
            var message = data.messages[i];
            var isNormalFlag = !message.is_mod;
            var why = isNormalFlag ? "" : "for moderator attention";

            var item = $("<li class='flagged-message' />").data("message_id", message.message_id).appendTo(list);
            $("<h4>This message was flagged " + why + " by " + message.flag_count + " user" + (message.flag_count > 1 ? "s" : "") + ":</h4>").appendTo(item);
            $("<div class='content'/>").appendTo(item).html(message.content);
            var link;
            if (message.deleted) {
                link = " message is deleted &ndash; <a class='room-name' href='/messages/" + message.message_id + "/history'>history</a>";
            } else {
                link = "<a class='room-name' href='" + PERMALINK(message.message_id) + "'>see in context</a>";
            }
            $("<div style='text-align:right'> posted by <a href='/users/" + message.user_id + "'></a> "
                    + (message.time ? ToRelativeTimeMini(message.time) : "") +
                    " &ndash; " + link + "</div>")
                .appendTo(item).find("a:first").text(message.username).end().find('a.room-name').removeClass("room-name").text(message.room_name);

            if (isNormalFlag) {
                $("<div class='mt2'>Do you agree this message should be flagged?</div>").appendTo(item);
                var actions = $("<div />");
                actions.append("<button class='button reflag' title='agree that this message should be flagged'>yes</button> ");
                actions.append("<button class='button counterflag' title='this message should not be flagged'>no</button> ");
                actions.append("<button class='button mehflag' title='no strong opinion'>not sure</button> ");
                actions.appendTo(item);
                if(message.modflags && message.modflags.length) {
                    var flaggedBy = $("<p>(&#9830; only) flagged by</p>").appendTo(item);
                    for (var j = 0; j < message.modflags.length; j++) {
                        var flag = message.modflags[j];
                        flaggedBy.append(j == 0 ? ': ' : ', ').append($("<a href='/users/" + flag.user_id + "'></a>").text(flag.username));
                    }
                }
            } else { // mod flags
                var container = $("<ul />").appendTo(item);
                if (!message.deleted) {
                    $("<button class='button' title='delete this message'>delete</button>").click(deleter(message.message_id, container))
                        .appendTo(item.find("div:last").append("<span> &ndash; </span>"));
                }
                for (var j = 0; j < message.modflags.length; j++) {
                    var flag = message.modflags[j];
                    var flagger = $("<span> &ndash; <a href='/users/" + flag.user_id + "'></a></span>");
                    flagger.find("a").text(flag.username);
                    var dismiss = $('<span title="dismiss this moderator flag" class="quick-unmod btn-delete"> </span>');
                    var modmsg = $("<span class='mod-text' />");
                    if (flag.html)
                        modmsg.html(flag.html);
                    else
                        modmsg.text(flag.text);
                    
                    var noise;
                    if (flag.user_id > 0)
                        noise = $("<span><input type='checkbox' name='noise'/> this flag is noise</span>").find("input").css({marginLeft:10,verticalAlign:"bottom"}).end()
                                .attr("title", "If this box is checked, dismissing the flag will show a notification to the flagger that moderator flags are reserved for serious issues.");
                    else
                        noise = $([]);
                    container.append($("<li />").append(dismiss, modmsg, flagger, noise).data("flag_id", flag.flag_id));
                }
            }

        }

    };
}

// End PartialJS/flagListPopup.js

// Begin PartialJS/mobileSwitcher.js

$(function() {
    var switchMobile = function (onOffAuto) {
        $.post("/mobile/" + onOffAuto).done(function () { window.location.reload(true); });
    };
    window.CHAT.switchMobile  = switchMobile;
    $(".mobile-on").click(function () {
        switchMobile("on");
        return false;
    })
    $(".mobile-off").click(function () {
        switchMobile("off");
        return false;
    })
    
});

// End PartialJS/mobileSwitcher.js

// Begin PartialJS/turnstile.js

CHAT.turnstile = (function () {
    // Start as true so by default people get let in if Turnstile is not enabled.
    // Will be set to false in initialize().
    let hasPassed = true;
    let siteKey = null;

    return {
        /**
        * Asynchronously (MAKE SURE YOU AWAIT) returns true if the user has passed Turnstile or
        * isn't required to. If necessary, kicks off the Turnstile process and waits until the
        * the user passes (or cancels).
        */
        isHumanAsync,

        /**
        * Asynchronously (MAKE SURE YOU AWAIT) returns true if the user has passed Turnstile or
        * isn't required to. If necessary, kicks off the Turnstile process and waits until the
        * the user passes (or cancels). If the user cancels, shows a notification (either passed
        * as a parameter, or a default "prove you're not a bot first" message).
        */
        isHumanOrNotifyAsync,

        /**
         * Force verification even if our records indicate that it's not necessary. Identical to
         * isHumanAsync otherwise.
         */
        forceVerificationAsync,

        /** Given a jQuery AJAX request object (usually from the `error` handler, checks for
         * the header that is returned if the request failed because the user needs to pass
         * Turnstile first. If that header is present, then the Turnstile modal is launched
         * immediatedly.
         * 
         * This is a LAST RESORT -- the request should never have been made in the first place
         * before the user passed the test. But whatever the reason is, we should now give the
         * user the chance to pass Turnstile, otherwise they'll just sit there dumbfounded.
         */
        forceTurnstileIfIndicatedByHeader,

        /** Indicates that the user doesn't need to be shown the test, because the server
         * considers them human.
         */
        setPassed,

        /** Used by the view to set the config. Once initialized, the assumption is that
         * the user needs to pass Turnstile before doing anything major. Call .setPassed()
         * after initialization if that's not necessary.
         */
        initialize,

        /** For debuging, sets one of the Cloudflare test values. See the method signature
         * as well as https://developers.cloudflare.com/turnstile/troubleshooting/testing/.
         */
        test
    };

    function setPassed() {
        hasPassed = true;
    }

    function initialize(key) {
        hasPassed = false;
        siteKey = key;
    }

    function test(interactive, shouldSucced) {
        hasPassed = false;
        initialize(
            interactive ? "3x00000000000000000000FF" :
                shouldSucced ? "1x00000000000000000000AA" : "2x00000000000000000000AB"
        );
    }

    function forceTurnstileIfIndicatedByHeader(xhr) {
        if (xhr.getResponseHeader("x-chat-human") === "required") {
            // Fire-and-forget, we're not awaiting this. If we're here, an ajax request was
            // made to the server that shouldn't have been. So this is already a failure,
            // and we don't know why it happened, but the least we can do is to give the
            // user a chance to prove their humanity now, so it doesn't happen again.
            _checkTurnstileAsync(true);
        }
    }

    async function isHumanOrNotifyAsync(messageOverride) {
        if (await isHumanAsync()) {
            return true;
        }
        new Notifier().notify(messageOverride || "You must confirm that you’re a human before you can perform this action.");
        return false;
    }

    function isHumanAsync() {
        return _checkTurnstileAsync(false);
    }

    function forceVerificationAsync() {
        return _checkTurnstileAsync(true);
    }


    function _checkTurnstileAsync(force) {
        return new Promise((resolve, reject) => {
            if (hasPassed && !force) {
                resolve(true);
                return;
            }

            const { $modal, $tryAgainButton, $confirmationError } = generateTurnstileModal();
            $modal.appendTo("body");

            let cancelled = false;

            const resolveFalse = () => {
                cancelled = true;
                resolve(false);
            }

            setTimeout(async () => {
                // If the modal is close via clicking cancel or outside it, that means the
                // user didn't pass. This event handler will be removed on success.
                $modal.on("s-modal:hidden", resolveFalse);

                $modal.on("s-modal:hidden", () => setTimeout(() => $modal.remove(), 1000));

                $tryAgainButton.on("click", function () {
                    $tryAgainButton.prop("disabled", true);
                    $confirmationError.addClass("d-none");
                    turnstile.reset("#turnstile-container");
                });

                Stacks.showModal($modal[0]);
                (await _ensureTurnstileJsLoaded()).render("#turnstile-container", {
                    sitekey: siteKey,
                    language: "en",
                    callback: function (token) {
                        if (cancelled) {
                            return;
                        }
                        $.post("/users/turnstile", fkey({ token })).then(() => {
                            $modal.off("s-modal:hidden", resolveFalse);
                            Stacks.hideModal($modal[0]);
                            setPassed();
                            resolve(true);
                        }).fail(() => {
                            $confirmationError.removeClass("d-none");
                            $tryAgainButton.prop("disabled", false);
                        });
                    },
                    "error-callback": function () {
                        $tryAgainButton.prop("disabled", false);
                    }
                });
            }, 0);
        })
    }

    function _ensureTurnstileJsLoaded() {
        return new Promise(resolve => {
            if (window.turnstile) {
                resolve(turnstile);
            } else {
                $.ajax({
                    url: "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
                    dataType: "script",
                    cache: true
                }).then(() => resolve(turnstile));
            }
        });
    }

    function generateTurnstileModal() {
        const $modal = $(`
            <aside class="s-modal" id="turnstile-modal" role="dialog" aria-labelledby="turnstile-modal-title" aria-describedby="turnstile-modal-description" aria-hidden="true"
                data-controller="s-modal" data-s-modal-target="modal">
                <div class="s-modal--dialog" role="document">
                    <h1 class="s-modal--header" id="turnstile-modal-title">Not a robot?</h1>
                    <div class="s-modal--body">
                        <p id="turnstile-modal-description">We&lsquo;re running a quick, one-time security check to ensure you&lsquo;re actually a human. This helps us keep our service safe and secure. Once complete, you won't see it again.</p>
                        <div id="turnstile-container" class="d-flex jc-center my16" style="min-height:70px" data-s-modal-target="initialFocus"></div>
                        <p class="fc-error fw-bold js-turnstile-confirmation-error d-none">The check succeeded, but there was a failure when confirming it. Please try again.</p>
                    </div>
                    <div class="d-flex gx8 s-modal--footer">
                        <button class="flex--item s-btn s-btn__filled js-turnstile-try-again" type="button" disabled>Try again</button>
                        <button class="flex--item s-btn" type="button" data-action="s-modal#hide">Cancel</button>
                    </div>
                </div>
            </aside>`);
        return {
            $modal,
            $tryAgainButton: $modal.find(".js-turnstile-try-again"),
            $confirmationError: $modal.find(".js-turnstile-confirmation-error"),
        };
    }
})();

Stacks.addController("chat-turnstile-form-intercept", {
    connect: function () {
        const form = this.element;
        // our controller helper doesn't do Stimulus values
        const force = form.hasAttribute("data-force-turnstile");
        const handler = async function (evt) {
            evt.preventDefault();
            const ok = force ?
                await CHAT.turnstile.forceVerificationAsync() :
                await CHAT.turnstile.isHumanOrNotifyAsync();

            if (ok) {
                form.removeEventListener("submit", handler);
                form.submit();
            }
        }
        form.addEventListener("submit", handler);
    }
});


// End PartialJS/turnstile.js

// End of file



// End PartialJS/masterAndMasterChat.jsbundle

// Begin PartialJS/../third-party/jquery.autocomplete.min.js

/*
 * jQuery Autocomplete plugin 1.2.2
 *
 * Copyright (c) 2009 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * With small modifications by Alfonso Gómez-Arzola.
 * See changelog for details.
 *
 */
;
(function ($) {
    $.fn.extend({
        autocomplete: function (urlOrData, options) {
            var isUrl = typeof urlOrData == "string";
            options = $.extend({}, $.Autocompleter.defaults, {
                url: isUrl ? urlOrData : null,
                data: isUrl ? null : urlOrData,
                delay: isUrl ? $.Autocompleter.defaults.delay : 10,
                max: options && !options.scroll ? 10 : 150,
                noRecord: ""
            }, options);
            options.highlight = options.highlight || function (value) {
                return value
            };
            options.formatMatch = options.formatMatch || options.formatItem;
            return this.each(function () {
                new $.Autocompleter(this, options)
            })
        },
        result: function (handler) {
            return this.bind("result", handler)
        },
        search: function (handler) {
            return this.trigger("search", [handler])
        },
        flushCache: function () {
            return this.trigger("flushCache")
        },
        setOptions: function (options) {
            return this.trigger("setOptions", [options])
        },
        unautocomplete: function () {
            return this.trigger("unautocomplete")
        }
    });
    $.Autocompleter = function (input, options) {
        var KEY = {
            UP: 38,
            DOWN: 40,
            DEL: 46,
            TAB: 9,
            RETURN: 13,
            ESC: 27,
            COMMA: 188,
            PAGEUP: 33,
            PAGEDOWN: 34,
            BACKSPACE: 8
        };
        var globalFailure = null;
        if (options.failure != null && typeof options.failure == "function") {
            globalFailure = options.failure
        }
        var $input = $(input).attr("autocomplete", "off").addClass(options.inputClass);
        var timeout;
        var previousValue = "";
        var cache = $.Autocompleter.Cache(options);
        var hasFocus = 0;
        var lastKeyPressCode;
        var config = {
            mouseDownOnSelect: false
        };
        var select = $.Autocompleter.Select(options, input, selectCurrent, config);
        var blockSubmit;
        navigator.userAgent.indexOf("Opera") != -1 && $(input.form).bind("submit.autocomplete", function () {
            if (blockSubmit) {
                blockSubmit = false;
                return false
            }
        });
        $input.bind((navigator.userAgent.indexOf("Opera") != -1 && !'KeyboardEvent' in window ? "keypress" : "keydown") + ".autocomplete", function (event) {
            hasFocus = 1;
            lastKeyPressCode = event.keyCode;
            switch (event.keyCode) {
                case KEY.UP:
                    if (select.visible()) {
                        event.preventDefault();
                        select.prev()
                    } else {
                        onChange(0, true)
                    }
                    break;
                case KEY.DOWN:
                    if (select.visible()) {
                        event.preventDefault();
                        select.next()
                    } else {
                        onChange(0, true)
                    }
                    break;
                case KEY.PAGEUP:
                    if (select.visible()) {
                        event.preventDefault();
                        select.pageUp()
                    } else {
                        onChange(0, true)
                    }
                    break;
                case KEY.PAGEDOWN:
                    if (select.visible()) {
                        event.preventDefault();
                        select.pageDown()
                    } else {
                        onChange(0, true)
                    }
                    break;
                case options.multiple && $.trim(options.multipleSeparator) == "," && KEY.COMMA:
                case KEY.TAB:
                case KEY.RETURN:
                    if (selectCurrent()) {
                        event.preventDefault();
                        blockSubmit = true;
                        return false
                    }
                    break;
                case KEY.ESC:
                    select.hide();
                    break;
                default:
                    clearTimeout(timeout);
                    timeout = setTimeout(onChange, options.delay);
                    break
            }
        }).focus(function () {
            hasFocus++
        }).blur(function () {
            hasFocus = 0;
            if (!config.mouseDownOnSelect) {
                hideResults()
            }
        }).click(function () {
            if (options.clickFire) {
                if (!select.visible()) {
                    onChange(0, true)
                }
            } else {
                if (hasFocus++ > 1 && !select.visible()) {
                    onChange(0, true)
                }
            }
        }).bind("search", function () {
            var fn = (arguments.length > 1) ? arguments[1] : null;

            function findValueCallback(q, data) {
                var result;
                if (data && data.length) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].result.toLowerCase() == q.toLowerCase()) {
                            result = data[i];
                            break
                        }
                    }
                }
                if (typeof fn == "function") fn(result);
                else $input.trigger("result", result && [result.data, result.value])
            }
            $.each(trimWords($input.val()), function (i, value) {
                request(value, findValueCallback, findValueCallback)
            })
        }).bind("flushCache", function () {
            cache.flush()
        }).bind("setOptions", function () {
            $.extend(true, options, arguments[1]);
            if ("data" in arguments[1]) cache.populate()
        }).bind("unautocomplete", function () {
            select.unbind();
            $input.unbind();
            $(input.form).unbind(".autocomplete")
        });

        function selectCurrent() {
            var selected = select.selected();
            if (!selected) return false;
            var v = selected.result;
            previousValue = v;
            if (options.multiple) {
                var words = trimWords($input.val());
                if (words.length > 1) {
                    var seperator = options.multipleSeparator.length;
                    var cursorAt = $(input).selection().start;
                    var wordAt, progress = 0;
                    $.each(words, function (i, word) {
                        progress += word.length;
                        if (cursorAt <= progress) {
                            wordAt = i;
                            return false
                        }
                        progress += seperator
                    });
                    words[wordAt] = v;
                    v = words.join(options.multipleSeparator)
                }
                v += options.multipleSeparator
            }
            $input.val(v);
            hideResultsNow();
            $input.trigger("result", [selected.data, selected.value]);
            return true
        }

        function onChange(crap, skipPrevCheck) {
            if (lastKeyPressCode == KEY.DEL) {
                select.hide();
                return
            }
            var currentValue = $input.val();
            if (!skipPrevCheck && currentValue == previousValue) return;
            previousValue = currentValue;
            currentValue = lastWord(currentValue);
            if (currentValue.length >= options.minChars) {
                $input.addClass(options.loadingClass);
                if (!options.matchCase) currentValue = currentValue.toLowerCase();
                request(currentValue, receiveData, hideResultsNow)
            } else {
                stopLoading();
                select.hide()
            }
        };

        function trimWords(value) {
            if (!value) return [""];
            if (!options.multiple) return [$.trim(value)];
            return $.map(value.split(options.multipleSeparator), function (word) {
                return $.trim(value).length ? $.trim(word) : null
            })
        }

        function lastWord(value) {
            if (!options.multiple) return value;
            var words = trimWords(value);
            if (words.length == 1) return words[0];
            var cursorAt = $(input).selection().start;
            if (cursorAt == value.length) {
                words = trimWords(value)
            } else {
                words = trimWords(value.replace(value.substring(cursorAt), ""))
            }
            return words[words.length - 1]
        }

        function autoFill(q, sValue) {
            if (options.autoFill && (lastWord($input.val()).toLowerCase() == q.toLowerCase()) && lastKeyPressCode != KEY.BACKSPACE) {
                $input.val($input.val() + sValue.substring(lastWord(previousValue).length));
                $(input).selection(previousValue.length, previousValue.length + sValue.length)
            }
        };

        function hideResults() {
            clearTimeout(timeout);
            timeout = setTimeout(hideResultsNow, 200)
        };

        function hideResultsNow() {
            var wasVisible = select.visible();
            select.hide();
            clearTimeout(timeout);
            stopLoading();
            if (options.mustMatch) {
                $input.search(function (result) {
                    if (!result) {
                        if (options.multiple) {
                            var words = trimWords($input.val()).slice(0, -1);
                            $input.val(words.join(options.multipleSeparator) + (words.length ? options.multipleSeparator : ""))
                        } else {
                            $input.val("");
                            $input.trigger("result", null)
                        }
                    }
                })
            }
        };

        function receiveData(q, data) {
            if (data && data.length && hasFocus) {
                stopLoading();
                select.display(data, q);
                autoFill(q, data[0].value);
                select.show()
            } else {
                hideResultsNow()
            }
        };

        function request(term, success, failure) {
            if (!options.matchCase) term = term.toLowerCase();
            var data = cache.load(term);
            if (data) {
                if (data.length) {
                    success(term, data)
                } else {
                    var parsed = options.parse && options.parse(options.noRecord) || parse(options.noRecord);
                    success(term, parsed)
                }
            } else if ((typeof options.url == "string") && (options.url.length > 0)) {
                var extraParams = {
                    timestamp: +new Date()
                };
                $.each(options.extraParams, function (key, param) {
                    extraParams[key] = typeof param == "function" ? param() : param
                });
                $.ajax({
                    mode: "abort",
                    port: "autocomplete" + input.name,
                    dataType: options.dataType,
                    url: options.url,
                    data: $.extend({
                        q: lastWord(term),
                        limit: options.max
                    }, extraParams),
                    success: function (data) {
                        var parsed = options.parse && options.parse(data) || parse(data);
                        cache.add(term, parsed);
                        success(term, parsed)
                    }
                })
            } else {
                select.emptyList();
                if (globalFailure != null) {
                    globalFailure()
                } else {
                    failure(term)
                }
            }
        };

        function parse(data) {
            var parsed = [];
            var rows = data.split("\n");
            for (var i = 0; i < rows.length; i++) {
                var row = $.trim(rows[i]);
                if (row) {
                    row = row.split("|");
                    parsed[parsed.length] = {
                        data: row,
                        value: row[0],
                        result: options.formatResult && options.formatResult(row, row[0]) || row[0]
                    }
                }
            }
            return parsed
        };

        function stopLoading() {
            $input.removeClass(options.loadingClass)
        }
    };
    $.Autocompleter.defaults = {
        inputClass: "ac_input",
        resultsClass: "ac_results",
        loadingClass: "ac_loading",
        minChars: 1,
        delay: 400,
        matchCase: false,
        matchSubset: true,
        matchContains: false,
        cacheLength: 100,
        max: 1000,
        mustMatch: false,
        extraParams: {},
        selectFirst: true,
        formatItem: function (row) {
            return row[0]
        },
        formatMatch: null,
        autoFill: false,
        width: 0,
        multiple: false,
        multipleSeparator: " ",
        inputFocus: true,
        clickFire: false,
        highlight: function (value, term) {
            return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>")
        },
        scroll: true,
        scrollHeight: 180,
        scrollJumpPosition: true
    };
    $.Autocompleter.Cache = function (options) {
        var data = {};
        var length = 0;

        function matchSubset(s, sub) {
            if (!options.matchCase) s = s.toLowerCase();
            var i = s.indexOf(sub);
            if (options.matchContains == "word") {
                i = s.toLowerCase().search("\\b" + sub.toLowerCase())
            }
            if (i == -1) return false;
            return i == 0 || options.matchContains
        };

        function add(q, value) {
            if (length > options.cacheLength) {
                flush()
            }
            if (!data[q]) {
                length++
            }
            data[q] = value
        }

        function populate() {
            if (!options.data) return false;
            var stMatchSets = {},
                nullData = 0;
            if (!options.url) options.cacheLength = 1;
            stMatchSets[""] = [];
            for (var i = 0, ol = options.data.length; i < ol; i++) {
                var rawValue = options.data[i];
                rawValue = (typeof rawValue == "string") ? [rawValue] : rawValue;
                var value = options.formatMatch(rawValue, i + 1, options.data.length);
                if (typeof (value) === 'undefined' || value === false) continue;
                var firstChar = value.charAt(0).toLowerCase();
                if (!stMatchSets[firstChar]) stMatchSets[firstChar] = [];
                var row = {
                    value: value,
                    data: rawValue,
                    result: options.formatResult && options.formatResult(rawValue) || value
                };
                stMatchSets[firstChar].push(row);
                if (nullData++ < options.max) {
                    stMatchSets[""].push(row)
                }
            };
            $.each(stMatchSets, function (i, value) {
                options.cacheLength++;
                add(i, value)
            })
        }
        setTimeout(populate, 25);

        function flush() {
            data = {};
            length = 0
        }
        return {
            flush: flush,
            add: add,
            populate: populate,
            load: function (q) {
                if (!options.cacheLength || !length) return null;
                if (!options.url && options.matchContains) {
                    var csub = [];
                    for (var k in data) {
                        if (k.length > 0) {
                            var c = data[k];
                            $.each(c, function (i, x) {
                                if (matchSubset(x.value, q)) {
                                    csub.push(x)
                                }
                            })
                        }
                    }
                    return csub
                } else if (data[q]) {
                    return data[q]
                } else if (options.matchSubset) {
                    for (var i = q.length - 1; i >= options.minChars; i--) {
                        var c = data[q.substr(0, i)];
                        if (c) {
                            var csub = [];
                            $.each(c, function (i, x) {
                                if (matchSubset(x.value, q)) {
                                    csub[csub.length] = x
                                }
                            });
                            return csub
                        }
                    }
                }
                return null
            }
        }
    };
    $.Autocompleter.Select = function (options, input, select, config) {
        var CLASSES = {
            ACTIVE: "ac_over"
        };
        var listItems, active = -1,
            data, term = "",
            needsInit = true,
            element, list;

        function init() {
            if (!needsInit) return;
            element = $("<div/>").hide().addClass(options.resultsClass).css("position", "absolute").appendTo(document.body).hover(function (event) {
                if ($(this).is(":visible")) {
                    input.focus()
                }
                config.mouseDownOnSelect = false
            });
            list = $("<ul/>").appendTo(element).mouseover(function (event) {
                if (target(event).nodeName && target(event).nodeName.toUpperCase() == 'LI') {
                    active = $("li", list).removeClass(CLASSES.ACTIVE).index(target(event));
                    $(target(event)).addClass(CLASSES.ACTIVE)
                }
            }).click(function (event) {
                $(target(event)).addClass(CLASSES.ACTIVE);
                select();
                if (options.inputFocus) input.focus();
                return false
            }).mousedown(function () {
                config.mouseDownOnSelect = true
            }).mouseup(function () {
                config.mouseDownOnSelect = false
            });
            if (options.width > 0) element.css("width", options.width);
            needsInit = false
        }

        function target(event) {
            var element = event.target;
            while (element && element.tagName != "LI") element = element.parentNode;
            if (!element) return [];
            return element
        }

        function moveSelect(step) {
            listItems.slice(active, active + 1).removeClass(CLASSES.ACTIVE);
            movePosition(step);
            var activeItem = listItems.slice(active, active + 1).addClass(CLASSES.ACTIVE);
            if (options.scroll) {
                var offset = 0;
                listItems.slice(0, active).each(function () {
                    offset += this.offsetHeight
                });
                if ((offset + activeItem[0].offsetHeight - list.scrollTop()) > list[0].clientHeight) {
                    list.scrollTop(offset + activeItem[0].offsetHeight - list.innerHeight())
                } else if (offset < list.scrollTop()) {
                    list.scrollTop(offset)
                }
            }
        };

        function movePosition(step) {
            if (options.scrollJumpPosition || (!options.scrollJumpPosition && !((step < 0 && active == 0) || (step > 0 && active == listItems.size() - 1)))) {
                active += step;
                if (active < 0) {
                    active = listItems.size() - 1
                } else if (active >= listItems.size()) {
                    active = 0
                }
            }
        }

        function limitNumberOfItems(available) {
            return options.max && options.max < available ? options.max : available
        }

        function fillList() {
            list.empty();
            var max = limitNumberOfItems(data.length);
            for (var i = 0; i < max; i++) {
                if (!data[i]) continue;
                var formatted = options.formatItem(data[i].data, i + 1, max, data[i].value, term);
                if (formatted === false) continue;
                var li = $("<li/>").html(options.highlight(formatted, term)).addClass(i % 2 == 0 ? "ac_even" : "ac_odd").appendTo(list)[0];
                $.data(li, "ac_data", data[i])
            }
            listItems = list.find("li");
            if (options.selectFirst) {
                listItems.slice(0, 1).addClass(CLASSES.ACTIVE);
                active = 0
            }
            if ($.fn.bgiframe) list.bgiframe()
        }
        return {
            display: function (d, q) {
                init();
                data = d;
                term = q;
                fillList()
            },
            next: function () {
                moveSelect(1)
            },
            prev: function () {
                moveSelect(-1)
            },
            pageUp: function () {
                if (active != 0 && active - 8 < 0) {
                    moveSelect(-active)
                } else {
                    moveSelect(-8)
                }
            },
            pageDown: function () {
                if (active != listItems.size() - 1 && active + 8 > listItems.size()) {
                    moveSelect(listItems.size() - 1 - active)
                } else {
                    moveSelect(8)
                }
            },
            hide: function () {
                element && element.hide();
                listItems && listItems.removeClass(CLASSES.ACTIVE);
                active = -1
            },
            visible: function () {
                return element && element.is(":visible")
            },
            current: function () {
                return this.visible() && (listItems.filter("." + CLASSES.ACTIVE)[0] || options.selectFirst && listItems[0])
            },
            show: function () {
                var offset = $(input).offset();
                element.css({
                    width: typeof options.width == "string" || options.width > 0 ? options.width : $(input).width(),
                    top: offset.top + input.offsetHeight,
                    left: offset.left
                }).show();
                if (options.scroll) {
                    list.scrollTop(0);
                    list.css({
                        maxHeight: options.scrollHeight,
                        overflow: 'auto'
                    });
                    if (navigator.userAgent.indexOf("MSIE") != -1 && typeof document.body.style.maxHeight === "undefined") {
                        var listHeight = 0;
                        listItems.each(function () {
                            listHeight += this.offsetHeight
                        });
                        var scrollbarsVisible = listHeight > options.scrollHeight;
                        list.css('height', scrollbarsVisible ? options.scrollHeight : listHeight);
                        if (!scrollbarsVisible) {
                            listItems.width(list.width() - parseInt(listItems.css("padding-left")) - parseInt(listItems.css("padding-right")))
                        }
                    }
                }
            },
            selected: function () {
                var selected = listItems && listItems.filter("." + CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);
                return selected && selected.length && $.data(selected[0], "ac_data")
            },
            emptyList: function () {
                list && list.empty()
            },
            unbind: function () {
                element && element.remove()
            }
        }
    };
    $.fn.selection = function (start, end) {
        if (start !== undefined) {
            return this.each(function () {
                if (this.createTextRange) {
                    var selRange = this.createTextRange();
                    if (end === undefined || start == end) {
                        selRange.move("character", start);
                        selRange.select()
                    } else {
                        selRange.collapse(true);
                        selRange.moveStart("character", start);
                        selRange.moveEnd("character", end);
                        selRange.select()
                    }
                } else if (this.setSelectionRange) {
                    this.setSelectionRange(start, end)
                } else if (this.selectionStart) {
                    this.selectionStart = start;
                    this.selectionEnd = end
                }
            })
        }
        var field = this[0];
        if (field.createTextRange) {
            var range = document.selection.createRange(),
                orig = field.value,
                teststring = "<->",
                textLength = range.text.length;
            range.text = teststring;
            var caretAt = field.value.indexOf(teststring);
            field.value = orig;
            this.selection(caretAt, caretAt + textLength);
            return {
                start: caretAt,
                end: caretAt + textLength
            }
        } else if (field.selectionStart !== undefined) {
            return {
                start: field.selectionStart,
                end: field.selectionEnd
            }
        }
    }
})(jQuery);

// End PartialJS/../third-party/jquery.autocomplete.min.js

// Begin PartialJS/../third-party/jquery.timePicker.js

/*
* A time picker for jQuery
* Based on original timePicker by Sam Collet (http://www.texotela.co.uk) -
* copyright (c) 2006 Sam Collett (http://www.texotela.co.uk)
*
* Dual licensed under the MIT and GPL licenses.
* Copyright (c) 2009 Anders Fajerson
* @name     timePicker
* @version  0.2
* @author   Anders Fajerson (http://perifer.se)
* @example  $("#mytime").timePicker();
* @example  $("#mytime").timePicker({step:30, startTime:"15:00", endTime:"18:00"});
*/

(function ($) {
    $.fn.timePicker = function (options) {
        // Build main options before element iteration
        var settings = $.extend({}, $.fn.timePicker.defaults, options);

        return this.each(function () {
            $.timePicker(this, settings);
        });
    };

    $.timePicker = function (elm, settings) {
        var e = $(elm)[0];
        return e.timePicker || (e.timePicker = new jQuery._timePicker(e, settings));
    };

    $._timePicker = function (elm, settings) {

        var tpOver = false;
        var keyDown = false;
        var startTime = timeToDate(settings.startTime, settings);
        var endTime = timeToDate(settings.endTime, settings);

        $(elm).attr('autocomplete', 'OFF'); // Disable browser autocomplete

        var times = [];
        var time = new Date(startTime); // Create a new date object.
        while (time <= endTime) {
            times[times.length] = formatTime(time, settings);
            time = new Date(time.setMinutes(time.getMinutes() + settings.step));
        }

        var $tpDiv = $('<div class="time-picker' + (settings.show24Hours ? '' : ' time-picker-12hours') + '"></div>');
        var $tpList = $('<ul></ul>');

        // Build the list.
        for (var i = 0; i < times.length; i++) {
            $tpList.append("<li>" + times[i] + "</li>");
        }
        $tpDiv.append($tpList);
        // Append the timPicker to the body and position it.
        var elmOffset = $(elm).offset();
        $tpDiv.appendTo('body').css({ 'top': elmOffset.top, 'left': elmOffset.left }).hide();

        // Store the mouse state, used by the blur event. Use mouseover instead of
        // mousedown since Opera fires blur before mousedown.
        $tpDiv.mouseover(function () {
            tpOver = true;
        }).mouseout(function () {
            tpOver = false;
        });

        $("li", $tpList).mouseover(function () {
            if (!keyDown) {
                $("li.selected", $tpDiv).removeClass("selected");
                $(this).addClass("selected");
            }
        }).mousedown(function () {
            tpOver = true;
        }).click(function () {
            setTimeVal(elm, this, $tpDiv, settings);
            tpOver = false;
        });

        var showPicker = function () {
            if ($tpDiv.is(":visible")) {
                return false;
            }
            $("li", $tpDiv).removeClass("selected");

            // Show picker. This has to be done before scrollTop is set since that
            // can't be done on hidden elements.
            $tpDiv.show();

            // Try to find a time in the list that matches the entered time.
            var time = elm.value ? timeStringToDate(elm.value, settings) : startTime;
            var startMin = startTime.getHours() * 60 + startTime.getMinutes();
            var min = (time.getHours() * 60 + time.getMinutes()) - startMin;
            var steps = Math.round(min / settings.step);
            var roundTime = normaliseTime(new Date(0, 0, 0, 0, (steps * settings.step + startMin), 0));
            roundTime = (startTime < roundTime && roundTime <= endTime) ? roundTime : startTime;
            var $matchedTime = $("li:contains(" + formatTime(roundTime, settings) + ")", $tpDiv);

            if ($matchedTime.length) {
                $matchedTime.addClass("selected");
                // Scroll to matched time.
                $tpDiv[0].scrollTop = $matchedTime[0].offsetTop;
            }
            return true;
        };
        // Attach to click as well as focus so timePicker can be shown again when
        // clicking on the input when it already has focus.
        $(elm).focus(showPicker).click(showPicker);
        // Hide timepicker on blur
        $(elm).blur(function () {
            if (!tpOver) {
                $tpDiv.hide();
            }
        });

        $(elm)['keydown'](function (e) {
            var $selected;
            keyDown = true;
            var top = $tpDiv[0].scrollTop;
            switch (e.keyCode) {
                case 38: // Up arrow.
                    // Just show picker if it's hidden.
                    if (showPicker()) {
                        return false;
                    };
                    $selected = $("li.selected", $tpList);
                    var prev = $selected.prev().addClass("selected")[0];
                    if (prev) {
                        $selected.removeClass("selected");
                        // Scroll item into view.
                        if (prev.offsetTop < top) {
                            $tpDiv[0].scrollTop = top - prev.offsetHeight;
                        }
                    }
                    else {
                        // Loop to next item.
                        $selected.removeClass("selected");
                        prev = $("li:last", $tpList).addClass("selected")[0];
                        $tpDiv[0].scrollTop = prev.offsetTop - prev.offsetHeight;
                    }
                    return false;
                    break;
                case 40: // Down arrow, similar in behaviour to up arrow.
                    if (showPicker()) {
                        return false;
                    };
                    $selected = $("li.selected", $tpList);
                    var next = $selected.next().addClass("selected")[0];
                    if (next) {
                        $selected.removeClass("selected");
                        if (next.offsetTop + next.offsetHeight > top + $tpDiv[0].offsetHeight) {
                            $tpDiv[0].scrollTop = top + next.offsetHeight;
                        }
                    }
                    else {
                        $selected.removeClass("selected");
                        next = $("li:first", $tpList).addClass("selected")[0];
                        $tpDiv[0].scrollTop = 0;
                    }
                    return false;
                    break;
                case 13: // Enter
                    if ($tpDiv.is(":visible")) {
                        var sel = $("li.selected", $tpList)[0];
                        setTimeVal(elm, sel, $tpDiv, settings);
                    }
                    return false;
                    break;
                case 27: // Esc
                    $tpDiv.hide();
                    return false;
                    break;
            }
            return true;
        });
        $(elm).keyup(function (e) {
            keyDown = false;
        });
        // Helper function to get an inputs current time as Date object.
        // Returns a Date object.
        this.getTime = function () {
            return timeStringToDate(elm.value, settings);
        };
        // Helper function to set a time input.
        // Takes a Date object.
        this.setTime = function (time) {
            elm.value = formatTime(normaliseTime(time), settings);
            // Trigger element's change events.
            $(elm).change();
        };

    }; // End fn;

    // Plugin defaults.
    $.fn.timePicker.defaults = {
        step: 30,
        startTime: new Date(0, 0, 0, 0, 0, 0),
        endTime: new Date(0, 0, 0, 23, 30, 0),
        separator: ':',
        show24Hours: true
    };

    // Private functions.

    function setTimeVal(elm, sel, $tpDiv, settings) {
        // Update input field
        elm.value = $(sel).text();
        // Trigger element's change events.
        $(elm).change();
        elm.focus();
        // Hide picker
        $tpDiv.hide();
    }

    function formatTime(time, settings) {
        var h = time.getHours();
        var hours = settings.show24Hours ? h : (((h + 11) % 12) + 1);
        var minutes = time.getMinutes();
        return formatNumber(hours) + settings.separator + formatNumber(minutes) + (settings.show24Hours ? '' : ((h < 12) ? ' AM' : ' PM'));
    }

    function formatNumber(value) {
        return (value < 10 ? '0' : '') + value;
    }

    function timeToDate(input, settings) {
        return (typeof input == 'object') ? normaliseTime(input) : timeStringToDate(input, settings);
    }

    function timeStringToDate(input, settings) {
        if (input) {
            var array = input.split(settings.separator);
            var hours = parseFloat(array[0]);
            var minutes = parseFloat(array[1]);

            // Convert AM/PM hour to 24-hour format.
            if (!settings.show24Hours) {
                if (hours === 12 && input.substr('AM') !== -1) {
                    hours = 0;
                }
                else if (hours !== 12 && input.indexOf('PM') !== -1) {
                    hours += 12;
                }
            }
            var time = new Date(0, 0, 0, hours, minutes, 0);
            return normaliseTime(time);
        }
        return null;
    }

    /* Normalise time object to a common date. */
    function normaliseTime(time) {
        time.setFullYear(2001);
        time.setMonth(0);
        time.setDate(0);
        return time;
    }

})(jQuery);

// End PartialJS/../third-party/jquery.timePicker.js

// Begin PartialJS/../third-party/jquery.highlight-3.yui.js

jQuery.fn.highlight=function(b){function a(e,j){var l=0;if(e.nodeType==3){var k=e.data.toUpperCase().indexOf(j);if(k>=0){var h=document.createElement("span");h.className="highlight";var f=e.splitText(k);var c=f.splitText(j.length);var d=f.cloneNode(true);h.appendChild(d);f.parentNode.replaceChild(h,f);l=1}}else{if(e.nodeType==1&&e.childNodes&&!/(script|style)/i.test(e.tagName)){for(var g=0;g<e.childNodes.length;++g){g+=a(e.childNodes[g],j)}}}return l}return this.each(function(){a(this,b.toUpperCase())})};jQuery.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;with(this.parentNode){replaceChild(this.firstChild,this);normalize()}}).end()};

// End PartialJS/../third-party/jquery.highlight-3.yui.js

// Begin PartialJS/topbar.js

/*!
  * klass: a classical JS OOP façade
  * https://github.com/ded/klass
  * License MIT (c) Dustin Diaz & Jacob Thornton 2012
  */
!function (name, context, definition) {
    if (typeof define == 'function') define(definition)
    else if (typeof module != 'undefined') module.exports = definition()
    else context[name] = definition(context)
}('klass', this, function (context) {
    context = context || this;
    var old = context.klass
      , f = 'function'
      , fnTest = false && /xyz/.test(function () { xyz }) ? /\bsupr\b/ : /.*/
      , proto = 'prototype'

    function klass(o) {
        return extend.call(isFn(o) ? o : function () { }, o, 1)
    }

    function isFn(o) {
        return typeof o === f
    }

    function wrap(k, fn, supr) {
        return function () {
            var tmp = this.supr
            this.supr = supr[proto][k]
            var undef = {}.fabricatedUndefined
            var ret = undef
            try {
                ret = fn.apply(this, arguments)
            } finally {
                this.supr = tmp
            }
            return ret
        }
    }

    function process(what, o, supr) {
        for (var k in o) {
            if (o.hasOwnProperty(k)) {
                what[k] = isFn(o[k])
                  && isFn(supr[proto][k])
                  && fnTest.test(o[k])
                  ? wrap(k, o[k], supr) : o[k]
            }
        }
    }

    function extend(o, fromSub) {
        // must redefine noop each time so it doesn't inherit from previous arbitrary classes
        function noop() { }
        noop[proto] = this[proto]
        var supr = this
          , prototype = new noop()
          , isFunction = isFn(o)
          , _constructor = isFunction ? o : this
          , _methods = isFunction ? {} : o
        function fn() {
            if (this.initialize) this.initialize.apply(this, arguments)
            else {
                fromSub || isFunction && supr.apply(this, arguments)
                _constructor.apply(this, arguments)
            }
        }

        fn.methods = function (o) {
            process(prototype, o, supr)
            fn[proto] = prototype
            return this
        }

        fn.methods.call(fn, _methods).prototype.constructor = fn

        fn.extend = extend;
        fn[proto].implement = fn.statics = function (o, optFn) {
            o = typeof o == 'string' ? (function () {
                var obj = {}
                obj[o] = optFn
                return obj
            }()) : o
            process(this, o, supr)
            return this
        }

        return fn
    }

    klass.noConflict = function () {
        context.klass = old
        return this
    }

    return klass
});

window.StackExchange = {}

StackExchange.init = (function () {
    return function(options) {
        StackExchange.options = options;
        options.serverTimeOffsetSec = options.serverTime - (new Date()).getTime() / 1000;
    }
})();

StackExchange.helpers = (function () {
    var helpers = { // the result object

        addSpinner: function (appendToSelector, cssProperties) {
            $(appendToSelector).append(helpers.getSpinnerImg(cssProperties));
        },

        getSpinnerImg: function (cssProperties) {
            var jImg = $('<img class="ajax-loader" src="/content/img/progress-dots.gif" title="loading..." alt="loading..." />');

            if (cssProperties)
                jImg.css(cssProperties);

            return jImg;
        },

        removeSpinner: function () {
            $("img.ajax-loader").remove();
        },

        showErrorPopup: function (appendTo, msg, isFading) {
            // Kill old error messages
            $('.error-notification').remove();

            ///	<summary>
            ///     Shows a message to the user in an attention-grabbing box.
            ///	</summary>
            ///	<param name="appendTo" type="Object">
            ///     A string or jQuery object that identifies the element to append the popup message box onto.
            /// </param>
            ///	<param name="msg" type="String">
            ///     A short message to the user.
            /// </param>
            ///	<param name="isFading" type="Boolean">
            ///     Optional boolean that will make the displayed popup fade away quickly, instead of forcing a user click to dismiss.
            /// </param>

            var jDiv = $(
                '<div class="error-notification supernovabg">' +
                    '<h2>' + msg + '</h2>' +
                    (isFading ? '' : '<span class="error-close">(click on this box to dismiss)</span>') +
                '</div>'
            );
            var remove = function () { jDiv.fadeOutAndRemove(); }

            $(appendTo).append(jDiv);

            jDiv
                .click(remove)
                .fadeIn("fast");

            setTimeout(remove, (isFading ? Math.max(2500, msg.length * 40) : 1000 * 30));
        },

        removeErrorPopup: function () {
            $('.error-notification').fadeOutAndRemove();
        }

    }; // end helpers
    return helpers;

})();  // end of the closure

StackExchange.topbar = (function () {

    // trying out this inheritance helper - https://github.com/ded/klass - located in stub.js

    /*
        Base class of any dialog to be displayed when clicking a topbar button.
    */
    var Dialog = klass({ // declare instance variables
        name: '',
        url: '',
        cssClass: '', // needed for $loadingPlaceholders

        button: null,

        $dialog: null,
        $loadingPlaceholder: null,
        $preloadedDialog: null,

        hasRead: false
    })
    .statics({
        $corral: $('.js-topbar-dialog-corral') // accessed via Dialog.$corral; DOM entry point for any fetched dialogs
    })
    .methods({

        isLoading: function () {
            return this.$loadingPlaceholder != null;
        },

        isLoaded: function () {
            return this.$dialog != null;
        },

        isVisible: function () {
            var $div = this.$dialog || this.$loadingPlaceholder;
            return $div != null && $div.is(':visible');
        },

        toggle: function (showOrHide, preventMarkAsRead) {
            if (typeof showOrHide != 'boolean') {
                throw new Error('showOrHide is a required parameter');
            }

            if (!showOrHide) { // hide

                // someone got impatient with a long-running request
                if (this.isLoading()) {
                    // so hide the placeholder
                    this.showOrHide(false);
                    return;
                }

                // never clicked this dialog? no work to be done! (this happens when calling hideAll)
                if (!this.isLoaded()) {
                    return;
                }
            }

            if (this.isLoaded() || this.isLoading()) {

                // only clear the unread indicators (icon count + item highlighting) when closing content we've seen
                if (!showOrHide && !preventMarkAsRead && this.hasRead) {
                    this.markAsRead();
                }

                // toggle the already-loaded dialog or the loading placeholder
                this.showOrHide(showOrHide);
            }
            else if (this.$preloadedDialog) {
                // sometimes we want a dialog to be extra responsive, so we'll preload most of it..
                // then, we'll load its extraneous content when clicked, e.g. the "all sites" list in the site switcher
                // note: this.$dialog will be set to this.$preloadedDialog on the first click
                this.loadChildContent();
            }
            else {
                this.loadDialog();
            }

            // when showing this dialog, others should be hidden
            if (showOrHide) {
                for (var i = 0; i < buttons.length; i++) {
                    if (this.button != buttons[i]) {
                        buttons[i].toggle(false, preventMarkAsRead);
                    }
                }
            }
        },

        showOrHide: function (showOrHide) {
            var $div = this.$dialog || this.$loadingPlaceholder;
            if ($div) {
                $div.toggle(showOrHide);
            }

            if (showOrHide && this.$dialog) { // assume user will now have viewed the real dialog
                this.hasRead = true;
            }
        },

        loadChildContent: function () {
            var $childContent = this.$preloadedDialog.find('.child-content');
            this.$dialog = this.$preloadedDialog;

            this.positionDialogUnderButton();
            this.showOrHide(true);

            if (!this.url) return;

            $('<div>', { 'class': 'child-content-loading' }).append(StackExchange.helpers.getSpinnerImg()).appendTo($childContent);

            var thisDialog = this;

            this.fetchUrl().done(function (html) {
                $childContent.html(html);
                thisDialog.afterLoad();
            });
        },

        loadDialog: function () {
            if (this.isLoading()) return;

            this.$loadingPlaceholder = this.getLoadingPlaceholder().appendTo(Dialog.$corral);
            this.positionDialogUnderButton();
            this.showOrHide(true);

            var thisDialog = this;

            this.fetchUrl()
                .done(function (html) {
                    if (!html.length) {
                        StackExchange.helpers.showErrorPopup(thisDialog.button.$button.parent(), 'An error occurred while loading - please try again.');
                    } else {
                        thisDialog.$dialog = $(html).appendTo(Dialog.$corral);
                        thisDialog.afterLoad();

                        // because the user could toggle the placeholder, its visibilty takes precedence over the original intent
                        var showOrHide = thisDialog.$loadingPlaceholder.is(':visible');

                        thisDialog.positionDialogUnderButton();
                        thisDialog.showOrHide(showOrHide);
                    }
                })
                .fail(function (xhr, text, error) {
                    console.log(error);
                })
                .always(function () {
                    thisDialog.$loadingPlaceholder.remove();
                    thisDialog.$loadingPlaceholder = null;
                });
        },

        afterLoad: function () {
            // inheritors may override, but should call this.supr()

            // TODO - fix tracking?
            // TRACK ALL THE THINGS
            //StackExchange.gps.bindTrackClicks(this.$dialog);
        },

        getLoadingPlaceholder: function () {
            var imgHtml = $('<div/>').append(StackExchange.helpers.getSpinnerImg()).html();
            var html = [
                '<div class="topbar-dialog ', this.cssClass, ' dno">',
                    '<div class="header">', imgHtml, '</div>',
                    '<div class="modal-content"/>',
                '</div>'
            ];
            return $(html.join(''));
        },

        positionDialogUnderButton: function () {
            if (window.location.hostname.indexOf('stackoverflow') > -1) {
                // Taken from the main site code

                // because the mod inbox button isn't with all the rest (and is in a different, absolutely-positioned container), 
                // we have to take measurements from the first button on the page and move the others over
                var top = this.button.$button.outerHeight(),
                    elem = this.$dialog || this.$loadingPlaceholder,
                    positioningParent = elem.parent();

                // can't use jquery's offsetParent() because it relies on the browser's Element.offsetParent which
                // returns null for display:none elements
                while (positioningParent.not("body").length && positioningParent.css("position") === "static")
                    positioningParent = positioningParent.parent();

                positioningParent = positioningParent.length ? positioningParent : $("body");

                var y = this.button.$button.offset().left - positioningParent.offset().left;
                y = positioningParent.outerWidth() - y - this.button.$button.outerWidth();
                var css = { 'top': top, 'right': y };
                (this.$dialog || this.$loadingPlaceholder).css(css);
            } else {
                // because the mod inbox button isn't with all the rest (and is in a different, absolutely-positioned container), 
                // we have to take measurements from the first button on the page and move the others over
                var top = this.button.$button.outerHeight(),
                    left = this.button.$button.offset().left - buttons[0].$button.offset().left;

                (this.$dialog || this.$loadingPlaceholder).css({ 'top': top, 'left': left });
            }
        },

        fetchUrl: function () {
            log('fetching ' + this.url);

            var result = $.ajax({
                type: 'GET',
                url: this.url,
                dataType: 'html'
            });

            return result;
        },

        markAsRead: function () {
            this.button.markAsRead();

            if (this.isLoaded()) {
                this.$dialog.find('.unread-item').removeClass('unread-item');
            }
        },

        handleRealtimeMessage: function (json) {
            // inheritors may override, but by default, just make the next click fetch fresh
            this.clearLoadedDialog();
        },

        clearLoadedDialog: function () {
            if (this.isLoaded()) {
                this.$dialog.remove();
                this.$dialog = null;
                this.hasRead = false;
            }
        }
    });

    /*
        Base class of icon buttons in the topbar, e.g. the Inbox button,
        that allows loading and displaying its associated Dialog.
    */
    var Button = klass({ // declare instance variables

        // these will be set in inheritors' declarations
        name: '',
        selector: '',
        dialog: null,

        // these will be set during initialize
        $button: null,
        onClass: '',
        unreadCountPrefix: '',
        queuedUnreadCount: 0,
        showsOnMouseOver: false
    })
    .methods({
        initialize: function () { // automatically called by klass during construction

            this.dialog.name = name;
            this.dialog.button = this;
            dialogs.push(this.dialog);

            // "this" inside the jquery click event is the clicked element
            var thisButton = this;
            this.$button = $(this.selector);
            this.$button.click(function () { thisButton.toggle(); return false; /* prevent navigation */ });

            // if any of the network-level dialogs are visible, mousing over another network button will show it
            if (this.showsOnMouseOver) {
                this.$button.mouseover(function (e) {
                    thisButton.showOnMouseOver();
                });
            }

            this.onClass = 'topbar-icon-on' + (this.onClass ? ' ' : '') + this.onClass;
        },

        toggle: function (showOrHide, preventMarkAsRead) {
            showOrHide = typeof showOrHide == 'boolean' ? showOrHide : !this.$button.hasClass(this.onClass);
            this.$button.toggleClass(this.onClass, showOrHide);
            this.dialog.toggle(showOrHide, preventMarkAsRead);
        },

        showOnMouseOver: function () {
            // https://meta.stackoverflow.com/questions/210177/dont-require-a-click-to-switch-between-sites-inbox-and-achievements-on-the-ne
            var shouldShow = false;

            // find out if any buttons/dialogs are visible
            for (var i = 0; i < buttons.length; i++) {
                var b = buttons[i];
                if (b != this && b.showsOnMouseOver && b.isOn()) {
                    shouldShow = true;
                    break;
                }
            }

            if (shouldShow) {
                // quickly moving between button/dialog pairs shouldn't clear unread indicators
                this.toggle(true, /*preventMarkAsRead*/true);
            }
        },

        isOn: function () {
            return this.$button.hasClass(this.onClass);
        },

        markAsRead: function () {
            this.$button.find('.unread-count').fadeOut();

            var unreadClass = this.$button.data('unread-class');
            if (unreadClass) {
                this.$button.removeClass(unreadClass);
            }

            this.dequeuePendingUnreadCount();
        },

        dequeuePendingUnreadCount: function () {
            if (!this.queuedUnreadCount) return;

            this.setUnreadCount(this.queuedUnreadCount);
            this.queuedUnreadCount = 0;
            this.dialog.clearLoadedDialog();
        },

        setUnreadCount: function (value) {
            if (value === undefined) {
                // do nothing
            }
            else if (value <= 0) {
                this.queuedUnreadCount = 0;

                if (!this.isOn()) { // don't muck w/ counts if we're viewing
                    this.markAsRead();
                }
            }
            else if (value > 0) {

                if (this.isOn()) {
                    this.queuedUnreadCount = value;
                }
                else {
                    var $count = this.$button.find('.unread-count');
                    $count.text(this.unreadCountPrefix + value).fadeIn();

                    this.addUnreadClass();

                    this.dialog.clearLoadedDialog();
                }
            }
        },

        addUnreadClass: function () {
            var unreadClass = this.$button.data('unread-class');
            if (unreadClass) {
                this.$button.addClass(unreadClass);
            }
        },

        handleRealtimeMessage: function (json) {
            // inheritors may override
        }
    });


    // subclasses of the above, organized by dialog/button pairing (i had to declare dialogs first, so buttons could instantiate them)

    var SiteSwitcherDialog = Dialog.extend({
        url: '/topbar/site-switcher',
        cssClass: 'siteSwitcher-dialog',

        $searchItems: null
    })
    .methods({

        afterLoad: function () {
            // NOTE: this is after the child content (i.e. the filterable site list) is loaded

            // allow filtering of sites
            this.$dialog.find('.js-site-filter-txt').typeWatch({ highlight: false, wait: 250, captureLength: -1, callback: $.proxy(this.filterSites, this) });
            this.$searchItems = this.$dialog.find('.js-other-sites li').clone().map(function () {
                return { title: $('.site-icon', this).attr('title').toLowerCase(), description: $('.site-desc', this).text().toLowerCase(), hostname: $('a', this).first().attr('href'), li: this };
            });

            // set up scrolling to the bottom of the 2nd site in the full list on search box focus
            var dialog = this.$dialog;
            this.$dialog.find('.js-site-filter-txt').focus(function () {
                var dialogBottom = dialog.offset().top + dialog.height();
                var secondSite = dialog.find('.other-sites li:nth-child(2)');
                var secondSiteBottom = secondSite.offset().top + secondSite.height();

                if (secondSiteBottom > dialogBottom) {
                    dialog.animate({
                        scrollTop: dialog.scrollTop() + secondSiteBottom - dialogBottom
                    }, 750);
                }
            });

            this.supr();
        },

        doSearch: function (items, text, track) {
            var results;
            text = text.toLowerCase();
            var matches = [];
            $.each(items, function (i, elem) {
                var result = { index: i, li: elem.li, item: elem },
                    titleIndex = elem.title.indexOf(text);

                if (elem.title == text) // exact title match
                    result.priority = 1;
                else if (titleIndex == 0) // begins-with title match
                    result.priority = 2;
                else if (titleIndex > -1) // in-title match
                    result.priority = 3;
                else if (elem.description.indexOf(text) > -1) // in-description match
                    result.priority = 4;
                else if (elem.hostname.indexOf(text) > -1) // in hostname match
                    result.priority = 5;

                if (result.priority)
                    matches.push(result);
            });
            results = matches.sort(function (a, b) {
                return a.priority - b.priority || a.index - b.index;
            });

            return results;
        },

        filterSites: function (text) {
            var $container = $('.js-other-sites'),
                $items = this.$searchItems;

            $container.empty();

            if (text != '') {
                $items = this.doSearch($items, text, true);
            }

            $container.append($items.map(function (elem) { return this && this.li || elem.li; }));
        }
    });
    var SiteSwitcherButton = Button.extend({
        name: 'SiteSwitcher',
        selector: '.js-site-switcher-button',
        dialog: new SiteSwitcherDialog(),
        showsOnMouseOver: true,
        onClass: window.location.hostname.indexOf('stackoverflow') > -1 ? 'site-switcher-button-on' : 'icon-site-switcher-on'
    });


    var InboxDialog = Dialog.extend({
        url: '/topbar/inbox',
        cssClass: 'inbox-dialog'
    });
    var InboxButton = Button.extend({
        name: 'Inbox',
        selector: '.js-inbox-button',
        dialog: new InboxDialog(),
        showsOnMouseOver: true
    })
    .methods({
        handleRealtimeMessage: function (json) {
            this.setUnreadCount(json.UnreadInboxCount);
        }
    });;


    var AchievementsDialog = Dialog.extend({
        url: '/topbar/achievements',
        cssClass: 'achievements-dialog'
    })
    .methods({
        afterLoad: function () {
            this.alignRep();
            this.bindDateGroupToggles();
            this.displayUtcTime();
            this.supr();
        },

        alignRep: function () {
            // HACK: everyone be hatin' on <table>, so we need to ensure the rep "column" is the same width all the way down
            var $cols = this.$dialog.find('.js-items .js-faux-column'),
                maxChars = 0;

            $cols.filter('.js-rep-change').each(function () {
                var chars = $.trim($(this).text()).length;
                if (chars > maxChars) {
                    maxChars = chars;
                }
            });

            if (maxChars > 0) {
                $cols.width(maxChars * 6); // TODO: actually measure what we really need, but this works from 2 chars up to 4 chars
            }
        },

        bindDateGroupToggles: function () {
            this.$dialog.find('.js-date-group-toggle').click(function () {
                var $toggle = $(this),
                    $group = $toggle.closest('.js-date-group'),
                    $items = $group.find('.js-items'),
                    $summation = $group.find('.rep-site-container');

                $toggle.find('.date-group-toggle').toggleClass('toggle-hidden');
                $items.add($summation).fadeToggle('fast');
            });
            this.$dialog.find('.rep-site-container').on('click', function (e) {
                e.stopImmediatePropagation();
            });
        },

        displayUtcTime: function () {
            var $dialog = this.$dialog,
                setTime = function () {
                    var now = new Date();
                    now.setTime(now.getTime() + StackExchange.options.serverTimeOffsetSec * 1000);
                    var h = now.getUTCHours(),
                        m = now.getUTCMinutes();
                    if (h < 10) h = "0" + h;
                    if (m < 10) m = "0" + m;
                    $dialog.find('.js-utc-time').text(h + ":" + m);
                };

            setTime();
            setInterval(setTime, 1000 * 60); // TODO: could unbind this when the dialog is hidden
        }
    });
    var AchievementsButton = Button.extend({
        name: 'Achievements',
        selector: '.js-achievements-button',
        dialog: new AchievementsDialog(),
        unreadCountPrefix: '+',
        showsOnMouseOver: true
    })
    .methods({
        handleRealtimeMessage: function (json) {
            // this is tricky, as the icon can light up when there's been no rep changes (e.g. new badge)
            // start by determining if we only need to light up
            var onlyLightUp = (json.UnreadRepCount || 0) === 0 && json.UnreadNonRepCount > 0;

            if (onlyLightUp) {
                this.addUnreadClass();
            }
            else {
                this.setUnreadCount(json.UnreadRepCount);
            }
        }
    });

    function log(message) {
        if (!StackExchange.options.enableLogging) return;
        console.log('topbar: ' + message);
    };

    function isButtonClick(clickedElement) {
        for (var i = 0; i < buttons.length; i++) {
            var $button = buttons[i].$button;
            if ($button && $button[0] == clickedElement) {
                return true;
            }
        }
        return false;
    };

    function hideAll() {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].toggle(false);
        }
    };

    function handleRealtimeMessage(data) {
        var json;
        if (!data || !(json = JSON.parse(data))) return;

        log('realtime message - ' + data);

        // each top-level property on the json corresponds to a button name
        for (var prop in json) {
            for (var i = 0; i < buttons.length; i++) {
                if (prop == buttons[i].name) {
                    buttons[i].handleRealtimeMessage(json[prop]);
                    break;
                }
            }
        }
    };

    // so we can iterate over the above klasses
    var buttons = [],
        dialogs = [];

    return {
        init: function (options) {
            StackExchange.init(options);
            
            if (!Dialog.$corral.length) { // "klass" object "statics" initialized before dom ready
                Dialog.$corral = $('.js-topbar-dialog-corral');
            }

            if (window.devicePixelRatio >= 1.5) {
                $('.js-avatar-me').attr('src', function (i, a) {
                    return a.replace('?s=24', '?s=48');
                });
            }

            // these string names, e.g. 'Inbox', will be used in realtime messages
            var inbox = new InboxButton();
            var achievements = new AchievementsButton();
            buttons.push(new SiteSwitcherButton());
            buttons.push(inbox);
            buttons.push(achievements);

            // clicking anywhere else closes dialogs
            $(document).click(function (e) {
                if (!isButtonClick(e.target) && !$.contains(Dialog.$corral[0], e.target)) {
                    hideAll();
                }
            });

            $.get("/topbar/get-unread-counts", function (data) {
                if (!data) return;

                inbox.handleRealtimeMessage(data);
                achievements.handleRealtimeMessage(data);
            });
        },

        hideAll: hideAll,
        handleRealtimeMessage: handleRealtimeMessage
    };
})();

// End PartialJS/topbar.js

// Begin PartialJS/accesscontrol.js

/* accesscontrol.js */
;
function roomAccessControl(roomId, mod) {

    var fkey = $("input[name='fkey']").attr("value");

    function addButton(usercard) {
        $("<a/>").addClass("dropdown-button button change-user-access").attr("href", "#")
            .css({ position: "absolute", bottom: 2, left: 2}).appendTo(usercard).append("<div class='img' />");
    }

    function makeForm(userid) {
        var form = $("<form/>").attr("action", "/rooms/setuseraccess/" + roomId).attr("method", "post").append(
            $("<input/>").attr("type", "hidden").attr("name", "fkey").val(fkey));
        if (userid != undefined)
            $("<input/>").attr("type", "hidden").attr("name", "aclUserId").val(userid).appendTo(form);
        return form;
    }

    var accessTypes =
    {
        "remove": "no special access",
        "read-only": "read access",
        "read-write": "write access",
        "moderation": "moderator",
        "owner": "owner"
    };
    var accessAction =
    {
        "read-only": "grant read access",
        "read-write": "grant write access",
        "moderation": "make moderator",
        "owner": "make owner"
    };

    // Beginning with jQuery 1.7, delegated events simulate bubbling; in other words,
    // even though they are actually click event handlers on the document that are bound
    // after this one, the button click event handlers will be called first.
    // Hence we have to catch the click all the way at the beginning of the bubbling. That's
    // why we delegate to "*" and use a boolean to check if we have already handled this
    // round of the event loop.
    var bubbly = false;
    $(document).on("click", "*", function(evt) {
        if (bubbly)
            return;
        if ($(evt.target).closest(".popup").length == 0) // the click was *not* on a popup
            $(".popup").remove();
        bubbly = true;
        setTimeout(function () { bubbly = false; }, 0);
    });

    $(".usercard").each(function() {
        addButton(this);
    });

    $(document).on("click", ".change-user-access", function (evt) {
        evt.preventDefault();
        var userid = $(this).closest(".usercard").attr("id").replace(/(?:access-)?user-/, "");
        var currentAccess = $(this).closest(".access-section").attr("id").replace("access-section-", "");
        var card = $(this).closest(".usercard");
        var pos = card.position();
        pos.left += 20;
        pos.top += 38;
        pos.position = "absolute";
        var menu = $("<div/>").addClass("popup").css(pos).hide().insertBefore($(this).closest(".usercard"));
        $("<h3/>").text("Access for " + $(this).closest(".usercard").find(".username").text()).appendTo(menu);
        if (window.userKeys && userid in userKeys) {
            var key = userKeys[userid];
            var keydiv = $("<div/>").appendTo(menu);
            if (key) {
                keydiv.text("Key: " + key);
                menu.css({ width: "auto" });
            } else {
                keydiv.text("Key: none");
            }
            $("<form/>").attr("action", "/rooms/makeFeedKey").attr("method", "post").append(
                $("<input/>").attr("type", "hidden").attr("name", "fkey").val(fkey)).append(
                $("<input/>").attr("type", "hidden").attr("name", "userId").val(userid)).append(
                $("<input/>").attr("type", "hidden").attr("name", "roomId").val(roomId)).append(
                $("<input/>").attr("type", "submit").val("create new key").addClass("button")
            ).appendTo(keydiv);

        }

        var form = makeForm(userid).appendTo(menu);
        var isAddUser = $(this).closest("#add-user-search-result").length;
        for (key in accessTypes) {
            var isCurrent = key == currentAccess;

            // We only support this option in one room type and in that context they can just use the access control tab.
            // If room moderators become a more broadly used feature, it will make sense to revisit this and make the code
            // room-feature aware.
            if (!isCurrent && key == 'moderation') { continue; }

            var id = key + "-radio";
            $('<input name="userAccess" type="radio"/>').attr('id', id).val(key).prop('checked', isCurrent).appendTo(form);
            $('<label/>').attr('for', id).text(" " + accessTypes[key]).css('font-weight', isCurrent && !isAddUser ? 'bold' : 'normal').appendTo(form);
            $("<br/>").appendTo(form);
        }
        $("<span><input class=\"button\" type=\"submit\" value=\"change\"/> </span>").appendTo(form);
        $("<span class=\"button\">cancel</span>").click(function () { menu.remove() }).appendTo(form);
        menu.slideDown(200);
    });

    function loadUsers(searchstring) {
        var target = $("#add-user-search-result");
        target.empty().append($("<img/>").attr("src", IMAGE("ajax-loader.gif")));
        $("#add-user-search-result").load("/users",
            { filter: searchstring.toLowerCase(), mini: true, nofade: true },
            function (response, status, xhr) {
                if (status == 'success') {
                    accessType = $("#add-user-search-result").closest(".access-section").attr("id").replace("access-section-", "");
                    $("#add-user-search-result .usercard").each(function () {
                        addButton(this);
                    });
                }
            }
        );
    }

    $(document).on("click", ".add-user-button", function (evt) {
        accessType = $(this).closest(".access-section").attr("id").replace("access-section-", "");
        var menu = $("<div/>").addClass("popup").css({ width: 735, position: "absolute", right: 100, top: 20, overflow: "visible" /* so the dropdown isn't cut off */ })
            .appendTo($(this).closest(".access-section"));

        $("<h3/>").text("Add a new user to the " + accessTypes[accessType] + " list").appendTo(menu);
        var form = makeForm().appendTo(menu);
        $("<input type=\"hidden\" name=\"userAccess\" />").val(accessType).appendTo(form);
        if (!mod) {
            $("<p>Please note, <strong>you can only add users in the following cases</strong>:</p><ul><li>They have already visited <em>" + location.hostname + "</em>.</li><li>They have sufficient reputation to talk in chat (&gt;20 reputation).</li></ul>").appendTo(form);
        }
        var directInput = $("<p>If you have it, enter the <strong>user id</strong> or the user's <strong>profile URL</strong> here: <input type=\"text\" name=\"aclUserId\"/> <input class=\"button\" type=\"submit\" value=\"" + accessAction[accessType] + "\"/></p>").appendTo(form);
        var grantButton = directInput.find(".button");
        var search_p = $("<p>Otherwise" + (mod ? ", if they have already visited " + location.hostname + " before, you can" : "") + " search for their <b>user name</b>: </p>").appendTo(menu);
        var searchbox = $("<input/>").attr("type", "text").appendTo(search_p).bind("change keyup click", function () {
            if ($(this).val())
                grantButton.css("visibility", "hidden");
            else
                grantButton.css("visibility", "visible");
        });

        var userlist = $("<div/>").attr("id", "add-user-search-result").appendTo(menu);
        $("<div class=\"clear-both\"/>").appendTo(menu);
        $("<span class=\"button\">cancel</span>").click(function () { menu.remove() }).appendTo(menu);

        searchbox.keyup(function (evt) {
            if (evt.which == 13) loadUsers(searchbox.val());
        }).typeWatch({ callback: loadUsers, wait: 500, captureLength: 2 })
    });

}

// End PartialJS/accesscontrol.js

// Begin PartialJS/cardxxl.js

/* cardxxl.js */
;
function SymmetricList(jMain, jContainer, headerText) { // sorry, no better idea for the function name
    $(".subtabs a", jMain).click(function (evt) {
        evt.preventDefault();
        var clicked = $(this);
        var loader = $("<img/>").attr("src", IMAGE("ajax-loader.gif")).css("float", "left").prependTo(jMain.find(".subtabs"));
        jContainer.load(clicked.attr("href"), function () {
            initCycling();
            loader.remove();
            jMain.find(".subtabs a").removeClass("youarehere");
            clicked.addClass("youarehere");
        });
    });
}


// End PartialJS/cardxxl.js

// Begin PartialJS/roomindex.js

; /* roomindex.js */
var pageData = pageData || {};

function InitUserIndex(tabKey, sortKey, pageSize, page) {
    InitIndexPage(tabKey, sortKey, pageSize, page, '/users', '#userlist', ".username, .user-message-info");
}

function InitRoomIndex(tabKey, sortKey, pageSize, page, nohide, host, userId) {
    pageData.tabKey = tabKey;
    pageData.sortKey = sortKey;
    pageData.pageSize = pageSize;
    pageData.page = page;
    pageData.host = host;
    pageData.userId = userId;

    initCycling();
    cycle();
    doEllipsis();

    if (arguments.length > 0) {
        var otherData = {};
        if (nohide) otherData["nohide"] = true;
        if (host && host.length) otherData["host"] = host;
        InitIndexPage(tabKey, sortKey, pageSize, page, '/rooms', '#roomlist', ".room-name, .room-description, .room-header .tag", showCancelInvite, otherData);
        $(".join-link").click(function () {
            $.post($(this).attr("href"), fkey({ quiet: true }), function (url) { window.location = url; });
            return false;
        });
    }
    function toggleFavorite() {
        var el = $(this);
        var id = el.closest(".js-room-card, .roomcard-xxl").attr("id").replace("room-", "");

        var $allFavoriteBtns = $(".js-room-card[id='room-" + id + "'], .roomcard-xxl[id='room-" + id + "']").find(".favorite");
        var $allUnFavoriteBtns = $(".js-room-card[id='room-" + id + "'], .roomcard-xxl[id='room-" + id + "']").find(".unfavorite");
        $allFavoriteBtns.toggleClass("d-none");
        $allUnFavoriteBtns.toggleClass("d-none");

        $.post("/rooms/favorite", fkey({ roomId: id }), function (data) {
            if (!data) {
                return;
            } else if (data.isAnonymous && data.loginUrl) {
                document.location.href = data.loginUrl;
            } else if (data.isFavorite) {
                $allFavoriteBtns.addClass("d-none");
                $allUnFavoriteBtns.removeClass("d-none");
            } else {
                $allFavoriteBtns.removeClass("d-none");
                $allUnFavoriteBtns.addClass("d-none");
            }
        });
    }

    function showCancelInvite() {
        if (tabKey == 'invited') {
            $("#roomlist .roomcard").append($("<span/>").addClass("btn-delete").addClass("cancel-invite").attr("title", "ignore this invite"));
        }
    }

    function removeCard($card) {
        $card.animate({ opacity: 0.00, width: '0px', height: '0px' }, 800, function () { $card.remove(); });
    }

    showCancelInvite();
    $(document).on("click", ".favorite-room-vote", toggleFavorite);
    $(document).on("click", ".cancel-invite", function () {
        var room = $(this).closest(".roomcard");
        var roomId = room.attr("id").replace("room-", "");

        $.post("/users/cancel-invite", fkey({ roomid: roomId }), function () { removeCard(room); });
    });

    $(document).on("click", ".js-ignore-invite", function () {
        var $roomCard = $(this).closest(".js-room-card");
        var roomId = $roomCard.attr("id").replace("room-", "");

        $.post("/users/cancel-invite", fkey({ roomid: roomId }), function () { removeCard($roomCard); });
    })

    $(document).on("click", "#site-select", function (evt) {
        selectStackSite(evt, 0, false, function (host) {
            location.href = $("#site-select").attr("href") + '&host=' + encodeURIComponent(host);
        });
        return false;
    });

    setupSiteFilter();
    setupTagFilter();
}
function initCycling() {
    $(".cycle").each(function () {
        var el = $(this);
        var children = el.children();
        el.removeClass("cycle");
        if (children.length < 2) {
            return;
        }
        el.addClass("cycling");
        var height = -1;
        children.each(function () {
            var child = $(this);
            var first = height == -1;
            height = Math.max(height, child.height());
            child.css({ position: "absolute", opacity: first ? 1 : 0, zIndex: first ? 1 : 0 });
        });
        el.css({ height: height });
    });
}
function cycle() {
    setInterval(function () {
        var hovering;
        try {
            hovering = $(".cycling:hover"); // IE7 doesn't support this and throws an error, so IE7 users won't get the benefit of no-cycle-on-hover
        } catch (ex) {
            hovering = $([]);
        }
        $(".cycling").each(function () {
            var visible_now, visible_next;
            var el = $(this);
            if (hovering.filter(el).length > 0)
                return;
            var children = el.children();
            children.each(function () {
                var child = $(this);
                if (child.css("opacity") > .5)
                    visible_now = child;
                else if (visible_now && !visible_next)
                    visible_next = child;
            });
            if (!visible_next)
                visible_next = children.eq(0);
            // it's not improbable that the child wasn't fully layed out when the maximum height was calculated
            // in initCycling, so we make sure height;
            if (visible_next.height() > el.height())
                el.animate({ height: visible_next.height() }, 1000);
            visible_now.animate({ opacity: 0 }, 1000).css("z-index", 0);
            visible_next.animate({ opacity: 1 }, 1000).css("z-index", 1);
        });
    }, 5000);
}

function getFilterVal() {
    return $("#search").val();
}

function getTagFilterVal() {
    const renderedStrings = $('.js-tag-list').children('.rendered-element').map(function (_, b) {
        return $(b).text();
    }).get().join();
    return renderedStrings;
}

function InitIndexPage(tabKey, sortKey, pageSize, page, url, listObj, resultSelector, loadCallback, additionalData) {
    var origQuery = $("#search").val();

    if (origQuery != "") {
        $(resultSelector).highlight(origQuery);
    }

    var doSearch = function () {
        var val = getFilterVal();
        var tags = getTagFilterVal();
        
        var data = {
            tab: tabKey,
            sort: sortKey,
            filter: val,
            tagFilter: tags,
            pageSize: pageSize,
            page: (val == origQuery ? page : undefined)
        };

        if (additionalData)
            for (var key in additionalData)
                data[key] = additionalData[key];

        $(listObj).load(url, data, function(response, status, xhr) {
            if (status == 'success') {
                initCycling();
                doEllipsis();
                var results = $(resultSelector);
                if (val && val.length > 0 && results.length > 0) { results.highlight(val); }
                if (loadCallback) loadCallback();
            }
        });
    };

    $("#search").keyup(function (evt) {
        if (evt.which == 13) {
            doSearch();
        }
    }).typeWatch({
        callback: doSearch,
        wait: 250,
        captureLength: -1
    });

    $(window).on('tagschanged', function (e) {
        doSearch();
    });
}

function initScheduleInfo(roomId, isOwner, userId) {
    function getId(el) {
        return $(el).closest(".meeting").attr("id").replace("meeting-", "");
    }
    function updateAttendeeCount(jMeeting) {
        var count = jMeeting.find(".attendees .usercard").length;
        jMeeting.find("span.attendee-count").text(
            count == 0 ? "No users have" :
            count == 1 ? "One user has" :
                count + " users have"
        );
    }
    $(function () {
        var long_weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        $(".local-time-placeholder").each(function () {

            var jThis = $(this).removeClass("local-time-placeholder"),
                epoch = parseInt(jThis.attr("data-time")),
                when,
                time, min;

            if (!isFinite(epoch))
                return;

            when = new Date(epoch * 1000);
            min = when.getMinutes();
            time = when.getHours() + ":" + (min < 10 ? "0" : "") + min;
            jThis.text(" (in your timezone, that's " + time + " on " + long_weekdays[when.getDay()] + ")");

        });
        if (isOwner) {
            $("#firstTime").timePicker({ step: 15 });
            $(".meeting .btn-delete").click(function () {
                var meeting = $(this).closest(".meeting");
                var calendar = meeting.find(".icon");

                if (confirm("This will delete this item from the schedule; are you sure?\n\nIf there is a corresponding event in the parent site, it will not be removed automatically.")) {
                    $.post('/rooms/schedule/delete/' + roomId, fkey({ meetingId: getId(this) }), function () {
                        if (calendar.length && meeting.next(".meeting").find(".calendar").length == 0) {
                            calendar.prependTo(meeting.next(".meeting"));
                        }
                        meeting.slideUp(function () { meeting.remove(); });
                    });
                }
            });
        }
        $(".sched-reg").click(async function () {
            if (!await CHAT.turnstile.isHumanOrNotifyAsync()) {
                return;
            }
            var button = $(this);
            var meeting = button.closest(".meeting");
            var otherButton = meeting.find(".sched-unreg");
            meeting.find(".ajax-loader").show();
            $.post('/rooms/schedule/reg/' + roomId, fkey({ meetingId: getId(this) }), function (response) {
                var attendees = meeting.find(".attendees");
                if (attendees.length == 0) {
                    var infodiv = meeting.find(".meeting-info");
                    attendees = $("<div class=\"attendees\" />").appendTo(infodiv);
                    $("<div class=\"clear-both\" />").appendTo(infodiv);
                }
                $(response).hide().appendTo(attendees).slideDown();
                meeting.find(".ajax-loader").hide();
                button.hide();
                otherButton.show();
                updateAttendeeCount(meeting);
            });
        });
        $(".sched-unreg").click(async function () {
            if (!await CHAT.turnstile.isHumanOrNotifyAsync()) {
                return;
            }
            var button = $(this);
            var meeting = button.closest(".meeting");
            var otherButton = meeting.find(".sched-reg");
            var usercardId = meeting.attr("id") + "-user-" + userId;
            meeting.find(".ajax-loader").show();
            $.post('/rooms/schedule/unreg/' + roomId, fkey({ meetingId: getId(this) }), function () {
                $("#" + usercardId).slideUp(function () { $(this).remove(); updateAttendeeCount(meeting); });
                meeting.find(".ajax-loader").hide();
                button.hide();
                otherButton.show();
            });
        });
    });
}
function initSearchScreen(setFocus) {
    $("#user").autocomplete('/users/search', {
        formatItem: function (txt) { return $.parseJSON(String(txt)).dn; },
        formatResult: function (txt) { return $.parseJSON(String(txt)).id; },
        max: 20
    });
    $("#room").autocomplete('/rooms/search', {
        formatItem: function (txt) { return $.parseJSON(String(txt)).name; },
        formatResult: function (txt) { return $.parseJSON(String(txt)).id; }
    });
    $(".searchroom .btn-delete").click(function () {
        $(".searchroom").remove();
        $("#room").val("").removeClass("hidden");
    });
    $(".searchuser .btn-delete").click(function () {
        $(".searchuser").remove();
        $("#user").val("").removeClass("hidden");
    });
    if (setFocus) $("#q").focus();
}

function doEllipsis() {
    var sel = "div.roomcard > .room-header > .room-description, div.usercard-mini > .user-header > .user-message-info";
    $(sel).each(function () {
        Ellipsis($(this));
    });
}

// This function makes the following assumptions: jEl is a block-level element with only a text child,
// and has overflow: hidden
function Ellipsis(jEl) {
    var desiredHeight = jEl.height();
    var fullText = jEl.text();
    var child = $("<div/>").text(fullText);
    jEl.empty().append(child);
    if (child.height() <= desiredHeight) {
        child.remove();
        jEl.text(fullText);
        return;
    }
    var a = 0, c = fullText.length;
    var b;
    var partialText;
    while (a < c) {
        b = Math.round((a + c) / 2);
        partialText = fullText.substr(0, b);
        child.text(partialText + "&hellip;");
        if (child.height() <= desiredHeight)
            a = b;
        else
            c = b - 1;
    }
    partialText = fullText.substr(0, a);
    child.remove();
    jEl.text(partialText + "\u2026");
}

/* maybe a bit lazy to dump here, but these are some utility methods used by **every** page */
function initBasicPage(title, minRep, sysMessage, showWelcomeBar, isBeginnerRoomEnabled, isStackOverflow, isStackExchange) {
    initSearchBox();
    notify = Notifier().notify;


    if(sysMessage) notify(sysMessage);
    if (showWelcomeBar && !$.cookie("x")) {

        var msg;
        var beginnerRoomTitle;

        if (isBeginnerRoomEnabled) {
            if (isStackOverflow) {
                beginnerRoomTitle = "Stack Overflow Lobby";
            } else if (isStackExchange) {
                beginnerRoomTitle = "Stack Exchange Lobby";
            }
        }

        if (isBeginnerRoomEnabled && beginnerRoomTitle) {
            msg = notify(`Welcome to ${title} chat! 
            The <b>${beginnerRoomTitle}</b> is a chat room open to <b>all users</b> and is a beginner-friendly space to start chatting. 
            <b>And while you're at it, check out the <a href=\"/faq\">FAQ</a>!`)
        } else {
            msg = notify(`Welcome to ${title} chat! 
                This site is moderated by the community, so please be respectful of your fellow ${title} users. 
                And while you're at it, check out the <a href=\"/faq\">FAQ</a>!`)
        }
        msg.find("a").add(".notify-close-info").click(function() {
            $.cookie("x", "0", { expires: 90, path: "/" });
        });
    }
    return { notify: notify };
}

function setupSiteFilter() {
    var showSites = function (data) {
        if (data && data.length) {
            pageData.sites = data;

            $('.js-site-filter').autocomplete(data, {
                minChars: 0,
                width: 310,
                matchContains: "word",
                autoFill: false,
                formatItem: function (row, i, max) {
                    return '<img class="icon-16" src="' + row.SiteIcon + '"/> ' + htmlEncode(row.SiteCaption);
                },
                formatMatch: function (row, i, max) {
                    return htmlEncode(row.SiteCaption + " " + row.Host);
                },
                formatResult: function (row) {
                    return row.Host;
                }
            }).result(function log(event, site, formatted) {
                if (site) {
                    var hostHtml = '<img class="svg-icon w16 h16" src="' + site.SiteIcon + '"/> ' + htmlEncode(site.SiteCaption);
                    $('.js-site-filter-site-text').html(hostHtml);

                    location.href = '/rooms?tab=all&host=' + encodeURIComponent(site.Host);
                }
            }).focus();
        } else {
            $('.js-site-filter').attr('disabled', 'disabled');
        }
    };

    $('.js-site-filter-toggle').on('click', function () {
        if (!pageData.sites) {
            $.get("/rooms/sites", showSites);
        } else {
            showSites(pageData.sites);
        }
    });
}

function setupTagFilter() {
    var updateTags = function (clear = false) {
        if (clear) {
            $(".js-tag-hide").addClass("d-none");
            $('.js-tag-list').html('');
        } else {
            const prevTags = $('.js-tag-list').children('.rendered-element').map(function (_, b) {
                return $(b).text();
            }).get();
            var newTags = $("#tagFilter").val().split(/\s+/).filter(function (val) {
                return val.length != 0 && !prevTags.includes(val);
            });

            newTags.forEach((tag) => {
                $('.js-tag-list, .js-tag-list-copy').append('<span class="rendered-element s-tag pr6 fc-theme-secondary-400 bg-theme-secondary-100 bc-theme-secondary-100">' + htmlEncode(tag) + '</span>');
            })
            $('.js-tag-filter-text').html(newTags.length + prevTags.length);
            $(".js-tag-hide").removeClass("d-none");
        }
        $(".js-tag-filter").val('');
        $("#popover-tag-filter").removeClass('is-visible');
    };

    $(".js-tag-filter").autocomplete('/tags/search', {
        minChars: 1,
        matchContains: "word",
        autoFill: false,
        multiple: true,
        multipleSeparator: " ",
        clickFire: true,
        extraParams: { host: $("#room-host-input").val() },
        formatResult: function (row) {
            return '';
        },
        formatItem: function (row) {
            return '<a class="s-tag">' + htmlEncode(row) + '</a>';
        }
    }).result(function () {
        updateTags();
        var evt = $.Event('tagschanged');
        $(window).trigger(evt);
    });

    $(".js-tag-clear").on('click', function () {
        updateTags(true);
    });
}

function isEmpty(val) {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

function sendAnalytics(event, data) {
    const formData = new FormData();
    formData.append("fKey", fkey());
    formData.append("data", JSON.stringify(data));
    formData.append("event", event);

    // This is equivalent to: Navigator.sendBeacon() method
    // except this gives us a way to attach headers too.
    fetch("/stackevent", {
        method: "POST",
        keepalive: true,
        body: formData
    }).then(() => { });
}

function sendRoomEvent(eventName, roomId) {
    var $roomCard = $('js-room-card-' + roomId);
    var $favoriteButton = $roomCard.find('.js-favorite');
    var isStarred = $favoriteButton.hasClass('favorite-room');

    var isFiltered = !isEmpty(getFilterVal()) || !isEmpty(getTagFilterVal());

    var isEligible = $roomCard.data('data-is-eligible');

    sendAnalytics(eventName, {
        source: window.location.href,
        view: pageData.tabKey,
        sortType: pageData.sortKey,
        pageNumber: pageData.page,
        pageSize: pageData.pageSize,
        isFiltered: isFiltered,

        roomId: roomId,

        isStarred: isStarred,
        isEligible: isEligible
    });
}

function sendGenericEvent(eventName, extraData) {
    var isFiltered = isEmpty(getFilterVal()) || isEmpty(getTagFilterVal());

    sendAnalytics(eventName, {
        source: window.location.href,
        view: pageData.tabKey,
        sortType: pageData.sortKey,
        pageNumber: pageData.page,
        pageSize: pageData.pageSize,
        isFiltered: isFiltered,

        referrer: window.location.href
    });
}

$(function () {
    // Room click
    $('.js-room-card-title a').on('click', function () {
        var $roomCardTitle = $(this);
        var $roomCard = $roomCardTitle.closest('.js-room-card');
        var roomId = $roomCard.data('room-id');

        sendRoomEvent("chat.landing_page.room_click", roomId);
    });

    // More Info click
    $('.js-room-card-more-info').on('click', function () {
        var $roomCardTitle = $(this);
        var $roomCard = $roomCardTitle.closest('.js-room-card');
        var roomId = $roomCard.data('room-id');

        sendRoomEvent("chat.landing_page.room_more_info_click", roomId);
    });

    // Star click
    $('.js-favorite').on('click', function () {
        var $roomCardTitle = $(this);
        var $roomCard = $roomCardTitle.closest('.js-room-card');
        var roomId = $roomCard.data('room-id');

        sendRoomEvent("chat.landing_page.star", roomId);
    });

    // Read FAQ Link click
    $('.js-faq-link').on('click', function () {
        sendGenericEvent("chat.user.read_faq_click");
    });
});


// End PartialJS/roomindex.js

// Begin PartialJS/surveybanner.js

function sendAnalytics(event, data) {
    const formData = new FormData();
    formData.append("fKey", fkey());
    formData.append("data", JSON.stringify(data));
    formData.append("event", event);

    // This is equivalent to: Navigator.sendBeacon() method
    // except this gives us a way to attach headers too.
    fetch("/stackevent", {
        method: "POST",
        keepalive: true,
        body: formData
    }).then(() => { });
}

function surveyVote(didUpVote, reputation, creationDate) {
    $('.js-explore-survey').addClass('d-none');
    $.post("/users/set-pref/52", fkey());

    sendAnalytics('chat.survey_banner_vote', {
        source: window.location.href,

        didUpVote,
        reputation,
        accountCreationDate: creationDate
    });

    $('.js-followup-survey').removeClass('d-none');
}

$(function () {
    $('.js-dismiss-banner').on('click', function () {
        $.post("/users/set-pref/52",  fkey());
        $('.js-survey-banner').addClass('d-none');
    });

    $('.js-survey-url').on('click', function () {
        $.post("/users/set-pref/52", fkey());
        $('.js-survey-banner').addClass('d-none');
    });
});

// End PartialJS/surveybanner.js

// Begin PartialJS/bulkdelete.js

(function () {

    var BulkDelete = CHAT.BulkDelete;
    var deleteCount = 0;
    var unDeleteCount = 0;

    BulkDelete.selectAll = function (parent) {
        let checkboxes = document.getElementsByName("select-item");
        checkboxes.forEach(i => {
            if ((parent.checked && !i.checked) || (!parent.checked && i.checked)) {
                i.click();
            }
        });
    }

    BulkDelete.deleteAll = function () {
        let checkboxes = $(".js-select-item:checked");
        let values = Array.from(checkboxes).map(checkbox => checkbox.value);
        $.post("/messages/bulk-delete", fkey({ ids: values }), function () {
            window.location.reload();
        });
    }

    BulkDelete.undeleteAll = function () {
        let checkboxes = $(".js-select-item:checked");
        let values = Array.from(checkboxes).map(checkbox => checkbox.value);
        $.post("/messages/bulk-undelete", fkey({ ids: values }), function () {
            window.location.reload();
        });
    }

    BulkDelete.applyFilter = function () {

        let diffInMs = Date.parse($(".js-end-date")[0].value) - Date.parse($(".js-start-date")[0].value);
        let diffInDays = diffInMs / (1000 * 60 * 60 * 24);

        if (diffInDays > 365)
        {
            alert("Date range must be no greater than 1 year");
            return;
        }

        var startDate = new Date($(".js-start-date")[0].value + " 12:00:01 AM").toISOString();
        var endDate = new Date($(".js-end-date")[0].value + " 11:59:59 PM").toISOString();

        const queryParamValues = {
            includeDeleted: encodeURIComponent($(".js-include-deleted")[0].checked),
            startDate,
            endDate,
        }

        const searchParams = new URLSearchParams(queryParamValues);

        $(".js-room-ids")[0].value.split(",").forEach(id => {
            searchParams.append("roomIds", id.trim());
        });

        

        let userId = $(".js-user-id")[0].value;

        window.location.replace(`/users/get-messages/${encodeURIComponent(userId)}?${searchParams.toString()}`);
    }

    BulkDelete.rowSelected = function (selectedRow) {
        if (selectedRow.checked) {
            if (selectedRow.dataset.isdeleted === "True") {
                unDeleteCount++;
            } else {
                deleteCount++;
            }
        } else {
            if (selectedRow.dataset.isdeleted === "True") {
                unDeleteCount--;
            } else {
                deleteCount--;
            }
        }

        if (deleteCount > 0 && unDeleteCount == 0) {
            $('.js-delete-bulk-messages').attr('aria-disabled', 'false');
            $('.js-undelete-bulk-messages').attr('aria-disabled', 'true');
            $('.js-undelete-bulk-messages').attr('title', 'To undelete either select deleted messages or deselect messages that have not been deleted');
        } else if (deleteCount == 0 && unDeleteCount > 0) {
            $('.js-undelete-bulk-messages').attr('aria-disabled', 'false');
            $('.js-delete-bulk-messages').attr('aria-disabled', 'true');
            $('.js-delete-bulk-messages').attr('title', 'To delete either select existing messages or deselect messages that have already been deleted');
        } else {
            $('.js-undelete-bulk-messages').attr('aria-disabled', 'true');
            $(".js-undelete-bulk-messages").removeAttr("title");
            $('.js-delete-bulk-messages').attr('aria-disabled', 'true');
            $(".js-delete-bulk-messages").removeAttr("title");
        }
    }

})();

Stacks.addController("chat-bulkdelete-intercept", {
    connect: function () {
        const deleteBtn = this.element;

        const handler = async function (evt) {
            evt.preventDefault();
            CHAT.BulkDelete.deleteAll();
            deleteBtn.removeEventListener("click", handler);
        }

        deleteBtn.addEventListener("click", handler);
    }
});


Stacks.addController("chat-bulkundelete-intercept", {
    connect: function () {
        const unDeleteBtn = this.element;

        const handler = async function (evt) {
            evt.preventDefault();
            CHAT.BulkDelete.undeleteAll();
            unDeleteBtn.removeEventListener("click", handler);
        }

        unDeleteBtn.addEventListener("click", handler);
    }
});

Stacks.addController("chat-applyfilter-intercept", {
    connect: function () {
        const filterBtn = this.element;

        const handler = async function (evt) {
            evt.preventDefault();
            CHAT.BulkDelete.applyFilter();
            filterBtn.removeEventListener("click", handler);
        }

        filterBtn.addEventListener("click", handler);
    }
});

Stacks.addController("chat-selectitem-intercept", {
    connect: function () {
        const selectedRow = this.element;

        const handler = async function () {
            CHAT.BulkDelete.rowSelected(selectedRow);
        }

        selectedRow.addEventListener("click", handler);
    }
});

// End PartialJS/bulkdelete.js

// End of file


