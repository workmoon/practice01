// left 영역 열고닫기
$(document).ready(function(){
    $(".left-btn").click(function(){
        $(".left").toggleClass("close");
        $(".main").toggleClass("wide");
    });
});
// left menu 열고닫기
$(document).ready(function(){
    $(".l-menu-li").click(function(){
        $(this).toggleClass("on");
    });
});