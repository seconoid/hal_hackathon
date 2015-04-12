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

$('.logo2').click(function(){
  $('.mv').animate(
    {"left": "-50px"},
    "slow"
  );
});


// コンテンツに対応するクラスを取得
$('.about-trg').click(function(){
  var cont = $('.about');
  slideIn(cont);
});

$('.archieve-trg').click(function(){
  var cont = $('.archieve');
  slideIn(cont);
});

function slideIn(cont){
  // trgに対応するコンテンツが表示されていたら処理を抜ける
  if( checkCurrent(cont) ){
    return false;
  }
  var pos = $('.mv').offset();
  var posLeft = pos.left - cont.width();
  cont.css({ left:posLeft});
  cont.show();
  addCurrent(cont);
  cont.animate({
    opacity: 1,
    left: 0,
    easing: "linear"
  }, 850 );
}

function slideOut(){
  
}

// 表示中のコンテンツにcurrentクラスを追加
function addCurrent(cont){
  cont.removeClass('uncurrent');
  cont.addClass('current');
}

// trgに対応するコンテンツが表示中かの判断
function checkCurrent(cont){
  if( cont.hasClass('current') ){
    return true;
  }
}
