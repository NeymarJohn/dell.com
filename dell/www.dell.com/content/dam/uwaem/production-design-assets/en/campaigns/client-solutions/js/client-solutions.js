(function(a){a.app={init:function(){this.bindAttemps=0;this.bodyScrollTop=0;this.bodyWidth=0;this.bodyWidth=$("body").width();this.anchorOffset=0;a.app.navigation();a.app.bindEvents();if(jQuery(".client-solutions.pc-lifecycle-parent").length>0){a.pcLifeCycle.init();
}if(jQuery(".client-solutions.workforce-parent").length>0){a.workforce.init();}if($(".machine-learning-parent").length>0){console.log("found");a.machineLearning.init();}if(jQuery(".client-solutions.medium-business-parent").length>0){a.mediumBusiness.init();
}setTimeout(function(){a.hash.init();},500);a.accessories.init();if(jQuery(".row-solution .solution").length>0){a.solutions.init();}jQuery(".tick").each(function(){new Ticker(jQuery(this));});if(a.app.hasNewNav()){$(".cs-nav-container").addClass("new-nav");
}jQuery(".personas .match-height").matchHeight();jQuery(".match-height").matchHeight();jQuery(".resources-content").matchHeight();jQuery(".resources-links").matchHeight();},hasNewNav:function(){if(jQuery("#new-nav").length>0){return true;
}return false;},bindEvents:function(){if(jQuery(".slider").length>0){console.log("create slider");jQuery(".slider").slick({adaptiveHeight:true,dots:true,responsive:[{breakpoint:640,settings:{arrows:false,dots:true}}]});
}jQuery(".video-slider > div").matchHeight();if(jQuery(".video-slider").length>0){console.log("create video slider");jQuery(".video-slider").slick({adaptiveHeight:false,dots:false,arrows:false,touchMove:false,draggable:false,swipe:false,swipeToSlide:false,speed:10,fade:true,responsive:[{breakpoint:640,settings:{arrows:false,dots:true,touchMove:true,draggable:true,swipe:true,swipeToSlide:true,speed:500,fade:false}}]});
}document.addEventListener("scroll",a.app.scrollHandler);window.addEventListener("resize",a.app.resizeHandler);a.app.resizeHandler();setTimeout(function(){a.app.scrollHandler();},500);},bindShare:function(){setTimeout(function(){if(jQuery("#emc-sticky-prompt").length>0){var b='<div id="emc-prompt-share" class=""><div></div><table cellpadding="0" cellspacing="0" border="0" style="width: 10px;"><tbody><tr><td height="44px" align="center" valign="middle" style="vertical-align: middle;"><div class="share-btn share-facebook"><a href="" target="_blank"></a></div><div class="share-btn share-linkedin"><a href="" target="_blank"></a></div><div class="share-btn share-twitter"><a href="" target="_blank"></a></div></td></tr></tbody></table></div>';
jQuery("#emc-sticky-prompt").append(b);var c=jQuery("#social-sidebar .social-fb a").attr("href");var e=jQuery("#social-sidebar .social-li a").attr("href");var d=jQuery("#social-sidebar .social-tw a").attr("href");
jQuery(".share-facebook a").attr("href",c);jQuery(".share-linkedin a").attr("href",e);jQuery(".share-twitter a").attr("href",d);}else{a.app.bindAttemps=parseInt(a.app.bindAttemps+1);if(a.app.bindAttemps<5){a.app.bindShare();
}}},200);},scrollHandler:function(){var b=jQuery(window).scrollTop();if(b>250){if(!jQuery(".cs-nav-container").hasClass("scrolled")){jQuery(".cs-nav-container").addClass("scrolled");}}else{if(jQuery(".cs-nav-container").hasClass("scrolled")){jQuery(".cs-nav-container").removeClass("scrolled");
}}var d=0;if(jQuery(".cs-nav-container.new-nav").length>0){d=68;}b=jQuery(window).scrollTop();if(jQuery("body").width()>980&&jQuery(".hero-area .fixed-container").length>0&&$("html").hasClass("lt-ie10")===false){jQuery(".hero-area .fixed-container").css({top:b*-0.7+d});
jQuery(".hero-area .fixed-container .hero").css({top:b*-0.01});}else{jQuery(".hero-area .fixed-container").css({top:0});jQuery(".hero-area .fixed-container .hero").css({top:0});}if($("html").hasClass("ie")){var c=document.querySelector("html");
a.app.bodyScrollTop=c.scrollTop;}else{a.app.bodyScrollTop=window.scrollY;}if(jQuery(".cs-nav-container.new-nav").length>0){var e=parseInt(jQuery(".cs-nav-container.new-nav").css("padding-top"));if(a.app.bodyScrollTop>e){if(!jQuery(".cs-nav-container.new-nav").hasClass("fix")){jQuery(".cs-nav-container.new-nav").addClass("fix");
}}else{if(jQuery(".cs-nav-container.new-nav").hasClass("fix")){jQuery(".cs-nav-container.new-nav").removeClass("fix");}}}},resizeHandler:function(){jQuery(".menu > .menu-item").each(function(){jQuery(this).parent().removeClass("nav-open");
jQuery(this).parent().find(".sub-menu").hide();});a.app.bodyWidth=$("body").width();if(jQuery("body").width()<980){if($(".resources").hasClass("no-flip")==false){if($(".resources > .container-fluid > .row .col-md-6:last-child").hasClass("mobile-first")===true){a.app.reverseChildren($(".resources > .container-fluid > .row"));
}if($(".resources > .container-fluid > .row > .resources-buttons > .row:first-child").hasClass("mobile-first")===false){a.app.reverseChildren($(".resources > .container-fluid > .row > .resources-buttons"));
}}}else{if($(".resources > .container-fluid > .row .col-md-6:first-child").hasClass("mobile-first")===true){console.log("md-6 unreverse");a.app.reverseChildren($(".resources > .container-fluid > .row"));
}if($(".resources > .container-fluid > .row > .resources-buttons > .row:first-child").hasClass("mobile-first")===true){a.app.reverseChildren($(".resources > .container-fluid > .row > .resources-buttons"));
}}if(a.app.bodyWidth>=980){a.app.anchorOffset=87;}else{a.app.anchorOffset=0;}a.app.scrollHandler();},navigation:function(){if(jQuery(".client-solutions").hasClass("workforce-parent")===true){jQuery("#navigation .menu-workforce").addClass("active");
}if(jQuery(".client-solutions").hasClass("pc-lifecycle-parent")===true){jQuery("#navigation .menu-pc-lifecycle").addClass("active");}if(jQuery(".client-solutions").hasClass("dock-solutions-parent")===true){jQuery("#navigation .menu-dock-solutions").addClass("active");
}$(".cs-nav").show();jQuery(".menu > .menu-item").on("click",function(c){c.preventDefault();console.log("has-sub-menu");var b=this;jQuery(".menu > .menu-item").each(function(){if(b!=this){jQuery(this).parent().removeClass("nav-open");
jQuery(this).parent().find(".sub-menu").fadeOut();jQuery(this).parent().find(".sub-menu-container").fadeOut();}else{}});if(jQuery("body").width()<1280&&jQuery(this).parent().hasClass("active")===true){console.log(jQuery(this).parent());
if(jQuery(this).parent().hasClass("nav-open")){jQuery(this).parent().removeClass("nav-open");jQuery(this).parent().find(".sub-menu").fadeOut();jQuery(this).parent().find(".sub-menu-container").fadeOut();
}else{jQuery(this).parent().addClass("nav-open");jQuery(this).parent().find(".sub-menu").fadeIn();jQuery(this).parent().find(".sub-menu-container").fadeIn();}}else{location.href=$(this).find("a").attr("href");
}});},reverseChildren:function(c){var b=c;b.children().each(function(e,d){b.prepend(d);});}};a.machineLearning={init:function(){var g="/content/dam/uwaem/production-design-assets/en/campaigns/client-solutions/";
if(window.location.href.indexOf("local")>-1||window.location.href.indexOf("thisisarebellion.com")>-1||window.location.href.indexOf("rebellion-workspace")>-1){g="../";}var c=["Matira_7_Shot_01_027.jpg","Matira_7_Shot_01_028.jpg","Matira_7_Shot_01_029.jpg","Matira_7_Shot_01_030.jpg","Matira_7_Shot_01_031.jpg","Matira_7_Shot_01_032.jpg","Matira_7_Shot_01_033.jpg","Matira_7_Shot_01_034.jpg","Matira_7_Shot_01_035.jpg","Matira_7_Shot_01_036.jpg","Matira_7_Shot_01_037.jpg","Matira_7_Shot_01_038.jpg","Matira_7_Shot_01_039.jpg","Matira_7_Shot_01_040.jpg","Matira_7_Shot_01_041.jpg","Matira_7_Shot_01_042.jpg","Matira_7_Shot_01_043.jpg","Matira_7_Shot_01_044.jpg","Matira_7_Shot_01_045.jpg","Matira_7_Shot_01_046.jpg","Matira_7_Shot_01_047.jpg","Matira_7_Shot_01_048.jpg","Matira_7_Shot_01_049.jpg","Matira_7_Shot_01_050.jpg","Matira_7_Shot_01_051.jpg","Matira_7_Shot_01_052.jpg","Matira_7_Shot_01_053.jpg"];
var d=c.reverse();var e={curImg:0};this.tween=TweenMax.to(e,1.2,{curImg:c.length-1,roundProps:"curImg",repeat:0,immediateRender:true,ease:Power0.easeNone,onUpdate:function(){$("#myimg").attr("src",g+"images/machine_learning_image_seq/"+d[e.curImg]);
}});this.controller=new ScrollMagic.Controller({globalSceneOptions:{}});this.scene=new ScrollMagic.Scene({triggerElement:"#section-intro",duration:800,triggerHook:0.07}).setTween(this.tween).setPin("#section-intro").addTo(this.controller);
var b=document.getElementById("video-area-video");var f=document.getElementById("mp4");console.log(b);new ScrollMagic.Scene({triggerElement:".video-area"}).on("enter",function(h){}).addTo(this.controller);
a.machineLearning.bindEvents();},bindEvents:function(){window.addEventListener("resize",a.machineLearning.resizeHandler);a.machineLearning.resizeHandler();},resizeHandler:function(){var b=16/9;var e=$(".video-area").width();
var d=$(".video-area").height();var c=e/d;if(c<b){$("#video-area-video").css({width:d*b});}else{$("#video-area-video").css({width:"100%"});}}};a.mediumBusiness={init:function(){a.mediumBusiness.bindEvents();
},bindEvents:function(){$(".solutions-header-navigation a").on("click",function(c){c.preventDefault();console.log(this);var b=$(this).attr("href");b=b.replace("#","");if(a.hash.getHashValue("section")===b){a.hash.updateHashValue([{key:"section",value:""}]);
}a.hash.updateHashValue([{key:"section",value:b}]);});$(".anchor-nav-area li a").on("click",function(){$(".anchor-nav-area li a").removeClass("anchor-active");});$(".mobile-navigation-button").on("click",function(){$("#server-mobile-navigation").toggleClass("active");
});$("#server-mobile-navigation a").on("click",function(){$("#server-mobile-navigation").toggleClass("active");});$("#server-mobile-navigation .server-mobile-navigation a").on("click",function(c){c.preventDefault();
var b=$(this).attr("href");b=b.replace("#","");if(a.hash.getHashValue("section")===b){a.hash.updateHashValue([{key:"section",value:""}]);}a.hash.updateHashValue([{key:"section",value:b}]);});window.addEventListener("resize",a.mediumBusiness.resizeHandler);
a.mediumBusiness.resizeHandler();window.addEventListener("scroll",a.mediumBusiness.scrollHandler);a.mediumBusiness.scrollHandler();},resizeHandler:function(){if(a.app.bodyWidth<980){$("#server-mobile-navigation").show();
}else{$("#server-mobile-navigation").hide();$("#server-mobile-navigation").removeClass("active");}},scrollHandler:function(){var d;var c=$(".solutions-header-navigation").offset();var b=c.top;d=b;if(a.app.bodyScrollTop<d+$(".solutions-header-navigation").height()-60&&a.app.bodyWidth>=980){if($(".server-navigation").hasClass("fix-nav")){$(".server-navigation").removeClass("fix-nav");
}}else{if(a.app.bodyWidth>=980){if($(".server-navigation").hasClass("fix-nav")===false){$(".server-navigation").addClass("fix-nav");}}else{if($(".server-navigation").hasClass("fix-nav")){$(".server-navigation").removeClass("fix-nav");
}}}$(window).scroll(function(){var e=$(".hero-area").height();var f=e-85;if($(this).scrollTop()>f){if($(".anchor-nav").hasClass("fix-nav")===false){$(".anchor-nav").addClass("fix-nav");}}else{if($(".anchor-nav").hasClass("fix-nav")){$(".anchor-nav").removeClass("fix-nav");
}}});a.mediumBusiness.activateNavBtnContainer();},activateNavBtnContainer:function(){var c;var d;var g;var e=this;var b=$(".server-navigation li a .nav-btn-container");var f=$(".section-mb-solution");f.each(function(h){var i=this;
c=$(i).offset().top;d=$(i).height();g=c+d;if(a.app.bodyScrollTop+500>c&&a.app.bodyScrollTop+500<g){if($(b[h]).hasClass("active")===false){$(b[h]).addClass("active");}}else{$(b[h]).removeClass("active");
}});}};a.solutions={init:function(){$(".row-solution").slick({dots:true,infinite:false,speed:300,slidesToShow:1,slidesToScroll:1,arrows:true,prevArrow:'<button type="button" class="slick-prev-arrow"></button>',nextArrow:'<button type="button" class="slick-next-arrow"></button>',responsive:[{breakpoint:768,settings:{arrows:false}}]});
}};a.accessories={init:function(){if(jQuery(".accessories").length>0){$(".accessories.four").slick({dots:true,infinite:false,speed:300,slidesToShow:4,slidesToScroll:4,arrows:false,responsive:[{breakpoint:980,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:640,settings:{slidesToShow:1,slidesToScroll:1}}]});
$(".accessories.three").slick({dots:true,infinite:false,speed:300,slidesToShow:3,slidesToScroll:3,arrows:false,responsive:[{breakpoint:980,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:640,settings:{slidesToShow:1,slidesToScroll:1}}]});
$(".accessories.six").slick({dots:true,infinite:false,speed:300,slidesToShow:6,slidesToScroll:6,arrows:false,responsive:[{breakpoint:980,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:640,settings:{slidesToShow:1,slidesToScroll:1}}]});
}if(jQuery(".workforce-parent.workforce .stat-row").length>0){$(".stat-row").slick({dots:true,infinite:false,speed:300,slidesToShow:3,slidesToScroll:3,arrows:false,responsive:[{breakpoint:640,settings:{slidesToShow:1,slidesToScroll:1}}]});
}$(".accessories h3").matchHeight();$(".accessories p").matchHeight();$(".text-container-inner").matchHeight();}};a.workforce={init:function(){this.controller=new ScrollMagic.Controller();this.scene={};
if(jQuery(".persona-solutions.desk-based").length>0){a.workforce.deskBased();}document.addEventListener("scroll",a.workforce.scrollHandler);window.addEventListener("resize",a.workforce.resizeHandler);setTimeout(function(){a.workforce.scrollHandler();
a.workforce.resizeHandler();},250);if(jQuery(".client-solutions.workforce").length>0){a.workforce.stats();}$(".solutions-img-wrapper").height($(".solutions-img").height());$(".stat-container").matchHeight();
$(".stat-container .desc-text").matchHeight();},resizeHandler:function(){if(jQuery(".client-solutions.workforce").length>0){var c=jQuery("#section-every-worker .text-container").height();var e=jQuery("#section-every-worker .img-container img").height();
var d=e-c;var b=d-160;if(b<0){b=0;}if(jQuery("body").width()>=980){jQuery(".workforce .stats").css({"padding-top":b+"px"});}else{jQuery(".workforce .stats").attr("style","");}}$(".solutions-img-wrapper").height($(".solutions-img").height());
$.fn.matchHeight._update();},scrollHandler:function(){},stats:function(){var d={customizedTechnology:0,arAndVr:0,satisfied:0};function b(){var h=d.customizedTechnology;$(".customized-technology .num-char").text(h+"%");
}function g(){$(".ar-and-vr .num-char").text(d.arAndVr+"%");}function e(){$(".satisfied .num-char").text(d.satisfied+"%");}var c=new TimelineMax();var f=c.to(d,2.2,{customizedTechnology:"82",roundProps:"customizedTechnology",onUpdate:b,ease:Linear.easeNone},0.2).to(d,2,{arAndVr:"77",roundProps:"arAndVr",onUpdate:g,ease:Linear.easeNone},0.2).to(d,1.2,{satisfied:"42",roundProps:"satisfied",onUpdate:e,ease:Linear.easeNone},0.2);
new ScrollMagic.Scene({triggerElement:"#trigger-stats-animation",triggerHook:"onEnter"}).setTween(f).addTo(this.controller).reverse(false);}};a.pcLifeCycle={init:function(){this.controller=new ScrollMagic.Controller();
this.scene={};window.addEventListener("resize",a.pcLifeCycle.resizeHandler);a.pcLifeCycle.resizeHandler();$(".stat-col .stat-container").matchHeight();if(jQuery(".client-solutions.pc-lifecycle").length>0){$(".bullet-area p").matchHeight();
a.pcLifeCycle.initialzeDiagram();}if(jQuery(".client-solutions.plan").length>0){a.pcLifeCycle.planStats();}if(jQuery(".client-solutions.deploy").length>0){a.pcLifeCycle.deployStats();}if(jQuery(".client-solutions.manage").length>0){a.pcLifeCycle.manageStats();
}if(jQuery(".client-solutions.optimize").length>0){a.pcLifeCycle.optimizeStats();}$(".grey-text-top").matchHeight();$(".stat-container .desc-text").matchHeight();},resizeHandler:function(){if(jQuery(".client-solutions.pc-lifecycle").length>0){if(jQuery(".hero-image").length>0){var g=jQuery(".hero-image > img").height();
var c=parseInt((g*1)+-110);jQuery(".pc-lifecycle-area .heading-container").css({"margin-top":c+"px"});}$.fn.matchHeight._update();}var e=jQuery("body").width();var f,b;var d;if(e>1279){jQuery(".client-solutions.pc-lifecycle .pc-lifecycle-diagram-container .pc-lifecycle-diagram").css({width:500,height:500});
jQuery(".client-solutions.pc-lifecycle .pc-lifecycle-diagram-container").css({width:500,height:500});}else{if(e>979){jQuery(".client-solutions.pc-lifecycle .pc-lifecycle-diagram-container .pc-lifecycle-diagram").css({width:400,height:400});
jQuery(".client-solutions.pc-lifecycle .pc-lifecycle-diagram-container").css({width:400,height:400});}else{if(jQuery("html").hasClass("ie")){f=0.9;b=1000;d=(e*f);jQuery(".client-solutions.pc-lifecycle .pc-lifecycle-diagram-container .pc-lifecycle-diagram").css({width:d,height:d});
jQuery(".client-solutions.pc-lifecycle .pc-lifecycle-diagram-container").css({width:d,height:d});}else{jQuery(".client-solutions.pc-lifecycle .pc-lifecycle-diagram-container .pc-lifecycle-diagram").css({width:"100%",height:"inherit"});
jQuery(".client-solutions.pc-lifecycle .pc-lifecycle-diagram-container").css({width:"100%",height:"inherit"});}}}$(".next-phase").height($(".pc-lifecycle-solution-chip img").height());},initialzeDiagram:function(){if(jQuery(".client-solutions.pc-lifecycle .pc-lifecycle-diagram-container").length>0){var o=$("#phase_1");
var m=$("#phase_2");var l=$("#phase_3");var k=$("#phase_4");var g=$(".cls-5");var i=$(".callout");var p=$(".callout-v2.one .cycle-num > div");var h=$(".callout-v2.two .cycle-num > div");var j=$(".callout-v2.three .cycle-num > div");
var d=$(".callout-v2.four .cycle-num > div");jQuery(".pc-lifecycle-diagram-container").css({visibility:"visible"});var n=new TimelineMax({onComplete:b});n.from(o,0.9,{autoAlpha:0,ease:CustomEase.create("custom","M0,0 C0.44,0.066 0.71,0.18 0.834,0.408 0.964,0.647 0.976,0.86 1,1")},0).from(m,0.9,{autoAlpha:0,ease:CustomEase.create("custom","M0,0 C0.44,0.066 0.71,0.18 0.834,0.408 0.964,0.647 0.976,0.86 1,1")},0.6).from(l,0.8,{autoAlpha:0,ease:CustomEase.create("custom","M0,0 C0.44,0.066 0.71,0.18 0.834,0.408 0.964,0.647 0.976,0.86 1,1")},1.2).from(k,0.7,{autoAlpha:0,ease:CustomEase.create("custom","M0,0 C0.44,0.066 0.71,0.18 0.834,0.408 0.964,0.647 0.976,0.86 1,1")},1.8).from(p,0.6,{autoAlpha:0,top:10,ease:Power1.easeOut},0.6).from(h,0.6,{autoAlpha:0,top:10,ease:Power1.easeOut},1.2).from(j,0.6,{autoAlpha:0,top:10,ease:Power1.easeOut},1.8).from(d,0.6,{autoAlpha:0,top:10,ease:Power1.easeOut},2.2);
var f=new ScrollMagic.Controller();var e=new ScrollMagic.Scene({triggerElement:"#trigger2"}).setTween(n).addTo(f).reverse(false).triggerHook(1);var c=0.2;jQuery("#Circle #phase_1, .callout-v2.one").on("mouseover",function(q){jQuery(".phase-one-shadow").css({opacity:c});
jQuery("#Circle #phase_1, .callout-v2.one a").addClass("hover");}).on("mouseout",function(){jQuery(".phase-one-shadow").css({opacity:1});jQuery("#Circle #phase_1, .callout-v2.one a").removeClass("hover");
});jQuery("#Circle #phase_2, .callout-v2.two").on("mouseover",function(q){jQuery(".phase-two-shadow").css({opacity:c});jQuery("#Circle #phase_2, .callout-v2.two a").addClass("hover");}).on("mouseout",function(){jQuery(".phase-two-shadow").css({opacity:1});
jQuery("#Circle #phase_2, .callout-v2.two a").removeClass("hover");});jQuery("#Circle #phase_3, .callout-v2.three").on("mouseover",function(q){jQuery(".phase-three-shadow").css({opacity:c});jQuery("#Circle #phase_3, .callout-v2.three a").addClass("hover");
}).on("mouseout",function(){jQuery(".phase-three-shadow").css({opacity:1});jQuery("#Circle #phase_3, .callout-v2.three a").removeClass("hover");});jQuery("#Circle #phase_4, .callout-v2.four").on("mouseover",function(q){jQuery(".phase-four-shadow").css({opacity:c});
jQuery("#Circle #phase_4, .callout-v2.four a").addClass("hover");}).on("mouseout",function(){jQuery(".phase-four-shadow").css({opacity:1});jQuery("#Circle #phase_4, .callout-v2.four a").removeClass("hover");
});jQuery("#Circle #phase_1").on("click",function(){window.location.href="plan-design.htm";});jQuery("#Circle #phase_2").on("click",function(){window.location.href="deploy-integrate.htm";});jQuery("#Circle #phase_3").on("click",function(){window.location.href="manage-support.htm";
});jQuery("#Circle #phase_4").on("click",function(){window.location.href="optimize-retire.htm";});}function b(){$(".callout-one, .callout-v2.one").addClass("active");jQuery(".phase-one-shadow").css({opacity:1});
jQuery(".phase-one-shadow").css({opacity:1});$(".callout-v2.one .callout-text").css({opacity:1});setTimeout(function(){$(".callout-two, .callout-v2.two").addClass("active");jQuery(".phase-two-shadow").css({opacity:1});
$(".callout-v2.two .callout-text").css({opacity:1});},500);setTimeout(function(){$(".callout-three, .callout-v2.three").addClass("active");jQuery(".phase-three-shadow").css({opacity:1});$(".callout-v2.three .callout-text").css({opacity:1});
},1000);setTimeout(function(){$(".callout-four, .callout-v2.four").addClass("active");jQuery(".phase-four-shadow").css({opacity:1});$(".callout-v2.four .callout-text").css({opacity:1});},1500);}},planStats:function(){console.log("deskStats Animations");
var c={dedicated:0};function d(){var f=c.dedicated;$(".dedicated .num-char").text(a.utils.numberWithCommas(f));}var b=new TimelineMax();var e=b.to(c,2.2,{dedicated:"14000",roundProps:"dedicated",onUpdate:d,ease:Linear.easeNone},0.2);
new ScrollMagic.Scene({triggerElement:"#trigger-stats-animation",triggerHook:"onEnter"}).setTween(e).addTo(this.controller).reverse(false).triggerHook(1);},deployStats:function(){console.log("deskStats Animations");
var c={savings:0,faster:0};function f(){var g=c.savings;$(".savings .num-char").text(g);}function e(){var g=c.faster;$(".faster .num-char").text(g+"%");}var b=new TimelineMax();var d=b.to(c,2.2,{savings:"792",roundProps:"savings",onUpdate:f,ease:Linear.easeNone},0.2).to(c,2.2,{faster:"56",roundProps:"faster",onUpdate:e,ease:Linear.easeNone},0.2);
new ScrollMagic.Scene({triggerElement:"#trigger-stats-animation",triggerHook:"onEnter"}).setTween(d).addTo(this.controller).reverse(false).triggerHook(1);},manageStats:function(){console.log("manage Animations");
var c={fasterHardware:0};function d(){var f=c.fasterHardware;$(".faster-hardware .num-char").text(f+"x");}var b=new TimelineMax();var e=b.to(c,1,{fasterHardware:"11",roundProps:"fasterHardware",onUpdate:d,ease:Linear.easeNone},0.2);
new ScrollMagic.Scene({triggerElement:"#trigger-stats-animation",triggerHook:"onEnter"}).setTween(e).addTo(this.controller).reverse(false).triggerHook(1);},optimizeStats:function(){console.log("optimize Animations");
var d={countries:0,pounds:0};function e(){var g=d.countries;$(".countries .num-char").text(g);}function b(){var g=d.pounds;$(".pounds .num-char").text(g);}var c=new TimelineMax();var f=c.to(d,1.5,{countries:"83",roundProps:"countries",onUpdate:e,ease:Linear.easeNone},0.2).to(d,2.5,{pounds:"374",roundProps:"pounds",onUpdate:b,ease:Linear.easeNone},0.2);
new ScrollMagic.Scene({triggerElement:"#trigger-stats-animation",triggerHook:"onEnter"}).setTween(f).addTo(this.controller).reverse(false).triggerHook(1);}};a.hash={init:function(){var b=this;this.lastSection=0;
this.currentSection=0;a.hash.bindHashEvent();setTimeout(function(){b.getServerSectionHash();},100);},bindHashEvent:function(){window.addEventListener("hashchange",function(){a.hash.getServerSectionHash();
},false);},unBindHashEvent:function(){window.removeEventListener("hashchange",a.hash.getServerSectionHash);},getServerSectionHash:function(){var f=this.getHashValue("section");var e=this.getHashValue("video-overlay");
var d=this.getHashValue("overlay");var b=this.getHashValue("globalnav");var i=0;var h=0;var c=[500,600,800,900,1000,1100];$(".solutions-header-navigation a").each(function(l){var k=$(this).attr("href");
var j=k.replace("#","");if(location.hash.indexOf(j)>-1){console.log("found "+j);location.hash="section="+j;a.hash.currentSection=l;}});i=a.hash.currentSection-a.hash.lastSection;if(i===undefined){i=0;}if(i<0){i=i*-1;
}h=c[i];a.hash.lastSection=a.hash.currentSection;var g=a.app.anchorOffset;if($("#"+f).hasClass("section-mb-solution")){g=a.app.anchorOffset+55;}if(f&&!e&&!d&&!b){setTimeout(function(){$("html,body").clearQueue();
$("html,body").stop();$("html,body").animate({scrollTop:$("#"+f).offset().top-g},h,"swing");},50);}else{if(e||d||b){UW.util.hash.remove("section");}}},getHashValue:function(b){var c=location.hash.match(new RegExp(b+"=([^&]*)"));
return c?c[1]:null;},updateHashValue:function(b){b.forEach(function(c){UW.util.hash.set(c.key,c.value);});}};a.utils={init:function(){a.utils.setupBreakpoints();a.utils.checkDevAssetPath();a.utils.toolTabs();
},setupBreakpoints:function(){jQuery("body").append('<div class="device-xs visible-xs"></div><div class="device-sm visible-sm"></div><div class="device-md visible-md"></div><div class="device-lg visible-lg"></div>');
},isBreakpoint:function(b){return jQuery(".device-"+b).is(":visible");},toolTabs:function(){jQuery(".tool-tab-content").each(function(){if(window.location.href.indexOf("local")>-1||window.location.href.indexOf("thisisarebellion.com")>-1||window.location.href.indexOf("rebellion-workspace")>-1){var o="../images/";
}else{var o="/content/dam/uwaem/production-design-assets/en/campaigns/client-solutions/images/";}var r=jQuery(this).attr("id");var k=jQuery(this).find(".hotspot-content-panel > div").size();jQuery(this).find(".tool-tab-mobile").append('<div id="mobile-slider-'+r+'" class="total-slides-'+k+'"></div>');
var m;var j=jQuery("#mobile-slider-"+r);var v=jQuery(this).find(".intro-content").html();var u=jQuery(this).find(".intro-content-small").html();jQuery(j).append('<div class="tools-slide slide-0"><div class="slide-image slide-intro match-height"><img class="slide-image-mobile" src="'+o+"slider-"+r+'-0.jpg"></div><div class="slide-content"><div class="slide-heading">'+v+'</div><div class="slide-copy">'+u+"</div></div></div>");
for(m=1;m<k;m++){var p=m+1;var n=jQuery(this).find(".hotspot-content-panel > div:nth-child("+p+")");var s=jQuery(n).find(".heading").text();var t=jQuery(n).find("p").text();var l=jQuery(n).find("img").attr("src");
var q=jQuery(n).find("a").html();jQuery(j).append('<div class="tools-slide slide-'+p+'"><div class="slide-image match-height"><img class="slide-image-mobile" src="'+l+'"></div><div class="slide-content"><div class="slide-heading">'+s+'</div><p class="slide-copy">'+t+'</p><a class="slide-link">'+q+"</a></div></div>");
}jQuery("#mobile-slider-"+r).slick({dots:true,arrows:false});jQuery(".match-height").matchHeight();});var b=document.getElementById("editor");var f=document.getElementById("animator");var d=document.getElementById("visual");
var i=document.getElementById("graphic");var c=new ScrollMagic.Controller();var h=new ScrollMagic.Scene({triggerElement:"#editor",duration:400}).addTo(c).on("enter",function(){jQuery(".tool-tab-button").removeClass("tool-tab-button-active");
jQuery("#tool-tab-button-editor").addClass("tool-tab-button-active");});var h=new ScrollMagic.Scene({triggerElement:"#animator",duration:400}).addTo(c).on("enter",function(){jQuery(".tool-tab-button").removeClass("tool-tab-button-active");
jQuery("#tool-tab-button-animator").addClass("tool-tab-button-active");});var h=new ScrollMagic.Scene({triggerElement:"#visual",duration:400}).addTo(c).on("enter",function(){jQuery(".tool-tab-button").removeClass("tool-tab-button-active");
jQuery("#tool-tab-button-visual").addClass("tool-tab-button-active");});var h=new ScrollMagic.Scene({triggerElement:"#graphic",duration:400}).addTo(c).on("enter",function(){jQuery(".tool-tab-button").removeClass("tool-tab-button-active");
jQuery("#tool-tab-button-graphic").addClass("tool-tab-button-active");});var h=new ScrollMagic.Scene({triggerElement:"#section-contact-component",duration:400}).addTo(c).on("enter",function(){jQuery(".tool-tab-button").removeClass("tool-tab-button-active");
});var e=parseInt(jQuery("#tool-tabs-panel").offset().top);var g;jQuery(window).bind("scroll",function(){console.log("Scroll: "+jQuery(window).scrollTop());console.log("Num: "+e);console.log("Tool top: "+g);
if(jQuery(window).scrollTop()>g){jQuery(".tool-tabs").addClass("tool-tabs-fixed");jQuery(".tool-tabs-content").addClass("tool-tabs-content-fixed");}else{e=jQuery("#tool-tabs-panel").offset().top;g=e-100;
jQuery(".tool-tabs").removeClass("tool-tabs-fixed");jQuery(".tool-tabs-content").removeClass("tool-tabs-content-fixed");}});jQuery(".tool-tab-button").on("click",function(l){l.preventDefault();var m=jQuery(window).width();
var o=this;var j=jQuery(this);var n=jQuery(o).data("tool-tab");console.log(n);if(m>979){if(jQuery(window).scrollTop()>g){console.log("Test");jQuery("html, body").animate({scrollTop:jQuery("#"+n).offset().top-150},1000);
}else{jQuery("html, body").animate({scrollTop:jQuery("#"+n).offset().top-195},1000);}}else{jQuery(".slick-slider").slick("slickGoTo",0,true);jQuery(".hotspot-content-panel > div").hide();var k=jQuery(".tool-tab-content").size();
jQuery(".tabs-intro").show();jQuery(".tool-tab-button").removeClass("ttb-active");jQuery(o).addClass("ttb-active");jQuery(".tool-tab-content").removeClass("ttc-active");jQuery("#"+n).addClass("ttc-active");
jQuery("#mobile-slider-"+n).slick("refresh");jQuery(window).trigger("resize");jQuery(".match-height").matchHeight();}});jQuery(".hotspot").on("click",function(k){var j=jQuery(this).attr("id");jQuery(".hotspot").removeClass("hs-active");
jQuery(this).parent().parent().find(".hotspot-content-panel > div").hide();jQuery(this).parent().find(".intro-heading").show();jQuery("."+j).fadeIn();if(!jQuery(".hotspot-content-panel").hasClass("hs-open")){jQuery(".hotspot-content-panel").addClass("hs-open");
jQuery(".tabs-intro").hide();}});},checkDevAssetPath:function(){var b="/content/dam/uwaem/production-design-assets/en/campaigns/client-solutions/";if(window.location.href.indexOf("local")>-1||window.location.href.indexOf("thisisarebellion.com")>-1||window.location.href.indexOf("rebellion-workspace")>-1){jQuery("img").each(function(){jQuery(this).attr("src",jQuery(this).attr("src").replace(b,"../"));
});jQuery('a[href$=".pdf"]').each(function(){jQuery(this).attr("href",jQuery(this).attr("href").replace(b,"../"));});jQuery("source").each(function(){jQuery(this).attr("src",jQuery(this).attr("src").replace(b,"../"));
});jQuery("div.image-container.background-image").each(function(){jQuery(this).attr("style",jQuery(this).attr("style").replace(b,"../"));});jQuery("img.rendition").each(function(){jQuery(this).attr("data-src-xsmall",jQuery(this).attr("data-src-xsmall").replace(b,"../"));
jQuery(this).attr("data-src-small",jQuery(this).attr("data-src-small").replace(b,"../"));jQuery(this).attr("data-src-medium",jQuery(this).attr("data-src-medium").replace(b,"../"));jQuery(this).attr("data-src-large",jQuery(this).attr("data-src-large").replace(b,"../"));
jQuery(this).attr("data-src-xlarge",jQuery(this).attr("data-src-xlarge").replace(b,"../"));jQuery(this).attr("data-src-xxlarge",jQuery(this).attr("data-src-xxlarge").replace(b,"../"));});setTimeout(function(){a.app.init();
$.fn.matchHeight._update();},250);}else{if(jQuery(".match-height").length>0){jQuery(".match-height").matchHeight();}setTimeout(function(){a.app.init();$.fn.matchHeight._update();},250);setTimeout(function(){$.fn.matchHeight._update();
},500);}},numberWithCommas:function(b){return b.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");}};a.startup={init:function(){a.utils.init();}};}(window.ClientSolutions=window.ClientSolutions||{}));jQuery(document).ready(window.ClientSolutions.startup.init);
jQuery(".match-height").matchHeight();