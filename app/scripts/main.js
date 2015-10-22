// DOM ready:
$(function () {
	$('html').removeClass('no-js');

	// Init common modules
	app.mods.Parllax.Init();
	app.mods.Lettering.Init();
	app.mods.SVGInjector.Init();
});

var app = app || {
	vars: {
	},
	mods: {
		Parllax: {
			selector: '#scene',
			Init: function () {
				$(this.selector).parallax();
			}
		},
		SVGInjector: {
			Init: function () {
				// Elements to inject
				var mySVGsToInject = document.querySelectorAll('img.svg-inject');

				// Options
				var injectorOptions = {
					evalScripts: 'once',
					pngFallback: '/Content/Images'
				};

				// Trigger the injection
				SVGInjector(mySVGsToInject, injectorOptions, function (totalSVGsInjected) {
				});
			}
		},
		Lettering: {
			selector: '.lettering',
			Init: function () {
				$(this.selector).lettering('lines');
			}
		},
		GA: {
			TrackPageView: function (href) {
				if (typeof _gaq !== 'undefined') {
					_gaq.push(['_trackPageview', href]);
				} else if (typeof ga !== 'undefined') {
					ga('send', 'pageview', href);
				}
			},
			TrackEvent: function (category, action, label, value) {
				if (typeof _gaq !== 'undefined') {
					_gaq.push(['_trackEvent', category, action, label, value]);
				} else if (typeof ga !== 'undefined') {
					ga('send', 'event', category, action, label, value);
				}
			},
			TrackSocial: function (socialNetwork, socialAction, socialTarget, opt_pagePath) {
				if (typeof _gaq !== 'undefined') {
					_gaq.push(['_trackSocial', socialNetwork, socialAction, socialTarget, opt_pagePath]);
				} else if (typeof ga !== 'undefined') {
					ga('send', 'social', socialNetwork, socialAction, socialTarget, { 'page': opt_pagePath });
				}
			}
		},
	}
};
