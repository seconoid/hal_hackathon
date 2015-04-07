// ロード時処理
$(document).ready(function(){
  // ページ全体をフェードイン
  $('body').fadeIn(1000);
  $('.sub').hide();

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

// コンテンツをクリックでメイン領域の表示を変更
$('.about-trg').click(function(){
  $('.main').hide();
  $('.main').addClass('sub');
  $('.main').removeClass('main');
  $('.about').addClass('main');
  $('.about').removeClass('.sub');
  $('.main').show();
  $('.about-trg').removeClass('off');
  $('.about-trg').addClass('on');
});

$('.concept-trg').click(function(){
  $('.main').hide();
  $('.main').addClass('sub');
  $('.main').removeClass('main');
  $('.concept').addClass('main');
  $('.concept').removeClass('.sub');
  $('.main').show();
  $('.concept-trg').removeClass('off');
  $('.concept-trg').addClass('on');
});

$('.archieve-trg').click(function(){
  $('.main').hide();
  $('.main').addClass('sub');
  $('.main').removeClass('main');
  $('.archieve').addClass('main');
  $('.archieve').removeClass('.sub');
  $('.main').show();
  $('.archieve-trg').removeClass('off');
  $('.archieve-trg').addClass('on');
});

$('.news-trg').click(function(){
  $('.main').hide();
  $('.main').addClass('sub');
  $('.main').removeClass('main');
  $('.news').addClass('main');
  $('.news').removeClass('.sub');
  $('.main').show();
  $('.news-trg').removeClass('off');
  $('.news-trg').addClass('on');
});
