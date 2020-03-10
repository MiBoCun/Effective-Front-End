var initLeft=undefined;
var initTop=undefined;
var elementPopup=undefined;

window.onload=function () {
    init();
}

function init() {
    initLeft=Math.random()*300;
    initTop=Math.random()*100;
    elementPopup=document.getElementById("MovingPopup");
    elementPopup.style.left=initLeft+"px";
    elementPopup.style.top=initTop+"px";
    setInterval("MovingPopup()",100);

}

function MovingPopup() {
    elementPopup.style.left+=5;
    elementPopup.style.top+=5;
}