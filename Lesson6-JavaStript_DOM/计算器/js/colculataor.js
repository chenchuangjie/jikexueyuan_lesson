// ********************************//
//           计算器js文件          //
//*********************************//
var num = 0; //计算器输入的数字
var codeStr;
var count = 0;
var result = 0; //计算的结果
var inputshow = "0"; //输入框显示的内容
var operate = 0; //判断输入状态的标志 "0"为刚添加完数据,"1"为刚操作完运算符号
var calcul = 0; //判断计算状态的标志 1加 2减 3乘 4除 
var quit = 0; //防止重复按键的标志 0为刚输入数字 1为刚输入运算符,则不可以再输入运算符

var delate = document.getElementById('del');
var dot = document.getElementById('dot');
var negative = document.getElementById('negative');
var oRec = document.getElementById('oRec');
var clearscreen = document.getElementById('clearscreen');
var clearnote = document.getElementById('clearnote');
var Odeng = document.getElementById('Odeng');
var formulaScreen = document.getElementById('formulaScreen');
var sin = document.getElementById('sin');
var tan = document.getElementById('tan');
var cos = document.getElementById('cos');
var zero = document.getElementById('zero');

function results(num) {
    //alert("进入command()方法");
    var str = String(document.calculator.inputScreen.value); //获得当前显示数据 
    str = (str != "0") ? ((operate == 0) ? str : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值; 
    str = str + String(num);
    //给当前值追加字符 
    document.calculator.inputScreen.value = str; //刷新显示  
    codeStr = String(str);
    operate = 0; //重置输入状态 
    quit = 0; //刚输入数字
}

function calculate() {
    inputshow = Number(document.calculator.inputScreen.value); //Number() 函数把对象的值转换为数字
    if (num != 0 && quit != 1) { //判断前一个运算数是否为零以及防重复按键的状态 
        switch (calcul) { //判断要输入状态 
            case 1:
                result = accAdd(num, inputshow);
                break;
            case 2:
                result = sub(num, inputshow);
                break;
            case 3:
                result = mul(num, inputshow);
                break;
            case 4:
                if (inputshow != 0) {
                    result = div(num, inputshow);
                } else {
                    alert("被除数不能为零");
                    result = "NaN";
                }
                break;
            case 5:
                result = num / 100;
                break;
            case 6:
                if (inputshow >= 0) {
                    result = Math.sqrt(inputshow)
                } else {
                    alert("根号下不能为负数");
                    result = "";
                }

                break;
            case 7:
                result = 1 / num;
                break;
            case 8:
                result = parseFloat(Math.sin((Math.PI / 180) * num).toFixed(8));
                break;
            case 9:
                result = parseFloat(Math.cos((Math.PI / 180) * num).toFixed(8));
                break;
            case 10:
                result = parseFloat(Math.tan((Math.PI / 180) * num).toFixed(8));
                break;

        }

        quit = 1; //避免重复按键 
    } else {
        result = inputshow;
    }

    inputshow = String(result);
    document.calculator.inputScreen.value = inputshow;
    num = result; //存储当前值 
}

// 两个浮点数加法求和
function accAdd(num, inputshow) {
    var r1, r2, m;
    try {
        r1 = num.toString().split('.')[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = inputshow.toString().split(".")[1].length;
    } catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    // return (num1*m+num2*m)/m;
    return Math.round(num * m + inputshow * m) / m;

}
// 减法
function sub(num, inputshow) {
    var c, d, e;
    try {
        c = num.toString().split(".")[1].length;
    } catch (f) {
        c = 0;
    }
    try {
        d = inputshow.toString().split(".")[1].length;
    } catch (f) {
        d = 0;
    }
    return e = Math.pow(10, Math.max(c, d)), (mul(num, e) - mul(inputshow, e)) / e;
}


// 乘法
function mul(num, inputshow) {
    var c = 0,
        d = num.toString(),
        e = inputshow.toString();
    try {
        c += d.split(".")[1].length;
    } catch (f) {}
    try {
        c += e.split(".")[1].length;
    } catch (f) {}
    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}
// 除法
function div(num, inputshow) {
    var c, d, e = 0,
        f = 0;
    try {
        e = num.toString().split(".")[1].length;
    } catch (g) {}
    try {
        f = inputshow.toString().split(".")[1].length;
    } catch (g) {}
    return c = Number(num.toString().replace(".", "")), d = Number(inputshow.toString().replace(".", "")), mul(c / d, Math.pow(10, f - e));
}


function res(count) {

    calculate(); //调用计算函数 
    calcul = count;
    operate = count; //更改输入状态 
}

function equal() {
    calculate(); //等于 
    operate = 1;
    num = 0;
    result = 0;
    inputshow = "0";
}

function Special_operator(code) {
    calculate();
    calcul = code;
    equal();
}
// tan正切
tan.onclick = function() {
        var str = String(document.calculator.inputScreen.value); //获得当前显示数据 
        if (str == 0) {
            alert("请输入算式");
        } else {
            calculate(); //调用计算函数 
            calcul = 10;
            equal();
            var sinCode = 'tan(' + codeStr + ')';
            document.getElementById('formulaScreen').value = sinCode;
        }


    }
    // sin正弦
sin.onclick = function() {
        var str = String(document.calculator.inputScreen.value); //获得当前显示数据 
        if (str == 0) {
            alert("请输入算式");
        }else {
            calculate(); //调用计算函数 
            calcul = 8;
            equal();
            var sinCode = 'sin(' + codeStr + ')';
            document.getElementById('formulaScreen').value = sinCode;
        }


    }
    // cos余弦
cos.onclick = function() {
        var str = String(document.calculator.inputScreen.value); //获得当前显示数据 
        if (str == 0) {
            alert("请输入算式");
        } else {

            calculate(); //调用计算函数 
            calcul = 9;
            equal();
            var sinCode = 'cos(' + codeStr + ')';
            document.getElementById('formulaScreen').value = sinCode;
        }


    }
    //清屏
clearnote.onclick = function() {
    document.calculator.inputScreen.value = "0";
    document.getElementById('formulaScreen').value = "请输入算式";
}

//清除数据 
clearscreen.onclick = function() {
        num = 0;
        result = 0;
        inputshow = "0";
        document.calculator.inputScreen.value = "0";
        document.getElementById('formulaScreen').value = "请输入算式";
    }
    // 倒数
oRec.onclick = function() {
    var str = String(document.calculator.inputScreen.value); //获得当前显示数据
    if (str == '0') {
        str = '正无穷';
        document.calculator.inputScreen.value = str;
    } else {
        calculate();
        calcul = 7;
        equal();
    }
}

// 正负
negative.onclick = function() {
    var str = String(document.calculator.inputScreen.value); //获得当前显示数据
    if (str > 0) {
        document.calculator.inputScreen.value = -str;
    } else {
        document.calculator.inputScreen.value = -str;
    }

}

// 小数点
dot.onclick = function() {
    var str = String(document.calculator.inputScreen.value);
    str = (str != "0") ? ((operate == 0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
    for (i = 0; i <= str.length; i++) { //判断是否已经有一个点号 
        if (str.substr(i, 1) == ".") return false; //如果有则不再插入 
    }
    str = str + ".";
    document.calculator.inputScreen.value = str;
    operate = 0;
}

// 退格
delate.onclick = function() {
    var str = String(document.calculator.inputScreen.value);
    str = (str != "0") ? str : ""; //如果字符串是"0"，则为""，不是"0",则为原来屏幕上的数字字符串
    str = str.substr(0, str.length - 1); //删除str最后一个字符
    str = (str != "") ? str : "0"; //如果str不为空则返回str
    document.calculator.inputScreen.value = str;
}
