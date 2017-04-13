var React = require('react')
var Head = React.createClass({
	render:function(){
		return(
			<div>
				<div className="lf_top">
						<div className="container">
							<ul>
								<li>
									<a href="#"><img className="lf_m1" src="img/pic_001.jpg" alt=""/></a>
								</li>
								<li className="lf_xinlang"><a href="#"><img className="lf_m1" src="img/pic_002.jpg" alt="" /></a></li>
								<li className="lf_weixin"><a href="#" title="分享到微信"></a></li>
								<li className="lf_word"><a href="#">Chinese</a>|</li>
								<li className="lf_word"><a href="#">English</a></li>
							</ul>
						</div>
						
					</div>
				<div className="container">
					<div className="lf_logo">
						<a href="index.html"><img src="img/logo.png" alt="" /></a>
					</div>
				</div>
				<div className="lf_nav">
					<div className="container">
						<ul className="nav navbar-nav navtab">
				            <li className="active"><a href="index.html">首页</a></li>
				            <li><a href="about.html">关于普朗</a></li>
				            <li><a href="caseshow.html">全球动态</a></li>
				            <li><a href="news.html">新闻案例</a></li>
				            <li><a href="callme.html">联系我们</a></li>
				        </ul>
					</div>
					
				</div>		
			</div>
		)
	},
})
module.exports = Head