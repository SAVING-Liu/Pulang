var React = require("react")
var ReactDOM = require("react-dom")
var Head = require("./Head.js")
var Foot = require("./Foot.js")
var Xinxi = require("./xinxi.js")
var Navnews = require("./Navnews.js")
var Plnew = require("./wt-plnew.js")
var Hynew = require("./wt-hynew.js")
var X = React.createClass({
			render:function(){
				return(
					<div>
						<Head/>
						<Navnews/>
						<Foot/>											
					</div>
				)
			}
		})
ReactDOM.render(<X/>,document.getElementById("out"))