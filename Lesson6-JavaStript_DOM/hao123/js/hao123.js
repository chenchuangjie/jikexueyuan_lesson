/*
项目：仿hao123网页
编写：陈创杰
时间：2016-12-23
 */

var cool = document.getElementById('skin-cool');
var yellow = document.getElementById('skin-yellow');
var green = document.getElementById('skin-green');
var red = document.getElementById('skin-red');
var blue = document.getElementById('skin-blue');
var nav = document.getElementById('navigation');


//创建新的对象
var a = localStorage.getItem('a');
var b = localStorage.getItem('b');
// 判断localStorage是否为空
if (a == null && a == undefined && b == null && b == undefined) {
    document.body.className = 'skingreen';
} else {
    document.body.className = a;
    nav.style.background = b;
}
// 轻绿
green.onclick = function() {
        var link = 'skingreen';
        var color = "#4BA634";
        nav.style.background = color;
        document.body.className = link;
        localStorage.setItem("a", link);
        localStorage.setItem("b", color);
    }

// 炫酷
cool.onclick = function() {
    var link = 'skincoll';
    var color = "#130E2E";
    nav.style.background = color;
    document.body.className = link;
    localStorage.setItem("a", link);
    localStorage.setItem("b", color);
}

// 轻黄
yellow.onclick = function() {
    var link = 'skinyellow';
    var color = "#FEE252";
    nav.style.background = color;
    document.body.className = link;
    localStorage.setItem("a", link);
    localStorage.setItem("b", color);
}



// 红喜
red.onclick = function() {
    var link = 'skinred';
    var color = "red";
    nav.style.background = color;
    document.body.className = link;
    localStorage.setItem("a", link);
    localStorage.setItem("b", color);
}

// 寒冬
blue.onclick = function() {
    var link = 'skinblue';
    var color = "blue";
    nav.style.background = color;
    document.body.className = link;
    localStorage.setItem("a", link);
    localStorage.setItem("b", color);
}
