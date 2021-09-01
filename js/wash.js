var count = 0;
var bubble=document.getElementById("#bubble");
$(document).ready(function(){
    for(var i=0;i<100;i++){
        $("#shampoo").click(function(){
            $("#bubble").attr("src","pic/bubble.png");
            count++;
        });
        if(count==30){
        $("#body").attr("src","pic/body2.png");
        }
    }
    
});
