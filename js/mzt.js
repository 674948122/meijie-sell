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

	document.getElementById('em5').innerHTML=days;
	document.getElementById('em6').innerHTML=hours;
	document.getElementById('em7').innerHTML=minutes;
	document.getElementById('em8').innerHTML=seconds;

	document.getElementById('em9').innerHTML=days;
	document.getElementById('em10').innerHTML=hours;
	document.getElementById('em11').innerHTML=minutes;
	document.getElementById('em12').innerHTML=seconds;

	document.getElementById('em13').innerHTML=days;
	document.getElementById('em14').innerHTML=hours;
	document.getElementById('em15').innerHTML=minutes;
	document.getElementById('em16').innerHTML=seconds;

	document.getElementById('em17').innerHTML=days;
	document.getElementById('em18').innerHTML=hours;
	document.getElementById('em19').innerHTML=minutes;
	document.getElementById('em20').innerHTML=seconds;

	document.getElementById('em21').innerHTML=days;
	document.getElementById('em22').innerHTML=hours;
	document.getElementById('em23').innerHTML=minutes;
	document.getElementById('em24').innerHTML=seconds;

	document.getElementById('em25').innerHTML=days;
	document.getElementById('em26').innerHTML=hours;
	document.getElementById('em27').innerHTML=minutes;
	document.getElementById('em28').innerHTML=seconds;

	document.getElementById('em29').innerHTML=days;
	document.getElementById('em30').innerHTML=hours;
	document.getElementById('em31').innerHTML=minutes;
	document.getElementById('em32').innerHTML=seconds;

	document.getElementById('em33').innerHTML=days;
	document.getElementById('em34').innerHTML=hours;
	document.getElementById('em35').innerHTML=minutes;
	document.getElementById('em36').innerHTML=seconds;

	document.getElementById('em37').innerHTML=days;
	document.getElementById('em38').innerHTML=hours;
	document.getElementById('em39').innerHTML=minutes;
	document.getElementById('em40').innerHTML=seconds;

	document.getElementById('em41').innerHTML=days;
	document.getElementById('em42').innerHTML=hours;
	document.getElementById('em43').innerHTML=minutes;
	document.getElementById('em44').innerHTML=seconds;

	document.getElementById('em45').innerHTML=days;
	document.getElementById('em46').innerHTML=hours;
	document.getElementById('em47').innerHTML=minutes;
	document.getElementById('em48').innerHTML=seconds;

	document.getElementById('em49').innerHTML=days;
	document.getElementById('em50').innerHTML=hours;
	document.getElementById('em51').innerHTML=minutes;
	document.getElementById('em52').innerHTML=seconds;

	document.getElementById('em53').innerHTML=days;
	document.getElementById('em54').innerHTML=hours;
	document.getElementById('em55').innerHTML=minutes;
	document.getElementById('em56').innerHTML=seconds;

	document.getElementById('em57').innerHTML=days;
	document.getElementById('em58').innerHTML=hours;
	document.getElementById('em59').innerHTML=minutes;
	document.getElementById('em60').innerHTML=seconds;

	document.getElementById('em61').innerHTML=days;
	document.getElementById('em62').innerHTML=hours;
	document.getElementById('em63').innerHTML=minutes;
	document.getElementById('em64').innerHTML=seconds;

	document.getElementById('em65').innerHTML=days;
	document.getElementById('em66').innerHTML=hours;
	document.getElementById('em67').innerHTML=minutes;
	document.getElementById('em68').innerHTML=seconds;

	document.getElementById('em69').innerHTML=days;
	document.getElementById('em70').innerHTML=hours;
	document.getElementById('em71').innerHTML=minutes;
	document.getElementById('em72').innerHTML=seconds;

	document.getElementById('em100').innerHTML=days;
	document.getElementById('em102').innerHTML=hours;
	document.getElementById('em103').innerHTML=minutes;
	document.getElementById('em104').innerHTML=seconds;

	document.getElementById('em105').innerHTML=days;
	document.getElementById('em106').innerHTML=hours;
	document.getElementById('em107').innerHTML=minutes;
	document.getElementById('em108').innerHTML=seconds;

	document.getElementById('em109').innerHTML=days;
	document.getElementById('em110').innerHTML=hours;
	document.getElementById('em111').innerHTML=minutes;
	document.getElementById('em112').innerHTML=seconds;

	document.getElementById('em113').innerHTML=days;
	document.getElementById('em114').innerHTML=hours;
	document.getElementById('em115').innerHTML=minutes;
	document.getElementById('em116').innerHTML=seconds;

	document.getElementById('em117').innerHTML=days;
	document.getElementById('em118').innerHTML=hours;
	document.getElementById('em119').innerHTML=minutes;
	document.getElementById('em120').innerHTML=seconds;

	document.getElementById('em121').innerHTML=days;
	document.getElementById('em122').innerHTML=hours;
	document.getElementById('em123').innerHTML=minutes;
	document.getElementById('em124').innerHTML=seconds;

},1);





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