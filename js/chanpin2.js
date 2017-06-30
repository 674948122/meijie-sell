var left=document.getElementById('left');
var diz=document.getElementById('diz');
var dz=document.getElementById('dz')
var list=document.getElementById('list');
var lis=list.children;
var picture1=document.getElementById('picture1');
var zshi=document.getElementById('zshi');
left.onmouseover=function (ev){
	var e=ev||window.event;
	if (e.stopPropagation){
		e.stopPropagation();//非IE阻止事件传播
	}else{
		e.cancelBubble=true;//IE阻止事件冒泡
	}
	
	list.style.display='block';
	diz.style.borderLeft='1px solid #D1CFCF';
	diz.style.borderRight='1px solid #D1CFCF';
	diz.style.borderBottom='1px solid #fff';
	diz.style.background='#fff';
	picture1.src='images/2.png';
	for (var i = 0; i < lis.length; i++) {
		if (dz.innerHTML==lis[i].innerHTML) {
			lis[i].style.background='#f06';
			lis[i].style.color="#fff";
			s=i;
		};			
		lis[i].onclick=function (){
			for (var i = 0; i < lis.length; i++) {
				if (lis[i]==this) {
					dz.innerHTML=this.innerHTML;
					list.style.display='none';
					lis[i].style.background='#f06';
					lis[i].style.color="#fff";
					picture1.src='images/3.png';
				}else{
					lis[i].style.background='#fff';
					lis[i].style.color="#666";
				};
			};	
		}
		lis[i].onmouseover=function (){
			for (var i = 0; i < lis.length; i++) {
				if (lis[i]==this) {
					if (dz.innerHTML==this.innerHTML) {
						continue;
					} else{
						lis[i].style.background='#F4f4f4';
						lis[i].style.color='#f06';
					};
				} else{
					lis[i].style.background='#fff';
					lis[i].style.color="#666";
				};
			};	
		}
	};
}
left.onmouseout=function (){
	list.style.display='none';
	diz.style.border='none';
	diz.style.background='#F1F1F1';
	picture1.src='images/3.png';
	for (var i = 0; i < lis.length; i++) {
		if (dz.innerHTML==lis[i].innerHTML) {
			continue;
		};
		lis[i].style.background='#fff';
		lis[i].style.color="#666";
	}
}

// var sum=byclass2('zcolor');
var daohang=document.getElementById('daohang');
function byclass2(classn){//全局获取类
	var tags=document.all ? document.all : document.getElementsByTagName('*');
	var arr=[];
	for (var i = 0; i < tags.length; i++) {
		//可获取有多个类名的元素
		if (tags[i].className.indexOf(classn)!=-1) {
			arr.push(tags[i]);
		}
	};
	return arr;
}
var arr=byclass2('zcolor');
var sum=byclass2('bord')[0];
var bj=byclass2('bj')[0];
var picture3=document.getElementById('picture3');
var picture2=byclass2('picture2');
for (var i = 0; i < picture2.length; i++) {
	picture2[i].src='images/3.png';
};

var zcolor=byclass2('zcolor');
for (var i = 0; i < zcolor.length; i++) {
	zcolor[i].onmouseover=function (){
		for (var i = 0; i < zcolor.length; i++) {
			if (zcolor[i]==this) {
				zcolor[i].style.color='#c81623';
			} else{
				zcolor[i].style.color='#666';
			};
		};
	}
	zcolor[i].onmouseout=function(){
		for (var i = 0; i < zcolor.length; i++) {
			zcolor[i].style.color='#666';
		};
	}
};
var sele=0;
$('#se').click(function (){
	if (sele==0) {
		$('.kuang .xia').css('display','block');
		$('.kuang var').eq(0).addClass('ar');
		sele=1;
	} else{
		$('.kuang .xia').css('display','none');
		$('kuang var').eq(0).removeClass('ar');
		sele=0;
	};	
});


$('.xiangjie p').mouseover(function () {
	var mi=$('.xiangjie p').index(this);
	$('.xiangjie p').eq(mi).addClass('color').siblings().removeClass('color');
	$('.xiangjie .zuo1').eq(mi).addClass('bn').siblings().removeClass('bn');
})






// //获取对象到body的offsetLeft或offsetTop
// function offsetTL(obj){
// 	var l=0,t=0;
// 	while(obj) {
// 		l=l+obj.offsetLeft;
// 		t=t+obj.offsetTop;
// 		obj=obj.offsetParent;
// 	}
// 	return {left:l,top:t};
// }
// var minbox=document.getElementById('minbox');
// var minImg=minbox.children[0];
// var mask=minbox.children[1];
// var maxbox=document.getElementById('maxbox');
// var maxImg=maxbox.children[0];

// minbox.onmousemove=function (ev){
// 	mask.style.display='block';
// 	maxbox.style.display='block';
// 	var e=ev||window.event;	
// 	var maskT=e.clientY-offsetTL(minbox).top-mask.offsetHeight/2;   //向上移动的距离
// 	var maskL=e.clientX-offsetTL(minbox).left-mask.offsetWidth/2;   //向左移动的距离
// 	var posL=minbox.offsetWidth-mask.offsetWidth;
// 	var posT= minbox.offsetHeight-mask.offsetHeight;
// 	if (maskT>=posT) {
// 		maskT=posT;//最多值
// 	} else if(maskT<=0) {
// 		maskT=0;//最小值
// 	};
// 	if (maskL>=posL) {
// 		maskL=posL;//最多值
// 	} else if(maskL<=0) {
// 		maskL=0;//最小值
// 	};
// 	mask.style.top=maskT+'px';
// 	mask.style.left=maskL+'px';

// 	var scale=maxImg.offsetWidth/minImg.offsetWidth;  //比例
// 	maxImg.style.top=-maskT*scale+'px';
// 	maxImg.style.left=-maskL*scale+'px';  
// }
// minbox.onmouseout=function (){
// 	mask.style.display='';
// 	maxbox.style.display='';
// }