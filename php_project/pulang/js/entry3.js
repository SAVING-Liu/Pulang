var React = require("react")
var ReactDOM = require("react-dom")
var Head = require("./Head.js")
var News = require("./News.js")
var Foot = require("./Foot.js")
var Navcase = require("./Navcase.js")
var Xgang = require("./Xgang.js")
var Wtqq = require("./wt-qq.js")
var Wtzt = require("./wt-zt.js")
var Wtka = require("./wt-ka.js")
var Wthy = require("./wt-hy.js")
var Xgang = require("./Xgang.js")

var X = React.createClass({
			render:function(){
				return(
					<div>
						<Head/>
						<Navcase/>
						<Foot/>											
					</div>
				)
			}
		})
ReactDOM.render(<X/>,document.getElementById("out"))