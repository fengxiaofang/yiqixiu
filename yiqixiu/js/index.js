function $(id){
	return document.getElementById(id);
}
var imgList=$("up").getElementsByTagName("li");
var olList=$("down").getElementsByTagName("li");
var index=0;//控制图片与文字下标的对应关系
var timer=null;
timer=setInterval(autoPlay,3000);
function autoPlay(){
	//排他思想
	for(var i=0;i<olList.length;i++){
		olList[i].className="";
		imgList[i].style.display="none";
	}
	index++;//该行代码写在上面 避免初次运行时 加载延时1秒
	if(index==olList.length){
		index=0;
	}
	olList[index].className="blue";
	imgList[index].style.display="block";
}
//鼠标移到某个文字上面就显示对应的图片
for(var i=0;i<olList.length;i++){
	olList[i].index=i;
	olList[i].onmouseover=function(){
		clearInterval(timer);
		index=this.index-1;//将当前鼠标移入的li的index值赋值给全局变量index, 目的为了让 文字的样式和图片相对应,
		autoPlay(); 
	}
	//鼠标离开后 重新启动定时器
	olList[i].onmouseout=function(){
		timer=setInterval(autoPlay,3000);
	}
}
