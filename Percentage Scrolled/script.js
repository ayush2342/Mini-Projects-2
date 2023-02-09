var count=0;
var maxHeight=window.innerHeight;
var percentage=document.getElementById("percentageIndicator");
window.addEventListener("scroll",function()
{
count=Math.floor(((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100));

    percentage.innerHTML=count+"% Viewed";
})