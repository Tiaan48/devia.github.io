// Closes the sidebar menu
$("#menu-close").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Map scrolling behaviour
$(document).ready(function() {
  $('#map_iframe').addClass('scrolloff');
  $('#map').on('click', function () {
    $('#map_iframe').removeClass('scrolloff');
  });

  $('#map_iframe').mouseleave(function  () {
    $('#map_iframe').addClass('scrolloff');
  });
});

// Timeline behaviour
jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});

// ICO behaviour
var myConfig = {
  "type":"pie",
  "title":{
    "text":"Animated Pie Chart"
  },
  "legend":{
    "x":"75%",
    "y":"25%",
    "border-width":1,
    "border-color":"gray",
    "border-radius":"5px",
    "header":{
      "text":"Legend",
      "font-family":"Georgia",
      "font-size":12,
      "font-color":"#3333cc",
      "font-weight":"normal"
    },
    "marker":{
      "type":"circle"
    },
    "toggle-action":"remove",
    "minimize":true,
    "icon":{
      "line-color":"#9999ff"
    },
    "max-items":8,
    "overflow":"scroll"
  },
  "plotarea":{
    "margin-right":"30%",
    "margin-top":"15%"
  },
  "plot":{
    "animation":{
 	    "on-legend-toggle": true, //set to true to show animation and false to turn off
 	    "effect": 5,
 	    "method": 1,
 	    "sequence": 1,
 	    "speed": 1
    },
    "value-box":{
      "text":"%v",
      "font-size":12,
      "font-family":"Georgia",
      "font-weight":"normal",
          "placement":"out",
          "font-color":"gray",
    },
    "tooltip":{
      "text":"%t: %v (%npv%)",
      "font-color":"black",
      "font-family":"Georgia",
      "text-alpha":1,
      "background-color":"white",
      "alpha":0.7,
      "border-width":1,
      "border-color":"#cccccc",
      "line-style":"dotted",
      "border-radius":"10px",
      "padding":"10%",
      "placement":"node:center"
    },
    "border-width":1,
    "border-color":"#cccccc",
    "line-style":"dotted"
  },
  "series":[
    {
      "values":[234],
      "background-color":"#cc0000",
      "text":"Alpha"
    },
    {
      "values":[121],
      "background-color":"#ff3300",
      "text":"Beta"
    },
    {
      "values":[77],
      "background-color":"#ff6600",
      "text":"Gamma"
    },
    {
      "values":[65],
      "background-color":"#ff9933",
      "text":"Delta"
    },
    {
      "values":[59],
      "background-color":"#ffcc00",
      "text":"Epsilon"
    },
    {
      "values":[35],
      "background-color":"#ace600",
      "text":"Zeta"
    },
    {
      "values":[34],
      "background-color":"#88cc00",
      "text":"Eta"
    },
    {
      "values":[31],
      "background-color":"#339933",
      "text":"Theta"
    },
    {
      "values":[16],
      "background-color":"#66ccff",
      "text":"Iota"
    },
    {
      "values":[14],
      "background-color":"#3399ff",
      "text":"Kappa"
    },
    {
      "values":[13],
      "background-color":"#0066ff",
      "text":"Lambda"
    },
    {
      "values":[12],
      "background-color":"#3333cc",
      "text":"Mu"
    },
    {
      "values":[11],
      "background-color":"#6600ff",
      "text":"Nu"
    },
    {
      "values":[10],
      "background-color":"#9933ff",
      "text":"Xi"
    },
    {
      "values":[9],
      "background-color":"#9999ff",
      "text":"Omicron"
    }
  ]
};
 
zingchart.render({ 
	id : 'myChart', 
	data : myConfig, 
	height: 400, 
	width: "100%" 
});
