
/*------------------------------------------------
    >> script.js
-------------------------------------------------*/
$(function(){
  /*index.html-----------------------*/
  $(window).load(function (){
       $('.fadein').each(function(){
           var targetElement = $(this).offset().top;
           var scroll = $(window).scrollTop();
           var windowHeight = $(window).height();
           if (scroll > targetElement - windowHeight + 200){
               $(this).css('opacity','1');
               $(this).css('transform','translateY(0)');
           }
       });
   });
   /*---------------------------------------------*/
   $(window).load(function (){
        $('.fadein-m').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
    /*-----------------------------------------------*/
    $('input').click(function(){
      $(this).css('border','2px solid #ff84c1')
    });

/*------------------------------------------------------*/
$('a[href^=#]').click(function(){
  var speed = 200;
  var href= $(this).attr("href");
  var target = $(href == "#" || href =="" ? 'html': href);
  var position = target.offset().top;
  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
　　　});
/*------------------------------------------------------*/

});

$(function() {
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});
var loop = setInterval(function() {
    //li先頭要素のクローンを作成
    var clone = $(".slide li:first").clone(true);
    //li先頭要素のマージンレフトにマイナスを指定しアニメーションさせる
    $(".slide li:first").animate({
      marginLeft : "-60%"
    }, {
    duration : 1000,
    complete : function() {
        //処理完了時に先頭要素を削除
        $(".slide li:first").remove();
        //クローンをliの最後に追加
        clone.clone(true).insertAfter($(".slide li:last"));
    }
    });
}, 4000);
/*------------------------------------------------------*/
$(function() {
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});
var loop = setInterval(function() {
    //li先頭要素のクローンを作成
    var clone = $(".slide-2 li:first").clone(true);
    //li先頭要素のマージンレフトにマイナスを指定しアニメーションさせる
    $(".slide-2 li:first").animate({
    marginLeft : "-20%"
    }, {
    duration : 350,
    complete : function() {
        //処理完了時に先頭要素を削除
        $(".slide-2 li:first").remove();
        //クローンをliの最後に追加
        clone.clone(true).insertAfter($(".slide-2 li:last"));
    }
    });
}, 4000);
