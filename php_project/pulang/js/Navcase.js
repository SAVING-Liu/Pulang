var React = require('react');
var Wtqq = require("./wt-qq.js")
var Wtzt = require("./wt-zt.js")
var Wtka = require("./wt-ka.js")
var Wthy = require("./wt-hy.js")
var Xgang = require("./Xgang.js")

var Navcase = React.createClass({
	render:function(){
		var str={
				str1:{
					background:'url(img/bg2.jpg) no-repeat center top'
				},
				str2:{
					width:'25%'
				}
		}
		return(
			<div className="lfNav" style={str.str1}>
				
				<div className="tabbable">
						<div className="lfNav-wrapper">
							<div className="container">
								<ul className="nav nav-tabs lf_nav2">
									<li style={str.str2} className="active"><a data-toggle="tab" href="#panel1">全球展览</a></li>
									<li style={str.str2}><a data-toggle="tab" href="#panel2">展厅博物馆</a></li>
									<li style={str.str2}><a data-toggle="tab" href="#panel3">商场专卖KA</a></li>
									<li style={str.str2}><a data-toggle="tab" href="#panel4">会议活动</a></li>
								</ul>
							</div>
						</div>
						
						<div className="container">
							<div id="myTabContent" className="tab-content">
								<div className="tab-pane active" id="panel1">
									<Xgang/><Wtqq/>
								</div>									
								<div className="tab-pane" id="panel2">
									<Wtzt/>
								</div>
								<div className="tab-pane" id="panel3">
									<Wtka/>
								</div>
								<div className="tab-pane" id="panel4">
									<Wthy/>
									
								</div>
							</div>
						</div>

					
				</div>
				<div style={{clear:"both"}}></div>
			</div>
		)
	}
})
module.exports = Navcase

