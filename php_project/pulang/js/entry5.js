var React = require("react")
var ReactDOM = require("react-dom")
var Head = require("./Head.js")
var Foot = require("./Foot.js")
var Navconnect = require("./Navconnect.js")
var Xmessage = require("./Xmessage.js")
var Xour = require("./Xour.js")
var Xdingdan = require("./Xdingdan.js")
var X = React.createClass({
			render:function(){
				return(
					<div>
						<Head/>
						<Navconnect/>
						<Foot/>											
					</div>
				)
			}
		})
ReactDOM.render(<X/>,document.getElementById("out"))