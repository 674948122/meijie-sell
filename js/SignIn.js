
$('.goto').click(function (){
	$('.disappear').hide();
	$('.go').show();
	var t=5;
	var timer=setInterval(function (){
		t--;
		$('.go span').html(t);
		if (t<=1){
		window.open('Login.html','_self');
		clearInterval(timer);
		};	
	},1000);	
});
$('.go p').click(function (){
		window.open('Login.html','_self');
});
