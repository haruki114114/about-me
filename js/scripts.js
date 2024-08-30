new LuminousGallery(document.querySelectorAll('.grid-gallery'), {}, {
    caption: function(trigger) {
        return trigger.querySelector('img').getAttribute('alt');
    }
});
// ページ上部に移動するボタンの処理
const topButton = document.getElementById('topBtn');

// スクロール時にボタンの表示を制御
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

// ボタンクリックでページ上部に移動
topButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
