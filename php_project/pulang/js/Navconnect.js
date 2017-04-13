var React = require('react');
var Xmessage = require("./Xmessage.js")
var Xour = require("./Xour.js")
var Xdingdan = require("./Xdingdan.js")
var Navconnect = React.createClass({
	render: function() {
		var str = {
			str1: {background: 'url(img/bg4.jpg) no-repeat center top'},
			str2: {width: '33%'}
		};		
		return(
			<div className="lfNav" style={str.str1}>
				
				<div className="tabbable">
						<div className="lfNav-wrapper">
							<div className="container">
								<ul className="nav nav-tabs lf_nav2">
									<li style={str.str2} className="active"><a data-toggle="tab" href="#panel1">联系我们</a></li>
									<li style={str.str2}><a data-toggle="tab" href="#panel2">留言反馈</a></li>
									<li style={str.str2}><a data-toggle="tab" href="#panel3">在线订单</a></li>
								</ul>
							</div>
						</div>
						
						<div className="container">
							<div id="myTabContent" className="tab-content">
								<div className="tab-pane active" id="panel1">
									<Xour/>
								</div>
								
								<div className="tab-pane" id="panel2">
									<Xmessage/>
								</div>
								<div className="tab-pane" id="panel3">
									<Xdingdan/>
								</div>
							
							</div>
						</div>

					
				</div>
			</div>
		)
	}		
})			
		
		
	

module.exports = Navconnect