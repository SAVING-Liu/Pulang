var React = require("react")
var Plnew = React.createClass({
	render:function(){
		return(
			<div>	
						<h2>普朗新闻</h2>
		
		<div className="news">
			<div className="new-inner">
				
			
			<div className="new-left">
				<ul>
					<li><p>2017</p></li>
					<li><p>2016</p></li>
					<li><p>2015</p></li>
					<li><p>2014</p></li>
					<li><p>2013</p></li>
				</ul>
				
			</div>
			<div className="new-right">
				<ul>
					<li>
						<img src="img/pic_027.jpg" alt="" />
						<span style={{"font": "normal 14px/26px 'Microsoft Yahei'"}}>
普朗公司2016年会-盛大举行</span>
						<time style={{"color": "#c2c2c2",
    "font": "normal 14px/26px 'Microsoft Yahei'"}}>2017-01-11</time>
					</li>
					<li>
						<img src="img/pic_028.jpg" alt="" />
						<span style={{"font": "normal 14px/26px 'Microsoft Yahei'"}}>
十月普朗--西班牙巴塞罗那品质搭建之旅</span>
						<time  style={{"color": "#c2c2c2",
    "font": "normal 14px/26px 'Microsoft Yahei'"}}>2017-01-11</time>
					</li>
					<li>
						<img src="img/pic_029.jpg" alt="" />
						<span style={{"font": "normal 14px/26px 'Microsoft Yahei'"}}>
普朗集团亲情奉献爱心公益事业
</span>
						<time  style={{"color": "#c2c2c2",
    "font": "normal 14px/26px 'Microsoft Yahei'"}}>2015-05-22</time>
					</li>
					<li><img src="img/pic_030.jpg" alt="" />
						<span style={{"font": "normal 14px/26px 'Microsoft Yahei'"}}>

普朗集团亲情奉献爱心公益事业</span>
						<time  style={{"color": "#c2c2c2",
    "font": "normal 14px/26px 'Microsoft Yahei'"}}>2015-11-24</time></li>
					<li><img src="img/pic_031.jpg" alt="" />
						<span style={{"font": "normal 14px/26px 'Microsoft Yahei'"}}>

2015新加坡轮胎展台设计-普朗展览助力中国企业远航</span>
						<time  style={{"color": "#c2c2c2",
    "font": "normal 14px/26px 'Microsoft Yahei'"}}>2015-09-24</time></li>
				</ul>
			</div>
			</div>
		</div>

			</div>
		)
	}
})
module.exports=Plnew

