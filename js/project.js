$( document ).ready(function() {

 var timing = 800;

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        $("body").animate({opacity: 0}, timing/2);
        window.location = getRootUrl();
    }
});

function getRootUrl() {
  return window.location.origin?window.location.origin+'/':window.location.protocol+'/'+window.location.host+'/';
}

 $("a").click(function ( event ){
   event.preventDefault();
   $("body").animate({opacity: 0}, timing/2);
   href = $(this).attr('href');
   setTimeout(function() {window.location = href}, timing/2);
 });

 $("body").animate({opacity: 1}, timing/2);

 var tabletWidth = 1000;
 var mobileWidth = 600;
 var freshpage = function() {

    if($(window).width() > tabletWidth ){
    //parallax movement onscroll
    var maxDistance = 60;
    $(".lax").each(function(){
      var value = Math.floor(Math.random() * (maxDistance*2) - maxDistance);
      $(this).attr("data-parallax","{\"y\" : "+value+"}");
    });
  } else {
    $(".lax").each(function(){
      //NO MORE PARALLAX MOVEMENT
      $(this).removeAttr("data-parallax");
      $(this).removeAttr("style");
    });
  }

};

freshpage();
$.event.special.debouncedresize.threshold = 500;//wait until 500ms between resizes to trigger
$(window).bind("debouncedresize", function() {
  freshpage();
});

});