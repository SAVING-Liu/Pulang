var React = require('react');
var Wuliu = require('./Wuliu.js')
var QY = require("./wt-qy.js")
var Yiye =require("./enterprise.js")
var Wsnfa = require("./wsn2.js")
var Wsnfb = require("./wsn3.js")
var Nav = React.createClass({
	render:function(){
		return(
			<div className="lfNav">
				
				<div className="tabbable">
						<div className="lfNav-wrapper">
							<div className="container">
								<ul style={{"font": "normal 14px/50px '微软雅黑'"}}  className="nav nav-tabs lf_nav2">
								<li className="active"><a data-toggle="tab" href="#panel1">企业简介</a></li>
								<li><a data-toggle="tab" href="#panel2">企业文化</a></li>
								<li><a data-toggle="tab" href="#panel3">荣誉和发展历程</a></li>
								<li><a data-toggle="tab" href="#panel4">普朗GES</a></li>
								<li><a data-toggle="tab" href="#panel5">普朗物流</a></li>
							</ul>
							</div>
						</div>
						
						<div className="container">
							<div id="myTabContent" className="tab-content">
								<div className="tab-pane active" id="panel1">
									<Yiye/>
								</div>
								
								<div className="tab-pane" id="panel2">
									<QY/>
								</div>
								<div className="tab-pane" id="panel3">
									<Wsnfa/>
								</div>
								<div className="tab-pane" id="panel4">
									<Wsnfb/>
								</div>
								<div className="tab-pane" id="panel5">
									<Wuliu/>
								</div>
							
							</div>
						</div>

					
				</div>
			</div>
		)
	}
})
module.exports = Nav