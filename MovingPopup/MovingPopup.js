var initLeft=undefined;
var initTop=undefined;
var elementPopup=undefined;
var windowWidth=undefined;
var windowHeight=undefined;

window.onload=function () {
    init();
    
}

function init() {
    initLeft=Math.random()*300;
    initTop=Math.random()*100;
    windowWidth=document.body.clientWidth;
    windowHeight=document.body.clientHeight;

    elementPopup=document.getElementById("movingPopup");
    elementPopup.style.left=initLeft+"px";
    elementPopup.style.top=initTop+"px";
    setInterval("movingPopup()",200);

}

function movingPopup() {
	var currentLeft=elementPopup.style.left;    
	var currentTop=elementPopup.style.top;
	
    var currentLeftNum=toNumber(currentLeft);
    var currentTopNum=toNumber(currentTop);
   
   // console.log(currentBottom);

    if((currentTopNum+100)>=windowHeight){
       elementPopup.style.top=(currentTopNum-10)+"px";
    }else{
    	elementPopup.style.top=(currentTopNum+10)+"px";
    }

    if((currentLeftNum+400)>=windowWidth){
       elementPopup.style.left=(currentLeftNum-10)+"px";
    }else{
    	elementPopup.style.left=(currentLeftNum+10)+"px";
    }
    //elementPopup.style.left=(currentLeftNum+10)+"px";
    
}

function toNumber(cssString){
	return parseInt(cssString.replace("px",""));
      

}
