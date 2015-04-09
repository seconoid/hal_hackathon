// ロード時処理
$(document).ready(function(){
  // ページ全体をフェードイン
  $('body').fadeIn(1000);
  $('.sub').hide();

  // 正方形を生成
  // ヘッダ部分
  var w = $('.size-a').width();
  $('.box-a').css('height', w);
  $('.box-b').css('height', w);
  $('.box-c').css('height', w);
  // ヘッダエリアの文字位置調整
  $('.box-a').css('line-height', w+'px');
  $('.box-b').css('line-height', w+'px');
  $('.box-c').css('line-height', w+'px');

  // ナビゲーションエリア
  var w = $('.size-b').width();
  $('.box-x').css('height', w);
  $('.box-y').css('height', w);
  $('.box-z').css('height', w);
});

// リサイズ時に正方形を維持
$(window).on('resize', function(){
  // ヘッダ部分
  var w = $('.size-a').width();
  $('.box-a').css('height', w);
  $('.box-b').css('height', w);
  $('.box-c').css('height', w);
  // ヘッダエリアの文字位置調整
  $('.box-a').css('line-height', w+'px');
  $('.box-b').css('line-height', w+'px');
  $('.box-c').css('line-height', w+'px');

  // ナビゲーションエリア
  var w = $('.size-b').width();
  $('.box-x').css('height', w);
  $('.box-y').css('height', w);
  $('.box-z').css('height', w);
});

// コンテンツをクリックでメイン領域の表示を変更
$('.about-trg').click(function(){
  if( $(this).hasClass('on') ){
    return false;
  }
  $('.main').slideUp(550,function(){
    $('.main').addClass('sub');
    $('.main').removeClass('main');
    $('.about').addClass('main');
    $('.about').removeClass('.sub');
    $('.main').slideDown(550);
    $('.on').addClass('off');
    $('.on').removeClass('on');
    $('.about-trg').removeClass('off');
    $('.about-trg').addClass('on');
  });
});

$('.concept-trg').click(function(){
  if( $(this).hasClass('on') ){
    return false;
  }
  $('.main').slideUp(550,function(){
    $('.main').addClass('sub');
    $('.main').removeClass('main');
    $('.concept').addClass('main');
    $('.concept').removeClass('.sub');
    $('.main').slideDown(550);
    $('.on').addClass('off');
    $('.on').removeClass('on');
    $('.concept-trg').removeClass('off');
    $('.concept-trg').addClass('on');
  });
});

$('.archieve-trg').click(function(){
  if( $(this).hasClass('on') ){
    return false;
  }
  $('.main').slideUp(550,function(){
    $('.main').addClass('sub');
    $('.main').removeClass('main');
    $('.archieve').addClass('main');
    $('.archieve').removeClass('.sub');
    $('.main').slideDown(550);
    $('.on').addClass('off');
    $('.on').removeClass('on');
    $('.archieve-trg').removeClass('off');
    $('.archieve-trg').addClass('on');
  });
});

$('.news-trg').click(function(){
  if( $(this).hasClass('on') ){
    return false;
  }
  $('.main').slideUp(550,function(){
    $('.main').addClass('sub');
    $('.main').removeClass('main');
    $('.news').addClass('main');
    $('.news').removeClass('.sub');
    $('.main').slideDown(550);
    $('.on').addClass('off');
    $('.on').removeClass('on');
    $('.news-trg').removeClass('off');
    $('.news-trg').addClass('on');
  });
});
