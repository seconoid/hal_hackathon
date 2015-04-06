// ロード時処理
$(document).ready(function(){
  // ページ全体をフェードイン
  $('body').fadeIn(1000);

  // 正方形を生成
  var w = $('.box-b').width();
  $('.box-b').css('height', w);
  var w = $('.box-c').width();
  $('.box-c').css('height', w);
  var w = $('.box-d').width();
  $('.box-d').css('height', w);
  $('.box-d').css('line-height', w+'px');
});

// リサイズ時に正方形を維持
$(window).on('resize', function(){
  var w = $('.box-b').width();
  $('.box-b').css('height', w);
  var w = $('.box-c').width();
  $('.box-c').css('height', w);
  var w = $('.box-d').width();
  $('.box-d').css('height', w);
});
