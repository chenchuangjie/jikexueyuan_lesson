/*
百度首页交互JS 
 */

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

/*
加载执行
 */

$(function() {

    baiDu.init();
})
