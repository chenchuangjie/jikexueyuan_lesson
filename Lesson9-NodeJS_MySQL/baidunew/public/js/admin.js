/*打开后台页面的时候，发送请求，刷新新闻列表*/
$(document).ready(function() {
    var $newsTable = $('#newstable tbody');
    var $headtable = $('#headtable tbody');
    refreshNews();
    headRefreshNews();
    // 添加新闻
    $('#btnsubmit').click(function(e) {

        // 禁止之前的点击
        e.preventDefault();
        // 输入判断
        if ($('#newstitle').val() === "" || $('#newsimg').val() === "" || $('#newstime').val() === "" || $('#newssrc').val() === "") {
            //新闻标题
            if ($('#newstitle').val() === "") {
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }
            //新闻图片
            if ($('#newsimg').val() === "") {
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().removeClass('has-error');
            }
            //新闻时间
            if ($('#newstime').val() === "") {
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().removeClass('has-error');
            }
            //新闻来源
            if ($('#newssrc').val() === "") {
                $('#newssrc').parent().addClass('has-error');
            } else {
                $('#newssrc').parent().removeClass('has-error');
            }
        } else {
            var jsonNews = {
                newstitle: $('#newstitle').val(),
                newstype: $('#newstype').val(),
                newsimg: $('#newsimg').val(),
                newstime: $('#newstime').val(),
                newssrc: $('#newssrc').val()
            };
            // 提交添加
            $.ajax({
                url: 'admin/insert',
                type: 'post',
                datatype: 'json',
                data: jsonNews,
                success: function(data) {
                    console.log("添加成功");
                    refreshNews(); //刷新列表
                    $('.form-group input').val(" ");
                }
            });
        }
    });
    // 删除新闻的功能
    var deleteId = null;
    $newsTable.on('click', '.btn-danger', function(e) {
        $('#deleteModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(3).html();
    });

    $('#deleteModal #confirmDelete').click(function(e) {
        if (deleteId) {
            $.ajax({
                url: 'admin/delete',
                type: 'post',
                data: { newsid: deleteId },
                success: function(data) {
                    console.log("删除成功");
                    $('#deleteModal').modal('hide');
                    refreshNews(); //刷新列表
                },
                error: function(error) {
                    console.log(error)

                }
            });
        }
    });

    // 修改新闻的功能
    var updateId = null;
    $newsTable.on('click', '.btn-primary', function(e) {
        $('#updateModal').modal('show');
        updateId = $(this).parent().prevAll().eq(3).html();
        $.ajax({
            url: 'admin/curnews',
            type: 'get',
            datatype: 'json',
            data: { newsid: updateId },
            success: function(data) {
                console.log(data);
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewssrc').val(data[0].newssrc);
                var utimes = moment(data[0].newstime).format("YYYY-MM-DD");
                $('#unewstime').val(utimes);
            }
        });
    });

    $('#updateModal #confirmUpdate').click(function(e) {
        $.ajax({
            url: 'admin/update',
            type: 'post',
            data: {
                newstitle: $('#unewstitle').val(),
                newstype: $('#unewstype').val(),
                newsimg: $('#unewsimg').val(),
                newstime: $('#unewstime').val(),
                newssrc: $('#unewssrc').val(),
                id: updateId

            },
            success: function(data) {
                $('#updateModal').modal('hide');
                refreshNews();
            }
        });
    });

    // 修改头条的功能
    var HeadId = null;
    $headtable.on('click', '.btn-primary', function(e) {
        $('#updateModalHead').modal('show');
        HeadId = $(this).parent().prevAll().eq(2).html();
        console.log("1::" + HeadId);
        $.ajax({
            url: '/admin/headlines',
            type: 'get',
            datatype: 'json',
            data: { newsid: HeadId },
            success: function(data) {
                console.log(data);
                // 显示数据
                $('#uheadtitle').val(data[0].headtitle);
                $('#uheadimg').val(data[0].headimg);
            }
        });
    });
    /*修改成功想数据库更新数据*/
    $('#updateModalHead #confirmUpdate').click(function(e) {
        $.ajax({
            url: '/admin/updateHead',
            type: 'post',
            data: {
                headtitle: $('#uheadtitle').val(),
                headimg: $('#uheadimg').val(),
                id: HeadId

            },
            success: function(data) {
                $('#updateModalHead').modal('hide');
                headRefreshNews();
            }
        });
    });


    function refreshNews() {
        //empty table
        $newsTable.empty();
        $.ajax({
            url: '/admin/getnews',
            type: 'get',
            datatype: 'json',
            data: { newstype: null },
            success: function(data) {
                data.forEach(function(item, index, array) {
                    var $tdid = $('<td>').html(item.id);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdimg = $('<td>').html(item.newsimg);
                    /*实现年月日有两种方法*/
                    var day = moment(item.newstime).format("YYYY-MM-DD");//第一种，使用moment.js
                    // var d = new Date(item.newstime); //第二种，使用截取
                    // var str = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();//第二种，使用截取
                    var $tdtime = $('<td>').html(day);
                    var $tdsrc = $('<td>').html(item.newssrc);
                    var $tdctrl = $('<td>');
                    // 按钮
                    var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('修改');
                    var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');

                    $tdctrl.append($btnupdate, $btndelete);
                    $tRow = $('<tr>');

                    $tRow.append($tdid, $tdtype, $tdtitle, $tdtime, $tdctrl);
                    $newsTable.append($tRow);
                });
            }
        });
    }


    function headRefreshNews() {
        $headtable.empty();
        $.ajax({
            url: '/admin/gethead',
            type: 'get',
            datatype: 'json',
            success: function(data) {
                data.forEach(function(item, index, array) {
                    var $tdid = $('<td>').html(item.id);
                    var $tdtitle = $('<td>').html(item.headtitle);
                    var $tdimg = $('<img>').attr('src', item.headimg).css({
                        'width': '100px',
                        'height': '70px',
                        'padding': '5px 0px'
                    });
                    var $tdctrl = $('<td>');
                    // 按钮
                    var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('修改');

                    $tdctrl.append($btnupdate);
                    $tRow = $('<tr>');

                    $tRow.append($tdid, $tdtitle, $tdimg, $tdctrl);
                    $headtable.append($tRow);
                });
            }
        });
    }
});
