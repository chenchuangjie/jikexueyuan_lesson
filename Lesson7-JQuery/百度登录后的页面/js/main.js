/*
项目：仿登录后百度网页
编写：陈创杰
时间：2017-01-02
 */
$(document).ready(function() {
    /*登录后中间内容的的导航*/
    change();
    /*换取皮肤*/
    changeBg();
    /*我的关注*/
    Myopen();

});
/*登录后中间内容的的导航*/
function change() {
    /*标签*/
    $('.contentfirst').show();
    $('#tabfirst li').click(function() {
        $(this).addClass("tabin").siblings().removeClass();
        //获取当前标签的索引值           
        var content_index = $('#tabfirst li').index(this);
        $('.content-wrap').eq(content_index).show()
            .siblings().hide();
    });

}
/*换取皮肤*/
function changeBg() {
    //创建新的对象
    var a = localStorage.getItem('a');
    // 判断localStorage是否为空
    if (a == null && a == undefined) {
        $("body").css({
            "background-image": 'url(image/bluecool.jpg)'

        });
    } else {
        $("body").css({
            "background-image": a

        });
    }

    /*换皮肤*/
    $("#downBg").click(function() {
        $("#BgColor").slideDown(500);
        $(".img-down").click(function() {
            $("#BgColor").slideUp(500);
        });

        // 肤色
        $("#bg-01").click(function() {
            var urlImage = 'url(image/bluecool.jpg)';
            $("body").css({
                "background-image": urlImage

            });
            $("body").css({
                "background-image": urlImage

            });
            localStorage.setItem("a", urlImage);
        });
        $("#bg-02").click(function() {
            var urlImage = 'url(image/grrencool.jpg)';
            $("body").css({
                "background-image": urlImage

            });
            localStorage.setItem("a", urlImage);
        });
        $("#bg-03").click(function() {
            var urlImage = 'url(image/yellowcool.jpg)';
            $("body").css({
                "background-image": urlImage

            });
            localStorage.setItem("a", urlImage);
        });
    });
}
/*我的关注*/
function Myopen() {

    $("#eye-box").mouseenter(function() {
        $("#dis_menu1").fadeIn(1000);
    }).mouseleave(function() {
        $("#dis_menu1").fadeOut(1000);
    });

    /*百度首页交互JS */

    var baiDu = {
        init: function() {
            this.baiduSetting();
        },
        /*设置下拉菜单和侧边栏的显示与隐藏*/
        baiduSetting: function() {
            $('#navMore,#moreProduct').mouseover(function() {
                $("#moreProduct").show();
            }).mouseout(function() {
                $("#moreProduct").hide();
            })
        }
    }
    baiDu.init();
}
