/*
项目：极客学院
编写：陈创杰
时间：2017-01-03
 */
$(document).ready(function() {

    // 搜索框
    searchClick();
    // nav导航菜单
    navClick();
    // 列表切换
    ListClick();
    //回到顶部
    Totop();

});

/* 搜索框 */
function searchClick() {
    // 弹出搜索框
    $('#search-icon').click(function() {
            $('#searchbox').addClass('scale').animate({ 'width': '850px' }, 1500);
        })
        // 关闭搜索框
    $('#close').click(function() {
        $('#searchbox').attr('class', 'searchbox').width("100px");
    })
}

/* 导航菜单*/
function navClick() {
    // 导航菜单
    $("#aside-cList li").each(function(index) {
        $("#aside-cList li").hover(function() {
            $("#list-show").eq(index).toggle();
        });

    });
}
/* 列表切换*/
function ListClick() {
    // 方块风格
    $('.kuai-icon').click(function() {
        $('.sort').next().attr('class', 'lesson-list');
        // 恢复初始状态
        $("div.lesson-list ul li").find('.lesson-infor>p').attr('style', 'height:88px');
        $("div.lesson-list ul li").find('.zhongji').attr('style', 'display:none;')
    });
    // 列表风格
    $('.list-icon').click(function() {
    	// 将sort同级lesson-list转换lesson-list2
        $('.sort').next().attr('class', 'lesson-list2');
        $('.lesson-infor').attr('style', 'height:88px');
        $('.lesson-infor p').attr('style', 'height:36px;opacity: 0;display: block;')
        $('.zhongji').attr('style', 'display:block;')
    });
    // 列表内容
    $(".lesson-list ul li").each(function(index) {
        $(this).mouseenter(function() {
            // 鼠标移入播放按钮显示
            $(".lessonplay").eq(index).css("opacity", "1").fadeIn(500);
            if ($('body').find('.lesson-list2').length == 1) {
                return;
            }
            $(".lesson-infor").eq(index).css("height", "175px");
            // 中间的的详情显示
            $(".lesson-infor>p").eq(index).css({
                "height": "52px",
                "opacity": "1"
            }).slideDown(350);
            // 中级
            $(".zhongji").eq(index).css("display", "block");
            // 课时
            $(".learn-number").eq(index).css("display", "block");
            // 底部
            $(".lessonicon-box").eq(index).css("bottom", "-2px");

        }).mouseleave(function() {
            // 鼠标移出播放按钮隐藏
            $(".lessonplay").eq(index).css("opacity", "0");
            if ($('body').find('.lesson-list2').length == 1) {
                return;
            }
            $(".lesson-infor").eq(index).css("height", "88px");
            $(".lesson-infor>p").eq(index).css({
                "height": "0",
                "opacity": "0"
            }).slideUp(350);
            // 中级隐藏
            $(".zhongji").eq(index).css("display", "none");
            // 课时隐藏
            $(".learn-number").eq(index).css("display", "none");
            // 底部隐藏
            $(".lessonicon-box").eq(index).css("bottom", "4px");
        });
    });
}

/*回到顶部*/
function Totop() {
	 //首先将#back-to-top隐藏
	 $("#Tohead").hide();
	 $(window).scroll(function(){
	 	if($(window).scrollTop()>100){
	 		$("#Tohead").fadeIn(500);
	 	}else{
	 		$("#Tohead").fadeOut(500);
	 	}
	 });
    // 回到顶部点击事件
    $("#Tohead").click(function() {
        var speed = 500; //滑动的速度
        $('body').animate({ scrollTop: 0 }, speed);
        return false;
    });
}
