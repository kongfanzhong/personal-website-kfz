function showVideo(myMask){
    $("#" + myMask).css("height",$(document).height());     
    $("#" + myMask).css("width",$(document).width());    
    $("#" + myMask).css("",$(document).width() / 2);
    document.getElementById(myMask).style.display = 'block';
    $("#" + myMask).show(); 
}

function maskHidden(myMask, myVideo){
    console.log(myMask, myVideo);
    document.getElementById(myVideo).pause();      
    $("#" + myMask).hide();
}
