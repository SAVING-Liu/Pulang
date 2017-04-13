var React = require('react');
var Xinxi = require("./xinxi.js")
var Plnew = require("./wt-plnew.js")
var Hynew = require("./wt-hynew.js")
var Navnews = React.createClass({
	render:function(){
		var str={
				str1:{
					background:'url(img/bg3.jpg) no-repeat center top',
					backgroundSize:"100% 350px"
				},
				str2:{
					width:'33%'
				}
		}
		return(
			<div className="lfNav" style={str.str1}>
				
				<div className="tabbable">
						<div className="lfNav-wrapper">
							<div className="container">
								<ul className="nav nav-tabs lf_nav2">
									<li style={str.str2} className="active"><a data-toggle="tab" href="#panel1">普朗新闻</a></li>
									<li style={str.str2}><a data-toggle="tab" href="#panel2">行业新闻</a></li>
									<li style={str.str2}><a data-toggle="tab" href="#panel3">招聘信息</a></li>
								</ul>
							</div>
						</div>
						
						<div className="container">
							<div id="myTabContent" className="tab-content">
								<div className="tab-pane active" id="panel1">
									<Plnew/>
								</div>
								
								<div className="tab-pane" id="panel2">
									<Hynew/>
								</div>
								<div className="tab-pane" id="panel3">
									<Xinxi/>
								</div>
							
							</div>
						</div>

					
				</div>
			</div>
		)
	}
})
module.exports = Navnews
