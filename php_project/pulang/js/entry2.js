var React = require("react")
var ReactDOM = require("react-dom")
/*头部组件*/
var Head = require("./Head.js")
/*导航组件*/
var Nav = require("./Nav.js")
/*选项卡组件*/
var QY = require("./wt-qy.js")
var Yiye = require("./enterprise.js")
var Xproduce = require("./Xproduce.js")
var Wsnfa = require("./wsn2.js")
var Wsnfb = require("./wsn3.js")
/*脚部组建*/
var Foot = require("./Foot.js")
var X = React.createClass({
			render:function(){
				return(
					<div>
						<Head/>
						<Nav/>
						<Foot/>
					</div>
				)
			}
		})
ReactDOM.render(<X/>,document.getElementById("out"))