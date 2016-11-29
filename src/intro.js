/*!
 * <%= meta.title %> v<%= meta.version %>
 * Docs & License: <%= meta.homepage %>
 * (c) <%= meta.copyright %>
 * (c) 2015 Tanguy Pruvot
 */

(function(factory) {
	if (typeof define === 'function' && define.amd) {
		define([ 'jquery', 'moment' ], factory);
	}
	else if (typeof exports === 'object') { // Node/CommonJS
		module.exports = factory(require('jquery'), require('moment'));
	}
	else {
		factory(jQuery, moment);
	}
})(function($, moment) {
