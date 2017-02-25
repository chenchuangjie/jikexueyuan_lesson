$(document).ready(function() {

    /*这里的程序用来导航的位置 */
    var deviceWidth = $('body').width();
    $('nav li').each(function(index, item) {
        // 得到文字长度
        if ($(this).find('a').html().split('').length > 2) {
            // 如果字体数量大于2就125
            $(this).width(deviceWidth / 3);
        } else {
            // 否则字体数量少于2就64.5
            $(this).width(deviceWidth / 6);
        }
    });

    /*新闻内容*/
    refreshNews('精选');
    headRefreshNews();
    $('nav a').click(function(e) {
        // 阻止上面的内容
        e.preventDefault();
        // $(this).css({
        //     'border-bottom':'1px solid #fff'
        // });
        
        // alert(e);
        //获取导航的栏目内容
        var type = $(this).text();
        // 显示导航栏目内容
        refreshNews(type);
    });
     $('#many').click(function(e) {
        // 阻止上面的内容
        e.preventDefault();
        refreshNews('互联网');
     });
});

function refreshNews(type) {
    var $lists = $('article ul');
    $lists.empty(); //内部元素会删掉
    $.ajax({
        url: 'server/getnews.php',
        type: 'get',
        datatype: 'json',
        data: { newstype: type },
        success: function(data) {
            //  forEach方法中的参数：第一个参数是遍历的数组内容，第二个参数是对应的数组索引，第三个参数是数组本身
            data.forEach(function(item, index, array) {
                // prependTo是在被选元素前面插入 appendTo() 方法在被选元素的结尾插入 HTML 元素
                var $list = $('<li></li>').addClass('news-list').prependTo($lists);
                var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
                var $img = $('<img>').attr('src', item.newsimg).appendTo($newsImg);
                var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsContent);
                var $p = $('<p></p>').appendTo($newsContent);
                var $newsTime = $('<span></span>').addClass('newstime').html(item.newstime).appendTo($p);
                var $newsSrc = $('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p);
            });
            console.log(data);
        }
    });
}

function headRefreshNews() {
    var $swiperContainer = $('.swiper-container');
    $.ajax({
        url: 'server/gethead.php',
        type: 'get',
        datatype: 'json',
        success: function(data) {
            //  forEach方法中的参数：第一个参数是遍历的数组内容，第二个参数是对应的数组索引，第三个参数是数组本身
            data.forEach(function(item, index, array) {
               var $one = $('#swiper .swiper-slide').eq(index);

               // var $swiperS =$('<div></div>').addClass('swiper-slide').appendTo($swiper);
               var $a = $('<a></a>').appendTo($one);
               var $img = $('<img>').attr('src', item.headimg).appendTo($a);
               var $p = $('<p></p>').addClass('txt').appendTo($a);
               var $span = $('<span></span>').html(item.headtitle).appendTo($p);
               var $dog = $('<div></div').addClass('swiper-pagination').appendTo($swiperContainer);
            });
            console.log(data);
        }
    });
}
