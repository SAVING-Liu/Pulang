var React = require('react');

var Wthy = React.createClass({
	render:function(){
		return(	
			<div>
			<h2 className="wt-h2">会议活动</h2>
		<div className="box">
		
			<div className="box-inner">
				<div className="inner1">
					<dl>
						<dt><img src="img/20150716135009.jpg"/></dt>
						<dd><i>哈根达斯</i><span>中国</span>
							<em>会议中心</em> </dd>
						<div className="dingwei">
							<span>哈根达斯</span><br/>
							<span>展台面积：平米</span><br/>
							<span>展会时间：2013-05-04年</span><br/>
							<span>2010中秋推荐会</span><br/>
							
						</div>
					</dl>
					<dl>
						<dt><img src="img/20150716134852.jpg"/></dt>
						<dd><i>内蒙古伊利集团有限公司</i> </dd>
						<div className="dingwei">
							<span>内蒙古伊利集团有限公司</span><br/>
							<span>展台面积：平米</span><br/>
							<span>展会时间：2013-1-16</span><br/>
							<span>展会名称：200家伊利大大型超市品牌推广</span><br/>
							
						</div>
					</dl>
					<dl>
						<dt><img src="img/20150716134730.jpg"/></dt>
						<dd><i>中国食品协会</i> <span>中国</span>
							<em>会议中心</em></dd>
						<div className="dingwei">
							<span>中国食品协会</span><br/>
							<span>展台面积：平米</span><br/>
							<span>展会时间：2011-05-07</span><br/>
							<span>中国第十四届食品会议</span><br/>
							
						</div>
					</dl>
					
					
					</div>
					</div>
						
					</div>
					</div>
		
			
		)
	}
})
module.exports = Wthy