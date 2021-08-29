
var url = location.search;
var rid;
if(url.indexOf("?") == -1) {//電腦版網址後方沒有參數，就自動進入手機版判斷程式

                        if(navigator.userAgent.match(/Android|iPhone|iPad/i)) {
                window.location = 'mobile.html';
             }

 }

 if(url.indexOf("?") != -1)  {//電腦版網址後方有參數

    var str = url.substr(1);
    rid = str.split("=")[1];

    if (rid != "web" ){  //且第一個參數不是web，就自動進入手機般判斷程式
    if(navigator.userAgent.match(/Android|iPhone|iPad/i)) {
                window.location = 'mobile.html';
             }

    }
}