/*
项目：瀑布流图片JS
*/

$(document).ready(function() {
    /*回到顶部*/
    //首先将#back-to-top隐藏
    $("#Top").hide();
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#Top").fadeIn(1500);
        } else {
            $("#Top").fadeOut(1500);
        }
    });
    // 回到顶部点击事件
    $("#Top").click(function() {
        var speed = 500; //滑动的速度
        $('body').animate({ scrollTop: 0 }, speed);
        return false;
    });
    /*回到顶部END*/
    $(window).on("load", function() {
        // 执行瀑布流程序
        imgLocation();
        // 模拟图片数据
        var dataImg = {
            "data": [{ "src": "1.jpg" }, { "src": "2.jpg" }, { "src": "3.jpg" }, { "src": "4.jpg" }, { "src": "5.jpg" }, { "src": "6.jpg" }]
        };
        window.onscroll = function() {
            // 如果加载完成返回true
            if (scrollside()) {

                $.each(dataImg.data, function(index, value) {
                    // 将模拟的图片数据添加Class
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    $("<img>").attr("src", "image/" + $(value).attr("src")).appendTo(content);

                });
                // 执行瀑布流程序 
                imgLocation();
            }
        };
        window.onresize = function() {
            // 执行瀑布流程序
            imgLocation();
        }
    });


});
// 加载滚动
function scrollside() {
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    var documentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight < scrollHeight + documentHeight) ? true : false;
}
// 瀑布流
function imgLocation() {
    var box = $(".box");
    // 获取第一张图片的宽度
    var boxWidth = box.eq(0).width();
    // 通过计算获取浏览器的宽度能容下多少个图片
    var num = Math.floor($(window).width() / boxWidth);
    // 使瀑布流居中实时更新
    var testWidth = num * 256;
    $('#container').css({
        'width': testWidth + 'px',
        'margin': '0 auto'
    });
    // 新建数组对象
    var boxArr = [];
    // 遍历图片
    box.each(function(index, value) {
        // 清除一下样式，不是缩小后再拉伸就不行了
        value.style.cssText = '';
        // 获取每张图片的高度
        var boxHeight = box.eq(index).height();
        // 距离顶部的高度数值
        var number = box.offset().top;
        // 第一行可以容纳的图片数量
        if (index < num) {
            boxArr[index] = boxHeight + number;
        } else {
            // 根据第一行的排列进行瀑布流操作
            // 替换当前数组内最少的高度数值
            var minboxHeight = Math.min.apply(null, boxArr);
            // 在数组找到最小高度的索引
            var minboxIndex = $.inArray(minboxHeight, boxArr);
            // 改变#box的CSS样式
            $(value).css({
                "position": "absolute",
                "top": minboxHeight,
                "left": box.eq(minboxIndex).position().left
            });
            //更新当前图片的高度数值
            boxArr[minboxIndex] += box.eq(index).height();
            $('.center').css("height", minboxHeight); //这里是我加的
        }
    });

}
