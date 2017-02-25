/*
百度首页交互JS 
单例模式
 */

var baiDu = {
    init: function() {
        this.render();
        this.baiduSetting();
    },
    render:function(){
        var me = this;
        me.MPmouseover = $('#navMore,#moreProduct');
        me.MPmoreProduct = $('#moreProduct');
    },
    /*设置下拉菜单和侧边栏的显示与隐藏*/
    baiduSetting: function() {
        var me = this;
        me.MPmouseover.mouseover(function() {
           me.MPmoreProduct.show();
        }).mouseout(function() {
            me.MPmoreProduct.hide();
        })
    }
}

/*
加载执行
 */

$(function() {

    baiDu.init();
})
