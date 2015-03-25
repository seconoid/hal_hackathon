// ロード時処理
$(document).ready(function(){
  // ページ全体をフェードイン
  $('body').fadeIn(1000);

  // 正方形を生成
  var w = $('.square').width();
  $('.square').css('height', w);
});

// リサイズ時に正方形を維持
$(window).on('resize', function(){
  var w = $('.square').width();
  $('.square').css('height', w);
});
