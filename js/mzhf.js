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


$('.dtgd').scrollLeft($('.con img').width());

var fl2a1=1,fl2b2=0,fl2time1=null;
function fl2automove1 () {
	fl2time1=setInterval(function  () {
		fl2a1++;
		if (fl2a1>=$('.con img').length) {
			fl2a1=2;
			$('.dtgd').scrollLeft($('.con img').width());
		};
		fl2b2++;
		if (fl2b2>=$('.dtgd ul li').length) {
			fl2b2=0;
		};
		fl2move();
	},2000)
}
fl2automove1 ();
function fl2move () {
	$('.dtgd').animate({
		scrollLeft:$('.con img').width()*fl2a1
	})
	$('.dtgd ul li').eq(fl2b2).addClass('dian').siblings().removeClass('dian');
}

$('.dtgd .p1').click(function  () {
	clearInterval(fl2time1);
	fl2a1--;
	if (fl2a1<0) {
		fl2a1=$('.con img').length-3;
		$('.dtgd').scrollLeft($('.con img').width()*(fl2a1+1));
	};
	fl2b2--;
	if (fl2b2<0) {
		fl2b2=$('.dtgd ul li').length-1;
	};
	fl2move ();
	fl2automove1 ();
})
$('.dtgd .p2').click(function  () {
	clearInterval(fl2time1);
	fl2a1++;
	if (fl2a1>=$('.con img').length) {
		fl2a1=2;
		$('.dtgd').scrollLeft($('.con img').width());
	};
	fl2b2++;
	if (fl2b2>=$('.dtgd ul li').length) {
		fl2b2=0;
	};
	fl2move();
	fl2automove1 ();
})

var aa=byclass2('aa');
for (var i = 0; i < aa.length; i++) {
	aa[i].onmouseover=function (){
		for (var i = 0; i < aa.length; i++) {
			if (aa[i]==this) {
				aa[i].style.color='#c81623';
			} else{
				aa[i].style.color='#666';
			};
		};
	}
	aa[i].onmouseout=function (){
		for (var i = 0; i < aa.length; i++) {
			aa[i].style.color='#666';
		};
	}
};



$('#qdl').click(function (){
	window.open('Login.html','_blank');
});
$('.mfzc').click(function (){
	window.open('SiginIn.html','_blank');
});


$('.con6_over').mouseover(function (){
	var i=$('.con6_over').index(this);
	$('.con6_show').eq(i).css('display','block');
	$('.con6_over').eq(i).css('background','#ff0066');
	$('.con6_show').eq(i).stop().animate({
		width:'65px'
	});
	$('.con6_over').eq(i).stop().animate({
		width:'100px'
	});
	$('.con6_sho').click(function (){
		$('body').animate({
			scrollTop:'0px'
		});
	})
	
})
$('.con6_over').mouseout(function (){
	var i=$('.con6_over').index(this);
	$('.con6_show').eq(i).css('display','none');
	$('.con6_over').eq(i).css('background','#7a6e6e');
	$('.con6_show').eq(i).stop().animate({
		width:'0px'
	});
	$('.con6_over').eq(i).stop().animate({
		width:'35px'
	});
})