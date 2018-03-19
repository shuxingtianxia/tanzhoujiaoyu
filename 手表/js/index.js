/*******  广告播放  *********/
var _index = 0;
var timePlay = null;
$("#banner .main div").eq(0).show().siblings("div").hide();
// 手动播放
$("#banner .banner-btn li").hover(function(){
	clearInterval(timePlay);
	_index = $(this).index();
	$(this).addClass("on").siblings().removeClass("on");
	$("#banner .main div").eq(_index).show().siblings("div").hide();
},function(){
	autoPlay();
})
//自动播放
function autoPlay(){
	timePlay = setInterval(function(){
		if(_index < 6){
			$("#banner .banner-btn li").eq(_index).addClass("on").siblings().removeClass("on");
			$("#banner div").eq(_index).show().siblings("div").hide();
			_index++;
		}else{
			_index = 0;
		}
	},1000)
};
autoPlay();
// 产品介绍
$(".int-watch .int-watch-con").eq(0).show().siblings("").hide();
$(".int-watch .int-watch-con ul li").mouseover(function(){
	_index = $(this).index();
	$(this).addClass("on").siblings().removeClass("on");
	$(".int-watch .int-watch-con").eq(_index).show().siblings().hide();
});
