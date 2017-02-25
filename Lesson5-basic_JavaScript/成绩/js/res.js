function formcontent() {

    var counts = document.getElementById("count").value;
    if (counts >= 90 && counts <= 100) {
        document.getElementById("content").innerHTML = "一等生";
    } else if (counts >= 80 && counts < 90) {
        document.getElementById("content").innerHTML = "二等生";
    } else if (counts >= 70 && counts < 80) {
        document.getElementById("content").innerHTML = "三等生";
    } else if (counts >= 60 && counts < 70) {
        document.getElementById("content").innerHTML = "四等生";
    } else if (counts >= 50 && counts < 60) {
        document.getElementById("content").innerHTML = "五等生";
    } else if (counts >= 40 && counts < 50) {
        document.getElementById("content").innerHTML = "六等生";
    } else if (counts >= 30 && counts < 40) {
        document.getElementById("content").innerHTML = "七等生";
    } else if (counts >= 20 && counts < 30) {
        document.getElementById("content").innerHTML = "八等生";
    } else if (counts >= 10 && counts < 20) {
        document.getElementById("content").innerHTML = "九等生";
    } else if (counts >= 0 && counts < 10) {
        document.getElementById("content").innerHTML = "十等生";
    } else if (counts == "") {
        document.getElementById("content").innerHTML = "请输入成绩";
    } else {
        document.getElementById("content").innerHTML = "请输入正确的成绩";
    }
}
