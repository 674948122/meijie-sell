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


var shangpin=byclass2('shangpin');var sp6=byclass2('sp6');
var sp6_p1=$('.shangpin .sp6_p1');
var sp6_p2=$('.shangpin .sp6_p2');
var iut=byclass2('iut');
var danjia=byclass2('danjia');
var sp9=byclass2('sp9');
var qian=0,shu=0,jine=0
qian=parseInt(danjia[0].innerHTML);
shu=parseInt(iut[0].value);
qian=parseInt(danjia[1].innerHTML);
shu=parseInt(iut[1].value);
sp6_p1[0].onclick=function (){	
	shu--;
	if (shu<=1) {
		shu=1;
	};
	iut[0].value=shu;
	sp9[0].innerHTML=qian*shu;
}
sp6_p2[0].onclick=function (){
	qian=parseInt(danjia[0].innerHTML);
	shu=parseInt(iut[0].value);
	shu++;
	iut[0].value=shu;			
	sp9[0].innerHTML=qian*shu;
}


sp6_p1[1].onclick=function (){
	qian=parseInt(danjia[1].innerHTML);
	shu=parseInt(iut[1].value);
	shu--;
	if (shu<=1) {
		shu=1;
	};
	iut[1].value=shu;
	sp9[1].innerHTML=qian*shu;
}
sp6_p2[1].onclick=function (){
	qian=parseInt(danjia[1].innerHTML);
	shu=parseInt(iut[1].value);
	shu++;
	iut[1].value=shu;			
	sp9[1].innerHTML=qian*shu;
}



$('#qdl').click(function (){
	window.open('Login.html','_blank');
});
$('.mfzc').click(function (){
	window.open('SiginIn.html','_blank');
});