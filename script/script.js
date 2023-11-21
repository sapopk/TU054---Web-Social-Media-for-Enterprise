/*
    Student ID: B00139596
    Student Name: Johny Ramos Assuncao
    Course: [TU054] Computer System Management
    Module: Web & Social Media for Enterprise 
    Theme: Assignment #1
 */

'use strict';


$(document).ready(function () {
    
    /* Open overlay */
    $('#opnbtn').click(function () {
        $('#child-1').hide();
        $('#child-0').fadeIn(700);
    });

    $('#clsbtn').click(function () {
        $('#child-1').show();
        $('#child-0').fadeOut(20);
    });
    /* Close overlay */

    /*Header - Navbar */
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 400) {
            $('#nav-header').addClass('customer-navHeader');
            $('#logoImg').addClass('logoFilter');
        } else {
            $('#nav-header').removeClass('customer-navHeader');
            $('#logoImg').removeClass('logoFilter');
        }
    });
    /*End of Header - Navbar */

    /*Sidebar Dropdown - Navbar */
    $('.sub-btn').click(function() {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.angleArrow').toggleClass('arrowRotate');
    });
    /*End of Sidebar Dropdown - Navbar */

    /* Nav Button - Change */
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
    });
    /* End of Nav Button - Change */

    /*Bookmark - left-link */

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position > 1250) {
            $('.left-link').css("background", "#000000ff");
            $('.slideFade').css("color", "#000000ff");
        } else {
            $('.left-link').css("background", "#ffffff");
            $('.slideFade').css("color", "#ffffff");
        }
    });

    $('#bookmarks').on('click', '.left-link', function(event) {
        const clickedLeftLink = $(this);
        const slideFadeElement = clickedLeftLink.find('.slideFade');
      
        $('.left-link').removeClass('left-active');
        $('.left-link .slideFade').fadeOut('fast');
      
        clickedLeftLink.addClass('left-active');
        slideFadeElement.fadeIn('slow');
    });

    /*End of Bookmark - left-link */

    /* Location - pics*/
    $('.qLoc3rdItems').click(function(){
        let value = $(this).attr('data-filter');

        if (value === 'bpm' || value === 'portland') {
            $('.filter').fadeIn();
        } else {
            $('.filter').not('.' + value).fadeOut();
            $('.filter').filter('.' +value).fadeIn();
        }
    });

    $('.qLoc3rdItems').click(function(){
        $(this).addClass('qLoc3rdActive').siblings().removeClass('qLoc3rdActive');
    });

    /* End of Location - pics*/

    
    /*Overlay - sidebar */

    $('#FA-btn').click(function(){
        //Hide overlays
        $('#SPOverlay').hide();
        $('#SFOverlay').hide();
        $('#CSOverlay').hide();
        $('#HROverlay').hide();
        $('#APCOverlay').hide();
        $('#MOOverlay').hide();
        $('#MDMOverlay').hide();
        $('#EOverlay').hide();
        $('#ASOverlay').hide();
        $('#BAOverlay').hide();
        $('#DISOverlay').hide();
        $('#BTSOverlay').hide();
        $('#RPAOverlay').hide();
        $('#LPMOverlay').hide();

        //Fade in overlay with delay 700
        $('#FAOverlay').fadeIn(700);
    });

    $('#SP-btn').click(function(){
        //Hide overlays
        $('#FAOverlay').hide();
        $('#SFOverlay').hide();
        $('#CSOverlay').hide();
        $('#HROverlay').hide();
        $('#APCOverlay').hide();
        $('#MOOverlay').hide();
        $('#MDMOverlay').hide();
        $('#EOverlay').hide();
        $('#ASOverlay').hide();
        $('#BAOverlay').hide();
        $('#DISOverlay').hide();
        $('#BTSOverlay').hide();
        $('#RPAOverlay').hide();
        $('#LPMOverlay').hide();

        //Fade in overlay with delay 700
        $('#SPOverlay').fadeIn(700);

    });

    $('#SF-btn').click(function(){
        //Hide overlays
        $('#FAOverlay').hide();
        $('#SPOverlay').hide();
        $('#CSOverlay').hide();
        $('#HROverlay').hide();
        $('#APCOverlay').hide();
        $('#MOOverlay').hide();
        $('#MDMOverlay').hide();
        $('#EOverlay').hide();
        $('#ASOverlay').hide();
        $('#BAOverlay').hide();
        $('#DISOverlay').hide();
        $('#BTSOverlay').hide();
        $('#RPAOverlay').hide();
        $('#LPMOverlay').hide();

        //Fade in overlay with delay 700
        $('#SFOverlay').fadeIn(700);
    });

    $('#CS-btn').click(function(){
        //Hide overlays
        $('#FAOverlay ').hide();
        $('#SPOverlay').hide();
        $('#SFOverlay').hide();
        $('#HROverlay').hide();
        $('#APCOverlay').hide();
        $('#MOOverlay').hide();
        $('#MDMOverlay').hide();
        $('#EOverlay').hide();
        $('#ASOverlay').hide();
        $('#BAOverlay').hide();
        $('#DISOverlay').hide();
        $('#BTSOverlay').hide();
        $('#RPAOverlay').hide();
        $('#LPMOverlay').hide();

        //Fade in overlay with delay 700
        $('#CSOverlay').fadeIn(700);
    });

    $('#HR-btn').click(function(){
        //Hide overlays
        $('#FAOverlay ').hide();
        $('#SPOverlay').hide();
        $('#SFOverlay').hide();
        $('#CSOverlay').hide();
        $('#APCOverlay').hide();
        $('#MOOverlay').hide();
        $('#MDMOverlay').hide();
        $('#EOverlay').hide();
        $('#ASOverlay').hide();
        $('#BAOverlay').hide();
        $('#DISOverlay').hide();
        $('#BTSOverlay').hide();
        $('#RPAOverlay').hide();
        $('#LPMOverlay').hide();

        //Fade in overlay with delay 700
        $('#HROverlay').fadeIn(700);
    });

    $('#APC-btn').click(function(){
        //Hide overlays
        $('#FAOverlay ').hide();
        $('#SPOverlay').hide();
        $('#SFOverlay').hide();
        $('#CSOverlay').hide();
        $('#HROverlay').hide();
        $('#MOOverlay').hide();
        $('#MDMOverlay').hide();
        $('#EOverlay').hide();
        $('#ASOverlay').hide();
        $('#BAOverlay').hide();
        $('#DISOverlay').hide();
        $('#BTSOverlay').hide();
        $('#RPAOverlay').hide();
        $('#LPMOverlay').hide();

        //Fade in overlay with delay 700
        $('#APCOverlay').fadeIn(700);
    });

    $('#MO-btn').click(function(){
        //Hide overlays
        $('#FAOverlay ').hide();
        $('#SPOverlay').hide();
        $('#SFOverlay').hide();
        $('#CSOverlay').hide();
        $('#HROverlay').hide();
        $('#APCOverlay').hide();
        $('#MDMOverlay').hide();
        $('#EOverlay').hide();
        $('#ASOverlay').hide();
        $('#BAOverlay').hide();
        $('#DISOverlay').hide();
        $('#BTSOverlay').hide();
        $('#RPAOverlay').hide();
        $('#LPMOverlay').hide();

        //Fade in overlay with delay 700
        $('#MOOverlay').fadeIn(700);
    });

    $('#MDM-btn').click(function(){
        //Hide overlays
        $('#FAOverlay').hide();
        $('#SPOverlay').hide();
        $('#SFOverlay').hide();
        $('#CSOverlay').hide();
        $('#HROverlay').hide();
        $('#APCOverlay').hide();
        $('#MOOverlay').hide();
        $('#EOverlay').hide();
        $('#ASOverlay').hide();
        $('#BAOverlay').hide();
        $('#DISOverlay').hide();
        $('#BTSOverlay').hide();
        $('#RPAOverlay').hide();
        $('#LPMOverlay').hide();

        //Fade in overlay with delay 700
        $('#MDMOverlay').fadeIn(700);
    });

    $('#E-btn').click(function(){
        //Hide overlays
        $('#FAOverlay ').hide();
        $('#SPOverlay').hide();
        $('#SFOverlay').hide();
        $('#CSOverlay').hide();
        $('#HROverlay').hide();
        $('#APCOverlay').hide();
        $('#MOOverlay').hide();
        $('#MDMOverlay').hide();
        $('#ASOverlay').hide();
        $('#BAOverlay').hide();
        $('#DISOverlay').hide();
        $('#BTSOverlay').hide();
        $('#RPAOverlay').hide();
        $('#LPMOverlay').hide();

        //Fade in overlay with delay 700
        $('#EOverlay').fadeIn(700);
    });

    $('#AS-btn').click(function(){
        //Hide overlays
        $('#FAOverlay ').hide();
        $('#SPOverlay').hide();
        $('#SFOverlay').hide();
        $('#CSOverlay').hide();
        $('#HROverlay').hide();
        $('#APCOverlay').hide();
        $('#MOOverlay').hide();
        $('#MDMOverlay').hide();
        $('#EOverlay').hide();
        $('#BAOverlay').hide();
        $('#DISOverlay').hide();
        $('#BTSOverlay').hide();
        $('#RPAOverlay').hide();
        $('#LPMOverlay').hide();

        //Fade in overlay with delay 700
        $('#ASOverlay').fadeIn(700);
    });

    $('#BA-btn').click(function(){
        //Hide overlays
        $('#FAOverlay ').hide();
        $('#SPOverlay').hide();
        $('#SFOverlay').hide();
        $('#CSOverlay').hide();
        $('#HROverlay').hide();
        $('#APCOverlay').hide();
        $('#MOOverlay').hide();
        $('#MDMOverlay').hide();
        $('#EOverlay').hide();
        $('#ASOverlay').hide();
        $('#DISOverlay').hide();
        $('#BTSOverlay').hide();
        $('#RPAOverlay').hide();
        $('#LPMOverlay').hide();

        //Fade in overlay with delay 700
        $('#BAOverlay').fadeIn(700);
    });

    $('#DIS-btn').click(function(){
        //Hide overlays
        $('#FAOverlay').hide();
        $('#SPOverlay').hide();
        $('#SFOverlay').hide();
        $('#CSOverlay').hide();
        $('#HROverlay').hide();
        $('#APCOverlay').hide();
        $('#MOOverlay').hide();
        $('#MDMOverlay').hide();
        $('#EOverlay').hide();
        $('#ASOverlay').hide();
        $('#BAOverlay').hide();
        $('#BTSOverlay').hide();
        $('#RPAOverlay').hide();
        $('#LPMOverlay').hide();

        //Fade in overlay with delay 700
        $('#DISOverlay').fadeIn(700);
    });

    $('#BTS-btn').click(function(){
        //Hide overlays
        $('#FAOverlay').hide();
        $('#SPOverlay').hide();
        $('#SFOverlay').hide();
        $('#CSOverlay').hide();
        $('#HROverlay').hide();
        $('#APCOverlay').hide();
        $('#MOOverlay').hide();
        $('#MDMOverlay').hide();
        $('#EOverlay').hide();
        $('#ASOverlay').hide();
        $('#BAOverlay').hide();
        $('#DISOverlay').hide();
        $('#RPAOverlay').hide();
        $('#LPMOverlay').hide();

        //Fade in overlay with delay 700
        $('#BTSOverlay').fadeIn(700);
    });

    $('#RPA-btn').click(function(){
        //Hide overlays
        $('#FAOverlay ').hide();
        $('#SPOverlay').hide();
        $('#SFOverlay').hide();
        $('#CSOverlay').hide();
        $('#HROverlay').hide();
        $('#APCOverlay').hide();
        $('#MOOverlay').hide();
        $('#MDMOverlay').hide();
        $('#EOverlay').hide();
        $('#ASOverlay').hide();
        $('#BAOverlay').hide();
        $('#DISOverlay').hide();
        $('#BTSOverlay').hide();
        $('#LPMOverlay').hide();

        //Fade in overlay with delay 700
        $('#RPAOverlay').fadeIn(700);
    });

    $('#LPM-btn').click(function(){
        //Hide overlays
        $('#FAOverlay').hide();
        $('#SPOverlay').hide();
        $('#SFOverlay').hide();
        $('#CSOverlay').hide();
        $('#HROverlay').hide();
        $('#APCOverlay').hide();
        $('#MOOverlay').hide();
        $('#MDMOverlay').hide();
        $('#EOverlay').hide();
        $('#ASOverlay').hide();
        $('#BAOverlay').hide();
        $('#DISOverlay').hide();
        $('#BTSOverlay').hide();
        $('#RPAOverlay').hide();

        //Fade in overlay with delay 700
        $('#LPMOverlay').fadeIn(700);
    });

    /*End of Overlay - sidebar */

});
