//js呈現多行打字效果
//參考 https://css-tricks.com/snippets/css/typewriter-effect/

var words = new Array(
    "Hello!",
    "We are GDSC YZU!",
    "Click elements on the website.",
    "To get more information about us.",
    "Please press any key to continue. . .",
    "按任意建不會有任何變化(ฅ´ω`ฅ)",
    "這只是js效果",
    "挺多bug還請各位幫忙"
);
 var iIndex = 0; //從array裡的這個位置開始印
 var ArrLength = words[0].length;//array的長度
 var maxScroll = 20; //最多幾行，超過會覆蓋

 var TextPos = 0; //初始化words位置
 var sContents = '';
 var iRow; //代表現在跑到第幾行


 function typewriter()
 {
    setTimeout(200);
    sContents = ' ';
    iRow = Math.max(0, iIndex-maxScroll);
    var destination = document.getElementById("typing") //在html抓id=typing

    while( iRow < iIndex ){  //沒有這while下句話印出時會覆蓋掉上一句
        sContents += words[iRow++] + '<br />'; //每跑一次存一句話，用串接接在原本的sContents，br html語法換行
    }
    destination.innerHTML = sContents + words[iIndex].slice(0,TextPos) + "_";
    //用字串分割印出來
    if ( TextPos++ == ArrLength ){ //等於陣列裡的字結束
        TextPos = 0;
        iIndex++;//換下一句話
        if (iIndex != words.length)//如果還沒印完整個words array 
        {
            ArrLength = words[iIndex].length;
            setTimeout("typewriter()", 500); //500ms再執行一次function，也就是印下一行
        }
    }
    else{
        setTimeout("typewriter()", 100);
    }
 }
typewriter();