var React = require('react')

var imgs = ["img/pic_007.jpg","img/pic_008.jpg","img/pic_009.jpg"]
var Banner = React.createClass({
			getInitialState:function(){
				return{
					imgList:""
				}
			},
		componentWillMount:function(){
			var len = imgs.length;
			var arr = [];
			for(var i = 0; i < len; i++){
				arr.push(<li className="swiper-slide"><img src={imgs[i]} alt="" /></li>);
			}
			this.setState({imgList:arr})
		},
		
	render:function(){
		return(
				<div className="swiper-container">
					<ul className="swiper-wrapper">
						{this.state.imgList}
					</ul>
					<div className="swiper-pagination"></div>
					<div className="swiper-button-prev"></div>
					<div className="swiper-button-next"></div>
				</div>
	)},
	componentDidMount:function(){
    var mySwiper = new Swiper('.swiper-container', {
			direction: 'horizontal',
			loop: true,
			speed: 300,
			autoplay: 3000,			
			pagination: '.swiper-pagination',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
		})
  },
		})
module.exports = Banner
