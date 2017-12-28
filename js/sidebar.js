$(function() {
    //home-page高度
    //外围有个pusher让我不能直接用百分比啊
    $('#page-home').height($(window).height());
    $(window).resize(function(event) {
        $('#page-home').height($(window).height());
    });
    //侧边栏开关
    $('.sidebar-toggle').click(function(event) {
        $('.ui.sidebar').sidebar('toggle');
    });
    //滚动监听
    var flexMenu = $('.flex-menu');
    $(window).scroll(function(event) {
        var top = $(window).scrollTop();
        (top > 50) ? flexMenu.show(): flexMenu.hide();
    });
    //回到顶部
    $('.to-top-toggle').click(function(event) {
        $('html,body').animate({ scrollTop: 0 }, 500);
    });
    //翻页
    $('.to-page1-toggle').click(function(event) {
        $('html,body').animate({ scrollTop: $('#page-1').offset().top }, 500);
    });
    //日历
    $('.ui.calendar').calendar({
        type: 'date'
    });
});