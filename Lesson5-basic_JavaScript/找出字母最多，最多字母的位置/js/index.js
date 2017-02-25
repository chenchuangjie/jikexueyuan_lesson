 var arr = ["a", "c", "c", "c", "b", "b", "b", "b", "c", "p", "e"];
 var count = {};
 var pos = {};
 // forEach 遍历、循环
 // 在ES5支持Array使用function传参
 // 第一个传参：遍历的数组内容
 // 第二个传参：对应的数组的索引
 // 第三个传参：数组本身
 //遍历arr，统计每个字母出现次数且记录位置
 arr.forEach(function(value, index) {
     if (count[value]) {
         count[value]++;
         pos[value] += "," + index;
     } else {
         count[value] = 1;
         pos[value] = "" + index;


     }
 });
 console.log(pos);
 //获取出现最多的字母
 var max = 0;
 var j = 0;
 var more = '';
 for (var i in count) {
     if (count[i] >= max) {
         max = count[i];
     }
 }
// 找出字母的序数
 for(var i in count){
    if(count[i] == max){
        more+=i;
    }
 }


 document.getElementById("mbody").innerHTML = more + "&nbsp;&nbsp;最多个数是：" + max;
 for (var e in more) {
     tmpl = '<p>' + '最多字母'+more[e]+'顺序：' + pos[more[e]]; + '<span>'

     + '</span>' + '</p>'
     groupcount.innerHTML += tmpl;
 }
 // document.getElementById("order").innerHTML = count[letter] + tmpl;
