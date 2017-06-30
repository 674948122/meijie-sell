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



var set=new Date("2016/6/1,00:00:00");//结束时间
var end=set.getTime();//1970.1.1到2016.5.1总毫秒数
setInterval(function (){
	var now=new Date();//当前时间
	var start=now.getTime();//当前到1970.1.1的总毫秒数
	var allTime=end-start;//整个倒计时总的毫秒数
	var days=parseInt(allTime/(1000*60*60*24));//剩余天数
	var rest1=allTime%(1000*60*60*24);//减掉天数剩余的毫秒数
	var hours=parseInt(rest1/(1000*60*60));//剩余小时数
	var rest2=rest1%(1000*60*60);//减掉天数和小时数剩余的毫秒数
	var minutes=parseInt(rest2/(1000*60));//剩余分钟数
	var rest3=rest2%(1000*60);//减掉天数和小时数和分钟数剩余的毫秒数
	var seconds=parseInt(rest3/1000);//剩余秒数
	var milliseconds=rest3%1000;//剩余毫秒数
	document.getElementById('em1').innerHTML=days;
	document.getElementById('em2').innerHTML=hours;
	document.getElementById('em3').innerHTML=minutes;
	document.getElementById('em4').innerHTML=seconds;

},1);


//右条
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


$('#qdl').click(function (){
	window.open('Login.html','_blank');
});
$('.mfzc').click(function (){
	window.open('SiginIn.html','_blank');
});