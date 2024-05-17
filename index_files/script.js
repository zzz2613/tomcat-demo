var mainV = 0;
var maxVisual = jQuery(".mainRoll .rollDiv").size() -1;
var isMove = false;
var rInterval;
var rTime = 10000;
var isPlay = true;
var isRoll = false;
var mainPop = false;
var c, d, e;
var ctx;
var aa =0;
var bb =0;
var cc =0;
var count1=0;
var count2=0;
var count3=0;
var _popTHIS;
var _popTHIS2;

jQuery(document).ready(function(){
	//리사이징관련
	//페이지열리자마자 실행될것
	var isWeb;
	var isTabl;
	var isMobile;

	//인디탭
	var swiper = new Swiper('.swiper-container', {
		//pagination: '.swiper-pagination',
		slidesPerView: 'auto',
		//paginationClickable: true,
		spaceBetween: 0,
		hashnav: true,
		hashnavWatchState: true
	});

	//해더검색
	var curHsrch = false;
	TweenMax.to(jQuery("#header .inner .menuPack .hSrchBt img").eq(1), 0, {opacity:0, rotation:0, ease:Power3.easeOut});
	jQuery("#header .hSrch").slideUp(0);
	jQuery("#header .inner .menuPack .hSrchBt").click(function(){
		if(curHsrch == false){
			TweenMax.to(jQuery("#header .inner .menuPack .hSrchBt img").eq(0), .8, {opacity:0, rotation:-360, ease:Power3.easeOut});
			TweenMax.to(jQuery("#header .inner .menuPack .hSrchBt img").eq(1), .8, {opacity:1, rotation:-360, ease:Power3.easeOut});
			jQuery("#header .hSrch").stop().slideDown(300);
			jQuery("#header .inner .menuPack .hSrchBt").attr("title", "검색닫기");
			jQuery(".dimdBg").stop().fadeIn(300);

			curHsrch = true;
		}else if(curHsrch == true){
			TweenMax.to(jQuery("#header .inner .menuPack .hSrchBt img").eq(0), .8, {opacity:1, rotation:0, ease:Power3.easeOut});
			TweenMax.to(jQuery("#header .inner .menuPack .hSrchBt img").eq(1), .8, {opacity:0, rotation:360, ease:Power3.easeOut});
			jQuery("#header .hSrch").stop().slideUp(300);
			jQuery("#header .inner .menuPack .hSrchBt").attr("title", "검색");
			if(jQuery(".downLayerPop").size() != 0){
				if(jQuery(".menuDiv").is(":hidden") && jQuery(".hProduct") .is(":hidden") && jQuery(".downLayerPop").is(":hidden")){
					jQuery(".dimdBg").stop().fadeOut(300);
				}
			}else{
				if(jQuery(".menuDiv").is(":hidden") && jQuery(".hProduct") .is(":hidden")){
					jQuery(".dimdBg").stop().fadeOut(300);
				}
			}
			curHsrch = false;
		}
	});

	var curHpro1 = -1;
	var curHpro2 = -1;
	jQuery("#header .hProduct .pBody dt .openBt").each(function(q){
		jQuery(this).click(function(){
			if(curHpro1 != q){
				jQuery("#header .hProduct .pBody dd").eq(curHpro1).stop().slideUp(350);
				jQuery("#header .hProduct .pBody dt").eq(curHpro1).removeClass("on");
				TweenMax.to(jQuery("#header .hProduct .pBody dt .openBt").eq(curHpro1).find("img.off"), .5, {opacity:1, ease:Power3.easeOut});
				TweenMax.to(jQuery("#header .hProduct .pBody dt .openBt").eq(curHpro1).find("img.on"), .5, {opacity:0, ease:Power3.easeOut});
				curHpro1 = q;
				jQuery("#header .hProduct .pBody dd").eq(curHpro1).stop().slideDown(350);
				jQuery("#header .hProduct .pBody dt").eq(curHpro1).addClass("on");
				TweenMax.to(jQuery("#header .hProduct .pBody dt .openBt").eq(curHpro1).find("img.off"), .5, {opacity:0, ease:Power3.easeOut});
				TweenMax.to(jQuery("#header .hProduct .pBody dt .openBt").eq(curHpro1).find("img.on"), .5, {opacity:1, ease:Power3.easeOut});
			}else if(curHpro1 == q){
				jQuery("#header .hProduct .pBody dd").eq(curHpro1).stop().slideUp(350);
				jQuery("#header .hProduct .pBody dt").eq(curHpro1).removeClass("on");
				TweenMax.to(jQuery("#header .hProduct .pBody dt .openBt").eq(curHpro1).find("img.off"), .5, {opacity:1, ease:Power3.easeOut});
				TweenMax.to(jQuery("#header .hProduct .pBody dt .openBt").eq(curHpro1).find("img.on"), .5, {opacity:0, ease:Power3.easeOut});
				curHpro1 = -1;
			}
		});
	});

	TweenMax.to(jQuery("#header .hProduct .pBody dd .txt1").eq(curHpro2).find("img.on"), 0, {opacity:0, ease:Power3.easeOut});
	jQuery("#header .hProduct .pBody dd .txt1").each(function(q){
		jQuery(this).find(".openBt2 a").click(function(){
			jQuery("#header .hProduct .pBody dd .txt2").stop().slideUp(350);
			jQuery(this).parent().parent().next(".txt2").stop().slideDown(300);

			if(curHpro2 != q){
				jQuery("#header .hProduct .pBody dd .txt1").eq(curHpro2).removeClass("on");
				TweenMax.to(jQuery("#header .hProduct .pBody dd .txt1").eq(curHpro2).find(".off"), .5, {opacity:1, ease:Power3.easeOut});
				TweenMax.to(jQuery("#header .hProduct .pBody dd .txt1").eq(curHpro2).find(".on"), .5, {opacity:0, ease:Power3.easeOut});
				curHpro2 = q;
				jQuery("#header .hProduct .pBody dd .txt1").eq(curHpro2).addClass("on");
				TweenMax.to(jQuery("#header .hProduct .pBody dd .txt1").eq(curHpro2).find(".off"), .5, {opacity:0, ease:Power3.easeOut});
				TweenMax.to(jQuery("#header .hProduct .pBody dd .txt1").eq(curHpro2).find(".on"), .5, {opacity:1, ease:Power3.easeOut});
			}else if(curHpro2 == q){
				jQuery("#header .hProduct .pBody dd .txt2").stop().slideUp(350);
				jQuery("#header .hProduct .pBody dd .txt1").eq(curHpro2).removeClass("on");
				TweenMax.to(jQuery("#header .hProduct .pBody dd .txt1").eq(curHpro2).find(".off"), .5, {opacity:1, ease:Power3.easeOut});
				TweenMax.to(jQuery("#header .hProduct .pBody dd .txt1").eq(curHpro2).find(".on"), .5, {opacity:0, ease:Power3.easeOut});
				curHpro2 = -1;
			}
		})
	})

	//메뉴열기
	jQuery("#header .menuDiv").css('height', jQuery(document).height()+5);
	TweenMax.to(jQuery("#header .menuDiv"), 0, {right:-320, ease:Power3.easeOut});
	jQuery("#header .inner .menuPack .menuBt").click(function(){
		jQuery("#header .menuDiv").css('display', 'block');
		TweenMax.to(jQuery("#header .menuDiv"), .5, {right:0, ease:Power3.easeOut});
		TweenMax.to(jQuery("#header .inner .menuPack .menuBt"), .5, {opacity:0, ease:Power3.easeOut});
		jQuery(".dimdBg").stop().fadeIn(300);
	});

	jQuery("#header .menuDiv .xbt").click(function(){
		TweenMax.to(jQuery("#header .menuDiv"), .5, {right:-320, ease:Power3.easeOut, onComplete:function(){
			jQuery("#header .menuDiv .twoD").hide();
			TweenMax.to(jQuery("#header .menuDiv .oneD").eq(curMenuN).find("span"), 0, {rotation:180, ease:Power3.easeOut});
			jQuery("#header .menuDiv").css('display', 'none');
		}});
		TweenMax.to(jQuery("#header .inner .menuPack .menuBt"), .5, {opacity:1, ease:Power3.easeOut});
		TweenMax.to(jQuery("#header .menuDiv .oneD").eq(curMenuN).find("span"), .5, {rotation:180, ease:Power3.easeOut});
		curMenuN = -1;

		if(jQuery(".downLayerPop").size() != 0){
			if(jQuery(".hProduct").is(":hidden") && jQuery(".hSrch") .is(":hidden") && jQuery(".downLayerPop").is(":hidden")){
				jQuery(".dimdBg").stop().fadeOut(300);
			}
		}else{
			if(jQuery(".hProduct").is(":hidden") && jQuery(".hSrch") .is(":hidden")){
				jQuery(".dimdBg").stop().fadeOut(300);
			}
		}
	});

	//dimd로 닫기
	jQuery(".dimdBg").click(function(){
		jQuery("#header .menuDiv .xbt").click();
		jQuery("#header .hProduct .xbt").click();
		jQuery(".downLayerPop .closeBtn").click();
		jQuery(".downLayerPop .popCon .writeDiv .btnArea a.cancelBtn").click();
		if($(".hSrch").is(":visible")) {
			TweenMax.to(jQuery("#header .inner .menuPack .hSrchBt img").eq(0), .8, {opacity:1, rotation:0, ease:Power3.easeOut});
			TweenMax.to(jQuery("#header .inner .menuPack .hSrchBt img").eq(1), .8, {opacity:0, rotation:360, ease:Power3.easeOut});
			jQuery("#header .hSrch").stop().slideUp(300);
			jQuery("#header .inner .menuPack .hSrchBt").attr("title", "검색");
			curHsrch = false;
		}
		jQuery(".dimdBg").stop().fadeOut(300);
	});


	//메뉴
	var curMenuN  = -1;
	jQuery("#header .menuDiv .twoD").slideUp(0);
	TweenMax.to(jQuery("#header .menuDiv .oneD span"), 0, {rotation:180, ease:Power3.easeOut});
	jQuery("#header .menuDiv .oneD").each(function(q){
		jQuery(this).click(function(){
			if(q != curMenuN){
				jQuery("#header .menuDiv .twoD").eq(curMenuN).stop(true, true).slideUp(300);
				TweenMax.to(jQuery("#header .menuDiv .oneD").eq(curMenuN).find("span"), .5, {rotation:180, ease:Power3.easeOut});
				curMenuN = q;
				jQuery("#header .menuDiv .twoD").eq(curMenuN).stop(true, true).slideDown(300);
				TweenMax.to(jQuery("#header .menuDiv .oneD").eq(curMenuN).find("span"), .5, {rotation:0, ease:Power3.easeOut});
			}else if(q == curMenuN){
				jQuery("#header .menuDiv .twoD").eq(curMenuN).stop(true, true).slideUp(300);
				TweenMax.to(jQuery("#header .menuDiv .oneD").eq(curMenuN).find("span"), .5, {rotation:180, ease:Power3.easeOut});
				curMenuN = -1;
			}
		});
	})

	//맨위로 버튼
	TweenMax.to(jQuery(".topBt"), 0, {opacity:0,  ease:Power3.easeOut});
	jQuery(".topBt").click(function(){
		//TweenMax.to(jQuery("html, body"), 1, {"scrollTop":0,  ease:Power3.easeOut});
		jQuery("html, body").animate({"scrollTop":0}, 300);
	});

	//제품명 클릭시
	jQuery(".anchorIndi .tit span").click(function(){
		jQuery("html, body").animate({"scrollTop":0}, 300);
	});

	jQuery(".indicator .title").click(function(){
		jQuery("html, body").animate({"scrollTop":0},300);
	});

	jQuery(window).scroll(function(){
		if(jQuery(window).scrollTop() > 20){
			TweenMax.to(jQuery(".topBt"), .8, {opacity:1, ease:Power3.easeOut});
		}else if(jQuery(window).scrollTop() <= 19){
			TweenMax.to(jQuery(".topBt"), .8, {opacity:0, ease:Power3.easeOut});
		}

		//회사소개 개요
		if(jQuery(window).scrollTop() > jQuery(".subV2").height() + jQuery(".companyDiv .topDiv").height()) {
			jQuery(".companyDiv .midDiv .introDiv .box").each(function(q){
				TweenMax.to(jQuery(".companyDiv .midDiv .introDiv .box").eq(q), 1, {marginTop:0, opacity:1, delay:0.3 * q, ease:Power3.easeOut});
			});
		}

		//회사소개 비전
		if(location.href.indexOf("vision") > -1){
			if(jQuery(window).width() > 953){
				if(jQuery(window).scrollTop() > 650) {
					jQuery(".visionDiv .vision").each(function(q){
						TweenMax.to(jQuery(".visionDiv .vision").eq(q), 1, {top:90, opacity:1, delay:0.5 * q, ease:Power3.easeOut,onComplete:function(){
							TweenMax.to(jQuery(".visionDiv .vision .img").eq(q), 0.5,{top:0, opacity:1, delay:0.2 * q, ease:Power3.easeOut});
						}});
						/*
						setInterval(drawLoading, 120);
						setInterval(drawLoading2, 120);
						setInterval(drawLoading3, 120);
						*/
					});
				}
			}else if (jQuery(window).width() < 953 && jQuery(window).width() > 701){
				if(jQuery(window).scrollTop() > jQuery(".visionDiv .vision").eq(0).offset().top - 700){
					TweenMax.to(jQuery(".visionDiv .vision").eq(0), 1, {top:40, opacity:1, ease:Power3.easeOut});
					TweenMax.to(jQuery(".visionDiv .vision .img").eq(0), 0.5,{top:0, opacity:1,delay:0.5, ease:Power3.easeOut});
					/*
					setInterval(drawLoading, 30);
					*/
				}
				if(jQuery(window).scrollTop() > jQuery(".visionDiv .vision").eq(1).offset().top - 700){
					TweenMax.to(jQuery(".visionDiv .vision").eq(1), 1, {top:300, opacity:1, ease:Power3.easeOut});
					TweenMax.to(jQuery(".visionDiv .vision .img").eq(1), 0.5,{top:0, opacity:1,delay:0.5, ease:Power3.easeOut});
					/*
					setInterval(drawLoading2, 30);
					*/
				}
				if(jQuery(window).scrollTop() > jQuery(".visionDiv .vision").eq(2).offset().top - 700){
					TweenMax.to(jQuery(".visionDiv .vision").eq(2), 1, {top:560, opacity:1, ease:Power3.easeOut});
					TweenMax.to(jQuery(".visionDiv .vision .img").eq(2), 0.5,{top:0, opacity:1,delay:0.5, ease:Power3.easeOut});
					/*
					setInterval(drawLoading3, 30);
					*/
				}
			}else if(jQuery(window).width() < 700){
				if(jQuery(window).scrollTop() > jQuery(".visionDiv .vision").eq(0).offset().top - 300){
					TweenMax.to(jQuery(".visionDiv .vision").eq(0), 1, {top:40, opacity:1, ease:Power3.easeOut});
					TweenMax.to(jQuery(".visionDiv .vision .img").eq(0), 0.5,{top:0, opacity:1,delay:0.5, ease:Power3.easeOut});
					/*
					setInterval(drawLoading, 30);
					*/
				}
				if(jQuery(window).scrollTop() > jQuery(".visionDiv .vision").eq(1).offset().top - 300){
					TweenMax.to(jQuery(".visionDiv .vision").eq(1), 1, {top:300, opacity:1, ease:Power3.easeOut});
					TweenMax.to(jQuery(".visionDiv .vision .img").eq(1), 0.5,{top:0, opacity:1,delay:0.5, ease:Power3.easeOut});
					/*
					setInterval(drawLoading2, 30);
					*/
				}
				if(jQuery(window).scrollTop() > jQuery(".visionDiv .vision").eq(2).offset().top - 300){
					TweenMax.to(jQuery(".visionDiv .vision").eq(2), 1, {top:610, opacity:1, ease:Power3.easeOut});
					TweenMax.to(jQuery(".visionDiv .vision .img").eq(2), 0.5,{top:0, opacity:1,delay:0.5, ease:Power3.easeOut});
					/*
					setInterval(drawLoading3, 30);
					*/
				}
			}
		}

	})

	//제품특징탭 클릭
	jQuery(".anchorIndi .info a").each(function(q){
		jQuery(this).click(function(){
			if(isMobile == true && isTabl == false && isTabl == false){
				TweenMax.to(jQuery("html, body"), .8, {"scrollTop":jQuery(jQuery("div[id^=pt]").eq(q)).offset().top-80, ease:Power3.easeOut});
			}else if(isTabl == true && isMobile == false && isWeb == false){
				TweenMax.to(jQuery("html, body"), .8, {"scrollTop":jQuery(jQuery("div[id^=pt]").eq(q)).offset().top-80, ease:Power3.easeOut});
			}else if(isWeb == true && isMobile == false && isTabl == false){
				TweenMax.to(jQuery("html, body"), .8, {"scrollTop":jQuery(jQuery("div[id^=pt]").eq(q)).offset().top-20, ease:Power3.easeOut});
			}
		});

		jQuery(".anchorIndi .info a").css("border-bottom", "0");
		jQuery(window).scroll(function(){
			if(jQuery(jQuery("div[id^=pt]").eq(q)))
			{
				var fontcolor = jQuery(".anchorIndi .question a").data().fontcolor;
				if(isMobile == true && isTabl == false && isTabl == false){
					if(jQuery(window).scrollTop() >= jQuery(jQuery("div[id^=pt]").eq(q)).offset().top-80){
						jQuery(".anchorIndi .info a").css("border-bottom", "0");
						jQuery(".anchorIndi .info a").removeClass("on");
						jQuery(".anchorIndi .info a").eq(q).css("border-bottom", "5px solid " + fontcolor);
						jQuery(".anchorIndi .info a").eq(q).addClass("on");
					}else if(jQuery(window).scrollTop() < jQuery(jQuery("div[id^=pt]").eq(0)).offset().top-80){
						jQuery(".anchorIndi .info a").css("border-bottom", "0");
						jQuery(".anchorIndi .info a").removeClass("on");
					}
				}else if(isTabl == true && isMobile == false && isWeb == false){
					if(jQuery(window).scrollTop() >= jQuery(jQuery("div[id^=pt]").eq(q)).offset().top-80){
						jQuery(".anchorIndi .info a").css("border-bottom", "0");
						jQuery(".anchorIndi .info a").removeClass("on");
						jQuery(".anchorIndi .info a").eq(q).css("border-bottom", "5px solid " + fontcolor);
						jQuery(".anchorIndi .info a").eq(q).addClass("on");
					}else if(jQuery(window).scrollTop() < jQuery(jQuery("div[id^=pt]").eq(0)).offset().top-80){
						jQuery(".anchorIndi .info a").css("border-bottom", "0");
						jQuery(".anchorIndi .info a").removeClass("on");
					}
				}else if(isWeb == true && isMobile == false && isTabl == false){
					if(jQuery(window).scrollTop() >= jQuery(jQuery("div[id^=pt]").eq(q)).offset().top-20){
						jQuery(".anchorIndi .info a").css("border-bottom", "0");
						jQuery(".anchorIndi .info a").removeClass("on");
						jQuery(".anchorIndi .info a").eq(q).css("border-bottom", "5px solid " + fontcolor);
						jQuery(".anchorIndi .info a").eq(q).addClass("on");
					}else if(jQuery(window).scrollTop() < jQuery(jQuery("div[id^=pt]").eq(0)).offset().top-20){
						jQuery(".anchorIndi .info a").css("border-bottom", "0");
						jQuery(".anchorIndi .info a").removeClass("on");
					}
				}
			}

		}); jQuery(window).scroll();
	});

	if(jQuery(".anchorIndi .question a").data())
	{
		var fontcolor = jQuery(".anchorIndi .question a").data().fontcolor;
		TweenMax.to(jQuery(".anchorIndi .question a"), 0, {'background-color' : 'transparent', ease:Power3.easeOut});
		jQuery(".anchorIndi .question a").hover(function(){
			TweenMax.to(jQuery(this), .2, {'background-color' : fontcolor, ease:Power3.easeOut});
		}, function(){
			TweenMax.to(jQuery(this), .2, {'background-color' : 'transparent', 'color' : '#ffffff', ease:Power3.easeOut});
		})
	}

	//개인정보처리방침
	jQuery(".privacyPolicy .listBox > p > a").each(function(q){
		var scrollTit = jQuery(".privacyPolicy .subTit").eq(q+1).offset().top;
		jQuery(this).click(function(){
			jQuery("html, body").animate({"scrollTop": scrollTit }, 300);
		});
	});

	//PRODUCT 창 이동
	jQuery("#header .hProduct .pBody dt > a").click(function(){
		jQuery("#header .hProduct .xbt").click();
	});

	jQuery("#header .hProduct .pBody dd > .txt1 > a").click(function(){
		jQuery("#header .hProduct .xbt").click();
	});

	jQuery("#header .hProduct .pBody dd > .txt2 > a").click(function(){
		jQuery("#header .hProduct .xbt").click();
	});

	//스크롤
	var proScroll = false;
	TweenMax.to(jQuery(".anchorIndi .tit span"), 0, {top:-70, ease:Power3.easeOut});
	jQuery(window).scroll(function(){
		if(jQuery(window).scrollTop() > 75){
			TweenMax.to(jQuery(".topBt"), .8, {opacity:1, ease:Power3.easeOut});
		}else{
			TweenMax.to(jQuery(".topBt"), .8, {opacity:0, ease:Power3.easeOut});
		}

		if(jQuery(window).scrollTop() >= jQuery(".subV").height() - 64){
			jQuery(".anchorIndi").css({"position":"fixed", "top":0, "bottom":"auto"});

			TweenMax.to(jQuery(".anchorIndi .tit span"), .5, {top:20, ease:Power3.easeOut});
			TweenMax.to(jQuery(".anchorIndi"), .5, {'background-color' : '#000000', ease:Power3.easeOut});
			if(isTabl == true){
				TweenMax.to(jQuery(".anchorIndi"), .5, {height:100, ease:Power3.easeOut});
				TweenMax.to(jQuery(".anchorIndi .swiper-container"), .5, {top:50, ease:Power3.easeOut});
			}
			else if(isMobile == true){
				TweenMax.to(jQuery(".anchorIndi"), .5, {height:100, ease:Power3.easeOut});
				TweenMax.to(jQuery(".anchorIndi .swiper-container"), .5, {top:50, ease:Power3.easeOut});
			}
			proScroll = true;
		}else if(jQuery(window).scrollTop() < jQuery(".subV").height() - 64) {
			jQuery(".anchorIndi").css({"position":"absolute", "top":"auto", "bottom":0});
			TweenMax.to(jQuery(".anchorIndi .tit span"), .5, {top:-70, ease:Power3.easeOut});
			TweenMax.to(jQuery(".anchorIndi"), .5, {'background-color' : '', ease:Power3.easeOut});
			if(isTabl == true){
				TweenMax.to(jQuery(".anchorIndi"), .5, {height:45, ease:Power3.easeOut});
				TweenMax.to(jQuery(".anchorIndi .swiper-container"), .5, {top:0, ease:Power3.easeOut});
			}else if(isMobile == true){
				TweenMax.to(jQuery(".anchorIndi"), .5, {height:45, ease:Power3.easeOut});
				TweenMax.to(jQuery(".anchorIndi .swiper-container"), .5, {top:0, ease:Power3.easeOut});
			}
			proScroll = false;
		}

		if(jQuery(window).scrollTop() >= jQuery(".subV2").height() + 0){
			jQuery(".historyDiv .swiper-container").css({"position":"fixed", "top":"0"});
		}else if(jQuery(window).scrollTop() < jQuery(".subV2").height() + 0){
			jQuery(".historyDiv .swiper-container").css({"position":"absolute", "top":"0"});
		}

		//console.log(jQuery(window).scrollTop());
	});jQuery(window).scroll();

	//header 스크롤
	jQuery(window).scroll(function(){
		if(jQuery(window).scrollTop() >= 60){
			//jQuery("#header.twoD").css("display","none");
			jQuery(".indicator").css("display","block");
			TweenMax.to(jQuery(".indicator .title"), .5, {top:20, ease:Power3.easeOut});
		}else if (jQuery(window).scrollTop() < 60){
			//jQuery("#header.twoD").css("display","block");
			jQuery(".indicator").css("display","none");
			TweenMax.to(jQuery(".indicator .title"), .5, {top:-70, ease:Power3.easeOut});
		}
	});jQuery(window).scroll();

	//라이브러리 검색
	var swiper = new Swiper('.libSrch.swiper-container', {
		//pagination: '.swiper-pagination',
		swipeHandler: '.swipe-handler',
		slidesPerView: 'auto',
		//paginationClickable: true,
		spaceBetween: 0,
		hashnav: true,
		hashnavWatchState: true
	});

	var curLibSrch = 0;
	jQuery(".libSrch .swiper-slide").each(function(q){
		jQuery(this).find("a").click(function(){
			if(q == 0){
				jQuery(".libSrch .swiper-slide").removeClass("on");
				jQuery(".libSrch .swiper-slide").eq(0).addClass("on");
				jQuery(".libSrch .proCheckSrch").stop().slideUp(350);
				curLibSrch = -1;
			}else{
				if(curLibSrch != q){
					jQuery(".libSrch .swiper-slide").removeClass("on");
					jQuery(".libSrch .swiper-slide").eq(curLibSrch).removeClass("on");
					jQuery(".libSrch .proCheckSrch").eq(curLibSrch-1).stop().slideUp(350);
					curLibSrch = q;
					jQuery(".libSrch .swiper-slide").eq(curLibSrch).addClass("on");
					jQuery(".libSrch .proCheckSrch").eq(curLibSrch-1).stop().slideDown(350);
				}else if(curLibSrch == q){
					jQuery(".libSrch .swiper-slide").eq(curLibSrch).removeClass("on");
					jQuery(".libSrch .proCheckSrch").eq(curLibSrch-1).stop().slideUp(350);
					curLibSrch = -1;
				}
			}
		})
	});

	//라이브러리 팝업 닫기
	jQuery("body").click(function(e){
		if(jQuery(".proCheckSrch").is(":visible")) {
			if(!jQuery(".proCheckSrch").has(e.target).length && !jQuery(".swiper-slide").has(e.target).length ){
				jQuery(".libSrch .swiper-slide").removeClass("on");
				jQuery(".libSrch .proCheckSrch").stop().slideUp(350);
				jQuery(".libSrch .proCheckSrch input").attr("checked",false);
				jQuery(".libSrch .proCheckSrch span").removeClass("on");
				jQuery(".libSrch .proCheckSrch .check3Pack").stop().slideUp(350);
				jQuery(".libSrch .proCheckSrch .check3Pack").stop().slideUp(350);
				TweenMax.to(jQuery(".libSrch .proCheckSrch span img.off"), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(".libSrch .proCheckSrch span img.on"), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				jQuery(".libSrch .proCheckSrch .check2 a").removeClass("on");
				TweenMax.to(jQuery(".libSrch .proCheckSrch .check2 a"), 1.5, {rotation:0, ease:Power3.easeOut});
				curLibSrch = -1;
			}
		}
	});

	//라이브러리 체크
	var curLibSlct = -1;
	var check2_allCnt = 0, check3_allCnt = 0, onCheckSize2 = 0, onCheckSize3 = 0;
	jQuery(".libSrch .proCheckSrch li").each(function(q){
		jQuery(this).find(".check2 a").click(function(){
			if(jQuery(this).hasClass("on") == false){
				jQuery(this).addClass("on");
				jQuery(this).parent().next(".check3Pack").stop().slideDown(350);
				TweenMax.to(jQuery(this), .3, {rotation:-45, ease:Power3.easeOut});
			}else if(jQuery(this).hasClass("on") == true){
				jQuery(this).removeClass("on");
				jQuery(this).parent().next(".check3Pack").stop().slideUp(350);
				TweenMax.to(jQuery(this), .3, {rotation:0, ease:Power3.easeOut});
			}
		})
	})

	TweenMax.to(jQuery(".libSrch .proCheckSrch ul .check1 span .off"), 0, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".libSrch .proCheckSrch ul .check1 span .on"), 0, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	jQuery(".libSrch .proCheckSrch li").each(function(q){
		jQuery(this).find(".check1 span").click(function(){
			if(jQuery(this).hasClass("on") == false){
				jQuery(this).addClass("on");
				jQuery(this).children("input").attr("checked",true);
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().find(".check2 span .off"), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().find(".check2 span .on"), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().find(".check3 span .off"), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().find(".check3 span .on"), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				jQuery(this).parent().parent().find(".check2 span").addClass("on");
				jQuery(this).parent().parent().find(".check2 span").children("input").attr("checked",true);
				jQuery(this).parent().parent().find(".check3 span").addClass("on");
				jQuery(this).parent().parent().find(".check3 span").children("input").attr("checked",true);

			}else if(jQuery(this).hasClass("on") == true){
				jQuery(this).removeClass("on");
				jQuery(this).children("input").attr("checked",false);
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});

				TweenMax.to(jQuery(this).parent().parent().find(".check2 span .off"), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().find(".check2 span .on"), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().find(".check3 span .off"), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().find(".check3 span .on"), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				jQuery(this).parent().parent().find(".check2 span").removeClass("on");
				jQuery(this).parent().parent().find(".check2 span").children("input").attr("checked",false);
				jQuery(this).parent().parent().find(".check3 span").removeClass("on");
				jQuery(this).parent().parent().find(".check3 span").children("input").attr("checked",false);

			}
		});
	});


	TweenMax.to(jQuery(".libSrch .proCheckSrch ul .check2 span .off"), 0, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".libSrch .proCheckSrch ul .check2 span .on"), 0, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	jQuery(".libSrch .proCheckSrch li").each(function(q){
		jQuery(this).find(".check2 span").click(function(){
			if(jQuery(this).hasClass("on") == false){
				console.log($(this).find("input").prop("checked"));
				jQuery(this).addClass("on");
				jQuery(this).children("input").attr("checked",true);
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});

				TweenMax.to(jQuery(this).parent().next(".check3Pack").find(".check3 span .off"), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().next(".check3Pack").find(".check3 span .on"), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				jQuery(this).parent().next(".check3Pack").find(".check3 span").addClass("on");
				jQuery(this).parent().next(".check3Pack").find(".check3 span").children("input").attr("checked",true);
				check2_allCnt = jQuery(this).parent().parent().find('.check2').size();
				onCheckSize2 = jQuery(this).parent().siblings('div.check2').children('span.on').size();

				if(check2_allCnt == onCheckSize2 + 1){
					TweenMax.to(jQuery(this).parent().parent().find('.check1').children('span').find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(this).parent().parent().find('.check1').children('span').find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(this).parent().parent().find(".check1 span").addClass("on");
					jQuery(this).parent().parent().find(".check1 span").children("input").attr("checked",true);
				}

				if($(this).siblings('a').hasClass('on') == false){
					$(this).siblings('a').trigger('click');
				}


			}else if(jQuery(this).hasClass("on") == true){
				console.log($(this).find("input").prop("checked"));
				jQuery(this).removeClass("on");
				jQuery(this).children("input").attr("checked",false);
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});

				TweenMax.to(jQuery(this).parent().next(".check3Pack").find(".check3 span .off"), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().next(".check3Pack").find(".check3 span .on"), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				jQuery(this).parent().next(".check3Pack").find(".check3 span").removeClass("on");
				jQuery(this).parent().next(".check3Pack").find(".check3 span").children("input").attr("checked",false);
				TweenMax.to(jQuery(this).parent().parent().find(".check1 span .off"), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().find(".check1 span .on"), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				jQuery(this).parent().parent().find(".check1 span").removeClass("on");
				jQuery(this).parent().parent().find(".check1 span").children("input").attr("checked",false);
				if($(this).siblings('a').hasClass('on') == true){
					$(this).siblings('a').trigger('click');
				}
			}


		});
	});

	TweenMax.to(jQuery(".libSrch .proCheckSrch ul .check3 span .off"), 0, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".libSrch .proCheckSrch ul .check3 span .on"), 0, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	jQuery(".libSrch .proCheckSrch li").each(function(q){
		jQuery(this).find(".check3 span").click(function(){
			if(jQuery(this).hasClass("on") == false){
				jQuery(this).addClass("on");
				jQuery(this).children("input").attr("checked",true);
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});

				check3_allCnt = jQuery(this).parent().parent().find('.check3').size();
				onCheckSize3 = jQuery(this).parent().siblings('div.check3').children('span.on').size();

				if(check3_allCnt == onCheckSize3 + 1){
					jQuery(this).parent().parent().prev().children('span').trigger('click');
				}

			}else if(jQuery(this).hasClass("on") == true){
				jQuery(this).removeClass("on");
				jQuery(this).children("input").attr("checked",false);

				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});

				TweenMax.to(jQuery(this).parent().parent().prev(".check2").find("span .off"), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().prev(".check2").find("span .on"), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().parent().find(".check1 span .off"), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().parent().find(".check1 span .on"), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				jQuery(this).parent().parent().prev(".check2").find("span").removeClass("on");
				jQuery(this).parent().parent().prev(".check2").find("span").children("input").attr("checked",false);
				jQuery(this).parent().parent().parent().find(".check1 span").removeClass("on");
				jQuery(this).parent().parent().parent().find(".check1 span").children("input").attr("checked",false);

				onCheckSize3 = jQuery(this).parent().siblings('div.check3').children('span.on').size();
				if(onCheckSize3 == 0){
					if($(this).parent().parent().prev().find('a').hasClass('on') == true){
						$(this).parent().parent().prev().find('a').trigger('click');
					}
				}
			}
		});
	});

	//라이브러리 검색조건 전체보기
	var curLibSchT = false;
	jQuery(".srchDiv .srchOption .bts .view").click(function(){
		if(curLibSchT == false){
			TweenMax.to(jQuery(".srchDiv .srchOption .keyword"), 0, {height:'auto', ease:Power3.easeOut});
			curLibSchT = true;
		}else if(curLibSchT == true){
			if(jQuery(window).width() > 953){
				TweenMax.to(jQuery(".srchDiv .srchOption .keyword"), 0, {height:40, ease:Power3.easeOut});
				curLibSchT = false;
			}else{
				TweenMax.to(jQuery(".srchDiv .srchOption .keyword"), 0, {height:35, ease:Power3.easeOut});
				curLibSchT = false;
			}
		}
	});

	//라이브러리 다운로드 레이어팝업 열기
	var isBtnY, isBtnY2, isBtnY3;
	jQuery(".listDiv .readCnt").each(function(q){
		jQuery(this).click(function(){
			isBtnY = jQuery(this).offset().top;
			_popTHIS = jQuery(this);
			jQuery(".downLayerPop").css("top", isBtnY - 250);
		});
	});

	jQuery("#pt99 > div > a").click(function(){
		isBtnY2 = jQuery(this).offset().top;
		_popTHIS = jQuery(this);
		if(jQuery(window).width() > 953){
			jQuery(".downLayerPop").css("top", isBtnY2 - 250);
		}else{
			jQuery(".downLayerPop").css("top", isBtnY2 - 300);
		}
	});

	jQuery("#pt99 > div > a:last").click(function(){
		isBtnY4 = jQuery(this).offset().top;
		_popTHIS2 = jQuery(this);
		if(jQuery(window).width() > 953){

		}else{
			jQuery(".downLayerPop").css("top", isBtnY2 - 450);
		}
	});

	jQuery(".searchDiv .resultBox").each(function(q){
		jQuery(this).click(function(){
			isBtnY = jQuery(this).offset().top;
			_popTHIS = jQuery(this);
			jQuery(".downLayerPop").css("top", isBtnY3 - 250);
		});
	});

	//라이브러리 다운로드 레이어팝업 닫기
	jQuery(".downLayerPop .closeBtn").click(function(){
		jQuery(".downLayerPop").stop().fadeOut(0);
		if(jQuery(".hProduct").is(":hidden") && jQuery(".hSrch") .is(":hidden") && jQuery(".menuDiv").is(":hidden")){
			jQuery(".dimdBg").stop().fadeOut(0);
		}
		if(jQuery(window).width() > 953){
			jQuery(".libraryList").css("padding-bottom", "50px");
			jQuery(".searchDiv").css("padding-bottom", "150px");
		}else{
			jQuery(".libraryList").css("padding-bottom", "50px");
			jQuery(".searchDiv").css("padding-bottom", "50px");
		}
		TweenMax.to(jQuery(".downLayerPop"), 0, {"scrollTop":0, delay:0,  ease:Power3.easeOut});
	});

	jQuery(".downLayerPop .popCon .writeDiv .btnArea a.cancelBtn").click(function(){
		jQuery(".downLayerPop .closeBtn").click();
	});

	var checkN = -1

	TweenMax.to(jQuery(".downLayerPop .popCon .termDiv .title .allCheck span .off"), 0, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".downLayerPop .popCon .termDiv .title .allCheck span .on"), 0, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	jQuery(".downLayerPop .popCon .termDiv .title .allCheck").each(function(q){
		jQuery(this).find("span").click(function(){
			if(jQuery(this).hasClass("on") == false){
				jQuery(this).addClass("on");
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});

				TweenMax.to(jQuery(this).parent().parent().parent().children(".checkDiv").find(".check span .off"), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().parent().children(".checkDiv").find(".check span .on"), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().parent().children(".checkDiv").find(".check2 span").eq(0).find(".off"), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().parent().children(".checkDiv").find(".check2 span").eq(0).find(".on"), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				checkN = -1;
				jQuery(this).parent().parent().parent().find(".check span").addClass("on");
				jQuery(this).parent().parent().parent().find(".check2 span").eq(0).addClass("on");

				if(jQuery(".downLayerPop .popCon .checkDiv .check2 span").eq(1).hasClass("on") == true){
					TweenMax.to(jQuery(this).parent().parent().parent().children(".checkDiv").find(".check2 span").eq(1).find(".off"), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(this).parent().parent().parent().children(".checkDiv").find(".check2 span").eq(1).find(".on"), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				}
			}else if(jQuery(this).hasClass("on") == true){
				jQuery(this).removeClass("on");
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});

				TweenMax.to(jQuery(this).parent().parent().parent().children(".checkDiv").find(".check span .off"), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().parent().children(".checkDiv").find(".check span .on"), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().parent().children(".checkDiv").find(".check2 span").eq(0).find(".off"), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().parent().children(".checkDiv").find(".check2 span").eq(0).find(".on"), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				jQuery(this).parent().parent().parent().find(".check span").removeClass("on");
				jQuery(this).parent().parent().parent().find(".check2 span").removeClass("on");
				checkN = -1;
			}
		});
	});

	TweenMax.to(jQuery(".downLayerPop .popCon .checkDiv .check span .off"), 0, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".downLayerPop .popCon .checkDiv .check span .on"), 0, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	jQuery(".downLayerPop .popCon .checkDiv .check").each(function(q){
		jQuery(this).find("span").click(function(){
			if(jQuery(this).hasClass("on") == false){
				jQuery(this).addClass("on");
				jQuery(this).children("input").attr("checked",true);
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});

			}else if(jQuery(this).hasClass("on") == true){
				jQuery(this).removeClass("on");
				jQuery(this).children("input").attr("checked",false);
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().parent().parent().find(".allCheck span .off"), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().parent().parent().find(".allCheck span .on"), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				jQuery(this).parent().parent().parent().parent().find(".allCheck span").removeClass("on");
			}
		});
	});

	TweenMax.to(jQuery(".downLayerPop .popCon .checkDiv .check2 span img.off"), 0, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".downLayerPop .popCon .checkDiv .check2 span img.on"), 0, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	jQuery(".downLayerPop .popCon .checkDiv .check2 span").each(function(q){
		jQuery(this).find("input").click(function(){
			if(checkN != q){
				if(q == 0){
					TweenMax.to(jQuery(".downLayerPop .popCon .checkDiv .check2 span").eq(1).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".downLayerPop .popCon .checkDiv .check2 span").eq(1).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".downLayerPop .popCon .checkDiv .check2 span").eq(1).removeClass("on");
					jQuery(".downLayerPop .popCon .checkDiv .check2 span").eq(1).children("input").attr("checked",false);
					checkN = q;
					TweenMax.to(jQuery(".downLayerPop .popCon .checkDiv .check2 span").eq(0).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".downLayerPop .popCon .checkDiv .check2 span").eq(0).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".downLayerPop .popCon .checkDiv .check2 span").eq(0).addClass("on");
					jQuery(".downLayerPop .popCon .checkDiv .check2 span").eq(0).children("input").attr("checked",true);
					checkN = -1;
				}else if(q == 1){
					TweenMax.to(jQuery(".downLayerPop .popCon .checkDiv .check2 span").eq(0).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".downLayerPop .popCon .checkDiv .check2 span").eq(0).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".downLayerPop .popCon .checkDiv .check2 span").eq(0).removeClass("on");
					jQuery(".downLayerPop .popCon .checkDiv .check2 span").eq(0).children("input").attr("checked",false);
					checkN = q;
					TweenMax.to(jQuery(".downLayerPop .popCon .checkDiv .check2 span").eq(1).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".downLayerPop .popCon .checkDiv .check2 span").eq(1).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".downLayerPop .popCon .checkDiv .check2 span").eq(1).addClass("on");
					jQuery(".downLayerPop .popCon .checkDiv .check2 span").eq(1).children("input").attr("checked",true);
					TweenMax.to(jQuery(this).parent().parent().parent().parent().find(".allCheck span .off"), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(this).parent().parent().parent().parent().find(".allCheck span .on"), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(this).parent().parent().parent().parent().find(".allCheck span").removeClass("on");
					checkN = -1;
				}
			}
		});
	});

	//라이브러리 뷰
	if($(".libraryView .conArea .picArea .pic img").size() < 1){
		$(".libraryView .conArea .picArea .pic").hide();
	}

	//라이브러리 뷰페이지 체크
	var libCheckN = 0;
	TweenMax.to(jQuery(".libraryView .conArea .agreeArea .check span .off"), 0, {rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".libraryView .conArea .agreeArea .check span .on"), 0, {rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".libraryView .conArea .agreeArea .check span.on .on"), 0, {rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	jQuery(".libraryView .conArea .agreeArea .check").each(function(q){
		jQuery(this).find("span").click(function(){
			if(jQuery(this).hasClass("on") == false){
				jQuery(this).addClass("on");
				jQuery(this).parents(".agreeArea").addClass("on");
				jQuery(this).parents(".agreeArea").find(".txtArea").stop(true,true).slideUp(200, function(){
					$(this).mCustomScrollbar("destroy");
				});
				jQuery(this).children("input").attr("checked",true);
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});

			}else if(jQuery(this).hasClass("on") == true){
				jQuery(this).removeClass("on");
				$(this).parents(".agreeArea").find(".txtArea").mCustomScrollbar();
				jQuery(this).children("input").attr("checked",false);
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
			}
		});
	});

	$(".libraryView .conArea .agreeArea .tit .btn").each(function(){
		$(this).click(function(){
			if(!$(this).parents(".agreeArea").hasClass("on")){
				$(this).parents(".agreeArea").addClass("on");
				$(this).parents(".agreeArea").find(".txtArea").stop(true, true).slideUp(200, function(){
					$(this).mCustomScrollbar("destroy");
				});
			}else{
				$(this).parents(".agreeArea").removeClass("on");
				$(this).parents(".agreeArea").find(".txtArea").stop(true, true).slideDown(200, function(){
					$(this).mCustomScrollbar();
				});
			}
		});
	});

	//라이브러리 뷰페이지 동의/비동의
	TweenMax.to(jQuery(".libraryView .conArea .agreeArea .check2 span img.off"), 0, {rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".libraryView .conArea .agreeArea .check2 span img.on"), 0, {rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".libraryView .conArea .agreeArea .check2 span.on img.on"), 0, {rotationY:-0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	jQuery(".libraryView .conArea .agreeArea .check2 span").each(function(q){
		jQuery(this).find("input").click(function(){
			if(libCheckN != q){
				console.log(libCheckN);
				if(q == 0){
					TweenMax.to(jQuery(".libraryView .conArea .agreeArea .check2 span").eq(1).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".libraryView .conArea .agreeArea .check2 span").eq(1).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".libraryView .conArea .agreeArea .check2 span").eq(1).removeClass("on");
					jQuery(".libraryView .conArea .agreeArea .check2 span").eq(1).children("input").attr("checked",false);
					libCheckN = q;
					TweenMax.to(jQuery(".libraryView .conArea .agreeArea .check2 span").eq(0).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".libraryView .conArea .agreeArea .check2 span").eq(0).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".libraryView .conArea .agreeArea .check2 span").eq(0).addClass("on");
					jQuery(".libraryView .conArea .agreeArea .check2 span").eq(0).children("input").attr("checked",true);
					libCheckN = -1;
				}else if(q == 1){
					TweenMax.to(jQuery(".libraryView .conArea .agreeArea .check2 span").eq(0).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".libraryView .conArea .agreeArea .check2 span").eq(0).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".libraryView .conArea .agreeArea .check2 span").eq(0).removeClass("on");
					jQuery(".libraryView .conArea .agreeArea .check2 span").eq(0).children("input").attr("checked",false);
					libCheckN = q;
					TweenMax.to(jQuery(".libraryView .conArea .agreeArea .check2 span").eq(1).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".libraryView .conArea .agreeArea .check2 span").eq(1).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".libraryView .conArea .agreeArea .check2 span").eq(1).addClass("on");
					jQuery(".libraryView .conArea .agreeArea .check2 span").eq(1).children("input").attr("checked",true);
					libCheckN = -1;
				}
			}
		});
	});



	//이벤트페이지
	var eventCheckN = -1;
	var eventCheckN2 = -1;
	var eventCheckN3 = -1;

	TweenMax.to(jQuery(".eventDiv .eventPop .area .check span .off"), 0, {rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".eventDiv .eventPop .area .check span .on"), 0, {rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".eventDiv .eventPop .area .check span.on .on"), 0, {rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	jQuery(".eventDiv .eventPop .area .check").each(function(q){
		jQuery(this).find("span").click(function(){
			if(jQuery(this).hasClass("on") == false){
				jQuery(this).addClass("on");
				jQuery(this).children("input").attr("checked",true);
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});

			}else if(jQuery(this).hasClass("on") == true){
				jQuery(this).removeClass("on");
				jQuery(this).children("input").attr("checked",false);
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
			}
		});
	});

	//이벤트 페이지 동의/비동의
	TweenMax.to(jQuery(".eventDiv .eventPop .area .check2 span img.off"), 0, {rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".eventDiv .eventPop .area .check2 span img.on"), 0, {rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".eventDiv .eventPop .area .check2 span.on img.on"), 0, {rotationY:-0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	jQuery(".eventDiv .eventPop .area .check2 span").each(function(q){
		jQuery(this).find("input").click(function(){
			if(eventCheckN != q){
				if(q == 0){
					TweenMax.to(jQuery(".eventDiv .eventPop .area .check2 span").eq(1).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".eventDiv .eventPop .area .check2 span").eq(1).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".eventDiv .eventPop .area .check2 span").eq(1).removeClass("on");
					jQuery(".eventDiv .eventPop .area .check2 span").eq(1).children("input").attr("checked",false);
					eventCheckN = q;
					TweenMax.to(jQuery(".eventDiv .eventPop .area .check2 span").eq(0).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".eventDiv .eventPop .area .check2 span").eq(0).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".eventDiv .eventPop .area .check2 span").eq(0).addClass("on");
					jQuery(".eventDiv .eventPop .area .check2 span").eq(0).children("input").attr("checked",true);
					eventCheckN = -1;
				}else if(q == 1){
					TweenMax.to(jQuery(".eventDiv .eventPop .area .check2 span").eq(0).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".eventDiv .eventPop .area .check2 span").eq(0).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".eventDiv .eventPop .area .check2 span").eq(0).removeClass("on");
					jQuery(".eventDiv .eventPop .area .check2 span").eq(0).children("input").attr("checked",false);
					eventCheckN = q;
					TweenMax.to(jQuery(".eventDiv .eventPop .area .check2 span").eq(1).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".eventDiv .eventPop .area .check2 span").eq(1).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".eventDiv .eventPop .area .check2 span").eq(1).addClass("on");
					jQuery(".eventDiv .eventPop .area .check2 span").eq(1).children("input").attr("checked",true);
					eventCheckN = -1;
				}
			}
		});
	});
	//이벤트 페이지 예/아니오
	TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv .check span img.off"), 0, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv .check span img.on"), 0, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv2 .check span").each(function(q){
		jQuery(this).find("input").click(function(){
			if(eventCheckN2 != q){
				if(q == 0){
					TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv2 .check span").eq(1).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv2 .check span").eq(1).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv .check span").eq(1).removeClass("on");
					jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv .check span").eq(1).children("input").attr("checked",false);
					eventCheckN2 = q;
					TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv2 .check span").eq(0).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv2 .check span").eq(0).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv .check span").eq(0).addClass("on");
					jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv .check span").eq(0).children("input").attr("checked",true);
					eventCheckN2 = -1;
					jQuery(this).parents(".checkDiv2").find(".inputBox input").focus();
				}else if(q == 1){
					TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv2 .check span").eq(0).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv2 .check span").eq(0).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv .check span").eq(0).removeClass("on");
					jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv .check span").eq(0).children("input").attr("checked",false);
					eventCheckN2 = q;
					TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv2 .check span").eq(1).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv2 .check span").eq(1).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv .check span").eq(1).addClass("on");
					jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv .check span").eq(1).children("input").attr("checked",true);
					eventCheckN2 = -1;
				}
			}
		});
	});
	//이벤트 페이지 예/아니오
	TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv3 .check span img.off"), 0, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv3 .check span img.on"), 0, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv3 .check span").each(function(q){
		jQuery(this).find("input").click(function(){
			if(eventCheckN3 != q){
				if(q == 0){
					TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv3 .check span").eq(1).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv3 .check span").eq(1).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv3 .check span").eq(1).removeClass("on");
					jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv3 .check span").eq(1).children("input").attr("checked",false);
					eventCheckN3 = q;
					TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv3 .check span").eq(0).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv3 .check span").eq(0).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv3 .check span").eq(0).addClass("on");
					jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv3 .check span").eq(0).children("input").attr("checked",true);
					eventCheckN3 = -1;
					jQuery(this).parents(".checkDiv3").find(".inputBox input").focus();
				}else if(q == 1){
					TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv3 .check span").eq(0).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv3 .check span").eq(0).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv3 .check span").eq(0).removeClass("on");
					jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv3 .check span").eq(0).children("input").attr("checked",false);
					eventCheckN3 = q;
					TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv3 .check span").eq(1).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv3 .check span").eq(1).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv3 .check span").eq(1).addClass("on");
					jQuery(".eventDiv .eventPop .selectDiv .list .checkDiv3 .check span").eq(1).children("input").attr("checked",true);
					eventCheckN3 = -1;
				}
			}
		});
	});
	//이벤트 페이지 추가정보
	TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list2 .check span .off"), 0, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv .list2 .check span .on"), 0, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	jQuery(".eventDiv .eventPop .selectDiv2 .list2 .check").each(function(q){
		jQuery(this).find("span").click(function(){
			if(jQuery(this).hasClass("on") == false){
				jQuery(this).addClass("on");
				jQuery(this).children("input").attr("checked",true);
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});

			}else if(jQuery(this).hasClass("on") == true){
				jQuery(this).removeClass("on");
				jQuery(this).children("input").attr("checked",false);
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().parent().parent().find(".allCheck span .off"), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).parent().parent().parent().parent().find(".allCheck span .on"), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				jQuery(this).parent().parent().parent().parent().find(".allCheck span").removeClass("on");
			}
		});
	});
	var radioSelN = -1;
	jQuery(".eventDiv .eventPop .selectDiv3 .list2 .check").each(function(q){
		jQuery(this).find("span").click(function(){
			if(radioSelN != q){
				jQuery(".eventDiv .eventPop .selectDiv3 .list2 .check span").removeClass("on");
				jQuery(".eventDiv .eventPop .selectDiv3 .list2 .check span input").attr("checked",false);
				TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv3 .list2 .check span .on"), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv3 .list2 .check span .off"), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				jQuery(this).addClass("on");
				jQuery(this).children("input").attr("checked",true);
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				radioSelN = q;
			}
		});
	});

	var radioSelN2 = -1;
	jQuery(".eventDiv .eventPop .selectDiv3 .list3 .check").each(function(q){
		jQuery(this).find("span").click(function(){
			if(radioSelN2 != q){
				jQuery(".eventDiv .eventPop .selectDiv3 .list3 .check span").removeClass("on");
				jQuery(".eventDiv .eventPop .selectDiv3 .list3 .check span input").attr("checked",false);
				TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv3 .list3 .check span .on"), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(".eventDiv .eventPop .selectDiv3 .list3 .check span .off"), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				jQuery(this).addClass("on");
				jQuery(this).children("input").attr("checked",true);
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				radioSelN2 = q;
			}
		});
	});

	//이벤트 체크
	var eveCheckN = 0;
	TweenMax.to(jQuery(".eventDiv .eventPop .agreeArea .check span .off"), 0, {rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".eventDiv .eventPop .agreeArea .check span .on"), 0, {rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".eventDiv .eventPop .agreeArea .check span.on .on"), 0, {rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	jQuery(".eventDiv .eventPop .agreeArea .check").each(function(q){
		jQuery(this).find("span").click(function(){
			if(jQuery(this).hasClass("on") == false){
				jQuery(this).addClass("on");
				jQuery(this).parents(".agreeArea").addClass("on");
				jQuery(this).parents(".agreeArea").find(".txtArea").stop(true,true).slideUp(200, function(){
					$(this).mCustomScrollbar("destroy");
				});
				jQuery(this).children("input").attr("checked",true);
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});

			}else if(jQuery(this).hasClass("on") == true){
				jQuery(this).removeClass("on");
				$(this).parents(".agreeArea").find(".txtArea").mCustomScrollbar();
				jQuery(this).children("input").attr("checked",false);
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
			}
		});
	});

	$(".eventDiv .eventPop .agreeArea .tit .btn").each(function(){
		$(this).click(function(){
			if(!$(this).parents(".agreeArea").hasClass("on")){
				$(this).parents(".agreeArea").addClass("on");
				$(this).parents(".agreeArea").find(".txtArea").stop(true, true).slideUp(200, function(){
					$(this).mCustomScrollbar("destroy");
				});
			}else{
				$(this).parents(".agreeArea").removeClass("on");
				$(this).parents(".agreeArea").find(".txtArea").stop(true, true).slideDown(200, function(){
					$(this).mCustomScrollbar();
				});
			}
		});
	});

	//이벤트 동의/비동의
	TweenMax.to(jQuery(".eventDiv .eventPop .agreeArea .check2 span img.off"), 0, {rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".eventDiv .eventPop .agreeArea .check2 span img.on"), 0, {rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".eventDiv .eventPop .agreeArea .check2 span.on img.on"), 0, {rotationY:-0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	jQuery(".eventDiv .eventPop .agreeArea .check2 span").each(function(q){
		jQuery(this).find("input").click(function(){
			if(eveCheckN != q){
				console.log(eveCheckN);
				if(q == 0){
					TweenMax.to(jQuery(".eventDiv .eventPop .agreeArea .check2 span").eq(1).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".eventDiv .eventPop .agreeArea .check2 span").eq(1).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".eventDiv .eventPop .agreeArea .check2 span").eq(1).removeClass("on");
					jQuery(".eventDiv .eventPop .agreeArea .check2 span").eq(1).children("input").attr("checked",false);
					eveCheckN = q;
					TweenMax.to(jQuery(".eventDiv .eventPop .agreeArea .check2 span").eq(0).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".eventDiv .eventPop .agreeArea .check2 span").eq(0).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".eventDiv .eventPop .agreeArea .check2 span").eq(0).addClass("on");
					jQuery(".eventDiv .eventPop .agreeArea .check2 span").eq(0).children("input").attr("checked",true);
					eveCheckN = -1;
				}else if(q == 1){
					TweenMax.to(jQuery(".eventDiv .eventPop .agreeArea .check2 span").eq(0).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".eventDiv .eventPop .agreeArea .check2 span").eq(0).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".eventDiv .eventPop .agreeArea .check2 span").eq(0).removeClass("on");
					jQuery(".eventDiv .eventPop .agreeArea .check2 span").eq(0).children("input").attr("checked",false);
					eveCheckN = q;
					TweenMax.to(jQuery(".eventDiv .eventPop .agreeArea .check2 span").eq(1).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".eventDiv .eventPop .agreeArea .check2 span").eq(1).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".eventDiv .eventPop .agreeArea .check2 span").eq(1).addClass("on");
					jQuery(".eventDiv .eventPop .agreeArea .check2 span").eq(1).children("input").attr("checked",true);
					eveCheckN = -1;
				}
			}
		});
	});


	//나비아이콘
	jQuery(".bfIconDiv .closeBtn").click(function(){
		jQuery(".bfIconDiv").hide();
	});

	//제품문의 탭이벤트
	var tabN = 0;
	jQuery(".inquiryDiv .tabDiv .tabs a").each(function(q){
		jQuery(this).click(function(){
			if(tabN != q){
				jQuery(".tabs a").eq(tabN).removeClass("on");
				jQuery(".tabContent").eq(tabN).hide();
				tabN = q;
				jQuery(".tabs a").eq(tabN).addClass("on");
				jQuery(".tabContent").eq(tabN).show();
			}
		});
	});

	//제품문의 동의
	var libCheckN = 0;
	TweenMax.to(jQuery(".inquiryDiv .agreeArea .check span .off"), 0, {rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".inquiryDiv .agreeArea .check span .on"), 0, {rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".inquiryDiv .agreeArea .check span.on .on"), 0, {rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	jQuery(".inquiryDiv .agreeArea .check").each(function(q){
		jQuery(this).find("span").click(function(){
			if(jQuery(this).hasClass("on") == false){
				jQuery(this).addClass("on");
				jQuery(this).parents(".agreeArea").addClass("on");
				jQuery(this).parents(".agreeArea").find(".txtArea").stop(true,true).slideUp(200, function(){
					$(this).mCustomScrollbar("destroy");
				});
				jQuery(this).children("input").attr("checked",true);
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});

			}else if(jQuery(this).hasClass("on") == true){
				jQuery(this).removeClass("on");
				$(this).parents(".agreeArea").find(".txtArea").mCustomScrollbar();
				jQuery(this).children("input").attr("checked",false);
				TweenMax.to(jQuery(this).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
				TweenMax.to(jQuery(this).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
			}
		});
	});

	$(".inquiryDiv .agreeArea .tit .btn").each(function(){
		$(this).click(function(){
			if(!$(this).parents(".agreeArea").hasClass("on")){
				$(this).parents(".agreeArea").addClass("on");
				$(this).parents(".agreeArea").find(".txtArea").stop(true, true).slideUp(200, function(){
					$(this).mCustomScrollbar("destroy");
				});
			}else{
				$(this).parents(".agreeArea").removeClass("on");
				$(this).parents(".agreeArea").find(".txtArea").stop(true, true).slideDown(200, function(){
					$(this).mCustomScrollbar();
				});
			}
		});
	});

	//제품문의 광고 동의/비동의
	TweenMax.to(jQuery(".inquiryDiv .agreeArea .check2 span img.off"), 0, {rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".inquiryDiv .agreeArea .check2 span img.on"), 0, {rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".inquiryDiv .agreeArea .check2 span.on img.on"), 0, {rotationY:-0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	jQuery(".inquiryDiv .agreeArea .check2 span").each(function(q){
		jQuery(this).find("input").click(function(){
			if(libCheckN != q){
				console.log(libCheckN);
				if(q == 0){
					TweenMax.to(jQuery(".inquiryDiv .agreeArea .check2 span").eq(1).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".inquiryDiv .agreeArea .check2 span").eq(1).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".inquiryDiv .agreeArea .check2 span").eq(1).removeClass("on");
					jQuery(".inquiryDiv .agreeArea .check2 span").eq(1).children("input").attr("checked",false);
					libCheckN = q;
					TweenMax.to(jQuery(".inquiryDiv .agreeArea .check2 span").eq(0).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".inquiryDiv .agreeArea .check2 span").eq(0).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".inquiryDiv .agreeArea .check2 span").eq(0).addClass("on");
					jQuery(".inquiryDiv .agreeArea .check2 span").eq(0).children("input").attr("checked",true);
					libCheckN = -1;
				}else if(q == 1){
					TweenMax.to(jQuery(".inquiryDiv .agreeArea .check2 span").eq(0).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".inquiryDiv .agreeArea .check2 span").eq(0).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".inquiryDiv .agreeArea .check2 span").eq(0).removeClass("on");
					jQuery(".inquiryDiv .agreeArea .check2 span").eq(0).children("input").attr("checked",false);
					libCheckN = q;
					TweenMax.to(jQuery(".inquiryDiv .agreeArea .check2 span").eq(1).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".inquiryDiv .agreeArea .check2 span").eq(1).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".inquiryDiv .agreeArea .check2 span").eq(1).addClass("on");
					jQuery(".inquiryDiv .agreeArea .check2 span").eq(1).children("input").attr("checked",true);
					libCheckN = -1;
				}
			}
		});
	});

	//제품문의 뉴스레터 동의/비동의
	TweenMax.to(jQuery(".inquiryDiv .agreeArea .check3 span img.off"), 0, {rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".inquiryDiv .agreeArea .check3 span img.on"), 0, {rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to(jQuery(".inquiryDiv .agreeArea .check3 span.on img.on"), 0, {rotationY:-0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
	jQuery(".inquiryDiv .agreeArea .check3 span").each(function(q){
		jQuery(this).find("input").click(function(){
			if(libCheckN != q){
				console.log(libCheckN);
				if(q == 0){
					TweenMax.to(jQuery(".inquiryDiv .agreeArea .check3 span").eq(1).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".inquiryDiv .agreeArea .check3 span").eq(1).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".inquiryDiv .agreeArea .check3 span").eq(1).removeClass("on");
					jQuery(".inquiryDiv .agreeArea .check3 span").eq(1).children("input").attr("checked",false);
					libCheckN = q;
					TweenMax.to(jQuery(".inquiryDiv .agreeArea .check3 span").eq(0).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".inquiryDiv .agreeArea .check3 span").eq(0).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".inquiryDiv .agreeArea .check3 span").eq(0).addClass("on");
					jQuery(".inquiryDiv .agreeArea .check3 span").eq(0).children("input").attr("checked",true);
					libCheckN = -1;
				}else if(q == 1){
					TweenMax.to(jQuery(".inquiryDiv .agreeArea .check3 span").eq(0).find("img").eq(1), 1.5, {opacity:0, rotationY:-180, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".inquiryDiv .agreeArea .check3 span").eq(0).find("img").eq(0), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".inquiryDiv .agreeArea .check3 span").eq(0).removeClass("on");
					jQuery(".inquiryDiv .agreeArea .check3 span").eq(0).children("input").attr("checked",false);
					libCheckN = q;
					TweenMax.to(jQuery(".inquiryDiv .agreeArea .check3 span").eq(1).find("img").eq(1), 1.5, {opacity:1, rotationY:0, transformOrigin:"center top",ease:Elastic.easeOut.config(1, 0.5)});
					TweenMax.to(jQuery(".inquiryDiv .agreeArea .check3 span").eq(1).find("img").eq(0), 1.5, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1, 0.5)});
					jQuery(".inquiryDiv .agreeArea .check3 span").eq(1).addClass("on");
					jQuery(".inquiryDiv .agreeArea .check3 span").eq(1).children("input").attr("checked",true);
					libCheckN = -1;
				}
			}
		});
	});

	//개인정보 처리방침 이전 방침
	jQuery(".privacyPolicy .txtDiv .list .listBtn").click(function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(".privacyPolicy .txtDiv .list .listTwoD").slideUp(300);
		}else{
			$(this).addClass("on");
			$(".privacyPolicy .txtDiv .list .listTwoD").slideDown(300);
		}
	});

	//개인정보 처리방침 padding 관련
	var ppN = jQuery(".privacyPolicy .txtDiv .list .listTwoD a").size();
	if(jQuery(window).width() < 953){
		jQuery(".privacyPolicy .txtDiv:last").css("padding-bottom", 50 + ppN * 40)
	}

	//해더제품
	var curHeadPro = false;
	TweenMax.to(jQuery("#header .hProduct"), 0, {left:'100%', ease:Power3.easeOut});
	jQuery("#header .inner .menuPack .product").click(function(){
		jQuery("#header .hProduct").css('display', 'block');
		TweenMax.to(jQuery("#header .hProduct"), .8, {left:0, ease:Power3.easeOut});
		jQuery(".hProduct").addClass("on");
		jQuery(".dimdBg").stop().fadeIn(300);

		if(jQuery(window).width() > 953){
			if(jQuery(".hProduct").height() > jQuery("#wrapper").height()){
				jQuery("#wrapper").css("height", jQuery(".hProduct").height());
			}else{
				jQuery("#wrapper").css("height", "auto");
			}
		}else{
			jQuery(".hProduct").css("height",jQuery(window).height());
		}

		curHeadPro = true;
	});

	jQuery("#header .hProduct .xbt").click(function(){
		TweenMax.to(jQuery("#header .hProduct"), .8, {left:'100%', ease:Power3.easeOut, onComplete:function(){
			jQuery("#header .hProduct").css('display', 'none');
		}});
		jQuery(".hProduct").removeClass("on");
		jQuery("#wrapper").css("height", 'auto');
		if(jQuery(".downLayerPop").size() != 0){
			if(jQuery(".menuDiv").is(":hidden") && jQuery(".hSrch") .is(":hidden") && jQuery(".downLayerPop").is(":hidden")){
				jQuery(".dimdBg").stop().fadeOut(300);
			}
		}else{
			if(jQuery(".menuDiv").is(":hidden") && jQuery(".hSrch") .is(":hidden")){
				jQuery(".dimdBg").stop().fadeOut(300);
			}
		}
		if(jQuery(window).width() > 953) {

		}else{
			jQuery(".hProduct").css("height","auto");
			jQuery(".hProduct dt").removeClass("on");
			jQuery(".hProduct dd .txt1").removeClass("on");
			jQuery(".hProduct dd").stop().slideUp(350);
			jQuery("#header .hProduct .pBody dd .txt2").stop().slideUp(350);
			TweenMax.to(jQuery("#header .hProduct .pBody dt .openBt").find("img.off"), .5, {opacity:1, ease:Power3.easeOut});
			TweenMax.to(jQuery("#header .hProduct .pBody dt .openBt").find("img.on"), .5, {opacity:0, ease:Power3.easeOut});
			TweenMax.to(jQuery("#header .hProduct .pBody dd .txt1").find(".off"), .5, {opacity:1, ease:Power3.easeOut});
			TweenMax.to(jQuery("#header .hProduct .pBody dd .txt1").find(".on"), .5, {opacity:0, ease:Power3.easeOut});
			curHpro1 = -1;
			curHpro2 = -1;
		}

		curHeadPro = false;
	});

	jQuery(".libraryList .srchDiv .srchOption .bts a.view").click(function(){
		if(jQuery(this).hasClass("on")){
			jQuery(this).removeClass("on");
			jQuery(this).text("전체보기");
		}else{
			jQuery(this).addClass("on");
			jQuery(this).text("전체닫기");
		}
	});

	jQuery(".magaListDiv .inner > a .img span").css("top", "-350px");
	jQuery(".magaListDiv .inner > a .img span").css("opacity", "0"); /* 2018-09-10 추가 */

	jQuery(window).resize(function(){//리사이즈
		//메인
		jQuery(".mainRoll").css("height", jQuery(window).height());
		/*jQuery(".mainRoll .rollDiv .bg").css('left', jQuery(window).width()/2 - 960);*/
		jQuery(".mainRoll .rollDiv .conDiv").css('top', (jQuery(".mainRoll").height()/2 - jQuery(".mainRoll .rollDiv .conDiv").height()/2)-30);

		//다운로드 레이어팝업
		jQuery(".downLayerPop").css("margin-left", -jQuery(".downLayerPop").outerWidth()/2);

		//메인영상관련
		/* jQuery(".mainRoll .rollDiv .bg").css('left', jQuery(window).width()/2 - 960); 2020-07-07 주석 */
		/* 2020-07-07 재수정 */
		jQuery(".mainRoll .rollDiv").each(function(index){
			if(jQuery(".mainRoll .rollDiv").eq(index).find("video").size() > 0){
				jQuery(this).find(".bg").css('left', jQuery(window).width()/2 - 960); 
				jQuery(this).find(".bg img").css('left', -(jQuery(window).width()/2 - 960)); 
			}else{
				jQuery(".mainRoll .rollDiv bg").css('left', '');
				jQuery(this).find(".bg img").css('left', ''); 
			}
		});
		/* // 2020-07-07 재수정 */
		if(jQuery(window).width() == 1024){
			if(jQuery(window).height() < 800){
				jQuery(".mainRoll .rollDiv .bg img").css("height","auto");
			}else{
				jQuery(".mainRoll .rollDiv .bg img").css("height","100%");
			}
		}else{
			jQuery(".mainRoll .rollDiv .bg img").css("height","auto");
		}

		//3뎁스 인디케이터
		var indiN = jQuery(".anchorIndi .swiper-container .info").size();
		if(jQuery(window).width() > 953){
			jQuery(".anchorIndi .swiper-container").css("width", indiN * 92 + 117);
			jQuery(".anchorIndi .swiper-container .swiper-wrapper").css("width", indiN * 92 + 117);
		}else{
			jQuery(".anchorIndi .swiper-container").css("width", "100%");
			jQuery(".anchorIndi .swiper-container .swiper-wrapper").css("width", "100%");
		}

		if(jQuery(window).width() > 953){
			if(jQuery(".hProduct").hasClass("on") == true) {
				if(jQuery(".hProduct").height() > jQuery(window).height()){
					jQuery("#wrapper").css("height", jQuery(".hProduct").height());
				}else{
					jQuery("#wrapper").css("height", "auto");
				}
			}
		}

		//반응형
		if(jQuery(window).width() > 953){ //웹
			isWeb = true;
			isTabl = false;
			isMobile = false;

			//웹메인삭제
			if(jQuery(".mainV .roll .bg video").length > 0)
			{
				jQuery(".mainV .roll .bg video").get(0).play();
			}

			//제품탭
			jQuery(".anchorIndi").css("height" , 64);
			jQuery(".anchorIndi .swiper-container").css("top" , 0);

			jQuery("#header .hProduct .pBody dd").css('display', 'block');
			jQuery("#header .hProduct .pBody dd .txt2").css('display', 'block');
			jQuery("#header .hProduct .pBody dt").removeClass("on");
			jQuery("#header .hProduct .pBody dd .txt1").removeClass("on");
			TweenMax.to(jQuery("#header .hProduct .pBody dt .openBt").find("img.off"), .5, {opacity:1, ease:Power3.easeOut});
			TweenMax.to(jQuery("#header .hProduct .pBody dt .openBt").find("img.on"), .5, {opacity:0, ease:Power3.easeOut});
			TweenMax.to(jQuery("#header .hProduct .pBody dd .txt1").find(".off"), .5, {opacity:1, ease:Power3.easeOut});
			TweenMax.to(jQuery("#header .hProduct .pBody dd .txt1").find(".on"), .5, {opacity:0, ease:Power3.easeOut});
			curHpro1 = -1;

		}else if(684 < jQuery(window).width() && jQuery(window).width() <= 969){ //태블릿
			isWeb = false;
			isTabl = true;
			isMobile = false;

			//웹메인삭제
			if(jQuery(".mainV .roll .bg video").length > 0)
			{
				jQuery(".mainV .roll .bg video").get(0).pause();
			}

			//제품탭
			if(proScroll == true){
				jQuery(".anchorIndi").css("height" , 100);
				jQuery(".anchorIndi .swiper-container").css("top" , 50);
			}else{
				jQuery(".anchorIndi").css("height" , 45);
				jQuery(".anchorIndi .swiper-container").css("top" , 0);
			}

			if(curHpro1 == -1){
				jQuery("#header .hProduct .pBody dd").css('display', 'none');
				jQuery("#header .hProduct .pBody dd .txt2").css('display', 'none');
			}
		}else if(683 >= jQuery(window).width()){ //모바일
			isWeb = false;
			isTabl = false;
			isMobile = true;

			//웹메인삭제
			if(jQuery(".mainV .roll .bg video").length > 0)
			{
				jQuery(".mainV .roll .bg video").get(0).pause();
			}

			//제품탭
			if(proScroll == true){
				jQuery(".anchorIndi").css("height" , 100);
				jQuery(".anchorIndi .swiper-container").css("top" , 50);
			}else{
				jQuery(".anchorIndi").css("height" , 45);
				jQuery(".anchorIndi .swiper-container").css("top" , 0);
			}

			if(curHpro1 == -1){
				jQuery("#header .hProduct .pBody dd").css('display', 'none');
				jQuery("#header .hProduct .pBody dd .txt2").css('display', 'none');
			}
		}

		if(jQuery(window).width() < 970 && jQuery(window).width() > 700){
			jQuery(".mainRollM").css("height",jQuery(window).height() - jQuery("#footer").height());
		}else{
			jQuery(".mainRollM").css("height","auto");
		}

		//제품 3뎁스 도입효과 텍스트
		jQuery("#pt2 li .txt").each(function(q){
			if(jQuery(window).width() > 953){
				jQuery("#pt2 li .txt").eq(q).css("margin-top", - $("#pt2 li .txt").eq(q).height()/2);
			}else{
				jQuery("#pt2 li .txt").eq(q).css("margin-top", "0");
			}
		});

		//개인정보 처리방침 padding 관련
		var ppN = jQuery(".privacyPolicy .txtDiv .list .listTwoD a").size();
		if(jQuery(window).width() < 953){
			jQuery(".privacyPolicy .txtDiv:last").css("padding-bottom", 50 + ppN * 40)
		}else{
			jQuery(".privacyPolicy .txtDiv:last").css("padding-bottom", 250)
		}

		//이메일무단수집거부 height
		jQuery(".privacyPolicy .noticeBox").css("margin-bottom", jQuery(window).height() - jQuery(".subV2").height() - jQuery(".privacyPolicy").height() - 50)

		//모바일 높이
		if(jQuery(window).width() < 953){
			if(jQuery(window).height() > jQuery("#wrapper").height()){
				jQuery("#subCon").css("margin-bottom", jQuery(window).height() - jQuery("#wrapper").height());
			}
		}

		//특장점 높이값 세팅
		if(jQuery(window).width() > 953){
			setTxtIconH();
		}

		//뷰페이지 이미지 관련
		$(".viewType1 .txtDiv img").each(function(){
			if($(this).get(0).naturalWidth >= $(".viewType1 .txtDiv").width()){
				$(this).css("width","100%");
			}else{
				$(this).css("width", "auto");
				$(this).css("maxWidth", $(this).get(0).naturalWidth);
			}
		});

		//사보
		jQuery(".magaListDiv .inner > a .img span").each(function(q){
			jQuery(".magaListDiv .inner > a .img").eq(q).hover(function(){
				jQuery(".magaListDiv .inner > a .img span").eq(q).css("opacity","1");
				jQuery(".magaListDiv .inner > a .img span").eq(q).css("top","0");
			}, function(){
				jQuery(".magaListDiv .inner > a .img span").eq(q).css("top",- jQuery(".magaListDiv .inner > a .img img").height());
				jQuery(".magaListDiv .inner > a .img span").eq(q).css("opacity","0");
			});
		});

		//연혁
		var hisTabN = jQuery(".historyDiv .swiper-slide").size();
		if(jQuery(window).width() > 953){
			jQuery(".historyDiv .swiper-slide").css("width", jQuery(".historyDiv .swiper-wrapper").width() / hisTabN);
		}else{
			jQuery(".historyDiv .swiper-slide").css("width", "100px");
		}

		//라이브러리 다운로드 팝업 관련 리사이징
		if(_popTHIS != undefined) {
			jQuery(".downLayerPop").css("top", _popTHIS.offset().top - 250);
		}

		if(_popTHIS2 != undefined) {
			if(jQuery(window).width() < 953){
				jQuery(".downLayerPop").css("top", _popTHIS2.offset().top - 450);
			}
		}

		if(jQuery(".downLayerPop").is(":visible")){
			if(jQuery(window).width() > 953){
				jQuery(".libraryList").css("padding-bottom", "650px");
				jQuery(".searchDiv").css("padding-bottom", "550px");
			}else{
				jQuery(".libraryList").css("padding-bottom", "850px");
				jQuery(".searchDiv").css("padding-bottom", "850px");
			}
		}else{
			if(jQuery(window).width() > 953){
				jQuery(".libraryList").css("padding-bottom", "50px");
				jQuery(".searchDiv").css("padding-bottom", "150px");
			}else{
				jQuery(".libraryList").css("padding-bottom", "50px");
				jQuery(".searchDiv").css("padding-bottom", "50px");
			}
		}

	}); jQuery(window).resize();

	//패밀리사이트
	var curFamily = false;
	TweenMax.to(jQuery("#footer .right .family span").eq(0), 0, {rotation:0, right:20, opacity:1, ease:Power3.easeOut});
	TweenMax.to(jQuery("#footer .right .family span").eq(1), 0, {rotation:45, right:20, opacity:0, ease:Power3.easeOut});
	jQuery("#footer .right .family").click(function(){
		if(curFamily == false){
			if(isWeb == true && isTabl == false && isMobile == false){
				TweenMax.to(jQuery("#footer .right .family span").eq(0), .3, {rotation:-45, right:20, opacity:0, ease:Power3.easeOut});
				TweenMax.to(jQuery("#footer .right .family span").eq(1), .3, {rotation:0, right:20, opacity:1, ease:Power3.easeOut});
			}else if(isWeb == false && isTabl == true && isMobile == false){
				TweenMax.to(jQuery("#footer .right .family span").eq(0), .3, {rotation:-45, right:20, opacity:0, ease:Power3.easeOut});
				TweenMax.to(jQuery("#footer .right .family span").eq(1), .3, {rotation:0, right:20, opacity:1, ease:Power3.easeOut});
			}else if(isWeb == false && isTabl == false && isMobile == true){
				TweenMax.to(jQuery("#footer .right .family span").eq(0), .3, {rotation:-45, right:20, opacity:0, ease:Power3.easeOut});
				TweenMax.to(jQuery("#footer .right .family span").eq(1), .3, {rotation:0, right:20, opacity:1, ease:Power3.easeOut});
			}

			jQuery(this).addClass("on");
			jQuery(this).attr("title", "패밀리사이트 닫기");
			jQuery("#footer .right .familyPack").stop().slideDown(300);
			jQuery(this).addClass("on");

			curFamily = true;
		}else if(curFamily == true){

			if(isWeb == true && isTabl == false && isMobile == false){
				TweenMax.to(jQuery("#footer .right .family span").eq(0), .3, {rotation:0, right:20, opacity:1, ease:Power3.easeOut});
				TweenMax.to(jQuery("#footer .right .family span").eq(1), .3, {rotation:45, right:20, opacity:0, ease:Power3.easeOut});
			}else if(isWeb == false && isTabl == true && isMobile == false){
				TweenMax.to(jQuery("#footer .right .family span").eq(0), .3, {rotation:0, right:20, opacity:1, ease:Power3.easeOut});
				TweenMax.to(jQuery("#footer .right .family span").eq(1), .3, {rotation:45, right:20, opacity:0, ease:Power3.easeOut});
			}else if(isWeb == false && isTabl == false && isMobile == true){
				TweenMax.to(jQuery("#footer .right .family span").eq(0), .3, {rotation:0, right:20, opacity:1, ease:Power3.easeOut});
				TweenMax.to(jQuery("#footer .right .family span").eq(1), .3, {rotation:45, right:20, opacity:0, ease:Power3.easeOut});
			}
			jQuery(this).removeClass("on");
			jQuery(this).attr("title", "패밀리사이트 열기");
			jQuery("#footer .right .familyPack").stop().slideUp(300);
			jQuery(this).removeClass("on");

			curFamily = false;
		}
	});

	//메인 페이지
	if(isWeb == true){
		if( jQuery(".mainRoll .rollDiv").size() < 2){
			clearInterval(rInterval);
		}else{
			rInterval = setInterval("rVisualSub()", rTime);
		
		}
	}else{
		clearInterval(rInterval);
	}

	//메인
	TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".txt1"), 0, {opacity:0, top:50, ease:Power3.easeOut});
	TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".txt2"), 0, {opacity:0, top:137, ease:Power3.easeOut});
	TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".btPack"), 0, {opacity:0, top:224, ease:Power3.easeOut});

	TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".txt1"), .5, {opacity:1, top:0, delay:.5, ease:Power3.easeOut});
	TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".txt2"), .5, {opacity:1, top:87, delay:.7, ease:Power3.easeOut});
	TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".btPack"), .5, {opacity:1, top:174, delay:.9, ease:Power3.easeOut});

	TweenMax.to(jQuery(".mainRoll .rollDiv"), 0, {scale:1.1, opacity:0, ease:Power3.easeOut});
	TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV), 0, {scale:1, opacity:1, ease:Power3.easeOut});

	jQuery(".mainRoll .indiBts a.rollBt").each(function(q){
		jQuery(this).click(function(){
			jQuery(".mainRoll .indiBts a.rollBt").eq(mainV).removeClass("on");
			jQuery(".mainRoll .rollDiv").eq(mainV).css("display", "none");
			TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV), 1, {scale:1.1, opacity:0, ease:Power3.easeOut, onComplete:function(){
			}});
			mainV = q;
			jQuery(".mainRoll .indiBts a.rollBt").eq(mainV).addClass("on");
			jQuery(".mainRoll .rollDiv").eq(mainV).css('display', 'block');
			TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV), 1, {scale:1, opacity:1, ease:Power3.easeOut});

			TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".txt1"), 0, {opacity:0, top:50, ease:Power3.easeOut});
			TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".txt2"), 0, {opacity:0, top:137, ease:Power3.easeOut});
			TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".btPack"), 0, {opacity:0, top:224, ease:Power3.easeOut});

			TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".txt1"), .5, {opacity:1, top:0, delay:.5, ease:Power3.easeOut});
			TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".txt2"), .5, {opacity:1, top:87, delay:.7, ease:Power3.easeOut});
			TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".btPack"), .5, {opacity:1, top:174, delay:.9, ease:Power3.easeOut});

			/*
			jQuery(".mainRoll .indiBts a.rollBt").eq(mainV).removeClass("on");
			TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV), 1, {top:"-100%", ease:Power3.easeOut, onComplete:function(){
				jQuery(this).css('display', 'none');
			}});
			mainV = q;
			jQuery(".mainRoll .indiBts a.rollBt").eq(mainV).addClass("on");
			jQuery(".mainRoll .rollDiv").eq(mainV).css('display', 'block');
			TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV), 0, {top:"100%", ease:Power3.easeOut});
			TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV), 1, {top:0, ease:Power3.easeOut});

			TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".txt1"), 0, {opacity:0, top:50, ease:Power3.easeOut});
			TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".txt2"), 0, {opacity:0, top:137, ease:Power3.easeOut});
			TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".btPack"), 0, {opacity:0, top:224, ease:Power3.easeOut});

			TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".txt1"), .5, {opacity:1, top:0, delay:.5, ease:Power3.easeOut});
			TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".txt2"), .5, {opacity:1, top:87, delay:.7, ease:Power3.easeOut});
			TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".btPack"), .5, {opacity:1, top:174, delay:.9, ease:Power3.easeOut});
			*/
		})
	});

	jQuery(".mainV .playBt").attr("title", "멈춤");
	TweenMax.to(jQuery(".mainRoll .indiBts a.playBt").find(".off"), 0, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1.5, 0.5)});
	jQuery(".mainRoll .indiBts a.playBt").click(function(){
		if(isRoll == false){
			TweenMax.to(jQuery(this).find(".on"), 1.3, {opacity:0, rotationY:-180, transformOrigin:"center top", ease:Elastic.easeOut.config(1.5, 0.5)});
			TweenMax.to(jQuery(this).find(".off"), 1.3, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1.5, 0.5)});
			clearInterval(rInterval);

			jQuery(".mainV .playBt").attr("title", "멈춤");
			isRoll = true;
		}else if(isRoll == true){
			TweenMax.to(jQuery(this).find(".on"), 1.3, {opacity:1, rotationY:0, transformOrigin:"center top", ease:Elastic.easeOut.config(1.5, 0.5)});
			TweenMax.to(jQuery(this).find(".off"), 1.3, {opacity:0, rotationY:180, transformOrigin:"center top", ease:Elastic.easeOut.config(1.5, 0.5)});
			clearInterval(rInterval);
			rInterval = setInterval("rVisualSub()", rTime);

			jQuery(".mainV .playBt").attr("title", "재생");
			isRoll = false;
		}
	});

	jQuery(".mainRoll a").hover(function(){
		clearInterval(rInterval);
	}, function(){
		if(isRoll == false){
			clearInterval(rInterval);
			rInterval = setInterval("rVisualSub()", rTime);
		}
	});

	//모바일 메인비주얼
	/*
	TweenMax.to(jQuery(".mainRollM .swiper-slide").eq(mainV).find(".txt1"), 0, {opacity:0, top:40, ease:Power3.easeOut});
	TweenMax.to(jQuery(".mainRollM .swiper-slide").eq(mainV).find(".txt2"), 0, {opacity:0, top:80, ease:Power3.easeOut});
	TweenMax.to(jQuery(".mainRollM .swiper-slide").eq(mainV).find(".btPack"), 0, {opacity:0, bottom:150, ease:Power3.easeOut});

	TweenMax.to(jQuery(".mainRollM .swiper-slide").eq(mainV).find(".txt1"), .5, {opacity:1, top:0, delay:.5, ease:Power3.easeOut});
	TweenMax.to(jQuery(".mainRollM .swiper-slide").eq(mainV).find(".txt2"), .5, {opacity:1, top:40, delay:.7, ease:Power3.easeOut});
	TweenMax.to(jQuery(".mainRollM .swiper-slide").eq(mainV).find(".btPack"), .5, {opacity:1, bottom:190, delay:.9, ease:Power3.easeOut});
	*/

	//모바일 main news
	/*
	if(!IEVerChk()){
		var swiperA = new Swiper('.mNews-container', {
			slidesPerView: 'auto',
			paginationClickable: true,
			spaceBetween: 0
		});
	}

	//모바일 사업소식
	if(!IEVerChk()){
		var swiperB = new Swiper('.businews-container', {
			slidesPerView: 'auto',
			//paginationClickable: true,
			spaceBetween: 0,
			hashnav: true,
			hashnavWatchState: true
		});
	}

	//모바일 메인팝업
	if(!IEVerChk()){
		 var mainPopSwiper = new Swiper('.mainPop-container', {
			//pagination: '.swiper-pagination',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			slidesPerView: 1,
			paginationClickable: true,
			spaceBetween: 0,
			loop: true
		});
	}
	*/

	jQuery(".mainV_m").css("height", jQuery(window).height()-45);
	//모바일 메인
	if(jQuery(window).height() > jQuery(".mainV_m .swiper-slide img").height()){
		jQuery(".mainV_m").css("height", 'auto');
	}else{
		if(jQuery(window).height() > jQuery(window).width()){
			jQuery(".mainV_m").css("height", jQuery(window).height()-45);
		}else{
			jQuery(".mainV_m").css("height", 'auto');
		}
	}
});

jQuery(window).load(function(){
	setTxtIconH();
	var mainvSwiper = new Swiper('.mainV-container', {
		pagination: '.mainRollM .swiper-pagination',
		loop: true,
		paginationClickable: true,
		onTouchStart: function(swiper,even){
		},

	});
	//앵커이동 체크
	if(location.search.indexOf("?link") > -1) {
		var str = location.search.split("?link=")[1];
		if(jQuery(window).width() > 953) {
			TweenMax.to($("html, body"), 0.7, {scrollTop:$("#"+str).offset().top, ease:Power3.easeOut});
		} else if(jQuery(window).width() < 953) {
			TweenMax.to($("html, body"), 0.7, {scrollTop:$("#"+str).offset().top - 30, ease:Power3.easeOut});
		}
	}
});

function setTxtIconH()
{
	/*
	var maxHeight;
	jQuery("#pt1 ul.inner li").each(function(q){
		if(jQuery("#pt1 ul.inner li").eq(0).outerHeight() >= jQuery("#pt1 ul.inner li").eq(1).outerHeight() ){
			if(jQuery("#pt1 ul.inner li").eq(0).outerHeight() >= jQuery("#pt1 ul.inner li").eq(2).outerHeight() ){
				maxHeight = jQuery("#pt1 ul.inner li").eq(0).outerHeight();
			}else{
				maxHeight = jQuery("#pt1 ul.inner li").eq(2).outerHeight();
			}
		}else{
			if(jQuery("#pt1 ul.inner li").eq(1).outerHeight() >= jQuery("#pt1 ul.inner li").eq(2).outerHeight() ){
				maxHeight = jQuery("#pt1 ul.inner li").eq(1).outerHeight();
			}else{
				maxHeight = jQuery("#pt1 ul.inner li").eq(2).outerHeight();
			}
		}

		jQuery("#pt1 ul.inner li").css("height", maxHeight);
		console.log(maxHeight);
	});
	*/

	var maxH = 0;
	var liH;
	var $li = jQuery("#pt1 ul.inner li");
	$li.each(function(q){
		liH = $(this).children(".img").height() + $(this).children("div").height() + 185;
		if(maxH < liH) maxH = liH;
	});
	jQuery("#pt1 ul.inner li").css("height", maxH);
}
/*
function setFileH()
{
	var maxH = 0;
	var fileH;
	var $li = jQuery("#pt4 > div > a");
	$li.each(function(q){
		if(jQuery(window).width() > 1243){
			fileH = $(this).children(".txt1").height() + $(this).children(".txt2").height() + $(this).children(".txt3").height() + 130;
			if(maxH < fileH) maxH = fileH;
		}else if(jQuery(window).width() > 953){
			fileH = $(this).children(".txt1").height() + $(this).children(".txt2").height() + $(this).children(".txt3").height() + 78;
			if(maxH < fileH) maxH = fileH;
		}else{
			maxH = auto;
		}
	});
	jQuery("#pt4 > div > a").css("height", maxH);
	jQuery("#pt4 .txtIcon1").click(function(){
		alert(maxH)
	});
}
*/

function rVisualSub(){
	if($(".rollDiv:eq(0)").css("display") == "block"){
		setTimeout("rVisual()", 7100);
	} else {
		rVisual();
	}
}

function rVisual(){


	maxVisual = jQuery(".mainRoll .rollDiv").size() -1;
	if(isMove == false){
		isMove = true;
		jQuery(".mainRoll .indiBts a.rollBt").eq(mainV).removeClass("on");
		jQuery(".mainRoll .rollDiv").eq(mainV).css("display","none");
		//TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV), 1, {top:"-100%", ease:Power3.easeOut});
		TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV), 1, {scale:1.1, opacity:0, ease:Power3.easeOut, onComplete:function(){
		}});
		mainV++;
		if(mainV > maxVisual){
			mainV = 0;
		}
		jQuery(".mainRoll .indiBts a.rollBt").eq(mainV).addClass("on");
		jQuery(".mainRoll .rollDiv").eq(mainV).css('display', 'block');
		//TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV), 0, {top:"100%", ease:Power3.easeOut});
		TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV), 1, {scale:1, opacity:1, ease:Power3.easeOut});

		TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".txt1"), 0, {opacity:0, top:50, ease:Power3.easeOut});
		TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".txt2"), 0, {opacity:0, top:137, ease:Power3.easeOut});
		TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".btPack"), 0, {opacity:0, top:224, ease:Power3.easeOut});

		TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".txt1"), .5, {opacity:1, top:0, delay:.5, ease:Power3.easeOut});
		TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".txt2"), .5, {opacity:1, top:87, delay:.7, ease:Power3.easeOut});
		TweenMax.to(jQuery(".mainRoll .rollDiv").eq(mainV).find(".btPack"), .5, {opacity:1, top:174, delay:.9, ease:Power3.easeOut, onComplete:function(){
			isMove = false;
		}});
	}
}