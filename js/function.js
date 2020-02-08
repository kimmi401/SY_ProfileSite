$(function () {

  var $mnu = $('.gnb a');
  var mnuIdx = 0;
  console.log(mnuIdx);



  $(window).on('load resize', function () {

    var winH = $(window).height();
    var navH = $('nav').height();

    $('nav').css({
      top: (winH - navH) / 2  
    });
  });

  //각 article의 top값
  var arrTopVal = [];

  $('.cont').each(function (idx) {
    arrTopVal[idx] = $(this).offset().top;
  });


  console.log('arrTopVal =', arrTopVal);

 
  function pageAni(topVal) {
    $('html,body').stop().animate({
      scrollTop: topVal
    });
    $mnu.eq(mnuIdx).parent().addClass('on').siblings().removeClass('on')
  }

  //메뉴에 대한 click 이벤트 구문
  $mnu.on('click', function (event) {
    event.preventDefault();

    mnuIdx = $mnu.index(this);

    pageAni(arrTopVal[mnuIdx]);
  });


  //스크롤 높이값에 따른 메뉴활성화
  $(window).on('scroll', function () {

    var scrollTop = $(window).scrollTop();

    for (var i = 0; i < 5; i++) {
      if (scrollTop >= arrTopVal[i]) {
        $mnu.eq(i).parent().addClass('on').siblings().removeClass('on');
      }
    }

  });

});



//WOW 플러그인 연동
  $(window).on("load", function () {
        new WOW().init();
    });
  


//기술영역(#skills)
$(function () {


  $(".cont2").on("inview", function (evt, visible) {

    if (visible) {

      $(".cont2 .bar").each(function () {

        $(this).css({
          width: $(this).parent().attr("data-bar") + "%"
        });

      });
    }
  });

 
  $(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop < $(".cont2").offset().top - $(window).height()) {
      $(".cont2 .bar").width(0);
    }
  });


  $(".circle").on("inview", function (evt, visible) {
    if (visible) {
      $('.chart').easyPieChart({
        //your configuration goes here
        easing: 'easeInOutCubic',
        delay: 3000,
        barColor: '#fff3f3',
        trackColor: 'rgba(0,0,0,0.1)',
        scaleColor: false,
        lineWidth: 8,
        size: 140,
        animate: 2000,
        onStep: function (from, to, percent) {
          this.el.children[0].innerHTML = Math.round(percent);
        }
      });
    }
  });

});



//up서클
$(function(){
   $('.up').on('click',function(){
      $('html,body').animate({
          scrollTop:  0 
      },1000) 
   }); 
});


//스쿨워크 팝업 슬라이드

$(function(){
   var $indicator = $('.sw_slides-pagination>li>a');
  var $sw_container = $('.sw_slidescontainer');
  var $btnPrev = $('.sw_prev');
  var $btnNext = $('.sw_next');
  var nowIDX = 0;
    
   $('.sw_img>a').on('click',function(evt){
       evt.preventDefault();
       $('.screen').stop().fadeIn(0);
   })

  function slide(){ 
    $indicator.eq(nowIDX).parent().addClass('on')
              .siblings().removeClass('on');
    $sw_container.stop().animate({left:-(800*nowIDX)});
  }

 
  $indicator.on('click',function(evt){
    evt.preventDefault();
    nowIDX = $indicator.index(this);

    slide();
  });

  //prev
  $btnPrev.on('click',function(){
    if(nowIDX>0){
      nowIDX--;
    }else{
      nowIDX = 16;
    }

    slide();
  });

  //next
  $btnNext.on('click',function(){
    if(nowIDX<16){
      nowIDX++;
    }else{
      nowIDX=0;
    }

    slide();
  });

    $('.close').on('click',function(evt){
        evt.preventDefault();
        $('.screen').stop().fadeOut(0);
    });
});


//슬라이드 포트폴리오

$(function () {
  var $btnPrev = $('.slides-previous');
  var $btnNext = $('.slides-next');
  var $container = $('.slides-container');
  var $onSlide = $('.banner>a');
  var nowIdx = 0;

  function slide() { //중간배너 활성화 & 컨테이너 이동
    $onSlide.eq(nowIdx).addClass('on').parent().siblings().children('a').removeClass('on');

    $onSlide.eq(nowIdx).parent().addClass('on')
      .siblings().addClass('down');

    $container.stop().animate({ left: -(739 * nowIdx) });
  }

  setInterval(function () {
    if (nowIdx < 7) {
      nowIdx++;
    } else {
      nowIdx = 0;
    }

    slide();
  }, 2900);


  //prev
  $btnPrev.on('click', function () {
    if (nowIdx > 0) {
      nowIdx--;
    } else {
      nowIdx = 7;
    }

    slide(); 
  });

  //next
  $btnNext.on('click', function () {
    if (nowIdx < 7) {
      nowIdx++;
    } else {
      nowIdx = 0;
    }

    slide(); 
  });

});




