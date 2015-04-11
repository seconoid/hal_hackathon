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

// ナビをクリックでコンテンツエリアを変更
$('.about-trg').click(function(){
  var cont = $('.about')
  var trg = $(this)
  slide(cont, trg);
});

$('.concept-trg').click(function(){
  var cont = $('.concept')
  var trg = $(this)
  slide(cont, trg);
});

// メイン表示領域のスライド
function slide(cont, trg){

  // クリックしたコンテンツが既に表示されていたら抜ける
  if( checkMain(trg) ){
    return false
  }

  $('.main').slideUp(550,function(){
    removeMain();
    addMain(cont, trg);
    $('.main').slideDown(550);
  });
}

// メインコンテンツクラスの排除
function removeMain(){
  $('.main').addClass('sub');
  $('.main').removeClass('main')
  $('.on').addClass('off');
  $('.on').removeClass('on');
}

// 新しいメインコンテンツにクラスを追加
function addMain(cls, trg){
  $(cls).addClass('main');
  $(cls).removeClass('.sub');
  $(trg).removeClass('off');
  $(trg).addClass('on');
}

// メインコンテンツの変更の有無を調べる
function checkMain(trg){
  if( trg.hasClass('on') ){
    return true;
  }
}
