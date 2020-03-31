var initLeft=undefined;
var initTop=undefined;
var windowWidth=undefined;
var windowHeight=undefined;
var popupEle=undefined;
var loopSet=undefined;

window.onload=function () {

    popupEle=document.getElementById("movingPopup");
    popupEle.onmouseover=function(){
        clearInterval(loopSet);

    };
    popupEle.onmouseout=function(){
        if(loopSet!=null){
            //判断计时器是否为空
            clearInterval(loopSet);
            loopSet=null;
        }
       loopSet=setInterval("movingPopup()",200);

    }
   init();
    
}

function init() {
    initLeft=Math.random()*300;
    initTop=Math.random()*100;
    windowWidth=document.body.clientWidth;
    windowHeight=document.body.clientHeight;
    popupEle.style.left=initLeft+"px";
    popupEle.style.top=initTop+"px";
    loopSet=setInterval("movingPopup()",200);

}

function movingPopup() {
	var currentLeft=popupEle.style.left;
	var currentTop=popupEle.style.top;
	
    var currentLeftNum=toNumber(currentLeft);
    var currentTopNum=toNumber(currentTop);


    if((currentTopNum+100)>=windowHeight){
        popupEle.style.top=(currentTopNum-10)+"px";
        popupEle.style.left=(currentLeftNum+10)+"px";
    }else{
        popupEle.style.top=(currentTopNum+10)+"px";
        popupEle.style.left=(currentLeftNum+10)+"px";
    }


   ;
    
}

function toNumber(cssString){
	return parseInt(cssString.replace("px",""));

}
