var React = require("react")
var ReactDOM = require("react-dom")
var Head = require("./Head.js")
var News = require("./News.js")
var Foot = require("./Foot.js")
var Banner =require("./index-banner.js")
var Sever = require("./wt-sever.js")
var List =  require("./wsn.js")
var X = React.createClass({
			render:function(){
				return(
					<div>
						<Head/ >
						<Banner/>
						<Sever/>
						<News/>
						<List/>
						<Foot/>						
					</div>
				)
			}
		})
ReactDOM.render(<X/>,document.getElementById("out"))