var React = require('react')

var Banner = React.createClass({
	getInitialState:function(){
		return{
			dh1:''
		}
	},
	render:function(){
		return(
			<div className="swiper-container">
			<div className="swiper-wrapper">
				<div className="swiper-slide slide1 ">
					<div className="slide1-right slide11 ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="1s" id="dh1" >
						<h2>More Valuable Design</h2>
						<h3>设计创造价值</h3>
						<p>精细独到 巨细无遗</p>
						<p>独具创意 启发丰富灵感源泉</p>
						<p>一个全新的视觉感受 前所未有的标准 迎接你的体验</p>
					</div>
				</div>
				<div className="swiper-slide slide2">
					<div className="slide1-left"><img className="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="1s" src="img/ban2.png" alt="" /></div>
					<div className="slide1-right ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="1s">
						<h2>LG</h2>
						<p>展台面积：600平方</p>
						<p>展会时间：2012年1月</p>
						<p>展会名称：美国CES电子消费展</p>
						<p>展会地点：美国拉斯维加斯</p>
						<p>展览场馆：拉斯维加斯会展中心</p>
						<p>行业分类：电子通讯科技</p>
					</div>
				</div>
				<div className="swiper-slide slide3">
					<div className="slide1-left"><img className="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="1s" src="img/ban3.png" alt="" /></div>
					<div className="slide1-right ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="1s">
						<h2>SPYDER</h2>
						<p>展台面积：300平方</p>
						<p>展会时间：2014年12月</p>
						<p>展会名称：SEMA Show 2014</p>
						<p>展会地点：美国拉斯维加斯</p>
						<p>展览场馆：拉斯维加斯会展中心</p>
						<p>行业分类：橡胶轮胎</p>
					</div>
				</div>
				<div className="swiper-slide slide4">
					<div className="slide1-left"><img className="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="1s" src="img/ban5.png" alt="" /></div>
					<div className="slide1-right ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="1s">
						<h2>LG</h2>
						<p>展台面积：140平方</p>
						<p>展会时间：2013年3月</p>
						<p>展会名称：2015中国国际食品添加剂和配料展</p>
							
								<p>展会地点：中国上海</p>
								<p>展览场馆：上海世博展览馆</p>
								<p>行业分类：食品配料</p>
					</div>
				</div>
			</div>
			<div className="swiper-pagination"></div>
			<div className="swiper-button-prev"></div>
			<div className="swiper-button-next"></div>
			<div className="swiper-scrollbar"></div>
		</div>
		)
	},
	componentDidMount:function(){
	  	var mySwiper = new Swiper ('.swiper-container', {
								  	loop: true,
									autoplay:5000,
								  	pagination: '.swiper-pagination',    	   
								    nextButton: '.swiper-button-next',
								    prevButton: '.swiper-button-prev',  	    
								    scrollbar: '.swiper-scrollbar',
								    onInit: function(swiper){
								    swiperAnimateCache(swiper); 
								    swiperAnimate(swiper); 
								  }, 
	onSlideChangeEnd:function(swiper){ 
	    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	 } 
})

	},
})
module.exports = Banner
