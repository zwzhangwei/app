
//头部轮播图开始
$(function(){
	var index = 0;
	var time = 0;
	var len  = $('.big li').length;
	console.log(len);
	function run(){
		time = setInterval(function(){
			$('.big li').eq(index).fadeOut(2000);
			$('.small-v li').eq(index).removeClass('active');
			index++;
			if(index>len-1){
				index=0;
			}
			$('.big li').eq(index).fadeIn(2000);
			$('.small-v li').eq(index).addClass('active');
		},2000);
	}
	run();

	$('.big li').mouseover(function(){
		clearInterval(time);
	}).mouseout(function(){
		run();
	})

	$('.small-v li').click(function(){
		$('.big li').eq(index).hide();
		$('.small-v li').eq(index).removeClass('active');
		$('.riqi').eq(index).hide();
		index = $(this).index();
		console.log(index);
		$('.big li').eq(index).show();
		$('.small-v li').eq(index).addClass('active');
		$('.riqi').eq(index).show();
	})

	var len = $('.liebiao li').length;
		console.log(len);
	$('.liebiao li').click(function(){
		index = $(this).index();
		$('liebiao li').eq(index).addClass('abc');
	})
})
//头部轮播图结束

//搜索栏的选项卡开始
var seach =document.querySelector('.seach');
	var li = document.querySelectorAll('.liebiao li');
	var xxh = document.querySelectorAll('.seach .xunhuan');
	var len = li.length;
	for(var i=0;i<len;i++){
		li[i].onclick = function(){
			for(var j=0;j<len;j++){
				xxh[j].style.display = 'none';
			}

		var index = this.getAttribute('data-index');
		xxh[index].style.display = 'block';
	}
}
//搜索栏的选项卡结束

//主体内容-left轮播图开始
$(function(){
	var index = 0;
	var len = $('.lbt-1 li').length;
	var time = 0;
	function run(){
		time = setInterval(function(){
			$('.lbt-1 li').eq(index).hide();
			index++;
			if(index> len-1){
				index = 0;
			}
			$('.lbt-1 li').eq(index).show();

		},1800);
	}
	run();
	$('.lbt').mouseover(function(){
		clearInterval(time);
	}).mouseout(function(){
		run();
	})
})
//主体-left轮播图结束