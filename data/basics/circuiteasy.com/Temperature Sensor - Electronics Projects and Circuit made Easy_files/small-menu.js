jQuery(document).ready(function($){var $masthead=$('#heatmapthemead-primary-menu'),$masthead2=$('#heatmapthemead-secondary-menu')
timeout=false;if($('#heatmapthemead-primary-sidebar-container').length){if($('#heatmapthemead-primary-sidebar-container').outerHeight()<$('#heatmapthemead-the-content-container').outerHeight()){$("body").addClass("heatmapthemead-long-content");}}
$.fn.smallPrimaryMenu=function(){$masthead.find('.site-navigation').removeClass('main-navigation').addClass('main-small-navigation');$masthead.find('.site-navigation p').removeClass('primary-small-nav-text').addClass('primary-menu-toggle');$('.primary-menu-toggle').unbind('click').click(function(){$masthead.find('.menu').toggle();$(this).toggleClass('toggled-on');});};$.fn.smallSecondaryMenu=function(){$masthead2.find('.site-navigation').removeClass('secondary-navigation').addClass('secondary-small-navigation');$masthead2.find('.site-navigation p').removeClass('secondary-small-nav-text').addClass('secondary-menu-toggle');$('.secondary-menu-toggle').unbind('click').click(function(){$masthead2.find('.menu').toggle();$(this).toggleClass('toggled-on');});};if($(window).width()<=800){$.fn.smallPrimaryMenu();$.fn.smallSecondaryMenu();}
$(window).resize(function(){var browserWidth=$(window).width();if(false!==timeout)
clearTimeout(timeout);timeout=setTimeout(function(){if(browserWidth<=800){$.fn.smallPrimaryMenu();$.fn.smallSecondaryMenu();}else{$masthead.find('.site-navigation').removeClass('main-small-navigation').addClass('main-navigation');$masthead.find('.site-navigation p').removeClass('menu-toggle').addClass('primary-small-nav-text');$masthead.find('.menu').removeAttr('style');$masthead2.find('.site-navigation').removeClass('secondary-small-navigation').addClass('secondary-navigation');$masthead2.find('.site-navigation p').removeClass('menu-toggle').addClass('secondary-small-nav-text');$masthead2.find('.menu').removeAttr('style');}},0);});});