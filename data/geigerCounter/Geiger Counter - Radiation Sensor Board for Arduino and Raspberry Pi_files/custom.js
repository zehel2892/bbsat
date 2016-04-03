/* js Cooking-Hacks */


var $j = jQuery.noConflict();
$j(document).ready(function ($) {


    //Tutorials: Show | hide code
    $('.code button').click(function(){

        //Toggle visibility
        $(this).parent().next().toggle('slow');

        //Change button text
        if($(this).text() == 'Show code'){
            //$('.code_tools').next().height('auto');
            //$('.code_tools').next().animate({height : 'auto'}, 500);

            $(this).text('Hide code');
        }
        else{
            $(this).text('Show code');
        }
    });

    //Initial state for collapsed elements
    $('.code_tools').next().hide();

    //Select all the text
    jQuery.fn.selectText = function(){
        var doc = document
                , element = this[0]
                , range, selection
                ;
        if (doc.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        } else if (window.getSelection) {
            selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };

    //Button for select all
    $('.cms_page').on('click', '.action_all', function(){
        $(this).parent().prev().selectText();
    });

    //Add buttons for copy and select all
    /*
     $('.code').append('<div class="code_tools_bottom">' +
     '<a class="btn btn-info btn-xs action_all">Select all</a>&nbsp;&nbsp;' +
     '<a class="btn btn-info btn-xs action_download">Download</a>' +
     '</div>');
     */
    $('.code').append('<div class="code_tools_bottom">' +
            '<a class="btn btn-info btn-xs action_all">Select all</a>&nbsp;&nbsp;' +
            '</div>');


    /*
     //Lazyload ##########################
     /*
     $('.cms_page img').each(function(index){
     var img_src = $(this).attr('src');
     $(this).attr('data-original', img_src);
     $(this).attr('width', '200px');
     $(this).attr('height', '200px');
     });
     
     $.getScript('//cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js',function(){
     $('.cms_page img').lazyload({});
     });
     */



    //Gallery ##########################
    //wrap the img with the code to open the lightbox
    $('.lb').each(function(index){
        //Get big image name
        var photo_small = $(this).attr('data-src') ? $(this).attr('data-src') : $(this).attr('src');
        var photo_big = photo_small.replace('_small','_big');

        //Photo title
        var photo_title = '';
        if($(this).attr('alt')){
            photo_title = $(this).attr('alt');
        }

        //Thumbnail border
        var thumbnail_class = '';
        if($(this).hasClass('border_yes')){
            thumbnail_class = 'thumbnail';
        }

        //Wrap image with a link
        $(this).wrap(function(){
            return '<a id="img_'+ index +'" href="'+ photo_big +'" class="lb_photo '+thumbnail_class+'" rel="set_1" title="'+ photo_title +'"></a>';
        });
    });


    $('.lb_photo').fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        beforeShow: function() {
            // Render tweet button
            //console.log(this);
            this.title += '<div><a href="#img_'+ this.index +'" class="btn btn-primary btn-xs" onclick="jQuery.fancybox.close()">Go to image in the document</a></div>';
        },

        helpers: {
            title: {
                type: 'inside'
            }
        }
    });

    $('.lb-gallery a').fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',

        helpers: {
            title: {
                type: 'inside'
            }
        }
    });

    //Go to index ##########################
    $('.section_title h2').each(function(index){
        if(!$(this).hasClass('nogotoindex')){
            var tmp_text;
            tmp_text = $(this).html() +' <a href="#index" class="pull-right goto">Go to index <span class="glyphicon glyphicon-arrow-up"></span></a>';
            $(this).html(tmp_text);
        }
    });

    //Text justified
    $('.cms_page p').not('.no_justify').addClass('text-justify');

    //Code highlight ##########################
    jQuery('.code pre').each(function(i, e) { hljs.highlightBlock(e) });

    //Remove wishlist and compare buttons
    $('.link-compare').remove();
    $('.link-wishlist').remove();

    removeColShoppingCart($('th.cart-edit'));
    removeColShoppingCart($('th.wishlist'));
    function removeColShoppingCart($el) {
        if ($el.length <= 0) {
            return;
        }
        var index = $el.index();
        var $trs = $el.parents('table').find('tbody tr');
        $trs.each(function(i, val) {
            var $tds = $(val).find('td');
            $tds.get(index).remove();
        });
        $el.remove();
    }

    //Megamenu
    //Replace text
    $('#yt_sidenav span:first').text('Shop by Components');

    $('#yt_sidenav li.level0 > a + ul').after ('<span class="touch-item change">open</span>');	//header

    if ($('.is-blog').length > 0) {
        $('#yt_sidenav li.level0 > a + ul').hide();
        $('.touch-item.change').removeClass('change');
        $('.touch-item.change').click();
        //console.log('blog');
        //$('.is-blog').on('click', '#fffff', fumc)
    }

    //Add class parent-item
    $('.icon_appears-parent').addClass('parent-item');

    //Search results
    //$('.note-msg').addClass('<div class="alert alert-warning"></div>');

    //Product page
    // Short Description
    if($('.short-description').html() != null) {
        var read_more = '';
        if($('.short-description').html().length > 1000){
            read_more = ' [...]';
        }
        //console.log(read_more);
        $('.short-description').html($('.short-description').html().substring(0, 1000).split(" ").slice(0, -1).join(" "));
        $('.short-description').html($('.short-description').html() + read_more);
    }

    /*
    var bundle_flag = $('.price-as-configured');
    if (bundle_flag.length > 0) {

        $('<p class="price-box"><span class="old-price">Price of the items separately: <span class="price"></span></span></p>').insertAfter('.product-shop > .price-box');


        var updateBundleRealPrice = function() {

            var total = 0;
            $('#product_addtocart_form :checked').each(function(count, el) {

                var $el = $(el);
                var realprice = $el.data('realprice');
                var multiply_by = $el.parents('dd').find('.qty-holder input').val();
                var multiply_factor = 1;
                if (!isNaN(multiply_by)) {
                    multiply_factor = parseFloat(multiply_by);
                }

                if (realprice && !isNaN(realprice)) {
                    total = +(Math.round( parseFloat(total) + (parseFloat(realprice) * multiply_factor)  + "e+2")  + "e-2");
                }
            });

            $('.old-price .price').text('€' + total);

        };

        updateBundleRealPrice();
        $('#product_addtocart_form :input').on('change', updateBundleRealPrice);


    }
    */

    // Discount-kit
    var discount = $('#discount-product');
    if (discount.length > 0) {

        discount.hide();

        var total_discounted = discount.data('discount');
        var target_discounted = $('.price-as-configured .price');

        function calculate_old_price(new_price, discount) {
            var old_price;

            old_price = (parseFloat(new_price) * 100) / (100 - parseFloat(discount));
            return +(Math.round(parseFloat(old_price) + "e+2")  + "e-2");
        };


        $('<span class="old-price"><span class="price"></span></span>').insertAfter('.price-as-configured .full-product-price');

        var updatePrice = function() {
            var new_price_text = target_discounted.text();
            var new_price = new_price_text.substr(1);
            var old_price = calculate_old_price(new_price, total_discounted);
            // target_discounted.text('€' + old_price);
            //console.log(old_price);

            $('.old-price .price').text('€' + old_price);
        };

        $('#product_addtocart_form :input').on('change', updatePrice);

        updatePrice();

    }

    // Disable stock qty for allow shop on demand
    $('input[name="qty_stock"]').remove();

    //Banners Sec home
    //$('#banner_sec_left').text(zzz);

    //Tutorial Search
    //Clean the tag selector
    $j('.input_tag').attr("checked",false)

    $('#modal-privacy-policy').fancybox({
        maxWidth	: 800,
        maxHeight	: 600,
        fitToView	: false,
        width		: '70%',
        height		: '70%',
        autoSize	: false,
        closeClick	: false,
        openEffect	: 'none',
        closeEffect	: 'none'
    });

    //Newsletter
    $("#newsletter-validate-detail").submit(function(e){
        e.preventDefault();

        if (!$('[name=privacy-accept]').is(':checked')) {
            $("#newsletter_status").text("You have to accept the privacy policy.");
            $("#newsletter_status").css("color", "red");
            return;
        }

        $.post($(this).attr('action'), $(this).serialize(),
            function(data) {
                if(data)
                    {
                    if(data=="Some fields are missing.")
                        {
                            $("#newsletter_status").text("Please fill in your name and email.");
                            $("#newsletter_status").css("color", "red");
                        }
                    else if(data=="Invalid email address.")
                        {
                            $("#newsletter_status").text("Your email address is invalid.");
                            $("#newsletter_status").css("color", "red");
                        }
                    else if(data=="Invalid list ID.")
                        {
                            $("#newsletter_status").text("Your list ID is invalid.");
                            $("#newsletter_status").css("color", "red");
                        }
                    else if(data=="Already subscribed.")
                        {
                            $("#newsletter_status").text("You're already subscribed!");
                            $("#newsletter_status").css("color", "red");
                        }
                        else
                        {
                            $("#newsletter_status").text("You're subscribed!");
                            $("#newsletter_status").css("color", "green");
                        }
                    }
                    else
                    {
                        $("#newsletter_status").text("Sorry, unable to subscribe. Please try again later!");
                        $("#newsletter_status").css("color", "red");
                    }
                }
        );
    });
    $("#newsletter-validate-detail").keypress(function(e) {
        if(e.keyCode == 13) {
            e.preventDefault();
            $(this).submit();
        }
    });
    $("#submit-btn").click(function(e){
        e.preventDefault();
        $("#newsletter-validate-detail").submit();
    });

    // Prevent jump on menu show
    $('a.btn-sambar').attr('href', '#');

    // Responsive
    if ($(window).width() < 990) {
        $('.css-1column-parent.other-toggle.sm_megamenu_lv1.sm_megamenu_drop.parent').removeClass('parent');

        $('.sm_megamenu_wrapper_horizontal_menu.sambar .btn-sambar').on('click', function () {
            if ($('.sm_megamenu_lv1.showSidebar').length === 0) {
                $('.sm_megamenu_lv1:first').clone().insertBefore('.sm_megamenu_lv1:first').addClass('showSidebar');
                $('.showSidebar .sm_megamenu_title').text('Shop');
            }
        });

        $('.sambar-inner').on('click', '.showSidebar', function (e) {
            e.preventDefault();
            $('#yt_wrapper #yt_left').attr('style', 'display: block !important');
            $('a.btn-sambar').click();
            $('.yt-left-wrap .sm_megamenu_wrapper_vertical_menu .btn-sambar:first').attr('style', 'display: block !important').html('<span class="hide-sidebar">X</span>');
            $('.yt-left-wrap .sm_megamenu_wrapper_vertical_menu .btn-sambar:gt(0)').attr('style', 'display: none !important');
        });


        $('.yt-left-wrap').on('click', '.hide-sidebar', function () {
            $('#yt_wrapper #yt_left').attr('style', 'display: none !important');

        });
    }
    // Show child categories on menu
    $(window).on('load', function() {
        $('.level1.parent.active .touch-item').click();
        //
        $('.vp').height("+=15");

        //Remove wishlist and compare buttons
        $('.link-compare').remove();
        $('.link-wishlist').remove();
    });


    /* REMOVE SPACES FROM PRODUCT PAGE IF EMPTY */
    var product_image_slider = $('.more-views.slide-gallery');
    if (product_image_slider.length > 0) {
        var products = product_image_slider.find('a.cloud-zoom-gallery');

        var toRemove = true;
        products.each(function(i, val) {
            //console.log($(val));
           if (!$(val).hasClass('actived')) {
               toRemove = false;
           }
        });

        if (toRemove) {
            product_image_slider.remove();
        }

    }

    var product_review = $('.customer-review');
    if (product_review.length > 0) {
        if (jQuery.trim(product_review.text()) === '') {
            product_review.remove();
        }
    }

    $('.availability.in-stock span').on('click', function() {
        var target = '/skin/frontend/cooking/default/templates/availability.php';
        window.open(target,'_blank','width=400,height=700,30,30');
    });

    $('body').on('change', '#product-options-wrapper .bundle-select', function() {
        $('.bundle-plattform-description').hide();
        var id = $(this).val();
        $('#plattform-' + id).show();

    });



    /* Searchbox navigate with arrows */
    //$('.form-search').on('change', '#query_text', function() {
    //    $('#search').attr('search_item_selected',-1);
    //    console.log('asd');
    //});
    $('#search').keydown(function(e){
        if((e.which != 38) && (e.which != 40)){
            $('#search').attr('search_item_selected',-1);
        }
        else if(e.which == 40 && ($('#search').attr('search_item_selected') < $('.product_suggest li[data-url]').length - 1)) {
            var new_value = $('#search').attr('search_item_selected');
            /* Increase index*/
            $('#search').attr('search_item_selected', parseInt(new_value) + 1);

        }
        else if(e.which == 38 && ($('#search').attr('search_item_selected') > 0)) {
            var new_value = $('#search').attr('search_item_selected');
            /* Decrease index*/
            $('#search').attr('search_item_selected', parseInt(new_value) - 1);

        }
        var selected_item = $('#search').attr('search_item_selected');
        //console.log(selected_item);
        //console.log($('.product_suggest li[data-url]:eq('+selected_item+')').attr('data-url'));

        /* Highlight the element */
        $('.product_suggest li[data-url]').css('border','1px solid #CCCCCC');
        $('.product_suggest li[data-url]:eq('+selected_item+')').css('border','1px solid #e74847');

        /* If key = enter then click() */
        if(e.which == 13 && (selected_item >= 0)){
            window.location.href = $('.product_suggest li[data-url]:eq('+selected_item+')').attr('data-url');
        }

    });

    // Preload last img on slideshow
    var first_slider_img = $('.dynamicslideshow.fullwidthbanner li:last img').attr('src');
    $('.yt-slideshow.yt-slideshow-right').css('background-image', 'url(' + first_slider_img + ')');

    //On demand category - Hide the ALL selector
    /*
    var current_url = $(location).attr('href');
    if(current_url.indexOf('shop/on-demand-products') >= 0){
        //$('.limiter select option:last').remove();
        if($('.limiter select option:last').length>0){
            console.log('removed!');
            console.log($('.limiter select option:last').text());
        }
    }
    */

    /* Clear cookies the first time */
    //if(docCookies.getItem('old_cookies_cleared') != 'yes'){
    //    clearCookies();
    //    docCookies.setItem('old_cookies_cleared','yes');
    //}



    /* Google Analytics Tracking codes */
    /* Product page */
    $('.catalog-product-view .availability.in-stock').on('click', function() {
        // StockInfoText On product page
        _gaq.push(['_trackEvent', 'FichaProducto', 'ClickStockInfoText', $.trim($('h1.product-name').text())]);
    });

    /* Grid page */
    // GridCategory

    var grid_item = $('.catalog-category-view .products-grid .item');

    if (grid_item.length > 0) {

        // ClickImgGrid
        $(grid_item).on('click', '.item-image a.rspl-image', function() {
            var product_name = $.trim($(this).parents('.item').find('.item-title a').text());
            _gaq.push(['_trackEvent', 'GridCategory', 'ClickImgGrid', product_name]);
        });

        // ClickNombreProdGrid
        $(grid_item).on('click', '.item-title a', function() {
            var product_name = $.trim($(this).text());
            _gaq.push(['_trackEvent', 'GridCategory', 'ClickNombreProdGrid', product_name]);
        });

        // ClickAddCart
        $(grid_item).on('click', '.item-addcart a', function() {
            var product_name = $.trim($(this).parents('.item').find('.item-title a').text());
            _gaq.push(['_trackEvent', 'GridCategory', 'ClickAddCart', product_name]);
        });

        // ClickStockInfo
        $(grid_item).on('click', '.availability-in-stock', function() {
            var product_name = $.trim($(this).parents('.item').find('.item-title a').text());
            _gaq.push(['_trackEvent', 'GridCategory', 'ClickStockInfo', product_name]);
        });

    }
    /* End Google Analytics Tracking codes */



});

/* Library for cookies */
//
//var docCookies = {
//    getItem: function (sKey) {
//        if (!sKey) { return null; }
//        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
//    },
//    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
//        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
//        var sExpires = "";
//        if (vEnd) {
//            switch (vEnd.constructor) {
//                case Number:
//                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
//                    break;
//                case String:
//                    sExpires = "; expires=" + vEnd;
//                    break;
//                case Date:
//                    sExpires = "; expires=" + vEnd.toUTCString();
//                    break;
//            }
//        }
//        document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
//        return true;
//    },
//    removeItem: function (sKey, sPath, sDomain) {
//        if (!this.hasItem(sKey)) { return false; }
//        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
//        return true;
//    },
//    hasItem: function (sKey) {
//        if (!sKey) { return false; }
//        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
//    },
//    keys: function () {
//        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
//        for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
//        return aKeys;
//    }
//};


/* Clear cookies */
//function clearCookies(){
//    var cookiearray = docCookies.keys();
//    var i = 0;
//    for (; i < cookiearray.length; i++) {
//        docCookies.removeItem(cookiearray[i], '/', 'www.cooking-hacks.com');
//        docCookies.removeItem(cookiearray[i], '/', '.cooking-hacks.com');
//        docCookies.removeItem(cookiearray[i], '/', '.www.cooking-hacks.com');
//        docCookies.removeItem(cookiearray[i], '/', 'cooking-hacks.com');
//    }
//}



