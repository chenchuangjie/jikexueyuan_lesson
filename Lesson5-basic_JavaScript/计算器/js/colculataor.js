 /* 定义一个Calculator类*/
 function Calculator() {

     this.jisuan = function(num1, num2, oper) {
         var res = 0;
         switch (oper) {
             case "+":
                 res = num1 + num2;
                 break;
             case "-":
                 res = num1 - num2;
                
                 break;
             case "*":
                 res = num1 * num2;

                 break;
             case "/":
                 if (!num2 == 0) {
                     res = (num1 / num2);
                     if (res < 1) {
                         res = (num1 / num2).toFixed(4);
                     }


                 } else {
                     alert("不能为0");
                     res = "";
                 }
                 break;
         }
         return res;
     }
 }
 //创建对象
 var calculator = new Calculator();
 /*定义全局变量*/
 var val = 0; //放置输入的值
 var xval = 0; //保存转换Number类型的值
 var temp = 0; //保存第一次输入的值    
 var code = 0;
 var oper = ""; //保存输入的操作符入数字*/
 var ispoint = false; //是否点击了小数点
 var operate = 0; //判断输入状态的标志 
 var float = false;
 var clearcode = false;
 //获取操控的数据
 function inputPCB(e) {
     val = e.value;
     var xsval = document.getElementById('result-count');
     if (e.value == "C") {
         // 清除
         xsval.value = "";
         ispoint = false;
         float = false;

     } else if (e.value == "Del") {
         // 退格       
         var arr = document.getElementById("result-count");
         arr.value = xsval.value.substring(0, xsval.value.length - 1); 
     } else if (e.value == "POWER") {
         // 计算
         // xsval.value = Math.pow(xsval.value, 2);
     }
 }


 //获取输入的数字
 function results(e) {

     var xsval = document.getElementById("result-count");
     //当等于时候，再按数字就要清除之前的数
     if (clearcode) {
         xsval.value = "";
         clearcode = false;
     }

     val = e.value;
     xsval.value += val; //连续输入数字(String类型)
     //转换Number类型
     xval = parseFloat(xsval.value);
     float = false;
 }

 //输入操作符
 function resultsOper(e) {
     oper = e.value;

     if (!float) {
     if (e.value == "+") {
         ispoint = false;
         var xsval = document.getElementById("result-count");
         //保存上次计算结果，并对字符串进行转换Number类型
         temp = parseFloat(xsval.value);
         //第一次输入的值设置为空
         xsval.value = "";
     } else if (e.value == "-") {
         var xsval = document.getElementById("result-count");
         temp = parseFloat(xsval.value);
         ispoint = false;
         xsval.value = "";
     } else if (e.value == "*") {
         ispoint = false;
         var xsval = document.getElementById("result-count");
         temp = parseFloat(xsval.value);
         xsval.value = "";

     } else if (e.value == "/") {
         ispoint = false;
         var xsval = document.getElementById("result-count");
         temp = parseFloat(xsval.value);
         xsval.value = "";
     }
     float = true;
     }
 }
 /*计算结果*/
 function resultsEquel(e) {
     var xsval = document.getElementById("result-count");
     if (e.value == "=") {
         //调用对象方法
         float = false;
         clearcode = true;
         xsval.value = calculator.jisuan(temp, xval, oper);
     }
 }
 // 小数点
 function dot(e) { //判断是否插入小数点
     var judge = document.getElementById("result-count").value;
     judge = (judge != "0") ? ((operate == 0) ? judge : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值; 
     if (!ispoint && judge) {
         var xsval = document.getElementById("result-count");
         val = e.value;
         xsval.value += val;
         xval = parseFloat(xsval.value);
         ispoint = true;
     }

 }
