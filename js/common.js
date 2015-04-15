var z = 1; //z-indexの値

// ロード時処理
$(document).ready(function(){
  // ページ全体をフェードイン
  $('body').fadeIn(700);

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

// ロゴをクリックでメイン表示領域をリセット
$('.logo2').click(function(){
  slideOut();
})

// コンテンツに対応するクラスを取得
$('.about-trg').click(function(){
  var cont = $('.about');
  slideIn(cont);
});

$('.concept-trg').click(function(){
  var cont = $('.concept');
  slideIn(cont);
});

$('.schedule-trg').click(function(){
  var cont = $('.schedule');
  slideIn(cont);
});

$('.news-trg').click(function(){
  var cont = $('.news');
  slideIn(cont);
});

$('.archieve-trg').click(function(){
  var cont = $('.archieve');
  slideIn(cont);
});

// trgに対応するコンテンツをフェードインする
function slideIn(cont){
  // コンテンツが既に表示されていたら処理を抜ける
  if( checkCurrent(cont) ){
    return false;
  }

  // 表示開始位置設定
  var pos = $('.mv').offset();
  var posLeft = pos.left - cont.width();
  cont.css({ left:posLeft});
  cont.show();

  // 非表示になるコンテンツからcurrentクラスを排除
  removeCurrent();

  // 表示中のコンテンツにはcurrentクラスを付与
  addCurrent(cont);

  // 透明から表示
  cont.css({ opacity:0 });

  // 新しく表示するボックスを一番手前に設定
  setZindex();

  // フェードイン
  cont.animate({
    opacity: 0.97,
    left: 0,
    easing: "linear"
  }, 850 );
}

function slideOut(){

  // フェードアウト位置設定
  var pos = $('.mv').offset();
  var posLeft = pos.left + $('.mv').width();

  // フェードアウト
  $('.sub').animate({
    opacity: 0,
    left: posLeft
  }, 850);

  $(function(){
    setTimeout(function(){
      $('.sub').hide();
    }, 850)
  })
  removeCurrent();
  z = 1;
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

// currentクラスを排除
function removeCurrent(){
  $('.current').addClass('uncurrent');
  $('.current').removeClass('current');
}

// currentクラスのコンテンツを一番手前に表示
function setZindex(){
  z += 1;
  $('.current').css({zIndex:z});
}
