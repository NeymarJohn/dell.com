jQuery(window).load(function(){jQuery(".framework-tabs").prepend($(".close-btn")),jQuery(".framework-cards ul li a").on("click",function(){jQuery(this).parents(".framework-cards-to-tabs").addClass("tabs-open")}),jQuery(".framework-cards-to-tabs .close-btn").on("click",function(){jQuery(this).parents(".framework-cards-to-tabs").removeClass("tabs-open")})});