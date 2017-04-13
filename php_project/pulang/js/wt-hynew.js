var React = require('react')
var Hynew = React.createClass({
			render:function(){
				return(
					<div>
						<h2>行业新闻</h2>
		<div className="hangye">
			<div className="hangye-inner">
				<div className="hang-left">
				<ul>
					<li><p>2017</p></li>
					
					<li><p>2015</p></li>
					
					<li><p>2013</p></li>
				</ul>
				
			</div>
			<div className="hang-right">
				<ul>
					<li>
						<img src="img/pic_011.jpg" alt="" />
						<span style={{"font": "normal 14px/26px 'Microsoft Yahei'"}}>
普朗公司2016年会-盛大举行</span><br/>
						<time  style={{"color": "#c2c2c2",
    "font": "normal 14px/26px 'Microsoft Yahei'"}}>2017-01-11</time>
						<p>德国普朗希望帮助更多的客户能在CES上获得更大的成功！电子消费展展台设计搭建选德国普朗，德国普朗值得您的信赖！</p>
					</li>
					<li>
						<img src="img/pic_012.jpg" alt="" />
						<span style={{"font": "normal 14px/26px 'Microsoft Yahei'"}}>

普朗展览原创-如何做国际品质的展台</span><br/>
						<time  style={{"color": "#c2c2c2",
    "font": "normal 14px/26px 'Microsoft Yahei'"}}>2015-08-28</time>
						<p>如今的展览市场可谓非常巨大，是企业展示品牌形象、推广产品、拓展市场的重要渠道之一，..........</p>
					</li>
					<li>
						<img src="img/pic_013.jpg" alt="" />
						<span style={{"font": "normal 14px/26px 'Microsoft Yahei'"}}>

参展必备之：展会宣传的“七种武器”</span><br/>
						<time  style={{"color": "#c2c2c2",
    "font": "normal 14px/26px 'Microsoft Yahei'"}}>2015-08-13</time>
						<p>参展，向来是“产品打市场、企业探市场”的康庄大道。说起参展好像不外乎是“选个展会，搭个展位，放本资料等着签单。”..........</p>
					</li>
					</ul>
				
			</div>
			</div>
			
			
		</div>

					</div>
				)
			}
		})
module.exports = Hynew