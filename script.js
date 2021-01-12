$(function () {
    // スクロールしたら表示されるアイテムの設定
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.scrollanime').each(function () {
            const targetPosition = $(this).offset().top;
            if (scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fadeInDown");
            }
        });
    });

    // 開いたあとにフェードインするアイテムの設定
    $(document).ready(function () {
        $('.openanime').each(function () {
            $(this).addClass("fadeInDownFast");
        });
    });
});